import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, 
    CheckCircle, Target, MessageCircle, Star,
    BookOpen, Award, Sparkles, GraduationCap, Compass,
    Layers, Users, ShieldCheck, MapPin, ArrowRight
} from 'lucide-react';

const AcademicExcellenceTuitionGuide = () => {
    const publishDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className="article-details-page">
            <SEO 
                title="Academic Tutors & School Tuition in UAE: Dubai & Sharjah Guide"
                description="Ultimate guide to academic tuition in UAE. Find top Arabic Tutors Dubai, English Tuition Sharjah, Maths Tuition UAE, Science Tutors Dubai, Physics Chemistry Biology Tuition Sharjah & online classes."
                keywords="Arabic Tutors Dubai, English Tuition Sharjah, Maths Tuition UAE, Science Tutors Dubai, Arabic Classes Sharjah, English Speaking Course Dubai, Maths Online Classes UAE, Physics Chemistry Biology Tuition Sharjah, IGCSE Tuition Dubai, CBSE Tuition Sharjah, IB Tutors UAE, Private Tutors Dubai, School Tuition UAE"
            />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>Academic Tutors & Tuition UAE Guide</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <div className="article-header text-center">
                        <span className="article-category-badge">Academic Excellence & Tuition</span>
                        <h1 className="article-main-title">
                            Top Academic Tutors & School Tuition in Dubai & Sharjah, UAE: The Complete Guide to Maths, Science, English & Arabic Excellence
                        </h1>
                        
                        <div className="article-meta justify-center">
                            <div className="meta-item"><User size={16} /><span>NITAQ Academic Advisory Board</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Calendar size={16} /><span>{publishDate}</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Clock size={16} /><span>14 Min Read</span></div>
                        </div>
                    </div>

                    <div className="article-featured-img premium-shadow">
                        <img 
                            src="/images/academic_v2.webp" 
                            alt="Academic Excellence School Tuition in Dubai Sharjah UAE - Maths Science English Arabic Tutors" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                Academic standards in the United Arab Emirates are among the most rigorous in the region. With thousands of students enrolled in diverse educational boards—including <strong>CBSE, British (IGCSE/GCSE/A-Levels), International Baccalaureate (IB), and American curricula</strong>—mastering complex concepts while maintaining high grades is a top priority for families. Whether you are searching for expert <strong>Arabic Tutors Dubai</strong>, structured <strong>English Tuition Sharjah</strong>, result-oriented <strong>Maths Tuition UAE</strong>, or specialized <strong>Science Tutors Dubai</strong>, choosing the right academic coaching center can make all the difference in your child's confidence and performance.
                            </p>

                            <p>
                                At <Link to="/academic-excellence" className="inline-link">NITAQ Academy</Link>, our <strong>Academic Excellence Program</strong> is tailored to help students from Grade 1 to Grade 12 bridge learning gaps, master core disciplines, and excel in both school evaluations and international board examinations across Sharjah, Dubai, and the wider UAE.
                            </p>

                            <div className="course-overview-box">
                                <h3>Academic Excellence & Tuition Program Overview</h3>
                                <ul className="course-features-list">
                                    <li><CheckCircle size={18} /> <strong>Target Grades:</strong> Grade 1 to Grade 12 (Primary, Middle, High School)</li>
                                    <li><CheckCircle size={18} /> <strong>Curricula Supported:</strong> CBSE, ICSE, Cambridge IGCSE / GCSE, IB (PYP/MYP/DP), American Core</li>
                                    <li><CheckCircle size={18} /> <strong>Core Subjects:</strong> Mathematics, Physics, Chemistry, Biology, English, Arabic (MOE A & B), Social Studies</li>
                                    <li><CheckCircle size={18} /> <strong>Learning Modes:</strong> In-Person Classroom (Sharjah Majaz 3 Campus) | Interactive Live Online (Dubai, Abu Dhabi, UAE)</li>
                                    <li><CheckCircle size={18} /> <strong>Accreditation:</strong> SPEA Authorized Training Institute (Sharjah Private Education Authority)</li>
                                    <li><CheckCircle size={18} /> <strong>Formats:</strong> 1-on-1 Personalized Coaching, Micro-Batches (5-8 students), Weekend Booster & Intensive Exam Revision</li>
                                </ul>
                            </div>

                            <h2>Why High-Quality Tuition is Essential for UAE School Students</h2>
                            <p>
                                The UAE educational ecosystem is characterized by multicultural classrooms, high-stakes benchmark assessments (such as CAT4, MAP, TIMSS, and PISA), and demanding board examinations. School teachers often have to manage large class sizes, leaving little room for individualized pacing.
                            </p>
                            <p>
                                A targeted tuition program provides:
                            </p>
                            <ul>
                                <li><strong>Concept Clarity:</strong> Moving away from rote memorization towards deep foundational understanding.</li>
                                <li><strong>Curriculum-Aligned Learning:</strong> Precise focus on specific board syllabus rubrics, marking schemes, and question trends.</li>
                                <li><strong>Overcoming Language Barriers:</strong> Specialized coaching for bilingual learners in both English language mastery and mandatory MOE Arabic curricula.</li>
                                <li><strong>Exam Strategy & Time Management:</strong> Regular practice with past papers, mock assessments, and step-by-step problem-solving methods.</li>
                                <li><strong>Boosted Confidence:</strong> A safe, supportive environment where students can clarify doubts without hesitation.</li>
                            </ul>

                            <div className="content-hr"></div>

                            {/* MATHS TUITION SECTION */}
                            <h2>1. Maths Tuition UAE & Maths Online Classes UAE</h2>
                            <p>
                                Mathematics is often considered the cornerstone of STEM disciplines, yet it remains one of the most challenging subjects for students across all grades. Whether your child is struggling with foundational arithmetic in primary school or complex calculus in senior secondary, our <strong>Maths Tuition UAE</strong> delivers structured coaching that transforms anxiety into mathematical mastery.
                            </p>

                            <div className="strategy-grid">
                                <div className="strategy-card">
                                    <h3>Primary & Middle School Mathematics (Grades 1–8)</h3>
                                    <p>Focuses on strong number sense, mental math agility, fractions, decimals, basic geometry, and logical word problem interpretation. We build the conceptual bridge required for secondary school mathematics.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>IGCSE & GCSE Maths Coaching (Dubai & Sharjah)</h3>
                                    <p>Comprehensive coverage of Extended and Core syllabi (Cambridge 0580 & Edexcel 4MA1). In-depth mastery of algebraic manipulation, trigonometry, vectors, probability, and statistics with past paper marathons.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>CBSE Class 9, 10, 11 & 12 Mathematics</h3>
                                    <p>Strictly aligned with NCERT and CBSE board patterns. Extensive training in NCERT Exemplar problems, standard vs. basic mathematics for Class 10, and advanced Calculus, Vectors, and 3D Geometry for Class 12 board aspirants.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>IB Mathematics: Analysis & Approaches (AA) & Applications & Interpretation (AI)</h3>
                                    <p>Specialized tutoring for IB DP Standard Level (SL) and Higher Level (HL). Expert guidance on Internal Assessments (IA), conceptual mathematical explorations, and graphic display calculator (GDC) proficiencies.</p>
                                </div>
                            </div>

                            <p>
                                For families seeking flexible schedules or residing in Dubai, Abu Dhabi, or Ajman, our <strong>Maths Online Classes UAE</strong> provide high-definition interactive digital whiteboards, recorded revision sessions, and live real-time feedback with top mathematics mentors.
                            </p>

                            <div className="article-inline-cta">
                                <p>
                                    Looking for expert Mathematics tutoring? <Link to="/academic-excellence">Explore our Academic Excellence Maths tracks</Link> or connect with our academic counselors today.
                                </p>
                            </div>

                            {/* SCIENCE TUITION SECTION */}
                            <h2>2. Science Tutors Dubai & Physics Chemistry Biology Tuition Sharjah</h2>
                            <p>
                                Science requires a dual mastery of theoretical laws and practical analytical applications. At NITAQ Academy, our network of experienced <strong>Science Tutors Dubai</strong> and <strong>Physics Chemistry Biology Tuition Sharjah</strong> empowers students to visualize abstract scientific laws and excel in school labs and written examinations.
                            </p>

                            <h3>Physics Tuition (Sharjah, Dubai & Online)</h3>
                            <p>
                                Physics bridges mathematics and natural phenomena. Our physics tuition clarifies difficult concepts such as:
                            </p>
                            <ul>
                                <li><strong>Kinematics & Newtonian Mechanics:</strong> Forces, motion vectors, work, energy, and power.</li>
                                <li><strong>Electricity & Magnetism:</strong> Circuit analysis, Ohm's law, electromagnetic induction, and AC circuits.</li>
                                <li><strong>Thermal Physics & Waves:</strong> Optics, sound waves, thermodynamics, and wave-particle duality.</li>
                                <li><strong>Nuclear & Modern Physics:</strong> Quantum phenomena, atomic structures, and astrophysics for advanced curricula.</li>
                            </ul>

                            <h3>Chemistry Tuition (CBSE, IGCSE & IB)</h3>
                            <p>
                                Chemistry can become overwhelming due to chemical equations, stoichiometric calculations, and organic mechanisms. Our chemistry tutors break down:
                            </p>
                            <ul>
                                <li><strong>Physical Chemistry:</strong> Atomic theory, chemical bonding, thermodynamics, equilibrium, and electrochemistry.</li>
                                <li><strong>Inorganic Chemistry:</strong> Periodic table trends, transition metals, and coordination compounds.</li>
                                <li><strong>Organic Chemistry:</strong> IUPAC nomenclature, reaction mechanisms, functional groups, and polymer synthesis.</li>
                            </ul>

                            <h3>Biology Tuition (Secondary & Senior Secondary)</h3>
                            <p>
                                From molecular genetics to human physiology and environmental ecosystems, our biology faculty utilizes high-yield diagrams, 3D anatomical models, and structured memory aids to help students ace descriptive and diagram-based questions in CBSE, IGCSE, and IB Biology.
                            </p>

                            <p>
                                Preparing for medical or engineering entrance exams alongside school? Check out our integrated <Link to="/foundation-jee-neet" className="inline-link">Foundation JEE & NEET Preparation Program</Link> designed specifically for UAE-based high school students.
                            </p>

                            {/* ENGLISH TUITION SECTION */}
                            <h2>3. English Tuition Sharjah & English Speaking Course Dubai</h2>
                            <p>
                                English is the language of global education and professional advancement. In the UAE's cosmopolitan academic sphere, students must master both formal academic writing for board exams and fluent conversational communication for university interviews and daily life.
                            </p>

                            <div className="strategy-grid">
                                <div className="strategy-card">
                                    <h3>Academic English Tuition Sharjah</h3>
                                    <p>Comprehensive school curriculum support covering reading comprehension strategies, essay writing (persuasive, analytical, narrative), grammar rules, vocabulary expansion, and literary analysis for CBSE, IGCSE First & Second Language, and American English.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>English Speaking Course Dubai</h3>
                                    <p>Dynamic spoken English classes designed to eliminate public speaking hesitation, refine pronunciation, correct accent nuances, and instill natural conversational fluency for school presentations and everyday social interactions.</p>
                                </div>
                            </div>

                            <p>
                                Looking to sharpen your communication or preparing for international language benchmarks? Discover our specialized <Link to="/spoken-english" className="inline-link">Spoken English Courses</Link> and <Link to="/ielts-course" className="inline-link">IELTS Preparation Courses</Link>.
                            </p>

                            {/* ARABIC TUITION SECTION */}
                            <h2>4. Arabic Tutors Dubai & Arabic Classes Sharjah</h2>
                            <p>
                                In the United Arab Emirates, Arabic is a mandatory subject regulated by the Ministry of Education (MOE), KHDA (Knowledge and Human Development Authority in Dubai), and SPEA (Sharjah Private Education Authority). Many students—both expatriate and native speakers—find Arabic assessments demanding due to classical grammar rules and formal vocabulary.
                            </p>

                            <p>
                                NITAQ Academy offers the most comprehensive <strong>Arabic Classes Sharjah</strong> and dedicated <strong>Arabic Tutors Dubai</strong> for every learning level:
                            </p>

                            <ul className="course-features-list">
                                <li><CheckCircle size={18} /> <strong>MOE Arabic A (For Arab Native Speakers):</strong> In-depth classical literature (Adab), advanced grammar (Nahw and Sarf), rhetoric (Balaghah), and formal essay composition tailored to ministry board exams.</li>
                                <li><CheckCircle size={18} /> <strong>MOE Arabic B (For Non-Arab Expatriates):</strong> Simplified conversational building blocks, phonics, sentence structure, listening comprehension, and exam-focused vocabulary designed to achieve top marks in school assessments.</li>
                                <li><CheckCircle size={18} /> <strong>Spoken Arabic for Daily Communication:</strong> Practical conversational Gulf and Modern Standard Arabic (MSA) for both youth and working professionals.</li>
                            </ul>

                            <p>
                                Learn more about our native Arabic instruction at our <Link to="/spoken-arabic" className="inline-link">Spoken Arabic Training Course</Link>.
                            </p>

                            <div className="whatsapp-cta-section">
                                <div className="cta-content">
                                    <h3>Book a Free Academic Assessment for Your Child</h3>
                                    <p>Speak with our senior educational advisors in Sharjah & Dubai. We evaluate your child's current learning level and craft a personalized improvement roadmap.</p>
                                </div>
                                <a 
                                    href="https://wa.me/971527569908?text=Hello%20NITAQ%20Academy,%20I%20am%20interested%20in%20Academic%20Excellence%20Tuition%20(Maths,%20Science,%20English,%20Arabic)" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="whatsapp-btn-large"
                                >
                                    <MessageCircle size={20} /> Chat on WhatsApp (+971 52 756 9908)
                                </a>
                            </div>

                            {/* CURRICULUM BREAKDOWN TABLE */}
                            <h2>5. Curricula Comparison: Tailored Tutoring by Educational Board</h2>
                            <p>
                                One size does not fit all in education. Our tuition methodology differs strategically depending on your child’s school curriculum:
                            </p>

                            <div style={{ overflowX: 'auto', margin: '30px 0' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#f8fafc', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                                    <thead>
                                        <tr style={{ background: '#0f172a', color: '#ffffff', textAlign: 'left' }}>
                                            <th style={{ padding: '16px 20px' }}>Curriculum</th>
                                            <th style={{ padding: '16px 20px' }}>Key Focus Areas</th>
                                            <th style={{ padding: '16px 20px' }}>NITAQ Coaching Methodology</th>
                                            <th style={{ padding: '16px 20px' }}>Exam Benchmarks</th>
                                        </tr>
                                    </thead>
                                    <tbody style={{ fontSize: '0.95rem', color: '#334155' }}>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding: '16px 20px', fontWeight: 700 }}>CBSE / ICSE</td>
                                            <td style={{ padding: '16px 20px' }}>NCERT mastery, numerical problem solving, detailed derivations, formula retention</td>
                                            <td style={{ padding: '16px 20px' }}>Chapter-wise test series, previous 10-year question papers, step-marking strategies</td>
                                            <td style={{ padding: '16px 20px' }}>Class 10 & 12 Boards, Term Exams</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff' }}>
                                            <td style={{ padding: '16px 20px', fontWeight: 700 }}>Cambridge IGCSE & GCSE</td>
                                            <td style={{ padding: '16px 20px' }}>Application-based reasoning, critical analysis, structured problem solving, command words</td>
                                            <td style={{ padding: '16px 20px' }}>Examiner report analysis, mark-scheme drills, time-restricted past paper sessions</td>
                                            <td style={{ padding: '16px 20px' }}>May/June & Oct/Nov Exam Series (A* Focus)</td>
                                        </tr>
                                        <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                                            <td style={{ padding: '16px 20px', fontWeight: 700 }}>International Baccalaureate (IB)</td>
                                            <td style={{ padding: '16px 20px' }}>Inquiry-based learning, Internal Assessments (IA), conceptual synthesis, Extended Essay support</td>
                                            <td style={{ padding: '16px 20px' }}>Criterion-referenced tutoring, IA brainstorming & rubric alignment, HL/SL deep dives</td>
                                            <td style={{ padding: '16px 20px' }}>IB MYP eAssessments & DP Final Exams (Score 7 Goal)</td>
                                        </tr>
                                        <tr style={{ background: '#ffffff' }}>
                                            <td style={{ padding: '16px 20px', fontWeight: 700 }}>American & MOE Curriculum</td>
                                            <td style={{ padding: '16px 20px' }}>Continuous GPA maintenance, Common Core standards, Next Generation Science Standards (NGSS)</td>
                                            <td style={{ padding: '16px 20px' }}>Quarterly exam preparation, AP course support, MAP test and SAT alignment</td>
                                            <td style={{ padding: '16px 20px' }}>High School GPA, AP Exams, Digital SAT</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2>6. Grade-by-Grade Academic Roadmaps at NITAQ Academy</h2>
                            <p>
                                Every stage of a child’s academic journey presents unique milestones:
                            </p>

                            <div className="strategy-grid">
                                <div className="strategy-card">
                                    <h3>Primary Stage (Grades 1 to 5): Sparking Curiosity & Confidence</h3>
                                    <p>We nurture foundational reading, phonics, mental math, and natural science wonder. Students learn joyful study habits, eliminating academic frustration early on.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>Middle School (Grades 6 to 8): Conceptual Strengthening</h3>
                                    <p>Transitioning into specialized subjects (Physics, Chemistry, Biology, Advanced Algebra, Literature). We prepare learners for the rigorous demands of secondary education.</p>
                                </div>
                                <div className="strategy-card">
                                    <h3>Secondary & Board Exam Stage (Grades 9 to 12): Target 95%+ & A* Grades</h3>
                                    <p>Intensive, result-oriented coaching for board examinations. Includes timed mock exams, comprehensive revision modules, university entrance prep, and standardized testing like the <Link to="/sat-preparation-sharjah" className="inline-link">Digital SAT</Link>.</p>
                                </div>
                            </div>

                            <h2>7. Why Parents & Students Across Dubai & Sharjah Choose NITAQ</h2>
                            <p>
                                Selecting a tuition center is an investment in your child’s future. Here is why NITAQ Academy stands out as Sharjah’s leading SPEA-authorized learning institution:
                            </p>

                            <ul className="course-features-list">
                                <li><CheckCircle size={18} /> <strong>SPEA-Authorized & Government Recognized:</strong> Fully accredited by Sharjah Private Education Authority, upholding premier educational quality and safety.</li>
                                <li><CheckCircle size={18} /> <strong>Qualified Subject Specialists:</strong> Our educators are seasoned teachers with verified track records in producing UAE board toppers and straight-A* achievers.</li>
                                <li><CheckCircle size={18} /> <strong>Free Diagnostic Entry Assessment:</strong> We identify exact learning gaps before curating a customized syllabus plan.</li>
                                <li><CheckCircle size={18} /> <strong>Hybrid Flexibility (Classroom & Online):</strong> Attend offline sessions at our modern facility in Abu Khamseen Tower (Majaz 3, Sharjah) or join live digital sessions from Dubai, Abu Dhabi, or Ajman.</li>
                                <li><CheckCircle size={18} /> <strong>Transparent Parent Reporting:</strong> Bi-weekly progress updates, performance analytics, and periodic parent-teacher meetings (PTMs).</li>
                                <li><CheckCircle size={18} /> <strong>Extensive Study Material:</strong> Curated question banks, summary formula cheat sheets, past paper booklets, and model answers.</li>
                            </ul>

                            <div className="content-hr"></div>

                            {/* FREQUENTLY ASKED QUESTIONS SECTION */}
                            <h2>Frequently Asked Questions (FAQ) - Tuition & Tutors in UAE</h2>
                            
                            <div className="faq-accordion-group">
                                <details className="faq-accordion">
                                    <summary>Which subjects are covered under NITAQ's Academic Tuition in UAE?</summary>
                                    <p>We provide comprehensive tutoring for Mathematics, Science (Physics, Chemistry, Biology), English Language & Literature, Arabic (MOE A and MOE B curricula), Social Studies, and Computer Science across all school grades.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>Do you offer both classroom sessions in Sharjah and online classes in Dubai?</summary>
                                    <p>Yes. We offer offline classroom tutoring at our flagship campus in Majaz 3, Sharjah, as well as live, interactive online tuition for students residing across Dubai, Abu Dhabi, Ajman, and the entire UAE.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>Which school curricula do your tutors specialize in?</summary>
                                    <p>Our educators specialize in Indian boards (CBSE and ICSE), British curriculum (Cambridge IGCSE, GCSE, Edexcel, O-Level, A-Level), International Baccalaureate (IB PYP, MYP, and DP), and the American Curriculum.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>How do your Arabic Tutors in Dubai & Sharjah help non-native students?</summary>
                                    <p>For non-native Arabic learners (MOE Arabic B), our tutors use bilingual conversational methods, visual vocabulary cards, and simplified grammar lessons that align directly with ministry exam guidelines to boost school grades effortlessly.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>What is the batch size for tuition classes at NITAQ Academy?</summary>
                                    <p>To ensure individual attention, our group classes maintain small micro-batches of only 5 to 8 students. We also offer dedicated 1-on-1 private tutoring sessions upon request.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>How can I enroll my child or book a free trial assessment?</summary>
                                    <p>You can contact our admissions desk via WhatsApp at +971 52 756 9908, fill out the online inquiry form on our website, or visit our Sharjah center in Abu Khamseen Tower, Majaz 3.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>Do you offer test preparation for competitive exams like SAT, JEE, and NEET?</summary>
                                    <p>Yes. In addition to regular school subjects, we offer specialized Foundation JEE & NEET coaching and Digital SAT preparation batches to give high school students a competitive edge for university admissions.</p>
                                </details>

                                <details className="faq-accordion">
                                    <summary>How do you track and report student progress to parents?</summary>
                                    <p>We conduct periodic chapter tests and monthly mock exams. Comprehensive scorecards, attendance logs, and personalized feedback are shared with parents through digital portals and regular parent-teacher conferences.</p>
                                </details>
                            </div>

                            <div className="whatsapp-cta-section" style={{ marginTop: '50px' }}>
                                <div className="cta-content">
                                    <h3>Ready to Elevate Your Child's Academic Journey?</h3>
                                    <p>Join hundreds of successful students across Sharjah, Dubai, and the UAE who have achieved top grades with NITAQ Academy.</p>
                                </div>
                                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <Link to="/academic-excellence" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', borderRadius: '50px', background: 'var(--primary-color)', color: '#fff', fontWeight: 'bold' }}>
                                        View Program Details <ArrowRight size={16} />
                                    </Link>
                                    <a 
                                        href="https://wa.me/971527569908?text=Hello%20NITAQ%20Academy,%20I%20would%20like%20to%20inquire%20about%20School%20Tuition%20classes" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="whatsapp-btn-large"
                                    >
                                        <MessageCircle size={20} /> WhatsApp Admission Desk
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* STICKY SIDEBAR */}
                        <aside className="article-sidebar">
                            <div className="enroll-sidebar-card">
                                <h3>Academic Excellence Program</h3>
                                <p>Sharjah Campus & Live UAE Online</p>
                                
                                <ul style={{ textAlign: 'left', margin: '20px 0', padding: 0, listStyle: 'none', fontSize: '0.9rem', color: '#475569' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <CheckCircle size={16} color="var(--primary-color)" /> Grades 1 to 12 All Boards
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <CheckCircle size={16} color="var(--primary-color)" /> Maths, Science, English, Arabic
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <CheckCircle size={16} color="var(--primary-color)" /> CBSE, IGCSE, IB, American
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <CheckCircle size={16} color="var(--primary-color)" /> SPEA Authorized Training
                                    </li>
                                </ul>

                                <Link to="/academic-excellence" className="btn-primary" style={{ display: 'block', width: '100%', textAlign: 'center', padding: '12px 0', borderRadius: '50px', background: 'var(--primary-color)', color: '#fff', fontWeight: 700, marginBottom: '15px' }}>
                                    Course Curriculum
                                </Link>

                                <a 
                                    href="https://wa.me/971527569908?text=Hello%20NITAQ%20Academy,%20I%20am%20inquiring%20about%20Academic%20Tuition%20classes" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '12px 0', borderRadius: '50px', background: '#25D366', color: '#fff', fontWeight: 700, textDecoration: 'none' }}
                                >
                                    <MessageCircle size={18} /> Chat on WhatsApp
                                </a>

                                <div style={{ marginTop: '25px', paddingTop: '20px', borderTop: '1px solid #e2e8f0', textAlign: 'left', fontSize: '0.85rem', color: '#64748b' }}>
                                    <p style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '8px' }}>
                                        <MapPin size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                                        <span>Abu Khamseen Tower, Majaz 3, Sharjah, UAE</span>
                                    </p>
                                    <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
                                        <ShieldCheck size={16} style={{ flexShrink: 0 }} />
                                        <span>Authorized by SPEA</span>
                                    </p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </main>
    );
};

export default AcademicExcellenceTuitionGuide;
