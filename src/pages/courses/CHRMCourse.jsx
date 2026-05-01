import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
const CHRMCourse = () => {
    const infoData = {
        "Level": "HR Professionals",
        "Certification": "CHRM Certificate",
        "Duration": "3-6 Months",
        "Mode": "Online | Offline | Hybrid",
        "Focus": "Strategic HR Management",
        "Authorization": "SPEA Authorized"
    };

    const courseSchema = {
        name: 'CHRM - Certified HR Manager Course Sharjah',
        description: 'CHRM (Certified HR Manager) certification coaching in Sharjah. Builds advanced HR leadership, talent management, organizational development, and strategic HR skills.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'CHRM: Strategic HR Management, Talent Management, Organizational Development, HR Leadership',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What is CHRM and who should pursue it?',
            answer: 'CHRM (Certified HR Manager) is a professional certification that validates expertise in strategic HR leadership, talent management, and organizational development. It is ideal for experienced HR professionals.',
        },
        {
            question: 'How is CHRM different from basic HRM training?',
            answer: 'CHRM is an advanced leadership-level certification focused on strategic HR, while basic HRM training covers operational HR skills. CHRM is designed for experienced HR professionals seeking credentialing.',
        },
        {
            question: 'How long is the CHRM preparation course at Nitaq?',
            answer: 'Duration varies based on your current HR experience and knowledge. Contact us for a customized study plan.',
        },
        {
            question: 'Is CHRM training available online in UAE?',
            answer: 'Yes, online and offline CHRM training is available with flexible scheduling at Nitaq Academy Sharjah.',
        },
        {
            question: 'Is CHRM recognized by employers in the UAE?',
            answer: 'Yes, CHRM is recognized by leading employers across the GCC and internationally as a mark of HR leadership excellence.',
        },
        {
            question: 'What is the fee for the CHRM course at Nitaq Academy?',
            answer: 'Contact us at +971 54 572 3181 for the latest CHRM course pricing and available batch schedules.',
        },
    ];

    return (
        <>
            <SEO
                title="CHRM Course Sharjah | Certified HR Manager Training UAE | Nitaq Academy"
                description="CHRM (Certified HR Manager) preparation at Nitaq Academy Sharjah. Build strategic HR leadership skills with our expert-led CHRM coaching. Online & offline batches UAE."
                path="/chrm"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="CHRM - Certified Human Resource Manager"
            subtitle="Accelerate your HR career with strategic leadership skills and global best practices."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The Certified Human Resource Manager (CHRM) program is designed to equip HR professionals with the strategic mindset and technical skills needed to lead in the modern workplace. From talent acquisition to employee engagement and organizational development.</p>
                    <p>Our curriculum focuses on the latest global HR trends, labor laws, and strategic human capital management. Led by experienced HR leaders, Nitaq provides the practical tools needed to transform HR from an administrative function into a strategic business partnership.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Key <span className="text-gradient">Specializations</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Strategic HR</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Leadership | Strategy</p>
                        <ul className="styled-list">
                            <li>Organizational design principles</li>
                            <li>HR strategy alignment with business</li>
                            <li>Change management frameworks</li>
                            <li>HR metrics and data analytics</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Talent Management</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Recruitment | Development</p>
                        <ul className="styled-list">
                            <li>Advanced talent acquisition tools</li>
                            <li>Performance management systems</li>
                            <li>Employee engagement & retention</li>
                            <li>Succession planning strategies</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Hands-on Training:</strong> Real-world HR case studies and project simulations.</li>
                    <li><strong>Industry Experts:</strong> Learn from HR directors and certified practitioners.</li>
                    <li><strong>Global Standards:</strong> Curriculum aligned with international HR certification bodies.</li>
                    <li><strong>Career Support:</strong> Dedicated guidance for senior HR roles and leadership path.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>HR Professionals looking for career growth</li>
                        <li>Department Managers leading teams</li>
                        <li>Business Owners managing human capital</li>
                        <li>Aspiring HR Directors and Strategists</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master strategic HR leadership principles</li>
                        <li>Build effective talent management frameworks</li>
                        <li>Implement data-driven HR metrics</li>
                        <li>Earn a recognized Professional Certification</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>CHRM - Certified Human Resource Manager <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the CHRM - Certified Human Resource Manager exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the CHRM - Certified Human Resource Manager structure and requirements.</p>
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
export default CHRMCourse;
