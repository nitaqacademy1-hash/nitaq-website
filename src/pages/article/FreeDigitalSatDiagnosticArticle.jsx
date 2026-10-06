import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import SATDiagnosticSection from '../../components/sat/SATDiagnosticSection';
import { 
  Calendar, Clock, ChevronRight, CheckCircle2, Award, Target, 
  HelpCircle, BookOpen, Trophy, Calculator, CheckSquare, 
  MessageCircle, Sparkles, MapPin, Laptop, ShieldCheck, ArrowRight,
  TrendingUp, BarChart3, AlertCircle, FileText
} from 'lucide-react';

const FreeDigitalSatDiagnosticArticle = () => {
  const publishDate = "August 28, 2026";

  // Score Estimator State
  const [baselineScore, setBaselineScore] = useState('1100');
  const [targetScore, setTargetScore] = useState('1500');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Interactive Readiness Checklist State
  const [checklist, setChecklist] = useState({
    baselineDone: false,
    desmosShortcuts: false,
    grammarRules: false,
    advancedMathQuadratics: false,
    errorLogCreated: false,
    timedMocks: false,
    bluebookTested: false,
    calculatorStrategy: false,
  });

  const toggleChecklistItem = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const totalChecklistItems = Object.keys(checklist).length;
  const readinessPercentage = Math.round((completedCount / totalChecklistItems) * 100);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const calculatedJump = Math.max(0, parseInt(targetScore) - parseInt(baselineScore));
  const prepDuration = calculatedJump > 350 
    ? '14 – 18 Weeks (Foundational Intensive)' 
    : calculatedJump > 200 
    ? '10 – 12 Weeks (Comprehensive Track)' 
    : '6 – 8 Weeks (Targeted High-Yield Sprint)';
  const studyHours = calculatedJump > 350 
    ? '7 – 9 Hours / Week' 
    : calculatedJump > 200 
    ? '5 – 7 Hours / Week' 
    : '3 – 5 Hours / Week';

  const faqs = [
    {
      question: "What is a Digital SAT diagnostic tool and why is it important?",
      answer: "A Digital SAT diagnostic tool is a specialized evaluation test designed to measure a student's baseline proficiency across all official College Board Math and Reading & Writing test domains. Unlike generic practice tests that only give you a raw score, an adaptive diagnostic evaluates your precise conceptual strengths and gaps, predicts your potential 400–1600 composite score, and generates customized study priorities so you do not waste time studying topics you have already mastered."
    },
    {
      question: "How long does the Nitaq Academy free SAT diagnostic test take?",
      answer: "The free diagnostic assessment takes approximately 25 to 30 minutes to complete. It contains 24 carefully balanced questions (12 Math and 12 Reading & Writing) mapped directly against the official 8 College Board domains, providing an accurate baseline without requiring a grueling 2-hour-and-14-minute exam sitting."
    },
    {
      question: "How accurate is the SAT score predictor on this diagnostic tool?",
      answer: "Our predictive scoring algorithm is calibrated against official College Board Bluebook scoring percentiles and item-response curves. By factoring in domain weights and difficulty-adjusted module performance, it provides a realistic baseline score within ±40 to ±60 points of an official full-length test, making it an exceptional self-evaluation benchmark."
    },
    {
      question: "Is this Digital SAT diagnostic assessment completely free for UAE students?",
      answer: "Yes, 100% free. High-school students across Sharjah, Dubai, Abu Dhabi, Ajman, and worldwide can take the diagnostic quiz, review step-by-step answer explanations, and download their personalized domain scorecard without any payment, hidden fees, or credit card requirements."
    },
    {
      question: "Can I use the Desmos graphing calculator during the diagnostic test?",
      answer: "Yes! The official Digital SAT allows an embedded graphing calculator on every single Math question. Our diagnostic questions are designed to test both algebraic manipulation and calculator efficiency, encouraging students to leverage Desmos sliders, intersection points, and regression tools."
    },
    {
      question: "How does the adaptive testing algorithm work on the Digital SAT?",
      answer: "The Digital SAT uses a multistage adaptive model. Section 1 (Module 1) provides a balanced mix of easy, medium, and hard questions. Your accuracy on Module 1 determines whether you receive an easier or harder Module 2. Mathematically, scoring 1200+ on either section requires unlocking the harder Module 2."
    },
    {
      question: "What domains and skills are evaluated in this SAT diagnostic tool?",
      answer: "The tool evaluates all 8 core College Board domains: Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry & Trigonometry in Mathematics; plus Craft & Structure, Information & Ideas, Standard English Conventions, and Expression of Ideas in Reading & Writing."
    },
    {
      question: "What SAT score is needed for top UAE universities like AUS, Khalifa, and NYU Abu Dhabi?",
      answer: "For the American University of Sharjah (AUS), engineering and business programs typically require 1200–1350+. For Khalifa University, 1250–1400+ is competitive. For NYU Abu Dhabi, successful applicants generally score 1450–1550+. High scores also qualify students for merit scholarships covering up to 50% to 100% of university tuition."
    },
    {
      question: "How do I interpret my diagnostic results and scorecard?",
      answer: "Your scorecard categorizes performance into Strong (75%+ accuracy), Developing (50%–74% accuracy), and Needs Review (<50% accuracy). It automatically ranks weak domains into High, Medium, and Low study priorities, giving you an actionable roadmap for targeted prep."
    },
    {
      question: "When should high school students in UAE take their first SAT diagnostic?",
      answer: "We recommend students take their first diagnostic assessment at the end of Grade 10 (Year 11) or the start of Grade 11 (Year 12). This allows 3 to 6 months of targeted study before the first official sitting in October or December of Grade 11, leaving ample time for superscoring retakes if needed."
    }
  ];

  return (
    <main className="article-details-page">
      <SEO
        title="Free Digital SAT Diagnostic Assessment & Self-Evaluation Guide (2026) | Nitaq Academy"
        description="Take Nitaq Academy's free Digital SAT diagnostic test with 24 adaptive questions, instant domain performance analytics, score prediction, and step-by-step answer explanations."
        keywords="SAT diagnostic tool, free SAT diagnostic test, Digital SAT assessment, SAT score predictor, digital sat quiz, SAT questions and answers, SAT self assessment, free sat practice quiz, digital sat evaluation, SAT math diagnostic, SAT reading writing assessment, SAT domain performance, digital sat readiness test, online sat quiz, sat test prep evaluation, sat practice test with explanations, digital sat mock exam, free sat question bank, sat diagnostic test sharjah, sat diagnostic test dubai uae, sat score baseline test, digital sat practice questions, sat sample test questions, sat math practice quiz, sat reading writing practice test, college board sat diagnostic, sat adaptive test simulation, sat study priority generator, nitaq academy sat diagnostic, free sat score assessment uae"
        faqSchema={faqs}
      />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="article-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>Free Digital SAT Diagnostic Assessment Guide</span>
          </nav>
        </div>
      </div>

      <article className="article-container section-padding">
        <div className="container">
          
          {/* Article Header */}
          <div className="article-header">
            <span className="article-category">Digital SAT Assessment &amp; Diagnostics</span>
            <h1 className="article-main-title">
              Free Digital SAT Diagnostic Assessment &amp; Self-Evaluation Guide (2026): Master the Adaptive Test &amp; Predict Your Score
            </h1>

            <div className="article-meta">
              <div className="meta-item">
                <div className="author-avatar">NA</div>
                <div className="meta-text">
                  <span className="meta-label">Author</span>
                  <span className="meta-value">NITAQ Academy Academic Board</span>
                </div>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <Calendar size={18} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-label">Published</span>
                  <span className="meta-value">{publishDate}</span>
                </div>
              </div>
              <div className="meta-divider" />
              <div className="meta-item">
                <Clock size={18} className="meta-icon" />
                <div className="meta-text">
                  <span className="meta-label">Read Time</span>
                  <span className="meta-value">16 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="article-featured-img">
            <img 
              src="/images/sat_v2.webp" 
              alt="Free Digital SAT Diagnostic Assessment Tool and Score Predictor - Nitaq Academy" 
            />
          </div>

          <div className="article-content-wrapper">
            <div className="article-main-content">

              {/* Lead Paragraph */}
              <p className="lead-text">
                Entering your SAT preparation without knowing your baseline score is like setting sail without a compass. The <strong>College Board Digital SAT</strong> is a computer-adaptive exam where early mistakes severely penalize your ceiling score. Taking a comprehensive <strong>free SAT diagnostic test</strong> with real <strong>SAT questions and answers</strong> is the single most effective way to identify your exact domain strengths, eliminate high-risk blind spots, and establish an accurate <strong>SAT score predictor</strong> before your official test date in the UAE or abroad.
              </p>

              {/* Quick Facts Box */}
              <div className="course-overview-box" style={{ background: '#f8faf9', border: '1px solid #c8ddd0', borderRadius: '14px', padding: '24px', margin: '28px 0' }}>
                <h3 style={{ color: '#1a5c2e', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem' }}>
                  <Trophy size={22} /> Quick Facts: Nitaq Academy SAT Diagnostic Tool (2026)
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', fontSize: '0.95rem' }}>
                  <div><strong>⏱ Test Duration:</strong> 25 – 30 Minutes (Rapid adaptive baseline)</div>
                  <div><strong>📝 Question Count:</strong> 24 Questions (12 Math + 12 Reading &amp; Writing)</div>
                  <div><strong>📊 Score Predictor:</strong> 400 – 1600 Scaled Composite Score</div>
                  <div><strong>🎯 Domain Analytics:</strong> Evaluates all 8 College Board sub-skills</div>
                  <div><strong>🧮 Calculator Support:</strong> Desmos graphing calculator built-in</div>
                  <div><strong>💡 Instant Feedback:</strong> Step-by-step explanations &amp; study plan</div>
                  <div><strong>💵 Cost:</strong> 100% Free · No credit card required</div>
                  <div><strong>📍 Alignment:</strong> Aligned with SPEA standards &amp; UAE university cutoffs</div>
                </div>
              </div>

              {/* Interactive Target Score & Roadmap Estimator */}
              <div className="interactive-calculator-card" style={{ background: '#ffffff', border: '2px solid #2e7d32', borderRadius: '16px', padding: '26px', margin: '34px 0', boxShadow: '0 8px 30px rgba(26,92,46,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                  <Target size={26} color="#1a5c2e" />
                  <h3 style={{ margin: 0, color: '#1a5c2e', fontSize: '1.3rem' }}>
                    Interactive SAT Baseline &amp; Study Timeline Estimator
                  </h3>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '20px' }}>
                  Select your current diagnostic baseline score and your university target score to calculate your preparation timeline, required study commitment, and recommended focus areas:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '22px' }}>
                  <div>
                    <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#334155', display: 'block', marginBottom: '6px' }}>
                      Current Diagnostic Baseline:
                    </label>
                    <select 
                      value={baselineScore} 
                      onChange={(e) => setBaselineScore(e.target.value)}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontWeight: '600', backgroundColor: '#f8fafc' }}
                    >
                      <option value="950">Under 1000 (Foundational Gaps)</option>
                      <option value="1100">1050 – 1150 (Intermediate Baseline)</option>
                      <option value="1250">1200 – 1300 (Proficient Foundation)</option>
                      <option value="1380">1350 – 1450 (Advanced Aspirant)</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontWeight: '700', fontSize: '0.85rem', color: '#334155', display: 'block', marginBottom: '6px' }}>
                      Target University Goal Score:
                    </label>
                    <select 
                      value={targetScore} 
                      onChange={(e) => setTargetScore(e.target.value)}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontWeight: '600', backgroundColor: '#f8fafc' }}
                    >
                      <option value="1350">1350+ (Competitive UAE Universities - AUS, KU)</option>
                      <option value="1450">1450+ (AUS Engineering Honors &amp; Top Scholarships)</option>
                      <option value="1500">1500+ (Elite UAE &amp; Top 30 US/UK Universities)</option>
                      <option value="1550">1550+ (NYU Abu Dhabi &amp; Ivy League Aspirants)</option>
                    </select>
                  </div>
                </div>

                <div style={{ background: '#f0f8f3', borderRadius: '12px', padding: '20px', border: '1px dashed #2e7d32' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#1a5c2e', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projected Point Jump:</span>
                      <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1a5c2e' }}>
                        +{calculatedJump} Points
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#1a5c2e', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Recommended Duration:</span>
                      <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                        {prepDuration}
                      </div>
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#1a5c2e', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Weekly Commitment:</span>
                      <div style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f172a' }}>
                        {studyHours}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="table-of-contents" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '24px', margin: '30px 0' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <BookOpen size={20} color="#2e7d32" /> Table of Contents
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '10px', fontSize: '0.92rem' }}>
                  <li><button onClick={() => scrollToSection('why-diagnostic')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>1. Why Take a Diagnostic Assessment First?</button></li>
                  <li><button onClick={() => scrollToSection('adaptive-mechanics')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>2. How Multistage Adaptive Testing Works</button></li>
                  <li><button onClick={() => scrollToSection('sat-domains')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>3. The 8 SAT Domains Evaluated by Our Tool</button></li>
                  <li><button onClick={() => scrollToSection('take-test')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>4. Take the Free SAT Diagnostic Quiz Below</button></li>
                  <li><button onClick={() => scrollToSection('comparison-matrix')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>5. Comparison: Nitaq Tool vs Bluebook vs Khan</button></li>
                  <li><button onClick={() => scrollToSection('score-interpretation')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>6. How to Interpret Your Diagnostic Report</button></li>
                  <li><button onClick={() => scrollToSection('uae-university-cutoffs')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>7. UAE University Score Cutoffs (AUS, KU, NYUAD)</button></li>
                  <li><button onClick={() => scrollToSection('study-roadmap')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>8. 12-Week Roadmap from Baseline to 1500+</button></li>
                  <li><button onClick={() => scrollToSection('readiness-checklist')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>9. Interactive Test Readiness Checklist</button></li>
                  <li><button onClick={() => scrollToSection('faqs')} style={{ background: 'none', border: 'none', color: '#1a5c2e', fontWeight: '600', cursor: 'pointer', padding: 0, textAlign: 'left' }}>10. Frequently Asked Questions</button></li>
                </ul>
              </div>

              {/* Section 1 */}
              <section id="why-diagnostic" style={{ margin: '40px 0' }}>
                <h2>1. Why Every Student Needs a Digital SAT Diagnostic Assessment</h2>
                <p>
                  Preparing for the Digital SAT without an initial diagnostic assessment is the number-one reason students plateau in the 1100–1200 range. Traditional test prep often pushes students to buy massive 800-page prep books or binge generic question banks without knowing their specific areas of failure.
                </p>
                <p>
                  A properly constructed <strong>digital sat evaluation</strong> solves this by delivering three critical benefits:
                </p>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <BarChart3 size={20} color="#2e7d32" />
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Saves 40+ Hours of Aimless Study</h3>
                    </div>
                    <p>
                      If you already score 90%+ in linear algebra, spending weeks solving two-variable equations is wasted effort. Your diagnostic immediately reveals whether your point losses stem from quadratics, circle theorems, or rhetorical synthesis.
                    </p>
                  </div>
                  <div className="strategy-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <AlertCircle size={20} color="#e65100" />
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Identifies Pacing &amp; Punctuation Traps</h3>
                    </div>
                    <p>
                      Many high-school students in UAE American, British (IGCSE/A-Level), and CBSE curricula lose 80+ points simply due to unfamiliarity with semicolons, non-essential clauses, and time-pressure traps.
                    </p>
                  </div>
                  <div className="strategy-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <TrendingUp size={20} color="#1565c0" />
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>Generates a Realistic Score Baseline</h3>
                    </div>
                    <p>
                      Rather than guessing where you stand, a data-backed <strong>sat score predictor</strong> gives you and your parents a transparent baseline to plan university applications, scholarship targets, and coaching schedules.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 2 */}
              <section id="adaptive-mechanics" style={{ margin: '40px 0' }}>
                <h2>2. How Multistage Adaptive Testing Works on the Digital SAT</h2>
                <p>
                  Unlike the old paper SAT where every student answered the exact same questions, the Digital SAT operates on a <strong>section-level multistage adaptive</strong> algorithm:
                </p>
                
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px', margin: '20px 0' }}>
                  <h4 style={{ margin: '0 0 12px 0', color: '#0f172a' }}>The Two-Module Routing Pipeline:</h4>
                  <ol style={{ paddingLeft: '20px', margin: 0, lineHeight: 1.8 }}>
                    <li><strong>Module 1 (Routing Module):</strong> Features a balanced 50/50 mix of easy, medium, and difficult questions across Math or Reading &amp; Writing.</li>
                    <li><strong>The Performance Split:</strong> Based on your accuracy in Module 1, the test software automatically routes you to either:
                      <ul style={{ marginTop: '6px' }}>
                        <li><strong>The Harder Module 2:</strong> Unlocks top-tier scaled scores (up to 800 per section). You can achieve scores between 1250 and 1600.</li>
                        <li><strong>The Easier Module 2:</strong> The algorithm caps your maximum possible section score around 590–620, making a composite score above 1200 mathematically impossible.</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <p>
                  This is why our <strong>sat adaptive test simulation</strong> is essential. It trains students to maximize early-question accuracy so they reliably trigger the harder second module on official test day.
                </p>
              </section>

              {/* Section 3 */}
              <section id="sat-domains" style={{ margin: '40px 0' }}>
                <h2>3. The 8 SAT Domains Evaluated by Our Diagnostic Tool</h2>
                <p>
                  The College Board structures the Digital SAT around eight clearly defined domains. Nitaq Academy’s diagnostic test provides question-level and domain-level analytics across each:
                </p>

                {/* Math Domains */}
                <h3 style={{ color: '#1a5c2e', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginTop: '28px' }}>
                  Section A: Mathematics Domains (44 Questions on Official Exam)
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', margin: '20px 0' }}>
                  <div style={{ background: '#fcfdfd', border: '1px solid #d1fae5', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#065f46', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#059669" /> 1. Algebra (Approx. 35% of Math)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Tests linear equations in one and two variables, systems of linear equations, linear inequalities, and contextual word problems. Key trap: sign flips and rate/unit conversions.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdfd', border: '1px solid #d1fae5', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#065f46', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#059669" /> 2. Advanced Math (Approx. 35% of Math)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Covers quadratic equations, parabolas, vertex form, polynomial division, exponential growth/decay, and radicals. Mastered fastest using Desmos graphing functions.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdfd', border: '1px solid #d1fae5', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#065f46', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#059669" /> 3. Problem-Solving &amp; Data Analysis (15%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Evaluates ratios, proportions, percentages, scatterplots, line of best fit, two-way tables, probability, mean, median, standard deviation, and margin of error.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdfd', border: '1px solid #d1fae5', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#065f46', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#059669" /> 4. Geometry &amp; Trigonometry (15%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Tests area, volume, similar triangles, right-triangle trigonometry (SOH CAH TOA), unit circle radian-degree conversions, and circle equations in standard form: (x-h)² + (y-k)² = r².
                    </p>
                  </div>
                </div>

                {/* Reading & Writing Domains */}
                <h3 style={{ color: '#1e40af', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginTop: '32px' }}>
                  Section B: Reading &amp; Writing Domains (54 Questions on Official Exam)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', margin: '20px 0' }}>
                  <div style={{ background: '#fcfdff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#1e3a8a', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#2563eb" /> 5. Craft &amp; Structure (Approx. 28%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Tests college-level "Words in Context", passage structural purpose, point of view, and cross-text paired comparison. Requires context-based nuance rather than rote memorization.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#1e3a8a', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#2563eb" /> 6. Information &amp; Ideas (Approx. 26%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Assesses central ideas, direct textual evidence, quantitative charts and graphs, and logical inferences. Common pitfall: choosing options that contain true facts not stated in the passage.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#1e3a8a', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#2563eb" /> 7. Standard English Conventions (26%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      High-yield point booster: sentence boundaries, comma splices, semicolons, colons, dashes, subject-verb agreement, verb tenses, and dangling modifiers.
                    </p>
                  </div>

                  <div style={{ background: '#fcfdff', border: '1px solid #dbeafe', borderRadius: '12px', padding: '18px' }}>
                    <h4 style={{ color: '#1e3a8a', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={18} color="#2563eb" /> 8. Expression of Ideas (Approx. 20%)
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: '#334155', margin: 0 }}>
                      Features rhetorical synthesis (student notes questions) and transitional logic (however, therefore, consequently, furthermore). Highly formulaic once shortcuts are mastered.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 4: Live Embedded Diagnostic Tool */}
              <section id="take-test" style={{ margin: '45px 0' }}>
                <div style={{ background: 'linear-gradient(135deg, #F8FBF9 0%, #EDF7F1 100%)', padding: '34px 24px', borderRadius: '24px', border: '2px solid #C8DDD0', boxShadow: '0 10px 35px rgba(46,125,50,0.06)' }}>
                  <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 26px auto' }}>
                    <span style={{ display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', padding: '6px 16px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '700', marginBottom: '10px' }}>
                      INTERACTIVE ASSESSMENT PORTAL
                    </span>
                    <h2 style={{ margin: '0 0 12px 0', color: '#101828', fontSize: '1.75rem', fontWeight: 800 }}>
                      Take Your Free Nitaq Academy SAT Diagnostic Test Below
                    </h2>
                    <p style={{ color: '#475467', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                      24 official Digital SAT style questions · Desmos-aligned Math · Instant predictive score (400–1600) · Complete step-by-step answer explanations.
                    </p>
                  </div>

                  {/* Embedded Diagnostic Hero Section */}
                  <SATDiagnosticSection headingLevel="h2" />

                  <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <p style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '14px' }}>
                      Prefer a full-screen dedicated testing environment?
                    </p>
                    <Link 
                      to="/sat/diagnostic" 
                      className="btn btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 28px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none' }}
                    >
                      <span>Open Fullscreen Diagnostic Portal</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Section 5: Comparison Matrix */}
              <section id="comparison-matrix" style={{ margin: '40px 0' }}>
                <h2>5. Feature Comparison: Nitaq Diagnostic vs Bluebook vs Khan Academy</h2>
                <p>
                  How does our <strong>sat self assessment</strong> compare with official College Board Bluebook mocks and generic question banks? Here is a breakdown:
                </p>

                <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', border: '1px solid #e2e8f0' }}>
                    <thead>
                      <tr style={{ background: '#1a5c2e', color: '#ffffff' }}>
                        <th style={{ padding: '14px', border: '1px solid #1a5c2e' }}>Diagnostic Feature</th>
                        <th style={{ padding: '14px', border: '1px solid #1a5c2e' }}>Nitaq SAT Diagnostic</th>
                        <th style={{ padding: '14px', border: '1px solid #1a5c2e' }}>Official Bluebook</th>
                        <th style={{ padding: '14px', border: '1px solid #1a5c2e' }}>Generic Paper Tests</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Completion Time</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>25 – 30 Minutes</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>2 Hours 14 Minutes</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>3+ Hours (Outdated)</td>
                      </tr>
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Instant Domain Scorecard</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>Yes (8 Domain Mastery)</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Basic Section Scores</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Manual Scoring Only</td>
                      </tr>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Step-by-Step Explanations</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>Instant on-screen review</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>External website lookup</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Often missing or brief</td>
                      </tr>
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Desmos Alignment</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>100% Calibrated</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Included</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>None (No calculator)</td>
                      </tr>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Target Study Priorities</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>Auto-ranked High/Med/Low</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Not provided</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Not provided</td>
                      </tr>
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>SPEA Faculty Mentorship</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', color: '#2e7d32', fontWeight: '700' }}>Free 1-on-1 Consultation</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>None</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>None</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 6: How to Interpret Diagnostic Results */}
              <section id="score-interpretation" style={{ margin: '40px 0' }}>
                <h2>6. How to Interpret Your Diagnostic Report &amp; Score Predictor</h2>
                <p>
                  Upon completing the test, our portal categorizes each of your 8 domains into one of three mastery levels. Here is how to translate these insights into a study strategy:
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', margin: '24px 0' }}>
                  <div style={{ borderLeft: '4px solid #dc2626', background: '#fef2f2', padding: '18px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#991b1b', margin: '0 0 8px 0' }}>Needs Review (Accuracy &lt; 50%)</h4>
                    <p style={{ fontSize: '0.92rem', color: '#7f1d1d', margin: 0 }}>
                      <strong>Action:</strong> Foundational gap alert. You are missing basic conceptual rules (e.g., quadratic formula, subject-verb agreement). Do not rush into timed tests; spend 2–3 weeks rebuilding core concepts first.
                    </p>
                  </div>

                  <div style={{ borderLeft: '4px solid #d97706', background: '#fffbeb', padding: '18px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#92400e', margin: '0 0 8px 0' }}>Developing (Accuracy 50% – 74%)</h4>
                    <p style={{ fontSize: '0.92rem', color: '#78350f', margin: 0 }}>
                      <strong>Action:</strong> Conceptual understanding exists, but pacing, trap answer choices, or algebraic slips cost you points. Focus on timed domain drills and an error-tracking journal.
                    </p>
                  </div>

                  <div style={{ borderLeft: '4px solid #16a34a', background: '#f0fdf4', padding: '18px', borderRadius: '8px' }}>
                    <h4 style={{ color: '#166534', margin: '0 0 8px 0' }}>Strong Foundation (Accuracy &gt; 75%)</h4>
                    <p style={{ fontSize: '0.92rem', color: '#14532d', margin: 0 }}>
                      <strong>Action:</strong> High mastery. Your goal is speed and precision. Learn Desmos shortcuts to shave 30 seconds off each question and solve hard Module 2 problem sets.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 7: UAE University Score Targets */}
              <section id="uae-university-cutoffs" style={{ margin: '40px 0' }}>
                <h2>7. University SAT Score Targets in UAE: AUS, Khalifa &amp; Global Benchmarks</h2>
                <p>
                  Setting the right goal score depends on your target universities. Below are current competitive SAT benchmarks for leading institutions in Sharjah, Dubai, Abu Dhabi, and internationally:
                </p>

                <div style={{ overflowX: 'auto', margin: '20px 0' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem', border: '1px solid #e2e8f0' }}>
                    <thead>
                      <tr style={{ background: '#0f172a', color: '#ffffff' }}>
                        <th style={{ padding: '12px 14px' }}>University / Institution</th>
                        <th style={{ padding: '12px 14px' }}>Minimum Baseline</th>
                        <th style={{ padding: '12px 14px' }}>Competitive Score</th>
                        <th style={{ padding: '12px 14px' }}>Merit Scholarship Range</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>American University of Sharjah (AUS)</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1150+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#2e7d32' }}>1300 – 1420+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1400+ (Up to 50% tuition)</td>
                      </tr>
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Khalifa University (Abu Dhabi)</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1200+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#2e7d32' }}>1350 – 1480+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Full presidential grants</td>
                      </tr>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>NYU Abu Dhabi</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1350+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#2e7d32' }}>1480 – 1560+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Full Need/Merit Coverage</td>
                      </tr>
                      <tr style={{ background: '#f8fafc' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>Heriot-Watt &amp; University of Birmingham Dubai</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1100+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#2e7d32' }}>1250 – 1380+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Academic Excellence Grants</td>
                      </tr>
                      <tr style={{ background: '#ffffff' }}>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '600' }}>US Ivy League &amp; Top 20 Global</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>1450+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0', fontWeight: '700', color: '#2e7d32' }}>1520 – 1580+</td>
                        <td style={{ padding: '12px 14px', border: '1px solid #e2e8f0' }}>Full need-blind packages</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 8: 12-Week Roadmap */}
              <section id="study-roadmap" style={{ margin: '40px 0' }}>
                <h2>8. Step-by-Step 12-Week Roadmap from Diagnostic to 1500+</h2>
                <p>
                  Once you complete the <strong>sat diagnostic tool</strong>, follow this structured 12-week roadmap used by top-scoring Nitaq Academy students:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '22px 0' }}>
                  <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '18px', borderRadius: '12px', borderLeft: '4px solid #2e7d32' }}>
                    <div style={{ minWidth: '85px', fontWeight: '800', color: '#2e7d32', fontSize: '0.95rem' }}>Weeks 1 – 3</div>
                    <div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>Baseline Diagnostics &amp; Foundational Remediation</h4>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
                        Take the Nitaq diagnostic assessment. Build an error log. Rebuild weak prerequisite topics: English punctuation rules (semicolons, non-essentials) and algebraic linear systems. Master Desmos calculator shortcuts for systems and quadratic intercepts.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '18px', borderRadius: '12px', borderLeft: '4px solid #1565c0' }}>
                    <div style={{ minWidth: '85px', fontWeight: '800', color: '#1565c0', fontSize: '0.95rem' }}>Weeks 4 – 7</div>
                    <div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>Advanced Math &amp; Rhetorical Synthesis Mastery</h4>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
                        Dive deep into Advanced Math (exponential modeling, circle equations, trigonometry). Solve 200+ Reading &amp; Writing passage sets targeting Words in Context, Inferences, and Rhetorical Synthesis. Practice strict 71-second pacing per question.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '18px', borderRadius: '12px', borderLeft: '4px solid #e65100' }}>
                    <div style={{ minWidth: '85px', fontWeight: '800', color: '#e65100', fontSize: '0.95rem' }}>Weeks 8 – 10</div>
                    <div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>Official Full-Length Bluebook Adaptive Simulations</h4>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
                        Simulate official test conditions on College Board Bluebook. Take full 2-hour-and-14-minute timed exams every Saturday morning. Dissect every incorrect answer with a 3-step error analysis: (1) Why did I pick the wrong choice? (2) Why is the right choice right? (3) What rule prevents this error next time?
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', background: '#f8fafc', padding: '18px', borderRadius: '12px', borderLeft: '4px solid #7c3aed' }}>
                    <div style={{ minWidth: '85px', fontWeight: '800', color: '#7c3aed', fontSize: '0.95rem' }}>Weeks 11 – 12</div>
                    <div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>Hard Module 2 Conditioning &amp; Test Day Readiness</h4>
                      <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569' }}>
                        Condition your mind specifically for the difficult Module 2 questions in both sections. Review formula sheets, pack official ID/passport, ensure device Bluebook app is updated, and taper study hours 48 hours prior to test day.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 9: Interactive Checklist */}
              <section id="readiness-checklist" style={{ margin: '40px 0' }}>
                <div style={{ background: '#ffffff', border: '2px solid #e2e8f0', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
                    <h3 style={{ margin: 0, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.25rem' }}>
                      <CheckSquare size={22} color="#2e7d32" /> Interactive Digital SAT Readiness Checklist
                    </h3>
                    <span style={{ fontSize: '0.9rem', fontWeight: '700', color: '#2e7d32', background: '#e8f5e9', padding: '4px 12px', borderRadius: '20px' }}>
                      {readinessPercentage}% Complete ({completedCount}/{totalChecklistItems})
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', marginBottom: '20px' }}>
                    <div style={{ width: `${readinessPercentage}%`, height: '100%', background: '#2e7d32', transition: 'width 0.3s ease' }} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                    {[
                      { key: 'baselineDone', label: 'Completed Nitaq Free Diagnostic Baseline Test' },
                      { key: 'desmosShortcuts', label: 'Mastered Desmos Graphing Calculator Shortcuts' },
                      { key: 'grammarRules', label: 'Reviewed Semicolon, Colon & Comma Splice Rules' },
                      { key: 'advancedMathQuadratics', label: 'Practiced Quadratic Vertex & Exponential Models' },
                      { key: 'errorLogCreated', label: 'Initialized Detailed SAT Question Error Log' },
                      { key: 'timedMocks', label: 'Completed at least 3 Timed Full-Length Mocks' },
                      { key: 'bluebookTested', label: 'Installed & Tested College Board Bluebook App' },
                      { key: 'calculatorStrategy', label: 'Prepared Passport / Emirates ID for Test Center' }
                    ].map(item => (
                      <label 
                        key={item.key}
                        onClick={() => toggleChecklistItem(item.key)}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '10px', 
                          padding: '10px 14px', 
                          background: checklist[item.key] ? '#f0fdf4' : '#f8fafc', 
                          border: checklist[item.key] ? '1px solid #86efac' : '1px solid #e2e8f0',
                          borderRadius: '8px', 
                          cursor: 'pointer',
                          fontSize: '0.9rem',
                          fontWeight: checklist[item.key] ? '600' : '400',
                          color: checklist[item.key] ? '#166534' : '#334155'
                        }}
                      >
                        <input 
                          type="checkbox" 
                          checked={checklist[item.key]} 
                          onChange={() => {}} 
                          style={{ accentColor: '#2e7d32', width: '16px', height: '16px' }}
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </section>

              {/* Section 10: FAQs */}
              <section id="faqs" style={{ margin: '40px 0' }}>
                <h2>10. Frequently Asked Questions (FAQ)</h2>
                <div className="faq-accordion-group" style={{ margin: '20px 0' }}>
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div 
                        key={index}
                        className="faq-accordion"
                        style={{
                          border: '1px solid #e2e8f0',
                          borderRadius: '10px',
                          marginBottom: '12px',
                          overflow: 'hidden',
                          background: '#ffffff'
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          style={{
                            width: '100%',
                            padding: '16px 20px',
                            background: isOpen ? '#f8fafc' : '#ffffff',
                            border: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            textAlign: 'left',
                            fontSize: '1rem',
                            fontWeight: '700',
                            color: isOpen ? '#1a5c2e' : '#0f172a',
                            cursor: 'pointer'
                          }}
                        >
                          <span>{faq.question}</span>
                          <span style={{ fontSize: '1.2rem', color: '#2e7d32' }}>{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && (
                          <div style={{ padding: '16px 20px', fontSize: '0.95rem', color: '#334155', lineHeight: 1.7, borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* In-Content Conversion CTA */}
              <div className="article-inline-cta" style={{ background: '#f0fdf4', border: '2px solid #2e7d32', borderRadius: '16px', padding: '26px', margin: '40px 0', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#166534', fontSize: '1.4rem' }}>
                  Want 1-on-1 Guidance from SPEA-Certified SAT Mentors?
                </h3>
                <p style={{ color: '#334155', fontSize: '1rem', maxWidth: '640px', margin: '0 auto 20px auto' }}>
                  Whether you want to bridge a 150-point gap or cross the elite 1500+ threshold, Nitaq Academy offers small micro-batches (5–8 students) and 1-on-1 personalized <Link to="/sat-preparation-sharjah" style={{ color: '#166534', fontWeight: '700', textDecoration: 'underline' }}>SAT coaching in Sharjah</Link> and <Link to="/sat-preparation-dubai" style={{ color: '#166534', fontWeight: '700', textDecoration: 'underline' }}>online SAT preparation across Dubai &amp; the UAE</Link>. Review our <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" style={{ color: '#166534', fontWeight: '700', textDecoration: 'underline' }}>Digital SAT Preparation Guide</Link> or <Link to="/article/sat-score-1300-guide" style={{ color: '#166534', fontWeight: '700', textDecoration: 'underline' }}>1300+ score roadmap</Link> for structured study plans.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '14px' }}>
                  <Link to="/sat/diagnostic" className="btn btn-primary" style={{ padding: '12px 24px', textDecoration: 'none' }}>
                    Take Free Diagnostic
                  </Link>
                  <a 
                    href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I'd%20like%20to%20review%20my%20SAT%20Diagnostic%20results%20with%20a%20mentor." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{ padding: '12px 24px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp SAT Mentor</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <aside className="article-sidebar">
              <div className="enroll-sidebar-card" style={{ position: 'sticky', top: '90px' }}>
                <div style={{ display: 'inline-block', background: '#e8f5e9', color: '#2e7d32', padding: '4px 12px', borderRadius: '16px', fontSize: '0.78rem', fontWeight: '800', marginBottom: '12px' }}>
                  100% FREE TOOL
                </div>
                <h3>Take Your SAT Diagnostic</h3>
                <p>
                  Complete 24 official-pattern questions, discover your domain breakdown, and get your personalized score prediction immediately.
                </p>
                <Link to="/sat/diagnostic" className="btn btn-primary w-100 mb-15">
                  Start Free Diagnostic
                </Link>
                <Link to="/sat-preparation-sharjah" className="btn btn-outline w-100 mb-15">
                  SAT Coaching Sharjah
                </Link>
                <Link to="/sat-preparation-dubai" className="btn btn-outline w-100 mb-15">
                  Online SAT Dubai
                </Link>
                <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" className="btn btn-outline w-100 mb-15">
                  Digital SAT Guide
                </Link>
                
                <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <MapPin size={16} color="#2e7d32" />
                    <span>Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <ShieldCheck size={16} color="#2e7d32" />
                    <span>SPEA Authorized Institute</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy size={16} color="#2e7d32" />
                    <span>Proven 1400+ &amp; 1500+ Track Record</span>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <a 
                    href="https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I'd%20like%20to%20ask%20a%20question%20about%20the%20Digital%20SAT."
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: '#25D366',
                      color: '#ffffff',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontWeight: '700',
                      textDecoration: 'none',
                      fontSize: '0.9rem'
                    }}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp Advisor (+971 52 756 9908)</span>
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </article>
    </main>
  );
};

export default FreeDigitalSatDiagnosticArticle;
