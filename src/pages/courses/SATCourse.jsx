import React from 'react';
import { Link } from '../../i18n/Link';
import WhyNitaq from '../../components/WhyNitaq';
import SEO from '../../components/SEO';
import SATDiagnosticSection from '../../components/sat/SATDiagnosticSection';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import './sat-course.css';

const SATCourse = ({ locationName = 'Sharjah', locationSlug = 'sharjah' }) => {
  return (
    <>
      <SEO
        title={`SAT Preparation in ${locationName} — Digital SAT Coaching at NITAQ ACADEMY`}
        description={`Score 1300+ on the Digital SAT with NITAQ ACADEMY's expert coaching in ${locationName}. Small batches, expert faculty, and full-length mock tests.`}
      />

      <main className="sat-landing-page">
        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="sat-hero-section">
          {/* Smooth Sweeping Green Arch Background on Right */}
          <div className="sat-hero-arch-bg" />

          <div className="sat-hero-container">
            <div className="sat-hero-content">
              <div className="sat-hero-eyebrow">
                SAT PREPARATION · {locationName.toUpperCase()}
              </div>

              <h1 className="sat-hero-heading">
                Prepare with Purpose.
                <div>Achieve Your <span className="accent-sat">SAT</span> Goals.</div>
              </h1>

              {/* Hidden SEO Keyword Heading for Search Engine Crawlers */}
              <div style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Digital SAT Preparation in {locationName} — SPEA Authorized Coaching Center at Nitaq Academy
              </div>

              <p className="sat-hero-description">
                Expert Digital SAT coaching in {locationName}, designed to strengthen your skills, build confidence, and help you reach your target score.
              </p>

              <div className="sat-hero-cta-group">
                <a
                  href="https://wa.me/971527569908?text=I%20am%20interested%20in%20SAT%20preparation%20course"
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_hero_enroll')}
                >
                  Enroll Today →
                </a>
                <a
                  href="tel:+97165798313"
                  className="sat-btn-secondary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_hero_advisor')}
                >
                  Speak to an Advisor
                </a>
              </div>

              <div className="sat-hero-trust-line">
                <span className="sat-trust-check-icon">✓</span>
                Flexible learning · Online &amp; Offline · {locationName}
              </div>
            </div>

            <div className="sat-hero-image-col">
              <div className="sat-hero-image-wrapper">
                <img
                  src="/images/sat_hero_student_hoodie.png"
                  alt={`Student studying for SAT exam at Nitaq Academy ${locationName}`}
                  width="540"
                  height="500"
                  fetchPriority="high"
                />

                {/* Floating Rounded Badge Over Image */}
                <div className="sat-hero-floating-badge">
                  <div className="sat-floating-icon-box">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <div>
                    <div className="sat-floating-title">Focused Preparation</div>
                    <div className="sat-floating-subtitle">Structured. Effective. Results-driven.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. COURSE SNAPSHOT STRIP ──────────────────────────────── */}
        <section className="sat-snapshot-strip">
          <div className="sat-snapshot-container">
            {/* 1. Programs */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <div className="sat-snapshot-label">Programs</div>
                <div className="sat-snapshot-value">Foundation, Comprehensive &amp; Intensive</div>
              </div>
            </div>

            {/* 2. Duration */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="sat-snapshot-label">Duration</div>
                <div className="sat-snapshot-value">12, 24 &amp; 48 Hours</div>
              </div>
            </div>

            {/* 3. Format */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <div className="sat-snapshot-label">Format</div>
                <div className="sat-snapshot-value">Online &amp; Offline</div>
              </div>
            </div>

            {/* 4. Focus Areas */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="22" y1="12" x2="18" y2="12" />
                  <line x1="6" y1="12" x2="2" y2="12" />
                  <line x1="12" y1="6" x2="12" y2="2" />
                  <line x1="12" y1="22" x2="12" y2="18" />
                </svg>
              </div>
              <div>
                <div className="sat-snapshot-label">Focus Areas</div>
                <div className="sat-snapshot-value">Math and English</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. WHY NITAQ ACADEMY SECTION ─────────────────────────── */}
        <section className="sat-why-section">
          <div className="sat-why-container">
            <div className="sat-why-header-col">
              <div className="sat-why-eyebrow">WHY NITAQ ACADEMY?</div>
              <h2 className="sat-why-title">
                Focused Guidance.
                <div>Proven <span className="accent-green">Results.</span></div>
              </h2>
            </div>

            <div className="sat-why-items-col">
              {/* Item 01 */}
              <div className="sat-why-item">
                <div className="sat-why-number-badge">01</div>
                <div className="sat-why-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="sat-why-item-title">Expert Instruction</h3>
                <p className="sat-why-item-desc">
                  Learn from experienced educators with proven Digital SAT strategies.
                </p>
              </div>

              {/* Item 02 */}
              <div className="sat-why-item">
                <div className="sat-why-number-badge">02</div>
                <div className="sat-why-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h3 className="sat-why-item-title">Structured Preparation</h3>
                <p className="sat-why-item-desc">
                  A step-by-step approach from concepts to exam confidence.
                </p>
              </div>

              {/* Item 03 */}
              <div className="sat-why-item">
                <div className="sat-why-number-badge">03</div>
                <div className="sat-why-icon-circle">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="sat-why-item-title">Personalized Support</h3>
                <p className="sat-why-item-desc">
                  Targeted guidance to improve your performance where it matters.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. PROGRAM TRACKS ──────────────────────────────────────── */}
        <section className="sat-programs-section">
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">TAILORED LEARNING PATHS</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                Choose the preparation that fits your goal.
              </h2>
            </div>

            <div className="sat-programs-grid">
              {/* Track 1: Foundation */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">12 Hours · Fundamentals</span>
                  <h3 className="sat-program-title">Foundation</h3>
                  <p className="sat-program-subtitle">Build core concepts and test-taking strategies.</p>
                  <ul className="sat-program-list">
                    <li>Core concept &amp; foundation builds</li>
                    <li>Guided expert practice hours</li>
                    <li>Essential test-taking strategies</li>
                    <li>College Board SAT registration assistance</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/971527569908?text=I'm%20interested%20in%20SAT%20Foundation%20Track"
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                >
                  Enquire Track →
                </a>
              </div>

              {/* Track 2: Comprehensive (Featured) */}
              <div className="sat-program-card featured">
                <div className="sat-featured-badge">MOST POPULAR</div>
                <div>
                  <span className="sat-program-duration">24 Hours · Complete Prep</span>
                  <h3 className="sat-program-title">Comprehensive</h3>
                  <p className="sat-program-subtitle">Develop complete Digital SAT readiness.</p>
                  <ul className="sat-program-list">
                    <li>Complete SAT syllabus coverage</li>
                    <li>Extensive practice problem hub</li>
                    <li>Full-length mock exam tracking</li>
                    <li>Detailed performance feedback reports</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/971527569908?text=I'm%20interested%20in%20SAT%20Comprehensive%20Track"
                  className="sat-btn-primary"
                  style={{ width: '100%' }}
                >
                  Enroll in Track →
                </a>
              </div>

              {/* Track 3: Intensive */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">48 Hours · Advanced</span>
                  <h3 className="sat-program-title">Intensive</h3>
                  <p className="sat-program-subtitle">Focused preparation for maximum score growth.</p>
                  <ul className="sat-program-list">
                    <li>Deep-dive into every SAT domain</li>
                    <li>Daily timed practice sessions</li>
                    <li>1-on-1 personalized doubt clearing</li>
                    <li>12+ full-length computer-adaptive mocks</li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/971527569908?text=I'm%20interested%20in%20SAT%20Intensive%20Track"
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                >
                  Enquire Track →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. CURRICULUM DOMAINS ──────────────────────────────────── */}
        <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">CURRICULUM OVERVIEW</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                Complete Digital SAT Preparation
              </h2>
            </div>

            <div className="sat-curriculum-grid">
              {/* Mathematics Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>Mathematics</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>Desmos &amp; Non-Calc</span>
                </h3>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Algebra</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Advanced Math</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Problem-Solving &amp; Data Analysis</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Geometry &amp; Trigonometry</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>

              {/* Reading & Writing Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>Reading &amp; Writing</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>Adaptive Passages</span>
                </h3>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Information &amp; Ideas</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Craft &amp; Structure</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Expression of Ideas</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">Standard English Conventions</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. DIAGNOSTIC SECTION ─────────────────────────────────── */}
        <section style={{ background: '#F8FBF9', padding: '60px 0', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <SATDiagnosticSection />
          </div>
        </section>

        {/* ── 7. STUDENT SUCCESS STORIES ────────────────────────────── */}
        <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">VERIFIED RESULTS</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                Student Success Stories
              </h2>
            </div>

            <div className="sat-results-grid">
              <div className="sat-result-card">
                <h3 className="sat-result-name">Riya S.</h3>
                <div className="sat-result-jump">1120 → 1490</div>
                <div className="sat-result-sub">+370 points improvement</div>
                <p className="sat-result-text">
                  "The mock tests and personalized feedback from my Nitaq trainer helped me identify exactly where I was losing marks."
                </p>
              </div>

              <div className="sat-result-card">
                <h3 className="sat-result-name">Ahmed K.</h3>
                <div className="sat-result-jump">1050 → 1410</div>
                <div className="sat-result-sub">+360 points improvement</div>
                <p className="sat-result-text">
                  "I struggled with the Math section before joining Nitaq. The structured approach gave me the consistency I needed."
                </p>
              </div>

              <div className="sat-result-card">
                <h3 className="sat-result-name">Sara M.</h3>
                <div className="sat-result-jump">1200 → 1520</div>
                <div className="sat-result-sub">+320 points improvement</div>
                <p className="sat-result-text">
                  "The intensive track was exactly what I needed. Daily sessions with timed drills pushed me past 1500."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. FINAL CALL TO ACTION ────────────────────────────────── */}
        <section className="sat-final-cta-section">
          <div className="sat-final-cta-container">
            <h2 className="sat-final-cta-title">Ready to prepare with confidence?</h2>
            <p className="sat-final-cta-desc">
              Speak with our academic team and find the right SAT preparation program tailored to your target score and schedule.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/971527569908?text=I%20want%20to%20enroll%20in%20SAT%20preparation"
                className="sat-btn-cta-white"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_final_cta_enroll')}
              >
                Enroll Today →
              </a>
              <a
                href="tel:+97165798313"
                className="sat-btn-cta-outline"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_final_cta_advisor')}
              >
                Speak to an Advisor
              </a>
            </div>
          </div>
        </section>

        {/* Global Why Nitaq Footer Section */}
        <div style={{ background: '#FFFFFF', padding: '60px 0 0 0' }}>
          <WhyNitaq />
        </div>
      </main>
    </>
  );
};

export default SATCourse;
