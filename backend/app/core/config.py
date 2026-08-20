"""
Nitaq Academy — SAT Diagnostic Backend
Application settings via Pydantic Settings (reads from .env)
"""

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # ── Database ──────────────────────────────────────────────────────────────
    DATABASE_URL: str

    # ── Security ──────────────────────────────────────────────────────────────
    SECRET_KEY: str
    ADMIN_BOOTSTRAP_SECRET: str = ""
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24 hours

    # ── CORS ──────────────────────────────────────────────────────────────────
    CORS_ORIGINS: str = "http://localhost:5173,http://localhost:3000"

    @property
    def cors_origins_list(self) -> List[str]:
        return [o.strip() for o in self.CORS_ORIGINS.split(",") if o.strip()]

    # ── Environment ───────────────────────────────────────────────────────────
    ENVIRONMENT: str = "development"

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == "production"

    # ── Email ─────────────────────────────────────────────────────────────────
    RESEND_API_KEY: str = ""
    SMTP_HOST: str = ""
    SMTP_PORT: int = 587
    SMTP_USER: str = ""
    SMTP_PASSWORD: str = ""
    FROM_EMAIL: str = "noreply@nitaqacademy.com"
    FRONTEND_URL: str = "https://nitaqacademy.com"

    # ── Google Sheets ─────────────────────────────────────────────────────────
    GOOGLE_SERVICE_ACCOUNT_JSON_B64: str = ""

    # ── Rate Limiting ─────────────────────────────────────────────────────────
    RATE_LIMIT_PUBLIC: int = 30
    RATE_LIMIT_ADMIN: int = 60

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"


# Singleton — import this everywhere
settings = Settings()
