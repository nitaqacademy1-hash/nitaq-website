import { Link } from 'react-router-dom';

const LanguageTrainings = () => {
    return (
        <main>
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav className="listing-hero-nav">
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <span>Language Trainings</span>
                        </nav>
                        <h1>Master New <span className="text-gradient">Languages</span></h1>
                        <p>
                            Expert-led language programs designed to enhance your communication skills and open new global opportunities.
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
                                <img src="/images/arabic_lang_v2.webp" alt="Spoken Arabic" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Spoken Arabic</h3>
                                <p>Learn to communicate effectively in Arabic with our practical, conversation-focused training levels.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/spoken-arabic" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/english_lang_v2.webp" alt="Spoken English" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Spoken English</h3>
                                <p>Enhance your fluency, pronunciation, and confidence in English for professional and social success.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/spoken-english" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/french_lang_v2.webp" alt="French" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>French Language</h3>
                                <p>From basics to advanced levels, master the language of culture and international relations.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/french" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/german_lang_v2.webp" alt="German" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>German Language</h3>
                                <p>Accelerate your career and education goals with our structured German language certification paths.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/german" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/spanish_lang_v2.webp" alt="Spanish" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Spanish Language</h3>
                                <p>Learn one of the world's most spoken languages with our interactive and engaging curriculum.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/spanish" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/ielts_v2.webp" alt="IELTS" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>IELTS Preparation</h3>
                                <p>Comprehensive training for Academic and General Training modules to achieve your desired band score.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/ielts-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/pte_v2.webp" alt="PTE" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>PTE Academic</h3>
                                <p>Targeted preparation for the Pearson Test of English with expert strategies and extensive practice.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/pte-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/toefl_v2.webp" alt="TOEFL" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>TOEFL iBT</h3>
                                <p>Succeed in your US university admissions with our focused Test of English as a Foreign Language training.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/toefl-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ background: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#0f172a' }}>Begin Your Language Journey</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Join Sharjah's premier language center and gain the confidence to speak to the world.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary">Enroll Now</Link>
                            <a href="https://wa.me/971545723181" className="btn" style={{ background: '#f1f5f9', color: '#1e293b' }}>Ask a Question</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default LanguageTrainings;
