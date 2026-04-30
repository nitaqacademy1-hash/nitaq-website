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

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Spoken Arabic <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is Spoken Arabic program?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the Spoken Arabic structure and requirements.</p>
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

export default SpokenArabic;
