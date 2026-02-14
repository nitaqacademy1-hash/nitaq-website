import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['/images/h1.webp', '/images/h2.webp', '/images/h3.webp', '/images/h4.webp'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <main>
            {/* Hero Section */}
            <section className="hero-graphic">
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <h1>Shaping <span className="text-gradient">Future-Ready Minds</span> for a Changing World</h1>
                            <p style={{ fontSize: '1.25rem', color: 'var(--text-gray)', marginBottom: '20px', maxWidth: '500px' }}>
                                Academic excellence and career-ready skills for a confident future.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '40px' }}>
                                Book a free demo now & experience learning that delivers real outcomes.
                            </p>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <a href="#programs" className="btn btn-primary">Explore Courses</a>
                                <Link to="/enquiry" className="btn btn-secondary" style={{ border: '2px solid var(--text-gray)', color: 'var(--text-dark)' }}>Enquiry</Link>
                            </div>
                        </div>
                        <div className="hero-visual">
                            {/* Abstract SVG Blob */}
                            <svg className="blob-shape" width="600" height="600" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                <g transform="translate(300,300)">
                                    <path d="M146.4,-168.6C186.5,-128.9,213.6,-78.6,218.6,-26.3C223.6,26,206.5,80.3,173.6,122.9C140.7,165.5,92,196.4,39.4,209.6C-13.2,222.8,-69.7,218.3,-116.3,189.3C-162.9,160.3,-199.6,106.8,-211.8,47.2C-224,-12.4,-211.7,-78.1,-178.6,-124.8C-145.5,-171.5,-91.6,-199.2,-39.8,-198.8C12,-198.4,63.9,-170,106.3,-208.3" fill="#66BB6A" fillOpacity="0.1" />
                                </g>
                            </svg>

                            <div className="hero-slider">
                                {images.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Student ${index + 1}`}
                                        className={`hero-img-main ${index === currentImageIndex ? 'active' : ''}`}
                                        width="600"
                                        height="600"
                                        fetchPriority={index === 0 ? "high" : "low"}
                                    />
                                ))}
                            </div>

                            {/* Floating Elements */}
                            <div className="floating-card fc-1">
                                <div className="icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Certified</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--text-gray)' }}>Global Recognition</p>
                                </div>
                            </div>

                            <div className="floating-card fc-2">
                                <div className="icon-box" style={{ color: 'var(--accent-color)' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '0.9rem', margin: 0 }}>Practical</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0, color: 'var(--text-gray)' }}>Hands-on Learning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Nitaq Section - Poster Style */}
            <section className="section-padding" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="testimonial-poster" style={{ background: 'var(--bg-dark)', marginTop: 0 }}>
                        <div className="poster-graphic" style={{ background: 'radial-gradient(circle, rgba(102, 187, 106, 0.15) 0%, transparent 70%)' }}></div>

                        <h2 style={{ fontSize: '3.5rem', color: 'white', marginBottom: '25px', position: 'relative', zIndex: 1 }}>
                            Empowering <span className="text-gradient">Professional Excellence</span>
                        </h2>

                        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '900px', margin: '0 auto 40px', position: 'relative', zIndex: 1, lineHeight: 1.6 }}>
                            Nitaq Training Center is Sharjah's premier hub for professional growth. We bridge the gap between ambition and achievement through expert-led, industry-aligned training designed for modern learners.
                        </p>

                        <div style={{ display: 'flex', gap: '60px', justifyContent: 'center', position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
                            <div className="stat-box">
                                <span className="stat-number">40+</span>
                                <span className="stat-label">Programs</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Commitment</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">Expert</span>
                                <span className="stat-label">Instructors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Journey */}
            <section className="section-padding journey-section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Your Journey to Success</h2>
                        <p style={{ color: 'var(--text-gray)' }}>We've designed a seamless path to help you achieve your career goals.</p>
                    </div>

                    <div className="journey-grid">
                        <div className="journey-line"></div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h3>Discover</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Find the perfect course for your career path.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <h3>Learn</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Master skills with expert-led training.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3>Certify</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Earn globally recognized credentials.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>Excel</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Advance your career and increase earnings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', lineHeight: 1 }}>Our Programs</h2>
                            <p style={{ color: 'var(--text-gray)', marginTop: '10px' }}>Designed for every stage of your career.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Card 1 */}
                        <div className="program-graphic-card">
                            <div className="program-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            </div>
                            <h3>Test Preparations</h3>
                            <p>Ace your exams with our comprehensive preparation courses for IELTS, TOEFL, SAT, and more.</p>
                            <Link to="/test-preparations" className="program-link">Explore Courses <span>→</span></Link>
                        </div>

                        {/* Card 2 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'var(--gradient-accent)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3>Professional Certifications</h3>
                            <p>Gain industry-recognized certifications in Finance, IT, Management, and more.</p>
                            <Link to="/professional-certifications" className="program-link">Explore Courses <span>→</span></Link>
                        </div>

                        {/* Card 3 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'linear-gradient(135deg, #FF7043 0%, #F4511E 100%)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3>Language Trainings</h3>
                            <p>Master new languages including English, Arabic, French, German, and Spanish.</p>
                            <Link to="/language-trainings" className="program-link">Explore Courses <span>→</span></Link>
                        </div>

                        {/* Card 4 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'linear-gradient(135deg, #7E57C2 0%, #5E35B1 100%)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Corporate Trainings</h3>
                            <p>Customized training solutions for organizations to upskill their workforce.</p>
                            <Link to="/corporate-trainings" className="program-link">Explore Solutions <span>→</span></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted By */}
            <section className="section-padding">
                <div className="container">
                    <p style={{ textAlign: 'center', color: 'var(--text-gray)', fontWeight: 600, letterSpacing: '1px', marginBottom: '40px' }}>
                        TRUSTED BY LEADING ORGANIZATIONS
                    </p>
                    <div className="trust-grid">
                        <div className="trust-badge">
                            <img src="/images/ielts.webp" alt="IELTS" width="100" height="40" loading="lazy" />
                        </div>
                        <div className="trust-badge">
                            <img src="/images/toefl.webp" alt="TOEFL" width="100" height="40" loading="lazy" />
                        </div>
                        <div className="trust-badge">
                            <img src="/images/pte.webp" alt="PTE" width="100" height="40" loading="lazy" />
                        </div>
                        <div className="trust-badge">
                            <img src="/images/british-council.webp" alt="British Council" width="150" height="40" loading="lazy" />
                        </div>
                        <div className="trust-badge">
                            <img src="/images/spea.webp" alt="SPEA" width="100" height="40" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial Poster */}
            <section className="section-padding" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="testimonial-poster">
                        <div className="poster-graphic"></div>
                        <div className="quote-mark">“</div>
                        <p className="testimonial-text">Nitaq transformed my career. The practical training and expert guidance helped me secure my dream job in Sharjah.</p>
                        <div className="testimonial-author">
                            <img src="/images/testimonial_1.webp" alt="Sarah Ahmed" className="author-img" width="80" height="80" loading="lazy" />
                            <h4>Sarah Ahmed</h4>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Marketing Specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready to Start?</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '40px' }}>
                                Get in touch with our admissions team and take the first step towards your future.
                            </p>

                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Visit Us</h4>
                                <p style={{ color: 'var(--text-gray)' }}>Office 103, Floor F1, Abu Khamseen Tower,<br />Al Majaz 3, Sharjah</p>
                            </div>

                            <div style={{ marginBottom: '30px' }}>
                                <h4 style={{ marginBottom: '10px' }}>Call Us</h4>
                                <p style={{ color: 'var(--text-gray)' }}>+971 54 572 3181</p>
                            </div>
                        </div>

                        <div className="contact-form" style={{ background: 'white', padding: '40px', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}>
                            <form>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '10px', fontFamily: 'inherit' }} />
                                </div>
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '10px', fontFamily: 'inherit' }} />
                                </div>
                                <div style={{ marginBottom: '30px' }}>
                                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                                    <textarea placeholder="I'm interested in..." style={{ width: '100%', padding: '15px', border: '1px solid #eee', borderRadius: '10px', fontFamily: 'inherit', minHeight: '100px' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
