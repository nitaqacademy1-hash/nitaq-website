import CourseLayout from '../../components/CourseLayout';
import WhyNitaq from '../../components/WhyNitaq';

const PowerBIExcelCourse = () => {
    const infoData = {
        "Certification": "Nitaq Certificate",
        "Focus": "Data Analytics",
        "Duration": "1-2 Months",
        "Mode": "Online | Offline | Hybrid",
        "Level": "Professional",
        "Authorization": "SPEA Authorized"
    };

    return (
        <CourseLayout
            title="Power BI & Advanced Excel"
            subtitle="Transform complex data into actionable business insights with industry-leading analytics and visualization tools."
            infoData={infoData}
        >
            {/* Program Header */}
            <div className="content-card">
                <h2>Program <span className="text-gradient">Overview</span></h2>
                <div className="overview-text">
                    <p>
                        Master the art of data storytelling and advanced spreadsheet management with Nitaq's Power BI & Advanced Excel course. This program is designed to transform raw data into actionable insights using the industry's most powerful tools. Whether you're looking to automate reports in Excel or build interactive dashboards in Power BI, this course provides the practical skills needed to excel in a data-driven business environment.
                    </p>
                    <p>
                        At Nitaq Training Center, we bridge the gap between technical data management and strategic decision-making. Our curriculum covers everything from complex Excel functions and Power Query to Power BI data modeling and DAX formulas. You will learn to create compelling visual narratives that help organizations make informed choices.
                    </p>
                    <p style={{ marginTop: '20px' }}>
                        With hands-on projects and real-world datasets, our expert trainers guide you through the entire data analytics lifecycle—from data cleaning and transformation to visualization and sharing.
                    </p>
                </div>
            </div>

            {/* Analytics Tracks */}
            <div className="content-card">
                <h2>Specialized <span className="text-gradient">Tracks</span></h2>
                <div className="tracks-grid">
                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Power BI Mastery</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Modeling | DAX | Viz</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Data modeling & relationships</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>DAX (Analysis Expressions)</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Interactive dashboard design</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Power Query for cleaning</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                        <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Advanced Excel</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Automation | Logic | VBA</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Complex formulas & functions</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Advanced PivotTables & Charts</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>VBA and Macros automation</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Scenario Manager & Solver</li>
                        </ul>
                    </div>

                    <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                        <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>Integrated BI</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>Connect | Storytelling</p>
                        <ul className="styled-list" style={{ display: 'block' }}>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Connecting Excel to Power BI</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>End-to-end BI solutions</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Advanced data storytelling</li>
                            <li style={{ background: 'transparent', padding: '8px 0 8px 45px', border: 'none' }}>Real-world business cases</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Highlights */}
            <div className="content-card">
                <h2>Course <span className="text-gradient">Highlights</span></h2>
                <ul className="styled-list">
                    <li>Advanced Excel Mastery covering VLOOKUP, INDEX-MATCH, and sophisticated array formulas</li>
                    <li>Power BI Dashboards creation for highly interactive and dynamic visual reports</li>
                    <li>Expert Data Transformation using Power Query to clean and shape complex, messy datasets</li>
                    <li>DAX Fundamentals for writing powerful calculations and measure logic in Power BI</li>
                    <li>Workflow Automation to save hundreds of hours using Macros and standardized templates</li>
                    <li>Practical Portfolio Building with real-world business analytics projects and data</li>
                </ul>
            </div>

            {/* Outcomes & Path */}
            <div className="outcomes-grid">
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Ideal For</h3>
                    <ul className="styled-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Analysts upgrading visualization skills</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Finance Pros automating report flows</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Marketing Managers tracking ROI</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Aspirants for Data & BI roles</li>
                    </ul>
                </div>
                <div className="content-card" style={{ marginBottom: 0 }}>
                    <h3 style={{ fontSize: '1.4rem' }}>Learning Outcomes</h3>
                    <ul className="styled-list" style={{ gridTemplateColumns: '1fr' }}>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Build interactive AI-powered dashboards</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Master massive datasets with ease</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Drive decisions with data stories</li>
                        <li style={{ padding: '15px 20px 15px 50px' }}>Recognized Nitaq Data Analytics cert</li>
                    </ul>
                </div>
            </div>

            <WhyNitaq />
        </CourseLayout>
    );
};

export default PowerBIExcelCourse;
