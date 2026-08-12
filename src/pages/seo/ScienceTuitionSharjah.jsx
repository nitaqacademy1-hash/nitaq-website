import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    CheckCircle, MapPin, Phone, Mail, Clock, Calendar, 
    ShieldCheck, ArrowRight, BookOpen, Layers, Users, Award 
} from 'lucide-react';

const ScienceTuitionSharjah = () => {
    return (
        <main className="article-details-page">
            <SEO />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span>Science Tuition Sharjah</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <header className="article-header text-center">
                        <span className="article-category-badge">Academic Support</span>
                        <h1 className="article-main-title">
                            Science Tuition in Sharjah: Physics, Chemistry & Biology Coaching for Class 1 to 12, IGCSE, A-Level, IB & CBSE
                        </h1>
                    </header>

                    {/* AI DISCOVERABILITY / QUICK ANSWER SECTION */}
                    <section aria-labelledby="quick-answer" style={{ background: '#f0fdf4', border: '2px solid #2E7D32', borderRadius: '16px', padding: '24px 30px', margin: '30px 0 40px' }}>
                        <h2 id="quick-answer" style={{ color: '#1b5e20', fontSize: '1.4rem', margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Science Tuition at Nitaq Academy Sharjah
                        </h2>
                        <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.7', color: '#1e293b' }}>
                            Nitaq Academy offers comprehensive Science tuition in Sharjah covering Physics, Chemistry, and Biology for Class 1 to Class 12. We support Cambridge IGCSE, Edexcel A-Levels, International Baccalaureate (IB Sciences HL/SL), and CBSE curriculums through certified subject teachers at Abu Khamseen Tower, Al Majaz 3, Sharjah, and via live interactive online classes across the UAE.
                        </p>
                    </section>

                    {/* KEY FACTS TABLE */}
                    <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                            <thead>
                                <tr style={{ background: '#2E7D32', color: '#ffffff', textAlign: 'left' }}>
                                    <th style={{ padding: '14px 18px' }}>Program Dimension</th>
                                    <th style={{ padding: '14px 18px' }}>Details for Science Tuition</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontSize: '0.95rem', color: '#334155' }}>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Grades Covered</td><td style={{ padding: '12px 18px' }}>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Subject Disciplines</td><td style={{ padding: '12px 18px' }}>General Science, Physics, Chemistry, Biology, Environmental Science</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Curricula Covered</td><td style={{ padding: '12px 18px' }}>Cambridge IGCSE (0625, 0620, 0610), Edexcel GCSE/A-Level, IB (PYP, MYP, DP HL/SL), CBSE, British Curriculum</td></tr>
                                <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}><td style={{ padding: '12px 18px', fontWeight: 600 }}>Learning Formats</td><td style={{ padding: '12px 18px' }}>Classroom Batches (5–8 students), 1-on-1 Private Tutoring & Live Interactive Online Classes</td></tr>
                                <tr><td style={{ padding: '12px 18px', fontWeight: 600 }}>Accreditation</td><td style={{ padding: '12px 18px' }}>SPEA Authorized (Sharjah Private Education Authority)</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                Scientific mastery demands deep conceptual clarity paired with quantitative problem-solving and experimental understanding. Nitaq Academy provides specialized <strong>science tuition in Sharjah</strong>, connecting abstract theoretical principles in <strong>physics tuition in Sharjah</strong>, <strong>chemistry tuition in Sharjah</strong>, and <strong>biology tuition in Sharjah</strong> to practical real-world applications and examination marking criteria.
                            </p>

                            <h2>Tuition for Primary School (Class 1–5)</h2>
                            <p>
                                In primary education (Class 1, Class 2, Class 3, Class 4, and Class 5), we foster natural scientific curiosity and observational skills through:
                            </p>
                            <ul>
                                <li><strong>Living Things & Habitats:</strong> Plant and animal life cycles, adaptations, classification, and ecosystems.</li>
                                <li><strong>States of Matter & Materials:</strong> Solids, liquids, gases, reversible and irreversible changes, properties of materials.</li>
                                <li><strong>Forces, Magnets & Motion:</strong> Gravity, friction, magnetic poles, simple machines, and motion concepts.</li>
                                <li><strong>Earth & Space:</strong> Solar system, day-night cycles, weather patterns, and environmental conservation.</li>
                            </ul>

                            <h2>Tuition for Middle School (Class 6–8)</h2>
                            <p>
                                Middle school marks the formal transition into specialized scientific domains. Our coaching for Class 6, Class 7, and Class 8 covers:
                            </p>
                            <ul>
                                <li><strong>Foundational Physics:</strong> Speed, velocity, balanced/unbalanced forces, simple electrical circuits, light reflection/refraction, sound waves.</li>
                                <li><strong>Foundational Chemistry:</strong> Atoms, molecules, elements, compounds, mixtures, separation techniques, acids, bases, and salts.</li>
                                <li><strong>Foundational Biology:</strong> Cell structure and function, human organ systems (digestive, circulatory, respiratory), photosynthesis, and cellular respiration.</li>
                            </ul>

                            <h2>Tuition for Secondary School (Class 9–10)</h2>
                            <p>
                                For students preparing for Class 9 and <strong>class 10 science tuition in Sharjah</strong> under CBSE, IGCSE, and British boards:
                            </p>
                            <ul>
                                <li><strong>CBSE Class 10 Science:</strong> Chemical Reactions and Equations, Acids Bases and Salts, Metals and Non-metals, Carbon and its Compounds, Life Processes, Control and Coordination, Heredity, Light Reflection/Refraction, Human Eye, Electricity, Magnetic Effects of Electric Current.</li>
                                <li><strong>Numerical Problem Solving:</strong> Comprehensive practice with circuit resistor combinations, lens/mirror formulas, and chemical stoichiometry.</li>
                                <li><strong>Diagram Accuracy:</strong> Precision drawing and labeling for biological systems, ray diagrams, and magnetic field lines.</li>
                            </ul>

                            <h2>IGCSE Support</h2>
                            <p>
                                Our IGCSE science program prepares learners for Cambridge (CAIE) and Pearson Edexcel separate and combined sciences:
                            </p>
                            <ul>
                                <li><strong>IGCSE Physics (0625):</strong> Thermal physics, wave properties, electromagnetic spectrum, radioactivity, space physics, and alternative to practical (Paper 6) techniques.</li>
                                <li><strong>IGCSE Chemistry (0620):</strong> Stoichiometry, electrolysis, chemical energetics, equilibrium, organic chemistry, polymers, and experimental qualitative analysis.</li>
                                <li><strong>IGCSE Biology (0610):</strong> Biological molecules, enzyme kinetics, genetic inheritance, biotechnology, genetic engineering, and ecology.</li>
                            </ul>

                            <h2>A-Level Support</h2>
                            <p>
                                Advanced Level Science tuition in Sharjah delivers rigorous preparation for AS and A2 examinations:
                            </p>
                            <ul>
                                <li><strong>A-Level Physics:</strong> Electric fields, gravitational fields, capacitance, quantum physics, medical physics, and particle physics.</li>
                                <li><strong>A-Level Chemistry:</strong> Thermodynamics (Born-Haber cycles, entropy, Gibbs free energy), transition metal chemistry, aromatic organic synthesis, NMR spectroscopy, and reaction mechanisms.</li>
                                <li><strong>A-Level Biology:</strong> Photosynthetic biochemistry, respiration pathways, gene expression regulation, recombinant DNA technology, and biodiversity conservation.</li>
                            </ul>

                            <h2>IB Support</h2>
                            <p>
                                We support International Baccalaureate Diploma Programme (IB DP) science candidates:
                            </p>
                            <ul>
                                <li><strong>IB Physics, Chemistry & Biology (Higher Level & Standard Level):</strong> Deep inquiry-based topic mastery and Nature of Science (NOS) integration.</li>
                                <li><strong>Internal Assessment (IA) Scientific Guidance:</strong> Methodology formulation, risk assessment, error propagation, data processing, and evaluation against official IB criteria.</li>
                            </ul>

                            <h2>Online & Offline Classes</h2>
                            <ul>
                                <li><strong>Offline In-Person Tutoring:</strong> Modern laboratory-demonstration-equipped classrooms at Abu Khamseen Tower, Al Majaz 3, Sharjah.</li>
                                <li><strong>Live Online Tutoring:</strong> Interactive digital simulations, real-time quizzes, and cloud-recorded revision access across Dubai, Abu Dhabi, and the UAE.</li>
                            </ul>

                            <h2>Exam Preparation</h2>
                            <ul>
                                <li>Extensive past paper marathons covering the last 10 years with mark-scheme keyword alignment.</li>
                                <li>Alternative to Practical (ATP) and practical data analysis training for British and IB boards.</li>
                                <li>Timed chapter tests and full mock board examinations.</li>
                            </ul>

                            <h2>Personalized Learning</h2>
                            <p>
                                We assess baseline student knowledge using diagnostic entry tests. Mentors focus on specific conceptual barriers—whether numerical calculations in physics, reaction balancing in chemistry, or detailed anatomical explanations in biology.
                            </p>

                            <h2>Why Choose Nitaq Academy in Sharjah</h2>
                            <ul>
                                <li><strong>SPEA Authorized:</strong> Government accredited training center in Sharjah.</li>
                                <li><strong>Dedicated Subject Specialists:</strong> Separate specialized instructors for Physics, Chemistry, and Biology.</li>
                                <li><strong>Small Batches:</strong> 5 to 8 students ensure complete focus on individual student doubts.</li>
                                <li><strong>Central Al Majaz 3 Campus:</strong> Conveniently accessible across Sharjah and the Dubai border.</li>
                            </ul>

                            <div className="content-hr"></div>

                            {/* COMPREHENSIVE 12 FAQS */}
                            <h2>Frequently Asked Questions About Science Tuition in Sharjah</h2>
                            <div className="faq-accordion-group">
                                <details className="faq-accordion" open><summary>1. Do you provide Class 10 Science tuition in Sharjah?</summary><p>Yes, Nitaq Academy offers specialized Class 10 Science tuition in Sharjah covering Physics, Chemistry, and Biology for CBSE, IGCSE, and British Curriculum boards.</p></details>
                                <details className="faq-accordion"><summary>2. Do you have separate tutors for Physics, Chemistry, and Biology?</summary><p>Yes, our secondary and higher secondary programs are taught by dedicated subject specialists with advanced degrees in Physics, Chemistry, and Biology.</p></details>
                                <details className="faq-accordion"><summary>3. Do you offer IGCSE Science tuition in Sharjah?</summary><p>Yes, we prepare students for Cambridge CAIE and Pearson Edexcel IGCSE separate sciences (Physics 0625, Chemistry 0620, Biology 0610) and Combined/Co-ordinated Science.</p></details>
                                <details className="faq-accordion"><summary>4. Are online Science classes available?</summary><p>Yes, our live online classes feature interactive digital whiteboards, molecular simulation software, and recorded video archives for students throughout the UAE.</p></details>
                                <details className="faq-accordion"><summary>5. What is the batch size for Science tuition?</summary><p>We maintain micro-batches of 5 to 8 students to ensure individualized attention, numerical problem-solving checks, and instant doubt resolution.</p></details>
                                <details className="faq-accordion"><summary>6. Do you teach A-Level Physics, Chemistry, and Biology?</summary><p>Yes, we conduct comprehensive AS and A2 Level coaching for Cambridge, Edexcel, and AQA boards focusing on advanced derivations and mark scheme keywords.</p></details>
                                <details className="faq-accordion"><summary>7. How do you support IB Science students with Internal Assessments (IA)?</summary><p>Our mentors provide rubric-aligned guidance on research question formulation, data processing, statistical analysis, and error evaluation for IB Physics, Chemistry, and Biology IAs.</p></details>
                                <details className="faq-accordion"><summary>8. Do you provide past exam papers and revision kits?</summary><p>Yes, students receive chapter-wise question banks, formula booklets, practical exam guides (Paper 6 / ATP), and past 10-year exam paper compilations.</p></details>
                                <details className="faq-accordion"><summary>9. Can students enroll for single subjects like only Physics or only Chemistry?</summary><p>Yes, flexible single-subject enrollment options are available alongside comprehensive triple-science packages.</p></details>
                                <details className="faq-accordion"><summary>10. Do you offer Science tuition for Primary Class 1 to 5?</summary><p>Yes, our primary science program builds observational thinking, natural curiosity, and fundamental physical science concepts for Class 1 to Class 5 students.</p></details>
                                <details className="faq-accordion"><summary>11. Is Nitaq Academy an authorized training institute in Sharjah?</summary><p>Yes, Nitaq Academy is an officially licensed and SPEA-authorized (Sharjah Private Education Authority) educational center.</p></details>
                                <details className="faq-accordion"><summary>12. How can I schedule a diagnostic assessment for Science?</summary><p>You can contact our admissions team on WhatsApp at +971 52 756 9908 or complete the online enquiry form to schedule a free diagnostic assessment.</p></details>
                            </div>

                            {/* INTERNAL LINKING */}
                            <div style={{ marginTop: '40px', padding: '20px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>Explore Other Academic Subjects at Nitaq Academy:</h3>
                                <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li>Explore <Link to="/maths-tuition-sharjah" className="inline-link">Maths Tuition in Sharjah (Primary to A-Level & IB)</Link></li>
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
                                    <a href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20am%20inquiring%20about%20Science%20Tuition%20in%20Sharjah" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '50px', background: '#2E7D32', color: '#fff', fontWeight: 700 }}>
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
                                <h3>Science Tuition Sharjah</h3>
                                <p>Physics, Chemistry & Biology</p>
                                <ul style={{ textAlign: 'left', margin: '20px 0', padding: 0, listStyle: 'none', fontSize: '0.9rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> Class 1 to 12 All Curricula</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> IGCSE & A-Level Sciences</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> IB Physics, Chemistry, Biology</li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#2E7D32" /> SPEA Authorized Center</li>
                                </ul>
                                <a href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20am%20inquiring%20about%20Science%20Tuition" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px 0', borderRadius: '50px', background: '#25D366', color: '#fff', fontWeight: 700, textDecoration: 'none' }}>
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

export default ScienceTuitionSharjah;
