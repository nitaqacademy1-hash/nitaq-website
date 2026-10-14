import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calculator, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Sliders, ChevronRight, BarChart3, Sparkles
} from 'lucide-react';

const DesmosSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const [activeTab, setActiveTab] = useState('systems');

  const desmosStrategies = [
    {
      id: 'systems',
      title: '1. Solving Linear & Non-Linear Systems Instantly',
      badge: 'High Speed Hack',
      concept: 'Type both equations directly into Desmos. Look for the grey point(s) where the graphs intersect.',
      code: 'Line 1: 3x - 4y = 12\nLine 2: y = -2x + 7\nClick intersection: (3.636, -0.273) -> Convert exact (40/11, -3/11)',
      tip: 'Desmos allows equations in standard form (Ax + By = C). You do NOT need to isolate y first!'
    },
    {
      id: 'regressions',
      title: '2. The Quadratic & Exponential Regression Trick (~)',
      badge: 'Game Changer',
      concept: 'When given points or table values and asked to find quadratic constants (a, b, c), use the regression operator (~).',
      code: 'Enter table with coordinates (x1, y1): (1, 5), (2, 11), (3, 19)\nType in line 2: y1 ~ ax1^2 + bx1 + c\nDesmos instantly solves: a = 1, b = 3, c = 1',
      tip: 'The tilde (~) key triggers Desmos regression mode. Never do 3-variable substitution manually.'
    },
    {
      id: 'sliders',
      title: '3. Sliders for Unknown Constants (a, k, c)',
      badge: 'Visual Solution',
      concept: 'When a problem asks "For what value of k does the equation have no solution?", add an interactive slider for k.',
      code: 'Equation: 2x^2 + 8x + k = 0\nClick "add slider: k"\nDrag k until the parabola touches the x-axis once (tangent) or floats above it (no real solutions).',
      tip: 'For zero solutions, drag k so the graph never intersects the x-axis (k > 8).'
    },
    {
      id: 'zeros',
      title: '4. Finding Roots, Vertices & Maximums',
      badge: 'Zero Derivation',
      concept: 'Any quadratic, cubic, or rational equation f(x) can be graphed. Desmos highlights critical points automatically.',
      code: 'Type: y = -4.9t^2 + 24t + 1.8\nClick grey vertex dot: (2.449, 31.188)\nMaximum height = 31.19 meters at time t = 2.45 seconds.',
      tip: 'Desmos places automatic grey clickable dots on all x-intercepts, y-intercepts, and local extrema.'
    },
    {
      id: 'circles',
      title: '5. Circle Equations & Tangents',
      badge: 'Geometry Hack',
      concept: 'Test circle standard form (x - h)^2 + (y - k)^2 = r^2 or general form without completing the square.',
      code: 'Type: x^2 + y^2 - 6x + 8y - 25 = 0\nDesmos graphs the complete circle instantly.\nCenter is visual at (3, -4), and radius is distance to edge (r ≈ 7.07).',
      tip: 'Need to find if a line is tangent to a circle? Graph both and see if they touch at exactly one single point.'
    }
  ];

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
            <span>Desmos SAT Guide</span>
          </nav>
        </div>
      </div>

      <article className="sat-guide-container">
        {/* Header */}
        <header className="sat-guide-header">
          <span className="sat-guide-category-badge">
            <Calculator size={14} /> Digital SAT Math Masterclass • Desmos Guide
          </span>
          <h1 className="sat-guide-title">
            Desmos SAT Guide: Top Calculator Strategies for Digital SAT Math
          </h1>
          <p className="sat-guide-lead">
            Unlock the full power of the built-in Desmos graphing calculator. Learn regression formulas, slider hacks, root-finding shortcuts, and system-solving tricks to secure an 800 Math score.
          </p>

          <div className="sat-guide-meta-row">
            <span className="sat-guide-meta-item">
              <Clock size={15} color="#166534" /> 12-Minute Masterclass
            </span>
            <span className="sat-guide-meta-item">
              <ShieldCheck size={15} color="#166534" /> College Board Bluebook Compliant
            </span>
            <span className="sat-guide-meta-item">
              <Sparkles size={15} color="#166534" /> 800-Level Desmos Strategies
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <img
          src="/images/sat_v2.webp"
          alt="Desmos Graphing Calculator Strategies for Digital SAT Math"
          className="sat-guide-featured-img"
        />

        <div className="sat-guide-content">
          {/* Important Policy Callout */}
          <div className="sat-alert-box alert-emerald">
            <CheckCircle2 size={24} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 className="sat-alert-title">Desmos is Allowed on the Entire Digital SAT Math Section</h3>
              <p className="sat-alert-desc">
                Unlike the legacy paper SAT, there is <strong>no longer any "No-Calculator" section</strong>. Desmos is integrated directly into Bluebook for all 44 Math questions. High-scoring UAE students use Desmos to solve 50% to 65% of test items in under 30 seconds each.
              </p>
            </div>
          </div>

          {/* Interactive Strategy Selector */}
          <h2>
            <Sliders size={24} color="#166534" />
            The 5 Essential Desmos Hacks for UAE SAT Takers
          </h2>
          <p>
            Select a strategy below to inspect the syntax, equation shortcuts, and pro-tips tested on Module 2 hard math questions:
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
            {desmosStrategies.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveTab(s.id)}
                style={{
                  background: activeTab === s.id ? '#166534' : '#f1f5f9',
                  color: activeTab === s.id ? '#ffffff' : '#334155',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '10px 18px',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {s.title.split('.')[1] || s.title}
              </button>
            ))}
          </div>

          {/* Active Strategy Card */}
          {desmosStrategies.filter(s => s.id === activeTab).map((item) => (
            <div key={item.id} className="sat-card" style={{ marginBottom: '36px', padding: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>{item.title}</h3>
                <span className="sat-badge sat-badge-open">{item.badge}</span>
              </div>
              <p style={{ fontSize: '0.98rem', color: '#475569', marginBottom: '18px', lineHeight: 1.6 }}>{item.concept}</p>
              
              <div style={{ background: '#f8fafc', color: '#0f172a', border: '1px solid #e2e8f0', padding: '18px 20px', borderRadius: '12px', fontFamily: 'monospace', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.6, whiteSpace: 'pre-wrap', marginBottom: '18px' }}>
                {item.code}
              </div>

              <div className="sat-alert-box alert-blue" style={{ margin: 0, padding: '14px 18px' }}>
                <AlertCircle size={20} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '0.9rem', color: '#0369a1' }}>
                  <strong>Pro-Tip:</strong> {item.tip}
                </span>
              </div>
            </div>
          ))}

          {/* When to use Desmos vs Algebra */}
          <h2>
            <BarChart3 size={24} color="#166534" />
            When Desmos is Faster vs. When Pencil-and-Paper Algebra Wins
          </h2>

          <div className="sat-table-wrap">
            <table className="sat-table">
              <thead>
                <tr>
                  <th>Question Type</th>
                  <th>Best Approach</th>
                  <th>Strategic Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Systems of linear / non-linear equations</strong></td>
                  <td><span className="sat-badge sat-badge-open">Desmos (Intersection)</span></td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Takes 10 seconds. Eliminates substitution arithmetic and sign errors.</td>
                </tr>
                <tr>
                  <td><strong>Find maximum or minimum of a quadratic</strong></td>
                  <td><span className="sat-badge sat-badge-open">Desmos (Click vertex)</span></td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>No need to complete the square or calculate -b/(2a).</td>
                </tr>
                <tr>
                  <td><strong>Abstract constant problems with no numbers</strong></td>
                  <td><span className="sat-badge sat-badge-future">Algebraic Theory</span></td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>When equations contain multiple variables (a, b, c, x), Desmos cannot isolate constants without test numbers.</td>
                </tr>
                <tr>
                  <td><strong>Circle equations and radii</strong></td>
                  <td><span className="sat-badge sat-badge-open">Desmos (Direct form)</span></td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Instantly displays diameter, center coordinates, and tangent points.</td>
                </tr>
                <tr>
                  <td><strong>Simple one-step algebraic manipulations</strong></td>
                  <td><span className="sat-badge sat-badge-past">Mental / Handheld</span></td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Typing a simple fraction into Desmos takes longer than solving by hand.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div>
              <div className="sat-cta-eyebrow">
                <Award size={15} /> Assess Your Math Speed & Accuracy
              </div>
              <h3 className="sat-cta-title">Take Nitaq's Free SAT Math Diagnostic</h3>
              <p className="sat-cta-desc">
                Test your speed on algebra, advanced math, and geometry questions. See whether calculator shortcuts or conceptual gaps are holding back your score.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn-primary">
              Start Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <h2>
            <HelpCircle size={24} color="#166534" />
            Frequently Asked Questions: Desmos on SAT Math
          </h2>

          <div className="sat-faq-wrap">
            {[
              {
                q: 'What is the "James Lu SAT Desmos" method students talk about?',
                a: 'Popularized by SAT prep educators, this refers to using regression notation (~), table points, and variable sliders in Desmos to solve complex quadratic and polynomial problems without doing pencil-and-paper algebra. At Nitaq Academy, we incorporate these visual techniques into our weekly math drills.'
              },
              {
                q: 'Can I bring my handheld TI-84 or Casio calculator in addition to Desmos?',
                a: 'Yes! College Board rules allow you to bring an approved handheld graphing or scientific calculator to your UAE test center alongside the in-app Desmos calculator. Many students use their handheld for rapid arithmetic and Desmos for graphing intersections.'
              },
              {
                q: 'How do I convert a decimal answer to a fraction in Desmos?',
                a: 'Whenever an output is a non-integer, a small circle with a fraction icon [a/b] appears on the left side of the answer box. Click it, and Desmos immediately converts the decimal to a simplified fraction.'
              },
              {
                q: 'Does Desmos have degree and radian modes for trigonometry?',
                a: 'Yes. Click the "Wrench" icon (graph settings) in the top-right corner of the Desmos window. At the bottom, switch between "Radians" and "Degrees". For Digital SAT questions involving triangles, make sure your calculator is set to Degrees.'
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
            <Link to="/article/bluebook-sat-guide-digital-exam-app">
              ← Bluebook App Testing Software Guide
            </Link>
            <Link to="/article/sat-suite-question-bank-practice-guide">
              Next: SAT Suite Question Bank Practice Guide →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default DesmosSatGuide;
