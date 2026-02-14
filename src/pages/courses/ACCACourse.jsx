import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const ACCACourse = () => {
    const infoData = {
        "Qualification": "ACCA (UK) Certification",
        "Levels": "Applied Knowledge, Skills, Professional",
        "Duration": "Flexible (Module-based)",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Finance & Accounting Professionals",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="ACCA - Association of Chartered Certified Accountants"
            subtitle="Become a globally recognized finance professional with our comprehensive ACCA preparation program."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Association of Chartered Certified Accountants (ACCA) is a leading global professional accounting body. ACCA qualification is recognized by employers worldwide and provides you with the skills and knowledge required to excel in the fields of accounting, finance, and management.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Our ACCA preparation course at Nitaq Training Center is designed to guide you through every stage of the qualification process. We provide expert tuition for all levels—from Applied Knowledge and Applied Skills to Strategic Professional modules.
                    </p>
                    <p>
                        With a focus on conceptual understanding, exam-style practice, and professional development, Nitaq ensures you are not just exam-ready, but industry-ready for a successful career in global finance.
                    </p>
                </div>
            </div>

            {/* ACCA Tracks */}
            <div className="content-card">
                <h2>Our Study <span className="text-gradient">Tracks</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Applied Knowledge</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Foundation | Business</p>
                        <ul className="styled-list">
                            <li>Business and Technology (BT)</li>
                            <li>Management Accounting (MA)</li>
                            <li>Financial Accounting (FA)</li>
                            <li>Strong conceptual foundation</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Applied Skills</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Technical | Comprehensive</p>
                        <ul className="styled-list">
                            <li>Corporate and Business Law</li>
                            <li>Performance Management</li>
                            <li>Taxation & Financial Reporting</li>
                            <li>Audit & Assurance focus</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Professional</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Leadership | Strategic</p>
                        <ul className="styled-list">
                            <li>Strategic Business Reporting</li>
                            <li>Strategic Business Leader</li>
                            <li>Advanced Financial Management</li>
                            <li>Executive level case studies</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for ACCA?</span></h2>
                <ul className="styled-list">
                    <li><strong>Certified Tuition:</strong> sessions led by experienced ACCA members and industry veterans.</li>
                    <li><strong>Modular Approach:</strong> classes structured to match the official quarterly exam cycles.</li>
                    <li><strong>Intensive Revision:</strong> dedicated crash courses and mock sessions before every exam window.</li>
                    <li><strong>Personalized Mentorship:</strong> help with registration, ethics modules, and career guidance.</li>
                    <li><strong>Flexible Batches:</strong> tailored for working professionals and university students.</li>
                    <li><strong>Updated Resources:</strong> access to BPP and Kaplan approved study materials and assessments.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Commerce and Finance Graduates</li>
                        <li>Accounting Professionals seeking global status</li>
                        <li>High School Students targeting finance careers</li>
                        <li>Aspiring CFOs and Finance Directors</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master international accounting standards</li>
                        <li>Advanced strategic financial management</li>
                        <li>Global network and professional ethics</li>
                        <li>Readiness for leadership roles in MNCs</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default ACCACourse;
