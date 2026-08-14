import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Calculator, Receipt, Scale, DollarSign, FileText, Mail
} from 'lucide-react';

const AccountancyTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 11 & 12 (CBSE, IGCSE, A-Level & ACCA Foundations)",
        "Curricula Supported": "CBSE Accountancy, Cambridge IGCSE (0452), Edexcel & AQA",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Journal Entries, Ledger Balancing, Company Accounts & Cash Flows",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Accountancy Tuition in Sharjah"
                subtitle="Specialized Accountancy Coaching for CBSE Class 11-12, IGCSE Accounting (0452) & Edexcel A-Level in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Accountancy Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Accountancy tuition in Sharjah</strong> for Class 11 and Class 12 high school students. We deliver structured coaching for <strong>CBSE Class 11 & 12 Accountancy</strong>, <strong>Cambridge IGCSE Accounting (0452)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, and foundational professional tracks. Focus areas include double-entry bookkeeping, trial balance preparation, final accounts with adjustments, partnership firm revaluation, company share capital and debentures, and cash flow statements, taught in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Language of Business: <span className="text-gradient">Accountancy Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Accountancy is the rigorous quantitative foundation of global commerce, banking, investment, and corporate auditing. However, mastering the exact rules of debit and credit, ledger cross-postings, balance sheet reconciliations, and partnership dissolutions requires disciplined calculation speed and systematic conceptual clarity.
                        </p>
                        <p>
                            From our modern campus in <strong>Al Majaz 3, Sharjah</strong>, our senior chartered accountants and commerce educators train students through line-by-line accounting entries, ledger T-account formats, adjustment entries, and cash flow statement worksheets.
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
                                    <th>Specification for Accountancy Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 10, Class 11, Class 12 (IGCSE Accounting, AS & A2 Level, CBSE Commerce, Foundation ACCA)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Modules</td>
                                    <td>Double-Entry Bookkeeping, Financial Statements of Sole Proprietors, Accounting for Partnership Firms, Accounting for Companies (Shares & Debentures), Analysis of Financial Statements (Ratios & Cash Flow)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>CBSE Class 11 & 12 Accountancy, Cambridge IGCSE Accounting (0452 / 0985 / 7707), Pearson Edexcel GCSE/IAL Accounting, Oxford AQA</td>
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

                {/* THREE ACCOUNTANCY PILLARS GRID */}
                <div className="content-card">
                    <h2>Three Core Functional Pillars: <span className="text-gradient">Financial Accounting Mastery</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Receipt size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Financial Accounting</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Journal, Ledger & Trial Balance</span>
                                <span className="curriculum-pill">Bank Reconciliation (BRS)</span>
                                <span className="curriculum-pill">Depreciation & Provisions</span>
                                <span className="curriculum-pill">Final Accounts with Adjustments</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master source documents, double-entry rules, rectification of errors, straight-line/written-down value depreciation, and trading/profit & loss balance sheets.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Scale size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Partnership Accounting</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">P&L Appropriation Account</span>
                                <span className="curriculum-pill">Admission & Retirement of Partner</span>
                                <span className="curriculum-pill">Revaluation Account</span>
                                <span className="curriculum-pill">Dissolution & Realization</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Comprehensive calculations of sacrificing/gaining ratios, goodwill valuation and accounting treatment, capital adjustments, and realization accounts.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <DollarSign size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Company Accounts & Analysis</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Issue & Forfeiture of Shares</span>
                                <span className="curriculum-pill">Issue & Redemption of Debentures</span>
                                <span className="curriculum-pill">Accounting Ratios (Liquidity/Solvency)</span>
                                <span className="curriculum-pill">Cash Flow Statements (AS-3)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Pro-rata share allotment tables, reissue of forfeited shares, debenture interest entries, comparative/common-size balance sheets, and operating/investing/financing cash flows.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Accountancy Pathways (Class 10 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 10 / IGCSE</span>
                            <h3>Introductory Bookkeeping</h3>
                            <p className="grade-desc">Cambridge IGCSE Accounting (0452) and foundations.</p>
                            <ul>
                                <li><strong>The Accounting Equation:</strong> Assets = Liabilities + Capital.</li>
                                <li><strong>Books of Prime Entry:</strong> Sales, purchases, cash book, petty cash.</li>
                                <li><strong>Verification of Records:</strong> Trial balance, correction of errors, suspense accounts.</li>
                                <li><strong>Financial Statements:</strong> Income statements and statements of financial position.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 11 / CBSE / AS</span>
                            <h3>Financial Accounting Principles</h3>
                            <p className="grade-desc">Complete NCERT Class 11 accounting framework.</p>
                            <ul>
                                <li><strong>Accounting Standards & GST:</strong> CGST, SGST, IGST input/output journal entries.</li>
                                <li><strong>Bank Reconciliation (BRS):</strong> Corrected cash book and timing differences.</li>
                                <li><strong>Bills of Exchange:</strong> Drawing, acceptance, discounting, dishonor.</li>
                                <li><strong>Final Accounts:</strong> Outstanding expenses, prepaid, bad debts, provisions for doubtful debts.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 12 / CBSE</span>
                            <h3>Partnership & Company Boards</h3>
                            <p className="grade-desc">High-stakes preparation for CBSE Class 12 Accountancy board.</p>
                            <ul>
                                <li><strong>Accounting for Partnerships:</strong> Fund-based, admission, retirement, death, dissolution.</li>
                                <li><strong>Company Accounts:</strong> Pro-rata share allotment, calls-in-arrears, forfeiture.</li>
                                <li><strong>Financial Statement Analysis:</strong> Current ratio, debt-equity, inventory turnover, EPS.</li>
                                <li><strong>Cash Flow Statement:</strong> Direct and indirect calculation under revised AS-3.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">A-Level / ACCA Prep</span>
                            <h3>Management & Cost Accounting</h3>
                            <p className="grade-desc">Advanced corporate financial reporting and cost accounting.</p>
                            <ul>
                                <li><strong>Cost & Management:</strong> Marginal costing, standard costing, variance analysis.</li>
                                <li><strong>Manufacturing Accounts:</strong> Prime cost, work-in-progress, factory overheads.</li>
                                <li><strong>Incomplete Records:</strong> Single entry conversion to double entry.</li>
                                <li><strong>Auditing & Ethics:</strong> Professional skepticism, accounting standards (IFRS/GAAP).</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE & A-Level Accountancy</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 Accountancy</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">TS Grewal & DK Goel Mastery</span>
                                <span className="curriculum-pill">Pro-Rata & Cash Flow Drills</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Chapter-by-chapter mastery of TS Grewal, comprehensive pro-rata table drills, comprehensive 6-mark and 8-mark problem solving, and previous 10 years' CBSE board papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0452)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Paper 1 (Multiple Choice)</span>
                                <span className="curriculum-pill">Paper 2 (Structured Accounts)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Strict ledger format alignment (T-accounts, running balance format), ledger balancing rules, suspense account rectifications, and mark scheme precision training for A*.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level Accounting</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Unit 1 (The Accounting System)</span>
                                <span className="curriculum-pill">Unit 2 (Corporate & Mgmt)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Marginal costing break-even evaluations, standard costing variances, IFRS financial reporting frameworks, and 10 years of solved past examination papers.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Accountancy Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Accountancy tutoring, board preparations, and ledger formats at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Accountancy tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide specialized Accountancy tuition for CBSE (Class 11 and Class 12 Accountancy), Cambridge IGCSE Accounting (0452 / 0985), Pearson Edexcel GCSE and International A-Levels, Oxford AQA, and foundational ACCA modules.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students master complex pro-rata share allotment problems? <ChevronDown size={18} /></summary>
                            <p>We teach a proprietary 6-column pro-rata table framework: (1) Category applied/allotted, (2) Application money received, (3) Application money required, (4) Excess application money, (5) Adjusted towards allotment, and (6) Refund/Calls-in-advance.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide format training for Ledger Accounts, Cash Books, and Balance Sheets? <ChevronDown size={18} /></summary>
                            <p>Yes. Students practice drawing exact ledger formats with Date, Particulars, Journal Folio (J.F.), and Amount columns, adhering strictly to board presentation criteria to secure full format marks.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Accountancy tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our Accountancy classes are strictly limited to micro-batches of 5 to 8 students to enable personal step-by-step calculation checks and rapid error rectification. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Accountancy tuition classes from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online platform features digital financial ledger whiteboards, shared spreadsheet calculation templates, recorded lectures for review, and digital assignment tracking across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare CBSE Class 12 students for the 80-mark written board exam? <ChevronDown size={18} /></summary>
                            <p>We conduct timed 3-hour full-length mock examinations modeled on the latest CBSE board pattern, chapter-wise diagnostic tests, and exhaustive past 10 years' question paper dissection.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you help students understand Cash Flow Statements (AS-3 / IAS-7)? <ChevronDown size={18} /></summary>
                            <p>Yes. We provide structured step-by-step worksheets to calculate Cash from Operating Activities (adding non-cash expenses, working capital adjustments), Cash from Investing Activities, and Cash from Financing Activities.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Accountancy tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our faculty hold Master's degrees in Commerce (M.Com) or are qualified Chartered Accountants (CA / ACCA / CPA), with 7 to 18 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our learning center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from King Faisal Street and Al Wahda Street.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for IGCSE Accounting exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Cambridge IGCSE Accounting past papers (Paper 1 MCQ and Paper 2 Structured) with detailed mark-scheme and examiner report analysis.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free Accountancy assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can schedule a free diagnostic assessment or demo session by contacting our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are intensive crash courses available before board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of board examination sessions, we offer intensive crash courses focusing on high-weightage topics (Partnership Dissolution, Share Capital, Cash Flow Statements, Ratio Analysis), rapid past paper solving, and exam time management.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Commerce & Academic Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Build a complete, high-scoring commerce profile with Nitaq Academy's specialized subject tutoring:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/business-studies-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Business Studies Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Enterprise, Marketing, Operations, HRM, and Case Study Evaluation for CBSE, IGCSE & A-Level.</p>
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
                            Book Free Accountancy Assessment on WhatsApp
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

export default AccountancyTuitionSharjah;
