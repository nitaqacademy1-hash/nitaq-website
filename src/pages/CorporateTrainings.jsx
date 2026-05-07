import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const CorporateTrainings = () => {
    return (
        <main>
            <SEO />
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav className="listing-hero-nav">
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <span>Corporate Training</span>
                        </nav>
                        <h1>Corporate <span className="text-gradient">Enablement</span></h1>
                        <p>
                            Customized training solutions designed to empower your workforce, enhance productivity, and drive organizational excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="listing-grid-container">
                <div className="container">
                    <div className="corporate-grid">

                        {/* Information Section */}
                        <div className="corporate-info">
                            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '24px' }}>Empower Your <span className="text-gradient">Workforce</span></h2>
                            <p style={{ fontSize: '1.15rem', color: '#64748b', marginBottom: '40px', lineHeight: '1.8' }}>
                                At NITAQ, we understand that every organization is unique. Our corporate training programs are tailored to meet the specific challenges and goals of your business in the modern Middle Eastern market.
                            </p>

                            <div style={{ display: 'grid', gap: '24px' }}>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Customized Curriculum</h4>
                                    <p style={{ color: '#64748b' }}>We design training modules specifically for your industry, ensuring maximum relevance and impact.</p>
                                </div>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Expert Facilitators</h4>
                                    <p style={{ color: '#64748b' }}>Our trainers are industry leaders with specialized practical expertise across global and regional markets.</p>
                                </div>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>Measurable Results</h4>
                                    <p style={{ color: '#64748b' }}>We focus on skill application and ROI, providing comprehensive post-training assessments and support.</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="corporate-form-card" style={{ background: 'white', padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', boxShadow: '0 40px 100px -30px rgba(0,0,0,0.08)' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '8px' }}>Request a Proposal</h3>
                            <p style={{ color: '#64748b', marginBottom: '32px' }}>Tell us about your training needs and we'll get back to you with a tailored plan.</p>

                            <form style={{ display: 'grid', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Company Name</label>
                                    <input type="text" placeholder="Your Organization" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Work Email</label>
                                    <input type="email" placeholder="email@company.com" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Training Interest</label>
                                    <select style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}>
                                        <option>Leadership & Management</option>
                                        <option>Digital Transformation</option>
                                        <option>Soft Skills & Communication</option>
                                        <option>Finance & Compliance</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <button 
                                    className="btn btn-primary" 
                                    style={{ width: '100%', marginTop: '10px' }}
                                    onClick={() => trackEvent(ANALYTICS_EVENTS.FORM, 'corporate_consultation_click')}
                                >
                                    Get Free Consultation
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="content-card" style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '25px', textAlign: 'center' }}>Corporate Training <span className="text-gradient">FAQs</span></h2>
                        <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <details className="faq-accordion">
                                <summary>What is corporate training at NITAQ ACADEMY?</summary>
                                <div className="faq-accordion-content">
                                    <p>Corporate training programs are customized courses designed to improve employee skills, productivity, and leadership within organizations.</p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>What topics are covered?</summary>
                                <div className="faq-accordion-content">
                                    <p>Topics include leadership, communication, finance, HR, digital skills, and business development.</p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>Can training be customized?</summary>
                                <div className="faq-accordion-content">
                                    <p>Yes, all programs are tailored to the company’s specific needs and goals.</p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>Is training conducted onsite?</summary>
                                <div className="faq-accordion-content">
                                    <p>Yes, training can be conducted onsite or at the institute depending on requirements.</p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>Who can enroll in corporate training?</summary>
                                <div className="faq-accordion-content">
                                    <p>Businesses, startups, and organizations looking to upskill their workforce can enroll.</p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>What are the benefits?</summary>
                                <div className="faq-accordion-content">
                                    <p>Improved performance, better team collaboration, and enhanced leadership skills.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="section-padding" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', marginBottom: '40px' }}>Trusted By Forward-Thinking Organizations</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', opacity: 0.6 }}>
                        {/* Placeholder for partner logos */}
                        <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#cbd5e1' }}>CORP_LOGOS</div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CorporateTrainings;
