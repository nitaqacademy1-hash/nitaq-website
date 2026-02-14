import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const PTECourse = () => {
    const infoData = {
        "Test Type": "Computer-Based",
        "Modules": "Speaking, Writing, Reading, Listening",
        "Duration": "4-8 Weeks",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Students & Professionals",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="PTE - Pearson Test of English"
            subtitle="Master the Pearson Test of English with expert-led coaching. Fast results, objective scoring, and proven success strategies."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Pearson Test of English (PTE) is a globally recognized, computer-based English proficiency test designed for students and professionals planning to study, work, or migrate to English-speaking countries like Australia, New Zealand, Canada, and the UK. Known for its fast results and objective scoring, PTE is a preferred choice for many.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our PTE preparation program is designed to help you master the test format and scoring criteria. Our expert trainers provide intensive practice in all four modules—Speaking, Writing, Reading, and Listening—ensuring you achieve your desired score with confidence.
                    </p>
                    <p>
                        With a blend of online and offline flexibility, comprehensive study resources, and personalized mentorship, Nitaq prepares you for both the PTE exam and your future international journey.
                    </p>
                </div>
            </div>

            {/* PTE Tracks */}
            <div className="content-card">
                <h2>Preparation <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>PTE Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>4-6 Weeks | Daily</p>
                        <ul className="styled-list">
                            <li>Complete module coverage drills</li>
                            <li>Daily rigorous practice sessions</li>
                            <li>Full-length mock exam tracking</li>
                            <li>Personalized feedback reports</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>PTE Standard</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>8-10 Weeks | Flexible</p>
                        <ul className="styled-list">
                            <li>Ideal for working professionals</li>
                            <li>All 20 task types focus training</li>
                            <li>Regular scheduled practice tests</li>
                            <li>Weekly doubt-clearing sessions</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>PTE Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>2 Weeks | Fast-Track</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li>Quick core concept revision</li>
                            <li>High-weightage task focus</li>
                            <li>Essential exam-day tips</li>
                            <li>Intensive final mock rounds</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for PTE?</span></h2>
                <ul className="styled-list">
                    <li><strong>Certified Trainers:</strong> who deeply understand the PTE algorithm and AI scoring.</li>
                    <li><strong>Exam Simulation:</strong> software that precisely mimics the official PTE environment.</li>
                    <li><strong>Comprehensive Resources:</strong> authentic question banks and strategy guides.</li>
                    <li><strong>Personalized Attention:</strong> small batch sizes and 1-on-1 performance reviews.</li>
                    <li><strong>Flexible Learning:</strong> options adaptable to the busy schedules of professionals.</li>
                    <li><strong>End-to-End Support:</strong> from diagnostic tests to final score attainment.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Students applying for degrees abroad</li>
                        <li>Job Seekers targeting global markets</li>
                        <li>PR and Work Visa applicants</li>
                        <li>Professionals needing fast certification</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Complete mastery of all 20 task types</li>
                        <li>Improved Reading & Listening precision</li>
                        <li>Advanced Writing & Essay structuring</li>
                        <li>Global readiness for immigration goals</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default PTECourse;
