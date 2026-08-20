"""Admin analytics + student management API."""

from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query, Response, status
from sqlalchemy import func, desc
from sqlalchemy.orm import Session, joinedload

from app.core.database import get_db
from app.core.security import get_current_admin
from app.models.student import Student
from app.models.diagnostic import DiagnosticSession, SessionStatus, LeadStatus
from app.models.result import DiagnosticResult, DomainResult
from app.models.question import Domain
from app.schemas.diagnostic import SessionListItem, LeadStatusUpdate
from app.schemas.admin import AnalyticsSummary
from app.schemas.result import AdminResultResponse
from app.services.scoring_service import compute_scores
from app.services.recommendation_service import get_recommendations
from app.models.answer import StudentAnswer

router = APIRouter(prefix="/admin", tags=["admin-analytics"])


# ── Dashboard summary ─────────────────────────────────────────────────────────
@router.get("/analytics/summary", response_model=AnalyticsSummary)
def analytics_summary(admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    total_students = db.query(func.count(Student.id)).scalar() or 0
    total_sessions = db.query(func.count(DiagnosticSession.id)).scalar() or 0
    completed = (
        db.query(func.count(DiagnosticSession.id))
        .filter(DiagnosticSession.status == SessionStatus.COMPLETED)
        .scalar() or 0
    )
    in_progress = (
        db.query(func.count(DiagnosticSession.id))
        .filter(DiagnosticSession.status.in_([SessionStatus.IN_PROGRESS, SessionStatus.MATH_COMPLETED]))
        .scalar() or 0
    )
    new_leads = (
        db.query(func.count(DiagnosticSession.id))
        .filter(DiagnosticSession.lead_status == LeadStatus.NEW)
        .scalar() or 0
    )
    enrolled_leads = (
        db.query(func.count(DiagnosticSession.id))
        .filter(DiagnosticSession.lead_status == LeadStatus.ENROLLED)
        .scalar() or 0
    )

    # Score averages from completed results
    avg_total = db.query(func.avg(DiagnosticResult.total_score)).scalar() or 0.0
    avg_math = db.query(func.avg(DiagnosticResult.math_score)).scalar() or 0.0
    avg_rw = db.query(func.avg(DiagnosticResult.reading_writing_score)).scalar() or 0.0

    # Domain averages
    domain_averages = {}
    for domain in Domain:
        avg = (
            db.query(func.avg(DomainResult.correct_count))
            .filter(DomainResult.domain == domain)
            .scalar()
        )
        domain_averages[domain.value] = round(float(avg or 0), 2)

    completion_rate = round(completed / total_sessions * 100, 1) if total_sessions else 0.0

    return AnalyticsSummary(
        total_students=total_students,
        total_sessions=total_sessions,
        completed_sessions=completed,
        in_progress_sessions=in_progress,
        completion_rate=completion_rate,
        avg_total_score=round(float(avg_total), 2),
        avg_math_score=round(float(avg_math), 2),
        avg_rw_score=round(float(avg_rw), 2),
        new_leads=new_leads,
        enrolled_leads=enrolled_leads,
        domain_averages=domain_averages,
    )


# ── Student list ──────────────────────────────────────────────────────────────
@router.get("/students", response_model=list[SessionListItem])
def list_students(
    status_filter: Optional[SessionStatus] = None,
    lead_filter: Optional[LeadStatus] = None,
    skip: int = Query(0, ge=0),
    limit: int = Query(50, le=200),
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    q = (
        db.query(DiagnosticSession)
        .options(joinedload(DiagnosticSession.student), joinedload(DiagnosticSession.result))
        .order_by(desc(DiagnosticSession.created_at))
    )
    if status_filter:
        q = q.filter(DiagnosticSession.status == status_filter)
    if lead_filter:
        q = q.filter(DiagnosticSession.lead_status == lead_filter)

    sessions = q.offset(skip).limit(limit).all()

    items = []
    for s in sessions:
        items.append(
            SessionListItem(
                id=s.id,
                session_token=s.session_token,
                student_id=s.student_id,
                student_name=s.student.full_name,
                student_email=s.student.email,
                student_phone=s.student.phone,
                current_grade=s.student.current_grade,
                target_sat_score=s.student.target_sat_score.value,
                status=s.status,
                lead_status=s.lead_status,
                started_at=s.started_at,
                completed_at=s.completed_at,
                total_score=s.result.total_score if s.result else None,
                created_at=s.created_at,
            )
        )
    return items


# ── Single student result (admin view) ────────────────────────────────────────
@router.get("/students/{session_id}/result", response_model=AdminResultResponse)
def get_student_result(
    session_id: int,
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    session = (
        db.query(DiagnosticSession)
        .options(
            joinedload(DiagnosticSession.student),
            joinedload(DiagnosticSession.result).joinedload(DiagnosticResult.domain_results),
            joinedload(DiagnosticSession.answers).joinedload(StudentAnswer.question),
        )
        .filter(DiagnosticSession.id == session_id)
        .first()
    )
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    if not session.result:
        raise HTTPException(status_code=404, detail="No result yet for this session")

    rows = [
        {
            "question_id": a.question_id,
            "question_code": a.question.question_code,
            "section": a.question.section,
            "domain": a.question.domain,
            "question_text": a.question.question_text,
            "option_a": a.question.option_a,
            "option_b": a.question.option_b,
            "option_c": a.question.option_c,
            "option_d": a.question.option_d,
            "correct_answer": a.question.correct_answer,
            "explanation": a.question.explanation,
            "selected_answer": a.selected_answer,
            "is_correct": a.is_correct,
        }
        for a in session.answers
    ]
    scores = compute_scores(rows)
    recommendations = get_recommendations(db, session.result.domain_results)

    return AdminResultResponse(
        session_id=session.id,
        student_name=session.student.full_name,
        student_email=session.student.email,
        student_phone=session.student.phone,
        student_grade=session.student.current_grade,
        target_sat_score=session.student.target_sat_score.value,
        lead_status=session.lead_status.value,
        total_score=session.result.total_score,
        total_questions=session.result.total_questions,
        math_score=session.result.math_score,
        reading_writing_score=session.result.reading_writing_score,
        percentage=scores["percentage"],
        domain_results=scores["domain_results"],
        missed_questions=scores["missed_questions"],
        question_reviews=scores["question_reviews"],
        recommendations=recommendations,
        strong_domains=scores["strong_domains"],
        developing_domains=scores["developing_domains"],
        review_domains=scores["review_domains"],
        overall_band=scores["overall_band"],
        estimated_sat_score=scores["estimated_sat_score"],
    )


# ── Update lead status ─────────────────────────────────────────────────────────
@router.patch("/students/{session_id}/lead-status", response_model=dict)
def update_lead_status(
    session_id: int,
    payload: LeadStatusUpdate,
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    session = db.query(DiagnosticSession).filter(DiagnosticSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")
    session.lead_status = payload.lead_status
    db.commit()
    return {"message": "Lead status updated", "lead_status": payload.lead_status.value}


# ── Delete student session record ─────────────────────────────────────────────
@router.delete("/students/{session_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_student_session(
    session_id: int,
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    session = db.query(DiagnosticSession).filter(DiagnosticSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Student session not found")

    student_id = session.student_id

    # Delete results & domain results
    result = db.query(DiagnosticResult).filter(DiagnosticResult.session_id == session.id).first()
    if result:
        db.query(DomainResult).filter(DomainResult.result_id == result.id).delete()
        db.delete(result)

    # Delete student answers
    db.query(StudentAnswer).filter(StudentAnswer.session_id == session.id).delete()

    # Delete session
    db.delete(session)
    db.flush()

    # Delete student if no other sessions remain
    other_sessions = db.query(DiagnosticSession).filter(DiagnosticSession.student_id == student_id).count()
    if other_sessions == 0:
        db.query(Student).filter(Student.id == student_id).delete()

    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)


# ── CSV export ────────────────────────────────────────────────────────────────
@router.get("/students/export/csv")
def export_students_csv(
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    import csv, io
    sessions = (
        db.query(DiagnosticSession)
        .options(joinedload(DiagnosticSession.student), joinedload(DiagnosticSession.result))
        .order_by(desc(DiagnosticSession.created_at))
        .all()
    )
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([
        "session_id", "student_name", "email", "phone", "grade",
        "target_score", "status", "lead_status",
        "total_score", "math_score", "rw_score",
        "started_at", "completed_at", "registered_at"
    ])
    for s in sessions:
        writer.writerow([
            s.id,
            s.student.full_name,
            s.student.email,
            s.student.phone,
            s.student.current_grade,
            s.student.target_sat_score.value,
            s.status.value,
            s.lead_status.value,
            s.result.total_score if s.result else "",
            s.result.math_score if s.result else "",
            s.result.reading_writing_score if s.result else "",
            s.started_at.isoformat() if s.started_at else "",
            s.completed_at.isoformat() if s.completed_at else "",
            s.created_at.isoformat(),
        ])
    content = output.getvalue()
    return Response(
        content=content,
        media_type="text/csv",
        headers={"Content-Disposition": "attachment; filename=nitaq_sat_diagnostic_leads.csv"},
    )
