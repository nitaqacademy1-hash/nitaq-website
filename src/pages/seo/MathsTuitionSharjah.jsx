import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Calculator, Binary, Compass, FileText, Mail
} from 'lucide-react';

const MathsTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 1 to 12 (Primary to High School)",
        "Curricula Supported": "Cambridge IGCSE, Edexcel A-Level, IB (AA/AI), CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "10-Yr Past Papers, Step-Marking & Diagnostic Tests",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Maths Tuition in Sharjah"
                subtitle="Complete Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics Coaching for Class 1 to 12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Maths Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Mathematics tuition in Sharjah</strong> for Class 1 to Class 12 students. We deliver curriculum-aligned coaching for <strong>Cambridge IGCSE (0580/0607)</strong>, <strong>Pearson Edexcel A-Levels</strong>, <strong>International Baccalaureate (IB Math AA & AI HL/SL)</strong>, and <strong>CBSE (Standard & Basic)</strong>. Instruction is conducted in micro-batches of 5 to 8 students and 1-on-1 private formats at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across Dubai and the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Premier <span className="text-gradient">Mathematics Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Mathematics is the foundational language for STEM careers, quantitative reasoning, and academic success. Whether your child is mastering mental arithmetic in primary school, aiming for a 95%+ score in <strong>Class 10 Maths tuition in Sharjah</strong>, or tackling advanced calculus for <strong>A-Level Maths tuition</strong> and IB Diploma tracks, Nitaq Academy offers tailored, concept-first mathematical coaching.
                        </p>
                        <p>
                            Our specialized faculty in <strong>Al Majaz 3, Sharjah</strong> breaks down intimidating theorems and algebraic concepts into structured, manageable problem-solving steps. Through rigorous diagnostic assessments, step-by-step presentation training, and structured homework feedback, we transform math anxiety into high exam confidence.
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
                                    <th>Specification for Mathematics Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0580, 0607), Pearson Edexcel (4MA1, Core, Pure, Mechanics, Stats), IB DP (AA & AI SL/HL), CBSE (Standard & Basic Math), British Curriculum</td>
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
                                <tr>
                                    <td className="spec-label">Assessment & Tracking</td>
                                    <td>Weekly topical diagnostic tests, monthly mock exams, 10-year past paper dissection, detailed parent progress reporting</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS (4 CARDS) */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Academic Pathways (Class 1 to 12)</span></h2>
                    <p style={{ color: '#475569', marginBottom: '10px' }}>
                        Our mathematics curriculum is calibrated across developmental milestones to ensure deep numerical confidence:
                    </p>

                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 1 to 5</span>
                            <h3>Primary School Math</h3>
                            <p className="grade-desc">Foundational arithmetic and building intuitive numerical confidence.</p>
                            <ul>
                                <li><strong>Number Sense & Mental Math:</strong> Tables mastery, addition, subtraction, division strategies.</li>
                                <li><strong>Fractions & Decimals:</strong> Visual place values, percentage foundations.</li>
                                <li><strong>2D/3D Geometry:</strong> Perimeter, area, angles, spatial measurements.</li>
                                <li><strong>Word Problems:</strong> Translating real-world text into clear equations.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 6 to 8</span>
                            <h3>Middle School Math</h3>
                            <p className="grade-desc">Transition from concrete arithmetic to abstract algebraic reasoning.</p>
                            <ul>
                                <li><strong>Pre-Algebra & Equations:</strong> Linear equations in one variable, polynomials, factoring.</li>
                                <li><strong>Commercial Math:</strong> Ratios, proportions, profit/loss, simple & compound interest.</li>
                                <li><strong>Coordinate Geometry:</strong> Cartesian planes, graphing linear relations, slope concepts.</li>
                                <li><strong>Plane Geometry:</strong> Triangle congruency, polygons, statistics, probability.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 9 & 10</span>
                            <h3>Secondary School Board</h3>
                            <p className="grade-desc">High-stakes preparation for CBSE Board, IGCSE (0580/0607), and MYP.</p>
                            <ul>
                                <li><strong>Advanced Algebra:</strong> Quadratic equations, arithmetic progressions, polynomials.</li>
                                <li><strong>Trigonometry:</strong> Identities, heights and distances, circular functions.</li>
                                <li><strong>Coordinate & Mensuration:</strong> Section formulas, surface areas & volumes of solids.</li>
                                <li><strong>Step-Marking Mastery:</strong> Aligning written solutions with board marking criteria.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 11 & 12</span>
                            <h3>Higher Secondary / A-Level / IB</h3>
                            <p className="grade-desc">University-preparatory mathematics for competitive engineering and finance.</p>
                            <ul>
                                <li><strong>Calculus:</strong> Limits, continuity, differentiation, integration, differential equations.</li>
                                <li><strong>Vectors & 3D Geometry:</strong> Vector algebra, planes, directional cosines.</li>
                                <li><strong>Probability & Statistics:</strong> Binomial distributions, conditional probability, hypothesis testing.</li>
                                <li><strong>Matrices & Determinants:</strong> System of linear equations, inverse operations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS (CBSE, IGCSE, A-LEVEL, IB) */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Mathematics</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Class 9-10 Standard & Basic</span>
                                <span className="curriculum-pill">Class 11-12 NCERT + Exemplar</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Rigorous chapter-by-chapter mastery of NCERT, NCERT Exemplar, RD Sharma problem sets, and previous 10 years' CBSE board papers with strict step-marking optimization.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>IGCSE Mathematics</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">CAIE 0580 / 0607</span>
                                <span className="curriculum-pill">Edexcel 4MA1 Higher</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Extended curriculum coverage focusing on algebraic functions, vector geometry, 3D trigonometry, differentiation, and solving 10 years of May/June & Oct/Nov past papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>A-Level & IB Math</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Edexcel Pure & Mechanics</span>
                                <span className="curriculum-pill">IB DP AA & AI (HL/SL)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Intensive training on complex theoretical derivations, advanced calculus applications, statistical modeling, and Internal Assessment (IA) guidance for top universities.
                            </p>
                        </div>
                    </div>
                </div>

                {/* PEDAGOGY & METHODOLOGY */}
                <div className="content-card">
                    <h2>Our Proven <span className="text-gradient">Teaching Methodology</span></h2>
                    <div className="strategy-grid">
                        <div className="strategy-card">
                            <Target size={28} color="#2E7D32" style={{ marginBottom: '15px' }} />
                            <h3>1. Diagnostic Assessment</h3>
                            <p>
                                Every student starts with a baseline diagnostic test to uncover hidden conceptual gaps in prerequisite topics before customizing the learning plan.
                            </p>
                        </div>

                        <div className="strategy-card">
                            <Sparkles size={28} color="#2BBBAD" style={{ marginBottom: '15px' }} />
                            <h3>2. Concept Before Formula</h3>
                            <p>
                                We prioritize logical derivation and real-world visualization over rote memorization so students can independently solve novel, unseen exam questions.
                            </p>
                        </div>

                        <div className="strategy-card">
                            <TrendingUp size={28} color="#2E7D32" style={{ marginBottom: '15px' }} />
                            <h3>3. 10-Yr Past Paper Mastery</h3>
                            <p>
                                Timed exam condition drills with past papers, examiner report analysis, and mark scheme precision training targeting maximum score conversion.
                            </p>
                        </div>
                    </div>
                </div>

                {/* LEARNING MODES: IN-PERSON SHARJAH & ONLINE UAE */}
                <div className="content-card">
                    <h2>Flexible Delivery: <span className="text-gradient">Sharjah Campus & Online UAE</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>In-Person Tuition in Sharjah</h3>
                            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                                Attend classes at our premium campus in Abu Khamseen Tower, Al Majaz 3, Sharjah. Modern air-conditioned classrooms, interactive digital screens, structured physical study materials, and direct mentor attention.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Live Online Tuition UAE</h3>
                            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                                High-definition two-way interactive classes with digital drawing tablets, live screen annotations, instant session recordings for revision, and digital assignment tracking across Dubai, Abu Dhabi, and Sharjah.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Maths Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions from parents and students looking for the best mathematics tutoring in Sharjah and UAE:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Mathematics tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive Maths tuition for Cambridge IGCSE (0580/0607), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB Math AA and AI at HL/SL), CBSE (Class 1 to 12 Standard and Basic), and the British National Curriculum.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What is the average batch size for maths classes at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>We maintain micro-batches of 5 to 8 students to ensure personal mentor attention, active participation, and individual doubt resolution. We also offer 1-on-1 private tutoring for students requiring focused remediation or accelerated pacing.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer online Maths tuition for students living in Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. We deliver live interactive online classes equipped with digital drawing tablets, shared virtual whiteboards, and recorded sessions accessible throughout Dubai, Abu Dhabi, Ajman, and across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students overcome math anxiety and foundational learning gaps? <ChevronDown size={18} /></summary>
                            <p>Every student undergoes a comprehensive diagnostic evaluation before joining. We trace learning gaps back to prerequisite topics, rebuild foundational arithmetic and algebraic rules, and use confidence-building graded worksheets.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide past paper practice for Class 10 CBSE and IGCSE board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official past examination papers under timed exam conditions. Teachers provide line-by-line mark scheme analysis and examiner feedback to maximize written step scores.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students get help with IB Math Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB specialist tutors provide structured guidance on topic selection, mathematical exploration design, formatting, and rubric alignment for both Analysis & Approaches (AA) and Applications & Interpretation (AI) IAs.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Mathematics tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our mathematics faculty hold Master's degrees and postgraduate qualifications in Mathematics, Engineering, or Education, with a minimum of 5 to 12 years of specialized international board teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How are parents kept informed of their child's mathematical progress? <ChevronDown size={18} /></summary>
                            <p>Parents receive bi-weekly progress reports detailing attendance, homework completion rates, topical test scores, and qualitative tutor observations, alongside scheduled monthly parent-teacher conferences.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What is the difference between CBSE Standard and Basic Mathematics tuition? <ChevronDown size={18} /></summary>
                            <p>Standard Mathematics is designed for students intending to pursue Math/Science in Class 11-12 and requires advanced problem-solving depth. Basic Mathematics evaluates foundational syllabus mastery. We offer customized modules tailored to each choice.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our physical campus is centrally located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from King Faisal Street and Al Wahda Street.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I book a free assessment or demo class for Maths tuition? <ChevronDown size={18} /></summary>
                            <p>You can book a free diagnostic test or demo session by messaging our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are revision classes and doubt clearing sessions included before school exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of term exams, mock exams, and final board sessions, we organize intensive weekend revision bootcamps and dedicated 1-on-1 doubt-clearing clinics at no additional charge.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Nitaq Academy offers comprehensive tutoring across all core school disciplines in Sharjah:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/science-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Science Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Physics, Chemistry, and Biology coaching for Class 1 to 12 across IGCSE, CBSE, and IB boards.</p>
                            </div>
                        </Link>

                        <Link to="/english-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>English Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Grammar mastery, comprehension, essay writing, and IGCSE First Language English coaching.</p>
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
                            Book Free Maths Assessment on WhatsApp
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

export default MathsTuitionSharjah;
