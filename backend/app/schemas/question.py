"""Question schemas."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field

from app.models.question import Section, Domain, Difficulty, AnswerChoice


# ── Public question (no correct_answer, no explanation) ───────────────────────
class QuestionPublic(BaseModel):
    id: int
    question_code: str
    section: Section
    domain: Domain
    difficulty: Difficulty
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    question_order: Optional[int] = None  # injected from join table when serving a test

    model_config = {"from_attributes": True}


# ── Full question (for admin, includes answer + explanation) ──────────────────
class QuestionFull(QuestionPublic):
    correct_answer: AnswerChoice
    explanation: str
    is_active: bool
    created_at: datetime
    updated_at: datetime


# ── Admin CRUD schemas ─────────────────────────────────────────────────────────
class QuestionCreate(BaseModel):
    question_code: str = Field(..., min_length=3, max_length=20)
    section: Section
    domain: Domain
    difficulty: Difficulty = Difficulty.MEDIUM
    question_text: str = Field(..., min_length=10)
    option_a: str = Field(..., min_length=1)
    option_b: str = Field(..., min_length=1)
    option_c: str = Field(..., min_length=1)
    option_d: str = Field(..., min_length=1)
    correct_answer: AnswerChoice
    explanation: str = ""

    model_config = {"str_strip_whitespace": True}


class QuestionUpdate(BaseModel):
    question_code: Optional[str] = None
    section: Optional[Section] = None
    domain: Optional[Domain] = None
    difficulty: Optional[Difficulty] = None
    question_text: Optional[str] = None
    option_a: Optional[str] = None
    option_b: Optional[str] = None
    option_c: Optional[str] = None
    option_d: Optional[str] = None
    correct_answer: Optional[AnswerChoice] = None
    explanation: Optional[str] = None
    is_active: Optional[bool] = None

    model_config = {"str_strip_whitespace": True}
