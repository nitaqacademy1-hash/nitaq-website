import React from 'react';
import { Link } from '../../i18n/Link';
import { useLanguage } from '../../i18n/context';
import WhyNitaq from '../../components/WhyNitaq';
import SEO from '../../components/SEO';
import SATDiagnosticSection from '../../components/sat/SATDiagnosticSection';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import { 
  BookOpen, Clock, Calendar, MapPin, Award, CheckCircle2, 
  ArrowRight, DollarSign, Laptop, Users, HelpCircle, Compass, Sparkles
} from 'lucide-react';
import './sat-course.css';

const SHARJAH_FAQS = [
  {
    question: 'What is the Digital SAT and how is it different from the old SAT?',
    questionAr: 'ما هو اختبار Digital SAT وكيف يختلف عن اختبار SAT القديم؟',
    answer: "The Digital SAT is the official computer-based format of the Scholastic Assessment Test, taken on a laptop or tablet using the College Board's Bluebook app. It is multistage adaptive — meaning question difficulty in Module 2 adjusts based on your Module 1 performance. The total exam time is 2 hours and 14 minutes across Reading & Writing and Mathematics.",
    answerAr: 'اختبار Digital SAT هو النسخة الرقمية الرسمية لاختبار القبول الجامعي، ويُعقد على أجهزة الكمبيوتر المحمولة عبر تطبيق Bluebook التابع لـ College Board. الاختبار تكيفي متعدد المراحل، حيث تتحدد صعوبة أسئلة الوحدة الثانية بناءً على أدائك في الوحدة الأولى. مدة الاختبار ساعتان و14 دقيقة.'
  },
  {
    question: 'How much does an SAT preparation course cost in Sharjah?',
    questionAr: 'كم تبلغ تكلفة دورة التحضير لاختبار SAT في الشارقة؟',
    answer: 'SAT preparation course fees at Nitaq Academy in Sharjah typically range from AED 1,800 to AED 4,000 depending on the selected course track (Foundation, Comprehensive, or Intensive), batch size, and whether group or 1-on-1 private mentoring is chosen. All materials, diagnostic assessments, and full-length adaptive mock exams are included. Flexible payment plans and group enrollment discounts are available.',
    answerAr: 'تتراوح رسوم دورات التحضير لاختبار SAT في أكاديمية نطاق بالشارقة عادة بين 1,800 درهم و4,000 درهم إماراتي بحسب المسار المختار (التأسيسي، الشامل، أو المكثف)، وحجم المجموعة، وما إذا كان التدريب جماعياً أو فردياً 1-على-1. تشمل الرسوم كافة المواد التدريبية والتقييمات التشخيصية ونماذج المحاكاة.'
  },
  {
    question: 'Are weekend SAT classes available in Sharjah?',
    questionAr: 'هل تتوفر حصص تدريب لاختبار SAT في عطلة نهاية الأسبوع بالشارقة؟',
    answer: 'Yes. Nitaq Academy offers weekend morning batches on Fridays and Saturdays (9:30 AM – 12:30 PM) specifically designed for school students in Sharjah and Dubai who cannot attend weekday sessions. We also offer weekday evening batches (Monday to Thursday) and flexible 1-on-1 private scheduling.',
    answerAr: 'نعم. توفر أكاديمية نطاق مجموعات تدريب صباحية في عطلة نهاية الأسبوع يومي الجمعة والسبت (9:30 صباحاً – 12:30 ظهراً) مخصصة لطلاب المدارس. كما تتوفر فترات مسائية خلال أيام الأسبوع وخيارات تدريب فردي بجدول مرن.'
  },
  {
    question: 'How long does SAT preparation take at Nitaq Academy?',
    questionAr: 'كم تستغرق دورة التحضير لاختبار SAT في أكاديمية نطاق؟',
    answer: 'Our standard Comprehensive SAT track runs for 8 to 12 weeks with three 90-minute sessions per week, covering both Math and Reading & Writing. For students with upcoming exam deadlines, our 4-week Intensive crash course provides accelerated daily sessions and targeted mock reviews.',
    answerAr: 'يمتد المسار الشامل عادة بين 8 و12 أسبوعاً بمعدل 3 جلسات أسبوعياً (90 دقيقة لكل جلسة). كما يتوفر مسار مكثف مدته 4 أسابيع للطلاب الراغبين في تسريع تحضيرهم قبل موعد الاختبار.'
  },
  {
    question: 'Where is Nitaq Academy located in Sharjah?',
    questionAr: 'أين يقع مقر أكاديمية نطاق في الشارقة؟',
    answer: 'Nitaq Academy is located at Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates. We are easily accessible for students from Al Majaz, Buhaira Corniche, Al Khan, Al Taawun, Al Nahda, and connecting commuter routes from Dubai.',
    answerAr: 'يقع مقر أكاديمية نطاق في مكتب F103، الطابق F1، برج أبو خمسين، المجاز 3، الشارقة. موقعنا استراتيجي ويسهل الوصول إليه من كورنيش البحيرة، الخان، التعاون، النهدة، ومداخل دبي.'
  },
  {
    question: 'What SAT score do I need for UAE universities like AUS and Khalifa University?',
    questionAr: 'ما هي الدرجة المطلوبة في SAT للجامعات في الإمارات مثل الجامعة الأمريكية في الشارقة وجامعة خليفة؟',
    answer: 'Most UAE universities require 1200+ for competitive admissions. The American University of Sharjah (AUS) generally looks for 1200–1350+ for engineering and business programs. Khalifa University targets 1250–1400+. NYU Abu Dhabi and elite global universities typically expect 1450–1550+. High scores also unlock generous merit scholarship opportunities.',
    answerAr: 'تطلب معظم الجامعات الرائدة في الإمارات 1200+ للقبول التنافسي. الجامعة الأمريكية في الشارقة تتطلب عموماً 1200–1350+ للهندسة وإدارة الأعمال، وجامعة خليفة 1250–1400+، وجامعة نيويورك أبوظبي 1450–1550+، وتؤهل الدرجات العالية للحصول على منح دراسية مجزية.'
  },
  {
    question: 'Where are the official SAT exam centers in the UAE?',
    questionAr: 'أين تقع مراكز اختبار SAT الرسمية في دولة الإمارات؟',
    answer: 'Official College Board SAT test centers in the UAE are situated in Dubai and Abu Dhabi. Students from Sharjah typically sit the exam at nearby authorized school centers in Dubai. We advise registering at least 6 to 8 weeks in advance on collegeboard.org to secure your preferred date and location.',
    answerAr: 'تقع مراكز اختبار SAT الرسمية المعتمدة في دبي وأبوظبي، وعادة ما يتقدم طلاب الشارقة للاختبار في المراكز المعتمدة القريبة في دبي. نوصي بالتسجيل مبكراً بـ 6 إلى 8 أسابيع عبر موقع College Board.'
  },
  {
    question: 'Can I start with a diagnostic assessment before enrolling?',
    questionAr: 'هل يمكنني البدء بتقييم تشخيصي قبل التسجيل في الدورة؟',
    answer: 'Yes! Nitaq Academy provides a free 24-question Digital SAT diagnostic assessment measuring baseline readiness across all 8 College Board domains in 15–20 minutes. You receive an instant composite score projection and domain report to help you select the ideal course track.',
    answerAr: 'نعم! توفر أكاديمية نطاق تقييماً تشخيصياً مجانياً (24 سؤالاً) يقيس مستواك عبر جميع مجالات SAT الثمانية خلال 15-20 دقيقة، مع تقرير فوري لتحديد المسار التدريبي الأنسب.'
  }
];

const DUBAI_FAQS = [
  {
    question: 'How are online SAT classes conducted for Dubai students?',
    questionAr: 'كيف تُعقد حصص SAT عبر الإنترنت لطلاب دبي؟',
    answer: 'Classes are conducted live and interactively via high-definition video with shared digital whiteboards, real-time problem-solving, and live Desmos graphing demonstrations. Students actively ask questions and receive full session recordings for review before exams.',
    answerAr: 'تُعقد الحصص بشكل مباشر وتفاعلي عبر الفيديو عالي الدقة مع ألواح كتابة رقمية مشتركة وتطبيقات مباشرة على آلة Desmos، مع تسجيل الحصص للرجوع إليها لاحقاً.'
  },
  {
    question: 'Can Dubai students attend in-person mock exams at the Sharjah campus?',
    questionAr: 'هل يمكن لطلاب دبي حضور الامتحانات التجريبية حضورياً في مقر الشارقة؟',
    answer: 'Yes. We offer a hybrid arrangement where Dubai students attend live online weekday classes and can visit our campus in Al Majaz 3, Sharjah (just 15–20 minutes from northern Dubai) to sit proctored full-length computer-based mock exams under authentic test conditions.',
    answerAr: 'نعم. نوفر نظاماً هجيناً يتيح لطلاب دبي حضور الدروس عبر الإنترنت مع خيار الحضور الشخصي للامتحانات التجريبية المحاكية في مقرنا بالمجاز 3 في الشارقة.'
  },
  {
    question: 'What batch timings are available for online SAT prep in Dubai?',
    questionAr: 'ما هي مواعيد المجموعات التدريبية المتاحة عبر الإنترنت لطلاب دبي؟',
    answer: 'We offer flexible weekday evening batches (Monday to Thursday) and weekend morning sessions (Fridays and Saturdays) tailored to school schedules in Dubai, along with customized 1-on-1 private tutoring slots.',
    answerAr: 'نوفر فترات مسائية خلال أيام الأسبوع ومجموعات صباحية في عطلة نهاية الأسبوع (الجمعة والسبت) متوافقة مع جداول المدارس في دبي، بالإضافة إلى خيارات التدريب الفردي الخاص.'
  },
  {
    question: 'What are the fees for online Digital SAT courses in Dubai?',
    questionAr: 'ما هي رسوم دورة Digital SAT عبر الإنترنت لطلاب دبي؟',
    answer: 'Online SAT preparation course fees typically range from AED 1,800 to AED 4,000 depending on the program track (Foundation, Comprehensive, or Intensive) and batch format. Contact our admissions team on WhatsApp for current cohort schedules and enrollment details.',
    answerAr: 'تتراوح رسوم دورات SAT عبر الإنترنت بين 1,800 و4,000 درهم إماراتي بحسب المسار المختار، مع توفير خيارات سداد ميسرة واستشارات مجانية عبر واتساب.'
  }
];

const SATCourse = ({ locationName = 'Sharjah' }) => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const isDubai = locationName === 'Dubai';
  const locArabic = isDubai ? 'دبي' : 'الشارقة';

  const faqs = isDubai ? DUBAI_FAQS : SHARJAH_FAQS;
  const faqSchemaData = faqs.map(f => ({
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
                {isDubai
                  ? (isAr ? 'مباشر وتفاعلي عبر الإنترنت · تدريب DIGITAL SAT لطلاب دبي والإمارات' : 'LIVE INTERACTIVE ONLINE · DIGITAL SAT COACHING FOR DUBAI & UAE')
                  : (isAr ? 'معتمد من هيئة الشارقة للتعليم الخاص · تدريب DIGITAL SAT في الشارقة · المجاز 3' : 'SPEA AUTHORIZED · DIGITAL SAT COACHING IN SHARJAH · AL MAJAZ 3')}
              </div>

              <h1 className="sat-hero-heading">
                {isDubai
                  ? (isAr ? 'التحضير لاختبار Digital SAT عبر الإنترنت لطلاب دبي' : 'Online Digital SAT Preparation for Dubai Students')
                  : (isAr ? 'التحضير لاختبار Digital SAT في الشارقة' : 'Digital SAT Preparation in Sharjah')}
              </h1>

              <p className="sat-hero-description">
                {isDubai
                  ? (isAr
                    ? 'دورات تفاعلية ومباشرة عبر الإنترنت لاختبار Digital SAT لطلاب دبي والإمارات. تدريب تطبيقي على حيل آلة Desmos، ونماذج امتحانات محاكاة تكيفية بنظام Bluebook، وتقييم تشخيصي دقيق للوصول إلى 1500+.'
                    : 'Master the Digital SAT with live interactive online SAT preparation and tutoring designed for Dubai and UAE students. Real-time Desmos masterclasses, adaptive Bluebook-format mock exams, diagnostic assessments, and personalized score-improvement milestones.')
                  : (isAr
                    ? 'البرنامج الرائد في الشارقة والمعتمد من هيئة الشارقة للتعليم الخاص لاختبار Digital SAT في برج أبو خمسين، المجاز 3. تدريب متقدم على صعوبة الاختبار التكيفي، وآلة Desmos، ونماذج امتحانات Bluebook واستراتيجيات القراءة والكتابة والرياضيات.'
                    : "Sharjah's premier SPEA-authorized Digital SAT preparation and coaching program at Abu Khamseen Tower, Al Majaz 3. Master adaptive test difficulty, Desmos graphing shortcuts, Bluebook mock practice, and high-yield Reading & Writing strategies with proven score gains.")}
              </p>

              <div className="sat-hero-cta-group">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(
                    isAr
                      ? `مرحباً أكاديمية نطاق، أود الاستفسار عن دورة تحضير SAT (${locArabic})`
                      : `Hi Nitaq Academy, I am interested in the Digital SAT Preparation course (${locationName})`
                  )}`}
                  className="sat-btn-primary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_hero_enroll')}
                >
                  {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
                </a>
                <Link
                  to="/sat/diagnostic"
                  className="sat-btn-secondary"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'sat_hero_diagnostic')}
                >
                  {isAr ? 'ابدأ التقييم التشخيصي المجاني' : 'Start Free Diagnostic'}
                </Link>
              </div>

              <div className="sat-hero-trust-line">
                <span className="sat-trust-check-icon">✓</span>
                {isDubai
                  ? (isAr ? 'حصص مباشرة عبر الإنترنت · تسجيلات للمراجعة · خيار حضور الامتحانات التجريبية في المقر' : 'Live Online Classes · Recorded Sessions · Optional Hybrid Campus Mocks')
                  : (isAr ? 'مرخص من هيئة الشارقة للتعليم الخاص · المجاز 3، الشارقة · مجموعات صغيرة (8-12 طالباً)' : 'SPEA Licensed & Attested · Al Majaz 3, Sharjah · Small Batches (8–12 Students)')}
              </div>
            </div>

            <div className="sat-hero-image-col">
              <div className="sat-hero-image-wrapper">
                <img
                  src="/images/sat_hero_student_hoodie.webp"
                  alt={`Student preparing for the Digital SAT with Nitaq Academy in ${locationName}`}
                  width="540"
                  height="500"
                  fetchPriority="high"
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
            {/* 1. Programs */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Compass size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'المسارات' : 'Programs'}</div>
                <div className="sat-snapshot-value">{isAr ? '3 مسارات محددة بالتشخيص' : 'Foundation · Comprehensive · Intensive'}</div>
              </div>
            </div>

            {/* 2. Schedule */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                <Calendar size={22} />
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'المواعيد' : 'Schedule'}</div>
                <div className="sat-snapshot-value">{isAr ? 'عطلة نهاية الأسبوع ومسائي' : 'Weekend Mornings & Weekday Evenings'}</div>
              </div>
            </div>

            {/* 3. Format */}
            <div className="sat-snapshot-item">
              <div className="sat-snapshot-icon-wrapper">
                {isDubai ? <Laptop size={22} /> : <MapPin size={22} />}
              </div>
              <div>
                <div className="sat-snapshot-label">{isAr ? 'نمط الدراسة' : 'Format'}</div>
                <div className="sat-snapshot-value">
                  {isDubai 
                    ? (isAr ? 'تفاعلي عبر الإنترنت + هجين' : 'Live Online + Hybrid Mocks')
                    : (isAr ? 'حضوري في المجاز 3 + عبر الإنترنت' : 'In-Person Al Majaz 3 & Online')}
                </div>
              </div>
            </div>

            {/* 4. Focus Areas */}
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

        {/* ── 3. DEFINITION BLOCK: WHAT IS THE DIGITAL SAT? ───────────── */}
        <section className="sat-definition-section">
          <div className="sat-section-container">
            <div className="sat-definition-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="sat-guide-tag">{isAr ? 'نظرة عامة على الاختبار' : 'EXAM ESSENTIALS'}</span>
                <span style={{ color: '#94A3B8' }}>•</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#475467' }}>
                  {isAr ? 'دليل College Board Bluebook' : 'College Board Bluebook Format'}
                </span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.1rem)', fontWeight: 800, color: '#101828', marginBottom: '16px', lineHeight: 1.25 }}>
                {isAr 
                  ? 'ما هو اختبار Digital SAT ولماذا يُعد محورياً للقبول الجامعي والمنح؟'
                  : 'What is the Digital SAT & Why Does It Matter for University Admissions?'}
              </h2>

              <p style={{ color: '#475467', fontSize: '1.025rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {isAr ? (
                  <>
                    اختبار <strong>Digital SAT</strong> (المعروف تاريخياً باختبار تقييم الكفاءة الدراسية Scholastic Assessment Test) هو المعيار الدولي المعتمد للقبول الجامعي والمقدم من مؤسسة College Board الأمريكية عبر تطبيق <strong>Bluebook</strong>. 
                    يمتد الاختبار لمدة <strong>ساعتين و14 دقيقة</strong>، وينقسم إلى قسمين رئيسيين: <strong>القراءة والكتابة (Reading &amp; Writing)</strong> و<strong>الرياضيات (Mathematics)</strong>، 
                    وهو اختبار تكيفي رقمي بحيث تحدد دقة إجاباتك في الوحدة الأولى مستوى صعوبة الوحدة الثانية. في دولة الإمارات، يُعد الحصول على درجة 1300+ إلى 1500+ شرطاً رئيسياً للقبول التنافسي 
                    والحصول على منح التميز الأكاديمي في جامعات كبرى مثل <strong>الجامعة الأمريكية في الشارقة (AUS)</strong>، <strong>جامعة خليفة</strong>، <strong>جامعة نيويورك أبوظبي</strong>، بالإضافة إلى الجامعات العالمية في الولايات المتحدة والمملكة المتحدة وكندا.
                  </>
                ) : (
                  <>
                    Formerly known as the Scholastic Assessment Test (SAT), the <strong>Digital SAT</strong> is the globally standardized college admissions exam administered electronically via the College Board's official <strong>Bluebook</strong> testing platform. 
                    Clocking in at <strong>2 hours and 14 minutes</strong>, the exam features two integrated sections: <strong>Reading &amp; Writing</strong> (54 questions / 64 minutes) and <strong>Mathematics</strong> (44 questions / 70 minutes with built-in Desmos graphing calculator access). 
                    As a multistage adaptive test, your accuracy in Module 1 dictates whether you unlock the higher-scoring Module 2. For high school students in Sharjah, Dubai, and across the UAE, earning a competitive 1300+ to 1500+ score is pivotal for meeting direct entry thresholds and securing prestigious merit scholarships at institutions such as the <strong>American University of Sharjah (AUS)</strong>, <strong>Khalifa University</strong>, <strong>NYU Abu Dhabi</strong>, and leading international universities worldwide.
                  </>
                )}
              </p>

              <div className="sat-grid-2col">
                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Sparkles size={22} />
                    </div>
                    <h3>{isAr ? 'ما الذي نغطيه في أكاديمية نطاق؟' : 'What Nitaq Academy Covers'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'تغطية شاملة لجميع مجالات الاختبار الثمانية: الجبر، والرياضيات المتقدمة، وحل المشكلات، وحساب المثلثات، مع تدريب مكثف على حيل آلة Desmos البيانية، واستراتيجيات الربط النصي وقواعد الإنجليزية المعيارية (SAT grammar rules) وبنوك الأسئلة التكيفية.'
                      : 'Comprehensive mastery of all 8 College Board domains: Algebra, Advanced Math, Problem-Solving, Geometry & Trig, Craft & Structure, Information & Ideas, and Standard English Conventions (essential SAT grammar rules), paired with expert Desmos graphing shortcuts and structured question practice.'}
                  </p>
                </div>

                <div className="sat-info-card">
                  <div className="sat-info-card-header">
                    <div className="sat-info-icon-box">
                      <Award size={22} />
                    </div>
                    <h3>{isAr ? 'منهجية التقييم والتطوير' : 'Diagnostic-Led Score Growth'}</h3>
                  </div>
                  <p>
                    {isAr
                      ? 'يبدأ كل طالب بتقييم تشخيصي دقيق لتحديد نقاط القوة ومواطن التحسين، يلي ذلك خطة دراسية مخصصة، وامتحانات محاكاة دورية تحت ظروف الامتحان الحقيقي، وتدريب على وتيرة الوقت.'
                      : 'Every student begins with a calibrated diagnostic assessment to map precise baseline strengths. Training includes weekly adaptive Bluebook-style drills, timed module pacing, and individualized doubt-clearing sessions.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. FEE TRANSPARENCY & WEEKEND SCHEDULE SECTION ─────────── */}
        <section className="sat-details-section" style={{ background: '#F8FBF9', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'الرسوم والمواعيد' : 'FEES & BATCH SCHEDULES'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'وضوح تام في الرسوم ومرونة في أوقات التدريب' : 'Transparent Investment & Flexible Timetables'}
              </h2>
            </div>

            <div className="sat-grid-2col" style={{ marginTop: '36px' }}>
              {/* Fee Information Card */}
              <div className="sat-info-card" style={{ padding: '32px' }}>
                <div className="sat-info-card-header">
                  <div className="sat-info-icon-box" style={{ background: '#ECFDF5', color: '#166534' }}>
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1E7E34', textTransform: 'uppercase' }}>
                      {isAr ? 'الرسوم التدريبية' : 'COURSE FEES'}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', marginTop: '2px' }}>
                      {isAr ? 'هيكل الرسوم وخيارات السداد' : 'Course Fee Structure in Sharjah & UAE'}
                    </h3>
                  </div>
                </div>

                <p style={{ marginBottom: '16px' }}>
                  {isAr ? (
                    <>
                      تتراوح رسوم دورات التحضير لاختبار SAT في أكاديمية نطاق عادة بين <strong>1,800 درهم و4,000 درهم إماراتي</strong>، وتعتمد التكلفة الدقيقة على:
                    </>
                  ) : (
                    <>
                      Digital SAT preparation course fees at Nitaq Academy typically range from <strong>AED 1,800 to AED 4,000</strong> depending on:
                    </>
                  )}
                </p>

                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.94rem', color: '#334155' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#1E7E34" />
                    <span>{isAr ? 'المسار التدريبي المختار: التأسيسي (12 أسبوعاً)، الشامل (8 أسابيع)، أو المكثف (4 أسابيع)' : 'Selected track: Foundation (12 wks), Comprehensive (8 wks), or Intensive (4 wks)'}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#1E7E34" />
                    <span>{isAr ? 'نمط التدريب: مجموعات صغيرة (8-12 طالباً) أو تدريب فردي 1-على-1 مخصص' : 'Delivery format: Small group micro-batches (8–12 students) or 1-on-1 private mentoring'}</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={18} color="#1E7E34" />
                    <span>{isAr ? 'يشمل كافة المواد وبنوك الأسئلة والتقييمات ونماذج الامتحانات المحاكية' : 'Includes all official study materials, adaptive mock test software, and diagnostic scorecards'}</span>
                  </li>
                </ul>

                <div style={{ background: '#F1F5F9', borderRadius: '10px', padding: '14px 18px', fontSize: '0.88rem', color: '#475467', marginBottom: '20px' }}>
                  {isAr
                    ? '💡 تتوفر خطط سداد ميسرة بالأقساط وخصومات إضافية للأشقاء والتسجيل الجماعي.'
                    : '💡 Flexible installment plans and sibling/group discounts are available upon enquiry.'}
                </div>

                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(
                    isAr
                      ? 'مرحباً، أود معرفة جدول الرسوم الحالية والمجموعات القادمة لاختبار SAT'
                      : 'Hi Nitaq Academy, I would like to enquire about the current SAT course fees and batch schedules'
                  )}`}
                  className="sat-btn-secondary"
                  style={{ width: '100%', textAlign: 'center', display: 'block' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_fee_enquiry')}
                >
                  {isAr ? 'استفسر عن الرسوم عبر واتساب ←' : 'Inquire Exact Fee Quote via WhatsApp →'}
                </a>
              </div>

              {/* Weekend & Batch Schedule Card */}
              <div className="sat-info-card" style={{ padding: '32px' }}>
                <div className="sat-info-card-header">
                  <div className="sat-info-icon-box" style={{ background: '#EFF6FF', color: '#1D4ED8' }}>
                    <Calendar size={24} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#1D4ED8', textTransform: 'uppercase' }}>
                      {isAr ? 'المواعيد والأوقات' : 'BATCH SCHEDULES'}
                    </span>
                    <h3 style={{ fontSize: '1.35rem', marginTop: '2px' }}>
                      {isAr ? 'حصص عطلة نهاية الأسبوع والفترات المسائية' : 'Weekend & Weekday Class Timetables'}
                    </h3>
                  </div>
                </div>

                <p style={{ marginBottom: '16px' }}>
                  {isAr ? (
                    <>
                      صُممت مواعيد الحصص في أكاديمية نطاق لتلائم الجداول المدرسية المزدحمة لطلاب المرحلة الثانوية:
                    </>
                  ) : (
                    <>
                      Batches are intentionally scheduled around high school academic timetables in Sharjah and Dubai:
                    </>
                  )}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', background: '#FFFFFF' }}>
                    <div style={{ fontWeight: 700, color: '#101828', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Clock size={16} color="#1E7E34" />
                      {isAr ? 'مجموعات عطلة نهاية الأسبوع (الجمعة والسبت)' : 'Weekend Morning Batches (Friday & Saturday)'}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#475467' }}>
                      {isAr ? 'صباحاً: 9:30 ص – 12:30 م · مثالي للطلاب من خارج الشارقة ولتفادي ازدحام أيام الأسبوع' : 'Morning slots: 9:30 AM – 12:30 PM. Perfect for high schoolers with heavy weekday commitments.'}
                    </div>
                  </div>

                  <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', background: '#FFFFFF' }}>
                    <div style={{ fontWeight: 700, color: '#101828', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Clock size={16} color="#1D4ED8" />
                      {isAr ? 'مجموعات المساء خلال أيام الأسبوع' : 'Weekday Evening Batches (Mon – Thu)'}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#475467' }}>
                      {isAr ? 'مساءً: 5:00 م – 7:30 م (جلسات 90 دقيقة مركزة مرتين إلى ثلاث أسبوعياً)' : 'Evening slots: 5:00 PM – 7:30 PM (90-minute structured sessions 2–3 times weekly).'}
                    </div>
                  </div>

                  <div style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', background: '#FFFFFF' }}>
                    <div style={{ fontWeight: 700, color: '#101828', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <Users size={16} color="#7C3AED" />
                      {isAr ? 'تدريب فردي مخصص 1-على-1' : 'Custom 1-on-1 Private Scheduling'}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#475467' }}>
                      {isAr ? 'مواعيد مرنة بالكامل يتم تنسيقها مباشرة بما يتوافق مع مواعيد امتحاناتك المدرسية' : 'Completely customized timings scheduled around your school exams and extracurriculars.'}
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+971527569908"
                  className="sat-btn-secondary"
                  style={{ width: '100%', textAlign: 'center', display: 'block' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_schedule_call')}
                >
                  {isAr ? 'اتصل للتحقق من المقاعد المتاحة' : 'Call to Check Next Available Cohort'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. PROGRAM TRACKS ──────────────────────────────────────── */}
        <section className="sat-programs-section">
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'اختيار المسار التدريبي' : 'PROGRAMME SELECTION'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'ابدأ من مستواك الحالي نحو درجتك المستهدفة' : 'Start with your current level and target.'}
              </h2>
            </div>

            <div className="sat-programs-grid">
              {/* Track 1: Foundation */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">{isAr ? 'المهارات الأساسية (12 أسبوعاً)' : 'CORE SKILLS · 12 WEEKS'}</span>
                  <h3 className="sat-program-title">{isAr ? 'المسار التأسيسي (Foundation)' : 'Foundation Track'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'بناء المفاهيم الأساسية وسد الفجوات في الجبر واللغة الإنجليزية.' : 'Build foundational concepts in algebra and reading comprehension.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'ترسيخ قواعد الجبر والحساب الذهني' : 'Core algebra & arithmetic fundamentals'}</li>
                    <li>{isAr ? 'قواعد الإنجليزية المعيارية والمفردات في السياق' : 'Grammar rules & vocabulary in context'}</li>
                    <li>{isAr ? 'استراتيجيات إدارة الوقت وسرعة الحل' : 'Essential pacing & time allocation methods'}</li>
                    <li>{isAr ? 'تأهيل كامل للانتقال للمستوى التنافسي 1300+' : 'Targeted baseline jump to 1250–1350'}</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود الاستفسار عن المسار التأسيسي لاختبار SAT' : "I'm interested in SAT Foundation Track")}`}
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_track_foundation')}
                >
                  {isAr ? 'استفسر عن المسار ←' : 'Enquire Track →'}
                </a>
              </div>

              {/* Track 2: Comprehensive (Featured) */}
              <div className="sat-program-card featured">
                <div className="sat-featured-badge">{isAr ? 'الأكثر طلباً' : 'MOST POPULAR'}</div>
                <div>
                  <span className="sat-program-duration">{isAr ? 'تحضير شامل متكامل (8 أسابيع)' : 'COMPLETE PREPARATION · 8 WEEKS'}</span>
                  <h3 className="sat-program-title">{isAr ? 'المسار الشامل (Comprehensive)' : 'Comprehensive Track'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'جاهزية تامة وتفوق في كلا قسمي الاختبار للوصول إلى 1450+.' : 'Develop complete Digital SAT mastery across all 8 domains.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'تغطية شاملة لكافة محاور SAT والآلة الحاسبة Desmos' : 'Complete SAT syllabus with advanced Desmos drills'}</li>
                    <li>{isAr ? 'بنك أسئلة وتطبيقات تفاعلية مكثفة' : 'Extensive question bank & adaptive modules'}</li>
                    <li>{isAr ? 'نماذج امتحانات محاكاة كاملة وتتبع الأداء' : 'Full-length Bluebook-style mock exam tracking'}</li>
                    <li>{isAr ? 'تقارير تحليلية دورية لنقاط القوة والضعف' : 'Detailed performance scorecards & review sessions'}</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود التسجيل في المسار الشامل لاختبار SAT' : "I'm interested in SAT Comprehensive Track")}`}
                  className="sat-btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_track_comprehensive')}
                >
                  {isAr ? 'سجل في المسار الشامل ←' : 'Enroll in Comprehensive →'}
                </a>
              </div>

              {/* Track 3: Intensive */}
              <div className="sat-program-card">
                <div>
                  <span className="sat-program-duration">{isAr ? 'تدريب مكثف سريع (4 أسابيع)' : 'TARGETED SPRINT · 4 WEEKS'}</span>
                  <h3 className="sat-program-title">{isAr ? 'المسار المكثف (Intensive)' : 'Intensive Track'}</h3>
                  <p className="sat-program-subtitle">
                    {isAr ? 'تدريب سريع ومكثف لرفع الدرجة لأقصى حد قبل موعد الامتحان.' : 'High-impact score-push for retakers and upcoming test dates.'}
                  </p>
                  <ul className="sat-program-list">
                    <li>{isAr ? 'تدريب معمق على الأسئلة التكيفية الصعبة في الوحدة 2' : 'Hard Module 2 trap elimination & tricky math problems'}</li>
                    <li>{isAr ? 'جلسات حل يومية تحت توقيت الاختبار الحقيقي' : 'Daily timed practice sets & rapid explanations'}</li>
                    <li>{isAr ? 'جلسات فردية 1-على-1 لحل المسائل المعقدة' : '1-on-1 personalized doubt-clearing sessions'}</li>
                    <li>{isAr ? 'استراتيجيات خاصة لكسر حاجز 1500+' : 'Dedicated tactics for 1500+ benchmark scorers'}</li>
                  </ul>
                </div>
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? 'أود الاستفسار عن المسار المكثف لاختبار SAT' : "I'm interested in SAT Intensive Track")}`}
                  className="sat-btn-secondary"
                  style={{ width: '100%' }}
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_track_intensive')}
                >
                  {isAr ? 'استفسر عن المسار ←' : 'Enquire Track →'}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. CURRICULUM DOMAINS ──────────────────────────────────── */}
        <section style={{ padding: '90px 0', background: '#FFFFFF' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'نظرة عامة على المنهج' : 'CURRICULUM OVERVIEW'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'منهج Digital SAT المتكامل عبر 8 مجالات رسمية' : 'Complete Digital SAT 8-Domain Curriculum'}
              </h2>
            </div>

            <div className="sat-curriculum-grid">
              {/* Mathematics Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'قسم الرياضيات' : 'Mathematics'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>{isAr ? 'آلة Desmos والحساب الذهني' : 'Desmos Shortcuts & Analytical Math'}</span>
                </h3>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'الجبر (Algebra)' : 'Algebra (Linear equations & systems)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'الرياضيات المتقدمة (Advanced Math)' : 'Advanced Math (Quadratics & polynomials)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'حل المشكلات وتحليل البيانات (Problem-Solving & Data Analysis)' : 'Problem-Solving & Data Analysis'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'الهندسة وحساب المثلثات (Geometry & Trigonometry)' : 'Geometry & Trigonometry'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>

              {/* Reading & Writing Panel */}
              <div className="sat-curriculum-panel">
                <h3 className="sat-curriculum-panel-title">
                  <span>{isAr ? 'قسم القراءة والكتابة' : 'Reading & Writing'}</span>
                  <span style={{ fontSize: '0.85rem', color: '#2E7D32', fontWeight: 600 }}>{isAr ? 'نصوص تكيفية وتحليل بلاغي' : 'Adaptive Passages & Rhetoric'}</span>
                </h3>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'المعلومات والأفكار (Information & Ideas)' : 'Information & Ideas (Central claims & evidence)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'الصياغة والبناء النصي (Craft & Structure)' : 'Craft & Structure (Words in context & purpose)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'التعبير عن الأفكار (Expression of Ideas)' : 'Expression of Ideas (Transitions & synthesis)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>

                <div className="sat-domain-row">
                  <div className="sat-domain-title">{isAr ? 'قواعد الإنجليزية المعيارية (Standard English Conventions)' : 'Standard English Conventions (Grammar & boundaries)'}</div>
                  <div className="sat-domain-bar-bg"><div className="sat-domain-bar-fill" style={{ width: '100%' }} /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. CAMPUS LOCATION / HYBRID DELIVERY INFO ─────────────── */}
        <section style={{ padding: '60px 0', background: '#F8FBF9' }}>
          <div className="sat-section-container">
            <div className="sat-info-card" style={{ padding: '36px', background: '#FFFFFF', border: '1.5px solid #BBF7D0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                <div className="sat-info-icon-box" style={{ background: '#EAF4EC', color: '#1E7E34' }}>
                  {isDubai ? <Laptop size={24} /> : <MapPin size={24} />}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.3rem' }}>
                    {isDubai 
                      ? (isAr ? 'منصة التعلم عبر الإنترنت لطلاب دبي والإمارات' : 'Live Online Platform for Dubai Students with Hybrid Campus Access')
                      : (isAr ? 'مقر المعهد في المجاز 3، الشارقة — سهولة الوصول والموقع الاستراتيجي' : 'Nitaq Academy Sharjah Campus — Abu Khamseen Tower, Al Majaz 3')}
                  </h3>
                </div>
              </div>

              <p style={{ color: '#475467', lineHeight: 1.7, fontSize: '0.98rem' }}>
                {isDubai ? (
                  isAr ? (
                    <>
                      يستفيد طلاب دبي من بيئة تعليمية افتراضية تفاعلية بالكامل عبر تدريب SAT مباشر وعالي الدقة عبر الإنترنت مع كبار الأساتذة، بما يشمل حل المسائل التفاعلي وتطبيقات Desmos المباشرة. كما يتاح للطلاب خيار الانضمام للامتحانات التجريبية الحضورية التكيفية في مقرنا بالمجاز 3 في الشارقة، الواقع على بعد 15–20 دقيقة فقط من دبي عبر شارع الاتحاد وطريق الشيخ محمد بن زايد.
                    </>
                  ) : (
                    <>
                      For families seeking top-tier online SAT preparation in Dubai and digital SAT coaching across the UAE, our live virtual cohorts deliver real-time interactive mentoring directly to your home. Dubai students participate in engaging HD virtual classrooms featuring live digital whiteboards, real-time Desmos problem-solving, and recorded revision sessions. In addition, students have full hybrid access to attend proctored in-person mock exam simulations under authentic testing conditions at our Sharjah campus (Abu Khamseen Tower, Al Majaz 3), located just 15–20 minutes from northern Dubai via E11 / Al Wahda Street.
                    </>
                  )
                ) : (
                  isAr ? (
                    <>
                      يقع معهد أكاديمية نطاق في <strong>مكتب F103، الطابق F1، برج أبو خمسين، المجاز 3، الشارقة</strong>. يُعد معهدنا الخيار المثالي للعائلات التي تبحث عن أفضل معهد SAT في الشارقة أو دروس SAT قريبة في منطقة المجاز، كورنيش البحيرة، الخان، التعاون، النهدة، ومناطق دبي المجاورة، حيث نوفر فصولاً دراسية مجهزة بأحدث التقنيات وبيئة اختبارات محاكاة تكيفية ومجموعات صغيرة معتمدة من هيئة الشارقة للتعليم الخاص.
                    </>
                  ) : (
                    <>
                      For families seeking the best SAT institute in Sharjah or searching for accredited SAT classes near me in Al Majaz, Buhaira Corniche, Al Khan, Al Taawun, and Al Nahda, Nitaq Academy provides a premier SPEA-authorized learning environment. Located at <strong>Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates</strong>, our center features high-tech classrooms, small interactive cohorts, dedicated study spaces, and distraction-free proctored adaptive testing facilities.
                    </>
                  )
                )}
              </p>
            </div>
          </div>
        </section>

        {/* ── 8. DIAGNOSTIC ASSESSMENT BANNER ───────────────────────── */}
        <section style={{ background: '#FFFFFF', padding: '60px 0', borderTop: '1px solid #E4E7EC', borderBottom: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <SATDiagnosticSection headingLevel="h2" />
          </div>
        </section>

        {/* ── 9. VISIBLE FAQ SECTION WITH ACCORDIONS ─────────────────── */}
        <section className="sat-faq-section" style={{ background: '#F8FBF9' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'الأسئلة الشائعة' : 'FREQUENTLY ASKED QUESTIONS'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.4rem' }}>
                {isAr ? 'كل ما تحتاج لمعرفته عن تحضير SAT' : 'Everything You Need to Know About Digital SAT Prep'}
              </h2>
            </div>

            <div style={{ maxWidth: '880px', margin: '40px auto 0' }}>
              {faqs.map((faq, index) => (
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
        <section className="sat-guides-section" style={{ background: '#FFFFFF', borderTop: '1px solid #E4E7EC' }}>
          <div className="sat-section-container">
            <div className="sat-section-header-center">
              <div className="sat-why-eyebrow">{isAr ? 'مصادر وإرشادات' : 'RESOURCES & GUIDES'}</div>
              <h2 className="sat-why-title" style={{ fontSize: '2.2rem' }}>
                {isAr ? 'أدلة إرشادية متخصصة لاختبار SAT' : 'Expert Guides to Boost Your SAT Strategy'}
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

              <Link to="/article/digital-sat-preparation-guide-sharjah-dubai-uae" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'دليل شامل' : 'PILLAR GUIDE'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'دليل التحضير لاختبار Digital SAT 2026' : 'Digital SAT Preparation Guide (Sharjah & Dubai)'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'استراتيجيات حل مسائل الرياضيات بحيل Desmos، وإدارة الوقت في الوحدات التكيفية.' : 'Comprehensive roadmap covering adaptive test modules, Desmos calculator shortcuts, and high-yield scoring tactics.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'اقرأ الدليل ←' : 'Read Full Guide →'}</span>
              </Link>

              <Link to="/article/sat-score-1300-guide" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'خطة رفع الدرجات' : 'BENCHMARK STRATEGY'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'كيف تحقق درجة 1300+ في Digital SAT' : 'How to Score 1300+ on the Digital SAT in UAE'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'متطلبات القبول في الجامعات الرائدة في الإمارات (AUS، جامعة خليفة) وخطة دراسية للوصول إلى 1400+.' : 'Detailed error margins, section accuracy targets, and admissions benchmark scores for top UAE universities.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'استكشف الاستراتيجية ←' : 'Explore Strategy →'}</span>
              </Link>

              <Link to="/article/sat-coaching-sharjah" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'دليل اختيار المعهد' : 'COACHING GUIDE'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'كيف تختار أفضل معهد SAT في الشارقة' : 'How to Choose the Best SAT Coaching in Sharjah'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'معايير اختيار مراكز تدريب SAT، وحجم المجموعات، واعتماد هيئة الشارقة للتعليم الخاص.' : 'Key factors for evaluating SAT training institutes, certified faculty, batch sizes, and diagnostic methods.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'اقرأ دليل الاختيار ←' : 'Read Coaching Guide →'}</span>
              </Link>

              <Link to="/article/common-sat-mistakes" className="sat-guide-card">
                <div>
                  <div className="sat-guide-tag">{isAr ? 'أخطاء شائعة' : 'EXAM STRATEGY'}</div>
                  <h3 className="sat-guide-title">{isAr ? 'أخطاء SAT الشائعة وكيفية تجنبها' : 'Common SAT Mistakes UAE Students Make'}</h3>
                  <p className="sat-guide-desc">
                    {isAr ? 'تجنب فخاخ الوقت في القراءة، وأخطاء الجبر الأساسية، وضعف استخدام آلة Desmos البيانية.' : 'Pacing traps, algebra oversights, Desmos misuse, and how expert mentorship helps eliminate recurring errors.'}
                  </p>
                </div>
                <span className="sat-guide-link-text">{isAr ? 'تجنب الأخطاء ←' : 'Avoid Mistakes →'}</span>
              </Link>

              {isDubai ? (
                <Link to="/sat-preparation-sharjah" className="sat-guide-card">
                  <div>
                    <div className="sat-guide-tag">{isAr ? 'حضوري في الشارقة' : 'IN-PERSON CAMPUS'}</div>
                    <h3 className="sat-guide-title">{isAr ? 'التدريب الحضوري في مقر الشارقة' : 'In-Person SAT Classes at Sharjah Campus'}</h3>
                    <p className="sat-guide-desc">
                      {isAr ? 'استكشف فصولنا التدريبية المباشرة في برج أبو خمسين، المجاز 3 بالشارقة.' : 'Looking for classroom coaching? Explore our flagship physical campus at Abu Khamseen Tower, Al Majaz 3.'}
                    </p>
                  </div>
                  <span className="sat-guide-link-text">{isAr ? 'عرض دورة الشارقة ←' : 'View Sharjah Course →'}</span>
                </Link>
              ) : (
                <Link to="/sat-preparation-dubai" className="sat-guide-card">
                  <div>
                    <div className="sat-guide-tag">{isAr ? 'عبر الإنترنت لدبي' : 'ONLINE FOR DUBAI'}</div>
                    <h3 className="sat-guide-title">{isAr ? 'دورات SAT التفاعلية عبر الإنترنت لطلاب دبي' : 'Online Digital SAT Prep for Dubai Students'}</h3>
                    <p className="sat-guide-desc">
                      {isAr ? 'حصص تفاعلية مباشرة مع تسجيلات ومتابعة دقيقة للطلاب المقيمين في دبي والإمارات.' : 'Live interactive online cohorts tailored for high school students residing in Dubai and the wider UAE.'}
                    </p>
                  </div>
                  <span className="sat-guide-link-text">{isAr ? 'عرض خيارات دبي ←' : 'View Dubai Options →'}</span>
                </Link>
              )}
            </div>

            <div style={{ marginTop: '36px', textAlign: 'center', fontSize: '0.95rem', color: '#475467' }}>
              {isAr ? (
                <>
                  هل تفاضل بين اختبار SAT واختبار IELTS لأهداف الدراسة بالخارج والقبول الجامعي؟ اقرأ <Link to="/article/sat-vs-ielts-guide" style={{ color: '#166534', fontWeight: 700, textDecoration: 'underline' }}>دليل المقارنة بين SAT وIELTS</Link>.
                </>
              ) : (
                <>
                  Deciding between the SAT and IELTS for university admissions and study abroad? Read our <Link to="/article/sat-vs-ielts-guide" style={{ color: '#166534', fontWeight: 700, textDecoration: 'underline' }}>SAT vs. IELTS comparison guide</Link>.
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── 11. FINAL CALL TO ACTION ───────────────────────────────── */}
        <section className="sat-final-cta-section">
          <div className="sat-final-cta-container">
            <h2 className="sat-final-cta-title">
              {isAr ? 'جاهز لتحقيق قفزة نوعية في درجتك؟' : 'Ready to achieve your target SAT score?'}
            </h2>
            <p className="sat-final-cta-desc">
              {isAr
                ? `تحدث مع فريقنا الأكاديمي لاختيار المسار الأنسب لدرجتك المستهدفة في ${locArabic}.`
                : `Speak with our senior SAT admissions team to choose the right coaching track in ${locationName}.`}
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/971527569908?text=${encodeURIComponent(
                  isAr 
                    ? `أود التسجيل في دورة تحضير SAT (${locArabic})` 
                    : `I want to enroll in the Digital SAT preparation course (${locationName})`
                )}`}
                className="sat-btn-cta-white"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'sat_final_cta_enroll')}
              >
                {isAr ? 'سجل عبر واتساب ←' : 'Enroll via WhatsApp →'}
              </a>
              <a
                href="tel:+971527569908"
                className="sat-btn-cta-outline"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'sat_final_cta_advisor')}
              >
                {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak to an Advisor'}
              </a>
            </div>
          </div>
        </section>

        {/* ── 12. GLOBAL WHY NITAQ SECTION ───────────────────────────── */}
        <div style={{ background: '#FFFFFF', padding: '60px 0 0 0' }}>
          <WhyNitaq />
        </div>
      </main>
    </>
  );
};

export default SATCourse;
