import CourseLayout from '../../components/CourseLayout';
const SATCourse = () => {
    const infoData = {
        "Programs": "3 Options",
        "Duration": "20-50 Hours",
        "Format": "Online/Offline",
        "Focus Areas": "Math, Reading, Writing",
        "Age Group": "15-18 Years",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="SAT Preparation in Sharjah"
            subtitle="Open doors to world-class universities with Nitaq's expert-led SAT Preparation in Sharjah."
            infoData={infoData}
        >
            {/* Course Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq, our SAT Preparation Course in Sharjah is designed to help students achieve strong SAT scores while building the confidence required to perform effectively on exam day. The program focuses on developing a clear understanding of the SAT structure and question patterns.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Students receive expert-led training in key areas such as Evidence-Based Reading and Writing, Mathematics, and test-taking strategies. Through structured lessons and timed practice, learners improve accuracy, speed, and critical reasoning skills.
                    </p>
                    <p>
                        Beyond exam preparation, the course supports students in navigating the international university admissions journey. By strengthening academic discipline and time management, Nitaq’s SAT Preparation Course equips students with the mindset needed to succeed globally.
                    </p>
                </div>
            </div>

            {/* SAT Tracks */}
            <div className="content-card">
                <h2>Our SAT <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>SAT Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>50 Hours | Comprehensive</p>
                        <ul className="styled-list">
                            <li>Complete SAT syllabus coverage</li>
                            <li>Extensive unlimited practice hub</li>
                            <li>Full-length mock exam tracking</li>
                            <li>Detailed performance feedback</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>SAT Standard</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>30 Hours | Foundation</p>
                        <ul className="styled-list">
                            <li>Core concept and foundation builds</li>
                            <li>Guided expert practice hours</li>
                            <li>Proven test-taking strategies</li>
                            <li>SAT registration assistance</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>SAT Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>20 Hours | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Targeted revision of core concepts</li>
                            <li>Essential time-management tips</li>
                            <li>High-impact focused drills</li>
                            <li>Final week exam readiness</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for SAT?</span></h2>
                <ul className="styled-list">
                    <li><strong>Personalized Plans:</strong> customized study plans designed around individual student strengths and speed.</li>
                    <li><strong>Trusted Specialists:</strong> learn from experienced trainers who understand the College Board format inside out.</li>
                    <li><strong>Smart Strategies:</strong> master time management, question analysis, and techniques to avoid common pitfalls.</li>
                    <li><strong>Digital SAT Tools:</strong> use only the latest College Board–approved materials and digital practice systems.</li>
                    <li><strong>Consistent High Scores:</strong> our students regularly achieve results that secure admissions to leading global universities.</li>
                    <li><strong>End-to-End Support:</strong> from preparation to registration, Nitaq supports you at every stage of the journey.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>High school students targeting global universities</li>
                        <li>Transfer students seeking program upgrades</li>
                        <li>Homeschool students needing dual-certified scores</li>
                        <li>Test-takers aiming to improve previous results</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master advanced SAT Math & English components</li>
                        <li>Improve critical reasoning and analytical skills</li>
                        <li>Efficient test-taking & time management</li>
                        <li>Confidence to hit target competitive scores</li>
                    </ul>
                </div>
            </div>
        </CourseLayout>
    );
};

export default SATCourse;
