"""
Clean all test data (questions, test questions, students, answers, sessions, results)
while preserving:
1. Super Admin user (nitaqacademy@gmail.com)
2. Active DiagnosticTest container (Version 1)
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv
load_dotenv()

from sqlalchemy import text
from app.core.database import SessionLocal, engine, Base
import app.models
from app.models.admin import AdminUser, AdminRole
from app.models.question import DiagnosticTest, TestStatus
from app.core.security import hash_password

def clean_database():
    db = SessionLocal()
    try:
        print("🧹 Cleaning all test data from Supabase...")

        # Delete dependent child tables first
        db.execute(text("DELETE FROM domain_results;"))
        db.execute(text("DELETE FROM diagnostic_results;"))
        db.execute(text("DELETE FROM student_answers;"))
        db.execute(text("DELETE FROM diagnostic_sessions;"))
        db.execute(text("DELETE FROM students;"))
        db.execute(text("DELETE FROM diagnostic_test_questions;"))
        db.execute(text("DELETE FROM questions;"))
        db.execute(text("DELETE FROM diagnostic_tests;"))

        db.commit()
        print("✅ Cleared: questions, test_questions, students, sessions, answers, results, domain_results.")

        # Re-create active Diagnostic Test container
        test = DiagnosticTest(
            id=1,
            name="Nitaq SAT Diagnostic — Main",
            description="Digital SAT Diagnostic Assessment",
            version=1,
            status=TestStatus.ACTIVE,
            show_answer_review=True,
        )
        db.add(test)

        # Ensure Super Admin exists and is active
        admin_email = "nitaqacademy@gmail.com"
        admin = db.query(AdminUser).filter(AdminUser.email == admin_email).first()
        if not admin:
            admin = AdminUser(
                name="Nitaq Admin",
                email=admin_email,
                password_hash=hash_password("nitaqadmin@321"),
                role=AdminRole.SUPER_ADMIN,
                is_active=True,
            )
            db.add(admin)
        else:
            admin.password_hash = hash_password("nitaqadmin@321")
            admin.is_active = True
            admin.role = AdminRole.SUPER_ADMIN

        db.commit()
        print("✅ Preserved / Reinitialized Active Diagnostic Test (ID: 1)")
        print(f"✅ Preserved Super Admin: {admin_email}")
        print("\n🎉 Database is 100% clean and ready for manual question entry!")

    except Exception as e:
        db.rollback()
        print(f"❌ Error during clean: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    clean_database()
