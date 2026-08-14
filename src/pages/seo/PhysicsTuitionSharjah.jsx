import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Atom, Zap, Gauge, Compass, FileText, Mail
} from 'lucide-react';

const PhysicsTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 8 to 12 (Secondary & High School)",
        "Curricula Supported": "Cambridge IGCSE (0625), Edexcel A-Level, IB DP (HL/SL), CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Theory Derivations, Numerical Problem Drills & ATP Paper 6",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Physics Tuition in Sharjah"
                subtitle="Expert Physics Coaching for IGCSE (0625), Edexcel A-Level, IB Physics (HL/SL) & CBSE Class 11-12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Physics Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Physics tuition in Sharjah</strong> for Class 8 through Class 12 students. We offer curriculum-aligned coaching for <strong>Cambridge IGCSE Physics (0625)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>International Baccalaureate (IB Physics HL/SL)</strong>, and <strong>CBSE Class 11 & 12 Physics</strong>. Our specialized program emphasizes mathematical derivations, free-body vector mechanics, circuit analysis, and Alternative to Practical (ATP Paper 6) experimental analysis, taught in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Laws of the Universe: <span className="text-gradient">Physics Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Physics is the fundamental bedrock of engineering, aerospace, robotics, and physical sciences. However, bridging conceptual theory with multi-step mathematical calculations often poses significant challenges for high school students. At Nitaq Academy, our dedicated <strong>Physics tuition in Sharjah</strong> transforms complex abstract formulas into intuitive, step-by-step problem-solving frameworks.
                        </p>
                        <p>
                            From our state-of-the-art learning center in <strong>Al Majaz 3, Sharjah</strong>, our veteran physics educators guide students through Newtonian mechanics, electromagnetic induction, wave superposition, thermodynamics, and quantum phenomena. We ensure learners develop both intuitive conceptual clarity and rigorous exam-hall calculation precision.
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
                                    <th>Specification for Physics Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 8, Class 9, Class 10, Class 11, Class 12 (IGCSE, GCSE, O-Level, AS & A2 Level, IB DP, CBSE)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Domains</td>
                                    <td>Mechanics & Kinematics, Thermal Physics, Waves & Optics, Electricity & Magnetism, Atomic & Nuclear Physics, Space Physics</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0625), Pearson Edexcel GCSE/IAL Physics, Oxford AQA, IB DP Physics (Standard & Higher Level), CBSE Class 11 & 12 Physics</td>
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

                {/* CORE PHYSICS DOMAINS GRID */}
                <div className="content-card">
                    <h2>Core Physics Domains: <span className="text-gradient">Comprehensive Syllabus Mastery</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Gauge size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Mechanics & Dynamics</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Kinematics & Vectors</span>
                                <span className="curriculum-pill">Newton's Laws & Momentum</span>
                                <span className="curriculum-pill">Work, Energy & Power</span>
                                <span className="curriculum-pill">Circular Motion & Gravitation</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Multi-dimensional vector resolution, projectile motion trajectories, conservation of momentum, and rotational equilibrium calculations with step-by-step mathematical rigor.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Zap size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Electricity & Magnetism</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Kirchhoff's Laws</span>
                                <span className="curriculum-pill">Electric & Magnetic Fields</span>
                                <span className="curriculum-pill">Electromagnetic Induction</span>
                                <span className="curriculum-pill">AC Circuits & Capacitance</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpacking circuit theorems, potential divider networks, magnetic flux linkage, Faraday's & Lenz's laws, and transformer efficiency equations.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Atom size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Waves, Quantum & Nuclear</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Superposition & Interference</span>
                                <span className="curriculum-pill">Photoelectric Effect</span>
                                <span className="curriculum-pill">Radioactive Decay & Half-Life</span>
                                <span className="curriculum-pill">Nuclear Fission & Fusion</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Wave-particle duality, photon energy, Planck's constant, atomic energy level transitions, mass-energy equivalence, and nuclear binding energy.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Physics Pathways (Class 8 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 8 & 9</span>
                            <h3>Foundation Physics</h3>
                            <p className="grade-desc">Building strong physical intuition and basic dimensional analysis.</p>
                            <ul>
                                <li><strong>Units & Measurements:</strong> SI units, vernier calipers, micrometer screw gauge.</li>
                                <li><strong>Forces & Motion:</strong> Speed, velocity, acceleration graphs, scalar vs vector.</li>
                                <li><strong>Pressure & Density:</strong> Atmospheric pressure, hydraulic systems, Archimedes principle.</li>
                                <li><strong>Thermal Energy:</strong> Conduction, convection, radiation, states of matter.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 10 / IGCSE</span>
                            <h3>Secondary Board Physics</h3>
                            <p className="grade-desc">Mastering Cambridge IGCSE (0625) & CBSE Class 10 Science Physics.</p>
                            <ul>
                                <li><strong>Light & Optics:</strong> Reflection, refraction, Snell's law, total internal reflection, lenses.</li>
                                <li><strong>Current Electricity:</strong> Ohm's law, series/parallel combinations, electrical power.</li>
                                <li><strong>Electromagnetism:</strong> Motor effect, relays, generators, transformers.</li>
                                <li><strong>ATP Paper 6 / Practical:</strong> Experimental error, gradient calculation, precautions.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 11 / AS-Level</span>
                            <h3>Advanced Mechanics & Waves</h3>
                            <p className="grade-desc">Rigorous transition to pre-engineering mechanics and field theory.</p>
                            <ul>
                                <li><strong>Kinematics & Dynamics:</strong> Projectile equations, inclined planes, viscous drag.</li>
                                <li><strong>Wave Optics:</strong> Diffraction gratings, Young's double slit, stationary waves.</li>
                                <li><strong>Materials Science:</strong> Stress, strain, Young's modulus, Hooke's law.</li>
                                <li><strong>Particle Physics:</strong> Quarks, leptons, hadrons, conservation laws.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 12 / A2 / IB DP</span>
                            <h3>University-Prep Senior Physics</h3>
                            <p className="grade-desc">Calculus-based electrodynamics, thermodynamics, and quantum physics.</p>
                            <ul>
                                <li><strong>Gravitational & Electric Fields:</strong> Point mass potentials, Coulomb's law.</li>
                                <li><strong>Capacitors & Magnetic Fields:</strong> Exponential discharge, Hall effect.</li>
                                <li><strong>Nuclear & Medical Physics:</strong> PET scanning, X-ray attenuation, ultrasound.</li>
                                <li><strong>IB Internal Assessment (IA):</strong> Research question formulation and error analysis.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Physics</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 Physics</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">NCERT & Exemplar Problems</span>
                                <span className="curriculum-pill">Derivations & Numerical Drills</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Exhaustive practice of NCERT chapter derivations, numerical problem sets from HC Verma, assertion-reasoning questions, and 10-year CBSE board question papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0625)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Extended Paper 4 (Theory)</span>
                                <span className="curriculum-pill">Paper 2 (MCQ) & Paper 6 (ATP)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Targeted command-word mastery ("State", "Explain", "Calculate"), mark scheme keyword alignment, and comprehensive dissection of past papers targeting A* and Grade 9.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">AS/A2 Pure & Applied Physics</span>
                                <span className="curriculum-pill">IB Physics HL/SL & IA Support</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Calculus-integrated theoretical proofs, structured lab practical coursework guidance, and rubric optimization for IB Physics Internal Assessments (IA).
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Physics Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Physics coaching, exam boards, and lab preparation at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Physics tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide specialized Physics tuition for Cambridge IGCSE (0625), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB DP Physics SL & HL), CBSE (Class 11 and 12 Physics), and the British National Curriculum.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students solve multi-step numerical Physics problems? <ChevronDown size={18} /></summary>
                            <p>We teach a structured 4-step problem-solving framework: (1) extracting given variables with correct SI units, (2) drawing clear free-body or circuit diagrams, (3) identifying fundamental governing equations, and (4) performing algebraic rearrangement before numerical substitution.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you prepare students for IGCSE Alternative to Practical (ATP / Paper 6) exams? <ChevronDown size={18} /></summary>
                            <p>Yes. We conduct dedicated Paper 6 ATP workshops covering scale reading, circuit fault-finding, graph plotting with best-fit lines, gradient calculation, identifying experimental variables, and writing experimental improvement precautions.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What is the average batch size for physics classes at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>We maintain micro-batches of 5 to 8 students to ensure individualized attention, regular derivation checking, and interactive numerical solving. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Physics tuition classes from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live online platform includes HD interactive whiteboards for real-time mathematical derivations, digital circuit simulation software, recorded lectures for revision, and digital assignment tracking across Dubai, Abu Dhabi, and Sharjah.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can you assist with IB Physics Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified physics mentors assist students with formulating high-scoring research questions, designing experimental methodologies, processing raw data with propagation of uncertainties, and formatting per official IB DP rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help CBSE Class 12 students master theoretical derivations? <ChevronDown size={18} /></summary>
                            <p>We provide exclusive derivation booklets covering all mandatory CBSE physics derivations (such as Gauss's Law, Biot-Savart Law, Lens Maker's Formula, and Wave Optics interference) along with weekly written derivation tests.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Physics teachers hold? <ChevronDown size={18} /></summary>
                            <p>Our physics faculty hold Master's degrees in Physics or Mechanical/Electrical Engineering, with 6 to 15 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our campus is situated at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, within easy reach of King Faisal Street and Buhaira Corniche.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for A-Level Physics exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Edexcel and Cambridge A-Level Physics past papers (Unit 1, 2, 4, 5 and Papers 1-5) with detailed mark-scheme and examiner report analysis.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free physics assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can schedule a free diagnostic assessment or demo session by contacting our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are doubt-clearing sessions provided before school term exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of school midterms, mock examinations, and final board sessions, we organize intensive weekend numerical bootcamps and 1-on-1 doubt-clearing clinics at no extra cost.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Strengthen your complete STEM & academic preparation with Nitaq Academy's specialized subject tutoring:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/maths-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Maths Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Primary, Secondary, IGCSE, A-Level, IB & CBSE Mathematics coaching from Class 1 to 12.</p>
                            </div>
                        </Link>

                        <Link to="/chemistry-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Chemistry Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Stoichiometry, Organic, Inorganic, and Physical Chemistry for IGCSE, A-Level & CBSE.</p>
                            </div>
                        </Link>

                        <Link to="/biology-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Biology Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Genetics, Physiology, Cell Biology, and Diagram Mastery for IGCSE, A-Level & IB.</p>
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
                            Book Free Physics Assessment on WhatsApp
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

export default PhysicsTuitionSharjah;
