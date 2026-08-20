"""
Initialize Supabase database:
- Creates all database schema tables
- Creates the active DiagnosticTest container
- Creates the Super Admin user (nitaqacademy@gmail.com)
- NO questions seeded (ready for manual entry)
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv
load_dotenv()

from app.core.database import SessionLocal, engine, Base
import app.models  # registers all models with Base
from app.models.admin import AdminUser, AdminRole
from app.models.question import DiagnosticTest, TestStatus
from app.core.security import hash_password


def init_db():
    print("⏳ Creating database tables in Supabase...")
    Base.metadata.create_all(bind=engine)
    print("✅ Tables created successfully.")

    db = SessionLocal()
    try:
        # 1. Create or verify active test container
        test = db.query(DiagnosticTest).filter(DiagnosticTest.version == 1).first()
        if not test:
            test = DiagnosticTest(
                name="Nitaq SAT Diagnostic — Main",
                description="Digital SAT Diagnostic Assessment",
                version=1,
                status=TestStatus.ACTIVE,
                show_answer_review=True,
            )
            db.add(test)
            db.flush()
            print(f"✅ Created active DiagnosticTest (ID: {test.id})")
        else:
            print(f"ℹ️  DiagnosticTest already exists (ID: {test.id})")

        # 2. Create Super Admin user
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
            print(f"✅ Created Super Admin: {admin_email}")
        else:
            admin.password_hash = hash_password("nitaqadmin@321")
            admin.is_active = True
            admin.role = AdminRole.SUPER_ADMIN
            print(f"✅ Updated Super Admin credentials: {admin_email}")

        db.commit()
        print("\n🎉 Database initialization complete!")
        print("Ready for manual question entry in the Admin Portal.")
    except Exception as e:
        db.rollback()
        print(f"❌ Error: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    init_db()
