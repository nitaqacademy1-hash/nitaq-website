import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from dotenv import load_dotenv
load_dotenv()

from app.core.database import SessionLocal
from app.models.question import Question, Section, Domain, Difficulty, AnswerChoice, DiagnosticTest, DiagnosticTestQuestion, TestStatus

db = SessionLocal()

active_test = db.query(DiagnosticTest).filter(DiagnosticTest.status == TestStatus.ACTIVE).first()
if not active_test:
    active_test = DiagnosticTest(
        name="Nitaq SAT Diagnostic — Main",
        description="Digital SAT Diagnostic Assessment",
        version=1,
        status=TestStatus.ACTIVE,
        show_answer_review=True,
    )
    db.add(active_test)
    db.flush()

current_max = db.query(DiagnosticTestQuestion).filter_by(test_id=active_test.id).count()

rw_questions_data = [
    {
        "question_code": "RW-INF-001",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.EASY,
        "question_text": "Sample of Food Items from Gemini Mission Menus: Sugar cookie cubes — Day 1, Meal B; Chicken and vegetables — Day 2, Meal B; Shrimp cocktail — Day 4, Meal C; Hot cocoa — Day 3, Meal A. NASA's Gemini astronauts had three meals a day on a four-day rotating schedule. On day 1, the menu included ______.\n\nWhich choice most effectively uses data from the table to complete the statement?",
        "option_a": "shrimp cocktail for meal B.",
        "option_b": "hot cocoa for meal C.",
        "option_c": "sugar cookie cubes for meal B.",
        "option_d": "chicken and vegetables for meal A.",
        "correct_answer": AnswerChoice.C,
        "explanation": "Data shows sugar cookie cubes were served on Day 1, Meal B.",
    },
    {
        "question_code": "RW-INF-002",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": "Biologists predicted that birds' feather structures vary with habitat temperature. Ornithologist Sahas Barve studied feathers from 249 Himalayan songbird species at different elevations. High-elevation species had a greater proportion of warming downy sections and tended to have longer feathers, providing thicker insulation.\n\nWhich choice best states the main idea of the text?",
        "option_a": "Barve's investigation shows that some species evolved feathers that better regulate body temperature, contradicting previous predictions.",
        "option_b": "Barve found an association between habitat temperature and feather structure among Himalayan songbirds, lending new support to a general prediction.",
        "option_c": "Barve discovered that songbirds adapted by growing feathers without flat and smooth sections, complicating an earlier hypothesis.",
        "option_d": "The study suggests cold tolerance is determined more strongly by feather length than structure, challenging an established belief.",
        "correct_answer": AnswerChoice.B,
        "explanation": "Barve's findings confirm the predicted link between habitat temperature and feather structure.",
    },
    {
        "question_code": "RW-INF-003",
        "section": Section.READING_WRITING,
        "domain": Domain.INFORMATION_IDEAS,
        "difficulty": Difficulty.HARD,
        "question_text": "The ancient Greek concept of \"mimesis\" is often translated as \"imitation,\" but scholar Stephen Halliwell warns this is overly reductive because it suggests art merely copies a prior reality and obscures the multifaceted Greek understanding of art and reality.\n\nWhich statement, if true, would most directly support Halliwell's claim?",
        "option_a": "An early appearance of mimesis's root word referred to dramatic impersonation, and the root became associated with musical and poetic arts.",
        "option_b": "Both Plato's and Aristotle's theories examine psychological effects of art on viewers or listeners.",
        "option_c": "The term mimesis doesn't appear in Plato's discussions of art until a relatively late work.",
        "option_d": "Plato often treats representational art as an inferior reflection of the physical world, while Aristotle suggests mimesis can envision hypothetical conditions that could but don't yet exist.",
        "correct_answer": AnswerChoice.D,
        "explanation": "Aristotle's view demonstrates that mimesis involves creative vision rather than simple copying, supporting Halliwell's claim.",
    },
    {
        "question_code": "RW-CRA-001",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.EASY,
        "question_text": "The invention in 1958 of the integrated circuit (or microchip) radically altered the semiconductor industry. Some historians argue that it fundamentally ______ the industry by enabling mass production methods for the first time.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
        "option_a": "overwhelmed",
        "option_b": "bypassed",
        "option_c": "obstructed",
        "option_d": "transformed",
        "correct_answer": AnswerChoice.D,
        "explanation": "'Transformed' aligns with the idea that the microchip radically altered the industry.",
    },
    {
        "question_code": "RW-CRA-002",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.MEDIUM,
        "question_text": "Drivers who strongly believe that the toll they must pay to use the Lewis and Clark Bridge is currently too high are unlikely to be ______ a proposal to increase the toll. Advocates for a higher toll may have more success with a more persuadable segment.\n\nWhich choice completes the text with the most logical and precise word or phrase?",
        "option_a": "receptive to",
        "option_b": "apprised of",
        "option_c": "incensed by",
        "option_d": "cited in",
        "correct_answer": AnswerChoice.A,
        "explanation": "Drivers who think the toll is already too high would unlikely be receptive to an increase.",
    },
    {
        "question_code": "RW-CRA-003",
        "section": Section.READING_WRITING,
        "domain": Domain.CRAFT_STRUCTURE,
        "difficulty": Difficulty.HARD,
        "question_text": "Affective neuroscience seeks physiological causes for feelings such as pleasure or displeasure. Such sensations can be linked to chemical processes like dopamine release. These processes have been described in mammals, and Jingnan Huang and colleagues observed that some honeybee behaviors are also motivated by a dopamine-based signaling process.\n\nWhat choice best describes the main purpose of the text?",
        "option_a": "It describes an experimental method of measuring physiological responses in humans.",
        "option_b": "It illustrates processes by which certain insects can express how they are feeling.",
        "option_c": "It summarizes a finding suggesting that some mechanisms in the brains of certain insects resemble mechanisms in mammalian brains.",
        "option_d": "It presents research showing that certain insects and mammals behave similarly when there is a possibility of a reward.",
        "correct_answer": AnswerChoice.C,
        "explanation": "The text presents evidence that honeybees use dopamine signaling similar to mammals.",
    },
    {
        "question_code": "RW-EXP-001",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.EASY,
        "question_text": "In 1942, the 1,500-mile Alaska Highway was constructed in under nine months, largely due to nearly 4,000 African American US Army engineering soldiers. Their contribution was overlooked for decades. ______ in 2017, lawmakers declared October 25 \"Alaska Highway Day\" in recognition of the troops.\n\nWhich choice completes the text with the most logical transition?",
        "option_a": "Lastly,",
        "option_b": "Then,",
        "option_c": "Similarly,",
        "option_d": "For example,",
        "correct_answer": AnswerChoice.B,
        "explanation": "'Then,' indicates the chronological sequence of recognition following decades of oversight.",
    },
    {
        "question_code": "RW-EXP-002",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": "Notes: Organisms shed cellular material such as hair or skin; its DNA is environmental DNA (eDNA). Researchers analyze eDNA to detect difficult-to-observe species. Sara Oyler-McCance's team analyzed eDNA in Florida Everglades water samples for invasive constrictor snakes. The study determined a 91% probability of detecting Burmese python eDNA in a given location.\n\nThe student wants to present the study to an audience already familiar with environmental DNA. Which choice most effectively uses relevant information?",
        "option_a": "Sara Oyler-McCance's researchers analyzed eDNA in water samples from the Florida Everglades for evidence of invasive constrictor snakes, which are difficult to observe.",
        "option_b": "An analysis of eDNA can detect the presence of invasive species that are difficult to observe, such as constrictor snakes.",
        "option_c": "Researchers found Burmese python eDNA, or environmental DNA, in water samples; eDNA is the DNA in released cellular materials, such as shed skin cells.",
        "option_d": "Sara Oyler-McCance's researchers analyzed environmental DNA (eDNA)—that is, DNA from cellular materials released by organisms—in water samples from the Florida Everglades.",
        "correct_answer": AnswerChoice.A,
        "explanation": "Choice A avoids defining eDNA, assuming the audience is already familiar with the term.",
    },
    {
        "question_code": "RW-EXP-003",
        "section": Section.READING_WRITING,
        "domain": Domain.EXPRESSION_IDEAS,
        "difficulty": Difficulty.HARD,
        "question_text": "In a heated debate in biogeography, the field is divided between dispersalists and vicariancists. ______ there are those who argue that dispersal is the most crucial determining factor in a species' distribution, and those who insist that vicariance is. Biogeographer Isabel Sanmartín counts herself among neither.\n\nWhich choice completes the text with the most logical transition?",
        "option_a": "Furthermore,",
        "option_b": "By contrast,",
        "option_c": "Similarly,",
        "option_d": "That is,",
        "correct_answer": AnswerChoice.D,
        "explanation": "'That is,' signals an explanation or clarification of the division mentioned in the first sentence.",
    },
    {
        "question_code": "RW-SEC-001",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.EASY,
        "question_text": "Generations of mystery and horror ______ have been influenced by the dark, gothic stories of celebrated American author Edgar Allan Poe (1809–1849).\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
        "option_a": "writers",
        "option_b": "writers,",
        "option_c": "writers—",
        "option_d": "writers;",
        "correct_answer": AnswerChoice.A,
        "explanation": "No punctuation is needed between the subject 'writers' and the verb phrase 'have been influenced'.",
    },
    {
        "question_code": "RW-SEC-002",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.MEDIUM,
        "question_text": "Since the nineteenth century, Egyptologists have commonly divided ancient Egyptian history into three primary ______ Old Kingdom (2700–2200 BCE), the Middle Kingdom (2050–1800 BCE), and the New Kingdom (1550–1100 BCE).\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
        "option_a": "periods. The",
        "option_b": "periods: the",
        "option_c": "periods; the",
        "option_d": "periods, the",
        "correct_answer": AnswerChoice.B,
        "explanation": "A colon is used to introduce an elaboration or list following a complete independent clause.",
    },
    {
        "question_code": "RW-SEC-003",
        "section": Section.READING_WRITING,
        "domain": Domain.STANDARD_ENGLISH_CONVENTIONS,
        "difficulty": Difficulty.HARD,
        "question_text": "A recent study tracked the number of bee species present in twenty-seven New York apple orchards over a ten-year period. ______ found that when wild growth near an orchard was cleared, the number of different bee species visiting the orchard decreased.\n\nWhich choice completes the text so that it conforms to the conventions of Standard English?",
        "option_a": "Entomologist Heather Grab:",
        "option_b": "Entomologist, Heather Grab,",
        "option_c": "Entomologist Heather Grab",
        "option_d": "Entomologist Heather Grab,",
        "correct_answer": AnswerChoice.C,
        "explanation": "'Entomologist Heather Grab' is a single subject noun phrase directly performing the verb 'found'.",
    },
]

added_count = 0
for offset, q_data in enumerate(rw_questions_data, start=1):
    existing = db.query(Question).filter_by(question_code=q_data["question_code"]).first()
    if existing:
        db.delete(existing)
        db.flush()
    
    q = Question(**q_data)
    db.add(q)
    db.flush()

    tq = DiagnosticTestQuestion(
        test_id=active_test.id,
        question_id=q.id,
        question_order=current_max + offset
    )
    db.add(tq)
    added_count += 1

db.commit()
print(f"🎉 Successfully inserted {added_count} Reading & Writing questions! Total active test questions: {current_max + added_count}")
