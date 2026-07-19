import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, TrendingUp, 
    CheckCircle, Target, MessageCircle, Star
} from 'lucide-react';

const ProfessionalDigitalMarketingCourseArticle = () => {
    const publishDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <main className="article-details-page">
            <SEO 
                title="Professional Digital Marketing Course in Sharjah, UAE"
                description="Master SEO, Google Ads, Social Media Marketing, AI Marketing & Lead Generation with our Professional Digital Marketing Course in Sharjah, UAE."
                keywords="digital marketing course in sharjah, digital marketing course in uae, SEO, Google Ads, Social Media Marketing"
            />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>Professional Digital Marketing Course UAE</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <div className="article-header text-center">
                        <span className="article-category-badge">Career & Courses</span>
                        <h1 className="article-main-title">
                            Professional Digital Marketing Course in Sharjah, UAE
                        </h1>
                        
                        <div className="article-meta justify-center">
                            <div className="meta-item"><User size={16} /><span>Education Expert</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Calendar size={16} /><span>{publishDate}</span></div>
                            <div className="meta-divider"></div>
                            <div className="meta-item"><Clock size={16} /><span>15 Min Read</span></div>
                        </div>
                    </div>

                    <div className="article-featured-img premium-shadow">
                        <img 
                            src="/images/course-marketing.webp" 
                            alt="Professional Digital Marketing Course in Sharjah, UAE" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                Build in-demand digital marketing skills and learn how modern businesses attract customers, generate leads, increase sales, and grow online. Whether you're a beginner, entrepreneur, student, freelancer, or working professional, this practical Digital Marketing Course at NITAQ Academy will help you understand and apply the strategies used by successful brands and businesses across the UAE and globally.
                            </p>

                            <div className="course-overview-box">
                                <h3>Course Overview</h3>
                                <ul className="course-features-list">
                                    <li><CheckCircle size={18} /> <strong>Level:</strong> Beginner to Advanced</li>
                                    <li><CheckCircle size={18} /> <strong>Focus:</strong> Digital Marketing & Business Growth</li>
                                    <li><CheckCircle size={18} /> <strong>Duration:</strong> Flexible</li>
                                    <li><CheckCircle size={18} /> <strong>Mode:</strong> Offline (Sharjah) | Live Online</li>
                                    <li><CheckCircle size={18} /> <strong>Certificate:</strong> Professional Training Certificate</li>
                                    <li><CheckCircle size={18} /> <strong>Market Focus:</strong> UAE & GCC Business Environment</li>
                                </ul>
                            </div>

                            <h2>Why Learn Digital Marketing in 2026?</h2>
                            <p>
                                Digital marketing has become one of the most valuable business skills in the modern economy. Companies of all sizes—from startups to multinational organizations—invest heavily in digital channels to attract customers and increase revenue.
                            </p>
                            <p>
                                As consumer behavior continues shifting online, the demand for skilled digital marketers continues to grow rapidly. Businesses today need professionals who can:
                            </p>
                            <ul>
                                <li>Increase website traffic</li>
                                <li>Improve Google rankings</li>
                                <li>Manage advertising campaigns</li>
                                <li>Generate qualified leads</li>
                                <li>Build strong brand awareness</li>
                                <li>Create engaging content</li>
                                <li>Analyze marketing performance</li>
                                <li>Improve customer acquisition strategies</li>
                            </ul>

                            <h2>Build Skills That Businesses Actually Need</h2>
                            <p>
                                This course focuses on practical skills that are actively used by modern marketing teams and business owners. You will learn how digital channels work together to create customer journeys that move people from awareness to purchase.
                            </p>
                            <p>
                                One of the biggest differences between beginners and successful marketers is strategic thinking. This course helps participants understand how to think beyond posting content and running advertisements.
                            </p>

                            <h2>Who Should Attend This Course?</h2>
                            <div className="attendees-grid">
                                <div>
                                    <strong>Marketing Beginners</strong>
                                    <p>Individuals starting their journey in digital marketing and looking for structured professional training.</p>
                                </div>
                                <div>
                                    <strong>Students & Fresh Graduates</strong>
                                    <p>Learners who want to improve their employability and gain practical skills before entering the job market.</p>
                                </div>
                                <div>
                                    <strong>Entrepreneurs</strong>
                                    <p>Business owners seeking to attract more customers, generate leads, and grow their businesses online.</p>
                                </div>
                                <div>
                                    <strong>Freelancers</strong>
                                    <p>Professionals who want to offer digital marketing services and expand their income opportunities.</p>
                                </div>
                            </div>

                            <h2>Course Curriculum Breakdown</h2>
                            
                            <h3>Module 1: Introduction to Digital Marketing</h3>
                            <p>Build a strong foundation by understanding how digital marketing works in today's business environment, focusing on the Marketing Funnel, Customer Journey Mapping, and Online Consumer Behavior.</p>

                            <h3>Module 2: Search Engine Optimization (SEO)</h3>
                            <p>Learn how websites rank on Google and how businesses attract organic traffic without paying for advertisements. Covering Keyword Research, On-Page SEO, Technical SEO, and Link Building.</p>

                            <h3>Module 3: Google Ads & SEM</h3>
                            <p>Learn how businesses generate immediate traffic and leads using paid advertising. Includes Search Campaign Setup, Keyword Targeting, Bidding Strategies, and Conversion Tracking.</p>

                            <h3>Module 4 & 5: Social Media Marketing & Advertising</h3>
                            <p>Learn how brands build awareness, engage audiences, and generate business opportunities through platforms like Facebook, Instagram, LinkedIn, and TikTok, along with paid campaigns to generate leads and sales.</p>

                            <h3>Module 6 & 7: Content & Email Marketing</h3>
                            <p>Learn how strategic content attracts customers and supports business growth, combined with Email Marketing to build customer relationships and increase conversions through automated workflows.</p>

                            <h3>Module 8: AI for Digital Marketing</h3>
                            <p>Explore how artificial intelligence is transforming modern marketing operations. Hands-on experience with ChatGPT, Gemini, Claude, and Canva AI for content generation and campaign planning.</p>

                            <h3>Module 9: Analytics & Performance Measurement</h3>
                            <p>Learn how successful marketers measure campaign effectiveness and improve results through data using Google Analytics, Search Console, and performance dashboards.</p>

                            <div className="whatsapp-cta-section">
                                <div className="cta-content">
                                    <h3>Ready to Build In-Demand Skills?</h3>
                                    <p>Take the first step toward understanding modern marketing. Limited seats available for classroom sessions in Sharjah.</p>
                                </div>
                                <a 
                                    href="https://wa.me/971527569908?text=I'm%20interested%20in%20the%20Professional%20Digital%20Marketing%20course" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="whatsapp-btn-large"
                                >
                                    <MessageCircle size={20} /> Speak to Advisor
                                </a>
                            </div>

                            <h2>What You Will Gain</h2>
                            <ul>
                                <li>Understand the complete digital marketing ecosystem</li>
                                <li>Learn how businesses attract customers online</li>
                                <li>Develop strategic marketing thinking</li>
                                <li>Build confidence using digital marketing platforms</li>
                                <li>Understand customer behavior and online purchasing journeys</li>
                                <li>Gain practical knowledge that can be applied immediately</li>
                            </ul>

                            <h2>Why Choose NITAQ Academy?</h2>
                            <p>
                                <strong>Expert-Led Training:</strong> Learn from experienced professionals who understand modern marketing practices.<br/>
                                <strong>Practical Learning Environment:</strong> Focus on hands-on implementation rather than theory alone.<br/>
                                <strong>UAE Market Focus:</strong> Training aligned with the needs of businesses operating within the UAE and GCC region.<br/>
                                <strong>Flexible Learning Modes:</strong> Choose between classroom sessions in Sharjah or live online learning.
                            </p>
                        </div>

                        <aside className="article-sidebar">
                            <div className="sidebar-course-widget">
                                <Star className="widget-icon" />
                                <h4>Enroll Today</h4>
                                <p>Start your journey toward becoming a confident digital marketing professional.</p>
                                <Link to="/courses/professional-digital-marketing-course-sharjah-uae" className="btn btn-primary btn-sm w-full">View Course Details</Link>
                            </div>

                            <div className="sidebar-stats-card">
                                <TrendingUp size={32} />
                                <h5>High Demand Skills</h5>
                                <p>Digital marketing skills are valuable across multiple industries and business sectors in the UAE.</p>
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
                .inline-link { color: #3b82f6; font-weight: 700; text-decoration: underline; }
                .course-overview-box {
                    background: #f8fafc;
                    border: 1px solid #e2e8f0;
                    padding: 30px;
                    border-radius: 16px;
                    margin: 40px 0;
                }
                .course-overview-box h3 { margin-bottom: 20px; color: #0f172a; }
                .course-features-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 15px;
                }
                .course-features-list li {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 500;
                }
                .course-features-list svg { color: #10b981; }
                .attendees-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 30px 0;
                }
                .attendees-grid div {
                    background: #fff;
                    border: 1px solid #e2e8f0;
                    padding: 20px;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
                }
                .attendees-grid strong {
                    display: block;
                    font-size: 1.1rem;
                    margin-bottom: 10px;
                    color: #0f172a;
                }
                .whatsapp-cta-section {
                    background: #25d366;
                    color: white;
                    padding: 40px;
                    border-radius: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                    margin: 60px 0;
                }
                .cta-content h3 { color: white; margin-bottom: 10px; }
                .whatsapp-btn-large {
                    background: white;
                    color: #25d366;
                    padding: 16px 32px;
                    border-radius: 100px;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    transition: transform 0.2s ease;
                }
                .whatsapp-btn-large:hover { transform: scale(1.05); }
                .sidebar-course-widget {
                    background: #0f172a;
                    color: white;
                    padding: 30px;
                    border-radius: 24px;
                    margin-bottom: 25px;
                    text-align: center;
                }
                .widget-icon { color: #f59e0b; width: 48px; height: 48px; margin: 0 auto 20px; }
                .sidebar-course-widget h4 { color: white; margin-bottom: 15px; }
                .sidebar-stats-card {
                    background: #f1f5f9;
                    padding: 30px;
                    border-radius: 24px;
                    text-align: center;
                }
                .sidebar-stats-card h5 { margin: 15px 0 10px; font-weight: 800; }
                @media (max-width: 991px) {
                    .whatsapp-cta-section { flex-direction: column; text-align: center; }
                    .course-features-list { grid-template-columns: 1fr; }
                    .attendees-grid { grid-template-columns: 1fr; }
                }
                @media (max-width: 768px) {
                    .article-main-title { font-size: 2.2rem; }
                }
            `}} />
        </main>
    );
};

export default ProfessionalDigitalMarketingCourseArticle;
