import React from 'react';
import { Link } from 'react-router-dom';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle 
} from 'lucide-react';

const AcademicExcellenceCourse = () => {
    const infoData = {
        "Levels / Grades": "Grades 1 to 12 (Primary to High School)",
        "Subjects": "English, Mathematics, Science (Physics, Chemistry, Biology), Arabic",
        "Curricula Supported": "IGCSE, A-Level, IB (PYP/MYP/DP), CBSE, American",
        "Duration": "Term-Based, 6 Months & Annual Tracks",
        "Mode": "Sharjah Campus (Al Majaz 3) & Live Online UAE",
        "Accreditation": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Academic Excellence in Sharjah"
                subtitle="Premier school academic support, IGCSE classes, A-Level tuition, and IB tutoring in Sharjah designed for measurable student performance improvement."
                infoData={infoData}
            >
                {/* HERO OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Premier <span className="text-gradient">Academic Support in Sharjah</span> for School Success</h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            At <strong>Nitaq Academy</strong>, our <strong>Academic Excellence programme</strong> delivers individualized <strong>academic support in Sharjah</strong> for students from Grade 1 through Grade 12. Operating from our state-of-the-art campus in <strong>Al Majaz 3, Sharjah</strong>, we bridge conceptual gaps, cultivate disciplined study habits, and prepare students to achieve top-tier grades across <strong>Cambridge IGCSE</strong>, <strong>Edexcel International A-Levels</strong>, the <strong>International Baccalaureate (IB)</strong>, and <strong>CBSE</strong> boards.
                        </p>
                        <p>
                            Navigating rigorous school assessments and high-stakes international examinations in the UAE requires more than passive classroom attendance. Our SPEA-authorized tutoring center pairs each learner with veteran subject mentors who use diagnostic learning assessments to create customized improvement pathways in <strong>English, Mathematics, Physics, Chemistry, Biology, and Arabic</strong>.
                        </p>
                    </div>
                </div>

                {/* PERSONALIZED LEARNING */}
                <div className="content-card">
                    <h2><span className="text-gradient">Personalized Learning</span> in Sharjah: Tailored for Every Student</h2>
                    <div className="overview-text">
                        <p>
                            Every learner processes complex concepts at a distinct pace. Our commitment to <strong>personalized learning in Sharjah</strong> means your child is never treated as a number in an overcrowded lecture hall. We maintain strict micro-batch sizes of 5 to 8 students, alongside dedicated 1-on-1 private tutoring tracks.
                        </p>
                        <ul className="card-list" style={{ marginTop: '20px' }}>
                            <li><strong>Baseline Diagnostic Assessments:</strong> We pinpoint foundational knowledge gaps before designing the customized syllabus roadmap.</li>
                            <li><strong>Adaptive Pacing:</strong> Students who need remediation receive targeted foundational drills, while high achievers are accelerated toward olympiad and advanced board questions.</li>
                            <li><strong>Continuous Progress Tracking:</strong> Bi-weekly evaluations track quantitative score gains and conceptual retention.</li>
                            <li><strong>Holistic Mentorship:</strong> Developing organizational discipline, revision scheduling, and anxiety-reduction strategies for high-stakes exam days.</li>
                        </ul>
                    </div>
                </div>

                {/* CURRICULA SPECIALIZATIONS: IGCSE, A-LEVEL, IB */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">IGCSE, A-Level & IB Support</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>IGCSE Classes Sharjah</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Cambridge (CAIE) & Pearson Edexcel | Grades 9 & 10</p>
                            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                                Our dedicated <Link to="/academic-excellence" className="inline-link">IGCSE Mathematics classes in Sharjah</Link> and Co-ordinated Science programs focus on command word mastery, mark scheme alignment, and extensive past paper drills targeting consistent <strong>A* and Grade 9</strong> outcomes.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>A-Level Tuition Sharjah</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>AS & A2 Level Specialized Coaching | Grades 11 & 12</p>
                            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                                Intensive <Link to="/academic-excellence" className="inline-link">A-Level Science tuition</Link> and Advanced Pure Mathematics coaching. We unpack rigorous theoretical derivations, calculus applications, and analytical problem-solving required for competitive UK and global university admissions.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>IB Tutoring Sharjah</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>IB PYP, MYP & Diploma Programme (DP SL/HL)</p>
                            <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: '1.6' }}>
                                Specialist <Link to="/academic-excellence" className="inline-link">IB academic support</Link> covering IB Math (AA & AI), IB Physics, Chemistry, Biology HL/SL, and structured rubric guidance for Internal Assessments (IA) and Extended Essays (EE).
                            </p>
                        </div>
                    </div>
                </div>

                {/* CORE SUBJECTS: ENGLISH, MATHS, SCIENCE */}
                <div className="content-card">
                    <h2>Core Disciplines: <span className="text-gradient">English, Mathematics & Science Tuition</span> in Sharjah</h2>
                    <p style={{ marginBottom: '25px', color: '#475569' }}>
                        We deliver rigorous, subject-specific tutoring designed to produce undeniable <strong>student performance improvement in Sharjah</strong>:
                    </p>

                    <div className="strategy-grid">
                        <div className="strategy-card">
                            <h3>Mathematics Coaching (Grades 1 to 12)</h3>
                            <p>
                                From foundational mental arithmetic and algebra in middle school to complex differential calculus, vectors, trigonometry, and statistics for senior boards. Our <Link to="/academic-excellence" className="inline-link">Mathematics coaching</Link> builds speed, accuracy, and conceptual clarity.
                            </p>
                        </div>

                        <div className="strategy-card">
                            <h3>Science Tutoring: Physics, Chemistry & Biology</h3>
                            <p>
                                Abstract scientific laws become intuitive with our expert <Link to="/academic-excellence" className="inline-link">Science tutoring</Link>. We cover Newtonian mechanics, organic synthesis, stoichiometry, cellular biology, genetics, and lab practical methodologies across all boards.
                            </p>
                        </div>

                        <div className="strategy-card">
                            <h3>English Language & Literature Support</h3>
                            <p>
                                Elevate reading comprehension, essay structuring, literary criticism, and creative writing. For students seeking verbal fluency, we also offer our renowned <Link to="/spoken-english" className="inline-link">English language support</Link> and spoken communication modules.
                            </p>
                        </div>
                    </div>
                </div>

                {/* EXAM PREPARATION & STUDY SKILLS */}
                <div className="content-card">
                    <h2>Strategic <span className="text-gradient">Exam Preparation & Study Skills</span></h2>
                    <div className="outcomes-grid">
                        <div>
                            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '15px' }}>Rigorous Exam Preparation Support</h3>
                            <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Timed past-paper simulation sessions replicating real examination conditions.</li>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Examiner mark-scheme breakdown to maximize step-marking and keyword allocation.</li>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Error-log analysis to eliminate repeated calculation or comprehension mistakes.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '15px' }}>Independent Study Skills Mastery</h3>
                            <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Active recall, spaced repetition, and Feynman explanation techniques.</li>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Effective summary formula sheets and visual mind-mapping frameworks.</li>
                                <li style={{ padding: '12px 15px 12px 45px' }}>Time allocation strategies to eliminate last-minute exam hall panic.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* WHY CHOOSE NITAQ IN SHARJAH */}
                <div className="content-card">
                    <h2>Why Parents Choose <span className="text-gradient">Nitaq Academy in Sharjah</span></h2>
                    <ul className="card-list">
                        <li><strong>SPEA Authorized Institution:</strong> Fully accredited by the Sharjah Private Education Authority, upholding premier educational quality.</li>
                        <li><strong>Central Al Majaz 3 Location:</strong> Conveniently located in Abu Khamseen Tower, easily accessible from Buhaira Corniche, Al Wahda, and King Faisal Street.</li>
                        <li><strong>Dual Learning Formats:</strong> Interactive in-person classroom batches in Sharjah and live digital classes across Dubai, Abu Dhabi, and the UAE.</li>
                        <li><strong>Verified Subject Specialists:</strong> Experienced teachers with proven track records in producing UAE board toppers and high-achieving alumni.</li>
                        <li><strong>Transparent Parent Portals:</strong> Bi-weekly progress reports and regular parent-teacher academic feedback conferences.</li>
                        <li><strong>Comprehensive Foundation Pathways:</strong> Integrated preparation for <Link to="/sat-preparation-sharjah" className="inline-link">Digital SAT Coaching</Link> and <Link to="/foundation-jee-neet" className="inline-link">Foundation JEE & NEET</Link>.</li>
                    </ul>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Specialized Subject Coaching: <span className="text-gradient">Explore Dedicated Tracks</span></h2>
                    <p style={{ color: '#475569' }}>
                        In addition to comprehensive multi-subject academic mentoring, Nitaq Academy offers dedicated subject tuition in Sharjah:
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

                {/* FAQ SECTION */}
                <div className="content-card">
                    <h2>Academic Support in Sharjah <span className="text-gradient">FAQs</span></h2>
                    <div className="faq-card-group">
                        <details className="faq-card-item" open>
                            <summary>What is the Academic Excellence programme at Nitaq Academy?</summary>
                            <p>The Academic Excellence programme is a structured tutoring and academic mentoring course for school students in Grades 1 to 12 across Sharjah and Dubai. It covers Mathematics, Science (Physics, Chemistry, Biology), English, and Arabic across IGCSE, A-Level, IB, and CBSE curricula.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where are your tuition classes conducted in Sharjah?</summary>
                            <p>Our campus is centrally located at Office F103, Floor F1, Abu Khamseen Tower, Al Majaz 3, Sharjah, UAE. We also offer interactive live online classes for students residing in Dubai, Abu Dhabi, Ajman, and across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer specialized IGCSE and A-Level classes in Sharjah?</summary>
                            <p>Yes, we offer specialized Cambridge CAIE and Pearson Edexcel IGCSE and A-Level tuition. Our expert teachers focus on past papers, mark scheme analysis, and exam time management to help students secure A* and Grade 9 results.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How does Nitaq Academy support International Baccalaureate (IB) students?</summary>
                            <p>We provide comprehensive IB tutoring for PYP, MYP, and DP (Higher Level and Standard Level) students. Our subject tutors guide learners through IB Math AA/AI, Sciences, and structured Internal Assessment (IA) rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What is the average batch size for tuition classes?</summary>
                            <p>We maintain micro-batches of only 5 to 8 students to ensure individualized attention, active teacher interaction, and prompt doubt clearance. 1-on-1 private tutoring sessions are also available upon request.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you track and report student performance improvement in Sharjah?</summary>
                            <p>Through our dedicated student progress tracking system, we conduct chapter-wise diagnostic tests and monthly mock exams. Comprehensive progress reports are shared bi-weekly with parents.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are your academic courses authorized by government education authorities?</summary>
                            <p>Yes, Nitaq Academy is an officially licensed and SPEA-authorized (Sharjah Private Education Authority) training institute in Sharjah, ensuring the highest standards of academic excellence and educational safety.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I enroll my child or schedule a free diagnostic assessment?</summary>
                            <p>You can book a free diagnostic assessment by contacting our admissions desk via WhatsApp at +971 52 756 9908, submitting the enquiry form on our website, or visiting our center in Al Majaz 3, Sharjah.</p>
                        </details>
                    </div>
                </div>

                {/* LOCAL NAP & CAMPUS LOCATION */}
                <div className="content-card">
                    <h2>Contact & Campus Location in <span className="text-gradient">Al Majaz 3, Sharjah</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '20px' }}>
                        <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MapPin size={20} color="var(--primary-color)" /> Nitaq Academy Sharjah Campus
                            </h3>
                            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: '#475569' }}>
                                <strong>Address:</strong> Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE
                            </p>
                            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: '#475569' }}>
                                <strong>Landmarks:</strong> Near Buhaira Corniche, Al Safya Park & Al Majaz Waterfront
                            </p>
                            <p style={{ margin: '0 0 10px', fontSize: '0.95rem', color: '#475569' }}>
                                <strong>Phone:</strong> <a href="tel:+971527569908" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>+971 52 756 9908</a>
                            </p>
                            <p style={{ margin: '0 0 20px', fontSize: '0.95rem', color: '#475569' }}>
                                <strong>Email:</strong> <a href="mailto:info@nitaqacademy.com" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>info@nitaqacademy.com</a>
                            </p>
                            <a 
                                href="https://maps.app.goo.gl/3fX3B1uQ7G2zS5vE8" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-outline-primary"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', fontSize: '0.9rem' }}
                            >
                                <MapPin size={16} /> Open in Google Maps
                            </a>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '25px', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '10px' }}>Book Your Free Assessment</h3>
                            <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
                                Get an objective evaluation of your child's current academic standing and a tailored learning roadmap from our education specialists.
                            </p>
                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                                <Link to="/enquiry" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '50px', background: 'var(--primary-color)', color: '#fff', fontWeight: 700 }}>
                                    Book Free Assessment <ArrowRight size={16} />
                                </Link>
                                <a 
                                    href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20would%20like%20to%20book%20an%20Academic%20Assessment%20for%20my%20child"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '50px', background: '#25D366', color: '#fff', fontWeight: 700, textDecoration: 'none' }}
                                >
                                    WhatsApp Desk
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <WhyNitaq />
            </CourseLayout>
        </>
    );
};

export default AcademicExcellenceCourse;
