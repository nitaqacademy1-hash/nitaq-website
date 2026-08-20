"""
Seed script — inserts 24 SAT-style questions (3 per domain × 8 domains)
and creates one active DiagnosticTest.

Run from backend/ directory:
    python seed.py
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# Load .env
from dotenv import load_dotenv
load_dotenv()

from app.core.database import SessionLocal, engine
from app.core.database import Base
import app.models  # registers all models with Base

from app.models.question import (
    Question, DiagnosticTest, DiagnosticTestQuestion,
    Section, Domain, Difficulty, AnswerChoice, TestStatus,
)

QUESTIONS = [
    # ══════════════════════════════════════════════════════════════════
    # SECTION 1: MATH — 12 questions (3 per domain)
    # ══════════════════════════════════════════════════════════════════

    # ─── ALGEBRA (3) ──────────────────────────────────────────────────
    {
        "question_code": "MATH-ALG-001",
        "section": Section.MATH,
        "domain": Domain.ALGEBRA,
        "difficulty": Difficulty.EASY,
        "question_text": "If 3x − 7 = 14, what is the value of x?",
        "option_a": "5",
        "option_b": "7",
        "option_c": "3",
        "option_d": "9",
        "correct_answer": AnswerChoice.B,
        "explanation": "Add 7 to both sides: 3x = 21. Divide by 3: x = 7.",
    },
    {
        "question_code": "MATH-ALG-002",
        "section": Section.MATH,
        "domain": Domain.ALGEBRA,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "A gym charges a one-time registration fee of $45 and a monthly fee of $30. "
            "Which equation represents the total cost C (in dollars) for m months of membership?"
        ),
        "option_a": "C = 30m",
        "option_b": "C = 45m + 30",
        "option_c": "C = 30m + 45",
        "option_d": "C = 75m",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "The total cost is a fixed $45 registration plus $30 per month. "
            "So C = 30m + 45."
        ),
    },
    {
        "question_code": "MATH-ALG-003",
        "section": Section.MATH,
        "domain": Domain.ALGEBRA,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "If 2x + y = 10 and x − y = 2, what is the value of x?"
        ),
        "option_a": "3",
        "option_b": "4",
        "option_c": "5",
        "option_d": "6",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Add the two equations: 3x = 12, so x = 4. "
            "Substituting back: 8 + y = 10, so y = 2."
        ),
    },

    # ─── ADVANCED MATH (3) ────────────────────────────────────────────
    {
        "question_code": "MATH-ADV-001",
        "section": Section.MATH,
        "domain": Domain.ADVANCED_MATH,
        "difficulty": Difficulty.EASY,
        "question_text": "What are the solutions to x² − 5x + 6 = 0?",
        "option_a": "x = 1 and x = 6",
        "option_b": "x = 2 and x = 3",
        "option_c": "x = −2 and x = −3",
        "option_d": "x = −1 and x = 6",
        "correct_answer": AnswerChoice.B,
        "explanation": "Factor: (x − 2)(x − 3) = 0. Solutions: x = 2 or x = 3.",
    },
    {
        "question_code": "MATH-ADV-002",
        "section": Section.MATH,
        "domain": Domain.ADVANCED_MATH,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "A ball is thrown upward and its height h (in metres) after t seconds is "
            "h(t) = −5t² + 20t + 2. What is the maximum height reached by the ball?"
        ),
        "option_a": "20 metres",
        "option_b": "22 metres",
        "option_c": "18 metres",
        "option_d": "25 metres",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "The vertex of h(t) = −5t² + 20t + 2 is at t = −b/(2a) = −20/(2·(−5)) = 2. "
            "h(2) = −5(4) + 20(2) + 2 = −20 + 40 + 2 = 22 metres."
        ),
    },
    {
        "question_code": "MATH-ADV-003",
        "section": Section.MATH,
        "domain": Domain.ADVANCED_MATH,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "Which of the following is equivalent to (x² − 9) / (x − 3) for x ≠ 3?"
        ),
        "option_a": "x − 3",
        "option_b": "x + 3",
        "option_c": "x² + 3",
        "option_d": "x − 9",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Factor the numerator: x² − 9 = (x − 3)(x + 3). "
            "Cancel (x − 3): result is x + 3."
        ),
    },

    # ─── PROBLEM-SOLVING & DATA ANALYSIS (3) ─────────────────────────
    {
        "question_code": "MATH-PDA-001",
        "section": Section.MATH,
        "domain": Domain.PROBLEM_SOLVING_DATA_ANALYSIS,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "A store sells shirts for $24 each. If a customer buys 3 shirts and receives "
            "a 15% discount on the total, how much does the customer pay?"
        ),
        "option_a": "$61.20",
        "option_b": "$64.80",
        "option_c": "$68.40",
        "option_d": "$57.60",
        "correct_answer": AnswerChoice.A,
        "explanation": (
            "Total before discount: 3 × $24 = $72. "
            "Discount: 0.15 × $72 = $10.80. Final price: $72 − $10.80 = $61.20."
        ),
    },
    {
        "question_code": "MATH-PDA-002",
        "section": Section.MATH,
        "domain": Domain.PROBLEM_SOLVING_DATA_ANALYSIS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "In a survey of 200 students, 60% said they preferred studying in the morning. "
            "Of those who preferred mornings, 75% said they studied for more than 2 hours. "
            "How many students preferred mornings AND studied for more than 2 hours?"
        ),
        "option_a": "60",
        "option_b": "90",
        "option_c": "120",
        "option_d": "45",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Morning-preferring students: 0.60 × 200 = 120. "
            "Of those, 75% studied >2 hours: 0.75 × 120 = 90."
        ),
    },
    {
        "question_code": "MATH-PDA-003",
        "section": Section.MATH,
        "domain": Domain.PROBLEM_SOLVING_DATA_ANALYSIS,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "The scatterplot shows a strong positive linear relationship between hours studied (x) "
            "and SAT score (y). The line of best fit passes through (2, 1050) and (6, 1250). "
            "What is the predicted SAT score for a student who studies 10 hours?"
        ),
        "option_a": "1400",
        "option_b": "1350",
        "option_c": "1450",
        "option_d": "1500",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "Slope = (1250 − 1050) / (6 − 2) = 200/4 = 50 points per hour. "
            "From (6, 1250): 4 more hours → 1250 + 4×50 = 1250 + 200 = 1450."
        ),
    },

    # ─── GEOMETRY & TRIGONOMETRY (3) ─────────────────────────────────
    {
        "question_code": "MATH-GEO-001",
        "section": Section.MATH,
        "domain": Domain.GEOMETRY_TRIGONOMETRY,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "A rectangle has a length of 12 cm and a width of 5 cm. "
            "What is the length of its diagonal?"
        ),
        "option_a": "11 cm",
        "option_b": "13 cm",
        "option_c": "15 cm",
        "option_d": "17 cm",
        "correct_answer": AnswerChoice.B,
        "explanation": "Using the Pythagorean theorem: √(12² + 5²) = √(144 + 25) = √169 = 13 cm.",
    },
    {
        "question_code": "MATH-GEO-002",
        "section": Section.MATH,
        "domain": Domain.GEOMETRY_TRIGONOMETRY,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "In a right triangle, the angle θ satisfies sin θ = 3/5. "
            "What is the value of cos θ?"
        ),
        "option_a": "4/5",
        "option_b": "3/4",
        "option_c": "5/3",
        "option_d": "1/2",
        "correct_answer": AnswerChoice.A,
        "explanation": (
            "Using the Pythagorean identity: sin²θ + cos²θ = 1. "
            "cos²θ = 1 − 9/25 = 16/25. cos θ = 4/5."
        ),
    },
    {
        "question_code": "MATH-GEO-003",
        "section": Section.MATH,
        "domain": Domain.GEOMETRY_TRIGONOMETRY,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "A circle has the equation (x − 3)² + (y + 2)² = 25. "
            "What is the area of the circle?"
        ),
        "option_a": "5π",
        "option_b": "10π",
        "option_c": "25π",
        "option_d": "50π",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "The equation is in standard form (x−h)² + (y−k)² = r². "
            "Here r² = 25, so r = 5. Area = πr² = 25π."
        ),
    },

    # ══════════════════════════════════════════════════════════════════
    # SECTION 2: READING & WRITING — 12 questions (3 per domain)
    # ══════════════════════════════════════════════════════════════════

    # ─── INFORMATION & IDEAS (3) ──────────────────────────────────────
    {
        "question_code": "RW-INF-001",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "Passage: 'Solar energy has grown rapidly in the past decade. "
            "Between 2010 and 2022, the cost of solar panels dropped by nearly 90%, "
            "making solar the cheapest source of electricity in history.'\n\n"
            "Which of the following best states the main idea of the passage?"
        ),
        "option_a": "Solar energy was too expensive to use before 2010.",
        "option_b": "Solar energy has become significantly more affordable and widespread over the past decade.",
        "option_c": "All other energy sources are more expensive than solar.",
        "option_d": "Solar panels will completely replace fossil fuels by 2030.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "The passage focuses on the rapid growth and cost reduction of solar energy. "
            "Choice B best captures this central idea without overstating or understating."
        ),
    },
    {
        "question_code": "RW-INF-002",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "Passage: 'A 2021 study found that students who sleep at least 8 hours before "
            "an exam score, on average, 12% higher than those who sleep less than 6 hours. "
            "The researchers concluded that sleep deprivation significantly impairs the brain's "
            "ability to consolidate learned information.'\n\n"
            "Which finding, if true, would most directly support the researchers' conclusion?"
        ),
        "option_a": "Students who drink coffee before an exam score higher than those who do not.",
        "option_b": "Brain scans show reduced activity in memory-consolidation regions after sleep deprivation.",
        "option_c": "High-achieving students tend to study for longer periods before exams.",
        "option_d": "Students who exercise regularly tend to sleep more hours each night.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "The conclusion is that sleep deprivation impairs memory consolidation. "
            "Choice B provides direct neurological evidence supporting this mechanism."
        ),
    },
    {
        "question_code": "RW-INF-003",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "Passage 1: 'Urban forests are vital for reducing heat in cities, absorbing CO₂, and "
            "improving mental health among residents.'\n"
            "Passage 2: 'While trees offer environmental benefits, large-scale urban tree-planting "
            "programs often displace low-income communities when they drive up property values.'\n\n"
            "Both passages agree that urban trees:"
        ),
        "option_a": "Should be removed from cities to prevent property value increases.",
        "option_b": "Provide certain environmental or social benefits.",
        "option_c": "Are the most effective solution to climate change.",
        "option_d": "Cause more harm than good in urban environments.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Passage 1 explicitly states benefits. Passage 2 acknowledges environmental benefits "
            "while raising social concerns. Both agree trees offer some benefits."
        ),
    },

    # ─── CRAFT & STRUCTURE (3) ────────────────────────────────────────
    {
        "question_code": "RW-CRA-001",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "In the sentence: 'The scientist's findings were ________, upending decades of established theory.'\n\n"
            "Which word best completes the sentence?"
        ),
        "option_a": "mundane",
        "option_b": "predictable",
        "option_c": "revolutionary",
        "option_d": "delayed",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "'Revolutionary' means causing fundamental change — consistent with 'upending decades of theory.' "
            "The other choices contradict the idea of major disruption."
        ),
    },
    {
        "question_code": "RW-CRA-002",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "Passage: 'The author begins the chapter with a vivid description of a crumbling factory, "
            "then shifts to a sweeping overview of global economic trends.'\n\n"
            "The author most likely begins with the factory description in order to:"
        ),
        "option_a": "Show that all factories are in poor condition worldwide.",
        "option_b": "Ground abstract economic forces in a concrete, human-scale image.",
        "option_c": "Argue that economic trends should be studied at the local level only.",
        "option_d": "Distract the reader from the more complex ideas that follow.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Using a specific, tangible example (the factory) to introduce large-scale ideas "
            "is a classic rhetorical technique to make abstract concepts more relatable."
        ),
    },
    {
        "question_code": "RW-CRA-003",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "Passage: 'Unlike many of his contemporaries who celebrated industrial progress, "
            "the author viewed the machine age with ________ — acknowledging its material gains "
            "while mourning the loss of craftsmanship and human connection it entailed.'\n\n"
            "Which word best fits the blank?"
        ),
        "option_a": "enthusiasm",
        "option_b": "ambivalence",
        "option_c": "indifference",
        "option_d": "contempt",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "'Ambivalence' means having mixed feelings — fitting perfectly as the author "
            "both acknowledges gains and mourns losses. 'Enthusiasm' is too positive; "
            "'contempt' is too negative; 'indifference' implies no strong feelings."
        ),
    },

    # ─── EXPRESSION OF IDEAS (3) ──────────────────────────────────────
    {
        "question_code": "RW-EXP-001",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "The student wants to add a sentence that most effectively introduces the following paragraph:\n"
            "'Bee populations have declined by 30% in the past decade due to pesticide use, habitat loss, "
            "and disease. This decline threatens crop pollination and food security worldwide.'\n\n"
            "Which sentence best introduces this paragraph?"
        ),
        "option_a": "Honey bees are often kept by hobbyists for honey production.",
        "option_b": "One of the most pressing environmental concerns today is the rapid decline of bee populations.",
        "option_c": "Scientists have studied insects for hundreds of years.",
        "option_d": "Bees are found on every continent except Antarctica.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Choice B introduces the main topic — the alarming decline of bees — "
            "which is exactly what the paragraph elaborates on."
        ),
    },
    {
        "question_code": "RW-EXP-002",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "A student writes: 'Renewable energy reduces carbon emissions. "
            "Renewable energy creates new jobs. Renewable energy lowers electricity costs.'\n\n"
            "Which revision most effectively combines these sentences?"
        ),
        "option_a": "Renewable energy reduces carbon emissions, and it also creates new jobs, and it also lowers electricity costs.",
        "option_b": "Renewable energy offers multiple advantages, including reducing carbon emissions, creating new jobs, and lowering electricity costs.",
        "option_c": "Carbon emissions are reduced, new jobs are created, and electricity costs are lowered by renewable energy.",
        "option_d": "Renewable energy has advantages: emissions, jobs, and costs.",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "Choice B uses a clean introductory clause and a parallel list, "
            "eliminating redundancy and improving clarity and flow."
        ),
    },
    {
        "question_code": "RW-EXP-003",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "The student is revising an essay arguing that social media platforms should be held "
            "legally responsible for harmful content. Which sentence would most strengthen the argument?\n\n"
            "The essay currently states: 'Social media platforms profit enormously from user engagement, "
            "including engagement driven by harmful or extreme content.'"
        ),
        "option_a": "Many teenagers spend more than three hours per day on social media platforms.",
        "option_b": "Some social media companies have voluntarily removed certain types of harmful content.",
        "option_c": "Because these platforms financially benefit from harmful content, they have a responsibility — and an incentive — to prevent it.",
        "option_d": "Social media was invented in the early 2000s and has grown rapidly since then.",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "Choice C directly extends the profit argument to establish legal and moral responsibility, "
            "which is the core claim of the essay."
        ),
    },

    # ─── STANDARD ENGLISH CONVENTIONS (3) ────────────────────────────
    {
        "question_code": "RW-SEC-001",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.EASY,
        "question_text": (
            "Which of the following is a complete sentence?\n"
        ),
        "option_a": "Running through the park every morning before school.",
        "option_b": "Because the exam was difficult.",
        "option_c": "The researchers published their findings last month.",
        "option_d": "Although many students prefer online learning.",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "Choice C has a subject ('The researchers') and a complete predicate ('published their findings last month'). "
            "The others are sentence fragments — they lack an independent clause."
        ),
    },
    {
        "question_code": "RW-SEC-002",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": (
            "Choose the option that correctly completes the sentence:\n\n"
            "'Each of the students ________ expected to submit an individual report.'"
        ),
        "option_a": "are",
        "option_b": "were",
        "option_c": "is",
        "option_d": "have been",
        "correct_answer": AnswerChoice.C,
        "explanation": (
            "The subject is 'Each,' which is singular. The correct verb is 'is.' "
            "The prepositional phrase 'of the students' does not change the subject."
        ),
    },
    {
        "question_code": "RW-SEC-003",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.HARD,
        "question_text": (
            "Which option correctly punctuates the following sentence?\n\n"
            "'The report ________ which was released last Tuesday ________ revealed several critical flaws in the study design.'"
        ),
        "option_a": "— which was released last Tuesday, — revealed",
        "option_b": ", which was released last Tuesday, revealed",
        "option_c": "; which was released last Tuesday; revealed",
        "option_d": ": which was released last Tuesday: revealed",
        "correct_answer": AnswerChoice.B,
        "explanation": (
            "'Which was released last Tuesday' is a non-restrictive relative clause. "
            "It should be set off with commas. Semicolons and colons are grammatically incorrect here."
        ),
    },
]


def seed():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        # Clear existing data (dev-safe)
        existing_count = db.query(Question).count()
        if existing_count > 0:
            print(f"ℹ️  {existing_count} questions already exist. Skipping seed.")
            return

        # Insert questions
        question_objects = []
        for i, q_data in enumerate(QUESTIONS, start=1):
            q = Question(**q_data)
            db.add(q)
            question_objects.append(q)

        db.flush()

        # Create diagnostic test
        test = DiagnosticTest(
            name="Nitaq SAT Diagnostic — Version 1",
            description="24-question diagnostic covering all 8 Digital SAT domains.",
            version=1,
            status=TestStatus.ACTIVE,
            show_answer_review=True,
        )
        db.add(test)
        db.flush()

        # Assign questions to test with order
        for order, q in enumerate(question_objects, start=1):
            tq = DiagnosticTestQuestion(
                test_id=test.id,
                question_id=q.id,
                question_order=order,
            )
            db.add(tq)

        db.commit()
        print(f"✅ Seeded {len(QUESTIONS)} questions and created DiagnosticTest id={test.id}")
    except Exception as e:
        db.rollback()
        print(f"❌ Seed failed: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    seed()
