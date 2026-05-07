import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
    return (
        <main>
            <SEO />
            {/* Premium Page Hero */}
            <section className="page-hero">
                <div className="poster-graphic" style={{ opacity: 0.4 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ display: 'inline-block', padding: '8px 20px', background: 'rgba(46, 125, 50, 0.1)', border: '1px solid rgba(46, 125, 50, 0.2)', borderRadius: '50px', color: 'var(--primary-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '25px', textTransform: 'uppercase', letterSpacing: '2px' }}>
                            Our Journey
                        </div>
                        <h1>
                            About <span className="text-gradient">NITAQ ACADEMY</span>
                        </h1>
                        <p>
                            Empowering students and professionals in Sharjah with world-class education, career-focused training, and globally recognized certifications.
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
                                Building Skills, <span className="text-gradient">Empowering Outcomes</span>
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', marginBottom: '25px', lineHeight: 1.8 }}>
                                <strong>NITAQ ACADEMY</strong> is a premier training institute in Sharjah for professional and academic excellence. We are dedicated to delivering job-ready skills and university preparation that helps students and professionals excel globally. 
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '35px', lineHeight: 1.7 }}>
                                Registered as <strong>Nitaq Supportive Education Services LLC</strong>, Sharjah, UAE, we specialize in high-impact programs including SAT score improvement, IELTS band score training, and industry-recognized certifications like ACCA.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
                                <div className="about-feature" style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '16px', border: 'none' }}>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Global Impact</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>
                                        Our curriculum follows international standards through partnerships with global bodies, ensuring your certifications open doors to universities and employers worldwide.
                                    </p>
                                </div>
                                <div className="about-feature" style={{ padding: '20px', background: 'var(--bg-light)', borderRadius: '16px', border: 'none' }}>
                                    <h4 style={{ color: 'var(--primary-color)', marginBottom: '8px' }}>Local Expertise</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', margin: 0 }}>
                                        As a homegrown expert in the UAE education sector, we tailor our training to meet the specific regulatory and commercial requirements of the local job market.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-img">
                            <div style={{ position: 'absolute', top: '20px', right: '-20px', width: '100%', height: '100%', border: '2px solid rgba(46, 125, 50, 0.1)', borderRadius: '30px', zIndex: 0 }}></div>
                            <img
                                src="/images/h1.webp"
                                alt="Our Learning Environment"
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
                        <h2 className="hero-text-h1" style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '20px' }}>Why <span className="text-gradient">NITAQ ACADEMY?</span></h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-gray)', maxWidth: '700px', margin: '0 auto' }}>Experience excellence in education with our modern approach to learning.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {[
                            {
                                title: "Proven SAT & IELTS Success",
                                desc: "Focused coaching that helps students achieve significant score improvements and target band scores for global university admissions.",
                                icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
                            },
                            {
                                title: "Industry-Relevant Skills",
                                desc: "Practical training in professional courses like ACCA and UAE Corporate Tax designed to make you job-ready for the competitive UAE market.",
                                icon: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            },
                            {
                                title: "Expert-Led Faculty",
                                desc: "Learn from instructors with certified backgrounds and deep expertise in international curricula and professional certifications.",
                                icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                            },
                            {
                                title: "Modern Learning Environment",
                                desc: "Our Sharjah center provides a collaborative, tech-enabled space that fosters concentration and inspires academic excellence.",
                                icon: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                            },
                            {
                                title: "Personalized Mentorship",
                                desc: "Every learner receives individual attention and customized study plans to ensure they reach their full potential and career goals.",
                                icon: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                            },
                            {
                                title: "Career & Academic Support",
                                desc: "Beyond teaching, we offer comprehensive exam-readiness support, performance tracking, and strategic advice for future growth.",
                                icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
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
                        <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '30px', position: 'relative', zIndex: 1 }}>Start Your Learning Journey with NITAQ ACADEMY Today</h2>
                        <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto 50px', position: 'relative', zIndex: 1, lineHeight: 1.6 }}>
                            Unlock your full potential with Sharjah's leading training institute for academic and professional success.
                        </p>
                        <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary" style={{ background: 'white', color: 'var(--primary-color)', padding: '20px 45px' }}>Enroll Now</Link>
                            <Link to="/contact" className="btn btn-secondary" style={{ border: '2px solid white', color: 'white', padding: '20px 45px' }}>Speak with Advisor</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
