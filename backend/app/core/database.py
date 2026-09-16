"""
Database engine, session factory, and Base declarative class.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase
from sqlalchemy.pool import NullPool
from app.core.config import settings

db_url = settings.clean_database_url
if db_url.startswith("postgresql://") and not db_url.startswith("postgresql+"):
    try:
        import psycopg2
    except ImportError:
        db_url = db_url.replace("postgresql://", "postgresql+pg8000://", 1)

# ── Engine ────────────────────────────────────────────────────────────────────
# NullPool is required for serverless environments (e.g., Vercel / AWS Lambda)
# connecting to Supabase transaction pooler (port 6543) to prevent stale socket errors.
engine = create_engine(
    db_url,
    poolclass=NullPool,
    pool_pre_ping=True,
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
