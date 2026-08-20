"""
FastAPI application entrypoint.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

from app.core.config import settings
from app.api import admin, analytics, diagnostics, questions, students

# ── App ───────────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Nitaq Academy — SAT Diagnostic API",
    description="Backend for Nitaq Academy's Digital SAT Diagnostic Assessment System",
    version="1.0.0",
    docs_url="/docs" if not settings.is_production else None,
    redoc_url="/redoc" if not settings.is_production else None,
    openapi_url="/openapi.json" if not settings.is_production else None,
)

# ── CORS ──────────────────────────────────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
API_PREFIX = "/api/v1"

app.include_router(students.router, prefix=API_PREFIX)
app.include_router(diagnostics.router, prefix=API_PREFIX)
app.include_router(admin.router, prefix=API_PREFIX)
app.include_router(questions.router, prefix=API_PREFIX)
app.include_router(questions.tests_router, prefix=API_PREFIX)
app.include_router(analytics.router, prefix=API_PREFIX)


# ── Health check ──────────────────────────────────────────────────────────────
@app.get("/health", tags=["system"])
def health():
    return {"status": "ok", "service": "nitaq-sat-diagnostic"}


@app.get("/", tags=["system"])
def root():
    return {
        "service": "Nitaq Academy SAT Diagnostic API",
        "version": "1.0.0",
        "docs": "/docs",
    }
