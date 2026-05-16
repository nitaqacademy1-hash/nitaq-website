import { Link } from 'react-router-dom';
import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
import SEO from '../../components/SEO';

const SATCourseDubai = () => {
    const infoData = {
        "Programs": "Foundation, Comprehensive & Intensive",
        "Duration": "12, 24 & 48 Hours",
        "Format": "Hybrid (Online and Offline)",
        "Focus Areas": "Math and English"
    };


    return (
        <>
            <SEO />
        <CourseLayout
            title="SAT Preparation for Dubai Students — Digital SAT Coaching at NITAQ ACADEMY"
            subtitle="Score 1300+ on the Digital SAT with NITAQ ACADEMY's expert coaching for Dubai Students."
            infoData={infoData}
        >

            {/* ── 4. Hero Intro Paragraph ── */}
            <div className="content-card">
                <div style={{ marginBottom: '20px', padding: '12px 20px', background: '#fff9eb', border: '1px solid #fecaca', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🏆</span>
                    <a 
                        href="https://www.coursetakers.ae/search/courses-in/academic/test-prep/sat-preparation" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#991b1b', fontWeight: 700, textDecoration: 'underline', fontSize: '0.95rem' }}
                    >
                        We are awarded the Best SAT Preparation Course on Coursetakers.ae
                    </a>
                </div>
                <div className="overview-text">
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
                        The SAT (Scholastic Assessment Test) is a standardised exam used by universities in the United States, Canada, and across the globe to evaluate college readiness. The current <strong>Digital SAT</strong> is a computer-adaptive test lasting 2 hours 14 minutes, covering <strong>Reading &amp; Writing</strong> and <strong>Math</strong>. At NITAQ ACADEMY, our SPEA Authorized &amp; UAE Govt Attested coaching programme in <strong>Dubai</strong> prepares high-school students to achieve scores of 1300 and above through small-batch expert coaching, full-length mock tests, and proven test-taking strategies. Classes are held at our Dubai campus and are also available live online across the UAE.
                    </p>
                </div>
            </div>

            {/* ── WhatsApp CTA – Top ── */}
            <div style={{ background: 'linear-gradient(135deg, #1a5e1f 0%, #2e7d32 100%)', borderRadius: '20px', padding: '30px 35px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
                <div>
                    <p style={{ color: 'white', fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>Ready to start your SAT journey?</p>
                    <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}>Speak directly with our SAT counsellor on WhatsApp or call us now.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/971527569908?text=I'm interested in SAT preparation" className="btn" style={{ background: '#25D366', color: 'white', padding: '14px 28px', borderRadius: '50px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.093 1.502 5.817L.048 23.952l6.305-1.407A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.937 0-3.742-.529-5.296-1.448l-.38-.225-3.94.879.946-3.774-.247-.393A9.776 9.776 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
                        WhatsApp Us
                    </a>
                    <a href="tel:+971527569908" className="btn" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', padding: '14px 28px', borderRadius: '50px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.3)' }}>
                        📞 +971 52 756 9908
                    </a>
                </div>
            </div>


            {/* ── SAT Tracks ── */}
            <div className="content-card">
                <h2>Our SAT <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>SAT Foundation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>12 Hours | Basic</p>
                        <ul className="styled-list">
                            <li>Core concept and foundation builds</li>
                            <li>Guided expert practice hours</li>
                            <li>Proven test-taking strategies</li>
                            <li>SAT registration assistance</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>SAT Comprehensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>24 Hours | Complete Coverage</p>
                        <ul className="styled-list">
                            <li>Complete SAT syllabus coverage</li>
                            <li>Extensive unlimited practice hub</li>
                            <li>Full-length mock exam tracking</li>
                            <li>Detailed performance feedback</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>SAT Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>48 Hours | Intensive Training</p>
                        <ul className="styled-list">
                            <li>Deep-dive into every SAT topic</li>
                            <li>Daily timed practice sessions</li>
                            <li>One-on-one doubt clearing</li>
                            <li>12+ full-length mock exams</li>
                        </ul>
                    </div>
                </div>
                <div style={{ textAlign: 'center', marginTop: '35px' }}>
                    <Link to="/enquiry" className="btn btn-primary" style={{ padding: '14px 35px', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600 }}>
                        Book Free Demo Class
                    </Link>
                </div>
            </div>

            {/* ── 6. SAT Syllabus Breakdown ── */}
            <div className="content-card">
                <h2>Digital SAT <span className="text-gradient">Reading &amp; Writing</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Reading &amp; Writing section of the Digital SAT is a single, combined module that tests your ability to comprehend passages, analyse arguments, and apply English language conventions in context. At NITAQ ACADEMY, our Dubai-based trainers break this section into focused skill areas to maximise your score.
                    </p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Craft &amp; Structure</h3>
                    <p style={{ marginBottom: '15px' }}>Understanding vocabulary in context, text structure, purpose identification, and cross-text connections. We drill high-frequency SAT vocabulary and teach elimination techniques that save time on every question.</p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Information &amp; Ideas</h3>
                    <p style={{ marginBottom: '15px' }}>Central idea identification, command of evidence (textual and quantitative), and inference-making. Students practise with reading passages from science, social studies, literature, and history.</p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Standard English Conventions</h3>
                    <p>Grammar rules, sentence boundaries, punctuation, and form-structure-sense questions. Our proprietary grammar workbook covers the 20 most-tested rules that account for over 80% of convention questions.</p>
                </div>
            </div>

            <div className="content-card">
                <h2>Digital SAT <span className="text-gradient">Math</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Math section tests problem-solving and data analysis skills across four content domains. An on-screen Desmos calculator is available for both modules. At Nitaq, we teach students when to use the calculator and when mental math is faster — a critical time-saving strategy that many other institutes overlook.
                    </p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Algebra &amp; Linear Equations</h3>
                    <p style={{ marginBottom: '15px' }}>Linear equations and inequalities, systems of equations, and linear functions — the highest-weighted domain on the Math section. We teach shortcut methods for solving systems that reduce solving time by 40%.</p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Advanced Math</h3>
                    <p style={{ marginBottom: '15px' }}>Quadratic and polynomial functions, exponential equations, and nonlinear function analysis. Students master factoring techniques, vertex form conversions, and function transformations.</p>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-color)', marginBottom: '8px' }}>Problem Solving &amp; Geometry</h3>
                    <p>Ratios, percentages, probability, statistics, area/volume calculations, and trigonometry. We provide a formula reference sheet and teach strategic approaches for data interpretation questions.</p>
                </div>
            </div>

            {/* ── 7. Score Improvement Testimonials ── */}
            <div className="content-card">
                <h2>Student <span className="text-gradient">Success Stories</span></h2>
                <p style={{ color: '#64748b', marginBottom: '25px' }}>Real results from real students at NITAQ ACADEMY Dubai.</p>
                <div className="tracks-grid">
                    <div style={{ background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)', borderRadius: '20px', padding: '30px', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                        <div style={{ marginBottom: '15px', color: '#15803d' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: '#166534', marginBottom: '8px' }}>Riya S.</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 800, color: '#15803d', marginBottom: '5px' }}>1120 → 1490</p>
                        <p style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600, marginBottom: '10px' }}>+370 points in 10 weeks</p>
                        <p style={{ fontSize: '0.85rem', color: '#4a7c59', lineHeight: '1.6' }}>"The mock tests and personalised feedback from my Nitaq trainer helped me identify exactly where I was losing marks. I improved my Reading score by 180 points alone."</p>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', borderRadius: '20px', padding: '30px', textAlign: 'center', border: '1px solid #bfdbfe' }}>
                        <div style={{ marginBottom: '15px', color: '#1d4ed8' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55.47.98.97 1.21C11.47 18.44 12 19 12 19s.53-.56 1.03-.79c.5-.23.97-.66.97-1.21v-2.34"></path><path d="M12 15a6 6 0 0 0 6-6H6a6 6 0 0 0 6 6Z"></path></svg>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: '#1e40af', marginBottom: '8px' }}>Ahmed K.</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 800, color: '#1d4ed8', marginBottom: '5px' }}>1050 → 1410</p>
                        <p style={{ fontSize: '0.9rem', color: '#1e40af', fontWeight: 600, marginBottom: '10px' }}>+360 points in 12 weeks</p>
                        <p style={{ fontSize: '0.85rem', color: '#3b5998', lineHeight: '1.6' }}>"I struggled with the Math section before joining Nitaq. The structured approach and weekly mock tests gave me the consistency I needed. Got into Boston University!"</p>
                    </div>
                    <div style={{ background: 'linear-gradient(135deg, #fefce8, #fef9c3)', borderRadius: '20px', padding: '30px', textAlign: 'center', border: '1px solid #fde68a' }}>
                        <div style={{ marginBottom: '15px', color: '#a16207' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h3 style={{ fontSize: '1.1rem', color: '#854d0e', marginBottom: '8px' }}>Sara M.</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 800, color: '#a16207', marginBottom: '5px' }}>1200 → 1520</p>
                        <p style={{ fontSize: '0.9rem', color: '#854d0e', fontWeight: 600, marginBottom: '10px' }}>+320 points in 8 weeks</p>
                        <p style={{ fontSize: '0.85rem', color: '#78641d', lineHeight: '1.6' }}>"The intensive track was exactly what I needed. Daily sessions with timed drills pushed me past 1500. Nitaq's approach is very different from typical coaching centres."</p>
                    </div>
                </div>
            </div>


            {/* ── Highlights / Why Nitaq ── */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for SAT?</span></h2>
                <ul className="styled-list">
                    <li><strong>Premium Study Material:</strong> access to high-quality, up-to-date resources and digital learning tools aligned with the latest College Board syllabus.</li>
                    <li><strong>24/7 Support:</strong> round-the-clock assistance via WhatsApp to ensure you never get stuck during your preparation journey.</li>
                    <li><strong>Free Doubt Solving:</strong> unlimited and personalised doubt-solving sessions to ensure complete concept mastery before exam day.</li>
                    <li><strong>Trusted Specialists:</strong> learn from experienced trainers who understand the College Board format inside out with 8+ years of SAT coaching.</li>
                    <li><strong>Consistent High Scores:</strong> our students regularly achieve 1400+ results that secure admissions to leading global universities.</li>
                    <li><strong>Small Batch Sizes:</strong> maximum 6–10 students per batch ensuring individual attention and focused coaching.</li>
                </ul>
            </div>

            {/* ── Outcomes & Path ── */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>High school students targeting global universities</li>
                        <li>Transfer students seeking program upgrades</li>
                        <li>Homeschool students needing dual-certified scores</li>
                        <li>Test-takers aiming to improve previous results</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master advanced SAT Math &amp; English components</li>
                        <li>Improve critical reasoning and analytical skills</li>
                        <li>Efficient test-taking &amp; time management</li>
                        <li>Confidence to hit target competitive scores</li>
                    </ul>
                </div>
            </div>

            {/* ── Study Resources ── */}
            <div className="content-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h3 style={{ fontSize: '1.4rem' }}>Study Resources</h3>
                <p style={{ marginBottom: '15px', color: '#475569' }}>Looking for more tips? Read our comprehensive guides on scoring higher.</p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <Link to="/article/sat-coaching-sharjah" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        Read: SAT Coaching for Dubai Students Guide <span>→</span>
                    </Link>
                    <Link to="/article/sat-score-1300-guide" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        Read: How to Score 1300+ <span>→</span>
                    </Link>
                </div>
            </div>
            
            {/* ── 9. FAQ Section ── */}
            <div className="content-card">
                <h2>SAT Preparation <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Digital SAT and how is it different from the old SAT?</summary>
                        <div className="faq-accordion-content">
                            <p>The Digital SAT is the current format of the Scholastic Assessment Test, taken on a laptop using the College Board's Bluebook app. Unlike the paper SAT, it is adaptive — meaning the difficulty of the second module adjusts based on your first module performance. Total test time is 2 hours and 14 minutes.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How long does SAT preparation take at NITAQ ACADEMY for Dubai Students?</summary>
                        <div className="faq-accordion-content">
                            <p>Our SAT preparation course runs for 8 to 12 weeks, with three sessions per week. Each session is approximately 90 minutes, covering Reading &amp; Writing strategies, Math concepts, and timed practice. Students who need a faster turnaround can opt for our intensive 4-week crash course with daily sessions.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What SAT score do I need to get into a US university from the UAE?</summary>
                        <div className="faq-accordion-content">
                            <p>Most US universities accept students with scores between 1200 and 1400. Competitive universities such as NYU, Boston University, and University of Toronto typically expect 1400 or above. Ivy League schools generally require 1500+. Our Dubai-based coaching program targets a minimum improvement of 150–200 points from your baseline score.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Where are the SAT exam centers in the UAE in 2026?</summary>
                        <div className="faq-accordion-content">
                            <p>SAT test centers in the UAE are located in Dubai and Abu Dhabi. Students from Dubai typically travel to Dubai centers to sit the exam. Test dates are announced by the College Board several months in advance, and seats fill quickly — we recommend registering at least 6 to 8 weeks before your preferred date.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Does NITAQ ACADEMY offer online SAT coaching in the UAE?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes. NITAQ ACADEMY offers both in-person SAT coaching at our Dubai campus and live online classes for students across Dubai, Abu Dhabi, Ajman, and the wider UAE. Online sessions are conducted in real time with the same instructor, same study materials, and the same mock test schedule as classroom batches.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How much does an SAT preparation course cost for Dubai Students?</summary>
                        <div className="faq-accordion-content">
                            <p>SAT preparation course fees for Dubai Students typically range from AED 1,800 to AED 4,000 depending on the course duration, batch size, and whether sessions are group or one-on-one. At NITAQ ACADEMY, we offer flexible payment options and group discounts for students enrolling together. Contact us for the current batch schedule and pricing.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Can I take the SAT more than once in the UAE?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, there is no strict limit on how many times you can sit for the SAT. Most students appear two to three times to improve their scores. The College Board's SuperScore feature allows many universities to consider your highest section scores across attempts, so retaking the exam is a smart strategy for UAE students targeting top universities.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Are weekend SAT classes available for Dubai Students?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes. NITAQ ACADEMY offers weekend and evening SAT batches specifically designed for school students who cannot attend weekday sessions. Friday and Saturday morning batches are available throughout the year. We also accommodate students with flexible one-on-one scheduling when group batch timings do not suit their school or activity timetable.</p>
                        </div>
                    </details>
                </div>
            </div>

            {/* ── 11. Related Courses ── */}
            <div className="content-card">
                <h2>You Might <span className="text-gradient">Also Like</span></h2>
                <div className="tracks-grid">
                    <Link to="/ielts-course" style={{ textDecoration: 'none' }}>
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)', cursor: 'pointer', transition: 'transform 0.2s' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>IELTS Preparation</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Comprehensive IELTS coaching for Academic &amp; General Training. Achieve 7+ band score with expert guidance.</p>
                        </div>
                    </Link>
                    <Link to="/gre-preparation" style={{ textDecoration: 'none' }}>
                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)', cursor: 'pointer', transition: 'transform 0.2s' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '8px' }}>GRE Preparation</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Expert GRE coaching for graduate school admissions. Verbal, Quantitative, and Analytical Writing preparation.</p>
                        </div>
                    </Link>
                    <Link to="/spoken-english" style={{ textDecoration: 'none' }}>
                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)', cursor: 'pointer', transition: 'transform 0.2s' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Academic English</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>Build fluency, grammar, and communication skills for academic and professional settings in the UAE.</p>
                        </div>
                    </Link>
                </div>
            </div>

            {/* ── 10. WhatsApp CTA – Bottom ── */}
            <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', borderRadius: '24px', padding: '45px 40px', textAlign: 'center', marginBottom: '40px' }}>
                <h2 style={{ color: 'white', fontSize: '2rem', marginBottom: '12px' }}>Start Your SAT Journey Today</h2>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                    Join hundreds of students who have achieved 1400+ SAT scores with NITAQ ACADEMY Dubai. Speak with our counsellor now.
                </p>
                <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a href="https://wa.me/971527569908?text=I'm interested in SAT preparation" className="btn btn-primary" style={{ padding: '16px 35px', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.093 1.502 5.817L.048 23.952l6.305-1.407A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.937 0-3.742-.529-5.296-1.448l-.38-.225-3.94.879.946-3.774-.247-.393A9.776 9.776 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/></svg>
                        Enrol via WhatsApp
                    </a>
                    <a href="tel:+971527569908" className="btn" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '16px 35px', fontSize: '1.1rem', borderRadius: '50px', fontWeight: 600, border: '1px solid rgba(255,255,255,0.2)' }}>
                        📞 +971 52 756 9908
                    </a>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};
export default SATCourseDubai;
