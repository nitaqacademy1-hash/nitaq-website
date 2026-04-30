import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
const DataManagementCourse = () => {
    const infoData = {
        "Level": "Professional",
        "Focus": "Data Strategy & Governance",
        "Duration": "3-5 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Data & IT Professionals",
        "Authorization": "SPEA Authorized"
    };
    return (
        <CourseLayout
            title="Certified Data Management Professional"
            subtitle="Harness the power of data. Master the frameworks of governance, quality, and strategy."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>In the digital age, data is the most valuable asset of any organization. The Data Management Professional course at Nitaq provides a comprehensive deep dive into the DAMA-DMBOK framework, ensuring you master the lifecycle of data.</p>
                    <p>From data governance and architecture to quality management and security, our program equips you with the strategic skills needed to lead data initiatives and ensure organizational data integrity.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Core <span className="text-gradient">Domains</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Governance & Architecture</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Strategy | Structure</p>
                        <ul className="styled-list">
                            <li>Data governance frameworks</li>
                            <li>Data modeling & architecture</li>
                            <li>Metadata management lifecycle</li>
                            <li>Strategic data roadmaps</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Quality & Security</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Integrity | Protection</p>
                        <ul className="styled-list">
                            <li>Data quality assessment</li>
                            <li>Security and privacy protocols</li>
                            <li>Master data management</li>
                            <li>Regulatory compliance (GDPR etc)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq?</span></h2>
                <ul className="styled-list">
                    <li><strong>Industry Experts:</strong> Learn from data architects and CDOs with global experience.</li>
                    <li><strong>DAMA Aligned:</strong> Curriculum focused on the recognized DMBOK standards.</li>
                    <li><strong>Practical Focus:</strong> Real-world database and governance case studies.</li>
                    <li><strong>Career Growth:</strong> Preparation for senior roles like Data Manager and Architect.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Data Warehouse and IT Professionals</li>
                        <li>Database Administrators and Analysts</li>
                        <li>Compliance and Governance Officers</li>
                        <li>Aspiring CDOs and Data Strategists</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master the 11 domains of data management</li>
                        <li>Implement robust data governance models</li>
                        <li>Audit and Improve organizational data quality</li>
                        <li>Earn a recognized Professional Certification</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Certified Data Management Professional <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is Certified Data Management Professional program?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the Certified Data Management Professional structure and requirements.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>How long is the course?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>The duration varies based on the proficiency level and chosen track. Most programs range from 20 to 50 hours.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What score is required?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Target scores depend on your specific university or professional goals. We provide customized plans to help you reach your required score.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>Do you provide mock tests?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Yes, comprehensive mock tests and practice materials are an integral part of all our training programs.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>Is online available?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Yes, we offer both interactive online classes and traditional offline in-person training formats.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is the fee?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Our fees are highly competitive. Please reach out to our admission team for the latest pricing and ongoing offers.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>When can I start?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>We have flexible intake dates with new batches starting frequently. Contact us to find the next available schedule.</p>
                    </div>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};
export default DataManagementCourse;
