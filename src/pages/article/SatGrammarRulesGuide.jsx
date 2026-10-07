import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, ChevronRight, CheckCircle2, Award, Target, 
  HelpCircle, BookOpen, AlertCircle, Laptop, ShieldCheck, ArrowRight,
  FileText, CheckSquare, Sparkles, MapPin, PhoneCall, Layers, Bookmark,
  Split, Filter, Check
} from 'lucide-react';

const SatGrammarRulesGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Interactive Filter for Grammar Rules
  const [activeCategory, setActiveCategory] = useState('all');

  const grammarRules = [
    {
      category: 'punctuation',
      title: '1. Semicolons & Periods are Grammatically Identical',
      rule: 'A semicolon (;) and a period (.) both separate two independent clauses (complete sentences). If two answer choices only differ by a period vs. a semicolon, both are wrong.',
      example: 'Incorrect: The test is adaptive, it adjusts based on Module 1 performance.\nCorrect: The test is adaptive; it adjusts based on Module 1 performance.\nAlso Correct: The test is adaptive. It adjusts based on Module 1 performance.',
      tip: 'Formula: [Independent Clause] ; [Independent Clause]. Never use a comma alone to connect two full sentences (Comma Splice).'
    },
    {
      category: 'punctuation',
      title: '2. The Colon (:) Requires an Independent Clause First',
      rule: 'Whatever comes BEFORE a colon MUST be a complete standalone sentence. What follows can be an explanation, list, or single emphasizing word.',
      example: 'Incorrect: The student mastered three key skills: Desmos, grammar, and pacing.\nWait—"The student mastered three key skills" is an independent clause, so this is CORRECT!\nIncorrect: The student mastered: Desmos, grammar, and pacing. (Never put a colon directly after a verb or preposition).',
      tip: 'Test: Read the sentence up to the colon. If it could end with a period, the colon is permitted.'
    },
    {
      category: 'punctuation',
      title: '3. Dashes (—) Work in Pairs or as an Emphatic Colon',
      rule: 'A pair of em-dashes functions like parentheses for non-essential clauses. A single em-dash functions like a colon.',
      example: 'Example (Pair): Two students—Amina and Omar—scored above 1500 on their first attempt.\nExample (Single): Nitaq Academy focuses on one primary metric—demonstrated score growth.',
      tip: 'If an em-dash opens a parenthetical remark, it MUST close with an em-dash, not a comma.'
    },
    {
      category: 'agreement',
      title: '4. Subject-Verb Agreement: Strip Prepositional Phrases',
      rule: 'The College Board hides the true subject behind prepositional phrases and non-essential clauses to trick you into matching the verb with the nearest noun.',
      example: 'Incorrect: The score of the three students were exceptional.\nCorrect: The score [of the three students] was exceptional. (The true subject is singular: "score").',
      tip: 'Mentally cross out anything between commas or starting with "of", "in", "with", "by", or "to". Match the remaining noun with the verb.'
    },
    {
      category: 'agreement',
      title: '5. Pronoun-Antecedent Clarity: Avoid Vague Pronouns',
      rule: 'Every pronoun (it, they, this, that) must refer to one unmistakable singular or plural noun. Singular collective nouns (team, committee, institution) take "it", not "they".',
      example: 'Incorrect: When American University of Sharjah reviewed the application, they awarded a scholarship.\nCorrect: When American University of Sharjah reviewed the application, it awarded a scholarship.',
      tip: 'If an answer choice replaces a pronoun with the actual specific noun, it is frequently the correct answer because the College Board prioritizes precision.'
    },
    {
      category: 'modifiers',
      title: '6. Dangling Modifiers: The Subject Must Follow the Comma',
      rule: 'An introductory descriptive phrase that lacks a subject must be immediately followed by the person or thing performing the action.',
      example: 'Incorrect: Scoring 1520 on the Digital SAT, the scholarship was awarded to Layla.\nCorrect: Scoring 1520 on the Digital SAT, Layla was awarded the scholarship.',
      tip: 'Ask: "Who did the action in the opening clause?" That exact noun MUST be the first word after the comma.'
    },
    {
      category: 'structure',
      title: '7. Parallel Structure in Lists and Correlatives',
      rule: 'Items in a list or compared elements must follow the exact same grammatical structure (all verbs, all nouns, or all infinitives).',
      example: 'Incorrect: He excels at algebraic derivation, reading dense passages, and to manage test pacing.\nCorrect: He excels at algebraic derivation, reading dense passages, and managing test pacing.',
      tip: 'Watch for correlative pairs: "Not only X... but also Y", "Neither X... nor Y", "Either X... or Y". X and Y must be parallel.'
    },
    {
      category: 'rhetoric',
      title: '8. Transitions: Categorize into Continuer, Contradictor, or Cause',
      rule: 'Do not read transitions by "feel". Categorize the relationship between Sentence 1 and Sentence 2 into 3 buckets: Continuer (Furthermore, In addition), Contradictor (However, Nevertheless), or Cause-and-Effect (Consequently, Therefore).',
      example: 'Sentence 1: The math module requires calculator agility.\nSentence 2: Successful students practice Desmos shortcuts weekly.\nRelationship: Cause-and-Effect → Use "Consequently" or "Therefore".',
      tip: 'Step 1: Read Sentence 1 and Sentence 2 without looking at the choices. Step 2: Decide whether Idea 2 agrees, disagrees, or explains Idea 1. Step 3: Match.'
    }
  ];

  const filteredRules = activeCategory === 'all' 
    ? grammarRules 
    : grammarRules.filter(r => r.category === activeCategory);

  const faqs = [
    {
      question: "How many grammar questions are on the Digital SAT Reading & Writing section?",
      answer: "Standard English Conventions (grammar, punctuation, and sentence structure) account for approximately 11 to 15 questions per test—roughly 20% to 28% of the total Reading & Writing section. Because these questions are rule-based, they offer the highest return on investment for rapid score improvement."
    },
    {
      question: "What are the most tested grammar rules on the Digital SAT?",
      answer: "The three most frequently tested areas on the Digital SAT are: 1) Clause boundaries (semicolons, colons, comma splices), 2) Subject-verb agreement with intervening prepositional phrases, and 3) Dangling modifiers. Mastering these three rules alone can raise your Reading & Writing score by 50 to 80 points."
    },
    {
      question: "How does the Digital SAT test grammar differently than the old paper SAT?",
      answer: "On the paper SAT, grammar was tested in long multi-paragraph essays. On the Digital SAT, each question is a standalone short paragraph of 25 to 50 words. You answer one question per passage, allowing you to quickly isolate sentence boundaries and modifier placement without losing context."
    },
    {
      question: "What is the difference between a colon (:) and a semicolon (;)?",
      answer: "A semicolon connects two independent clauses (two full sentences). A colon requires a complete sentence on its left, but whatever comes after the colon can be an explanation, an example, or a list, and does not need to be a full sentence."
    },
    {
      question: "How can I improve my SAT Reading & Writing score above 700?",
      answer: "To score 700+, you must achieve 100% accuracy on all Standard English Conventions questions (grammar is free points). You then need systematic strategies for rhetorical synthesis (bullet-point notes questions) and vocabulary in context. At Nitaq Academy in Sharjah, we conduct targeted grammar drills until pattern recognition becomes automatic."
    }
  ];

  return (
    <main className="article-details-page">
      <SEO />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>SAT Grammar Rules Guide</span>
          </nav>
        </div>
      </div>

      <article className="article-container section-padding">
        <div className="container">
          
          {/* Article Header */}
          <div className="article-header" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} /> Official SAT Reading &amp; Writing Blueprint
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
              SAT Grammar Rules: The Complete Digital SAT Reading &amp; Writing Guide (2026)
            </h1>
            <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7 }}>
              Master the official Standard English Conventions tested on the Digital SAT. Learn the clause boundary formulas, modifier rules, punctuation shortcuts, and transition frameworks that guarantee 750+ on the Reading &amp; Writing section.
            </p>

            <div className="article-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '24px', alignItems: 'center' }}>
              <div className="meta-item">
                <div className="author-avatar" style={{ background: '#1a5c2e', color: 'white', fontWeight: 'bold' }}>NA</div>
                <div className="meta-text">
                  <span className="meta-label">Author</span>
                  <span className="meta-value">NITAQ ACADEMY Academic Editorial</span>
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
                  <span className="meta-value">10 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="article-featured-img" style={{ maxWidth: '900px', margin: '0 auto 50px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)' }}>
            <img 
              src="/images/sat_v2.webp" 
              alt="SAT Grammar Rules - Complete Digital SAT Reading and Writing Guide" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>

          <div className="article-content" style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.8, color: '#334155' }}>
            
            {/* Why Grammar is Your Highest-ROI Score Hack */}
            <section style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', marginBottom: '45px' }}>
              <h2 style={{ fontSize: '1.35rem', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={22} color="#1a5c2e" /> Why SAT Grammar is the Fastest Route to 750+
              </h2>
              <p>
                Unlike reading comprehension questions—which require interpreting nuanced historical passages or subtle scientific arguments—<strong>Standard English Conventions questions test fixed, mathematical rules</strong>. A comma splice is always incorrect. A singular subject always takes a singular verb. A colon always demands an independent clause.
              </p>
              <p style={{ margin: 0, fontWeight: 600, color: '#1a5c2e' }}>
                When you master the 8 core rules below, you will answer every grammar question on the test in 15 to 20 seconds with 100% certainty, banking valuable time for hard vocabulary and analytical questions.
              </p>
            </section>

            {/* Category Filter Buttons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px' }}>
              {[
                { id: 'all', label: 'All Rules' },
                { id: 'punctuation', label: 'Punctuation & Clauses' },
                { id: 'agreement', label: 'Agreement & Pronouns' },
                { id: 'modifiers', label: 'Modifiers' },
                { id: 'structure', label: 'Parallel Structure' },
                { id: 'rhetoric', label: 'Transitions' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    background: activeCategory === cat.id ? '#1a5c2e' : '#f1f5f9',
                    color: activeCategory === cat.id ? 'white' : '#475569',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Grammar Rules Cards */}
            <section style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '50px' }}>
              {filteredRules.map((rule, idx) => (
                <div 
                  key={idx} 
                  style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 14px rgba(0,0,0,0.03)' }}
                >
                  <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '12px' }}>{rule.title}</h3>
                  <p style={{ color: '#334155', marginBottom: '16px' }}>{rule.rule}</p>
                  
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '10px', borderLeft: '4px solid #1a5c2e', marginBottom: '14px', fontFamily: 'monospace', fontSize: '0.92rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                    {rule.example}
                  </div>

                  <div style={{ background: '#ecfdf5', padding: '10px 14px', borderRadius: '8px', color: '#065f46', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} /> <strong>Pro Test Tip:</strong> {rule.tip}
                  </div>
                </div>
              ))}
            </section>

            {/* DIAGNOSTIC CTA BANNER */}
            <section style={{ background: 'linear-gradient(135deg, #0d3b1e 0%, #1a5c2e 100%)', borderRadius: '20px', padding: '40px 30px', color: 'white', marginBottom: '50px', textAlign: 'center', boxShadow: '0 12px 30px rgba(26,92,46,0.25)' }}>
              <span style={{ background: 'rgba(255,255,255,0.15)', color: '#86efac', padding: '6px 16px', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase' }}>
                Test Your Grammar Readiness
              </span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: 'white', marginTop: '16px', marginBottom: '14px' }}>
                How Strong is Your Digital SAT Reading &amp; Writing?
              </h2>
              <p style={{ color: '#e2e8f0', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 28px' }}>
                Take Nitaq Academy's free 25-minute diagnostic test. Our adaptive assessment evaluates your exact accuracy on Standard English Conventions, Craft &amp; Structure, and Information &amp; Ideas.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link 
                  to="/sat/diagnostic" 
                  style={{ background: '#22c55e', color: '#052e16', fontWeight: 700, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  Take Free Diagnostic Assessment <ArrowRight size={18} />
                </Link>
                <Link 
                  to="/sat-preparation-sharjah" 
                  style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', color: 'white', fontWeight: 600, padding: '14px 28px', borderRadius: '10px', textDecoration: 'none' }}
                >
                  Explore SAT Coaching in Sharjah
                </Link>
              </div>
            </section>

            {/* FAQs */}
            <section id="faqs" style={{ marginBottom: '50px' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '24px' }}>
                Frequently Asked Questions: Digital SAT Grammar
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {faqs.map((faq, idx) => (
                  <div 
                    key={idx} 
                    style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden' }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{ width: '100%', padding: '18px 22px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '1.05rem', color: '#0f172a' }}
                    >
                      <span>{faq.question}</span>
                      <ChevronRight 
                        size={18} 
                        style={{ transform: openFaq === idx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', color: '#1a5c2e', flexShrink: 0 }} 
                      />
                    </button>
                    {openFaq === idx && (
                      <div style={{ padding: '0 22px 18px', color: '#475569', lineHeight: 1.7, fontSize: '0.98rem', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ADMISSIONS CONTACT FOOTER CARD */}
            <div className="article-contact-footer" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', textAlign: 'center', marginTop: '40px' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
                Need 1-on-1 Help to Reach 750+ on SAT Reading &amp; Writing?
              </h3>
              <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.95rem' }}>
                Our experienced SAT verbal trainers at Nitaq Academy in Al Majaz 3, Sharjah help students master timing, eliminate careless errors, and score in the 99th percentile.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/971527569908" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ background: '#1a5c2e', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <PhoneCall size={16} /> WhatsApp Admissions: +971 52 756 9908
                </a>
                <Link 
                  to="/contact" 
                  style={{ background: 'white', color: '#0f172a', border: '1px solid #cbd5e1', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}
                >
                  Visit Academy: Al Majaz 3, Sharjah
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </main>
  );
};

export default SatGrammarRulesGuide;
