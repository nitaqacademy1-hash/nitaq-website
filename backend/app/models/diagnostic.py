"""DiagnosticSession model."""

import enum
from datetime import datetime, timezone

from sqlalchemy import String, DateTime, ForeignKey, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class SessionStatus(str, enum.Enum):
    NOT_STARTED = "NOT_STARTED"
    IN_PROGRESS = "IN_PROGRESS"
    MATH_COMPLETED = "MATH_COMPLETED"
    READING_WRITING_COMPLETED = "READING_WRITING_COMPLETED"
    COMPLETED = "COMPLETED"
    ABANDONED = "ABANDONED"


class CurrentSection(str, enum.Enum):
    MATH = "MATH"
    READING_WRITING = "READING_WRITING"


class LeadStatus(str, enum.Enum):
    NEW = "NEW"
    COMPLETED = "COMPLETED"
    CONTACTED = "CONTACTED"
    COUNSELING = "COUNSELING"
    ENROLLED = "ENROLLED"
    NOT_INTERESTED = "NOT_INTERESTED"


class DiagnosticSession(Base):
    __tablename__ = "diagnostic_sessions"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    student_id: Mapped[int] = mapped_column(
        ForeignKey("students.id", ondelete="CASCADE"), nullable=False, index=True
    )
    test_id: Mapped[int] = mapped_column(
        ForeignKey("diagnostic_tests.id", ondelete="RESTRICT"), nullable=False, index=True
    )
    # Secure token for browser-based session resumption (never exposes student PK)
    session_token: Mapped[str] = mapped_column(String(64), unique=True, index=True, nullable=False)

    status: Mapped[SessionStatus] = mapped_column(
        SAEnum(SessionStatus), default=SessionStatus.NOT_STARTED, nullable=False
    )
    current_section: Mapped[CurrentSection | None] = mapped_column(
        SAEnum(CurrentSection), nullable=True
    )
    lead_status: Mapped[LeadStatus] = mapped_column(
        SAEnum(LeadStatus), default=LeadStatus.NEW, nullable=False
    )

    started_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    math_completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    reading_writing_completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    completed_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    # ── Relationships ─────────────────────────────────────────────────────────
    student: Mapped["Student"] = relationship("Student", back_populates="diagnostic_sessions")
    test: Mapped["DiagnosticTest"] = relationship("DiagnosticTest", back_populates="sessions")
    answers: Mapped[list["StudentAnswer"]] = relationship(
        "StudentAnswer", back_populates="session", cascade="all, delete-orphan"
    )
    result: Mapped["DiagnosticResult | None"] = relationship(
        "DiagnosticResult", back_populates="session", uselist=False, cascade="all, delete-orphan"
    )

    def __repr__(self) -> str:
        return f"<DiagnosticSession id={self.id} student={self.student_id} status={self.status}>"
