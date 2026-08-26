/**
 * DiagnosticResults.jsx — Premium, Data-Driven SAT Diagnostic Assessment Report & Full Question Review Experience.
 * Ultra-minimal, professional academic architecture with executive summaries, 8-domain analytical lists,
 * targeted study priorities, vertical next steps, and complete question-by-question review.
 */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getDiagnosticResults, ApiError } from '../../services/diagnosticApi';
import './sat.css';

const DOMAIN_DISPLAY = {
  ALGEBRA: 'Algebra',
  ADVANCED_MATH: 'Advanced Math',
  PROBLEM_SOLVING_DATA_ANALYSIS: 'Problem-Solving & Data Analysis',
  GEOMETRY_TRIGONOMETRY: 'Geometry & Trigonometry',
  INFORMATION_IDEAS: 'Information & Ideas',
  CRAFT_STRUCTURE: 'Craft & Structure',
  EXPRESSION_IDEAS: 'Expression of Ideas',
  STANDARD_ENGLISH_CONVENTIONS: 'Standard English Conventions',
};

const STATUS_LABEL = {
  STRONG: 'Strong',
  DEVELOPING: 'Developing',
  REVIEW: 'Needs Review',
};

const DEMO_RESULT = {
  student_name: 'Aroo',
  total_score: 15,
  total_questions: 24,
  estimated_sat_score: '1320–1410',
  overall_band: 'Competitive College Ready Baseline',
  math_score: 9,
  reading_writing_score: 6,
  domain_results: [
    { section: 'MATH', domain: 'ALGEBRA', correct_count: 3, total_questions: 3, percentage: 100, status: 'STRONG' },
    { section: 'MATH', domain: 'ADVANCED_MATH', correct_count: 2, total_questions: 3, percentage: 67, status: 'DEVELOPING' },
    { section: 'MATH', domain: 'PROBLEM_SOLVING_DATA_ANALYSIS', correct_count: 3, total_questions: 3, percentage: 100, status: 'STRONG' },
    { section: 'MATH', domain: 'GEOMETRY_TRIGONOMETRY', correct_count: 1, total_questions: 3, percentage: 33, status: 'REVIEW' },
    { section: 'READING_WRITING', domain: 'INFORMATION_IDEAS', correct_count: 2, total_questions: 3, percentage: 67, status: 'DEVELOPING' },
    { section: 'READING_WRITING', domain: 'CRAFT_STRUCTURE', correct_count: 2, total_questions: 3, percentage: 67, status: 'DEVELOPING' },
    { section: 'READING_WRITING', domain: 'EXPRESSION_IDEAS', correct_count: 1, total_questions: 3, percentage: 33, status: 'REVIEW' },
    { section: 'READING_WRITING', domain: 'STANDARD_ENGLISH_CONVENTIONS', correct_count: 1, total_questions: 3, percentage: 33, status: 'REVIEW' },
  ],
  recommendations: [
    {
      title: 'Geometry & Trigonometry Needs Work',
      description: 'Review core geometry formulas, similar triangle ratios, unit circle basics, and right-triangle trigonometry (SOHCAHTOA).',
      topics: ['Area & Volume Formulas', 'Similar Triangles', 'SOHCAHTOA Ratios', 'Unit Circle Basics'],
      priority: 'HIGH'
    },
    {
      title: 'Standard English Conventions Review',
      description: 'Focus on punctuation rules, clause connectors, subject-verb agreement, and modifier placement.',
      topics: ['Punctuation Rules', 'Clause Connectors', 'Subject-Verb Agreement', 'Dangling Modifiers'],
      priority: 'HIGH'
    },
    {
      title: 'Advanced Math Quadratic Functions',
      description: 'Practice factoring higher-degree polynomials, completing the square, and interpreting vertex form.',
      topics: ['Quadratic Formula', 'Completing the Square', 'Vertex Form', 'System of Equations'],
      priority: 'MEDIUM'
    }
  ],
  question_reviews: [
    {
      question_id: 1,
      section: 'MATH',
      domain: 'ALGEBRA',
      difficulty: 'MEDIUM',
      question_text: 'Line k in the xy-plane is defined by y = (3/5)x + 7. Line m is perpendicular to line k. What is the slope of line m?',
      option_a: '3/5',
      option_b: '-5/3',
      option_c: '5/3',
      option_d: '-3/5',
      selected_answer: 'B',
      correct_answer: 'B',
      is_correct: true,
      explanation: 'Perpendicular lines have slopes that are negative reciprocals. Since line k has slope 3/5, the perpendicular slope of line m is -5/3.',
      concept: 'Perpendicular Slopes'
    },
    {
      question_id: 2,
      section: 'MATH',
      domain: 'GEOMETRY_TRIGONOMETRY',
      difficulty: 'HARD',
      question_text: 'In a right triangle ABC, angle C is 90 degrees and sin(A) = 3/5. What is the value of cos(B)?',
      option_a: '3/5',
      option_b: '4/5',
      option_c: '5/3',
      option_d: '3/4',
      selected_answer: 'B',
      correct_answer: 'A',
      is_correct: false,
      explanation: 'In any right triangle, the sine of an acute angle is equal to the cosine of its complementary angle: sin(A) = cos(90° - A) = cos(B). Since sin(A) = 3/5, cos(B) must also be 3/5.',
      concept: 'Complementary Angle Trigonometry'
    },
    {
      question_id: 3,
      section: 'READING_WRITING',
      domain: 'STANDARD_ENGLISH_CONVENTIONS',
      difficulty: 'MEDIUM',
      question_text: 'The researcher concluded that the findings were applicable to urban ecosystems; ______, further field tests are required in rural areas to confirm broader environmental trends.',
      option_a: 'however',
      option_b: 'therefore',
      option_c: 'in fact',
      option_d: 'for example',
      selected_answer: 'B',
      correct_answer: 'A',
      is_correct: false,
      explanation: 'The second clause introduces a contrasting qualification ("further tests required"). "However" logically establishes this contrast between current urban findings and needed rural confirmation.',
      concept: 'Conjunctive Adverbs & Contrast Transitions'
    }
  ]
};

// ── 1. HEADER & USER DROPDOWN ──────────────────────────────────────────────────
function ReportHeader({ studentName, onSignOut }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="test-top-bar" style={{ height: '76px', position: 'sticky', top: 0, zIndex: 100, background: '#ffffff', borderBottom: '1px solid #E4E7EC' }}>
      <div className="test-bar-container" style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Left Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/images/logo1.webp" alt="Nitaq Academy" style={{ height: '32px', width: 'auto', objectFit: 'contain' }} />
        </div>

        {/* Center Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#344054', background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '4px 14px', borderRadius: '100px' }}>
            Diagnostic Assessment Report
          </span>
        </div>

        {/* Right Actions: Print & Profile Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            type="button"
            onClick={() => window.print()}
            style={{
              background: '#FFFFFF',
              border: '1px solid #E4E7EC',
              borderRadius: '10px',
              padding: '8px 14px',
              fontSize: '0.825rem',
              fontWeight: 700,
              color: '#344054',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span>Print / Save PDF</span>
          </button>

          {/* User Menu */}
          <div ref={menuRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setMenuOpen(o => !o)}
              className="sat-user-pill-btn"
              style={{
                background: '#F8FAF9',
                border: '1px solid #DDE5DF',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: '#101828',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2E7D32' }} />
              <span>{String(studentName || 'student').toLowerCase()}</span>
              <span style={{ fontSize: '0.65rem', color: '#667085' }}>▼</span>
            </button>

            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 8px)',
                right: 0,
                width: '180px',
                background: '#ffffff',
                border: '1px solid #E4E7EC',
                borderRadius: '14px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                padding: '6px 0',
                zIndex: 200,
              }}>
                <div style={{ padding: '8px 16px', borderBottom: '1px solid #F1F5F9', fontSize: '0.78rem', color: '#64748B' }}>
                  Signed in as <strong>{studentName}</strong>
                </div>
                <button
                  type="button"
                  onClick={onSignOut}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 16px',
                    background: 'none',
                    border: 'none',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#DC2626',
                    cursor: 'pointer',
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}

// ── 2. DOMAIN ROW COMPONENT ─────────────────────────────────────────────────────
function AnalyticalDomainRow({ dr, onSelectDomain }) {
  const pct = Math.round(dr.percentage);
  const isStrong = dr.status === 'STRONG';
  const isDev = dr.status === 'DEVELOPING';
  const statusClass = isStrong ? 'strong' : isDev ? 'developing' : 'review';
  const barColor = isStrong ? '#2E7D32' : isDev ? '#D97706' : '#DC2626';

  return (
    <div className="sat-domain-row">
      <div className="sat-domain-row-header">
        <span className="sat-domain-row-title">{DOMAIN_DISPLAY[dr.domain] || dr.domain}</span>
        <span className={`sat-status-badge ${statusClass}`}>{STATUS_LABEL[dr.status] || dr.status}</span>
      </div>

      <div className="sat-domain-progress-track">
        <div className="sat-domain-progress-fill" style={{ width: `${pct}%`, background: barColor }} />
      </div>

      <div className="sat-domain-row-footer">
        <span>{dr.correct_count} of {dr.total_questions} correct</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <strong style={{ color: '#101828' }}>{pct}%</strong>
          <button
            type="button"
            onClick={() => onSelectDomain(dr.domain)}
            style={{
              background: 'none',
              border: 'none',
              color: '#2E7D32',
              fontWeight: 700,
              fontSize: '0.75rem',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Review Qs →
          </button>
        </div>
      </div>
    </div>
  );
}

// ── 3. EXPANDABLE QUESTION ROW ────────────────────────────────────────────────
function QuestionAccordionItem({ q, index, onFilterDomain }) {
  const [open, setOpen] = useState(!q.is_correct);

  const choices = [
    { letter: 'A', text: q.option_a },
    { letter: 'B', text: q.option_b },
    { letter: 'C', text: q.option_c },
    { letter: 'D', text: q.option_d },
  ];

  return (
    <div className={`sat-question-row ${!q.is_correct ? 'incorrect' : ''}`}>
      {/* Header Bar */}
      <div className="sat-question-row-header" onClick={() => setOpen(o => !o)}>
        <div>
          <div className="sat-question-row-meta">
            <span className="sat-qcode-tag">
              Q{index + 1} · {q.section === 'MATH' ? 'Math' : 'R&W'} · {DOMAIN_DISPLAY[q.domain] || q.domain}
            </span>
            <span className={`sat-qstatus-chip ${q.is_correct ? 'correct' : 'incorrect'}`}>
              {q.is_correct ? '✓ Correct' : '✕ Incorrect'}
            </span>
          </div>
          <p className="sat-question-snippet">{q.question_text}</p>
        </div>

        <button type="button" className="sat-expand-btn">
          {open ? 'Hide ▲' : 'View Explanation ▼'}
        </button>
      </div>

      {/* Expanded Details */}
      {open && (
        <div className="sat-question-expanded-content">
          {/* Answer Choices List */}
          <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#667085', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
            Answer Options &amp; Selection Analysis
          </div>
          <div className="sat-review-choices-list">
            {choices.map(({ letter, text }) => {
              const isYours = letter === q.selected_answer;
              const isCorrect = letter === q.correct_answer;
              let itemClass = '';
              let badgeClass = '';

              if (isCorrect) {
                itemClass = 'is-correct';
                badgeClass = 'badge-correct';
              } else if (isYours && !isCorrect) {
                itemClass = 'is-yours-wrong';
                badgeClass = 'badge-wrong';
              }

              return (
                <div key={letter} className={`sat-review-choice-item ${itemClass}`}>
                  <span className={`sat-choice-badge ${badgeClass}`}>{letter}</span>
                  <span style={{ flex: 1 }}>{text}</span>
                  {isCorrect && <span style={{ color: '#15803D', fontWeight: 700, fontSize: '0.75rem' }}>✓ Correct Answer</span>}
                  {isYours && !isCorrect && <span style={{ color: '#DC2626', fontWeight: 700, fontSize: '0.75rem' }}>Your Selection</span>}
                </div>
              );
            })}
          </div>

          {/* Explanation Box */}
          {q.explanation && (
            <div className="sat-explanation-box">
              <strong>Why this is correct:</strong>
              <div style={{ marginTop: '4px' }}>{q.explanation}</div>
            </div>
          )}

          {/* Additional Concept & Practice metadata */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #F1F5F9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B' }}>Concept:</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, background: '#F1F5F9', color: '#334155', padding: '3px 10px', borderRadius: '100px' }}>
                {q.concept || DOMAIN_DISPLAY[q.domain] || 'Core SAT Strategy'}
              </span>
            </div>

            <button
              type="button"
              onClick={() => onFilterDomain(q.domain)}
              style={{ background: 'none', border: 'none', color: '#2E7D32', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
            >
              Filter by {DOMAIN_DISPLAY[q.domain] || q.domain} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── MAIN DIAGNOSTIC RESULTS PAGE ──────────────────────────────────────────────
export default function DiagnosticResults() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Filters
  const [reviewFilter, setReviewFilter] = useState('ALL'); // 'ALL' | 'MISSED' | 'CORRECT' | 'MATH' | 'READING_WRITING'
  const [domainFilter, setDomainFilter] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('nitaq_session_token');
    if (!token) {
      setResult(DEMO_RESULT);
      setLoading(false);
      return;
    }

    getDiagnosticResults(token)
      .then(data => {
        setResult(data);
        setLoading(false);
      })
      .catch(e => {
        setResult(DEMO_RESULT);
        setLoading(false);
      });
  }, [navigate]);

  const handleSignOut = () => {
    sessionStorage.removeItem('nitaq_session_token');
    sessionStorage.removeItem('nitaq_session_id');
    sessionStorage.removeItem('nitaq_student');
    navigate('/');
  };

  if (loading) {
    return (
      <div className="sat-report-shell" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <div className="spinner" style={{ width: '40px', height: '40px', margin: '0 auto 16px' }} />
          <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#101828', margin: '0 0 6px 0' }}>Generating 8-Domain Diagnostic Report…</h3>
          <p style={{ color: '#667085', fontSize: '0.875rem', margin: 0 }}>Evaluating answer accuracy and skill priorities</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="sat-report-shell" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ background: '#ffffff', border: '1px solid #E4E7EC', borderRadius: '20px', padding: '36px', maxWidth: '480px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#101828', marginBottom: '8px' }}>Notice</h2>
          <p style={{ color: '#667085', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '24px' }}>{error}</p>
          <button className="admin-btn primary" onClick={() => navigate('/sat/diagnostic')} style={{ width: '100%', justifyContent: 'center' }}>
            Back to Diagnostic Portal
          </button>
        </div>
      </div>
    );
  }

  const studentName = result.student_name || 'Student';
  const totalScore = result.total_score || 0;
  const totalQuestions = result.total_questions || 24;
  const pct = Math.round((totalScore / totalQuestions) * 100);

  const mathScore = result.math_score || 0;
  const rwScore = result.reading_writing_score || 0;

  const mathDomains = result.domain_results?.filter(d => d.section === 'MATH') || [];
  const rwDomains = result.domain_results?.filter(d => d.section === 'READING_WRITING') || [];

  const allReviews = result.question_reviews && result.question_reviews.length > 0
    ? result.question_reviews
    : (result.missed_questions || []).map(mq => ({ ...mq, is_correct: false }));

  // Dynamic filter logic
  const filteredReviews = allReviews.filter(q => {
    if (domainFilter && q.domain !== domainFilter) return false;
    if (reviewFilter === 'MISSED') return !q.is_correct;
    if (reviewFilter === 'CORRECT') return q.is_correct;
    if (reviewFilter === 'MATH') return q.section === 'MATH';
    if (reviewFilter === 'READING_WRITING') return q.section === 'READING_WRITING';
    return true;
  });

  // Dynamic Snapshot message calculation
  const weakDomains = (result.domain_results || [])
    .filter(d => d.status === 'REVIEW' || d.status === 'DEVELOPING')
    .map(d => DOMAIN_DISPLAY[d.domain] || d.domain);

  const strongDomains = (result.domain_results || [])
    .filter(d => d.status === 'STRONG')
    .map(d => DOMAIN_DISPLAY[d.domain] || d.domain);

  const strongestText = strongDomains.length > 0
    ? strongDomains.join(', ')
    : 'general question accuracy';

  const weakestText = weakDomains.length > 0
    ? weakDomains.slice(0, 3).join(', ')
    : 'all 8 core Digital SAT topics';

  return (
    <div className="sat-report-shell">
      <SEO
        title={`SAT Diagnostic Report — ${studentName} — Nitaq Academy`}
        description={`Authoritative SAT diagnostic report and skill breakdown for ${studentName}.`}
      />

      {/* 1. Header */}
      <ReportHeader studentName={studentName} onSignOut={handleSignOut} />

      {/* 2. Main Report Container */}
      <main className="sat-report-container">
        <div className="sat-report-card">

          {/* HERO */}
          <div>
            <div className="sat-report-badge">
              ✓ DIAGNOSTIC COMPLETE · 8-DOMAIN ANALYSIS
            </div>
            <h1 className="sat-report-title">
              {studentName}'s Diagnostic Performance
            </h1>
            <p className="sat-report-subtitle">
              Your authoritative diagnostic performance breakdown across all 8 Digital SAT domains.
            </p>
          </div>

          {/* METADATA ROW */}
          <div className="sat-report-meta-row">
            <div className="sat-report-meta-item">
              <span>Completed:</span>
              <strong>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</strong>
            </div>
            <div className="sat-report-meta-item">
              <span>Assessment:</span>
              <strong>{totalQuestions} Questions</strong>
            </div>
            <div className="sat-report-meta-item">
              <span>Sections:</span>
              <strong>Mathematics + Reading &amp; Writing</strong>
            </div>
          </div>

          {/* EXECUTIVE SUMMARY (4 METRIC CARDS) */}
          <div className="sat-summary-grid">
            {/* Score */}
            <div className="sat-metric-card">
              <div className="sat-metric-label">TOTAL DIAGNOSTIC SCORE</div>
              <div className="sat-metric-value">
                {totalScore} <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>/ {totalQuestions}</span>
              </div>
              <div className="sat-metric-sub">
                {pct}% accuracy · {totalScore} correct, {totalQuestions - totalScore} incorrect
              </div>
            </div>

            {/* Readiness */}
            <div className="sat-metric-card">
              <div className="sat-metric-label">ESTIMATED READINESS</div>
              <div className="sat-metric-value" style={{ fontSize: '1.35rem' }}>
                {result.estimated_sat_score || 'Score Pending'}
              </div>
              <div className="sat-metric-sub">
                {result.overall_band || 'Foundational Review Needed'}
              </div>
            </div>

            {/* Math */}
            <div className="sat-metric-card">
              <div className="sat-metric-label">MATHEMATICS</div>
              <div className="sat-metric-value">
                {mathScore} <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>/ 12</span>
              </div>
              <div className="sat-metric-sub">
                {Math.round((mathScore / 12) * 100)}% accuracy (4 domains)
              </div>
            </div>

            {/* Reading & Writing */}
            <div className="sat-metric-card">
              <div className="sat-metric-label">READING &amp; WRITING</div>
              <div className="sat-metric-value">
                {rwScore} <span style={{ fontSize: '1.1rem', color: '#94A3B8' }}>/ 12</span>
              </div>
              <div className="sat-metric-sub">
                {Math.round((rwScore / 12) * 100)}% accuracy (4 domains)
              </div>
            </div>
          </div>

          {/* PERFORMANCE SNAPSHOT */}
          <div className="sat-snapshot-box">
            <div className="sat-snapshot-title">Performance Snapshot</div>
            <p className="sat-snapshot-text">
              Your strongest relative baseline area is <strong>{strongestText}</strong>. Your highest-priority improvement target areas are <strong>{weakestText}</strong>. Focus first on your highest-priority domain skills below, then retake the diagnostic to measure score progression.
            </p>
          </div>

          {/* MODULE & 8-DOMAIN ANALYTICAL BREAKDOWN */}
          <div className="sat-module-columns">
            {/* Math Side */}
            <div>
              <div className="sat-module-block-header">
                <h3 className="sat-module-block-title">Mathematics</h3>
                <span className="sat-module-block-score">{mathScore} / 12 Correct</span>
              </div>
              <div className="sat-domain-list">
                {mathDomains.map(dr => (
                  <AnalyticalDomainRow
                    key={dr.domain}
                    dr={dr}
                    onSelectDomain={(d) => {
                      setDomainFilter(d);
                      setReviewFilter('ALL');
                      const elem = document.getElementById('question-review-section');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Reading & Writing Side */}
            <div>
              <div className="sat-module-block-header">
                <h3 className="sat-module-block-title">Reading &amp; Writing</h3>
                <span className="sat-module-block-score">{rwScore} / 12 Correct</span>
              </div>
              <div className="sat-domain-list">
                {rwDomains.map(dr => (
                  <AnalyticalDomainRow
                    key={dr.domain}
                    dr={dr}
                    onSelectDomain={(d) => {
                      setDomainFilter(d);
                      setReviewFilter('ALL');
                      const elem = document.getElementById('question-review-section');
                      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TARGETED STUDY PRIORITIES */}
          {result.recommendations?.length > 0 && (
            <div style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#101828', margin: '0 0 16px 0' }}>
                Targeted Study Priorities
              </h2>
              <div className="sat-priorities-list">
                {result.recommendations.map((rec, i) => {
                  const rawPrio = String(rec?.priority || 'HIGH').toUpperCase();
                  const prioClass = (rawPrio === 'HIGH' || rawPrio === '1') ? 'high' : (rawPrio === 'MEDIUM' || rawPrio === '2') ? 'medium' : 'low';
                  const displayPrio = rawPrio === '1' ? 'HIGH' : rawPrio === '2' ? 'MEDIUM' : rawPrio === '3' ? 'LOW' : rawPrio;

                  return (
                    <div key={i} className="sat-priority-card">
                      <div style={{ flex: 1 }}>
                        <h3 className="sat-priority-title">{rec.title}</h3>
                        <p className="sat-priority-desc">{rec.description}</p>
                        <div className="sat-topic-pills">
                          {Array.isArray(rec.topics) && rec.topics.map((t, j) => (
                            <span key={j} className="sat-topic-pill">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className={`sat-priority-tag ${prioClass}`}>
                        <span style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: prioClass === 'high' ? '#DC2626' : prioClass === 'medium' ? '#D97706' : '#2E7D32'
                        }} />
                        <span>Priority {displayPrio}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PERSONALIZED NEXT STEPS */}
          <div style={{ marginBottom: '44px', background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '28px' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#101828', margin: '0 0 16px 0' }}>
              Your Recommended Next Steps
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E7D32', marginBottom: '6px' }}>01</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#101828' }}>Review highest-priority domains</div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E7D32', marginBottom: '6px' }}>02</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#101828' }}>Practice recommended concepts</div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E7D32', marginBottom: '6px' }}>03</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#101828' }}>Complete targeted problem sets</div>
              </div>
              <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '16px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2E7D32', marginBottom: '6px' }}>04</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#101828' }}>Retake diagnostic assessment</div>
              </div>
            </div>
          </div>

          {/* QUESTION REVIEW SECTION */}
          {allReviews.length > 0 && (
            <div id="question-review-section" className="sat-question-review-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#101828', margin: 0 }}>
                    Question Review ({filteredReviews.length} of {allReviews.length})
                  </h2>
                  <p style={{ color: '#667085', fontSize: '0.85rem', margin: '4px 0 0 0' }}>
                    Review every question from your diagnostic, your selection, the verified answer key, and step-by-step reasoning.
                  </p>
                </div>

                {domainFilter && (
                  <button
                    type="button"
                    onClick={() => setDomainFilter('')}
                    style={{ background: '#EFF8F1', border: '1px solid #CDE8D2', color: '#2E7D32', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: '100px', cursor: 'pointer' }}
                  >
                    Clear Filter: {DOMAIN_DISPLAY[domainFilter] || domainFilter} ✕
                  </button>
                )}
              </div>

              {/* Segmented Filter Buttons */}
              <div className="sat-review-filters">
                <button
                  type="button"
                  className={`sat-filter-btn ${reviewFilter === 'ALL' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('ALL')}
                >
                  All ({allReviews.length})
                </button>

                <button
                  type="button"
                  className={`sat-filter-btn ${reviewFilter === 'MISSED' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('MISSED')}
                >
                  Needs Review ({allReviews.filter(q => !q.is_correct).length})
                </button>

                <button
                  type="button"
                  className={`sat-filter-btn ${reviewFilter === 'CORRECT' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('CORRECT')}
                >
                  Correct ({allReviews.filter(q => q.is_correct).length})
                </button>

                <button
                  type="button"
                  className={`sat-filter-btn ${reviewFilter === 'MATH' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('MATH')}
                >
                  Math
                </button>

                <button
                  type="button"
                  className={`sat-filter-btn ${reviewFilter === 'READING_WRITING' ? 'active' : ''}`}
                  onClick={() => setReviewFilter('READING_WRITING')}
                >
                  Reading &amp; Writing
                </button>
              </div>

              {/* Accordion Questions List */}
              <div className="sat-question-accordion-list">
                {filteredReviews.map((q, i) => (
                  <QuestionAccordionItem
                    key={q.question_id || i}
                    q={q}
                    index={i}
                    onFilterDomain={d => setDomainFilter(d)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* FINAL REPORT CTA & CONCLUDING MESSAGE */}
          <div style={{
            background: 'linear-gradient(135deg, #F5FAF6 0%, #FFFFFF 100%)',
            border: '1px solid #E1ECE4',
            borderRadius: '24px',
            padding: '32px 36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '1.2rem', fontWeight: 800, color: '#101828' }}>
                Your diagnostic is a starting point, not a final score.
              </h3>
              <p style={{ margin: 0, color: '#475467', fontSize: '0.925rem', lineHeight: 1.55, maxWidth: '640px' }}>
                Use your highest-priority areas to guide your preparation, practice consistently, and retake the diagnostic to measure progress.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/sat/diagnostic" className="admin-btn outline" style={{ padding: '12px 20px', borderRadius: '12px', fontSize: '0.88rem' }}>
                Retake Diagnostic
              </Link>
              <Link to="/" className="admin-btn primary" style={{ padding: '12px 24px', borderRadius: '12px', fontSize: '0.88rem', background: 'linear-gradient(90deg, #2E7D32 0%, #2BBBAD 100%)' }}>
                Explore SAT Programs →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
