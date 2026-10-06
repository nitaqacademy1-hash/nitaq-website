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
  TrendingUp,
  Briefcase,
  FileCheck2,
} from 'lucide-react';

const professionalCourses = [
  // --- FINANCE & ACCOUNTING ---
  {
    id: 'acca',
    category: 'finance',
    categoryLabel: 'Finance & Accounting',
    title: 'ACCA Qualification',
    badge: 'Global Chartered Accountant',
    mode: 'In-Person & Online',
    desc: 'Attain the gold standard in global accounting and finance. Master financial management, auditing, taxation, and strategic business reporting with qualified practitioners.',
    image: '/images/acca_v2.webp',
    link: '/acca-course',
    level: 'Applied Knowledge, Skills & Strategic',
    duration: 'Modular Exam Tracks',
    features: [
      'Comprehensive Past Paper Drills & Exam Kits',
      'Taught by Qualified ACCA & CMA Practitioners',
      'Flexible Evening & Weekend Batches in Sharjah',
    ],
  },
  {
    id: 'cma',
    category: 'finance',
    categoryLabel: 'Finance & Accounting',
    title: 'CMA (Certified Management Accountant)',
    badge: 'IMA USA Aligned',
    mode: 'In-Person & Online',
    desc: 'Master strategic financial planning, corporate performance analytics, cost accounting, and executive decision analysis to accelerate into senior leadership roles.',
    image: '/images/cma_cpa_v2.webp',
    link: '/cma-course',
    level: 'Part 1 & Part 2 Comprehensive',
    duration: '4–6 Months Per Part',
    features: [
      'Corporate Financial Planning & Control',
      'Essay & Multiple-Choice Question Simulations',
      'UAE Corporate Case Studies & Real Scenarios',
    ],
  },
  {
    id: 'cpa',
    category: 'finance',
    categoryLabel: 'Finance & Accounting',
    title: 'CPA (Certified Public Accountant)',
    badge: 'AICPA Gold Standard',
    mode: 'In-Person & Online',
    desc: 'Achieve the premier credential in public accounting. Thorough preparation across Auditing, Financial Accounting & Reporting, and Regulation.',
    image: '/images/cpa_v2.webp',
    link: '/cpa-course',
    level: 'Audit, FAR, REG & Disciplines',
    duration: 'Comprehensive Syllabus',
    features: [
      'Rigorous AICPA Blueprint Question Coverage',
      'Case Study Analysis & Technical Simulations',
      'Individual Study Roadmaps for Working Adults',
    ],
  },
  {
    id: 'corp-tax',
    category: 'finance',
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
    category: 'finance',
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

  // --- TECH, AI & DATA ---
  {
    id: 'ai-ml',
    category: 'tech',
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
    category: 'tech',
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
    id: 'cybersecurity',
    category: 'tech',
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
    id: 'data-mgmt',
    category: 'tech',
    categoryLabel: 'Tech & Digital',
    title: 'Data Management & Business Systems',
    badge: 'Database & Governance',
    mode: 'In-Person & Online',
    desc: 'Learn essential skills for organizing, securing, auditing, and managing organizational data repositories across modern enterprise architectures.',
    image: '/images/data_mgmt_v2.webp',
    link: '/data-management',
    level: 'Data Analysts & IT Administrators',
    duration: '28 Hours',
    features: [
      'Relational Database Modeling & SQL Queries',
      'Data Governance, Privacy & Security Protocols',
      'Enterprise Storage & Backup Architecture',
    ],
  },

  // --- BUSINESS & MANAGEMENT ---
  {
    id: 'digital-mktg',
    category: 'business',
    categoryLabel: 'Marketing & Growth',
    title: 'Professional Digital Marketing Course',
    badge: 'UAE Market Focus',
    mode: 'Live Agency Projects',
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
    id: 'marketing-pro',
    category: 'business',
    categoryLabel: 'Marketing & Growth',
    title: 'Professional Marketing & Brand Strategy',
    badge: 'Brand Architecture',
    mode: 'In-Person & Online',
    desc: 'Learn strategic marketing, brand identity building, consumer psychology, and integrated campaign planning from foundational concepts to executive execution.',
    image: '/images/marketing_v2.webp',
    link: '/professional-marketing-course',
    level: 'All Levels',
    duration: '32 Hours',
    features: [
      'Consumer Behavior & Brand Positioning Models',
      'Omnichannel Campaign Budgeting & Metrics',
      'Product Launch & Market Penetration Strategies',
    ],
  },
  {
    id: 'sales-negotiation',
    category: 'business',
    categoryLabel: 'Sales & Commercial',
    title: 'Executive Sales & Negotiations',
    badge: 'Revenue Acceleration',
    mode: 'Interactive Masterclass',
    desc: 'Master high-stakes B2B sales cycles, objection handling, psychological persuasion, and win-win contract negotiation strategies for corporate growth.',
    image: '/images/sales_v2.webp',
    link: '/sales-negotiations',
    level: 'Sales Executives & Business Heads',
    duration: '24 Hours',
    features: [
      'Consultative B2B Selling Frameworks',
      'Objection Neutralization & Closing Scripts',
      'High-Stakes Contract Negotiation Simulations',
    ],
  },
  {
    id: 'chrm',
    category: 'business',
    categoryLabel: 'Human Resources',
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
    id: 'hrm-pro',
    category: 'business',
    categoryLabel: 'Human Resources',
    title: 'Human Resource Management (HRM)',
    badge: 'Core HR Competencies',
    mode: 'In-Person & Online',
    desc: 'Comprehensive training covering all operational aspects of human resources—from recruitment and payroll administration to employee relations and training.',
    image: '/images/hrm_pro_v2.webp',
    link: '/hrm-courses',
    level: 'HR Assistants to Officers',
    duration: '30 Hours',
    features: [
      'Recruitment, Onboarding & Talent Pipelines',
      'WPS Payroll & Employee Records Management',
      'Workplace Conflict Resolution & Culture',
    ],
  },
  {
    id: 'cpcd',
    category: 'business',
    categoryLabel: 'Career Development',
    title: 'CPCD Professional Career Development',
    badge: 'Career Mobility',
    mode: 'Mentorship Track',
    desc: 'Continuous Professional Career Development programs focused on long-term leadership skills, corporate adaptability, and executive career progression.',
    image: '/images/cpcd_v2.webp',
    link: '/cpcd-courses',
    level: 'Mid-Career Professionals',
    duration: 'Flexible Modular Program',
    features: [
      'Executive Leadership & Decision Frameworks',
      'Personal Branding & Executive Presence',
      'Career Roadmapping & Mentorship Support',
    ],
  },
  {
    id: 'soft-skills',
    category: 'business',
    categoryLabel: 'Leadership & Soft Skills',
    title: 'Executive Soft Skills & Communication',
    badge: 'Corporate Excellence',
    mode: 'Interactive Workshops',
    desc: 'Enhance your workplace impact with targeted coaching in business etiquette, public speaking, active listening, cross-cultural collaboration, and emotional intelligence.',
    image: '/images/soft_skills_v2.webp',
    link: '/soft-skills-training',
    level: 'Corporate Teams & Professionals',
    duration: '20 Hours Interactive',
    features: [
      'Persuasive Business Presentations & Pitching',
      'Cross-Cultural Team Communication in the UAE',
      'Conflict Mediation & Executive Presence',
    ],
  },
];

export default function ProfessionalCertifications() {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const [activeFilter, setActiveFilter] = useState('all');

  const localizedCourses = professionalCourses.map((c) => {
    if (!isAr) return c;
    const arData = COURSE_ARABIC_MAP[c.id];
    return {
      ...c,
      title: arData?.title || c.title,
      badge: arData?.badge || c.badge,
      mode: arData?.mode || (c.mode === 'In-Person & Online' ? 'حضوري وعبر الإنترنت' : c.mode),
      desc: arData?.desc || c.desc,
      categoryLabel: arData?.categoryLabel || c.categoryLabel,
      level: arData?.level || c.level,
      duration: arData?.duration || c.duration,
      features: arData?.features || c.features,
    };
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
                <span>{isAr ? 'الشهادات المهنية' : 'Professional Certifications'}</span>
              </nav>

              <span className="lt-hero-badge">
                <Sparkles size={14} /> {isAr ? 'مؤهلات مهنية معتمدة · الشارقة وعبر الإنترنت' : 'ACCREDITED PROFESSIONAL QUALIFICATIONS · SHARJAH & ONLINE'}
              </span>

              <h1>
                {isAr ? (
                  <>طوّر مسارك المهني مع <span className="lt-gradient-text">شهادات مهنية عالمية معتمدة</span></>
                ) : (
                  <>Fast-Track Your Career with <span className="lt-gradient-text">Global Certifications</span></>
                )}
              </h1>

              <p className="lt-hero-intro">
                {isAr
                  ? 'احصل على أرقى المؤهلات المعتمدة في المحاسبة والمالية والذكاء الاصطناعي والتسويق الرقمي وإدارة الموارد البشرية، بإشراف نخبة من الخبراء الممارسين مع جداول مسائية ونهاية أسبوع مرنة في المجاز 3، الشارقة.'
                  : 'Gain universally respected accounting, finance, AI, digital marketing, and management qualifications. Taught by seasoned corporate practitioners with flexible weekend and evening batches in Al Majaz 3, Sharjah.'}
              </p>

              <div className="lt-hero-pills">
                <span className="lt-pill">
                  <Award size={14} /> {isAr ? 'مؤهلات ACCA و CMA و CPA الدولية' : 'ACCA, CMA & CPA Qualifications'}
                </span>
                <span className="lt-pill">
                  <FileCheck2 size={14} /> {isAr ? 'امتثال ضريبة الشركات والقيمة المضافة UAE Tax' : 'UAE Corporate Tax & VAT Compliant'}
                </span>
                <span className="lt-pill">
                  <Clock size={14} /> {isAr ? 'فصول مسائية ونهاية الأسبوع للموظفين' : 'Weekend Masterclasses & Evenings'}
                </span>
                <span className="lt-pill">
                  <Briefcase size={14} /> {isAr ? 'دراسات حالة ومشاريع تطبيقية واقعية' : 'Corporate Case Studies & Projects'}
                </span>
              </div>

              <div className="lt-hero-actions">
                <a href="#certifications" className="lt-btn lt-btn-primary">
                  {isAr ? 'استعرض جميع الشهادات ↓' : 'View All Certifications ↓'}
                </a>
                <Link to="/enquiry" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={15} /> {isAr ? 'طلب خطة الدراسة والرسوم' : 'Request Syllabus & Fees'}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'listing_pro_certifications')}
                >
                  <MessageSquare size={15} /> {isAr ? 'استشارة فورية عبر واتساب' : 'WhatsApp Advisor'}
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lt-hero-media">
              <div className="lt-hero-image-wrap">
                <img
                  src="/images/course_acca_finance.webp"
                  alt={isAr ? 'محاضرة تدريب مالي ومحاسبة مهنية في أكاديمية نطاق الشارقة' : 'Professional finance and corporate accounting lecture at Nitaq Academy Sharjah'}
                  loading="eager"
                />
                <div className="lt-hero-overlay-scrim" />
                <div className="lt-hero-float-badge">
                  <div className="lt-float-icon">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <div className="lt-float-title">{isAr ? 'تطوير مهني عالي القيمة والطلب' : 'High-ROI Career Upskilling'}</div>
                    <div className="lt-float-desc">{isAr ? 'محاكاة واقعية لبيئات الأعمال وشهادات معتمدة' : 'Practical corporate simulations & verified certifications'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Accreditation Strip */}
      <section className="lt-partners-strip" aria-label="Accreditations and Professional Partners">
        <div className="container">
          <div className="lt-partners-inner">
            <span className="lt-partners-label">{isAr ? 'جهات الاعتماد والشركاء الدوليين' : 'Global Bodies & Accreditations'}</span>
            <div className="lt-partners-logos">
              <div className="lt-partner-item">
                <img src="/images/partner_acca.webp" alt="ACCA Tuition" loading="lazy" />
                <span>{isAr ? 'مناهج ACCA المعتمدة' : 'ACCA Syllabus Provider'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_pearson.webp" alt="Pearson" loading="lazy" />
                <span>{isAr ? 'اعتماد بيرسون الدولي' : 'Pearson Assured'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/spea.webp" alt="SPEA Licensed" loading="lazy" />
                <span>{isAr ? 'ترخيص هيئة الشارقة للتعليم الخاص' : 'SPEA Licensed Training'}</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_british_council.webp" alt="British Council" loading="lazy" />
                <span>{isAr ? 'شريك المجلس الثقافي البريطاني' : 'British Council Partner'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Certifications Catalog */}
      <section id="certifications" className="lt-catalog-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">{isAr ? 'اختر مسارك المهني التخصصي' : 'CHOOSE YOUR PROFESSIONAL TRACK'}</p>
            <h2>{isAr ? 'استكشف الشهادات والبرامج المهنية المعتمدة' : 'Explore Accredited Certifications'}</h2>
            <p>
              {isAr
                ? 'في سوق العمل التنافسي بدولة الإمارات، تحتاج الخبرة إلى توثيق عبر شهادات معتمدة عالمياً. اختر مجالك التخصصي للاطلاع على الوحدات التدريبية ومواعيد البرامج القادمة.'
                : 'In today\'s competitive UAE corporate landscape, practical experience must be validated by universally respected credentials. Select your domain to explore detailed modules and upcoming schedules.'}
            </p>
          </div>

          {/* Filter Bar */}
          <div className="lt-filter-wrap" role="tablist" aria-label="Certification Category Filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`lt-filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {isAr ? 'جميع الشهادات المهنية' : 'All Certifications'} <span className="lt-filter-count">{professionalCourses.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'finance'}
              className={`lt-filter-btn ${activeFilter === 'finance' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('finance')}
            >
              {isAr ? 'المالية والضرائب والمحاسبة' : 'Finance, Tax & Accounting'} <span className="lt-filter-count">5</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'tech'}
              className={`lt-filter-btn ${activeFilter === 'tech' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('tech')}
            >
              {isAr ? 'التكنولوجيا والذكاء الاصطناعي والبيانات' : 'Tech, AI & Analytics'} <span className="lt-filter-count">4</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'business'}
              className={`lt-filter-btn ${activeFilter === 'business' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('business')}
            >
              {isAr ? 'إدارة الأعمال والتسويق والموارد البشرية' : 'Business, Marketing & HR'} <span className="lt-filter-count">7</span>
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
                      <span>{isAr ? 'تفاصيل البرنامج' : 'Explore Course'}</span>
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً أكاديمية نطاق، أود الاستفسار عن ${c.title}.` : `Hello Nitaq Academy, I would like to enquire about ${c.title}.`)}`}
                      className="lt-card-btn-wa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={isAr ? `استفسار واتساب عن ${c.title}` : `WhatsApp Enquiry for ${c.title}`}
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `pro_cert_${c.id}`)}
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

      {/* The Nitaq Professional Edge Section */}
      <section className="lt-why-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">{isAr ? 'ميزة أكاديمية نطاق المهنية' : 'THE NITAQ PROFESSIONAL ADVANTAGE'}</p>
            <h2>{isAr ? 'مصممة لتلبية متطلبات سوق العمل الفعلي' : 'Built Around Real Corporate Demands'}</h2>
            <p>
              {isAr
                ? 'نربط بين المتطلبات النظرية للمناهج والواقع العملي في الشركات، لتطبيق ما تتعلمه في قاعة التدريب مباشرة في بيئة عملك.'
                : 'We bridge theoretical syllabus requirements with everyday corporate reality so that what you learn on Saturday is immediately applicable on Monday morning.'}
            </p>
          </div>

          <div className="lt-why-grid">
            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Briefcase size={24} />
              </div>
              <h3>{isAr ? 'مدربون وممارسون خبراء' : 'Practitioner-Led Faculty'}</h3>
              <p>
                {isAr
                  ? 'مدربونا خبراء ماليون واستشاريون ضريبيون ومدراء موارد بشرية يمتلكون خبرة تطبيقية واسعة في كبرى شركات الإمارات.'
                  : 'Our trainers are active senior financial controllers, tax advisors, digital strategists, and HR consultants with real-world UAE corporate track records.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <Clock size={24} />
              </div>
              <h3>{isAr ? 'مرونة تامة للموظفين والمهنيين' : 'Flexible for Working Adults'}</h3>
              <p>
                {isAr
                  ? 'فصول دراسية في عطلة نهاية الأسبوع، وجداول مسائية ميسرة، ومسارات تعليمية مدمجة عبر الإنترنت لتناسب جدول عملك.'
                  : 'Intrinsically flexible delivery with weekend masterclasses, weekday evening schedules, and hybrid online interactive classrooms so you never fall behind.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <FileCheck2 size={24} />
              </div>
              <h3>{isAr ? 'مطابقة تامة لاحتياجات سوق الإمارات' : 'UAE Market Relevance'}</h3>
              <p>
                {isAr
                  ? 'تركيز معمق على تشريعات الهيئة الاتحادية للضرائب (FTA)، وقانون العمل الإماراتي، وحالات عملية من بيئة الأعمال المحلية.'
                  : 'Deep focus on UAE Federal Tax Authority (FTA) regulations, UAE Labour Law compliance, and local business case studies to ensure direct workplace impact.'}
              </p>
            </div>

            <div className="lt-why-card">
              <div className="lt-why-icon">
                <ShieldCheck size={24} />
              </div>
              <h3>{isAr ? 'برامج تدريبية مخصصة للمؤسسات' : 'Corporate Group Training'}</h3>
              <p>
                {isAr
                  ? 'دورات تدريبية مخصصة لفرق العمل في الشركات لتطوير مهارات موظفي المالية والمبيعات والإدارة الرقمية.'
                  : 'Tailored on-site and in-academy corporate cohorts for UAE companies seeking to upskill their finance, sales, and management departments.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions & Corporate Consultation CTA */}
      <section className="lt-cta-section">
        <div className="container">
          <div className="lt-cta-banner">
            <div className="lt-cta-content">
              <h2>{isAr ? 'هل أنت مستعد لتسريع نموك المهني والارتقاء بوظيفتك؟' : 'Ready to Accelerate Your Career Mobility?'}</h2>
              <p>
                {isAr
                  ? 'تواصل مع مستشارينا في برج أبو خمسين، المجاز 3، الشارقة. نساعدك في اختيار البرنامج المناسب، والاطلاع على الرسوم ومواعيد الامتحانات القادمة.'
                  : 'Speak with our corporate admissions advisors at Abu Khamseen Tower, Al Majaz 3, Sharjah. We can discuss upcoming batch dates, fee plans, exam registration windows, and corporate training packages.'}
              </p>
              <div className="lt-cta-actions">
                <Link to="/enquiry" className="lt-btn lt-btn-primary">
                  {isAr ? 'طلب خطة الدراسة والرسوم' : 'Request Course Syllabus & Fees'}
                </Link>
                <a href="tel:+971527569908" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={15} /> {isAr ? 'اتصل بنا: 9908 756 52 971+' : 'Call: +971 52 756 9908'}
                </a>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'pro_cert_cta_banner')}
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
