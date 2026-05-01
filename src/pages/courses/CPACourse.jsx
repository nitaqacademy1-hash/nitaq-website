import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
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

    const courseSchema = {
        name: 'CPA Preparation Course Sharjah',
        description: 'Comprehensive CPA (Certified Public Accountant) exam coaching in Sharjah. Covers AICPA syllabus including Financial Accounting, Auditing, Regulation, and Business Environment.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'CPA: Financial Accounting & Reporting, Auditing, Business Environment, Regulation',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What is CPA and who should take it?',
            answer: 'CPA (Certified Public Accountant) is the highest US accounting credential by the AICPA. It is ideal for accountants seeking international recognition in the US, Middle East, and global organizations.',
        },
        {
            question: 'How long is the CPA exam preparation at Nitaq?',
            answer: 'CPA preparation typically takes 12–18 months to complete all 4 sections. We provide structured module-based coaching with flexible scheduling.',
        },
        {
            question: 'What are the 4 sections of the CPA exam?',
            answer: 'The CPA exam covers Financial Accounting & Reporting (FAR), Auditing & Attestation (AUD), Business Environment & Concepts (BEC), and Regulation (REG).',
        },
        {
            question: 'Is CPA valuable in the UAE job market?',
            answer: 'Yes, CPA is highly valued in the UAE, particularly in Big 4 accounting firms, banking, and multinational corporations.',
        },
        {
            question: 'Do you provide CPA mock tests and study materials?',
            answer: 'Yes, comprehensive CPA mock tests, practice questions, and study materials are included in our preparation program.',
        },
        {
            question: 'What is the fee for CPA preparation at Nitaq Academy?',
            answer: 'Contact us at +971 54 572 3181 for the latest CPA course pricing and batch schedules in Sharjah.',
        },
    ];

    return (
        <>
            <SEO
                title="CPA Course Sharjah | Certified Public Accountant Training UAE | Nitaq Academy"
                description="CPA (Certified Public Accountant) preparation at Nitaq Academy Sharjah. Expert AICPA CPA exam coaching with comprehensive practice materials. SPEA Authorized."
                path="/cpa-course"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
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
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>CPA - Certified Public Accountant <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the CPA - Certified Public Accountant exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the CPA - Certified Public Accountant structure and requirements.</p>
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
        </>
    );
};
export default CPACourse;
