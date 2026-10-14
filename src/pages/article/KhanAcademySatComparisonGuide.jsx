import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Users, Sparkles, Scale, ChevronRight
} from 'lucide-react';

const KhanAcademySatComparisonGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const comparisonPoints = [
    {
      feature: 'Cost & Accessibility',
      khan: '100% Free worldwide. Accessible 24/7 on any browser.',
      nitaq: 'Tuition-based structured courses with flexible batch schedules.',
      verdict: 'Khan Academy is unmatched for free baseline access.'
    },
    {
      feature: 'Content Authenticity',
      khan: 'Directly partnered with College Board. Official questions.',
      nitaq: 'Official College Board items supplemented with customized UAE diagnostic drills.',
      verdict: 'Both offer authentic College Board question alignment.'
    },
    {
      feature: 'Teaching Delivery & Accountability',
      khan: 'Self-paced asynchronous video explanations and written articles.',
      nitaq: 'Live mentor-led classes (in-person in Al Majaz 3, Sharjah & live online) with weekly homework accountability.',
      verdict: 'Coaching provides the consistency students often struggle to maintain alone.'
    },
    {
      feature: 'Desmos Shortcut Training',
      khan: 'Basic conceptual calculator usage within practice modules.',
      nitaq: 'Dedicated Desmos masterclasses: regression hacks, sliders, and speed tricks for Module 2.',
      verdict: 'Structured coaching focuses heavily on speed tricks to finish modules with banked time.'
    },
    {
      feature: '1-on-1 Feedback on Recurring Mistakes',
      khan: 'Automated hint system without personalized discussion.',
      nitaq: 'Tutors analyze your individual diagnostic scorecards to fix root mental habits.',
      verdict: 'Coaching excels at identifying why a student repeatedly picks specific distractor choices.'
    }
  ];

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
            <span>Khan Academy vs Structured Coaching</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="sat-guide-hero">
        <div className="sat-guide-container">
          <div className="sat-guide-badge">
            <Scale size={14} />
            <span>Preparation Pathway Analysis • UAE Guide (2026–2027)</span>
          </div>
          <h1>Khan Academy SAT vs Structured SAT Coaching: Which Approach Fits You?</h1>
          <p className="sat-guide-lead">
            An objective, practical guide exploring the strengths of Khan Academy’s official free platform and when UAE students benefit from structured, teacher-led coaching.
          </p>
          <div className="sat-guide-meta">
            <span className="sat-meta-item"><Clock size={14} /> 8-Minute Read</span>
            <span className="sat-meta-item"><Sparkles size={14} /> Score Progression Strategy</span>
            <span className="sat-meta-item"><ShieldCheck size={14} /> Objective Decision Framework</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sat-guide-main">
        <div className="sat-guide-container">
          {/* Core Perspective Box */}
          <div className="sat-callout sat-callout-emerald">
            <div className="sat-callout-title">
              <Sparkles size={20} />
              <span>The Right Mindset: Complementary, Not Competitive</span>
            </div>
            <p className="sat-callout-text">
              At Nitaq Academy, we actively encourage our students to practice on Khan Academy. It is an extraordinary, official resource for drilling core concepts. However, self-study platforms require high self-discipline, and many students hit a score plateau around 1200–1300 where they need personalized diagnostic feedback to reach the 1450+ tier.
            </p>
          </div>

          {/* Feature Comparison Table */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Scale size={26} />
              Side-by-Side Comparison: Self-Study vs. Structured Coaching
            </h2>

            <div className="sat-table-wrap">
              <table className="sat-table">
                <thead>
                  <tr>
                    <th>Evaluation Criteria</th>
                    <th>Khan Academy (Self-Study)</th>
                    <th>Nitaq Academy (Coaching)</th>
                    <th>Strategic Verdict</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((p, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700, color: '#0f172a' }}>{p.feature}</td>
                      <td>{p.khan}</td>
                      <td>{p.nitaq}</td>
                      <td>
                        <span className="sat-badge sat-badge-emerald" style={{ display: 'inline-block', fontSize: '0.82rem' }}>
                          {p.verdict}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Who Should Choose Which? */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Users size={26} />
              How to Decide Which Option Fits Your Profile
            </h2>

            <div className="sat-grid sat-grid-2">
              <div className="sat-card">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={18} style={{ color: '#059669' }} /> Start with Khan Academy If:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>You have 6+ months before your exam date and high independent study discipline.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>Your current score is below 1100 and you need to review foundational Grade 8–10 math formulas.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>You are comfortable reading written explanations and debugging your own errors without a teacher.</span>
                  </li>
                </ul>
              </div>

              <div className="sat-card sat-card-emerald">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#064e3b', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={18} style={{ color: '#059669' }} /> Choose Structured Coaching If:
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.92rem', color: '#064e3b', lineHeight: 1.6 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>Your score is plateaued between 1200 and 1350 and self-study is no longer moving the needle.</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>You have an urgent university deadline (AUS, Khalifa University, or US/UK regular decision).</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <span style={{ color: '#059669', fontWeight: 800 }}>•</span>
                    <span>You need personalized Desmos shortcuts and pacing discipline under timed adaptive pressure.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> Diagnostic Baseline
              </div>
              <h3 className="sat-cta-title">See Where You Stand Before Deciding</h3>
              <p className="sat-cta-desc">
                Take Nitaq's free 24-question diagnostic quiz. Our academic advisors will review your report with you and help you choose whether self-study or a coaching batch is best for your goals.
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
              Frequently Asked Questions: Khan Academy vs Coaching
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'Can a student score 1500+ using only Khan Academy?',
                  a: 'Yes, it is possible for highly self-motivated students with strong foundational academic backgrounds. However, many students find that self-study lacks test-day pacing simulation and strategic shortcut training (like advanced Desmos hacks), which often makes a coach-led track faster and more reliable.'
                },
                {
                  q: 'Does Khan Academy test questions differ from the real exam?',
                  a: 'Khan Academy uses official College Board material, so the question style is authentic. However, their practice modules are often untimed, whereas the actual Digital SAT places students under intense adaptive time constraints.'
                },
                {
                  q: 'How does Nitaq Academy incorporate Khan Academy into its coaching?',
                  a: 'We frequently assign specific Khan Academy skill-drill links as targeted homework between our weekly live sessions. We combine Khan Academy’s vast practice pool with our mentor-led live breakdown of tricky questions and exam-day pacing routines.'
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
            <Link to="/article/sat-math-practice-questions-traps-guide" className="sat-nav-prev">
              ← SAT Math Practice Questions & Traps
            </Link>
            <Link to="/article/sat-prep-options-uae-academy-comparison" className="sat-nav-next">
              Next: SAT Prep Options in the UAE: What to Compare →
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default KhanAcademySatComparisonGuide;
