import React from 'react';
import { Link } from '../../i18n/Link';
import { useLanguage } from '../../i18n/context';
import SEO from '../../components/SEO';
import SATDiagnosticSection from '../../components/sat/SATDiagnosticSection';
import SATFaculty from '../../components/sat/SATFaculty';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { 
  BookOpen, Clock, Calendar, MapPin, Award, CheckCircle2, 
  ArrowRight, Laptop, Users, HelpCircle, Compass, Sparkles, Target, TrendingUp, ShieldCheck, Monitor
} from 'lucide-react';
import './sat-course.css';

const DUBAI_FAQS = [
  {
    question: 'How are online SAT classes conducted for Dubai students?',
    questionAr: 'كيف تُعقد حصص SAT عبر الإنترنت لطلاب دبي؟',
    answer: 'Online SAT classes for Dubai students are conducted live and interactively via high-definition video classrooms. Mentors use shared digital whiteboards, demonstrate live Desmos calculator problem-solving, and conduct timed question drills in real time. Students interact actively, ask questions, and receive access to full session recordings for exam revision.',
    answerAr: 'تُعقد حصص SAT عبر الإنترنت لطلاب دبي بشكل مباشر وتفاعلي عبر فصول افتراضية عالية الدقة. يستخدم المعلمون ألواحاً رقمية تفاعلية، ويشرحون حل المسائل عملياً على آلة Desmos البيانية مع تدريبات فورية. يتفاعل الطلاب مباشرة ويحصلون على تسجيلات كاملة لجميع الحصص للمراجعة.'
  },
  {
    question: 'Can Dubai students attend in-person mock exams at the Sharjah campus?',
    questionAr: 'هل يمكن لطلاب دبي حضور الامتحانات التجريبية حضورياً في مقر الشارقة؟',
    answer: 'Yes. Nitaq Academy offers a flexible hybrid option: Dubai students attend live online classes and can visit our campus at Abu Khamseen Tower in Al Majaz 3, Sharjah (easily accessible via E11 and E311) to sit proctored full-length computer-based mock exams under authentic test-day conditions.',
    answerAr: 'نعم. توفر أكاديمية نطاق خياراً هجيناً مرناً؛ حيث يحضر طلاب دبي الدروس التفاعلية عبر الإنترنت، مع إمكانية زيارة مقرنا في برج أبو خمسين بالمجاز 3 في الشارقة (يسهل الوصول إليه عبر شارع الاتحاد E11 وطريق الشيخ محمد بن زايد E311) لخوض امتحانات محاكاة كاملة تحت إشراف مباشر وظروف اختبار حقيقية.'
  },
  {
    question: 'What batch timings are available for online SAT prep in Dubai?',
    questionAr: 'ما هي مواعيد المجموعات التدريبية المتاحة عبر الإنترنت لطلاب دبي؟',
    answer: 'We provide flexible schedules designed specifically around Dubai school hours and traffic. Batches include weekday evening sessions (Monday through Thursday from 5:30 PM to 8:30 PM) and weekend morning sessions on Fridays and Saturdays (9:30 AM to 12:30 PM), in addition to customized 1-on-1 private scheduling.',
    answerAr: 'نوفر جداول مرنة مصممة خصيصاً لتناسب أوقات المدارس في دبي، وتتضمن فترات مسائية خلال أيام الأسبوع (من الاثنين إلى الخميس، 5:30 إلى 8:30 مساءً) ومجموعات صباحية في عطلة نهاية الأسبوع يومي الجمعة والسبت (9:30 صباحاً إلى 12:30 ظهراً)، بالإضافة إلى مواعيد مخصصة للتدريب الفردي.'
  },
  {
    question: 'Does Nitaq Academy have a physical branch in Dubai?',
    questionAr: 'هل لدى أكاديمية نطاق فرع فعلي في دبي؟',
    answer: 'Nitaq Academy’s official physical campus is located at Abu Khamseen Tower in Al Majaz 3, Sharjah. We serve Dubai students through our dedicated live interactive online platform, paired with optional hybrid access for students wishing to take proctored in-person mock tests at our nearby Sharjah facility.',
    answerAr: 'يقع المقر الفعلي الرئيسي لأكاديمية نطاق في برج أبو خمسين بالمجاز 3، الشارقة. نخدم طلاب دبي من خلال منصتنا التفاعلية المباشرة عبر الإنترنت، مع إتاحة خيار الحضور الهجين للراغبين في خوض الاختبارات التجريبية المحاكية في مقرنا القريب بالشارقة.'
  },
  {
    question: 'Where do Dubai students sit the official Digital SAT exam?',
    questionAr: 'أين يتقدم طلاب دبي لاختبار Digital SAT الرسمي؟',
    answer: 'Official College Board Digital SAT exams are administered on designated Saturday test dates at authorized test center schools across Dubai, such as GEMS schools, Dubai International Academy, and Universal American School. Students register online via collegeboard.org and select their preferred Dubai school venue.',
    answerAr: 'يُعقد اختبار Digital SAT الرسمي في مراكز ومدارس معتمدة من College Board في مختلف مناطق دبي (مثل مدارس جيمس، وأكاديمية دبي الدولية، والمدرسة الأمريكية العالمية). يقوم الطالب بالتسجيل واختيار المركز المناسب له في دبي عبر موقع collegeboard.org.'
  },
  {
    question: 'How does Nitaq Academy track student progress in online SAT courses?',
    questionAr: 'كيف تتابع أكاديمية نطاق تقدم الطلاب في دورات SAT عبر الإنترنت؟',
    answer: 'Students begin with a comprehensive 24-question diagnostic assessment, followed by weekly module accuracy evaluations and full-length adaptive computer-based mock tests. Parents and students receive detailed domain scorecards highlighting progress across all 8 official College Board categories.',
    answerAr: 'يبدأ الطالب بتقييم تشخيصي من 24 سؤالاً، يليه تقييمات دورية وامتحانات محاكاة تكيفية كاملة. يحصل أولياء الأمور والطلاب على تقارير تفصيلية دورية توضح مستوى الدقة ومعدل التقدم عبر مجالات الاختبار الثمانية.'
  },
  {
    question: 'What are the fees for SAT preparation for Dubai students?',
    questionAr: 'ما هي رسوم التحضير لاختبار SAT لطلاب دبي؟',
    answer: 'SAT preparation fees at Nitaq Academy are competitive and transparent, typically ranging from AED 1,800 to AED 4,000 depending on the program track (Foundation, Comprehensive, or Intensive sprint) and whether group classes or 1-on-1 private tutoring is selected. All diagnostic tools, materials, and mock exams are included.',
    answerAr: 'تتميز رسوم التحضير لاختبار SAT في أكاديمية نطاق بالشفافية، وتتراوح عادة بين 1,800 و4,000 درهم إماراتي بحسب المسار التدريبي (التأسيسي، الشامل، أو المكثف) ونمط التدريب (مجموعات مصغرة أو تدريب فردي 1-على-1). تشمل الرسوم كافة التقييمات والمواد ونماذج الاختبارات.'
  }
];

const SATCourseDubai = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const faqSchemaData = DUBAI_FAQS.map(f => ({
    question: isAr ? f.questionAr : f.question,
    answer: isAr ? f.answerAr : f.answer
  }));

  return (
    <>
      <SEO faqSchema={faqSchemaData} />

      <main className="sat-landing-page">
        {/* ── 1. HERO SECTION ────────────────────────────────────────── */}
        <section className="sat-hero-section">
          <div className="sat-hero-arch-bg" />

          <div className="sat-hero-container">
            <div className="sat-hero-content">
              <div className="sat-hero-eyebrow">
                {isAr
                  ? 'مباشر وتفاعلي عبر الإنترنت · تحضير اختبار SAT الرقمي لطلاب دبي'
                  : 'LIVE INTERACTIVE ONLINE · DIGITAL SAT PREPARATION FOR DUBAI STUDENTS'}
              </div>

              <h1 className="sat-hero-heading">
                {isAr ? 'التحضير لاختبار SAT لطلاب دبي' : 'SAT Preparation in Dubai'}
              </h1>

              <p className="sat-hero-description">
                {isAr
                  ? 'تبحث عن تحضير لاختبار SAT في دبي؟ استكشف خيارات التعلم لاختبار SAT مع أكاديمية نطاق: فصول تفاعلية مباشرة عبر الإنترنت، ودعم مركز في الرياضيات والقراءة والكتابة، وحيل آلة Desmos، واختبارات تجريبية تكيفية بنظام Bluebook، مع خيار الحضور الهجين للامتحانات التجريبية.'
                  : 'Looking for SAT preparation in Dubai? Explore Nitaq Academy’s SAT learning options, Math and English preparation, Desmos graphing strategies, full-length adaptive practice tests, and dedicated study support tailored for Dubai high school students.'}
              </p>

              <div className="sat-hero-cta-group">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(
                    isAr
                      ? 'مرحباً أكاديمية نطاق، أود الاستفسار عن التحضير لاختبار SAT لطلاب دبي'
                      : 'Hi Nitaq Academy, I am interested in SAT Preparation for Dubai students'
                  )}`}
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_dubai_hero_enroll')}
                >
                  {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
                </a>
                <Link
                  to="/sat/diagnostic"
                  className="sat-btn-secondary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'sat_dubai_hero_diagnostic')}
                >
                  {isAr ? 'ابدأ التقييم التشخيصي المجاني' : 'Start Free Diagnostic'}
                </Link>
              </div>

              <div className="sat-hero-trust-line">
                <span className="sat-trust-check-icon">✓</span>
                {isAr 
                  ? 'حصص مباشرة عبر الإنترنت · تسجيلات للمراجعة · خيار الحضور الهجين للامتحانات التجريبية' 
                  : 'Live Interactive Online Classes · Recorded Sessions · Optional Hybrid Campus Mocks'}
              </div>
            </div>

            <div className="sat-hero-image-col">
              <div className="sat-hero-image-wrapper">
                <img
                  src="/images/sat_v2.webp"
                  sizes="(max-width: 768px) calc(100vw - 48px), 500px"
                  alt="Dubai student preparing for the Digital SAT with Nitaq Academy"
                  title="Dubai student preparing for the Digital SAT with Nitaq Academy"
                  width="500"
                  height="500"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />

                <div className="sat-hero-floating-badge">
                  <div className="sat-floating-icon-box">
                    <Laptop size={24} />
                  </div>
                  <div>
                    <div className="sat-floating-title">{isAr ? 'تعليم افتراضي تفاعلي' : 'Live Online Cohorts'}</div>
                    <div className="sat-floating-subtitle">{isAr ? 'مباشر · تطبيقي · مواعيد مرنة' : 'Interactive · Adaptive · UAE Timings'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. COURSE SNAPSHOT STRIP ──────────────────────────────── */}
        <section className="sat-snapshot-strip">
          <div className="sat-snapshot-container">
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Compass size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'المسارات' : 'Programs'}</div>
                <div className="sat-snapshot-value">{isAr ? 'تأسيسي · شامل · مكثف' : 'Foundation · Comprehensive · Intensive'}</div>
              </div>
            </div>

            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Calendar size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'المواعيد' : 'Schedule'}</div>
                <div className="sat-snapshot-value">{isAr ? 'فترات مسائية وعطلة نهاية الأسبوع' : 'Weekday Evenings & Weekend Mornings'}</div>
              </div>
            </div>

            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Monitor size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'نمط الدراسة' : 'Format'}</div>
                <div className="sat-snapshot-value">{isAr ? 'تفاعلي عبر الإنترنت + امتحانات هجينة' : 'Live Interactive Online + Hybrid Mocks'}</div>
              </div>
            </div>

            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <BookOpen size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'المحتوى' : 'Focus Areas'}</div>
                <div className="sat-snapshot-value">{isAr ? 'الرياضيات (Desmos) والقراءة والكتابة' : 'Math (Desmos) & Reading/Writing'}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. SAT PREPARATION FOR STUDENTS IN DUBAI ───────────────── */}
        <section className="sat-definition-section">
          <div className="sat-section-container">
            <div className="sat-definition-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="sat-guide-tag">{isAr ? 'سوق دبي التعليمي' : 'DUBAI STUDENT SUCCESS'}</span>
                <span style={{ color: '#94A3B8' }}>•</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475467' }}>
                  {isAr ? 'القبول الجامعي والمنح' : 'Admissions & Merit Scholarships'}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#101828', marginBottom: '18px', lineHeight: 1.25 }}>
                {isAr ? 'التحضير لاختبار SAT للطلاب في دبي' : 'SAT Preparation for Students in Dubai'}
              </h2>

              <p style={{ color: '#475467', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {isAr ? (
                  <>
                    يواجه طلاب المدارس الثانوية الدولية والأمريكية والبريطانية في دبي (مثل مدارس GEMS، دبي كوليدج، والمدرسة الأمريكية بدبي) متطلبات قبول تنافسية عند التقديم لجامعات الإمارات الرائدة مثل <strong>الجامعة الأمريكية في الشارقة (AUS)</strong>، <strong>جامعة خليفة</strong>، <strong>جامعة نيويورك أبوظبي</strong>، والجامعات الدولية في الولايات المتحدة والمملكة المتحدة وكندا. يمثل تحقيق درجة 1300+ إلى 1500+ في <strong>Digital SAT</strong> عاملاً حاسماً ليس فقط للقبول المباشر في التخصصات الهندسية والتجارية، بل للحصول على منح دراسية مجزية تغطي نسبة كبيرة من الرسوم.
                  </>
                ) : (
                  <>
                    For high school students attending international, American, British, and IB schools across Dubai—including institutions in Al Barsha, Jumeirah, Emirates Hills, and Nad Al Sheba—earning a top-tier SAT score is critical for college admissions. Whether your target is direct entry and merit scholarships at premier UAE universities like the <strong>American University of Sharjah (AUS)</strong>, <strong>Khalifa University</strong>, and <strong>NYU Abu Dhabi</strong>, or competitive admission to top universities in the US and Canada, Nitaq Academy offers calibrated, results-driven SAT coaching tailored for Dubai learners.
                  </>
                )}
              </p>

              <div className="sat-grid-2col">
                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Target size={22} />
                    </div>
                    <h3>{isAr ? 'أهداف الجامعات في الإمارات' : 'UAE University Benchmark Targets'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'تتطلب الجامعة الأمريكية في الشارقة 1200–1350+ للهندسة وإدارة الأعمال، بينما تستهدف جامعة خليفة 1250–1400+، وجامعة نيويورك أبوظبي 1450–1550+ للمنح.'
                      : 'Structured target trajectories: 1200–1350+ for AUS engineering and business, 1250–1400+ for Khalifa University, and 1450–1550+ for elite global colleges.'}
                  </p>
                </div>

                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Clock size={22} />
                    </div>
                    <h3>{isAr ? 'مواعيد ملائمة لحياة دبي' : 'Balanced with Dubai School Demands'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'حصص مسائية وفي عطلة نهاية الأسبوع مصممة لتفادي زحام التنقل في دبي وضمان التركيز دون إرهاق الطالب بعد الدوام المدرسي.'
                      : 'Evening and weekend timings eliminate commute fatigue across Dubai traffic, allowing students to study from home with zero compromise on academic rigor.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SAT CLASSES AND LEARNING OPTIONS FOR DUBAI STUDENTS ─── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'خيارات مرنة' : 'FLEXIBLE LEARNING FORMATS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'حصص SAT وخيارات التعلم لطلاب دبي' : 'SAT Classes and Learning Options for Dubai Students'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'اختر النمط التعليمي الأنسب لجدولك الدراسي ومستواك الحالي من خلال خياراتنا التدريبية التفاعلية.'
                  : 'Choose the learning format that aligns with your school schedule, target score, and individual learning pace.'}
              </p>
            </div>

            <div className="sat-programs-grid" style={{ marginTop: '40px' }}>
              {/* Option 1: Live Interactive Small Batches */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">{isAr ? 'مجموعات مصغرة (5–8 طلاب)' : 'SMALL COHORTS · 5–8 STUDENTS'}</span>
                  <h3 className="sat-program-title">{isAr ? 'حصص تفاعلية مباشرة عبر الإنترنت' : 'Live Online Interactive Batches'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'تدريب جماعي تفاعلي مباشر مع المعلم وألواح رقمية مشتركة وتطبيقات فورية.' : 'Collaborative virtual cohorts with live digital whiteboards, real-time problem solving, and peer interaction.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'شرح مباشر وحوار لحظي مع المعلم' : 'Live instructor communication & doubt clearance'}</li>
                    <li>{isAr ? 'تسجيلات كاملة لكل حصة للمراجعة' : 'Complete recordings archived for anytime review'}</li>
                    <li>{isAr ? 'تدريبات وحيل على آلة Desmos' : 'Real-time Desmos calculator masterclasses'}</li>
                    <li>{isAr ? 'امتحانات محاكاة أسبوعية على Bluebook' : 'Weekly computer-based adaptive mock testing'}</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود الاستفسار عن حصص SAT التفاعلية عبر الإنترنت لطلاب دبي' : "I'm interested in Live Online SAT classes for Dubai students")}`}
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_dubai_live_batch')}
                >
                  {isAr ? 'استفسر عن الحصص ←' : 'Enquire About Cohorts →'}
                </a>
              </div>

              {/* Option 2: 1-on-1 Private Mentoring */}
              <div className="sat-program-card featured">
                <div className="sat-featured-badge">{isAr ? 'الأكثر تخصيصاً' : 'MAXIMUM ATTENTION'}</div>
                <div>
                  <span className="sat-program-duration">{isAr ? 'تدريب فردي خاص 1-على-1' : '100% PERSONALIZED · 1-ON-1'}</span>
                  <h3 className="sat-program-title">{isAr ? 'تدريب فردي خاص عبر الإنترنت' : '1-on-1 Private Online Mentoring'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'خطة تدريبية مصممة خصيصاً وفق نقاط ضعفك وتوقيتاتك المفضلة.' : 'Fully customized coaching tailored to your exact baseline gaps, test deadlines, and pacing.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'جدول مرن يتوافق مع مواعيد اختباراتك' : 'Custom scheduling aligned with school commitments'}</li>
                    <li>{isAr ? 'تركيز دقيق على المجالات الأضعف' : 'Dedicated focus on specific weak domains (Algebra, Reading)'}</li>
                    <li>{isAr ? 'مراجعة تفصيلية لكل سؤال خاطئ' : 'Line-by-line error dissection after every practice drill'}</li>
                    <li>{isAr ? 'تسريع التحضير للوصول للدرجة المستهدفة' : 'Accelerated pacing for ambitious score targets (1500+)'}</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود الاستفسار عن التدريب الفردي الخاص 1-على-1 لاختبار SAT لطلاب دبي' : "I'm interested in 1-on-1 Private SAT Tutoring for Dubai")}`}
                  className="sat-btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_dubai_private_tutoring')}
                >
                  {isAr ? 'احجز تدريباً فردياً ←' : 'Book 1-on-1 Tutoring →'}
                </a>
              </div>

              {/* Option 3: In-Person Campus Coaching in Nearby Sharjah */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">{isAr ? 'حضوري في المقر (15 دقيقة من دبي)' : 'IN-PERSON CAMPUS · 15 MIN FROM DUBAI'}</span>
                  <h3 className="sat-program-title">{isAr ? 'التدريب الحضوري في مقر الشارقة' : 'In-Person Coaching (Sharjah Campus)'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'هل تفضل الحضور الصفي؟ تفضل بزيارة مقرنا بالمجاز 3 بالشارقة.' : 'For Dubai families who prefer physical classrooms, our Al Majaz 3 campus is readily accessible.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'موقع استراتيجي في برج أبو خمسين بالمجاز 3' : 'Flagship center at Abu Khamseen Tower, Al Majaz 3'}</li>
                    <li>{isAr ? 'فصول مجهزة ومختبرات اختبار Bluebook' : 'Modern classrooms & distraction-free computer labs'}</li>
                    <li>{isAr ? 'مرخص من هيئة الشارقة للتعليم الخاص' : 'SPEA licensed institute with certified test mentors'}</li>
                    <li>{isAr ? 'مجموعات نهاية الأسبوع الجمعة والسبت' : 'Weekend morning cohorts for easy cross-city commute'}</li>
                  </ul>
                </div>
                <Link
                  to="/sat-preparation-sharjah"
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                >
                  {isAr ? 'استكشف دورة الشارقة ←' : 'View In-Person Course →'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. SAT MATH AND READING & WRITING PREPARATION ─────────── */}
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'المنهج الشامل' : 'DIGITAL SAT DOMAINS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'التحضير لقسمي الرياضيات والقراءة والكتابة' : 'SAT Math and Reading & Writing Preparation'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'منهج متكامل يغطي جميع مجالات اختبار Digital SAT مع تطبيقات عملية على الأسئلة التكيفية الصعبة.'
                  : 'Master every dimension of the College Board Digital SAT syllabus with our domain-specific training framework.'}
              </p>
            </div>

            <div className="sat-curriculum-grid" style={{ marginTop: '40px' }}>
              {/* Mathematics Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'قسم الرياضيات (Mathematics)' : 'SAT Mathematics Mastery'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>
                    {isAr ? 'حيل Desmos والحل البصري' : 'Desmos Graphing & High-Speed Solvers'}
                  </span>
                </h3>

                <p style={{ color: '#475467', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  {isAr
                    ? 'يتضمن تدريب الرياضيات في أكاديمية نطاق تدريباً مكثفاً على استخدام آلة Desmos البيانية المدمجة في الاختبار لتقليص زمن حل المسائل الصعبة:'
                    : 'The Digital SAT permits the built-in Desmos graphing calculator on all 44 Math questions. We teach students to leverage graphic intersections, regressions, and tables to solve complex problems in seconds:'}
                </p>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الجبر (Algebra):' : 'Algebra:'}</strong> {isAr ? 'حل أنظمة المعادلات الخطية بيانياً، المتباينات، وتطبيقات النسب والمعدلات.' : 'Linear equations, system of linear equations, inequalities, and rate problems.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الرياضيات المتقدمة (Advanced Math):' : 'Advanced Math:'}</strong> {isAr ? 'الدوال التربيعية، إيجاد نقاط التقاطع، والتحليل الجبري لكثيرات الحدود.' : 'Quadratic functions, polynomial roots, exponential growth, and radical equations.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'حل المشكلات وتحليل البيانات:' : 'Problem-Solving & Data Analysis:'}</strong> {isAr ? 'الإحصاء، التشتت، الاحتمالات، وتفسير الرسوم البيانية والجداول.' : 'Scatterplots, line of best fit, standard deviation, probabilities, and survey analysis.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الهندسة وحساب المثلثات:' : 'Geometry & Trigonometry:'}</strong> {isAr ? 'معادلات الدوائر، المثلثات المتشابهة، ونسب حساب المثلثات في المثلث القائم.' : 'Circle equations, area/volume formulas, triangle congruence, and trigonometric ratios.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>

              {/* Reading & Writing Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'قسم القراءة والكتابة (Reading & Writing)' : 'Reading & Writing Strategy'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>
                    {isAr ? 'تحليل بلاغي وقواعد الإنجليزية' : 'Rhetorical Analysis & Grammar Rules'}
                  </span>
                </h3>

                <p style={{ color: '#475467', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  {isAr
                    ? 'نساعد الطلاب على قراءة وتحليل النصوص الأكاديمية القصيرة واستخراج الأدلة وتطبيق قواعد اللغة الإنجليزية المعيارية دون تردد:'
                    : 'Digital SAT Reading & Writing presents concise academic paragraphs across literature, science, and history. We train students to pinpoint textual claims and apply bulletproof punctuation rules:'}
                </p>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الصياغة والبناء النصي:' : 'Craft & Structure:'}</strong> {isAr ? 'معاني الكلمات في السياق، غرض الكاتب، والمقارنة بين النصوص المختلفة.' : 'Words in context, authorial stance, passage function, and dual-passage synthesis.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'المعلومات والأفكار:' : 'Information & Ideas:'}</strong> {isAr ? 'تحديد الفكرة المركزية، استخراج الأدلة النصية والبيانية، واستكمال الاستنتاجات.' : 'Locating explicit evidence, scientific inferences, and quantitative graph data.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'قواعد الإنجليزية المعيارية:' : 'Standard English Conventions:'}</strong> {isAr ? 'إتقان علامات الترقيم (الفواصل، الفاصلة المنقوطة، النقطتان)، وتوافق الفعل والفاعل.' : 'Subject-verb agreement, modifier placement, comma splices, and semicolon usage.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'التعبير عن الأفكار:' : 'Expression of Ideas:'}</strong> {isAr ? 'الربط البلاغي بين الجمل، أدوات الانتقال والربط المنطقي، وتحسين التدفق.' : 'Rhetorical synthesis notes, concise transitions, and effective argumentative flow.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. ONLINE SAT PREPARATION FOR DUBAI STUDENTS ───────────── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-info-card" style={{ padding: '40px', background: '#FFFFFF', border: '1.5px solid #BBF7D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34' }}>
                  <Laptop size={24} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#101828', margin: 0 }}>
                    {isAr ? 'التحضير لاختبار SAT عبر الإنترنت لطلاب دبي' : 'Online SAT Preparation for Dubai Students'}
                  </h2>
                </div>
              </div>

              <p style={{ color: '#475467', lineHeight: 1.8, fontSize: '1.025rem', marginBottom: '20px' }}>
                {isAr ? (
                  <>
                    صُممت دورات التحضير لاختبار SAT عبر الإنترنت في أكاديمية نطاق لتمنح طلاب دبي نفس الجودة والتفاعل المباشر المتاح في الفصول الدراسية الحية. تُبث الحصص بتقنية الفيديو عالي الدقة مع ألواح بيضاء مشتركة، وحل مباشر للمسائل على شاشة الطالب، وتسجيل الحصص بالكامل ليتمكن الطالب من مراجعتها قبل مواعيد الاختبارات.
                  </>
                ) : (
                  <>
                    Nitaq Academy’s live online SAT preparation is engineered to provide Dubai students with an interactive, high-engagement classroom experience from the comfort of their homes. Cohorts feature real-time two-way audio/video, shared digital derivation whiteboards, live Desmos calculator demonstrations, and instant doubt resolution. Every session is recorded and archived, providing an invaluable library for pre-exam revision.
                  </>
                )}
              </p>

              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '14px', padding: '20px 24px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#166534', margin: '0 0 8px 0' }}>
                  {isAr ? 'خيار الحضور الهجين للامتحانات التجريبية في الشارقة' : 'Optional Hybrid Access: Proctored In-Person Mocks in Sharjah'}
                </h3>
                <p style={{ color: '#15803d', fontSize: '0.96rem', lineHeight: 1.65, margin: 0 }}>
                  {isAr ? (
                    <>
                      بالإضافة إلى الحصص المباشرة عبر الإنترنت، نوفر لطلاب دبي خيار حضور جلسات الامتحانات التجريبية الحضورية المحاكية لظروف الامتحان الحقيقي في مقر أكاديمية نطاق في <strong>برج أبو خمسين بالمجاز 3 في الشارقة</strong> عبر شارع الاتحاد وطريق الشيخ محمد بن زايد. يتيح ذلك للطلاب تجربة ضغط الامتحان الفعلي والتحكم في الوقت بدقة. <em>ملاحظة: يقع مقر الأكاديمية الفعلي في المجاز 3 بالشارقة، ولا يوجد لدينا فرع فعلي في دبي.</em>
                    </>
                  ) : (
                    <>
                      To complement virtual learning with real-world exam conditioning, Dubai students have the option to sit full-length, proctored computer-based mock exams under authentic testing conditions at Nitaq Academy’s campus at <strong>Abu Khamseen Tower, Al Majaz 3, Sharjah</strong> (easily accessible from Dubai via E11 and E311). <em>Please note: Nitaq Academy’s physical campus is located in Al Majaz 3, Sharjah; we do not operate a physical branch in Dubai.</em>
                    </>
                  )}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود معرفة المزيد عن خيارات تدريب SAT عبر الإنترنت لطلاب دبي' : 'Tell me more about online SAT options for Dubai students')}`}
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_dubai_online_enquire')}
                >
                  {isAr ? 'تحدث مع مستشار تدريب دبي ←' : 'Consult Dubai Advisor via WhatsApp →'}
                </a>
                <Link
                  to="/sat-preparation-sharjah"
                  style={{ color: '#166534', fontWeight: 700, textDecoration: 'underline', marginLeft: '12px' }}
                >
                  {isAr ? 'تفضل الحضور الصفي الكامل؟ استكشف دورة الشارقة ←' : 'Prefer 100% In-Person Classes? Explore Sharjah Campus →'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. SAT DIAGNOSTIC ASSESSMENTS AND PRACTICE TESTS ───────── */}
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'التشخيص والمحاكاة' : 'DIAGNOSTIC FIRST'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'التقييم التشخيصي والاختبارات التجريبية لاختبار SAT' : 'SAT Diagnostic Assessments and Practice Tests'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'يبدأ التحضير الذكي بقياس مستواك الحالي بدقة عبر تقييمنا التشخيصي المجاني المكون من 24 سؤالاً عبر الإنترنت.'
                  : 'Effective SAT prep begins with measuring your current level. Take our free 24-question online diagnostic to reveal your baseline strengths across all 8 College Board domains.'}
              </p>
            </div>

            <div style={{ marginTop: '40px' }}>
              <SATDiagnosticSection headingLevel="h3" />
            </div>
          </div>
        </section>

        {/* ── 8. HOW TO CHOOSE SAT PREPARATION IN DUBAI ──────────────── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'دليل الاختيار' : 'BUYER GUIDE'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'كيف تختار دورة التحضير لاختبار SAT في دبي' : 'How to Choose SAT Preparation in Dubai'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'أهم المعايير الأساسية التي يجب على أولياء الأمور والطلاب في دبي التحقق منها قبل التسجيل في أي دورة SAT.'
                  : 'Key criteria that parents and high school students in Dubai should verify before enrolling in an SAT coaching program.'}
              </p>
            </div>

            <div className="sat-programs-grid" style={{ marginTop: '40px' }}>
              <div className="sat-program-card">
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34', marginBottom: '14px' }}>
                    <Laptop size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? '1. التوافق مع Digital SAT التكيفي' : '1. Digital Adaptive Architecture'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr
                      ? 'تأكد من أن التدريب يعتمد بالكامل على نظام الاختبار الرقمي التكيفي الحديث وتطبيق Bluebook، وتجنب المراكز التي لا تزال تستخدم أوراق الاختبار القديمة.'
                      : 'Ensure the training is 100% aligned with College Board’s multistage adaptive digital format. Beware of programs still using outdated paper SAT materials.'}
                  </p>
                </div>
              </div>

              <div className="sat-program-card">
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34', marginBottom: '14px' }}>
                    <Compass size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? '2. تدريب متخصص على آلة Desmos' : '2. Advanced Desmos Calculator Training'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr
                      ? 'آلة Desmos مدمجة في قسم الرياضيات بالكامل؛ لذا يجب أن تعلمك الدورة كيفية حل المعادلات بيانيا بدلاً من المعادلات اليدوية الطويلة.'
                      : 'The built-in Desmos graphing tool can solve up to 80% of math questions faster. A top SAT course must teach graphing shortcuts, tables, and regressions.'}
                  </p>
                </div>
              </div>

              <div className="sat-program-card">
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34', marginBottom: '14px' }}>
                    <Users size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? '3. حجم المجموعات والمتابعة الفردية' : '3. Cohort Size & Dedicated Error Audits'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr
                      ? 'المجموعات الكبيرة التي تتجاوز 15 طالباً تفقد المتابعة الشخصية. اختر معاهداً تلتزم بمجموعات مصغرة (5 إلى 8 طلاب) لتصحيح الأخطاء أولاً بأول.'
                      : 'Batches exceeding 15 students reduce individualized feedback. Look for micro-cohorts (5–8 students) that provide regular diagnostic error audits.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8.5. SAT FACULTY & MENTORS ─────────────────────────────── */}
        <SATFaculty />

        {/* ── 9. FREQUENTLY ASKED QUESTIONS ──────────────────────────── */}
        <section className="sat-faq-section" style={{ background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'الأسئلة الشائعة' : 'DUBAI STUDENT FAQS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'الأسئلة الشائعة حول التحضير لاختبار SAT لطلاب دبي' : 'Frequently Asked Questions'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'إجابات واضحة ومباشرة عن نمط التدريب عبر الإنترنت، ومواعيد المجموعات، وخيارات الامتحانات الهجينة لطلاب دبي.'
                  : 'Everything Dubai students and parents need to know about our live online cohorts, hybrid testing, and university admissions.'}
              </p>
            </div>

            <div style={{ maxWidth: '880px', margin: '40px auto 0' }}>
              {DUBAI_FAQS.map((faq, index) => (
                <details key={index} className="faq-accordion">
                  <summary>
                    <span>{isAr ? faq.questionAr : faq.question}</span>
                    <span className="faq-toggle-icon">+</span>
                  </summary>
                  <div className="faq-accordion-content">
                    <p>{isAr ? faq.answerAr : faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. RELATED GUIDES & INTERNAL LINKING ─────────────────── */}
        <section className="sat-guides-section" style={{ background: '#F8FBF9', borderTop: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'مصادر وإرشادات' : 'RESOURCES & GUIDES'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.2rem' }}>
                {isAr ? 'أدلة إرشادية لاختبار SAT لطلاب الإمارات' : 'Official SAT Resources for UAE Learners'}
              </h2>
            </div>

            <div className="sat-guides-grid">
              <Link to="/sat/diagnostic" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'أداة تقييم مجانية' : 'FREE ASSESSMENT'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'التقييم التشخيصي المجاني لاختبار SAT' : 'Free Digital SAT Diagnostic Assessment'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? '24 سؤالاً تقيس مستواك الفعلي عبر مجالات الاختبار الثمانية وتحدد خطتك في 20 دقيقة.' : '24 calibrated questions measuring your baseline accuracy across all 8 College Board domains in 20 minutes.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'خض التقييم الآن ←' : 'Take Diagnostic Now →'}</span>
              </Link>

              <Link to="/sat-preparation-sharjah" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'حضوري في الشارقة' : 'SHARJAH CAMPUS'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'التحضير لاختبار SAT في الشارقة' : 'SAT Preparation in Sharjah (In-Person)'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'استكشف فصولنا التدريبية المباشرة في برج أبو خمسين، المجاز 3 بالشارقة.' : 'Looking for classroom coaching? Explore our flagship physical campus at Abu Khamseen Tower, Al Majaz 3.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'عرض دورة الشارقة ←' : 'View Sharjah Course →'}</span>
              </Link>

              <Link to="/article/sat-dates-uae-2026-2027-test-dates" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'مواعيد الاختبار' : 'TEST DATES'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'مواعيد اختبار SAT في الإمارات 2026–2027' : 'SAT Dates UAE 2026–2027 Schedule'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'جدول المواعيد ومواعيد التسجيل النهائي والرسوم بالدرهم الإماراتي ومراكز الاختبار في دبي.' : 'Upcoming registration deadlines, late registration rules, exam dates, and AED fee breakdown.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'عرض المواعيد ←' : 'View Test Dates →'}</span>
              </Link>

              <Link to="/article/desmos-sat-guide-math-calculator-strategies" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'استراتيجيات الآلة' : 'DESMOS GUIDE'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'دليل آلة Desmos لاختبار SAT' : 'Desmos Calculator Strategies for SAT Math'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'طرق حل أنظمة المعادلات والانحدار الخطي واستخدام أشرطة التمرير للحل السريع.' : 'Master linear regressions, system intersections, and constants sliders to solve questions in seconds.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'اقرأ الدليل ←' : 'Read Desmos Guide →'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 11. FINAL CALL TO ACTION ───────────────────────────────── */}
        <section className="sat-final-cta-section">
          <div className="sat-final-cta-container">
            <h2 className="sat-final-cta-title">
              {isAr ? 'جاهز لتحقيق درجتك المستهدفة في اختبار SAT؟' : 'Ready to achieve your target SAT score in Dubai?'}
            </h2>
            <p className="sat-final-cta-desc">
              {isAr
                ? 'تحدث مع فريق القبول في أكاديمية نطاق لتحديد مسارك الدراسي واختيار المواعيد الأنسب لجدولك المدرسي.'
                : 'Connect with our admissions team on WhatsApp to evaluate your baseline score and reserve your seat in the next Dubai online cohort.'}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود التسجيل في التحضير لاختبار SAT لطلاب دبي' : 'I want to enroll in SAT preparation for Dubai students')}`}
                className="sat-btn-cta-white"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_dubai_final_enroll')}
              >
                {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
              </a>
              <a
                href="tel:+971527569908"
                className="sat-btn-cta-outline"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_dubai_final_call')}
              >
                {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak to an Advisor'}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SATCourseDubai;
