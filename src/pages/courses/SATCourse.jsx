import React from 'react';
import { Link } from '../../i18n/Link';
import { useLanguage } from '../../i18n/context';
import SEO from '../../components/SEO';
import SATDiagnosticSection from '../../components/sat/SATDiagnosticSection';
import SATFaculty from '../../components/sat/SATFaculty';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { 
  BookOpen, Clock, Calendar, MapPin, Award, CheckCircle2, 
  ArrowRight, DollarSign, Laptop, Users, HelpCircle, Compass, Sparkles, Target, TrendingUp, ShieldCheck
} from 'lucide-react';
import './sat-course.css';

const SHARJAH_FAQS = [
  {
    question: 'Where can I prepare for the SAT in Sharjah?',
    questionAr: 'أين يمكنني التحضير لاختبار SAT في الشارقة؟',
    answer: 'Students in Sharjah can prepare for the SAT at Nitaq Academy, located at Abu Khamseen Tower (Office F103, Floor F1), Al Majaz 3, Sharjah. Authorized by the Sharjah Private Education Authority (SPEA), Nitaq Academy provides structured classroom coaching, authentic computer-based Bluebook mock tests, and 1-on-1 private tutoring. Our center is easily accessible from Al Majaz, Buhaira Corniche, Al Khan, Al Taawun, Al Nahda, and Muwaileh.',
    answerAr: 'يمكن للطلاب في الشارقة التحضير لاختبار SAT في أكاديمية نطاق، الواقعة في برج أبو خمسين (مكتب F103، الطابق F1)، المجاز 3، الشارقة. المعهد مرخص ومعتمد من هيئة الشارقة للتعليم الخاص (SPEA)، ويوفر فصولاً دراسية تفاعلية مجهزة، واختبارات محاكاة تكيفية بنظام Bluebook، وتدريباً فردياً، بموقع استراتيجي قريب من كورنيش البحيرة، الخان، التعاون، النهدة، ومويلح.'
  },
  {
    question: 'How do I start SAT preparation?',
    questionAr: 'كيف أبدأ التحضير لاختبار SAT؟',
    answer: 'The ideal first step is taking a diagnostic assessment to determine your current baseline score and pinpoint specific knowledge gaps across the 8 official College Board domains. At Nitaq Academy, students start with our free 24-question diagnostic test (taken online or in-person at Al Majaz 3). Based on your baseline score and target university deadline, our advisors map out a personalized study track.',
    answerAr: 'الخطوة الأولى المثالية هي خوض تقييم تشخيصي لتحديد درجتك المبدئية والتعرف على نقاط القوة والفجوات المعرفية في مجالات College Board الثمانية. يبدأ طلاب أكاديمية نطاق باختبار تشخيصي مجاني (24 سؤالاً) عبر الإنترنت أو بمقرنا في المجاز 3، ليقوم المستشار الأكاديمي بعدها بوضع خطة تدريبية مخصصة.'
  },
  {
    question: 'How long does SAT preparation usually take?',
    questionAr: 'كم يستغرق التحضير لاختبار SAT عادةً؟',
    answer: 'For most high school students in Sharjah, comprehensive SAT preparation takes between 8 and 12 weeks with 3 sessions per week. This provides sufficient time to master all Math and Reading & Writing concepts, practice Desmos graphing calculator hacks, and sit 4 to 6 full-length adaptive mock exams. For students with imminent test dates or re-takers, an intensive 4-week sprint is also available.',
    answerAr: 'يستغرق التحضير الشامل لاختبار SAT لمعظم طلاب المدارس الثانوية في الشارقة بين 8 و12 أسبوعاً بمعدل 3 جلسات أسبوعياً. يتيح ذلك وقتاً كافياً لتغطية جميع محاور الرياضيات والقراءة والكتابة، والتدرب على حيل آلة Desmos، وخوض 4 إلى 6 امتحانات محاكاة تكيفية كاملة. كما يتوفر مسار مكثف مدته 4 أسابيع لمن يقترب موعد اختبارهم.'
  },
  {
    question: 'Can I prepare for the SAT while attending school?',
    questionAr: 'هل يمكنني التحضير لاختبار SAT أثناء الدوام المدرسي؟',
    answer: 'Yes. Most students at Nitaq Academy balance SAT preparation alongside regular school terms. Our cohorts are structured around school schedules, featuring weekend morning batches on Fridays and Saturdays (9:30 AM – 12:30 PM) and weekday evening batches (Monday to Thursday, 5:00 PM – 8:00 PM). This prevents academic overload while maintaining steady weekly score gains.',
    answerAr: 'نعم. معظم طلابنا يوفقون بنجاح بين التحضير لـ SAT ودراستهم المدرسية العادية. صُممت جداولنا لتناسب أوقات المدارس، وتتضمن مجموعات نهاية الأسبوع يومي الجمعة والسبت (9:30 صباحاً – 12:30 ظهراً) وفترات مسائية خلال أيام الأسبوع (5:00 مساءً – 8:00 مساءً) لضمان التقدم دون التأثير على الواجبات المدرسية.'
  },
  {
    question: 'Is SAT Math difficult?',
    questionAr: 'هل قسم الرياضيات في اختبار SAT صعب؟',
    answer: 'The Digital SAT Math section is challenging because it tests multi-step algebra, quadratics, non-linear functions, geometry, and trigonometry under time pressure. However, because the built-in Desmos graphing calculator is permitted on all questions, mastering calculator shortcuts, table regressions, and system intersections turns complex questions into quick visual solutions.',
    answerAr: 'يتميز قسم الرياضيات بصعوبة أسئلته التي تغطي الجبر المتقدم والدوال والتربيعية وحساب المثلثات تحت ضغط الوقت. ولكن نظراً لأن آلة Desmos البيانية مدمجة ومتاحة لجميع الأسئلة، فإن التدرب على حيل الآلة وحل المعادلات بيانياً يختصر زمن الحل بشكل جذري ويجعل المسائل المعقدة في متناول اليد.'
  },
  {
    question: 'What is the difference between SAT preparation classes and private tutoring?',
    questionAr: 'ما الفرق بين حصص SAT الجماعية والتدريب الفردي الخاص؟',
    answer: 'SAT preparation classes at Nitaq Academy are collaborative micro-batches of 8 to 12 students that follow a complete curriculum across Math, Reading, and Writing with peer discussion and timed practice. Private 1-on-1 tutoring provides 100% personalized pacing, flexible scheduling, and targeted focus exclusively on your specific weak domains or high-scoring Module 2 challenges.',
    answerAr: 'حصص SAT الجماعية في أكاديمية نطاق تكون في مجموعات مصغرة (8-12 طالباً) تتبع منهجاً تدريبياً شاملاً لكافة المجالات مع نقاشات تفاعلية وامتحانات دورية. بينما يمنح التدريب الفردي (1-على-1) تركيزاً مخصصاً بالكامل على وتيرة الطالب ونقاط ضعفه الخاصة مع مرونة كاملة في المواعيد.'
  },
  {
    question: 'Does Nitaq Academy offer an SAT diagnostic assessment?',
    questionAr: 'هل تقدم أكاديمية نطاق تقييماً تشخيصياً لاختبار SAT؟',
    answer: 'Yes. Nitaq Academy provides a free 24-question Digital SAT diagnostic assessment measuring baseline readiness across all 8 College Board domains in just 15 to 20 minutes. You receive an immediate composite score projection and domain analysis report to help you select the ideal course track.',
    answerAr: 'نعم. توفر أكاديمية نطاق تقييماً تشخيصياً مجانياً (24 سؤالاً) يقيس جاهزيتك الفعلية عبر مجالات الاختبار الثمانية خلال 15-20 دقيقة، مع تقرير فوري يوضح تقدير درجتك وتوصيات خطتك الدراسية.'
  },
  {
    question: 'What is the Digital SAT and how is it different from the old paper SAT?',
    questionAr: 'ما هو اختبار Digital SAT وكيف يختلف عن الاختبار الورقي القديم؟',
    answer: 'The Digital SAT is the current computer-based format of the Scholastic Assessment Test, taken on a laptop using the College Board Bluebook app. It is multistage adaptive — the difficulty of Module 2 adjusts based on your performance in Module 1. Total testing time is 2 hours and 14 minutes, significantly shorter than the previous 3-hour paper exam.',
    answerAr: 'اختبار Digital SAT هو النسخة الرقمية الحديثة التي تُعقد عبر تطبيق Bluebook على الحاسوب المحمول. الاختبار تكيفي متعدد المراحل؛ حيث تتكيف صعوبة الوحدة الثانية بناءً على أدائك في الوحدة الأولى. مدة الاختبار ساعتان و14 دقيقة وهو أقصر بكثير من الاختبار الورقي السابق.'
  },
  {
    question: 'What SAT score do I need for UAE universities like AUS and Khalifa University?',
    questionAr: 'ما هي الدرجة المطلوبة في SAT للجامعات في الإمارات مثل الجامعة الأمريكية في الشارقة وجامعة خليفة؟',
    answer: 'Most top UAE universities look for competitive SAT scores. The American University of Sharjah (AUS) generally expects 1200–1350+ for engineering and business programs. Khalifa University targets 1250–1400+. Prestigious institutions like NYU Abu Dhabi and elite global universities typically require 1450–1550+. High scores also unlock substantial merit scholarships.',
    answerAr: 'تتطلب معظم الجامعات الرائدة في الإمارات درجات تنافسية؛ فالجامعة الأمريكية في الشارقة (AUS) تطلب عموماً 1200–1350+ للهندسة وإدارة الأعمال، وجامعة خليفة 1250–1400+، وجامعة نيويورك أبوظبي 1450–1550+، كما تمنح الدرجات العالية فرصاً ممتازة للمنح الدراسية.'
  },
  {
    question: 'Can Dubai students access Nitaq Academy SAT preparation?',
    questionAr: 'هل يمكن لطلاب دبي الاستفادة من دورات SAT في أكاديمية نطاق؟',
    answer: 'Yes. Dubai students can enroll in our live interactive online SAT classes tailored for UAE schedules, with the additional hybrid option to attend proctored in-person mock exam simulations at our Sharjah campus in Al Majaz 3 (easily accessible via E11 and E311). Explore our dedicated Dubai options at https://www.nitaqacademy.com/sat-preparation-dubai.',
    answerAr: 'نعم. يستطيع طلاب دبي الانضمام إلى حصصنا التفاعلية المباشرة عبر الإنترنت، مع إمكانية الحضور الهجين للامتحانات التجريبية في مقرنا بالمجاز 3 بالشارقة عبر شارع الاتحاد وطريق الشيخ محمد بن زايد. تفضل بزيارة صفحة تحضير SAT في دبي لمزيد من التفاصيل.'
  }
];

const SATCourse = () => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const faqSchemaData = SHARJAH_FAQS.map(f => ({
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
                  ? 'معتمد من هيئة الشارقة للتعليم الخاص · المجاز 3، الشارقة' 
                  : 'SPEA AUTHORIZED · AL MAJAZ 3, SHARJAH · ACCREDITED PREP'}
              </div>

              <h1 className="sat-hero-heading">
                {isAr ? 'التحضير لاختبار SAT في الشارقة' : 'SAT Preparation in Sharjah'}
              </h1>

              <p className="sat-hero-description">
                {isAr
                  ? 'استعد لاختبار SAT في الشارقة مع أكاديمية نطاق في برج أبو خمسين بالمجاز 3. دورات تدريبية متخصصة، ودعم مكثف للرياضيات والقراءة والكتابة، وحيل آلة Desmos البيانية، واختبارات تجريبية تكيفية بنظام Bluebook.'
                  : 'Prepare for the SAT in Sharjah with Nitaq Academy at Abu Khamseen Tower, Al Majaz 3. Explore expert SAT preparation classes, Math and English support, Desmos calculator shortcuts, full-length practice tests, and personalized score-improvement guidance.'}
              </p>

              <div className="sat-hero-cta-group">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(
                    isAr
                      ? 'مرحباً أكاديمية نطاق، أود الاستفسار عن التحضير لاختبار SAT في الشارقة'
                      : 'Hi Nitaq Academy, I am interested in SAT Preparation in Sharjah'
                  )}`}
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_sharjah_hero_enroll')}
                >
                  {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
                </a>
                <Link
                  to="/sat/diagnostic"
                  className="sat-btn-secondary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'sat_sharjah_hero_diagnostic')}
                >
                  {isAr ? 'ابدأ التقييم التشخيصي المجاني' : 'Start Free Diagnostic'}
                </Link>
              </div>

              <div className="sat-hero-trust-line">
                <span className="sat-trust-check-icon">✓</span>
                {isAr 
                  ? 'مرخص من هيئة الشارقة للتعليم الخاص · المجاز 3، الشارقة · مجموعات صغيرة (8-12 طالباً)' 
                  : 'SPEA Licensed & Attested · Al Majaz 3, Sharjah · Small Batches (8–12 Students)'}
              </div>
            </div>

            <div className="sat-hero-image-col">
              <div className="sat-hero-image-wrapper">
                <img
                  src="/images/sat_hero_student_hoodie.webp"
                  srcSet="/images/sat_hero_student_hoodie-480.webp 480w, /images/sat_hero_student_hoodie-720.webp 720w, /images/sat_hero_student_hoodie.webp 1024w"
                  sizes="(max-width: 768px) calc(100vw - 48px), 500px"
                  alt="Student preparing for the SAT with Nitaq Academy in Sharjah"
                  title="Student preparing for the SAT with Nitaq Academy in Sharjah"
                  width="500"
                  height="500"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                />

                <div className="sat-hero-floating-badge">
                  <div className="sat-floating-icon-box">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="sat-floating-title">{isAr ? 'تدريب مخصص ومركّز' : 'Focused Coaching'}</div>
                    <div className="sat-floating-subtitle">{isAr ? 'منهجي · تطبيقي · نتائج مثبتة' : 'Structured · Adaptive · Results-driven'}</div>
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
                <div className="sat-snapshot-value">{isAr ? 'عطلة نهاية الأسبوع ومسائي' : 'Weekend Mornings & Weekday Evenings'}</div>
              </div>
            </div>

            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'الموقع' : 'Location'}</div>
                <div className="sat-snapshot-value">{isAr ? 'برج أبو خمسين، المجاز 3' : 'Abu Khamseen Tower, Al Majaz 3'}</div>
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

        {/* ── 3. SAT PREPARATION CLASSES IN SHARJAH ──────────────────── */}
        <section className="sat-definition-section">
          <div className="sat-section-container">
            <div className="sat-definition-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="sat-guide-tag">{isAr ? 'فصول التدريب المباشر' : 'IN-PERSON & ADAPTIVE'}</span>
                <span style={{ color: '#94A3B8' }}>•</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475467' }}>
                  {isAr ? 'مرخص من هيئة الشارقة للتعليم الخاص' : 'SPEA Licensed Training Center'}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.2rem)', fontWeight: 800, color: '#101828', marginBottom: '18px', lineHeight: 1.25 }}>
                {isAr ? 'حصص ودورات التحضير لاختبار SAT في الشارقة' : 'SAT Preparation Classes in Sharjah'}
              </h2>

              <p style={{ color: '#475467', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {isAr ? (
                  <>
                    تقدم أكاديمية نطاق <strong>حصص التحضير لاختبار SAT في الشارقة</strong> داخل فصول دراسية مجهزة بأحدث الوسائل التفاعلية في <strong>برج أبو خمسين بالمجاز 3</strong>. نركز على معايير اختبار <strong>Digital SAT</strong> التكيفي المعتمد من College Board، مع تقسيم التدريب إلى مجموعات مصغرة من 8 إلى 12 طالباً لضمان الرعاية الفردية والمتابعة اللحظية لكل طالب. تشمل فصولنا تدريباً مباشراً على حيل آلة Desmos البيانية، واستراتيجيات إدارة الوقت، وأحدث تقنيات التعامل مع الأسئلة المعقدة في القسمين.
                  </>
                ) : (
                  <>
                    Nitaq Academy delivers premier <strong>SAT preparation classes in Sharjah</strong> at our purpose-built campus in <strong>Abu Khamseen Tower, Al Majaz 3</strong>. Our classes focus rigorously on the official College Board <strong>Digital SAT</strong> multistage adaptive format. Taught in small micro-cohorts of only 8 to 12 students, every learner receives individualized feedback, strategic pacing guidance, and targeted problem-solving drills designed to systematically eliminate errors across Reading &amp; Writing and Mathematics.
                  </>
                )}
              </p>

              <div className="sat-grid-2col">
                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Users size={22} />
                    </div>
                    <h3>{isAr ? 'مجموعات صغيرة وتفاعل مباشر' : 'Small Interactive Cohorts'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'مجموعات تدريبية مصغرة تضمن إمكانية طرح الأسئلة والتفاعل المستمر مع المدرب وتصحيح الأخطاء المفاهيمية فور حدوثها.'
                      : 'Capped at 8 to 12 students per batch to guarantee active teacher interaction, direct question-and-answer support, and immediate concept clarification.'}
                  </p>
                </div>

                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Clock size={22} />
                    </div>
                    <h3>{isAr ? 'مواعيد مرنة للمدارس' : 'Weekend & Evening Schedules'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'فترات صباحية في عطلة نهاية الأسبوع (الجمعة والسبت) وفترات مسائية خلال أيام الأسبوع تتناسب تماماً مع جدول طلاب المدارس.'
                      : 'Weekend morning sessions (Friday & Saturday) and weekday evening slots structured around UAE school calendars to ensure study consistency.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. WHY CHOOSE NITAQ ACADEMY FOR SAT PREPARATION? ───────── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'التميز والاعتماد' : 'PROVEN EXCELLENCE'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'لماذا تختار أكاديمية نطاق للتحضير لاختبار SAT؟' : 'Why Choose Nitaq Academy for SAT Preparation?'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'نجمع بين الاعتماد الحكومي الرسمي، وخبرة المدربين المعتمدين، والتقييم التشخيصي المستمر لتحقيق قفزات حقيقية في درجات طلاب الشارقة.'
                  : 'We combine official SPEA authorization, experienced test mentors, authentic Bluebook mock simulations, and a diagnostic-first methodology to deliver tangible score improvements.'}
              </p>
            </div>

            <div className="sat-programs-grid" style={{ marginTop: '40px' }}>
              <div className="sat-program-card">
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34', marginBottom: '14px' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? 'معهد معتمد من هيئة الشارقة للتعليم الخاص' : 'SPEA Licensed & Attested'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'أكاديمية نطاق مرخصة رسمياً في الشارقة لتقديم تدريب أكاديمي موثوق بأعلى معايير الجودة التعليمية.' : 'Nitaq Academy is officially licensed by the Sharjah Private Education Authority (SPEA), ensuring verified academic standards.'}
                  </p>
                </div>
              </div>

              <div className="sat-program-card featured">
                <div className="sat-featured-badge">{isAr ? 'الميزة الأبرز' : 'CORE ADVANTAGE'}</div>
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#1E7E34', color: '#FFFFFF', marginBottom: '14px' }}>
                    <Laptop size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? 'تدريب متقدم على آلة Desmos وتطبيق Bluebook' : 'Mastery of Desmos & Bluebook'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'تدريب تطبيقي على حل 80% من مسائل الرياضيات عبر حيل آلة Desmos، مع محاكاة دقيقة لنظام الاختبار التكيفي.' : 'Intensive calculator strategy sessions turning complex algebra into visual solutions, paired with official adaptive mock test mechanics.'}
                  </p>
                </div>
              </div>

              <div className="sat-program-card">
                <div>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34', marginBottom: '14px' }}>
                    <TrendingUp size={24} />
                  </div>
                  <h3 className="sat-program-title">{isAr ? 'تحسن ملموس في الدرجات (150–250+ نقطة)' : '150–250+ Point Score Growth'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'خطة تدريبية تتبع أداء الطالب أسبوعياً وتسد الفجوات في الجبر والقواعد اللغوية حتى الوصول إلى الدرجة المستهدفة.' : 'Structured milestone tracking that turns baseline diagnostic gaps into consistent mastery, unlocking competitive UAE university thresholds.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. WHAT WILL YOU LEARN IN SAT PREPARATION? ─────────────── */}
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'المنهج المتكامل' : 'DETAILED SYLLABUS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'ماذا ستتعلم في برنامج التحضير لاختبار SAT؟' : 'What Will You Learn in SAT Preparation?'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'تغطية شاملة وعميقة لجميع مجالات الاختبار الثمانية الرسمية المقررة من College Board مع تدريبات عملية مستمرة.'
                  : 'Comprehensive coverage of all 8 official College Board domains, divided into targeted Mathematics and Reading & Writing modules.'}
              </p>
            </div>

            <div className="sat-curriculum-grid" style={{ marginTop: '40px' }}>
              {/* SAT Math Preparation */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'التحضير لقسم الرياضيات في اختبار SAT' : 'SAT Math Preparation'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>
                    {isAr ? 'آلة Desmos والتحليل الرياضي' : 'Desmos Shortcuts & Problem Solving'}
                  </span>
                </h3>

                <p style={{ color: '#475467', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  {isAr
                    ? 'يركز تدريب الرياضيات على حل المسائل المعقدة في أقل وقت ممكن باستخدام استراتيجيات الآلة البيانية وتفكيك المسائل اللفظية:'
                    : 'Our SAT Math coaching develops mental math speed, algebraic manipulation, and advanced Desmos calculator problem-solving techniques:'}
                </p>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الجبر (Algebra):' : 'Algebra:'}</strong> {isAr ? 'المعادلات الخطية، أنظمة المعادلات، المتباينات، وتطبيقاتها الحياتية.' : 'Linear equations, systems of linear equations, linear inequalities, and word problems.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الرياضيات المتقدمة (Advanced Math):' : 'Advanced Math:'}</strong> {isAr ? 'الدوال التربيعية، كثيرات الحدود، المعادلات الأسية والجذرية.' : 'Quadratic equations, polynomials, non-linear functions, and radical expressions.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'حل المشكلات وتحليل البيانات (Problem-Solving):' : 'Problem-Solving & Data Analysis:'}</strong> {isAr ? 'النسب والمعدلات، الاحتمالات، الإحصاء، والرسوم البيانية.' : 'Ratios, rates, percentages, probability, scatterplots, and statistical inferences.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الهندسة وحساب المثلثات (Geometry & Trig):' : 'Geometry & Trigonometry:'}</strong> {isAr ? 'الدوائر، مساحات وحجوم المجسمات، حساب المثلثات والزوايا.' : 'Lines, angles, triangles, circles, volume, surface area, and right-triangle trigonometry.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>

              {/* SAT Reading and Writing Preparation */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'التحضير لقسم القراءة والكتابة في اختبار SAT' : 'SAT Reading and Writing Preparation'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>
                    {isAr ? 'نصوص تكيفية وقواعد الإنجليزية' : 'Adaptive Passages & Grammar'}
                  </span>
                </h3>

                <p style={{ color: '#475467', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  {isAr
                    ? 'يغطي قسم القراءة والكتابة استيعاب النصوص القصيرة المتنوعة وتحليل الأدلة وقواعد اللغة المعيارية بدقة:'
                    : 'Our Reading & Writing coaching equips students to analyze short academic passages, evaluate textual arguments, and master grammar conventions:'}
                </p>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'الصياغة والبناء النصي (Craft & Structure):' : 'Craft & Structure:'}</strong> {isAr ? 'المفردات في السياق، تحليل وجهة النظر، والروابط بين النصوص.' : 'Words in context, text structure, author purpose, and cross-textual comparisons.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'المعلومات والأفكار (Information & Ideas):' : 'Information & Ideas:'}</strong> {isAr ? 'الأفكار الرئيسية، الأدلة النصية والبيانية، واستنتاجات النصوص.' : 'Central ideas, textual evidence, quantitative data evidence, and inferences.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'قواعد الإنجليزية المعيارية (Conventions):' : 'Standard English Conventions:'}</strong> {isAr ? 'قواعد النحو، علامات الترقيم، حدود الجمل، وتوافق الفعل والفاعل.' : 'Sentence boundaries, agreement, verb tenses, modifiers, and punctuation rules.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">
                    <strong>{isAr ? 'التعبير عن الأفكار (Expression of Ideas):' : 'Expression of Ideas:'}</strong> {isAr ? 'الربط المنطقي بين الأفكار، أدوات الانتقال، وتحسين الصياغة البلاغية.' : 'Rhetorical synthesis, transitions, concision, and logical flow of ideas.'}
                  </div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. SAT PRACTICE TESTS AND DIAGNOSTIC ASSESSMENT ───────── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'التقييم والمحاكاة' : 'ADAPTIVE MOCKS & ASSESSMENT'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'الاختبارات التجريبية والتقييم التشخيصي لاختبار SAT' : 'SAT Practice Tests and Diagnostic Assessment'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'لا نعتمد على التخمين. يبدأ كل طالب بتقييم تشخيصي دقيق ويخوض امتحانات محاكاة تكيفية دورية تحاكي نظام الامتحان الحقيقي تماماً.'
                  : 'We eliminate guesswork from your exam journey. Every learner begins with a calibrated diagnostic baseline and sits regular Bluebook-style adaptive mock tests.'}
              </p>
            </div>

            <div style={{ marginTop: '40px' }}>
              <SATDiagnosticSection headingLevel="h3" />
            </div>
          </div>
        </section>

        {/* ── 7. SAT PREPARATION FOR BEGINNERS ───────────────────────── */}
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-grid-2col" style={{ alignItems: 'center', gap: '48px' }}>
              <div>
                <div className="sat-why-eyebrow">{isAr ? 'المسار التأسيسي' : 'STARTING FROM SCRATCH'}</div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#101828', marginBottom: '16px', lineHeight: 1.25 }}>
                  {isAr ? 'التحضير لاختبار SAT للطلاب المبتدئين' : 'SAT Preparation for Beginners'}
                </h2>
                <p style={{ color: '#475467', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '20px' }}>
                  {isAr ? (
                    <>
                      إذا كنت تبدأ الاستعداد لاختبار SAT لأول مرة، فإن دورة التأسيس في أكاديمية نطاق مصممة خصيصاً لتفكيك رهبة الاختبار وبناء المفاهيم خطوة بخطوة. نركز على استعادة أساسيات الجبر، وبناء الحصيلة اللغوية والمفردات في السياق، وإتقان قواعد اللغة الإنجليزية المعيارية، وتدريب الطالب على وتيرة الوقت دون توتر.
                    </>
                  ) : (
                    <>
                      Starting your SAT journey for the first time? Our Foundation track at Nitaq Academy is structured specifically for students who need to build strong core fundamentals. We reinforce high school algebra basics, establish standard grammar rules, demystify the multistage adaptive testing algorithm, and train students to use the built-in Desmos graphing calculator comfortably from day one.
                    </>
                  )}
                </p>
                <ul className="sat-program-list" style={{ marginBottom: '24px' }}>
                  <li>{isAr ? 'سد الفجوات في الحساب والجبر الأساسي' : 'Systematic bridging of foundational algebra gaps'}</li>
                  <li>{isAr ? 'شرح مبسط لقواعد النحو الإنجليزي الأكثر تكراراً' : 'Clear mastery of high-frequency SAT grammar rules'}</li>
                  <li>{isAr ? 'بناء استراتيجية إدارة الوقت وتجنب فخاخ الأسئلة' : 'Timed pacing strategies and trap answer elimination'}</li>
                  <li>{isAr ? 'تأهيل كامل للوصول إلى حاجز 1250–1350+' : 'Calibrated progression toward a 1250–1350+ benchmark'}</li>
                </ul>
                <a
                  href="https://wa.me/971527569908?text=Hi%20Nitaq%20Academy%2C%20I%20am%20a%20beginner%20looking%20for%20SAT%20Foundation%20prep%20in%20Sharjah"
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_sharjah_beginners')}
                >
                  {isAr ? 'استفسر عن مسار المبتدئين ←' : 'Enquire About Foundation Track →'}
                </a>
              </div>

              <div style={{ background: '#F8FBF9', border: '1.5px solid #BBF7D0', borderRadius: '20px', padding: '36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34' }}>
                    <Compass size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700, color: '#101828' }}>
                    {isAr ? 'خطة تدريبية خطوة بخطوة' : 'Structured Step-by-Step Milestones'}
                  </h3>
                </div>
                <p style={{ color: '#475467', lineHeight: 1.7, fontSize: '0.98rem', margin: '0 0 16px 0' }}>
                  {isAr
                    ? 'يبدأ الطالب المبتدئ بتحليل دقيق لنقاط الانطلاق، يليه 12 أسبوعاً من الشرح المركز والتطبيق الموجه مع كادر تعليمي متفهم يتابع تطور الطالب أسبوعاً بأسبوع.'
                    : 'Beginners progress through a calibrated 12-week roadmap. Weekly check-ins ensure that anxiety is replaced with methodical confidence, ensuring steady and visible score growth.'}
                </p>
                <div style={{ padding: '16px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E4E7EC', fontSize: '0.9rem', color: '#1E7E34', fontWeight: 600 }}>
                  ✓ {isAr ? 'تشمل كافة المواد والمذكرات ونماذج المحاكاة' : 'Includes all study guides, formula kits & Bluebook mocks'}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. SAT PREPARATION FOR STUDENTS TARGETING HIGHER SCORES ─── */}
        <section style={{ padding: '80px 0', background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-grid-2col" style={{ alignItems: 'center', gap: '48px' }}>
              <div style={{ background: '#FFFFFF', border: '1.5px solid #BBF7D0', borderRadius: '20px', padding: '36px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="sat-info-icon-box" style={{ background: '#1E7E34', color: '#FFFFFF' }}>
                    <Target size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700, color: '#101828' }}>
                    {isAr ? 'مسار كسر حاجز 1500+' : 'Elite 1500+ Benchmark Tactics'}
                  </h3>
                </div>
                <p style={{ color: '#475467', lineHeight: 1.7, fontSize: '0.98rem', margin: '0 0 16px 0' }}>
                  {isAr
                    ? 'في المستويات التنافسية العليا، يصبح الفارق بين 1350 و1500+ مسألة دقة متناهية وسرعة في استبعاد الإجابات الخادعة في الوحدة الثانية التكيفية الصعبة.'
                    : 'At the elite score tier, the difference between a 1350 and a 1500+ is question selection speed, advanced Desmos manipulation, and mastering tricky Module 2 logic.'}
                </p>
                <div style={{ padding: '16px', background: '#F0FDF4', borderRadius: '12px', border: '1px solid #BBF7D0', fontSize: '0.9rem', color: '#166534', fontWeight: 600 }}>
                  ★ {isAr ? 'تحليل الأخطاء الدقيقة وسرعة الحل' : 'Targeted error audits & sub-60-second math solutions'}
                </div>
              </div>

              <div>
                <div className="sat-why-eyebrow">{isAr ? 'الدرجات التنافسية' : 'HIGH SCORERS & RETAKERS'}</div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#101828', marginBottom: '16px', lineHeight: 1.25 }}>
                  {isAr ? 'التحضير لاختبار SAT للطلاب الساعين لتحقيق درجات عليا' : 'SAT Preparation for Students Targeting Higher Scores'}
                </h2>
                <p style={{ color: '#475467', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '20px' }}>
                  {isAr ? (
                    <>
                      للطلاب الذين يسعون للقبول في تخصصات الهندسة والطب والمنح التنافسية في <strong>الجامعة الأمريكية في الشارقة (AUS)</strong>، <strong>جامعة خليفة</strong>، أو <strong>جامعة نيويورك أبوظبي</strong>، نوفر مساراً متقدماً يركز حصرياً على المسائل الصعبة في الوحدة التكيفية الثانية، وتكتيكات حل أسئلة القراءة التحليلية المعقدة.
                    </>
                  ) : (
                    <>
                      For competitive high schoolers aiming for elite university admission and full merit scholarships at institutions like the <strong>American University of Sharjah (AUS)</strong>, <strong>Khalifa University</strong>, <strong>NYU Abu Dhabi</strong>, and premier international colleges, our advanced track provides high-intensity coaching focused squarely on hard Module 2 questions and complex textual rhetoric.
                    </>
                  )}
                </p>
                <ul className="sat-program-list" style={{ marginBottom: '24px' }}>
                  <li>{isAr ? 'تدريب مكثف على أصعب أسئلة الوحدة الثانية التكيفية' : 'Hard Module 2 trap elimination and complex non-linear problems'}</li>
                  <li>{isAr ? 'حيل متقدمة في Desmos لحل مسائل الدوال المعقدة' : 'Advanced Desmos regressions, slider hacks & parametric curves'}</li>
                  <li>{isAr ? 'تحليل بلاغي دقيق لنصوص القراءة والبيانات الكمية' : 'Nuanced textual evidence and cross-passage inference drills'}</li>
                  <li>{isAr ? 'جلسات مراجعة فردية لتحليل الأخطاء المتكررة' : '1-on-1 error audit sessions to eliminate recurring mistakes'}</li>
                </ul>
                <a
                  href="https://wa.me/971527569908?text=Hi%20Nitaq%20Academy%2C%20I%20am%20targeting%20a%201450%2B%20SAT%20score%20in%20Sharjah"
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_sharjah_high_scorers')}
                >
                  {isAr ? 'تحدث مع مدرب الدرجات العليا ←' : 'Speak to a High-Score Mentor →'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8.5. SAT FACULTY & MENTORS ─────────────────────────────── */}
        <SATFaculty />

        {/* ── 9. SAT PREPARATION NEAR AL MAJAZ, SHARJAH ──────────────── */}
        <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-info-card" style={{ padding: '40px', background: '#FFFFFF', border: '1.5px solid #BBF7D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34' }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#101828', margin: 0 }}>
                    {isAr ? 'التحضير لاختبار SAT بالقرب من المجاز، الشارقة' : 'SAT Preparation Near Al Majaz, Sharjah'}
                  </h2>
                </div>
              </div>

              <p style={{ color: '#475467', lineHeight: 1.8, fontSize: '1.025rem', marginBottom: '20px' }}>
                {isAr ? (
                  <>
                    يقع مقر أكاديمية نطاق في <strong>مكتب F103، الطابق F1، برج أبو خمسين، المجاز 3، الشارقة</strong>. يُعد معهدنا الوجهة التعليمية المعتمدة والأقرب للطلاب والعائلات الباحثين عن أفضل تحضير لاختبار SAT بالقرب من <strong>المجاز، كورنيش البحيرة، الخان، التعاون، النهدة، ومويلح</strong>. يوفر موقعنا سهولة وصول فائقة، ومواقف سيارات مريحة، وبيئة تعليمية هادئة مجهزة بأحدث أدوات Bluebook.
                  </>
                ) : (
                  <>
                    Conveniently located at <strong>Abu Khamseen Tower (Office F103, Floor F1), Al Majaz 3, Sharjah</strong>, Nitaq Academy is the premier SPEA-authorized learning center for students and parents searching for <strong>SAT preparation near Al Majaz, Sharjah</strong>. We offer effortless neighborhood access for high school students across <strong>Al Majaz, Buhaira Corniche, Al Khan, Al Taawun, Al Nahda, and Muwaileh</strong>. Our campus features modern high-tech training rooms, distraction-free computer testing labs, and certified master SAT instructors.
                  </>
                )}
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  href="https://maps.google.com/?q=Abu+Khamseen+Tower+Al+Majaz+3+Sharjah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sat-btn-secondary"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <MapPin size={16} /> {isAr ? 'عرض الموقع على الخريطة' : 'View on Google Maps'}
                </a>
                <Link
                  to="/contact"
                  className="sat-btn-primary"
                >
                  {isAr ? 'تواصل مع مكتب القبول' : 'Contact Admissions Office'}
                </Link>
                <Link
                  to="/sat-preparation-dubai"
                  style={{ color: '#166534', fontWeight: 700, textDecoration: 'underline', marginLeft: '12px' }}
                >
                  {isAr ? 'هل أنت في دبي؟ استكشف خيارات دبي ←' : 'Reside in Dubai? Explore Dubai SAT Options →'}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. FREQUENTLY ASKED QUESTIONS ABOUT SAT PREPARATION ───── */}
        <section className="sat-faq-section" style={{ background: '#F8FBF9' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'إجابات شاملة' : 'QUESTIONS & ANSWERS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'الأسئلة الشائعة حول التحضير لاختبار SAT' : 'Frequently Asked Questions About SAT Preparation'}
              </h2>
              <p style={{ maxWidth: '720px', margin: '14px auto 0', color: '#475467', fontSize: '1.05rem', lineHeight: 1.7 }}>
                {isAr
                  ? 'إجابات مباشرة ودقيقة على أهم الاستفسارات التي تهم الطلاب وأولياء الأمور في الشارقة والإمارات.'
                  : 'Clear, factual answers to the most common questions asked by students and parents in Sharjah and the UAE.'}
              </p>
            </div>

            <div style={{ maxWidth: '880px', margin: '40px auto 0' }}>
              {SHARJAH_FAQS.map((faq, index) => (
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

        {/* ── 11. RELATED RESOURCES & INTERNAL LINKS ─────────────────── */}
        <section className="sat-guides-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'مصادر وإرشادات' : 'RESOURCES & GUIDES'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.2rem' }}>
                {isAr ? 'أدلة إرشادية متخصصة لاختبار SAT' : 'Essential SAT Guides for UAE Students'}
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

              <Link to="/sat-preparation-dubai" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'طلاب دبي' : 'DUBAI STUDENTS'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'التحضير لاختبار SAT في دبي' : 'SAT Preparation in Dubai'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'حصص تفاعلية مباشرة عبر الإنترنت لطلاب دبي مع خيار الحضور الهجين للامتحانات التجريبية في الشارقة.' : 'Live interactive online SAT classes tailored for Dubai students with optional hybrid campus mock exam access.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'استكشف دورة دبي ←' : 'Explore Dubai Course →'}</span>
              </Link>

              <Link to="/article/sat-dates-uae-2026-2027-test-dates" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'مواعيد الاختبار' : 'TEST DATES'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'مواعيد اختبار SAT في الإمارات 2026–2027' : 'SAT Dates UAE 2026–2027 Schedule'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'جدول المواعيد ومواعيد التسجيل النهائي والرسوم بالدرهم الإماراتي ومراكز الاختبار.' : 'Upcoming registration deadlines, late registration rules, exam dates, and AED fee breakdown.'}
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

              <Link to="/academic-excellence" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'التقوية المدرسية' : 'SCHOOL TUITION'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'دروس التقوية المدرسية في الشارقة' : 'School Tuition in Sharjah'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'دروس تقوية في الرياضيات والفيزياء والكيمياء والأحياء لمناهج IGCSE وIB وCBSE.' : 'Focused coaching in Maths, Physics, Chemistry, Biology, and English for Class 1–12.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'استكشف الدروس المدرسية ←' : 'Explore School Tuition →'}</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 12. FINAL CALL TO ACTION ───────────────────────────────── */}
        <section className="sat-final-cta-section">
          <div className="sat-final-cta-container">
            <h2 className="sat-final-cta-title">
              {isAr ? 'جاهز لبدء التحضير لاختبار SAT في الشارقة؟' : 'Ready to start your SAT preparation in Sharjah?'}
            </h2>
            <p className="sat-final-cta-desc">
              {isAr
                ? 'تواصل مع مستشارينا الأكاديميين لحجز تقييمك التشخيصي واختيار المجموعة المناسبة لجدولك الدراسي.'
                : 'Connect with our admissions team to book your free diagnostic assessment and secure your seat in the upcoming cohort.'}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/971527569908?text=Hi%20Nitaq%20Academy%2C%20I%20want%20to%20enroll%20in%20SAT%20Preparation%20in%20Sharjah"
                className="sat-btn-cta-white"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_sharjah_final_enroll')}
              >
                {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
              </a>
              <a
                href="tel:+971527569908"
                className="sat-btn-cta-outline"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_sharjah_final_call')}
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

export default SATCourse;
