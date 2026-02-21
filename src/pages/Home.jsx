import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

const Home = () => {
    const excellenceSlides = [
        {
            title: <>Empowering <span className="text-gradient">Professional Excellence</span></>,
            subtitle: "Sharjah's premier hub for growth. We bridge the gap between ambition and achievement through expert-led, industry-aligned training."
        },
        {
            title: <>Master <span className="text-gradient">Future-Ready Skills</span></>,
            subtitle: "Stay ahead of the curve with our cutting-edge curriculum. From AI to Finance, we provide the tools you need to succeed in a digital economy."
        },
        {
            title: <>Global <span className="text-gradient">Recognition & Success</span></>,
            subtitle: "Join thousands of successful alumni. Our certifications are recognized by leading employers worldwide, opening doors to global opportunities."
        }
    ];

    const [currentExcellenceSlide, setCurrentExcellenceSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentExcellenceSlide((prev) => (prev + 1) % excellenceSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [excellenceSlides.length]);

    const heroImages = [
        '/images/hero-professional.webp',
        '/images/h1.webp',
        '/images/trainer1.webp'
    ];

    const [currentHeroImage, setCurrentHeroImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Slower cycle: 5 seconds
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <main>
            {/* Hero Section */}
            <section className="hero-graphic home-hero">
                <div className="container">
                    <div className="hero-content home-hero-content">
                        <div className="hero-text home-hero-text">
                            <span className="home-hero-kicker">NITAQ TRAINING INSTITUTE.</span>
                            <h1>
                                Empowering <span className="text-gradient">Future-Ready</span> Minds
                            </h1>
                            <p>
                                Sharjah's premier hub for professional growth, bridging the gap between ambition and achievement through expert-led training.
                            </p>
                            <div className="home-hero-actions">
                                <a href="#programs" className="btn btn-primary">Explore Courses</a>
                                <Link to="/enquiry" className="btn home-hero-btn-secondary">Book Free Demo</Link>
                            </div>
                        </div>

                        <div className="home-hero-visual">
                            <div className="home-hero-glow"></div>
                            <div className="home-hero-card">
                                {heroImages.map((img, index) => (
                                    <img
                                        key={index}
                                        src={img}
                                        alt={`Nitaq professional training hero ${index + 1}`}
                                        className={`home-hero-image ${index === currentHeroImage ? 'active' : ''}`}
                                        width="640"
                                        height="760"
                                        loading={index === 0 ? "eager" : "lazy"}
                                        style={{
                                            position: index === 0 ? 'relative' : 'absolute',
                                            top: 0,
                                            left: 0,
                                            opacity: index === currentHeroImage ? 1 : 0,
                                            transition: 'opacity 2s ease-in-out', // Much slower transition
                                            zIndex: index === currentHeroImage ? 2 : 1,
                                            pointerEvents: index === currentHeroImage ? 'auto' : 'none'
                                        }}
                                    />
                                ))}
                                <div className="home-hero-chip chip-top">Live mentor sessions</div>
                                <div className="home-hero-chip chip-bottom">Placement-oriented tracks</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Nitaq Section - Poster Style */}
            <section className="section-padding" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="testimonial-poster professional-excellence-section">
                        <div className="poster-graphic excellence-graphic"></div>

                        <div className="excellence-slider">
                            {excellenceSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`excellence-slide ${index === currentExcellenceSlide ? 'active' : ''}`}
                                >
                                    <h2 className="poster-title">{slide.title}</h2>
                                    <p className="poster-subtitle">{slide.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        <div className="poster-stats">
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
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
