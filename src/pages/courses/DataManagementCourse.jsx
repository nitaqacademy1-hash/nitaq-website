import CourseLayout from '../../components/CourseLayout';
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>
                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Governance & Architecture</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Strategy | Structure</p>
                        <ul className="styled-list">
                            <li>Data governance frameworks</li>
                            <li>Data modeling & architecture</li>
                            <li>Metadata management lifecycle</li>
                            <li>Strategic data roadmaps</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
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
        </CourseLayout>
    );
};
export default DataManagementCourse;
