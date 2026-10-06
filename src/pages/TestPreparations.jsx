import { useState } from 'react';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import SEO from '../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { COURSE_ARABIC_MAP } from '../data/coursesArabicData';
import '../styles/listing-pages.css';
import {
  Sparkles,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  GraduationCap,
  ShieldCheck,
  PhoneCall,
  Target,
  BarChart2,
  Compass,
} from 'lucide-react';

const testPrepCourses = [
  // --- UNDERGRADUATE ADMISSIONS & BOARD EXAMS ---
  {
    id: 'sat',
    category: 'undergrad',
    categoryLabel: 'University Entrance',
    title: 'Digital SAT Preparation',
    badge: 'Flagship · Benchmark 1500+',
    mode: 'In-Person & Online',
    desc: 'Sharjahs premier Digital SAT program. Master adaptive section difficulty, Desmos graphing calculator shortcuts, and high-yield reading inference strategies with proven 1500+ scorers.',
    image: '/images/sat_v2.webp',
    link: '/sat-preparation-sharjah',
    level: 'High School (Grades 10–12)',
    duration: '40–60 Hours Intensive',
    features: [
      'Official Bluebook Adaptive Diagnostic Simulations',
      'Desmos Speed Math & Calculator Mastery Drills',
      'Advanced Reading & Writing Passage Synthesis',
    ],
  },
  {
    id: 'jee-neet',
    category: 'undergrad',
    categoryLabel: 'Competitive Entrance',
    title: 'Foundation for JEE & NEET',
    badge: 'Engineering & Medical Entry',
    mode: 'In-Person & Hybrid',
    desc: 'Build foundational problem-solving discipline and conceptual clarity in Advanced Physics, Organic Chemistry, and Higher Mathematics for competitive entrance exams.',
    image: '/images/jee_neet_v2.webp',
    link: '/foundation-jee-neet',
    level: 'Grades 8 to 12',
    duration: 'Structured Academic Year',
    features: [
      'Rigorous Numerical Problem Sets & Proofs',
      'Concept-First Foundation in Physics & Chemistry',
      'Speed, Accuracy & Time Management Strategy',
    ],
  },
  {
    id: 'academic',
    category: 'undergrad',
    categoryLabel: 'Curriculum Support',
    title: 'Academic Excellence (IGCSE, A-Level, IB)',
    badge: 'Board Exam Mastery',
    mode: 'Micro-Group & 1-on-1',
    desc: 'Targeted academic tutoring for Cambridge CAIE, Pearson Edexcel, IB DP, and CBSE curricula across Mathematics, Physics, Chemistry, Biology, Economics, and Business Studies.',
    image: '/images/academic_v2.webp',
    link: '/academic-excellence',
    level: 'Grades 6 to 12 & Foundation',
    duration: 'Term-Based & Revision Camps',
    features: [
      'Command Word Mastery & Past Board Paper Drills',
      'Individual Diagnostic Gaps Identification',
      'Mark Scheme Criteria & Examiner Alignment',
    ],
  },
  {
    id: 'kids-robotics',
    category: 'undergrad',
    categoryLabel: 'STEM Foundation',
    title: 'AI & Robotics Foundation for Kids',
    badge: 'Future Tech · Hands-On',
    mode: 'Classroom Lab',
    desc: 'Inspire early technical curiosity with Python coding, microcontroller robotics, visual algorithms, and applied artificial intelligence for school students in Sharjah.',
    image: '/images/kids_robotics_v2.webp',
    link: '/ai-robotics-kids',
    level: 'Ages 8 to 16',
    duration: '30 Hours Hands-on',
    features: [
      'Python & Visual Block Coding Principles',
      'Sensor Integration & Real-World Hardware',
      'Logic Building & Creative Problem Solving',
    ],
  },

  // --- GRADUATE & BUSINESS SCHOOLS ---
  {
    id: 'gmat',
    category: 'grad',
    categoryLabel: 'Business School',
    title: 'GMAT Focus Edition Preparation',
    badge: 'Target 705+ · Top 1% Strategy',
    mode: 'Micro-Batch & 1-on-1',
    desc: 'Target elite global MBA and business master admissions with rigorous Quantitative, Verbal, and Data Insights analytical question mastery and timed pacing drills.',
    image: '/images/gmat_gre_v2.webp',
    link: '/gmat-preparation',
    level: 'Graduates & Working Professionals',
    duration: '40–50 Hours',
    features: [
      'Data Insights & Integrated Reasoning Mastery',
      'Pacing Strategy for High-Percentile Scoring',
      'Comprehensive Diagnostic Question Analysis',
    ],
  },
  {
    id: 'gre',
    category: 'grad',
    categoryLabel: 'Graduate Admissions',
    title: 'GRE General Test Preparation',
    badge: 'Target 325+ · MS & PhD Entry',
    mode: 'In-Person & Online',
    desc: 'Excel in graduate admissions to global universities with targeted Quantitative and Verbal reasoning shortcuts and Analytical Writing coaching.',
    image: '/images/course_gmat_gre_prep.webp',
    link: '/gre-preparation',
    level: 'Undergrads & Graduate Applicants',
    duration: '40 Hours',
    features: [
      'High-Yield Vocabulary & Sentence Equivalence',
      'Advanced Quantitative Problem Sets & Geometry',
      'Full-Length Computer Adaptive Test Simulations',
    ],
  },

  // --- ENGLISH PROFICIENCY EXAMS ---
  {
    id: 'ielts',
    category: 'language-exam',
    categoryLabel: 'Language Proficiency',
    title: 'IELTS Academic & General Training',
    badge: 'Band 7.5+ Target · British Council',
    mode: 'Computer & Paper-Based',
    desc: 'Sharjahs premier IELTS coaching program. Master time management, authentic Cambridge mock tests, and receive 1-on-1 criterion feedback on speaking interviews and writing tasks.',
    image: '/images/course_ielts_prep.webp',
    link: '/ielts-course',
    level: 'Target Bands 6.5 to 8.5+',
    duration: '30–45 Hours Intensive',
    features: [
      'Full-Length Timed Cambridge Mock Tests',
      '1-on-1 Certified Examiner Speaking Evaluations',
      'Band 8+ Writing Task 1 & 2 Blueprint Reviews',
    ],
  },
  {
    id: 'pte',
    category: 'language-exam',
    categoryLabel: 'Language Proficiency',
    title: 'PTE Academic Preparation',
    badge: 'Score 79+ Target · Pearson Certified',
    mode: 'AI-Simulated Labs',
    desc: 'Excel in the computer-delivered Pearson Test of English. Master proven AI scoring templates, rapid oral fluency, and memory retrieval drills for Australian, UK, and Canadian migration.',
    image: '/images/course_pte_prep.webp',
    link: '/pte-course',
    level: 'Target Scores 65 to 79+ (8+ Equivalent)',
    duration: '30 Hours Fast-Track',
    features: [
      'AI Scoring Algorithm Strategies & Templates',
      'Automated Mock Tests with Real-Time Feedback',
      'High-Scoring Speech Fluency & Pronunciation Drills',
    ],
  },
  {
    id: 'toefl',
    category: 'language-exam',
    categoryLabel: 'Language Proficiency',
    title: 'TOEFL iBT Preparation',
    badge: 'Score 100+ Target · ETS Aligned',
    mode: 'Computer-Delivered',
    desc: 'Specialized test coaching engineered for high-achieving applicants targeting elite US, Canadian, and European universities demanding competitive TOEFL iBT scores.',
    image: '/images/course_toefl_prep.webp',
    link: '/toefl-course',
    level: 'Target Scores 90 to 110+',
    duration: '30–40 Hours',
    features: [
      'Integrated Speaking & Listening Synthesis Drills',
      'Academic Reading Inference & Vocabulary Techniques',
      'Timed Essay Structuring for Maximum Rubric Points',
    ],
  },
];

export default function TestPreparations() {
  const [activeFilter, setActiveFilter] = useState('all');
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const localizedCourses = testPrepCourses.map((course) => {
    if (isAr && COURSE_ARABIC_MAP[course.id]) {
      const ar = COURSE_ARABIC_MAP[course.id];
      return {
        ...course,
        title: ar.title || course.title,
        badge: ar.badge || course.badge,
        mode: ar.mode || course.mode,
        desc: ar.desc || course.desc,
        level: ar.level || course.level,
        duration: ar.duration || course.duration,
        categoryLabel: ar.categoryLabel || course.categoryLabel,
        features: ar.features || course.features,
      };
    }
    return course;
  });

  const filteredCourses = localizedCourses.filter((course) => {
    if (activeFilter === 'all') return true;
    return course.category === activeFilter;
  });

  return (
    <main className="lt-page">
      <SEO />

      {/* Hero Section */}
      <section className="lt-hero">
        <div className="container">
          <div className="lt-hero-grid">
            <div className="lt-hero-content">
              <nav className="lt-breadcrumbs" aria-label="Breadcrumbs">
                <Link to="/">{isAr ? 'الرئيسية' : 'Home'}</Link>
                <span className="sep">/</span>
                <Link to="/courses">{isAr ? 'الدورات' : 'Courses'}</Link>
                <span className="sep">/</span>
                <span>{isAr ? 'التحضير للاختبارات' : 'Test Preparation'}</span>
              </nav>

              <span className="lt-hero-badge">
                <Sparkles size={14} /> {isAr ? 'التحضير للاختبارات الدولية المعيارية · الشارقة وعبر الإنترنت' : 'STANDARDIZED TEST PREPARATION · SHARJAH & ONLINE'}
              </span>

              <h1>
                {isAr ? (
                  <>حقق قبولك في أرقى الجامعات مع <span className="lt-gradient-text">نخبة برامج التحضير</span></>
                ) : (
                  <>Unlock Top University Admissions with <span className="lt-gradient-text">Elite Test Prep</span></>
                )}
              </h1>

              <p className="lt-hero-intro">
                {isAr
                  ? 'احصل على أعلى الدرجات في اختبارات Digital SAT و IELTS و GMAT و GRE و TOEFL و PTE مع تدريب تشخيصي فردي، ونماذج محاكاة رسمية، ومتابعة دقيقة في المجاز 3 بالشارقة.'
                  : 'Achieve high-percentile scores on the Digital SAT, GMAT, GRE, IELTS, TOEFL, and PTE. Individualized diagnostic pacing, authentic computer-based mock exams, and strategic mentorship in Al Majaz 3, Sharjah.'}
              </p>

              <div className="lt-hero-pills">
                <span className="lt-pill">
                  <Target size={14} /> {isAr ? 'درجة 1500+ مستهدفة في SAT' : '1500+ Digital SAT Benchmark'}
                </span>
                <span className="lt-pill">
                  <BarChart2 size={14} /> {isAr ? 'تقييم تشخيصي أولي لتحديد المستوى' : 'Baseline Diagnostic Assessment'}
                </span>
                <span className="lt-pill">
                  <Clock size={14} /> {isAr ? 'نماذج امتحانات محاكاة رسمية محددة بوقت' : 'Official Timed Mock Simulations'}
                </span>
                <span className="lt-pill">
                  <Users size={14} /> {isAr ? 'مجموعات مصغرة ومتابعة فردية 1-على-1' : 'Micro-Batches & 1-on-1 Mentorship'}
                </span>
              </div>

              <div className="lt-hero-actions">
                <a href="#test-prep" className="lt-btn lt-btn-primary">
                  {isAr ? 'استكشف دورات التحضير ↓' : 'Explore Test Prep Courses ↓'}
                </a>
                <Link to="/sat/diagnostic" className="lt-btn lt-btn-secondary">
                  <BarChart2 size={15} /> {isAr ? 'اختبار تشخيصي مجاني لـ SAT' : 'Free SAT Diagnostic'}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'listing_test_prep')}
                >
                  <MessageSquare size={15} /> {isAr ? 'واتساب مستشار الاختبارات' : 'WhatsApp Test Prep Advisor'}
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lt-hero-media">
              <div className="lt-hero-image-wrap">
                <img
                  src="/images/sat_hero_student_editorial.webp"
                  alt="Student preparing for standardized testing with official materials at Nitaq Academy Sharjah"
                  loading="eager"
                />
                <div className="lt-hero-overlay-scrim" />
                <div className="lt-hero-float-badge">
                  <div className="lt-float-icon">
                    <Target size={22} />
                  </div>
                  <div>
                    <div className="lt-float-title">
                      {isAr ? 'تحسن مثبت وملموس في النتائج' : 'Proven Score Improvement'}
                    </div>
                    <div className="lt-float-desc">
                      {isAr ? 'متوسط زيادة 150+ نقطة في SAT و Band 7.5+ في IELTS' : 'Average 150+ SAT point gain & Band 7.5+ IELTS results'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Accreditation Strip */}
      <section className="lt-partners-strip" aria-label="Testing Partners and Accreditations">
        <div className="container">
          <div className="lt-partners-inner">
            <span className="lt-partners-label">
              {isAr ? 'أطر التحضير وشراكات الاختبارات المعتمدة' : 'Testing & Preparation Partners'}
            </span>
            <div className="lt-partners-logos">
              <div className="lt-partner-item">
                <img src="/images/partner_british_council.webp" alt="British Council" loading="lazy" />
                <span>{isAr ? 'شريك المجلس الثقافي البريطاني' : 'British Council Partner'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_ielts.webp" alt="IELTS" loading="lazy" />
                <span>{isAr ? 'تدريب معتمد لاختبار IELTS' : 'Official IELTS Prep'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_pearson.webp" alt="Pearson PTE" loading="lazy" />
                <span>{isAr ? 'تدريب Pearson PTE معتمد' : 'Pearson PTE Certified'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_toefl.webp" alt="ETS TOEFL" loading="lazy" />
                <span>{isAr ? 'اختبار ETS TOEFL iBT' : 'ETS TOEFL iBT'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/spea.webp" alt="SPEA" loading="lazy" />
                <span>{isAr ? 'مرخص من SPEA الشارقة' : 'SPEA Licensed Training'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Test Prep Catalog */}
      <section id="test-prep" className="lt-catalog-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              {isAr ? 'اختر الاختبار المستهدف' : 'CHOOSE YOUR EXAMINATION'}
            </p>
            <h2>
              {isAr ? 'مسارات التحضير للاختبارات الدولية' : 'Standardized Test Preparation Tracks'}
            </h2>
            <p>
              {isAr
                ? 'تحقيق أعلى الدرجات في امتحانات القبول يتطلب استراتيجيات سرعة إدارة الوقت، وتحليل الأخطاء، والتدريب المكثف في بيئة اختبار حقيقية.'
                : 'Scoring high on entrance and proficiency examinations requires more than just memorizing content. It demands timing strategy, error-pattern recognition, and rigorous practice under real test conditions.'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="lt-filter-wrap" role="tablist" aria-label="Test Prep Category Filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`lt-filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {isAr ? 'جميع الاختبارات' : 'All Test Preparations'} <span className="lt-filter-count">{testPrepCourses.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'undergrad'}
              className={`lt-filter-btn ${activeFilter === 'undergrad' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('undergrad')}
            >
              {isAr ? 'المرحلة الجامعية والمدارس' : 'Undergraduate Admissions'} <span className="lt-filter-count">4</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'grad'}
              className={`lt-filter-btn ${activeFilter === 'grad' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('grad')}
            >
              {isAr ? 'الدراسات العليا وإدارة الأعمال' : 'Graduate & Business Schools'} <span className="lt-filter-count">2</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'language-exam'}
              className={`lt-filter-btn ${activeFilter === 'language-exam' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('language-exam')}
            >
              {isAr ? 'اختبارات كفاءة اللغة' : 'English Proficiency Exams'} <span className="lt-filter-count">3</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="lt-cards-grid">
            {filteredCourses.map((c) => (
              <article key={c.id} className="lt-card">
                <div className="lt-card-image-wrap">
                  <img src={c.image} alt={c.title} loading="lazy" />
                  <div className="lt-card-image-overlay" />
                  <span className="lt-card-badge">{c.badge}</span>
                  <span className="lt-card-mode">{c.mode}</span>
                </div>

                <div className="lt-card-content">
                  <div className="lt-card-category">{c.categoryLabel}</div>
                  <h3 className="lt-card-title">{c.title}</h3>
                  <p className="lt-card-desc">{c.desc}</p>

                  <ul className="lt-card-features">
                    {c.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="lt-card-meta">
                    <div className="lt-card-meta-item">
                      <GraduationCap size={13} />
                      <span>{c.level}</span>
                    </div>
                    <div className="lt-card-meta-item">
                      <Clock size={13} />
                      <span>{c.duration}</span>
                    </div>
                  </div>

                  <div className="lt-card-actions">
                    <Link to={c.link} className="lt-card-btn-view">
                      <span>{isAr ? 'استكشف الدورة' : 'Explore Course'}</span>
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً أكاديمية نطاق، أود الاستفسار عن ${c.title}` : `Hello Nitaq Academy, I would like to enquire about ${c.title}.`)}`}
                      className="lt-card-btn-wa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp Enquiry for ${c.title}`}
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `test_prep_${c.id}`)}
                    >
                      <MessageSquare size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Nitaq Test Prep Advantage Section */}
      <section className="lt-why-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              {isAr ? 'منهجية أكاديمية نطاق في التحضير' : 'THE NITAQ TEST PREP METHODOLOGY'}
            </p>
            <h2>
              {isAr ? 'كيف نحقق لطلابنا أعلى الدرجات والنتائج؟' : 'How We Engineer Top-Tier Score Improvements'}
            </h2>
            <p>
              {isAr
                ? 'نبتعد عن الحفظ العشوائي؛ يخضع كل طالب لتحليل تشخيصي دقيق لتحديد نقاط القوة والضعف، تليها خطة تدريب تكيفية مركزة.'
                : 'We reject one-size-fits-all rote learning. Every student receives a diagnostic analysis of their strengths and weaknesses, followed by targeted adaptive practice.'}
            </p>
          </div>

          <div className="lt-why-grid">
            <div className="lt-why-card">
              <div className="lt-why-icon">
                <BarChart2 size={24} />
              </div>
              <h3>{isAr ? 'تقييم تشخيصي أولي شامل' : 'Baseline Diagnostic Assessment'}</h3>
              <p>
                {isAr
                  ? 'نحدد بالضبط الثغرات المفاهيمية وعقبات إدارة الوقت قبل البدء في تصميم الخطة الدراسية المخصصة لك.'
                  : 'We pinpoint your exact conceptual knowledge gaps and timing bottlenecks before designing your customized study roadmap.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Clock size={24} />
              </div>
              <h3>{isAr ? 'محاكاة بظروف الاختبار الحقيقي' : 'Real Exam-Condition Mocks'}</h3>
              <p>
                {isAr
                  ? 'امتحانات تجريبية كاملة ومحددة بوقت رسمي على برامج الاختبار الرقمية لبناء التركيز والتحمل والتخلص من التوتر.'
                  : 'Full-length timed mock examinations delivered via adaptive digital testing software to build stamina and eliminate test-day anxiety.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Compass size={24} />
              </div>
              <h3>{isAr ? 'استراتيجيات الحل الذكي وإدارة الوقت' : 'Adaptive Pacing & Strategy'}</h3>
              <p>
                {isAr
                  ? 'تعلم اختصارات واضعي الاختبارات، وحيل الآلة الحاسبة، واستبعاد الإجابات غير المنطقية لرفع معدل السرعة والدقة.'
                  : 'Learn official question-type shortcuts, Desmos tricks, process of elimination, and time-management heuristics used by top scorers.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Users size={24} />
              </div>
              <h3>{isAr ? 'مجموعات مصغرة (4 إلى 8 طلاب)' : 'Micro-Batches (4 to 8 Students)'}</h3>
              <p>
                {isAr
                  ? 'تحليل فردي لكل خطأ مع شرح تفصيلي لكيفية تجنب الوقوع في فخ السؤال بالاختبار الحقيقي.'
                  : 'Individualized review of every error. Our instructors analyze why you missed each question and how to avoid the trap next time.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic & Consultation CTA Banner */}
      <section className="lt-cta-section">
        <div className="container">
          <div className="lt-cta-banner">
            <div className="lt-cta-content">
              <h2>
                {isAr ? 'اكتشف مستواك ودرجتك التقديرية الحالية' : 'Find Out Your Current Baseline Score'}
              </h2>
              <p>
                {isAr
                  ? 'ابدأ اختبار Digital SAT التشخيصي الكامل مجاناً، أو احجز استشارة خاصة مع خبراء التحضير في برج أبو خمسين، المجاز 3، الشارقة.'
                  : 'Take our free full-length Digital SAT diagnostic or schedule a 1-on-1 test prep consultation with our senior strategy team at Abu Khamseen Tower, Al Majaz 3, Sharjah.'}
              </p>
              <div className="lt-cta-actions">
                <Link to="/sat/diagnostic" className="lt-btn lt-btn-primary">
                  {isAr ? 'ابدأ اختبار SAT التشخيصي المجاني' : 'Start Free SAT Diagnostic'}
                </Link>
                <Link to="/enquiry" className="lt-btn lt-btn-secondary">
                  {isAr ? 'حجز استشارة حضورية' : 'Book In-Person Consultation'}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'test_prep_cta_banner')}
                >
                  <MessageSquare size={15} /> {isAr ? 'واتساب: 9908 756 52 971+' : 'WhatsApp: +971 52 756 9908'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
