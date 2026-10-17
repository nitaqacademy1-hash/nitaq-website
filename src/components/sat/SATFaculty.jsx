import React from 'react';
import { useLanguage } from '../../i18n/context';
import { Award, BookOpen, Clock, ShieldCheck, ArrowRight, Sparkles, Calculator, CheckCircle2, MessageCircle } from 'lucide-react';
import './SATFaculty.css';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SAT TRAINERS DATA CONFIGURATION (DEMO / PLACEHOLDER)
 * When Nitaq provides the final names, real photos, and verified qualifications,
 * update the fields below.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const SAT_TRAINERS_CONFIG = {
  en: [
    {
      id: 'sat-math-lead',
      name: 'Lead SAT Mathematics Specialist',
      role: 'Digital SAT Quantitative & Desmos Expert',
      badge: 'SAT Math 750+ / Desmos Expert',
      image: null, // Set image path here when available: e.g. '/images/sat-trainer-math.jpg'
      initials: 'SM',
      accentColor: '#1E7E34',
      qualifications: 'M.Sc. in Mathematics · 10+ Years Dedicated SAT Preparation',
      experience: 'Coached 800+ students to 700+ Math scores across Sharjah & UAE',
      domains: [
        'Algebra & Linear Equations',
        'Advanced Math & Quadratics',
        'Desmos Graphing Shortcuts (20-Sec Hacks)',
        'Module 2 Trap Avoidance'
      ],
      bio: 'Specializing in fast analytical shortcuts, eliminating College Board traps in Module 2, and mastering the built-in Desmos graphing calculator so students complete questions in under 30 seconds.',
      whatsappMsg: 'Hello Nitaq Academy, I would like to enquire about Digital SAT Math coaching with your specialist.'
    },
    {
      id: 'sat-verbal-lead',
      name: 'Lead SAT Reading & Writing Specialist',
      role: 'Verbal Reasoning & Rhetorical Analysis Expert',
      badge: 'SAT Verbal 750+ / Rhetoric Expert',
      image: null, // Set image path here when available: e.g. '/images/sat-trainer-verbal.jpg'
      initials: 'SR',
      accentColor: '#0F5132',
      qualifications: 'Postgraduate in English Literature · College Board Pedagogy Certified',
      experience: 'Specialist in Reading Comprehension & Standard English Conventions',
      domains: [
        'Information & Central Ideas',
        'Craft & Structure (Words in Context)',
        'Standard English Grammar & Boundaries',
        'Cross-Text Rhetorical Synthesis'
      ],
      bio: 'Focusing on rapid passage deconstruction, identifying deceptive distractor choices, and mastering boundary punctuation so students secure maximum points on adaptive verbal modules.',
      whatsappMsg: 'Hello Nitaq Academy, I would like to enquire about Digital SAT Reading & Writing coaching with your specialist.'
    },
    {
      id: 'sat-strategy-mentor',
      name: 'SAT Performance & Diagnostic Advisor',
      role: 'Personalized Score Roadmaps & Pacing Coach',
      badge: 'Bluebook Analytics & Strategy',
      image: null, // Set image path here when available
      initials: 'SA',
      accentColor: '#15803D',
      qualifications: 'Certified Academic Counselor · Official Bluebook Analytics Specialist',
      experience: 'Individual diagnostic profiling, test pacing, and exam anxiety management',
      domains: [
        'Diagnostic Baseline Scoring (24-Q Quiz)',
        '1400+ / 1500+ Milestone Roadmaps',
        'Full-Length Adaptive Mock Analysis',
        '1-on-1 Error Log Tracking'
      ],
      bio: 'Works 1-on-1 with each student after their diagnostic assessment to build customized weekly study plans, monitor pacing weaknesses, and run full-length proctored Bluebook mock reviews.',
      whatsappMsg: 'Hello Nitaq Academy, I would like to book a 1-on-1 SAT Diagnostic consultation.'
    }
  ],
  ar: [
    {
      id: 'sat-math-lead',
      name: 'كبير مدرسي رياضيات SAT الرقمي',
      role: 'خبير الرياضيات والحساب التحليلي وآلة Desmos',
      badge: 'درجات 750+ / خبير Desmos',
      image: null,
      initials: 'ري',
      accentColor: '#1E7E34',
      qualifications: 'ماجستير في الرياضيات · أكثر من 10 سنوات في تدريب اختبارات SAT',
      experience: 'درّب أكثر من 800 طالب على تحقيق درجات 700+ في قسم الرياضيات',
      domains: [
        'الجبر والمعادلات الخطية',
        'الرياضيات المتقدمة والدوال التربيعية',
        'حيل واختصارات آلة Desmos البيانية',
        'تجاوز فخاخ الوحدة الثانية التكيفية'
      ],
      bio: 'متخصص في تبسيط المفاهيم المعقدة، وتعليم استراتيجيات حل المسائل في أقل من 30 ثانية باستخدام آلة Desmos المدمجة في اختبار Bluebook.',
      whatsappMsg: 'مرحباً أكاديمية نطاق، أود الاستفسار عن دروس رياضيات اختبار SAT الرقمي مع أستاذ المادة.'
    },
    {
      id: 'sat-verbal-lead',
      name: 'كبير مدرسي القراءة والكتابة لاختبار SAT',
      role: 'خبير التحليل البلاغي وقواعد اللغة الإنجليزية المعيارية',
      badge: 'درجات 750+ / خبير البلاغة',
      image: null,
      initials: 'قر',
      accentColor: '#0F5132',
      qualifications: 'دراسات عليا في اللغة الإنجليزية · معتمد في استراتيجيات College Board',
      experience: 'خبير في تحليل النصوص التكيفية وصياغة الأفكار اللغوية',
      domains: [
        'المعلومات والأفكار المركزية',
        'البناء النصي والكلمات في السياق',
        'قواعد اللغة الإنجليزية وعلامات الترقيم',
        'الربط والتحليل البلاغي بين النصوص'
      ],
      bio: 'يركز على مهارات القراءة السريعة والذكية، وكشف الإجابات المضللة في نصوص الوحدة الثانية الصعبة، وضمان إتقان القواعد الإنجليزية كاملة.',
      whatsappMsg: 'مرحباً أكاديمية نطاق، أود الاستفسار عن دروس القراءة والكتابة لاختبار SAT مع أستاذ المادة.'
    },
    {
      id: 'sat-strategy-mentor',
      name: 'مستشار التقييم والخطط التشخيصية لاختبار SAT',
      role: 'إعداد خطط الدرجات الفردية وإدارة الوقت',
      badge: 'تحليل اختبارات Bluebook',
      image: null,
      initials: 'تش',
      accentColor: '#15803D',
      qualifications: 'مستشار أكاديمي معتمد · أخصائي تحليل تقارير المحاكاة الرسمية',
      experience: 'تحديد نقاط الضعف الفردية، وإدارة وقت الاختبار، والحد من التوتر',
      domains: [
        'التقييم التشخيصي الأولي (24 سؤالاً)',
        'مسارات الدرجات المستهدفة (1400+ / 1500+)',
        'تحليل الامتحانات التجريبية التكيفية',
        'متابعة سجل الأخطاء الفردي أسبوعياً'
      ],
      bio: 'يتابع كل طالب بشكل فردي بعد الاختبار التشخيصي لوضع جدول زمني مخصص، وتحليل نتائج اختبارات Bluebook المحاكية لضمان أعلى جاهزية.',
      whatsappMsg: 'مرحباً أكاديمية نطاق، أود حجز جلسة استشارة تشخيصية لاختبار SAT.'
    }
  ]
};

export default function SATFaculty() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const trainers = SAT_TRAINERS_CONFIG[lang] || SAT_TRAINERS_CONFIG.en;

  return (
    <section className="sat-faculty-section" id="sat-faculty" aria-label="Digital SAT Faculty & Trainers">
      <div className="sat-section-container">
        {/* Section Header */}
        <div className="sat-section-header-center">
          <div className="sat-faculty-eyebrow">
            <Sparkles size={14} className="sat-sparkle-icon" aria-hidden="true" />
            <span>{isAr ? 'هيئة تدريس وتدريب SAT' : 'DIGITAL SAT SPECIALIST FACULTY'}</span>
          </div>
          <h2 className="sat-faculty-title">
            {isAr
              ? 'تعلّم مع نخبة من خبراء رياضيات وقراءة SAT الرقمي'
              : 'Learn From Specialized SAT Mentors & Desmos Experts'}
          </h2>
          <p className="sat-faculty-subtitle">
            {isAr
              ? 'يجمع مدربونا بين التمكن العميق من متطلبات College Board والحلول السريعة بالأجهزة البيانية لمساعدتك في بلوغ درجة 1400+ بثقة.'
              : 'Our faculty members specialize exclusively in College Board test domains, fast Desmos calculator shortcuts, and high-yield pacing strategies for 1400+ scores.'}
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="sat-faculty-grid">
          {trainers.map((trainer) => (
            <article key={trainer.id} className="sat-faculty-card">
              {/* Card Header & Avatar */}
              <div className="sat-card-top">
                <div className="sat-avatar-frame" style={{ borderColor: trainer.accentColor }}>
                  {trainer.image ? (
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      width="100"
                      height="100"
                      loading="lazy"
                      decoding="async"
                      className="sat-avatar-img"
                    />
                  ) : (
                    <div
                      className="sat-avatar-placeholder"
                      style={{ background: `${trainer.accentColor}15`, color: trainer.accentColor }}
                      aria-hidden="true"
                    >
                      <span className="sat-avatar-initials">{trainer.initials}</span>
                    </div>
                  )}

                  <span className="sat-verified-chip" title="Verified SAT Faculty">
                    <CheckCircle2 size={12} aria-hidden="true" />
                    {isAr ? 'معتمد' : 'Verified'}
                  </span>
                </div>

                <div className="sat-card-meta">
                  <div className="sat-badge-pill" style={{ color: trainer.accentColor, backgroundColor: `${trainer.accentColor}12` }}>
                    <ShieldCheck size={13} aria-hidden="true" />
                    <span>{trainer.badge}</span>
                  </div>
                  <h3 className="sat-card-name">{trainer.name}</h3>
                  <p className="sat-card-role">{trainer.role}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="sat-card-body">
                {/* Credentials */}
                <div className="sat-spec-row">
                  <Award size={16} className="sat-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="sat-spec-label">{isAr ? 'المؤهلات الأكاديمية' : 'Qualifications'}</span>
                    <p className="sat-spec-val">{trainer.qualifications}</p>
                  </div>
                </div>

                {/* Experience */}
                <div className="sat-spec-row">
                  <Clock size={16} className="sat-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="sat-spec-label">{isAr ? 'الخبرة والنتائج' : 'Experience & Track Record'}</span>
                    <p className="sat-spec-val">{trainer.experience}</p>
                  </div>
                </div>

                {/* Domain Focus Tags */}
                <div className="sat-spec-row">
                  <BookOpen size={16} className="sat-spec-icon" aria-hidden="true" />
                  <div>
                    <span className="sat-spec-label">{isAr ? 'مجالات التركيز والتفوق' : 'Core Focus Areas'}</span>
                    <div className="sat-domain-tags">
                      {trainer.domains.map((d, dIdx) => (
                        <span key={dIdx} className="sat-domain-tag">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bio paragraph */}
                <p className="sat-card-bio">{trainer.bio}</p>
              </div>

              {/* Card Foot CTA */}
              <div className="sat-card-foot">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(trainer.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sat-faculty-enquire-btn"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>{isAr ? 'استشارة مع مدرّب المادة' : 'Consult This Specialist'}</span>
                  <ArrowRight size={14} className="sat-btn-arrow" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* SAT Diagnostic Callout Banner */}
        <div className="sat-faculty-diagnostic-banner">
          <div className="sat-fdiag-icon" aria-hidden="true">
            <Calculator size={26} />
          </div>
          <div className="sat-fdiag-text">
            <h4>
              {isAr
                ? 'هل ترغب في معرفة مستواك الحالي قبل تحديد مدربك ومسارك؟'
                : 'Not sure which area needs the most work?'}
            </h4>
            <p>
              {isAr
                ? 'ابدأ بتقييم SAT الرقمي المجاني (24 سؤالاً) لتحديد مستواك في الرياضيات والقراءة خلال 15 دقيقة.'
                : 'Take our free 24-question adaptive diagnostic to identify your exact math and verbal baselines.'}
            </p>
          </div>
          <a
            href="/sat/diagnostic"
            className="sat-btn-primary"
            style={{ padding: '12px 24px', fontSize: '0.92rem', whiteSpace: 'nowrap' }}
          >
            <span>{isAr ? 'ابدأ التقييم التشخيصي المجاني' : 'Start Free Diagnostic'}</span>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
