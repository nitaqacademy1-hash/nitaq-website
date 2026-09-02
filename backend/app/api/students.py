"""Students API — registration, deduplication, return session token or prompt resume."""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.security import generate_session_token
from app.models.student import Student
from app.models.parent_enquiry import ParentEnquiry
from app.models.question import DiagnosticTest, TestStatus
from app.models.diagnostic import DiagnosticSession, SessionStatus
from app.schemas.student import StudentCreate, StudentPublic
from app.schemas.parent_enquiry import ParentEnquiryCreate, ParentEnquiryResponse
from app.schemas.diagnostic import SessionStartResponse, ExistingSessionInfo

router = APIRouter(prefix="/students", tags=["students"])


@router.post("/register", response_model=SessionStartResponse, status_code=status.HTTP_201_CREATED)
def register_student(payload: StudentCreate, db: Session = Depends(get_db)):
    """
    Register or identify a student by email/phone.
    If an existing session is found and no action (resume/new) is specified,
    returns existing_session_found=True so the frontend can prompt the student.
    """
    # 1. Find existing student by email or phone
    student = (
        db.query(Student)
        .filter(
            (Student.email == payload.email.lower()) | (Student.phone == payload.phone)
        )
        .first()
    )

    if student:
        # Update details safely
        try:
            student.full_name = payload.full_name
            student.current_grade = payload.current_grade
            student.current_status = payload.current_status
            student.target_sat_score = payload.target_sat_score
            if payload.sat_test_date:
                student.sat_test_date = payload.sat_test_date
            if payload.utm_source:
                student.utm_source = payload.utm_source
            if payload.utm_medium:
                student.utm_medium = payload.utm_medium
            if payload.utm_campaign:
                student.utm_campaign = payload.utm_campaign
            if payload.utm_content:
                student.utm_content = payload.utm_content
            if payload.utm_term:
                student.utm_term = payload.utm_term
            db.flush()
        except Exception:
            db.rollback()
            student = (
                db.query(Student)
                .filter(
                    (Student.email == payload.email.lower()) | (Student.phone == payload.phone)
                )
                .first()
            )

        # Find student's most recent diagnostic session
        latest_session = (
            db.query(DiagnosticSession)
            .filter(DiagnosticSession.student_id == student.id)
            .order_by(DiagnosticSession.created_at.desc())
            .first()
        )

        if latest_session:
            answered_count = len(latest_session.answers) if latest_session.answers else 0
            sec_val = latest_session.current_section.value if latest_session.current_section else None
            existing_info = ExistingSessionInfo(
                session_token=latest_session.session_token,
                session_id=latest_session.id,
                status=latest_session.status,
                current_section=sec_val,
                answered_count=answered_count,
                created_at=latest_session.created_at,
            )

            # If payload explicitly requests "resume"
            if payload.action == "resume":
                db.commit()
                return SessionStartResponse(
                    session_token=latest_session.session_token,
                    session_id=latest_session.id,
                    student=StudentPublic.model_validate(student),
                    test_id=latest_session.test_id,
                    existing_session_found=False,
                    existing_session=existing_info,
                )

            # If payload explicitly requests "new", fall through to create a new session
            # If action is None, prompt student with existing session info
            if payload.action is None:
                db.commit()
                return SessionStartResponse(
                    student=StudentPublic.model_validate(student),
                    existing_session_found=True,
                    existing_session=existing_info,
                )

    # 2. Create new student if not exists
    if not student:
        student = Student(
            full_name=payload.full_name,
            email=payload.email.lower(),
            phone=payload.phone,
            current_grade=payload.current_grade,
            current_status=payload.current_status,
            target_sat_score=payload.target_sat_score,
            sat_test_date=payload.sat_test_date,
            utm_source=payload.utm_source,
            utm_medium=payload.utm_medium,
            utm_campaign=payload.utm_campaign,
            utm_content=payload.utm_content,
            utm_term=payload.utm_term,
        )
        db.add(student)
        db.flush()

    # 3. Find active diagnostic test
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

    # 4. Create new session
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
        existing_session_found=False,
    )


@router.post("/parent-enquiry", response_model=ParentEnquiryResponse, status_code=status.HTTP_201_CREATED)
def create_parent_enquiry(payload: ParentEnquiryCreate, db: Session = Depends(get_db)):
    """
    Save a parent enquiry for SAT guidance with UTM campaign details.
    """
    enquiry = ParentEnquiry(
        parent_name=payload.parent_name,
        phone=payload.phone,
        email=payload.email.lower() if payload.email else None,
        student_grade=payload.student_grade,
        expected_sat_date=payload.expected_sat_date,
        previous_sat_score=payload.previous_sat_score,
        target_sat_score=payload.target_sat_score,
        area_of_residence=payload.area_of_residence,
        can_attend_al_majaz=payload.can_attend_al_majaz,
        utm_source=payload.utm_source,
        utm_medium=payload.utm_medium,
        utm_campaign=payload.utm_campaign,
        utm_content=payload.utm_content,
        utm_term=payload.utm_term,
    )
    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    return ParentEnquiryResponse.model_validate(enquiry)

