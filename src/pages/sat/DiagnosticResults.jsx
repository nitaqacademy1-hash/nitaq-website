/**
 * DiagnosticResults.jsx — Premium, minimal SAT diagnostic score report.
 * Provides full 8-domain breakdown, estimated readiness range, recommendations,
 * and comprehensive 24-question review with filters.
 */

import React, { useState, useEffect } from 'react';
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
  STRONG: 'Strong Baseline',
  DEVELOPING: 'Developing',
  REVIEW: 'Needs Review',
};

function DomainResultCard({ dr }) {
  const pct = Math.round(dr.percentage);
  const isHigh = dr.status === 'STRONG';
  const isMedium = dr.status === 'DEVELOPING';
  const badgeBg = isHigh ? '#F0FDF4' : isMedium ? '#FFFBEB' : '#FEF2F2';
  const badgeColor = isHigh ? '#15803D' : isMedium ? '#B45309' : '#B91C1C';
  const barColor = isHigh ? '#15803D' : isMedium ? '#D97706' : '#DC2626';

  return (
    <div style={{
      background: '#FAFAFA',
      border: '1px solid #E2E8F0',
      borderRadius: '14px',
      padding: '18px 20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0F172A' }}>
            {DOMAIN_DISPLAY[dr.domain] || dr.domain}
          </span>
          <span style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: '6px',
            background: badgeBg,
            color: badgeColor,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            {STATUS_LABEL[dr.status] || dr.status}
          </span>
        </div>

        <div style={{ height: '5px', background: '#E2E8F0', borderRadius: '100px', overflow: 'hidden', margin: '10px 0 8px 0' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: barColor, borderRadius: '100px' }} />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
        <span>{dr.correct_count} of {dr.total_questions} correct</span>
        <span style={{ fontWeight: 700, color: '#0F172A' }}>{pct}%</span>
      </div>
    </div>
  );
}

function QuestionItemCard({ q, index }) {
  const [open, setOpen] = useState(!q.is_correct);
  const opts = [
    { letter: 'A', text: q.option_a },
    { letter: 'B', text: q.option_b },
    { letter: 'C', text: q.option_c },
    { letter: 'D', text: q.option_d },
  ];

  return (
    <div style={{
      background: '#FAFAFA',
      border: `1px solid ${q.is_correct ? '#E2E8F0' : '#FECACA'}`,
      borderRadius: '14px',
      padding: '18px 20px',
      transition: 'all 0.15s ease'
    }}>
      <div
        onClick={() => setOpen(o => !o)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer', gap: '12px' }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Q{index + 1} · {q.section === 'MATH' ? 'Math' : 'R&W'} · {DOMAIN_DISPLAY[q.domain] || q.domain}
            </span>
            <span style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              padding: '2px 8px',
              borderRadius: '6px',
              background: q.is_correct ? '#DCFCE7' : '#FEE2E2',
              color: q.is_correct ? '#15803D' : '#DC2626'
            }}>
              {q.is_correct ? '✓ Correct' : '✗ Needs Review'}
            </span>
          </div>

          <p style={{ margin: '4px 0 0 0', fontSize: '0.92rem', color: '#0F172A', fontWeight: 600, lineHeight: 1.5 }}>
            {q.question_text}
          </p>
        </div>

        <span style={{ fontSize: '0.78rem', color: '#64748B', padding: '4px 10px', background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '6px', flexShrink: 0 }}>
          {open ? 'Hide ▲' : 'Review ▼'}
        </span>
      </div>

      {open && (
        <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
            {opts.map(({ letter, text }) => {
              const isYours = letter === q.selected_answer;
              const isCorrect = letter === q.correct_answer;
              return (
                <div
                  key={letter}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    fontSize: '0.86rem',
                    background: isCorrect ? '#F0FDF4' : (isYours && !isCorrect) ? '#FEF2F2' : '#ffffff',
                    border: `1.5px solid ${isCorrect ? '#86EFAC' : (isYours && !isCorrect) ? '#FECACA' : '#E2E8F0'}`,
                    color: '#0F172A',
                  }}
                >
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: isCorrect ? '#15803D' : (isYours && !isCorrect) ? '#DC2626' : '#F1F5F9',
                    color: isCorrect || (isYours && !isCorrect) ? '#ffffff' : '#475569',
                    fontWeight: 800,
                    fontSize: '0.78rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {letter}
                  </span>
                  <span style={{ flex: 1 }}>{text}</span>
                  {isCorrect && <span style={{ color: '#15803D', fontWeight: 700, fontSize: '0.75rem' }}>✓ Correct Answer</span>}
                  {isYours && !isCorrect && <span style={{ color: '#DC2626', fontWeight: 700, fontSize: '0.75rem' }}>Your Selection</span>}
                </div>
              );
            })}
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '12px 16px', fontSize: '0.84rem', color: '#475569', lineHeight: 1.5 }}>
            <strong style={{ color: '#0F172A' }}>Solution Explanation:</strong> {q.explanation}
          </div>
        </div>
      )}
    </div>
  );
}

export default function DiagnosticResults() {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [reviewFilter, setReviewFilter] = useState('ALL'); // 'ALL' | 'MISSED' | 'CORRECT'

  useEffect(() => {
    const token = sessionStorage.getItem('nitaq_session_token');
    if (!token) {
      navigate('/sat/diagnostic', { replace: true });
      return;
    }

    getDiagnosticResults(token)
      .then(data => {
        setResult(data);
        setLoading(false);
      })
      .catch(e => {
        setError(e instanceof ApiError ? e.message : 'Could not load your diagnostic results. Please try again.');
        setLoading(false);
      });
  }, [navigate]);

  if (loading) {
    return (
      <div className="quiz-platform-shell">
        <header className="test-top-bar">
          <div className="test-bar-container">
            <div className="test-bar-brand">
              <img src="/images/logo1.webp" alt="Nitaq Academy" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
        </header>
        <div className="quiz-loading-container">
          <div className="spinner" style={{ width: '36px', height: '36px', margin: '0 auto 16px' }} />
          <p style={{ color: '#0F172A', fontWeight: 700, fontSize: '1rem' }}>Calculating your 8-domain score analysis…</p>
          <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Authoritative backend verification in progress</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-platform-shell">
        <header className="test-top-bar">
          <div className="test-bar-container">
            <div className="test-bar-brand">
              <img src="/images/logo1.webp" alt="Nitaq Academy" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
            </div>
          </div>
        </header>
        <div className="quiz-error-container">
          <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '20px', padding: '36px', maxWidth: '480px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Notice
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '24px' }}>
              {error}
            </p>
            <button className="admin-btn primary" onClick={() => navigate('/sat/diagnostic')} style={{ width: '100%', justifyContent: 'center' }}>
              Back to SAT Diagnostic
            </button>
          </div>
        </div>
      </div>
    );
  }

  const mathDomains = result.domain_results?.filter(d => d.section === 'MATH') || [];
  const rwDomains   = result.domain_results?.filter(d => d.section === 'READING_WRITING') || [];
  const studentName = result.student_name || 'Student';
  const pct = Math.round((result.total_score / result.total_questions) * 100);

  // Filtered review questions
  const allReviews = result.question_reviews && result.question_reviews.length > 0
    ? result.question_reviews
    : (result.missed_questions || []).map(mq => ({ ...mq, is_correct: false }));

  const filteredReviews = allReviews.filter(q => {
    if (reviewFilter === 'MISSED') return !q.is_correct;
    if (reviewFilter === 'CORRECT') return q.is_correct;
    return true;
  });

  return (
    <div className="quiz-platform-shell">
      <SEO
        title={`SAT Diagnostic Results — ${studentName} — Nitaq Academy`}
        description={`${studentName} scored ${result.total_score}/${result.total_questions} on the Nitaq Academy SAT Diagnostic.`}
      />

      {/* Top Bar */}
      <header className="test-top-bar">
        <div className="test-bar-container">
          <div className="test-bar-brand">
            <img src="/images/logo1.webp" alt="Nitaq Academy" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
          </div>

          <div className="test-bar-center">
            <span className="test-active-section">
              Diagnostic Assessment Report
            </span>
          </div>

          <div className="test-bar-right">
            <button
              onClick={() => window.print()}
              className="admin-btn outline"
              style={{ padding: '6px 12px', fontSize: '0.78rem' }}
            >
              Print / Save PDF
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="section-intro-wrapper" style={{ maxWidth: '960px', marginTop: '32px' }}>
        <div className="section-intro-card" style={{ padding: 'clamp(28px, 4vw, 44px)' }}>

          {/* Header Banner */}
          <div style={{ marginBottom: '28px' }}>
            <div className="intro-step-badge">
              ✓ Diagnostic Complete · 8-Domain Analysis
            </div>
            <h1 className="intro-title" style={{ marginTop: '12px', fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>
              {studentName}'s Diagnostic Performance
            </h1>
            <p className="intro-subtitle" style={{ marginBottom: '24px' }}>
              Your authoritative diagnostic performance breakdown across 8 Digital SAT domains.
            </p>
          </div>

          {/* Primary Metrics Grid */}
          <div className="admin-stat-grid" style={{ marginBottom: '32px' }}>
            <div className="admin-stat-card">
              <div className="stat-label">Total Diagnostic Score</div>
              <div className="stat-value" style={{ color: '#0F172A' }}>
                {result.total_score} <span style={{ fontSize: '1.1rem', color: '#94A3B8', fontWeight: 600 }}>/ {result.total_questions}</span>
              </div>
              <div className="stat-sub">{pct}% total accuracy ({result.total_score} correct, {result.total_questions - result.total_score} incorrect)</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-label">Estimated Readiness Band</div>
              <div className="stat-value" style={{ fontSize: '1.25rem', color: '#0F172A', lineHeight: 1.3 }}>
                {result.estimated_sat_score}
              </div>
              <div className="stat-sub">{result.overall_band}</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-label">Mathematics Module</div>
              <div className="stat-value">
                {result.math_score} <span style={{ fontSize: '1.1rem', color: '#94A3B8', fontWeight: 600 }}>/ 12</span>
              </div>
              <div className="stat-sub">{Math.round((result.math_score / 12) * 100)}% accuracy (4 domains)</div>
            </div>

            <div className="admin-stat-card">
              <div className="stat-label">Reading &amp; Writing Module</div>
              <div className="stat-value">
                {result.reading_writing_score} <span style={{ fontSize: '1.1rem', color: '#94A3B8', fontWeight: 600 }}>/ 12</span>
              </div>
              <div className="stat-sub">{Math.round((result.reading_writing_score / 12) * 100)}% accuracy (4 domains)</div>
            </div>
          </div>

          {/* Section 1: Mathematics Domains Breakdown */}
          {mathDomains.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Mathematics Domains (4 Domains)
                </h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                  {result.math_score} / 12 Correct
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {mathDomains.map(dr => <DomainResultCard key={dr.domain} dr={dr} />)}
              </div>
            </div>
          )}

          {/* Section 2: Reading & Writing Domains Breakdown */}
          {rwDomains.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                  Reading &amp; Writing Domains (4 Domains)
                </h3>
                <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                  {result.reading_writing_score} / 12 Correct
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {rwDomains.map(dr => <DomainResultCard key={dr.domain} dr={dr} />)}
              </div>
            </div>
          )}

          {/* Personalized Recommendations */}
          {result.recommendations?.length > 0 && (
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: '0 0 14px 0' }}>
                Targeted Study Priorities
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {result.recommendations.map((rec, i) => (
                  <div key={i} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '18px 20px' }}>
                    <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '0.92rem', marginBottom: '4px' }}>
                      {rec.title}
                    </div>
                    <div style={{ color: '#475569', fontSize: '0.84rem', lineHeight: 1.5, marginBottom: '10px' }}>
                      {rec.description}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {rec.topics.map((t, j) => (
                        <span key={j} style={{ background: '#ffffff', border: '1px solid #E2E8F0', color: '#334155', padding: '3px 10px', borderRadius: '100px', fontSize: '0.74rem', fontWeight: 600 }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 24-Question Review Section */}
          {allReviews.length > 0 && (
            <div style={{ marginBottom: '36px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                    Question Review ({allReviews.length} Questions)
                  </h3>
                  <p style={{ color: '#64748B', fontSize: '0.8rem', margin: '2px 0 0 0' }}>
                    Inspect each question, your selection, the verified answer key, and step-by-step explanations.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setReviewFilter('ALL')}
                    className="admin-btn outline"
                    style={{
                      fontSize: '0.75rem',
                      padding: '5px 10px',
                      background: reviewFilter === 'ALL' ? '#0F172A' : '#ffffff',
                      color: reviewFilter === 'ALL' ? '#ffffff' : '#334155'
                    }}
                  >
                    All ({allReviews.length})
                  </button>

                  <button
                    type="button"
                    onClick={() => setReviewFilter('MISSED')}
                    className="admin-btn outline"
                    style={{
                      fontSize: '0.75rem',
                      padding: '5px 10px',
                      background: reviewFilter === 'MISSED' ? '#0F172A' : '#ffffff',
                      color: reviewFilter === 'MISSED' ? '#ffffff' : '#334155'
                    }}
                  >
                    Needs Review ({allReviews.filter(q => !q.is_correct).length})
                  </button>

                  <button
                    type="button"
                    onClick={() => setReviewFilter('CORRECT')}
                    className="admin-btn outline"
                    style={{
                      fontSize: '0.75rem',
                      padding: '5px 10px',
                      background: reviewFilter === 'CORRECT' ? '#0F172A' : '#ffffff',
                      color: reviewFilter === 'CORRECT' ? '#ffffff' : '#334155'
                    }}
                  >
                    Correct ({allReviews.filter(q => q.is_correct).length})
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredReviews.map((q, i) => (
                  <QuestionItemCard key={q.question_id || i} q={q} index={i} />
                ))}
              </div>
            </div>
          )}

          {/* Next Steps CTA Card */}
          <div style={{
            background: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '20px',
            padding: '28px 32px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h4 style={{ margin: '0 0 4px 0', fontSize: '1.05rem', fontWeight: 800, color: '#0F172A' }}>
                Ready to prepare for the official Digital SAT?
              </h4>
              <p style={{ margin: 0, color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5 }}>
                Our expert mentors provide 1-on-1 strategy sessions tailored directly to your diagnostic strengths and weaknesses.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link to="/sat/diagnostic" className="admin-btn outline">
                Retake Diagnostic
              </Link>
              <Link to="/" className="admin-btn primary">
                Explore SAT Programs →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
