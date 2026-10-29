import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calculator, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Code, Target, Crosshair, ChevronRight, Sparkles, Calendar
} from 'lucide-react';

const SatMathPracticeGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const traps = [
    {
      title: '1. The Discriminant & Unknown Quadratic Constant',
      trap: 'College Board asks for the value of "k" such that ax² + bx + k = 0 has "no real solutions" or "exactly one solution".',
      example: 'Equation: 3x² - 12x + k = 0 has exactly one real solution. Find k.\n\nTrap: Students forget that "one solution" means discriminant b² - 4ac = 0.\nSolution: (-12)² - 4(3)(k) = 0 => 144 - 12k = 0 => k = 12.\nDesmos Check: Type y = 3x² - 12x + 12. Notice vertex touches the x-axis at x = 2 exactly once.',
      takeaway: 'One real solution: b² - 4ac = 0. Two solutions: b² - 4ac > 0. No real solutions: b² - 4ac < 0.'
    },
    {
      title: '2. Extraneous Solutions in Rational Equations',
      trap: 'Solving rational equations where one derived solution makes the denominator zero.',
      example: 'Solve: (x² - 9) / (x - 3) = 6\n\nTrap: Factoring gives (x - 3)(x + 3)/(x - 3) = 6 => x + 3 = 6 => x = 3.\nHowever, plugging x = 3 back into original equation makes denominator (3 - 3) = 0 (undefined).\nSolution: No real solution exists for this equation.',
      takeaway: 'Always plug solutions back into original denominators to verify they do not produce division by zero.'
    },
    {
      title: '3. Function Translations: f(x + c) vs f(x) + c',
      trap: 'Horizontal shifts move in the OPPOSITE direction of the sign inside the parentheses.',
      example: 'Given graph f(x), what is the vertex of g(x) = f(x - 4) + 3 if f(x) vertex is (1, 2)?\n\nTrap: Moving left 4 units instead of right.\nSolution: x-coordinate moves RIGHT by 4 (1 + 4 = 5). y-coordinate moves UP by 3 (2 + 3 = 5). New vertex = (5, 5).',
      takeaway: 'Inside parentheses = horizontal shift (opposite sign). Outside parentheses = vertical shift (same sign).'
    },
    {
      title: '4. Exponential Growth Base (1 + r) vs Growth Rate',
      trap: 'Confusing the annual multiplier with the percentage increase.',
      example: 'A population increases by 7.5% every year. Which function models the population after t years?\nA) P(t) = P0(0.075)^t   B) P(t) = P0(1.075)^t\n\nTrap: Picking (0.075)^t, which represents losing 92.5% of population each year!\nSolution: B is correct because growth multiplier = (1 + 0.075) = 1.075.',
      takeaway: 'Growth multiplier = 1 + r. Decay multiplier = 1 - r.'
    },
    {
      title: '5. Complementary Angle Trigonometry',
      trap: 'For any acute angle x in a right triangle, sin(x) = cos(90° - x).',
      example: 'If sin(3a - 15°) = cos(2a + 25°), find the value of a.\n\nTrap: Trying to compute inverse sine or radians.\nSolution: Because sin(A) = cos(B), A + B = 90°.\n(3a - 15) + (2a + 25) = 90 => 5a + 10 = 90 => 5a = 80 => a = 16.',
      takeaway: 'Whenever you see sin(angle1) = cos(angle2) on the SAT, immediately set: angle1 + angle2 = 90°.'
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
            <span>SAT Math Practice & Traps</span>
          </nav>
        </div>
      </div>

      <article className="article-container section-padding">
        <div className="container">
          {/* Article Header */}
          <div className="article-header" style={{ maxWidth: '900px', margin: '0 auto 40px' }}>
            <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Crosshair size={14} /> Digital SAT Math Trap Analysis • Practice Guide (2026–2027)
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
              SAT Math Practice: Questions, Strategy & Common Traps
            </h1>
            <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
              Master the trickiest question types on the Digital SAT Math section. Learn the algebraic traps College Board sets in Module 2 and how to verify answers using Desmos in seconds.
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
                  <span className="meta-value">10 min read</span>
                </div>
              </div>
              <div className="meta-divider"></div>
              <div className="meta-item">
                <ShieldCheck size={18} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-label">Level</span>
                  <span className="meta-value">800-Level Hard Questions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="article-featured-img" style={{ maxWidth: '940px', margin: '0 auto 40px' }}>
            <img src="/images/sat_v2.webp" alt="SAT Math Practice: Questions, Strategy & Common Traps" />
          </div>

          {/* Main Content */}
          <div className="sat-guide-container" style={{ maxWidth: '940px', margin: '0 auto' }}>
          {/* Intro Callout */}
          <div className="sat-callout sat-callout-emerald">
            <div className="sat-callout-title">
              <Target size={20} />
              <span>Why 700+ Scorers Still Lose Marks</span>
            </div>
            <p className="sat-callout-text">
              Most students who score 650–720 on SAT Math understand the formulas. Where they lose marks is not lack of math knowledge, but falling for <strong>deliberately engineered traps</strong>: deceptive answer choices designed around common careless mistakes (such as solving for <em>x</em> instead of <em>2x + 1</em>, or missing negative signs).
            </p>
          </div>

          {/* 5 Hard Traps Breakdown */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Crosshair size={26} />
              The 5 Most Frequent Traps in Module 2
            </h2>

            <div className="sat-grid" style={{ gridTemplateColumns: '1fr', gap: '24px' }}>
              {traps.map((t, idx) => (
                <div key={idx} className="sat-card">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{t.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#475569', marginBottom: '16px', lineHeight: 1.6 }}>
                    <strong style={{ color: '#0f172a' }}>The Trap:</strong> {t.trap}
                  </p>

                  <div className="sat-code-block" style={{ marginBottom: '16px' }}>
                    {t.example}
                  </div>

                  <div className="sat-callout sat-callout-emerald" style={{ margin: 0, padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <CheckCircle2 size={18} style={{ color: '#059669', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.88rem', color: '#064e3b' }}>
                        <strong style={{ color: '#064e3b' }}>Golden Rule:</strong> {t.takeaway}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> Diagnostic Practice Test
              </div>
              <h3 className="sat-cta-title">Test Your Skills Under Adaptive Conditions</h3>
              <p className="sat-cta-desc">
                Take our free 24-question Digital SAT practice test. Discover whether you are falling for trap answer choices in Module 1 or Module 2.
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
              Frequently Asked Questions: SAT Math Practice
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'How many student-produced response (grid-in) questions are on the SAT Math section?',
                  a: 'Approximately 25% of the Math questions (roughly 5 to 6 questions per module) are student-produced responses where there are no multiple-choice options. You enter your numerical or fractional answer directly into a digital box.'
                },
                {
                  q: 'Can grid-in answers be negative on the Digital SAT?',
                  a: 'Yes! Unlike the legacy paper test, the Digital SAT supports negative numbers in the student-produced response input box. Negative fractions and decimals are also fully accepted.'
                },
                {
                  q: 'What should I do if a decimal answer does not truncate cleanly?',
                  a: 'If your answer is a repeating decimal like 2/3 (0.6666...), enter it either as the exact fraction "2/3" or fill the entire space with decimals: "0.666" or "0.667". Never round to "0.6" or "0.7" as Bluebook will mark it incorrect.'
                },
                {
                  q: 'What is the fastest way to verify an algebraic solution before submitting Module 2?',
                  a: 'Graph both sides of the equation in Desmos as two separate functions (y1 = Left Hand Side, y2 = Right Hand Side) and check where they intersect. If your algebraic root matches the x-coordinate of the intersection, your answer is 100% verified.'
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
            <Link to="/article/how-to-ace-sat-study-plan-guide" className="sat-nav-prev">
              ← How to Ace the SAT: Study Plan
            </Link>
            <Link to="/article/khan-academy-sat-vs-structured-coaching" className="sat-nav-next">
              Next: Khan Academy SAT vs. Structured Coaching →
            </Link>
          </nav>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SatMathPracticeGuide;
