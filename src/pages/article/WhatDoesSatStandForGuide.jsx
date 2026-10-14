import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  HelpCircle, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  ArrowRight, Award, Zap, Laptop, BookOpen, GraduationCap, ChevronRight, Sparkles
} from 'lucide-react';

const WhatDoesSatStandForGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <div className="sat-guide-page">
      <SEO />

      {/* Breadcrumbs with clearance */}
      <div className="sat-guide-breadcrumbs-wrap">
        <div className="sat-guide-container">
          <nav className="sat-guide-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <span>What Does SAT Stand For?</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="sat-guide-hero">
        <div className="sat-guide-container">
          <div className="sat-guide-badge">
            <HelpCircle size={14} />
            <span>Beginner Explainer • Digital SAT Guide for UAE Families (2026–2027)</span>
          </div>
          <h1>What Does SAT Stand For? Digital SAT Explained for UAE Students</h1>
          <p className="sat-guide-lead">
            Everything parents and high school students need to know about the Digital SAT: what the acronym means, exam structure, 400–1600 scoring scale, test timing, and why it is critical for UAE university admissions.
          </p>
          <div className="sat-guide-meta">
            <span className="sat-meta-item"><Clock size={14} /> 8-Minute Read</span>
            <span className="sat-meta-item"><ShieldCheck size={14} /> Official College Board Format</span>
            <span className="sat-meta-item"><Sparkles size={14} /> Official Testing Guide</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sat-guide-main">
        <div className="sat-guide-container">
          {/* The Name Origin Card */}
          <section className="sat-section">
            <div className="sat-card">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', marginBottom: '12px' }}>
                The Meaning & History of "SAT"
              </h2>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '12px' }}>
                Originally created in 1926, <strong>SAT</strong> stood for <strong>Scholastic Aptitude Test</strong>. In 1993, the College Board changed the name to <strong>Scholastic Assessment Test</strong> to emphasize that it assesses acquired academic skills rather than innate aptitude.
              </p>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                Today, the College Board treats <strong>SAT</strong> as an independent trademarked acronym. It is the premier globally standardized exam assessing high school students' college readiness in <strong>Reading & Writing</strong> and <strong>Mathematics</strong>.
              </p>
            </div>
          </section>

          {/* Digital SAT Structure At A Glance */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Laptop size={26} />
              The Digital SAT Structure at a Glance (2026)
            </h2>

            <div className="sat-grid sat-grid-2" style={{ marginBottom: '20px' }}>
              <div className="sat-card">
                <span className="sat-badge sat-badge-blue" style={{ marginBottom: '12px' }}>Section 1</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>Reading & Writing</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#475569' }}>
                  <li>• <strong>Duration:</strong> 64 minutes total</li>
                  <li>• <strong>Format:</strong> Two 32-minute modules</li>
                  <li>• <strong>Questions:</strong> 54 questions (27 per module)</li>
                  <li>• <strong>Passage Length:</strong> Short 25–150 word excerpts</li>
                  <li>• <strong>Score Range:</strong> 200 – 800 points</li>
                </ul>
              </div>

              <div className="sat-card sat-card-emerald">
                <span className="sat-badge sat-badge-emerald" style={{ marginBottom: '12px' }}>Section 2</span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#064e3b', marginBottom: '12px' }}>Mathematics</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem', color: '#064e3b' }}>
                  <li>• <strong>Duration:</strong> 70 minutes total</li>
                  <li>• <strong>Format:</strong> Two 35-minute modules</li>
                  <li>• <strong>Questions:</strong> 44 questions (22 per module)</li>
                  <li>• <strong>Calculator:</strong> Desmos graphing calculator allowed throughout</li>
                  <li>• <strong>Score Range:</strong> 200 – 800 points</li>
                </ul>
              </div>
            </div>

            <div className="sat-callout sat-callout-emerald">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock size={20} style={{ color: '#059669', flexShrink: 0 }} />
                <span style={{ fontSize: '0.9rem', color: '#064e3b' }}>
                  <strong>Total Exam Length:</strong> 2 hours and 14 minutes (plus a 10-minute break between sections). Taken on personal laptop or tablet via the College Board Bluebook app.
                </span>
              </div>
            </div>
          </section>

          {/* The 400 to 1600 Scoring Scale */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Award size={26} />
              Understanding the 400 to 1600 Scoring Scale
            </h2>
            <div className="sat-card">
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, marginBottom: '12px' }}>
                Your total SAT score is the sum of your two section scores: Reading & Writing (200–800) + Math (200–800), giving a minimum possible score of <strong>400</strong> and a maximum possible score of <strong>1600</strong>.
              </p>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>
                <strong>No Guessing Penalty:</strong> You earn points for every correct answer, and you are <em>never penalized</em> for incorrect answers. If you are unsure on any question, you should always make your best guess.
              </p>
            </div>
          </section>

          {/* Why UAE Students Take It */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <GraduationCap size={26} />
              Why Do High School Students in the UAE Take the SAT?
            </h2>

            <div className="sat-grid sat-grid-3">
              <div className="sat-card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>1. UAE MoE Equivalency</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  American curriculum students in Sharjah, Dubai, and Abu Dhabi must take SAT Math to obtain official Ministry of Education high school graduation equivalency.
                </p>
              </div>

              <div className="sat-card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>2. Local Universities</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Top UAE universities (American University of Sharjah, Khalifa University, NYU Abu Dhabi) evaluate SAT scores for direct admission and generous merit scholarships.
                </p>
              </div>

              <div className="sat-card">
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>3. Global Study Abroad</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Accepted by thousands of universities worldwide in the US, Canada, UK, Europe, Singapore, and Australia for undergraduate admissions.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> Ready to Experience the Format?
              </div>
              <h3 className="sat-cta-title">Take Nitaq's Free 24-Question Diagnostic</h3>
              <p className="sat-cta-desc">
                Experience the Digital SAT interface firsthand with adaptive question routing. Find out your baseline score in under 25 minutes.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn">
              Start Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <HelpCircle size={26} />
              Frequently Asked Questions: Digital SAT Basics
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'What is a good SAT score for a high school student in UAE?',
                  a: 'A score of 1050 is average globally (50th percentile). Scores of 1200–1350 are competitive for private UAE universities like AUS and AUD. Scores of 1450 to 1550+ place you in the top 1% to 3% worldwide and qualify for top international universities and substantial merit scholarships.'
                },
                {
                  q: 'What age or grade should I take the SAT?',
                  a: 'Most students take the SAT during Grade 11 (Junior Year) in the spring (March or May), and optionally repeat it in the autumn of Grade 12 (October, November, or December) to improve their score before university application deadlines.'
                },
                {
                  q: 'Can I take the Digital SAT from home?',
                  a: 'No. While the test is taken on a laptop or tablet, it must be taken in person at an officially authorized College Board test center (authorized schools in Sharjah, Dubai, or Abu Dhabi) under strict proctor supervision.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="sat-faq-item">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="sat-faq-trigger"
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <span className="sat-faq-icon">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="sat-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Next Reading / Related Links */}
          <nav className="sat-guide-nav" aria-label="Article navigation">
            <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" className="sat-nav-prev">
              ← Digital SAT Preparation Guide (Sharjah & Dubai)
            </Link>
            <Link to="/sat-preparation-sharjah" className="sat-nav-next">
              Explore Nitaq SAT Course in Sharjah →
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default WhatDoesSatStandForGuide;
