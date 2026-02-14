import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
            {/* Premium Page Hero */}
            <section className="page-hero">
                <div className="poster-graphic" style={{ opacity: 0.4 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(46, 125, 50, 0.1)', border: '1px solid rgba(46, 125, 50, 0.2)', borderRadius: '50px', color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Our Journey
                        </div>
                        <h1>
                            Shaping the Future of <br />
                            <span className="text-gradient">Professional Education</span>
                        </h1>
                        <p>
                            Nitaq Academy – Center for Excellence is Sharjah's premier hub for academic success, professional growth, and future-focused learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Story Section */}
            <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
                <div className="container">
                    <div className="feature-block">
                        <div className="feature-content">
                            <h2 style={{ fontSize: '3rem', marginBottom: '30px', lineHeight: 1.2 }}>
                                Building Skills, <span className="text-gradient">Empowering Lives</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '25px', lineHeight: 1.8 }}>
                                Located in the prestigious Abu Khamseen Tower in Sharjah, Nitaq Academy was founded on the belief that education should be practical, accessible, and life-changing.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '35px', lineHeight: 1.7 }}>
                                From Grades 8 to 12 international curricula to high-demand professional certifications like ACCA and UAE Corporate Tax, we provide a holistic environment where every student is mentored for global success.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                                <div className="about-feature" style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '16px', border: 'none' }}>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Global Impact</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>Partnerships with leading certification bodies worldwide.</p>
                                </div>
                                <div className="about-feature" style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '16px', border: 'none' }}>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Local Expertise</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>Deep understanding of the UAE job market and regulations.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-img">
                            <div style={{ position: 'absolute', top: '20px', right: '-20px', width: '100%', height: '100%', border: '2px solid rgba(46, 125, 50, 0.1)', borderRadius: '30px', zIndex: 0 }}></div>
                            <img
                                src="/images/about-interior.webp"
                                alt="Nitaq Academy Interior"
                                style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', borderRadius: '30px', position: 'relative', zIndex: 1, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Premium Card Style */}
            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 style={{ fontSize: '3rem' }}>Our <span className="text-gradient">North Star</span></h2>
                        <p style={{ color: 'var(--text-gray)', fontSize: '1.1rem' }}>The principles that drive our commitment to excellence.</p>
                    </div>

                    <div className="contact-grid">
                        <div className="content-card" style={{ padding: '60px', textAlign: 'center', background: 'white', marginBottom: 0 }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--gradient-primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 30px' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-gray)', lineHeight: 1.7 }}>
                                To provide high-quality, accessible, and industry-relevant training that empowers individuals to excel in their chosen fields and contribute meaningfully to the global economy.
                            </p>
                        </div>

                        <div className="content-card" style={{ padding: '60px', textAlign: 'center', background: 'white', marginBottom: 0 }}>
                            <div style={{ width: '80px', height: '80px', background: 'var(--gradient-accent)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', margin: '0 auto 30px' }}>
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-gray)', lineHeight: 1.7 }}>
                                To be the leading training institute in the UAE, recognized for our commitment to excellence, innovation, and unwavering student success across all levels of learning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-padding" style={{ background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                        <h2 className="hero-text-h1" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '20px' }}>Why <span className="text-gradient">Nitaq?</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>Experience excellence in education with our modern approach to learning.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                title: "Academic Results",
                                desc: "Structured coaching that helps learners consistently excel across CBSE, GCSE/IGCSE, AS/A Levels, and IB curricula.",
                                icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                            },
                            {
                                title: "Personalized Paths",
                                desc: "Every learner receives customized attention and a curriculum aligned specifically with their career or academic goals.",
                                icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            },
                            {
                                title: "Interactive Teaching",
                                desc: "Complex concepts made simple through engaging, practical, and experiential teaching methods that stick.",
                                icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                            },
                            {
                                title: "Comprehensive Support",
                                desc: "Past papers, exam-style worksheets, and strategic confidence-building sessions for all major international exams.",
                                icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            },
                            {
                                title: "24/7 Assistance",
                                desc: "Dedicated academic assistance and doubt-solving support whenever students need help, even outside class hours.",
                                icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            },
                            {
                                title: "Expert Faculty",
                                desc: "Instructors with certified backgrounds and extensive academic expertise in the UAE, UK, and international education systems.",
                                icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '35px',
                                background: 'white',
                                border: '1px solid #e8e8e8',
                                borderRadius: '20px',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    background: idx % 2 === 0 ? 'rgba(46, 125, 50, 0.1)' : 'rgba(43, 187, 173, 0.1)',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: idx % 2 === 0 ? 'var(--primary-color)' : 'var(--accent-color)',
                                    marginBottom: '25px',
                                    border: `1px solid ${idx % 2 === 0 ? 'rgba(46, 125, 50, 0.2)' : 'rgba(43, 187, 173, 0.2)'}`
                                }}>
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={item.icon} />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-dark)', fontWeight: 700 }}>{item.title}</h3>
                                <p style={{ color: 'var(--text-gray)', lineHeight: 1.6, fontSize: '1rem', margin: 0 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-padding" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div className="testimonial-poster" style={{ background: 'var(--gradient-primary)', borderRadius: '40px', padding: '100px 60px' }}>
                        <div className="poster-graphic" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)' }}></div>
                        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '30px', position: 'relative', zIndex: 1 }}>Ready to join our community?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 50px', position: 'relative', zIndex: 1, lineHeight: 1.6 }}>
                            Take the first step towards academic and professional success today.
                        </p>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-color)', padding: '20px 45px' }}>Book a Free Demo</Link>
                            <Link to="/contact" className="btn btn-secondary" style={{ border: '2px solid white', color: 'white', padding: '20px 45px' }}>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
