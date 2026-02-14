import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const SpokenArabic = () => {
    const infoData = {
        "Levels": "Beginner to Advanced",
        "Dialect": "Emirati / Modern Standard",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Expats & Professionals",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="Spoken Arabic Course"
            subtitle="Connect with the local culture and community. Master practical Arabic for daily life and business in the UAE."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        Living and working in the UAE is a much richer experience when you can communicate in the local language. Our Spoken Arabic course is specifically designed for non-native speakers who want to gain practical, everyday conversational skills.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, we focus on the most useful vocabulary and phrases for real-life situations—from greeting colleagues and neighbors to navigating the souks and government offices. Our approach is interactive and immersive, ensuring you start speaking from day one.
                    </p>
                    <p>
                        Whether you are a complete beginner or looking to refine your existing skills, our experienced trainers will guide you through the nuances of Arabic pronunciation, grammar, and cultural etiquette.
                    </p>
                </div>
            </div>

            {/* Arabic Programs */}
            <div className="content-card">
                <h2>Our Arabic <span className="text-gradient">Programs</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Conversational Arabic</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Daily Life | Practical</p>
                        <ul className="styled-list">
                            <li>Greetings & social etiquette mastery</li>
                            <li>Shopping & dining out simulations</li>
                            <li>Direction & transportation essentials</li>
                            <li>Emergency phrases & core numbers</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Business Arabic</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Professional | Workplace</p>
                        <ul className="styled-list">
                            <li>Workplace etiquette & protocols</li>
                            <li>Professional business terminology</li>
                            <li>Handling business calls & meetings</li>
                            <li>Networking across the Middle East</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Arabic for Kids</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Fun | Interactive</p>
                        <ul className="styled-list">
                            <li>Learning through songs & stories</li>
                            <li>Foundational alphabet & phonics</li>
                            <li>Colors & basic everyday phrases</li>
                            <li>Engaging social discovery games</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for Arabic?</span></h2>
                <ul className="styled-list">
                    <li><strong>Native-Level Trainers:</strong> learn from instructors with deep linguistic and regional expertise.</li>
                    <li><strong>Practical Focus:</strong> strong emphasis on active speaking for immediate real-world use.</li>
                    <li><strong>Cultural Integration:</strong> learn essential etiquette and local customs alongside the language.</li>
                    <li><strong>Flexible Scheduling:</strong> weekday and weekend batches to suit your work-life balance.</li>
                    <li><strong>Small Groups:</strong> maximum interaction ensured with personalized performance reviews.</li>
                    <li><strong>Encouraging Atmosphere:</strong> a friendly setting that fosters confidence from day one.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Expats looking to integrate into the UAE team</li>
                        <li>Professionals in customer-facing roles</li>
                        <li>Business owners building local partnerships</li>
                        <li>Culture seekers aiming for regional heritage</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Handle standard daily interactions with ease</li>
                        <li>Master common Emirati phrases & expressions</li>
                        <li>Navigate professional social settings confidently</li>
                        <li>Build deep connections within the regional community</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default SpokenArabic;
