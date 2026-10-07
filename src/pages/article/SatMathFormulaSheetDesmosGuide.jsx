import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, ChevronRight, CheckCircle2, Award, Target, 
  HelpCircle, BookOpen, AlertCircle, Laptop, ShieldCheck, ArrowRight,
  FileText, CheckSquare, Sparkles, MapPin, PhoneCall, Layers, Bookmark,
  Calculator, Zap, Compass, Check
} from 'lucide-react';

const SatMathFormulaSheetDesmosGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [activeTab, setActiveTab] = useState('desmos'); // 'desmos' | 'formulas' | 'provided'

  const desmosHacks = [
    {
      title: '1. Instant Systems of Equations (Intersection Points)',
      category: 'Algebra & Functions',
      problem: 'Find the solution (x, y) to: 3x - 2y = 14 and 5x + 4y = 6',
      desmosMethod: 'Type both equations directly into lines 1 and 2 in Desmos. Click the gray dot at the intersection. Desmos automatically labels (3, -2.25). No substitution or elimination needed.',
      timeSaved: 'Saves 60–90 seconds per question'
    },
    {
      title: '2. Solving Single-Variable Equations Without Algebra',
      category: 'Algebra',
      problem: 'Solve for x: 4(2x - 5) + 3 = 7(x + 2) - 19',
      desmosMethod: 'Method A: Type 4(2x - 5) + 3 = 7(x + 2) - 19 directly. Desmos plots a vertical line at the exact value of x. Read the x-intercept.\nMethod B: Type y = 4(2x - 5) + 3 and y = 7(x + 2) - 19, then find the intersection x-coordinate.',
      timeSaved: 'Eliminates careless algebraic sign errors'
    },
    {
      title: '3. The Slider Trick for Unknown Constants (k, c, a)',
      category: 'Advanced Math',
      problem: 'The equation x² + kx + 16 = 0 has exactly one real solution. What is k?',
      desmosMethod: 'Type y = x² + kx + 16 into Desmos. Click "Add Slider: k". Drag the slider or change k until the parabola touches the x-axis at exactly ONE point (the vertex touches y=0). You will instantly see k = 8 and k = -8.',
      timeSaved: 'Solves confusing discriminant problems in seconds'
    },
    {
      title: '4. Table Regression for Exponential & Quadratic Functions',
      category: 'Functions & Modeling',
      problem: 'Given points (1, 6), (2, 18), (3, 54), find the value of f(5).',
      desmosMethod: 'Click the "+" button in Desmos and insert a Table. Enter the x and y points. On line 2, type the model regression:\ny1 ~ a * b^x1\nDesmos will instantly calculate a = 2, b = 3. Then type 2 * 3^5 to find 486 instantly.',
      timeSaved: 'Turns multi-step modeling questions into 15-second answers'
    },
    {
      title: '5. Fast Function Composition & Evaluations',
      category: 'Functions',
      problem: 'If f(x) = 3x² - 5x + 2 and g(x) = 2x - 1, find f(g(4)).',
      desmosMethod: 'Line 1: f(x) = 3x^2 - 5x + 2\nLine 2: g(x) = 2x - 1\nLine 3: f(g(4))\nDesmos computes and outputs 114 instantly. No manual expansion or arithmetic errors.',
      timeSaved: '100% calculation accuracy guarantee'
    },
    {
      title: '6. Circle Center & Radius Identification',
      category: 'Geometry',
      problem: 'What is the radius of the circle: x² + y² - 6x + 8y - 24 = 0?',
      desmosMethod: 'Type the expanded circle equation directly into Desmos. Zoom in and click the center or top/bottom extrema points. Count distance from center (3, -4) to edge (3, 3) = radius 7. You don’t need to complete the square by hand!',
      timeSaved: 'Bypasses completing the square entirely'
    }
  ];

  const unlistedFormulas = [
    {
      name: 'Vertex of a Parabola',
      formula: 'x = -b / (2a)  |  Vertex Form: y = a(x - h)² + k (Vertex at (h, k))',
      why: 'Appears in 3-5 Digital SAT questions per test for finding maximum heights, minimum costs, and quadratic axis of symmetry.'
    },
    {
      name: 'Roots & Discriminant Rules',
      formula: 'b² - 4ac > 0 (2 real solutions) | = 0 (1 real solution) | < 0 (0 real solutions)\nSum of roots: -b / a  |  Product of roots: c / a',
      why: 'Sum of roots shortcut saves 45 seconds of quadratic factoring or formula calculation.'
    },
    {
      name: 'Standard Circle Equation',
      formula: '(x - h)² + (y - k)² = r²   (Center: (h, k), Radius: r)',
      why: 'Must know how to identify center and radius, and convert from general form x² + y² + Ax + By + C = 0.'
    },
    {
      name: 'Perpendicular & Parallel Lines',
      formula: 'Parallel: m₁ = m₂   |   Perpendicular: m₁ × m₂ = -1  (Negative Reciprocal: m₂ = -1/m₁)',
      why: 'High-frequency coordinate geometry question across both easy and hard modules.'
    },
    {
      name: 'Distance & Midpoint Formulas',
      formula: 'Distance: d = √[(x₂ - x₁)² + (y₂ - y₁)²]\nMidpoint: M = ((x₁ + x₂) / 2, (y₁ + y₂) / 2)',
      why: 'Coordinate geometry distance questions often combine with circle diameters.'
    },
    {
      name: 'Exponential Growth & Decay',
      formula: 'Growth: y = a(1 + r)ᵗ   |   Decay: y = a(1 - r)ᵗ   |   Compound: A = P(1 + r/n)ⁿᵗ',
      why: 'Essential for word problems featuring bacterial growth, car depreciation, and annual compounding bank interest.'
    },
    {
      name: 'Cofunction Identity (Complementary Angles)',
      formula: 'sin(x°) = cos(90° - x°)   |   If sin(A) = cos(B), then A + B = 90°',
      why: 'Tested in nearly every Digital SAT official practice test in right-triangle trigonometry.'
    },
    {
      name: 'Arc Length & Sector Area in Radians',
      formula: 'Arc Length: s = rθ   |   Sector Area: A = (1/2)r²θ  (where θ is in radians)',
      why: 'Far faster than degree-based formulas when angles are given as multiples of π.'
    }
  ];

  const providedFormulas = [
    { name: 'Area of Circle', formula: 'A = πr²' },
    { name: 'Circumference of Circle', formula: 'C = 2πr = πd' },
    { name: 'Area of Rectangle', formula: 'A = lw' },
    { name: 'Area of Triangle', formula: 'A = 1/2 bh' },
    { name: 'Pythagorean Theorem', formula: 'c² = a² + b²' },
    { name: 'Special Right Triangles', formula: '45-45-90: x, x, x√2  |  30-60-90: x, x√3, 2x' },
    { name: 'Volume of Rectangular Prism', formula: 'V = lwh' },
    { name: 'Volume of Cylinder', formula: 'V = πr²h' },
    { name: 'Volume of Sphere', formula: 'V = 4/3 πr³' },
    { name: 'Volume of Cone', formula: 'V = 1/3 πr²h' },
    { name: 'Volume of Pyramid', formula: 'V = 1/3 lwh' }
  ];

  const faqs = [
    {
      question: 'Is Desmos allowed on the entire SAT Math section in 2026?',
      answer: 'Yes! On the Digital SAT, the built-in Desmos graphing calculator is permanently available on both Module 1 and Module 2 of the Math section. Unlike the old paper SAT, there is no longer any "No-Calculator" section. You can use Desmos for all 44 Math questions.'
    },
    {
      question: 'Can I bring my own handheld calculator (like TI-84 or Casio) in addition to Desmos?',
      answer: 'Yes. You are allowed to bring an approved handheld graphing or scientific calculator (such as TI-84 Plus CE, Casio fx-991EX, or Casio fx-CG50) into UAE test centers. Many top-scoring students use Desmos for graphing and visual intersections, and their handheld calculator for fast basic arithmetic and matrix operations.'
    },
    {
      question: 'Why do students still lose marks on SAT Math if Desmos is available?',
      answer: 'Desmos is powerful, but it cannot interpret complex word problems, define unknown variables, or solve questions with abstract constants where numerical values are withheld. Students who score 750+ master both algebraic conceptual theory and high-speed Desmos verification tricks.'
    },
    {
      question: 'Where can I find the official reference formula sheet during the digital exam?',
      answer: 'In the Bluebook app, click the "Reference" icon at the top right of your screen during the Math section. A pop-up modal will display the 12 standard geometry formulas (triangles, circles, and 3D solid volumes) at any time.'
    },
    {
      question: 'What is the fastest way to improve from a 600 to a 750+ on Digital SAT Math?',
      answer: 'The fastest jump comes from two steps: First, memorize the 8 unlisted formulas (vertex form, sum/product of roots, circle equations, and exponent rules). Second, master the top 6 Desmos graphing hacks to eliminate arithmetic mistakes on Module 1 so you unlock the harder Module 2 with full score potential.'
    }
  ];

  return (
    <main>
      <SEO 
        title="SAT Math Formula Sheet & Desmos Calculator Shortcuts (2026 Guide)"
        description="Master the Digital SAT Math section: official College Board formula reference sheet, 8 unlisted must-memorize formulas, and 6 high-speed Desmos graphing hacks."
        canonicalUrl="https://nitaqacademy.com/article/sat-math-formula-sheet-desmos-calculator-guide"
      />

      {/* Breadcrumb Bar with Clearance */}
      <div className="breadcrumb-wrapper" style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '118px 0 16px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.875rem', color: '#64748b' }}>
          <Link to="/" style={{ color: '#1a5c2e', textDecoration: 'none', fontWeight: 500 }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/articles" style={{ color: '#1a5c2e', textDecoration: 'none', fontWeight: 500 }}>Articles</Link>
          <ChevronRight size={14} />
          <span style={{ color: '#0f172a', fontWeight: 600 }}>SAT Math Formula Sheet &amp; Desmos Guide</span>
        </div>
      </div>

      <article className="article-container" style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px 80px' }}>
        
        {/* Safe Header */}
        <div className="article-header" style={{ marginBottom: '32px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', color: '#047857', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '16px' }}>
            <Zap size={14} />
            <span>Digital SAT Math • High-Scoring Guide</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#0f172a', lineHeight: 1.25, marginBottom: '16px' }}>
            SAT Math Formula Sheet &amp; Desmos Calculator Shortcuts: The 800-Score Toolkit
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', color: '#64748b', fontSize: '0.9rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} />
              <span>Updated October 2026</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} />
              <span>10 Min Read • Formula Reference Included</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Award size={16} />
              <span>Verified for Bluebook v2.x</span>
            </div>
          </div>
        </div>

        {/* Executive Summary Box */}
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '24px', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <Calculator style={{ color: '#16a34a', flexShrink: 0, marginTop: '4px' }} size={24} />
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#166534', margin: '0 0 8px 0' }}>
                Why Desmos is the Ultimate Game-Changer on Digital SAT Math
              </h2>
              <p style={{ color: '#15803d', margin: 0, fontSize: '0.95rem', lineHeight: 1.6 }}>
                Unlike the old paper exam, the Digital SAT gives students access to an integrated <strong>Desmos Graphing Calculator</strong> for 100% of the Math section (all 44 questions across Modules 1 &amp; 2). Students who master Desmos shortcuts can solve up to <strong>15–20 questions visually in under 20 seconds each</strong>—freeing up critical time for difficult advanced geometry and polynomial problems.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Controls for Interactive Guide */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '32px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('desmos')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'desmos' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'desmos' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'desmos' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <Zap size={18} />
            6 Essential Desmos Hacks
          </button>

          <button
            onClick={() => setActiveTab('formulas')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'formulas' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'formulas' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'formulas' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <BookOpen size={18} />
            8 Unlisted Must-Know Formulas
          </button>

          <button
            onClick={() => setActiveTab('provided')}
            style={{
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              border: activeTab === 'provided' ? '2px solid #1a5c2e' : '1px solid #e2e8f0',
              background: activeTab === 'provided' ? '#1a5c2e' : '#ffffff',
              color: activeTab === 'provided' ? '#ffffff' : '#475569',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
          >
            <FileText size={18} />
            Official Reference Sheet (Given)
          </button>
        </div>

        {/* TAB 1: DESMOS SHORTCUTS */}
        {activeTab === 'desmos' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              Top 6 Desmos Graphing Hacks for Digital SAT Math
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              Master these practical calculator workflows in Bluebook to answer algebra and function questions without paper scratchwork.
            </p>

            <div style={{ display: 'grid', gap: '20px' }}>
              {desmosHacks.map((hack, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                      {hack.title}
                    </h3>
                    <span style={{ background: '#f1f5f9', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600 }}>
                      {hack.category}
                    </span>
                  </div>

                  <div style={{ background: '#f8fafc', padding: '12px 16px', borderRadius: '8px', marginBottom: '12px', borderLeft: '4px solid #3b82f6' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1e40af', textTransform: 'uppercase', marginBottom: '4px' }}>Example SAT Problem</div>
                    <div style={{ color: '#1e293b', fontSize: '0.92rem', fontFamily: 'monospace' }}>{hack.problem}</div>
                  </div>

                  <div style={{ background: '#f0fdf4', padding: '14px 16px', borderRadius: '8px', marginBottom: '12px', borderLeft: '4px solid #16a34a' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase', marginBottom: '4px' }}>Desmos Execution Hack</div>
                    <div style={{ color: '#14532d', fontSize: '0.92rem', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{hack.desmosMethod}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#b45309', fontSize: '0.85rem', fontWeight: 600 }}>
                    <Zap size={14} />
                    <span>{hack.timeSaved}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 2: UNLISTED FORMULAS */}
        {activeTab === 'formulas' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              8 Crucial Formulas NOT Provided by College Board
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              The College Board only gives you 12 geometry equations on the reference sheet. You <strong>must memorize</strong> these 8 high-frequency algebraic and coordinate formulas.
            </p>

            <div style={{ display: 'grid', gap: '18px' }}>
              {unlistedFormulas.map((f, idx) => (
                <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <CheckCircle2 size={18} style={{ color: '#1a5c2e', flexShrink: 0 }} />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>{f.name}</h3>
                  </div>
                  <div style={{ background: '#0f172a', color: '#38bdf8', padding: '12px 16px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '0.95rem', marginBottom: '10px', whiteSpace: 'pre-line' }}>
                    {f.formula}
                  </div>
                  <p style={{ color: '#475569', fontSize: '0.88rem', margin: 0, lineHeight: 1.5 }}>
                    <strong>Why you need it:</strong> {f.why}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 3: PROVIDED FORMULAS */}
        {activeTab === 'provided' && (
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
              What College Board Gives You (Reference Sheet)
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '24px' }}>
              You can access these anytime in Bluebook by clicking the Reference button in the upper right. Don't waste cognitive energy memorizing these formulas.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
              {providedFormulas.map((item, idx) => (
                <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, marginBottom: '4px' }}>{item.name}</div>
                  <div style={{ fontSize: '1.05rem', color: '#0f172a', fontWeight: 700, fontFamily: 'monospace' }}>{item.formula}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', padding: '14px 18px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe', color: '#1e40af', fontSize: '0.9rem' }}>
              <strong>Additional Official Facts Provided:</strong> Number of degrees in a circle is 360°; number of radians in a circle is 2π; sum of angles in a triangle is 180°.
            </div>
          </section>
        )}

        {/* NITAQ SAT DIAGNOSTIC CTA CARD */}
        <div style={{ background: 'linear-gradient(135deg, #1a5c2e 0%, #11401f 100%)', borderRadius: '16px', padding: '36px 30px', color: 'white', marginBottom: '48px', boxShadow: '0 8px 24px rgba(26,92,46,0.18)' }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
              Free Diagnostic Assessment
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '0 0 12px 0', lineHeight: 1.3 }}>
              Find Out If You’re Making Avoidable SAT Math Errors
            </h3>
            <p style={{ fontSize: '1rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '24px' }}>
              Take Nitaq Academy's free 30-minute SAT Diagnostic Test. We evaluate your algebra speed, geometry recall, and Desmos proficiency, giving you a custom score roadmap for UAE university admissions.
            </p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link 
                to="/sat/diagnostic" 
                style={{ background: '#ffffff', color: '#1a5c2e', padding: '12px 24px', borderRadius: '8px', fontWeight: 700, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
              >
                Take Free SAT Diagnostic <ArrowRight size={16} />
              </Link>
              <Link 
                to="/sat-preparation-sharjah" 
                style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.3)', padding: '12px 20px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem' }}
              >
                Sharjah SAT Course Details
              </Link>
            </div>
          </div>
        </div>

        {/* SECTION: COMMON MATH PITFALLS */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '16px' }}>
            Top 4 Avoidable Traps on Digital SAT Math
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ padding: '18px 20px', background: '#fff', border: '1px solid #fed7aa', borderRadius: '10px', borderLeft: '4px solid #f97316' }}>
              <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '4px' }}>Trap 1: Solving for x when the question asks for (2x + 5)</div>
              <p style={{ color: '#7c2d12', margin: 0, fontSize: '0.92rem' }}>The College Board loves putting the value of x as option A. Always re-read the final sentence of the prompt before selecting your answer.</p>
            </div>

            <div style={{ padding: '18px 20px', background: '#fff', border: '1px solid #fed7aa', borderRadius: '10px', borderLeft: '4px solid #f97316' }}>
              <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '4px' }}>Trap 2: Forgetting Radians vs. Degrees in Desmos</div>
              <p style={{ color: '#7c2d12', margin: 0, fontSize: '0.92rem' }}>By default, Desmos opens in <strong>Radians</strong> mode. If a trigonometry question specifies degrees (e.g., sin(35°)), click the wrench icon in the top right of Desmos and toggle to <strong>Degrees</strong>.</p>
            </div>

            <div style={{ padding: '18px 20px', background: '#fff', border: '1px solid #fed7aa', borderRadius: '10px', borderLeft: '4px solid #f97316' }}>
              <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '4px' }}>Trap 3: Extraneous Solutions in Radical &amp; Rational Equations</div>
              <p style={{ color: '#7c2d12', margin: 0, fontSize: '0.92rem' }}>When squaring both sides of √(x + 3) = x - 3, you create false solutions. Graph both sides in Desmos to see which intersection point actually exists.</p>
            </div>

            <div style={{ padding: '18px 20px', background: '#fff', border: '1px solid #fed7aa', borderRadius: '10px', borderLeft: '4px solid #f97316' }}>
              <div style={{ fontWeight: 700, color: '#9a3412', marginBottom: '4px' }}>Trap 4: Percent Increase vs. Final Multiplier</div>
              <p style={{ color: '#7c2d12', margin: 0, fontSize: '0.92rem' }}>A 35% increase means multiplying by 1.35, not 0.35. A decrease of 20% means multiplying by 0.80. Know your base multiplier instantly.</p>
            </div>
          </div>
        </section>

        {/* SECTION: INTERNAL LINKING & COURSES */}
        <section style={{ marginBottom: '48px', padding: '24px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px' }}>
            Continue Your SAT Preparation in the UAE
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '16px' }}>
            Explore our dedicated study resources and in-person coaching centers across Sharjah and Dubai:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
            <Link to="/article/sat-grammar-rules-digital-reading-writing-guide" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Grammar Rules Guide</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/article/how-to-register-for-sat-complete-guide" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Registration UAE Guide</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/sat-preparation-sharjah" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Coaching Sharjah (Al Majaz)</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
            <Link to="/sat-preparation-dubai" style={{ padding: '12px 16px', background: 'white', borderRadius: '8px', border: '1px solid #cbd5e1', textDecoration: 'none', color: '#0f172a', fontSize: '0.9rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span>SAT Coaching Dubai</span>
              <ChevronRight size={14} color="#1a5c2e" />
            </Link>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px' }}>
            Frequently Asked Questions: Digital SAT Math &amp; Desmos
          </h2>

          <div style={{ display: 'grid', gap: '12px' }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '10px', overflow: 'hidden' }}>
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{ width: '100%', padding: '18px 22px', textAlign: 'left', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 600, fontSize: '1.02rem', color: '#0f172a' }}
                >
                  <span>{faq.question}</span>
                  <ChevronRight 
                    size={18} 
                    style={{ transform: openFaq === idx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s ease', color: '#1a5c2e', flexShrink: 0 }} 
                  />
                </button>
                {openFaq === idx && (
                  <div style={{ padding: '0 22px 18px', color: '#475569', lineHeight: 1.7, fontSize: '0.95rem', borderTop: '1px solid #f1f5f9', paddingTop: '14px' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ADMISSIONS CONTACT FOOTER CARD (NO <FOOTER> TAG) */}
        <div className="article-contact-footer" style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '30px', textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '8px' }}>
            Aiming for 780–800 on SAT Math?
          </h3>
          <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto 20px', fontSize: '0.95rem' }}>
            Our expert STEM &amp; SAT Math mentors at Nitaq Academy teach advanced shortcut methods, timed Module 2 hard-problem strategies, and personalized drill tracks.
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

      </article>
    </main>
  );
};

export default SatMathFormulaSheetDesmosGuide;
