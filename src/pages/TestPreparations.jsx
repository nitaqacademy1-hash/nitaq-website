import { Link } from 'react-router-dom';

const TestPreparations = () => {
    return (
        <main>
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: '#64748b' }}>
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <span>Test Preparation</span>
                        </nav>
                        <h1>Ace Your <span className="text-gradient">Exams</span></h1>
                        <p>
                            Comprehensive preparation and expert guidance to help you achieve your desired scores in international standardized tests.
                        </p>
                    </div>
                </div>
            </section>

            {/* Course Grid Section */}
            <section className="listing-grid-container">
                <div className="container">
                    <div className="course-grid">

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/academic_v2.webp" alt="Academic Excellence" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Academic Excellence</h3>
                                <p>Specialized coaching for international students to excel in their academic curriculum and board exams.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/academic-excellence" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/jee_neet_v2.webp" alt="JEE/NEET" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Foundation for JEE/NEET</h3>
                                <p>Build a strong mathematical and scientific foundation for competitive engineering and medical entrance exams.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/foundation-jee-neet" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/sat_v2.webp" alt="SAT" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>SAT Preparation</h3>
                                <p>Master the Digital SAT with expert guidance, practice tests, and proven score-improvement strategies.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/sat-preparation" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/gmat_gre_v2.webp" alt="GMAT" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>GMAT Preparation</h3>
                                <p>Achieve top scores in the Graduate Management Admission Test for entry into premier global business schools.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/gmat-preparation" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/gmat_gre_v2.webp" alt="GRE" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>GRE Preparation</h3>
                                <p>Comprehensive training for all sections of the Graduate Record Examination for world-class graduate studies.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/gre-preparation" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/kids_robotics_v2.webp" alt="Future Tech" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Future Tech for Kids</h3>
                                <p>Inspiring the next generation with AI, Python, ML, Computer Vision, and Robotics training for young minds.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/ai-robotics-kids" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ background: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#0f172a' }}>Secure Your Future</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Join Sharjah's premier test preparation center and get closer to your academic goals.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary">Start Preparation</Link>
                            <a href="https://wa.me/971545723181" className="btn" style={{ background: '#f1f5f9', color: '#1e293b' }}>Consul an expert</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TestPreparations;
