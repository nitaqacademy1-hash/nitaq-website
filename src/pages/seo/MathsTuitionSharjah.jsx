import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    CheckCircle, MapPin, Phone, Mail, Clock, Calendar, 
    ShieldCheck, ArrowRight, BookOpen, Layers, Users, Award 
} from 'lucide-react';

const MathsTuitionSharjah = () => {
    return (
        <main className="article-details-page">
            <SEO />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Maths Tuition Sharjah</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <header className="article-header text-center">
                        <span className="article-category-badge">Academic Support</span>
                        <h1 className="article-main-title">
                            Maths Tuition in Sharjah: Complete Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics Coaching
                        </h1>
                    </header>

                    {/* AI DISCOVERABILITY / QUICK ANSWER SECTION */}
                    <section aria-labelledby="quick-answer" style={{ background: '#f0fdf4', border: '2px solid #2E7D32', borderRadius: '16px', padding: '24px 30px', margin: '30px 0 40px' }}>
                        <h2 id="quick-answer" style={{ color: '#1b5e20', fontSize: '1.4rem', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Maths Tuition at Nitaq Academy Sharjah
                        </h2>
                        <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.7', color: '#1e293b' }}>
                            Nitaq Academy provides SPEA-authorized Mathematics tuition in Sharjah for Class 1 to Class 12 students. We offer curriculum-aligned coaching for Cambridge IGCSE, Edexcel A-Levels, International Baccalaureate (IB AA & AI), and CBSE boards in small micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                        </p>
                    </section>

                    {/* KEY FACTS TABLE */}
                    <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ background: '#2E7D32', color: '#ffffff', textAlign: 'left' }}>
                                    <th style={{ padding: '14px 18px' }}>Program Attribute</th>
                                    <th style={{ padding: '14px 18px' }}>Details for Mathematics Tuition</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '0.95rem', color: '#334155' }}>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Grades Covered</td><td style={{ padding: '12px 18px' }}>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Curricula Supported</td><td style={{ padding: '12px 18px' }}>Cambridge IGCSE (0580 / 0607), Pearson Edexcel GCSE/A-Level, IB (PYP, MYP, DP AA/AI), CBSE (Standard & Basic), British Curriculum</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Batch Structure</td><td style={{ padding: '12px 18px' }}>Micro-batches (5 to 8 students) & 1-on-1 Dedicated Private Tutoring</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Delivery Formats</td><td style={{ padding: '12px 18px' }}>In-Person Classroom (Al Majaz 3, Sharjah) & Live Online HD Interactive Whiteboard (UAE-wide)</td></tr>
                                <tr><td style={{ padding: '12px 18px', fontWeight: 600 }}>Regulatory Licensing</td><td style={{ padding: '12px 18px' }}>Sharjah Private Education Authority (SPEA) Authorized</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                Mathematics forms the core quantitative foundation for modern academic and career pathways. Whether a student is establishing foundational arithmetic in primary school, preparing for high-stakes <strong>class 10 maths tuition in Sharjah</strong>, or tackling university-preparatory calculus in <strong>A-Level maths tuition in Sharjah</strong> and IB Diploma tracks, Nitaq Academy delivers structured, concept-driven mathematical instruction.
                            </p>

                            <h2>Tuition for Primary School (Class 1–5)</h2>
                            <p>
                                Primary mathematics instruction at Nitaq Academy focuses on building numerical confidence and eliminating math anxiety at an early age. Our curriculum for <strong>Class 1, Class 2, Class 3, Class 4, and Class 5</strong> covers:
                            </p>
                            <ul>
                                <li><strong>Number Sense & Mental Math:</strong> Addition, subtraction, multiplication tables, division strategies, and estimation techniques.</li>
                                <li><strong>Fractions, Decimals & Percentages:</strong> Visual representation of fractional parts and decimal place values.</li>
                                <li><strong>Measurement & 2D/3D Geometry:</strong> Perimeter, area, unit conversions, angles, and spatial reasoning.</li>
                                <li><strong>Word Problem Translation:</strong> Step-by-step methodologies to translate text scenarios into clear mathematical equations.</li>
                            </ul>

                            <h2>Tuition for Middle School (Class 6–8)</h2>
                            <p>
                                The transition from primary to middle school requires mastering abstract algebraic and geometric logic. Our programs for <strong>Class 6, Class 7, and Class 8</strong> bridge this developmental step through:
                            </p>
                            <ul>
                                <li><strong>Pre-Algebra & Linear Equations:</strong> Variables, algebraic expressions, linear equations in one variable, and factoring techniques.</li>
                                <li><strong>Ratios, Proportions & Financial Math:</strong> Unit rates, compound interest, percentages, profit and loss calculations.</li>
                                <li><strong>Coordinate Geometry & Graphs:</strong> Cartesian coordinates, plotting linear relations, and slope analysis.</li>
                                <li><strong>Plane Geometry & Statistics:</strong> Triangle congruency, Pythagorean theorem, polygons, mean, median, mode, and probability.</li>
                            </ul>

                            <h2>Tuition for Secondary School (Class 9–10)</h2>
                            <p>
                                Secondary school marks the entry into formal board certifications. For students enrolled in CBSE, British Curriculum, and American programs, our <strong>Class 9 and Class 10 maths tuition in Sharjah</strong> emphasizes precision, speed, and formula mastery:
                            </p>
                            <ul>
                                <li><strong>CBSE Class 9 & 10 Mathematics:</strong> Complete NCERT syllabus mastery covering Polynomials, Quadratic Equations, Arithmetic Progressions, Coordinate Geometry, Trigonometry, Circles, Surface Areas and Volumes, and Statistics.</li>
                                <li><strong>Standard vs. Basic Mathematics Support:</strong> Customized drill sheets tailored to student choice in Class 10 board formats.</li>
                                <li><strong>Step-Marking Strategies:</strong> Step-by-step presentation training aligning with official CBSE board marking criteria.</li>
                            </ul>

                            <h2>IGCSE Support</h2>
                            <p>
                                Our specialized <strong>IGCSE maths tuition in Sharjah</strong> covers Cambridge Assessment International Education (CAIE 0580 / 0607) and Pearson Edexcel (4MA1):
                            </p>
                            <ul>
                                <li><strong>Extended vs. Core Syllabus Coverage:</strong> In-depth exploration of advanced algebraic functions, quadratic inequalities, differentiation basics, vector geometry, transformations, and 3D trigonometry.</li>
                                <li><strong>Past Paper Practice:</strong> Systematic dissection of the last 10 years of May/June and Oct/Nov exam papers.</li>
                                <li><strong>Command-Word Accuracy:</strong> Training students to interpret examiner instructions such as "Show that", "Hence find", and "Calculate exact value".</li>
                            </ul>

                            <h2>A-Level Support</h2>
                            <p>
                                Advanced Level Mathematics requires analytical depth. Our <strong>A-Level maths tuition in Sharjah</strong> covers AS and A2 modules across Cambridge International, Edexcel, and AQA:
                            </p>
                            <ul>
                                <li><strong>Pure Mathematics (P1, P2, P3, P4):</strong> Advanced calculus (integration by parts, substitution, differential equations), parametric equations, vectors in 3D, and proof by contradiction.</li>
                                <li><strong>Mechanics (M1, M2):</strong> Kinematics, Newton’s laws of motion, equilibrium of rigid bodies, projectiles, and momentum.</li>
                                <li><strong>Probability & Statistics (S1, S2):</strong> Continuous random variables, normal distribution, hypothesis testing, and regression analysis.</li>
                            </ul>

                            <h2>IB Support</h2>
                            <p>
                                We offer dedicated tutoring for the International Baccalaureate Diploma Programme (IB DP):
                            </p>
                            <ul>
                                <li><strong>IB Mathematics: Analysis and Approaches (AA HL & SL):</strong> Analytic methods, proofs, calculus, complex numbers, and trigonometric functions.</li>
                                <li><strong>IB Mathematics: Applications and Interpretation (AI HL & SL):</strong> Mathematical modeling, statistical testing, matrices, and graphic display calculator (GDC) proficiencies.</li>
                                <li><strong>Internal Assessment (IA) Guidance:</strong> Brainstorming mathematical topics, data gathering, and rubric alignment for high exploration scores.</li>
                            </ul>

                            <h2>Online & Offline Classes</h2>
                            <p>
                                Nitaq Academy offers flexible learning modalities across the UAE:
                            </p>
                            <ul>
                                <li><strong>Offline In-Person Classes:</strong> Conducted in modern, distraction-free classrooms at Abu Khamseen Tower, Al Majaz 3, Sharjah.</li>
                                <li><strong>Live Online Tutoring:</strong> Interactive digital whiteboards, real-time audio-video mentoring, and recorded archives available to students in Dubai, Abu Dhabi, Ajman, and across the UAE.</li>
                            </ul>

                            <h2>Exam Preparation</h2>
                            <p>
                                Structured examination preparation at Nitaq Academy includes:
                            </p>
                            <ul>
                                <li>Weekly chapter-end diagnostic tests to identify retained concepts and recurring errors.</li>
                                <li>Monthly full-length timed mock examinations replicating real examination venue conditions.</li>
                                <li>Examiner report reviews highlighting common errors made by UAE candidates.</li>
                            </ul>

                            <h2>Personalized Learning</h2>
                            <p>
                                We believe in adaptive pacing. Students struggling with foundational prerequisites receive dedicated remediation, while advanced learners are guided through Olympiad problems, competition mathematics, and university-level entrance questions.
                            </p>

                            <h2>Why Choose Nitaq Academy in Sharjah</h2>
                            <ul>
                                <li><strong>SPEA Authorized:</strong> Licensed by the Sharjah Private Education Authority.</li>
                                <li><strong>Micro-Batches:</strong> 5 to 8 students per batch guarantees dedicated individual attention.</li>
                                <li><strong>Qualified Subject Specialists:</strong> Experienced mathematics instructors with verified board examination track records.</li>
                                <li><strong>Central Location:</strong> Situated in Al Majaz 3, Sharjah, easily accessible from King Faisal Street and Buhaira Corniche.</li>
                            </ul>

                            <div className="content-hr"></div>

                            {/* COMPREHENSIVE 12 FAQS */}
                            <h2>Frequently Asked Questions About Maths Tuition in Sharjah</h2>
                            <div className="faq-accordion-group">
                                <details className="faq-accordion" open><summary>1. Do you provide Class 10 Maths tuition in Sharjah?</summary><p>Yes, Nitaq Academy offers specialized Class 10 Maths tuition in Sharjah for both CBSE (Standard and Basic) and IGCSE curriculums, focusing on board question banks and step-marking techniques.</p></details>
                                <details className="faq-accordion"><summary>2. Do you teach IGCSE Mathematics in Sharjah?</summary><p>Yes, we cover both Cambridge CAIE (0580/0607) and Pearson Edexcel IGCSE Mathematics with extensive past paper solving and command-word analysis.</p></details>
                                <details className="faq-accordion"><summary>3. Are online Mathematics classes available?</summary><p>Yes, our live online Mathematics classes feature HD interactive whiteboards, direct teacher communication, and recorded revision archives for students across the UAE.</p></details>
                                <details className="faq-accordion"><summary>4. What is the average batch size for maths classes?</summary><p>We maintain micro-batches of only 5 to 8 students to guarantee that every learner receives individualized feedback and doubt clearance.</p></details>
                                <details className="faq-accordion"><summary>5. Do you provide exam practice papers?</summary><p>Yes, students receive topic-wise worksheets, formula cheat sheets, and past 10-year examination paper compilations with detailed marking schemes.</p></details>
                                <details className="faq-accordion"><summary>6. Do you teach A-Level and Class 12 Mathematics?</summary><p>Yes, we provide advanced Pure Mathematics, Mechanics, and Statistics tuition for A-Level and CBSE Class 11 and 12 board students.</p></details>
                                <details className="faq-accordion"><summary>7. How do you support IB Mathematics students?</summary><p>We offer specialized tutoring for both IB Math Analysis & Approaches (AA HL/SL) and Applications & Interpretation (AI HL/SL), including Internal Assessment (IA) mentoring.</p></details>
                                <details className="faq-accordion"><summary>8. Where is your tuition center located in Sharjah?</summary><p>Our center is located at Office F103, Floor F1, Abu Khamseen Tower, Al Majaz 3, Sharjah, UAE.</p></details>
                                <details className="faq-accordion"><summary>9. Do you cover foundational Maths for Class 1 to 5?</summary><p>Yes, our primary school program builds mental math agility, number sense, and word problem translation for Class 1 to Class 5 students.</p></details>
                                <details className="faq-accordion"><summary>10. Are 1-on-1 private tutoring sessions available?</summary><p>Yes, we provide dedicated 1-on-1 private tutoring sessions for students requiring customized one-on-one attention or urgent exam preparation.</p></details>
                                <details className="faq-accordion"><summary>11. Is Nitaq Academy an authorized training institute?</summary><p>Yes, Nitaq Academy is an officially licensed and SPEA-authorized (Sharjah Private Education Authority) educational training center.</p></details>
                                <details className="faq-accordion"><summary>12. How can I enroll or book a free trial assessment?</summary><p>You can call or WhatsApp our admissions desk at +971 52 756 9908 or submit an enquiry form on our website to schedule a free diagnostic assessment.</p></details>
                            </div>

                            {/* INTERNAL LINKING TO OTHER SUBJECT PAGES */}
                            <div style={{ marginTop: '40px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Explore Other Academic Subjects at Nitaq Academy:</h3>
                                <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li>Explore <Link to="/science-tuition-sharjah" className="inline-link">Science Tuition in Sharjah (Physics, Chemistry & Biology)</Link></li>
                                    <li>Explore <Link to="/english-tuition-sharjah" className="inline-link">English Tuition in Sharjah (Grammar, Reading & Writing)</Link></li>
                                    <li>Explore <Link to="/social-science-tuition-sharjah" className="inline-link">Social Science Tuition in Sharjah (History, Geography & Civics)</Link></li>
                                </ul>
                            </div>

                            {/* CONTACT & LOCATION */}
                            <h2>Contact & Location in Al Majaz 3, Sharjah</h2>
                            <div style={{ background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', margin: '20px 0' }}>
                                <p style={{ margin: '0 0 10px' }}><strong>Institution:</strong> Nitaq Academy</p>
                                <p style={{ margin: '0 0 10px' }}><strong>Address:</strong> Office F103, Floor F1, Abu Khamseen Tower, Al Majaz 3, Sharjah, UAE</p>
                                <p style={{ margin: '0 0 10px' }}><strong>Phone / WhatsApp:</strong> <a href="tel:+971527569908" style={{ color: '#2E7D32', fontWeight: 600 }}>+971 52 756 9908</a></p>
                                <p style={{ margin: '0 0 15px' }}><strong>Email:</strong> <a href="mailto:info@nitaqacademy.com" style={{ color: '#2E7D32', fontWeight: 600 }}>info@nitaqacademy.com</a></p>
                                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                    <a href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20am%20inquiring%20about%20Maths%20Tuition%20in%20Sharjah" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '50px', background: '#2E7D32', color: '#fff', fontWeight: 700 }}>
                                        WhatsApp Admissions (+971 52 756 9908)
                                    </a>
                                    <Link to="/enquiry" className="btn-outline-primary" style={{ padding: '12px 24px' }}>
                                        Book Diagnostic Evaluation
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <aside className="article-sidebar">
                            <div className="enroll-sidebar-card">
                                <h3>Maths Tuition Sharjah</h3>
                                <p>Class 1 to 12 | All Curricula</p>
                                <ul style={{ textAlign: 'left', margin: '20px 0', padding: 0, listStyle: 'none', fontSize: '0.9rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> IGCSE & A-Level Maths</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> CBSE Class 9 to 12 Maths</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> IB Math AA & AI HL/SL</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> Micro-Batches & 1-on-1</li>
                                </ul>
                                <a href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20am%20inquiring%20about%20Maths%20Tuition" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px 0', borderRadius: '50px', background: '#25D366', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default MathsTuitionSharjah;
