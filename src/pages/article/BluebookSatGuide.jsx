import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Laptop, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Bookmark, Calculator, EyeOff, ChevronRight, Sparkles, Calendar
} from 'lucide-react';

const BluebookSatGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const tools = [
    {
      title: 'Built-in Desmos Calculator',
      val: 'All 44 Questions',
      icon: <Calculator size={22} color="#166534" />,
      desc: 'Permanently accessible on the top navigation bar throughout both Math modules. Features graphing, regression equations, and interactive sliders.'
    },
    {
      title: 'Testing Timer & Hide Feature',
      val: 'Auto 5-Min Alert',
      icon: <Clock size={22} color="#166534" />,
      desc: 'Counts down your remaining minutes per module. You can click "Hide" to reduce stress, but it automatically reappears at the 5-minute mark.'
    },
    {
      title: 'Mark for Review Flag',
      val: 'Visual Grid Tracker',
      icon: <Bookmark size={22} color="#166534" />,
      desc: 'Allows you to flag uncertain questions with one click. The question grid modal shows all flagged items before you submit the module.'
    },
    {
      title: 'Option Eliminator Strikethrough',
      val: 'Zero Error Clutter',
      icon: <EyeOff size={22} color="#166534" />,
      desc: 'Crosses out eliminated multiple-choice options, reducing cognitive fatigue when evaluating the remaining choices.'
    },
    {
      title: 'Formula Reference Sheet',
      val: '12 Geometry Formulas',
      icon: <Zap size={22} color="#166534" />,
      desc: 'Pop-up window with 12 standard geometry formulas (circles, triangles, spheres, cylinders) accessible at any second during Math.'
    },
    {
      title: 'Highlighter & Margin Notes',
      val: 'Active Reading',
      icon: <CheckCircle2 size={22} color="#166534" />,
      desc: 'Highlight words or phrases in Reading passages and annotate notes in the digital margin for fast text referencing.'
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
            <span>Bluebook SAT Guide</span>
          </nav>
        </div>
      </div>

      <article className="sat-guide-container section-padding">
        {/* Header */}
        <div className="article-header" style={{ maxWidth: '900px', margin: '40px auto 32px' }}>
          <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Laptop size={14} /> Official Test Software Guide (2026–2027)
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
            Bluebook SAT Guide: How the Digital SAT Test App Works
          </h1>
          <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
            Master the official College Board testing application. Explore built-in test tools, adaptive module routing, approved device requirements, and exam-day offline protocols for UAE students.
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
                <span className="meta-label">Verified</span>
                <span className="meta-value">College Board Bluebook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="article-featured-img" style={{ maxWidth: '940px', margin: '0 auto 40px' }}>
          <img
            src="/images/sat_v2.webp"
            alt="College Board Bluebook App Guide for Digital SAT"
          />
        </div>

        <div className="sat-guide-content">
          {/* Quick Summary Box */}
          <div className="sat-alert-box alert-emerald">
            <ShieldCheck size={24} color="#166534" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 className="sat-alert-title">What is the Bluebook™ App?</h3>
              <p className="sat-alert-desc">
                <strong>Bluebook™</strong> is the custom testing application created by the College Board to administer the Digital SAT, PSAT, and AP exams. You download Bluebook onto your personal laptop or iPad, complete your exam check-in 1 to 5 days prior, and use it at authorized UAE test centers. The app locks down your computer to prevent browsing, runs offline if Wi-Fi fluctuates, and submits encrypted answer files upon completion.
              </p>
            </div>
          </div>

          {/* Built-in Testing Tools */}
          <h2>
            <Zap size={24} color="#166534" />
            The 6 In-App Bluebook Tools You Must Master
          </h2>
          <p>
            The Bluebook exam interface includes built-in utility tools located in the top navigation header. Students who train specifically with these digital tools answer questions significantly faster than those relying solely on scratch paper:
          </p>

          <div className="sat-cards-grid">
            {tools.map((t, i) => (
              <div key={i} className="sat-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  {t.icon}
                  <span className="sat-card-tag" style={{ margin: 0 }}>{t.val}</span>
                </div>
                <div className="sat-card-val" style={{ fontSize: '1.15rem' }}>{t.title}</div>
                <p className="sat-card-desc">{t.desc}</p>
              </div>
            ))}
          </div>

          {/* Adaptive Routing Explanation */}
          <h2>
            <Laptop size={24} color="#166534" />
            How Bluebook's Multistage Adaptive Routing Works
          </h2>
          <p>
            The Digital SAT is divided into two sections: <strong>Reading & Writing</strong> (64 minutes, 54 questions) and <strong>Math</strong> (70 minutes, 44 questions). Each section consists of two timed modules.
          </p>

          <div className="sat-cards-grid">
            <div className="sat-card">
              <span className="sat-badge sat-badge-future" style={{ marginBottom: '10px' }}>Module 1 (Routing)</span>
              <h3 style={{ margin: '8px 0', fontSize: '1.2rem', color: '#0f172a' }}>Standard Difficulty Mix</h3>
              <p className="sat-card-desc">
                Contains an even mix of easy, medium, and hard questions. Your accuracy on Module 1 determines whether Bluebook routes you to the harder or easier Module 2.
              </p>
            </div>
            <div className="sat-card">
              <span className="sat-badge sat-badge-open" style={{ marginBottom: '10px' }}>Module 2 (Scored Range)</span>
              <h3 style={{ margin: '8px 0', fontSize: '1.2rem', color: '#0f172a' }}>Adaptive Branching</h3>
              <p className="sat-card-desc">
                Unlocking the <strong>harder Module 2</strong> is essential to achieve a score above 600 in that section. The easier Module 2 caps your maximum score even with 100% accuracy.
              </p>
            </div>
          </div>

          <div className="sat-alert-box alert-blue">
            <AlertCircle size={24} color="#0284c7" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 className="sat-alert-title" style={{ color: '#0369a1' }}>Key Examination Rule</h3>
              <p className="sat-alert-desc" style={{ color: '#0c4a6e' }}>
                Within any single module, you can move forward and backward freely, change answers, and review flagged questions. However, once you submit Module 1, you can never return to it.
              </p>
            </div>
          </div>

          {/* Approved Device Specifications Table */}
          <h2>
            <ShieldCheck size={24} color="#166534" />
            Approved Device Specifications for UAE Test Centers
          </h2>

          <div className="sat-table-wrap">
            <table className="sat-table">
              <thead>
                <tr>
                  <th>Device Type</th>
                  <th>Operating System</th>
                  <th>Minimum Battery</th>
                  <th>Center Guidelines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Windows Laptop</strong></td>
                  <td>Windows 10 or 11 (64-bit)</td>
                  <td>3+ Hours charge</td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Must not be in S Mode. Plug-in power not guaranteed at all school desks.</td>
                </tr>
                <tr>
                  <td><strong>Apple MacBook</strong></td>
                  <td>macOS 11.4 (Big Sur) or later</td>
                  <td>3+ Hours charge</td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>MacBook Air or Pro. External wired or Bluetooth mice are permitted.</td>
                </tr>
                <tr>
                  <td><strong>Apple iPad</strong></td>
                  <td>iPadOS 14 or later</td>
                  <td>3+ Hours charge</td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Requires a separate physical external keyboard. Stylus/Apple Pencil permitted.</td>
                </tr>
                <tr>
                  <td><strong>School Chromebook</strong></td>
                  <td>ChromeOS 102 or later</td>
                  <td>3+ Hours charge</td>
                  <td style={{ fontSize: '0.88rem', color: '#64748b' }}>Must be managed by your school with kiosk app permissions enabled.</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div>
              <div className="sat-cta-eyebrow">
                <Award size={15} /> Practice on True Adaptive Software
              </div>
              <h3 className="sat-cta-title">Test Your Baseline on Nitaq's Diagnostic</h3>
              <p className="sat-cta-desc">
                Experience adaptive test delivery and identify your strengths and improvement areas before taking your official Bluebook mock exams.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn-primary">
              Start Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <h2>
            <HelpCircle size={24} color="#166534" />
            Frequently Asked Questions: Bluebook App
          </h2>

          <div className="sat-faq-wrap">
            {[
              {
                q: 'What happens if my laptop loses internet connection during the test?',
                a: 'Do not panic. Bluebook is built to operate completely offline once the exam begins. If Wi-Fi drops, your answers continue saving locally. You will only need internet access again when the proctor instructs you to submit your final score file at the end.'
              },
              {
                q: 'Can I bring an external mouse or mouse pad to the test center?',
                a: 'Yes. An external wired or Bluetooth mouse is permitted on laptops and iPads. Top-scoring students frequently use a mouse because it speeds up Desmos slider manipulations.'
              },
              {
                q: 'How many official full-length practice tests are available on Bluebook?',
                a: 'As of 2026, the College Board provides 6 official full-length adaptive SAT practice tests directly inside Bluebook. Tests 1 through 4 are standard diagnostics, while Tests 5 and 6 feature recent digital item formats.'
              },
              {
                q: 'Can I use copy/paste or split-screen during the Bluebook test?',
                a: 'No. Bluebook operates in a secure lockdown mode. It disables screen recording, secondary monitors, copy-paste shortcuts, and background notifications until you exit the exam.'
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
            <Link to="/article/sat-dates-uae-2026-2027-test-dates">
              ← Check UAE SAT Dates & Deadlines
            </Link>
            <Link to="/article/desmos-sat-guide-math-calculator-strategies">
              Next: Top Desmos Calculator Hacks for 800 Math →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BluebookSatGuide;
