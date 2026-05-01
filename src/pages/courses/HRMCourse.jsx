import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';

const HRMCourse = () => {
    const infoData = {
        "Certification": "Professional Certification",
        "Focus": "Core HR Functions",
        "Duration": "2-4 Months",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };


    const courseSchema = {
        name: 'Human Resource Management Course Sharjah',
        description: 'Practical Human Resource Management training in Sharjah covering recruitment, performance management, HR strategy, and people development. For aspiring and current HR professionals.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'HRM: Recruitment, Performance Management, HR Strategy, Employee Relations, Compensation',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'Who should attend the HRM course at Nitaq?',
            answer: 'The HRM course is ideal for aspiring HR professionals, current HR executives seeking upskilling, and managers responsible for people management.',
        },
        {
            question: 'What topics does the HRM course cover?',
            answer: 'The course covers recruitment, selection, performance management, compensation & benefits, employee relations, HR strategy, and UAE labor law basics.',
        },
        {
            question: 'Is the HRM course available online in UAE?',
            answer: 'Yes, both online and offline HRM training classes are available with flexible morning, evening, and weekend scheduling.',
        },
        {
            question: 'Does this HRM course provide a certificate?',
            answer: 'Yes, participants receive a Nitaq Academy certificate upon successful completion of the HRM course.',
        },
        {
            question: 'Is this HRM course suitable for beginners?',
            answer: 'Yes. The course is structured to accommodate both beginners and experienced HR practitioners looking to formalize their knowledge.',
        },
        {
            question: 'What is the fee for the HRM course at Nitaq Academy Sharjah?',
            answer: 'Contact us at +971 54 572 3181 for the latest HRM course fees and available batch schedules.',
        },
    ];

    return (
        <>
            <SEO
                title="HRM Course Sharjah | Human Resource Management Training UAE | Nitaq Academy"
                description="Human Resource Management (HRM) training at Nitaq Academy Sharjah. Practical HR skills for professionals. Online & offline batches UAE. SPEA Authorized."
                path="/hrm-courses"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="HRM - Human Resource Management"
            subtitle="Build a strong foundation in essential HR functions and people management for the modern workplace."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Human Resource Management (HRM) course at Nitaq Training Center provides a solid foundation in the essential functions of HR. This program is ideal for those new to the field or looking to formalize their HR knowledge. We cover the entire employee lifecycle, from recruitment and onboarding to performance management and offboarding.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq, we understand the importance of effective people management in today's competitive market. Our HRM course is designed to equip you with the practical skills needed to handle daily HR tasks efficiently while understanding the broader impact of HR on organizational success.
                    </p>
                    <p>
                        Led by experienced HR practitioners, this course combines classroom learning with interactive exercises, ensuring you can apply what you learn directly to your workplace within the UAE business environment.
                    </p>
                </div>
            </div>

            {/* HRM Tracks */}
            <div className="content-card">
                <h2>Our HRM <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>HRM Foundation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Basics | Administration</p>
                        <ul className="styled-list">
                            <li>Introduction to HR Management</li>
                            <li>HR Administrative operations</li>
                            <li>Employee record systems</li>
                            <li>Onboarding & Offboarding</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>HR Practitioner</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Execution | Talent</p>
                        <ul className="styled-list">
                            <li>Recruitment & Interviewing</li>
                            <li>Basic Payroll & Benefits</li>
                            <li>Performance appraisal basics</li>
                            <li>Internal communication</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>HR Compliance</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Laws | Regulations</p>
                        <ul className="styled-list">
                            <li>UAE Labor Law foundation</li>
                            <li>Workplace safety & ethics</li>
                            <li>Documentation compliance</li>
                            <li>Grievance handling</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Lifecycle Mastery:</strong> Comprehensive coverage from recruitment to retirement.</li>
                    <li><strong>Practical Recruitment:</strong> Learn advanced sourcing and selection techniques.</li>
                    <li><strong>UAE Compliance:</strong> Deep dive into local labor laws and regulatory requirements.</li>
                    <li><strong>Data & Records:</strong> Best practices for sensitive employee data management.</li>
                    <li><strong>Interactive Learning:</strong> Real-world case studies and role-playing simulations.</li>
                    <li><strong>Industry Mentors:</strong> Learn from HR directors with decades of local experience.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Aspiring HR Professionals & Coordinators</li>
                        <li>Office Administrators & Personal Assistants</li>
                        <li>Small Business Owners & Entrepreneurs</li>
                        <li>Graduates seeking corporate entry</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master fundamental HRM principles</li>
                        <li>Manage professional recruitment cycles</li>
                        <li>Navigate UAE Labor regulations confidently</li>
                        <li>Maintain accurate, compliant HR records</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>HRM - Human Resource Management <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the HRM - Human Resource Management program?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the HRM - Human Resource Management structure and requirements.</p>
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

export default HRMCourse;
