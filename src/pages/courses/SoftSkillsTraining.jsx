import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
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


    const courseSchema = {
        name: 'Soft Skills Training Sharjah',
        description: 'Professional soft skills development training in Sharjah covering communication, leadership, emotional intelligence, teamwork, and workplace interpersonal skills for career success.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Soft Skills: Communication, Leadership, Emotional Intelligence, Teamwork, Problem Solving, Presentation',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What soft skills are covered in Nitaq\'s training?',
            answer: 'The program covers communication, active listening, leadership, emotional intelligence, teamwork, conflict resolution, time management, and presentation skills.',
        },
        {
            question: 'Who should attend Soft Skills Training at Nitaq?',
            answer: 'This training is ideal for professionals, fresh graduates, team leaders, and anyone looking to improve their workplace effectiveness and career prospects.',
        },
        {
            question: 'Is soft skills training available online in UAE?',
            answer: 'Yes, both online and offline soft skills training sessions are available with flexible scheduling at Nitaq Academy Sharjah.',
        },
        {
            question: 'Can corporate teams attend Soft Skills training together?',
            answer: 'Yes, we offer customized corporate soft skills training programs for teams and organizations across the UAE.',
        },
        {
            question: 'How long is the Soft Skills Training program at Nitaq?',
            answer: 'Program duration varies based on content depth and client requirements. Typical programs run 1–3 days for workshops or 4–8 weeks for comprehensive courses.',
        },
        {
            question: 'What is the fee for Soft Skills Training at Nitaq Academy?',
            answer: 'Contact us at +971 54 572 3181 for the latest soft skills training pricing and scheduling options.',
        },
    ];

    return (
        <>
            <SEO
                title="Soft Skills Training Sharjah | Communication & Leadership UAE | Nitaq Academy"
                description="Soft skills training at Nitaq Academy Sharjah. Build communication, leadership, emotional intelligience & teamwork skills for career growth. Online & offline batches UAE."
                path="/soft-skills-training"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
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
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Communication Mastery</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Persuasion | Influence</p>
                        <ul className="styled-list">
                            <li>Effective verbal & non-verbal queues</li>
                            <li>Active listening for leaders</li>
                            <li>Public speaking & presentation</li>
                            <li>Business writing & email etiquette</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Leadership & EQ</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Dynamics | Collaboration</p>
                        <ul className="styled-list">
                            <li>Emotional Intelligence (EQ) mastery</li>
                            <li>Leadership styles & application</li>
                            <li>Team dynamics & trust building</li>
                            <li>Advanced conflict management</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
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
            <div className="outcomes-grid">
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

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Soft Skills <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Soft Skills program?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the Soft Skills structure and requirements.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How long is the course?</summary>
                        <div className="faq-accordion-content">
                            <p>The duration varies based on the proficiency level and chosen track. Most programs range from 20 to 50 hours.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What score is required?</summary>
                        <div className="faq-accordion-content">
                            <p>Target scores depend on your specific university or professional goals. We provide customized plans to help you reach your required score.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Do you provide mock tests?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, comprehensive mock tests and practice materials are an integral part of all our training programs.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is online available?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, we offer both interactive online classes and traditional offline in-person training formats.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What is the fee?</summary>
                        <div className="faq-accordion-content">
                            <p>Our fees are highly competitive. Please reach out to our admission team for the latest pricing and ongoing offers.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>When can I start?</summary>
                        <div className="faq-accordion-content">
                            <p>We have flexible intake dates with new batches starting frequently. Contact us to find the next available schedule.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};

export default SoftSkillsTraining;
