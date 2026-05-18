import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, Brain, 
    Lightbulb, Rocket, ShieldCheck, Sparkles, MessageCircle,
    CheckCircle
} from 'lucide-react';

const AiSkillsForStudents = () => {
    const publishDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const essentialSkills = [
        {
            title: "Prompt Engineering",
            desc: "The art of communicating with AI to get precise, high-quality answers for research and learning.",
            icon: <Sparkles size={24} />
        },
        {
            title: "AI Literacy & Ethics",
            desc: "Understanding how AI works and knowing the ethical boundaries of using AI in academic work.",
            icon: <ShieldCheck size={24} />
        },
        {
            title: "Data Interpretation",
            desc: "Using AI to analyze complex data sets and visualize information for school projects and presentations.",
            icon: <Brain size={24} />
        },
        {
            title: "AI Productivity Tools",
            desc: "Mastering tools for task management, summarization, and automated scheduling to save time.",
            icon: <Rocket size={24} />
        }
    ];

    return (
        <main className="article-details-page">
            <SEO 
                title="AI Skills Every Student Needs in 2026 | Nitaq Academy"
                description="Explore the essential AI skills every student in Dubai and Sharjah needs to succeed in academics and future careers. Learn prompt engineering, ethical AI, and more."
                keywords="AI skills for students Dubai, Learn AI Sharjah, Artificial Intelligence UAE students, Future of education AI"
            />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>AI Skills for Students</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <div className="article-header text-center">
                        <span className="article-category-badge">Future Readiness</span>
                        <h1 className="article-main-title">
                            AI Skills Every Student Needs: Preparing for the Future of Work and Education
                        </h1>
                        
                        <div className="article-meta justify-center">
                            <div className="meta-item"><User size={16} /><span>Education Lead</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Calendar size={16} /><span>{publishDate}</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Clock size={16} /><span>10 Min Read</span></div>
                        </div>
                    </div>

                    <div className="article-featured-img premium-shadow">
                        <img 
                            src="/images/ai_v2.webp" 
                            alt="AI Skills Every Student Needs - Future of Education Dubai Sharjah" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                The educational landscape in the UAE is undergoing a massive transformation. From the innovative schools of **Dubai** to the academic hubs of **Sharjah**, Artificial Intelligence is no longer just a trend—it is a foundational skill. For students, mastering AI is the difference between struggling with outdated methods and excelling in a digital-first world.
                            </p>

                            <p>
                                By 2026, over 80% of jobs in the UAE will require some level of AI proficiency. Whether you are aiming for a top university or preparing for your first internship, these are the essential AI skills you need to master today.
                            </p>

                            <div className="skills-grid-premium">
                                {essentialSkills.map((skill, i) => (
                                    <div key={i} className="skill-card-v3">
                                        <div className="skill-icon-box">{skill.icon}</div>
                                        <h4>{skill.title}</h4>
                                        <p>{skill.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>1. Prompt Engineering: The Language of the Future</h2>
                            <p>
                                Most students use AI by asking simple questions, but the real power lies in **Prompt Engineering**. This skill involves crafting detailed, contextual instructions that guide AI models to produce accurate reports, complex code, or creative designs. In our <Link to="/ai-course" className="text-link">Artificial Intelligence Course</Link>, we teach students how to build multi-step prompts that act as a personal research assistant.
                            </p>

                            <h2>2. Understanding Ethical AI & Originality</h2>
                            <p>
                                In the era of ChatGPT, academic integrity is more important than ever. Students in **Sharjah and Dubai** must learn how to use AI as a *collaborator* rather than a *substitute*. This means understanding AI bias, verifying facts, and ensuring that their final work remains their own.
                            </p>

                            <div className="highlight-info-banner">
                                <Lightbulb size={24} />
                                <div>
                                    <h5>Did you know?</h5>
                                    <p>Students who use AI to structure their study plans see a 40% increase in productivity and time management efficiency.</p>
                                </div>
                            </div>

                            <h2>3. AI-Driven Project Management</h2>
                            <p>
                                Modern school projects require collaboration and data. AI tools can help students manage deadlines, summarize long research papers, and even practice for university entrance exams like the SAT or GRE. Mastering these productivity tools ensures that you spend less time on busywork and more time on high-level thinking.
                            </p>

                            <div className="cta-inline-card">
                                <h3>Master AI in Sharjah & Dubai</h3>
                                <p>Join our SPEA-authorized AI Training Program designed specifically for students and young professionals.</p>
                                <div className="cta-flex">
                                    <Link to="/ai-course" className="btn btn-primary">Explore AI Course</Link>
                                    <a href="https://wa.me/971527569908" className="whatsapp-btn">
                                        <MessageCircle size={18} /> Chat with a Counselor
                                    </a>
                                </div>
                            </div>

                            <h2>Why Start Now?</h2>
                            <p>
                                The UAE government is investing billions in AI through initiatives like the 'Dubai Universal Blueprint for Artificial Intelligence'. Students who start learning these skills now will be at the forefront of the region's economy. Our **AI courses in Sharjah** provide the hands-on experience needed to build real-world AI applications.
                            </p>

                            <div className="checklist-container">
                                <h4>Your AI Learning Roadmap</h4>
                                <ul>
                                    <li><CheckCircle size={18} /> Master basic generative AI tools (ChatGPT, Claude, Gemini)</li>
                                    <li><CheckCircle size={18} /> Learn Python basics for AI automation</li>
                                    <li><CheckCircle size={18} /> Understand the fundamentals of Machine Learning</li>
                                    <li><CheckCircle size={18} /> Build a portfolio of AI-assisted projects</li>
                                </ul>
                            </div>

                            <h2>Conclusion</h2>
                            <p>
                                AI is the ultimate equalizer. It gives every student the power of a data scientist, a copywriter, and a researcher. However, the tool is only as good as the user. Investing time in an **AI course in UAE** is the best way to ensure your academic and professional success in 2026 and beyond.
                            </p>
                        </div>

                        <aside className="article-sidebar">
                            <div className="sidebar-promo">
                                <Sparkles className="promo-icon" />
                                <h4>AI for Excellence</h4>
                                <p>Boost your grades and future-proof your career with professional AI training.</p>
                                <Link to="/ai-course" className="btn btn-primary btn-sm">Join the Program</Link>
                            </div>

                            <div className="related-links-card">
                                <h5>Trending Articles</h5>
                                <ul className="sidebar-list">
                                    <li><Link to="/article/best-ai-courses-dubai">Best AI Courses in Dubai</Link></li>
                                    <li><Link to="/article/top-skills-uae-2026">Top Skills for 2026</Link></li>
                                    <li><Link to="/article/digital-marketing-salary-increase-uae">Digital Marketing Salary Boost</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <style dangerouslySetInnerHTML={{ __html: `
                .article-main-title {
                    font-size: 3.2rem;
                    font-weight: 850;
                    color: #1e293b;
                    line-height: 1.1;
                    margin-bottom: 30px;
                }
                .skills-grid-premium {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                    margin: 50px 0;
                }
                .skill-card-v3 {
                    padding: 30px;
                    background: #f8fafc;
                    border-radius: 20px;
                    border: 1px solid #e2e8f0;
                    transition: all 0.3s ease;
                }
                .skill-card-v3:hover { border-color: #3b82f6; transform: translateY(-5px); }
                .skill-icon-box { color: #3b82f6; margin-bottom: 20px; }
                .highlight-info-banner {
                    display: flex;
                    gap: 20px;
                    background: #f0f9ff;
                    padding: 30px;
                    border-radius: 20px;
                    border-left: 5px solid #3b82f6;
                    margin: 40px 0;
                }
                .highlight-info-banner h5 { color: #0369a1; margin-bottom: 5px; }
                .cta-inline-card {
                    background: #0f172a;
                    color: white;
                    padding: 40px;
                    border-radius: 32px;
                    margin: 50px 0;
                }
                .cta-inline-card h3 { color: white; margin-bottom: 15px; }
                .cta-flex { display: flex; gap: 15px; margin-top: 25px; flex-wrap: wrap; }
                .whatsapp-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    background: #25d366;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 100px;
                    font-weight: 600;
                }
                .checklist-container {
                    background: #f8fafc;
                    padding: 35px;
                    border-radius: 24px;
                    margin: 40px 0;
                }
                .checklist-container ul { list-style: none; padding: 0; margin-top: 20px; }
                .checklist-container li { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
                .checklist-container svg { color: #10b981; }
                .sidebar-promo {
                    background: #eff6ff;
                    padding: 30px;
                    border-radius: 24px;
                    text-align: center;
                    margin-bottom: 25px;
                }
                .promo-icon { color: #3b82f6; width: 40px; height: 40px; margin: 0 auto 15px; }
                @media (max-width: 768px) {
                    .article-main-title { font-size: 2.2rem; }
                }
            `}} />
        </main>
    );
};

export default AiSkillsForStudents;
