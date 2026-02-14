import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const CMACourse = () => {
    const infoData = {
        "Qualification": "CMA (US) Certification",
        "Modules": "Two Parts (Part 1 & 2)",
        "Duration": "6-12 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Accountants & Managers",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="CMA - Certified Management Accountant"
            subtitle="Elevate your career in management accounting and financial management with our expert-led CMA program."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Certified Management Accountant (CMA) is a globally recognized credential for professionals in management accounting and financial management. Offered by the Institute of Management Accountants (IMA), it validates your expertise in strategic planning, analysis, and decision support.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our CMA program is designed to guide you through both parts of the exam. We provide comprehensive training that simplifies complex financial concepts and focuses on practical application in the business world.
                    </p>
                    <p>
                        With expert tuition, premium study materials, and rigorous practice, Nitaq ensures you are prepared to join the elite group of CMAs influencing corporate strategy globally.
                    </p>
                </div>
            </div>

            {/* CMA Tracks */}
            <div className="content-card">
                <h2>Our Study <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Part 1 Mastery</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>CMA (Part 1)</p>
                        <ul className="styled-list">
                            <li>Financial Planning & Analytics</li>
                            <li>Performance Management Focus</li>
                            <li>Cost Management and Budgeting</li>
                            <li>Internal Controls & Systems</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Part 2 Mastery</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>CMA (Part 2)</p>
                        <ul className="styled-list">
                            <li>Strategic Financial Management</li>
                            <li>Financial Statement Analysis</li>
                            <li>Corporate Finance & Investment</li>
                            <li>Risk Management & Ethics</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>CMA Revision</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Exam Focused</p>
                        <ul className="styled-list">
                            <li>Intensive Crash Course modules</li>
                            <li>Mock exam simulations</li>
                            <li>High-weightage topic focus</li>
                            <li>Personalized doubt clearance</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for CMA?</span></h2>
                <ul className="styled-list">
                    <li><strong>Qualified Instructors:</strong> Learn from certified CMAs and seasoned finance professionals.</li>
                    <li><strong>Exam Strategy:</strong> Master the multiple-choice and essay task techniques required for success.</li>
                    <li><strong>Premium Materials:</strong> Access to recognized study packs, question banks, and progress tests.</li>
                    <li><strong>Flexible Batches:</strong> Scheduled specifically to accommodate working accounting professionals.</li>
                    <li><strong>Continuous Support:</strong> From IMA registration to final certification, we guide you.</li>
                    <li><strong>Small Batch Sizes:</strong> Ensuring focused individual attention and healthy interactive learning.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Accountants and Finance Professionals</li>
                        <li>Finance Managers and Controllers</li>
                        <li>Commerce and Management Graduates</li>
                        <li>Aspirants for global finance leadership</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Professional competence in management accounting</li>
                        <li>Mastery of strategic financial decision making</li>
                        <li>Advanced skills in data analytics & risk management</li>
                        <li>Elite global networking opportunities</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default CMACourse;
