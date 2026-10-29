import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Filter, ListFilter, Target, ChevronRight, Sparkles, Calendar
} from 'lucide-react';

const SatSuiteQuestionBankGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const steps = [
    {
      num: '01',
      title: 'Filter by Specific Content Domain',
      desc: 'Instead of doing random question sets, target one specific domain per study block—such as Advanced Math (Nonlinear equations) or Standard English Conventions (Boundaries).'
    },
    {
      num: '02',
      title: 'Check "Exclude Active Practice Test Items"',
      desc: 'CRITICAL: The Question Bank contains items from official Bluebook Practice Tests 1–6. If you practice them early, you will spoil your official practice test scores. Always filter them out.'
    },
    {
      num: '03',
      title: 'Group by Difficulty Tier (Easy -> Medium -> Hard)',
      desc: 'Work through Medium items first to solidify consistency, then drill Hard questions to unlock the adaptive Module 2 upper scoring bracket.'
    },
    {
      num: '04',
      title: 'Maintain a 3-Category Error Log',
      desc: 'For every incorrect item, record the root cause: Content Gap (didn\'t know formula), Misread Trap (missed negative sign or key condition), or Pacing Rush (ran out of time).'
    }
  ];

  return (
    <main className="article-details-page sat-guide-page">
      <SEO />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>SAT Suite Question Bank Guide</span>
          </nav>
        </div>
      </div>

      <article className="sat-guide-container section-padding">
        {/* Header */}
        <div className="article-header" style={{ maxWidth: '900px', margin: '40px auto 32px' }}>
          <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={14} /> Official Practice Resources • Question Bank Guide
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
            SAT Suite Question Bank: How to Practice Effectively in UAE
          </h1>
          <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
            Access thousands of official College Board practice questions. Learn how to filter by skill, avoid spoiling official Bluebook practice tests, and build an error-tracking system for maximum score growth.
          </p>

          <div className="article-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '20px', alignItems: 'center' }}>
            <div className="meta-item">
              <div className="author-avatar" style={{ background: '#1a5c2e', color: 'white', fontWeight: 'bold' }}>NA</div>
              <div className="meta-text">
                <span className="meta-label">Author</span>
                <span className="meta-value">Nitaq Academy Academic Editorial</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <Calendar size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Published</span>
                <span className="meta-value">October 2026 Edition</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <Clock size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Reading Time</span>
                <span className="meta-value">9 min read</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <ShieldCheck size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Verified</span>
                <span className="meta-value">Official College Board Bank</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="article-featured-img" style={{ maxWidth: '940px', margin: '0 auto 40px' }}>
          <img
            src="/images/sat_v2.webp"
            alt="SAT Suite Question Bank Practice Guide for Digital SAT"
          />
        </div>

        <div className="sat-guide-content">
          {/* Core Warning Box */}
          <div className="sat-alert-box" style={{ background: '#fef2f2', borderLeftColor: '#ef4444' }}>
            <AlertCircle size={24} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 className="sat-alert-title" style={{ color: '#991b1b' }}>Warning: Do Not "Burn" Official Bluebook Test Questions</h3>
              <p className="sat-alert-desc" style={{ color: '#7f1d1d' }}>
                The College Board's SAT Suite Question Bank includes identical questions from official Bluebook Practice Tests 1 through 6. If you practice questions without filtering, you will encounter familiar questions during your full mock tests, artificially inflating your diagnostic score and masking real weaknesses.
              </p>
            </div>
          </div>

          {/* Step by Step Strategy */}
          <h2>
            <ListFilter size={24} color="#166534" />
            The 4-Step Practice Routine for UAE Students
          </h2>
          <p>
            Maximize the value of official College Board questions with this disciplined four-step protocol:
          </p>

          <div className="sat-cards-grid">
            {steps.map((st, i) => (
              <div key={i} className="sat-card">
                <div className="sat-card-tag" style={{ color: '#166534', fontSize: '1rem', fontWeight: 800 }}>{st.num}</div>
                <h3 style={{ margin: '8px 0', fontSize: '1.15rem', color: '#0f172a' }}>{st.title}</h3>
                <p className="sat-card-desc">{st.desc}</p>
              </div>
            ))}
          </div>

          {/* Breakdown of Available Domains */}
          <h2>
            <Filter size={24} color="#166534" />
            What Content is Tested in the Question Bank?
          </h2>

          <div className="sat-cards-grid">
            <div className="sat-card">
              <h3 style={{ color: '#166534', fontSize: '1.2rem', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} /> Reading & Writing (4 Domains)
              </h3>
              <ul style={{ paddingLeft: '18px', color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                <li><strong>Craft & Structure:</strong> Words in Context, Text Structure & Purpose, Cross-Text Connections.</li>
                <li><strong>Information & Ideas:</strong> Central Ideas, Command of Evidence, Inferences.</li>
                <li><strong>Standard English Conventions:</strong> Boundaries, Form, Structure, and Sense (Grammar).</li>
                <li><strong>Expression of Ideas:</strong> Rhetorical Synthesis (Bullet Notes) and Transitions.</li>
              </ul>
            </div>

            <div className="sat-card">
              <h3 style={{ color: '#166534', fontSize: '1.2rem', marginTop: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={20} /> Mathematics (4 Domains)
              </h3>
              <ul style={{ paddingLeft: '18px', color: '#475569', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
                <li><strong>Algebra:</strong> Linear equations in one/two variables, linear functions, linear systems, inequalities.</li>
                <li><strong>Advanced Math:</strong> Equivalent expressions, quadratics, polynomials, nonlinear functions.</li>
                <li><strong>Problem-Solving & Data:</strong> Ratios, rates, percentages, probability, unit conversions.</li>
                <li><strong>Geometry & Trigonometry:</strong> Area, volume, circle theorems, right triangle trigonometry.</li>
              </ul>
            </div>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div>
              <div className="sat-cta-eyebrow">
                <Award size={15} /> Measure Your Question-Solving Speed
              </div>
              <h3 className="sat-cta-title">Take Nitaq's Free Adaptive Diagnostic</h3>
              <p className="sat-cta-desc">
                Before jumping into hundreds of uncurated question bank items, establish which of the 8 College Board domains need immediate reinforcement. Get your instant report today.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn-primary">
              Start Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <h2>
            <HelpCircle size={24} color="#166534" />
            Frequently Asked Questions: SAT Suite Question Bank
          </h2>

          <div className="sat-faq-wrap">
            {[
              {
                q: 'Is the SAT Suite Question Bank completely free to use?',
                a: 'Yes. The SAT Suite Question Bank is an official, free public web tool provided by the College Board for educators and students. You do not need a paid subscription or special credentials to access the items.'
              },
              {
                q: 'Does the Question Bank provide answer explanations for every question?',
                a: 'Yes. Each question includes the correct answer, the skill domain, question ID, and an official explanation breaking down why the correct choice is right and why the distractors are wrong.'
              },
              {
                q: 'How many total questions are currently available?',
                a: 'As of 2026, the question bank contains over 3,000 official questions across Reading & Writing and Math from recent Digital SAT, PSAT/NMSQT, and PSAT 10 testing pools.'
              },
              {
                q: 'Can I export question sets into a printable PDF?',
                a: 'Yes. The platform allows you to select question checkboxes and click "Export to PDF" with or without the answer key, which is great for offline weekend study sessions.'
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
            <Link to="/article/desmos-sat-guide-math-calculator-strategies">
              ← Desmos SAT Math Calculator Strategies
            </Link>
            <Link to="/article/how-to-ace-sat-study-plan-guide">
              Next: How to Ace the SAT: 30/60/90-Day Study Plan →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SatSuiteQuestionBankGuide;
