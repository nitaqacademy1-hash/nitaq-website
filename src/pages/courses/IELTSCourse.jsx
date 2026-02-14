import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const IELTSCourse = () => {
    const infoData = {
        "Modules": "Academic & General",
        "Sections": "Listening, Reading, Writing, Speaking",
        "Duration": "Flexible Batches",
        "Mode": "Online | Offline | Hybrid",
        "Target": "Students & Professionals",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="IELTS - International English Language Testing System"
            subtitle="Achieve your target band score with strategic preparation for both Academic and General Training modules."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The IELTS is the world's most popular English language proficiency test for higher education and global migration. Our preparation course is meticulously designed to equip you with the skills and strategies needed to excel in all four components of the test.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq Training Center, we provide comprehensive training for both the Academic and General Training modules. Our expert trainers focus on enhancing your language proficiency while simultaneously teaching you the specific techniques required to tackle each section effectively.
                    </p>
                    <p>
                        With a strong emphasis on practice and personalized feedback, we help you identify your strengths and work on your areas of improvement, ensuring you are fully prepared to achieve your desired band score.
                    </p>
                </div>
            </div>

            {/* IELTS Tracks */}
            <div className="content-card">
                <h2>Our Preparation <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>IELTS Intensive</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Full Course | Comprehensive</p>
                        <ul className="styled-list">
                            <li>All 4 sections in-depth coverage</li>
                            <li>Authentic practice & mock assessments</li>
                            <li>Advanced test success strategies</li>
                            <li>Detailed performance feedback</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>IELTS Express</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Short Term | Fast-Track</p>
                        <ul className="styled-list">
                            <li>Quick concept revision drills</li>
                            <li>High-impact strategy workshops</li>
                            <li>Intensive practice sessions</li>
                            <li>Perfect for immediate retakes</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Section Focus</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Targeted | Specialized</p>
                        <ul className="styled-list">
                            <li>Writing or Speaking focus groups</li>
                            <li>Overcoming specific linguistic hurdles</li>
                            <li>Personalized expert 1-on-1 coaching</li>
                            <li>Score enhancement specific drills</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Why Choose <span className="text-gradient">Nitaq for IELTS?</span></h2>
                <ul className="styled-list">
                    <li><strong>Expert IELTS Trainers:</strong> native-level proficiency and years of coaching experience.</li>
                    <li><strong>Comprehensive Mocks:</strong> conditions mirroring real exam with strict expert evaluation.</li>
                    <li><strong>Personalized Feedback:</strong> detailed reports detailing specific areas for linguistic improvement.</li>
                    <li><strong>Small Batch Sizes:</strong> ensuring interactive engagement and individual speaking practice.</li>
                    <li><strong>Updated Materials:</strong> regularly updated from Cambridge and official IELTS resources.</li>
                    <li><strong>Flexible Learning:</strong> featuring online interactive sessions and offline classrooms.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Students planning global higher education</li>
                        <li>Professionals seeking registration abroad</li>
                        <li>Migrants (Canada, AU, UK, NZ pathways)</li>
                        <li>Anyone needing certified English proof</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Master strategic test-taking techniques</li>
                        <li>Build significant boost in linguistic precision</li>
                        <li>Advanced time management for all sections</li>
                        <li>Full readiness for your target band score</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default IELTSCourse;
