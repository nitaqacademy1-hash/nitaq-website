"""
Diagnostics API — quiz questions, answer submission, section completion, results.
All endpoints require a valid session_token (passed as query param or header).
"""

from datetime import datetime, timezone
from typing import Optional

from fastapi import APIRouter, Depends, Header, HTTPException, Query, status
from sqlalchemy.orm import Session, joinedload

from app.core.database import get_db
from app.models.diagnostic import DiagnosticSession, SessionStatus, CurrentSection
from app.models.question import (
    DiagnosticTestQuestion,
    Question,
    Section,
)
from app.models.answer import StudentAnswer
from app.models.result import DiagnosticResult, DomainResult
from app.schemas.diagnostic import (
    BulkAnswerSubmit,
    SectionQuestionsResponse,
    SectionCompleteResponse,
)
from app.schemas.question import QuestionPublic
from app.schemas.result import DiagnosticResultResponse
from app.services.scoring_service import compute_scores
from app.services.recommendation_service import get_recommendations

router = APIRouter(prefix="/diagnostic", tags=["diagnostic"])


# ── Helper: resolve session from token ────────────────────────────────────────
def _get_session(token: str, db: Session) -> DiagnosticSession:
    session = (
        db.query(DiagnosticSession)
        .filter(DiagnosticSession.session_token == token)
        .first()
    )
    if not session:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Session not found")
    return session


# ── GET questions for a section ───────────────────────────────────────────────
@router.get("/questions/{section}", response_model=SectionQuestionsResponse)
def get_section_questions(
    section: Section,
    session_token: str = Query(..., description="Student session token"),
    db: Session = Depends(get_db),
):
    """
    Returns the ordered questions for the given section.
    Call this to display Math questions (MATH) then Reading & Writing (READING_WRITING).
    """
    session = _get_session(session_token, db)

    # Mark session as started on first fetch
    if session.status == SessionStatus.NOT_STARTED:
        session.status = SessionStatus.IN_PROGRESS
        session.started_at = datetime.now(timezone.utc)
        session.current_section = CurrentSection.MATH
        db.commit()

    # Fetch ordered questions for this section
    test_questions = (
        db.query(DiagnosticTestQuestion)
        .join(Question)
        .filter(
            DiagnosticTestQuestion.test_id == session.test_id,
            Question.section == section,
            Question.is_active == True,
        )
        .order_by(DiagnosticTestQuestion.question_order)
        .options(joinedload(DiagnosticTestQuestion.question))
        .all()
    )

    questions = []
    for tq in test_questions:
        q = QuestionPublic.model_validate(tq.question)
        q.question_order = tq.question_order
        questions.append(q)

    return SectionQuestionsResponse(section=section, questions=questions)


# ── POST bulk answers for a section ──────────────────────────────────────────
@router.post("/submit-section", response_model=SectionCompleteResponse)
def submit_section(
    payload: BulkAnswerSubmit,
    session_token: str = Query(..., description="Student session token"),
    db: Session = Depends(get_db),
):
    """
    Submit all answers for a section at once.
    For Math: transitions session to MATH_COMPLETED.
    For Reading & Writing: transitions to COMPLETED and triggers scoring.
    """
    session = _get_session(session_token, db)

    if session.status == SessionStatus.COMPLETED:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This diagnostic session is already completed.",
        )
    if session.status == SessionStatus.ABANDONED:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="This session has been abandoned.",
        )

    # Validate all submitted question IDs belong to this test+section
    valid_q_ids = {
        tq.question_id
        for tq in db.query(DiagnosticTestQuestion).join(Question).filter(
            DiagnosticTestQuestion.test_id == session.test_id,
            Question.section == payload.section,
        ).all()
    }

    # Fetch correct answers in bulk
    questions_map: dict[int, Question] = {
        q.id: q
        for q in db.query(Question).filter(Question.id.in_(valid_q_ids)).all()
    }

    saved_answers = []
    math_score = None
    math_total = None

    for ans in payload.answers:
        if ans.question_id not in valid_q_ids:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail=f"Question {ans.question_id} does not belong to section {payload.section.value}",
            )
        q = questions_map[ans.question_id]
        is_correct = ans.selected_answer == q.correct_answer

        student_answer = StudentAnswer(
            session_id=session.id,
            question_id=ans.question_id,
            selected_answer=ans.selected_answer,
            is_correct=is_correct,
        )
        db.add(student_answer)
        saved_answers.append(student_answer)

    # Calculate section score
    now = datetime.now(timezone.utc)
    correct_count = sum(1 for a in payload.answers if questions_map[a.question_id].correct_answer == a.selected_answer)
    section_score = correct_count
    section_total = len(payload.answers)
    math_score = None
    math_total = None

    if payload.section == Section.MATH:
        session.math_completed_at = now
        math_score = section_score
        math_total = section_total
    else:
        session.reading_writing_completed_at = now

    # Check if both sections are completed
    is_fully_completed = (session.math_completed_at is not None) and (session.reading_writing_completed_at is not None)

    if is_fully_completed:
        session.status = SessionStatus.COMPLETED
        session.completed_at = now
        # Trigger full scoring & domain breakdowns
        _compute_and_save_results(session, db)
    else:
        session.status = SessionStatus.MATH_COMPLETED if payload.section == Section.MATH else SessionStatus.IN_PROGRESS
        session.current_section = CurrentSection.READING_WRITING if payload.section == Section.MATH else CurrentSection.MATH

    db.commit()

    return SectionCompleteResponse(
        session_id=session.id,
        session_status=session.status,
        section=payload.section,
        section_score=section_score,
        section_total=section_total,
        math_score=math_score,
        math_total=math_total,
    )


def _compute_and_save_results(session: DiagnosticSession, db: Session):
    """Compute scores and persist DiagnosticResult + DomainResult rows idempotently."""
    db.flush()

    # Check if a result already exists for this session (idempotency)
    existing_result = (
        db.query(DiagnosticResult)
        .filter(DiagnosticResult.session_id == session.id)
        .first()
    )
    if existing_result:
        return existing_result

    # Fetch all answers with their questions
    answers = (
        db.query(StudentAnswer)
        .options(joinedload(StudentAnswer.question))
        .filter(StudentAnswer.session_id == session.id)
        .all()
    )

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
        for a in answers
    ]

    scores = compute_scores(rows)

    result = DiagnosticResult(
        session_id=session.id,
        total_score=scores["total_score"],
        math_score=scores["math_score"],
        reading_writing_score=scores["reading_writing_score"],
        total_questions=scores["total_questions"],
    )
    db.add(result)
    db.flush()

    for dr in scores["domain_results"]:
        db.add(
            DomainResult(
                result_id=result.id,
                section=dr.section,
                domain=dr.domain,
                correct_count=dr.correct_count,
                total_questions=dr.total_questions,
                percentage=dr.percentage,
                status=dr.status,
            )
        )
    return result


# ── GET results ───────────────────────────────────────────────────────────────
@router.get("/results", response_model=DiagnosticResultResponse)
def get_results(
    session_token: str = Query(..., description="Student session token"),
    db: Session = Depends(get_db),
):
    """
    Returns the full diagnostic result after the test is completed.
    This endpoint is called to render the results page.
    """
    session = _get_session(session_token, db)

    if session.status != SessionStatus.COMPLETED:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Diagnostic session is not yet completed.",
        )

    result = (
        db.query(DiagnosticResult)
        .options(joinedload(DiagnosticResult.domain_results))
        .filter(DiagnosticResult.session_id == session.id)
        .first()
    )
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Result not found.")

    # Re-fetch answers for missed questions list
    answers = (
        db.query(StudentAnswer)
        .options(joinedload(StudentAnswer.question))
        .filter(StudentAnswer.session_id == session.id)
        .all()
    )
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
        for a in answers
    ]
    scores = compute_scores(rows)
    recommendations = get_recommendations(db, result.domain_results)

    return DiagnosticResultResponse(
        session_id=session.id,
        student_name=session.student.full_name,
        total_score=result.total_score,
        total_questions=result.total_questions,
        math_score=result.math_score,
        reading_writing_score=result.reading_writing_score,
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
