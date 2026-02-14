import CourseLayout from '../../components/CourseLayout';
const CPCDCourse = () => {
    const infoData = {
        "Level": "HR & Management",
        "Certification": "CPCD Certificate",
        "Duration": "3-4 Months",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Professionals & Leaders",
        "Authorization": "SPEA Authorized"
    };
    return (
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
        </CourseLayout>
    );
};
export default CPCDCourse;
