"""Admin auth schemas."""

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, EmailStr, Field
from app.models.admin import AdminRole


class AdminLogin(BaseModel):
    email: EmailStr
    password: str


class AdminCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    password: str = Field(..., min_length=10)
    role: AdminRole = AdminRole.SAT_ADMIN
    bootstrap_secret: str = ""  # Required when creating the first super-admin


class AdminResponse(BaseModel):
    id: int
    name: str
    email: str
    role: AdminRole
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime]

    model_config = {"from_attributes": True}


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    admin: AdminResponse


class AnalyticsSummary(BaseModel):
    total_students: int
    total_sessions: int
    completed_sessions: int
    in_progress_sessions: int
    completion_rate: float
    avg_total_score: float
    avg_math_score: float
    avg_rw_score: float
    new_leads: int
    enrolled_leads: int
    domain_averages: dict[str, float]
