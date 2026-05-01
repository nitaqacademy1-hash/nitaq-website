import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
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


    const courseSchema = {
        name: 'Power BI & Excel Course Sharjah',
        description: 'Professional Power BI and Advanced Excel training in Sharjah. Learn data visualization, interactive dashboards, pivot tables, and business analytics for data-driven decision making.',
        mode: ['onsite', 'online'],
        educationalLevel: 'Beginner to Advanced',
        teaches: 'Power BI: Dashboards, DAX, Data Modeling; Advanced Excel: Pivot Tables, VBA, Financial Modeling',
        inLanguage: 'en',
    };

    const faqSchema = [
        {
            question: 'What does the Power BI & Excel course cover at Nitaq?',
            answer: 'The course covers Power BI dashboards, DAX formulas, data modeling, Power Query, and Advanced Excel features including pivot tables, VLOOKUP, and financial modeling.',
        },
        {
            question: 'Who should join the Power BI & Excel course?',
            answer: 'This course is ideal for business analysts, finance professionals, managers, and anyone who works with data and wants to create powerful reports and dashboards.',
        },
        {
            question: 'Do I need prior experience for the Power BI course?',
            answer: 'No prior Power BI experience is needed. The course starts from basics. Basic Excel exposure is helpful but not mandatory.',
        },
        {
            question: 'Is Power BI & Excel training available online in UAE?',
            answer: 'Yes, both online and offline Power BI and Excel training sessions are available with flexible scheduling at Nitaq Academy.',
        },
        {
            question: 'What certification do I get after completing the course?',
            answer: 'You receive a Nitaq Academy completion certificate. We also guide students toward Microsoft Power BI certification pathways.',
        },
        {
            question: 'What is the fee for Power BI & Excel training at Nitaq?',
            answer: 'Contact us at +971 54 572 3181 for the latest Power BI and Excel course pricing and available batches.',
        },
    ];

    return (
        <>
            <SEO
                title="Power BI & Excel Course Sharjah | Data Analytics Training UAE | Nitaq Academy"
                description="Master Power BI and Advanced Excel at Nitaq Academy Sharjah. Data visualization, dashboards, and analytics training for professionals. Online & offline batches UAE."
                path="/power-bi-excel"
                courseSchema={courseSchema}
                faqSchema={faqSchema}
            />
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

            
            {/* FAQ Section */}
            <div className="content-card">
                <h2>Power BI & Advanced Excel <span className="text-gradient">FAQs</span></h2>
                <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <details className="faq-accordion">
                        <summary>What is the Power BI & Advanced Excel exam?</summary>
                        <div className="faq-accordion-content">
                            <p>Please contact our counselors for detailed information regarding the Power BI & Advanced Excel structure and requirements.</p>
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

export default PowerBIExcelCourse;
