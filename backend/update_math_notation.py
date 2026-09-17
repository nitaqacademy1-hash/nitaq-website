"""
Update Math questions in database to standard mathematical notation (LaTeX/KaTeX).
"""

import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv
load_dotenv()

from app.core.database import SessionLocal
from app.models.question import Question

MATH_UPDATES = {
    "MATH-ALG-001": {
        "question_text": "The function $f$ is defined by $f(x) = 25x + 30$. What is the value of $f(x)$ when $x = 2$?",
        "explanation": "$f(2) = 25(2) + 30 = 50 + 30 = 80$."
    },
    "MATH-ALG-002": {
        "question_text": "Line $k$ is defined by $y = -\\frac{17}{3}x + 5$. Line $j$ is perpendicular to line $k$ in the $xy$-plane. What is the slope of line $j$?",
        "option_a": "$\\frac{3}{17}$",
        "option_b": "$-\\frac{3}{17}$",
        "option_c": "$\\frac{17}{3}$",
        "option_d": "$-\\frac{17}{3}$",
        "explanation": "The slope of line $k$ is $-\\frac{17}{3}$. Perpendicular lines have negative reciprocal slopes, so the slope of line $j$ is $\\frac{3}{17}$."
    },
    "MATH-ALG-003": {
        "question_text": "$2(8x) + 4(7y) = 12$ and $-2(8x) + 4(7y) = 12$. The solution is $(x, y)$. What is the value of $8x + 7y$?",
        "explanation": "Adding equations: $8(7y) = 24 \\implies 7y = 3$. Subtracting equations: $4(8x) = 0 \\implies 8x = 0$. Therefore, $8x + 7y = 3$."
    },
    "MATH-ADV-001": {
        "question_text": "Which expression is equivalent to $(m^4 q^4 z^{-1})(m q^5 z^3)$, where $m$, $q$, and $z$ are positive?",
        "option_a": "$m^4 q^{20} z^{-3}$",
        "option_b": "$m^5 q^9 z^2$",
        "option_c": "$m^6 q^8 z^{-1}$",
        "option_d": "$m^{20} q^{12} z^{-2}$",
        "explanation": "$m^{4+1} \\cdot q^{4+5} \\cdot z^{-1+3} = m^5 q^9 z^2$."
    },
    "MATH-ADV-002": {
        "question_text": "A system consists of a quadratic equation and a linear equation, graphed on the $xy$-plane. How many solutions does this system have if the line intersects the parabola at two distinct points?",
        "explanation": "The line intersects the parabola at 2 distinct points, so the system has 2 solutions."
    },
    "MATH-ADV-003": {
        "question_text": "For $f(x) = 27(1.20)^{\\frac{x}{3}}$, the value of $f(x)$ increases by $p\\%$ for every increase of $x$ by 6. What is $p$?",
        "explanation": "Increasing $x$ by 6 increases the exponent by $6/3 = 2$. $(1.20)^2 = 1.44$, which is a $44\\%$ increase."
    },
    "MATH-PDA-001": {
        "question_text": "A printer produces posters at a constant rate of 42 posters per minute. At what rate, in posters per hour, does the printer produce the posters?",
        "explanation": "$42\\text{ posters/min} \\times 60\\text{ min/hour} = 2520\\text{ posters per hour}$."
    },
    "MATH-PDA-002": {
        "question_text": "A table lists 14 cars. Of these, 2 are hybrid cars priced at no more than $20,000. If one car is selected at random, what is the probability it is a hybrid priced at no more than $20,000?",
        "option_a": "$\\frac{1}{7}$",
        "option_b": "$\\frac{2}{7}$",
        "option_c": "$\\frac{1}{3}$",
        "option_d": "$\\frac{4}{7}$",
        "explanation": "$\\text{Probability} = \\frac{2}{14} = \\frac{1}{7}$."
    },
    "MATH-PDA-003": {
        "question_text": "In a study of 799 randomly selected US teens, an estimate of the percent of US teens who are heavy texters is 30%, with a margin of error of 3%. Which statement is correct based on the margin of error?",
        "explanation": "Margin of error provides a plausible range of 27% to 33%. Values outside this range (35%) are doubtful."
    },
    "MATH-GEO-001": {
        "question_text": "Triangles $EFG$ and $JKL$ are congruent, where $E$, $F$, and $G$ correspond to $J$, $K$, and $L$, respectively. The measure of angle $E$ is $45^\\circ$ and angle $F$ is $20^\\circ$. What is the measure of angle $J$?",
        "option_a": "$20^\\circ$",
        "option_b": "$45^\\circ$",
        "option_c": "$135^\\circ$",
        "option_d": "$160^\\circ$",
        "explanation": "Since triangles $EFG$ and $JKL$ are congruent with corresponding vertices $E$ and $J$, $\\angle J = \\angle E = 45^\\circ$."
    },
    "MATH-GEO-002": {
        "question_text": "The length of each edge of a box is 29 inches. Each side is a square. The box does not have a lid. What is the exterior surface area, in square inches, of the box without a lid?",
        "explanation": "5 square faces $\\times (29 \\times 29) = 5 \\times 841 = 4205\\text{ sq inches}$."
    },
    "MATH-GEO-003": {
        "question_text": "Points $Q$, $R$, $S$, and $T$ lie on line segment $PV$, and $RU$ intersects $SX$ at $W$. $\\angle SQX = 48^\\circ$, $\\angle SXQ = 86^\\circ$, $\\angle SWU = 85^\\circ$, and $\\angle VTU = 162^\\circ$. What is the measure, in degrees, of $\\angle TUR$?",
        "option_a": "$108^\\circ$",
        "option_b": "$115^\\circ$",
        "option_c": "$123^\\circ$",
        "option_d": "$130^\\circ$",
        "explanation": "Using interior and exterior angle sums for triangles $SQX$ and $SWU$, $\\angle TUR = 123^\\circ$."
    }
}

def update_math_questions():
    db = SessionLocal()
    try:
        updated = 0
        for code, data in MATH_UPDATES.items():
            q = db.query(Question).filter(Question.question_code == code).first()
            if q:
                for k, v in data.items():
                    setattr(q, k, v)
                updated += 1
                print(f"✅ Updated {code}")
            else:
                print(f"⚠️ Question not found: {code}")
        
        db.commit()
        print(f"\n🎉 Successfully updated {updated} math questions in the database with standard mathematical notation.")
    except Exception as e:
        db.rollback()
        print(f"❌ Error updating database: {e}")
        raise
    finally:
        db.close()

if __name__ == "__main__":
    update_math_questions()
