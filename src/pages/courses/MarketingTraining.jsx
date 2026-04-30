import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
const MarketingTraining = () => {
    const infoData = {
        "Level": "Professional",
        "Focus": "Modern Marketing Strategy",
        "Duration": "3-4 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Entrepreneurs & Marketers",
        "Authorization": "SPEA Authorized"
    };
    return (
        <CourseLayout
            title="Professional Marketing Training"
            subtitle="Master the transition from traditional to digital marketing. Build brands that resonate and convert."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The Professional Marketing Training course at Nitaq is designed to bridge the gap between classic marketing principles and the modern digital landscape. In an era where consumer behavior is rapidly changing, this course provides the strategic tools to find, engage, and retain customers.</p>
                    <p>We explore the psychology of branding, the power of data-driven insights, and the execution of omni-channel campaigns. Whether you are an entrepreneur or a career marketer, Nitaq helps you master the skills that drive revenue and brand loyalty.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Core <span className="text-gradient">Capabilities</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Digital Strategy</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Execution | ROI</p>
                        <ul className="styled-list">
                            <li>Social media & content marketing</li>
                            <li>Search engine optimization (SEO)</li>
                            <li>Paid advertising (PPC) strategies</li>
                            <li>Marketing funnel optimization</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Brand Leadership</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Identity | Value</p>
                        <ul className="styled-list">
                            <li>Developing brand voice and story</li>
                            <li>Customer journey mapping</li>
                            <li>Market research & segmentation</li>
                            <li>Brand equity and loyalty programs</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert Mentors:</strong> Learn from CMOs and digital agency leads.</li>
                    <li><strong>Hands-on Learning:</strong> Build real-world marketing plans for your business.</li>
                    <li><strong>Industry Tools:</strong> Exposure to the latest analytics and automation software.</li>
                    <li><strong>Global Perspectives:</strong> Understanding both local UAE and international markets.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Entrepreneurs looking to grow their brands</li>
                        <li>Marketing Professionals upskilling for digital</li>
                        <li>Sales Executives seeking marketing insight</li>
                        <li>Business Graduates targeting agencies</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master modern digital marketing channels</li>
                        <li>Design data-driven marketing strategies</li>
                        <li>Calculate and Improve marketing ROI</li>
                        <li>Earn a recognized Professional Certification</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Professional Marketing <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Professional Marketing exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the Professional Marketing structure and requirements.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How long is the course?</summary>
                        <div className="faq-accordion-content">
                            <p>The duration varies based on the proficiency level and chosen track. Most programs range from 20 to 50 hours.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What score is required?</summary>
                        <div className="faq-accordion-content">
                            <p>Target scores depend on your specific university or professional goals. We provide customized plans to help you reach your required score.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Do you provide mock tests?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, comprehensive mock tests and practice materials are an integral part of all our training programs.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is online available?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, we offer both interactive online classes and traditional offline in-person training formats.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What is the fee?</summary>
                        <div className="faq-accordion-content">
                            <p>Our fees are highly competitive. Please reach out to our admission team for the latest pricing and ongoing offers.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>When can I start?</summary>
                        <div className="faq-accordion-content">
                            <p>We have flexible intake dates with new batches starting frequently. Contact us to find the next available schedule.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};
export default MarketingTraining;
