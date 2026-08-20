"""
Security utilities: password hashing (Argon2), JWT tokens, admin auth dependency.
"""

from datetime import datetime, timedelta, timezone
from typing import Optional

from argon2 import PasswordHasher
from argon2.exceptions import VerifyMismatchError, VerificationError, InvalidHashError
from jose import JWTError, jwt
from fastapi import Depends, HTTPException, status, Cookie
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db

# ── Argon2 hasher ─────────────────────────────────────────────────────────────
_ph = PasswordHasher(
    time_cost=3,
    memory_cost=65536,
    parallelism=1,
)

ALGORITHM = "HS256"


def hash_password(plain: str) -> str:
    """Hash a plain-text password using Argon2."""
    return _ph.hash(plain)


def verify_password(plain: str, hashed: str) -> bool:
    """Verify a plain-text password against an Argon2 hash."""
    try:
        return _ph.verify(hashed, plain)
    except (VerifyMismatchError, VerificationError, InvalidHashError):
        return False


# ── JWT helpers ───────────────────────────────────────────────────────────────
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + (
        expires_delta or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=ALGORITHM)


def decode_access_token(token: str) -> Optional[dict]:
    try:
        return jwt.decode(token, settings.SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        return None


# ── Admin auth dependency ─────────────────────────────────────────────────────
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/admin/login/token", auto_error=False)


def get_current_admin(
    token: Optional[str] = Depends(oauth2_scheme),
    admin_token: Optional[str] = Cookie(default=None, alias="nitaq_admin_token"),
    db: Session = Depends(get_db),
):
    """
    Dependency that validates admin JWT from either:
    - Authorization: Bearer <token> header  (API clients / admin SPA)
    - HTTP-only cookie `nitaq_admin_token`  (browser sessions)
    """
    from app.models.admin import AdminUser  # avoid circular import

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Not authenticated",
        headers={"WWW-Authenticate": "Bearer"},
    )

    raw_token = token or admin_token
    if not raw_token:
        raise credentials_exception

    payload = decode_access_token(raw_token)
    if not payload:
        raise credentials_exception

    admin_id: Optional[int] = payload.get("sub")
    if admin_id is None:
        raise credentials_exception

    admin = db.query(AdminUser).filter(
        AdminUser.id == int(admin_id),
        AdminUser.is_active == True,
    ).first()

    if not admin:
        raise credentials_exception

    return admin


def require_super_admin(admin=Depends(get_current_admin)):
    """Dependency that additionally requires SUPER_ADMIN role."""
    from app.models.admin import AdminRole
    if admin.role != AdminRole.SUPER_ADMIN:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Super-admin access required",
        )
    return admin


# ── Session token helper (for student sessions) ───────────────────────────────
import secrets


def generate_session_token() -> str:
    """Generate a cryptographically secure session token for student sessions."""
    return secrets.token_urlsafe(32)
