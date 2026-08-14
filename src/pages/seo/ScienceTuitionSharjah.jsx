import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    FlaskConical, Atom, Dna, FileText, Mail
} from 'lucide-react';

const ScienceTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 1 to 12 (Primary to High School)",
        "Subjects Included": "Physics, Chemistry, Biology & Integrated Science",
        "Curricula Supported": "Cambridge IGCSE, Edexcel A-Level, IB DP (SL/HL), CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Theory, Numerical Drills, ATP & Practical Guides",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Science Tuition in Sharjah"
                subtitle="Expert Physics, Chemistry & Biology Coaching from Class 1 to 12 for IGCSE, A-Level, IB & CBSE in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Science Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Science tuition in Sharjah</strong> covering <strong>Physics, Chemistry, and Biology</strong> for Class 1 to Class 12. We deliver curriculum-specialized coaching for <strong>Cambridge IGCSE (0625/0620/0610)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>IB Diploma Sciences (SL/HL)</strong>, and <strong>CBSE Science/PCB/PCM</strong>. Taught by senior subject matter specialists in micro-batches of 5 to 8 students and 1-on-1 private formats at Abu Khamseen Tower, Al Majaz 3, Sharjah, alongside live interactive online classes UAE-wide.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Sciences: <span className="text-gradient">Physics, Chemistry & Biology Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Scientific mastery demands both conceptual intuition and exact mathematical application. From foundational natural sciences in primary school to the rigorous demands of <strong>Physics tuition in Sharjah</strong>, <strong>Chemistry coaching</strong>, and <strong>Biology tutoring</strong> for board examinations, Nitaq Academy delivers structured, inquiry-driven science education.
                        </p>
                        <p>
                            Operating from our modern campus in <strong>Al Majaz 3, Sharjah</strong>, our veteran science faculty bridges theoretical knowledge with real-world applications. We equip students to master chemical equations, circuit diagrams, molecular genetics, and Alternative to Practical (ATP) experimental analysis with maximum exam precision.
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
                                    <th>Specification for Science Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 1, Class 2, Class 3, Class 4, Class 5, Class 6, Class 7, Class 8, Class 9, Class 10, Class 11, Class 12</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Subjects Offered</td>
                                    <td>General Science (Primary & Middle School), Physics, Chemistry, Biology, Environmental Systems</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (Co-ordinated 0654, Combined 0653, Separate Sciences 0625/0620/0610), Edexcel GCSE/A-Level, IB DP (Physics, Chemistry, Biology SL/HL), CBSE (Class 9-10 Science, Class 11-12 PCM/PCB)</td>
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

                {/* THREE SCIENCE DISCIPLINES GRID */}
                <div className="content-card">
                    <h2>Core Science Disciplines: <span className="text-gradient">Physics, Chemistry & Biology</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Atom size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Physics Tuition</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Mechanics & Forces</span>
                                <span className="curriculum-pill">Thermal & Waves</span>
                                <span className="curriculum-pill">Electricity & Magnetism</span>
                                <span className="curriculum-pill">Nuclear & Quantum</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpacking physical laws through mathematical derivations, vector diagrams, circuit calculations, wave mechanics, and formula application for IGCSE, A-Levels, IB & CBSE.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FlaskConical size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Chemistry Tuition</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Stoichiometry & Mole</span>
                                <span className="curriculum-pill">Organic Synthesis</span>
                                <span className="curriculum-pill">Thermodynamics & Kinetics</span>
                                <span className="curriculum-pill">Inorganic & Periodic</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Structured mastery of chemical bonding, balancing complex ionic redox equations, organic reaction mechanisms, equilibrium constants, and experimental titrations.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Dna size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Biology Tuition</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Cell Biology & Genetics</span>
                                <span className="curriculum-pill">Human Physiology</span>
                                <span className="curriculum-pill">Plant Biochemistry</span>
                                <span className="curriculum-pill">Ecology & Evolution</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                High-scoring diagram labeling, structured biological terminology memorization, enzymatic pathways, genetics punnett squares, and mark scheme keyword alignment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS (4 CARDS) */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Science Pathways (Class 1 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 1 to 5</span>
                            <h3>Primary Science</h3>
                            <p className="grade-desc">Cultivating scientific curiosity and observation skills.</p>
                            <ul>
                                <li><strong>Living Things & Habitats:</strong> Plants, animals, ecosystems, food chains.</li>
                                <li><strong>Materials & States of Matter:</strong> Solids, liquids, gases, reversible changes.</li>
                                <li><strong>Forces, Energy & Light:</strong> Gravity, magnetism, shadows, simple circuits.</li>
                                <li><strong>Earth & Space:</strong> Solar system, day and night cycles, weather patterns.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 6 to 8</span>
                            <h3>Middle School Science</h3>
                            <p className="grade-desc">Developing experimental methodologies and foundational scientific theory.</p>
                            <ul>
                                <li><strong>Physics:</strong> Speed, velocity, pressure, heat transfer, light refraction.</li>
                                <li><strong>Chemistry:</strong> Elements, compounds, mixtures, acids and bases, physical vs chemical.</li>
                                <li><strong>Biology:</strong> Cell structure, human digestive and respiratory systems, photosynthesis.</li>
                                <li><strong>Scientific Inquiry:</strong> Hypothesis formulation, variables, measurement accuracy.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 9 & 10</span>
                            <h3>Secondary Science Boards</h3>
                            <p className="grade-desc">Board certification for CBSE Class 10 and IGCSE Co-ordinated / Separate.</p>
                            <ul>
                                <li><strong>CBSE Science:</strong> Chemical reactions, metals/non-metals, electricity, heredity.</li>
                                <li><strong>IGCSE Sciences (0625/0620/0610):</strong> Extended syllabus, command words.</li>
                                <li><strong>Alternative to Practical (Paper 6 / Practical):</strong> Experimental analysis, graphs.</li>
                                <li><strong>10-Year Past Papers:</strong> Timed exam drills with mark scheme breakdowns.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 11 & 12</span>
                            <h3>Senior Secondary / A-Level / IB</h3>
                            <p className="grade-desc">Advanced pre-med, pre-engineering, and life science preparation.</p>
                            <ul>
                                <li><strong>Physics:</strong> Calculus-based mechanics, electromagnetism, wave-particle duality.</li>
                                <li><strong>Chemistry:</strong> Reaction kinetics, organic reaction mechanisms, spectroscopy.</li>
                                <li><strong>Biology:</strong> Molecular genetics, recombinant DNA, neurobiology, immunology.</li>
                                <li><strong>Internal Assessments & Practicals:</strong> Structured guidance for IB DP & A-Level.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY (CBSE, IGCSE, A-LEVEL, IB) */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Sciences</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE PCB & PCM</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Class 9-10 NCERT Science</span>
                                <span className="curriculum-pill">Class 11-12 Medical/Non-Med</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Comprehensive coverage of NCERT textbooks, exemplar problems, and numerical problem drills aligned with CBSE board step-marking and competitive foundation tracks.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Physics 0625 | Chem 0620</span>
                                <span className="curriculum-pill">Biology 0610 | Combined 0653</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Separate and Co-ordinated science tracks covering Theory (Paper 4), Multiple Choice (Paper 2), and Alternative to Practical (Paper 6) with 10 years of solved past papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">AS & A2 Sciences</span>
                                <span className="curriculum-pill">IB DP Physics/Chem/Bio HL/SL</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Rigorous analytical derivation training, laboratory practical coursework support, and structured rubric alignment for IB Internal Assessments (IA).
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Science Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Physics, Chemistry, and Biology tuition at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which Science subjects do you offer at Nitaq Academy Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide specialized coaching for Physics, Chemistry, and Biology as separate subjects for secondary and senior secondary students (Class 9-12), as well as integrated General Science for primary and middle school grades (Class 1-8).</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer separate tutoring for Physics, Chemistry, and Biology for IGCSE? <ChevronDown size={18} /></summary>
                            <p>Yes. Students can enroll in individual subject modules (Separate Sciences: Physics 0625, Chemistry 0620, Biology 0610) or comprehensive packages for Co-ordinated Sciences (0654) and Combined Science (0653).</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you prepare students for Alternative to Practical (ATP / Paper 6) exams? <ChevronDown size={18} /></summary>
                            <p>We conduct dedicated ATP masterclasses where students analyze experimental setups, identify sources of error, plot and interpret data graphs, evaluate experimental precautions, and write structured lab experiment plans.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the batch sizes for Science tuition classes in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We keep batch sizes strictly limited to 5 to 8 students to guarantee that every student receives dedicated mentor attention and active numerical problem-solving assistance. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Science classes from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online science platform features digital whiteboard problem solving, molecular modeling animations, session recordings, and online worksheet evaluations accessible across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide support for IB Science Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified science faculty assists students with research question framing, methodology planning, data processing, error calculation, and rubric optimization for IB Physics, Chemistry, and Biology IAs.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students struggling with Chemistry stoichiometry and mole concepts? <ChevronDown size={18} /></summary>
                            <p>Our teachers break down stoichiometric calculations into visual step-by-step unit conversion tables, formula triangle frameworks, and graded practice sets moving from basic mole conversions to advanced titration calculations.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What past paper practice is provided for CBSE Class 10 and 12 boards? <ChevronDown size={18} /></summary>
                            <p>We provide full chapter-wise question banks and timed full-length mock examinations based on the last 10 years of CBSE board papers, complete with official step-marking evaluation rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy's Sharjah campus located? <ChevronDown size={18} /></summary>
                            <p>Our campus is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, within easy driving distance of King Faisal Street, Al Khan, and Al Majaz waterfront.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are your Science tutors licensed and experienced with UAE curricula? <ChevronDown size={18} /></summary>
                            <p>Yes. All Nitaq science educators hold Master's degrees in Physics, Chemistry, or Life Sciences, with 5 to 15 years of proven teaching experience across British, IB, and Indian school curricula in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free science diagnostic assessment or demo? <ChevronDown size={18} /></summary>
                            <p>You can book a free diagnostic test or demo session by contacting our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you provide intensive exam crash courses before board sessions? <ChevronDown size={18} /></summary>
                            <p>Yes. Prior to May/June and Oct/Nov board examination sessions, we offer intensive crash courses focusing on high-weightage topics, rapid past paper solving, and exam time management.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Complement your science studies with Nitaq Academy's expert tutoring across core school subjects:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/maths-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Maths Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics coaching from Class 1 to 12.</p>
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
                            Book Free Science Assessment on WhatsApp
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

export default ScienceTuitionSharjah;
