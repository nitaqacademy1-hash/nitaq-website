import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
const CPACourse = () => {
    const infoData = {
        "Qualification": "CPA (US) Preparation",
        "Modules": "AUD, BEC, FAR, REG",
        "Duration": "12-18 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Accounting Professionals",
        "Authorization": "SPEA Authorized"
    };
    return (
        <CourseLayout
            title="CPA - Certified Public Accountant"
            subtitle="Secure your future in global finance with our comprehensive US CPA preparation program."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The Certified Public Accountant (CPA) is the highest standard of competence in the field of accountancy globally. Our preparation program at Nitaq is designed to help you navigate the rigors of the US CPA exam with precision.</p>
                    <p>We provide expert tuition across all four sections of the exam, ensuring you master the accounting standards, auditing procedures, tax regulations, and business environments required for certification.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Exam <span className="text-gradient">Modules</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>FAR & AUD</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Technical | Standards</p>
                        <ul className="styled-list">
                            <li>Financial Accounting & Reporting</li>
                            <li>Auditing & Attestation focus</li>
                            <li>US GAAP & GAAS mastery</li>
                            <li>Complex statement analysis</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>REG & BEC</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Regulatory | Environment</p>
                        <ul className="styled-list">
                            <li>Regulation and US Tax laws</li>
                            <li>Business Environment & Concepts</li>
                            <li>Strategic financial management</li>
                            <li>Regulatory compliance mastery</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for CPA?</span></h2>
                <ul className="styled-list">
                    <li><strong>Certified Tuition:</strong> Sessions led by experienced CPAs and finance veterans.</li>
                    <li><strong>Intensive Practice:</strong> Access to large banks of MCQs and Task-Based Simulations.</li>
                    <li><strong>Flexible Learning:</strong> Designed to fit the schedules of busy working professionals.</li>
                    <li><strong>Complete Support:</strong> From evaluation help to final licensure guidance.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Chartered Accountants seeking global status</li>
                        <li>Finance Professionals in international firms</li>
                        <li>Accounting Graduates targeting US-based MNCs</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master US accounting & auditing standards</li>
                        <li>Advanced competence in US tax and regulation</li>
                        <li>Join an elite global network of CPAs</li>
                        <li>Readiness for senior roles in global finance</li>
                    </ul>
                </div>
            </div>
            <WhyNitaq />
        </CourseLayout>
    );
};
export default CPACourse;
