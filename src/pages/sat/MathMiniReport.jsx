/**
 * MathMiniReport.jsx — Shown between Section 1 and Section 2.
 * Dynamically displays interim score preview for Math or Reading & Writing.
 */

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import './sat.css';

const DOMAINS_CONFIG = {
  MATH: {
    label: 'Mathematics',
    domains: [
      { key: 'ALGEBRA', label: 'Algebra', count: '3 Questions' },
      { key: 'ADVANCED_MATH', label: 'Advanced Math', count: '3 Questions' },
      { key: 'PROBLEM_SOLVING_DATA_ANALYSIS', label: 'Problem-Solving & Data', count: '3 Questions' },
      { key: 'GEOMETRY_TRIGONOMETRY', label: 'Geometry & Trig', count: '3 Questions' },
    ],
  },
  READING_WRITING: {
    label: 'Reading & Writing (English)',
    domains: [
      { key: 'INFORMATION_IDEAS', label: 'Information & Ideas', count: '3 Questions' },
      { key: 'CRAFT_STRUCTURE', label: 'Craft & Structure', count: '3 Questions' },
      { key: 'EXPRESSION_IDEAS', label: 'Expression of Ideas', count: '3 Questions' },
      { key: 'STANDARD_ENGLISH_CONVENTIONS', label: 'English Conventions', count: '3 Questions' },
    ],
  },
};

export default function MathMiniReport() {
  const navigate = useNavigate();
  const [interimData, setInterimData] = useState(null);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const t = sessionStorage.getItem('nitaq_session_token');
    const s = JSON.parse(sessionStorage.getItem('nitaq_student') || 'null');
    const rawInterim = JSON.parse(sessionStorage.getItem('nitaq_interim_result') || sessionStorage.getItem('nitaq_math_result') || 'null');

    if (!t || !rawInterim) {
      navigate('/sat/diagnostic', { replace: true });
      return;
    }

    setStudent(s);
    setInterimData({
      completedSection: rawInterim.completed_section || 'MATH',
      nextSection: rawInterim.next_section || (rawInterim.completed_section === 'READING_WRITING' ? 'MATH' : 'READING_WRITING'),
      score: rawInterim.score ?? rawInterim.math_score ?? 0,
      total: rawInterim.total ?? rawInterim.math_total ?? 12,
    });
  }, [navigate]);

  if (!interimData) return null;

  const completedConfig = DOMAINS_CONFIG[interimData.completedSection] || DOMAINS_CONFIG.MATH;
  const nextConfig = DOMAINS_CONFIG[interimData.nextSection] || DOMAINS_CONFIG.READING_WRITING;
  const pct = Math.round((interimData.score / interimData.total) * 100);

  const handleContinue = () => {
    sessionStorage.setItem('nitaq_current_section', interimData.nextSection);
    navigate('/sat/diagnostic/quiz', { state: { section: interimData.nextSection } });
  };

  return (
    <div className="quiz-platform-shell">
      <SEO
        title={`${completedConfig.label} Complete — Nitaq SAT Diagnostic`}
        description={`Your ${completedConfig.label} interim result. Proceed to Section 2.`}
      />

      {/* Top Header */}
      <header className="test-top-bar">
        <div className="test-bar-container">
          <div className="test-bar-brand">
            <img
              src="/images/logo1.webp"
              alt="Nitaq Academy"
              style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
            />
          </div>

          <div className="test-bar-center">
            <span className="test-active-section">
              Section 1 of 2 Complete
            </span>
          </div>

          <div className="test-bar-right">
            {student?.full_name && (
              <div className="test-student-pill">
                <span className="student-dot" />
                <span>{student.full_name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="section-intro-wrapper">
        <div className="section-intro-card">

          {/* Header */}
          <div style={{ marginBottom: '24px' }}>
            <div className="intro-step-badge">
              {completedConfig.label} Module Complete
            </div>
            <h1 className="intro-title" style={{ marginTop: '12px' }}>
              Interim Section 1 Result
            </h1>
            <p className="intro-subtitle">
              Your {completedConfig.label} responses have been saved and scored. Proceed to Section 2 to complete your full diagnostic report.
            </p>
          </div>

          {/* Score Box */}
          <div style={{
            background: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '28px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '32px'
          }}>
            <div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#64748B', fontWeight: 700, marginBottom: '4px' }}>
                {completedConfig.label} Score
              </div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0F172A', lineHeight: 1 }}>
                {interimData.score} <span style={{ fontSize: '1.2rem', color: '#94A3B8', fontWeight: 600 }}>/ {interimData.total}</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: '#64748B', marginTop: '6px' }}>
                {pct}% accuracy on Section 1
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              padding: '14px 20px',
              textAlign: 'center'
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#0F172A' }}>
                {pct >= 75 ? 'Strong Baseline' : pct >= 50 ? 'Developing' : 'Foundational'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: '2px' }}>
                {interimData.total} Questions Evaluated
              </div>
            </div>
          </div>

          {/* Domains Overview */}
          <div className="intro-domains-section">
            <div className="intro-subhead">{completedConfig.label} Domains Evaluated</div>
            <div className="intro-domains-grid">
              {completedConfig.domains.map((dom) => (
                <div key={dom.key} className="intro-domain-card">
                  <div className="domain-title">{dom.label}</div>
                  <div className="domain-count">{dom.count}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Up Next Banner */}
          <div style={{
            background: '#FAFAFA',
            border: '1px solid #E2E8F0',
            borderRadius: '16px',
            padding: '20px 24px',
            marginBottom: '32px'
          }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#0F172A', marginBottom: '4px' }}>
              Up Next: {nextConfig.label} Module
            </div>
            <p style={{ margin: 0, color: '#64748B', fontSize: '0.84rem', lineHeight: 1.5 }}>
              12 diagnostic questions covering {nextConfig.domains.map(d => d.label).join(', ')}. Complete this second module to unlock your comprehensive 8-domain score analysis.
            </p>
          </div>

          {/* Bottom Action */}
          <div className="intro-bottom-cta">
            <span style={{ fontSize: '0.82rem', color: '#64748B' }}>
              Step 1 of 2 Complete
            </span>

            <button className="intro-start-btn" onClick={handleContinue}>
              Continue to {nextConfig.label} →
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
