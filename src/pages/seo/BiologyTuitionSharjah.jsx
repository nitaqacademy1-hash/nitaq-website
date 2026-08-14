import React from 'react';
import { Link } from '../../i18n/Link';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { 
    CheckCircle, Award, BookOpen, Users, MapPin, Phone, 
    Calendar, Clock, ShieldCheck, ArrowRight, Star, 
    Target, TrendingUp, Sparkles, HelpCircle, ChevronDown, 
    Dna, HeartPulse, Microscope, Leaf, FileText, Mail
} from 'lucide-react';

const BiologyTuitionSharjah = () => {
    const infoData = {
        "Grades Covered": "Class 8 to 12 (Secondary & High School)",
        "Curricula Supported": "Cambridge IGCSE (0610), Edexcel A-Level, IB DP (HL/SL), CBSE",
        "Batch Structure": "Micro-Batches (5-8 Students) & 1-on-1 Dedicated Tutoring",
        "Delivery Mode": "In-Person (Al Majaz 3, Sharjah) & Live Online UAE",
        "Exam Focus": "Genetics, Physiology, Diagram Labeling & Mark-Scheme Keywords",
        "Licensing": "SPEA Authorized (Sharjah Private Education Authority)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Biology Tuition in Sharjah"
                subtitle="Expert Biology Coaching for IGCSE (0610), Edexcel A-Level, IB Biology (HL/SL) & CBSE Class 11-12 in Al Majaz 3, Sharjah & Online UAE."
                infoData={infoData}
            >
                {/* QUICK ANSWER / AI DISCOVERABILITY HIGHLIGHT */}
                <section aria-labelledby="quick-answer" className="subject-quick-answer">
                    <h2 id="quick-answer" className="subject-quick-answer-title">
                        <CheckCircle size={22} color="#2E7D32" /> Quick Answer: Biology Tuition at Nitaq Academy Sharjah
                    </h2>
                    <p>
                        Nitaq Academy provides SPEA-authorized <strong>Biology tuition in Sharjah</strong> for Class 8 to Class 12 students. We deliver specialized coaching for <strong>Cambridge IGCSE Biology (0610)</strong>, <strong>Pearson Edexcel International A-Levels</strong>, <strong>International Baccalaureate (IB Biology HL/SL)</strong>, and <strong>CBSE Class 11 & 12 Biology (PCB / NEET Foundation)</strong>. Focus areas include molecular genetics, recombinant DNA technology, human physiology, cellular biochemistry, ecological dynamics, and Alternative to Practical (ATP Paper 6) experimental analysis, taught in micro-batches of 5 to 8 students and 1-on-1 private sessions at Abu Khamseen Tower, Al Majaz 3, Sharjah, as well as live interactive online classes across the UAE.
                    </p>
                </section>

                {/* PROGRAM OVERVIEW CARD */}
                <div className="content-card">
                    <h2>Master the Living World: <span className="text-gradient">Biology Coaching in Sharjah</span></h2>
                    <div className="overview-text">
                        <p className="lead-text">
                            Biology is the cornerstone discipline for future medical doctors, geneticists, biotechnologists, and environmental scientists. However, mastering extensive anatomical terminology, biochemical enzymatic pathways, and precise mark-scheme keywords requires structured, active learning. At Nitaq Academy, our dedicated <strong>Biology tuition in Sharjah</strong> transforms dense textbook chapters into intuitive visual diagrams and high-scoring exam answers.
                        </p>
                        <p>
                            From our modern campus in <strong>Al Majaz 3, Sharjah</strong>, our medical and life-science educators train students to analyze genetics Punnett squares, dissect physiological regulation loops, and master 100% accurate biological diagram labeling.
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
                                    <th>Specification for Biology Tuition</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="spec-label">Grades Covered</td>
                                    <td>Class 8, Class 9, Class 10, Class 11, Class 12 (IGCSE, GCSE, O-Level, AS & A2 Level, IB DP, CBSE)</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Core Modules</td>
                                    <td>Cell Biology & Microscopy, Human Physiology, Molecular Genetics & Biotech, Plant Transport & Photosynthesis, Ecology & Evolution</td>
                                </tr>
                                <tr>
                                    <td className="spec-label">Curricula Supported</td>
                                    <td>Cambridge IGCSE (0610), Pearson Edexcel GCSE/IAL Biology, Oxford AQA, IB DP Biology (SL/HL), CBSE Class 11 & 12 Biology (NEET Foundation)</td>
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

                {/* THREE BIOLOGY PILLARS GRID */}
                <div className="content-card">
                    <h2>Core Biology Domains: <span className="text-gradient">Comprehensive Syllabus Mastery</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Dna size={24} color="#7e22ce" />
                                <h3 style={{ color: '#7e22ce', margin: 0 }}>Genetics & Biotechnology</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">DNA Replication & Translation</span>
                                <span className="curriculum-pill">Mendelian Genetics</span>
                                <span className="curriculum-pill">CRISPR & Genetic Engineering</span>
                                <span className="curriculum-pill">Pedigree Charts</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Master protein synthesis, monohybrid/dihybrid genetic crosses, recombinant plasmids, PCR amplification, and gel electrophoresis analysis.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #0284c7' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <HeartPulse size={24} color="#0284c7" />
                                <h3 style={{ color: '#0284c7', margin: 0 }}>Human Physiology</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Cardiovascular System</span>
                                <span className="curriculum-pill">Neurotransmission</span>
                                <span className="curriculum-pill">Endocrine Hormones</span>
                                <span className="curriculum-pill">Immunology & Vaccines</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Deconstruct cardiac cycle pressure graphs, synaptic transmission mechanisms, kidney nephron osmoregulation, and antibody-antigen immune responses.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #2E7D32' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Leaf size={24} color="#2E7D32" />
                                <h3 style={{ color: '#2E7D32', margin: 0 }}>Plant Biology & Ecology</h3>
                            </div>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Light & Dark Reactions</span>
                                <span className="curriculum-pill">Xylem & Phloem Transport</span>
                                <span className="curriculum-pill">Carbon & Nitrogen Cycles</span>
                                <span className="curriculum-pill">Biodiversity Conservation</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Unpack Calvin cycle energetics, transpiration pull mechanisms, pressure-flow translocation, trophic efficiency pyramids, and ecological succession.
                            </p>
                        </div>
                    </div>
                </div>

                {/* GRADE-WISE ACADEMIC PATHWAYS */}
                <div className="content-card">
                    <h2>Grade-Wise <span className="text-gradient">Biology Pathways (Class 8 to 12)</span></h2>
                    <div className="grade-grid">
                        <div className="grade-card">
                            <span className="grade-badge primary">Class 8 & 9</span>
                            <h3>Foundation Biology</h3>
                            <p className="grade-desc">Cells, tissues, classification, and basic organ systems.</p>
                            <ul>
                                <li><strong>Cell Structure & Function:</strong> Plant vs animal cells, organelles, magnification.</li>
                                <li><strong>Movement in and out of Cells:</strong> Diffusion, osmosis, active transport.</li>
                                <li><strong>Biological Molecules:</strong> Carbohydrates, proteins, lipids, food tests.</li>
                                <li><strong>Classification of Organisms:</strong> Binomial system, dichotomous keys.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge accent">Class 10 / IGCSE</span>
                            <h3>Secondary Board Biology</h3>
                            <p className="grade-desc">Mastering Cambridge IGCSE (0610) & CBSE Class 10 Science Biology.</p>
                            <ul>
                                <li><strong>Enzymes & Digestion:</strong> Lock and key hypothesis, denaturing, alimentary canal.</li>
                                <li><strong>Gas Exchange & Respiration:</strong> Alveoli adaptations, aerobic vs anaerobic.</li>
                                <li><strong>Coordination & Response:</strong> Reflex arcs, eye accommodation, homeostasis.</li>
                                <li><strong>ATP Paper 6 / Practical:</strong> Food tests, enzyme rate experiments, biological drawings.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge purple">Class 11 / AS-Level</span>
                            <h3>Advanced Cell Biology & Physiology</h3>
                            <p className="grade-desc">Transition to biochemistry, immunology, and cardiovascular regulation.</p>
                            <ul>
                                <li><strong>Biological Macromolecules:</strong> Phospholipids, tertiary protein structures.</li>
                                <li><strong>Mitosis & Cell Cycle:</strong> Chromosome behavior, cancer development.</li>
                                <li><strong>Infectious Disease:</strong> Malaria, tuberculosis, HIV, antibiotics resistance.</li>
                                <li><strong>Transport in Mammals:</strong> Hemoglobin dissociation curves, Bohr effect.</li>
                            </ul>
                        </div>

                        <div className="grade-card">
                            <span className="grade-badge amber">Class 12 / A2 / IB DP</span>
                            <h3>University-Prep Senior Biology</h3>
                            <p className="grade-desc">Pre-medical level molecular genetics, neuroscience, and evolution.</p>
                            <ul>
                                <li><strong>Respiration & Photosynthesis:</strong> Glycolysis, Krebs cycle, chemiosmosis.</li>
                                <li><strong>Gene Technology:</strong> Gene cloning, DNA sequencing, gel electrophoresis.</li>
                                <li><strong>Control & Communication:</strong> Action potentials, sliding filament muscle theory.</li>
                                <li><strong>IB Internal Assessment (IA):</strong> Rigorous experimental design and data processing.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CURRICULUM MASTERY TRACKS */}
                <div className="content-card">
                    <h2>Curriculum Mastery: <span className="text-gradient">CBSE, IGCSE, A-Level & IB Biology</span></h2>
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>CBSE Class 11 & 12 (NEET)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">NCERT Line-by-Line Mastery</span>
                                <span className="curriculum-pill">Diagrams & Medical Terminology</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Exhaustive line-by-line NCERT dissection, assertion-reasoning questions, high-scoring diagram labeling drills, and previous 10 years' CBSE board papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>Cambridge IGCSE (0610)</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">Extended Paper 4 (Theory)</span>
                                <span className="curriculum-pill">Paper 2 (MCQ) & Paper 6 (ATP)</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Keyword-matching mark scheme training, biological drawing rules (sharp continuous lines, no shading, ruled labels), and 10 years of solved past papers.
                            </p>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid #7e22ce' }}>
                            <h3 style={{ color: '#7e22ce', marginBottom: '8px' }}>Edexcel A-Level & IB DP</h3>
                            <div className="curriculum-pill-group">
                                <span className="curriculum-pill">AS & A2 Biological Systems</span>
                                <span className="curriculum-pill">IB Biology HL/SL & IA Support</span>
                            </div>
                            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: '1.6' }}>
                                Statistical significance analysis (t-tests, chi-squared, Simpson's index), bioethics evaluation, and rubric optimization for IB Biology Internal Assessments (IA).
                            </p>
                        </div>
                    </div>
                </div>

                {/* 12 FREQUENTLY ASKED QUESTIONS */}
                <div className="content-card">
                    <h2>Frequently Asked Questions: <span className="text-gradient">Biology Tuition Sharjah</span></h2>
                    <p style={{ color: '#475569', marginBottom: '20px' }}>
                        Answers to common questions regarding Biology tutoring, medical foundation, and practical exams at Nitaq Academy:
                    </p>

                    <div className="faq-card-group">
                        <details className="faq-card-item">
                            <summary>Which curriculums do you cover for Biology tuition in Sharjah? <ChevronDown size={18} /></summary>
                            <p>We provide comprehensive Biology tutoring for Cambridge IGCSE (0610), Pearson Edexcel GCSE and International A-Levels, International Baccalaureate (IB DP Biology SL & HL), CBSE (Class 11 and 12 Biology / PCB), and British Curriculum schools.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help students memorize complex biological terminology and cycles? <ChevronDown size={18} /></summary>
                            <p>We use root-word etymology frameworks, interactive biochemical flowcharts, mnemonic memory palaces, and regular active-recall quizzes rather than passive textbook reading.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you prepare students for IGCSE Biology Alternative to Practical (ATP / Paper 6)? <ChevronDown size={18} /></summary>
                            <p>Yes. We conduct dedicated Paper 6 ATP workshops covering food test protocols (Benedict's, Iodine, Biuret, Ethanol emulsion), biological drawing rules, magnification calculations, designing controlled experiments, and identifying experimental error sources.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What are the class sizes for Biology tuition at Nitaq Academy? <ChevronDown size={18} /></summary>
                            <p>Our Biology batches are strictly limited to 5 to 8 students to enable individualized attention, personal diagram checking, and fast doubt resolution. 1-on-1 private tuition is also available.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can students take online Biology tuition from Dubai or other Emirates? <ChevronDown size={18} /></summary>
                            <p>Yes. Our live interactive online platform features high-definition digital microscope simulations, 3D anatomical models, recorded lectures for review, and digital assignment evaluations accessible across the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Can you assist with IB Biology Internal Assessments (IA)? <ChevronDown size={18} /></summary>
                            <p>Yes. Our IB certified faculty provides structured guidance on research question framing, designing ethical biological experiments, applying statistical tests (t-test, ANOVA, chi-square), and formatting per official IB DP rubrics.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How do you help CBSE Class 12 students prepare for board exams and medical foundation? <ChevronDown size={18} /></summary>
                            <p>We provide line-by-line NCERT question banks, genetics pedigree chart workshops, diagram practice booklets, and 10 years of solved CBSE board papers with official step-marking criteria.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>What qualifications do your Biology tutors hold? <ChevronDown size={18} /></summary>
                            <p>Our educators hold Master's and Doctorate degrees in Biology, Genetics, Biotechnology, or MBBS/Medical Sciences, with 6 to 15 years of proven international teaching experience in the UAE.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Where is Nitaq Academy located in Sharjah for in-person classes? <ChevronDown size={18} /></summary>
                            <p>Our learning center is located at Abu Khamseen Tower, Office F103, Floor F1, Al Majaz 3, Sharjah, UAE, easily accessible from King Faisal Street and Al Majaz Waterfront.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Do you offer past paper practice for A-Level Biology exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Students solve the last 10 years of official Edexcel and Cambridge A-Level Biology past papers with detailed mark-scheme keyword and examiner report dissection.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>How can I schedule a free Biology assessment or demo class? <ChevronDown size={18} /></summary>
                            <p>You can book a free diagnostic test or demo session by messaging our admissions team on WhatsApp at +971 52 756 9908 or calling +971 6 579 8313.</p>
                        </details>

                        <details className="faq-card-item">
                            <summary>Are intensive crash courses available before board exams? <ChevronDown size={18} /></summary>
                            <p>Yes. Ahead of May/June and Oct/Nov board exam sessions, we offer intensive crash courses focusing on high-weightage topics (Genetics, Physiology, Biotechnology), rapid past paper solving, and exam time management.</p>
                        </details>
                    </div>
                </div>

                {/* SIBLING SUBJECT DISCOVERY GRID */}
                <div className="content-card">
                    <h2>Explore Related <span className="text-gradient">Academic Support Programs</span></h2>
                    <p style={{ color: '#475569' }}>
                        Complement your Biology studies with Nitaq Academy's expert tutoring across core STEM subjects:
                    </p>

                    <div className="subject-discovery-grid">
                        <Link to="/chemistry-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Chemistry Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Stoichiometry, Organic, Inorganic, and Physical Chemistry for IGCSE, A-Level & CBSE.</p>
                            </div>
                        </Link>

                        <Link to="/physics-tuition-sharjah" className="subject-discovery-card">
                            <div>
                                <h4>Physics Tuition <ArrowRight size={18} color="#2E7D32" /></h4>
                                <p>Mechanics, Electromagnetism, Waves, and Modern Physics for IGCSE, A-Level & CBSE.</p>
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
                            Book Free Biology Assessment on WhatsApp
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

export default BiologyTuitionSharjah;
