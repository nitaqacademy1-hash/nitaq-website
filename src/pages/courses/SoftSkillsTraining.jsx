import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const SoftSkillsTraining = () => {
    const infoData = {
        "Certification": "Professional Certification",
        "Focus": "Interpersonal Excellence",
        "Duration": "1-2 Months",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="Soft Skills Training"
            subtitle="Master the interpersonal skills that define modern leadership and professional excellence in the automated age."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        In today's highly competitive professional landscape, technical expertise alone is not enough. The Soft Skills Training program at Nitaq Training Center is designed to equip you with the "people skills" that are essential for career advancement and effective leadership.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Soft skills—including communication, emotional intelligence, critical thinking, and teamwork—are the foundation of a successful career. At Nitaq, we provide a dynamic learning environment where you can practice these skills through real-world business scenarios.
                    </p>
                    <p>
                        Our expert trainers focus on practical application, ensuring that you can immediately implement what you learn. Whether you are a team leader or an aspiring executive, our training will help you communicate with impact and lead with confidence.
                    </p>
                </div>
            </div>

            {/* Soft Skills Tracks */}
            <div className="content-card">
                <h2>Training <span className="text-gradient">Tracks</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Communication Mastery</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Persuasion | Influence</p>
                        <ul className="styled-list">
                            <li>Effective verbal & non-verbal queues</li>
                            <li>Active listening for leaders</li>
                            <li>Public speaking & presentation</li>
                            <li>Business writing & email etiquette</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Leadership & EQ</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Dynamics | Collaboration</p>
                        <ul className="styled-list">
                            <li>Emotional Intelligence (EQ) mastery</li>
                            <li>Leadership styles & application</li>
                            <li>Team dynamics & trust building</li>
                            <li>Advanced conflict management</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Personal Effectiveness</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Productivity | Logic</p>
                        <ul className="styled-list">
                            <li>Time management & flow states</li>
                            <li>Critical thinking & problem solving</li>
                            <li>Stress management & resilience</li>
                            <li>Adaptability in shifting markets</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Interactive Workshops:</strong> Engaging experiential activities and simulation role-plays.</li>
                    <li><strong>Real-world Lab:</strong> Practice critical professional interactions in a safe, guided environment.</li>
                    <li><strong>Global Facilitators:</strong> Learn from experts who have coached Fortune 500 executives.</li>
                    <li><strong>360° Feedback:</strong> Receive detailed, personalized critiques on your communication style.</li>
                    <li><strong>Future-Proofing:</strong> Focus on the human skills that AI and automation cannot replicate.</li>
                    <li><strong>Flexible Logistics:</strong> Convenient weekend and evening batches for busy professionals.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Middle Managers & Project Supervisors</li>
                        <li>Customer Success & Client Relations Teams</li>
                        <li>Sales Professionals needing high influence</li>
                        <li>Graduates preparing for the global job market</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Express ideas with charisma and clarity</li>
                        <li>Inspire and motivate high-performing teams</li>
                        <li>Navigate complex workplace politics with EQ</li>
                        <li>Build productive, high-trust relationships</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default SoftSkillsTraining;
