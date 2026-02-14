import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const AcademicExcellenceCourse = () => {
    const infoData = {
        "Levels/Grades": "All grades",
        "Subjects": "All Subjects",
        "Curricula": "International (IB, IGCSE, CBSE)",
        "Duration": "3, 6 Months & Annual",
        "Mode": "Online | Offline",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="Academic Excellence"
            subtitle="Strategic academic support for international students to master their curriculum and excel in every assessment."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p>
                        This program focuses on strengthening students’ academic mindset by promoting discipline, goal-setting, and effective study strategies that are essential for long-term academic success. Learners are guided to develop structured learning habits that improve focus, consistency, and independent academic performance.
                    </p>
                    <p>
                        Students are also introduced to international academic ethics, plagiarism awareness, and proper referencing techniques. Through guided practice, they gain a clear understanding of university expectations, assessment rubrics, and global grading systems.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        In addition, the course supports digital literacy and collaboration skills, preparing students for both in-person and online learning environments. We empower students to transition smoothly into higher education with confidence.
                    </p>
                </div>
            </div>

            {/* Academic Programs */}
            <div className="content-card">
                <h2>Our <span className="text-gradient">Excellence Tracks</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>
                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Complete Program</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>All Subjects | Annual</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Comprehensive subject coverage</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Personalized learning plans</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Regular progress tracking</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Expert dedicated tutors</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Subject-Specific</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Targeted | Flexible</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Focused training on key subjects</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Deep concept clarity</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Practice worksheets & kits</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Doubt-clearing sessions</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Exam Booster</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Intensive | Revision</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Intensive revision sessions</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Mock tests & past papers</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Time management drills</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Result-oriented coaching</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Highlights</span></h2>
                <ul className="card-list">
                    <li>Multi-Curricula Support: IB, IGCSE, CBSE, ICSE & more</li>
                    <li>Holistic Development: Beyond grades to real understanding</li>
                    <li>Interactive Tutors: Passionate educators with global experience</li>
                    <li>Progress Analytics: Data-driven insights into student growth</li>
                    <li>University Readiness: Bridging the gap between school and college</li>
                    <li>Flexible Formats: Online and offline batches for convenience</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Master core academic principles & study ethics</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Apply knowledge to complex real-world problems</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Build confidence for high-stakes assessments</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Accelerate professional & academic growth</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>University Admissions Path</h3>
                    <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Gateway to top-ranked UK, USA & CA universities</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Merit-based scholarship opportunities</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Stand out in the competitive admissions process</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Build solid credentials for your dream career</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default AcademicExcellenceCourse;
