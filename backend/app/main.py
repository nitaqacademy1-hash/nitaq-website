"""
FastAPI application entrypoint.
"""

from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
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
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Routers ───────────────────────────────────────────────────────────────────
API_PREFIX = "/api/v1"

# 1. Register with /api/v1 prefix
app.include_router(students.router, prefix=API_PREFIX)
app.include_router(diagnostics.router, prefix=API_PREFIX)
app.include_router(admin.router, prefix=API_PREFIX)
app.include_router(questions.router, prefix=API_PREFIX)
app.include_router(questions.tests_router, prefix=API_PREFIX)
app.include_router(analytics.router, prefix=API_PREFIX)

# 2. Register without prefix for direct Vercel serverless routing fallback
app.include_router(students.router)
app.include_router(diagnostics.router)
app.include_router(admin.router)
app.include_router(questions.router)
app.include_router(questions.tests_router)
app.include_router(analytics.router)


# ── Health check ──────────────────────────────────────────────────────────────
@app.get("/health", tags=["system"])
@app.get("/api/v1/health", tags=["system"])
def health():
    return {"status": "ok", "service": "nitaq-sat-diagnostic"}


@app.exception_handler(Exception)
async def global_exception_handler(request: Request, exc: Exception):
    import traceback
    traceback.print_exc()
    return JSONResponse(
        status_code=500,
        content={"detail": f"Internal Error: {type(exc).__name__} - {str(exc)}"},
    )


@app.get("/", tags=["system"])
def root():
    return {
        "service": "Nitaq Academy SAT Diagnostic API",
        "version": "1.0.0",
        "docs": "/docs",
    }
