import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../../utils/analytics';
import './ResumeGuide.css';

const ResumeGuide = () => {
    useEffect(() => {
        // Function to hide Zoho chatbot
        const hideZoho = () => {
            const zohoIds = ['zsiq_float', 'zsiq_chatctl', 'zsiqscript'];
            zohoIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.setProperty('display', 'none', 'important');
            });
            // Also look for class-based controls
            const widgets = document.querySelectorAll('.zsiq_float, .zsiq_theme1');
            widgets.forEach(el => el.style.setProperty('display', 'none', 'important'));
        };

        hideZoho();
        // Zoho might load late, so check again
        const interval = setInterval(hideZoho, 1000);
        
        return () => {
            clearInterval(interval);
            // Show it back when leaving
            const zohoIds = ['zsiq_float', 'zsiq_chatctl'];
            zohoIds.forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.setProperty('display', 'block');
            });
        };
    }, []);
    const prompts = [
        {
            id: 1,
            title: "The Resume Roast",
            subtitle: "(Before you apply anywhere)",
            content: "Here is my resume [paste resume]. Brutally analyze it from the perspective of a hiring manager at a top Indian company. Tell me what's weak, what's vague, what will get me rejected in 10 seconds, and what's completely missing. Don't sugarcoat anything.",
            why: "Most freshers think their resume is fine. It's not. This prompt gives you the reality check that no friend or college placement cell will ever give you. Start here before touching anything else."
        },
        {
            id: 2,
            title: "The JD Decoder",
            subtitle: "(When you find a role you want)",
            content: "Here is a job description [paste JD] and here is my resume [paste resume]. Extract the top 10 skills and keywords this employer actually cares about. Now map each one against my resume and tell me where I match, where I'm weak, and what exact phrases I should add to pass both ATS screening and a human recruiter's 6-second scan.",
            why: "Every job description has hidden priorities. This prompt cracks the code and tells you exactly what to mirror in your resume. No more guessing."
        },
        {
            id: 3,
            title: "The Bullet Rewriter",
            subtitle: "(The game-changer)",
            content: "Rewrite these experience and project bullet points from my resume [paste bullets] using the X-Y-Z formula: Accomplished X, by doing Y, which resulted in Z. Make them specific, quantified, and tailored to this role [paste JD]. If I haven't mentioned numbers, suggest realistic metrics I could include based on the type of work.",
            why: "This single prompt turns \"worked on a project using Python\" into \"Built an automated data pipeline using Python and Pandas that reduced manual reporting time by 3 hours weekly for a team of 5.\" That's the difference between getting ignored and getting called."
        },
        {
            id: 4,
            title: "The Skills Gap Fixer",
            subtitle: "(When you're underqualified)",
            content: "Here's the job description [paste JD] and my resume [paste resume]. I know I don't meet every requirement. Identify the exact gaps, then suggest 2-3 micro-projects or certifications I can realistically complete in 2 weeks that would fill each gap. Also rewrite my resume summary to honestly position me as a fast learner who's actively bridging these gaps.",
            why: "70% of freshers skip jobs thinking \"I'm not qualified.\" This prompt shows you the shortest path to becoming qualified AND helps you frame your resume so recruiters see potential, not gaps."
        },
        {
            id: 5,
            title: "The Role-Specific Resume Generator",
            subtitle: "(Final weapon)",
            content: "Here is the job description [paste JD], my resume [paste resume], and my current skill set [list skills]. I have 2 weeks before the interview. Give me a complete action plan:\n1. List 3 portfolio projects I can build from scratch that directly demonstrate the skills this role demands. Each project should be completable in 2-3 days, impressive enough to discuss in an interview, and hosted on GitHub with a proper README.\n2. Suggest the top 2 free/affordable certifications (Google, IBM, Coursera, or any credible Indian platform) that would instantly strengthen my profile for this exact role. Tell me which ones can be completed fastest and which carry the most weight with Indian recruiters.\n3. For each project and certification, give me the exact line I should add to my resume and the talking point I should prepare for the interview to explain why I did it.",
            why: "This is the prompt that separates you from 99% of freshers. While everyone else is applying with the same empty resume, you walk into the interview with projects built specifically for that role and certifications that prove you're serious. Hiring managers in India don't just want potential. They want proof. This prompt manufactures that proof in days, not months."
        }
    ];

    return (
        <main className="ig-landing-page">
            <SEO />

            {/* Sticky Nitaq Stripe */}
            <div className="nitaq-stripe">
                <div className="container stripe-content">
                    <span>🚀 Master Professional Skills with Nitaq Academy</span>
                    <a href="tel:+97165798313" className="stripe-link">
                        Enroll Now <span className="arrow">→</span>
                    </a>
                </div>
            </div>

            <section className="ig-hero">
                <div className="container">
                    <h1 className="hero-title">
                        LAND YOUR NEXT <span className="text-gradient">JOB</span> WITH A <span className="text-gradient">BETTER RESUME</span> 💼
                    </h1>
                    <p className="hero-subtitle">
                        Copy these 5 expert AI prompts to transform your resume from "Just another applicant" to "The top candidate".
                    </p>
                </div>
            </section>

            <section className="prompts-section">
                <div className="container">
                    <div className="prompts-grid">
                        {prompts.map((prompt) => (
                            <div key={prompt.id} className="prompt-card">
                                <div className="prompt-number">0{prompt.id}</div>
                                <h3>{prompt.title} <span className="title-subtitle">{prompt.subtitle}</span></h3>
                                <div className="prompt-box">
                                    <p>{prompt.content}</p>
                                    <button 
                                        className="copy-btn"
                                        onClick={() => {
                                            navigator.clipboard.writeText(prompt.content);
                                            trackEvent(ANALYTICS_EVENTS.CLICK, `copy_prompt_${prompt.id}`);
                                            alert('Prompt copied!');
                                        }}
                                    >
                                        Copy Prompt
                                    </button>
                                </div>
                                {prompt.why && (
                                    <div className="why-box">
                                        <strong>Why this works:</strong> {prompt.why}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="container">
                    <div className="cta-card">
                        <h2>Ready to <span className="text-gradient">Upgrade</span> Your Career?</h2>
                        <p>Our professional certification courses are designed to help you master the skills that employers are looking for TODAY.</p>
                        <div className="cta-buttons">
                            <Link to="/#ourprogram" className="btn btn-primary">
                                View Professional Courses
                            </Link>
                            <a 
                                href="https://wa.me/971545723181" 
                                className="btn btn-whatsapp"
                                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'ig_resume_landing')}
                            >
                                Chat with an Expert
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="ig-footer">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Nitaq Academy. All rights reserved.</p>
                </div>
            </footer>
        </main>
    );
};

export default ResumeGuide;
