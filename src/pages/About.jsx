import React from 'react';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import SEO from '../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { 
  Building2, MapPin, Award, ShieldCheck, BookOpen, 
  Users, Target, Compass, Sparkles, CheckCircle, 
  ArrowRight, Phone, MessageCircle 
} from 'lucide-react';
import './courses/sat-course.css';

const About = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  return (
    <>
      <SEO />

      <main className="sat-landing-page course-landing-page about-page-redesign">
        {/* ── 1. HERO SECTION (SAT Design Architecture) ────────────────────────── */}
        {/* ── 1. HERO SECTION (SAT Design Architecture) ────────────────────────── */}
        <section className="sat-hero-section">
          {/* Smooth Sweeping Green Arch Background on Right */}
          <div className="sat-hero-arch-bg" />

          <div className="sat-hero-container">
            <div className="sat-hero-content">
              <div className="sat-hero-eyebrow">
                {isAr ? 'أكاديمية نطاق · المجاز 3، الشارقة · معتمدة من هيئة الشارقة للتعليم الخاص' : 'NITAQ ACADEMY · AL MAJAZ 3, SHARJAH · SPEA AUTHORIZED'}
              </div>

              <h1 className="sat-hero-heading">
                {isAr ? (
                  <>نُمكّن الطموح. <br /><span className="accent-sat">صُممت للتفوق.</span></>
                ) : (
                  <>Empowering Ambitions. <br /><span className="accent-sat">Built for Excellence.</span></>
                )}
              </h1>

              <p className="sat-hero-description">
                {isAr
                  ? 'أكاديمية نطاق هي المركز التعليمي والتدريبي الرائد في المجاز 3 بالشارقة. نقدم تدريباً احترافياً بنتائج ملموسة لاختبارات Digital SAT و IELTS ودروس التقوية الأكاديمية والشهادات المهنية العالمية المعتمدة.'
                  : 'Nitaq Academy is Sharjah’s premier educational center in Al Majaz 3. We deliver structured, results-driven coaching for Digital SAT, IELTS, school subject tuition, and globally accredited professional qualifications.'}
              </p>

              <div className="sat-hero-cta-group">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'مرحباً أكاديمية نطاق، أود معرفة المزيد عن مقركم والبرامج الدراسية.' : 'Hello Nitaq Academy, I would like to know more about your campus and programs.')}`}
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'about_hero_chat')}
                >
                  {isAr ? 'زيارة مقر الأكاديمية ←' : 'Visit Our Campus →'}
                </a>
                <a
                  href="tel:+971527569908"
                  className="sat-btn-secondary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'about_hero_advisor')}
                >
                  {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak to an Advisor'}
                </a>
              </div>

              <div className="sat-hero-trust-line">
                <span className="sat-trust-check-icon">✓</span>
                {isAr ? 'معتمد من هيئة الشارقة للتعليم الخاص · برج أبو خمسين، المجاز 3، الشارقة' : 'SPEA Authorized · Abu Khamseen Tower, Al Majaz 3, Sharjah'}
              </div>
            </div>

            <div className="sat-hero-image-col">
              <div className="sat-hero-image-wrapper">
                <img
                  src="/images/nitaq_classroom_window.webp"
                  alt={isAr ? 'قاعة دراسية تنفيذية مشرقة بإطلالة على الشارقة في أكاديمية نطاق' : 'Nitaq Academy sunlit executive classroom overlooking Sharjah'}
                  width="540"
                  height="500"
                  fetchPriority="high"
                  style={{ objectPosition: 'center 35%' }}
                />

                {/* Floating Rounded Badge Over Image */}
                <div className="sat-hero-floating-badge">
                  <div className="sat-floating-icon-box">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <div className="sat-floating-title">{isAr ? 'برج أبو خمسين' : 'Abu Khamseen Tower'}</div>
                    <div className="sat-floating-subtitle">{isAr ? 'الطابق F1، المجاز 3 · مقر الأكاديمية في الشارقة' : 'Floor F1, Al Majaz 3 · Sharjah Campus'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. INSTITUTIONAL SNAPSHOT STRIP ────────────────────────── */}
        <section className="sat-snapshot-strip">
          <div className="sat-snapshot-container">
            {/* 1. Location */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'مقر الأكاديمية' : 'Campus Location'}</div>
                <div className="sat-snapshot-value">{isAr ? 'المجاز 3، الشارقة' : 'Al Majaz 3, Sharjah'}</div>
              </div>
            </div>

            {/* 2. Regulatory Licensing */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <ShieldCheck size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'الترخيص والاعتماد' : 'Regulatory Status'}</div>
                <div className="sat-snapshot-value">{isAr ? 'معهد مرخص من هيئة الشارقة للتعليم الخاص' : 'SPEA Authorized Institute'}</div>
              </div>
            </div>

            {/* 3. Class Format */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Users size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'حجم المجموعات' : 'Cohort Format'}</div>
                <div className="sat-snapshot-value">{isAr ? 'مجموعات مصغرة (5–8 طلاب)' : 'Micro-Batches (5–8 students)'}</div>
              </div>
            </div>

            {/* 4. Core Offerings */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Award size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'البرامج والتخصصات' : 'Specializations'}</div>
                <div className="sat-snapshot-value">{isAr ? 'SAT، IELTS، دروس التقوية والشهادات المهنية' : 'SAT, IELTS, Tuition & Finance'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. CORE STORY & IDENTITY ────────────────────────────────── */}
        <section className="course-body-section" style={{ padding: '80px 0 40px 0' }}>
          <div className="sat-section-container">
            <div className="content-card" style={{ padding: '48px 44px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
                <div>
                  <div className="sat-why-eyebrow" style={{ marginBottom: '12px' }}>{isAr ? 'قصتنا ورسالتنا' : 'OUR STORY & HERITAGE'}</div>
                  <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', lineHeight: 1.25, marginBottom: '20px' }}>
                    {isAr ? (
                      <>بناء مهارات حقيقية. <br /><span className="text-gradient">وإلهام مستمر للنجاح.</span></>
                    ) : (
                      <>Building Real Skills. <br /><span className="text-gradient">Inspiring Lifelong Progress.</span></>
                    )}
                  </h2>
                  <div className="overview-text">
                    <p className="lead-text" style={{ marginBottom: '18px' }}>
                      {isAr ? (
                        <>تأسست أكاديمية نطاق، المسجلة باسم <strong>شركة نطاق لخدمات التعليم المساند ذ.م.م</strong> في الشارقة، لتكون بيئة أكاديمية متكاملة يحظى فيها كل متعلم بالاهتمام الشخصي والدعم المباشر كركيزة أساسية في كل درس.</>
                      ) : (
                        <>Registered as <strong>Nitaq Supportive Education Services LLC</strong> in Sharjah, UAE, Nitaq Academy was established to provide learners with an academic home where personal attention is the foundation of every lesson.</>
                      )}
                    </p>
                    <p style={{ marginBottom: '18px' }}>
                      {isAr
                        ? 'سواء كان هدف الطالب تحقيق 1400+ في اختبار Digital SAT، أو إحراز Band 8.0 في IELTS، أو تعزيز الأساس العلمي لمناهج IGCSE و Edexcel و IB، أو الارتقاء بالمسار المهني عبر شهادات ACCA وضريبة الشركات في الإمارات — فإننا نمنحك الرؤية الاستراتيجية والإشراف الدقيق للوصول إلى هدفك.'
                        : 'Whether a student is striving to achieve a 1400+ score on the Digital SAT, aiming for a Band 8.0 in IELTS, strengthening high-school STEM fundamentals across Cambridge IGCSE, Edexcel, and IB curriculums, or advancing in professional careers through ACCA and UAE Corporate Tax qualifications—we provide the strategic clarity and mentorship required to succeed.'}
                    </p>
                    <p>
                      {isAr
                        ? 'صُمم مقرنا في برج أبو خمسين بالمجاز 3 ليوفر بيئة عصرية ملهمة تحفز على التركيز والتعاون وبناء الثقة بالنفس في أجواء مريحة وهادئة.'
                        : 'Our campus in Abu Khamseen Tower, Al Majaz 3 is designed to foster focus, collaboration, and confidence in a calm, modern setting.'}
                    </p>
                  </div>
                </div>

                <div style={{ position: 'relative' }}>
                  <img
                    src="/images/nitaq_rooted_sharjah_logo.webp"
                    loading="lazy"
                    decoding="async"
                    alt={isAr ? 'استقبال واستراحة الطلاب في أكاديمية نطاق بالشارقة' : 'Nitaq Academy reception and executive lounge in Sharjah'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '480px',
                      objectFit: 'cover',
                      borderRadius: '20px',
                      border: '1px solid #E4E7EC',
                      boxShadow: '0 16px 36px rgba(16, 24, 40, 0.08)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    right: '16px',
                    background: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(8px)',
                    padding: '12px 18px',
                    borderRadius: '12px',
                    border: '1px solid rgba(228, 231, 236, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                    <CheckCircle size={18} color="#1E7E34" />
                    <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#101828' }}>
                      {isAr ? 'استقبال واستراحة الطلاب التنفيذية في أكاديمية نطاق' : 'Nitaq Academy Executive Student Lounge & Reception'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 4. MODERN LEARNING CAMPUS GALLERY ────────────────────────── */}
            <div style={{ marginTop: '20px', marginBottom: '48px' }}>
              <div className="sat-section-header-center" style={{ marginBottom: '40px' }}>
                <div className="sat-why-eyebrow">{isAr ? 'بيئة تعليمية مصممة للتميز' : 'A PURPOSE-BUILT ENVIRONMENT'}</div>
                <h2 className="sat-why-title" style={{ fontSize: '2.2rem' }}>
                  {isAr ? 'جولة داخل أكاديمية نطاق' : 'Inside Nitaq Academy'}
                </h2>
                <p style={{ color: '#475467', fontSize: '1.05rem', marginTop: '12px', lineHeight: 1.6 }}>
                  {isAr
                    ? 'اكتشف مرافقنا الحديثة والمساحات التفاعلية المهيأة للدراسة المركزة والمجموعات المصغرة.'
                    : 'Take a look inside our high-tech, collaborative spaces engineered for focused study and micro-batch engagement.'}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '24px'
              }}>
                {/* Photo 1: Lounge */}
                <div className="content-card" style={{ padding: '0', overflow: 'hidden', marginBottom: 0 }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img 
                      src="/images/nitaq_rooted_sharjah_logo.webp"
                      loading="lazy"
                      decoding="async" 
                      alt="Nitaq Academy Executive Lounge" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E7E34', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {isAr ? 'الاستقبال والاستراحة' : 'Reception & Lounge'}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', margin: '6px 0 8px 0' }}>{isAr ? 'منطقة الاستقبال والترحيب' : 'Executive Welcoming Area'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: 1.6, margin: 0 }}>
                      {isAr
                        ? 'مساحة مريحة ومهيأة لاستقبال الطلاب واستشارات أولياء الأمور والدراسة الهادئة.'
                        : 'An inspiring, comfortable reception space for student admissions, parent consultations, and quiet study.'}
                    </p>
                  </div>
                </div>

                {/* Photo 2: Classroom Front */}
                <div className="content-card" style={{ padding: '0', overflow: 'hidden', marginBottom: 0 }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img 
                      src="/images/nitaq_classroom_front.webp"
                      loading="lazy"
                      decoding="async" 
                      alt="Interactive Micro-Batch Classroom" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E7E34', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {isAr ? 'تعلم تفاعلي' : 'Interactive Learning'}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', margin: '6px 0 8px 0' }}>{isAr ? 'قاعات دراسية للمجموعات المصغرة' : 'Micro-Batch Classrooms'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: 1.6, margin: 0 }}>
                      {isAr
                        ? 'مجهزة بمقاعد مريحة ومنصة للمدرب وبيئة محفزة تعزز دافعية التحصيل الأكاديمي.'
                        : 'Equipped with ergonomic tablet chairs, instructor podium, and motivational values fostering high academic morale.'}
                    </p>
                  </div>
                </div>

                {/* Photo 3: Window Classroom */}
                <div className="content-card" style={{ padding: '0', overflow: 'hidden', marginBottom: 0 }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img 
                      src="/images/nitaq_classroom_window.webp"
                      loading="lazy"
                      decoding="async" 
                      alt="Sunlit Classroom with Sharjah Skyline View" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E7E34', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {isAr ? 'إضاءة طبيعية مريحة' : 'Natural Daylight'}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', margin: '6px 0 8px 0' }}>{isAr ? 'قاعات بإطلالة بانورامية' : 'Panoramic Learning Suites'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: 1.6, margin: 0 }}>
                      {isAr
                        ? 'قاعات واسعة بنوافذ ممتدة تسمح بدخول الضوء الطبيعي وتطل على أفق الشارقة، مما يزيد من تركيز ونشاط الطالب.'
                        : 'Spacious suites featuring expansive floor-to-ceiling daylight views over Sharjah, elevating focus and alertness.'}
                    </p>
                  </div>
                </div>

                {/* Photo 4: Corridor */}
                <div className="content-card" style={{ padding: '0', overflow: 'hidden', marginBottom: 0 }}>
                  <div style={{ height: '240px', overflow: 'hidden' }}>
                    <img 
                      src="/images/nitaq_corridor_hallway.webp"
                      loading="lazy"
                      decoding="async" 
                      alt="Nitaq Academy Modern Hallway" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1E7E34', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {isAr ? 'مرافق وممرات حديثة' : 'Study Facilities'}
                    </span>
                    <h3 style={{ fontSize: '1.2rem', margin: '6px 0 8px 0' }}>{isAr ? 'ممرات ومساحات أكاديمية معاصرة' : 'Modern Academic Corridors'}</h3>
                    <p style={{ fontSize: '0.9rem', color: '#475467', lineHeight: 1.6, margin: 0 }}>
                      {isAr
                        ? 'مساحات مخصصة للنقاش وقاعات زجاجية عازلة للصوت مصممة لمنع أي تشتيت أثناء التدريس.'
                        : 'Quiet, private discussion bays and glass-partitioned tutoring zones designed for zero distraction.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── 5. MISSION & VISION (Side-by-Side Cards) ──────────────── */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '48px' }}>
              <div className="content-card" style={{ marginBottom: 0, padding: '40px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: '#F4FBF6',
                  border: '1px solid #E2F3E7',
                  color: '#1E7E34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Target size={28} />
                </div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px' }}>{isAr ? 'رسالتنا' : 'Our Mission'}</h3>
                <p style={{ fontSize: '1rem', color: '#475467', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'تقديم تعليم وتدريب شخصي عالي الجودة وميسور التكلفة يربط بين إمكانيات المتعلم والنتائج الملموسة. نُمكّن الطلاب والمهنيين في الشارقة ودولة الإمارات من تحقيق التميز الأكاديمي والمهني وإتقان المهارات اللازمة للقبول الجامعي والنجاح الوظيفي العالمي.'
                    : 'To provide accessible, high-caliber, and personalized instruction that bridges academic potential and concrete outcomes. We empower students and working professionals in Sharjah and the UAE to achieve certified excellence and master essential skills for university admissions and global career growth.'}
                </p>
              </div>

              <div className="content-card" style={{ marginBottom: 0, padding: '40px' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: '#F4FBF6',
                  border: '1px solid #E2F3E7',
                  color: '#1E7E34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <Compass size={28} />
                </div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '12px' }}>{isAr ? 'رؤيتنا' : 'Our Vision'}</h3>
                <p style={{ fontSize: '1rem', color: '#475467', lineHeight: 1.7, margin: 0 }}>
                  {isAr
                    ? 'أن نكون الصرح التعليمي والتدريبي الأكثر موثوقية في دولة الإمارات، المعروف بتحقيق طفرات حقيقية في درجات الطلاب، والنهج التربوي المتمحور حول المتعلم، والمناهج المواكبة التي تُعد قادة الغد للمنافسة عالمياً.'
                    : 'To stand as the UAE’s most trusted learning sanctuary, celebrated for transformative score improvements, student-first pedagogy, and a forward-looking curriculum that prepares tomorrow\'s leaders for competitive global environments.'}
                </p>
              </div>
            </div>

            {/* ── 6. WHY NITAQ ACADEMY SECTION (SAT Architecture) ────────── */}
            <section className="sat-why-section" style={{ borderRadius: '20px', border: '1px solid #E4E7EC', background: '#FFFFFF', marginBottom: '48px' }}>
              <div className="sat-why-container" style={{ padding: '48px 40px' }}>
                <div className="sat-why-header-col">
                  <div className="sat-why-eyebrow">{isAr ? 'لماذا أكاديمية نطاق؟' : 'WHY NITAQ ACADEMY?'}</div>
                  <h2 className="sat-why-title">
                    {isAr ? (
                      <>إشراف دقيق. <div>نتائج <span className="accent-green">مثبتة.</span></div></>
                    ) : (
                      <>Focused Guidance. <div>Proven <span className="accent-green">Results.</span></div></>
                    )}
                  </h2>
                  <p style={{ marginTop: '16px', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.65' }}>
                    {isAr
                      ? 'يحظى كل متعلم باهتمام استراتيجي، وخطط مرحلية واضحة، وتفانٍ حقيقي من أعضاء هيئة التدريس منذ اليوم الأول.'
                      : 'Every learner receives strategic attention, structured milestones, and unwavering faculty dedication from day one.'}
                  </p>
                </div>

                <div className="sat-why-items-col">
                  {/* Item 01 */}
                  <div className="sat-why-item">
                    <div className="sat-why-number-badge">01</div>
                    <div className="sat-why-icon-circle">
                      <Award size={24} />
                    </div>
                    <h3 className="sat-why-item-title">{isAr ? 'معلمون ومدربون مرخصون' : 'Licensed Faculty'}</h3>
                    <p className="sat-why-item-desc">
                      {isAr
                        ? 'تعلم على أيدي نخبة من التربويين والممارسين المعتمدين ذوي الاستراتيجيات المجربة.'
                        : 'Learn from experienced educators and certified practitioners with proven strategies.'}
                    </p>
                  </div>

                  {/* Item 02 */}
                  <div className="sat-why-item">
                    <div className="sat-why-number-badge">02</div>
                    <div className="sat-why-icon-circle">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="sat-why-item-title">{isAr ? 'منهجية تدريس متسلسلة' : 'Structured Pedagogy'}</h3>
                    <p className="sat-why-item-desc">
                      {isAr
                        ? 'تأهيل مرحلي يبدأ من الفهم المفاهيمي العميق وحتى الثقة التامة في يوم الاختبار.'
                        : 'Step-by-step preparation from core conceptual clarity to exam-day confidence.'}
                    </p>
                  </div>

                  {/* Item 03 */}
                  <div className="sat-why-item">
                    <div className="sat-why-number-badge">03</div>
                    <div className="sat-why-icon-circle">
                      <Users size={24} />
                    </div>
                    <h3 className="sat-why-item-title">{isAr ? 'مجموعات مصغرة (5-8 طلاب)' : 'Micro-Batch Cohorts'}</h3>
                    <p className="sat-why-item-desc">
                      {isAr
                        ? 'فصول محدودة تضمن المتابعة الفردية، وتصحيح الأخطاء أولاً بأول، وتفاعل كل طالب.'
                        : 'Cohorts limited to 5–8 students ensuring tailored feedback and personal attention.'}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        {/* ── 7. FINAL CTA BANNER (Matching SAT Design) ───────────────── */}
        <section className="sat-final-cta-section">
          <div className="sat-final-cta-container">
            <h2 className="sat-final-cta-title">{isAr ? 'تفضل بزيارة أكاديمية نطاق في المجاز 3' : 'Visit Nitaq Academy in Al Majaz 3'}</h2>
            <p className="sat-final-cta-desc">
              {isAr
                ? 'حدد موعداً لزيارة الحرم التدريبي، أو خض تقييماً تشخيصياً مجانياً، أو تحدث مباشرة مع فريق الإدارة الأكاديمية.'
                : 'Schedule an in-person campus tour, sit for a free diagnostic evaluation, or speak directly with our academic directors.'}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'مرحباً أكاديمية نطاق، أود تحديد موعد لزيارة مقركم في الشارقة.' : 'Hello Nitaq Academy, I would like to plan a visit to your Sharjah campus.')}`}
                className="sat-btn-cta-white"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'about_final_cta_visit')}
              >
                {isAr ? 'حجز موعد زيارة عبر واتساب ←' : 'Plan a Visit on WhatsApp →'}
              </a>
              <a
                href="tel:+971527569908"
                className="sat-btn-cta-outline"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'about_final_cta_call')}
              >
                {isAr ? 'اتصل بالقبول: 9908 756 52 971+' : 'Call Admissions: +971 52 756 9908'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
