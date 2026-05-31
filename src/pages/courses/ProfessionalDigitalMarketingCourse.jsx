import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { Award, Target, BookOpen, Layers, Settings, Users, Brain, ShieldCheck, HelpCircle } from 'lucide-react';

const ProfessionalDigitalMarketingCourse = () => {
    const infoData = {
        "Level": "Beginner to Advanced",
        "Focus": "Digital Marketing & Business Growth",
        "Mode": "Offline (Sharjah) | Live Online",
        "Certificate": "Professional Training Certificate",
        "Market": "UAE & GCC Focused",
        "Projects": "Hands-on Campaign Experience"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Professional Digital Marketing Course in Sharjah, UAE"
                subtitle="Master SEO, Google Ads, Social Media Marketing, AI Marketing, Lead Generation & Analytics"
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
                    .who-attend-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .who-attend-card {
                        background: #f8fafc;
                        border: 1px solid #e2e8f0;
                        padding: 25px;
                        border-radius: 12px;
                        text-align: center;
                        transition: all 0.3s ease;
                    }
                    .who-attend-card:hover {
                        background: white;
                        border-color: var(--primary-color);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                    }
                    .who-attend-card h4 {
                        font-size: 1.15rem;
                        color: #0f172a;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    .who-attend-card p {
                        font-size: 0.9rem;
                        color: #64748b;
                        line-height: 1.5;
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
                    .syllabus-content h5 {
                        font-size: 1rem;
                        color: #0f172a;
                        margin-top: 15px;
                        margin-bottom: 10px;
                        font-weight: 600;
                    }
                    .practical-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .practical-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 25px;
                        border-radius: 12px;
                        position: relative;
                        overflow: hidden;
                    }
                    .practical-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 4px;
                        height: 100%;
                        background: var(--accent-color);
                    }
                    .practical-card h4 {
                        font-size: 1.15rem;
                        color: #0f172a;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    .practical-card p {
                        font-size: 0.925rem;
                        color: #475569;
                        line-height: 1.6;
                    }
                    .tools-section {
                        margin-top: 50px;
                        background: #f8fafc;
                        padding: 40px;
                        border-radius: 20px;
                        border: 1px solid #e2e8f0;
                    }
                    .tools-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                        gap: 20px;
                        margin-top: 25px;
                    }
                    .tool-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 20px;
                        border-radius: 12px;
                        text-align: center;
                    }
                    .tool-card h4 {
                        font-size: 1rem;
                        color: #0f172a;
                        margin-bottom: 10px;
                        font-weight: 600;
                        border-bottom: 1px solid #f1f5f9;
                        padding-bottom: 8px;
                    }
                    .tool-card ul {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                        font-size: 0.85rem;
                        color: #64748b;
                    }
                    .tool-card ul li {
                        margin-bottom: 6px;
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
                    .careers-grid {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                        gap: 20px;
                        margin-top: 30px;
                    }
                    .career-card {
                        background: white;
                        border: 1px solid #e2e8f0;
                        padding: 30px;
                        border-radius: 16px;
                        transition: all 0.3s ease;
                    }
                    .career-card:hover {
                        border-color: var(--primary-color);
                        box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
                        transform: translateY(-3px);
                    }
                    .career-card h4 {
                        font-size: 1.2rem;
                        color: #0f172a;
                        margin-bottom: 8px;
                        font-weight: 600;
                    }
                    .career-card .salary {
                        font-size: 0.85rem;
                        color: var(--primary-color);
                        font-weight: 700;
                        text-transform: uppercase;
                        margin-bottom: 12px;
                        display: inline-block;
                    }
                    .career-card p {
                        font-size: 0.9rem;
                        color: #64748b;
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
                `}} />

                {/* Hero Badges */}
                <div className="badge-grid">
                    <div className="badge-item">✓ Beginner to Advanced</div>
                    <div className="badge-item">✓ Offline Classroom in Sharjah</div>
                    <div className="badge-item">✓ Live Online Training</div>
                    <div className="badge-item">✓ Practical Projects</div>
                    <div className="badge-item">✓ AI Marketing Tools</div>
                    <div className="badge-item">✓ Professional Certificate</div>
                </div>

                {/* Course Overview Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Course <span className="text-gradient">Overview</span></h2>
                    <div className="dm-section-desc">
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

                    <div className="inline-cta-bar">
                        <h4>Have questions about schedules or payment plans?</h4>
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

                {/* Why Learn Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Why Learn <span className="text-gradient">Digital Marketing?</span></h2>
                    <p className="dm-section-desc">
                        Digital marketing is one of the most resilient, high-paying, and rapidly growing career domains in the modern economy. Learn the skills that drive immediate revenue and business growth.
                    </p>
                    <div className="why-learn-grid">
                        <div className="why-learn-card">
                            <h4>Growing Industry Demand</h4>
                            <p>Every business in the UAE, from real estate to retail, requires an active digital footprint. Marketers are in perpetual demand to sustain online customer acquisition.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Business Transformation</h4>
                            <p>Traditional companies are pivoting to digital models. Learning these skills allows you to spearhead business transitions and unlock new revenue lines.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Online Customer Behaviour</h4>
                            <p>Understand how modern consumers discover, evaluate, and purchase products online. Shift your mindset to build highly strategic client journeys.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Lead Generation Focus</h4>
                            <p>Leads are the lifeblood of any organization. Master the methods of capturing high-quality leads at a lower cost-per-acquisition (CPA) using paid and organic channels.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Brand Value & Authority</h4>
                            <p>Learn how to establish authority, curate viral content, build active local communities, and create brand equity that generates long-term customer loyalty.</p>
                        </div>
                        <div className="why-learn-card">
                            <h4>Career & Income Growth</h4>
                            <p>Digital marketing skills provide extreme career mobility, high salary potentials in the UAE, and the leverage to establish independent consulting and freelance agency services.</p>
                        </div>
                    </div>
                </div>

                {/* Who Should Attend Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Who Should <span className="text-gradient">Attend?</span></h2>
                    <p className="dm-section-desc">
                        Our curriculum adapts to multiple backgrounds, ensuring that every learner achieves their specific career or business objectives.
                    </p>
                    <div className="who-attend-grid">
                        <div className="who-attend-card">
                            <h4>Students</h4>
                            <p>Enhance employability and gain in-demand digital skills before graduation.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Job Seekers</h4>
                            <p>Build a strong practical portfolio and resume that stands out to UAE recruiters.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Entrepreneurs</h4>
                            <p>Acquire customers, test product viability, and grow your startup online cost-effectively.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Business Owners</h4>
                            <p>Supervise internal marketing departments and evaluate agency partner performances strategically.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Freelancers</h4>
                            <p>Offer high-value marketing, SEO, and copywriting services on global freelance platforms.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Content Creators</h4>
                            <p>Understand audience development, viral hooks, SEO algorithms, and audience monetization.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Marketing Professionals</h4>
                            <p>Upskill with advanced performance marketing, data analytics, and generative AI tool integration.</p>
                        </div>
                        <div className="who-attend-card">
                            <h4>Career Changers</h4>
                            <p>Transition smoothly into the tech and creative sector with a comprehensive, beginner-friendly program.</p>
                        </div>
                    </div>
                </div>

                {/* What You Will Learn (Curriculum) */}
                <div className="content-card">
                    <h2 className="dm-section-title">Course <span className="text-gradient">Curriculum</span></h2>
                    <p className="dm-section-desc">
                        Our 9-module curriculum maps out all core domains of digital marketing. Learn the complete framework step-by-step from beginner to advanced.
                    </p>

                    <div className="syllabus-accordion-group">
                        
                        <details className="syllabus-module" open>
                            <summary className="syllabus-summary">Module 1: Digital Marketing Fundamentals</summary>
                            <div className="syllabus-content">
                                <p>Build a strong baseline understanding of digital marketing infrastructure and strategic customer journeys.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Traditional vs. Digital Marketing comparison</li>
                                    <li>The Digital Marketing Ecosystem in the UAE and GCC</li>
                                    <li>Inbound vs. Outbound Marketing strategies</li>
                                    <li>Marketing Funnel stages: TOFU, MOFU, BOFU</li>
                                    <li>Creating Buyer Personas and mapping customer journeys</li>
                                    <li>Understanding traffic, lead metrics, and conversion rates</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Develop a strategic mindset to build integrated multi-channel marketing campaigns tailored to local markets.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 2: Search Engine Optimization (SEO)</summary>
                            <div className="syllabus-content">
                                <p>Master the art of ranking on Google's organic search results and driving continuous traffic without paying for ads.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Google Search engine algorithms and indexation</li>
                                    <li>Advanced Keyword Research & search intent mapping</li>
                                    <li>On-page SEO: Title tags, headings, meta data, and URL structures</li>
                                    <li>Technical SEO: Site speeds, XML sitemaps, robots.txt, and canonicals</li>
                                    <li>Local SEO: Google Business Profile optimization for Sharjah & UAE searchers</li>
                                    <li>Off-page SEO: Ethical link-building strategies and digital PR</li>
                                    <li>SEO Auditing: Identifying crawl errors, toxic links, and thin content</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Execute end-to-end SEO strategies, resolve site health issues, and rank businesses for local search queries.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 3: Google Ads & Search Engine Marketing (SEM)</summary>
                            <div className="syllabus-content">
                                <p>Learn to launch, budget, optimize, and scale highly profitable search and display advertising campaigns.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Introduction to Google Ads dashboard and auction mechanics</li>
                                    <li>Search campaign structure: Account, Campaign, Ad Group, and Ads</li>
                                    <li>Keyword match types: Broad, Phrase, and Exact Match</li>
                                    <li>Negative keywords definition to reduce wasted ad spends</li>
                                    <li>Ad copy copywriting, extensions, and ad assets</li>
                                    <li>Bidding strategies: Manual CPC, Target CPA, Maximize Conversions</li>
                                    <li>Quality score components and landing page optimization</li>
                                    <li>Google conversion tracking setup & ROI measurement</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Build search campaigns that convert and achieve higher quality scores, reducing cost-per-click (CPC).</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 4: Social Media Marketing (Organic)</summary>
                            <div className="syllabus-content">
                                <p>Build strong brand presence, communities, and customer engagement on top social channels.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Social media algorithm updates and organic reach hacks</li>
                                    <li>Facebook Marketing: Business pages, groups, and brand building</li>
                                    <li>Instagram Marketing: Grid aesthetics, Stories, Reels, and hashtags</li>
                                    <li>LinkedIn Marketing: B2B lead generation, personal branding, thought leadership</li>
                                    <li>TikTok Marketing: Trending video structures and short-form video strategies</li>
                                    <li>Community management, feedback loops, and customer service</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Formulate and execute a cohesive social media content strategy that grows organic brand followers.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 5: Social Media Advertising (Paid)</summary>
                            <div className="syllabus-content">
                                <p>Unlock Meta Ads Manager and run paid target campaigns on Facebook and Instagram.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Meta Ads Manager architecture and campaign objectives</li>
                                    <li>Advanced Audience Targeting: Demographics, Interests, Behaviors</li>
                                    <li>Custom Audiences and Lookalike Audiences setup</li>
                                    <li>Meta Pixel installation and event setup for tracking conversions</li>
                                    <li>Ad format selection: Image, Carousel, Video, Lead Forms</li>
                                    <li>A/B testing ad creatives, headlines, and placements</li>
                                    <li>Remarketing strategies to re-engage warm site visitors</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Construct paid advertising funnels that generate high-quality leads, sales, and conversions with positive ROI.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 6: Content Marketing & Copywriting</summary>
                            <div className="syllabus-content">
                                <p>Write copy that engages readers, establishes authority, and persuades them to act.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Content strategy formulation and content calendars</li>
                                    <li>Copywriting frameworks: AIDA, PAS, BAB</li>
                                    <li>Writing attention-grabbing headlines and call-to-actions (CTAs)</li>
                                    <li>Blogging for business: SEO content formatting</li>
                                    <li>Landing page copywriting: Overcoming objections and highlighting benefits</li>
                                    <li>Visual content guidelines & Canva assets creation</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Create highly persuasive written and visual content that increases click-through rates (CTR) and online engagement.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 7: Email Marketing & Marketing Automation</summary>
                            <div className="syllabus-content">
                                <p>Build customer retention, relationships, and direct revenue using database email marketing.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Building and segmenting clean subscriber lists legally</li>
                                    <li>Email marketing tools overview (Mailchimp, Brevo, ActiveCampaign)</li>
                                    <li>Email copy design: Subject lines, preview text, and personalization</li>
                                    <li>Designing automated workflows: Welcome sequences, abandoned cart recovery</li>
                                    <li>A/B testing subject lines and layouts</li>
                                    <li>Key metrics analysis: Open rates, Click rates, Bounce rates</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Develop automated email flows that convert subscribers into repeat buyers and drive recurring revenue.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 8: AI Tools for Marketing</summary>
                            <div className="syllabus-content">
                                <p>Integrate cutting-edge AI frameworks to dramatically accelerate your research, creation, and automation tasks.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Prompt Engineering fundamentals for digital marketers</li>
                                    <li>AI Content Generation: Copywriting, social media captions, blog drafts using ChatGPT</li>
                                    <li>AI Market Research & Competitive Intelligence using Gemini and Claude</li>
                                    <li>AI-assisted design: Creating images, layouts, and logos with Midjourney and Canva AI</li>
                                    <li>AI translation & content localization for multi-lingual UAE campaigns</li>
                                    <li>Ethical boundaries and quality control in AI output</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Multiply your production output and streamline content strategies using modern Generative AI tools safely.</p>
                            </div>
                        </details>

                        <details className="syllabus-module">
                            <summary className="syllabus-summary">Module 9: Analytics & Reporting</summary>
                            <div className="syllabus-content">
                                <p>Learn the numbers behind the marketing. Measure campaign performance, ROI, and formulate reports.</p>
                                <h5>Topics Covered:</h5>
                                <ul className="styled-list">
                                    <li>Google Analytics (GA4) dashboard setup and key metrics</li>
                                    <li>Traffic acquisition sources: Organic, Paid Search, Social, Referral</li>
                                    <li>UTM parameter tracking for exact link evaluation</li>
                                    <li>Google Search Console data analysis: Clicks, Impressions, CTR</li>
                                    <li>KPI selection, reporting dashboards, and weekly status reviews</li>
                                    <li>ROI analysis and scaling strategies</li>
                                </ul>
                                <h5>Learning Outcome:</h5>
                                <p>Perform deep data analysis, generate professional agency-grade reports, and optimize campaigns using analytics.</p>
                            </div>
                        </details>

                    </div>
                </div>

                {/* Practical Training Section */}
                <div className="content-card">
                    <h2 className="dm-section-title">Practical <span className="text-gradient">Training Projects</span></h2>
                    <p className="dm-section-desc">
                        Our course is highly focused on execution. You will build a professional portfolio by completing 8 real-world project assignments.
                    </p>
                    <div className="practical-grid">
                        <div className="practical-card">
                            <h4>SEO Audit</h4>
                            <p>Conduct a live SEO audit of an existing website to diagnose speed issues, crawl blocks, missing tags, and index errors.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Keyword Research</h4>
                            <p>Identify high-volume, low-competition keywords targeting UAE customers and compile them into a content strategy matrix.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Competitor Analysis</h4>
                            <p>Audit competitors' organic rankings, backlink profiles, paid ad copies, and visual creatives to discover market gaps.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Google Ads Campaign</h4>
                            <p>Set up a complete search network campaign, including keyword grouping, ad copywriting, extension addition, and bidding configs.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Social Media Campaign</h4>
                            <p>Launch an ad campaign in Meta Ads Manager with target segmentation, Pixel connection, and A/B ad variant testing.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Content Calendar</h4>
                            <p>Design a 30-day visual and written content calendar using modern copywriting frameworks and Canva structures.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Lead Gen Strategy</h4>
                            <p>Build a lead acquisition funnel featuring a landing page mockup, a lead magnet offer, and automated email follow-up workflows.</p>
                        </div>
                        <div className="practical-card">
                            <h4>Analytics Reporting</h4>
                            <p>Extract performance metrics from GA4 and Google Search Console to formulate an optimization report for a corporate client.</p>
                        </div>
                    </div>
                </div>

                {/* Tools Covered Section */}
                <div className="tools-section">
                    <h2 className="dm-section-title" style={{ textAlign: 'center', marginBottom: '10px' }}>Digital Marketing <span className="text-gradient">Tools Covered</span></h2>
                    <p className="dm-section-desc" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px' }}>
                        Build proficiency in the industry-standard software, analytical suites, advertising consoles, and AI tools used by top agencies globally.
                    </p>
                    <div className="tools-grid">
                        <div className="tool-card">
                            <h4>SEO Tools</h4>
                            <ul>
                                <li>Google Search Console</li>
                                <li>Google Keyword Planner</li>
                                <li>Google Trends</li>
                                <li>Moz & Ahrefs basics</li>
                            </ul>
                        </div>
                        <div className="tool-card">
                            <h4>Advertising</h4>
                            <ul>
                                <li>Google Ads Console</li>
                                <li>Meta Ads Manager</li>
                                <li>LinkedIn Campaign Manager</li>
                            </ul>
                        </div>
                        <div className="tool-card">
                            <h4>Analytics</h4>
                            <ul>
                                <li>Google Analytics (GA4)</li>
                                <li>Google Tag Manager</li>
                                <li>Looker Studio basics</li>
                            </ul>
                        </div>
                        <div className="tool-card">
                            <h4>Design & Content</h4>
                            <ul>
                                <li>Canva Pro</li>
                                <li>CapCut Video Editor</li>
                                <li>WordPress Elementor</li>
                            </ul>
                        </div>
                        <div className="tool-card">
                            <h4>AI Productivity</h4>
                            <ul>
                                <li>ChatGPT Plus</li>
                                <li>Google Gemini</li>
                                <li>Anthropic Claude</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* AI Marketing Section */}
                <div className="ai-highlight-box">
                    <h2>Master <span className="text-gradient">AI-Powered</span> Digital Marketing</h2>
                    <p style={{ color: '#d1d5db', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '800px', marginBottom: '30px' }}>
                        Artificial Intelligence is rewriting the rules of marketing. At NITAQ Academy, we don't just teach traditional SEO and Ads; we teach you how to become an AI-augmented marketer capable of automating workflows, generating content, and scaling campaigns at unprecedented speeds.
                    </p>
                    <div className="ai-grid">
                        <div className="ai-card">
                            <h4>AI Content Creation</h4>
                            <p>Generate highly engaging, SEO-optimized blog articles, social media hooks, and high-converting ad copies in seconds using advanced prompt engineering.</p>
                        </div>
                        <div className="ai-card">
                            <h4>AI Competitive Intelligence</h4>
                            <p>Leverage LLMs to summarize competitor pages, extract product benefits, identify customer pain points, and predict campaign performance metrics.</p>
                        </div>
                        <div className="ai-card">
                            <h4>AI Marketing Automation</h4>
                            <p>Build intelligent email response sequences, automate social publishing calendars, and run smart lead classification flows with minimum manual effort.</p>
                        </div>
                        <div className="ai-card">
                            <h4>AI-Driven Design</h4>
                            <p>Design premium advertising graphics, banners, logos, and video scripts using Canva AI and generative artwork generators.</p>
                        </div>
                    </div>
                </div>

                {/* Career Opportunities */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Career <span className="text-gradient">Opportunities</span></h2>
                    <p className="dm-section-desc">
                        Digital marketing skills open career opportunities across multiple industries in the UAE. From corporate agencies to corporate departments and tech startups, the demand is continuous.
                    </p>
                    <div className="careers-grid">
                        <div className="career-card">
                            <span className="salary">High Demand in UAE</span>
                            <h4>Digital Marketing Executive</h4>
                            <p>Supervise overall digital campaigns, organize social media channels, monitor website traffic, and formulate monthly performance reports.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">SEO Focused</span>
                            <h4>SEO Specialist</h4>
                            <p>Optimize website architectures, perform keyword research, build quality backlink profiles, and improve organic search visibility on Google.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Paid Ad Mastery</span>
                            <h4>Google Ads Specialist</h4>
                            <p>Plan, set up, and manage search ads campaigns. Analyze bidding metrics, cost-per-click, and optimize ROI for paid campaigns.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Meta Ads Focused</span>
                            <h4>PPC Executive</h4>
                            <p>Manage paid advertising budgets across Meta Ads, LinkedIn Ads, and YouTube. Setup conversion events and audit CPA metrics.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Social Brand Focus</span>
                            <h4>Social Media Manager</h4>
                            <p>Curate content schedules, write captions, coordinate design assets, build online communities, and monitor brand mentions.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Content Strategy</span>
                            <h4>Content Strategist</h4>
                            <p>Formulate blogging, video, and email strategies. Ensure tone consistency and manage content creation pipelines.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Lead Acquisiton</span>
                            <h4>Lead Generation Specialist</h4>
                            <p>Build marketing funnels, compile email lead databases, manage webinar promotions, and optimize landing page conversions.</p>
                        </div>
                        <div className="career-card">
                            <span className="salary">Data Analytics</span>
                            <h4>Marketing Analyst</h4>
                            <p>Perform deep database queries on GA4, construct custom tracking links, build Looker Studio reports, and optimize budget splits.</p>
                        </div>
                    </div>
                </div>

                {/* Certification Section */}
                <div className="cert-box">
                    <div className="cert-box-content">
                        <h2 className="dm-section-title" style={{ marginBottom: '15px' }}>Earn a Professional <span className="text-gradient">Marketing Certificate</span></h2>
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
                        <img src="/images/whatsapp-img-3.png" alt="NITAQ Academy Professional Certificate Authority" />
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="content-card" style={{ marginTop: '50px' }}>
                    <h2 className="dm-section-title">Frequently Asked <span className="text-gradient">Questions (FAQs)</span></h2>
                    <p className="dm-section-desc">
                        Find answers to common questions regarding course registration, syllabus details, schedules, and career support.
                    </p>
                    <div className="faq-accordion-group" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        
                        <details className="faq-accordion">
                            <summary>Is this course suitable for beginners?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes. The program is designed to support learners from the absolute beginner level and gradually progress toward advanced execution concepts. No prior marketing background is required.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Do I need any coding or programming skills to learn Digital Marketing?</summary>
                            <div className="faq-accordion-content">
                                <p>No. Digital marketing does not require any coding or programming experience. You will be using user-friendly tools and consoles like Google Ads, Meta Ads Manager, Google Analytics, and Canva.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>What is the duration of the Digital Marketing course at NITAQ Academy?</summary>
                            <div className="faq-accordion-content">
                                <p>The course duration is flexible. Typically, it takes 4 to 8 weeks depending on the batch schedule (intensive, weekend, or evening sessions).</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Is the course available online or offline in Sharjah?</summary>
                            <div className="faq-accordion-content">
                                <p>Both options are available. You can join our offline classroom sessions at our premium campus in Sharjah (Abu Khamseen Tower, Majaz 3) or attend live online interactive sessions from anywhere in the UAE.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Will I receive a certificate after completing the course?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes. You will receive a Professional Digital Marketing Course Completion Certificate from NITAQ Academy, which is highly valued and can be added to your resume and LinkedIn profile.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Are SEO and Google Ads covered in detail in this course?</summary>
                            <div className="faq-accordion-content">
                                <p>Absolutely. Dedicated modules are included for Search Engine Optimization (SEO) and Google Ads / Search Engine Marketing (SEM), covering keyword research, campaign setup, bidding, and optimization.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Is AI in marketing included in the curriculum?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes, Module 8 is entirely dedicated to AI for Digital Marketing. You will learn to use ChatGPT, Gemini, Claude, and Canva AI for content creation, research, and marketing automation.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>How does this course benefit business owners and entrepreneurs?</summary>
                            <div className="faq-accordion-content">
                                <p>Business owners will learn how to generate high-quality leads, improve online visibility on Google, run cost-effective paid campaigns, and build a strong brand presence in the UAE market.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Are there career placement or job assistance services?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes, NITAQ Academy provides career development support, including resume enhancement tips, LinkedIn profile optimization guidance, and interview preparation for marketing roles.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>What tools will I learn to use during the course?</summary>
                            <div className="faq-accordion-content">
                                <p>You will gain hands-on experience with industry-standard tools like Google Search Console, Google Keyword Planner, Google Trends, Google Ads, Meta Ads Manager, Google Analytics, and AI writing assistants.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Are there hands-on practical projects?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes, the curriculum includes hands-on activities such as building an SEO Audit, Keyword Research Project, Competitor Analysis, Google Ads Campaign, Social Media Campaign, Content Calendar, and Lead Generation Strategy.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Why should I choose NITAQ Academy for Digital Marketing in Sharjah?</summary>
                            <div className="faq-accordion-content">
                                <p>NITAQ Academy is a leading SPEA-authorized training institute in Sharjah offering expert-led training, small batch sizes, practical hands-on projects, flexible schedules, and a strong UAE market focus.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>What are the career opportunities in the UAE after this course?</summary>
                            <div className="faq-accordion-content">
                                <p>You can apply for roles like Digital Marketing Executive, SEO Specialist, Google Ads Specialist, Social Media Manager, PPC Specialist, Content Strategist, or Lead Generation Specialist in the UAE.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>Can I offer freelance digital marketing services after completing this course?</summary>
                            <div className="faq-accordion-content">
                                <p>Yes, the course covers the skills needed to offer freelance services, build client proposals, run marketing audits, and manage campaigns for local and international clients.</p>
                            </div>
                        </details>

                        <details className="faq-accordion">
                            <summary>How do I register for the course and what is the fee structure?</summary>
                            <div className="faq-accordion-content">
                                <p>You can register by clicking 'Enroll Today' or contacting our advisors on WhatsApp at +971 52 756 9908. Fees depend on the training mode and options. Contact us for current pricing and discounts.</p>
                            </div>
                        </details>

                    </div>
                </div>

                {/* Sticky WhatsApp Floating Button for Conversions */}
                <a 
                    href="https://wa.me/971527569908" 
                    className="sticky-whatsapp-btn"
                    target="_blank"
                    rel="noopener noreferrer"
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
