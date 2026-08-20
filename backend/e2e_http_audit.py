"""
End-to-End HTTP API Audit against the live running backend using standard library (urllib).
Validates the entire workflow from registration to student and admin results parity.
"""

import json
import urllib.request
import urllib.error

BASE_URL = "http://127.0.0.1:8000/api/v1"

def http_post(url, data=None, headers=None):
    headers = headers or {}
    headers["Content-Type"] = "application/json"
    body = json.dumps(data).encode("utf-8") if data is not None else None
    req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    with urllib.request.urlopen(req) as resp:
        return resp.status, json.loads(resp.read().decode("utf-8"))

def http_get(url, headers=None):
    headers = headers or {}
    req = urllib.request.Request(url, headers=headers, method="GET")
    with urllib.request.urlopen(req) as resp:
        return resp.status, json.loads(resp.read().decode("utf-8"))

def run_http_audit():
    print("=" * 70)
    print("LIVE HTTP END-TO-END AUDIT")
    print("=" * 70)

    # 1. Register student
    reg_payload = {
        "full_name": "E2E Verified Student",
        "email": "e2e_audit_student_3@nitaqacademy.com",
        "phone": "+971501234567",
        "current_grade": "Grade 11",
        "current_status": "SCHOOL_STUDENT",
        "target_sat_score": "1400+",
    }
    status, reg_data = http_post(f"{BASE_URL}/students/register", reg_payload)
    assert status == 201, f"Register failed: {reg_data}"
    token = reg_data["session_token"]
    session_id = reg_data["session_id"]
    print(f"✅ 1. Student Registered: Session ID={session_id}, Token={token[:10]}...")

    # 2. Fetch Math Questions
    status, math_data = http_get(f"{BASE_URL}/diagnostic/questions/MATH?session_token={token}")
    assert status == 200, f"Math questions failed: {math_data}"
    assert len(math_data["questions"]) == 12, f"Expected 12 math questions, got {len(math_data['questions'])}"
    print(f"✅ 2. Math Questions Loaded: {len(math_data['questions'])} / 12")

    # 3. Submit Section 1 (Math)
    math_answers = [{"question_id": q["id"], "selected_answer": "B"} for q in math_data["questions"]]
    status, math_submit_res = http_post(
        f"{BASE_URL}/diagnostic/submit-section?session_token={token}",
        {"section": "MATH", "answers": math_answers}
    )
    assert status == 200, f"Math submit failed: {math_submit_res}"
    print(f"✅ 3. Math Section Submitted: Score = {math_submit_res.get('section_score')}/{math_submit_res.get('section_total')}")

    # 4. Fetch Reading & Writing Questions
    status, rw_data = http_get(f"{BASE_URL}/diagnostic/questions/READING_WRITING?session_token={token}")
    assert status == 200, f"RW questions failed: {rw_data}"
    assert len(rw_data["questions"]) == 12, f"Expected 12 RW questions, got {len(rw_data['questions'])}"
    print(f"✅ 4. Reading & Writing Questions Loaded: {len(rw_data['questions'])} / 12")

    # 5. Submit Section 2 (Reading & Writing)
    rw_answers = [{"question_id": q["id"], "selected_answer": "B"} for q in rw_data["questions"]]
    status, rw_submit_res = http_post(
        f"{BASE_URL}/diagnostic/submit-section?session_token={token}",
        {"section": "READING_WRITING", "answers": rw_answers}
    )
    assert status == 200, f"RW submit failed: {rw_submit_res}"
    print(f"✅ 5. Reading & Writing Section Submitted: Score = {rw_submit_res.get('section_score')}/{rw_submit_res.get('section_total')}")

    # 6. Fetch Final Student Diagnostic Result
    status, student_res = http_get(f"{BASE_URL}/diagnostic/results?session_token={token}")
    assert status == 200, f"Get results failed: {student_res}"
    print(f"\n✅ 6. Student Result Retrieved:")
    print(f"   Total Score: {student_res['total_score']} / {student_res['total_questions']}")
    print(f"   Math Score: {student_res['math_score']} / 12")
    print(f"   Reading & Writing: {student_res['reading_writing_score']} / 12")
    print(f"   Estimated SAT Readiness: {student_res['estimated_sat_score']}")
    print(f"   Domain Results Count: {len(student_res['domain_results'])} / 8")
    print(f"   Question Reviews Count: {len(student_res['question_reviews'])} / 24")

    # 7. Admin Login & Check Result Parity
    status, login_data = http_post(f"{BASE_URL}/admin/login", {
        "email": "nitaqacademy@gmail.com",
        "password": "nitaqadmin@321"
    })
    assert status == 200, f"Admin login failed: {login_data}"
    admin_token = login_data["access_token"]

    status, admin_res = http_get(
        f"{BASE_URL}/admin/students/{session_id}/result",
        headers={"Authorization": f"Bearer {admin_token}"}
    )
    assert status == 200, f"Admin get result failed: {admin_res}"

    # 8. STRICT PARITY ASSERTIONS
    assert admin_res["total_score"] == student_res["total_score"] == 15, f"Expected 15 total, got {student_res['total_score']}"
    assert admin_res["math_score"] == student_res["math_score"] == 7, f"Expected 7 math, got {student_res['math_score']}"
    assert admin_res["reading_writing_score"] == student_res["reading_writing_score"] == 8, f"Expected 8 rw, got {student_res['reading_writing_score']}"
    assert admin_res["total_questions"] == student_res["total_questions"] == 24, "Total questions parity failed"
    assert admin_res["estimated_sat_score"] == student_res["estimated_sat_score"], "Estimated score parity failed"
    assert len(admin_res["domain_results"]) == len(student_res["domain_results"]) == 8, "Domain results count parity failed"
    assert len(admin_res["question_reviews"]) == len(student_res["question_reviews"]) == 24, "Question review count parity failed"

    print("\n✅ 8. STRICT ADMIN <-> STUDENT RESULT PARITY: 100% IDENTICAL")
    print("=" * 70)
    print("ALL LIVE END-TO-END AUDIT CHECKS PASSED WITH ZERO DEFECTS.")
    print("=" * 70)

if __name__ == "__main__":
    run_http_audit()
