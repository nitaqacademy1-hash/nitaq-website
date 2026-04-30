import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const UAEVATCourse = () => {
    const infoData = {
        "Certification": "Professional Certificate",
        "Focus": "VAT Compliance",
        "Duration": "1 Month",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="UAE VAT Course"
            subtitle="Master UAE Value Added Tax (VAT) regulations, compliance, and practical implementation for your business."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The UAE VAT Course at Nitaq is designed for professionals seeking a comprehensive understanding of the UAE’s Value Added Tax system. This programme provides the technical knowledge and practical skills required to manage VAT obligations and ensure organizational compliance.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Participants will explore key VAT concepts, including registration, taxable supplies, input and output tax, and the preparation of VAT returns. The course also covers specialized areas such as VAT in free zones and the latest Federal Tax Authority (FTA) updates.
                    </p>
                    <p>
                        Through practical examples and case studies, you will gain the confidence to handle VAT audits and optimize tax processes within your organization, navigating the complexities of the UAE tax landscape with ease.
                    </p>
                </div>
            </div>

            {/* VAT Tracks */}
            <div className="content-card">
                <h2>Our UAE VAT <span className="text-gradient">Programs</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>VAT Specialist</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Law | Compliance</p>
                        <ul className="styled-list">
                            <li>VAT law and executive regulations</li>
                            <li>Registration & deregistration rules</li>
                            <li>Input tax recovery & apportionment</li>
                            <li>VAT return filing & compliance</li>
                            <li>FTA audit preparation drills</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>VAT for Accountants</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>ERP | Operations</p>
                        <ul className="styled-list">
                            <li>Accounting for VAT in ERP systems</li>
                            <li>Reconciliation of VAT accounts</li>
                            <li>Handling reverse charge mechanism</li>
                            <li>VAT on imports and exports</li>
                            <li>Strict record-keeping requirements</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>FTA Foundations:</strong> Deep understanding of the legal framework and Federal Tax Authority role.</li>
                    <li><strong>Supplies Mastery:</strong> Expertise in standard-rated, zero-rated, and exempt supplies.</li>
                    <li><strong>Step-by-Step Filing:</strong> Practical guidance on preparing and submitting returns via the FTA portal.</li>
                    <li><strong>Sector Specific:</strong> VAT implications for real estate, finance, and designated zones.</li>
                    <li><strong>Audit Readiness:</strong> Strategies for handling official FTA audits and avoiding penalties.</li>
                    <li><strong>Industry Checklists:</strong> Comprehensive materials and VAT compliance tools for your business.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Accountants & Finance Managers</li>
                        <li>Tax Consultants & Auditors</li>
                        <li>Business Owners & Entrepreneurs</li>
                        <li>Compliance & Governance Officers</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master modern UAE VAT regulations</li>
                        <li>File accurate VAT returns independently</li>
                        <li>Optimize tax processes & organizational cash flow</li>
                        <li>Identify and manage tax risks effectively</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>UAE VAT <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is UAE VAT program?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the UAE VAT structure and requirements.</p>
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

export default UAEVATCourse;
