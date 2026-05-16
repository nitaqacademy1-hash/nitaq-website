import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';

const SpokenEnglish = () => {
    const infoData = {
        "Levels": "Beginner to Advanced",
        "Focus": "Fluency & Pronunciation",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Students & Professionals",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };


    return (
        <>
            <SEO />
        <CourseLayout
            title="Spoken English Course"
            subtitle="Unlock global opportunities. Improve your fluency, confidence, and professional communication skills."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <div style={{ marginBottom: '20px', padding: '12px 20px', background: '#fff9eb', border: '1px solid #fecaca', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '1.2rem' }}>🏆</span>
                    <a 
                        href="https://www.coursetakers.ae/search/courses-in/academic/test-prep/sat-preparation" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#991b1b', fontWeight: 700, textDecoration: 'underline', fontSize: '0.95rem' }}
                    >
                        We are awarded the Best SAT Preparation Course on Coursetakers.ae
                    </a>
                </div>
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        English is the global language of business, science, and international communication. Our Spoken English course is designed to help you break through the barriers of hesitation and speak with clarity and confidence.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, we believe that language learning should be practical and engaging. Our curriculum focuses on real-world scenarios, from social conversations to professional presentations. We use interactive methods to improve your listening, speaking, and pronunciation skills simultaneously.
                    </p>
                    <p>
                        Whether you are looking to advance your career, prepare for travel, or simply improve your daily communication, our expert trainers provide the personalized guidance you need to achieve your goals.
                    </p>
                </div>
            </div>

            {/* English Programs */}
            <div className="content-card">
                <h2>Our English <span className="text-gradient">Programs</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>General Spoken English</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Fluency | Confidence</p>
                        <ul className="styled-list">
                            <li>Daily vocabulary building exercises</li>
                            <li>Grammar mastery in active context</li>
                            <li>Accent neutralization techniques</li>
                            <li>Social conversation confidence</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Business English</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Professional | Career</p>
                        <ul className="styled-list">
                            <li>Workplace communication fluency</li>
                            <li>Public speaking & presentations</li>
                            <li>Corporate professional etiquette</li>
                            <li>Negotiation and effective meetings</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>English for Kids</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Foundation | Immersion</p>
                        <ul className="styled-list">
                            <li>Interactive storytelling & games</li>
                            <li>Fun phonics and pronunciation</li>
                            <li>Early sentence structure builds</li>
                            <li>Confidence building activities</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for English?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert Trainers:</strong> qualified instructors with extensive global experience in ESL.</li>
                    <li><strong>Active Methodology:</strong> focus on participation, role-plays, and real-life practice.</li>
                    <li><strong>Personalized Feedback:</strong> regular diagnostic assessments and 1-on-1 guidance.</li>
                    <li><strong>Flexible Scheduling:</strong> morning, evening, and weekend batches for busy adults.</li>
                    <li><strong>Modern Resources:</strong> full access to updated study materials and digital tools.</li>
                    <li><strong>Supportive Community:</strong> learn in a friendly, encouraging and diverse environment.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Job Seekers targeting MNC opportunities</li>
                        <li>Professionals aiming for global career growth</li>
                        <li>Students preparing for higher education</li>
                        <li>People wanting to speak with confidence</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Speak fluently in social and professional tiers</li>
                        <li>Clear pronunciation for effective communication</li>
                        <li>Natural vocabulary and idiomatic expressions</li>
                        <li>Grammatical accuracy across all conversations</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>SPOKEN ENGLISH <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>Who should join the Spoken English course?</summary>
                        <div className="faq-accordion-content">
                            <p>This course is ideal for students, professionals, and beginners who want to improve communication skills.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What will I learn?</summary>
                        <div className="faq-accordion-content">
                            <p>You will learn speaking, listening, grammar, vocabulary, and confidence-building techniques.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is this course suitable for beginners?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, the course is designed for all levels including beginners.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How long is the course?</summary>
                        <div className="faq-accordion-content">
                            <p>The duration typically ranges from 4 to 6 weeks.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Will I get speaking practice?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, interactive sessions and real-life conversations are included.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is it useful for jobs?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, strong English communication skills are essential for most careers.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};

export default SpokenEnglish;
