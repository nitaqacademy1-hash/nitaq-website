import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, CheckCircle2, 
    BookOpen, Trophy, Award, Landmark, 
    ChevronDown, ChevronUp, MessageCircle, 
    Sparkles, Target, Compass, 
    GraduationCap, ArrowRight, ShieldCheck, MapPin, 
    Navigation, Car, Bus, Phone, Star
} from 'lucide-react';

const BestTuitionClassesNearMeSharjah = () => {
    const publishDate = "August 18, 2026";

    // FAQ Accordion State
    const [openFaq, setOpenFaq] = useState(null);
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Neighborhood Finder State
    const [selectedArea, setSelectedArea] = useState('al-majaz');

    const areaDetails = {
        'al-majaz': {
            name: 'Al Majaz (1, 2, 3 & Buhaira Corniche)',
            distance: '0 - 2 Minutes (Walking / Immediate Access)',
            route: 'Directly in Al Majaz 3 at Abu Khamseen Tower, Floor F1 (Near Buhaira Corniche & Al Majaz Waterfront).',
            modes: 'In-Person Campus Classes + Live Interactive Online',
            popularFor: 'CBSE, IGCSE, IB Maths, Physics, Chemistry, Biology & Arabic'
        },
        'al-nahda': {
            name: 'Al Nahda Sharjah & Al Taawun',
            distance: '5 - 8 Minutes Drive',
            route: 'Quick access via Al Wahda Street (E11) or Al Khan Corniche Street.',
            modes: 'Physical Classes (Easy evening drop-off) + Hybrid Online',
            popularFor: 'Grade 9-12 Science & Commerce Tuition, SAT Prep'
        },
        'al-qasimia': {
            name: 'Al Qasimia, Abu Shagara & Al Yarmook',
            distance: '5 - 10 Minutes Drive',
            route: 'Accessible via King Faisal Street and Al Estiqlal Street.',
            modes: 'In-Person Micro-Batches + Live Online',
            popularFor: 'CBSE / British Primary & Middle School Maths & English'
        },
        'muwaileh': {
            name: 'Muwaileh, University City & Al Juraina',
            distance: '12 - 15 Minutes Drive',
            route: 'Convenient drive via University City Road / Sheikh Mohammed Bin Zayed Road (E311).',
            modes: 'Weekend In-Person Boosters + Weekday Live Online Classes',
            popularFor: 'A-Level & IB DP Physics, Chemistry, Calculus & University Prep'
        },
        'al-khan': {
            name: 'Al Khan, Al Mamzar & Al Layyeh',
            distance: '4 - 6 Minutes Drive',
            route: 'Direct route along Al Khan Street and Corniche Al Majaz.',
            modes: 'In-Person Center Coaching + 1-on-1 Personalized Tutoring',
            popularFor: 'British IGCSE, Edexcel & American Curriculum Tuition'
        },
        'al-rahmaniya': {
            name: 'Al Rahmaniya, Al Suyoh & Al Gharayen',
            distance: '15 - 20 Minutes Drive / High-Speed Live Online',
            route: 'Via Emirates Road (E611) / Maliha Road or HD Digital Online Sessions with interactive whiteboard.',
            modes: 'Live Interactive Online (HD Recordings & Notes) + Weekend Center Visits',
            popularFor: 'Comprehensive All-Subject Tuition & Exam Crash Courses'
        }
    };

    const faqs = [
        {
            question: "Where is the best tuition center located near me in Sharjah?",
            answer: "The premier tuition center in Sharjah is NITAQ Academy, centrally located in Al Majaz 3 at Abu Khamseen Tower (Floor F1, Office F103). It is within a 2 to 10-minute drive from major Sharjah residential areas including Al Majaz 1, 2, 3, Al Nahda, Al Taawun, Al Qasimia, Abu Shagara, and Al Khan."
        },
        {
            question: "Is NITAQ Academy licensed by the Sharjah Private Education Authority (SPEA)?",
            answer: "Yes, NITAQ Academy is a fully authorized and licensed educational training institute approved by the Sharjah Private Education Authority (SPEA), ensuring strict compliance with UAE teaching standards, accredited tutors, and official curriculum frameworks."
        },
        {
            question: "Which school curricula do you cover in your Sharjah tuition classes?",
            answer: "We provide specialized coaching across all primary school curricula in the UAE: CBSE & ICSE (Indian Board), British Curriculum (Cambridge & Edexcel IGCSE, GCSE, AS & A-Levels), International Baccalaureate (IB PYP, MYP, and DP), and American Curriculum (Common Core & AP courses)."
        },
        {
            question: "What subjects are available for school tuition in Sharjah?",
            answer: "We offer comprehensive tutoring for Grade 1 through Grade 12 in Mathematics (Pure, Applied, Calculus), Physics, Chemistry, Biology, English (Language & Literature), Arabic (MOE A for Arabs and MOE B for Non-Arabs), Business Studies, Accountancy, Economics, and Computer Science."
        },
        {
            question: "What is the average class size at your Sharjah center?",
            answer: "We maintain micro-batches of only 5 to 8 students per group to ensure every student receives individualized attention, active doubt-clearing, and personalized feedback. 1-on-1 private tutoring is also available for intensive support."
        },
        {
            question: "Can students in Dubai, Ajman, or distant Sharjah areas attend online?",
            answer: "Absolutely. In addition to in-person classes at our Al Majaz 3 campus, we deliver interactive live online classes with screen-sharing problem solving, digital whiteboards, recorded lectures, homework tracking, and regular parent progress reports."
        },
        {
            question: "How do you prepare students for board exams (CBSE 10/12, IGCSE & A-Levels)?",
            answer: "Our board preparation includes rigorous chapter-wise concept reviews, solving the past 10 years of official board papers, examiner-report dissection, time-management strategies, and periodic full-length simulated mock tests matching official board marking schemes."
        },
        {
            question: "How can parents book a free diagnostic assessment or demo class?",
            answer: "Parents can book a free academic evaluation and trial session by contacting our admissions desk via WhatsApp at +971 52 756 9908, calling +971 6 579 8313, or visiting our Al Majaz 3 center in Sharjah."
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="article-details-page">
            <SEO 
                title="Best Tuition Classes Near Me in Sharjah (2026): Top Coaching Centers in Al Majaz, Al Nahda, Muwaileh | Nitaq Academy"
                description="Looking for the best tuition classes near me in Sharjah? Complete guide to top school tuition in Al Majaz, Al Nahda, Muwaileh, Al Qasimia, Al Taawun & Al Khan. Expert tutors for CBSE, IGCSE, IB & American curricula."
                keywords="tuition classes near me sharjah, tuition center in al majaz, tuition classes in al nahda sharjah, tuition center in muwaileh, tuition in al qasimia, tuition in al taawun, maths tuition near me sharjah, science tuition sharjah, cbse tuition center sharjah, igcse tuition near me sharjah, spea approved tuition sharjah, private tutors sharjah, best tuition center in sharjah"
            />

            {/* Breadcrumbs */}
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>Tuition Classes Near Me in Sharjah</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    {/* Header */}
                    <div className="article-header">
                        <span className="article-category">Sharjah Local Education Guide</span>
                        <h1 className="article-main-title">
                            Best Tuition Classes Near Me in Sharjah (2026): The Complete Neighborhood Guide to Top Coaching Centers
                        </h1>
                        
                        <div className="article-meta">
                            <div className="meta-item">
                                <div className="author-avatar">NA</div>
                                <div className="meta-text">
                                    <span className="meta-label">Author</span>
                                    <span className="meta-value">NITAQ Academic Advisory</span>
                                </div>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <Calendar size={18} className="meta-icon" />
                                <div className="meta-text">
                                    <span className="meta-label">Published</span>
                                    <span className="meta-value">{publishDate}</span>
                                </div>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <Clock size={18} className="meta-icon" />
                                <div className="meta-text">
                                    <span className="meta-label">Read Time</span>
                                    <span className="meta-value">12 min read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="article-featured-img">
                        <img 
                            src="/images/academic_v2.webp" 
                            alt="Best Tuition Classes Near Me in Sharjah UAE - Al Majaz, Al Nahda, Muwaileh Coaching Center" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            {/* Lead Text */}
                            <p className="lead-text">
                                If you are a parent or student searching for <strong>"tuition classes near me in Sharjah"</strong>, location, teaching quality, and curriculum alignment are paramount. Whether your child attends a <strong>CBSE, British (IGCSE/A-Level), IB, or American school</strong> in Sharjah or Dubai, finding a reputable, <strong>SPEA-licensed tuition center</strong> within easy driving or walking distance makes academic consistency seamless and stress-free.
                            </p>
                            <p>
                                With heavy traffic across major UAE arterial roads during after-school peak hours, choosing a centrally located learning academy in <strong>Al Majaz 3 (near Buhaira Corniche, King Faisal Street, and Al Wahda Street)</strong> ensures fast commute times from <strong>Al Nahda, Al Taawun, Al Qasimia, Muwaileh, and Al Khan</strong>—or instant access via interactive live online tutoring.
                            </p>

                            {/* Neighborhood Distance & Commute Finder */}
                            <div className="interactive-calculator-card" style={{ background: '#ffffff', border: '2px solid #1a5c2e', borderRadius: '16px', padding: '24px', margin: '36px 0', boxShadow: '0 8px 30px rgba(26,92,46,0.08)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <MapPin size={26} color="#1a5c2e" />
                                    <h3 style={{ margin: 0, color: '#1a5c2e', fontSize: '1.3rem' }}>
                                        Sharjah Neighborhood Commute & Location Finder
                                    </h3>
                                </div>
                                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '18px' }}>
                                    Select your residential area in Sharjah to view exact commute times, travel routes, and available class formats at our Al Majaz 3 campus:
                                </p>

                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ fontWeight: '700', fontSize: '0.9rem', color: '#334155', display: 'block', marginBottom: '8px' }}>
                                        Choose Your Area in Sharjah:
                                    </label>
                                    <select 
                                        value={selectedArea} 
                                        onChange={(e) => setSelectedArea(e.target.value)}
                                        style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1.5px solid #2e7d32', fontSize: '1rem', fontWeight: '600', color: '#1a5c2e', background: '#f8faf9', cursor: 'pointer' }}
                                    >
                                        <option value="al-majaz">📍 Al Majaz (1, 2, 3 & Corniche) - Local Area</option>
                                        <option value="al-nahda">📍 Al Nahda Sharjah & Al Taawun</option>
                                        <option value="al-qasimia">📍 Al Qasimia, Abu Shagara & Al Yarmook</option>
                                        <option value="muwaileh">📍 Muwaileh, University City & Al Juraina</option>
                                        <option value="al-khan">📍 Al Khan, Al Mamzar & Al Layyeh</option>
                                        <option value="al-rahmaniya">📍 Al Rahmaniya, Al Suyoh & Outer Sharjah</option>
                                    </select>
                                </div>

                                <div style={{ background: '#f0f8f3', borderRadius: '12px', padding: '20px', border: '1px dashed #2e7d32' }}>
                                    <h4 style={{ margin: '0 0 10px', color: '#1a5c2e', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <Navigation size={18} /> {areaDetails[selectedArea].name}
                                    </h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px', fontSize: '0.92rem', color: '#334155' }}>
                                        <div><strong>🚗 Commute Time:</strong> {areaDetails[selectedArea].distance}</div>
                                        <div><strong>🛣 Route Details:</strong> {areaDetails[selectedArea].route}</div>
                                        <div><strong>📚 Popular Subjects:</strong> {areaDetails[selectedArea].popularFor}</div>
                                        <div><strong>💻 Learning Options:</strong> {areaDetails[selectedArea].modes}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Table of Contents */}
                            <div className="table-of-contents" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '30px 0' }}>
                                <h3 style={{ color: '#0f172a', fontSize: '1.15rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <BookOpen size={20} color="#1a5c2e" /> In This Sharjah Tuition Guide:
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px' }}>
                                    <li><a href="#section-1" onClick={(e) => { e.preventDefault(); scrollToSection('section-1'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>1. Why Location & Commute Matter for School Tuition</a></li>
                                    <li><a href="#section-2" onClick={(e) => { e.preventDefault(); scrollToSection('section-2'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>2. Area-by-Area Guide: Top Sharjah Neighborhoods</a></li>
                                    <li><a href="#section-3" onClick={(e) => { e.preventDefault(); scrollToSection('section-3'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>3. Curricula Covered (CBSE, British, IB, American)</a></li>
                                    <li><a href="#section-4" onClick={(e) => { e.preventDefault(); scrollToSection('section-4'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>4. Subject-Wise Tutoring Excellence</a></li>
                                    <li><a href="#section-5" onClick={(e) => { e.preventDefault(); scrollToSection('section-5'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>5. What Makes NITAQ Academy the #1 Choice</a></li>
                                    <li><a href="#section-6" onClick={(e) => { e.preventDefault(); scrollToSection('section-6'); }} style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>6. Frequently Asked Questions</a></li>
                                </ul>
                            </div>

                            <hr className="content-hr" />

                            {/* Section 1 */}
                            <section id="section-1">
                                <h2>1. Why Location, Convenience & SPEA Licensing Matter for School Tuition</h2>
                                <p>
                                    When searching for tuition classes near your home in Sharjah, academic success depends heavily on <strong>consistency and energy levels</strong>. A student who spends 45 minutes stuck in traffic each way arrives at tuition fatigued, reducing learning retention by over 40%.
                                </p>
                                <p>
                                    Here are the three critical criteria every UAE parent must verify before choosing a tuition center:
                                </p>
                                
                                <div className="strategy-grid">
                                    <div className="strategy-card">
                                        <h3>1. Official SPEA Authorization</h3>
                                        <p>Always ensure the center is licensed by the <strong>Sharjah Private Education Authority (SPEA)</strong>. Licensed institutes maintain vetted faculty, safe physical premises, and structured syllabi adhering to UAE educational standards.</p>
                                    </div>
                                    <div className="strategy-card">
                                        <h3>2. Central Strategic Hub</h3>
                                        <p>A central location in <strong>Al Majaz 3</strong> allows effortless access from all key residential corridors (Al Nahda, Al Taawun, Qasimia, Rolla, and Muwaileh) with ample nearby parking.</p>
                                    </div>
                                    <div className="strategy-card">
                                        <h3>3. Micro-Batch Sizing (5–8 Max)</h3>
                                        <p>Avoid overcrowded commercial classrooms with 25+ students. Top-tier learning requires micro-batches where teachers identify individual weaknesses and clarify doubts in real time.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="content-hr" />

                            {/* Section 2 */}
                            <section id="section-2">
                                <h2>2. Sharjah Neighborhood Guide: Tuition Hubs & Accessibility</h2>
                                <p>
                                    Let’s look at how families across Sharjah’s premier communities access top-rated tuition at <Link to="/academic-excellence">NITAQ Academy</Link>:
                                </p>

                                <h3>📍 Al Majaz (Al Majaz 1, 2, 3 & Buhaira Corniche)</h3>
                                <p>
                                    As Sharjah’s premier family residential hub, Al Majaz is home to thousands of students attending top schools. Located right in <strong>Al Majaz 3 (Abu Khamseen Tower)</strong>, NITAQ Academy is within walking distance or a 2-minute drive for local residents, making evening after-school classes effortless.
                                </p>

                                <h3>📍 Al Nahda Sharjah & Al Taawun</h3>
                                <p>
                                    Positioned right on the Dubai-Sharjah border, Al Nahda and Al Taawun house busy professional families. Students reach our Al Majaz campus in just <strong>5 to 8 minutes</strong> via Al Wahda Street (E11) or Al Khan Corniche. Many high school students in this area attend our <Link to="/physics-tuition-sharjah">Physics</Link>, <Link to="/chemistry-tuition-sharjah">Chemistry</Link>, <Link to="/maths-tuition-sharjah">Maths</Link>, and <Link to="/sat-preparation-sharjah">SAT Coaching</Link>.
                                </p>

                                <h3>📍 Al Qasimia, Abu Shagara & Al Yarmook</h3>
                                <p>
                                    With close proximity to King Faisal Street, families in Al Qasimia and Abu Shagara reach our center in under <strong>7 minutes</strong>. This area has high demand for CBSE and British curriculum primary and middle school coaching.
                                </p>

                                <h3>📍 Muwaileh, University City & Al Juraina</h3>
                                <p>
                                    Muwaileh is Sharjah’s educational powerhouse, surrounded by premier international schools. Students from Muwaileh commute to our campus in <strong>12–15 minutes</strong> via University City Road, or participate in our live online hybrid batches on weekdays with weekend physical mock sessions.
                                </p>

                                <h3>📍 Al Khan & Al Mamzar</h3>
                                <p>
                                    Located just <strong>4–6 minutes</strong> away along Al Khan Street, students from Al Khan enjoy rapid access to our dedicated IGCSE, A-Level, and IB diploma tutors.
                                </p>
                            </section>

                            <hr className="content-hr" />

                            {/* Section 3 */}
                            <section id="section-3">
                                <h2>3. Curricula Covered: Tailored Coaching for Every Educational Board</h2>
                                <p>
                                    Every curriculum in the UAE requires a distinct instructional approach. At NITAQ Academy, our subject specialists are trained in the exact specifications of each board:
                                </p>

                                <div className="strategy-grid">
                                    <div className="strategy-card">
                                        <h3>CBSE & ICSE (Indian Curriculum)</h3>
                                        <ul className="article-list">
                                            <li>Complete NCERT alignment & conceptual mastery</li>
                                            <li>Rigorous preparation for Grade 10 & 12 Board Exams</li>
                                            <li>Regular chapter assessments, sample papers & exemplar problem solving</li>
                                            <li>Foundation coaching for competitive exams (JEE / NEET / SAT)</li>
                                        </ul>
                                    </div>
                                    <div className="strategy-card">
                                        <h3>British Curriculum (IGCSE, GCSE, A-Levels)</h3>
                                        <ul className="article-list">
                                            <li>Cambridge (CIE), Edexcel, and Oxford AQA board alignment</li>
                                            <li>Deep focus on past papers (10+ years) and mark-scheme dissection</li>
                                            <li>Mastery of scientific command words and structured step marking</li>
                                            <li>AS & A2 Level specialized coaching in Pure Maths, Mechanics & Sciences</li>
                                        </ul>
                                    </div>
                                    <div className="strategy-card">
                                        <h3>International Baccalaureate (IB PYP / MYP / DP)</h3>
                                        <ul className="article-list">
                                            <li>Inquiry-based problem solving and conceptual synthesis</li>
                                            <li>Support with Internal Assessments (IAs), Extended Essays & TOK guidance</li>
                                            <li>Standard Level (SL) and Higher Level (HL) rigorous subject coaching</li>
                                        </ul>
                                    </div>
                                    <div className="strategy-card">
                                        <h3>American Curriculum & AP Courses</h3>
                                        <ul className="article-list">
                                            <li>US Common Core standards mastery</li>
                                            <li>Advanced Placement (AP) preparation for AP Calculus, Physics, Chem & Bio</li>
                                            <li>Integrated <Link to="/sat-preparation-sharjah">Digital SAT preparation</Link> for college admissions</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <hr className="content-hr" />

                            {/* Section 4 */}
                            <section id="section-4">
                                <h2>4. Core Subject Tuition Programs in Sharjah</h2>
                                <p>
                                    Explore our specialized subject tutoring programs led by veteran educators:
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', margin: '24px 0' }}>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>📐 Mathematics Tuition</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>Algebra, Geometry, Trigonometry, Calculus, Statistics, and Pure Mathematics across all grades.</p>
                                        <Link to="/maths-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Maths Tuition →</Link>
                                    </div>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>⚡ Physics Tuition</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>Mechanics, Thermodynamics, Waves, Electricity, Magnetism, and Nuclear Physics for IGCSE, CBSE & A-Levels.</p>
                                        <Link to="/physics-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Physics Tuition →</Link>
                                    </div>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>🧪 Chemistry Tuition</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>Organic Chemistry, Stoichiometry, Physical Chemistry, Periodic Trends & Reaction Kinetics.</p>
                                        <Link to="/chemistry-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Chemistry Tuition →</Link>
                                    </div>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>🧬 Biology Tuition</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>Cellular Biology, Genetics, Human Physiology, Ecology, Evolution, and Biotechnology.</p>
                                        <Link to="/biology-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Biology Tuition →</Link>
                                    </div>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>📊 Commerce & Business Tuition</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>Accountancy, Business Studies, and Economics coaching with practical case studies and financial analysis.</p>
                                        <Link to="/accountancy-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Commerce Tuition →</Link>
                                    </div>
                                    <div style={{ background: '#fafdfa', border: '1px solid #c8ddd0', borderRadius: '10px', padding: '18px' }}>
                                        <h4 style={{ margin: '0 0 8px', color: '#1a5c2e' }}>📝 English & Arabic Languages</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '10px' }}>English creative writing, grammar, comprehension, and UAE MOE Arabic (Arabs & Non-Arabs).</p>
                                        <Link to="/english-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'none' }}>Explore Language Tuition →</Link>
                                    </div>
                                </div>
                            </section>

                            <hr className="content-hr" />

                            {/* Section 5 */}
                            <section id="section-5">
                                <h2>5. What Makes NITAQ Academy the Top-Rated Tuition Center in Sharjah</h2>
                                
                                <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', margin: '20px 0', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={22} color="#1a5c2e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <strong>SPEA Licensed & Verified:</strong> Fully accredited educational academy operating under the standards of the Sharjah Private Education Authority.
                                            </div>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={22} color="#1a5c2e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <strong>Veteran Subject Specialists:</strong> Passionate teachers with 8 to 15+ years of dedicated experience teaching UAE school curricula.
                                            </div>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={22} color="#1a5c2e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <strong>Micro-Batches (5–8 Students):</strong> Intimate class environments ensuring direct engagement, zero distraction, and focused attention.
                                            </div>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={22} color="#1a5c2e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <strong>Regular Diagnostic Testing & Parent Feedback:</strong> Monthly progress tracking, mock exams, and transparent parent-teacher updates.
                                            </div>
                                        </li>
                                        <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <CheckCircle2 size={22} color="#1a5c2e" style={{ flexShrink: 0, marginTop: '2px' }} />
                                            <div>
                                                <strong>Flexible Schedules (Weekday & Weekend):</strong> Flexible evening slots (4:00 PM – 8:30 PM) and dedicated Saturday/Sunday batches.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <hr className="content-hr" />

                            {/* Section 6: FAQ Accordion */}
                            <section id="section-6">
                                <h2>6. Frequently Asked Questions (Tuition in Sharjah)</h2>
                                <div className="faq-accordion-container" style={{ margin: '24px 0' }}>
                                    {faqs.map((faq, index) => (
                                        <div 
                                            key={index}
                                            style={{ border: '1px solid #e2e8f0', borderRadius: '10px', marginBottom: '12px', overflow: 'hidden', background: '#ffffff' }}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleFaq(index)}
                                                style={{ width: '100%', padding: '16px 20px', background: openFaq === index ? '#f0f8f3' : '#ffffff', border: 'none', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontFamily: 'inherit' }}
                                            >
                                                <span style={{ fontWeight: '700', fontSize: '1.05rem', color: openFaq === index ? '#1a5c2e' : '#0f172a' }}>
                                                    {faq.question}
                                                </span>
                                                {openFaq === index ? <ChevronUp size={20} color="#1a5c2e" /> : <ChevronDown size={20} color="#64748b" />}
                                            </button>
                                            {openFaq === index && (
                                                <div style={{ padding: '16px 20px', background: '#fafdfa', borderTop: '1px solid #e2efe6', fontSize: '0.95rem', lineHeight: '1.65', color: '#334155' }}>
                                                    {faq.answer}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Final Call to Action */}
                            <div className="article-final-cta" style={{ background: 'linear-gradient(135deg, #1a5c2e 0%, #2e7d32 100%)', borderRadius: '16px', padding: '36px 30px', color: '#ffffff', textAlign: 'center', margin: '40px 0', boxShadow: '0 12px 36px rgba(26,92,46,0.25)' }}>
                                <GraduationCap size={44} style={{ margin: '0 auto 12px', opacity: 0.9 }} />
                                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px', color: '#ffffff' }}>
                                    Boost Your Child's Grades with Sharjah's Premier Tutors
                                </h3>
                                <p style={{ fontSize: '1.05rem', opacity: 0.95, maxWidth: '650px', margin: '0 auto 24px', lineHeight: '1.6' }}>
                                    Visit our Al Majaz 3 campus or join our interactive live online batches. Book a free diagnostic evaluation and experience the NITAQ difference today!
                                </p>
                                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                                    <Link 
                                        to="/academic-excellence" 
                                        style={{ background: '#ffffff', color: '#1a5c2e', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 14px rgba(0,0,0,0.1)' }}
                                    >
                                        Explore Academic Tuition <ArrowRight size={18} />
                                    </Link>
                                    <Link 
                                        to="/contact" 
                                        style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 28px', borderRadius: '10px', fontWeight: '700', fontSize: '1rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                    >
                                        Book Free Assessment
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Article Sidebar */}
                        <aside className="article-sidebar">
                            <div className="sidebar-card" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '24px', marginBottom: '24px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)' }}>
                                <h3 style={{ color: '#1a5c2e', fontSize: '1.2rem', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <MapPin size={20} /> Campus Location
                                </h3>
                                <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5', marginBottom: '12px' }}>
                                    <strong>NITAQ Academy</strong><br />
                                    Abu Khamseen Tower, Office F103, Floor F1<br />
                                    Al Majaz 3, Sharjah, UAE<br />
                                    <em>(Near Buhaira Corniche & King Faisal St)</em>
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: '1.5', marginBottom: '16px' }}>
                                    📞 <strong>Tel:</strong> +971 6 579 8313<br />
                                    💬 <strong>WhatsApp:</strong> +971 52 756 9908
                                </p>
                                <Link to="/enrolment.html" className="btn-primary" style={{ display: 'block', textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', fontWeight: '700', fontSize: '0.95rem' }}>
                                    Enrol Online Now
                                </Link>
                            </div>

                            <div className="sidebar-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '24px' }}>
                                <h3 style={{ color: '#0f172a', fontSize: '1.15rem', marginBottom: '14px' }}>Subject Tuition Links</h3>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
                                    <li><Link to="/maths-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Maths Tuition Sharjah</Link></li>
                                    <li><Link to="/physics-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Physics Tuition Sharjah</Link></li>
                                    <li><Link to="/chemistry-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Chemistry Tuition Sharjah</Link></li>
                                    <li><Link to="/biology-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Biology Tuition Sharjah</Link></li>
                                    <li><Link to="/english-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ English Tuition Sharjah</Link></li>
                                    <li><Link to="/accountancy-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Accountancy Tuition Sharjah</Link></li>
                                    <li><Link to="/economics-tuition-sharjah" style={{ color: '#1a5c2e', fontWeight: '600', textDecoration: 'none' }}>→ Economics Tuition Sharjah</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default BestTuitionClassesNearMeSharjah;
