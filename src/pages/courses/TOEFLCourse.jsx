import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
const TOEFLCourse = () => {
    const infoData = {
        "Test Type": "Internet-Based (iBT)",
        "Modules": "Reading, Listening, Speaking, Writing",
        "Duration": "4-8 Weeks",
        "Mode": "Online | Offline | Hybrid",
        "Target": "University Aspirants",
        "Authorization": "SPEA Authorized"
    };
    return (
        <CourseLayout
            title="TOEFL - Test of English as a Foreign Language"
            subtitle="Master the TOEFL iBT with strategic coaching. Unlock your path to North American and global universities."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The TOEFL iBT (Test of English as a Foreign Language) is a globally recognized test that measures your ability to use and understand English at the university level. It is the preferred English proficiency test for universities in the United States, Canada, and many other countries worldwide.</p>
                    <p style={{ marginBottom: '15px' }}>At Nitaq Training Center, our TOEFL preparation program is meticulously designed to help you excel in all four modules—Reading, Listening, Speaking, and Writing. Our expert trainers focus on enhancing your academic English while teaching you the specific strategies needed to tackle the test format effectively.</p>
                    <p>With intensive practice, realistic mock exams, and personalized feedback, Nitaq ensures you are fully prepared to achieve the score required for your dream university admission.</p>
                </div>
            </div>
            {/* TOEFL Tracks */}
            <div className="content-card">
                <h2>Our Preparation <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>TOEFL Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>4-6 Weeks | Comprehensive</p>
                        <ul className="styled-list">
                            <li>All 4 sections in-depth coverage</li>
                            <li>Authentic practice & mock assessments</li>
                            <li>Advanced test success strategies</li>
                            <li>Detailed performance feedback</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>TOEFL Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>2 Weeks | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Quick concept revision drills</li>
                            <li>High-impact strategy workshops</li>
                            <li>Intensive practice sessions</li>
                            <li>Perfect for immediate retakes</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for TOEFL?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert Trainers:</strong> Native-level proficiency and years of specialized TOEFL coaching.</li>
                    <li><strong>Comprehensive Mocks:</strong> Realistic exam simulations and strict evaluation.</li>
                    <li><strong>Personalized Feedback:</strong> Detailed reports on linguistic and strategic performance.</li>
                    <li><strong>Small Batch Sizes:</strong> Ensuring premium attention and interactive speaking sessions.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Students targeting North American universities</li>
                        <li>Global scholarship and visa applicants</li>
                        <li>Professionals needing academic certification</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master academic English for university success</li>
                        <li>Advanced time management across all sections</li>
                        <li>High-scoring techniques for writing and speaking</li>
                        <li>Full readiness for target university scores</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>TOEFL - Test of English as a Foreign Language <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the TOEFL - Test of English as a Foreign Language exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the TOEFL - Test of English as a Foreign Language structure and requirements.</p>
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
export default TOEFLCourse;
