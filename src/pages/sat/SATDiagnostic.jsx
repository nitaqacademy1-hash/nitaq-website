/**
 * SATDiagnostic.jsx — Premium SAT Diagnostic Landing Page.
 * Supports distinct Student and Parent Journeys with Meta Lead event tracking,
 * advertising UTM parameter preservation, and interactive Parent options.
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { trackEvent, ANALYTICS_EVENTS, trackMetaLead } from '../../utils/analytics';
import { getUtmParameters } from '../../utils/utm';
import { useLanguage } from '../../i18n/context';
import SATDiagnosticSection, {
  KnowWhereYouStand,
  SATDomainsGrid,
  RoadmapScorecardPreview,
  FinalDiagnosticCTA,
  WhatsAppFloatingButton
} from '../../components/sat/SATDiagnosticSection';
import { registerStudent, submitParentEnquiry, ApiError } from '../../services/diagnosticApi';

const DIAGNOSTIC_FAQS = [
  {
    question: 'What is the Nitaq Academy Free Digital SAT Diagnostic Assessment?',
    questionAr: 'ما هو التقييم التشخيصي المجاني لاختبار Digital SAT من أكاديمية نطاق؟',
    answer: 'It is a calibrated 24-question assessment (12 Mathematics and 12 Reading & Writing) mapped directly across the official 8 College Board Digital SAT domains, designed to measure your baseline readiness and pinpoint high-yield score improvement areas in 15 to 20 minutes.',
    answerAr: 'هو تقييم معياري مكون من 24 سؤالاً (12 في الرياضيات و12 في القراءة والكتابة) موزع بدقة على مجالات اختبار Digital SAT الثمانية المعتمدة من College Board، صُمم لقياس مستواك الحالي وتحديد مجالات التحسين ذات الأثر الأكبر خلال 15 إلى 20 دقيقة.',
  },
  {
    question: 'Does this diagnostic test generate an official College Board SAT score?',
    questionAr: 'هل يُصدر هذا الاختبار التشخيصي درجة رسمية معتمدة من College Board؟',
    answer: 'No. This diagnostic provides an estimated score benchmark (scaled to the 400–1600 range) and domain proficiency breakdown developed by Nitaq Academy educators. It helps students identify conceptual gaps and guide study planning, but is not an official College Board administration.',
    answerAr: 'لا، يقدم هذا الاختبار تقديراً معيارياً للدرجة (على مقياس 400 إلى 1600) وتحليلاً تفصيلياً للمجالات أعده خبراء التدريب بأكاديمية نطاق لمساعدتك في معرفة نقاط القوة والضعف، وليس اختباراً رسمياً من College Board.',
  },
  {
    question: 'Can I use a calculator during the Math section of the diagnostic?',
    questionAr: 'هل يمكنني استخدام الآلة الحاسبة أثناء قسم الرياضيات في التقييم؟',
    answer: 'Yes. In accordance with the official Digital SAT Bluebook format, calculator usage is permitted on all Math questions. We encourage students to test their problem-solving and graphing calculator techniques.',
    answerAr: 'نعم، تماماً كما هو الحال في نظام Digital SAT الرسمي عبر تطبيق Bluebook، يُسمح باستخدام الآلة الحاسبة (بما في ذلك حاسبة Desmos البيانية) في جميع أسئلة قسم الرياضيات.',
  },
  {
    question: 'What happens after I complete the diagnostic assessment?',
    questionAr: 'ماذا يحدث بعد أن أكمل التقييم التشخيصي؟',
    answer: 'You receive an instant comprehensive scorecard detailing your composite score band, section breakdown, 8-domain proficiency status, and step-by-step answer rationales. You can also consult with a senior SAT academic strategist via WhatsApp to design a personalized score roadmap.',
    answerAr: 'تحصل فوراً على تقرير درجات شامل يوضح درجتك المقدرة، وتحليلاً لأدائك في القسمين، ومستوى إتقانك لكل مجال من المجالات الثمانية مع تفسيرات تفصيلية للحلول، مع إمكانية التحدث مع مستشار أكاديمي لتصميم خطتك التدريبية.',
  },
  {
    question: 'Is the Digital SAT diagnostic assessment free for UAE high school students?',
    questionAr: 'هل التقييم التشخيصي لاختبار Digital SAT مجاني لطلاب المدارس في الإمارات؟',
    answer: 'Yes, the assessment is 100% free with no credit card or payment required. It is available online to all students across Sharjah, Dubai, Abu Dhabi, and globally.',
    answerAr: 'نعم، التقييم مجاني بنسبة 100% بدون أي رسوم أو بطاقة ائتمان، وهو متاح عبر الإنترنت لجميع الطلاب في الشارقة ودبي وأبوظبي وجميع أنحاء العالم.',
  },
];

const BLUEPRINT_TITLES_AR = {
  'Algebra': 'الجبر الخطي',
  'Advanced Math': 'الرياضيات المتقدمة',
  'Problem-Solving & Data Analysis': 'حل المشكلات وتحليل البيانات',
  'Geometry & Trigonometry': 'الهندسة وحساب المثلثات',
  'Information & Ideas': 'المعلومات والأفكار',
  'Craft & Structure': 'الصياغة والبناء النصي',
  'Expression of Ideas': 'التعبير عن الأفكار',
  'Standard English Conventions': 'قواعد اللغة الإنجليزية المعيارية'
};

const GRADE_LABELS_AR = {
  'Grade 9': 'الصف 9',
  'Grade 10': 'الصف 10',
  'Grade 11': 'الصف 11',
  'Grade 12': 'الصف 12',
  'Gap Year / Retaker': 'سنة تفرغ / إعادة الاختبار'
};

const TARGET_LABELS_AR = {
  'NOT_SURE': 'غير متأكد بعد',
  '1100+': '1100+',
  '1200+': '1200+',
  '1300+': '1300+',
  '1400+': '1400+',
  '1500+': '1500+'
};

const EXPECTED_TEST_DATES_AR = {
  'October 2026': 'أكتوبر 2026',
  'December 2026': 'ديسمبر 2026',
  'March 2027': 'مارس 2027',
  'May / June 2027': 'مايو / يونيو 2027',
  'Undecided / Thinking about it': 'غير محدد بعد / قيد التفكير'
};

const PREVIOUS_SCORE_OPTIONS_AR = {
  'Not taken yet (First time)': 'لم يختبر بعد (أول مرة)',
  'Below 1000': 'أقل من 1000',
  '1000 – 1190': '1000 – 1190',
  '1200 – 1390': '1200 – 1390',
  '1400+': '1400+'
};

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
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

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
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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

      // No contact or assessment data is sent to analytics.
      trackEvent(ANALYTICS_EVENTS.DIAGNOSTIC_START, forcedAction || 'new');

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
        title={isAr ? "التقييم التشخيصي المجاني لاختبار Digital SAT | أكاديمية نطاق" : "Free Digital SAT Diagnostic Assessment | Nitaq Academy"}
        description={isAr ? "خض اختبار Digital SAT التشخيصي المجاني المكون من 24 سؤالاً لتقييم مستواك في الرياضيات والقراءة والكتابة عبر جميع مجالات SAT الثمانية." : "Take Nitaq Academy's 24-question free Digital SAT diagnostic test to evaluate your Math and Reading & Writing readiness across all 8 SAT domains."}
        faqSchema={DIAGNOSTIC_FAQS.map(f => ({ question: isAr ? f.questionAr : f.question, answer: isAr ? f.answerAr : f.answer }))}
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
              {isAr ? 'تم العثور على جلسة تقييم سابقة' : 'Existing Assessment Found'}
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748B', lineHeight: 1.5, margin: '0 0 20px 0' }}>
              {isAr
                ? <>وجدنا جلسة تقييم سابقة مرتبطة بـ <strong>{studentFormData.email || studentFormData.phone}</strong>. هل تود استئناف تقدمك السابق أم بدء تقييم جديد؟</>
                : <>We found a previous diagnostic session for <strong>{studentFormData.email || studentFormData.phone}</strong>. Would you like to resume your previous progress or start a brand new assessment?</>}
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
                {isAr ? 'التقدم السابق:' : 'Previous Progress:'}
              </span>
              <span style={{
                fontSize: '0.775rem',
                fontWeight: 700,
                padding: '4px 12px',
                borderRadius: '100px',
                background: '#ECFDF5',
                color: '#059669'
              }}>
                {existingSessionPrompt.existing_session?.status === 'COMPLETED' ? (isAr ? 'مكتمل' : 'Completed') :
                 existingSessionPrompt.existing_session?.status === 'MATH_COMPLETED' ? (isAr ? 'تم إنهاء الرياضيات' : 'Section 1 (Math) Done') :
                 existingSessionPrompt.existing_session?.status === 'READING_WRITING_COMPLETED' ? (isAr ? 'تم إنهاء القراءة والكتابة' : 'Section 2 (RW) Done') :
                 (isAr ? `قيد التقدم (${existingSessionPrompt.existing_session?.answered_count || 0} من 24 سؤالاً)` : `In Progress (${existingSessionPrompt.existing_session?.answered_count || 0} of 24 Qs)`)}
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
                <span>{isAr ? 'استئناف التقييم السابق ←' : 'Resume Previous Assessment →'}</span>
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
                {isAr ? 'بدء تقييم جديد بدلاً من ذلك' : 'Start a New Assessment Instead'}
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
                  {isAr ? 'مخطط التقييم' : 'Assessment Blueprint'}
                </span>
                <h2 style={{ fontFamily: 'var(--sat-font)', fontSize: '2.2rem', fontWeight: 800, color: '#101828', marginTop: '6px', marginBottom: '12px' }}>
                  {isAr ? 'هيكل التقييم التشخيصي' : 'Structure of the Diagnostic'}
                </h2>
                <p style={{ color: '#475467', lineHeight: 1.65, fontSize: '1.025rem' }}>
                  {isAr ? (
                    <>تمت معايرة هذا الاختبار التشخيصي لقياس الجاهزية وتحديد نقاط القوة والضعف في كلا قسمي SAT. يُجيب الطالب على <strong>12 سؤالاً في الرياضيات</strong> تليها <strong>12 سؤالاً في القراءة والكتابة</strong> لتحديد أداء الطالب وتوصيات التدريب بدقة.</>
                  ) : (
                    <>Calibrated to evaluate your baseline Digital SAT readiness across both test sections. Students complete <strong>12 Math</strong> questions followed by <strong>12 Reading &amp; Writing</strong> questions to pinpoint strengths, weaknesses, and targeted preparation recommendations.</>
                  )}
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
                      {isAr ? 'القسم 1: الرياضيات' : 'Section 1: Mathematics'}
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2E7D32', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '4px 12px', borderRadius: '100px' }}>
                    {isAr ? '12 سؤالاً' : '12 Questions'}
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
                      <span style={{ fontWeight: 600, color: '#101828' }}>{isAr ? (BLUEPRINT_TITLES_AR[d.title] || d.title) : d.title}</span>
                      <span style={{ color: '#667085', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} {isAr ? 'أسئلة' : 'Qs'}
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
                      {isAr ? 'القسم 2: القراءة والكتابة' : 'Section 2: Reading & Writing'}
                    </h3>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#3B82F6', background: '#EFF6FF', border: '1px solid #BFDBFE', padding: '4px 12px', borderRadius: '100px' }}>
                    {isAr ? '12 سؤالاً' : '12 Questions'}
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
                      <span style={{ fontWeight: 600, color: '#101828' }}>{isAr ? (BLUEPRINT_TITLES_AR[d.title] || d.title) : d.title}</span>
                      <span style={{ color: '#667085', fontSize: '0.8rem', fontWeight: 600, background: '#F1F5F9', padding: '2px 8px', borderRadius: '6px' }}>
                        {d.count} {isAr ? 'أسئلة' : 'Qs'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scoring Methodology & Academic Notice Card */}
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '20px',
                padding: '24px',
                marginTop: '24px',
                boxShadow: '0 4px 12px rgba(46, 125, 50, 0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#DCFCE7', color: '#166534', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800 }}>
                    📊
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: '#166534', margin: 0, fontWeight: 800 }}>
                    {isAr ? 'منهجية التقييم والتسجيل التشخيصي' : 'Scoring Methodology & Diagnostic Projection'}
                  </h3>
                </div>
                <p style={{ color: '#14532D', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 12px 0' }}>
                  {isAr ? (
                    <>
                      يختبر التقييم <strong>24 سؤالاً نموذجياً (12 في الرياضيات و12 في القراءة والكتابة)</strong> تمت معايرتها لتوقع نطاق درجات مركب على مقياس Digital SAT الرسمي الممتد بين <strong>400 إلى 1600 نقطة</strong>، مع تحليل أداء دقيق ومباشر عبر مجالات الاختبار الثمانية.
                    </>
                  ) : (
                    <>
                      The evaluation contains <strong>24 calibrated questions (12 Math, 12 Reading &amp; Writing)</strong> mapped directly to projected performance bands on the official <strong>400–1600 Digital SAT scale</strong>, accompanied by an actionable 8-domain proficiency breakdown.
                    </>
                  )}
                </p>
                <div style={{
                  padding: '10px 14px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #BBF7D0',
                  fontSize: '0.8rem',
                  color: '#166534',
                  lineHeight: 1.5
                }}>
                  <strong>{isAr ? 'تنويه أكاديمي معتمد:' : 'Academic Advisory Notice:'}</strong>{' '}
                  {isAr
                    ? 'هذا الاختبار التشخيصي أداة قياس داخلية طورتها الكوادر التدريسية في أكاديمية نطاق لتحديد الفجوات المعرفية ومستوى الجاهزية. الاختبار ليس إدارة رسمية أو امتحاناً صادراً عن College Board.'
                    : 'This diagnostic is an independent readiness assessment developed by Nitaq Academy test-prep faculty to benchmark competencies and isolate knowledge gaps. It is not an official College Board administration.'}
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
                    {isAr ? 'من أنت؟' : 'Who are you?'}
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
                      <span>{isAr ? 'أنا طالب' : 'I’m a Student'}</span>
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
                      <span>{isAr ? 'أنا ولي أمر' : 'I’m a Parent'}</span>
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
                        {isAr ? 'الخطوة 1 من 2 · مسار الطالب' : 'Step 1 of 2 · Student Diagnostic Flow'}
                      </div>
                      <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.75rem', fontWeight: 800, color: '#101828', margin: '4px 0 6px 0' }}>
                        {isAr ? 'ابدأ تقييمك التشخيصي المجاني' : 'Start Your Free Diagnostic'}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: '#667085', lineHeight: 1.5, margin: 0 }}>
                        {isAr
                          ? 'أدخل بياناتك لبدء الاختبار المكون من 24 سؤالاً والحصول على تحليل تفصيلي لدرجتك.'
                          : 'Enter your contact details to begin the 24-question test and unlock your domain score breakdown.'}
                      </p>
                    </div>

                    <form onSubmit={handleStudentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                          {isAr ? 'الاسم الكامل للطالب *' : 'Student Full Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={isAr ? "مثال: سارة المنصوري" : "e.g. Sara Al Mansoori"}
                          value={studentFormData.full_name}
                          onChange={e => handleStudentChange('full_name', e.target.value)}
                          onFocus={() => setFocusField('full_name')}
                          onBlur={() => setFocusField('')}
                          style={getInputStyle('full_name')}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                          {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
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
                          {isAr ? 'رقم الهاتف / الواتساب *' : 'WhatsApp / Phone Number *'}
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
                            {isAr ? 'الصف الدراسي الحالي' : 'Current Grade'}
                          </label>
                          <select
                            value={studentFormData.current_grade}
                            onChange={e => handleStudentChange('current_grade', e.target.value)}
                            onFocus={() => setFocusField('grade')}
                            onBlur={() => setFocusField('')}
                            style={getInputStyle('grade')}
                          >
                            {GRADE_OPTIONS.map(g => <option key={g} value={g}>{isAr ? (GRADE_LABELS_AR[g] || g) : g}</option>)}
                          </select>
                        </div>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                            {isAr ? 'الدرجة المستهدفة' : 'Target SAT Score'}
                          </label>
                          <select
                            value={studentFormData.target_sat_score}
                            onChange={e => handleStudentChange('target_sat_score', e.target.value)}
                            onFocus={() => setFocusField('target')}
                            onBlur={() => setFocusField('')}
                            style={getInputStyle('target')}
                          >
                            {TARGET_OPTIONS.map(o => <option key={o.value} value={o.value}>{isAr ? (TARGET_LABELS_AR[o.value] || o.label) : o.label}</option>)}
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
                        {loading ? (isAr ? '⏳ جاري تجهيز التقييم…' : '⏳ Preparing Assessment…') : (isAr ? 'ابدأ التقييم التشخيصي مجاناً ←' : 'Begin SAT Diagnostic →')}
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
                        <span>{isAr ? 'مجاني ومحمي بسرية تامة · نتائج فورية بعد الانتهاء' : 'Free & Confidential · Instant results after completion'}</span>
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
                            {isAr ? 'إرشاد واستشارة لأولياء الأمور' : 'Parent Guidance & Consultation'}
                          </div>
                          <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.75rem', fontWeight: 800, color: '#101828', margin: '4px 0 6px 0' }}>
                            {isAr ? 'احصل على إرشاد تحضير لاختبار SAT' : 'Get SAT Preparation Guidance'}
                          </h3>
                          <p style={{ fontSize: '0.95rem', color: '#667085', lineHeight: 1.5, margin: 0 }}>
                            {isAr
                              ? 'لا يحتاج أولياء الأمور لأداء الاختبار. املأ هذا النموذج الموجز للتحدث مباشرة مع مستشارينا الأكاديميين المعتمدين لاختبار SAT.'
                              : 'Parents do not need to take the test. Fill out this brief form to speak with our SAT master counselors.'}
                          </p>
                        </div>

                        <form onSubmit={handleParentSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                              {isAr ? 'الاسم الكامل لولي الأمر *' : 'Parent Full Name *'}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder={isAr ? "مثال: محمد المنصوري" : "e.g. Mohammed Al Mansoori"}
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
                                {isAr ? 'رقم الهاتف / الواتساب *' : 'Mobile / WhatsApp *'}
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
                                {isAr ? 'البريد الإلكتروني (اختياري)' : 'Email Address (Optional)'}
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
                                {isAr ? 'الصف الدراسي للطالب *' : 'Student Grade *'}
                              </label>
                              <select
                                value={parentFormData.student_grade}
                                onChange={e => handleParentChange('student_grade', e.target.value)}
                                onFocus={() => setFocusField('p_grade')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_grade')}
                              >
                                {GRADE_OPTIONS.map(g => <option key={g} value={g}>{isAr && GRADE_LABELS_AR[g] ? GRADE_LABELS_AR[g] : g}</option>)}
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                {isAr ? 'موعد اختبار SAT المتوقع' : 'Expected SAT Date'}
                              </label>
                              <select
                                value={parentFormData.expected_sat_date}
                                onChange={e => handleParentChange('expected_sat_date', e.target.value)}
                                onFocus={() => setFocusField('p_date')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_date')}
                              >
                                {EXPECTED_TEST_DATES.map(d => <option key={d} value={d}>{isAr && EXPECTED_TEST_DATES_AR[d] ? EXPECTED_TEST_DATES_AR[d] : d}</option>)}
                              </select>
                            </div>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                {isAr ? 'نتيجة اختبار SAT السابقة (اختياري)' : 'Previous SAT Score (Optional)'}
                              </label>
                              <select
                                value={parentFormData.previous_sat_score}
                                onChange={e => handleParentChange('previous_sat_score', e.target.value)}
                                onFocus={() => setFocusField('p_prev')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_prev')}
                              >
                                {PREVIOUS_SCORE_OPTIONS.map(s => <option key={s} value={s}>{isAr && PREVIOUS_SCORE_OPTIONS_AR[s] ? PREVIOUS_SCORE_OPTIONS_AR[s] : s}</option>)}
                              </select>
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                                {isAr ? 'الدرجة المستهدفة في SAT (اختياري)' : 'Target SAT Score (Optional)'}
                              </label>
                              <select
                                value={parentFormData.target_sat_score}
                                onChange={e => handleParentChange('target_sat_score', e.target.value)}
                                onFocus={() => setFocusField('p_target')}
                                onBlur={() => setFocusField('')}
                                style={getInputStyle('p_target')}
                              >
                                {TARGET_OPTIONS.map(o => <option key={o.value} value={o.value}>{isAr && TARGET_LABELS_AR[o.value] ? TARGET_LABELS_AR[o.value] : o.label}</option>)}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '6px' }}>
                              {isAr ? 'منطقة السكن / الإمارة *' : 'Area of Residence *'}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder={isAr ? "مثال: المجاز 3، الشارقة / القصيص، دبي" : "e.g. Al Majaz 3, Sharjah / Al Qusais, Dubai"}
                              value={parentFormData.area_of_residence}
                              onChange={e => handleParentChange('area_of_residence', e.target.value)}
                              onFocus={() => setFocusField('p_area')}
                              onBlur={() => setFocusField('')}
                              style={getInputStyle('p_area')}
                            />
                          </div>

                          <div>
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#344054', marginBottom: '8px' }}>
                              {isAr ? 'هل يستطيع الطالب حضور الحصص في فرعنا بالمجاز 3، الشارقة؟ *' : 'Can the student attend classes at Al Majaz 3, Sharjah? *'}
                            </label>
                            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                                <span>{isAr ? 'نعم، يمكن الحضور في المجاز 3' : 'Yes, can attend at Al Majaz 3'}</span>
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
                                <span>{isAr ? 'لا (عن بُعد / موقع آخر)' : 'No (Online / Other location)'}</span>
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
                            {loading ? (isAr ? '⏳ جاري إرسال الطلب…' : '⏳ Submitting Enquiry…') : (isAr ? 'احصل على إرشاد تحضير SAT ←' : 'Get SAT Preparation Guidance →')}
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
                          {isAr ? 'تم استلام طلبك بنجاح' : 'Enquiry Received'}
                        </span>

                        <h3 style={{ fontFamily: 'var(--sat-font)', fontSize: '1.8rem', fontWeight: 800, color: '#101828', margin: '6px 0 10px 0' }}>
                          {isAr ? `شكراً لك، ${parentFormData.parent_name}!` : `Thank You, ${parentFormData.parent_name}!`}
                        </h3>

                        <p style={{ color: '#475467', lineHeight: 1.6, fontSize: '0.975rem', marginBottom: '28px' }}>
                          {isAr
                            ? 'لقد سجلنا طلب استشارتك بنجاح. سيتواصل معك مستشارنا الأكاديمي المعتمد لاختبار SAT عبر واتساب أو الهاتف في أقرب وقت.'
                            : 'We have safely logged your SAT guidance request. Our senior SAT academic advisor will connect with you on WhatsApp / phone shortly.'}
                        </p>

                        <div style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: '20px',
                          padding: '24px',
                          textAlign: isAr ? 'right' : 'left',
                          marginBottom: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '16px'
                        }}>
                          <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#101828', margin: 0 }}>
                            {isAr ? 'ما الذي تود القيام به بعد ذلك؟' : 'What would you like to do next?'}
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
                                  {isAr ? 'إرسال التقييم التشخيصي لابني / ابنتي' : 'Send SAT Diagnostic to My Child'}
                                </div>
                                <div style={{ fontSize: '0.825rem', color: '#64748B' }}>
                                  {isAr ? 'شارك رابط الاختبار الرسمي (24 سؤالاً) مباشرة مع الطالب لأدائه.' : 'Share the official 24-question test link directly with your student.'}
                                </div>
                              </div>
                            </div>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                              <a
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(isAr ? 'مرحباً! خض اختبار Digital SAT التشخيصي المجاني من أكاديمية نطاق لمعرفة مستواك الحقيقي: https://www.nitaqacademy.com/ar/sat/diagnostic' : 'Hi! Take Nitaq Academy’s free Digital SAT Diagnostic test here to check your score: https://www.nitaqacademy.com/sat/diagnostic')}`}
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
                                <span>{isAr ? 'مشاركة عبر واتساب' : 'Share via WhatsApp'}</span>
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
                                {copiedLink ? (isAr ? '✓ تم نسخ الرابط!' : '✓ Link Copied!') : (isAr ? 'نسخ الرابط' : 'Copy Link')}
                              </button>
                            </div>
                          </div>

                          {/* Option 2 & 3: Direct Consultation & WhatsApp */}
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            <a
                              href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً أكاديمية نطاق، أنا ${parentFormData.parent_name}. طلبت إرشاداً لاختبار SAT لابني/ابنتي (${(GRADE_LABELS_AR && GRADE_LABELS_AR[parentFormData.student_grade]) || parentFormData.student_grade}). أود جدولة استشارة أكاديمية.` : `Hi Nitaq Academy, I am ${parentFormData.parent_name}. I requested SAT guidance for my child (${parentFormData.student_grade}). I would like to schedule a consultation.`)}`}
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
                              <span>{isAr ? '📞 طلب استشارة فورية' : '📞 Request Consultation'}</span>
                            </a>

                            <a
                              href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً أكاديمية نطاق، لقد قدمت استفساراً لولي أمر بخصوص تحضير SAT. ولي الأمر: ${parentFormData.parent_name}، الصف: ${(GRADE_LABELS_AR && GRADE_LABELS_AR[parentFormData.student_grade]) || parentFormData.student_grade}.` : `Hi Nitaq Academy, I submitted a parent enquiry for SAT guidance. Parent: ${parentFormData.parent_name}, Grade: ${parentFormData.student_grade}.`)}`}
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
                              <span>{isAr ? '💬 تواصل عبر واتساب' : '💬 WhatsApp Nitaq'}</span>
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
                          {isAr ? 'إرسال طلب آخر أو تعديل البيانات' : 'Submit another enquiry or edit details'}
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

      {/* ── 5B. FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) ── */}
      <section style={{ padding: '80px 0', background: '#F8FAFC', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2E7D32', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </span>
            <h2 style={{ fontFamily: 'var(--sat-font)', fontSize: '2.2rem', fontWeight: 800, color: '#101828', marginTop: '8px', marginBottom: '12px' }}>
              {isAr ? 'كل ما تود معرفته عن التقييم التشخيصي' : 'Everything You Need to Know About the SAT Diagnostic'}
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
              {isAr
                ? 'إجابات مباشرة على أكثر الأسئلة تكراراً من الطلاب وأولياء الأمور حول التقييم ومنهجية التسجيل والخطوات اللاحقة.'
                : 'Direct answers to key questions from parents and students regarding the test format, scoring scale, and next steps.'}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {DIAGNOSTIC_FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              const qText = isAr ? faq.questionAr : faq.question;
              const aText = isAr ? faq.answerAr : faq.answer;

              return (
                <div
                  key={index}
                  style={{
                    background: '#FFFFFF',
                    border: `1.5px solid ${isOpen ? '#2E7D32' : '#E2E8F0'}`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 8px 24px rgba(46, 125, 50, 0.08)' : '0 2px 6px rgba(0, 0, 0, 0.02)'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: isAr ? 'right' : 'left',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span style={{ fontSize: '1.025rem', fontWeight: 700, color: '#101828', paddingRight: isAr ? 0 : '16px', paddingLeft: isAr ? '16px' : 0 }}>
                      {qText}
                    </span>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#ECFDF5' : '#F1F5F9',
                      color: isOpen ? '#2E7D32' : '#64748B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      flexShrink: 0
                    }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: '#475467', fontSize: '0.95rem', lineHeight: 1.7, borderTop: '1px solid #F1F5F9' }}>
                      <p style={{ margin: '14px 0 0 0' }}>{aText}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contextual Next Steps Card */}
          <div style={{
            marginTop: '48px',
            background: 'linear-gradient(135deg, #101828 0%, #1E293B 100%)',
            borderRadius: '24px',
            padding: '36px',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#20BFA9', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {isAr ? 'ما بعد التقييم التشخيصي' : 'Next Step: Personalized SAT Preparation'}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', margin: '8px 0 6px 0' }}>
                {isAr ? 'جاهز لتحويل نتيجتك إلى قبول جامعي مرموق؟' : 'Ready to Turn Your Score into Top University Admissions?'}
              </h3>
              <p style={{ color: '#94A3B8', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                {isAr
                  ? 'سواء كنت تفضل الحضور المباشر في فرعنا المعتمد بالشارقة أو الانضمام إلى فصولنا التفاعلية المباشرة عبر الإنترنت من دبي وسائر الإمارات، نوفر لك تدريباً مخصصاً مع نخبة من مدربي SAT.'
                  : 'Whether you prefer intensive in-person coaching at our Sharjah campus or interactive live online classes across Dubai and the UAE, our expert instructors build your path to 1400+.'}
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <Link
                to="/sat-preparation-sharjah"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#20BFA9' }}>
                  {isAr ? 'حضوري في الشارقة ←' : 'Sharjah Campus Course →'}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                  {isAr ? 'برج أبو خمسين، المجاز 3 (معتمد من SPEA)' : 'Abu Khamseen Tower, Al Majaz 3'}
                </div>
              </Link>

              <Link
                to="/sat-preparation-dubai"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#38BDF8' }}>
                  {isAr ? 'أونلاين لطلاب دبي ←' : 'Dubai & Online Course →'}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                  {isAr ? 'فصول تفاعلية مباشرة مع اختبارات محاكاة' : 'Live interactive sessions & adaptive mocks'}
                </div>
              </Link>

              <Link
                to="/article/digital-sat-preparation-guide-sharjah-dubai-uae"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#A78BFA' }}>
                  {isAr ? 'دليل Digital SAT الشامل ←' : 'Complete SAT Prep Guide →'}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                  {isAr ? 'استراتيجيات الحل، حاسبة Desmos وجداول المذاكرة' : 'Desmos hacks, strategies & study schedules'}
                </div>
              </Link>

              <Link
                to="/article/sat-score-1300-guide"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '16px 20px',
                  borderRadius: '14px',
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  transition: 'background 0.2s ease'
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FBBF24' }}>
                  {isAr ? 'دليل الوصول إلى 1300+ ←' : 'Score 1300+ Roadmap →'}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#CBD5E1' }}>
                  {isAr ? 'شروط قبول الجامعات ونسب الدقة المطلوبة' : 'Section targets & UAE university cutoffs'}
                </div>
              </Link>
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
