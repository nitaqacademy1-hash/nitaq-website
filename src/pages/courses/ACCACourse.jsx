import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';

const ACCACourse = () => {
    const infoData = {
        "Qualification": "ACCA (UK) Certification",
        "Levels": "Applied Knowledge, Skills, Professional",
        "Duration": "Flexible (Module-based)",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Finance & Accounting Professionals",
        "Authorization": "SPEA Authorized"
    };


    const courseSchema = {
        name: 'ACCA Preparation Course Sharjah',
        description: 'Comprehensive ACCA coaching in Sharjah covering all levels — Applied Knowledge, Applied Skills, and Strategic Professional modules. Led by experienced ACCA members.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'ACCA Qualification: Financial Accounting, Management Accounting, Audit, Strategic Business Reporting',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What is ACCA and who should take it?',
            answer: 'ACCA (Association of Chartered Certified Accountants) is a globally recognized accounting qualification ideal for those pursuing finance and accounting careers at international organizations.',
        },
        {
            question: 'How long does it take to complete ACCA?',
            answer: 'It typically takes 2–3 years to complete all ACCA papers, depending on exemptions granted and your individual study pace.',
        },
        {
            question: 'Do you provide coaching for all ACCA papers at Nitaq?',
            answer: 'Yes, we provide complete coaching and guidance for all levels — Applied Knowledge, Applied Skills, and Strategic Professional modules.',
        },
        {
            question: 'Is ACCA valuable in the UAE job market?',
            answer: 'Yes, ACCA professionals are highly sought after in the UAE. Top banks, audit firms, and MNCs actively prefer ACCA-certified candidates.',
        },
        {
            question: 'Do you provide ACCA exam preparation and mock tests?',
            answer: 'Yes, mock exams, intensive revision sessions, and one-on-one guidance are all included in our ACCA preparation program.',
        },
        {
            question: 'What career opportunities are available after ACCA?',
            answer: 'ACCA opens doors to roles such as accountant, auditor, financial analyst, finance manager, and CFO in global organizations.',
        },
    ];

    return (
        <>
            <SEO
                title="ACCA Course Sharjah | Chartered Accountant Coaching UAE | Nitaq Academy"
                description="ACCA qualification coaching in Sharjah at Nitaq Academy. Expert tutors for all levels — Applied Knowledge, Skills & Strategic Professional. SPEA Authorized. Online & offline."
                path="/acca-course"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="ACCA - Association of Chartered Certified Accountants"
            subtitle="Become a globally recognized finance professional with our comprehensive ACCA preparation program."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Association of Chartered Certified Accountants (ACCA) is a leading global professional accounting body. ACCA qualification is recognized by employers worldwide and provides you with the skills and knowledge required to excel in the fields of accounting, finance, and management.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Our ACCA preparation course at Nitaq Training Center is designed to guide you through every stage of the qualification process. We provide expert tuition for all levels—from Applied Knowledge and Applied Skills to Strategic Professional modules.
                    </p>
                    <p>
                        With a focus on conceptual understanding, exam-style practice, and professional development, Nitaq ensures you are not just exam-ready, but industry-ready for a successful career in global finance.
                    </p>
                </div>
            </div>

            {/* ACCA Tracks */}
            <div className="content-card">
                <h2>Our Study <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Applied Knowledge</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Foundation | Business</p>
                        <ul className="styled-list">
                            <li>Business and Technology (BT)</li>
                            <li>Management Accounting (MA)</li>
                            <li>Financial Accounting (FA)</li>
                            <li>Strong conceptual foundation</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Applied Skills</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Technical | Comprehensive</p>
                        <ul className="styled-list">
                            <li>Corporate and Business Law</li>
                            <li>Performance Management</li>
                            <li>Taxation & Financial Reporting</li>
                            <li>Audit & Assurance focus</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Professional</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Leadership | Strategic</p>
                        <ul className="styled-list">
                            <li>Strategic Business Reporting</li>
                            <li>Strategic Business Leader</li>
                            <li>Advanced Financial Management</li>
                            <li>Executive level case studies</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for ACCA?</span></h2>
                <ul className="styled-list">
                    <li><strong>Certified Tuition:</strong> sessions led by experienced ACCA members and industry veterans.</li>
                    <li><strong>Modular Approach:</strong> classes structured to match the official quarterly exam cycles.</li>
                    <li><strong>Intensive Revision:</strong> dedicated crash courses and mock sessions before every exam window.</li>
                    <li><strong>Personalized Mentorship:</strong> help with registration, ethics modules, and career guidance.</li>
                    <li><strong>Flexible Batches:</strong> tailored for working professionals and university students.</li>
                    <li><strong>Updated Resources:</strong> access to BPP and Kaplan approved study materials and assessments.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Commerce and Finance Graduates</li>
                        <li>Accounting Professionals seeking global status</li>
                        <li>High School Students targeting finance careers</li>
                        <li>Aspiring CFOs and Finance Directors</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master international accounting standards</li>
                        <li>Advanced strategic financial management</li>
                        <li>Global network and professional ethics</li>
                        <li>Readiness for leadership roles in MNCs</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>ACCA COURSE <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is ACCA and who should take it?</summary>
                        <div className="faq-accordion-content">
                            <p>ACCA is a globally recognized accounting certification ideal for students pursuing careers in finance and accounting.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How long does it take to complete ACCA?</summary>
                        <div className="faq-accordion-content">
                            <p>It typically takes 2–3 years depending on the number of papers and student pace.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Do you provide coaching for all ACCA papers?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, complete coaching and guidance are provided for all levels.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is ACCA valuable in the UAE?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, ACCA professionals are highly in demand in the UAE job market.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Do you provide exam preparation support?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, mock exams, revision sessions, and guidance are included.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What career opportunities are available?</summary>
                        <div className="faq-accordion-content">
                            <p>Roles include accountant, auditor, financial analyst, and finance manager.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};

export default ACCACourse;
