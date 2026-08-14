import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Briefcase, Building2, LineChart, UsersRound, FileText, Mail
} from 'lucide-react';

const BusinessStudiesTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 9 to 12 (IGCSE, A-Level, IB & CBSE)",
        "Curricula Supported": "Cambridge IGCSE (0450), Edexcel, IB Business & CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Case Study Analysis, Evaluation Rubrics & 12-Mark Essays",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Business Studies Tuition in Sharjah"
                subtitle="Expert Business Studies Coaching for IGCSE (0450), Edexcel A-Level, IB Business Management & CBSE Class 11-12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Business Studies Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Business Studies tuition in Sharjah</strong> for Class 9 to Class 12 students. We deliver structured coaching for <strong>Cambridge IGCSE Business Studies (0450)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>International Baccalaureate (IB Business Management SL/HL)</strong>, and <strong>CBSE Class 11 & 12 Business Studies</strong>. Focus areas include business enterprise, marketing mix strategies, operations and supply chain management, financial statements and ratios, human resource leadership, and structured case-study evaluation essays, taught in micro-batches of 5 to 8 students and 1-on-1 private classes at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master Commercial Enterprise: <span className="text-gradient">Business Studies Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Business Studies bridges theoretical economic concepts with corporate strategy, entrepreneurial enterprise, financial management, and leadership. Achieving top grades (A* in IGCSE / A-Levels and 95%+ in CBSE) requires far more than memorizing definitions—it demands critical contextual application to unseen business scenarios and balanced strategic evaluation.
                        </p>
                        <p>
                            From our modern campus in <strong>Al Majaz 3, Sharjah</strong>, our senior commerce educators guide students through real-world corporate case studies, break-even analysis charts, marketing campaign strategies, and multi-criteria evaluation matrices.
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
                                    <th>Specification for Business Studies Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 9, Class 10, Class 11, Class 12 (IGCSE, GCSE, O-Level, AS & A2 Level, IB DP, CBSE Commerce)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Modules</td>
                                    <td>Business Activity & Enterprise, Marketing Strategy, Operations & Quality Management, Financial Decision-Making, Human Resource Management, Strategic External Environment</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0450 / 0986 / 7115), Pearson Edexcel GCSE/IAL Business, Oxford AQA, IB DP Business Management (SL/HL), CBSE Class 11 & 12 Business Studies</td>
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

                {/* FOUR BUSINESS PILLARS GRID */}
                <div className="content-card">
                    <h2>Four Core Functional Areas: <span className="text-gradient">Strategic Business Management</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #b45309' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Briefcase size={24} color="#b45309" />
                                <h3 style={{ color: '#b45309', margin: 0 }}>Enterprise & Marketing</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Market Research & Sampling</span>
                                <span className="curriculum-pill">4Ps / 7Ps Marketing Mix</span>
                                <span className="curriculum-pill">Product Life Cycle & Boston Matrix</span>
                                <span className="curriculum-pill">E-Commerce Strategy</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Target market segmentation, dynamic pricing tactics, branding equity, digital advertising ROI, and competitive positioning strategies.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <LineChart size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Finance & Operations</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Break-Even Analysis</span>
                                <span className="curriculum-pill">Cash Flow Forecasting</span>
                                <span className="curriculum-pill">Profitability & Liquidity Ratios</span>
                                <span className="curriculum-pill">Lean Production & JIT</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Margin of safety calculations, working capital management, gross/net profit margins, ROCE, and quality assurance control systems.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <UsersRound size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>HRM & Strategy</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Motivation Theories (Maslow/Herzberg)</span>
                                <span className="curriculum-pill">Organizational Structures</span>
                                <span className="curriculum-pill">Ansoff's Matrix & Porter's 5</span>
                                <span className="curriculum-pill">Change Management</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Leadership styles (autocratic vs democratic), recruitment pipelines, corporate social responsibility (CSR), and strategic diversification.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Business Pathways (Class 9 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 9</span>
                            <h3>Foundation Commerce</h3>
                            <p className="grade-desc">Business ownership, objectives, and stakeholder interests.</p>
                            <ul>
                                <li><strong>Forms of Business:</strong> Sole traders, partnerships, private/public limited companies.</li>
                                <li><strong>Stakeholder Objectives:</strong> Conflict resolution between owners, employees, consumers.</li>
                                <li><strong>Classification of Sectors:</strong> Primary, secondary, tertiary, and quaternary industry.</li>
                                <li><strong>Entrepreneurial Skills:</strong> Business plans, opportunity costs, startup challenges.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 10 / IGCSE</span>
                            <h3>Secondary Board Business</h3>
                            <p className="grade-desc">Mastering Cambridge IGCSE (0450) & Edexcel GCSE Paper 1 and 2.</p>
                            <ul>
                                <li><strong>Paper 1 (Short Answer & Data Response):</strong> 4-mark and 6-mark structured analysis.</li>
                                <li><strong>Paper 2 (Case Study Investigation):</strong> 8-mark and 12-mark contextual evaluations.</li>
                                <li><strong>Calculation Mastery:</strong> Break-even charts, profit margins, current/acid ratios.</li>
                                <li><strong>External Influences:</strong> Exchange rates, inflation, interest rates, environmental laws.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 11 / AS-Level</span>
                            <h3>Advanced Strategic Business</h3>
                            <p className="grade-desc">Strategic frameworks, capacity utilization, and capital investment appraisal.</p>
                            <ul>
                                <li><strong>Investment Appraisal:</strong> Payback period, Average Rate of Return (ARR), Net Present Value.</li>
                                <li><strong>Advanced Marketing:</strong> Price elasticity of demand, viral marketing campaigns.</li>
                                <li><strong>Operations Management:</strong> Critical Path Analysis (CPA), buffer stocks, economies of scale.</li>
                                <li><strong>Corporate Culture:</strong> Power, role, task, and person culture dynamics.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 12 / A2 / IB DP</span>
                            <h3>University-Prep Senior Business</h3>
                            <p className="grade-desc">Corporate governance, multinational enterprise, and IB Internal Assessment.</p>
                            <ul>
                                <li><strong>Strategic Management:</strong> Force field analysis, decision trees, scenario planning.</li>
                                <li><strong>Global Business:</strong> Mergers, takeovers, trade barriers, joint ventures.</li>
                                <li><strong>IB Business IA / EE:</strong> Primary research methodology, financial ratio analysis.</li>
                                <li><strong>20-Mark Evaluative Essays:</strong> Developing balanced, justified recommendations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Business</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 Business</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Principles & Functions of Mgmt</span>
                                <span className="curriculum-pill">Business Finance & Marketing</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                NCERT textbook chapter analysis (Fayol and Taylor management principles, financial markets, consumer protection act), case-based scenario questions, and 10-year board papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0450)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Paper 1 (Short Answer & Data)</span>
                                <span className="curriculum-pill">Paper 2 (Case Study Exam)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Training on the 4 assessment objectives (AO1 Knowledge, AO2 Application, AO3 Analysis, AO4 Evaluation) to secure maximum points on 6-mark, 8-mark, and 12-mark questions.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">A-Level Papers 1, 2 & 3</span>
                                <span className="curriculum-pill">IB DP Business SL/HL & IA</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Pre-released case study analysis, quantitative decision trees, qualitative stakeholder evaluation essays, and rubric-optimized IB Internal Assessment guidance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Business Studies Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Business Studies coaching, case study techniques, and exam boards at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Business Studies tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive Business Studies tutoring for Cambridge IGCSE (0450 / 0986 / 7115), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB DP Business Management SL & HL), CBSE (Class 11 and 12 Business Studies), and British Curriculum schools.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students write high-scoring 12-mark and 20-mark evaluation essays? <ChevronDown size={18} /></summary>
                            <p>We teach structured evaluation models (such as Point-Explain-Context-Balance-Conclusion): identifying a strategic option, explaining its business impact using quantitative data from the case study, presenting a counter-argument/limitation, and providing a justified, contextualized recommendation.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare students for IGCSE Business Studies Paper 2 Case Studies? <ChevronDown size={18} /></summary>
                            <p>Students practice extracting contextual evidence from fictitious business case scenarios (such as company financial tables, employee interview transcripts, and market research charts) and applying precise business terminology to answer 8-mark and 12-mark questions.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Business Studies tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our Business Studies classes are strictly limited to micro-batches of 5 to 8 students to enable detailed essay marking, active case study debates, and personal feedback. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Business Studies tuition classes from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online platform features collaborative case study document editing, digital whiteboard financial calculations, recorded lectures for review, and digital assignment evaluations accessible across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can you assist with IB Business Management Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified faculty assists students with formulating real-world corporate research questions, gathering primary and secondary business data, applying strategic decision tools (SWOT, STEEPLE, Ansoff, Porter's 5), and formatting per official IB DP rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help CBSE Class 12 students master business case studies? <ChevronDown size={18} /></summary>
                            <p>We provide exclusive case study drill booklets covering all 12 NCERT chapters (including Taylor's scientific management, financial planning, capital structure trading on equity, and consumer rights) with line-by-line concept identification frameworks.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Business Studies tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our educators hold Master's degrees in Business Administration (MBA), Commerce, or Economics, with 6 to 15 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our learning center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, within easy reach of King Faisal Street and Buhaira Corniche.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for A-Level Business exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Edexcel and Cambridge A-Level Business past papers (Paper 1, Paper 2, and Paper 3 Case Study) with detailed mark-scheme and examiner report analysis.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free Business Studies assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can schedule a free diagnostic assessment or demo session by contacting our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are calculation workshops provided for break-even and financial ratio formulas? <ChevronDown size={18} /></summary>
                            <p>Yes. Every enrolled student participates in quantitative finance workshops covering break-even charts, cash flow variance analysis, gross profit margin, ROCE, and acid-test ratios to secure 100% marks in calculation sections.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Commerce & Academic Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Build a complete, top-tier business profile with Nitaq Academy's specialized subject tutoring:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/accountancy-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Accountancy Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Double-entry bookkeeping, balance sheets, partnership accounts & cash flow for CBSE, IGCSE & A-Level.</p>
                            </div>
                        </Link>

                        <Link to="/economics-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Economics Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Microeconomics, Macroeconomics, International Trade, and Diagram Evaluation for IGCSE, IB & CBSE.</p>
                            </div>
                        </Link>

                        <Link to="/maths-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Maths Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics coaching from Class 1 to 12.</p>
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
                            Book Free Business Studies Assessment on WhatsApp
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

export default BusinessStudiesTuitionSharjah;
