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
    pool_pre_ping=True,          # detect stale connections immediately
    pool_size=3,
    max_overflow=5,
    pool_recycle=300,            # recycle stale connections every 5 mins
    pool_timeout=10,             # quick failover
    echo=False,
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
