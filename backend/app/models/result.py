"""DiagnosticResult, DomainResult, and Recommendation models."""

import enum
from datetime import datetime, timezone

from sqlalchemy import Integer, Float, String, Text, Boolean, DateTime, ForeignKey, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.question import Section, Domain


class DomainStatus(str, enum.Enum):
    STRONG = "STRONG"
    DEVELOPING = "DEVELOPING"
    REVIEW = "REVIEW"


class DiagnosticResult(Base):
    __tablename__ = "diagnostic_results"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    session_id: Mapped[int] = mapped_column(
        ForeignKey("diagnostic_sessions.id", ondelete="CASCADE"),
        unique=True, nullable=False, index=True
    )
    total_score: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    math_score: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    reading_writing_score: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    total_questions: Mapped[int] = mapped_column(Integer, nullable=False, default=24)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    # ── Relationships ─────────────────────────────────────────────────────────
    session: Mapped["DiagnosticSession"] = relationship("DiagnosticSession", back_populates="result")
    domain_results: Mapped[list["DomainResult"]] = relationship(
        "DomainResult", back_populates="result", cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<DiagnosticResult session={self.session_id} score={self.total_score}/{self.total_questions}>"


class DomainResult(Base):
    __tablename__ = "domain_results"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    result_id: Mapped[int] = mapped_column(
        ForeignKey("diagnostic_results.id", ondelete="CASCADE"), nullable=False, index=True
    )
    section: Mapped[Section] = mapped_column(SAEnum(Section), nullable=False, index=True)
    domain: Mapped[Domain] = mapped_column(SAEnum(Domain), nullable=False, index=True)
    correct_count: Mapped[int] = mapped_column(Integer, nullable=False, default=0)
    total_questions: Mapped[int] = mapped_column(Integer, nullable=False, default=3)
    percentage: Mapped[float] = mapped_column(Float, nullable=False, default=0.0)
    status: Mapped[DomainStatus] = mapped_column(
        SAEnum(DomainStatus), default=DomainStatus.REVIEW, nullable=False
    )

    # ── Relationship ──────────────────────────────────────────────────────────
    result: Mapped["DiagnosticResult"] = relationship("DiagnosticResult", back_populates="domain_results")

    def __repr__(self) -> str:
        return f"<DomainResult {self.domain} {self.correct_count}/{self.total_questions} [{self.status}]>"


class Recommendation(Base):
    """
    Preparation recommendations stored in the database so Nitaq can update
    them without changing backend code.
    """
    __tablename__ = "recommendations"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    domain: Mapped[Domain] = mapped_column(SAEnum(Domain), nullable=False, index=True)
    # Score condition: 'REVIEW' | 'DEVELOPING' | 'STRONG'
    score_condition: Mapped[DomainStatus] = mapped_column(SAEnum(DomainStatus), nullable=False)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(Text, default="", nullable=False)
    # Comma-separated focus topics
    topics: Mapped[str] = mapped_column(Text, default="", nullable=False)
    priority: Mapped[int] = mapped_column(Integer, default=1, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    def topics_list(self) -> list[str]:
        return [t.strip() for t in self.topics.split(",") if t.strip()]

    def __repr__(self) -> str:
        return f"<Recommendation domain={self.domain} condition={self.score_condition}>"
