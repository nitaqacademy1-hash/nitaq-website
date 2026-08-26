/**
 * AdminStudentDetail.jsx — Minimalist student result view.
 * Clean white cards, neutral typography, no WhatsApp buttons or excessive colors.
 */

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getStudentResult, updateLeadStatus, ApiError } from '../../services/diagnosticApi';
import '../sat/sat.css';

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

const LEAD_OPTIONS = ['NEW', 'COMPLETED', 'CONTACTED', 'COUNSELING', 'ENROLLED', 'NOT_INTERESTED'];

export default function AdminStudentDetail() {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [leadStatus, setLeadStatus] = useState('');
  const [savingLead, setSavingLead] = useState(false);

  useEffect(() => {
    getStudentResult(parseInt(sessionId))
      .then(data => {
        setResult(data);
        setLeadStatus(data.lead_status);
        setLoading(false);
        if (window.location.search.includes('print=true')) {
          setTimeout(() => window.print(), 500);
        }
      })
      .catch(e => {
        setError(e instanceof ApiError ? e.message : 'Failed to load result');
        setLoading(false);
      });
  }, [sessionId]);

  const handleLeadUpdate = async (newStatus) => {
    setSavingLead(true);
    try {
      await updateLeadStatus(parseInt(sessionId), newStatus);
      setLeadStatus(newStatus);
    } catch {}
    finally { setSavingLead(false); }
  };

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <div className="spinner" style={{ margin: '0 auto 12px', width: '32px', height: '32px' }} />
      <p style={{ color: '#64748B', fontSize: '0.85rem' }}>Loading result…</p>
    </div>
  );

  if (error) return (
    <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', color: '#B91C1C', padding: '20px', borderRadius: '12px', fontSize: '0.85rem' }}>
      <button className="admin-btn outline" style={{ marginBottom: '12px' }} onClick={() => navigate(-1)}>
        ← Back
      </button>
      <p style={{ margin: 0 }}>{error}</p>
    </div>
  );

  const mathDomains = result.domain_results.filter(d => d.section === 'MATH');
  const rwDomains   = result.domain_results.filter(d => d.section === 'READING_WRITING');

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '20px' }}>
        <button className="admin-btn outline" style={{ marginBottom: '12px', padding: '5px 12px', fontSize: '0.78rem' }} onClick={() => navigate(-1)}>
          ← Back to Students
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <h1 style={{ fontFamily: 'var(--font-heading, sans-serif)', fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', margin: 0 }}>
                {result.student_name}
              </h1>
              <span className={`lead-chip ${leadStatus}`}>{leadStatus.replace(/_/g, ' ')}</span>
            </div>
            <p style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '4px', marginBottom: 0 }}>
              {result.student_email} · {result.student_phone} · {result.student_grade} · Target: {result.target_sat_score}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => window.print()}
              className="admin-btn primary"
              style={{
                fontSize: '0.8rem',
                padding: '7px 14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'linear-gradient(90deg, #2E7D32 0%, #2BBBAD 100%)',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Download PDF Report</span>
            </button>

            <span style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginLeft: '4px' }}>Lead Status:</span>
            <select
              value={leadStatus}
              onChange={e => handleLeadUpdate(e.target.value)}
              disabled={savingLead}
              style={{
                background: '#ffffff',
                border: '1px solid #CBD5E1',
                borderRadius: '8px',
                color: '#0F172A',
                padding: '6px 12px',
                fontSize: '0.8rem',
                fontWeight: 600,
                fontFamily: 'inherit',
                outline: 'none',
              }}
            >
              {LEAD_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt.replace(/_/g, ' ')}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Score Summary Metrics */}
      <div className="admin-stat-grid" style={{ marginBottom: '20px' }}>
        <div className="admin-stat-card">
          <div className="stat-label">Total Score</div>
          <div className="stat-value">{result.total_score} <span style={{ fontSize: '1rem', color: '#64748B' }}>/ 24</span></div>
          <div className="stat-sub">{Math.round((result.total_score / 24) * 100)}% accuracy</div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-label">Math Score</div>
          <div className="stat-value">{result.math_score} <span style={{ fontSize: '1rem', color: '#64748B' }}>/ 12</span></div>
          <div className="stat-sub">Section 1</div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-label">Reading &amp; Writing</div>
          <div className="stat-value">{result.reading_writing_score} <span style={{ fontSize: '1rem', color: '#64748B' }}>/ 12</span></div>
          <div className="stat-sub">Section 2</div>
        </div>

        <div className="admin-stat-card">
          <div className="stat-label">Estimated SAT</div>
          <div className="stat-value" style={{ fontSize: '1.4rem' }}>{result.estimated_sat_score}</div>
          <div className="stat-sub">{result.overall_band}</div>
        </div>
      </div>

      {/* Domain Performance */}
      <div className="admin-table-card">
        <div className="admin-table-header">
          <h2>Domain Performance Breakdown</h2>
        </div>
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
          {[...mathDomains, ...rwDomains].map(dr => (
            <div key={dr.domain} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '14px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#0F172A' }}>
                  {DOMAIN_DISPLAY[dr.domain]}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>
                  {dr.correct_count} / {dr.total_questions} ({Math.round(dr.percentage)}%)
                </span>
              </div>
              <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '100px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${dr.percentage}%`, background: '#0F172A', borderRadius: '100px' }} />
              </div>
              <div style={{ marginTop: '6px', fontSize: '0.72rem', color: '#64748B' }}>
                {dr.section === 'MATH' ? 'Math' : 'R&W'} · {dr.status}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Missed Questions */}
      {result.missed_questions?.length > 0 && (
        <div className="admin-table-card">
          <div className="admin-table-header">
            <h2>Missed Questions ({result.missed_questions.length})</h2>
          </div>
          <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {result.missed_questions.map((mq, i) => (
              <div key={mq.question_id} style={{ background: '#FAFAFA', border: '1px solid #E2E8F0', borderRadius: '10px', padding: '14px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748B' }}>
                    Q{i + 1} · {DOMAIN_DISPLAY[mq.domain]}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#334155' }}>
                    Selected: {mq.selected_answer} · Correct: {mq.correct_answer}
                  </span>
                </div>
                <p style={{ color: '#0F172A', fontSize: '0.88rem', lineHeight: 1.5, margin: '6px 0 8px 0' }}>
                  {mq.question_text}
                </p>
                <div style={{ fontSize: '0.78rem', color: '#64748B', lineHeight: 1.4 }}>
                  Explanation: {mq.explanation}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
