/**
 * PremiumStudentPdfReport.jsx — Minimalist, Executive SAT Diagnostic Assessment PDF Report.
 * Clean typography, top-left Nitaq logo alignment, generous spacing, subtle borders,
 * and high-fidelity 1-click HTML2PDF + print vector export.
 */

import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

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

const STATUS_CHIP = {
  STRONG: { label: 'Strong', color: '#166534', bg: '#F0FDF4', border: '#DCFCE7' },
  DEVELOPING: { label: 'Developing', color: '#92400E', bg: '#FFFBEB', border: '#FDE68A' },
  REVIEW: { label: 'Needs Review', color: '#991B1B', bg: '#FEF2F2', border: '#FEE2E2' },
};

export default function PremiumStudentPdfReport({ result }) {
  const reportRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  if (!result) return null;

  const studentName = result.student_name || 'Student';
  const totalScore = result.total_score ?? 0;
  const totalQuestions = result.total_questions ?? 24;
  const accuracyPct = Math.round((totalScore / Math.max(totalQuestions, 1)) * 100);
  const mathScore = result.math_score ?? 0;
  const rwScore = result.reading_writing_score ?? 0;

  const mathDomains = result.domain_results?.filter(d => d.section === 'MATH') || [];
  const rwDomains = result.domain_results?.filter(d => d.section === 'READING_WRITING') || [];

  const questionList = (showAllQuestions && result.question_reviews?.length > 0)
    ? result.question_reviews
    : (result.missed_questions || []);

  const handleDownloadPdf = async () => {
    if (!reportRef.current) return;
    setDownloading(true);
    try {
      const element = reportRef.current;
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Nitaq_SAT_Diagnostic_Report_${studentName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          backgroundColor: '#FFFFFF',
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF generation error:', err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="pdf-report-wrapper">
      {/* Top Action Toolbar (Hidden during print/PDF render) */}
      <div className="no-print pdf-actions-bar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#475569' }}>
            Report Options:
          </span>
          <button
            type="button"
            className="admin-btn outline"
            onClick={() => setShowAllQuestions(prev => !prev)}
            style={{ fontSize: '0.78rem', padding: '6px 12px' }}
          >
            {showAllQuestions ? 'View Missed Questions Only' : `View All Questions (${result.question_reviews?.length || 24})`}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="button"
            className="admin-btn outline"
            onClick={() => window.print()}
            style={{ fontSize: '0.82rem', padding: '8px 16px' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect x="6" y="14" width="12" height="8" />
            </svg>
            <span>Print Report</span>
          </button>

          <button
            type="button"
            className="admin-btn primary"
            onClick={handleDownloadPdf}
            disabled={downloading}
            style={{
              fontSize: '0.82rem',
              padding: '8px 18px',
              background: '#166534',
              borderColor: '#166534',
              color: '#ffffff',
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>{downloading ? 'Generating PDF…' : 'Download PDF Report'}</span>
          </button>
        </div>
      </div>

      {/* Printable Minimal Executive PDF Canvas */}
      <div className="pdf-document-canvas" ref={reportRef}>
        
        {/* ── HEADER WITH TOP-LEFT LOGO ALIGNMENT ──────────────────── */}
        <header className="pdf-header-container">
          <div className="pdf-header-left">
            <img
              src="/images/logo1.webp"
              alt="Nitaq Academy"
              className="pdf-logo-img"
            />
            <div className="pdf-logo-divider" />
            <div>
              <div className="pdf-institution-name">NITAQ TRAINING INSTITUTE</div>
              <div className="pdf-institution-sub">SHARJAH, UNITED ARAB EMIRATES</div>
            </div>
          </div>

          <div className="pdf-header-right">
            <div className="pdf-report-badge">DIGITAL SAT® DIAGNOSTIC REPORT</div>
            <div className="pdf-report-date">
              Issue Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
            <div className="pdf-report-id">Record ID: #{result.session_id}</div>
          </div>
        </header>

        <div className="pdf-divider-line" />

        {/* ── STUDENT PROFILE BANNER ───────────────────────────────── */}
        <section className="pdf-student-card">
          <div className="pdf-student-main">
            <h1 className="pdf-student-name">{studentName}</h1>
            <div className="pdf-student-meta-list">
              <span><strong>Email:</strong> {result.student_email}</span>
              <span className="pdf-bullet">•</span>
              <span><strong>Phone:</strong> {result.student_phone}</span>
              <span className="pdf-bullet">•</span>
              <span><strong>Grade:</strong> {result.student_grade}</span>
              <span className="pdf-bullet">•</span>
              <span><strong>Target Score:</strong> {result.target_sat_score}</span>
            </div>
          </div>
          <div className="pdf-lead-badge-box">
            <span className="pdf-lead-status-chip">
              {result.lead_status ? result.lead_status.replace(/_/g, ' ') : 'COMPLETED'}
            </span>
          </div>
        </section>

        {/* ── EXECUTIVE PERFORMANCE SUMMARY ────────────────────────── */}
        <section className="pdf-section-box">
          <h2 className="pdf-section-title">
            Executive Performance Summary
          </h2>

          <div className="pdf-scores-grid">
            {/* Total Score */}
            <div className="pdf-score-card highlight">
              <div className="pdf-score-label">TOTAL DIAGNOSTIC SCORE</div>
              <div className="pdf-score-value">
                {totalScore} <span className="pdf-score-max">/ {totalQuestions}</span>
              </div>
              <div className="pdf-score-sub">{accuracyPct}% Overall Accuracy</div>
            </div>

            {/* Estimated SAT */}
            <div className="pdf-score-card">
              <div className="pdf-score-label">ESTIMATED SAT RANGE</div>
              <div className="pdf-score-value sat-estimate">
                {result.estimated_sat_score || 'Pending'}
              </div>
              <div className="pdf-score-sub">{result.overall_band || 'Baseline Performance'}</div>
            </div>

            {/* Math */}
            <div className="pdf-score-card">
              <div className="pdf-score-label">MATHEMATICS SECTION</div>
              <div className="pdf-score-value">
                {mathScore} <span className="pdf-score-max">/ 12</span>
              </div>
              <div className="pdf-score-sub">{Math.round((mathScore / 12) * 100)}% Accuracy</div>
            </div>

            {/* Reading & Writing */}
            <div className="pdf-score-card">
              <div className="pdf-score-label">READING &amp; WRITING</div>
              <div className="pdf-score-value">
                {rwScore} <span className="pdf-score-max">/ 12</span>
              </div>
              <div className="pdf-score-sub">{Math.round((rwScore / 12) * 100)}% Accuracy</div>
            </div>
          </div>
        </section>

        {/* ── 8-DOMAIN ANALYTICAL BREAKDOWN ──────────────────────────── */}
        <section className="pdf-section-box avoid-break">
          <h2 className="pdf-section-title">
            8-Domain Analytical Skill Breakdown
          </h2>

          <div className="pdf-domains-container">
            {/* Math Domains */}
            <div className="pdf-domain-column">
              <h3 className="pdf-column-header">Mathematics Domains</h3>
              <div className="pdf-domain-table">
                {mathDomains.map(dr => {
                  const pct = Math.round(dr.percentage);
                  const statusInfo = STATUS_CHIP[dr.status] || STATUS_CHIP.DEVELOPING;
                  return (
                    <div key={dr.domain} className="pdf-domain-row">
                      <div className="pdf-domain-row-top">
                        <span className="pdf-domain-name">{DOMAIN_DISPLAY[dr.domain] || dr.domain}</span>
                        <span
                          className="pdf-status-pill"
                          style={{ color: statusInfo.color, background: statusInfo.bg, borderColor: statusInfo.border }}
                        >
                          {statusInfo.label}
                        </span>
                      </div>
                      <div className="pdf-domain-bar-bg">
                        <div className="pdf-domain-bar-fill" style={{ width: `${pct}%`, background: statusInfo.color }} />
                      </div>
                      <div className="pdf-domain-row-bottom">
                        <span>{dr.correct_count} of {dr.total_questions} correct</span>
                        <strong style={{ color: '#0F172A' }}>{pct}%</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reading & Writing Domains */}
            <div className="pdf-domain-column">
              <h3 className="pdf-column-header">Reading &amp; Writing Domains</h3>
              <div className="pdf-domain-table">
                {rwDomains.map(dr => {
                  const pct = Math.round(dr.percentage);
                  const statusInfo = STATUS_CHIP[dr.status] || STATUS_CHIP.DEVELOPING;
                  return (
                    <div key={dr.domain} className="pdf-domain-row">
                      <div className="pdf-domain-row-top">
                        <span className="pdf-domain-name">{DOMAIN_DISPLAY[dr.domain] || dr.domain}</span>
                        <span
                          className="pdf-status-pill"
                          style={{ color: statusInfo.color, background: statusInfo.bg, borderColor: statusInfo.border }}
                        >
                          {statusInfo.label}
                        </span>
                      </div>
                      <div className="pdf-domain-bar-bg">
                        <div className="pdf-domain-bar-fill" style={{ width: `${pct}%`, background: statusInfo.color }} />
                      </div>
                      <div className="pdf-domain-row-bottom">
                        <span>{dr.correct_count} of {dr.total_questions} correct</span>
                        <strong style={{ color: '#0F172A' }}>{pct}%</strong>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── TARGETED STUDY PRIORITIES & ADVISORY ────────────────────── */}
        {result.recommendations?.length > 0 && (
          <section className="pdf-section-box avoid-break">
            <h2 className="pdf-section-title">
              Targeted Study Priorities &amp; Recommendations
            </h2>
            <div className="pdf-priorities-list">
              {result.recommendations.map((rec, i) => {
                const prio = String(rec.priority || 'HIGH').toUpperCase();
                const isHigh = prio === 'HIGH' || prio === '1';
                return (
                  <div key={i} className="pdf-priority-item">
                    <div className="pdf-priority-badge-col">
                      <span className={`pdf-prio-tag ${isHigh ? 'high' : 'med'}`}>
                        {isHigh ? 'Priority High' : 'Priority Medium'}
                      </span>
                    </div>
                    <div className="pdf-priority-content">
                      <h4 className="pdf-priority-title">{rec.title}</h4>
                      <p className="pdf-priority-desc">{rec.description}</p>
                      {Array.isArray(rec.topics) && rec.topics.length > 0 && (
                        <div className="pdf-topics-wrap">
                          {rec.topics.map((topic, j) => (
                            <span key={j} className="pdf-topic-chip">{topic}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── QUESTION-BY-QUESTION DIAGNOSTIC REVIEW ───────────────────── */}
        {questionList.length > 0 && (
          <section className="pdf-section-box avoid-break">
            <h2 className="pdf-section-title">
              Diagnostic Question Review ({questionList.length} Items)
            </h2>
            <div className="pdf-questions-list">
              {questionList.map((q, idx) => {
                const isCorrect = q.is_correct ?? false;
                return (
                  <div key={q.question_id || idx} className={`pdf-q-card ${isCorrect ? 'correct' : 'incorrect'} avoid-break`}>
                    <div className="pdf-q-header">
                      <span className="pdf-q-num">Q{idx + 1}</span>
                      <span className="pdf-q-meta">
                        {q.section === 'MATH' ? 'Math' : 'Reading & Writing'} • {DOMAIN_DISPLAY[q.domain] || q.domain}
                      </span>
                      <span className={`pdf-q-status ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '✓ Correct' : '✕ Missed'}
                      </span>
                    </div>

                    <p className="pdf-q-text">{q.question_text}</p>

                    <div className="pdf-q-answers-row">
                      <span><strong>Student Choice:</strong> <code className={isCorrect ? 'code-correct' : 'code-wrong'}>{q.selected_answer || 'None'}</code></span>
                      <span><strong>Verified Answer:</strong> <code className="code-correct">{q.correct_answer}</code></span>
                    </div>

                    {q.explanation && (
                      <div className="pdf-q-explanation">
                        <strong>Explanation:</strong> {q.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ── OFFICIAL FOOTER ──────────────────────────────────────── */}
        <footer className="pdf-footer-container avoid-break">
          <div className="pdf-footer-line" />
          <div className="pdf-footer-content">
            <div>
              <strong style={{ color: '#0F172A', fontWeight: 600 }}>Nitaq Training Institute</strong> — SAT Prep &amp; Academic Excellence Center
              <br />
              Al Estiqlal St, Abu Shagara, Sharjah, United Arab Emirates • Phone: +971 6 579 8313
            </div>
            <div style={{ textAlign: 'right' }}>
              Website: <strong style={{ color: '#166534', fontWeight: 600 }}>www.nitaqacademy.com</strong>
              <br />
              Official SAT® Assessment Report &copy; {new Date().getFullYear()} Nitaq Academy
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
