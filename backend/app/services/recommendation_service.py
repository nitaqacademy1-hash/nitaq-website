"""
Recommendation service — fetches domain recommendations from the database
and falls back to a hardcoded set if the DB is empty.
"""

from sqlalchemy.orm import Session

from app.models.question import Domain
from app.models.result import DomainStatus, Recommendation
from app.schemas.result import RecommendationSchema


# ── Fallback hardcoded recommendations (used if DB has none) ──────────────────
_FALLBACK: dict[tuple[Domain, DomainStatus], dict] = {
    # ── Math domains ─────────────────────────────────────────────────────────
    (Domain.ALGEBRA, DomainStatus.REVIEW): {
        "title": "Algebra Foundations Need Attention",
        "description": "Focus on mastering linear equations and systems before progressing.",
        "topics": "Linear equations, Systems of equations, Linear functions, Inequalities",
        "priority": 1,
    },
    (Domain.ALGEBRA, DomainStatus.DEVELOPING): {
        "title": "Algebra Is Developing — Keep Pushing",
        "description": "You have the basics. Practice word-problem translation and multi-step equations.",
        "topics": "Word problems, Multi-step equations, Function notation",
        "priority": 2,
    },
    (Domain.ALGEBRA, DomainStatus.STRONG): {
        "title": "Algebra Is a Strength — Maintain It",
        "description": "Your algebra foundation is solid. Focus on harder applications in Advanced Math.",
        "topics": "Challenging algebra proofs, Function composition",
        "priority": 3,
    },
    (Domain.ADVANCED_MATH, DomainStatus.REVIEW): {
        "title": "Advanced Math Requires Focused Study",
        "description": "Quadratics and nonlinear functions need significant work.",
        "topics": "Quadratic equations, Polynomials, Exponential functions, Rational equations",
        "priority": 1,
    },
    (Domain.ADVANCED_MATH, DomainStatus.DEVELOPING): {
        "title": "Advanced Math Is Progressing",
        "description": "Strengthen your quadratic fluency and polynomial factoring skills.",
        "topics": "Factoring, Completing the square, Parabolas",
        "priority": 2,
    },
    (Domain.ADVANCED_MATH, DomainStatus.STRONG): {
        "title": "Advanced Math — Excellent",
        "description": "Great performance. Polish edge cases like radical equations.",
        "topics": "Radical equations, Complex functions",
        "priority": 3,
    },
    (Domain.PROBLEM_SOLVING_DATA_ANALYSIS, DomainStatus.REVIEW): {
        "title": "Data Analysis Needs Immediate Focus",
        "description": "Practice real-world data problems, percentages, and statistical interpretation.",
        "topics": "Percentages, Ratios, Statistics, Data tables, Scatterplots, Probability",
        "priority": 1,
    },
    (Domain.PROBLEM_SOLVING_DATA_ANALYSIS, DomainStatus.DEVELOPING): {
        "title": "Data Analysis Is On Track",
        "description": "Continue with statistical reasoning and graphical data interpretation.",
        "topics": "Mean/median/mode, Two-way tables, Sample reasoning",
        "priority": 2,
    },
    (Domain.PROBLEM_SOLVING_DATA_ANALYSIS, DomainStatus.STRONG): {
        "title": "Data Analysis Is Strong",
        "description": "Focus on the hardest data problems: inference and sampling.",
        "topics": "Complex probability, Experimental design",
        "priority": 3,
    },
    (Domain.GEOMETRY_TRIGONOMETRY, DomainStatus.REVIEW): {
        "title": "Geometry & Trigonometry Needs Work",
        "description": "Review core geometry formulas and begin with basic trig ratios.",
        "topics": "Area & volume, Angles, Similar triangles, SOHCAHTOA, Unit circle basics",
        "priority": 1,
    },
    (Domain.GEOMETRY_TRIGONOMETRY, DomainStatus.DEVELOPING): {
        "title": "Geometry Is Developing",
        "description": "Practice coordinate geometry and trigonometric identities.",
        "topics": "Coordinate geometry, Pythagorean theorem, Sine rule",
        "priority": 2,
    },
    (Domain.GEOMETRY_TRIGONOMETRY, DomainStatus.STRONG): {
        "title": "Geometry Is a Strength",
        "description": "Target advanced trig and 3D problems for top-tier performance.",
        "topics": "Radians, Trig graphs, 3D geometry",
        "priority": 3,
    },
    # ── Reading & Writing domains ──────────────────────────────────────────────
    (Domain.INFORMATION_IDEAS, DomainStatus.REVIEW): {
        "title": "Reading Comprehension Needs Attention",
        "description": "Build active reading habits and evidence-based answering techniques.",
        "topics": "Main idea, Text evidence, Inferences, Central claim, Author purpose",
        "priority": 1,
    },
    (Domain.INFORMATION_IDEAS, DomainStatus.DEVELOPING): {
        "title": "Reading Comprehension Is Developing",
        "description": "Practice distinguishing strong vs weak evidence choices.",
        "topics": "Command of evidence, Cross-text connections, Paired passages",
        "priority": 2,
    },
    (Domain.INFORMATION_IDEAS, DomainStatus.STRONG): {
        "title": "Reading Comprehension Is Strong",
        "description": "Focus on speed and the most challenging inference questions.",
        "topics": "Complex inference, Data interpretation in passages",
        "priority": 3,
    },
    (Domain.CRAFT_STRUCTURE, DomainStatus.REVIEW): {
        "title": "Vocabulary & Text Structure Needs Focus",
        "description": "Build academic vocabulary and practice text-structure identification.",
        "topics": "Words in context, Text structure, Author's purpose, Cross-text analysis",
        "priority": 1,
    },
    (Domain.CRAFT_STRUCTURE, DomainStatus.DEVELOPING): {
        "title": "Craft & Structure Is Developing",
        "description": "Focus on academic vocabulary in context and dual-passage questions.",
        "topics": "Vocabulary in context, Tone & purpose, Dual texts",
        "priority": 2,
    },
    (Domain.CRAFT_STRUCTURE, DomainStatus.STRONG): {
        "title": "Craft & Structure Is Strong",
        "description": "Target the trickiest vocabulary nuance and literary analysis items.",
        "topics": "Subtle vocabulary distinctions, Rhetorical effect",
        "priority": 3,
    },
    (Domain.EXPRESSION_IDEAS, DomainStatus.REVIEW): {
        "title": "Expression of Ideas Needs Work",
        "description": "Practice adding and revising ideas to make arguments more effective.",
        "topics": "Rhetorical synthesis, Adding evidence, Transitions, Combining information",
        "priority": 1,
    },
    (Domain.EXPRESSION_IDEAS, DomainStatus.DEVELOPING): {
        "title": "Expression of Ideas Is Developing",
        "description": "Refine your transitions and practice citing evidence within notes tasks.",
        "topics": "Effective transitions, Notes-based synthesis, Revision strategy",
        "priority": 2,
    },
    (Domain.EXPRESSION_IDEAS, DomainStatus.STRONG): {
        "title": "Expression of Ideas Is Strong",
        "description": "You're handling rhetorical tasks well. Focus on the hardest synthesis items.",
        "topics": "Complex synthesis, Nuanced revision decisions",
        "priority": 3,
    },
    (Domain.STANDARD_ENGLISH_CONVENTIONS, DomainStatus.REVIEW): {
        "title": "Grammar & Conventions Need Significant Work",
        "description": "Focus on sentence boundaries, subject-verb agreement, and punctuation rules.",
        "topics": "Run-ons & fragments, Subject-verb agreement, Comma rules, Apostrophes, Modifiers",
        "priority": 1,
    },
    (Domain.STANDARD_ENGLISH_CONVENTIONS, DomainStatus.DEVELOPING): {
        "title": "Grammar Is Developing",
        "description": "Target pronoun agreement and complex punctuation patterns.",
        "topics": "Pronoun case, Colons & semicolons, Parallel structure",
        "priority": 2,
    },
    (Domain.STANDARD_ENGLISH_CONVENTIONS, DomainStatus.STRONG): {
        "title": "Grammar Is a Strength",
        "description": "Polish your understanding of nuanced conventions like verb mood and dash usage.",
        "topics": "Subjunctive mood, Dash & parenthetical usage, Complex modifiers",
        "priority": 3,
    },
}


def get_recommendations(
    db: Session,
    domain_results: list,
) -> list[RecommendationSchema]:
    """
    Returns recommendations for each domain based on the student's DomainStatus.
    Tries DB first, falls back to hardcoded.
    """
    recommendations: list[RecommendationSchema] = []

    for dr in domain_results:
        domain: Domain = dr.domain
        status: DomainStatus = dr.status

        # Try DB
        db_rec: Recommendation | None = (
            db.query(Recommendation)
            .filter(
                Recommendation.domain == domain,
                Recommendation.score_condition == status,
                Recommendation.is_active == True,
            )
            .order_by(Recommendation.priority)
            .first()
        )

        if db_rec:
            recommendations.append(
                RecommendationSchema(
                    domain=domain,
                    title=db_rec.title,
                    description=db_rec.description,
                    topics=db_rec.topics_list(),
                    priority=db_rec.priority,
                )
            )
        else:
            fallback = _FALLBACK.get((domain, status))
            if fallback:
                recommendations.append(
                    RecommendationSchema(
                        domain=domain,
                        title=fallback["title"],
                        description=fallback["description"],
                        topics=[t.strip() for t in fallback["topics"].split(",")],
                        priority=fallback["priority"],
                    )
                )

    # Sort: REVIEW first, then DEVELOPING, then STRONG; then by domain order
    priority_order = {DomainStatus.REVIEW: 0, DomainStatus.DEVELOPING: 1, DomainStatus.STRONG: 2}
    domain_status_map = {dr.domain: dr.status for dr in domain_results}
    recommendations.sort(
        key=lambda r: (priority_order.get(domain_status_map.get(r.domain, DomainStatus.REVIEW), 3), r.priority)
    )

    return recommendations
