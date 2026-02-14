import { Link } from 'react-router-dom';

const CourseLayout = ({ title, subtitle, infoData, children }) => {
    return (
        <main>
            {/* Page Hero */}
            <section className="course-hero"
                style={{
                    padding: '160px 0 100px',
                    background: 'linear-gradient(135deg, #f8fbf8 0%, #ffffff 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderBottom: '1px solid #f0f0f0'
                }}>
                {/* Decorative background elements */}
                <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(46, 125, 50, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                <div style={{ position: 'absolute', bottom: '-150px', left: '-50px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(43, 187, 173, 0.05) 0%, transparent 70%)', borderRadius: '50%' }}></div>

                <div className="container">
                    <div className="course-hero-wrapper" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
                        <div className="course-hero-text">
                            <nav style={{ marginBottom: '20px', fontSize: '0.9rem', color: 'var(--text-gray)' }}>
                                <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                                <span style={{ marginLeft: '8px' }}>{title.split(' - ')[0]}</span>
                            </nav>
                            <h1 style={{
                                fontSize: '3.5rem',
                                lineHeight: 1.1,
                                color: 'var(--text-dark)',
                                marginBottom: '25px',
                                fontWeight: 800
                            }}>
                                {title}
                            </h1>
                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-gray)',
                                lineHeight: 1.6,
                                maxWidth: '580px'
                            }}>
                                {subtitle}
                            </p>

                            <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
                                <a href="https://wa.me/971545723181" className="btn btn-primary" style={{ padding: '18px 35px' }}>Enroll Today</a>
                                <a href="tel:+971545723181" className="btn" style={{ background: '#f0f0f0', color: 'var(--text-dark)', padding: '18px 30px' }}>Speak to Advisor</a>
                            </div>
                        </div>

                        {infoData && (
                            <div className="course-stats-card" style={{
                                background: 'white',
                                padding: '40px',
                                borderRadius: '24px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.06)',
                                border: '1px solid #f0f0f0'
                            }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '30px', color: 'var(--text-dark)', borderBottom: '2px solid var(--primary-color)', display: 'inline-block', paddingBottom: '8px' }}>Course Overview</h3>
                                <div style={{ display: 'grid', gap: '20px' }}>
                                    {Object.entries(infoData).map(([label, value]) => (
                                        <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                            <div style={{ width: '8px', height: '8px', background: 'var(--primary-color)', borderRadius: '50%', marginTop: '8px' }}></div>
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
            <section style={{ padding: '100px 0', background: '#ffffff' }}>
                <div className="container">
                    <div className="course-main-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '60px' }}>
                        <div className="course-description-area">
                            {children}
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section style={{
                background: '#1a1a1a',
                padding: '120px 0',
                position: 'relative',
                overflow: 'hidden',
                textAlign: 'center'
            }}>
                <div style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', background: 'radial-gradient(circle at 50% 50%, rgba(46, 125, 50, 0.15) 0%, transparent 60%)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '25px', fontWeight: 800 }}>Ready to <span className="text-gradient">Transform</span> Your Career?</h2>
                    <p style={{ fontSize: '1.2rem', color: '#aaa', maxWidth: '700px', margin: '0 auto 50px', lineHeight: 1.6 }}>
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
