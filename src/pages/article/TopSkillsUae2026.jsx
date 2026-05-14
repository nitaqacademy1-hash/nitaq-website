import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, CheckCircle, ArrowRight, Star, 
    GraduationCap, Laptop, Sparkles, Globe, Shield, TrendingUp, Users,
    Brain, Target, BarChart, Zap, Rocket, MessageSquare
} from 'lucide-react';

const TopSkillsUae2026 = () => {
    const publishDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const faqs = [
        {
            question: "What skills are most in demand in UAE for 2026?",
            answer: "The top skills UAE 2026 include Generative AI, Strategic Digital Marketing, Data Science (Power BI), Cybersecurity, and Hybrid Soft Skills. The UAE's shift toward a knowledge-based economy makes these competencies essential for both students and professionals."
        },
        {
            question: "Is AI literacy mandatory for jobs in Dubai and Sharjah?",
            answer: "By 2026, AI literacy will be a baseline requirement across all sectors in the UAE, from healthcare to finance. Employers are prioritizing candidates who can leverage AI tools like ChatGPT and Midjourney to enhance productivity."
        },
        {
            question: "How can I future-proof my career in the UAE?",
            answer: "To future-proof your career, focus on building a 'T-shaped' skill set: deep expertise in one area (like Finance or HR) and broad literacy in emerging technologies like AI and Data Analytics."
        },
        {
            question: "Does NITAQ ACADEMY provide certification for these skills?",
            answer: "Yes, NITAQ ACADEMY offers SPEA-approved certifications in AI, Marketing, HR, and Finance, designed specifically for the UAE market requirements."
        }
    ];

    const skillHighlight = [
        {
            title: "Artificial Intelligence",
            desc: "Beyond coding—mastering prompt engineering and AI-driven automation.",
            icon: <Brain className="text-blue-500" />,
            link: "/ai-course"
        },
        {
            title: "Digital Marketing",
            desc: "Mastering social commerce, SEO, and brand psychology for the GCC market.",
            icon: <Target className="text-emerald-500" />,
            link: "/professional-marketing-course"
        },
        {
            title: "Data Analytics",
            desc: "Turning big data into actionable business intelligence using Power BI.",
            icon: <BarChart className="text-purple-500" />,
            link: "/power-bi-excel"
        }
    ];

    return (
        <main className="article-details-page">
            <SEO />
            
            {/* Breadcrumb */}
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>Top Skills UAE 2026</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    {/* Header */}
                    <div className="article-header text-center">
                        <span className="article-category-badge">Future-Proofing Guide</span>
                        <h1 className="article-main-title">
                            Top Skills UAE 2026: The Ultimate Guide to Career Success in the Emirates
                        </h1>
                        
                        <div className="article-meta justify-center">
                            <div className="meta-item">
                                <User size={16} />
                                <span>NITAQ Editor</span>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <Calendar size={16} />
                                <span>{publishDate}</span>
                            </div>
                            <div className="meta-divider"></div>
                            <div className="meta-item">
                                <Clock size={16} />
                                <span>12 Min Read</span>
                            </div>
                        </div>
                    </div>

                    <div className="article-featured-img premium-shadow">
                        <img 
                            src="/images/article-future-skills-uae.webp" 
                            alt="Top Skills UAE 2026 - AI Digital Marketing and Career Growth" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                As we look toward 2026, the UAE's economic landscape is undergoing a radical transformation. With the national drive toward digitalization and the UAE Strategy for Artificial Intelligence, the definition of a "competitive professional" has changed forever.
                            </p>

                            <p>
                                Whether you are a student in Sharjah aiming for top universities or a professional in Dubai looking to climb the corporate ladder, staying relevant requires mastering the **top skills UAE 2026**. This guide explores the high-demand competencies that will define the next two years of growth in the Emirates.
                            </p>

                            <div className="skills-highlight-grid">
                                {skillHighlight.map((skill, i) => (
                                    <div key={i} className="skill-mini-card">
                                        <div className="skill-mini-icon">{skill.icon}</div>
                                        <h4>{skill.title}</h4>
                                        <p>{skill.desc}</p>
                                        <Link to={skill.link} className="skill-mini-link">Learn More <ArrowRight size={14} /></Link>
                                    </div>
                                ))}
                            </div>

                            <h2>1. Artificial Intelligence (AI) Mastery</h2>
                            <p>
                                In 2026, AI will no longer be a 'bonus' skill—it will be a fundamental requirement. From Generative AI to automated workflow management, professionals who understand how to co-pilot with AI will outperform their peers.
                            </p>
                            <p>
                                Students and career-switchers are increasingly enrolling in an <Link to="/ai-course" className="text-link">AI Course</Link> to gain a deep understanding of prompt engineering and ethical AI implementation. The UAE's focus on becoming a global AI hub means that expertise in this field ensures job security across all industries.
                            </p>

                            <div className="article-callout">
                                <Zap size={24} className="callout-icon" />
                                <div>
                                    <strong>Pro Tip:</strong> Don't just learn <em>about</em> AI. Learn how to <em>apply</em> it to your specific field, whether it's legal, medical, or administrative.
                                </div>
                            </div>

                            <h2>2. Strategic Digital Marketing & Branding</h2>
                            <p>
                                The GCC market has one of the highest social media penetration rates in the world. As businesses move from traditional sales to complex digital ecosystems, the need for strategic marketers is at an all-time high.
                            </p>
                            <p>
                                Our <Link to="/professional-marketing-course" className="text-link">Digital Marketing Course</Link> focuses on the **top skills UAE 2026** needs: SEO, performance marketing, and branding-as-strategy. Understanding the psychology of the UAE consumer and mastering data-driven campaigns is the secret to scaling businesses in the 2026 economy.
                            </p>

                            <h2>3. Data Analytics (Business Intelligence)</h2>
                            <p>
                                Companies in the UAE are drowning in data but starving for insights. Mastery of tools like Power BI and Advanced Excel has become a standard requirement for managerial roles. Being able to visualize trends and predict market shifts is a superpower in the modern workplace.
                            </p>

                            <h2>4. Soft Skills: The "Human Advantage"</h2>
                            <p>
                                While technical skills are vital, the "Human Advantage" remains irreplaceable. In an AI-driven world, skills like <strong>Critical Thinking</strong>, <strong>Emotional Intelligence</strong>, and <strong>Cross-Cultural Communication</strong> are the ultimate differentiators. 
                            </p>

                            <div className="cta-banner-premium">
                                <div className="cta-content">
                                    <h3>Not sure which skill to start with?</h3>
                                    <p>Our career advisors can help you map out a personalized learning path based on your goals.</p>
                                    <Link to="/contact" className="btn-cta-white">Book Free Consultation</Link>
                                </div>
                                <div className="cta-visual">
                                    <Users size={80} />
                                </div>
                            </div>

                            <h2>5. Cybersecurity Literacy</h2>
                            <p>
                                With great digital power comes great responsibility. As the UAE's digital footprint expands, protecting personal and corporate assets is paramount. Basic cybersecurity awareness and specialized security training are now critical components of the national workforce development.
                            </p>

                            <h2>Conclusion: Start Building Your Future Today</h2>
                            <p>
                                The **top skills UAE 2026** represent a blend of high-tech proficiency and timeless human capability. The best time to start learning was yesterday; the second best time is today.
                            </p>
                            <p>
                                NITAQ ACADEMY is dedicated to providing the residents of Sharjah and the UAE with the tools they need to lead. From academic excellence with SAT prep to professional mastery in AI and Marketing, we are your bridge to 2026 success.
                            </p>

                            <div className="article-footer-cta">
                                <h2>Ready to Take the Next Step?</h2>
                                <p>Join thousands of successful alumni at NITAQ ACADEMY.</p>
                                <div className="btn-group">
                                    <Link to="/courses" className="btn btn-primary btn-large">Browse All Courses</Link>
                                    <a href="https://wa.me/971527569908" className="btn btn-whatsapp btn-large">
                                        <MessageSquare size={18} /> Book Free Consultation
                                    </a>
                                </div>
                            </div>
                        </div>

                        <aside className="article-sidebar">
                            <div className="sidebar-card consultant-card">
                                <div className="avatar-group">
                                    <img src="/images/mohammed-marwan.jpeg" alt="Advisor" />
                                </div>
                                <h4>Expert Consultation</h4>
                                <p>Get a 15-minute free career roadmap from our experts.</p>
                                <a href="tel:+971527569908" className="btn btn-primary w-100">Book Free Consultation</a>
                            </div>

                            <div className="sidebar-card trending-card">
                                <h4>Trending Courses</h4>
                                <ul className="trending-list">
                                    <li><Link to="/ai-course">AI Mastery 2026</Link></li>
                                    <li><Link to="/professional-marketing-course">Professional Marketing</Link></li>
                                    <li><Link to="/sat-preparation-sharjah">SAT Prep Program</Link></li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    {/* FAQ section */}
                    <div className="article-faq-section-v2">
                        <h2 className="text-center">Frequently Asked Questions</h2>
                        <div className="faq-grid-v2">
                            {faqs.map((faq, i) => (
                                <div key={i} className="faq-item-v2">
                                    <h5>{faq.question}</h5>
                                    <p>{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Premium Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                .article-main-title {
                    font-size: 3.5rem;
                    line-height: 1.1;
                    font-weight: 850;
                    margin-bottom: 30px;
                    letter-spacing: -0.02em;
                    color: #0f172a;
                }
                .article-category-badge {
                    display: inline-block;
                    padding: 8px 20px;
                    background: #f0fdf4;
                    color: #166534;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 0.9rem;
                    margin-bottom: 25px;
                    text-transform: uppercase;
                    border: 1px solid #dcfce7;
                }
                .premium-shadow {
                    box-shadow: 0 50px 100px -20px rgba(0,0,0,0.12), 0 30px 60px -30px rgba(0,0,0,0.15);
                    border-radius: 32px;
                    overflow: hidden;
                }
                .skills-highlight-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin: 50px 0;
                }
                .skill-mini-card {
                    padding: 30px;
                    background: #f8fafc;
                    border-radius: 20px;
                    border: 1px solid #f1f5f9;
                    transition: all 0.3s ease;
                }
                .skill-mini-card:hover {
                    transform: translateY(-5px);
                    background: white;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    border-color: var(--primary-color);
                }
                .skill-mini-icon {
                    margin-bottom: 20px;
                }
                .skill-mini-card h4 {
                    margin-bottom: 15px;
                    font-size: 1.25rem;
                }
                .skill-mini-link {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    margin-top: 15px;
                    font-weight: 600;
                    color: var(--primary-color);
                    font-size: 0.9rem;
                }
                .text-link {
                    color: var(--primary-color);
                    font-weight: 600;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .cta-banner-premium {
                    background: #0f172a;
                    border-radius: 32px;
                    padding: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: white;
                    margin: 60px 0;
                    position: relative;
                    overflow: hidden;
                }
                .cta-banner-premium h3 {
                    color: white;
                    font-size: 2.2rem;
                    margin-bottom: 15px;
                }
                .cta-banner-premium p {
                    font-size: 1.1rem;
                    opacity: 0.8;
                    margin-bottom: 30px;
                    max-width: 500px;
                }
                .btn-cta-white {
                    background: white;
                    color: #0f172a;
                    padding: 16px 36px;
                    border-radius: 50px;
                    font-weight: 700;
                    display: inline-block;
                }
                .article-footer-cta {
                    background: #f1f5f9;
                    border-radius: 40px;
                    padding: 80px 40px;
                    text-align: center;
                    margin-top: 80px;
                }
                .article-footer-cta h2 {
                    font-size: 2.8rem;
                    margin-bottom: 20px;
                }
                .btn-group {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    margin-top: 40px;
                    flex-wrap: wrap;
                }
                .btn-large {
                    padding: 20px 45px;
                    font-size: 1.1rem;
                    border-radius: 50px;
                }
                .btn-whatsapp {
                    background: #25d366;
                    color: white;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .article-faq-section-v2 {
                    padding-top: 100px;
                    border-top: 1px solid #f1f5f9;
                }
                .faq-grid-v2 {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .faq-item-v2 h5 {
                    font-size: 1.2rem;
                    margin-bottom: 15px;
                    color: #1e293b;
                }
                @media (max-width: 768px) {
                    .article-main-title { font-size: 2.2rem; }
                    .cta-banner-premium { padding: 40px; flex-direction: column; text-align: center; }
                    .cta-visual { display: none; }
                    .faq-grid-v2 { grid-template-columns: 1fr; }
                }
            `}} />
        </main>
    );
};

export default TopSkillsUae2026;
