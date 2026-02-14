import { Link } from 'react-router-dom';

const FinanceCourses = () => {
    return (
        <main>
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: '#64748b' }}>
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <Link to="/professional-certifications" style={{ color: 'var(--primary-color)' }}>Professional Certifications</Link> /
                            <span>Finance Courses</span>
                        </nav>
                        <h1>Finance <span className="text-gradient">Specializations</span></h1>
                        <p>
                            Master global financial standards and accelerate your career with our recognized accounting and finance certifications.
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
                                <img src="/images/acca_v2.webp" alt="ACCA" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>ACCA</h3>
                                <p>Become a globally recognized accountant with the Association of Chartered Certified Accountants qualification.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/acca-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/cma_cpa_v2.webp" alt="CMA" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>CMA</h3>
                                <p>Master strategic financial management and management accounting with the Certified Management Accountant certification.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/cma-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/cpa_v2.webp" alt="CPA" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>CPA</h3>
                                <p>Achieve the gold standard in public accounting with our comprehensive Certified Public Accountant preparation program.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/cpa-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ background: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#0f172a' }}>Invest in Your Future</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Our finance graduates work at top auditing firms and multi-national corporations globally.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary">Join the Program</Link>
                            <a href="https://wa.me/971545723181" className="btn" style={{ background: '#f1f5f9', color: '#1e293b' }}>Speak with Advisor</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FinanceCourses;
