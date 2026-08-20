"""Models package — import all models to ensure SQLAlchemy registers them for Alembic."""

from app.models.student import Student, CurrentStatus, TargetScore
from app.models.question import (
    Question,
    DiagnosticTest,
    DiagnosticTestQuestion,
    Section,
    Domain,
    MathDomain,
    RWDomain,
    Difficulty,
    TestStatus,
    AnswerChoice,
)
from app.models.diagnostic import DiagnosticSession, SessionStatus, CurrentSection, LeadStatus
from app.models.answer import StudentAnswer
from app.models.result import DiagnosticResult, DomainResult, DomainStatus, Recommendation
from app.models.admin import AdminUser, AdminRole

__all__ = [
    "Student",
    "CurrentStatus",
    "TargetScore",
    "Question",
    "DiagnosticTest",
    "DiagnosticTestQuestion",
    "Section",
    "Domain",
    "MathDomain",
    "RWDomain",
    "Difficulty",
    "TestStatus",
    "AnswerChoice",
    "DiagnosticSession",
    "SessionStatus",
    "CurrentSection",
    "LeadStatus",
    "StudentAnswer",
    "DiagnosticResult",
    "DomainResult",
    "DomainStatus",
    "Recommendation",
    "AdminUser",
    "AdminRole",
]
