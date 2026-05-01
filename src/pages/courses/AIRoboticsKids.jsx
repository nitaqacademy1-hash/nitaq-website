import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
const AIRoboticsKids = () => {
    const infoData = {
        "Age Group": "8-15 Years",
        "Focus": "Coding & Robotics",
        "Duration": "Modular / Term-based",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Young Tech Enthusiasts",
        "Authorization": "SPEA Authorized"
    };

    const courseSchema = {
        name: 'AI & Robotics for Kids Sharjah',
        description: 'Fun and engaging AI and Robotics STEM education for children in Sharjah. Covers coding basics, robotics building, AI concepts, and problem-solving skills for children aged 7–15.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Kids AI & Robotics: Coding Basics, Robotics, AI Concepts, Problem Solving, STEM Projects',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What age group is the AI & Robotics for Kids course at Nitaq?',
            answer: 'Our AI & Robotics program is designed for children aged 7–15 years, with age-appropriate content and project complexity at each level.',
        },
        {
            question: 'What will my child learn in the AI & Robotics course?',
            answer: 'Children will learn coding fundamentals, robotics assembly, basic AI concepts, logical problem solving, and complete hands-on STEM projects.',
        },
        {
            question: 'Is the AI & Robotics course suitable for kids with no tech background?',
            answer: 'Yes. The course starts from absolute basics in a fun, engaging environment. No prior tech or coding experience is required.',
        },
        {
            question: 'Are there weekend or after-school batch options for kids?',
            answer: 'Yes, we offer morning, after-school, and weekend batches to fit school timetables and family schedules.',
        },
        {
            question: 'Is online AI & Robotics training available for kids in UAE?',
            answer: 'Online AI and coding sessions are available. For robotics (requiring physical kits), in-person sessions are recommended.',
        },
        {
            question: 'What is the fee for AI & Robotics for Kids at Nitaq Academy?',
            answer: 'Fees vary by age group and program level. Contact us at +971 54 572 3181 for the latest pricing and available batches.',
        },
    ];

    return (
        <>
            <SEO
                title="AI & Robotics for Kids Sharjah | STEM Education UAE | Nitaq Academy"
                description="AI and Robotics training for kids at Nitaq Academy Sharjah. Fun, hands-on STEM education in coding, robotics & artificial intelligence tools for children aged 7–15 in UAE."
                path="/ai-robotics-kids"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="A.I & Robotics for Kids"
            subtitle="Inspiring the next generation of innovators. Learn coding, building, and logical thinking through fun projects."
            infoData={infoData}
        >
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>The A.I & Robotics course for kids at Nitaq is more than just a tech class—it's a journey into the world of creative problem-solving. We introduce children to the foundations of artificial intelligence and robotics in a way that is engaging, interactive, and age-appropriate.</p>
                    <p>Through hands-on projects, children learn how to code, build circuits, and understand how machines think. This program builds the critical thinking skills and technical confidence needed for the future world.</p>
                </div>
            </div>
            <div className="content-card">
                <h2>Fun <span className="text-gradient">Learning Tracks</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Creative Coding</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Logic | Software</p>
                        <ul className="styled-list">
                            <li>Visual block-based programming</li>
                            <li>Building fun games and animations</li>
                            <li>Intro to Python for older kids</li>
                            <li>Understanding algorithms and logic</li>
                        </ul>
                    </div>
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Robotics Engineering</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Building | Hardware</p>
                        <ul className="styled-list">
                            <li>Assembling smart robot kits</li>
                            <li>Sensors and actuator basics</li>
                            <li>Introduction to circuit design</li>
                            <li>Real-world machine simulations</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="content-card">
                <h2>Why Kids <span className="text-gradient">Love Nitaq?</span></h2>
                <ul className="styled-list">
                    <li><strong>Interactive Mentors:</strong> Fun, friendly teachers who love tech and working with kids.</li>
                    <li><strong>Project-Based:</strong> Every lesson results in something kids can show and be proud of.</li>
                    <li><strong>Modern Lab:</strong> Access to the latest robot kits, micro-controllers, and coding tools.</li>
                    <li><strong>Future-Proof Skills:</strong> Building a foundation in STEM that lasts a lifetime.</li>
                </ul>
            </div>
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Young explorers curious about how things work</li>
                        <li>Kids who love building with LEGO or toys</li>
                        <li>Students interested in science and math</li>
                        <li>Future tech leaders and innovators</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Basic to intermediate coding proficiency</li>
                        <li>Fundamental understanding of A.I & Logic</li>
                        <li>Confidence in building and testing hardware</li>
                        <li>Enhanced critical thinking and problem-solving</li>
                    </ul>
                </div>
            </div>
            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>A.I & Robotics for Kids <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the A.I & Robotics for Kids program?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the A.I & Robotics for Kids structure and requirements.</p>
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
export default AIRoboticsKids;
