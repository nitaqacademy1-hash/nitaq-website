"""
Database engine, session factory, and Base declarative class.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from app.core.config import settings

db_url = settings.clean_database_url
if db_url.startswith("postgresql://") and not db_url.startswith("postgresql+"):
    try:
        import psycopg2
    except ImportError:
        db_url = db_url.replace("postgresql://", "postgresql+pg8000://", 1)

# ── Engine ────────────────────────────────────────────────────────────────────
engine = create_engine(
    db_url,
    pool_pre_ping=True,          # detect stale connections
    pool_size=5,
    max_overflow=10,
    echo=not settings.is_production,  # SQL logging in dev only
)

# ── Session factory ───────────────────────────────────────────────────────────
SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine,
)

# ── Declarative base ──────────────────────────────────────────────────────────
class Base(DeclarativeBase):
    pass


# ── Dependency injection helper ───────────────────────────────────────────────
def get_db():
    """FastAPI dependency that yields a database session."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
