"""Result schemas — public diagnostic results and admin views."""

from typing import Optional

from pydantic import BaseModel

from app.models.question import Section, Domain
from app.models.result import DomainStatus


class DomainResultSchema(BaseModel):
    section: Section
    domain: Domain
    correct_count: int
    total_questions: int
    percentage: float
    status: DomainStatus

    model_config = {"from_attributes": True}


class MissedQuestion(BaseModel):
    """Missed question with correct answer + explanation for review."""
    question_id: int
    question_code: str
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    selected_answer: str
    correct_answer: str
    explanation: str
    domain: Domain
    section: Section


class RecommendationSchema(BaseModel):
    domain: Domain
    title: str
    description: str
    topics: list[str]
    priority: int


class QuestionReviewItem(BaseModel):
    """Complete review item for any answered question (correct or incorrect)."""
    question_id: int
    question_code: str
    question_text: str
    option_a: str
    option_b: str
    option_c: str
    option_d: str
    selected_answer: str
    correct_answer: str
    is_correct: bool
    explanation: str
    domain: Domain
    section: Section


class DiagnosticResultResponse(BaseModel):
    """Full result response returned to the student after completing the test."""
    session_id: int
    student_name: str
    total_score: int
    total_questions: int
    math_score: int
    reading_writing_score: int
    percentage: float
    domain_results: list[DomainResultSchema]
    missed_questions: list[MissedQuestion]
    question_reviews: list[QuestionReviewItem] = []
    recommendations: list[RecommendationSchema]
    # Computed summary
    strong_domains: list[str]
    developing_domains: list[str]
    review_domains: list[str]
    overall_band: str          # "Needs Work" | "On Track" | "Strong"
    estimated_sat_score: str   # e.g. "1050–1150"

    model_config = {"from_attributes": True}


class AdminResultResponse(DiagnosticResultResponse):
    """Extended result response for admin — includes student contact info."""
    student_email: str
    student_phone: str
    student_grade: str
    target_sat_score: str
    lead_status: str
