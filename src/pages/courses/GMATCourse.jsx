import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';
import SEO from '../../components/SEO';

const GMATCourse = () => {
    const infoData = {
        "Level": "MBA Aspirants",
        "Mock Exams": "10 Full-Length Tests",
        "Focus Areas": "Quant, Verbal, AWA",
        "Support": "One-on-One Mentoring",
        "Age Group": "20+ Years",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    const courseSchema = {
        name: 'GMAT Preparation Course Sharjah',
        description: 'Master the GMAT for admission into top-ranked global business schools. Expert GMAT coaching in Sharjah with 10 full-length mock tests, Quant, Verbal, and AWA training.',
        duration: 'PT50H',
        mode: ['onsite', 'online'],
        educationalLevel: 'Graduate',
        teaches: 'GMAT Quantitative Reasoning, Verbal Reasoning, Analytical Writing Assessment',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What is the GMAT exam and who should take it?',
            answer: 'The GMAT (Graduate Management Admission Test) is a globally recognized exam for MBA admission. It evaluates Quantitative Reasoning, Verbal Reasoning, and Analytical Writing. It is the gold standard for admission into MBA programs at top business schools worldwide.',
        },
        {
            question: 'How long is the GMAT preparation course at Nitaq Academy?',
            answer: 'The duration varies based on the proficiency level and chosen track. Most programs range from 20 to 50 hours across our Intensive, Standard, and Express tracks.',
        },
        {
            question: 'What GMAT score is good for top business schools?',
            answer: 'Most top MBA programs require a GMAT score of 650–700+. We provide customized study plans to help you reach your target score based on your chosen schools.',
        },
        {
            question: 'Do you provide GMAT mock tests in Sharjah?',
            answer: 'Yes, comprehensive GMAT mock tests and practice materials are an integral part of all our training programs, including 10 full-length timed tests.',
        },
        {
            question: 'Is GMAT online coaching available at Nitaq?',
            answer: 'Yes, we offer both interactive online classes and traditional offline in-person GMAT training formats in Sharjah and across the UAE.',
        },
        {
            question: 'What is the fee for GMAT preparation at Nitaq Academy?',
            answer: 'Our GMAT course fees are highly competitive. Please reach out to our admission team at +971 54 572 3181 for the latest pricing and ongoing offers.',
        },
        {
            question: 'When can I start GMAT coaching at Nitaq?',
            answer: 'We have flexible intake dates with new batches starting frequently. Contact us to find the next available GMAT batch schedule.',
        },
    ];

    return (
        <>
            <SEO
                title="GMAT Preparation Course Sharjah | MBA Exam Coaching UAE | Nitaq Academy"
                description="Master the GMAT with Nitaq Academy's expert coaching in Sharjah. 10 mock tests, Quant, Verbal & AWA training for top MBA admission. SPEA Authorized. Online & offline GMAT prep UAE."
                path="/gmat-preparation"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout

            title="GMAT Preparation"
            subtitle="Master the GMAT for admission into top-ranked global business schools with strategic coaching."
            infoData={infoData}
        >
            {/* About the Course */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Graduate Management Admission Test (GMAT) is a globally recognized standardized exam that evaluates a candidate's abilities in Quantitative Reasoning, Verbal Reasoning, and Analytical Writing. It is the gold standard for admission into MBA programs worldwide.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        The GMAT Preparation Course at Nitaq is thoughtfully designed to equip students with the skills, strategies, and structured study approach required to perform confidently. Our program focuses not only on content mastery but also on test-taking efficiency and strategic thinking.
                    </p>
                    <p>
                        At Nitaq, our trainers are accomplished GMAT performers who understand the academic pressures and professional aspirations of students. We guide, support, and walk alongside you as you prepare to conquer the GMAT with total confidence.
                    </p>
                </div>
            </div>

            {/* GMAT Programs */}
            <div className="content-card">
                <h2>Our GMAT <span className="text-gradient">Programs</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GMAT Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Full Course | Online/Offline</p>
                        <ul className="styled-list">
                            <li>Complete syllabus coverage drills</li>
                            <li>Unlimited practice hub access</li>
                            <li>10 full-length mock exams</li>
                            <li>Performance analysis reports</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>GMAT Standard</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Flexible | Online/Offline</p>
                        <ul className="styled-list">
                            <li>Core concept mastery sessions</li>
                            <li>Guided expert practice hours</li>
                            <li>Test-taking strategy coaching</li>
                            <li>Application & Registration help</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GMAT Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Modular | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Targeted section improvement</li>
                            <li>Quick revision strategies</li>
                            <li>Focused section practice drills</li>
                            <li>Intensive final module brush-up</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Key Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Comprehensive Resources:</strong> Unlimited access to Nitaq's extensive prep library and premium materials.</li>
                    <li><strong>Structured Guidance:</strong> Expertly designed instruction that supports you at every stage of the journey.</li>
                    <li><strong>Full-Length Mocks:</strong> Complete GMAT-style exams followed by deep performance reviews and feedback.</li>
                    <li><strong>Career Consultation:</strong> Expert-led sessions to explore business school options and align your GMAT goals.</li>
                    <li><strong>Dedicated Mentors:</strong> Communication framework ensuring focused, one-on-one academic interaction.</li>
                    <li><strong>Seamless Support:</strong> Step-by-step assistance with GMAT registration and scheduling.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>University Path</h3>
                    <ul className="styled-list">
                        <li>Entry to top-ranked MBA programs globally</li>
                        <li>Eligibility for merit-based scholarships</li>
                        <li>Competitive edge in admission procedures</li>
                        <li>Global recognition by thousands of institutions</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master advanced Quantitative reasoning</li>
                        <li>Improve Verbal analysis and logic skills</li>
                        <li>Efficient test-taking & time management</li>
                        <li>Confidence to hit target competitive scores</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>GMAT <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the GMAT exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the GMAT structure and requirements.</p>
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

export default GMATCourse;
