import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { 
    Calendar, User, Clock, ChevronRight, XCircle, AlertCircle, 
    CheckCircle2, Briefcase, FileSearch, UserCheck, Languages, 
    MessageCircle, Lightbulb, TrendingUp
} from 'lucide-react';

const WhyNotHiredUae = () => {
    const publishDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const reasons = [
        {
            title: "Your CV isn't ATS-Friendly",
            desc: "Many UAE firms use Applicant Tracking Systems. If your CV has complex layouts or lacks keywords like 'UAE Corporate Tax' or 'Data Analysis', it might never reach a human eye.",
            icon: <FileSearch className="text-red-500" />
        },
        {
            title: "Lacking Local Market Knowledge",
            desc: "Employers in Sharjah and Dubai look for candidates who understand UAE-specific regulations, such as Labor Law, VAT, or local business etiquette.",
            icon: <Languages className="text-orange-500" />
        },
        {
            title: "Generic Career Profile",
            desc: "In a hyper-competitive market, being a 'Generalist' is a disadvantage. You need specialized certifications (ACCA, CHRM, AI) to stand out.",
            icon: <UserCheck className="text-blue-500" />
        }
    ];

    return (
        <main className="article-details-page">
            <SEO />
            
            <div className="breadcrumb-wrapper">
                <div className="container">
                    <nav className="article-breadcrumb">
                        <Link to="/">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/articles">Articles</Link>
                        <ChevronRight size={14} />
                        <span>Why You're Not Getting Hired in UAE</span>
                    </nav>
                </div>
            </div>

            <article className="article-container section-padding">
                <div className="container">
                    <div className="article-header text-center">
                        <h1 className="article-main-title">
                            Why You Are Not Getting Hired in UAE: 5 Common Mistakes & How to Fix Them
                        </h1>
                        
                        <div className="article-meta justify-center">
                            <div className="meta-item">
                                <User size={16} />
                                <span>Career Advisor</span>
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
                            src="/images/hero-professional.webp" 
                            alt="Why you are not getting hired in UAE job market guide" 
                        />
                    </div>

                    <div className="article-content-wrapper">
                        <div className="article-main-content">
                            <p className="lead-text">
                                The UAE job market is one of the most rewarding in the world, offering tax-free salaries and global exposure. However, it is also one of the most competitive. If you've been applying for months without success, it's likely not your experience that's the problem—it's your strategy.
                            </p>

                            <p>
                                From Sharjah's growing commercial sector to Dubai's tech hubs, employers receive thousands of applications for a single role. To get hired in 2026, you need to understand the hidden mechanics of the UAE recruitment process.
                            </p>

                            <div className="reasons-impact-grid">
                                {reasons.map((reason, i) => (
                                    <div key={i} className="reason-card">
                                        <div className="reason-header">
                                            {reason.icon}
                                            <h4>{reason.title}</h4>
                                        </div>
                                        <p>{reason.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2>1. The Lack of Specialized UAE Certifications</h2>
                            <p>
                                Many expatriates arrive with degrees from their home countries, but the UAE market values **local relevance**. For example, an HR professional with a degree from abroad will almost always lose to a candidate who holds a <Link to="/chrm" className="text-link">CHRM (Certified HR Manager)</Link> qualification that covers UAE Labor Law.
                            </p>
                            <p>
                                Similarly, if you're in finance, mastering <Link to="/uae-corporate-tax" className="text-link">UAE Corporate Tax</Link> is now a non-negotiable requirement. Investing in specialized training shows employers you are ready to hit the ground running.
                            </p>

                            <h2>2. Your Profile is Not "2026-Ready"</h2>
                            <p>
                                We are in the era of AI. If your profile doesn't demonstrate some level of technological literacy, you are seen as a risk. Learning the basics through an <Link to="/ai-course" className="text-link">AI Training Program</Link> can be the difference between your CV being shortlisted or filed away.
                            </p>

                            <div className="advice-box-blue">
                                <Lightbulb size={24} />
                                <div>
                                    <strong>Solution:</strong> Focus on "Hard Skills" that have immediate ROI for a UAE business—like Data Analytics (Power BI), Digital Marketing, or Specialized Accounting.
                                </div>
                            </div>

                            <h2>3. Networking vs. Cold Applying</h2>
                            <p>
                                In the UAE, the "Hidden Job Market" is real. Over 60% of roles are filled through referrals or direct networking before they even reach LinkedIn. If you are only "cold applying" through portals, you are competing with the 99%. Building relationships in Sharjah and Dubai's professional circles is essential.
                            </p>

                            <h2>4. Cultural and Communication Nuances</h2>
                            <p>
                                Communication is the bridge to employment. Often, candidates have the technical skills but fail the "vibe check" in interviews due to a lack of confidence in professional English or a misunderstanding of UAE business etiquette. Our <Link to="/spoken-english" className="text-link">Spoken English</Link> programs help candidates build the executive presence required by UAE leaders.
                            </p>

                            <div className="career-checklist-premium">
                                <h3>The UAE Career Checklist</h3>
                                <ul>
                                    <li><CheckCircle2 size={18} /> ATS-Optimized CV with UAE Keywords</li>
                                    <li><CheckCircle2 size={18} /> Valid UAE LinkedIn Presence</li>
                                    <li><CheckCircle2 size={18} /> Specialized Local Certification (ACCA, HR, Tax)</li>
                                    <li><CheckCircle2 size={18} /> Demonstrable AI Literacy</li>
                                </ul>
                            </div>

                            <h2>How to Reverse the Trend and Get Hired</h2>
                            <p>
                                To get hired in 2026, you must stop being a "job seeker" and start being a "solution provider." Identify a pain point in a company (e.g., they need better data visualization) and gain the skill (Power BI) to solve it.
                            </p>

                            <div className="cta-section-bordered">
                                <h3>Level Up Your Career Profile</h3>
                                <p>Get the certifications that UAE employers actually value. Join NITAQ ACADEMY and transform your career journey.</p>
                                <div className="btn-row">
                                    <Link to="/courses" className="btn btn-primary">Browse All Courses</Link>
                                    <Link to="/contact" className="btn btn-outline">Free Career Consultation</Link>
                                </div>
                            </div>
                        </div>

                        <aside className="article-sidebar">
                            <div className="sidebar-impact-card">
                                <TrendingUp />
                                <h4>+35% Shortlist Rate</h4>
                                <p>Students with NITAQ certifications report significantly higher interview invitation rates.</p>
                            </div>
                            
                            <div className="enroll-mini-card">
                                <h4>Popular Career Boosters</h4>
                                <Link to="/uae-corporate-tax" className="mini-link">UAE Corporate Tax</Link>
                                <Link to="/ai-course" className="mini-link">AI for Professionals</Link>
                                <Link to="/hrm-courses" className="mini-link">HR Management</Link>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <style dangerouslySetInnerHTML={{ __html: `
                .article-main-title {
                    font-size: 3rem;
                    font-weight: 850;
                    line-height: 1.2;
                    margin-bottom: 20px;
                    color: #0f172a;
                }
                .reasons-impact-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 25px;
                    margin: 50px 0;
                }
                .reason-card {
                    padding: 35px;
                    background: #fdf2f2;
                    border-radius: 24px;
                    border: 1px solid #fee2e2;
                }
                .reason-header {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    margin-bottom: 15px;
                }
                .reason-header h4 { margin: 0; color: #991b1b; }
                .text-link { color: #2563eb; font-weight: 600; text-decoration: underline; }
                .advice-box-blue {
                    display: flex;
                    gap: 20px;
                    background: #eff6ff;
                    padding: 30px;
                    border-radius: 20px;
                    margin: 40px 0;
                    color: #1e40af;
                    border: 1px solid #dbeafe;
                }
                .career-checklist-premium {
                    background: #0f172a;
                    color: white;
                    padding: 40px;
                    border-radius: 32px;
                    margin: 50px 0;
                }
                .career-checklist-premium h3 { color: white; margin-bottom: 25px; }
                .career-checklist-premium ul { list-style: none; padding: 0; }
                .career-checklist-premium li { display: flex; align-items: center; gap: 12px; margin-bottom: 15px; font-weight: 500; }
                .career-checklist-premium svg { color: #22c55e; }
                .cta-section-bordered {
                    padding: 50px;
                    border: 2px dashed #e2e8f0;
                    border-radius: 32px;
                    text-align: center;
                    margin-top: 60px;
                }
                .btn-row { display: flex; gap: 15px; justify-content: center; margin-top: 30px; }
                @media (max-width: 768px) {
                    .article-main-title { font-size: 2.2rem; }
                    .btn-row { flex-direction: column; }
                    .reasons-impact-grid { grid-template-columns: 1fr; }
                }
            `}} />
        </main>
    );
};

export default WhyNotHiredUae;
