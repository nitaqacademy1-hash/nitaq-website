"""StudentAnswer model."""

from datetime import datetime, timezone

from sqlalchemy import Boolean, DateTime, ForeignKey, String, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.question import AnswerChoice


class StudentAnswer(Base):
    __tablename__ = "student_answers"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    session_id: Mapped[int] = mapped_column(
        ForeignKey("diagnostic_sessions.id", ondelete="CASCADE"), nullable=False, index=True
    )
    question_id: Mapped[int] = mapped_column(
        ForeignKey("questions.id", ondelete="RESTRICT"), nullable=False, index=True
    )
    selected_answer: Mapped[AnswerChoice] = mapped_column(SAEnum(AnswerChoice), nullable=False)
    is_correct: Mapped[bool] = mapped_column(Boolean, nullable=False, default=False)
    answered_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )

    # ── Relationships ─────────────────────────────────────────────────────────
    session: Mapped["DiagnosticSession"] = relationship("DiagnosticSession", back_populates="answers")
    question: Mapped["Question"] = relationship("Question", back_populates="student_answers")

    def __repr__(self) -> str:
        return (
            f"<StudentAnswer session={self.session_id} q={self.question_id} "
            f"ans={self.selected_answer} correct={self.is_correct}>"
        )
