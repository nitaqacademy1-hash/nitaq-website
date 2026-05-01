import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';

const AcademicExcellenceCourse = () => {
    const infoData = {
        "Levels/Grades": "All grades",
        "Subjects": "All Subjects",
        "Curricula": "International (IB, IGCSE, CBSE)",
        "Duration": "3, 6 Months & Annual",
        "Mode": "Online | Offline",
        "Authorization": "SPEA Authorized"
    };


    const courseSchema = {
        name: 'Academic Excellence Program Sharjah',
        description: 'Expert academic tutoring in Sharjah for school students. Covers Mathematics, Science, English, and other core subjects to improve grades, build confidence, and achieve academic excellence.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Mathematics, Science, English, Academic Study Skills, Exam Preparation',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'Who is the Academic Excellence program for?',
            answer: 'This program is designed for school-age students from Grade 1 to Grade 12 who need subject-specific tutoring, exam preparation, or overall academic support.',
        },
        {
            question: 'What subjects are covered in the Academic Excellence program?',
            answer: 'We cover Mathematics, Science, English, Arabic, Social Studies, and other core subjects based on major curricula including CBSE, British, American, and IB.',
        },
        {
            question: 'How does the Academic Excellence program help students?',
            answer: 'The program provides personalized tutoring, targeted exam preparation, doubt-clearing sessions, study skill development, and consistent progress monitoring.',
        },
        {
            question: 'Is Academic Excellence tutoring available online in UAE?',
            answer: 'Yes, both online and in-person academic tutoring sessions are available with flexible scheduling to fit school timetables.',
        },
        {
            question: 'Can you help with school curriculum-specific tutoring?',
            answer: 'Yes, we offer tutoring aligned with CBSE, British Curriculum, American Curriculum, and IB programs followed by schools in Sharjah and across the UAE.',
        },
        {
            question: 'What is the fee for Academic Excellence tutoring at Nitaq?',
            answer: 'Fees vary by grade level and subjects required. Contact us at +971 54 572 3181 for a personalized study plan and pricing.',
        },
    ];

    return (
        <>
            <SEO
                title="Academic Excellence Program Sharjah | School Tuition UAE | Nitaq Academy"
                description="Academic Excellence coaching at Nitaq Academy Sharjah. Expert tutoring for school students in Math, Science, English & more. Boost grades & academic performance UAE."
                path="/academic-excellence"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
        <CourseLayout
            title="Academic Excellence"
            subtitle="Strategic academic support for international students to master their curriculum and excel in every assessment."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p>
                        This program focuses on strengthening students’ academic mindset by promoting discipline, goal-setting, and effective study strategies that are essential for long-term academic success. Learners are guided to develop structured learning habits that improve focus, consistency, and independent academic performance.
                    </p>
                    <p>
                        Students are also introduced to international academic ethics, plagiarism awareness, and proper referencing techniques. Through guided practice, they gain a clear understanding of university expectations, assessment rubrics, and global grading systems.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        In addition, the course supports digital literacy and collaboration skills, preparing students for both in-person and online learning environments. We empower students to transition smoothly into higher education with confidence.
                    </p>
                </div>
            </div>

            {/* Academic Programs */}
            <div className="content-card">
                <h2>Our <span className="text-gradient">Excellence Tracks</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Complete Program</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>All Subjects | Annual</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Comprehensive subject coverage</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Personalized learning plans</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Regular progress tracking</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Expert dedicated tutors</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Subject-Specific</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Targeted | Flexible</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Focused training on key subjects</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Deep concept clarity</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Practice worksheets & kits</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Doubt-clearing sessions</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Exam Booster</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Intensive | Revision</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Intensive revision sessions</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Mock tests & past papers</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Time management drills</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Result-oriented coaching</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Highlights</span></h2>
                <ul className="card-list">
                    <li>Multi-Curricula Support: IB, IGCSE, CBSE, ICSE & more</li>
                    <li>Holistic Development: Beyond grades to real understanding</li>
                    <li>Interactive Tutors: Passionate educators with global experience</li>
                    <li>Progress Analytics: Data-driven insights into student growth</li>
                    <li>University Readiness: Bridging the gap between school and college</li>
                    <li>Flexible Formats: Online and offline batches for convenience</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Master core academic principles & study ethics</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Apply knowledge to complex real-world problems</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Build confidence for high-stakes assessments</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Accelerate professional & academic growth</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>University Admissions Path</h3>
                    <ul className="card-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Gateway to top-ranked UK, USA & CA universities</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Merit-based scholarship opportunities</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Stand out in the competitive admissions process</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Build solid credentials for your dream career</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Academic Excellence <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Academic Excellence program?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the Academic Excellence structure and requirements.</p>
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

export default AcademicExcellenceCourse;
