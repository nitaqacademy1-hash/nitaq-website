import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
const DataManagementCourse = () => {
    const infoData = {
        "Level": "Professional",
        "Focus": "Data Strategy & Governance",
        "Duration": "3-5 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Data & IT Professionals",
        "Authorization": "SPEA Authorized"
    };

    const courseSchema = {
        name: 'Data Management Course Sharjah',
        description: 'Professional data management training in Sharjah covering database administration, SQL, data analysis, data governance, and business intelligence tools for professionals and analysts.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Data Management: SQL, Database Administration, Data Analysis, Business Intelligence, Data Governance',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'Who should attend the Data Management course at Nitaq?',
            answer: 'The course is ideal for IT professionals, data analysts, database administrators, business intelligence practitioners, and anyone working with large datasets.',
        },
        {
            question: 'What topics are covered in Nitaq\'s Data Management course?',
            answer: 'The course covers database design, SQL querying, data analysis, data governance, ETL processes, and business intelligence tools usage.',
        },
        {
            question: 'Do I need programming experience for the Data Management course?',
            answer: 'Basic computer skills are sufficient. No advanced programming experience is required for foundational tracks; advanced tracks may require basic SQL familiarity.',
        },
        {
            question: 'Is Data Management training available online in UAE?',
            answer: 'Yes, both online and offline data management classes are available with flexible scheduling at Nitaq Academy Sharjah.',
        },
        {
            question: 'What certifications can I pursue after this course?',
            answer: 'After completing Nitaq\'s Data Management course, we guide students toward industry-recognized certifications in database management and data analytics.',
        },
        {
            question: 'What is the fee for Data Management training at Nitaq Academy?',
            answer: 'Contact us at +971 54 572 3181 for the latest pricing and available batch schedules for the Data Management course.',
        },
    ];

    return (
        <>
            <SEO
                title="Data Management Course Sharjah | Database & Analytics Training UAE | Nitaq"
                description="Data management training at Nitaq Academy Sharjah. Learn database management, data analysis, SQL, and business intelligence tools. Online & offline batches UAE."
                path="/data-management"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="Certified Data Management Professional"
            subtitle="Harness the power of data. Master the frameworks of governance, quality, and strategy."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>In the digital age, data is the most valuable asset of any organization. The Data Management Professional course at Nitaq provides a comprehensive deep dive into the DAMA-DMBOK framework, ensuring you master the lifecycle of data.</p>
                    <p>From data governance and architecture to quality management and security, our program equips you with the strategic skills needed to lead data initiatives and ensure organizational data integrity.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Core <span className="text-gradient">Domains</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Governance & Architecture</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Strategy | Structure</p>
                        <ul className="styled-list">
                            <li>Data governance frameworks</li>
                            <li>Data modeling & architecture</li>
                            <li>Metadata management lifecycle</li>
                            <li>Strategic data roadmaps</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Quality & Security</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Integrity | Protection</p>
                        <ul className="styled-list">
                            <li>Data quality assessment</li>
                            <li>Security and privacy protocols</li>
                            <li>Master data management</li>
                            <li>Regulatory compliance (GDPR etc)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq?</span></h2>
                <ul className="styled-list">
                    <li><strong>Industry Experts:</strong> Learn from data architects and CDOs with global experience.</li>
                    <li><strong>DAMA Aligned:</strong> Curriculum focused on the recognized DMBOK standards.</li>
                    <li><strong>Practical Focus:</strong> Real-world database and governance case studies.</li>
                    <li><strong>Career Growth:</strong> Preparation for senior roles like Data Manager and Architect.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Data Warehouse and IT Professionals</li>
                        <li>Database Administrators and Analysts</li>
                        <li>Compliance and Governance Officers</li>
                        <li>Aspiring CDOs and Data Strategists</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master the 11 domains of data management</li>
                        <li>Implement robust data governance models</li>
                        <li>Audit and Improve organizational data quality</li>
                        <li>Earn a recognized Professional Certification</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Certified Data Management Professional <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Certified Data Management Professional program?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the Certified Data Management Professional structure and requirements.</p>
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
export default DataManagementCourse;
