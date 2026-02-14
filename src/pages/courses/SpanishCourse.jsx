import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const SpanishCourse = () => {
    const infoData = {
        "Levels": "A1 to C2 (CEFR)",
        "Exam Prep": "DELE / SIELE",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "All Age Groups",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="Spanish Language Course"
            subtitle="Join over 500 million speakers worldwide. Learn Spanish for travel, business, or personal growth."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        Spanish is the second most spoken language in the world by native speakers and an official language in 21 countries. From the vibrant streets of Madrid to the bustling markets of Mexico City, Spanish is a key that unlocks a world of diverse cultures, rich history, and expanding business opportunities.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our Spanish language courses are designed to be fun, interactive, and highly effective. Our expert instructors focus on building your confidence in real-life communication, ensuring you can navigate social, travel, and professional situations with ease.
                    </p>
                    <p>
                        We follow the Common European Framework of Reference for Languages (CEFR), offering levels from A1 (Beginner) to C2 (Mastery). Our program also includes specialized preparation for the DELE exams, the official certification of Spanish proficiency.
                    </p>
                </div>
            </div>

            {/* Spanish Programs */}
            <div className="content-card">
                <h2>Our Spanish <span className="text-gradient">Specializations</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', marginTop: '30px' }}>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>General Spanish</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>A1-C2 | Interactive</p>
                        <ul className="styled-list">
                            <li>Balanced four-skill focus sessions</li>
                            <li>Practical daily vocabulary drills</li>
                            <li>Cultural immersion and discussion</li>
                            <li>Supportive small group dynamics</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>DELE Exam Prep</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Certification | Intensive</p>
                        <ul className="styled-list">
                            <li>Requirement comprehensive review</li>
                            <li>Past exam paper intensive practice</li>
                            <li>Oral & written module techniques</li>
                            <li>Individualized coaching sessions</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ textAlign: 'left', borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Spanish for Travel</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Practical | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Essential phrases for travelers</li>
                            <li>Real-world navigation simulations</li>
                            <li>Social interaction etiquette</li>
                            <li>Regional dialectal culture tips</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for Spanish?</span></h2>
                <ul className="styled-list">
                    <li><strong>Experienced Trainers:</strong> passionate instructors with deep linguistic and cultural expertise.</li>
                    <li><strong>Active Learning:</strong> strong focus on speaking and listening through immersive role-plays.</li>
                    <li><strong>Flexible Batches:</strong> convenient weekday and weekend options to fit your lifestyle.</li>
                    <li><strong>Personalized Attention:</strong> small class sizes ensuring a tailored and encouraging atmosphere.</li>
                    <li><strong>Global Standards:</strong> modern curriculum strictly aligned with the international CEFR framework.</li>
                    <li><strong>Modern Resources:</strong> full access to premium study materials and digital interactive tools.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', marginBottom: '30px' }}>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Travelers visiting Spain or Latin America</li>
                        <li>Professionals with Spanish-speaking partners</li>
                        <li>Students adding a global language profile</li>
                        <li>Culture enthusiasts and avid explorers</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Speak confidently in everyday interactions</li>
                        <li>Understand native speakers in various contexts</li>
                        <li>Read and write Spanish texts with clarity</li>
                        <li>Pass official DELE proficiency examinations</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default SpanishCourse;
