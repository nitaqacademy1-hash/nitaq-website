"""Question, DiagnosticTest, and DiagnosticTestQuestion SQLAlchemy models."""

import enum
from datetime import datetime, timezone

from sqlalchemy import String, Text, Boolean, Integer, ForeignKey, DateTime, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class Section(str, enum.Enum):
    MATH = "MATH"
    READING_WRITING = "READING_WRITING"


class MathDomain(str, enum.Enum):
    ALGEBRA = "ALGEBRA"
    ADVANCED_MATH = "ADVANCED_MATH"
    PROBLEM_SOLVING_DATA_ANALYSIS = "PROBLEM_SOLVING_DATA_ANALYSIS"
    GEOMETRY_TRIGONOMETRY = "GEOMETRY_TRIGONOMETRY"


class RWDomain(str, enum.Enum):
    INFORMATION_IDEAS = "INFORMATION_IDEAS"
    CRAFT_STRUCTURE = "CRAFT_STRUCTURE"
    EXPRESSION_IDEAS = "EXPRESSION_IDEAS"
    STANDARD_ENGLISH_CONVENTIONS = "STANDARD_ENGLISH_CONVENTIONS"


# Unified domain enum (all 8 domains)
class Domain(str, enum.Enum):
    # Math
    ALGEBRA = "ALGEBRA"
    ADVANCED_MATH = "ADVANCED_MATH"
    PROBLEM_SOLVING_DATA_ANALYSIS = "PROBLEM_SOLVING_DATA_ANALYSIS"
    GEOMETRY_TRIGONOMETRY = "GEOMETRY_TRIGONOMETRY"
    # Reading & Writing
    INFORMATION_IDEAS = "INFORMATION_IDEAS"
    CRAFT_STRUCTURE = "CRAFT_STRUCTURE"
    EXPRESSION_IDEAS = "EXPRESSION_IDEAS"
    STANDARD_ENGLISH_CONVENTIONS = "STANDARD_ENGLISH_CONVENTIONS"


class Difficulty(str, enum.Enum):
    EASY = "EASY"
    MEDIUM = "MEDIUM"
    HARD = "HARD"


class TestStatus(str, enum.Enum):
    DRAFT = "DRAFT"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"


class AnswerChoice(str, enum.Enum):
    A = "A"
    B = "B"
    C = "C"
    D = "D"


# ── Question ──────────────────────────────────────────────────────────────────
class Question(Base):
    __tablename__ = "questions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    question_code: Mapped[str] = mapped_column(String(20), unique=True, index=True, nullable=False)
    section: Mapped[Section] = mapped_column(SAEnum(Section), nullable=False, index=True)
    domain: Mapped[Domain] = mapped_column(SAEnum(Domain), nullable=False, index=True)
    difficulty: Mapped[Difficulty] = mapped_column(SAEnum(Difficulty), default=Difficulty.MEDIUM, nullable=False)
    question_text: Mapped[str] = mapped_column(Text, nullable=False)
    option_a: Mapped[str] = mapped_column(Text, nullable=False)
    option_b: Mapped[str] = mapped_column(Text, nullable=False)
    option_c: Mapped[str] = mapped_column(Text, nullable=False)
    option_d: Mapped[str] = mapped_column(Text, nullable=False)
    correct_answer: Mapped[AnswerChoice] = mapped_column(SAEnum(AnswerChoice), nullable=False)
    explanation: Mapped[str] = mapped_column(Text, default="", nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    # Relationships
    test_questions: Mapped[list["DiagnosticTestQuestion"]] = relationship(
        "DiagnosticTestQuestion", back_populates="question"
    )
    student_answers: Mapped[list["StudentAnswer"]] = relationship(
        "StudentAnswer", back_populates="question"
    )

    def __repr__(self) -> str:
        return f"<Question {self.question_code} [{self.section}/{self.domain}]>"


# ── Diagnostic Test ───────────────────────────────────────────────────────────
class DiagnosticTest(Base):
    __tablename__ = "diagnostic_tests"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, default="", nullable=False)
    version: Mapped[int] = mapped_column(Integer, default=1, nullable=False)
    status: Mapped[TestStatus] = mapped_column(SAEnum(TestStatus), default=TestStatus.DRAFT, nullable=False)
    show_answer_review: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    # Relationships
    test_questions: Mapped[list["DiagnosticTestQuestion"]] = relationship(
        "DiagnosticTestQuestion", back_populates="test", order_by="DiagnosticTestQuestion.question_order"
    )
    sessions: Mapped[list["DiagnosticSession"]] = relationship(
        "DiagnosticSession", back_populates="test"
    )

    def __repr__(self) -> str:
        return f"<DiagnosticTest id={self.id} name={self.name!r} v{self.version} [{self.status}]>"


# ── Test Question (join table with ordering) ──────────────────────────────────
class DiagnosticTestQuestion(Base):
    __tablename__ = "diagnostic_test_questions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    test_id: Mapped[int] = mapped_column(ForeignKey("diagnostic_tests.id", ondelete="CASCADE"), nullable=False, index=True)
    question_id: Mapped[int] = mapped_column(ForeignKey("questions.id", ondelete="RESTRICT"), nullable=False, index=True)
    question_order: Mapped[int] = mapped_column(Integer, nullable=False)

    # Relationships
    test: Mapped["DiagnosticTest"] = relationship("DiagnosticTest", back_populates="test_questions")
    question: Mapped["Question"] = relationship("Question", back_populates="test_questions")

    def __repr__(self) -> str:
        return f"<TestQuestion test={self.test_id} q={self.question_id} order={self.question_order}>"
