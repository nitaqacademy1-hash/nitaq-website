import React, { Suspense, lazy } from 'react';
import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { Award, Target, BookOpen, Layers, Settings, Users, Brain, ShieldCheck, HelpCircle } from 'lucide-react';

const CourseFAQ = lazy(() => import('../../components/CourseFAQ'));

const ProfessionalDigitalMarketingCourse = () => {
    const infoData = {
        "Level": "Beginner to Advanced (No coding needed)",
        "Focus": "SEO, PPC, Social Media & Generative AI",
        "Mode": "Classroom (Al Majaz, Sharjah) | Live Online",
        "Certificate": "SPEA-Authorized & Attested Certificate",
        "Market Focus": "UAE & GCC Digital Landscape",
        "Placement": "Resume Optimization & Interview Prep"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Professional Digital Marketing Course in Sharjah, UAE"
                subtitle="Master SEO, Google Ads, Meta Paid Campaigns, Web Analytics, & Generative AI to Drive Lead Generation and Scale Businesses in the UAE Market."
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
                        color: #334155;
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
                    .overview-split {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 30px;
                        align-items: center;
                    }
                    .overview-image img {
                        width: 100%;
                        border-radius: 12px;
                        box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    }
                    @media (min-width: 992px) {
                        .overview-split {
                            grid-template-columns: 1fr 1fr;
                            gap: 50px;
                        }
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
                    .why-learn-card h3 {
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
                    .practical-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 25px;
                        border-radius: 12px;
                        position: relative;
                        overflow: hidden;
                    }
                    .practical-card p {
                        font-size: 0.925rem;
                        color: #475569;
                        line-height: 1.6;
                    }
                    .tools-icon-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .tool-icon-card {
                        background: #f8fafc;
                        padding: 30px 20px;
                        border-radius: 12px;
                        text-align: center;
                        border: 1px solid #e2e8f0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 12px;
                        transition: all 0.3s ease;
                    }
                    .tool-icon-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 20px rgba(0,0,0,0.05);
                        border-color: var(--primary-color);
                    }
                    .tool-icon-card h3 {
                        font-size: 1.05rem;
                        color: #1e293b;
                        margin: 0;
                        font-weight: 600;
                    }
                    .tool-icon-card p {
                        font-size: 0.85rem;
                        color: #64748b;
                        margin: 0;
                        line-height: 1.5;
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
                    .role-header h3 {
                        font-size: 1.15rem;
                        color: #0f172a;
                        font-weight: 600;
                        margin: 0;
                    }
                    .salary-badge {
                        background: #ecfdf5;
                        color: #047857;
                        font-size: 0.8rem;
                        font-weight: 700;
                        padding: 4px 10px;
                        border-radius: 6px;
                        border: 1px solid #a7f3d0;
                    }
                    .salary-card p {
                        font-size: 0.9rem;
                        color: #475569;
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
                    .feature-item h3 {
                        font-size: 1.1rem;
                        color: #0f172a;
                        margin-bottom: 10px;
                        font-weight: 600;
                    }
                    .feature-item p {
                        font-size: 0.9rem;
                        color: #475569;
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
                    .ai-card h3 {
                        font-size: 1.15rem;
                        color: #34d399;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    .ai-card p {
                        font-size: 0.9rem;
                        color: #f3f4f6;
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
                    .sticky-whatsapp-btn {
                        position: fixed;
                        bottom: 30px;
                        right: 30px;
                        z-index: 999;
                        background: #25d366;
                        color: white;
                        border-radius: 50%;
                        width: 60px;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
                        transition: all 0.3s ease;
                    }
                    .sticky-whatsapp-btn:hover {
                        transform: scale(1.1);
                        box-shadow: 0 15px 30px rgba(37, 211, 102, 0.4);
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
                    .inline-cta-bar h3 {
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
                `}} />

                {/* Hero Badges */}
                <div className="badge-grid">
                    <div className="badge-item">✓ Beginner to Advanced</div>
                    <div className="badge-item">✓ Classroom Training in Al Majaz, Sharjah</div>
                    <div className="badge-item">✓ Interactive Live Online Training</div>
                    <div className="badge-item">✓ 8 Hands-on Practical Projects</div>
                    <div className="badge-item">✓ Generative AI Marketing Tools</div>
                    <div className="badge-item">✓ SPEA Authorized Certificate</div>
                </div>

                {/* Course Overview Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Course <span className="text-gradient">Overview</span></h2>
                    
                    <div className="overview-split">
                        <div className="dm-section-desc" style={{ marginBottom: 0 }}>
                            <p style={{ marginBottom: '20px' }}>
                                In today's digital-first world, traditional advertising channels no longer suffice. Modern customers rely extensively on search engines, social media content, customer reviews, online video, and direct digital messaging to discover and evaluate brands before making a transaction. Consequently, businesses across Sharjah, the wider UAE, and the GCC region are aggressively recruiting skilled marketing practitioners who can establish strong online visibility, manage performance marketing budgets, audit web platforms, and coordinate customer journeys.
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                NITAQ Academy's Professional Digital Marketing Course in Sharjah is a comprehensive, hands-on certification program explicitly tailored to align with contemporary business needs. Rather than teaching outdated theories, we focus on real-world practical applications. You will learn the mechanics of how customers think, how search algorithms index content, how bidding systems deploy ad budgets, and how data analytics reveal consumer behaviors. Our training is designed to provide immediate value—equipping you with operational capability from your very first session.
                            </p>
                            <p style={{ marginBottom: '20px' }}>
                                This program is unique in its integration of advanced artificial intelligence (AI) marketing frameworks. As digital ecosystems evolve, AI tools like ChatGPT, Gemini, and Claude have become standard for content generation, keyword research, automation, and market analysis. By mastering these technologies at NITAQ Academy, you will achieve up to 10x higher productivity, allowing you to design, launch, and optimize high-converting campaigns faster than traditional marketers.
                            </p>
                            <p>
                                We offer complete flexibility with offline classroom sessions at our premium training center in Sharjah (located in the prominent Abu Khamseen Tower, Majaz 3) and live online classes accessible from anywhere in the UAE. Under the direct mentorship of senior industry leaders, you will complete hands-on projects, execute live audits, build professional strategies, and earn a recognized completion certificate that accelerates your career mobility.
                            </p>
                        </div>
                        <div className="overview-image">
                            <img src="/images/digital_marketing_overview.png" alt="Digital Marketing Course Overview" loading="lazy" />
                        </div>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', color: '#0f172a', fontWeight: '600', marginTop: '30px', marginBottom: '15px' }}>Available Learning Modes</h3>
                    <div className="why-learn-grid" style={{ marginTop: '10px', marginBottom: '20px' }}>
                        <div className="why-learn-card" style={{ borderTopColor: 'var(--primary-color)' }}>
                            <h3>Classroom Training in Sharjah</h3>
                            <p>Attend in-person lectures at our campus in Abu Khamseen Tower, Al Majaz 3. Gain direct mentor guidance, live interactive campaign evaluations, and peer-to-peer collaboration in physical batch sizes limited to 8–12 students.</p>
                        </div>
                        <div className="why-learn-card" style={{ borderTopColor: 'var(--accent-color)' }}>
                            <h3>Live Online Training</h3>
                            <p>Join virtual live sessions from anywhere in the UAE. Gain the same comprehensive syllabus coverage, screen sharing campaign walkthroughs, digital whiteboards, and class recordings with flexible evening and weekend sessions.</p>
                        </div>
                    </div>

                    <div className="inline-cta-bar">
                        <h3>Have questions about schedules or payment plans?</h3>
                        <div className="inline-cta-buttons">
                            <a 
                                href="https://wa.me/971527569908" 
                                className="btn btn-primary"
                                style={{ background: '#25d366', borderColor: '#25d366', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'cta_overview_whatsapp')}
                            >
                                WhatsApp Advisor
                            </a>
                            <a 
                                href="tel:+97165798313" 
                                className="btn" 
                                style={{ background: '#f1f5f9', color: '#1e293b' }}
                                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'cta_overview_call')}
                            >
                                Call +971 6 579 8313
                            </a>
                        </div>
                    </div>
                </div>

                {/* Tools Covered Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Digital Marketing <span className="text-gradient">Tools Covered</span></h2>
                    <p className="dm-section-desc">
                        Gain comprehensive, hands-on experience in the exact tools used by top advertising agencies, performance marketing teams, and corporate departments in Dubai and Sharjah.
                    </p>
                    
                    <div className="tools-category-grid" style={{ display: 'none' }}></div> {/* Deprecated text list */}

                    <div className="tools-icon-grid">
                        {/* SEO & Analytics */}
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlesearchconsole.svg" alt="Google Search Console Logo" width="48" height="48" loading="lazy" />
                            <h3>Search Console</h3>
                            <p>Monitor site health & rankings.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleanalytics.svg" alt="Google Analytics GA4 Logo" width="48" height="48" loading="lazy" />
                            <h3>Analytics (GA4)</h3>
                            <p>Track traffic & conversions.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googletagmanager.svg" alt="Google Tag Manager Logo" width="48" height="48" loading="lazy" />
                            <h3>Tag Manager</h3>
                            <p>Install tracking pixels & events.</p>
                        </div>

                        {/* Paid Ads */}
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googleads.svg" alt="Google Ads Logo" width="48" height="48" loading="lazy" />
                            <h3>Google Ads</h3>
                            <p>Build search & display campaigns.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/meta.svg" alt="Meta Ads Manager Logo" width="48" height="48" loading="lazy" />
                            <h3>Meta Ads</h3>
                            <p>Targeted FB & Instagram ads.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn Campaign Manager Logo" width="48" height="48" loading="lazy" />
                            <h3>LinkedIn Ads</h3>
                            <p>Execute B2B targeting campaigns.</p>
                        </div>

                        {/* CMS & Design & Email */}
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/wordpress.svg" alt="WordPress Logo" width="48" height="48" loading="lazy" />
                            <h3>WordPress</h3>
                            <p>Build & optimize landing pages.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/openai.svg" alt="ChatGPT Logo" width="48" height="48" loading="lazy" />
                            <h3>ChatGPT & AI</h3>
                            <p>Write copy & build personas.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/canva.svg" alt="Canva Pro Logo" width="48" height="48" loading="lazy" />
                            <h3>Canva Pro</h3>
                            <p>Design social graphics & banners.</p>
                        </div>
                        <div className="tool-icon-card">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mailchimp.svg" alt="Mailchimp Logo" width="48" height="48" loading="lazy" />
                            <h3>Mailchimp</h3>
                            <p>Automated email marketing flows.</p>
                        </div>
                    </div>
                </div>

                {/* AI Marketing Section */}
                <div className="ai-highlight-box">
                    <div className="overview-split">
                        <div className="dm-section-desc" style={{ marginBottom: 0 }}>
                            <h2>Master <span>AI-Powered</span> Digital Marketing</h2>
                            <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                                Artificial Intelligence is rewriting the rules of marketing. At NITAQ Academy, we don't just teach traditional SEO and Ads; we teach you how to become an AI-augmented marketer capable of automating workflows, generating content, and scaling campaigns at unprecedented speeds.
                            </p>
                            <div className="ai-grid">
                                <div className="ai-card">
                                    <h3>AI Content Creation</h3>
                                    <p>Generate highly engaging, SEO-optimized blog articles, social media hooks, and high-converting ad copies in seconds using advanced prompt engineering.</p>
                                </div>
                                <div className="ai-card">
                                    <h3>AI Competitive Intelligence</h3>
                                    <p>Leverage LLMs to summarize competitor pages, extract product benefits, identify customer pain points, and predict campaign performance metrics.</p>
                                </div>
                                <div className="ai-card">
                                    <h3>AI Marketing Automation</h3>
                                    <p>Build intelligent email response sequences, automate social publishing calendars, and run smart lead classification flows with minimum manual effort.</p>
                                </div>
                                <div className="ai-card">
                                    <h3>AI-Driven Design</h3>
                                    <p>Design premium advertising graphics, banners, logos, and video scripts using Canva AI and generative artwork generators.</p>
                                </div>
                            </div>
                        </div>
                        <div className="overview-image" style={{ alignSelf: 'stretch', display: 'flex' }}>
                            <img src="/images/ai_marketing_illustration.png" alt="AI Powered Digital Marketing Courses in UAE" style={{ objectFit: 'cover', height: '100%', minHeight: '400px' }} loading="lazy" />
                        </div>
                    </div>
                </div>

                {/* Career Opportunities & Salary Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Career Opportunities <span className="text-gradient">& UAE Salary Guide</span></h2>
                    <p className="dm-section-desc">
                        According to UAE recruitment reports, digital marketing is one of the most in-demand domains. Below is the average salary range in Dubai, Sharjah, and Abu Dhabi for certified professionals who graduate from NITAQ Academy:
                    </p>
                    
                    <div className="salary-grid">
                        <div className="salary-card">
                            <div className="role-header">
                                <h3>Digital Marketing Specialist</h3>
                                <span class="salary-badge">AED 6,000 - 12,000 / month</span>
                            </div>
                            <p>Formulate and execute overall digital marketing strategies, supervise social channels, and coordinate with design teams.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h3>SEO Specialist</h3>
                                <span class="salary-badge">AED 7,000 - 14,000 / month</span>
                            </div>
                            <p>Optimize site architecture, conduct technical audits, perform keyword mapping, and rank pages organically on Google.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h3>PPC & Performance Marketer</h3>
                                <span class="salary-badge">AED 8,000 - 16,000 / month</span>
                            </div>
                            <p>Manage monthly ad budgets on Google Ads and Meta Ads, optimize conversions, track ROI, and analyze CPC metrics.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h3>Social Media Manager</h3>
                                <span class="salary-badge">AED 5,000 - 10,000 / month</span>
                            </div>
                            <p>Manage organic brand handles, schedule content calendars, engage online communities, and design video concepts.</p>
                        </div>
                        
                        <div className="salary-card">
                            <div className="role-header">
                                <h3>Content Marketer & Copywriter</h3>
                                <span class="salary-badge">AED 6,000 - 11,000 / month</span>
                            </div>
                            <p>Draft high-conversion landing page copy, write SEO-optimized blog posts, and compose email newsletter sequences.</p>
                        </div>
                    </div>
                </div>

                {/* Job Placement Assistance Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Job Placement <span className="text-gradient">Assistance</span></h2>
                    
                    <div className="overview-split">
                        <div className="dm-section-desc" style={{ marginBottom: 0 }}>
                            <p style={{ marginBottom: '30px' }}>
                                At NITAQ Academy, our goal isn't just to provide a course completion certificate. We are dedicated to ensuring you have the assets and interview readiness to land a role in the UAE marketing sector.
                            </p>
                            
                            <div className="placement-features">
                                <div className="feature-item">
                                    <h3>Resume Drafting & Review</h3>
                                    <p>Our career advisors help you audit your resume to highlight your practical campaign achievements, tools learned, and certifications.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>LinkedIn Profile Optimization</h3>
                                    <p>We optimize your LinkedIn profile with primary marketing keywords to attract corporate recruiters and headhunters in Dubai and Sharjah.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Agency Interview Preparation</h3>
                                    <p>Participate in simulated mock interviews, covering real agency brief questions, technical SEO troubleshooting, and ad budget configuration tasks.</p>
                                </div>
                                <div className="feature-item">
                                    <h3>Live Project Portfolio</h3>
                                    <p>Graduate with a tangible campaign portfolio featuring real SEO audits, keyword matrices, and search ad structures that you can present to employers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="overview-image">
                            <img src="/images/job_placement_illustration.png" alt="Digital Marketing Job Placement and Career Growth" loading="lazy" />
                        </div>
                    </div>
                </div>

                {/* Student Success Stories */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Student <span className="text-gradient">Success Stories</span></h2>
                    <p className="dm-section-desc">
                        Read how graduates from our academy in Sharjah have transformed their careers, landed marketing jobs, and scaled their businesses:
                    </p>
                    
                    <div className="success-stories-grid">
                        <div className="story-card">
                            <p className="quote">"I joined NITAQ Academy as a fresh graduate. The practical SEO and Meta Ads modules helped me clear my technical interviews easily, and I landed a job as a Digital Executive in Dubai within 2 months of graduation."</p>
                            <div className="author-info">
                                <strong>Sarah M.</strong>
                                <span>Alumni, Digital Marketing Executive</span>
                            </div>
                        </div>
                        <div className="story-card">
                            <p className="quote">"As an entrepreneur running a boutique in Sharjah, I used to rely on expensive marketing agencies. This course taught me how to manage my own Google Ads and target local customers directly. My lead volume increased by 40%."</p>
                            <div className="author-info">
                                <strong>Ahmed K.</strong>
                                <span>Business Owner</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certification Section */}
                <div className="cert-box">
                    <div className="cert-box-content">
                        <h2 className="dm-section-title" style={{ marginBottom: '15px' }}>Earn a Attested <span className="text-gradient">Marketing Certificate</span></h2>
                        <p className="dm-section-desc" style={{ marginBottom: '20px' }}>
                            Upon successful completion of the course curriculum, project assessments, and practical audits, you will receive the **NITAQ Academy Professional Digital Marketing Course Completion Certificate**.
                        </p>
                        <ul className="styled-list" style={{ marginBottom: '25px' }}>
                            <li>Add credential directly to your **LinkedIn Profile** to attract recruiters.</li>
                            <li>Dramatically enhance your **Resume value** for marketing roles in Dubai and Sharjah.</li>
                            <li>Prove your practical, hands-on campaign execution skills to corporate employers.</li>
                            <li>Secure salary increases, job promotions, and high-paying freelance clients.</li>
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
                        <img src="/images/whatsapp-img-3.webp" alt="NITAQ Academy Professional Certificate Authority" width="280" height="396" loading="lazy" />
                    </div>
                </div>

                {/* FAQ Section */}
                <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading FAQs...</div>}>
                    <CourseFAQ />
                </Suspense>

                <a 
                    href="https://wa.me/971527569908" 
                    className="sticky-whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sticky_floating_whatsapp')}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" style={{ display: 'block' }}>
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.727-1.46L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.01-5.05-2.85-6.892-1.84-1.842-4.29-2.856-6.896-2.858-5.442 0-9.868 4.372-9.872 9.745-.002 1.792.483 3.548 1.406 5.103l-.974 3.553 3.65-.958zm10.934-7.46c-.366-.183-2.165-1.07-2.5-1.19-.333-.12-.577-.18-.82.18-.243.36-.94 1.19-1.152 1.43-.213.24-.426.27-.792.09-.366-.18-1.547-.57-2.946-1.82-1.088-.97-1.823-2.17-2.036-2.536-.213-.365-.023-.563.16-.745.164-.165.366-.426.548-.64.182-.213.243-.365.365-.608.122-.243.06-.456-.03-.64-.09-.18-.82-1.98-1.126-2.72-.3-.72-.6-0.62-.82-.63-.21-.01-.45-.01-.69-.01-.24 0-.63.09-.96.45-.33.36-1.25 1.22-1.25 2.97 0 1.75 1.27 3.44 1.45 3.68.18.24 2.5 3.82 6.06 5.35.85.36 1.5.58 2.01.74.85.27 1.62.23 2.23.14.68-.1 2.16-.88 2.47-1.74.31-.85.31-1.58.21-1.74-.1-.15-.36-.24-.73-.42z"/>
                    </svg>
                </a>

            </CourseLayout>
        </>
    );
};

export default ProfessionalDigitalMarketingCourse;
