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

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSignOut = () => {
    sessionStorage.removeItem('nitaq_session_token');
    sessionStorage.removeItem('nitaq_session_id');
    sessionStorage.removeItem('nitaq_student');
    sessionStorage.removeItem('nitaq_current_section');
    sessionStorage.removeItem('nitaq_first_section');
    sessionStorage.removeItem('nitaq_interim_result');
    sessionStorage.removeItem('nitaq_math_result');
    navigate('/', { replace: true });
  };

  const firstSec = sessionStorage.getItem('nitaq_first_section');
  const isSecondStep = firstSec && selectedSection && firstSec !== selectedSection;
  const stepLabel = isSecondStep ? 'Step 2 of 2' : 'Step 1 of 2';
  const stepProgressPercent = isSecondStep ? '100%' : '50%';

  // ── Top Header Bar ──────────────────────────────────────────
  const renderTopBar = (moduleTitle = null) => (
    <header className="sat-assessment-header">
      <div className="sat-assessment-header-container">
        <div className="test-bar-brand" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <img
            src="/images/logo1.webp"
            alt="Nitaq Academy"
            style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
          />
          {moduleTitle && (
            <div className="sat-header-module-name">
              <span className="sat-header-module-dot" />
              <span>{moduleTitle.toUpperCase()}</span>
            </div>
          )}
        </div>

        <div className="sat-header-progress-group">
          <span className="sat-header-progress-text">{stepLabel}</span>
          <div className="sat-header-progress-track">
            <div className="sat-header-progress-fill" style={{ width: stepProgressPercent }} />
          </div>
        </div>

        <div className="test-bar-right">
          <div className="sat-user-menu-container" style={{ position: 'relative' }}>
            <button
              type="button"
              className="sat-user-pill-btn"
              onClick={() => setUserMenuOpen(prev => !prev)}
              aria-expanded={userMenuOpen}
            >
              <span className="sat-user-dot" />
              <span className="sat-user-name">{student?.full_name || 'Student'}</span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                style={{
                  transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {userMenuOpen && (
              <>
                <div
                  style={{ position: 'fixed', inset: 0, zIndex: 190 }}
                  onClick={() => setUserMenuOpen(false)}
                />
                <div className="sat-user-dropdown-menu">
                  <div className="sat-user-dropdown-item profile-info">
                    <div className="sat-user-dropdown-avatar">
                      {(student?.full_name || 'S').charAt(0).toUpperCase()}
                    </div>
                    <div className="sat-user-dropdown-details">
                      <span className="sat-user-dropdown-name">{student?.full_name || 'Student'}</span>
                      <span className="sat-user-dropdown-email">{student?.email || 'Nitaq Student'}</span>
                    </div>
                  </div>
                  <div className="sat-user-dropdown-divider" />
                  <button
                    type="button"
                    className="sat-user-dropdown-item signout-btn"
                    onClick={handleSignOut}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  // ── Render: Section Selection Screen ────────────────────────
  if (phase === 'choose_section') {
    return (
      <div className="sat-section-select-shell">
        <SEO
          title="Choose Starting Section — Nitaq SAT Diagnostic"
          description="Select whether to begin with Mathematics or Reading & Writing."
        />

        {/* Sticky Header Bar */}
        <header className="sat-assessment-header">
          <div className="sat-assessment-header-container">
            <div className="test-bar-brand">
              <img
                src="/images/logo1.webp"
                alt="Nitaq Academy"
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div className="sat-header-progress-group">
              <span className="sat-header-progress-text">{stepLabel}</span>
              <div className="sat-header-progress-track">
                <div className="sat-header-progress-fill" style={{ width: stepProgressPercent }} />
              </div>
            </div>

            <div className="test-bar-right">
              <div className="sat-user-menu-container" style={{ position: 'relative' }}>
                <button
                  type="button"
                  className="sat-user-pill-btn"
                  onClick={() => setUserMenuOpen(prev => !prev)}
                  aria-expanded={userMenuOpen}
                >
                  <span className="sat-user-dot" />
                  <span className="sat-user-name">{student?.full_name || 'Student'}</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    style={{
                      transform: userMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                {userMenuOpen && (
                  <>
                    <div
                      style={{ position: 'fixed', inset: 0, zIndex: 190 }}
                      onClick={() => setUserMenuOpen(false)}
                    />
                    <div className="sat-user-dropdown-menu">
                      <div className="sat-user-dropdown-item profile-info">
                        <div className="sat-user-dropdown-avatar">
                          {(student?.full_name || 'S').charAt(0).toUpperCase()}
                        </div>
                        <div className="sat-user-dropdown-details">
                          <span className="sat-user-dropdown-name">{student?.full_name || 'Student'}</span>
                          <span className="sat-user-dropdown-email">{student?.email || 'Nitaq Student'}</span>
                        </div>
                      </div>
                      <div className="sat-user-dropdown-divider" />
                      <button
                        type="button"
                        className="sat-user-dropdown-item signout-btn"
                        onClick={handleSignOut}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Container */}
        <main className="sat-section-select-main">
          <div className="sat-section-select-header">
            <div className="sat-section-select-pill">
              STEP 1 OF 2 · SECTION SELECTION
            </div>
            <h1 className="sat-section-select-heading">
              Choose Your Starting Section
            </h1>
            <p className="sat-section-select-desc">
              You’ll complete both sections for a total of 24 questions. Choose which section you’d like to tackle first.
            </p>
          </div>

          <div className="sat-section-select-grid">
            {/* Card 1: Mathematics */}
            <div
              className="sat-select-card math"
              onClick={() => handleSelectSection('MATH')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectSection('MATH'); }}
            >
              <div>
                <div className="sat-select-card-top">
                  <span className="sat-select-module-tag">MODULE A</span>
                  <span className="sat-select-qs-badge">12 QUESTIONS</span>
                </div>
                <h2 className="sat-select-card-title">Mathematics</h2>
                <p className="sat-select-card-desc">
                  Algebra, Advanced Math, Problem-Solving &amp; Data Analysis, and Geometry &amp; Trigonometry.
                </p>
              </div>
              <button type="button" className="sat-select-card-cta">
                <span>Start with Mathematics</span>
                <span className="sat-select-card-cta-arrow" aria-hidden="true">→</span>
              </button>
            </div>

            {/* Card 2: Reading & Writing */}
            <div
              className="sat-select-card rw"
              onClick={() => handleSelectSection('READING_WRITING')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSelectSection('READING_WRITING'); }}
            >
              <div>
                <div className="sat-select-card-top">
                  <span className="sat-select-module-tag" style={{ color: '#2BBBAD' }}>MODULE B</span>
                  <span className="sat-select-qs-badge" style={{ color: '#2BBBAD', background: '#EAF7EF' }}>12 QUESTIONS</span>
                </div>
                <h2 className="sat-select-card-title">Reading &amp; Writing</h2>
                <p className="sat-select-card-desc">
                  Information &amp; Ideas, Craft &amp; Structure, Expression of Ideas, and Standard English Conventions.
                </p>
              </div>
              <button type="button" className="sat-select-card-cta">
                <span>Start with English</span>
                <span className="sat-select-card-cta-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          {/* Reassurance Footer Line */}
          <div className="sat-select-reassurance">
            <span className="sat-select-check-icon" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>You’ll complete both sections · Your progress is saved automatically</span>
          </div>
        </main>
      </div>
    );
  }

  // ── Render: Loading ─────────────────────────────────────────
  if (loadingSection) {
    return (
      <div className="quiz-platform-shell">
        {renderTopBar(meta?.shortName)}
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
        {renderTopBar(meta?.shortName)}
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

  // ── Render: Section Intro (Module Overview) ─────────────────
  if (phase === 'intro') {
    return (
      <div className="sat-module-overview-shell">
        <SEO
          title={`${meta?.label} Assessment — Nitaq SAT Diagnostic`}
          description={meta?.description}
        />
        {renderTopBar(meta?.shortName)}

        <main className="sat-module-overview-container">
          <div className="sat-module-overview-panel">
            <div className="sat-module-active-badge">
              ACTIVE MODULE · {meta?.shortName.toUpperCase()}
            </div>

            <h1 className="sat-module-title">
              {meta?.label} Assessment
            </h1>
            <p className="sat-module-desc">
              {meta?.description}
            </p>

            {/* Domains Assessed Grid */}
            <div style={{ marginBottom: '36px' }}>
              <div className="sat-domains-section-title">
                DOMAINS ASSESSED IN THIS MODULE
              </div>
              <div className="sat-domains-grid-container">
                {meta?.domains.map(d => (
                  <div key={d.key} className="sat-domain-card">
                    <div className="sat-domain-name">{d.label}</div>
                    <div className="sat-domain-badge">{d.count}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Information Strip */}
            <div className="sat-info-strip">
              <div>
                <h3 className="sat-info-col-title">12 Diagnostic Questions</h3>
                <p className="sat-info-col-desc">
                  Answer each question to evaluate your domain proficiency.
                </p>
              </div>
              <div>
                <h3 className="sat-info-col-title">Natural Pacing</h3>
                <p className="sat-info-col-desc">
                  Take your time. You can navigate back to change answers anytime.
                </p>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="sat-module-bottom-bar">
              <button
                type="button"
                className="sat-btn-change-section"
                onClick={() => setPhase('choose_section')}
              >
                ← Change Section
              </button>

              <button
                type="button"
                className="sat-btn-begin-module"
                onClick={loadQuestions}
              >
                <span>Begin {meta?.shortName}</span>
                <span className="sat-btn-begin-module-arrow" aria-hidden="true">→</span>
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

          {/* Next / Skip / Submit Button Group */}
          {isLast ? (
            <button
              type="button"
              className="test-btn-submit"
              onClick={handleSubmitSection}
            >
              Submit {meta?.shortName} →
            </button>
          ) : (
            <button
              type="button"
              className={`test-btn-next${!selectedAns ? ' is-skip' : ''}`}
              onClick={handleNext}
            >
              {selectedAns ? 'Next Question →' : 'Skip / Next →'}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
