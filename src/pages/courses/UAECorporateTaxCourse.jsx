import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const UAECorporateTaxCourse = () => {
    const infoData = {
        "Certification": "Professional Certification",
        "Focus": "Corporate Tax",
        "Duration": "1 Month",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="UAE Corporate Tax Course"
            subtitle="Master UAE Corporate Tax framework, compliance, and strategic financial planning for sustainable business growth."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The UAE Corporate Tax Course at Nitaq is designed for professionals seeking a practical understanding of the UAE’s corporate tax framework. This programme equips participants with technical knowledge to manage corporate tax obligations and ensure regulatory compliance.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Key areas include taxable income computation, deductions, corporate tax rates, and free zone regulations. The course also explores advanced topics such as transfer pricing, tax planning, and recent policy updates from the Ministry of Finance.
                    </p>
                    <p>
                        Upon completion, participants will be well-prepared to manage tax compliance, optimize tax positions, and contribute to the financial integrity of their organizations within the UAE's evolving tax landscape.
                    </p>
                </div>
            </div>

            {/* Corporate Tax Tracks */}
            <div className="content-card">
                <h2>Our Tax <span className="text-gradient">Programs</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Standard Program</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>12 Hours | Intensive</p>
                        <ul className="styled-list">
                            <li>UAE Corporate Tax law fundamentals</li>
                            <li>Taxable income computation rules</li>
                            <li>Deductions and relief mechanisms</li>
                            <li>Tax return preparation and filing</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Advanced Program</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Transfer Pricing | Strategy</p>
                        <ul className="styled-list">
                            <li>In-depth Transfer Pricing regulations</li>
                            <li>Free Zone qualifying income rules</li>
                            <li>International tax considerations</li>
                            <li>Audit preparation and representation</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Legal Framework:</strong> Understand corporate tax rates, exemptions, and mandatory registration.</li>
                    <li><strong>Taxable Persons:</strong> Learn residency distinctions, tax residency tests, and permanent establishments.</li>
                    <li><strong>Income Computation:</strong> Real-world practice in handling unrealized gains, losses, and exemptions.</li>
                    <li><strong>Administration:</strong> Master financial reporting, record-keeping, and official audit procedures.</li>
                    <li><strong>Free Zone Mastery:</strong> Detailed guidance on qualifying conditions and related-party transactions.</li>
                    <li><strong>Transfer Pricing:</strong> Expert training on ARM (Arm's Length Principle) and compliance documentation.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Finance Professionals & Senior Managers</li>
                        <li>Tax Specialists & Consultants</li>
                        <li>Compliance Officers & Risk Analysts</li>
                        <li>Academics & Management Consultants</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master the 10 core modules of UAE Corporate Tax</li>
                        <li>Implement robust tax planning strategies</li>
                        <li>Ensure 100% compliance with FTA regulations</li>
                        <li>Navigate complex Free Zone tax scenarios</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default UAECorporateTaxCourse;
