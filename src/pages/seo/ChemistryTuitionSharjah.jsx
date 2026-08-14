import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    FlaskConical, Flame, TestTube, Dna, FileText, Mail
} from 'lucide-react';

const ChemistryTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 8 to 12 (Secondary & High School)",
        "Curricula Supported": "Cambridge IGCSE (0620), Edexcel A-Level, IB DP (HL/SL), CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Stoichiometry, Organic Mechanisms, Ionic Equations & ATP",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Chemistry Tuition in Sharjah"
                subtitle="Specialized Chemistry Coaching for IGCSE (0620), Edexcel A-Level, IB Chemistry (HL/SL) & CBSE Class 11-12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Chemistry Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Chemistry tuition in Sharjah</strong> for Class 8 to Class 12 students. We deliver expert coaching for <strong>Cambridge IGCSE Chemistry (0620)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>International Baccalaureate (IB Chemistry HL/SL)</strong>, and <strong>CBSE Class 11 & 12 Chemistry</strong>. Focus areas include stoichiometric mole calculations, organic reaction mechanisms, ionic balancing, thermochemistry, and Alternative to Practical (ATP Paper 6) experimental analysis, taught in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Molecular World: <span className="text-gradient">Chemistry Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Chemistry connects the physical equations of physics with the cellular complexity of biology. From foundational atomic structures and stoichiometry in middle school to complex organic synthesis mechanisms in <strong>A-Level Chemistry tuition in Sharjah</strong> and chemical equilibrium thermodynamics for <strong>IB Chemistry</strong>, Nitaq Academy provides structured, concept-driven chemical instruction.
                        </p>
                        <p>
                            At our modern learning campus in <strong>Al Majaz 3, Sharjah</strong>, our senior chemistry tutors deconstruct intimidating chemical nomenclature, redox half-reactions, and spectroscopy charts into clear, step-by-step algorithms. We transition students from rote memorizers into analytical, high-scoring young chemists.
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
                                    <th>Specification for Chemistry Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 8, Class 9, Class 10, Class 11, Class 12 (IGCSE, GCSE, O-Level, AS & A2 Level, IB DP, CBSE)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Branches</td>
                                    <td>Physical Chemistry, Inorganic Chemistry, Organic Chemistry, Analytical Chemistry & Biochemistry</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0620), Pearson Edexcel GCSE/IAL Chemistry, Oxford AQA, IB DP Chemistry (SL/HL), CBSE Class 11 & 12 Chemistry</td>
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

                {/* THREE CHEMISTRY BRANCHES GRID */}
                <div className="content-card">
                    <h2>Three Core Branches: <span className="text-gradient">Physical, Inorganic & Organic Chemistry</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <FlaskConical size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Physical Chemistry</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Mole Concept & Stoichiometry</span>
                                <span className="curriculum-pill">Thermodynamics & Enthalpy</span>
                                <span className="curriculum-pill">Chemical Equilibrium (Kc/Kp)</span>
                                <span className="curriculum-pill">Reaction Kinetics & Rates</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master gas laws, titration calculations, Born-Haber cycles, Arrhenius rate equations, electrochemical cell potentials, and Le Chatelier's equilibrium shifts.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Flame size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Inorganic Chemistry</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Periodic Trends & Periodicity</span>
                                <span className="curriculum-pill">Transition Metal Complexes</span>
                                <span className="curriculum-pill">Chemical Bonding & VSEPR</span>
                                <span className="curriculum-pill">Redox & Extraction of Metals</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpack ionization energies, orbital hybridization, ligand substitution reactions, coordination complexes, and metallurgical extraction processes.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <TestTube size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Organic Chemistry</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Reaction Mechanisms (SN1/SN2)</span>
                                <span className="curriculum-pill">Functional Groups & IUPAC</span>
                                <span className="curriculum-pill">Polymers & Esters</span>
                                <span className="curriculum-pill">Spectroscopy (NMR, IR, Mass)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Curly arrow electron flow mechanisms, electrophilic addition, nucleophilic substitution, aromatic benzene reactions, and organic synthesis roadmaps.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Chemistry Pathways (Class 8 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 8 & 9</span>
                            <h3>Foundation Chemistry</h3>
                            <p className="grade-desc">Atoms, elements, molecules, and chemical bonding basics.</p>
                            <ul>
                                <li><strong>States of Matter & Kinetic Theory:</strong> Diffusion, changes of state, heating curves.</li>
                                <li><strong>Atomic Structure:</strong> Protons, neutrons, electrons, isotopes, electronic configuration.</li>
                                <li><strong>Chemical Bonding:</strong> Ionic, covalent, and metallic bonding models.</li>
                                <li><strong>Acids, Bases & Salts:</strong> pH scale, neutralization, indicator color changes.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 10 / IGCSE</span>
                            <h3>Secondary Board Chemistry</h3>
                            <p className="grade-desc">Mastering Cambridge IGCSE (0620) & CBSE Class 10 Science Chemistry.</p>
                            <ul>
                                <li><strong>Stoichiometry & Mole Calculations:</strong> Molar mass, reacting masses, gas volumes, concentrations.</li>
                                <li><strong>Electrochemistry:</strong> Electrolysis of molten/aqueous salts, electroplating, fuel cells.</li>
                                <li><strong>Chemical Energetics & Rates:</strong> Exothermic vs endothermic, activation energy, collision theory.</li>
                                <li><strong>ATP Paper 6 / Practical:</strong> Qualitative analysis of cations, anions, and gases.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 11 / AS-Level</span>
                            <h3>Advanced Physical & Organic</h3>
                            <p className="grade-desc">Transition to rigorous thermodynamic derivations and reaction mechanisms.</p>
                            <ul>
                                <li><strong>Enthalpy Changes:</strong> Hess's law cycles, bond enthalpies, calorimetry.</li>
                                <li><strong>Equilibria & Redox:</strong> Dynamic equilibrium, Haber process, oxidation state calculations.</li>
                                <li><strong>Organic Chemistry:</strong> Alkanes, alkenes, halogenoalkanes, alcohols, optical isomerism.</li>
                                <li><strong>Analytical Techniques:</strong> Infrared spectroscopy, mass spectrometry fragment analysis.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 12 / A2 / IB DP</span>
                            <h3>University-Prep Senior Chemistry</h3>
                            <p className="grade-desc">Pre-med and chemical engineering level organic synthesis and electrochemistry.</p>
                            <ul>
                                <li><strong>Aromatic Chemistry:</strong> Benzene structure, electrophilic substitution, phenols.</li>
                                <li><strong>Carboxylic Acids & Nitrogen Compounds:</strong> Acyl chlorides, amides, amines, amino acids.</li>
                                <li><strong>Transition Elements:</strong> Color origins, crystal field theory, homogeneous catalysis.</li>
                                <li><strong>IB Internal Assessment (IA):</strong> Designing valid titration or kinetics investigations.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Chemistry</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 Chemistry</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">NCERT Textbook & Exemplar</span>
                                <span className="curriculum-pill">Name Reactions & Mechanisms</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Systematic coverage of named organic reactions (Aldol, Cannizzaro, Reimer-Tiemann), coordination compounds, electrochemistry, and previous 10 years' CBSE board papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0620)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Extended Paper 4 (Theory)</span>
                                <span className="curriculum-pill">Paper 2 (MCQ) & Paper 6 (ATP)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Qualitative analysis tables memorization, ionic equation balancing drills, stoichiometric calculation workflows, and mark scheme precision training for A* and Grade 9.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">AS & A2 Chemistry Units</span>
                                <span className="curriculum-pill">IB Chemistry HL/SL & IA Support</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Multi-step organic retrosynthesis, 1H-NMR and 13C-NMR structural elucidation, transition metal splitting derivations, and rubric-optimized IB Internal Assessment (IA) guidance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Chemistry Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Chemistry tutoring, board syllabi, and practical exam prep at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Chemistry tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive Chemistry tutoring for Cambridge IGCSE (0620), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB DP Chemistry SL & HL), CBSE (Class 11 and 12 Chemistry), and British Curriculum schools.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students struggling with mole concepts and stoichiometry? <ChevronDown size={18} /></summary>
                            <p>We use visual formula triangles, unit cancellation dimensional analysis, and step-by-step stoichiometric conversion roadmaps to make mole, molar volume, and titration calculations intuitive and error-free.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you prepare students for IGCSE Chemistry Alternative to Practical (ATP / Paper 6)? <ChevronDown size={18} /></summary>
                            <p>Yes. We conduct dedicated Paper 6 ATP workshops covering qualitative analysis tests for cations (flame tests, NaOH, NH3), anions (halides, sulfates, nitrates), gas identification, experimental rate curves, and temperature measurement precautions.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Chemistry tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our Chemistry batches are strictly limited to 5 to 8 students to enable individual attention, personal mechanism checking, and fast doubt resolution. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Chemistry tuition from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online platform features high-definition digital drawing tablets for writing organic mechanisms, 3D molecular visualization tools, recorded sessions, and digital homework evaluations accessible across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can you assist with IB Chemistry Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified faculty provides structured guidance on research question framing, designing experimental methodologies, processing raw data with propagation of uncertainties, and formatting per official IB DP rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help CBSE students master organic named reactions and conversions? <ChevronDown size={18} /></summary>
                            <p>We provide organic reaction roadmap charts, flashcards for named reactions (such as Williamson Ether Synthesis, Kolbe's Reaction, Sandmeyer Reaction), and weekly conversion mechanism drill worksheets.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Chemistry tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our educators hold Master's and Doctorate degrees in Chemistry or Chemical Engineering, with 6 to 16 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our learning center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from King Faisal Street and Al Wahda Street.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for A-Level Chemistry exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Edexcel and Cambridge A-Level Chemistry past papers with detailed mark-scheme and examiner report dissection.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I book a free Chemistry assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can book a free diagnostic test or demo session by messaging our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are intensive crash courses available before board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of May/June and Oct/Nov board exam sessions, we offer intensive crash courses focusing on high-weightage topics, organic synthesis roadmaps, and rapid past paper solving.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Pair your Chemistry studies with Nitaq Academy's expert tutoring across core STEM subjects:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/physics-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Physics Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Mechanics, Electromagnetism, Waves, and Modern Physics for IGCSE, A-Level & CBSE.</p>
                            </div>
                        </Link>

                        <Link to="/biology-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Biology Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Genetics, Physiology, Cell Biology, and Diagram Mastery for IGCSE, A-Level & IB.</p>
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
                            Book Free Chemistry Assessment on WhatsApp
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

export default ChemistryTuitionSharjah;
