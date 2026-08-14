import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    PenTool, BookMarked, MessageSquare, FileText, Mail
} from 'lucide-react';

const EnglishTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 1 to 12 (Primary to High School)",
        "Modules Included": "Grammar, Reading, Writing & Literature",
        "Curricula Supported": "Cambridge IGCSE (0500/0510), Edexcel, IB & CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Skill Pillars": "Creative Writing, Text Analysis & Board Prep",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="English Tuition in Sharjah"
                subtitle="Premier English Grammar, Essay Writing, Reading Comprehension & Literature Coaching for Class 1 to 12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: English Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>English tuition in Sharjah</strong> for Class 1 to Class 12 students. We deliver structured coaching for <strong>Cambridge IGCSE English (First Language 0500 & Second Language 0510)</strong>, <strong>Pearson Edexcel GCSE/A-Level English</strong>, <strong>International Baccalaureate (IB Language A & B)</strong>, and <strong>CBSE English Core & Communicative</strong>. Focus areas include English grammar, vocabulary expansion, reading comprehension, essay structuring, and literary analysis, taught in micro-batches of 5 to 8 students and 1-on-1 private classes at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Language: <span className="text-gradient">English Tuition & Literary Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            English proficiency is the gateway to academic excellence across all school subjects, university admissions, and international career communication. Whether your child requires foundational phonics and grammar remediation, advanced descriptive essay writing for <strong>IGCSE English tuition in Sharjah</strong>, or critical text analysis for <strong>A-Level and IB English</strong>, Nitaq Academy provides tailored, results-driven linguistic training.
                        </p>
                        <p>
                            From our campus in <strong>Al Majaz 3, Sharjah</strong>, our certified English educators cultivate articulate expression, grammatical precision, and analytical reading habits. We transition students from hesitant English speakers and writers into confident, persuasive communicators.
                        </p>
                    </div>
                </div>

                {/* KEY FACTS SPECIFICATION TABLE */}
                <div className="content-card">
                    <h2>Program <span className="text-gradient">Key Facts & Specifications</span></h2>
                    <div className="spec-table-wrapper">
                        <table className="spec-table">
                            <thead>
                                <tr>
                                    <th>Program Attribute</th>
                                    <th>Specification for English Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Modules</td>
                                    <td>English Grammar & Syntax, Reading Comprehension, Directed & Creative Essay Writing, English Literature (Prose, Poetry, Drama), Spoken Fluency</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0500 First Lang, 0510/0511 Second Lang, 0475 Literature), Edexcel GCSE/A-Level English, IB DP English A/B (SL/HL), CBSE (Class 1-12 English Core & Communicative)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Batch Size Options</td>
                                    <td>Micro-batches (5 to 8 students) & 1-on-1 Dedicated Private Tutoring</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Instruction Modes</td>
                                    <td>In-Person Classroom (Al Majaz 3, Sharjah Campus) & Live Online HD Interactive Whiteboard (UAE-wide)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Regulatory Licensing</td>
                                    <td>SPEA Authorized (Sharjah Private Education Authority)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FOUR ENGLISH PILLARS GRID */}
                <div className="content-card">
                    <h2>Four Core Pillars: <span className="text-gradient">Comprehensive English Mastery</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <PenTool size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Grammar & Vocabulary</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master parts of speech, tense consistency, active/passive voice, clause structures, punctuation precision, and academic vocabulary expansion for error-free writing.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <BookOpen size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Reading Comprehension</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpack complex unseen texts, inferential reading, identifying literary devices, tone analysis, skimming/scanning techniques, and summary writing.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FileText size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Directed & Creative Writing</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Structured training in narrative essays, descriptive writing, persuasive letters, formal reports, newspaper articles, speech writing, and argumentative essays.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS (4 CARDS) */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">English Pathways (Class 1 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 1 to 5</span>
                            <h3>Primary English</h3>
                            <p className="grade-desc">Phonics, sentence building, and fostering a love for reading.</p>
                            <ul>
                                <li><strong>Phonics & Spelling:</strong> Sight words, root words, prefixes and suffixes.</li>
                                <li><strong>Grammar Fundamentals:</strong> Nouns, verbs, adjectives, prepositions, capitalization.</li>
                                <li><strong>Story Comprehension:</strong> Sequencing events, character feelings, main ideas.</li>
                                <li><strong>Creative Storytelling:</strong> Writing simple descriptive paragraphs and short stories.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 6 to 8</span>
                            <h3>Middle School English</h3>
                            <p className="grade-desc">Transitioning to complex sentence structures and formal composition.</p>
                            <ul>
                                <li><strong>Advanced Grammar:</strong> Direct & indirect speech, conditional clauses, subject-verb agreement.</li>
                                <li><strong>Formal Writing:</strong> Informal/formal letters, diary entries, email writing, notices.</li>
                                <li><strong>Literary Elements:</strong> Metaphor, simile, personification, alliteration, themes.</li>
                                <li><strong>Analytical Thinking:</strong> Critical responses to non-fiction and classic fiction passages.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 9 & 10</span>
                            <h3>Secondary English Boards</h3>
                            <p className="grade-desc">Mastering board examination formats for CBSE, IGCSE (0500/0510), and MYP.</p>
                            <ul>
                                <li><strong>Directed Writing:</strong> Speech, report, journal, and interview response formats.</li>
                                <li><strong>Writer's Effect Analysis:</strong> Dissecting how linguistic choices evoke reader emotions.</li>
                                <li><strong>Literature Mastery:</strong> In-depth exploration of set prose, poetry, and Shakespearean drama.</li>
                                <li><strong>Past Paper Drills:</strong> Mark scheme alignment for CAIE 0500 & CBSE Class 10.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 11 & 12</span>
                            <h3>Senior English / A-Level / IB</h3>
                            <p className="grade-desc">University-level textual critique, rhetoric, and stylistic analysis.</p>
                            <ul>
                                <li><strong>Stylistics & Rhetoric:</strong> Analysis of political speeches, travelogues, and essays.</li>
                                <li><strong>Comparative Literature:</strong> Cross-textual thematic essays and contextual critique.</li>
                                <li><strong>IB Individual Oral (IO):</strong> Rubric optimization and oral presentation training.</li>
                                <li><strong>Extended Essay (EE) Support:</strong> Research framing and academic formatting.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY (CBSE, IGCSE, A-LEVEL, IB) */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB English</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE English</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Class 9-10 Communicative</span>
                                <span className="curriculum-pill">Class 11-12 English Core</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                NCERT textbook chapter analysis (Beehive, Moments, First Flight, Footprints Without Feet, Flamingo, Vistas), notice/letter/article writing drills, and error correction exercises.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">First Language 0500</span>
                                <span className="curriculum-pill">Second Language 0510</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Intensive training on Paper 1 (Reading & Summary) and Paper 2 (Directed Writing & Composition) with emphasis on precise vocabulary selection and examiner criteria for A* / Grade 9.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>A-Level & IB DP English</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Edexcel A-Level Lang/Lit</span>
                                <span className="curriculum-pill">IB DP English A: Lang & Lit</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Guiding students through guided textual analysis (Paper 1), comparative essays (Paper 2), Higher Level (HL) essays, and Individual Oral (IO) preparation with veteran examiners.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">English Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding English tuition, grammar, writing, and literature classes at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for English tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive English coaching for Cambridge IGCSE (0500 First Language, 0510/0511 Second Language, 0475 Literature), Pearson Edexcel GCSE and A-Level English, International Baccalaureate (IB DP English A and B at HL/SL), CBSE (Class 1 to 12 English Core and Communicative), and British Curriculum schools.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students improve their essay writing and creative composition? <ChevronDown size={18} /></summary>
                            <p>We use structured writing frameworks (such as PEEL and TEEL paragraph models), sensory vocabulary banks, dynamic sentence starter techniques, and line-by-line editorial feedback to transform rough drafts into polished, high-scoring essays.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer English tuition for non-native Arabic-speaking or bilingual students? <ChevronDown size={18} /></summary>
                            <p>Yes. We have specialized English as a Second Language (ESL / IGCSE 0510) and Spoken English modules designed to build grammar confidence, pronunciation clarity, and verbal fluency for students from Arabic or multilingual backgrounds.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for English tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our English classes are limited to micro-batches of 5 to 8 students to enable extensive individual writing feedback, live essay corrections, and active discussion. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online English tuition classes across the UAE? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online classes feature collaborative Google Docs editing, digital annotation whiteboards, recorded lectures for review, and weekly writing submissions accessible across Dubai, Abu Dhabi, and Sharjah.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare students for IGCSE First Language English (0500) Paper 1 and 2? <ChevronDown size={18} /></summary>
                            <p>We provide targeted training on summary writing techniques, writer's effect analysis (selecting precise figurative language and emotional tone), directed writing formats (speech, article, letter), and descriptive/narrative composition.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide tutoring for English Literature texts and poetry analysis? <ChevronDown size={18} /></summary>
                            <p>Yes. We analyze set texts including Shakespearean plays (Macbeth, Romeo and Juliet, The Merchant of Venice), modern novels (Lord of the Flies, To Kill a Mockingbird, Animal Farm), and anthology poetry collections.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students receive guidance for IB English Individual Oral (IO) and HL Essays? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB specialist English mentors provide rubric-focused guidance on global issue formulation, extract selection, rhetorical analysis, and mock oral practice for the Individual Oral (IO).</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy's Sharjah learning center located? <ChevronDown size={18} /></summary>
                            <p>We are centrally located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from Buhaira Corniche and King Faisal Street.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your English tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our faculty hold Master's degrees in English Literature, Linguistics, or Education, with CELTA/TESOL certifications and over 7 to 15 years of international school teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I book a free English evaluation or demo class? <ChevronDown size={18} /></summary>
                            <p>You can book a free diagnostic assessment or demo class by messaging us on WhatsApp at +971 52 756 9908 or calling our center at +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are grammar remediation drills provided for students with low vocabulary? <ChevronDown size={18} /></summary>
                            <p>Yes. Every enrolled student receives access to weekly personalized grammar worksheets, contextual vocabulary quizzes, and root-word morphology exercises to systematically build lexical breadth.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Pair your English studies with Nitaq Academy's top-rated tuition across other major disciplines:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/maths-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Maths Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics coaching from Class 1 to 12.</p>
                            </div>
                        </Link>

                        <Link to="/science-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Science Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Physics, Chemistry, and Biology coaching for Class 1 to 12 across IGCSE, CBSE, and IB boards.</p>
                            </div>
                        </Link>

                        <Link to="/social-science-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Social Science Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>History, Geography, Civics, Economics, and UAE Social Studies for CBSE, IGCSE & IB.</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* CAMPUS LOCATION & ADMISSIONS */}
                <div className="campus-contact-card">
                    <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '15px' }}>
                        Sharjah Campus & Admissions Center
                    </h3>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Visit our SPEA-authorized learning center in Al Majaz 3 for free diagnostic evaluations and personalized academic counseling:
                    </p>

                    <div className="campus-contact-grid">
                        <div className="campus-contact-item">
                            <div className="campus-contact-icon"><MapPin size={20} /></div>
                            <div className="campus-contact-text">
                                <h5>Campus Address</h5>
                                <p>Abu Khamseen Tower, Office F103, Al Majaz 3, Sharjah</p>
                            </div>
                        </div>

                        <div className="campus-contact-item">
                            <div className="campus-contact-icon"><Phone size={20} /></div>
                            <div className="campus-contact-text">
                                <h5>Direct Call</h5>
                                <p>+971 6 579 8313 / +971 52 756 9908</p>
                            </div>
                        </div>

                        <div className="campus-contact-item">
                            <div className="campus-contact-icon"><Mail size={20} /></div>
                            <div className="campus-contact-text">
                                <h5>Admissions Email</h5>
                                <p>info@nitaqacademy.com</p>
                            </div>
                        </div>

                        <div className="campus-contact-item">
                            <div className="campus-contact-icon"><ShieldCheck size={20} /></div>
                            <div className="campus-contact-text">
                                <h5>Accreditation</h5>
                                <p>SPEA Licensed Institution</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/971527569908" className="btn btn-primary" style={{ padding: '14px 30px' }}>
                            Book Free English Assessment on WhatsApp
                        </a>
                        <Link to="/enquiry" className="btn" style={{ background: '#f1f5f9', color: '#1e293b', padding: '14px 30px' }}>
                            Schedule Campus Visit
                        </Link>
                    </div>
                </div>

                <WhyNitaq />
            </CourseLayout>
        </>
    );
};

export default EnglishTuitionSharjah;
