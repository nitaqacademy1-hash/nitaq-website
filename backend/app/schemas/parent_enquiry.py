"""Parent enquiry schemas (request / response)."""

from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field, field_validator


class ParentEnquiryCreate(BaseModel):
    parent_name: str = Field(..., min_length=2, max_length=200)
    phone: str = Field(..., min_length=7, max_length=30)
    email: Optional[str] = None
    student_grade: str = Field(..., min_length=1, max_length=50)
    expected_sat_date: Optional[str] = None
    previous_sat_score: Optional[str] = None
    target_sat_score: Optional[str] = None
    area_of_residence: str = Field(..., min_length=2, max_length=200)
    can_attend_al_majaz: bool = True

    # UTM parameters
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None
    utm_content: Optional[str] = None
    utm_term: Optional[str] = None

    @field_validator("parent_name")
    @classmethod
    def name_not_empty(cls, v: str) -> str:
        stripped = v.strip()
        if not stripped:
            raise ValueError("Parent name cannot be blank")
        return stripped

    @field_validator("phone")
    @classmethod
    def phone_digits(cls, v: str) -> str:
        digits = "".join(c for c in v if c.isdigit() or c in "+-() ")
        if len("".join(c for c in digits if c.isdigit())) < 7:
            raise ValueError("Phone number must contain at least 7 digits")
        return v.strip()

    model_config = {"str_strip_whitespace": True}


class ParentEnquiryResponse(BaseModel):
    id: int
    parent_name: str
    phone: str
    email: Optional[str] = None
    student_grade: str
    expected_sat_date: Optional[str] = None
    previous_sat_score: Optional[str] = None
    target_sat_score: Optional[str] = None
    area_of_residence: str
    can_attend_al_majaz: bool
    utm_source: Optional[str] = None
    utm_medium: Optional[str] = None
    utm_campaign: Optional[str] = None
    utm_content: Optional[str] = None
    utm_term: Optional[str] = None
    created_at: datetime

    model_config = {"from_attributes": True}
