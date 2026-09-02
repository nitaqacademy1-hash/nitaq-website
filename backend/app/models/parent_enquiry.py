"""ParentEnquiry SQLAlchemy model."""

from datetime import datetime, timezone

from sqlalchemy import String, DateTime, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class ParentEnquiry(Base):
    __tablename__ = "parent_enquiries"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    parent_name: Mapped[str] = mapped_column(String(200), nullable=False)
    phone: Mapped[str] = mapped_column(String(30), nullable=False, index=True)
    email: Mapped[str | None] = mapped_column(String(254), nullable=True)
    student_grade: Mapped[str] = mapped_column(String(50), nullable=False)
    expected_sat_date: Mapped[str | None] = mapped_column(String(50), nullable=True)
    previous_sat_score: Mapped[str | None] = mapped_column(String(50), nullable=True)
    target_sat_score: Mapped[str | None] = mapped_column(String(50), nullable=True)
    area_of_residence: Mapped[str] = mapped_column(String(200), nullable=False)
    can_attend_al_majaz: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

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

    def __repr__(self) -> str:
        return f"<ParentEnquiry id={self.id} parent_name={self.parent_name!r} phone={self.phone!r}>"
