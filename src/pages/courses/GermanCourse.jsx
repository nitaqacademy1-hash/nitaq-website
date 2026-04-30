import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const GermanCourse = () => {
    const infoData = {
        "Levels": "A1 to C2 (CEFR)",
        "Exam Prep": "Goethe-Zertifikat / TestDaF",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Students & Professionals",
        "Authorization": "SPEA Authorized & UAE Govt Attested"
    };

    return (
        <CourseLayout
            title="German Language Course"
            subtitle="Unlock opportunities in Europe's strongest economy with our expert-led German language programs, designed for students and professionals."
            infoData={infoData}
        >
            {/* Program Overview */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        German is the most widely spoken native language in the European Union and a crucial language for science, engineering, and global business. Whether you're planning to study in Germany, advance your career in a multinational corporation, or simply explore a new culture, proficiency in German is a powerful asset.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, our German language program is structured to take you from a complete beginner to a confident speaker. Our experienced trainers use a communicative approach, focusing on practical language skills that you can use in real-life situations.
                    </p>
                    <p>
                        Our courses are aligned with the Common European Framework of Reference for Languages (CEFR), covering all levels from A1 to C2. We also offer specialized coaching for the Goethe-Zertifikat and TestDaF exams, which are essential for university admissions and professional recognition in Germany.
                    </p>
                </div>
            </div>

            {/* Language Programs */}
            <div className="content-card">
                <h2>Our <span className="text-gradient">Specializations</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>General German</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>A1-C2 | All Levels</p>
                        <ul className="styled-list">
                            <li>Systematic grammar building</li>
                            <li>Focus on speaking & listening</li>
                            <li>Interactive classroom activities</li>
                            <li>Regular progress evaluations</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Exam Preparation</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Goethe | TestDaF</p>
                        <ul className="styled-list">
                            <li>In-depth exam familiarization</li>
                            <li>Authentic exam materials</li>
                            <li>Time-saving techniques</li>
                            <li>Intensive module training</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Business German</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Career | Communication</p>
                        <ul className="styled-list">
                            <li>Workplace communication skills</li>
                            <li>Industry-specific terminology</li>
                            <li>Business writing & reports</li>
                            <li>Job interview preparation</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Course Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Qualified Instructors:</strong> Extensive experience in teaching German as a foreign language.</li>
                    <li><strong>Communicative Approach:</strong> Focus on active participation and real-world language usage.</li>
                    <li><strong>Flexible Scheduling:</strong> Morning, afternoon, and evening slots to suit your lifestyle.</li>
                    <li><strong>Personalized Learning:</strong> Small groups for better individual interaction and expert feedback.</li>
                    <li><strong>International Standards:</strong> Curriculum strictly based on the global CEFR framework.</li>
                    <li><strong>Comprehensive Support:</strong> Assistance with exam registration and premium study materials.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Aspiring Students planning study in Germany</li>
                        <li>Job Seekers looking for EU opportunities</li>
                        <li>Expats relocating to German-speaking regions</li>
                        <li>Language Enthusiasts & cultural explorers</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Speak fluently on a wide range of topics</li>
                        <li>Understand complex reports & literary works</li>
                        <li>Master professional business correspondence</li>
                        <li>Grasp German cultural & social nuances</li>
                    </ul>
                </div>
            </div>

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>German Language <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is German Language exam?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the German Language structure and requirements.</p>
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

export default GermanCourse;
