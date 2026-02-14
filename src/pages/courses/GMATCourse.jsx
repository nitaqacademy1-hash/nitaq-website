import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const GMATCourse = () => {
    const infoData = {
        "Level": "MBA Aspirants",
        "Mock Exams": "10 Full-Length Tests",
        "Focus Areas": "Quant, Verbal, AWA",
        "Support": "One-on-One Mentoring",
        "Age Group": "20+ Years",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="GMAT Preparation"
            subtitle="Master the GMAT for admission into top-ranked global business schools with strategic coaching."
            infoData={infoData}
        >
            {/* About the Course */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Graduate Management Admission Test (GMAT) is a globally recognized standardized exam that evaluates a candidate's abilities in Quantitative Reasoning, Verbal Reasoning, and Analytical Writing. It is the gold standard for admission into MBA programs worldwide.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        The GMAT Preparation Course at Nitaq is thoughtfully designed to equip students with the skills, strategies, and structured study approach required to perform confidently. Our program focuses not only on content mastery but also on test-taking efficiency and strategic thinking.
                    </p>
                    <p>
                        At Nitaq, our trainers are accomplished GMAT performers who understand the academic pressures and professional aspirations of students. We guide, support, and walk alongside you as you prepare to conquer the GMAT with total confidence.
                    </p>
                </div>
            </div>

            {/* GMAT Programs */}
            <div className="content-card">
                <h2>Our GMAT <span className="text-gradient">Programs</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GMAT Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Full Course | Online/Offline</p>
                        <ul className="styled-list">
                            <li>Complete syllabus coverage drills</li>
                            <li>Unlimited practice hub access</li>
                            <li>10 full-length mock exams</li>
                            <li>Performance analysis reports</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>GMAT Standard</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Flexible | Online/Offline</p>
                        <ul className="styled-list">
                            <li>Core concept mastery sessions</li>
                            <li>Guided expert practice hours</li>
                            <li>Test-taking strategy coaching</li>
                            <li>Application & Registration help</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>GMAT Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Modular | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Targeted section improvement</li>
                            <li>Quick revision strategies</li>
                            <li>Focused section practice drills</li>
                            <li>Intensive final module brush-up</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Key Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Comprehensive Resources:</strong> Unlimited access to Nitaq's extensive prep library and premium materials.</li>
                    <li><strong>Structured Guidance:</strong> Expertly designed instruction that supports you at every stage of the journey.</li>
                    <li><strong>Full-Length Mocks:</strong> Complete GMAT-style exams followed by deep performance reviews and feedback.</li>
                    <li><strong>Career Consultation:</strong> Expert-led sessions to explore business school options and align your GMAT goals.</li>
                    <li><strong>Dedicated Mentors:</strong> Communication framework ensuring focused, one-on-one academic interaction.</li>
                    <li><strong>Seamless Support:</strong> Step-by-step assistance with GMAT registration and scheduling.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>University Path</h3>
                    <ul className="styled-list">
                        <li>Entry to top-ranked MBA programs globally</li>
                        <li>Eligibility for merit-based scholarships</li>
                        <li>Competitive edge in admission procedures</li>
                        <li>Global recognition by thousands of institutions</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master advanced Quantitative reasoning</li>
                        <li>Improve Verbal analysis and logic skills</li>
                        <li>Efficient test-taking & time management</li>
                        <li>Confidence to hit target competitive scores</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default GMATCourse;
