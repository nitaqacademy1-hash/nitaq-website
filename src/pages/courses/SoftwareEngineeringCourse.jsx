import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { Award, Target, BookOpen, Layers, Settings, Users, Brain, ShieldCheck, HelpCircle } from 'lucide-react';

const SoftwareEngineeringCourse = () => {
    const infoData = {
        "Duration": "12 Weeks (60 Hours Training)",
        "Modules": "20+ Modules",
        "Level": "Diploma Level",
        "Mode": "Online & Classroom Training",
        "Certificate": "SPEA Licensed Institute",
        "Focus": "Industry-Focused Curriculum"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Software Engineering Diploma in Sharjah"
                subtitle="Master programming, software development, databases, algorithms, software architecture, Git, testing, debugging, and industry-standard engineering practices through our comprehensive Software Engineering Diploma."
                infoData={infoData}
            >
                {/* Embedded Styled Style Tag for Premium visual presentation */}
                <style dangerouslySetInnerHTML={{ __html: `
                    .dm-section-title {
                        font-size: 2.2rem;
                        color: #0f172a;
                        margin-bottom: 25px;
                        font-weight: 700;
                        line-height: 1.3;
                    }
                    .dm-section-desc {
                        font-size: 1.075rem;
                        color: #475569;
                        line-height: 1.8;
                        margin-bottom: 30px;
                    }
                    .badge-grid {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                        margin-bottom: 35px;
                    }
                    .badge-item {
                        background: #f0fdf4;
                        color: #166534;
                        border: 1px solid #bbf7d0;
                        padding: 8px 16px;
                        border-radius: 50px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                    }
                    .why-learn-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .why-learn-card {
                        background: white;
                        border: 1px solid #f1f5f9;
                        padding: 30px;
                        border-radius: 16px;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02), 0 2px 4px -2px rgba(0,0,0,0.02);
                        transition: all 0.3s ease;
                        border-top: 4px solid var(--primary-color);
                    }
                    .why-learn-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 8px 10px -6px rgba(0,0,0,0.05);
                    }
                    .why-learn-card h4 {
                        font-size: 1.25rem;
                        color: #0f172a;
                        margin-bottom: 12px;
                        font-weight: 600;
                    }
                    .why-learn-card p {
                        font-size: 0.95rem;
                        color: #64748b;
                        line-height: 1.6;
                    }
                    .syllabus-module {
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        margin-bottom: 15px;
                        overflow: hidden;
                        background: white;
                    }
                    .syllabus-summary {
                        padding: 20px 25px;
                        font-weight: 600;
                        font-size: 1.1rem;
                        color: #0f172a;
                        cursor: pointer;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        background: #f8fafc;
                        transition: background 0.2s ease;
                    }
                    .syllabus-summary:hover {
                        background: #f1f5f9;
                    }
                    .syllabus-content {
                        padding: 25px;
                        border-top: 1px solid #e2e8f0;
                    }
                    .tools-category-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 25px;
                        margin-top: 30px;
                    }
                    .tools-cat-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 30px;
                        border-radius: 16px;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                        transition: all 0.3s ease;
                    }
                    .tools-cat-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                        border-color: var(--primary-color);
                    }
                    .tools-cat-card h3 {
                        font-size: 1.25rem;
                        color: #0f172a;
                        margin-bottom: 20px;
                        font-weight: 600;
                        border-bottom: 2px solid var(--primary-color);
                        padding-bottom: 10px;
                    }
                    .salary-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .salary-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 25px;
                        border-radius: 16px;
                        transition: all 0.3s ease;
                        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                    }
                    .salary-card:hover {
                        transform: translateY(-3px);
                        border-color: var(--accent-color);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                    }
                    .role-header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 10px;
                        margin-bottom: 15px;
                        border-bottom: 1px solid #f1f5f9;
                        padding-bottom: 10px;
                    }
                    .role-header h4 {
                        font-size: 1.15rem;
                        color: #0f172a;
                        font-weight: 600;
                        margin: 0;
                    }
                    .salary-card p {
                        font-size: 0.9rem;
                        color: #64748b;
                        line-height: 1.6;
                        margin: 0;
                    }
                    .placement-features {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .feature-item {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        padding: 25px;
                        border-radius: 12px;
                        transition: all 0.2s ease;
                    }
                    .feature-item:hover {
                        background: white;
                        border-color: var(--primary-color);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                    }
                    .feature-item h4 {
                        font-size: 1.1rem;
                        color: #0f172a;
                        margin-bottom: 10px;
                        font-weight: 600;
                    }
                    .feature-item p {
                        font-size: 0.9rem;
                        color: #64748b;
                        line-height: 1.6;
                        margin: 0;
                    }
                    .success-stories-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 25px;
                        margin-top: 30px;
                    }
                    .story-card {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        padding: 30px;
                        border-radius: 16px;
                        position: relative;
                    }
                    .story-card::before {
                        content: '“';
                        position: absolute;
                        top: 15px;
                        left: 20px;
                        font-size: 4rem;
                        color: #e2e8f0;
                        font-family: serif;
                        line-height: 1;
                    }
                    .story-card .quote {
                        font-size: 1rem;
                        color: #475569;
                        line-height: 1.7;
                        font-style: italic;
                        position: relative;
                        z-index: 1;
                        margin-bottom: 20px;
                    }
                    .author-info {
                        display: flex;
                        flex-direction: column;
                        border-top: 1px solid #e2e8f0;
                        padding-top: 15px;
                    }
                    .author-info strong {
                        font-size: 0.95rem;
                        color: #0f172a;
                    }
                    .author-info span {
                        font-size: 0.85rem;
                        color: #64748b;
                    }
                    .ai-highlight-box {
                        background: linear-gradient(135deg, #111827, #1f2937);
                        color: white;
                        padding: 50px;
                        border-radius: 24px;
                        margin-top: 50px;
                        border: 1px solid #374151;
                        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                        position: relative;
                        overflow: hidden;
                    }
                    .ai-highlight-box::after {
                        content: '';
                        position: absolute;
                        top: -50%;
                        right: -50%;
                        width: 100%;
                        height: 100%;
                        background: radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 60%);
                        pointer-events: none;
                    }
                    .ai-highlight-box h2 {
                        color: white;
                        font-size: 2.2rem;
                        margin-bottom: 20px;
                        font-weight: 700;
                    }
                    .ai-highlight-box h2 span {
                        background: linear-gradient(to right, #34d399, #059669);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .ai-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .ai-card {
                        background: rgba(255, 255, 255, 0.03);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        padding: 25px;
                        border-radius: 12px;
                        backdrop-filter: blur(10px);
                    }
                    .ai-card h4 {
                        font-size: 1.15rem;
                        color: #34d399;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    .ai-card p {
                        font-size: 0.9rem;
                        color: #d1d5db;
                        line-height: 1.6;
                    }
                    .cert-box {
                        background: #f0fdf4;
                        border: 1px solid #dcfce7;
                        border-radius: 20px;
                        padding: 40px;
                        margin-top: 50px;
                        display: flex;
                        gap: 40px;
                        align-items: center;
                    }
                    .cert-box-content {
                        flex: 1;
                    }
                    .cert-box-image {
                        flex: 0 0 280px;
                        background: white;
                        border: 8px solid white;
                        box-shadow: 0 15px 30px rgba(0,0,0,0.08);
                        border-radius: 12px;
                        overflow: hidden;
                    }
                    .cert-box-image img {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                    @media (max-width: 991px) {
                        .cert-box {
                            flex-direction: column;
                            text-align: center;
                            padding: 30px;
                        }
                        .cert-box-image {
                            flex: 0 0 auto;
                            width: 100%;
                            max-width: 320px;
                        }
                    }
                    .inline-cta-bar {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        border-radius: 12px;
                        padding: 20px 30px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 40px 0;
                        gap: 20px;
                    }
                    .inline-cta-bar h4 {
                        font-size: 1.1rem;
                        color: #0f172a;
                        margin: 0;
                    }
                    .inline-cta-buttons {
                        display: flex;
                        gap: 15px;
                    }
                    @media (max-width: 768px) {
                        .inline-cta-bar {
                            flex-direction: column;
                            text-align: center;
                        }
                        .inline-cta-buttons {
                            width: 100%;
                            flex-direction: column;
                        }
                    }
                    .course-accordion {
                        border: 1px solid #e2e8f0;
                        border-radius: 8px;
                        margin-bottom: 15px;
                        overflow: hidden;
                        background: white;
                    }
                    .course-accordion summary {
                        padding: 18px 25px;
                        font-weight: 600;
                        font-size: 1.1rem;
                        color: #0f172a;
                        cursor: pointer;
                        background: #f8fafc;
                        list-style: none;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        transition: background 0.2s ease;
                    }
                    .course-accordion summary::-webkit-details-marker {
                        display: none;
                    }
                    .course-accordion summary:after {
                        content: '+';
                        font-size: 1.5rem;
                        color: var(--primary-color);
                    }
                    .course-accordion[open] summary:after {
                        content: '-';
                    }
                    .course-accordion summary:hover {
                        background: #f1f5f9;
                    }
                    .course-accordion-content {
                        padding: 20px 25px;
                        border-top: 1px solid #e2e8f0;
                    }
                `}} />

                {/* Hero Badges */}
                <div className="badge-grid">
                    <div className="badge-item">✓ 60 Hours Training</div>
                    <div className="badge-item">✓ 12 Weeks Duration</div>
                    <div className="badge-item">✓ 20+ Modules</div>
                    <div className="badge-item">✓ Hands-On Projects</div>
                    <div className="badge-item">✓ Career-Oriented Learning</div>
                    <div className="badge-item">✓ SPEA Licensed Institute</div>
                </div>

                {/* Course Overview Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Course <span className="text-gradient">Overview</span></h2>
                    <div className="dm-section-desc">
                        <p style={{ marginBottom: '20px' }}>
                            Software Engineering is one of the most in-demand careers globally, offering unparalleled opportunities for growth, innovation, and high-earning potential. Modern software engineers build applications, websites, enterprise systems, mobile apps, AI-powered solutions, and cloud platforms that shape the digital world.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            At NITAQ Academy in Sharjah, our comprehensive Software Engineering Diploma equips you with the end-to-end skills needed to succeed in the tech industry. This program is designed to transform beginners into job-ready professionals by covering essential topics such as programming fundamentals, software development lifecycles, database management, and system architecture.
                        </p>
                        <p style={{ marginBottom: '20px' }}>
                            Learning software engineering in Sharjah and the UAE opens doors to career opportunities across the GCC and international markets. The demand for skilled developers, backend engineers, and software architects continues to rise as businesses undergo digital transformation. Through practical, hands-on projects, you will learn to write clean code, debug effectively, and utilize modern tools like Git, SQL, and VS Code.
                        </p>
                        <p>
                            Join our SPEA-licensed institute to gain industry-relevant knowledge, flexible learning options, and career guidance tailored to help you launch a successful career as a Software Engineer.
                        </p>
                    </div>

                    <div className="inline-cta-bar">
                        <h4>Download the full syllabus and career guide brochure</h4>
                        <div className="inline-cta-buttons">
                            <a 
                                href="https://wa.me/971527569908?text=I%20would%20like%20to%20download%20the%20Software%20Engineering%20Diploma%20brochure" 
                                className="btn btn-primary"
                                style={{ background: '#25d366', borderColor: '#25d366', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'cta_overview_brochure')}
                            >
                                Download Brochure
                            </a>
                        </div>
                    </div>
                </div>

                {/* Why Choose This Course Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Why Choose This <span className="text-gradient">Course</span></h2>
                    
                    <div className="why-learn-grid">
                        <div className="why-learn-card">
                            <h4>Programming Foundations</h4>
                            <p>Learn professional coding practices from the ground up, starting with syntax, variables, and control structures.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Software Development Lifecycle</h4>
                            <p>Understand how modern software projects are planned, designed, developed, tested, and delivered.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Object-Oriented Programming</h4>
                            <p>Master OOP principles like inheritance, polymorphism, and encapsulation used in enterprise applications.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Database Development</h4>
                            <p>Learn SQL, database design, relational models, and efficient data management strategies.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Software Architecture</h4>
                            <p>Understand scalable system design, design patterns, and core engineering principles for robust applications.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Industry Projects</h4>
                            <p>Build practical software applications and a professional portfolio to showcase your skills to employers.</p>
                        </div>
                    </div>
                </div>

                {/* Who Should Enroll Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Who Should <span className="text-gradient">Enroll</span></h2>
                    <div className="badge-grid" style={{ marginTop: '20px' }}>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>Students</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>Fresh Graduates</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>Career Changers</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>IT Professionals</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>Web Developers</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0f172a', borderColor: '#cbd5e1' }}>Future Software Engineers</div>
                    </div>
                </div>

                {/* Course Curriculum Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Course <span className="text-gradient">Curriculum</span></h2>
                    <p className="dm-section-desc">
                        Our structured 20-module curriculum takes you from fundamentals to advanced software engineering concepts.
                    </p>

                    <div className="course-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <details className="course-accordion">
                            <summary>Module 1-5: Programming Fundamentals</summary>
                            <div className="course-accordion-content">
                                <ul className="styled-list">
                                    <li><strong>Module 1:</strong> Introduction to Software Engineering</li>
                                    <li><strong>Module 2:</strong> Programming Fundamentals</li>
                                    <li><strong>Module 3:</strong> Variables, Data Types and Operators</li>
                                    <li><strong>Module 4:</strong> Conditional Logic and Loops</li>
                                    <li><strong>Module 5:</strong> Functions and Modular Programming</li>
                                </ul>
                            </div>
                        </details>
                        
                        <details className="course-accordion">
                            <summary>Module 6-9: Object-Oriented Programming (OOP)</summary>
                            <div className="course-accordion-content">
                                <ul className="styled-list">
                                    <li><strong>Module 6:</strong> Object-Oriented Programming</li>
                                    <li><strong>Module 7:</strong> Classes and Objects</li>
                                    <li><strong>Module 8:</strong> Inheritance and Polymorphism</li>
                                    <li><strong>Module 9:</strong> Exception Handling</li>
                                </ul>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Module 10-13: Data Structures & Algorithms</summary>
                            <div className="course-accordion-content">
                                <ul className="styled-list">
                                    <li><strong>Module 10:</strong> Data Structures Fundamentals</li>
                                    <li><strong>Module 11:</strong> Arrays, Linked Lists, Stacks and Queues</li>
                                    <li><strong>Module 12:</strong> Algorithms and Problem Solving</li>
                                    <li><strong>Module 13:</strong> Big O Analysis and Optimization</li>
                                </ul>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Module 14-20: Advanced Engineering & Practices</summary>
                            <div className="course-accordion-content">
                                <ul className="styled-list">
                                    <li><strong>Module 14:</strong> Database Design and SQL</li>
                                    <li><strong>Module 15:</strong> Software Development Lifecycle</li>
                                    <li><strong>Module 16:</strong> Git and Version Control</li>
                                    <li><strong>Module 17:</strong> Testing and Debugging</li>
                                    <li><strong>Module 18:</strong> Clean Code Principles</li>
                                    <li><strong>Module 19:</strong> Design Patterns and Software Architecture</li>
                                    <li><strong>Module 20:</strong> Capstone Software Development Project</li>
                                </ul>
                            </div>
                        </details>
                    </div>
                </div>

                {/* Tools & Technologies Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Tools & <span className="text-gradient">Technologies</span></h2>
                    <p className="dm-section-desc">
                        Gain hands-on experience with the industry-standard languages and tools used by top technology companies.
                    </p>
                    <div className="badge-grid">
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#2563eb', borderColor: '#bfdbfe' }}>Python</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#dc2626', borderColor: '#fecaca' }}>Java</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#d97706', borderColor: '#fde68a' }}>JavaScript</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0284c7', borderColor: '#bae6fd' }}>SQL</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#ea580c', borderColor: '#fed7aa' }}>Git & GitHub</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#4f46e5', borderColor: '#c7d2fe' }}>VS Code</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#16a34a', borderColor: '#bbf7d0' }}>APIs</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#0d9488', borderColor: '#ccfbf1' }}>Databases</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#6366f1', borderColor: '#e0e7ff' }}>Software Architecture</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#9333ea', borderColor: '#e9d5ff' }}>OOP</div>
                        <div className="badge-item" style={{ background: '#f8fafc', color: '#db2777', borderColor: '#fbcfe8' }}>Testing</div>
                    </div>
                </div>

                {/* Career Opportunities Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Career <span className="text-gradient">Opportunities</span></h2>
                    <p className="dm-section-desc">
                        Graduates of our Software Engineering Diploma can pursue high-demand, lucrative career paths across the UAE and globally.
                    </p>
                    
                    <div className="salary-grid">
                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Software Engineer</h4>
                            </div>
                            <p>Design, develop, and maintain complex software systems and applications.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Software Developer</h4>
                            </div>
                            <p>Write clean, scalable code for specific software solutions and products.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Backend Developer</h4>
                            </div>
                            <p>Build the server-side logic, databases, and APIs that power applications.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Full Stack Developer</h4>
                            </div>
                            <p>Handle both frontend interfaces and backend infrastructure development.</p>
                        </div>

                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Application Developer</h4>
                            </div>
                            <p>Create dedicated applications for mobile, desktop, or web platforms.</p>
                        </div>

                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Junior Software Architect</h4>
                            </div>
                            <p>Assist in designing the high-level structure of software systems.</p>
                        </div>

                        <div className="salary-card">
                            <div className="role-header">
                                <h4>QA Engineer</h4>
                            </div>
                            <p>Test software products to ensure quality, performance, and bug-free releases.</p>
                        </div>

                        <div className="salary-card">
                            <div className="role-header">
                                <h4>Technical Consultant</h4>
                            </div>
                            <p>Advise businesses on implementing the best software and technology solutions.</p>
                        </div>
                    </div>
                </div>

                {/* Why Nitaq Academy Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Why <span className="text-gradient">Nitaq Academy</span></h2>
                    <div className="placement-features">
                        <div className="feature-item">
                            <h4>SPEA Licensed</h4>
                            <p>We are a recognized and authorized training institute in Sharjah, ensuring quality education.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Experienced Trainers</h4>
                            <p>Learn directly from industry professionals with years of practical software development experience.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Practical Learning</h4>
                            <p>Focus on hands-on coding, real-world projects, and actionable technical skills.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Career Guidance</h4>
                            <p>Receive support for resume building, interview preparation, and job market navigation.</p>
                        </div>
                        <div className="feature-item">
                            <h4>Flexible Options</h4>
                            <p>Choose between online and classroom training with schedules that fit your lifestyle.</p>
                        </div>
                        <div className="feature-item">
                            <h4>UAE-Based Support</h4>
                            <p>Benefit from local expertise and a deep understanding of the regional technology job market.</p>
                        </div>
                    </div>
                </div>

                {/* Certification Section */}
                <div className="cert-box">
                    <div className="cert-box-content">
                        <h2 className="dm-section-title" style={{ marginBottom: '15px' }}>Software Engineering <span className="text-gradient">Diploma Certification</span></h2>
                        <p className="dm-section-desc" style={{ marginBottom: '20px' }}>
                            Students who successfully complete the program, assignments, and capstone project will receive a Software Engineering Diploma Certificate from Nitaq Academy.
                        </p>
                        <ul className="styled-list" style={{ marginBottom: '25px' }}>
                            <li>Add the credential directly to your **LinkedIn Profile** to attract tech recruiters.</li>
                            <li>Dramatically enhance your **Resume value** for software roles in the UAE.</li>
                            <li>Prove your practical, hands-on coding skills to prospective employers.</li>
                            <li>Issued by a **SPEA Licensed Institute** in Sharjah, UAE.</li>
                        </ul>
                        <a 
                            href="https://wa.me/971527569908" 
                            className="btn btn-primary"
                            onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'cta_certification_whatsapp')}
                        >
                            Speak to an Advisor about Enrollment
                        </a>
                    </div>
                    <div className="cert-box-image">
                        <img src="/images/whatsapp-img-3.png" alt="NITAQ Academy Software Engineering Certificate" />
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Frequently Asked <span className="text-gradient">Questions (FAQs)</span></h2>
                    
                    <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        
                        <details className="course-accordion">
                            <summary>What is a Software Engineering Diploma?</summary>
                            <div className="course-accordion-content">
                                <p>A Software Engineering Diploma is a comprehensive training program that teaches the principles, methodologies, and technical skills required to design, develop, test, and maintain software applications professionally.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Is this Software Engineering Course suitable for beginners?</summary>
                            <div className="course-accordion-content">
                                <p>Yes! The course is structured to take you from absolute basics to advanced concepts. No prior programming experience is required to enroll.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>What programming languages will I learn?</summary>
                            <div className="course-accordion-content">
                                <p>You will gain exposure to core languages and technologies used in the industry, including foundational concepts applicable across Python, Java, JavaScript, and SQL.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Can I become a Software Developer after completing this course?</summary>
                            <div className="course-accordion-content">
                                <p>Yes. The curriculum is designed to equip you with the practical skills and portfolio necessary to apply for entry-level to mid-level software developer roles.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Is the course available online in UAE?</summary>
                            <div className="course-accordion-content">
                                <p>Absolutely. We offer both flexible live online sessions and physical classroom training at our institute in Sharjah, UAE.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>How long does the Software Engineering Diploma take?</summary>
                            <div className="course-accordion-content">
                                <p>The program spans 12 weeks, featuring 60 hours of intensive training, hands-on projects, and mentorship.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>What jobs can I apply for after completing the course?</summary>
                            <div className="course-accordion-content">
                                <p>You can pursue roles such as Software Engineer, Software Developer, Backend Developer, Full Stack Developer, QA Engineer, and Application Developer.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>What is the difference between Software Engineering and Software Development?</summary>
                            <div className="course-accordion-content">
                                <p>While often used interchangeably, Software Engineering focuses on the application of engineering principles to design entire systems and architectures, whereas Software Development is usually more focused on the specific coding and creation of applications.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Do I receive a certificate?</summary>
                            <div className="course-accordion-content">
                                <p>Yes. Upon successful completion, you will receive a Software Engineering Diploma Certificate from Nitaq Academy, a SPEA-licensed institute.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>Is this course available in Sharjah?</summary>
                            <div className="course-accordion-content">
                                <p>Yes! You can attend in-person classes at our state-of-the-art training facility located in Al Majaz 3, Sharjah.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>What projects will I build?</summary>
                            <div className="course-accordion-content">
                                <p>You will work on multiple practical assignments culminating in a Capstone Software Development Project, allowing you to build a complete application from scratch.</p>
                            </div>
                        </details>

                        <details className="course-accordion">
                            <summary>How do I enroll?</summary>
                            <div className="course-accordion-content">
                                <p>You can enroll by contacting our advisors directly via WhatsApp, calling us at +971 52 756 9908, or visiting our campus in Sharjah.</p>
                            </div>
                        </details>

                    </div>
                </div>

                {/* Testimonial Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Student <span className="text-gradient">Success Stories</span></h2>
                    
                    <div className="success-stories-grid">
                        <div className="story-card">
                            <p className="quote">"Nitaq Academy's Software Engineering course provided me with exactly the technical foundation I needed. The hands-on capstone project helped me land my first tech role in Dubai."</p>
                            <div className="author-info">
                                <strong>Omar A.</strong>
                                <span>Junior Software Developer</span>
                            </div>
                        </div>
                        <div className="story-card">
                            <p className="quote">"Transitioning from a non-tech background was intimidating, but the instructors made complex topics like OOP and data structures easy to understand. Highly recommend this diploma!"</p>
                            <div className="author-info">
                                <strong>Fatima S.</strong>
                                <span>Career Changer</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="ai-highlight-box" style={{ background: 'linear-gradient(135deg, var(--primary-color), #166534)', border: 'none', textAlign: 'center' }}>
                    <h2 style={{ color: 'white', marginBottom: '15px' }}>Start Your <span style={{ background: 'none', WebkitTextFillColor: 'white', color: 'white', borderBottom: '3px solid #34d399' }}>Software Engineering</span> Career Today</h2>
                    <p style={{ color: '#e2e8f0', fontSize: '1.1rem', marginBottom: '30px' }}>
                        Gain practical software engineering skills and prepare for high-demand technology careers.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a 
                            href="https://wa.me/971527569908" 
                            className="btn btn-primary"
                            style={{ background: 'white', color: 'var(--primary-color)', padding: '15px 30px', fontWeight: 'bold' }}
                            onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'cta_final_enroll')}
                        >
                            Enroll Now
                        </a>
                        <a 
                            href="tel:+971527569908" 
                            className="btn btn-primary"
                            style={{ background: 'transparent', color: 'white', border: '1px solid white', padding: '15px 30px' }}
                            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'cta_final_contact')}
                        >
                            Contact Advisor
                        </a>
                    </div>
                    <p style={{ color: '#cbd5e1', marginTop: '20px', fontSize: '0.9rem' }}>
                        📞 Phone: +971 52 756 9908 | 📍 Location: Al Majaz 3, Sharjah, UAE
                    </p>
                </div>

            </CourseLayout>
        </>
    );
};

export default SoftwareEngineeringCourse;
