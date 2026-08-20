/**
 * QuizView.jsx — Premium, minimal SAT testing interface.
 * Allows students to choose whether to start with Math or English (Reading & Writing).
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getSectionQuestions, submitSection, ApiError } from '../../services/diagnosticApi';
import './sat.css';

const SECTION_META = {
  MATH: {
    label: 'Mathematics',
    shortName: 'Math',
    otherSection: 'READING_WRITING',
    otherLabel: 'Reading & Writing (English)',
    description: '12 questions assessing Algebra, Advanced Math, Problem-Solving & Data Analysis, and Geometry & Trigonometry.',
    domains: [
      { key: 'ALGEBRA', label: 'Algebra', count: '3 Questions' },
      { key: 'ADVANCED_MATH', label: 'Advanced Math', count: '3 Questions' },
      { key: 'PROBLEM_SOLVING_DATA_ANALYSIS', label: 'Problem-Solving & Data', count: '3 Questions' },
      { key: 'GEOMETRY_TRIGONOMETRY', label: 'Geometry & Trig', count: '3 Questions' },
    ],
  },
  READING_WRITING: {
    label: 'Reading & Writing (English)',
    shortName: 'Reading & Writing',
    otherSection: 'MATH',
    otherLabel: 'Mathematics',
    description: '12 questions assessing Information & Ideas, Craft & Structure, Expression of Ideas, and Standard English Conventions.',
    domains: [
      { key: 'INFORMATION_IDEAS', label: 'Information & Ideas', count: '3 Questions' },
      { key: 'CRAFT_STRUCTURE', label: 'Craft & Structure', count: '3 Questions' },
      { key: 'EXPRESSION_IDEAS', label: 'Expression of Ideas', count: '3 Questions' },
      { key: 'STANDARD_ENGLISH_CONVENTIONS', label: 'English Conventions', count: '3 Questions' },
    ],
  },
};

const DOMAIN_DISPLAY = {
  ALGEBRA: 'Algebra',
  ADVANCED_MATH: 'Advanced Math',
  PROBLEM_SOLVING_DATA_ANALYSIS: 'Problem-Solving & Data',
  GEOMETRY_TRIGONOMETRY: 'Geometry & Trig',
  INFORMATION_IDEAS: 'Information & Ideas',
  CRAFT_STRUCTURE: 'Craft & Structure',
  EXPRESSION_IDEAS: 'Expression of Ideas',
  STANDARD_ENGLISH_CONVENTIONS: 'Standard English Conventions',
};

function getStorage() {
  try {
    const token = sessionStorage.getItem('nitaq_session_token');
    const student = JSON.parse(sessionStorage.getItem('nitaq_student') || 'null');
    const currentSec = sessionStorage.getItem('nitaq_current_section');
    return { token, student, currentSec };
  } catch {
    return { token: null, student: null, currentSec: null };
  }
}

export default function QuizView() {
  const navigate = useNavigate();
  const location = useLocation();

  const { token, student, currentSec } = getStorage();

  // Determine starting section and phase
  const initialSection = location.state?.section || currentSec || null;
  const [selectedSection, setSelectedSection] = useState(initialSection);
  const [phase, setPhase] = useState(initialSection ? 'intro' : 'choose_section'); // 'choose_section' | 'intro' | 'quiz' | 'submitting' | 'error'
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [loadingSection, setLoadingSection] = useState(false);

  // Redirect if no session token
  useEffect(() => {
    if (!token) navigate('/sat/diagnostic', { replace: true });
  }, [token, navigate]);

  // Sync state if location.state changes
  useEffect(() => {
    if (location.state?.section) {
      setSelectedSection(location.state.section);
      sessionStorage.setItem('nitaq_current_section', location.state.section);
      setPhase('intro');
      setQuestions([]);
      setCurrentQ(0);
      setAnswers({});
    }
  }, [location.state]);

  const meta = selectedSection ? SECTION_META[selectedSection] : null;

  // Handle student selecting starting section
  const handleSelectSection = (sec) => {
    setSelectedSection(sec);
    sessionStorage.setItem('nitaq_current_section', sec);
    if (!sessionStorage.getItem('nitaq_first_section')) {
      sessionStorage.setItem('nitaq_first_section', sec);
    }
    setPhase('intro');
  };

  // Load questions for the active section
  const loadQuestions = useCallback(async () => {
    if (!selectedSection) return;
    setLoadingSection(true);
    setError('');
    try {
      const data = await getSectionQuestions(selectedSection, token);
      const questionList = Array.isArray(data) ? data : (data?.questions || []);
      if (!questionList || questionList.length === 0) {
        setError(`No questions currently configured for ${SECTION_META[selectedSection].label}. Please contact test administrator.`);
        setPhase('error');
      } else {
        setQuestions(questionList);
        setCurrentQ(0);
        setPhase('quiz');
      }
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Failed to load test questions.');
      setPhase('error');
    } finally {
      setLoadingSection(false);
    }
  }, [selectedSection, token]);

  // Submit current section answers
  const handleSubmitSection = useCallback(async () => {
    if (!selectedSection) return;
    setPhase('submitting');
    setError('');
    try {
      const payload = Object.entries(answers).map(([qid, ans]) => ({
        question_id: parseInt(qid),
        selected_answer: ans,
      }));

      const res = await submitSection(selectedSection, payload, token);

      const firstSec = sessionStorage.getItem('nitaq_first_section');
      const isFirstSection = !firstSec || firstSec === selectedSection;

      if (isFirstSection && res.session_status !== 'COMPLETED') {
        const nextSec = selectedSection === 'MATH' ? 'READING_WRITING' : 'MATH';
        sessionStorage.setItem('nitaq_interim_result', JSON.stringify({
          completed_section: selectedSection,
          next_section: nextSec,
          score: res.section_score ?? res.math_score ?? 0,
          total: res.section_total ?? res.math_total ?? 12,
        }));
        sessionStorage.setItem('nitaq_current_section', nextSec);
        navigate('/sat/diagnostic/math-report');
      } else {
        sessionStorage.removeItem('nitaq_current_section');
        sessionStorage.removeItem('nitaq_first_section');
        navigate('/sat/diagnostic/results');
      }
    } catch (e) {
      setError(e instanceof ApiError ? e.message : 'Submission failed. Please try again.');
      setPhase('quiz');
    }
  }, [selectedSection, answers, token, navigate]);

  const handleAnswer = (questionId, letter) => {
    setAnswers(prev => ({ ...prev, [questionId]: letter }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
    } else {
      handleSubmitSection();
    }
  };

  const handleBack = () => {
    if (currentQ > 0) setCurrentQ(q => q - 1);
  };

  // ── Top Header Bar ──────────────────────────────────────────
  const renderTopBar = (sectionTitle = null) => (
    <header className="test-top-bar">
      <div className="test-bar-container">
        <div className="test-bar-brand">
          <img
            src="/images/logo1.webp"
            alt="Nitaq Academy"
            style={{ height: '30px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {sectionTitle && (
          <div className="test-bar-center">
            <span className="test-active-section">
              {sectionTitle}
            </span>
          </div>
        )}

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
  );

  // ── Render: Section Selection Screen ────────────────────────
  if (phase === 'choose_section') {
    return (
      <div className="quiz-platform-shell">
        <SEO
          title="Choose Starting Section — Nitaq SAT Diagnostic"
          description="Select whether to begin with Mathematics or Reading & Writing."
        />
        {renderTopBar('Select Section')}

        <main className="section-intro-wrapper" style={{ maxWidth: '820px' }}>
          <div className="section-intro-card">
            <div style={{ marginBottom: '20px' }}>
              <div className="intro-step-badge">
                Step 1 of 2 · Section Selection
              </div>
            </div>

            <h1 className="intro-title">
              Choose Your Starting Section
            </h1>
            <p className="intro-subtitle">
              You will complete both sections (24 questions total). Select which section you would like to tackle first:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '28px' }}>
              {/* Option 1: Mathematics */}
              <div
                onClick={() => handleSelectSection('MATH')}
                style={{
                  background: '#FAFAFA',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0F172A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'none'; }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B' }}>
                      Module Option A
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#F1F5F9', color: '#334155' }}>
                      12 Questions
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                    Mathematics
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                    Algebra, Advanced Math, Problem-Solving &amp; Data Analysis, and Geometry &amp; Trigonometry.
                  </p>
                </div>

                <button
                  type="button"
                  className="admin-btn primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
                >
                  Start with Mathematics →
                </button>
              </div>

              {/* Option 2: Reading & Writing */}
              <div
                onClick={() => handleSelectSection('READING_WRITING')}
                style={{
                  background: '#FAFAFA',
                  border: '1.5px solid #E2E8F0',
                  borderRadius: '20px',
                  padding: '28px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0F172A'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.transform = 'none'; }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748B' }}>
                      Module Option B
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', background: '#F1F5F9', color: '#334155' }}>
                      12 Questions
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0F172A', margin: '0 0 8px 0' }}>
                    Reading &amp; Writing (English)
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 16px 0' }}>
                    Information &amp; Ideas, Craft &amp; Structure, Expression of Ideas, and Standard English Conventions.
                  </p>
                </div>

                <button
                  type="button"
                  className="admin-btn primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '16px' }}
                >
                  Start with English →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ── Render: Loading ─────────────────────────────────────────
  if (loadingSection) {
    return (
      <div className="quiz-platform-shell">
        {renderTopBar()}
        <div className="quiz-loading-container">
          <div className="spinner" style={{ width: '32px', height: '32px', margin: '0 auto 14px' }} />
          <p style={{ color: '#64748B', fontSize: '0.85rem' }}>
            Preparing {meta?.shortName} module…
          </p>
        </div>
      </div>
    );
  }

  // ── Render: Error ───────────────────────────────────────────
  if (phase === 'error') {
    return (
      <div className="quiz-platform-shell">
        {renderTopBar()}
        <div className="quiz-error-container">
          <div style={{ background: '#ffffff', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px', maxWidth: '440px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Notice
            </h2>
            <p style={{ color: '#64748B', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '20px' }}>
              {error}
            </p>
            <button className="admin-btn primary" onClick={() => setPhase('intro')} style={{ width: '100%', justifyContent: 'center' }}>
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Section Intro ───────────────────────────────────
  if (phase === 'intro') {
    return (
      <div className="quiz-platform-shell">
        <SEO
          title={`${meta?.label} Section — Nitaq SAT Diagnostic`}
          description={meta?.description}
        />
        {renderTopBar(meta?.label)}

        <main className="section-intro-wrapper">
          <div className="section-intro-card">
            <div style={{ marginBottom: '20px' }}>
              <div className="intro-step-badge">
                Active Module · {meta?.shortName}
              </div>
            </div>

            <h1 className="intro-title">
              {meta?.label} Assessment
            </h1>
            <p className="intro-subtitle">
              {meta?.description}
            </p>

            {/* Domain Overview */}
            <div className="intro-domains-section">
              <div className="intro-subhead">Domains Assessed in this Module</div>
              <div className="intro-domains-grid">
                {meta?.domains.map(d => (
                  <div key={d.key} className="intro-domain-card">
                    <div className="domain-title">{d.label}</div>
                    <div className="domain-count">{d.count}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions Box */}
            <div className="intro-instructions-box">
              <div className="intro-instructions-grid">
                <div className="instruction-item">
                  <div>
                    <div className="instruction-title">12 Diagnostic Questions</div>
                    <div className="instruction-text">Answer each question to evaluate your domain proficiency.</div>
                  </div>
                </div>

                <div className="instruction-item">
                  <div>
                    <div className="instruction-title">Natural Pacing</div>
                    <div className="instruction-text">Take your time. You can navigate back to change answers anytime.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="intro-bottom-cta">
              <button
                type="button"
                className="admin-btn outline"
                onClick={() => setPhase('choose_section')}
                style={{ fontSize: '0.82rem', padding: '10px 16px' }}
              >
                ← Change Section
              </button>

              <button className="intro-start-btn" onClick={loadQuestions}>
                Begin {meta?.shortName} →
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // ── Render: Submitting State ────────────────────────────────
  if (phase === 'submitting') {
    return (
      <div className="quiz-platform-shell">
        {renderTopBar()}
        <div className="quiz-loading-container">
          <div className="spinner" style={{ width: '32px', height: '32px', margin: '0 auto 14px' }} />
          <p style={{ color: '#0F172A', fontWeight: 600, fontSize: '0.92rem' }}>
            Saving your {meta?.shortName} responses…
          </p>
          <p style={{ color: '#64748B', fontSize: '0.8rem', marginTop: '4px' }}>
            Computing interim accuracy score.
          </p>
        </div>
      </div>
    );
  }

  // ── Render: Active Quiz Questions ───────────────────────────
  const q = questions[currentQ];
  if (!q) return null;

  const answeredCount = Object.keys(answers).length;
  const totalQuestions = questions.length;
  const selectedAns = answers[q.id];
  const isLast = currentQ === totalQuestions - 1;
  const progressPercent = Math.round(((currentQ + 1) / totalQuestions) * 100);

  const options = [
    { letter: 'A', text: q.option_a },
    { letter: 'B', text: q.option_b },
    { letter: 'C', text: q.option_c },
    { letter: 'D', text: q.option_d },
  ];

  return (
    <div className="quiz-platform-shell">
      <SEO
        title={`Question ${currentQ + 1} of ${totalQuestions} — ${meta?.shortName} — Nitaq SAT Diagnostic`}
        description="Digital SAT Diagnostic question."
      />

      {/* Top Header */}
      {renderTopBar(`${meta?.shortName} · Question ${currentQ + 1} of ${totalQuestions}`)}

      {/* Progress Strip */}
      <div className="test-progress-strip">
        <div className="test-progress-inner">
          <div className="test-progress-label">
            <span>Question <strong>{currentQ + 1}</strong> of {totalQuestions}</span>
          </div>

          <div className="test-progress-track">
            <div className="test-progress-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <div className="test-answered-badge">
            {answeredCount} of {totalQuestions} Answered
          </div>
        </div>
      </div>

      {/* Main Testing Workspace */}
      <main className="quiz-workspace">
        <div className="quiz-workspace-inner">

          {/* Question Card */}
          <div className="test-question-box">
            <div className="test-question-header">
              <div className="test-badge-group">
                <span className="test-domain-chip">
                  {DOMAIN_DISPLAY[q.domain] || q.domain}
                </span>
                <span className={`test-diff-chip diff-${(q.difficulty || 'medium').toLowerCase()}`}>
                  {q.difficulty}
                </span>
              </div>
              <span className="test-qid">{q.question_code}</span>
            </div>

            <div className="test-question-body">
              {q.question_text}
            </div>
          </div>

          {/* Answer Options */}
          <div className="test-options-container">
            <div className="test-options-list">
              {options.map(({ letter, text }) => {
                const isSelected = selectedAns === letter;
                return (
                  <button
                    key={letter}
                    type="button"
                    className={`test-option-card${isSelected ? ' option-selected' : ''}`}
                    onClick={() => handleAnswer(q.id, letter)}
                  >
                    <div className={`option-letter-badge${isSelected ? ' badge-selected' : ''}`}>
                      {letter}
                    </div>
                    <div className="option-text-content">{text}</div>
                    {isSelected && (
                      <div className="option-check-icon">✓</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </main>

      {/* Bottom Action Footer Bar */}
      <footer className="test-footer-bar">
        <div className="test-footer-inner">
          <button
            type="button"
            className="test-btn-back"
            onClick={handleBack}
            disabled={currentQ === 0}
          >
            ← Previous
          </button>

          {/* Question Jump Dots (1..12) */}
          <div className="test-jump-navigator">
            {questions.map((ques, idx) => {
              const isAns = !!answers[ques.id];
              const isCurr = idx === currentQ;
              return (
                <button
                  key={ques.id}
                  type="button"
                  className={`jump-dot${isCurr ? ' jump-current' : ''}${isAns ? ' jump-answered' : ''}`}
                  onClick={() => setCurrentQ(idx)}
                  title={`Question ${idx + 1}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Next / Submit Button */}
          {isLast ? (
            <button
              type="button"
              className="test-btn-submit"
              onClick={handleSubmitSection}
              disabled={!selectedAns}
            >
              Submit {meta?.shortName} →
            </button>
          ) : (
            <button
              type="button"
              className="test-btn-next"
              onClick={handleNext}
              disabled={!selectedAns}
            >
              Next Question →
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
