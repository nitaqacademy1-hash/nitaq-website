import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const FoundationJEECourse = () => {
    const infoData = {
        "Grades": "Grade 8-12",
        "Subjects": "Physics / Chem / Math",
        "Curricula": "CBSE / ICSE / IB",
        "Duration": "Annual Program",
        "Age Group": "13-18 Years",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="Foundation for JEE/NEET"
            subtitle="Secure your future in engineering and medicine with a rock-solid academic foundation in Math and Science."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        Welcome to Nitaq’s Foundation for JEE/NEET course! This program is specifically engineered to help students build the strong academic base required for high-stakes competitive examinations. We focus on developing deep conceptual clarity in core subjects.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        The program emphasizes concept-based learning and analytical thinking over rote memorization. Under the guidance of experienced faculty, students engage in regular practice sessions and exam-oriented exercises that gradually enhance accuracy, speed, and confidence.
                    </p>
                    <p>
                        In addition, the course nurtures discipline and time management from an early stage, preparing students for the challenges of advanced preparation. We equip students with the skills needed to perform effectively in JEE/NEET and beyond.
                    </p>
                </div>
            </div>

            {/* Foundation Tracks */}
            <div className="content-card">
                <h2>Specialized <span className="text-gradient">Foundation Paths</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>JEE Foundation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Engineering Track</p>
                        <ul className="styled-list">
                            <li>Focus on Physics, Chemistry, Math</li>
                            <li>Advanced problem-solving logic</li>
                            <li>JEE Main/Advanced pattern drills</li>
                            <li>Analytical reasoning modules</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>NEET Foundation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Medical Track</p>
                        <ul className="styled-list">
                            <li>Biology, Physics, Chemistry focus</li>
                            <li>NEET exam pattern practice</li>
                            <li>Medical entrance logic & memory</li>
                            <li>Conceptual bio-science clarity</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Complete Program</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Integrated Science</p>
                        <ul className="styled-list">
                            <li>Comprehensive NCERT alignment</li>
                            <li>Dual preparation for JEE & NEET</li>
                            <li>Regular benchmark assessments</li>
                            <li>Early career counseling sessions</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Concept-First Approach:</strong> We move from foundations to advanced application seamlessly.</li>
                    <li><strong>Expert Faculty:</strong> Learn from masters who have coached thousands to top-tier ranks.</li>
                    <li><strong>Rigorous Testing:</strong> Periodic mock exams mirroring the actual competitive environment.</li>
                    <li><strong>Personalized Analytics:</strong> Detailed reports to identify and fix learning gaps instantly.</li>
                    <li><strong>Attested Excellence:</strong> SPEA Authorized and UAE Government attested curriculum.</li>
                    <li><strong>Future-Ready:</strong> Building the academic mindset for elite global universities.</li>
                </ul>
            </div>

            {/* University path */}
            <div className="content-card">
                <h2>University Admissions <span className="text-gradient">Path</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
                    <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Global Access</h4>
                        <p style={{ fontSize: '0.9rem' }}>Entry to top-ranked international universities across the USA, UK, and Canada.</p>
                    </div>
                    <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Scholarships</h4>
                        <p style={{ fontSize: '0.9rem' }}>Competitive scores open doors to significant merit-based financial aid.</p>
                    </div>
                    <div style={{ background: 'var(--bg-light)', padding: '20px', borderRadius: '15px' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Career Edge</h4>
                        <p style={{ fontSize: '0.9rem' }}>Stand out in the admissions process with exceptional certified credentials.</p>
                    </div>
                </div>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Grade 8 to 12 students aiming for JEE/NEET</li>
                        <li>Ambitious learners seeking elite science foundations</li>
                        <li>Students planning for International Engineering/Medicine</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Mastery over fundamental Math & Science laws</li>
                        <li>High proficiency in competitive problem solving</li>
                        <li>Improved school grades and academic discipline</li>
                        <li>Confidence to handle high-pressure examinations</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default FoundationJEECourse;
