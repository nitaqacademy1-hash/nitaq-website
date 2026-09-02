/**
 * SATDiagnostic.jsx — Premium SAT Diagnostic Landing Page.
 * Supports distinct Student and Parent Journeys with Meta Lead event tracking,
 * advertising UTM parameter preservation, and interactive Parent options.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS, trackMetaLead } from '../../utils/analytics';
import { getUtmParameters } from '../../utils/utm';
import SATDiagnosticSection, {
  KnowWhereYouStand,
  SATDomainsGrid,
  RoadmapScorecardPreview,
  FinalDiagnosticCTA,
  WhatsAppFloatingButton
} from '../../components/sat/SATDiagnosticSection';
import { registerStudent, submitParentEnquiry, ApiError } from '../../services/diagnosticApi';

const SAT_BLUEPRINT = {
  math: [
    { title: 'Algebra', count: 3 },
    { title: 'Advanced Math', count: 3 },
    { title: 'Problem-Solving & Data Analysis', count: 3 },
    { title: 'Geometry & Trigonometry', count: 3 }
  ],
  rw: [
    { title: 'Information & Ideas', count: 3 },
    { title: 'Craft & Structure', count: 3 },
    { title: 'Expression of Ideas', count: 3 },
    { title: 'Standard English Conventions', count: 3 }
  ]
};

const GRADE_OPTIONS = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12', 'Gap Year / Retaker'];

const TARGET_OPTIONS = [
  { label: 'Not sure yet', value: 'NOT_SURE' },
  { label: '1100+', value: '1100+' },
  { label: '1200+', value: '1200+' },
  { label: '1300+', value: '1300+' },
  { label: '1400+', value: '1400+' },
  { label: '1500+', value: '1500+' },
];

const EXPECTED_TEST_DATES = [
  'October 2026',
  'December 2026',
  'March 2027',
  'May / June 2027',
  'Undecided / Thinking about it'
];

const PREVIOUS_SCORE_OPTIONS = [
  'Not taken yet (First time)',
  'Below 1000',
  '1000 – 1190',
  '1200 – 1390',
  '1400+'
];

export default function SATDiagnostic() {
  const navigate = useNavigate();

  // Persona state: 'STUDENT' or 'PARENT'
  const [persona, setPersona] = useState('STUDENT');
  const [utmParams, setUtmParams] = useState({});

  // Student Form State
  const [studentFormData, setStudentFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    current_grade: 'Grade 11',
    current_status: 'SCHOOL_STUDENT',
    target_sat_score: '1400+',
    sat_test_date: '',
  });

  // Parent Form State
  const [parentFormData, setParentFormData] = useState({
    parent_name: '',
    phone: '',
    email: '',
    student_grade: 'Grade 11',
    expected_sat_date: 'October 2026',
    previous_sat_score: 'Not taken yet (First time)',
    target_sat_score: '1400+',
    area_of_residence: 'Al Majaz, Sharjah',
    can_attend_al_majaz: true,
  });

  const [parentSubmitted, setParentSubmitted] = useState(false);
  const [parentResult, setParentResult] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusField, setFocusField] = useState('');
  const [existingSessionPrompt, setExistingSessionPrompt] = useState(null);

  // Capture UTM parameters on mount
  useEffect(() => {
    const utms = getUtmParameters();
    setUtmParams(utms);
  }, []);

  const handleStudentChange = (field, value) => {
    setStudentFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleParentChange = (field, value) => {
    setParentFormData(prev => ({ ...prev, [field]: value }));
  };

  // Student Registration Submission
  const handleStudentSubmit = async (e, forcedAction = null) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...studentFormData,
        ...utmParams,
        ...(forcedAction ? { action: forcedAction } : {})
      };

      const result = await registerStudent(payload);

      // Check if existing session found and no forced action taken yet
      if (result.existing_session_found && !forcedAction) {
        setExistingSessionPrompt(result);
        setLoading(false);
        return;
      }

      // Session established successfully
      const token = result.session_token || result.existing_session?.session_token || existingSessionPrompt?.existing_session?.session_token;
      const sessionId = result.session_id || result.existing_session?.session_id || existingSessionPrompt?.existing_session?.session_id;

      if (!token) {
        throw new Error('Unable to establish diagnostic session token. Please try again.');
      }

      // Fire Meta Lead Event AFTER successful backend save (deduplicated)
      trackMetaLead(sessionId || token);

      sessionStorage.setItem('nitaq_session_token', token);
      if (sessionId) sessionStorage.setItem('nitaq_session_id', String(sessionId));
      if (result.student) sessionStorage.setItem('nitaq_student', JSON.stringify(result.student));
      sessionStorage.removeItem('nitaq_interim_result');
      sessionStorage.removeItem('nitaq_math_result');

      const sessStatus = result.existing_session?.status || existingSessionPrompt?.existing_session?.status || 'NOT_STARTED';
      const currSec = result.existing_session?.current_section || existingSessionPrompt?.existing_session?.current_section;

      if (currSec) {
        sessionStorage.setItem('nitaq_current_section', currSec);
      }

      trackEvent(ANALYTICS_EVENTS.FORM, 'sat_diagnostic_student_registration', {
        student_name: studentFormData.full_name,
        grade: studentFormData.current_grade,
        action: forcedAction || 'new',
      });

      if (sessStatus === 'COMPLETED') {
        navigate('/sat/diagnostic/results');
      } else if (sessStatus === 'MATH_COMPLETED') {
        sessionStorage.setItem('nitaq_current_section', 'READING_WRITING');
        navigate('/sat/diagnostic/quiz');
      } else if (sessStatus === 'READING_WRITING_COMPLETED') {
        sessionStorage.setItem('nitaq_current_section', 'MATH');
        navigate('/sat/diagnostic/quiz');
      } else {
        navigate('/sat/diagnostic/quiz');
      }
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : (typeof err === 'string' ? err : err?.message);
      setError(msg || 'Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  // Parent Enquiry Submission
  const handleParentSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        ...parentFormData,
        ...utmParams,
      };

      const result = await submitParentEnquiry(payload);

      // Fire Meta Lead Event AFTER successful backend save (deduplicated)
      if (result && result.id) {
        trackMetaLead(`parent_${result.id}`);
      } else {
        trackMetaLead(`parent_${Date.now()}`);
      }

      trackEvent(ANALYTICS_EVENTS.FORM, 'sat_diagnostic_parent_enquiry', {
        parent_name: parentFormData.parent_name,
        student_grade: parentFormData.student_grade,
      });

      setParentResult(result);
      setParentSubmitted(true);
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : (typeof err === 'string' ? err : err?.message);
      setError(msg || 'Something went wrong. Please try again or contact us on WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  const scrollToForm = (e) => {
    if (e) e.preventDefault();
    const formElem = document.getElementById('start-diagnostic');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const copyDiagnosticLink = () => {
    const diagnosticUrl = 'https://www.nitaqacademy.com/sat/diagnostic';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(diagnosticUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const getInputStyle = (field) => ({
    width: '100%',
    padding: '14px 16px',
    border: `1.5px solid ${focusField === field ? '#2E7D32' : '#E4E7EC'}`,
    borderRadius: '12px',
    fontSize: '0.95rem',
    color: '#101828',
    background: focusField === field ? '#FFFFFF' : '#F8FAFC',
    boxSizing: 'border-box',
    fontFamily: 'var(--sat-font, sans-serif)',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxShadow: focusField === field ? '0 0 0 4px rgba(46, 125, 50, 0.12)' : 'none',
  });

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh', fontFamily: 'var(--sat-font, sans-serif)' }}>
      <SEO
        title="Free SAT Diagnostic Assessment — NITAQ ACADEMY"
        description="Take Nitaq Academy's 24-question free Digital SAT diagnostic test to evaluate your Math and Reading & Writing readiness across all 8 SAT domains."
      />

      {/* ── Existing Session Prompt Modal for Students ── */}
      {existingSessionPrompt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(8px)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '24px',
            maxWidth: '520px',
            width: '100%',
            padding: '32px',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid #E2E8F0',
            fontFamily: 'var(--sat-font, sans-serif)'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: '#ECFDF5',
              color: '#059669',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px'
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#101828', margin: '0 0 8px 0' }}>
              Existing Assessment Found
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 20px 0' }}>
              We found a previous diagnostic session for <strong>{studentFormData.email || studentFormData.phone}</strong>. Would you like to resume your previous progress or start a brand new assessment?
            </p>

            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '16px',
              padding: '16px',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#334155' }}>
                Previous Progress:
              </span>
              <span style={{
                fontSize: '0.775rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '100px',
                background: '#ECFDF5',
                color: '#059669'
              }}>
                {existingSessionPrompt.existing_session?.status === 'COMPLETED' ? 'Completed' :
                 existingSessionPrompt.existing_session?.status === 'MATH_COMPLETED' ? 'Section 1 (Math) Done' :
                 existingSessionPrompt.existing_session?.status === 'READING_WRITING_COMPLETED' ? 'Section 2 (RW) Done' :
                 `In Progress (${existingSessionPrompt.existing_session?.answered_count || 0} of 24 Qs)`}
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  setExistingSessionPrompt(null);
                  handleStudentSubmit(null, 'resume');
                }}
                style={{
                  width: '100%',
                  padding: '15px',
                  borderRadius: '14px',
                  background: 'linear-gradient(90deg, #2E7D32 0%, #20BFA9 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(46, 125, 50, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <span>Resume Previous Assessment</span>
                <span>→</span>
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  setExistingSessionPrompt(null);
                  handleStudentSubmit(null, 'new');
                }}
                style={{
                  width: '100%',
                  padding: '14px',
                  borderRadius: '14px',
                  background: '#FFFFFF',
                  color: '#334155',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: '1px solid #CBD5E1',
                  cursor: 'pointer'
                }}
              >
                Start a New Assessment Instead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── 1. HERO SECTION ── */}
      <SATDiagnosticSection showBreadcrumb={true} onStartClick={scrollToForm} />

      {/* ── 2. "KNOW EXACTLY WHERE YOU STAND" (3 STEPS) ── */}
      <KnowWhereYouStand />

      {/* ── 3. 8 SAT DOMAINS GRID ── */}
      <SATDomainsGrid />

      {/* ── 4. SCORECARD & 4-WEEK ROADMAP PREVIEW ── */}
      <RoadmapScorecardPreview />

      {/* ── 5. DIAGNOSTIC BLUEPRINT & REGISTRATION FORM ── */}
      <section style={{ padding: '100px 0', background: '#FFFFFF' }} id="start-diagnostic">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Left Column: Assessment Blueprint */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Assessment Blueprint
                </span>
                <h2 style={{ fontFamily: 'var(--sat-font)', fontSize: '2.2rem', fontWeight: 800, color: '#101828', marginTop: '6px', marginBottom: '12px' }}>
                  Structure of the Diagnostic
                </h2>
                <p style={{ color: '#475467', lineHeight: 1.65, fontSize: '1.025rem' }}>
                  Calibrated to test foundational concepts across both SAT sections. Students complete <strong>12 Math</strong> questions followed by <strong>12 Reading &amp; Writing</strong> questions.
                </p>
              </div>

              {/* Math Blueprint Card */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E4E7EC',
                borderRadius: '20px',
                padding: '28px',
                marginBottom: '24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#ECFDF5', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 19L19 4" />
                        <path d="M19 19L4 4" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#2E7D32', margin: 0, fontWeight: 800 }}>
                      Section 1: Mathematics
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2E7D32', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 12px', borderRadius: '100px' }}>
                    12 Questions
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SAT_BLUEPRINT.math.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.92rem',
                      background: '#FFFFFF',
                      border: '1px solid #E4E7EC',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}>
                      <span style={{ fontWeight: 600, color: '#101828' }}>{d.title}</span>
                      <span style={{ color: '#667085', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} Qs
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RW Blueprint Card */}
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #E4E7EC',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EFF6FF', color: '#3B82F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '1.15rem', color: '#3B82F6', margin: 0, fontWeight: 800 }}>
                      Section 2: Reading &amp; Writing
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '4px 12px', borderRadius: '100px' }}>
                    12 Questions
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SAT_BLUEPRINT.rw.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.92rem',
                      background: '#FFFFFF',
                      border: '1px solid #E4E7EC',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}>
                      <span style={{ fontWeight: 600, color: '#101828' }}>{d.title}</span>
                      <span style={{ color: '#667085', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} Qs
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Persona Switcher & Form / Thank You */}
            <div>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E4E7EC',
                borderRadius: '28px',
                padding: 'clamp(28px, 4vw, 40px)',
                boxShadow: '0 20px 50px rgba(16, 24, 40, 0.08)',
                position: 'relative'
              }}>

                {/* ── WHO ARE YOU? PERSONA SELECTOR TAB ── */}
                <div style={{ marginBottom: '28px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: '#2E7D32',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px'
                  }}>
                    Who are you?
                  </label>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    background: '#F1F5F9',
                    padding: '6px',
                    borderRadius: '16px'
                  }}>
                    <button
                      type="button"
                      onClick={() => {
                        setPersona('STUDENT');
                        setError('');
                      }}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                        background: persona === 'STUDENT' ? '#FFFFFF' : 'transparent',
                        color: persona === 'STUDENT' ? '#101828' : '#64748B',
                        boxShadow: persona === 'STUDENT' ? '0 4px 12px rgba(0,0,0,0.06)' : 'none'
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>🎓</span>
                      <span>I’m a Student</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setPersona('PARENT');
                        setError('');
                      }}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontWeight: 700,
                        fontSize: '0.95rem',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        transition: 'all 0.2s ease',
                        background: persona === 'PARENT' ? '#FFFFFF' : 'transparent',
                        color: persona === 'PARENT' ? '#101828' : '#64748B',
                        boxShadow: persona === 'PARENT' ? '0 4px 12px rgba(0,0,0,0.06)' : 'none'
                      }}
                    >
                      <span style={{ fontSize: '1.1rem' }}>👨‍👩‍👧</span>
                      <span>I’m a Parent</span>
                    </button>
                  </div>
                </div>

                {error && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '14px 16px', marginBottom: '18px', color: '#991B1B', fontSize: '0.875rem' }}>
                    ⚠️ {error}
                  </div>
                )}

                {/* ── PERSONA: STUDENT FLOW ── */}
                {persona === 'STUDENT' && (
                  <>
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#ECFDF5', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                        Step 1 of 2 · Student Diagnostic Flow
                      </div>
                      <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.75rem', fontWeight: 800, color: '#101828', margin: '4px 0 6px 0' }}>
                        Start Your Free Diagnostic
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#667085', lineHeight: 1.5, margin: 0 }}>
                        Enter your contact details to begin the 24-question test and unlock your domain score breakdown.
                      </p>
                    </div>

                    <form onSubmit={handleStudentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                          Student Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Sara Al Mansoori"
                          value={studentFormData.full_name}
                          onChange={e => handleStudentChange('full_name', e.target.value)}
                          onFocus={() => setFocusField('full_name')}
                          onBlur={() => setFocusField('')}
                          style={getInputStyle('full_name')}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="sara@example.com"
                          value={studentFormData.email}
                          onChange={e => handleStudentChange('email', e.target.value)}
                          onFocus={() => setFocusField('email')}
                          onBlur={() => setFocusField('')}
                          style={getInputStyle('email')}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                          WhatsApp / Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+971 50 123 4567"
                          value={studentFormData.phone}
                          onChange={e => handleStudentChange('phone', e.target.value)}
                          onFocus={() => setFocusField('phone')}
                          onBlur={() => setFocusField('')}
                          style={getInputStyle('phone')}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                            Current Grade
                          </label>
                          <select
                            value={studentFormData.current_grade}
                            onChange={e => handleStudentChange('current_grade', e.target.value)}
                            onFocus={() => setFocusField('grade')}
                            onBlur={() => setFocusField('')}
                            style={getInputStyle('grade')}
                          >
                            {GRADE_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                            Target SAT Score
                          </label>
                          <select
                            value={studentFormData.target_sat_score}
                            onChange={e => handleStudentChange('target_sat_score', e.target.value)}
                            onFocus={() => setFocusField('target')}
                            onBlur={() => setFocusField('')}
                            style={getInputStyle('target')}
                          >
                            {TARGET_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="sat-hero-primary-btn"
                        style={{
                          width: '100%',
                          marginTop: '6px',
                          background: loading ? '#94A3B8' : 'linear-gradient(90deg, #2E7D32 0%, #20BFA9 100%)',
                          boxShadow: loading ? 'none' : '0 8px 24px -4px rgba(46, 125, 50, 0.4)',
                          cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                      >
                        {loading ? '⏳ Preparing Assessment…' : 'Begin SAT Diagnostic →'}
                      </button>

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        color: '#667085',
                        textAlign: 'center',
                        marginTop: '4px'
                      }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <span>Free &amp; Confidential · Instant results after completion</span>
                      </div>
                    </form>
                  </>
                )}

                {/* ── PERSONA: PARENT FLOW ── */}
                {persona === 'PARENT' && (
                  <>
                    {!parentSubmitted ? (
                      <>
                        <div style={{ marginBottom: '24px' }}>
                          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#EFF6FF', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                            Parent Guidance &amp; Consultation
                          </div>
                          <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.75rem', fontWeight: 800, color: '#101828', margin: '4px 0 6px 0' }}>
                            Get SAT Preparation Guidance
                          </h3>
                          <p style={{ fontSize: '0.95rem', color: '#667085', lineHeight: 1.5, margin: 0 }}>
                            Parents do not need to take the test. Fill out this brief form to speak with our SAT master counselors.
                          </p>
                        </div>

                        <form onSubmit={handleParentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                              Parent Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Mohammed Al Mansoori"
                              value={parentFormData.parent_name}
                              onChange={e => handleParentChange('parent_name', e.target.value)}
                              onFocus={() => setFocusField('p_name')}
                              onBlur={() => setFocusField('')}
                              style={getInputStyle('p_name')}
                            />
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Mobile / WhatsApp *
                              </label>
                              <input
                                type="tel"
                                required
                                placeholder="+971 50 123 4567"
                                value={parentFormData.phone}
                                onChange={e => handleParentChange('phone', e.target.value)}
                                onFocus={() => setFocusField('p_phone')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_phone')}
                              />
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Email Address (Optional)
                              </label>
                              <input
                                type="email"
                                placeholder="parent@example.com"
                                value={parentFormData.email}
                                onChange={e => handleParentChange('email', e.target.value)}
                                onFocus={() => setFocusField('p_email')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_email')}
                              />
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Student Grade *
                              </label>
                              <select
                                value={parentFormData.student_grade}
                                onChange={e => handleParentChange('student_grade', e.target.value)}
                                onFocus={() => setFocusField('p_grade')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_grade')}
                              >
                                {GRADE_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Expected SAT Date
                              </label>
                              <select
                                value={parentFormData.expected_sat_date}
                                onChange={e => handleParentChange('expected_sat_date', e.target.value)}
                                onFocus={() => setFocusField('p_date')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_date')}
                              >
                                {EXPECTED_TEST_DATES.map(d => <option key={d} value={d}>{d}</option>)}
                              </select>
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Previous SAT Score (Optional)
                              </label>
                              <select
                                value={parentFormData.previous_sat_score}
                                onChange={e => handleParentChange('previous_sat_score', e.target.value)}
                                onFocus={() => setFocusField('p_prev')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_prev')}
                              >
                                {PREVIOUS_SCORE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                Target SAT Score (Optional)
                              </label>
                              <select
                                value={parentFormData.target_sat_score}
                                onChange={e => handleParentChange('target_sat_score', e.target.value)}
                                onFocus={() => setFocusField('p_target')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_target')}
                              >
                                {TARGET_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                              Area of Residence *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Al Majaz 3, Sharjah / Al Qusais, Dubai"
                              value={parentFormData.area_of_residence}
                              onChange={e => handleParentChange('area_of_residence', e.target.value)}
                              onFocus={() => setFocusField('p_area')}
                              onBlur={() => setFocusField('')}
                              style={getInputStyle('p_area')}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '8px' }}>
                              Can the student attend classes at Al Majaz 3, Sharjah? *
                            </label>
                            <div style={{ display: 'flex', gap: '16px' }}>
                              <label style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: parentFormData.can_attend_al_majaz ? '#ECFDF5' : '#F8FAFC',
                                border: `1.5px solid ${parentFormData.can_attend_al_majaz ? '#2E7D32' : '#E4E7EC'}`,
                                padding: '10px 18px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                color: parentFormData.can_attend_al_majaz ? '#2E7D32' : '#475467'
                              }}>
                                <input
                                  type="radio"
                                  name="can_attend"
                                  checked={parentFormData.can_attend_al_majaz === true}
                                  onChange={() => handleParentChange('can_attend_al_majaz', true)}
                                />
                                <span>Yes, can attend at Al Majaz 3</span>
                              </label>

                              <label style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                background: !parentFormData.can_attend_al_majaz ? '#FFF7ED' : '#F8FAFC',
                                border: `1.5px solid ${!parentFormData.can_attend_al_majaz ? '#FF9F43' : '#E4E7EC'}`,
                                padding: '10px 18px',
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                color: !parentFormData.can_attend_al_majaz ? '#C2410C' : '#475467'
                              }}>
                                <input
                                  type="radio"
                                  name="can_attend"
                                  checked={parentFormData.can_attend_al_majaz === false}
                                  onChange={() => handleParentChange('can_attend_al_majaz', false)}
                                />
                                <span>No (Online / Other location)</span>
                              </label>
                            </div>
                          </div>

                          <button
                            type="submit"
                            disabled={loading}
                            style={{
                              width: '100%',
                              padding: '16px',
                              borderRadius: '14px',
                              marginTop: '8px',
                              background: loading ? '#94A3B8' : 'linear-gradient(90deg, #2E7D32 0%, #20BFA9 100%)',
                              color: '#FFFFFF',
                              fontWeight: 800,
                              fontSize: '1rem',
                              border: 'none',
                              cursor: loading ? 'not-allowed' : 'pointer',
                              boxShadow: loading ? 'none' : '0 8px 24px -4px rgba(46, 125, 50, 0.4)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            {loading ? '⏳ Submitting Enquiry…' : 'Get SAT Preparation Guidance →'}
                          </button>
                        </form>
                      </>
                    ) : (
                      /* ── PARENT THANK YOU SCREEN WITH OPTIONS ── */
                      <div style={{ textAlign: 'center', padding: '10px 0' }}>
                        <div style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: '#ECFDF5',
                          color: '#2E7D32',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          margin: '0 auto 20px auto',
                          boxShadow: '0 10px 25px rgba(46, 125, 50, 0.2)'
                        }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>

                        <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          Enquiry Received
                        </span>

                        <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.8rem', fontWeight: 800, color: '#101828', margin: '6px 0 10px 0' }}>
                          Thank You, {parentFormData.parent_name}!
                        </h3>

                        <p style={{ color: '#475467', lineHeight: 1.6, fontSize: '0.975rem', marginBottom: '28px' }}>
                          We have safely logged your SAT guidance request. Our senior SAT academic advisor will connect with you on WhatsApp / phone shortly.
                        </p>

                        <div style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '20px',
                          padding: '24px',
                          textAlign: 'left',
                          marginBottom: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#101828', margin: 0 }}>
                            What would you like to do next?
                          </h4>

                          {/* Option 1: Send SAT Diagnostic to My Child */}
                          <div style={{
                            background: '#FFFFFF',
                            border: '1px solid #E2E8F0',
                            borderRadius: '14px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                              <span style={{ fontSize: '1.2rem' }}>📤</span>
                              <div>
                                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#101828' }}>
                                  Send SAT Diagnostic to My Child
                                </div>
                                <div style={{ fontSize: '0.825rem', color: '#64748B' }}>
                                  Share the official 24-question test link directly with your student.
                                </div>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                              <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('Hi! Take Nitaq Academy’s free Digital SAT Diagnostic test here to check your score: https://www.nitaqacademy.com/sat/diagnostic')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  padding: '8px 14px',
                                  borderRadius: '8px',
                                  background: '#25D366',
                                  color: '#FFFFFF',
                                  fontWeight: 700,
                                  fontSize: '0.825rem',
                                  textDecoration: 'none',
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '6px'
                                }}
                              >
                                <span>Share via WhatsApp</span>
                              </a>
                              <button
                                type="button"
                                onClick={copyDiagnosticLink}
                                style={{
                                  padding: '8px 14px',
                                  borderRadius: '8px',
                                  background: copiedLink ? '#ECFDF5' : '#F1F5F9',
                                  color: copiedLink ? '#2E7D32' : '#334155',
                                  fontWeight: 700,
                                  fontSize: '0.825rem',
                                  border: `1px solid ${copiedLink ? '#A7F3D0' : '#CBD5E1'}`,
                                  cursor: 'pointer'
                                }}
                              >
                                {copiedLink ? '✓ Link Copied!' : 'Copy Link'}
                              </button>
                            </div>
                          </div>

                          {/* Option 2 & 3: Direct Consultation & WhatsApp */}
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                            <a
                              href={`https://wa.me/971501234567?text=${encodeURIComponent(`Hi Nitaq Academy, I am ${parentFormData.parent_name}. I requested SAT guidance for my child (${parentFormData.student_grade}). I would like to schedule a consultation.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                padding: '12px 14px',
                                borderRadius: '12px',
                                background: '#FFFFFF',
                                border: '1.5px solid #2E7D32',
                                color: '#2E7D32',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                              }}
                            >
                              <span>📞 Request Consultation</span>
                            </a>

                            <a
                              href={`https://wa.me/971501234567?text=${encodeURIComponent(`Hi Nitaq Academy, I submitted a parent enquiry for SAT guidance. Parent: ${parentFormData.parent_name}, Grade: ${parentFormData.student_grade}.`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                padding: '12px 14px',
                                borderRadius: '12px',
                                background: '#25D366',
                                color: '#FFFFFF',
                                fontWeight: 700,
                                fontSize: '0.875rem',
                                textDecoration: 'none',
                                textAlign: 'center',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px',
                                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)'
                              }}
                            >
                              <span>💬 WhatsApp Nitaq</span>
                            </a>
                          </div>

                        </div>

                        <button
                          type="button"
                          onClick={() => setParentSubmitted(false)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#64748B',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            textDecoration: 'underline'
                          }}
                        >
                          Submit another enquiry or edit details
                        </button>
                      </div>
                    )}
                  </>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. FINAL CONVERSION BANNER ── */}
      <FinalDiagnosticCTA onStartClick={scrollToForm} />

      {/* ── FLOATING WHATSAPP SUPPORT BUTTON ── */}
      <WhatsAppFloatingButton />
    </main>
  );
}
