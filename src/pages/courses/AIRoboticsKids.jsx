import CourseLayout from '../../components/CourseLayout';
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
    return (
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
            <WhyNitaq />
        </CourseLayout>
    );
};
export default AIRoboticsKids;
