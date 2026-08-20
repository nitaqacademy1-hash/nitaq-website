/**
 * SATDiagnostic.jsx — Student registration & assessment overview page.
 * Collects student info, calls API, saves session token, redirects to quiz.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { DiagnosticPreview } from '../../components/sat/SATDiagnosticSection';
import { registerStudent, ApiError } from '../../services/diagnosticApi';

const SAT_DOMAINS = {
  math: [
    { title: 'Algebra', count: 3, desc: 'Linear equations, systems of equations, and linear functions' },
    { title: 'Advanced Math', count: 3, desc: 'Nonlinear functions, quadratics, and polynomials' },
    { title: 'Problem-Solving & Data Analysis', count: 3, desc: 'Ratios, rates, percentages, and data interpretation' },
    { title: 'Geometry & Trigonometry', count: 3, desc: 'Area, volume, angles, triangles, and trigonometry' }
  ],
  rw: [
    { title: 'Information & Ideas', count: 3, desc: 'Central ideas, details, inferences, and command of evidence' },
    { title: 'Craft & Structure', count: 3, desc: 'Vocabulary in context, text structure, and cross-text analysis' },
    { title: 'Expression of Ideas', count: 3, desc: 'Rhetorical synthesis and transitions in paragraphs' },
    { title: 'Standard English Conventions', count: 3, desc: 'Sentence boundaries, grammar, usage, and punctuation' }
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

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await registerStudent(formData);

      // Persist session data for the quiz flow
      sessionStorage.setItem('nitaq_session_token', result.session_token);
      sessionStorage.setItem('nitaq_session_id', String(result.session_id));
      sessionStorage.setItem('nitaq_student', JSON.stringify(result.student));
      sessionStorage.removeItem('nitaq_current_section');
      sessionStorage.removeItem('nitaq_first_section');
      sessionStorage.removeItem('nitaq_interim_result');
      sessionStorage.removeItem('nitaq_math_result');

      trackEvent(ANALYTICS_EVENTS.FORM, 'sat_diagnostic_registration', {
        student_name: formData.full_name,
        grade: formData.current_grade,
      });

      navigate('/sat/diagnostic/quiz');
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again or contact us on WhatsApp.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getInputStyle = (field) => ({
    width: '100%',
    padding: '14px 16px',
    border: `1.5px solid ${focusField === field ? '#2e7d32' : '#E5E7EB'}`,
    borderRadius: '12px',
    fontSize: '0.95rem',
    color: '#1F2937',
    background: focusField === field ? '#ffffff' : '#FAFAFA',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'all 0.2s ease',
    outline: 'none',
    boxShadow: focusField === field ? '0 0 0 4px rgba(46, 125, 50, 0.12)' : 'none',
  });

  return (
    <main style={{ background: '#ffffff', minHeight: '100vh' }}>
      <SEO
        title="Free SAT Diagnostic Assessment — NITAQ ACADEMY"
        description="Take Nitaq Academy's 24-question free Digital SAT diagnostic test to evaluate your Math and Reading & Writing readiness with an 8-domain analysis."
      />

      {/* ── Hero Header with Generous Navbar Clearance ── */}
      <section style={{
        paddingTop: 'clamp(150px, 16vw, 175px)',
        paddingBottom: '80px',
        background: 'linear-gradient(180deg, #F4F8F4 0%, #FAFCFA 60%, #ffffff 100%)',
        borderBottom: '1px solid #E9EEF0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Decorative Ambient Lighting */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(46, 125, 50, 0.08) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(43, 187, 173, 0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb Bar */}
          <nav aria-label="Breadcrumb" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #E2E8F0',
            borderRadius: '100px',
            fontSize: '0.85rem',
            color: '#64748B',
            marginBottom: '28px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(8px)',
          }}>
            <Link to="/" style={{ color: '#2e7d32', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <Link to="/sat-preparation-sharjah" style={{ color: '#2e7d32', fontWeight: 600, textDecoration: 'none' }}>SAT Preparation</Link>
            <span style={{ color: '#CBD5E1' }}>/</span>
            <span style={{ color: '#0F172A', fontWeight: 600 }}>Free Diagnostic</span>
          </nav>

          <div style={{ maxWidth: '820px' }}>
            {/* Header Tag */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: '#E8F5E9',
              border: '1px solid #C8E6C9',
              borderRadius: '100px',
              fontSize: '0.8rem',
              fontWeight: 700,
              color: '#2e7d32',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '20px'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2e7d32' }} />
              Official Digital SAT Assessment · 24 Questions
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '22px'
            }}>
              Free SAT Diagnostic Assessment
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#475569',
              lineHeight: 1.68,
              marginBottom: '32px'
            }}>
              Accurately evaluate your readiness across all 8 Digital SAT domains in just 15–20 minutes. Get an immediate performance score card and a personalized prep roadmap before you start studying.
            </p>

            {/* Value Proposition Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '32px' }}>
              {[
                { icon: '⏱️', text: '15–20 Minutes' },
                { icon: '📊', text: '8-Domain Analysis' },
                { icon: '🧭', text: 'Personalized Study Plan' },
                { icon: '💯', text: '100% Free' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 14px',
                  background: '#ffffff',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#334155',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}>
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="#start-diagnostic"
                className="btn"
                style={{
                  background: 'linear-gradient(135deg, #2e7d32 0%, #1B5E20 100%)',
                  color: '#ffffff',
                  padding: '16px 36px',
                  borderRadius: '14px',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  boxShadow: '0 8px 20px -4px rgba(46, 125, 50, 0.35)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease',
                }}
              >
                Start Diagnostic Now ↓
              </a>
              <a
                href="https://wa.me/971527569908?text=Hello%20Nitaq,%20I'd%20like%20guidance%20regarding%20the%20Free%20SAT%20Diagnostic."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  background: '#ffffff',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '16px 28px',
                  borderRadius: '14px',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                }}
              >
                <span>💬</span> Ask a SAT Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assessment Structure & Registration Grid ── */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '48px', alignItems: 'start' }}>

            {/* Left Column: Assessment Blueprint */}
            <div>
              <div style={{ marginBottom: '28px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Assessment Blueprint
                </span>
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: '#0F172A', marginTop: '6px', marginBottom: '12px' }}>
                  Structure of the Diagnostic
                </h2>
                <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '1rem' }}>
                  Calibrated to test foundational concepts across both SAT sections. You'll complete <strong>12 Math</strong> questions followed by <strong>12 Reading &amp; Writing</strong> questions.
                </p>
              </div>

              {/* Math Blueprint Card */}
              <div style={{
                background: '#F8FAF8',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '28px',
                marginBottom: '24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>📐</span>
                    <h3 style={{ fontSize: '1.2rem', color: '#1B5E20', margin: 0, fontWeight: 700 }}>
                      Section 1: Mathematics
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32', background: '#E8F5E9', border: '1px solid #C8E6C9', padding: '4px 12px', borderRadius: '100px' }}>
                    12 Questions
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SAT_DOMAINS.math.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.92rem',
                      background: '#ffffff',
                      border: '1px solid #EDF2EE',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}>
                      <span style={{ fontWeight: 600, color: '#1E293B' }}>{d.title}</span>
                      <span style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} Qs
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RW Blueprint Card */}
              <div style={{
                background: '#F6FAF9',
                border: '1px solid #E2E8F0',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.02)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>📖</span>
                    <h3 style={{ fontSize: '1.2rem', color: '#00695C', margin: 0, fontWeight: 700 }}>
                      Section 2: Reading &amp; Writing
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#00695C', background: '#E0F2F1', border: '1px solid #B2DFDB', padding: '4px 12px', borderRadius: '100px' }}>
                    12 Questions
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {SAT_DOMAINS.rw.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontSize: '0.92rem',
                      background: '#ffffff',
                      border: '1px solid #EDF2EE',
                      padding: '12px 16px',
                      borderRadius: '10px'
                    }}>
                      <span style={{ fontWeight: 600, color: '#1E293B' }}>{d.title}</span>
                      <span style={{ color: '#64748B', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} Qs
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Registration Form */}
            <div id="start-diagnostic">
              <div style={{
                background: '#ffffff',
                border: '1px solid #E2E8F0',
                borderRadius: '28px',
                padding: 'clamp(28px, 4vw, 40px)',
                boxShadow: '0 20px 40px -10px rgba(46, 125, 50, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05)',
                position: 'relative'
              }}>
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', background: '#E8F5E9', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                    Step 1 of 2 · Student Info
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.65rem', fontWeight: 700, color: '#0F172A', margin: '4px 0 6px 0' }}>
                    Start Your Diagnostic
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                    Enter your details to generate your personalized 8-domain score analysis.
                  </p>
                </div>

                {error && (
                  <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '12px', padding: '14px 16px', marginBottom: '18px', color: '#991B1B', fontSize: '0.875rem' }}>
                    ⚠️ {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
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
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
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
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
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
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '6px' }}>
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
                    className="btn"
                    style={{
                      background: loading ? '#94A3B8' : 'linear-gradient(135deg, #2e7d32 0%, #1B5E20 100%)',
                      color: '#ffffff',
                      padding: '16px',
                      borderRadius: '14px',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      marginTop: '6px',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: loading ? 'none' : '0 6px 18px rgba(46, 125, 50, 0.3)',
                      transition: 'all 0.2s ease',
                      width: '100%',
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
                    color: '#64748B',
                    textAlign: 'center',
                    marginTop: '2px'
                  }}>
                    <span>🔒</span> Free &amp; Confidential · Instant results after test
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Report Preview Section ── */}
      <section style={{ padding: '80px 0 100px 0', background: '#F8FAF8', borderTop: '1px solid #E9EEF0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2e7d32', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Your Deliverable
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: '#0F172A', marginTop: '6px' }}>
              What Your Diagnostic Report Looks Like
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem', marginTop: '10px', lineHeight: 1.6 }}>
              Upon submission, our scoring engine immediately builds your 8-domain breakdown, estimated Digital SAT score band, and targeted study roadmap.
            </p>
          </div>
          <div style={{ maxWidth: '680px', margin: '0 auto' }}>
            <DiagnosticPreview />
          </div>
        </div>
      </section>
    </main>
  );
}
