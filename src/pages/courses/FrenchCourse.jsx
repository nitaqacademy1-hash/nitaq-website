import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const FrenchCourse = () => {
    const infoData = {
        "Levels": "A1 to C2 (CEFR)",
        "Exam Prep": "DELF / DALF / TCF",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Kids, Adults & Professionals",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="French Language Course"
            subtitle="Master the language of love, culture, and international business with our comprehensive French programs."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        French is more than just a language; it's a gateway to a rich world of literature, art, gastronomy, and global diplomacy. As one of the most widely spoken languages across five continents, proficiency in French opens up numerous opportunities for career advancement, international travel, and cultural enrichment.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our French language program is designed for learners of all ages and backgrounds. Whether you're a complete beginner or looking to polish your professional French, our expert instructors use immersive teaching methods to ensure you gain confidence in speaking, listening, reading, and writing.
                    </p>
                    <p>
                        Our curriculum follows the Common European Framework of Reference for Languages (CEFR), ensuring your progress is recognized globally. We also provide specialized preparation for official French proficiency exams like DELF and DALF.
                    </p>
                </div>
            </div>

            {/* French Programs */}
            <div className="content-card">
                <h2>Our French <span className="text-gradient">Specializations</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>General French</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>A1-C2 | All Ages</p>
                        <ul className="styled-list">
                            <li>Comprehensive grammar & vocabulary builds</li>
                            <li>Active conversational skill focuses</li>
                            <li>Immersive cultural discovery projects</li>
                            <li>Supportive classroom learning environment</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>DELF/DALF Prep</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Exam Focused | Intensive</p>
                        <ul className="styled-list">
                            <li>Targeted global exam strategies</li>
                            <li>Mock tests & rigorous time drills</li>
                            <li>Mastery of all four exam modules</li>
                            <li>Personalized expert scoring feedback</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Business French</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Professional | Corporate</p>
                        <ul className="styled-list">
                            <li>Workplace communication & etiquette</li>
                            <li>Industry-specific technical terminology</li>
                            <li>Advanced presentation & negotiation</li>
                            <li>French corporate culture insights</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for French?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert Trainers:</strong> Master the language with qualified native-level instructors.</li>
                    <li><strong>Immersive Methodology:</strong> Active sessions focusing on real-world fluency from Day 1.</li>
                    <li><strong>Flexible Batches:</strong> Morning, evening, and weekend slots designed to fit your busy life.</li>
                    <li><strong>Small Batch Sizes:</strong> Ensuring premium personalized attention and interactive sessions.</li>
                    <li><strong>CEFR Aligned:</strong> Internationally recognized curriculum and certification path from A1 to C2.</li>
                    <li><strong>Modern Resources:</strong> Full access to digital tools, multimedia aids, and updated materials.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Students planning study in French countries</li>
                        <li>Professionals in international organizations</li>
                        <li>Global travelers and culture enthusiasts</li>
                        <li>Anyone passionate about the French language</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Speak confidently in social and work settings</li>
                        <li>Master the core grammar & vocabulary foundation</li>
                        <li>Read & write with ease on various topics</li>
                        <li>Full readiness for official DELF/DALF exams</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default FrenchCourse;
