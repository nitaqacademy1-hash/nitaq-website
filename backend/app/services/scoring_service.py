"""
Scoring service — calculates per-domain and section scores from submitted answers.
Pure functions: no DB side effects, 100% deterministic, easy to unit test.
"""

from collections import defaultdict

from app.models.question import Domain, Section
from app.models.result import DomainStatus
from app.schemas.result import DomainResultSchema, MissedQuestion, QuestionReviewItem


# ── Domain → Section mapping ──────────────────────────────────────────────────
MATH_DOMAINS = {
    Domain.ALGEBRA,
    Domain.ADVANCED_MATH,
    Domain.PROBLEM_SOLVING_DATA_ANALYSIS,
    Domain.GEOMETRY_TRIGONOMETRY,
}

RW_DOMAINS = {
    Domain.INFORMATION_IDEAS,
    Domain.CRAFT_STRUCTURE,
    Domain.EXPRESSION_IDEAS,
    Domain.STANDARD_ENGLISH_CONVENTIONS,
}

DOMAIN_DISPLAY_NAMES: dict[Domain, str] = {
    Domain.ALGEBRA: "Algebra",
    Domain.ADVANCED_MATH: "Advanced Math",
    Domain.PROBLEM_SOLVING_DATA_ANALYSIS: "Problem-Solving & Data Analysis",
    Domain.GEOMETRY_TRIGONOMETRY: "Geometry & Trigonometry",
    Domain.INFORMATION_IDEAS: "Information & Ideas",
    Domain.CRAFT_STRUCTURE: "Craft & Structure",
    Domain.EXPRESSION_IDEAS: "Expression of Ideas",
    Domain.STANDARD_ENGLISH_CONVENTIONS: "Standard English Conventions",
}


def _domain_status(correct: int, total: int) -> DomainStatus:
    """Classify a domain result into STRONG / DEVELOPING / REVIEW."""
    if total == 0:
        return DomainStatus.REVIEW
    pct = correct / total
    if pct >= 0.67:  # 2/3 or 3/3 correct
        return DomainStatus.STRONG
    elif pct >= 0.34:  # 1/3 correct
        return DomainStatus.DEVELOPING
    else:  # 0/3 correct
        return DomainStatus.REVIEW


def _estimated_sat_score(total: int, out_of: int = 24) -> str:
    """
    Convert diagnostic score to indicative Digital SAT readiness range.
    Clearly represents readiness brackets rather than claiming an official College Board score.
    """
    pct = total / out_of if out_of else 0
    if pct >= 0.90:  # 22-24 / 24
        return "1450–1600 (Advanced)"
    elif pct >= 0.79:  # 19-21 / 24
        return "1350–1450 (Strong)"
    elif pct >= 0.67:  # 16-18 / 24
        return "1200–1350 (On-Track)"
    elif pct >= 0.54:  # 13-15 / 24
        return "1050–1200 (Developing)"
    elif pct >= 0.40:  # 10-12 / 24
        return "950–1050 (Foundational)"
    else:  # 0-9 / 24
        return "Foundational Practice Recommended"


def _overall_band(pct: float) -> str:
    """High-level readiness band based on total score percentage."""
    if pct >= 0.75:
        return "Strong Baseline"
    elif pct >= 0.50:
        return "Developing Readiness"
    else:
        return "Foundational Review Needed"


def compute_scores(answers_with_questions: list[dict]) -> dict:
    """
    answers_with_questions: list of dicts with keys:
        question_id, question_code, section, domain, difficulty,
        question_text, option_a, option_b, option_c, option_d,
        correct_answer, explanation, selected_answer, is_correct

    Returns:
        {
            "total_score": int,
            "math_score": int,
            "reading_writing_score": int,
            "total_questions": int,
            "domain_results": [DomainResultSchema, ...],
            "missed_questions": [MissedQuestion, ...],
            "question_reviews": [QuestionReviewItem, ...],
            "strong_domains": [...],
            "developing_domains": [...],
            "review_domains": [...],
            "overall_band": str,
            "estimated_sat_score": str,
            "percentage": float,
        }
    """
    domain_correct: dict[Domain, int] = defaultdict(int)
    domain_total: dict[Domain, int] = defaultdict(int)
    missed: list[MissedQuestion] = []
    question_reviews: list[QuestionReviewItem] = []

    total = 0
    math_score = 0
    rw_score = 0

    for row in answers_with_questions:
        domain = row["domain"]
        section = row["section"]
        is_correct = bool(row["is_correct"])

        selected_ans_str = (
            row["selected_answer"].value
            if hasattr(row["selected_answer"], "value")
            else str(row["selected_answer"])
        )
        correct_ans_str = (
            row["correct_answer"].value
            if hasattr(row["correct_answer"], "value")
            else str(row["correct_answer"])
        )

        domain_total[domain] += 1
        if is_correct:
            domain_correct[domain] += 1
            total += 1
            if section == Section.MATH:
                math_score += 1
            else:
                rw_score += 1
        else:
            missed.append(
                MissedQuestion(
                    question_id=row["question_id"],
                    question_code=row["question_code"],
                    question_text=row["question_text"],
                    option_a=row["option_a"],
                    option_b=row["option_b"],
                    option_c=row["option_c"],
                    option_d=row["option_d"],
                    selected_answer=selected_ans_str,
                    correct_answer=correct_ans_str,
                    explanation=row["explanation"],
                    domain=domain,
                    section=section,
                )
            )

        # Record full question review item
        question_reviews.append(
            QuestionReviewItem(
                question_id=row["question_id"],
                question_code=row["question_code"],
                question_text=row["question_text"],
                option_a=row["option_a"],
                option_b=row["option_b"],
                option_c=row["option_c"],
                option_d=row["option_d"],
                selected_answer=selected_ans_str,
                correct_answer=correct_ans_str,
                is_correct=is_correct,
                explanation=row["explanation"],
                domain=domain,
                section=section,
            )
        )

    # Build domain results
    domain_results: list[DomainResultSchema] = []
    strong, developing, review = [], [], []

    # Preserve consistent domain order: Math first, then Reading & Writing
    ordered_domains = [
        Domain.ALGEBRA,
        Domain.ADVANCED_MATH,
        Domain.PROBLEM_SOLVING_DATA_ANALYSIS,
        Domain.GEOMETRY_TRIGONOMETRY,
        Domain.INFORMATION_IDEAS,
        Domain.CRAFT_STRUCTURE,
        Domain.EXPRESSION_IDEAS,
        Domain.STANDARD_ENGLISH_CONVENTIONS,
    ]

    for domain in ordered_domains:
        total_q = domain_total.get(domain, 0)
        if total_q == 0:
            continue
        correct = domain_correct.get(domain, 0)
        pct = round(correct / total_q * 100, 1)
        status = _domain_status(correct, total_q)
        sec = Section.MATH if domain in MATH_DOMAINS else Section.READING_WRITING

        domain_results.append(
            DomainResultSchema(
                section=sec,
                domain=domain,
                correct_count=correct,
                total_questions=total_q,
                percentage=pct,
                status=status,
            )
        )

        display = DOMAIN_DISPLAY_NAMES[domain]
        if status == DomainStatus.STRONG:
            strong.append(display)
        elif status == DomainStatus.DEVELOPING:
            developing.append(display)
        else:
            review.append(display)

    total_questions = sum(domain_total.values())
    overall_pct = round(total / total_questions * 100, 1) if total_questions else 0

    return {
        "total_score": total,
        "math_score": math_score,
        "reading_writing_score": rw_score,
        "total_questions": total_questions,
        "domain_results": domain_results,
        "missed_questions": missed,
        "question_reviews": question_reviews,
        "strong_domains": strong,
        "developing_domains": developing,
        "review_domains": review,
        "overall_band": _overall_band(overall_pct / 100),
        "estimated_sat_score": _estimated_sat_score(total, total_questions),
        "percentage": overall_pct,
    }
