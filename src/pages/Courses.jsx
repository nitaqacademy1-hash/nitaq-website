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
  Globe2,
  BookOpen,
} from 'lucide-react';

const allCourses = [
  // --- TEST PREPARATION ---
  {
    id: 'sat',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'Digital SAT Preparation',
    badge: 'Flagship · Benchmark 1500+',
    mode: 'In-Person & Online',
    desc: 'Master the Digital SAT with data-driven diagnostic question sets, official Desmos & adaptive test drills, and personalized score-improvement milestones.',
    image: '/images/sat_v2.webp',
    link: '/sat-preparation-sharjah',
    level: 'High School (Grades 10–12)',
    duration: '40–60 Hours Intensive',
    features: [
      'Official Bluebook Adaptive Diagnostic Testing',
      'Desmos Calculator & Speed Math Techniques',
      'Advanced Reading & Writing Passage Synthesis',
    ],
  },
  {
    id: 'ielts',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'IELTS Academic & General',
    badge: 'Band 7.5+ Target · British Council',
    mode: 'In-Person & Online',
    desc: 'Achieve your required band score for global university admissions and immigration with timed Cambridge mocks and certified speaking reviews.',
    image: '/images/course_ielts_prep.webp',
    link: '/ielts-course',
    level: 'All Language Levels',
    duration: '30–45 Hours',
    features: [
      'Full-Length Timed Cambridge Mock Tests',
      '1-on-1 Certified Examiner Speaking Drills',
      'Writing Task 1 & 2 Blueprint Optimization',
    ],
  },
  {
    id: 'gmat',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'GMAT Focus Preparation',
    badge: 'Target 705+ · Business Schools',
    mode: 'Micro-Batch & 1-on-1',
    desc: 'Target elite MBA and business masters admissions with rigorous Quantitative, Verbal, and Data Insights analytical question mastery.',
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
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'GRE General Preparation',
    badge: 'Score 325+ Target · MS & PhD',
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
  {
    id: 'toefl',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'TOEFL iBT Coaching',
    badge: 'Score 100+ Target · ETS Aligned',
    mode: 'Computer-Delivered',
    desc: 'Specialized test coaching designed for students targeting North American and international universities requiring top TOEFL iBT benchmark scores.',
    image: '/images/course_toefl_prep.webp',
    link: '/toefl-course',
    level: 'Target Scores 90 to 110+',
    duration: '30–40 Hours',
    features: [
      'Integrated Speaking & Listening Synthesis',
      'Academic Reading Inference Strategies',
      'Timed Essay Structuring for Rubric Points',
    ],
  },
  {
    id: 'pte',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'PTE Academic Preparation',
    badge: 'Score 79+ Target · Pearson Certified',
    mode: 'AI-Simulated Labs',
    desc: 'Master the computer-delivered Pearson Test of English with proven scoring templates, automated speech recognition tricks, and rapid memory recall.',
    image: '/images/course_pte_prep.webp',
    link: '/pte-course',
    level: 'Target Scores 65 to 79+',
    duration: '30 Hours Fast-Track',
    features: [
      'AI Scoring Algorithm Strategies & Templates',
      'Automated Mock Tests with Real-Time Feedback',
      'Rapid Speech Fluency & Pronunciation Drills',
    ],
  },
  {
    id: 'jee-neet',
    category: 'testprep',
    categoryLabel: 'Test Preparation',
    title: 'Foundation for JEE / NEET',
    badge: 'Engineering & Medical Entry',
    mode: 'In-Person & Hybrid',
    desc: 'Build foundational problem-solving discipline and conceptual clarity in Physics, Chemistry, and Advanced Mathematics for competitive entrance exams.',
    image: '/images/jee_neet_v2.webp',
    link: '/foundation-jee-neet',
    level: 'Grades 8 to 12',
    duration: 'Structured Academic Track',
    features: [
      'Rigorous Numerical Problem Sets & Proofs',
      'Concept-First Foundation in Physics & Chemistry',
      'Speed, Accuracy & Time Management Strategy',
    ],
  },
  {
    id: 'kids-robotics',
    category: 'testprep',
    categoryLabel: 'Young Innovators',
    title: 'AI & Robotics for Kids',
    badge: 'Future Tech · Hands-On',
    mode: 'Classroom Lab',
    desc: 'Inspire early curiosity with Python programming, microcontroller robotics, visual coding, and applied artificial intelligence for young minds.',
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

  // --- PROFESSIONAL CERTIFICATIONS ---
  {
    id: 'acca',
    category: 'professional',
    categoryLabel: 'Finance & Accounting',
    title: 'ACCA Qualification',
    badge: 'Global Chartered Accountant',
    mode: 'In-Person & Online',
    desc: 'Prepare for the prestigious Association of Chartered Certified Accountants qualification with seasoned financial leaders and exam question drills.',
    image: '/images/acca_v2.webp',
    link: '/acca-course',
    level: 'Applied Knowledge, Skills & Strategic',
    duration: 'Comprehensive Syllabus Track',
    features: [
      'Complete Exam Kit & Past Paper Question Drills',
      'Taught by Qualified ACCA & CMA Practitioners',
      'Flexible Evening & Weekend Micro-Batches',
    ],
  },
  {
    id: 'cma',
    category: 'professional',
    categoryLabel: 'Finance & Accounting',
    title: 'CMA (Certified Management Accountant)',
    badge: 'IMA USA Aligned',
    mode: 'In-Person & Online',
    desc: 'Master corporate financial planning, performance analytics, strategic cost management, and decision analysis for leadership roles.',
    image: '/images/cma_cpa_v2.webp',
    link: '/cma-course',
    level: 'Part 1 & Part 2 Comprehensive',
    duration: '4–6 Months Per Part',
    features: [
      'Strategic Financial Management & Analytics',
      'Detailed Essay & Multiple Choice Question Prep',
      'UAE Corporate Context & Practical Examples',
    ],
  },
  {
    id: 'cpa',
    category: 'professional',
    categoryLabel: 'Finance & Accounting',
    title: 'CPA (Certified Public Accountant)',
    badge: 'AICPA Gold Standard',
    mode: 'In-Person & Online',
    desc: 'Attain the highest credential in public accounting with comprehensive preparation for Auditing, Financial Accounting & Reporting, and Regulation.',
    image: '/images/cpa_v2.webp',
    link: '/cpa-course',
    level: 'Audit, FAR, REG & Discipline',
    duration: 'Modular Exam Tracks',
    features: [
      'Rigorous AICPA Blueprint Question Coverage',
      'Case Study Analysis & Technical Simulations',
      'Individual Study Roadmaps for Working Adults',
    ],
  },
  {
    id: 'corp-tax',
    category: 'professional',
    categoryLabel: 'UAE Corporate Compliance',
    title: 'UAE Corporate Tax Course',
    badge: 'FTA Regulations Compliant',
    mode: 'Weekend Masterclasses',
    desc: 'Navigate the UAE Federal Corporate Tax regime with confidence. Master tax group calculations, exemptions, transfer pricing, and compliance returns.',
    image: '/images/corp_tax_v2.webp',
    link: '/uae-corporate-tax',
    level: 'Accountants, CFOs & Business Owners',
    duration: '24–30 Hours',
    features: [
      'FTA Law, Cabinet Decisions & Public Guidelines',
      'Practical Return Filing & Relief Scenarios',
      'Transfer Pricing & Corporate Group Structure',
    ],
  },
  {
    id: 'uae-vat',
    category: 'professional',
    categoryLabel: 'UAE Corporate Compliance',
    title: 'UAE VAT Diploma & Practical Filing',
    badge: 'Practical Tax Accounting',
    mode: 'In-Person & Online',
    desc: 'Master VAT registration, input tax recovery, reverse charge mechanisms, and error-free quarterly filing on the EmaraTax portal.',
    image: '/images/uae_tax_v2.webp',
    link: '/uae-vat',
    level: 'Finance Professionals & Entrepreneurs',
    duration: '20 Hours Practical',
    features: [
      'EmaraTax Portal Real-Time Simulations',
      'Input Tax Apportionment & Partial Exemption',
      'Audit Readiness & Penalty Avoidance Rules',
    ],
  },
  {
    id: 'ai-ml',
    category: 'professional',
    categoryLabel: 'Tech & Digital',
    title: 'AI & Machine Learning for Business',
    badge: 'High Demand · Practical AI',
    mode: 'Hands-On Labs',
    desc: 'Master generative AI, prompt engineering, automated workflows, and predictive analytics tools to multiply business productivity and corporate value.',
    image: '/images/ai_v2.webp',
    link: '/ai-course',
    level: 'Professionals & Decision Makers',
    duration: '36 Hours',
    features: [
      'Practical Generative AI & Automation Tools',
      'Workflow Integration & Executive Decision AI',
      'No Prior Coding Experience Required',
    ],
  },
  {
    id: 'power-bi',
    category: 'professional',
    categoryLabel: 'Tech & Digital',
    title: 'Power BI & Advanced Excel',
    badge: 'Business Intelligence',
    mode: 'In-Person & Online',
    desc: 'Transform raw corporate data into actionable executive dashboards. Master Power Query, DAX formulas, interactive data models, and automated reporting.',
    image: '/images/data_v2.webp',
    link: '/power-bi-excel',
    level: 'Intermediate to Advanced Analytics',
    duration: '30 Hours',
    features: [
      'DAX Measures & Advanced Data Modeling',
      'Interactive KPI Visualizations & Dashboards',
      'Power Query Automation & Data Cleansing',
    ],
  },
  {
    id: 'digital-mktg',
    category: 'professional',
    categoryLabel: 'Tech & Digital',
    title: 'Professional Digital Marketing',
    badge: 'UAE Market Focus',
    mode: 'Practical Agency Projects',
    desc: 'Master SEO, Meta & Google Advertising, AI-driven content generation, conversion rate optimization, and lead generation for UAE enterprises.',
    image: '/images/digital_marketing_v2.webp',
    link: '/courses/professional-digital-marketing-course-sharjah-uae',
    level: 'Entrepreneurs, Marketers & Career Changers',
    duration: '45 Hours Live Training',
    features: [
      'Live Google Ads & Meta Campaign Setup',
      'SEO Architecture & Local Search Optimization',
      'High-ROI B2B & B2C Lead Funnel Architecture',
    ],
  },
  {
    id: 'cybersecurity',
    category: 'professional',
    categoryLabel: 'Tech & Digital',
    title: 'Cybersecurity & Ethical Hacking',
    badge: 'CyberShield Certification',
    mode: 'Hands-On Virtual Labs',
    desc: 'Understand real-world vulnerability assessments, defensive network configuration, threat detection, and ethical hacking protocols for corporate safety.',
    image: '/images/cybersecurity_v2.webp',
    link: '/cybersecurity-course-sharjah',
    level: 'IT Beginners to System Admins',
    duration: '40 Hours Lab-Based',
    features: [
      'Defensive Security & Threat Mitigation Labs',
      'Penetration Testing Tools (Kali, Wireshark)',
      'Security Operations & Compliance Guidelines',
    ],
  },
  {
    id: 'chrm',
    category: 'professional',
    categoryLabel: 'Business & Management',
    title: 'CHRM (Certified Human Resource Manager)',
    badge: 'UAE Labour Law Aligned',
    mode: 'In-Person & Online',
    desc: 'Advance your strategic HR capabilities. Cover UAE Labour Law compliance, talent acquisition, performance appraisal frameworks, and organizational design.',
    image: '/images/hrm_v2.webp',
    link: '/chrm',
    level: 'HR Executives & Team Leaders',
    duration: '32 Hours',
    features: [
      'UAE Federal Labour Law Compliance & Gratuity',
      'KPI Frameworks & Performance Management',
      'Strategic Workforce Planning & Retention',
    ],
  },
  {
    id: 'sales-negotiation',
    category: 'professional',
    categoryLabel: 'Business & Management',
    title: 'Executive Sales & Negotiations',
    badge: 'Revenue Acceleration',
    mode: 'Interactive Masterclass',
    desc: 'Master high-stakes B2B sales cycles, objection handling, psychological persuasion, and win-win contract negotiation strategies for corporate growth.',
    image: '/images/sales_v2.webp',
    link: '/sales-negotiations',
    level: 'Sales Professionals & Executives',
    duration: '24 Hours',
    features: [
      'Consultative B2B Selling Frameworks',
      'Objection Neutralization & Closing Scripts',
      'High-Stakes Contract Negotiation Simulations',
    ],
  },

  // --- LANGUAGE TRAINING ---
  {
    id: 'spoken-english',
    category: 'languages',
    categoryLabel: 'Language Training',
    title: 'Spoken English Fluency',
    badge: 'CEFR A1–C2 · All Levels',
    mode: 'In-Person & Online',
    desc: 'Develop natural conversational fluency, accent clarity, and professional business English communication through interactive roleplays and native linguist feedback.',
    image: '/images/course_english_spoken.webp',
    link: '/spoken-english',
    level: 'Beginner to Advanced Speaker',
    duration: '40–60 Hours / Level',
    features: [
      'Accent Neutralization & Pronunciation Drills',
      'Workplace Presentations & Professional Vocabulary',
      'Micro Speaking Circles (4 to 8 Learners Max)',
    ],
  },
  {
    id: 'spoken-arabic',
    category: 'languages',
    categoryLabel: 'Language Training',
    title: 'Spoken Arabic (Gulf & MSA)',
    badge: 'Native Dialect & Modern Standard',
    mode: 'In-Person & Online',
    desc: 'Communicate naturally in Arabic with focus on UAE/Gulf spoken colloquial and Modern Standard Arabic for everyday social and government office interactions.',
    image: '/images/course_arabic_language.webp',
    link: '/spoken-arabic',
    level: 'Starter to Fluent Speaker',
    duration: '36–48 Hours',
    features: [
      'Everyday UAE Situational Dialogues & Etiquette',
      'Gulf Colloquial & Modern Standard Vocab',
      'Practical Speaking Focus with Native Linguists',
    ],
  },
  {
    id: 'french',
    category: 'languages',
    categoryLabel: 'Language Training',
    title: 'French Language Mastery',
    badge: 'DELF / DALF Aligned',
    mode: 'In-Person & Online',
    desc: 'Master French for global diplomacy, European university study, travel, and Canadian immigration (TEF/TCF) with structured European framework levels.',
    image: '/images/course_french_language.webp',
    link: '/french',
    level: 'DELF A1, A2, B1, B2',
    duration: '45 Hours Per Level',
    features: [
      'Interactive Speaking & Listening Immersion',
      'DELF Exam Practice & Rubric Preparation',
      'Canadian Immigration (TEF / TCF) Support',
    ],
  },
  {
    id: 'german',
    category: 'languages',
    categoryLabel: 'Language Training',
    title: 'German Language Training',
    badge: 'Goethe-Institut Aligned',
    mode: 'In-Person & Online',
    desc: 'Accelerate your career and higher education pathways in Germany with structured German grammar, vocabulary retention, and official Goethe certification preparation.',
    image: '/images/course_german_language.webp',
    link: '/german',
    level: 'Goethe Levels A1 to B2',
    duration: '50 Hours Per Level',
    features: [
      'Structured Grammar & Sentence Architecture',
      'Official Goethe-Zertifikat Exam Coaching',
      'German University Admissions Pathway Prep',
    ],
  },
  {
    id: 'spanish',
    category: 'languages',
    categoryLabel: 'Language Training',
    title: 'Spanish Language Training',
    badge: 'DELE Aligned',
    mode: 'In-Person & Online',
    desc: 'Learn one of the worlds most widely spoken languages through an engaging communicative curriculum that builds spontaneous conversational fluency from day one.',
    image: '/images/course_spanish_language.webp',
    link: '/spanish',
    level: 'DELE Levels A1 to B2',
    duration: '40 Hours Per Level',
    features: [
      'Spontaneous Dialogue & Listening Immersion',
      'Practical Travel & Global Business Scenarios',
      'Official DELE Examination Certification',
    ],
  },

  // --- ACADEMIC & SUBJECT TUITION ---
  {
    id: 'academic-excellence',
    category: 'academic',
    categoryLabel: 'Academic Support',
    title: 'School & Tertiary Subject Tuition',
    badge: 'IGCSE · A-Level · IB · CBSE',
    mode: 'In-Person & Live Online',
    desc: 'Focused subject tutoring across Mathematics, Sciences, Business, Economics, and Accountancy. Small micro-groups of 5–8 students or 1-on-1 private mentoring in Sharjah.',
    image: '/images/course_academic_tuition.webp',
    link: '/academic-excellence',
    level: 'Grades 6–12 & University Undergraduates',
    duration: 'Term-Based & Intensive Revision',
    features: [
      'Command Word Mastery & Past Board Paper Drills',
      'Specialist Faculty for Mathematics & Sciences',
      'Individual Diagnostic Gaps Identification',
    ],
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');
  const { lang } = useLanguage();
  const isAr = lang === 'ar';

  const localizedCourses = allCourses.map((course) => {
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
    if (activeTab === 'all') return true;
    return course.category === activeTab;
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
                <span>{isAr ? 'الدورات والبرامج' : 'Courses & Programs'}</span>
              </nav>

              <span className="lt-hero-badge">
                <Sparkles size={14} /> {isAr ? 'التميز الأكاديمي والتطوير المهني في الشارقة' : 'ACADEMIC EXCELLENCE & PROFESSIONAL DEVELOPMENT'}
              </span>

              <h1>
                {isAr ? (
                  <>الدورات والبرامج في <span className="lt-gradient-text">أكاديمية نطاق</span></>
                ) : (
                  <>Courses &amp; Programs by <span className="lt-gradient-text">Nitaq Academy</span></>
                )}
              </h1>

              <p className="lt-hero-intro">
                {isAr
                  ? 'استكشف المعهد الأول في الشارقة لاختبارات القبول الدولية (SAT, IELTS, GMAT)، والشهادات المهنية المعتمدة عالمياً، وإتقان اللغات الحية، ودروس التقوية المدرسية والجامعية.'
                  : 'Explore Sharjah\'s premier institute for standardized test preparation, global professional certifications, communicative language mastery, and dedicated school & university subject tuition.'}
              </p>

              <div className="lt-hero-pills">
                <span className="lt-pill">
                  <GraduationCap size={14} /> {isAr ? 'اختبار Digital SAT والقبول الجامعي' : 'Digital SAT & Test Prep'}
                </span>
                <span className="lt-pill">
                  <Award size={14} /> {isAr ? 'شهادات ACCA و CMA والضرائب' : 'ACCA & CMA Qualifications'}
                </span>
                <span className="lt-pill">
                  <Globe2 size={14} /> {isAr ? '5 لغات حية عالمية' : '5 Global Languages'}
                </span>
                <span className="lt-pill">
                  <Users size={14} /> {isAr ? 'مجموعات مصغرة في المجاز 3 بالشارقة' : 'Micro-Batches in Al Majaz 3'}
                </span>
              </div>

              <div className="lt-hero-actions">
                <a href="#catalog" className="lt-btn lt-btn-primary">
                  {isAr ? 'استكشف دليل الدورات ↓' : 'Explore Catalogue ↓'}
                </a>
                <Link to="/enquiry" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={15} /> {isAr ? 'حجز تقييم تشخيصي مجاني' : 'Book Academic Diagnostic'}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'courses_hub_hero')}
                >
                  <MessageSquare size={15} /> {isAr ? 'واتساب شؤون القبول' : 'WhatsApp Admissions'}
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lt-hero-media">
              <div className="lt-hero-image-wrap">
                <img
                  src="/images/nitaq_classroom_wide.webp"
                  alt="Modern classroom learning environment at Nitaq Academy in Al Majaz 3, Sharjah"
                  loading="eager"
                />
                <div className="lt-hero-overlay-scrim" />
                <div className="lt-hero-float-badge">
                  <div className="lt-float-icon">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="lt-float-title">
                      {isAr ? 'معهد مرخص من هيئة الشارقة للتعليم الخاص' : 'SPEA Permitted Institute'}
                    </div>
                    <div className="lt-float-desc">
                      {isAr ? 'برج أبو خمسين، المجاز 3، الشارقة' : 'Abu Khamseen Tower, Al Majaz 3, Sharjah'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation & Accreditation Ribbon */}
      <section className="lt-partners-strip" aria-label="Accreditations and Partners">
        <div className="container">
          <div className="lt-partners-inner">
            <span className="lt-partners-label">
              {isAr ? 'الاعتمادات وشراكات الاختبارات الدولية' : 'Accreditations & Testing Partners'}
            </span>
            <div className="lt-partners-logos">
              <div className="lt-partner-item">
                <img src="/images/partner_british_council.webp" alt="British Council" loading="lazy" />
                <span>{isAr ? 'شريك المجلس الثقافي البريطاني' : 'British Council Partner'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_ielts.webp" alt="IELTS" loading="lazy" />
                <span>{isAr ? 'تدريب معتمد لاختبار IELTS' : 'IELTS Coaching'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_pearson.webp" alt="Pearson" loading="lazy" />
                <span>{isAr ? 'تدريب Pearson PTE' : 'Pearson PTE'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_toefl.webp" alt="TOEFL" loading="lazy" />
                <span>{isAr ? 'اختبار ETS TOEFL iBT' : 'ETS TOEFL iBT'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_acca.webp" alt="ACCA" loading="lazy" />
                <span>{isAr ? 'مركز تدريب مؤهل لـ ACCA' : 'ACCA Tuition Provider'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/spea.webp" alt="SPEA" loading="lazy" />
                <span>{isAr ? 'مرخص من SPEA الشارقة' : 'SPEA Licensed'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Catalogue */}
      <section id="catalog" className="lt-catalog-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              {isAr ? 'مسارات أكاديمية ومهنية مدروسة' : 'TARGETED ACADEMIC & CAREER PATHWAYS'}
            </p>
            <h2>
              {isAr ? 'نظرة شاملة على جميع البرامج' : 'All Programs at a Glance'}
            </h2>
            <p>
              {isAr
                ? 'اختر التخصص أدناه لتصفية الدورات والاطلاع على تفاصيل المناهج والبدء مع أفضل كادر تعليمي في الشارقة.'
                : 'Select a discipline below to filter our courses, review curriculum outlines, and begin your educational progression with the right support.'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="lt-filter-wrap" role="tablist" aria-label="Course Category Filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'all'}
              className={`lt-filter-btn ${activeTab === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              {isAr ? 'جميع البرامج' : 'All Programs'} <span className="lt-filter-count">{allCourses.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'testprep'}
              className={`lt-filter-btn ${activeTab === 'testprep' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('testprep')}
            >
              {isAr ? 'التحضير للاختبارات' : 'Test Preparations'} <span className="lt-filter-count">8</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'professional'}
              className={`lt-filter-btn ${activeTab === 'professional' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('professional')}
            >
              {isAr ? 'الشهادات المهنية' : 'Professional Certifications'} <span className="lt-filter-count">11</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'languages'}
              className={`lt-filter-btn ${activeTab === 'languages' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('languages')}
            >
              {isAr ? 'تدريب اللغات' : 'Language Trainings'} <span className="lt-filter-count">5</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'academic'}
              className={`lt-filter-btn ${activeTab === 'academic' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('academic')}
            >
              {isAr ? 'الدروس الأكاديمية' : 'Academic Subject Tuition'} <span className="lt-filter-count">1</span>
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
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `course_hub_${c.id}`)}
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

      {/* The Nitaq Approach Section */}
      <section className="lt-why-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              {isAr ? 'ميزة أكاديمية نطاق' : 'THE NITAQ DIFFERENCE'}
            </p>
            <h2>
              {isAr ? 'مصممة لتحقيق نتائج أكاديمية ومهنية ملموسة' : 'Built for Measurable Academic & Career Growth'}
            </h2>
            <p>
              {isAr
                ? 'نجمع بين المجموعات المصغرة، والتحليل التشخيصي، والمدربين الخبراء لضمان استثمارك الأمثل للوقت والجهد.'
                : 'We combine small micro-batches, diagnostic analytics, and expert subject specialists to ensure your learning time delivers demonstrable results.'}
            </p>
          </div>

          <div className="lt-why-grid">
            <div className="lt-why-card">
              <div className="lt-why-icon">
                <BookOpen size={24} />
              </div>
              <h3>{isAr ? 'تحديد مستوى وتشخيص دقيق' : 'Diagnostic-Led Pacing'}</h3>
              <p>
                {isAr
                  ? 'يبدأ كل طالب باختبار تقييمي دقيق لتحديد نقاط القوة والضعف قبل البدء في الخطة التدريبية المخصصة.'
                  : 'Every candidate begins with a baseline assessment to pinpoint strengths and foundational gaps before entering customized study modules.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Users size={24} />
              </div>
              <h3>{isAr ? 'مجموعات صغيرة (4 إلى 8 طلاب)' : 'Micro-Batches (4 to 8 Students)'}</h3>
              <p>
                {isAr
                  ? 'أعداد مقاعد محدودة جداً تضمن اهتماماً شخصياً لكل طالب وحل كافة الاستفسارات بمرونة تامة.'
                  : 'Strict enrollment caps guarantee individualized attention, immediate doubt resolution, and collaborative problem-solving.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Award size={24} />
              </div>
              <h3>{isAr ? 'نخبة من المدربين المعتمدين' : 'Certified Subject Faculty'}</h3>
              <p>
                {isAr
                  ? 'تعلم على أيدي أساتذة ومختصين متمرسين في مجالاتهم من مدربي SAT وACCA والمحاسبين القانونيين.'
                  : 'Learn from educators and industry practitioners with proven masteries in their disciplines—from SAT math strategists to ACCA fellows.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>{isAr ? 'مقر حديث وتعلم مرن عن بُعد' : 'Convenient Campus & Online'}</h3>
              <p>
                {isAr
                  ? 'مقر مجهز في برج أبو خمسين، المجاز 3، الشارقة، مع إمكانية الحضور التفاعلي المباشر عبر الإنترنت.'
                  : 'Modern training facility located in Abu Khamseen Tower, Al Majaz 3, Sharjah, complemented by live interactive online evening tracks.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Admissions CTA Banner */}
      <section className="lt-cta-section">
        <div className="container">
          <div className="lt-cta-banner">
            <div className="lt-cta-content">
              <h2>
                {isAr ? 'هل تبحث عن البرنامج الأنسب لأهدافك؟' : 'Not Sure Which Program Suits Your Next Step?'}
              </h2>
              <p>
                {isAr
                  ? 'تحدث مع مستشارينا الأكاديميين في المجاز 3 بالشارقة. سنساعدك في تقييم مستواك الحالي واختيار المسار المناسب لجامعتك أو مستقبلك المهني.'
                  : 'Speak with our academic counselors in Al Majaz 3, Sharjah. We will help evaluate your current academic standing, target university deadlines, or career milestones to build the ideal roadmap.'}
              </p>
              <div className="lt-cta-actions">
                <Link to="/enquiry" className="lt-btn lt-btn-primary">
                  {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak with an Academic Advisor'}
                </Link>
                <a href="tel:+971527569908" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={15} /> {isAr ? 'اتصال: 9908 756 52 971+' : 'Call: +971 52 756 9908'}
                </a>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'courses_hub_cta')}
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
