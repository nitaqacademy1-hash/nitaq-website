import CourseLayout from '../../components/CourseLayout';
const CHRMCourse = () => {
    const infoData = {
        "Level": "HR Professionals",
        "Certification": "CHRM Certificate",
        "Duration": "3-6 Months",
        "Mode": "Online | Offline | Hybrid",
        "Focus": "Strategic HR Management",
        "Authorization": "SPEA Authorized"
    };
    return (
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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>
                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Strategic HR</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Leadership | Strategy</p>
                        <ul className="styled-list">
                            <li>Organizational design principles</li>
                            <li>HR strategy alignment with business</li>
                            <li>Change management frameworks</li>
                            <li>HR metrics and data analytics</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
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
        </CourseLayout>
    );
};
export default CHRMCourse;
