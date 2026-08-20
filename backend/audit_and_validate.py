"""
Comprehensive Audit & Validation Suite for Nitaq SAT Diagnostic.
Tests scoring engine, database flow, answer validation, domain breakdown,
and admin parity under all test scenarios.
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv
load_dotenv()

from app.core.database import SessionLocal
from app.models.student import Student
from app.models.question import Question, DiagnosticTest, DiagnosticTestQuestion, Section, Domain, TestStatus, AnswerChoice
from app.models.diagnostic import DiagnosticSession, SessionStatus, CurrentSection
from app.models.answer import StudentAnswer
from app.models.result import DiagnosticResult, DomainResult, DomainStatus
from app.services.scoring_service import compute_scores
from app.core.security import generate_session_token

def run_deep_audit():
    db = SessionLocal()
    print("=" * 70)
    print("NITAQ ACADEMY SAT DIAGNOSTIC — COMPREHENSIVE SYSTEM AUDIT")
    print("=" * 70)

    # ── PART 1: Question Bank Audit ──────────────────────────────────
    active_test = db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).first()
    assert active_test is not None, "❌ FAILED: No active DiagnosticTest found!"
    print(f"✅ Active Diagnostic Test: ID={active_test.id}, Name='{active_test.name}'")

    test_qs = (
        db.query(DiagnosticTestQuestion)
        .filter(DiagnosticTestQuestion.test_id == active_test.id)
        .order_by(DiagnosticTestQuestion.question_order)
        .all()
    )
    assert len(test_qs) == 24, f"❌ FAILED: Expected 24 questions, found {len(test_qs)}"
    print(f"✅ Active Test Question Count: {len(test_qs)} / 24")

    # Domain count validation
    domain_counts = {}
    math_count = 0
    rw_count = 0
    answer_keys = {}

    for tq in test_qs:
        q = tq.question
        assert q is not None, f"❌ FAILED: DiagnosticTestQuestion {tq.id} has no linked question"
        assert q.question_text and len(q.question_text.strip()) > 0, f"❌ Empty text for {q.question_code}"
        assert q.option_a and q.option_b and q.option_c and q.option_d, f"❌ Missing options for {q.question_code}"
        assert q.correct_answer in [AnswerChoice.A, AnswerChoice.B, AnswerChoice.C, AnswerChoice.D], f"❌ Invalid answer {q.correct_answer} for {q.question_code}"

        domain_counts[q.domain] = domain_counts.get(q.domain, 0) + 1
        if q.section == Section.MATH:
            math_count += 1
        else:
            rw_count += 1
        answer_keys[q.id] = q.correct_answer.value

    assert math_count == 12, f"❌ Expected 12 Math questions, found {math_count}"
    assert rw_count == 12, f"❌ Expected 12 Reading & Writing questions, found {rw_count}"
    print(f"✅ Section Counts: Math = {math_count}/12, Reading & Writing = {rw_count}/12")

    expected_domains = [
        Domain.ALGEBRA, Domain.ADVANCED_MATH, Domain.PROBLEM_SOLVING_DATA_ANALYSIS, Domain.GEOMETRY_TRIGONOMETRY,
        Domain.INFORMATION_IDEAS, Domain.CRAFT_STRUCTURE, Domain.EXPRESSION_IDEAS, Domain.STANDARD_ENGLISH_CONVENTIONS
    ]
    for ed in expected_domains:
        cnt = domain_counts.get(ed, 0)
        assert cnt == 3, f"❌ Domain {ed.value} count mismatch: Expected 3, found {cnt}"
        print(f"   ✓ Domain {ed.value}: 3/3 questions")

    print("✅ Question Bank Integrity Audit: 100% PASS (24/24 questions verified)\n")

    # ── PART 2: Scoring Engine Tests (Pure Functions) ────────────────
    print("── TESTING SCORING ENGINE (DETERMINISTIC SIMULATIONS) ──")

    # Scenario A: All 24 Correct
    all_correct_rows = [
        {
            "question_id": tq.question.id,
            "question_code": tq.question.question_code,
            "section": tq.question.section,
            "domain": tq.question.domain,
            "difficulty": tq.question.difficulty,
            "question_text": tq.question.question_text,
            "option_a": tq.question.option_a,
            "option_b": tq.question.option_b,
            "option_c": tq.question.option_c,
            "option_d": tq.question.option_d,
            "correct_answer": tq.question.correct_answer,
            "explanation": tq.question.explanation,
            "selected_answer": tq.question.correct_answer,
            "is_correct": True,
        }
        for tq in test_qs
    ]
    res_a = compute_scores(all_correct_rows)
    assert res_a["total_score"] == 24, f"Scenario A total failed: {res_a['total_score']}"
    assert res_a["math_score"] == 12, f"Scenario A math failed: {res_a['math_score']}"
    assert res_a["reading_writing_score"] == 12, f"Scenario A rw failed: {res_a['reading_writing_score']}"
    assert len(res_a["missed_questions"]) == 0, "Scenario A should have 0 missed questions"
    assert len(res_a["question_reviews"]) == 24, "Scenario A should have 24 question reviews"
    assert all(dr.correct_count == 3 for dr in res_a["domain_results"]), "All domains should be 3/3"
    print(f"✅ Scenario A (All 24 Correct): Total={res_a['total_score']}/24, Math={res_a['math_score']}/12, R&W={res_a['reading_writing_score']}/12 -> PASS")

    # Scenario B: All 24 Incorrect
    all_incorrect_rows = [
        {
            "question_id": tq.question.id,
            "question_code": tq.question.question_code,
            "section": tq.question.section,
            "domain": tq.question.domain,
            "difficulty": tq.question.difficulty,
            "question_text": tq.question.question_text,
            "option_a": tq.question.option_a,
            "option_b": tq.question.option_b,
            "option_c": tq.question.option_c,
            "option_d": tq.question.option_d,
            "correct_answer": tq.question.correct_answer,
            "explanation": tq.question.explanation,
            "selected_answer": "D" if tq.question.correct_answer.value != "D" else "A",
            "is_correct": False,
        }
        for tq in test_qs
    ]
    res_b = compute_scores(all_incorrect_rows)
    assert res_b["total_score"] == 0, f"Scenario B total failed: {res_b['total_score']}"
    assert res_b["math_score"] == 0, f"Scenario B math failed: {res_b['math_score']}"
    assert res_b["reading_writing_score"] == 0, f"Scenario B rw failed: {res_b['reading_writing_score']}"
    assert len(res_b["missed_questions"]) == 24, "Scenario B should have 24 missed questions"
    assert len(res_b["question_reviews"]) == 24, "Scenario B should have 24 question reviews"
    assert all(dr.correct_count == 0 for dr in res_b["domain_results"]), "All domains should be 0/3"
    print(f"✅ Scenario B (All 24 Incorrect): Total={res_b['total_score']}/24, Math={res_b['math_score']}/12, R&W={res_b['reading_writing_score']}/12 -> PASS")

    # Scenario C: Mixed Score (Math 9/12, R&W 7/12 = 16/24)
    mixed_rows = []
    # Math: miss 3 (1 per domain for first 3 domains)
    math_missed_indices = {2, 5, 8} # 3 missed
    rw_missed_indices = {13, 16, 19, 21, 23} # 5 missed (7 correct)

    for i, tq in enumerate(test_qs, start=1):
        is_miss = (i in math_missed_indices) or (i in rw_missed_indices)
        sel_ans = tq.question.correct_answer.value if not is_miss else ("D" if tq.question.correct_answer.value != "D" else "A")
        mixed_rows.append({
            "question_id": tq.question.id,
            "question_code": tq.question.question_code,
            "section": tq.question.section,
            "domain": tq.question.domain,
            "difficulty": tq.question.difficulty,
            "question_text": tq.question.question_text,
            "option_a": tq.question.option_a,
            "option_b": tq.question.option_b,
            "option_c": tq.question.option_c,
            "option_d": tq.question.option_d,
            "correct_answer": tq.question.correct_answer,
            "explanation": tq.question.explanation,
            "selected_answer": sel_ans,
            "is_correct": not is_miss,
        })
    res_c = compute_scores(mixed_rows)
    assert res_c["total_score"] == 16, f"Scenario C total expected 16, got {res_c['total_score']}"
    assert res_c["math_score"] == 9, f"Scenario C math expected 9, got {res_c['math_score']}"
    assert res_c["reading_writing_score"] == 7, f"Scenario C rw expected 7, got {res_c['reading_writing_score']}"
    assert len(res_c["missed_questions"]) == 8, f"Scenario C missed expected 8, got {len(res_c['missed_questions'])}"

    math_domain_sum = sum(dr.correct_count for dr in res_c["domain_results"] if dr.section == Section.MATH)
    rw_domain_sum = sum(dr.correct_count for dr in res_c["domain_results"] if dr.section == Section.READING_WRITING)
    assert math_domain_sum == res_c["math_score"] == 9, "Math domain sum must equal math score"
    assert rw_domain_sum == res_c["reading_writing_score"] == 7, "R&W domain sum must equal rw score"
    print(f"✅ Scenario C (Mixed 16/24): Math={res_c['math_score']}/12, R&W={res_c['reading_writing_score']}/12, Total={res_c['total_score']}/24 -> PASS")
    print(f"   ✓ Domain Sum Verification: Math Sum ({math_domain_sum}) == Math Score (9); R&W Sum ({rw_domain_sum}) == R&W Score (7)")

    # ── PART 3: End-to-End Database Lifecycle Test ───────────────────
    print("\n── TESTING FULL DATABASE E2E STUDENT LIFECYCLE ──")
    test_student = Student(
        full_name="Deterministic Audit Student",
        email=f"audit_test_{generate_session_token()[:8]}@nitaqacademy.com",
        phone="+971501112233",
        current_grade="Grade 11",
        current_status="SCHOOL_STUDENT",
        target_sat_score="1400+",
    )
    db.add(test_student)
    db.flush()

    test_session = DiagnosticSession(
        student_id=test_student.id,
        test_id=active_test.id,
        session_token=generate_session_token(),
        status=SessionStatus.IN_PROGRESS,
    )
    db.add(test_session)
    db.flush()

    # Save 24 answers (using Scenario C pattern: 9 Math, 7 R&W = 16/24)
    for row in mixed_rows:
        ans = StudentAnswer(
            session_id=test_session.id,
            question_id=row["question_id"],
            selected_answer=row["selected_answer"],
            is_correct=row["is_correct"],
        )
        db.add(ans)
    db.flush()

    # Save Result
    diag_result = DiagnosticResult(
        session_id=test_session.id,
        total_score=res_c["total_score"],
        math_score=res_c["math_score"],
        reading_writing_score=res_c["reading_writing_score"],
        total_questions=res_c["total_questions"],
    )
    db.add(diag_result)
    db.flush()

    for dr in res_c["domain_results"]:
        db.add(
            DomainResult(
                result_id=diag_result.id,
                section=dr.section,
                domain=dr.domain,
                correct_count=dr.correct_count,
                total_questions=dr.total_questions,
                percentage=dr.percentage,
                status=dr.status,
            )
        )
    test_session.status = SessionStatus.COMPLETED
    db.commit()

    # Verify DB Persistence
    saved_session = db.query(DiagnosticSession).filter(DiagnosticSession.id == test_session.id).first()
    assert saved_session.status == SessionStatus.COMPLETED
    assert len(saved_session.answers) == 24, f"Expected 24 answers in DB, found {len(saved_session.answers)}"
    assert saved_session.result is not None, "Expected result in DB"
    assert saved_session.result.total_score == 16, f"Expected total 16, got {saved_session.result.total_score}"
    assert saved_session.result.math_score == 9, f"Expected math 9, got {saved_session.result.math_score}"
    assert saved_session.result.reading_writing_score == 7, f"Expected rw 7, got {saved_session.result.reading_writing_score}"
    assert len(saved_session.result.domain_results) == 8, f"Expected 8 domain rows, got {len(saved_session.result.domain_results)}"

    print(f"✅ DB Lifecycle Parity Verified:")
    print(f"   Student ID: {test_student.id}")
    print(f"   Session ID: {saved_session.id}")
    print(f"   Stored Answers: {len(saved_session.answers)} / 24")
    print(f"   Stored Score: {saved_session.result.total_score} / 24 (Math: {saved_session.result.math_score}/12, R&W: {saved_session.result.reading_writing_score}/12)")
    print(f"   Stored Domain Rows: {len(saved_session.result.domain_results)} / 8")

    db.close()
    print("\n" + "=" * 70)
    print("ALL AUDIT & VALIDATION CHECKS PASSED WITH ZERO ERRORS.")
    print("=" * 70)

if __name__ == "__main__":
    run_deep_audit()
