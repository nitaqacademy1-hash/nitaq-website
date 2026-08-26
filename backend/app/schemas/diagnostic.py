"""Diagnostic session + answer schemas."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel

from app.models.diagnostic import SessionStatus, LeadStatus
from app.models.question import AnswerChoice, Section
from app.schemas.question import QuestionPublic
from app.schemas.student import StudentPublic


# ── Existing Session Check Info ───────────────────────────────────────────────
class ExistingSessionInfo(BaseModel):
    session_token: str
    session_id: int
    status: SessionStatus
    current_section: Optional[str] = None
    answered_count: int = 0
    created_at: datetime


# ── Session creation / start response ────────────────────────────────────────
class SessionStartResponse(BaseModel):
    session_token: Optional[str] = None
    session_id: Optional[int] = None
    student: StudentPublic
    test_id: Optional[int] = None
    existing_session_found: bool = False
    existing_session: Optional[ExistingSessionInfo] = None


# ── Question list for a section ───────────────────────────────────────────────
class SectionQuestionsResponse(BaseModel):
    section: Section
    questions: list[QuestionPublic]


# ── Submit answer ─────────────────────────────────────────────────────────────
class AnswerSubmit(BaseModel):
    question_id: int
    selected_answer: AnswerChoice


class BulkAnswerSubmit(BaseModel):
    """Submit all answers for a section in one call."""
    section: Section
    answers: list[AnswerSubmit]


# ── Section completion ────────────────────────────────────────────────────────
class SectionCompleteResponse(BaseModel):
    session_id: int
    session_status: SessionStatus
    section: Optional[Section] = None
    section_score: Optional[int] = None
    section_total: Optional[int] = None
    math_score: Optional[int] = None
    math_total: Optional[int] = None


# ── Admin: session list item ──────────────────────────────────────────────────
class SessionListItem(BaseModel):
    id: int
    session_token: str
    student_id: int
    student_name: str
    student_email: str
    student_phone: str
    current_grade: str
    target_sat_score: str
    status: SessionStatus
    lead_status: LeadStatus
    started_at: Optional[datetime]
    completed_at: Optional[datetime]
    total_score: Optional[int] = None
    created_at: datetime

    model_config = {"from_attributes": True}


# ── Lead status update (admin) ────────────────────────────────────────────────
class LeadStatusUpdate(BaseModel):
    lead_status: LeadStatus
    notes: Optional[str] = None
