import CourseLayout from '../../components/CourseLayout';
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
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is CHRM - Certified Human Resource Manager exam?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the CHRM - Certified Human Resource Manager structure and requirements.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>How long is the course?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>The duration varies based on the proficiency level and chosen track. Most programs range from 20 to 50 hours.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What score is required?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Target scores depend on your specific university or professional goals. We provide customized plans to help you reach your required score.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>Do you provide mock tests?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Yes, comprehensive mock tests and practice materials are an integral part of all our training programs.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>Is online available?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Yes, we offer both interactive online classes and traditional offline in-person training formats.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--accent-color)' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is the fee?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Our fees are highly competitive. Please reach out to our admission team for the latest pricing and ongoing offers.</p>
                    </div>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>When can I start?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>We have flexible intake dates with new batches starting frequently. Contact us to find the next available schedule.</p>
                    </div>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};
export default CHRMCourse;
