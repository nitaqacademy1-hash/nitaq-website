/**
 * SATDiagnostic.jsx — Premium SAT Diagnostic Landing Page & Student Registration Flow.
 * Features existing session detection prompt (Resume vs Start New).
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import SATDiagnosticSection, {
  KnowWhereYouStand,
  SATDomainsGrid,
  RoadmapScorecardPreview,
  FinalDiagnosticCTA,
  WhatsAppFloatingButton
} from '../../components/sat/SATDiagnosticSection';
import { registerStudent, ApiError } from '../../services/diagnosticApi';

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

export default function SATDiagnostic() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    current_grade: 'Grade 11',
    current_status: 'SCHOOL_STUDENT',
    target_sat_score: '1400+',
    sat_test_date: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusField, setFocusField] = useState('');
  const [existingSessionPrompt, setExistingSessionPrompt] = useState(null);

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e, forcedAction = null) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = forcedAction ? { ...formData, action: forcedAction } : formData;
      const result = await registerStudent(payload);

      // Check if existing session found and no forced action taken yet
      if (result.existing_session_found && !forcedAction) {
        setExistingSessionPrompt(result);
        setLoading(false);
        return;
      }

      // Persist session data for quiz execution
      const token = result.session_token || result.existing_session?.session_token || existingSessionPrompt?.existing_session?.session_token;
      const sessionId = result.session_id || result.existing_session?.session_id || existingSessionPrompt?.existing_session?.session_id;

      if (!token) {
        throw new Error('Unable to establish diagnostic session token. Please try again.');
      }

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

      trackEvent(ANALYTICS_EVENTS.FORM, 'sat_diagnostic_registration', {
        student_name: formData.full_name,
        grade: formData.current_grade,
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

  const scrollToForm = (e) => {
    if (e) e.preventDefault();
    const formElem = document.getElementById('start-diagnostic');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
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

      {/* ── Existing Session Prompt Modal ── */}
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
              We found a previous diagnostic session for <strong>{formData.email || formData.phone}</strong>. Would you like to resume your previous progress or start a brand new assessment?
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
                  handleSubmit(null, 'resume');
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
                  handleSubmit(null, 'new');
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
                  Calibrated to test foundational concepts across both SAT sections. You'll complete <strong>12 Math</strong> questions followed by <strong>12 Reading &amp; Writing</strong> questions.
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

            {/* Right Column: Registration Form */}
            <div>
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E4E7EC',
                borderRadius: '28px',
                padding: 'clamp(28px, 4vw, 40px)',
                boxShadow: '0 20px 50px rgba(16, 24, 40, 0.08)',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#ECFDF5', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Step 1 of 2 · Student Details
                  </div>
                  <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.75rem', fontWeight: 800, color: '#101828', margin: '4px 0 6px 0' }}>
                    Start Your Free Diagnostic
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#667085', lineHeight: 1.5, margin: 0 }}>
                    Enter your details to generate your official 8-domain diagnostic analysis.
                  </p>
                </div>

                {error && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '14px 16px', marginBottom: '18px', color: '#991B1B', fontSize: '0.875rem' }}>
                    ⚠️ {error}
                  </div>
                )}

                <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                      Student Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sara Al Mansoori"
                      value={formData.full_name}
                      onChange={e => handleChange('full_name', e.target.value)}
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
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
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
                      value={formData.phone}
                      onChange={e => handleChange('phone', e.target.value)}
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
                        value={formData.current_grade}
                        onChange={e => handleChange('current_grade', e.target.value)}
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
                        value={formData.target_sat_score}
                        onChange={e => handleChange('target_sat_score', e.target.value)}
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
