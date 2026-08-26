"""Admin question management API (CRUD)."""

from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import get_current_admin
from app.models.question import (
    Question, DiagnosticTest, DiagnosticTestQuestion, Section, Domain, TestStatus
)
from app.schemas.question import QuestionCreate, QuestionUpdate, QuestionFull

router = APIRouter(prefix="/admin/questions", tags=["admin-questions"])


@router.get("", response_model=list[QuestionFull])
@router.get("/", response_model=list[QuestionFull])
def list_questions(
    section: Section | None = None,
    domain: Domain | None = None,
    skip: int = 0,
    limit: int = 100,
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    q = db.query(Question)
    if section:
        q = q.filter(Question.section == section)
    if domain:
        q = q.filter(Question.domain == domain)
    return q.order_by(Question.id).offset(skip).limit(limit).all()


@router.post("", response_model=QuestionFull, status_code=status.HTTP_201_CREATED)
@router.post("/", response_model=QuestionFull, status_code=status.HTTP_201_CREATED)
def create_question(payload: QuestionCreate, admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    existing = db.query(Question).filter(Question.question_code == payload.question_code).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Question code '{payload.question_code}' already exists",
        )
    question = Question(**payload.model_dump())
    db.add(question)
    db.flush()

    # Automatically link to the active DiagnosticTest
    active_test = db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).first()
    if active_test:
        order_count = db.query(DiagnosticTestQuestion).filter(DiagnosticTestQuestion.test_id == active_test.id).count()
        tq = DiagnosticTestQuestion(
            test_id=active_test.id,
            question_id=question.id,
            question_order=order_count + 1
        )
        db.add(tq)

    db.commit()
    db.refresh(question)
    return question


@router.get("/{question_id}", response_model=QuestionFull)
def get_question(question_id: int, admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    q = db.query(Question).filter(Question.id == question_id).first()
    if not q:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Question not found")
    return q


@router.patch("/{question_id}", response_model=QuestionFull)
def update_question(
    question_id: int,
    payload: QuestionUpdate,
    admin=Depends(get_current_admin),
    db: Session = Depends(get_db),
):
    q = db.query(Question).filter(Question.id == question_id).first()
    if not q:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Question not found")
    for field, value in payload.model_dump(exclude_none=True).items():
        setattr(q, field, value)
    db.commit()
    db.refresh(q)
    return q


@router.delete("/{question_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_question(question_id: int, admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    q = db.query(Question).filter(Question.id == question_id).first()
    if not q:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Question not found")
    db.delete(q)
    db.commit()


# ── Diagnostic Test management ─────────────────────────────────────────────────
tests_router = APIRouter(prefix="/admin/tests", tags=["admin-tests"])


@tests_router.get("/", response_model=list[dict])
def list_tests(admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    tests = db.query(DiagnosticTest).all()
    return [
        {
            "id": t.id,
            "name": t.name,
            "version": t.version,
            "status": t.status,
            "question_count": len(t.test_questions),
        }
        for t in tests
    ]


@tests_router.post("/{test_id}/activate", status_code=status.HTTP_200_OK)
def activate_test(test_id: int, admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    """Set a test as active and archive all others."""
    test = db.query(DiagnosticTest).filter(DiagnosticTest.id == test_id).first()
    if not test:
        raise HTTPException(status_code=404, detail="Test not found")
    db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).update(
        {"status": TestStatus.ARCHIVED}
    )
    test.status = TestStatus.ACTIVE
    db.commit()
    return {"message": f"Test '{test.name}' is now active."}


@tests_router.get("/shuffle-setting", status_code=status.HTTP_200_OK)
def get_shuffle_setting(admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    """Get shuffle_questions setting for the active diagnostic test."""
    test = db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).first()
    if not test:
        test = db.query(DiagnosticTest).first()
    shuffle_val = getattr(test, "shuffle_questions", False) if test else False
    return {"shuffle_questions": shuffle_val}


@tests_router.post("/toggle-shuffle", status_code=status.HTTP_200_OK)
def toggle_shuffle_setting(admin=Depends(get_current_admin), db: Session = Depends(get_db)):
    """Toggle shuffle_questions setting for the active diagnostic test."""
    test = db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).first()
    if not test:
        test = db.query(DiagnosticTest).first()
    if not test:
        raise HTTPException(status_code=404, detail="No diagnostic test found.")

    current_val = getattr(test, "shuffle_questions", False)
    test.shuffle_questions = not current_val
    db.commit()
    db.refresh(test)
    return {"shuffle_questions": test.shuffle_questions, "message": f"Questions shuffle set to {test.shuffle_questions}"}
