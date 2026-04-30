import CourseLayout from '../../components/CourseLayout';
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
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>CPCD - Certified Professional in Career Development <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is CPCD - Certified Professional in Career Development exam?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the CPCD - Certified Professional in Career Development structure and requirements.</p>
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
export default CPCDCourse;
