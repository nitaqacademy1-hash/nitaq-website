"""Students API — registration, deduplication, return session token."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import generate_session_token
from app.models.student import Student
from app.models.question import DiagnosticTest, TestStatus
from app.models.diagnostic import DiagnosticSession, SessionStatus
from app.schemas.student import StudentCreate, StudentPublic
from app.schemas.diagnostic import SessionStartResponse

router = APIRouter(prefix="/students", tags=["students"])


@router.post("/register", response_model=SessionStartResponse, status_code=status.HTTP_201_CREATED)
def register_student(payload: StudentCreate, db: Session = Depends(get_db)):
    """
    Register a student and create a new diagnostic session.
    If the email already exists, creates a new session for the same student.
    Returns session_token (used for all subsequent quiz API calls).
    """
    # Get or create student
    student = db.query(Student).filter(Student.email == payload.email.lower()).first()
    if not student:
        student = Student(
            full_name=payload.full_name,
            email=payload.email.lower(),
            phone=payload.phone,
            current_grade=payload.current_grade,
            current_status=payload.current_status,
            target_sat_score=payload.target_sat_score,
            sat_test_date=payload.sat_test_date,
        )
        db.add(student)
        db.flush()  # get student.id before committing

    # Find the active diagnostic test
    test = (
        db.query(DiagnosticTest)
        .filter(DiagnosticTest.status == TestStatus.ACTIVE)
        .order_by(DiagnosticTest.version.desc())
        .first()
    )
    if not test:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="No active diagnostic test is available. Please try again later.",
        )

    # Create new session
    session = DiagnosticSession(
        student_id=student.id,
        test_id=test.id,
        session_token=generate_session_token(),
        status=SessionStatus.NOT_STARTED,
    )
    db.add(session)
    db.commit()
    db.refresh(session)

    return SessionStartResponse(
        session_token=session.session_token,
        session_id=session.id,
        student=StudentPublic.model_validate(student),
        test_id=test.id,
    )
