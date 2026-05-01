import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
const CPCDCourse = () => {
    const infoData = {
        "Level": "HR & Management",
        "Certification": "CPCD Certificate",
        "Duration": "3-4 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Professionals & Leaders",
        "Authorization": "SPEA Authorized"
    };

    const courseSchema = {
        name: 'CPCD Professional Course Sharjah',
        description: 'Professional CPCD certification coaching in Sharjah. Expert-led preparation for CPCD exams with comprehensive materials, mock tests, and personalized guidance.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'CPCD: Professional Development, Certification Preparation, Strategic Competencies',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What is the CPCD certification?',
            answer: 'CPCD is a professional certification that validate professional competencies and development skills. Contact our counselors for detailed syllabus and eligibility information.',
        },
        {
            question: 'Who should pursue the CPCD certification?',
            answer: 'The CPCD is ideal for professionals looking to formalize their competency credentials and advance their careers in management and professional roles.',
        },
        {
            question: 'How long is the CPCD preparation at Nitaq?',
            answer: 'Duration varies based on your background and the specific CPCD track. Contact us for a customized preparation plan.',
        },
        {
            question: 'Is CPCD training available online in UAE?',
            answer: 'Yes, both online and offline CPCD preparation classes are available with flexible scheduling at Nitaq Academy Sharjah.',
        },
        {
            question: 'Do you provide mock tests for CPCD?',
            answer: 'Yes, mock exams and practice materials are included in our CPCD preparation program.',
        },
        {
            question: 'What is the fee for CPCD training at Nitaq Academy?',
            answer: 'Contact us at +971 54 572 3181 for the latest CPCD course pricing and available batch schedules.',
        },
    ];

    return (
        <>
            <SEO
                title="CPCD Course Sharjah | Professional CP Training UAE | Nitaq Academy"
                description="CPCD professional certification training at Nitaq Academy Sharjah. Expert coaching for CPCD exams. Online & offline batches available UAE. SPEA Authorized."
                path="/cpcd-courses"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="CPCD - Certified Professional in Career Development"
            subtitle="Master the strategies to guide others and yourself toward meaningful career growth."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The Certified Professional in Career Development (CPCD) program is designed for those who want to master the art and science of career guidance. From counseling techniques to understanding the evolving global job market.</p>
                    <p>At Nitaq, we provide the tools to help professionals navigate career transitions, build sustainable growth paths, and mentor others effectively. This course bridges the gap between individual aspirations and organizational talent needs.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Core <span className="text-gradient">Focus Areas</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Career Counseling</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Mentoring | Guidance</p>
                        <ul className="styled-list">
                            <li>Counseling models and techniques</li>
                            <li>Aptitude and interest assessment</li>
                            <li>Building trust and rapport</li>
                            <li>Designing personalized growth paths</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Market Strategy</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Trends | Opportunities</p>
                        <ul className="styled-list">
                            <li>Analyzing global job market trends</li>
                            <li>Networking & personal branding</li>
                            <li>Resume & portfolio strategy</li>
                            <li>Navigating career transitions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for CPCD?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert Mentors:</strong> Learn from seasoned career counselors and HR strategists.</li>
                    <li><strong>Practical Tools:</strong> Access to the latest career assessment frameworks and tools.</li>
                    <li><strong>Global Standards:</strong> Modern curriculum focused on international career development.</li>
                    <li><strong>Holistic Approach:</strong> Combining psychology, strategy, and market reality.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>HR Managers and Talent Developers</li>
                        <li>Academic Counselors and Educators</li>
                        <li>Executive Coaches and Mentors</li>
                        <li>Professionals aiming for leadership</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master professional career guidance skills</li>
                        <li>Assess individual potential effectively</li>
                        <li>Build strategic career development plans</li>
                        <li>Earn a recognized Professional Certification</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>CPCD - Certified Professional in Career Development <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the CPCD - Certified Professional in Career Development exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the CPCD - Certified Professional in Career Development structure and requirements.</p>
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
export default CPCDCourse;
