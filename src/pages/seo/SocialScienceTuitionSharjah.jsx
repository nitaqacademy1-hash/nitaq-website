import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Landmark, Globe, Scale, TrendingDown, FileText, Mail
} from 'lucide-react';

const SocialScienceTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 1 to 12 (Primary to High School)",
        "Subjects Included": "History, Geography, Civics, Economics & UAE Studies",
        "Curricula Supported": "CBSE (Class 9-10 SST), Cambridge IGCSE, Edexcel & IB",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Skill Pillars": "Chronological Timelines, Map Work & Case Studies",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Social Science Tuition in Sharjah"
                subtitle="Expert History, Geography, Civics, Political Science & Economics Coaching from Class 1 to 12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Social Science Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Social Science (SST) tuition in Sharjah</strong> covering <strong>History, Geography, Political Science/Civics, Economics, and UAE Social Studies</strong> for Class 1 to Class 12. We offer structured coaching for <strong>CBSE (Class 9 & 10 Social Science)</strong>, <strong>Cambridge IGCSE (History 0470, Geography 0460, Economics 0455)</strong>, <strong>Edexcel</strong>, and <strong>IB Individuals & Societies (MYP/DP)</strong>. Instruction features chronological timeline mapping, cartography/map-work drills, and structured long-answer techniques in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Humanities: <span className="text-gradient">Social Science, History, Geography & Economics Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Social Science empowers students to understand human civilization, spatial dynamics, constitutional governance, and global economic systems. Whether preparing for high-stakes <strong>CBSE Class 10 Social Science board exams</strong> in Sharjah, mastering source-based historical analysis for <strong>IGCSE History</strong>, or analyzing macroeconomic models in <strong>IB Economics</strong>, Nitaq Academy delivers conceptual clarity and high-scoring exam techniques.
                        </p>
                        <p>
                            From our campus in <strong>Al Majaz 3, Sharjah</strong>, our humanities faculty transforms vast textbooks and dense historical dates into intuitive mind maps, chronological visual timelines, and structured essay blueprints.
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
                                    <th>Specification for Social Science Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Disciplines Covered</td>
                                    <td>History (World & Indian), Geography (Physical, Human, Economic), Political Science / Civics, Economics, UAE Social Studies & Moral Education</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>CBSE (Class 9-10 SST, Class 11-12 Humanities), Cambridge IGCSE (History 0470, Geography 0460, Economics 0455, Global Perspectives 0457), Edexcel, IB (MYP Individuals & Societies, DP History/Geography/Economics)</td>
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

                {/* FOUR HUMANITIES DISCIPLINES GRID */}
                <div className="content-card">
                    <h2>Core Disciplines: <span className="text-gradient">History, Geography, Civics & Economics</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #b45309' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Landmark size={24} color="#b45309" />
                                <h3 style={{ color: '#b45309', margin: 0 }}>History</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master French/Russian Revolutions, Rise of Nationalism in Europe and India, the Industrial Revolution, 20th-century world conflicts, and source evaluation skills.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Globe size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Geography</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Comprehensive training on resource management, climate zones, agriculture, manufacturing industries, plate tectonics, GIS maps, and topographical analysis.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Scale size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Civics & Economics</h3>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Understand power sharing, federalism, political parties, globalization, sectors of the economy, money and credit, inflation, and fiscal policy dynamics.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS (4 CARDS) */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Social Science Pathways (Class 1 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 1 to 5</span>
                            <h3>Primary Social Studies</h3>
                            <p className="grade-desc">Community awareness, physical environment, and UAE heritage.</p>
                            <ul>
                                <li><strong>My Family & Neighborhood:</strong> Community helpers, transport, civic responsibilities.</li>
                                <li><strong>UAE Heritage & Culture:</strong> Emirates history, national symbols, traditions.</li>
                                <li><strong>Basic Earth Geography:</strong> Continents, oceans, cardinal directions, weather.</li>
                                <li><strong>Storytelling in History:</strong> Ancient early civilizations, trade routes.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 6 to 8</span>
                            <h3>Middle School SST</h3>
                            <p className="grade-desc">Foundational history, earth processes, and governance systems.</p>
                            <ul>
                                <li><strong>Ancient & Medieval Eras:</strong> Empires, Delhi Sultanate, Mughals, Renaissance.</li>
                                <li><strong>Physical Geography:</strong> Lithosphere, hydrosphere, atmosphere, ecosystems.</li>
                                <li><strong>Government & Constitution:</strong> Democracy, judiciary, parliamentary system.</li>
                                <li><strong>Economic Foundations:</strong> Livelihoods, resources, consumer rights basics.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 9 & 10</span>
                            <h3>Secondary SST Board</h3>
                            <p className="grade-desc">High-stakes preparation for CBSE Class 10 SST and IGCSE humanities.</p>
                            <ul>
                                <li><strong>Nationalism & Revolutions:</strong> Industrialization, globalized world history.</li>
                                <li><strong>Resources & Map Work:</strong> Complete 100% accurate map identification drills.</li>
                                <li><strong>Democratic Politics:</strong> Federalism, gender, religion, political outcomes.</li>
                                <li><strong>Economics:</strong> Development metrics, banking, globalization impacts.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 11 & 12</span>
                            <h3>Senior Humanities / IB</h3>
                            <p className="grade-desc">University-level historiography, geopolitical analysis, and micro/macro economics.</p>
                            <ul>
                                <li><strong>Historiography:</strong> Dissecting primary documents and conflicting historical narratives.</li>
                                <li><strong>Human & Economic Geography:</strong> Demographics, urbanization, supply chain flows.</li>
                                <li><strong>Political Science & IR:</strong> Cold War era, international organizations, security.</li>
                                <li><strong>Economics (Micro/Macro):</strong> Market failures, fiscal policies, exchange rates.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY (CBSE, IGCSE, A-LEVEL, IB) */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE & IB Social Sciences</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 9 & 10 SST</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">NCERT India & Contemporary World</span>
                                <span className="curriculum-pill">Democratic Politics & Understanding Econ</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Chapter summaries, assertion-reason question banks, case-based questions, and 100% accurate map-pointing drills designed to convert CBSE Class 10 SST into a 95%+ subject.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">History 0470 | Geography 0460</span>
                                <span className="curriculum-pill">Economics 0455 | Global Persp 0457</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Source evaluation, essay paragraphing (Point-Evidence-Explain-Link), case study analysis (economic development, population policies), and past paper drills.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel & IB Individuals & Societies</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">IB DP Economics (SL/HL)</span>
                                <span className="curriculum-pill">IB DP History & Geography</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Structured essay development for Paper 1, Paper 2, and Paper 3, Internal Assessment (IA) economic commentary portfolio guidance, and historical investigation support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Social Science Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Social Science, History, Geography, Civics, and Economics tuition at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which subjects are covered under Social Science tuition at Nitaq Academy Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide specialized tutoring for History, Geography, Political Science (Civics), Economics, and UAE Social Studies across all grades from Class 1 to Class 12.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students memorize extensive dates and historical facts? <ChevronDown size={18} /></summary>
                            <p>We use chronological visual timelines, associative mnemonic techniques, cause-and-effect flowcharts, and concise bullet-point chapter summaries rather than relying on raw memorization.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer specialized preparation for CBSE Class 10 Social Science board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Our Class 10 CBSE SST coaching covers all four NCERT textbooks, extensive map pointing practice, case-based study questions, assertion-reasoning drills, and previous 10 years' board paper solutions.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Which curriculums do you support for Social Science and Humanities in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We support CBSE, Cambridge IGCSE (History 0470, Geography 0460, Economics 0455, Global Perspectives 0457), Pearson Edexcel GCSE/A-Level, and International Baccalaureate (IB MYP and DP Individuals & Societies).</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Social Science tuition classes? <ChevronDown size={18} /></summary>
                            <p>We maintain micro-batches of 5 to 8 students to encourage analytical discussions, source interpretation, and structured essay writing feedback. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Social Science tuition classes across Dubai and the UAE? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online classes utilize digital maps, shared virtual whiteboards, presentation slides, and recorded lectures accessible throughout Dubai, Abu Dhabi, and Sharjah.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide map work and cartography training for Geography exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students receive specialized map work drill sheets covering topographical symbols, major dams, thermal/nuclear power plants, airports, seaports, iron and steel plants, and agricultural belts for full marks in board map sections.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you teach economics concepts like inflation, monetary policy, and credit? <ChevronDown size={18} /></summary>
                            <p>We connect abstract economic principles to real-world financial news, UAE banking scenarios, and simple diagrammatic models to make concepts easily understandable and exam-applicable.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person humanities classes? <ChevronDown size={18} /></summary>
                            <p>Our center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from Al Wahda Street and Jamal Abdul Nasser Street.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Social Science tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our educators hold Master's degrees in History, Geography, Economics, or Political Science, with 6 to 14 years of teaching experience across CBSE, IGCSE, and IB curricula in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free consultation or demo class for Social Science tuition? <ChevronDown size={18} /></summary>
                            <p>You can book a free academic evaluation or demo session by contacting us on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you cover UAE Social Studies and Moral Education for Ministry of Education (MOE) requirements? <ChevronDown size={18} /></summary>
                            <p>Yes. We provide dedicated modules for UAE Social Studies, National History, Geography of the Arabian Peninsula, and Moral Education fulfilling UAE MOE guidelines for private school students.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Strengthen your overall academic performance across all major subjects at Nitaq Academy:
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
                            Book Free Social Science Assessment on WhatsApp
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

export default SocialScienceTuitionSharjah;
