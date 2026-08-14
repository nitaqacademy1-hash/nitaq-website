import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    TrendingDown, Globe, Landmark, Coins, FileText, Mail
} from 'lucide-react';

const EconomicsTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 9 to 12 (IGCSE, A-Level, IB & CBSE)",
        "Curricula Supported": "Cambridge IGCSE (0455), Edexcel, IB Economics (SL/HL) & CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Diagrammatic Analysis, Policy Evaluation & 15-Mark Essays",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Economics Tuition in Sharjah"
                subtitle="Expert Economics Coaching for IGCSE (0455), Edexcel A-Level, IB Economics (HL/SL) & CBSE Class 11-12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Economics Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Economics tuition in Sharjah</strong> for Class 9 to Class 12 students. We deliver structured coaching for <strong>Cambridge IGCSE Economics (0455)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>International Baccalaureate (IB Economics HL/SL)</strong>, and <strong>CBSE Class 11 & 12 Economics (Micro, Macro & Indian Economic Development)</strong>. Focus areas include supply and demand elasticity, market failure remedies, fiscal and monetary policies, exchange rate fluctuations, international trade models, and 4-step diagrammatic economic evaluations, taught in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master Scarcity, Markets & Policy: <span className="text-gradient">Economics Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Economics is the vital science of resource allocation, market equilibrium, government intervention, and global wealth distribution. Achieving top grades (A* in IGCSE / A-Levels, 7 in IB DP, and 95%+ in CBSE) requires flawless economic diagramming, real-world macroeconomic contextualization, and balanced policy evaluation.
                        </p>
                        <p>
                            From our modern campus in <strong>Al Majaz 3, Sharjah</strong>, our senior economics faculty guides students through microeconomic market dynamics, aggregate demand/aggregate supply (AD/AS) equilibrium shifts, inflation-unemployment Phillips curves, and international trade balance sheets.
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
                                    <th>Specification for Economics Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 9, Class 10, Class 11, Class 12 (IGCSE, GCSE, O-Level, AS & A2 Level, IB DP, CBSE)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Domains</td>
                                    <td>Microeconomics (Markets & Market Failure), Macroeconomics (National Income & Policies), International Economics (Trade & Exchange Rates), Development Economics & Sustainability</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0455 / 0987 / 2281), Pearson Edexcel GCSE/IAL Economics, Oxford AQA, IB DP Economics (Standard & Higher Level), CBSE Class 11 & 12 Economics</td>
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

                {/* THREE ECONOMICS PILLARS GRID */}
                <div className="content-card">
                    <h2>Three Core Domains: <span className="text-gradient">Microeconomics, Macroeconomics & Global Trade</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <TrendingDown size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Microeconomics</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Price Elasticity (PED/PES)</span>
                                <span className="curriculum-pill">Consumer & Producer Surplus</span>
                                <span className="curriculum-pill">Negative Externalities & Taxes</span>
                                <span className="curriculum-pill">Market Structures (Monopoly)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master consumer utility, price mechanism allocations, minimum/maximum price controls, public goods, merit goods, and deadweight loss calculations.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Landmark size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Macroeconomics</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Circular Flow of Income</span>
                                <span className="curriculum-pill">Fiscal & Monetary Policy</span>
                                <span className="curriculum-pill">Inflation & CPI Calculations</span>
                                <span className="curriculum-pill">Supply-Side Policies</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpack multiplier effects, central bank interest rate interventions, national debt vs budget deficits, economic growth metrics, and structural unemployment.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Globe size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>International & Development</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Comparative Advantage</span>
                                <span className="curriculum-pill">Tariffs & Quotas Diagrams</span>
                                <span className="curriculum-pill">Floating Exchange Rates</span>
                                <span className="curriculum-pill">Balance of Payments (Current Acc)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Terms of trade calculations, currency appreciation/depreciation impacts, trade protectionism trade-offs, and economic development indicators (HDI).
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Economics Pathways (Class 9 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 9</span>
                            <h3>Foundation Economics</h3>
                            <p className="grade-desc">The basic economic problem and fundamental market concepts.</p>
                            <ul>
                                <li><strong>The Economic Problem:</strong> Finite resources, infinite wants, opportunity costs.</li>
                                <li><strong>Production Possibility Curves (PPC):</strong> Shifts, efficiency, trade-offs.</li>
                                <li><strong>Demand & Supply Laws:</strong> Equilibrium price, shifts vs movements.</li>
                                <li><strong>Role of Government:</strong> Direct provision, regulation, subsidies, taxation.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 10 / IGCSE</span>
                            <h3>Secondary Board Economics</h3>
                            <p className="grade-desc">Mastering Cambridge IGCSE (0455) & Edexcel GCSE Paper 1 and 2.</p>
                            <ul>
                                <li><strong>Paper 1 (Multiple Choice):</strong> Rapid 30-question precision data interpretation.</li>
                                <li><strong>Paper 2 (Structured Questions):</strong> 8-mark data response and 6-mark/8-mark essays.</li>
                                <li><strong>Elasticity Mastery:</strong> PED, PES, YED formulas, and total revenue curves.</li>
                                <li><strong>Government Macro Objectives:</strong> Price stability, low unemployment, BOP balance.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 11 / CBSE / AS</span>
                            <h3>Micro & Statistics Principles</h3>
                            <p className="grade-desc">Rigorous quantitative analysis and consumer equilibrium.</p>
                            <ul>
                                <li><strong>Consumer Equilibrium:</strong> Indifference curves, budget lines, marginal utility.</li>
                                <li><strong>Production & Cost:</strong> Total/Average/Marginal cost curves, revenue analysis.</li>
                                <li><strong>Statistics for Economics:</strong> Index numbers, correlation, dispersion, sampling.</li>
                                <li><strong>Price Determination:</strong> Market equilibrium under perfect competition.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 12 / A2 / IB DP</span>
                            <h3>University-Prep Senior Economics</h3>
                            <p className="grade-desc">Macroeconomic models, international finance, and IB Internal Assessment.</p>
                            <ul>
                                <li><strong>National Income Accounting:</strong> GDP, GNP, NNP, green GDP calculations.</li>
                                <li><strong>Money & Banking:</strong> High-powered money, credit creation, central bank tools.</li>
                                <li><strong>IB Economics Portfolio (IA):</strong> 3 real-world news article commentaries.</li>
                                <li><strong>15-Mark Evaluative Essays:</strong> Short-run vs long-run trade-offs and stakeholder balance.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Economics</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 Economics</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Introductory Micro & Macro</span>
                                <span className="curriculum-pill">Indian Economic Development</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                NCERT chapter-by-chapter mastery, national income numerical calculations (Value Added, Income, Expenditure methods), and previous 10 years' CBSE board papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0455)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Paper 1 (MCQ) & Paper 2 (Theory)</span>
                                <span className="curriculum-pill">Section A Data Response Drills</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                4-step diagrammatic evaluation training (Define, Diagram, Explain, Evaluate) to score full marks on 6-mark and 8-mark questions for A* and Grade 9.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Micro & Macro Themes 1-4</span>
                                <span className="curriculum-pill">IB DP Economics SL/HL & IA</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Quantitative Paper 3 calculations, policy synthesis essays (Paper 1), international trade data response (Paper 2), and rubric-optimized IB Internal Assessment guidance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Economics Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Economics tutoring, diagram drawing rules, and board examinations at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Economics tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide specialized Economics tutoring for Cambridge IGCSE (0455 / 0987 / 2281), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB DP Economics SL & HL), CBSE (Class 11 and 12 Economics), and British Curriculum schools.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students draw and analyze economic diagrams accurately? <ChevronDown size={18} /></summary>
                            <p>We teach standard diagrammatic conventions: labeling axes with precise units (Price/Quantity, Real GDP/Price Level), indicating original and shifted equilibrium points with dashed lines (P1, Q1 to P2, Q2), showing directional shift arrows, and referencing diagram changes in the written text.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you assist students with the 3 IB Economics Internal Assessment (IA) commentaries? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified economics faculty assists students with selecting real-world news articles from reputable sources (Financial Times, The Economist, BBC), applying key concept lenses (Scarcity, Choice, Efficiency, Equity, Well-being, Sustainability, Change, Interdependence, Intervention), and formatting per official IB DP rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Economics tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our Economics batches are strictly limited to 5 to 8 students to enable detailed essay feedback, active policy discussions, and individual diagram checks. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Economics tuition classes from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online platform features digital diagram drawing tablets, shared virtual whiteboards, recorded lectures for review, and digital essay evaluations accessible across Dubai, Abu Dhabi, and Sharjah.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare CBSE Class 12 students for National Income calculations? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive step-by-step calculation drill sheets for all three measurement methods: Value Added Method (Gross Value Added at MP to NNP at FC), Income Method (Operating Surplus, Mixed Income, COE), and Expenditure Method (C + I + G + X - M).</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare students for IGCSE Economics Paper 2 Section A Data Response? <ChevronDown size={18} /></summary>
                            <p>Students practice extracting numerical evidence from economic tables and graphs (such as inflation rates, balance of trade deficits, and GDP growth trends) and using that data to support 4-mark and 6-mark explanatory answers.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Economics tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our faculty hold Master's degrees and Doctorates in Economics, Public Policy, or Finance, with 6 to 15 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our learning center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, within easy reach of King Faisal Street and Buhaira Corniche.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for A-Level Economics exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Edexcel and Cambridge A-Level Economics past papers (Paper 1 MCQ, Paper 2 Micro, Paper 3 Macro, and Paper 4 Case Study) with detailed mark-scheme and examiner report dissection.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free Economics assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can schedule a free diagnostic assessment or demo session by contacting our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are intensive crash courses available before board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of board examination sessions, we offer intensive crash courses focusing on high-weightage topics (Market Failure, Macro Policy Mix, Exchange Rates, Trade Protectionism), rapid past paper solving, and exam time management.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Commerce & Academic Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Build a complete, high-scoring commerce and humanities profile with Nitaq Academy's specialized subject tutoring:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/business-studies-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Business Studies Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Enterprise, Marketing, Operations, HRM, and Case Study Evaluation for CBSE, IGCSE & A-Level.</p>
                            </div>
                        </Link>

                        <Link to="/accountancy-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Accountancy Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Double-entry bookkeeping, balance sheets, partnership accounts & cash flow for CBSE, IGCSE & A-Level.</p>
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
                            Book Free Economics Assessment on WhatsApp
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

export default EconomicsTuitionSharjah;
