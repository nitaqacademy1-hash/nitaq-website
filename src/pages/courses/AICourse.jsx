import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';

const AICourse = () => {
    const infoData = {
        "Certification": "Nitaq Certificate",
        "Focus": "AI & Machine Learning",
        "Duration": "3-4 Months",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };


    const courseSchema = {
        name: 'AI & Technology Course Sharjah',
        description: 'Professional AI and technology training in Sharjah covering machine learning, data science, Python programming, and AI tools. Ideal for professionals and graduates in UAE.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Artificial Intelligence, Machine Learning, Data Science, Python Programming, AI Tools',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What AI topics are covered in Nitaq\'s AI course?',
            answer: 'Our AI course covers machine learning, data science, Python programming, AI tools, natural language processing basics, and practical AI project implementation.',
        },
        {
            question: 'Who should join the AI course at Nitaq Academy?',
            answer: 'The AI course is ideal for working professionals, graduates, and students looking to upskill in artificial intelligence, data science, and technology.',
        },
        {
            question: 'Is prior coding experience required for the AI course?',
            answer: 'No prior coding experience is required for beginner tracks. We offer courses from absolute beginner to advanced levels.',
        },
        {
            question: 'Is the AI course available online in UAE?',
            answer: 'Yes, our AI and technology courses are available both online and offline with flexible batch schedules across the UAE.',
        },
        {
            question: 'What certifications do I get after completing the AI course?',
            answer: 'Upon completion, you receive a Nitaq Academy certificate. We also guide students for internationally recognized AI and tech certifications.',
        },
        {
            question: 'What is the fee for the AI course at Nitaq Academy Sharjah?',
            answer: 'AI course fees vary by level and duration. Contact us at +971 54 572 3181 for the latest pricing and upcoming batch schedules.',
        },
    ];

    return (
        <>
            <SEO
                title="AI & Technology Course Sharjah | Artificial Intelligence Training UAE | Nitaq"
                description="Master AI and technology at Nitaq Academy Sharjah. Machine learning, data science, Python & professional AI certification training. Flexible online & offline batches UAE."
                path="/ai-course"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="Basic to Advance A.I Course"
            subtitle="Master the technologies of the future with our comprehensive Artificial Intelligence training."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Artificial Intelligence (AI) Course at Nitaq Training Center provides learners with a structured and comprehensive introduction to the core concepts of AI and Machine Learning. In an era where AI is transforming every industry, this program is designed to bridge the gap between theoretical knowledge and practical application.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        Our curriculum explores the fundamentals of AI, its real-world applications, and the latest developments in emerging technologies such as machine learning, deep learning, and natural language processing. We focus on hands-on learning, allowing students to work with real datasets and build AI models that solve actual business problems.
                    </p>
                    <p>
                        Led by accomplished AI professionals and experienced educators, this course is tailored to meet the needs of both beginners and professionals looking to upskill. At Nitaq, we don't just teach code; we teach the logic, ethics, and strategic implementation of AI in the modern world.
                    </p>
                </div>
            </div>

            {/* AI Programs */}
            <div className="content-card">
                <h2>Our AI <span className="text-gradient">Specializations</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>AI Fundamentals</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Core | Multi-Mode</p>
                        <ul className="styled-list">
                            <li>Machine Learning foundations</li>
                            <li>Python for Data Science focus</li>
                            <li>Supervised learning models</li>
                            <li>Neural networks & logic</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>AI for Business</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Strategy | Implementation</p>
                        <ul className="styled-list">
                            <li>Business strategy & metrics</li>
                            <li>Generative AI workflow tools</li>
                            <li>Data-driven decision making</li>
                            <li>Automation and efficiency</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Advanced Deep Learning</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Technical | Engineering</p>
                        <ul className="styled-list">
                            <li>Natural language (NLP) focus</li>
                            <li>Computer Vision (CV) apps</li>
                            <li>Deploying scalable AI models</li>
                            <li>Complex neural architectures</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Hands-on Projects:</strong> build a real-world AI portfolio through practical sessions.</li>
                    <li><strong>Expert Mentorship:</strong> learn directly from industry researchers and senior engineers.</li>
                    <li><strong>Leading Tools:</strong> master essential frameworks like TensorFlow, PyTorch and Keras.</li>
                    <li><strong>Python Mastery:</strong> gain professional fluency in the core language of AI.</li>
                    <li><strong>Ethical AI:</strong> understand the social, legal, and ethical implications of machine logic.</li>
                    <li><strong>Career Support:</strong> comprehensive preparation for senior AI roles and tech interviews.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Software Developers upskilling in AI</li>
                        <li>Data Analysts seeking predictive power</li>
                        <li>Business leaders targeting automation</li>
                        <li>Tech enthusiasts and career switchers</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Design and evaluate complex ML models</li>
                        <li>Extract deep insights from varied datasets</li>
                        <li>Solve business challenges with automation</li>
                        <li>Professional certificate for global roles</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>AI COURSE FOR STUDENTS <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is covered in the AI course?</summary>
                        <div className="faq-accordion-content">
                            <p>The course covers AI tools, automation, ChatGPT, and real-world applications.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Who can join this AI course?</summary>
                        <div className="faq-accordion-content">
                            <p>Students, beginners, and professionals interested in learning AI can join.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Do I need coding knowledge?</summary>
                        <div className="faq-accordion-content">
                            <p>No, the course is designed for beginners without coding experience.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>What skills will I gain?</summary>
                        <div className="faq-accordion-content">
                            <p>You will learn automation, AI tools usage, productivity, and digital skills.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is AI useful for careers?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, AI skills are highly in demand across industries.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Is the training practical?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes, the course focuses on real-world use cases and hands-on learning.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};

export default AICourse;
