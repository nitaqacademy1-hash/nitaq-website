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

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Sales & Negotiations <span className="text-gradient">FAQs</span></h2>
                <div className="faq-grid" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div className="faq-item" style={{ background: '#f8fafc', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid var(--primary-color)' }}>
                        <h4 style={{ color: 'var(--primary-color)', marginBottom: '5px', fontSize: '1.1rem' }}>What is Sales & Negotiations program?</h4>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#475569' }}>Please contact our counselors for detailed information regarding the Sales & Negotiations structure and requirements.</p>
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

export default SalesNegotiationsCourse;
