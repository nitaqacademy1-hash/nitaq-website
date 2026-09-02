"""Student SQLAlchemy model."""

import enum
from datetime import datetime, timezone

from sqlalchemy import String, DateTime, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class CurrentStatus(str, enum.Enum):
    SCHOOL_STUDENT = "SCHOOL_STUDENT"
    COLLEGE_STUDENT = "COLLEGE_STUDENT"
    GRADUATE = "GRADUATE"
    WORKING = "WORKING"
    OTHER = "OTHER"


class TargetScore(str, enum.Enum):
    NOT_SURE = "NOT_SURE"
    SCORE_1000 = "1000+"
    SCORE_1100 = "1100+"
    SCORE_1200 = "1200+"
    SCORE_1300 = "1300+"
    SCORE_1400 = "1400+"
    SCORE_1500 = "1500+"


class Student(Base):
    __tablename__ = "students"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    full_name: Mapped[str] = mapped_column(String(200), nullable=False)
    email: Mapped[str] = mapped_column(String(254), unique=True, index=True, nullable=False)
    phone: Mapped[str] = mapped_column(String(30), nullable=False)
    current_grade: Mapped[str] = mapped_column(String(50), nullable=False)
    current_status: Mapped[CurrentStatus] = mapped_column(
        SAEnum(CurrentStatus), default=CurrentStatus.SCHOOL_STUDENT, nullable=False
    )
    target_sat_score: Mapped[TargetScore] = mapped_column(
        SAEnum(TargetScore), default=TargetScore.NOT_SURE, nullable=False
    )
    sat_test_date: Mapped[str | None] = mapped_column(String(20), nullable=True)

    # UTM parameters
    utm_source: Mapped[str | None] = mapped_column(String(255), nullable=True)
    utm_medium: Mapped[str | None] = mapped_column(String(255), nullable=True)
    utm_campaign: Mapped[str | None] = mapped_column(String(255), nullable=True)
    utm_content: Mapped[str | None] = mapped_column(String(255), nullable=True)
    utm_term: Mapped[str | None] = mapped_column(String(255), nullable=True)

    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True),
        default=lambda: datetime.now(timezone.utc),
        onupdate=lambda: datetime.now(timezone.utc),
    )

    # ── Relationships ─────────────────────────────────────────────────────────
    diagnostic_sessions: Mapped[list["DiagnosticSession"]] = relationship(
        "DiagnosticSession", back_populates="student", lazy="dynamic"
    )

    def __repr__(self) -> str:
        return f"<Student id={self.id} email={self.email!r}>"
