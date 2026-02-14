import { Link } from 'react-router-dom';

const CourseLayout = ({ title, subtitle, infoData, children }) => {
    return (
        <main>
            {/* Page Hero */}
            <section className="course-hero">
                {/* Decorative background elements */}
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(46, 125, 50, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-150px', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(43, 187, 173, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                <div className="container">
                    <div className="course-hero-wrapper">
                        <div className="course-hero-text">
                            <nav className="course-hero-nav" style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-gray)' }}>
                                <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                                <span style={{ marginLeft: '8px' }}>{title.split(' - ')[0]}</span>
                            </nav>
                            <h1>
                                {title}
                            </h1>
                            <p>
                                {subtitle}
                            </p>

                            <div className="course-hero-actions">
                                <a href="https://wa.me/971545723181" className="btn btn-primary">Enroll Today</a>
                                <a href="tel:+971545723181" className="btn" style={{ background: '#f0f0f0', color: 'var(--text-dark)' }}>Speak to Advisor</a>
                            </div>
                        </div>

                        {infoData && (
                            <div className="course-stats-card">
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '30px', color: 'var(--text-dark)', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '8px' }}>Course Overview</h3>
                                <div className="course-stats-grid">
                                    {Object.entries(infoData).map(([label, value]) => (
                                        <div key={label} className="course-stats-item">
                                            <div className="course-stats-dot"></div>
                                            <div>
                                                <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</span>
                                                <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-dark)' }}>{value}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Course Content Section */}
            <section className="course-section" style={{ padding: '100px 0', background: '#ffffff' }}>
                <div className="container">
                    <div className="course-main-layout">
                        <div className="course-description-area">
                            {children}
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="premium-cta">
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(46, 125, 50, 0.15) 0%, transparent 60%)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2>Ready to <span className="text-gradient">Transform</span> Your Career?</h2>
                    <p>
                        Join a community of focused learners and build your future with Nitaq Training Center. Expert guidance is just a click away.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="https://wa.me/971545723181" className="btn btn-primary" style={{ padding: '20px 45px' }}>Enquire via WhatsApp</a>
                        <Link to="/enquiry" className="btn btn-white" style={{ background: 'white', color: '#1a1a1a', padding: '20px 45px' }}>Book Free Demo</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseLayout;
