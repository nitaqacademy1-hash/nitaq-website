import { Link } from 'react-router-dom';

const ProfessionalCertifications = () => {
    return (
        <main>
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center', gap: '8px', fontSize: '0.95rem', color: '#64748b' }}>
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <span>Professional Certifications</span>
                        </nav>
                        <h1>Professional <span className="text-gradient">Certifications</span></h1>
                        <p>
                            Elevate your career with industry-recognized certifications and practical training programs designed for modern professionals.
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

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/uae_tax_v2.webp" alt="UAE VAT" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>UAE VAT</h3>
                                <p>Stay compliant and expert in local regulations with our specialized Value Added Tax training for UAE businesses.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/uae-vat" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/corp_tax_v2.webp" alt="UAE Corporate Tax" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>UAE Corporate Tax</h3>
                                <p>Navigate the new UAE Corporate Tax landscape with confidence through our expert-led regulatory training.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/uae-corporate-tax" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/ai_v2.webp" alt="AI Mastery" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Basic to Advance AI</h3>
                                <p>From foundation to advanced implementation, master Artificial Intelligence tools for professional productivity.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/ai-course" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/data_v2.webp" alt="Data Analytics" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Power BI & Advance Excel</h3>
                                <p>Transform data into insights with mastery of business intelligence tools and advanced spreadsheet techniques.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/power-bi-excel" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/hrm_v2.webp" alt="CHRM" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>CHRM</h3>
                                <p>Advance your HR career with the Certified Human Resource Management program focused on modern workforce strategies.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/chrm" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/hrm_pro_v2.webp" alt="HRM Courses" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>HRM Professional</h3>
                                <p>Comprehensive training covering all core aspects of Human Resource Management for organizational success.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/hrm-courses" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/sales_v2.webp" alt="Sales" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Sales & Negotiations</h3>
                                <p>Master high-impact sales techniques and negotiation strategies to close deals and drive business growth.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/sales-negotiations" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/marketing_v2.webp" alt="Marketing" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Marketing Training</h3>
                                <p>Modern digital and traditional marketing strategies to build brands and reach global audiences effectively.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/marketing-training" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/cpcd_v2.webp" alt="CPCD" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>CPCD Professional</h3>
                                <p>Continuous Professional Career Development programs focused on long-term success and skill mastery.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/cpcd-courses" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/data_mgmt_v2.webp" alt="Data Management" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Data Management</h3>
                                <p>Learn essential skills for organizing, securing, and managing organizational data in the digital age.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/data-management" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                        <div className="listing-card">
                            <div className="listing-card-img">
                                <img src="/images/soft_skills_v2.webp" alt="Soft Skills" loading="lazy" />
                            </div>
                            <div className="listing-card-body">
                                <h3>Soft Skills Training</h3>
                                <p>Improve communication, leadership, and emotional intelligence for a more effective professional presence.</p>
                            </div>
                            <div className="listing-card-footer">
                                <Link to="/soft-skills-training" className="btn-read-more">Learn More →</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Premium CTA Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ background: 'white', padding: '60px', borderRadius: '40px', boxShadow: '0 40px 100px -20px rgba(0,0,0,0.05)', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', color: '#0f172a' }}>Advance Your Career</h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
                            Gain industry-recognized certifications and join Sharjah's premier professional training center.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/enquiry" className="btn btn-primary">Start Your Journey</Link>
                            <a href="https://wa.me/971545723181" className="btn" style={{ background: '#f1f5f9', color: '#1e293b' }}>Speak with Advisor</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProfessionalCertifications;
