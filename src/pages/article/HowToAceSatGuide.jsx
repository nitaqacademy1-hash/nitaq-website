import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Target, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Calendar, BookOpen, TrendingUp, ChevronRight, Sparkles
} from 'lucide-react';

const HowToAceSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const [activePlan, setActivePlan] = useState('60day');

  const plans = {
    '30day': {
      title: '30-Day Intensive Crash Plan (15–20 Hours/Week)',
      audience: 'Best for Grade 12 students with an upcoming test date (November/December) who need an immediate 80–150 point jump.',
      schedule: [
        { week: 'Week 1', focus: 'Diagnostic & P0 Grammar Rules', tasks: 'Take Bluebook Practice Test 1. Master the 8 Standard English Conventions (commas, semicolons, dashes, transitions).' },
        { week: 'Week 2', focus: 'Desmos Masterclass & Math Module 1', tasks: 'Drill systems of equations, regressions, and vertex shortcuts. Eliminate careless arithmetic errors in Math Module 1.' },
        { week: 'Week 3', focus: 'Adaptive Module 2 Hard Questions & Pacing', tasks: 'Target Advanced Math (quadratics, circle theorems) and Reading Craft & Structure. Take Bluebook Test 2 under strict timing.' },
        { week: 'Week 4', focus: 'Mock Exam Calibration & Weakness Review', tasks: 'Take Bluebook Test 3 on Saturday morning at 8:00 AM. Review error log. Light review 48 hours prior to test day.' }
      ]
    },
    '60day': {
      title: '60-Day Structured Roadmap (8–12 Hours/Week) — Recommended',
      audience: 'The optimal balanced timeline for UAE school students balancing CBSE, IGCSE, IB, or American school exams.',
      schedule: [
        { week: 'Weeks 1–2', focus: 'Foundation Assessment & Diagnostic Baseline', tasks: 'Complete Nitaq diagnostic assessment. Identify which of the 8 domains need foundational conceptual review.' },
        { week: 'Weeks 3–4', focus: 'Reading & Writing Systematic Deep-Dive', tasks: 'Master Rhetorical Synthesis bullet scanning, Words in Context, and Textual Evidence questions. Complete 150 Question Bank items.' },
        { week: 'Weeks 5–6', focus: 'Mathematics Mastery & Desmos Shortcuts', tasks: 'Cover Algebra and Advanced Math. Learn regression notation and slider hacks. Full-length Bluebook Practice Test 2.' },
        { week: 'Weeks 7–8', focus: 'Full Adaptive Mocks & Exam Simulation', tasks: 'Complete Bluebook Tests 3 & 4. Simulate test day conditions with Emirates ID, personal laptop, and snack breaks.' }
      ]
    },
    '90day': {
      title: '90-Day Mastery Roadmap (5–8 Hours/Week)',
      audience: 'Ideal for Grade 10 and 11 students targeting 1500+ for competitive international admissions (Ivy League, AUS merit scholarships).',
      schedule: [
        { week: 'Month 1', focus: 'Conceptual Core & Vocabulary Architecture', tasks: 'Rebuild core mathematical theory (functions, circle geometry, exponents). Develop academic vocabulary in context reading habits.' },
        { week: 'Month 2', focus: 'Speed, Desmos Mastery & Skill Isolation', tasks: 'Complete timed sets of 15 questions per domain. Train to finish Math Module 1 in under 22 minutes to bank time for verification.' },
        { week: 'Month 3', focus: 'Full-Length Adaptive Conditioning', tasks: 'Take Bluebook Practice Tests 1 through 6 bi-weekly. Track error patterns in an active spreadsheet. Fine-tune pacing strategy.' }
      ]
    }
  };

  return (
    <main className="article-details-page sat-guide-page">
      <SEO />

      {/* Breadcrumb Navigation */}
      <div className="sat-guide-breadcrumbs-wrap">
        <div className="sat-guide-container">
          <nav className="sat-guide-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>How to Ace the SAT Guide</span>
          </nav>
        </div>
      </div>

      <article className="sat-guide-container">
        {/* Header */}
        <header className="sat-guide-header">
          <span className="sat-guide-category-badge">
            <Target size={14} /> High Scorer Roadmap (2026–2027)
          </span>
          <h1 className="sat-guide-title">
            How to Ace the SAT: A 30/60/90-Day Preparation Plan for UAE Students
          </h1>
          <p className="sat-guide-lead">
            A comprehensive, step-by-step preparation blueprint tailored for UAE students. Master pacing strategies, score target benchmarks (1400–1550+), and school curriculum balance.
          </p>

          <div className="sat-guide-meta-row">
            <span className="sat-guide-meta-item">
              <Clock size={15} color="#166534" /> 11-Minute Read
            </span>
            <span className="sat-guide-meta-item">
              <Sparkles size={15} color="#166534" /> 1500+ Top Scorer Roadmap
            </span>
            <span className="sat-guide-meta-item">
              <ShieldCheck size={15} color="#166534" /> SPEA-Aligned Guidance
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <img
          src="/images/sat_v2.webp"
          alt="How to Ace the SAT Study Plans for UAE Students - Nitaq Academy"
          className="sat-guide-featured-img"
        />

        <div className="sat-guide-content">
          {/* Score Benchmark Table */}
          <h2>
            <Award size={24} color="#166534" />
            What Does It Take to "Ace" the Digital SAT?
          </h2>

          <div className="sat-table-wrap">
            <table className="sat-table">
              <thead>
                <tr>
                  <th>Score Range</th>
                  <th>Percentile</th>
                  <th>University Target</th>
                  <th>Preparation Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1500 – 1600</strong></td>
                  <td><span className="sat-badge sat-badge-hot">Top 1% (99th)</span></td>
                  <td style={{ fontSize: '0.88rem' }}>Ivy League, Stanford, MIT, NYU Abu Dhabi (Full Merit)</td>
                  <td style={{ fontSize: '0.85rem', color: '#64748b' }}>Zero tolerance for careless errors on Module 1; hard Module 2 speed mastery.</td>
                </tr>
                <tr>
                  <td><strong>1400 – 1490</strong></td>
                  <td><span className="sat-badge sat-badge-open">Top 5% (94th–98th)</span></td>
                  <td style={{ fontSize: '0.88rem' }}>AUS Engineering/Business, Khalifa University, Top UK/Canada</td>
                  <td style={{ fontSize: '0.85rem', color: '#64748b' }}>Master Desmos hacks; eliminate grammar punctuation mistakes entirely.</td>
                </tr>
                <tr>
                  <td><strong>1300 – 1390</strong></td>
                  <td><span className="sat-badge sat-badge-future">Top 15% (86th–93rd)</span></td>
                  <td style={{ fontSize: '0.88rem' }}>AUS General Admissions, University of Sharjah, Heriot-Watt Dubai</td>
                  <td style={{ fontSize: '0.85rem', color: '#64748b' }}>Solidify core algebra; drill vocabulary in context and linear systems.</td>
                </tr>
                <tr>
                  <td><strong>1150 – 1290</strong></td>
                  <td><span className="sat-badge sat-badge-past">50th–80th Percentile</span></td>
                  <td style={{ fontSize: '0.88rem' }}>Foundation threshold for UAE private universities</td>
                  <td style={{ fontSize: '0.85rem', color: '#64748b' }}>Overcome content gaps in exponents, quadratics, and sentence boundaries.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Interactive Study Plan Selector */}
          <h2>
            <Calendar size={24} color="#166534" />
            Select Your Preparation Roadmap
          </h2>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {[
              { id: '30day', label: '30-Day Crash Plan' },
              { id: '60day', label: '60-Day Plan (Recommended)' },
              { id: '90day', label: '90-Day Mastery Roadmap' }
            ].map(p => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActivePlan(p.id)}
                style={{
                  background: activePlan === p.id ? '#166534' : '#f1f5f9',
                  color: activePlan === p.id ? '#ffffff' : '#334155',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Selected Plan Details */}
          <div className="sat-card" style={{ marginBottom: '36px', padding: '28px' }}>
            <h3 style={{ margin: '0 0 8px', fontSize: '1.3rem', color: '#0f172a' }}>{plans[activePlan].title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '22px' }}>{plans[activePlan].audience}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {plans[activePlan].schedule.map((s, idx) => (
                <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <span className="sat-badge sat-badge-open">{s.week}</span>
                    <strong style={{ color: '#0f172a', fontSize: '1rem' }}>{s.focus}</strong>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#475569', lineHeight: 1.6 }}>{s.tasks}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div>
              <div className="sat-cta-eyebrow">
                <Award size={15} /> Know Your Starting Point
              </div>
              <h3 className="sat-cta-title">Take the Free 24-Question SAT Diagnostic</h3>
              <p className="sat-cta-desc">
                Identify whether a 30-day crash course or a 60-day structured program fits your target score. Get your instant domain breakdown with tailored mentor advice.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn-primary">
              Take Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* Frequently Asked Questions */}
          <h2>
            <HelpCircle size={24} color="#166534" />
            Frequently Asked Questions: Acing the SAT
          </h2>

          <div className="sat-faq-wrap">
            {[
              {
                q: 'How many hours a week should UAE students study for the SAT?',
                a: 'For students with 8–10 weeks before the exam, 8 to 10 focused hours per week (split into 3 weekday sessions of 90 minutes plus a 3-hour weekend mock/review block) yields the highest consistency without impacting school grades.'
              },
              {
                q: 'Is it better to self-study or join a coaching academy in Sharjah?',
                a: 'Students who already score 1400+ on their baseline diagnostic often succeed with self-study via Khan Academy and Bluebook. Students scoring below 1300 typically gain 150–250+ points much faster in structured coaching with experienced mentors who teach Desmos hacks and eliminate grammar traps.'
              },
              {
                q: 'How can I balance SAT prep with CBSE or IGCSE school board exams?',
                a: 'Plan your SAT for March or May of Grade 11 before your final board exams peak. Alternatively, target the October sitting at the beginning of Grade 12 before midterms begin.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="sat-faq-item">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="sat-faq-btn"
                >
                  <span>{faq.q}</span>
                  <span className="sat-faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="sat-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="sat-guide-footer-links">
            <Link to="/article/sat-suite-question-bank-practice-guide">
              ← SAT Suite Question Bank Practice Guide
            </Link>
            <Link to="/article/sat-math-practice-questions-traps-guide">
              Next: SAT Math Practice Questions & Traps Guide →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default HowToAceSatGuide;
