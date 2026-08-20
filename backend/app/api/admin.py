"""Admin auth + user management API."""

from datetime import datetime, timezone

from fastapi import APIRouter, Depends, HTTPException, status, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from app.core.config import settings
from app.core.database import get_db
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_admin,
    require_super_admin,
)
from app.models.admin import AdminUser, AdminRole
from app.schemas.admin import AdminCreate, AdminLogin, AdminResponse, TokenResponse

router = APIRouter(prefix="/admin", tags=["admin"])


# ── Login (Bearer token, for API / SPA clients) ───────────────────────────────
@router.post("/login", response_model=TokenResponse)
def login(payload: AdminLogin, response: Response, db: Session = Depends(get_db)):
    admin = db.query(AdminUser).filter(AdminUser.email == payload.email.lower()).first()
    if not admin or not verify_password(payload.password, admin.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )
    if not admin.is_active:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Account is disabled")

    token = create_access_token({"sub": str(admin.id)})

    # Set HTTP-only cookie for browser sessions
    response.set_cookie(
        key="nitaq_admin_token",
        value=token,
        httponly=True,
        samesite="lax",
        secure=settings.is_production,
        max_age=settings.ACCESS_TOKEN_EXPIRE_MINUTES * 60,
    )

    # Update last login
    admin.last_login = datetime.now(timezone.utc)
    db.commit()

    return TokenResponse(access_token=token, admin=AdminResponse.model_validate(admin))


# ── OAuth2 form-compatible token endpoint ─────────────────────────────────────
@router.post("/login/token", response_model=TokenResponse)
def login_oauth2(
    form: OAuth2PasswordRequestForm = Depends(),
    response: Response = None,
    db: Session = Depends(get_db),
):
    return login(AdminLogin(email=form.username, password=form.password), response, db)


# ── Logout ────────────────────────────────────────────────────────────────────
@router.post("/logout")
def logout(response: Response, admin=Depends(get_current_admin)):
    response.delete_cookie("nitaq_admin_token")
    return {"message": f"Goodbye, {admin.name}"}


# ── Current admin profile ─────────────────────────────────────────────────────
@router.get("/me", response_model=AdminResponse)
def me(admin=Depends(get_current_admin)):
    return AdminResponse.model_validate(admin)


# ── Bootstrap: create the first super-admin ───────────────────────────────────
@router.post("/bootstrap", response_model=AdminResponse, status_code=status.HTTP_201_CREATED)
def bootstrap_admin(payload: AdminCreate, db: Session = Depends(get_db)):
    """
    Creates the very first super-admin. Requires ADMIN_BOOTSTRAP_SECRET env var.
    After the first admin exists, this endpoint becomes unavailable.
    """
    if not settings.ADMIN_BOOTSTRAP_SECRET:
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Bootstrap is not configured. Set ADMIN_BOOTSTRAP_SECRET in your .env",
        )
    if payload.bootstrap_secret != settings.ADMIN_BOOTSTRAP_SECRET:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid bootstrap secret")

    # Only allow if no super-admin exists yet
    existing = db.query(AdminUser).filter(AdminUser.role == AdminRole.SUPER_ADMIN).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A super-admin already exists. Use the admin panel to create additional admins.",
        )

    admin = AdminUser(
        name=payload.name,
        email=payload.email.lower(),
        password_hash=hash_password(payload.password),
        role=AdminRole.SUPER_ADMIN,
    )
    db.add(admin)
    db.commit()
    db.refresh(admin)
    return AdminResponse.model_validate(admin)


# ── Admin user management (super-admin only) ──────────────────────────────────
@router.post("/users", response_model=AdminResponse, status_code=status.HTTP_201_CREATED)
def create_admin(
    payload: AdminCreate,
    admin=Depends(require_super_admin),
    db: Session = Depends(get_db),
):
    existing = db.query(AdminUser).filter(AdminUser.email == payload.email.lower()).first()
    if existing:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="Email already registered")

    new_admin = AdminUser(
        name=payload.name,
        email=payload.email.lower(),
        password_hash=hash_password(payload.password),
        role=payload.role,
    )
    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)
    return AdminResponse.model_validate(new_admin)


@router.get("/users", response_model=list[AdminResponse])
def list_admins(admin=Depends(require_super_admin), db: Session = Depends(get_db)):
    return [AdminResponse.model_validate(a) for a in db.query(AdminUser).all()]
