"""AdminUser model."""

import enum
from datetime import datetime, timezone

from sqlalchemy import String, Boolean, DateTime, Enum as SAEnum
from sqlalchemy.orm import Mapped, mapped_column

from app.core.database import Base


class AdminRole(str, enum.Enum):
    SUPER_ADMIN = "SUPER_ADMIN"
    SAT_ADMIN = "SAT_ADMIN"


class AdminUser(Base):
    __tablename__ = "admin_users"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(200), nullable=False)
    email: Mapped[str] = mapped_column(String(254), unique=True, index=True, nullable=False)
    password_hash: Mapped[str] = mapped_column(String(512), nullable=False)
    role: Mapped[AdminRole] = mapped_column(SAEnum(AdminRole), default=AdminRole.SAT_ADMIN, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), default=lambda: datetime.now(timezone.utc)
    )
    last_login: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)

    def __repr__(self) -> str:
        return f"<AdminUser id={self.id} email={self.email!r} role={self.role}>"
