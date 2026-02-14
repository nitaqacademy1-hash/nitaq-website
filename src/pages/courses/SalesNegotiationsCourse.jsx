import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const SalesNegotiationsCourse = () => {
    const infoData = {
        "Certification": "Professional Certificate",
        "Focus": "Sales & Persuasion",
        "Duration": "1-2 Months",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="Sales & Negotiations"
            subtitle="Master the psychology of persuasion and the strategy of high-stakes negotiation to close bigger deals."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p style={{ marginBottom: '15px' }}>
                        The Sales & Negotiations course at Nitaq Training Center is a high-impact program designed to transform your ability to influence, persuade, and close deals. In today's competitive business landscape, the ability to communicate value and navigate complex negotiations is what sets top performers apart.
                    </p>
                    <p style={{ marginBottom: '15px' }}>
                        At Nitaq, we focus on the psychology behind the sale. Our curriculum covers the entire sales process—from prospecting and building rapport to handling objections and mastering the final close. You will also learn advanced negotiation strategies that ensure win-win outcomes.
                    </p>
                    <p>
                        Led by industry veterans with decades of experience in the UAE market, this course is highly practical, featuring real-world simulations, role-playing, and personalized feedback to help you build confidence and achieve measurable results.
                    </p>
                </div>
            </div>

            {/* Sales Tracks */}
            <div className="content-card">
                <h2>Our Sales <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Sales Excellence</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Consultative | Closing</p>
                        <ul className="styled-list">
                            <li>Consultative selling skills</li>
                            <li>Building rapport and trust</li>
                            <li>Effective prospecting techniques</li>
                            <li>Value proposition design</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Master Negotiator</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Strategy | Win-Win</p>
                        <ul className="styled-list">
                            <li>Strategic negotiation frameworks</li>
                            <li>Handling difficult negotiators</li>
                            <li>Win-win negotiation tactics</li>
                            <li>Emotional intelligence in deals</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Advanced Persuasion</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Influence | Psychology</p>
                        <ul className="styled-list">
                            <li>Psychology of master influence</li>
                            <li>Body language & non-verbal cues</li>
                            <li>Storytelling for sales success</li>
                            <li>Overcoming complex objections</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li><strong>Consultative Selling:</strong> Shift from "selling" to "solving" for your clients.</li>
                    <li><strong>Objection Handling:</strong> Turn "no" into "not yet" through strategic empathy.</li>
                    <li><strong>Negotiation Strategy:</strong> Master the art of the deal with proven global frameworks.</li>
                    <li><strong>Closing Mastery:</strong> Multiple closing techniques tailored for different buyer personas.</li>
                    <li><strong>Real-world Role-play:</strong> Practice in a safe, guided environment with peer feedback.</li>
                    <li><strong>UAE Market Context:</strong> Tactics adapted for the unique local business culture.</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list">
                        <li>Sales Professionals & Account Managers</li>
                        <li>Business Development Managers & Directors</li>
                        <li>Entrepreneurs & Startup Founders</li>
                        <li>Procurement & Supply Chain Officers</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list">
                        <li>Increase sales velocity and closure rates</li>
                        <li>Master high-stakes negotiation tactics</li>
                        <li>Build long-term, high-trust client relationships</li>
                        <li>Deliver high-impact persuasive presentations</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default SalesNegotiationsCourse;
