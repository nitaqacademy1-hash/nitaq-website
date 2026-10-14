import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  BookOpen, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, FileText, Sparkles, Target, ChevronRight
} from 'lucide-react';

const SatEnglishReadingWritingGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const domains = [
    {
      name: '1. Craft & Structure (approx. 28% / 13–15 Questions)',
      description: 'Tests vocabulary in context, text structure, author’s point of view, and relationships between two paired texts.',
      strategy: 'Read the sentence with the blank, predict your own simple word that fits the tone, and match it against the 4 choices.'
    },
    {
      name: '2. Information & Ideas (approx. 26% / 12–14 Questions)',
      description: 'Tests central ideas, details, textual command of evidence, and quantitative command of evidence (interpreting bar graphs, scatterplots, tables).',
      strategy: 'Locate the exact thesis statement. For graph questions, eliminate choices that make true factual statements that are NOT supported by the displayed data.'
    },
    {
      name: '3. Standard English Conventions (approx. 26% / 11–15 Questions)',
      description: 'Tests grammar mechanics: sentence boundaries, semicolons, colons, subject-verb agreement, and modifier placement.',
      strategy: 'Strict mathematical rule application. Semicolons and periods both separate independent clauses. Comma splices are always wrong.'
    },
    {
      name: '4. Expression of Ideas (approx. 20% / 8–12 Questions)',
      description: 'Tests Rhetorical Synthesis (student bullet-point notes) and transitional words between sentences.',
      strategy: 'Read the PROMPT FIRST on bullet-point questions! If the prompt asks to "emphasize a difference", find the only choice with a contrast word (unlike, whereas).'
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
            <span>SAT English Reading & Writing Practice</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="sat-guide-hero">
        <div className="sat-guide-container">
          <div className="sat-guide-badge">
            <BookOpen size={14} />
            <span>Digital SAT Reading & Writing Domain Guide (2026–2027)</span>
          </div>
          <h1>SAT English & Reading & Writing: What Students Need to Practice</h1>
          <p className="sat-guide-lead">
            A comprehensive breakdown of all 4 College Board verbal domains. Master short passage comprehension, graph analysis, rhetorical synthesis shortcuts, and transition logic.
          </p>
          <div className="sat-guide-meta">
            <span className="sat-meta-item"><Clock size={14} /> 10-Minute Read</span>
            <span className="sat-meta-item"><Target size={14} /> 54 Questions Total</span>
            <span className="sat-meta-item"><ShieldCheck size={14} /> College Board Aligned</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sat-guide-main">
        <div className="sat-guide-container">
          {/* Structure Overview */}
          <div className="sat-card" style={{ marginBottom: '36px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FileText size={20} style={{ color: '#059669' }} /> How Digital SAT English Differs From Legacy Paper SAT
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
              On the Digital SAT, there are <strong>no longer any long 800-word reading passages</strong> with 10 questions each. Instead, every single question features its own brief passage (typically 25 to 150 words). Questions appear in a predictable sequence: Vocabulary and Structure first, then Central Ideas and Graphs, followed by Grammar Conventions, and ending with Rhetorical Synthesis notes.
            </p>
            <div className="sat-grid sat-grid-2">
              <div className="sat-callout sat-callout-emerald" style={{ margin: 0, padding: '12px 16px' }}>
                <strong style={{ color: '#064e3b' }}>Module 1:</strong> 27 Questions in 32 Minutes (~71 seconds/question)
              </div>
              <div className="sat-callout sat-callout-blue" style={{ margin: 0, padding: '12px 16px' }}>
                <strong style={{ color: '#1e3a8a' }}>Module 2:</strong> 27 Questions in 32 Minutes (Adaptive Difficulty)
              </div>
            </div>
          </div>

          {/* 4 Core Domains */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Target size={26} />
              The 4 Reading & Writing Domains
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {domains.map((d, idx) => (
                <div key={idx} className="sat-card">
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{d.name}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '12px', lineHeight: 1.6 }}>{d.description}</p>
                  <div className="sat-callout sat-callout-emerald" style={{ margin: 0, padding: '10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} style={{ color: '#059669', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.86rem', color: '#064e3b' }}>
                        <strong style={{ color: '#064e3b' }}>High-Scorer Strategy:</strong> {d.strategy}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Rhetorical Synthesis Cheat Sheet */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Sparkles size={26} />
              The 15-Second Rhetorical Synthesis Hack
            </h2>

            <div style={{ background: '#f8fafc', color: '#1e293b', borderRadius: '16px', padding: '28px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.6, marginBottom: '16px' }}>
                Rhetorical Synthesis questions present a list of 4–5 bullet points from a student's research notes. <strong>Do NOT read the bullet points first!</strong>
              </p>
              <div className="sat-code-block" style={{ margin: 0 }}>
{`Step 1: Read the prompt sentence at the very bottom: "The student wants to [GOAL]."

Step 2: Identify the operative goal word:
  • Goal: "Emphasize a difference" → Pick choice with "unlike", "whereas", "while".
  • Goal: "Introduce the book to a new audience" → Pick choice with author, title, and year.
  • Goal: "Illustrate an example of migration" → Pick choice with specific animal and route.

Step 3: Only check bullet points to verify that the facts in your selected choice are accurate.`}
              </div>
            </div>
          </section>

          {/* Cross Link to Grammar Guide */}
          <div className="sat-callout sat-callout-emerald" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#064e3b', marginBottom: '4px' }}>Need Detailed Punctuation Rules?</h3>
              <p style={{ fontSize: '0.88rem', color: '#065f46', margin: 0 }}>
                Read our dedicated guide on commas, semicolons, dashes, and dangling modifiers.
              </p>
            </div>
            <Link
              to="/article/sat-grammar-rules-digital-reading-writing-guide"
              className="sat-badge sat-badge-emerald"
              style={{ textDecoration: 'none', padding: '8px 16px', fontSize: '0.85rem', fontWeight: 800 }}
            >
              Grammar Guide →
            </Link>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> Assess Verbal Accuracy
              </div>
              <h3 className="sat-cta-title">Evaluate Your Reading & Writing Score</h3>
              <p className="sat-cta-desc">
                Take our free 24-question adaptive diagnostic. Discover whether grammar mechanics or craft & structure vocabulary are your primary growth opportunity.
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
              Frequently Asked Questions: SAT English & Reading
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'How many vocabulary questions are on the Digital SAT Reading & Writing section?',
                  a: 'Words in Context questions make up approximately 18% to 22% of the Reading & Writing section (around 10 to 12 questions across both modules). Questions test academic vocabulary in natural context rather than obscure dictionary words.'
                },
                {
                  q: 'Are historical speeches and poetry passages included on the test?',
                  a: 'Yes. The College Board includes short excerpts from 19th and 20th-century literature, classic poetry (such as Emily Dickinson or Langston Hughes), humanities essays, and scientific research abstracts.'
                },
                {
                  q: 'How do transitions work on the Digital SAT?',
                  a: 'Transition questions test the logical relationship between two consecutive sentences. You must classify whether the second sentence continues the thought (Furthermore), contradicts the thought (However), or shows a consequence (Therefore).'
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
            <Link to="/article/sat-requirements-uae-top-universities-harvard" className="sat-nav-prev">
              ← SAT University Requirements Guide
            </Link>
            <Link to="/article/what-does-sat-stand-for-digital-sat-explained" className="sat-nav-next">
              Next: What Does SAT Stand For? Digital SAT Explained →
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default SatEnglishReadingWritingGuide;
