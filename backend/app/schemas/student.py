"""Student schemas (request / response)."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, EmailStr, Field, field_validator

from app.models.student import CurrentStatus, TargetScore


class StudentCreate(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=200)
    email: EmailStr
    phone: str = Field(..., min_length=7, max_length=30)
    current_grade: str = Field(..., min_length=1, max_length=50)
    current_status: CurrentStatus = CurrentStatus.SCHOOL_STUDENT
    target_sat_score: TargetScore = TargetScore.NOT_SURE
    sat_test_date: Optional[str] = None
    action: Optional[str] = None  # None (check for existing session), "resume", or "new"

    @field_validator("full_name")
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        stripped = v.strip()
        if not stripped:
            raise ValueError("Full name cannot be blank")
        return stripped

    @field_validator("phone")
    @classmethod
    def phone_digits(cls, v: str) -> str:
        digits = "".join(c for c in v if c.isdigit() or c in "+-() ")
        if len("".join(c for c in digits if c.isdigit())) < 7:
            raise ValueError("Phone number must contain at least 7 digits")
        return v.strip()

    model_config = {"str_strip_whitespace": True}


class StudentResponse(BaseModel):
    id: int
    full_name: str
    email: str
    phone: str
    current_grade: str
    current_status: CurrentStatus
    target_sat_score: TargetScore
    sat_test_date: Optional[str]
    created_at: datetime

    model_config = {"from_attributes": True}


class StudentPublic(BaseModel):
    """Minimal student info returned alongside session token after registration."""
    id: int
    full_name: str
    email: str

    model_config = {"from_attributes": True}
