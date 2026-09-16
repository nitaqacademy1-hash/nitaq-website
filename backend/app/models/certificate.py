"""
Certificate SQL model.
"""

from sqlalchemy import Column, String, Text, DateTime
from datetime import datetime
import uuid
from app.core.database import Base


def generate_cert_id():
    return f"CERT-{datetime.utcnow().strftime('%Y')}-{uuid.uuid4().hex[:8].upper()}"


class Certificate(Base):
    __tablename__ = "certificates"

    id = Column(String(50), primary_key=True, default=generate_cert_id, index=True)
    student_name = Column(String(255), nullable=False, index=True)
    course_name = Column(String(255), nullable=False)
    start_date = Column(String(100), nullable=True)
    end_date = Column(String(100), nullable=True)
    remark = Column(Text, nullable=True)
    issue_date = Column(String(100), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
