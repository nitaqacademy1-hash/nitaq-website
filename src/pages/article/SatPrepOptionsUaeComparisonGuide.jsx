import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Building2, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Users, Check, Search, ChevronRight
} from 'lucide-react';

const SatPrepOptionsUaeComparisonGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const evaluationCriteria = [
    {
      criterion: '1. Official Licensing & Accreditation',
      why: 'Educational institutes in Sharjah must be licensed by the Sharjah Private Education Authority (SPEA), and in Dubai by the Knowledge and Human Development Authority (KHDA).',
      tip: 'Always ask for the center’s educational permit number to ensure faculty and curricula are officially authorized.'
    },
    {
      criterion: '2. Batch Size vs. Individual Attention',
      why: 'Large lecture halls (25–40 students) make it difficult for teachers to identify individual math or grammar blind spots. Micro-batches (8–12 students) provide tailored attention.',
      tip: 'Ask whether the institute offers 1-on-1 diagnostic debriefs alongside group classroom sessions.'
    },
    {
      criterion: '3. Full Digital SAT Simulation on Bluebook',
      why: 'Paper mock exams are obsolete. An effective training provider must administer full-length adaptive tests on actual computer testing software.',
      tip: 'Verify whether the mock exams mimic the College Board\'s multistage adaptive routing (Module 1 performance determining Module 2 difficulty).'
    },
    {
      criterion: '4. Dedicated Desmos Graphing Calculator Training',
      why: 'Since Desmos is available across all 44 Math questions, top UAE prep institutes teach high-speed regression tricks and slider hacks.',
      tip: 'Avoid academies that treat the calculator as an afterthought or rely exclusively on traditional paper algebra.'
    },
    {
      criterion: '5. Transparency in Student Results & Reviews',
      why: 'Reputable academies document starting baseline scores alongside official test outcomes, rather than advertising vague score promises.',
      tip: 'Check verified Google reviews and authentic parent testimonials from local schools in Sharjah and Dubai.'
    }
  ];

  return (
    <div className="sat-guide-page">
      <SEO />

      {/* Breadcrumbs with 120px top offset to clear navbar */}
      <div className="sat-guide-breadcrumbs-wrap">
        <div className="sat-guide-container">
          <nav className="sat-guide-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <Link to="/article">Articles</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <span>SAT Prep Options UAE Comparison</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="sat-guide-hero">
        <div className="sat-guide-container">
          <div className="sat-guide-badge">
            <Building2 size={14} />
            <span>UAE Academy Evaluation Guide (2026–2027)</span>
          </div>
          <h1>SAT Prep Options in the UAE: What to Compare Before Choosing an Academy</h1>
          <p className="sat-guide-lead">
            A parent and student guide to evaluating SAT coaching options across Sharjah, Dubai, and Northern Emirates. Compare licensing, batch sizes, adaptive mock software, and mentorship models objectively.
          </p>
          <div className="sat-guide-meta">
            <span className="sat-meta-item"><Clock size={14} /> 9-Minute Read</span>
            <span className="sat-meta-item"><ShieldCheck size={14} /> Objective Parent Checklist</span>
            <span className="sat-meta-item"><Zap size={14} /> Trending Search (+3,950%)</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sat-guide-main">
        <div className="sat-guide-container">
          {/* Objective Checklist Intro */}
          <div className="sat-callout sat-callout-emerald">
            <div className="sat-callout-title">
              <Search size={20} />
              <span>Navigating the UAE SAT Prep Market</span>
            </div>
            <p className="sat-callout-text">
              With rising searches for preparation providers such as <em>Bedrock SAT</em>, <em>One Prep SAT</em>, and local coaching centers across Dubai and Sharjah, families are faced with diverse prep formats—from self-study app platforms to boutique in-person coaching institutes. This guide outlines 5 transparent criteria to help you choose the right learning environment for your child's specific score target.
            </p>
          </div>

          {/* 5 Evaluation Criteria */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <CheckCircle2 size={26} />
              5 Critical Questions to Ask Before Enrolling
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {evaluationCriteria.map((c, idx) => (
                <div key={idx} className="sat-card">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{c.criterion}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '14px', lineHeight: 1.6 }}>{c.why}</p>
                  <div className="sat-callout sat-callout-blue" style={{ margin: 0, padding: '10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Check size={16} style={{ color: '#2563eb', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: '#1e3a8a' }}>
                        <strong style={{ color: '#1e3a8a' }}>What to ask the admissions advisor:</strong> {c.tip}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Nitaq Academy Framework */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Building2 size={26} />
              How Nitaq Academy Structures Digital SAT Preparation
            </h2>

            <div className="sat-grid sat-grid-3">
              <div className="sat-card">
                <span className="sat-badge sat-badge-emerald" style={{ marginBottom: '12px' }}>Micro-Batches</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>8 to 12 Students</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Small group sizes ensure every student receives interactive feedback, question troubleshooting, and individualized homework reviews.
                </p>
              </div>

              <div className="sat-card">
                <span className="sat-badge sat-badge-emerald" style={{ marginBottom: '12px' }}>Desmos Integration</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Visual Speed Drills</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Weekly masterclasses on the College Board's built-in Desmos graphing calculator, teaching regression hacks, sliders, and root identification.
                </p>
              </div>

              <div className="sat-card">
                <span className="sat-badge sat-badge-emerald" style={{ marginBottom: '12px' }}>Adaptive Mocks</span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Timed Diagnostic Analytics</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Computer-delivered full-length adaptive tests that simulate the real Bluebook test-day experience and provide domain-by-domain diagnostic scorecards.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> Objective Assessment First
              </div>
              <h3 className="sat-cta-title">Book a Free SAT Diagnostic Consultation</h3>
              <p className="sat-cta-desc">
                Before committing to any course package, complete our 24-question adaptive screening. Receive an objective diagnostic score report and speak with an academic mentor.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn">
              Take Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <HelpCircle size={26} />
              Frequently Asked Questions: Choosing an SAT Academy in UAE
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'What are typical SAT preparation course fees in Sharjah and Dubai?',
                  a: 'Course fees across authorized UAE institutes typically range from AED 1,800 to AED 4,500 depending on the total instructional hours (4-week intensive crash courses vs. 10-week comprehensive tracks), batch size, and whether group or 1-on-1 private mentoring is selected.'
                },
                {
                  q: 'Is in-person coaching better than online SAT tutoring for UAE students?',
                  a: 'In-person coaching at our Al Majaz 3 centre in Sharjah offers structured focus and direct classroom peer motivation. However, for students residing in Dubai or across the Northern Emirates, live interactive online sessions offer identical curriculum coverage with zero highway commuting time.'
                },
                {
                  q: 'When should high school students begin preparation?',
                  a: 'The recommended window is the summer after Grade 10 or the first term of Grade 11. Starting in Grade 11 allows students to complete their official test attempts before Grade 12 board exams and university application deadlines.'
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
            <Link to="/article/khan-academy-sat-vs-structured-coaching" className="sat-nav-prev">
              ← Khan Academy vs Structured Coaching
            </Link>
            <Link to="/article/sat-requirements-uae-top-universities-harvard" className="sat-nav-next">
              Next: SAT Requirements for UAE & Top Universities (Harvard, AUS) →
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default SatPrepOptionsUaeComparisonGuide;
