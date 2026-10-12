import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
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
        <>
            <SEO />
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

            {/* Spanish Learning Tracks */}
            <div className="content-card">
                <h2>Choose Your <span className="text-gradient">Learning Track</span></h2>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', marginBottom: '25px', lineHeight: 1.6 }}>
                    Your recommended study hours depend on your starting level and target goal. A standard course package provides a dedicated number of guided lessons; mastering a complete CEFR level typically combines classroom instruction with independent conversational practice.
                </p>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>General Spanish (A1–C1)</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Everyday Communication & Work</p>
                        <ul className="styled-list">
                            <li>Placement assessment based on current ability</li>
                            <li>Balanced speaking, listening, reading & writing</li>
                            <li>Practical conversational simulations for travel & business</li>
                            <li>Interactive small-group dynamics in Sharjah or online</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Exam Preparation (DELE & SIELE)</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Official International Certification</p>
                        <ul className="styled-list">
                            <li>Targeted preparation for official Instituto Cervantes diplomas</li>
                            <li>Timed module practice across reading, listening, writing & speaking</li>
                            <li>Past exam paper drills with detailed examiner feedback</li>
                            <li>Specialized task strategies for DELE Escolar or SIELE Global</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for Spanish?</span></h2>
                <ul className="styled-list">
                    <li><strong>Certified Native & Bilingual Instructors:</strong> Passionate language specialists with deep linguistic expertise.</li>
                    <li><strong>Active Communicative Approach:</strong> Immediate focus on speaking and listening through real-world dialogue.</li>
                    <li><strong>Flexible Schedules:</strong> Weekday evening and weekend morning batches designed for working adults and school students.</li>
                    <li><strong>Small Class Sizes:</strong> Micro-batches (4–8 learners) ensuring ample speaking time and individualized correction.</li>
                    <li><strong>CEFR International Framework:</strong> Systematic progression from A1 (Breakthrough) to B2/C1 (Proficiency).</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Professionals expanding business connections in Spain & Latin America</li>
                        <li>High school students preparing for DELE Escolar or university language credits</li>
                        <li>Travel enthusiasts seeking authentic conversational confidence</li>
                        <li>Expats seeking to master a globally spoken third language</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Conduct fluent everyday conversations in Spanish</li>
                        <li>Understand diverse native accents and media</li>
                        <li>Compose structured personal and professional correspondence</li>
                        <li>Attain certified DELE or SIELE proficiency credentials</li>
                    </ul>
                </div>
            </div>

            {/* Specific FAQ Section */}
            <div className="content-card">
                <h2>Spanish Language & Exam <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group">
                    <details className="faq-accordion">
                        <summary>What is the difference between the DELE and SIELE Spanish exams?</summary>
                        <div className="faq-accordion-content">
                            <p><strong>DELE</strong> (Diploma de Español como Lengua Extranjera) is a lifetime official diploma issued by Instituto Cervantes on fixed dates. <strong>SIELE</strong> (Servicio Internacional de Evaluación de la Lengua Española) is a flexible, digitally administered proficiency certificate valid for 5 years with multi-level scoring. Our academic advisors help you choose the right exam based on your university or visa timeline.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>How many hours does it take to complete a full Spanish level (e.g., A1 or A2)?</summary>
                        <div className="faq-accordion-content">
                            <p>According to CEFR guidelines, achieving A1 proficiency typically requires 60 to 80 guided instructional hours combined with regular practice. Nitaq offers intensive tracks (8–10 weeks) and standard tracks (12–16 weeks) to meet your schedule.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Can I take a placement test before enrolling?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes. If you have prior experience with Spanish, our instructors conduct a free 15-minute diagnostic assessment covering speaking and grammar to place you into the exact CEFR level that fits you.</p>
                        </div>
                    </details>
                    <details className="faq-accordion">
                        <summary>Are classes available in-person at your Sharjah center and online?</summary>
                        <div className="faq-accordion-content">
                            <p>Yes. You can attend in-person classes at our modern training center in Abu Khamseen Tower, Al Majaz 3, Sharjah, or join live interactive online sessions via Zoom with live instructor feedback.</p>
                        </div>
                    </details>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
        </>
    );
};

export default SpanishCourse;
