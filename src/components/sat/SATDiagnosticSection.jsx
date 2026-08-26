import React from 'react';
import { Link } from '../../i18n/Link';
import './SATDiagnosticSection.css';

/**
 * Backward compatible preview dataset
 */
const DIAGNOSTIC_PREVIEW_DATA = {
  overallScore: 16,
  totalQuestions: 24,
  accuracyPercent: 67,
  sections: [
    { id: 'math', name: 'Mathematics', score: 9, total: 12, percent: 75, status: 'Strong foundation', tone: 'strong', type: 'math' },
    { id: 'rw', name: 'Reading & Writing', score: 7, total: 12, percent: 58, status: 'Needs improvement', tone: 'review', type: 'rw' }
  ],
  skills: [
    { name: 'Algebra', score: 3, total: 3, status: 'Strong', tone: 'strong' },
    { name: 'Advanced Math', score: 1, total: 3, status: 'Review', tone: 'review' },
    { name: 'Craft & Structure', score: 3, total: 3, status: 'Strong', tone: 'strong' },
    { name: 'Standard English Conventions', score: 1, total: 3, status: 'Review', tone: 'review' }
  ],
  priority: {
    focusArea: 'Advanced Math + Grammar',
    description: 'Your diagnostic highlights the key domain areas where targeted practice yields maximum point gain.'
  }
};

/**
 * 8 Official SAT Domains Data
 */
const SAT_DOMAINS_DETAILED = [
  {
    id: 'rw_info',
    name: 'Information & Ideas',
    section: 'Reading & Writing',
    desc: 'Central ideas, textual evidence, quantitative evidence, and inferences.',
    color: '#3B82F6',
    bg: '#EFF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
        <path d="M9 18h6" />
        <path d="M10 22h4" />
      </svg>
    )
  },
  {
    id: 'rw_craft',
    name: 'Craft & Structure',
    section: 'Reading & Writing',
    desc: 'Words in context, text structure, purpose, and cross-text connections.',
    color: '#6C4CF1',
    bg: '#F3E8FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  },
  {
    id: 'rw_expr',
    name: 'Expression of Ideas',
    section: 'Reading & Writing',
    desc: 'Rhetorical synthesis and effective paragraph transitions.',
    color: '#20C7D9',
    bg: '#ECFEFF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    )
  },
  {
    id: 'rw_eng',
    name: 'Standard English Conventions',
    section: 'Reading & Writing',
    desc: 'Sentence structure, boundaries, grammar, punctuation, and usage.',
    color: '#FF9F43',
    bg: '#FFF7ED',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    )
  },
  {
    id: 'math_alg',
    name: 'Algebra',
    section: 'Mathematics',
    desc: 'Linear equations in 1 & 2 variables, systems of linear equations, and inequalities.',
    color: '#2E7D32',
    bg: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19L19 4" />
        <path d="M19 19L4 4" />
      </svg>
    )
  },
  {
    id: 'math_adv',
    name: 'Advanced Math',
    section: 'Mathematics',
    desc: 'Nonlinear equations, quadratic functions, exponential graphs, and polynomials.',
    color: '#3B82F6',
    bg: '#EFF6FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 12h10" />
        <path d="M12 7v10" />
      </svg>
    )
  },
  {
    id: 'math_ps',
    name: 'Problem-Solving & Data Analysis',
    section: 'Mathematics',
    desc: 'Ratios, rates, percentages, unit conversions, and statistical models.',
    color: '#6C4CF1',
    bg: '#F3E8FF',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
        <path d="M22 12A10 10 0 0 0 12 2v10z" />
      </svg>
    )
  },
  {
    id: 'math_geo',
    name: 'Geometry & Trigonometry',
    section: 'Mathematics',
    desc: 'Area & volume formulas, angles, right triangles, sine/cosine, and circle equations.',
    color: '#10B981',
    bg: '#ECFDF5',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22 12 2" />
      </svg>
    )
  }
];

/**
 * 3D Smartphone Product Mockup Component with Vector Accents
 */
const PhoneMockupPortal = () => {
  return (
    <div className="sat-hero-right">
      {/* Background Soft Glow */}
      <div className="sat-phone-bg-glow" aria-hidden="true" />

      {/* Abstract Background SVG Wave Paths */}
      <svg className="sat-hero-svg-waves" viewBox="0 0 500 500" fill="none" aria-hidden="true">
        <path d="M 50 150 Q 200 80 350 220 T 480 350" stroke="#6C4CF1" strokeWidth="2.5" strokeDasharray="6 6" />
        <path d="M 20 280 Q 180 180 380 320 T 490 400" stroke="#20C7D9" strokeWidth="2" />
      </svg>

      {/* Smartphone Frame Container */}
      <div className="sat-phone-container">
        <div className="sat-phone-frame">
          <div className="sat-phone-screen">
            {/* Dynamic Island Notch */}
            <div className="sat-phone-notch">
              <div className="sat-phone-notch-camera" />
            </div>

            {/* Portal Navigation Header */}
            <div className="sat-portal-header">
              <div className="sat-portal-logo">
                <span className="sat-portal-logo-icon">N</span>
                <span>NITAQ ACADEMY</span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </div>

            {/* Greeting */}
            <div className="sat-portal-user-row">
              <h4 className="sat-portal-greeting">Hi, Ayaan! 👋</h4>
              <p className="sat-portal-subtext">Ready to assess your SAT skills?</p>
            </div>

            {/* Diagnostic Card */}
            <div className="sat-portal-card">
              <div className="sat-portal-card-top">
                <div className="sat-portal-card-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <div className="sat-portal-card-title">Digital SAT Diagnostic</div>
                  <div className="sat-portal-card-meta">24 Questions • 15–20 Minutes</div>
                </div>
              </div>
              <button className="sat-portal-card-btn">Start Assessment →</button>
            </div>

            {/* Domains Covered 2x4 Grid inside Phone */}
            <div className="sat-portal-domains-section">
              <div className="sat-portal-domains-title">Domains Covered</div>
              <div className="sat-portal-domains-grid">
                {SAT_DOMAINS_DETAILED.map((domain) => (
                  <div key={domain.id} className="sat-portal-domain-chip">
                    <div className="sat-portal-domain-icon" style={{ background: domain.bg, color: domain.color }}>
                      {domain.icon}
                    </div>
                    <div className="sat-portal-domain-text">
                      <span className="sat-portal-domain-name">{domain.name}</span>
                      <span className="sat-portal-domain-sub">{domain.section}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Purple Roadmap Banner inside Phone */}
            <div className="sat-portal-bottom-banner">
              <div className="sat-portal-banner-text">
                <span className="sat-portal-banner-title">Get Score &amp; Roadmap</span>
                <span className="sat-portal-banner-desc">Instant 8-domain performance breakdown.</span>
              </div>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Circular 100% Free Badge */}
        <div className="sat-phone-free-badge">
          <span className="sat-phone-free-title">100%<br />FREE</span>
          <span className="sat-phone-free-sub">No Sign-up<br />Required</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Section 2: "Know Exactly Where You Stand" (3 Step Cards)
 */
const KnowWhereYouStand = () => {
  const steps = [
    {
      num: '01',
      title: 'Measure',
      text: 'Understand your exact current SAT readiness with a realistic 24-question test.'
    },
    {
      num: '02',
      title: 'Identify',
      text: 'Discover your strongest domains and pinpoint exactly where you are losing points.'
    },
    {
      num: '03',
      title: 'Improve',
      text: 'Get an immediate score band and a step-by-step personalized prep roadmap.'
    }
  ];

  return (
    <section className="sat-steps-section" aria-labelledby="sat-steps-heading">
      <div className="sat-hero-container">
        <div className="sat-section-header-center">
          <span className="sat-section-eyebrow">Clear Diagnostics</span>
          <h2 className="sat-section-title" id="sat-steps-heading">Know Exactly Where You Stand</h2>
          <p className="sat-section-desc">
            Stop guessing your score. Evaluate foundational skills in under 20 minutes before spending months studying.
          </p>
        </div>

        <div className="sat-steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="sat-step-card">
              <span className="sat-step-number">{step.num}</span>
              <h3 className="sat-step-title">{step.title}</h3>
              <p className="sat-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Section 3: 8 SAT Domains Grid
 */
const SATDomainsGrid = () => {
  return (
    <section className="sat-domains-section" aria-labelledby="sat-domains-heading">
      <div className="sat-hero-container">
        <div className="sat-section-header-center">
          <span className="sat-section-eyebrow">8-Domain Blueprint</span>
          <h2 className="sat-section-title" id="sat-domains-heading">
            Understand Your SAT Performance Across All 8 Domains
          </h2>
          <p className="sat-section-desc">
            Calibrated to evaluate key College Board Digital SAT specifications across Reading, Writing, and Math.
          </p>
        </div>

        <div className="sat-domains-grid">
          {SAT_DOMAINS_DETAILED.map((domain) => (
            <div key={domain.id} className="sat-domain-card">
              <div className="sat-domain-icon-wrap" style={{ background: domain.bg, color: domain.color }}>
                {domain.icon}
              </div>
              <h3 className="sat-domain-title">{domain.name}</h3>
              <p className="sat-domain-desc">{domain.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Section 4: Scorecard & Personalized Roadmap Preview
 */
const RoadmapScorecardPreview = () => {
  return (
    <section className="sat-roadmap-section" aria-labelledby="sat-roadmap-heading">
      <div className="sat-hero-container">
        <div className="sat-section-header-center">
          <span className="sat-section-eyebrow">Actionable Insights</span>
          <h2 className="sat-section-title" id="sat-roadmap-heading">
            Instant Scorecard &amp; Customized Study Roadmap
          </h2>
          <p className="sat-section-desc">
            As soon as you complete the assessment, our scoring engine generates your comprehensive diagnostic deliverable.
          </p>
        </div>

        <div className="sat-roadmap-grid">
          {/* Mock Scorecard Card */}
          <div className="sat-scorecard-card">
            <div className="sat-scorecard-header">
              <h3 className="sat-scorecard-title">Diagnostic Results Preview</h3>
              <span className="sat-scorecard-tag">16 / 24 Score</span>
            </div>

            <div className="sat-score-bar-group">
              <div className="sat-score-bar-label">
                <span>Overall Readiness</span>
                <span>67% Correct</span>
              </div>
              <div className="sat-score-bar-track">
                <div className="sat-score-bar-fill overall" style={{ width: '67%' }} />
              </div>
            </div>

            <div className="sat-score-bar-group">
              <div className="sat-score-bar-label">
                <span>Reading &amp; Writing</span>
                <span>7 / 12 Qs</span>
              </div>
              <div className="sat-score-bar-track">
                <div className="sat-score-bar-fill rw" style={{ width: '58%' }} />
              </div>
            </div>

            <div className="sat-score-bar-group">
              <div className="sat-score-bar-label">
                <span>Mathematics</span>
                <span>9 / 12 Qs</span>
              </div>
              <div className="sat-score-bar-track">
                <div className="sat-score-bar-fill math" style={{ width: '75%' }} />
              </div>
            </div>

            <div style={{ marginTop: '10px', background: '#F8FAFC', padding: '16px', borderRadius: '12px', border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1E293B', marginBottom: '4px' }}>
                Recommended Focus Areas:
              </div>
              <div style={{ fontSize: '0.825rem', color: '#475569', lineHeight: 1.5 }}>
                1. Advanced Math (Quadratic &amp; Exponential Functions)<br />
                2. Standard English Conventions (Grammar &amp; Punctuation)
              </div>
            </div>
          </div>

          {/* 4-Week Roadmap Timeline Card */}
          <div className="sat-roadmap-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#101828', margin: 0 }}>
              Your 4-Week Prep Roadmap
            </h3>

            <div className="sat-timeline-list">
              <div className="sat-timeline-item">
                <span className="sat-timeline-week">Week 1</span>
                <h4 className="sat-timeline-title">Strengthen Core Foundations</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0 }}>Review fundamental concepts in Algebra &amp; Grammar.</p>
              </div>

              <div className="sat-timeline-item">
                <span className="sat-timeline-week">Week 2</span>
                <h4 className="sat-timeline-title">Target Weak Domains</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0 }}>Focused drills on Advanced Math &amp; Craft &amp; Structure.</p>
              </div>

              <div className="sat-timeline-item">
                <span className="sat-timeline-week">Week 3</span>
                <h4 className="sat-timeline-title">Timed Practice Drills</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0 }}>Master Digital SAT pacing strategies and shortcut techniques.</p>
              </div>

              <div className="sat-timeline-item">
                <span className="sat-timeline-week">Week 4</span>
                <h4 className="sat-timeline-title">Full Mock Exam &amp; Review</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748B', margin: 0 }}>Take a full-length digital mock test under exam conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Section 6: Final Conversion CTA Section
 */
const FinalDiagnosticCTA = ({ onStartClick }) => {
  return (
    <section className="sat-final-cta-section">
      <div className="sat-hero-container">
        <div className="sat-final-cta-card">
          <div className="sat-final-cta-glow" aria-hidden="true" />
          <div className="sat-final-cta-content">
            <h2 className="sat-final-cta-heading">
              Know Your SAT Level Before You Start Studying
            </h2>
            <p className="sat-final-cta-desc">
              Take the free 24-question diagnostic and discover exactly what areas to focus on for maximum score gains.
            </p>

            <Link
              to="/sat/diagnostic"
              onClick={onStartClick}
              className="sat-hero-primary-btn"
              style={{ background: 'linear-gradient(90deg, #10B981 0%, #059669 100%)', boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)' }}
            >
              <span>Start My Free Diagnostic</span>
              <span className="sat-hero-primary-btn-arrow" aria-hidden="true">→</span>
            </Link>

            <div className="sat-final-cta-meta">
              <span>✓ 100% Free</span>
              <span>•</span>
              <span>24 Questions</span>
              <span>•</span>
              <span>15–20 Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Floating WhatsApp Support Button Component
 */
const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/971527569908?text=Hello%20Nitaq,%20I'd%20like%20guidance%20regarding%20the%20Free%20SAT%20Diagnostic."
      target="_blank"
      rel="noopener noreferrer"
      className="sat-whatsapp-floating-btn"
      aria-label="Ask a SAT Mentor on WhatsApp"
      title="Ask a SAT Mentor on WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.093 1.502 5.817L.048 23.952l6.305-1.407A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.937 0-3.742-.529-5.296-1.448l-.38-.225-3.94.879.946-3.774-.247-.393A9.776 9.776 0 012.182 12 9.818 9.818 0 0112 2.182 9.818 9.818 0 0121.818 12 9.818 9.818 0 0112 21.818z"/>
      </svg>
    </a>
  );
};

/**
 * Main SATDiagnosticSection Component (Hero + Primary Section)
 */
const SATDiagnosticSection = ({ className = '', showBreadcrumb = false, onStartClick }) => {
  return (
    <section className={`sat-landing-hero-section ${className}`} id="sat-diagnostic-section" aria-labelledby="sat-hero-heading">
      <div className="sat-hero-container">
        <div className="sat-hero-grid">
          {/* Left Column Content */}
          <div className="sat-hero-left">
            {showBreadcrumb && (
              <nav className="sat-hero-breadcrumb" aria-label="Breadcrumb">
                <Link to="/" className="sat-hero-breadcrumb-link">Home</Link>
                <span className="sat-hero-breadcrumb-sep">/</span>
                <Link to="/sat-preparation-sharjah" className="sat-hero-breadcrumb-link">SAT Preparation</Link>
                <span className="sat-hero-breadcrumb-sep">/</span>
                <span className="sat-hero-breadcrumb-current">Free Diagnostic</span>
              </nav>
            )}

            <h1 className="sat-hero-heading" id="sat-hero-heading">
              Free SAT
              <span className="sat-hero-heading-gradient">Diagnostic Assessment</span>
            </h1>

            <p className="sat-hero-subtitle">
              Accurately evaluate your readiness across all 8 Digital SAT domains in just 15–20 minutes. Get an immediate performance score card and a personalized prep roadmap before you start studying.
            </p>

            {/* 4 Feature Statistics Cards */}
            <div className="sat-hero-features-grid">
              <div className="sat-hero-feature-card">
                <div className="sat-hero-feature-icon-wrap purple">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="sat-hero-feature-label">15–20<br />Minutes</span>
              </div>

              <div className="sat-hero-feature-card">
                <div className="sat-hero-feature-icon-wrap blue">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                  </svg>
                </div>
                <span className="sat-hero-feature-label">8–Domain<br />Analysis</span>
              </div>

              <div className="sat-hero-feature-card">
                <div className="sat-hero-feature-icon-wrap green">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <span className="sat-hero-feature-label">Personalized<br />Study Plan</span>
              </div>

              <div className="sat-hero-feature-card">
                <div className="sat-hero-feature-icon-wrap orange">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 8 8 12 12 16" />
                    <line x1="16" y1="12" x2="8" y2="12" />
                  </svg>
                </div>
                <span className="sat-hero-feature-label">100%<br />Free</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="sat-hero-cta-group">
              <Link
                to="/sat/diagnostic"
                onClick={onStartClick}
                className="sat-hero-primary-btn"
                id="sat-diagnostic-start-btn"
              >
                <span>Start Diagnostic Now</span>
                <span className="sat-hero-primary-btn-arrow" aria-hidden="true">→</span>
              </Link>

              <a
                href="https://wa.me/971527569908?text=Hello%20Nitaq,%20I'd%20like%20to%20know%20more%20about%20the%20Free%20SAT%20Diagnostic."
                target="_blank"
                rel="noopener noreferrer"
                className="sat-hero-secondary-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span>Ask a SAT Mentor</span>
              </a>
            </div>

            {/* Trust Section */}
            <div className="sat-hero-social-proof">
              <div className="sat-hero-trust-badge">
                <div className="sat-hero-shield-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className="sat-hero-trust-text">
                  <span className="sat-hero-trust-title">Trusted by Students</span>
                  <span className="sat-hero-trust-sub">Join students preparing smarter with Nitaq Academy.</span>
                </div>
              </div>

              <div className="sat-hero-avatars-group">
                <div className="sat-hero-avatars-stack">
                  <img src="/images/h1.png" alt="Student" className="sat-hero-avatar-img" />
                  <img src="/images/h2.png" alt="Student" className="sat-hero-avatar-img" />
                  <img src="/images/h3.png" alt="Student" className="sat-hero-avatar-img" />
                  <img src="/images/h4.png" alt="Student" className="sat-hero-avatar-img" />
                </div>
                <div className="sat-hero-rating-info">
                  <div className="sat-hero-stars">★★★★★</div>
                  <span className="sat-hero-rating-score">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Visual */}
          <PhoneMockupPortal />
        </div>
      </div>
    </section>
  );
};

/* Sub-components for legacy exports */
const DiagnosticIntro = () => <SATDiagnosticSection />;
const DiagnosticPreview = () => <RoadmapScorecardPreview />;

export default SATDiagnosticSection;
export {
  DiagnosticIntro,
  DiagnosticPreview,
  PhoneMockupPortal,
  KnowWhereYouStand,
  SATDomainsGrid,
  RoadmapScorecardPreview,
  FinalDiagnosticCTA,
  WhatsAppFloatingButton,
  DIAGNOSTIC_PREVIEW_DATA
};
