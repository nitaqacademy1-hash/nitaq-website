import CourseLayout from '../../components/CourseLayout';
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

    return (
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>HRM Foundation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Basics | Administration</p>
                        <ul className="styled-list">
                            <li>Introduction to HR Management</li>
                            <li>HR Administrative operations</li>
                            <li>Employee record systems</li>
                            <li>Onboarding & Offboarding</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>HR Practitioner</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Execution | Talent</p>
                        <ul className="styled-list">
                            <li>Recruitment & Interviewing</li>
                            <li>Basic Payroll & Benefits</li>
                            <li>Performance appraisal basics</li>
                            <li>Internal communication</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
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

            <WhyNitaq />
        </CourseLayout>
    );
};

export default HRMCourse;
