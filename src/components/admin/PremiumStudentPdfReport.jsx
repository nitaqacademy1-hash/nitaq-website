/**
 * PremiumStudentPdfReport.jsx
 * Deep-Premium McKinsey-Style SAT Diagnostic Report — Nitaq Academy
 *
 * Design principles:
 *  • Inter typeface (max weight 600, never 700/800)
 *  • Pure white canvas — zero colored card backgrounds
 *  • Status conveyed via 3-px left-border accent lines only
 *  • Always 4-column even score grid (no orphan cards)
 *  • No emoji in section headings
 *  • Flat domain rows inside a single column container (no nested cards)
 *  • Consistent 36 px vertical rhythm between sections
 */

import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

/* ─── Static display maps ─────────────────────────────────────────────────── */
const DOMAIN_LABEL = {
  ALGEBRA: 'Algebra',
  ADVANCED_MATH: 'Advanced Math',
  PROBLEM_SOLVING_DATA_ANALYSIS: 'Problem-Solving & Data Analysis',
  GEOMETRY_TRIGONOMETRY: 'Geometry & Trigonometry',
  INFORMATION_IDEAS: 'Information & Ideas',
  CRAFT_STRUCTURE: 'Craft & Structure',
  EXPRESSION_IDEAS: 'Expression of Ideas',
  STANDARD_ENGLISH_CONVENTIONS: 'Standard English Conventions',
};

/* Status is rendered ONLY as a coloured dot + label text — no filled pills */
const STATUS_META = {
  STRONG:     { label: 'Strong',       dot: '#15803D', bar: '#15803D' },
  DEVELOPING: { label: 'Developing',   dot: '#D97706', bar: '#D97706' },
  REVIEW:     { label: 'Needs Review', dot: '#DC2626', bar: '#DC2626' },
};

export default function PremiumStudentPdfReport({ result }) {
  const reportRef  = useRef(null);
  const [downloading, setDownloading]       = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  if (!result) return null;

  /* ── Derived values ─────────────────────────────────────────────────────── */
  const studentName   = result.student_name  || 'Student';
  const totalScore    = result.total_score   ?? 0;
  const totalQ        = result.total_questions ?? 24;
  const accuracy      = Math.round((totalScore / Math.max(totalQ, 1)) * 100);
  const mathScore     = result.math_score    ?? 0;
  const rwScore       = result.reading_writing_score ?? 0;
  const mathDomains   = result.domain_results?.filter(d => d.section === 'MATH') || [];
  const rwDomains     = result.domain_results?.filter(d => d.section === 'READING_WRITING') || [];
  const questionList  = (showAllQuestions && result.question_reviews?.length > 0)
    ? result.question_reviews
    : (result.missed_questions || []);
  const issueDate     = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  /* ── PDF export ─────────────────────────────────────────────────────────── */
  const handleDownload = async () => {
    if (!reportRef.current) return;
    setDownloading(true);
    try {
      await html2pdf()
        .set({
          margin:     [12, 12, 12, 12],
          filename:   `Nitaq_SAT_Report_${studentName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
          image:      { type: 'jpeg', quality: 0.99 },
          html2canvas: { scale: 2.5, useCORS: true, logging: false, backgroundColor: '#fff' },
          jsPDF:      { unit: 'mm', format: 'a4', orientation: 'portrait' },
          pagebreak:  { mode: ['avoid-all', 'css', 'legacy'] },
        })
        .from(reportRef.current)
        .save();
    } catch (e) {
      console.error('PDF export error:', e);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  /* ── Small reusable sub-components ─────────────────────────────────────── */

  /* Section heading — no emoji, uppercase label + thin rule */
  const SectionHeading = ({ label }) => (
    <div className="rpt-section-heading">
      <span className="rpt-section-label">{label}</span>
      <div className="rpt-section-rule" />
    </div>
  );

  /* Single score tile — always same look, no highlight variant */
  const ScoreTile = ({ label, primary, secondary }) => (
    <div className="rpt-score-tile">
      <div className="rpt-tile-label">{label}</div>
      <div className="rpt-tile-primary">{primary}</div>
      {secondary && <div className="rpt-tile-secondary">{secondary}</div>}
    </div>
  );

  /* Flat domain row with left accent border */
  const DomainRow = ({ dr }) => {
    const pct  = Math.round(dr.percentage ?? 0);
    const meta = STATUS_META[dr.status] || STATUS_META.DEVELOPING;
    return (
      <div className="rpt-domain-row" style={{ borderLeftColor: meta.bar }}>
        <div className="rpt-domain-row-top">
          <span className="rpt-domain-name">{DOMAIN_LABEL[dr.domain] || dr.domain}</span>
          <span className="rpt-domain-status" style={{ color: meta.dot }}>
            <span className="rpt-status-dot" style={{ background: meta.dot }} />
            {meta.label}
          </span>
        </div>
        <div className="rpt-bar-bg">
          <div className="rpt-bar-fill" style={{ width: `${pct}%`, background: meta.bar }} />
        </div>
        <div className="rpt-domain-row-bottom">
          <span>{dr.correct_count} of {dr.total_questions} correct</span>
          <span className="rpt-domain-pct">{pct}%</span>
        </div>
      </div>
    );
  };

  /* ── Render ─────────────────────────────────────────────────────────────── */
  return (
    <div className="rpt-wrapper">

      {/* ── Admin Toolbar (hidden in PDF) ──────────────────────────────── */}
      <div className="no-print rpt-toolbar">
        <div className="rpt-toolbar-left">
          <button
            type="button"
            className="admin-btn outline"
            onClick={() => setShowAllQuestions(p => !p)}
          >
            {showAllQuestions ? 'Show Missed Questions' : `Show All Questions (${result.question_reviews?.length ?? totalQ})`}
          </button>
        </div>
        <div className="rpt-toolbar-right">
          <button type="button" className="admin-btn outline" onClick={() => window.print()}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 6 2 18 2 18 9"/>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <rect x="6" y="14" width="12" height="8"/>
            </svg>
            Print
          </button>
          <button
            type="button"
            className="admin-btn primary rpt-download-btn"
            onClick={handleDownload}
            disabled={downloading}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {downloading ? 'Generating…' : 'Download PDF'}
          </button>
        </div>
      </div>

      {/* ╔══════════════════════════════════════════════════════════════════╗
          ║               PRINTABLE / PDF DOCUMENT CANVAS                   ║
          ╚══════════════════════════════════════════════════════════════════╝ */}
      <div className="rpt-canvas" ref={reportRef}>

        {/* Google Fonts — loaded inline so html2canvas captures it */}
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');`}</style>

        {/* ── PAGE HEADER ──────────────────────────────────────────────── */}
        <header className="rpt-page-header">
          <div className="rpt-brand">
            <img src="/images/logo1.webp" alt="Nitaq Academy" className="rpt-logo" />
            <div className="rpt-brand-text">
              <div className="rpt-brand-name">NITAQ TRAINING INSTITUTE</div>
              <div className="rpt-brand-sub">Sharjah, United Arab Emirates</div>
            </div>
          </div>
          <div className="rpt-doc-meta">
            <div className="rpt-doc-type">SAT® DIAGNOSTIC REPORT</div>
            <div className="rpt-doc-date">{issueDate}</div>
            <div className="rpt-doc-id">ID #{result.session_id}</div>
          </div>
        </header>

        <div className="rpt-header-rule" />

        {/* ── STUDENT IDENTITY ─────────────────────────────────────────── */}
        <section className="rpt-identity">
          <div className="rpt-identity-left">
            <h1 className="rpt-student-name">{studentName}</h1>
            <div className="rpt-student-meta">
              {result.student_email && <span>{result.student_email}</span>}
              {result.student_phone && <><span className="rpt-sep">·</span><span>{result.student_phone}</span></>}
              {result.student_grade && <><span className="rpt-sep">·</span><span>{result.student_grade}</span></>}
              {result.target_sat_score && <><span className="rpt-sep">·</span><span>Target: {result.target_sat_score}</span></>}
            </div>
          </div>
          <div className="rpt-identity-right">
            {result.lead_status && (
              <span className="rpt-status-badge">
                <span className="rpt-status-badge-dot" />
                {result.lead_status.replace(/_/g, ' ')}
              </span>
            )}
          </div>
        </section>

        <div className="rpt-section-gap" />

        {/* ── PERFORMANCE SUMMARY ──────────────────────────────────────── */}
        <section className="rpt-section avoid-break">
          <SectionHeading label="Performance Summary" />
          <div className="rpt-score-grid">
            <ScoreTile
              label="Diagnostic Score"
              primary={<>{totalScore}<span className="rpt-tile-denom"> / {totalQ}</span></>}
              secondary={`${accuracy}% accuracy`}
            />
            <ScoreTile
              label="Estimated SAT"
              primary={result.estimated_sat_score || '—'}
              secondary={result.overall_band || 'Baseline'}
            />
            <ScoreTile
              label="Mathematics"
              primary={<>{mathScore}<span className="rpt-tile-denom"> / 12</span></>}
              secondary={`${Math.round((mathScore / 12) * 100)}% accuracy`}
            />
            <ScoreTile
              label="Reading & Writing"
              primary={<>{rwScore}<span className="rpt-tile-denom"> / 12</span></>}
              secondary={`${Math.round((rwScore / 12) * 100)}% accuracy`}
            />
          </div>
        </section>

        <div className="rpt-section-gap" />

        {/* ── DOMAIN BREAKDOWN ─────────────────────────────────────────── */}
        <section className="rpt-section avoid-break">
          <SectionHeading label="Domain Skill Breakdown" />
          <div className="rpt-domain-grid">

            <div className="rpt-domain-col">
              <div className="rpt-col-label">Mathematics</div>
              <div className="rpt-domain-list">
                {mathDomains.map(dr => <DomainRow key={dr.domain} dr={dr} />)}
              </div>
            </div>

            <div className="rpt-domain-col">
              <div className="rpt-col-label">Reading &amp; Writing</div>
              <div className="rpt-domain-list">
                {rwDomains.map(dr => <DomainRow key={dr.domain} dr={dr} />)}
              </div>
            </div>

          </div>
        </section>

        {/* ── RECOMMENDATIONS ──────────────────────────────────────────── */}
        {result.recommendations?.length > 0 && (
          <>
            <div className="rpt-section-gap" />
            <section className="rpt-section avoid-break">
              <SectionHeading label="Study Priorities &amp; Recommendations" />
              <div className="rpt-rec-list">
                {result.recommendations.map((rec, i) => {
                  const isHigh = ['HIGH', '1'].includes(String(rec.priority || 'HIGH').toUpperCase());
                  return (
                    <div key={i} className={`rpt-rec-item ${isHigh ? 'high' : 'med'}`}>
                      <div className="rpt-rec-top">
                        <span className="rpt-rec-priority">{isHigh ? 'High Priority' : 'Medium Priority'}</span>
                        <span className="rpt-rec-title">{rec.title}</span>
                      </div>
                      {rec.description && (
                        <p className="rpt-rec-desc">{rec.description}</p>
                      )}
                      {Array.isArray(rec.topics) && rec.topics.length > 0 && (
                        <div className="rpt-rec-topics">
                          {rec.topics.map((t, j) => <span key={j} className="rpt-topic">{t}</span>)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* ── QUESTION REVIEW ──────────────────────────────────────────── */}
        {questionList.length > 0 && (
          <>
            <div className="rpt-section-gap" />
            <section className="rpt-section avoid-break">
              <SectionHeading label={`Question Review — ${questionList.length} item${questionList.length !== 1 ? 's' : ''}`} />
              <div className="rpt-q-list">
                {questionList.map((q, idx) => {
                  const correct = q.is_correct ?? false;
                  return (
                    <div key={q.question_id || idx} className={`rpt-q-item ${correct ? 'correct' : 'missed'} avoid-break`}>
                      <div className="rpt-q-top">
                        <span className="rpt-q-num">Q{idx + 1}</span>
                        <span className="rpt-q-tag">
                          {q.section === 'MATH' ? 'Math' : 'R&W'} · {DOMAIN_LABEL[q.domain] || q.domain}
                        </span>
                        <span className={`rpt-q-result ${correct ? 'correct' : 'missed'}`}>
                          {correct ? 'Correct' : 'Missed'}
                        </span>
                      </div>
                      <p className="rpt-q-text">{q.question_text}</p>
                      <div className="rpt-q-answers">
                        <span>
                          <span className="rpt-ans-label">Selected:</span>
                          <code className={correct ? 'rpt-ans-correct' : 'rpt-ans-wrong'}>{q.selected_answer || 'None'}</code>
                        </span>
                        <span>
                          <span className="rpt-ans-label">Correct:</span>
                          <code className="rpt-ans-correct">{q.correct_answer}</code>
                        </span>
                      </div>
                      {q.explanation && (
                        <div className="rpt-q-explanation">{q.explanation}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* ── PAGE FOOTER ──────────────────────────────────────────────── */}
        <footer className="rpt-footer avoid-break">
          <div className="rpt-footer-rule" />
          <div className="rpt-footer-content">
            <div className="rpt-footer-left">
              <strong>Nitaq Training Institute</strong> · SAT Prep &amp; Academic Excellence
              <br />
              Al Estiqlal St, Abu Shagara, Sharjah, UAE · +971 6 579 8313
            </div>
            <div className="rpt-footer-right">
              www.nitaqacademy.com
              <br />
              &copy; {new Date().getFullYear()} Nitaq Academy · Confidential
            </div>
          </div>
        </footer>

      </div>{/* end rpt-canvas */}
    </div>
  );
}
