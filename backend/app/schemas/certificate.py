"""
Certificate Pydantic Schemas.
"""

from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class CertificateCreate(BaseModel):
    student_name: str = Field(..., min_length=2, description="Student full name")
    course_name: str = Field(..., min_length=2, description="Course name completed")
    start_date: Optional[str] = Field(None, description="Course start date")
    end_date: Optional[str] = Field(None, description="Course end date")
    remark: Optional[str] = Field(None, description="Remark or grade description")
    issue_date: Optional[str] = Field(None, description="Certificate issue date")


class CertificateResponse(BaseModel):
    id: str
    student_name: str
    course_name: str
    start_date: Optional[str] = None
    end_date: Optional[str] = None
    remark: Optional[str] = None
    issue_date: Optional[str] = None
    created_at: datetime

    class Config:
        from_attributes = True
