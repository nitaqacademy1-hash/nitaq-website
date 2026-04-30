import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const GRECourse = () => {
    const infoData = {
        "Level": "Graduate Aspirants",
        "Mock Exams": "10 Full-Length Tests",
        "Focus Areas": "Quant, Verbal, Writing",
        "Support": "Personalized Mentoring",
        "Mode": "Online | Offline | Hybrid",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="GRE Preparation"
            subtitle="Secure your admission to top graduate schools with strategic GRE coaching and expert guidance."
            infoData={infoData}
        >
            {/* About the Course */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Graduate Record Examination (GRE) is the most widely accepted standardized test for admission to master's and doctoral programs at universities around the world. It assesses your Verbal Reasoning, Quantitative Reasoning, and Analytical Writing skills.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our GRE preparation program is designed to simplify the complex and help you master the test format. Our tutors are experts in identifying your learning gaps and providing the right strategies to bridge them.
                    </p>
                    <p>
                        Whether you are aiming for a technical, scientific, or humanities-based graduate program, Nitaq provides the resources, practice, and mentorship needed to boost your GRE score and enhance your global university application.
                    </p>
                </div>
            </div>

            {/* GRE Programs */}
            <div className="content-card">
                <h2>Our GRE <span className="text-gradient">Programs</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GRE Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Accelerated | Comprehensive</p>
                        <ul className="styled-list">
                            <li>Full syllabus drill-down</li>
                            <li>Extensive vocabulary building</li>
                            <li>10 realistic mock examinations</li>
                            <li>Weekly performance audits</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>GRE Standard</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Paced | Deep Dive</p>
                        <ul className="styled-list">
                            <li>Foundational concept mastery</li>
                            <li>Section-wise strategy guides</li>
                            <li>Regular scheduled practice</li>
                            <li>University application support</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GRE Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Crash Course | Focused</p>
                        <ul className="styled-list">
                            <li>High-impact formula revision</li>
                            <li>Advanced test-taking tips</li>
                            <li>Focused section practice</li>
                            <li>Final week exam readiness</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Adaptive Practice:</strong> resources designed to mimic the computer-adaptive nature of the GRE.</li>
                    <li><strong>Quantitative Mastery:</strong> step-by-step guidance on complex math and data interpretation tasks.</li>
                    <li><strong>Verbal Excellence:</strong> techniques for reading comprehension and text completion success.</li>
                    <li><strong>Analytical Writing:</strong> specialized feedback on essay structuring and logical flow.</li>
                    <li><strong>Mentor Support:</strong> dedicated communication for personalized student-parent-tutor interaction.</li>
                    <li><strong>Path to Admission:</strong> expert consultation on selecting the right graduate programs for you.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>University Path</h3>
                    <ul className="styled-list">
                        <li>Access to top global graduate programs</li>
                        <li>Eligibility for research and teaching assistantships</li>
                        <li>Competitive edge in international applications</li>
                        <li>Global recognized credential for your career</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master advanced GRE Quantitative skills</li>
                        <li>Boost Verbal logic and comprehension</li>
                        <li>Construct high-scoring analytical essays</li>
                        <li>Full readiness for competitive exam scores</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>GRE <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is GRE exam?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the GRE structure and requirements.</p>
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

export default GRECourse;
