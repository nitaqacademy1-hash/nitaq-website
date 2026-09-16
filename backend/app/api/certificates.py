"""
Certificate API Endpoints.
Provides routes for creating, listing, retrieving (public verification), and deleting course completion certificates.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime

from app.core.database import get_db
from app.models.certificate import Certificate
from app.schemas.certificate import CertificateCreate, CertificateResponse

router = APIRouter(prefix="/certificates", tags=["certificates"])


@router.post("", response_model=CertificateResponse, status_code=status.HTTP_201_CREATED)
@router.post("/", response_model=CertificateResponse, status_code=status.HTTP_201_CREATED)
def create_certificate(
    payload: CertificateCreate,
    db: Session = Depends(get_db)
):
    """
    Create a new Course Completion Certificate.
    """
    issue_date_str = payload.issue_date or datetime.utcnow().strftime("%d %B %Y")
    cert = Certificate(
        student_name=payload.student_name.strip(),
        course_name=payload.course_name.strip(),
        start_date=payload.start_date.strip() if payload.start_date else None,
        end_date=payload.end_date.strip() if payload.end_date else None,
        remark=payload.remark.strip() if payload.remark else None,
        issue_date=issue_date_str,
    )
    db.add(cert)
    db.commit()
    db.refresh(cert)
    return cert


@router.get("", response_model=List[CertificateResponse])
@router.get("/", response_model=List[CertificateResponse])
def list_certificates(
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    """
    List all certificates for admin dashboard.
    """
    query = db.query(Certificate)
    if search:
        search_pattern = f"%{search}%"
        query = query.filter(
            (Certificate.student_name.ilike(search_pattern)) |
            (Certificate.course_name.ilike(search_pattern)) |
            (Certificate.id.ilike(search_pattern))
        )
    return query.order_by(Certificate.created_at.desc()).all()


@router.get("/{cert_id}", response_model=CertificateResponse)
def get_certificate(cert_id: str, db: Session = Depends(get_db)):
    """
    Public Endpoint: Get certificate by ID for QR code verification.
    """
    cert = db.query(Certificate).filter(Certificate.id == cert_id).first()
    if not cert:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Certificate with ID '{cert_id}' not found or invalid."
        )
    return cert


@router.delete("/{cert_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_certificate(cert_id: str, db: Session = Depends(get_db)):
    """
    Delete a certificate record.
    """
    cert = db.query(Certificate).filter(Certificate.id == cert_id).first()
    if not cert:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Certificate with ID '{cert_id}' not found."
        )
    db.delete(cert)
    db.commit()
    return None
