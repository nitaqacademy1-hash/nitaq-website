# Nitaq Academy — SAT Diagnostic Backend

FastAPI backend powering the Nitaq Academy Digital SAT Diagnostic Assessment.

## Tech Stack
| Layer | Technology |
|---|---|
| Framework | FastAPI 0.115 |
| ORM | SQLAlchemy 2.0 |
| Migrations | Alembic |
| Database | PostgreSQL 16 |
| Auth | Argon2 + JWT |
| Runtime | Python 3.12 |

---

## Local Development (Recommended — Docker)

### Prerequisites
- Docker Desktop installed and running

### Steps

```bash
# 1. Copy env file
cp backend/.env.example backend/.env
# Edit backend/.env — set SECRET_KEY and ADMIN_BOOTSTRAP_SECRET

# 2. Start everything
docker compose up --build

# 3. Open API docs
open http://localhost:8000/docs
```

Docker Compose will automatically:
1. Start PostgreSQL 16
2. Run Alembic migrations (`alembic upgrade head`)
3. Seed 24 SAT questions + create the active DiagnosticTest
4. Start the FastAPI server with hot-reload

---

## Local Development (Without Docker)

### Prerequisites
- Python 3.12+
- PostgreSQL 16 running locally

```bash
cd backend

# 1. Create virtualenv
python -m venv .venv
source .venv/bin/activate      # macOS/Linux
# .venv\Scripts\activate       # Windows

# 2. Install dependencies
pip install -r requirements.txt

# 3. Configure environment
cp .env.example .env
# Edit .env — at minimum set DATABASE_URL, SECRET_KEY, ADMIN_BOOTSTRAP_SECRET

# 4. Run migrations
alembic upgrade head

# 5. Seed the database
python seed.py

# 6. Start the server
uvicorn app.main:app --reload --port 8000
```

---

## Creating the First Admin

After the server is running, create the super-admin:

```bash
curl -X POST http://localhost:8000/api/v1/admin/bootstrap \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nitaq Admin",
    "email": "admin@nitaqacademy.com",
    "password": "your-secure-password",
    "role": "SUPER_ADMIN",
    "bootstrap_secret": "your-ADMIN_BOOTSTRAP_SECRET-from-env"
  }'
```

Then log in at: `POST /api/v1/admin/login`

---

## API Overview

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/v1/students/register` | None | Register student, get session token |
| GET | `/api/v1/diagnostic/questions/{section}` | session_token | Get questions for MATH or READING_WRITING |
| POST | `/api/v1/diagnostic/submit-section` | session_token | Submit all answers for a section |
| GET | `/api/v1/diagnostic/results` | session_token | Get complete results after completion |
| POST | `/api/v1/admin/login` | None | Admin login, get JWT |
| GET | `/api/v1/admin/analytics/summary` | Admin JWT | Dashboard statistics |
| GET | `/api/v1/admin/students` | Admin JWT | List all student sessions |
| GET | `/api/v1/admin/students/{id}/result` | Admin JWT | View individual student result |
| PATCH | `/api/v1/admin/students/{id}/lead-status` | Admin JWT | Update lead status |
| GET | `/api/v1/admin/students/export/csv` | Admin JWT | Export all leads as CSV |
| GET | `/api/v1/admin/questions/` | Admin JWT | List questions |
| POST | `/api/v1/admin/questions/` | Admin JWT | Create question |
| PATCH | `/api/v1/admin/questions/{id}` | Admin JWT | Update question |
| DELETE | `/api/v1/admin/questions/{id}` | Admin JWT | Delete question |

Full interactive docs: `http://localhost:8000/docs`

---

## Project Structure

```
backend/
├── app/
│   ├── api/
│   │   ├── admin.py          # Admin auth + user management
│   │   ├── analytics.py      # Dashboard, student list, CSV export
│   │   ├── diagnostics.py    # Quiz flow, answer submission, results
│   │   ├── questions.py      # Admin question CRUD
│   │   └── students.py       # Student registration
│   ├── core/
│   │   ├── config.py         # Pydantic settings
│   │   ├── database.py       # SQLAlchemy engine + session
│   │   └── security.py       # Argon2 + JWT + auth dependencies
│   ├── models/               # SQLAlchemy ORM models
│   ├── schemas/              # Pydantic request/response schemas
│   ├── services/
│   │   ├── scoring_service.py        # Score calculation engine
│   │   └── recommendation_service.py # Prep recommendations
│   └── main.py               # FastAPI app entrypoint
├── alembic/                  # Database migrations
├── seed.py                   # 24-question seed data
├── requirements.txt
├── Dockerfile
└── .env.example
```

---

## Deployment (Production)

1. **Backend**: Deploy to Railway, Render, or a VPS. Set `ENVIRONMENT=production`.
2. **Database**: Use a managed PostgreSQL (Railway, Neon, Supabase, or AWS RDS).
3. **Env vars**: Set all values from `.env.example` in your hosting dashboard.
4. **CORS**: Set `CORS_ORIGINS` to `https://nitaqacademy.com,https://admin.nitaqacademy.com`.
5. **Custom domain**: Point `api.nitaqacademy.com` to your backend deployment.
