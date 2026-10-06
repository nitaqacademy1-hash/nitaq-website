import { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { useLanguage } from '../../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import '../../styles/listing-pages.css';
import {
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Clock,
  GraduationCap,
  ShieldCheck,
  PhoneCall,
  BookOpen,
  Target,
  BarChart2,
} from 'lucide-react';

const coursesData = {
  en: [
    {
      id: 'maths',
      category: 'stem',
      categoryLabel: 'Mathematics',
      title: 'Mathematics Tuition (Classes 1–12)',
      badge: 'Core STEM · Mental Math to Calculus',
      mode: 'In-Person & Online',
      desc: 'From foundational algebra in middle school to differential calculus, vectors, trigonometry, and statistics for Cambridge, Edexcel, IB, and CBSE board exams.',
      image: '/images/course_maths_tuition.webp',
      link: '/maths-tuition-sharjah',
      level: 'Classes 1 to 12 & University Foundation',
      duration: 'Term-Based & Board Revision',
      features: [
        'Cambridge IGCSE (0580/0607) & A-Level Pure/Mechanics',
        'IB Mathematics (AA & AI at HL/SL)',
        'CBSE Class 10 & 12 Standard & Basic Syllabus',
      ],
    },
    {
      id: 'physics',
      category: 'stem',
      categoryLabel: 'Natural Sciences',
      title: 'Physics Tuition (Classes 8–12)',
      badge: 'Mechanics, Electromagnetism & Waves',
      mode: 'In-Person & Online',
      desc: 'Transform abstract physical laws into intuitive understanding. Cover Newtonian mechanics, thermodynamics, electromagnetism, and atomic physics with numerical drills.',
      image: '/images/course_physics_tuition.webp',
      link: '/physics-tuition-sharjah',
      level: 'Grades 8 to 12 & Pre-Engineering',
      duration: 'Weekly Batches & Mock Camps',
      features: [
        'Cambridge IGCSE (0625) & A-Level (9702) Specialist',
        'IB DP Physics (SL & HL) Syllabus Alignment',
        'Alternative to Practical (Paper 6 ATP) Experiments',
      ],
    },
    {
      id: 'chemistry',
      category: 'stem',
      categoryLabel: 'Natural Sciences',
      title: 'Chemistry Tuition (Classes 8–12)',
      badge: 'Organic, Physical & Inorganic',
      mode: 'In-Person & Online',
      desc: 'Master stoichiometry, chemical equilibrium, organic reaction mechanisms, and periodic trends with step-by-step problem sets and mark scheme keyword alignment.',
      image: '/images/course_chemistry_tuition.webp',
      link: '/chemistry-tuition-sharjah',
      level: 'Grades 8 to 12 & Pre-Medical',
      duration: 'Term-Based & Exam Prep',
      features: [
        'Cambridge IGCSE (0620) & A-Level (9701) Past Papers',
        'IB Chemistry SL/HL Internal Assessment Support',
        'CBSE Class 11 & 12 Chemistry Organic Mechanisms',
      ],
    },
    {
      id: 'biology',
      category: 'stem',
      categoryLabel: 'Natural Sciences',
      title: 'Biology Tuition (Classes 8–12)',
      badge: 'Physiology, Genetics & Ecology',
      mode: 'In-Person & Online',
      desc: 'Master complex biological terminology, human physiology, molecular genetics, and ecological systems with clear anatomical diagrams and high-scoring essay techniques.',
      image: '/images/course_biology_tuition.webp',
      link: '/biology-tuition-sharjah',
      level: 'Grades 8 to 12 & NEET Foundation',
      duration: 'Weekly Batches & Crash Courses',
      features: [
        'Cambridge IGCSE (0610) & A-Level (9700) Specialists',
        'IB Biology SL/HL Criterion-Based Coaching',
        'Detailed Anatomical Pathways & Mark-Scheme Keywords',
      ],
    },
    {
      id: 'science-general',
      category: 'stem',
      categoryLabel: 'Natural Sciences',
      title: 'Combined & General Science (Classes 1–8)',
      badge: 'Middle School STEM Foundations',
      mode: 'In-Person & Online',
      desc: 'Nurture scientific curiosity early with inquiry-based learning covering core concepts across Physics, Chemistry, and Living World Biology before senior board years.',
      image: '/images/course_science_tuition.webp',
      link: '/science-tuition-sharjah',
      level: 'Classes 1 to 8 & Lower Secondary',
      duration: 'Structured Academic Track',
      features: [
        'British Curriculum Key Stage 2 & 3 (KS2/KS3)',
        'Cambridge Lower Secondary Science Checkpoint',
        'Inquiry-Driven Problem Solving & Experimentation',
      ],
    },
    {
      id: 'business',
      category: 'commerce',
      categoryLabel: 'Commerce & Management',
      title: 'Business Studies Tuition',
      badge: 'IGCSE, A-Level, IB & CBSE',
      mode: 'In-Person & Online',
      desc: 'Master marketing mix strategies, corporate finance ratios, operations management, and human resources. Specialized training in structured 8-mark and 12-mark evaluation essays.',
      image: '/images/course_economics_business.webp',
      link: '/business-studies-tuition-sharjah',
      level: 'Grades 9 to 12 & University Undergrads',
      duration: 'Term-Based & Revision Camps',
      features: [
        'Cambridge IGCSE (0450) & International A-Levels',
        'IB Business Management SL/HL Case Study Analysis',
        'Real-World UAE & Global Corporate Case Studies',
      ],
    },
    {
      id: 'economics',
      category: 'commerce',
      categoryLabel: 'Commerce & Economics',
      title: 'Economics Tuition (Micro & Macro)',
      badge: 'Elasticity, Markets & Policy',
      mode: 'In-Person & Online',
      desc: 'Develop deep economic intuition covering demand-supply equilibrium, market failure, fiscal and monetary policy, exchange rates, and 4-step diagrammatic economic evaluations.',
      image: '/images/course_economics_business.webp',
      link: '/economics-tuition-sharjah',
      level: 'Grades 9 to 12 & University Undergrads',
      duration: 'Structured Academic Track',
      features: [
        'Cambridge IGCSE Economics (0455) & A-Level (9708)',
        'IB Economics SL/HL Real-World Portfolio Commentary',
        'CBSE Class 11 & 12 Micro, Macro & Indian Economy',
      ],
    },
    {
      id: 'accountancy',
      category: 'commerce',
      categoryLabel: 'Commerce & Finance',
      title: 'Accountancy Tuition',
      badge: 'Ledgers, Statements & Cashflows',
      mode: 'In-Person & Online',
      desc: 'Build rock-solid double-entry bookkeeping discipline. Master partnership accounts, company balance sheets, depreciation, cash flow statements, and financial ratio interpretation.',
      image: '/images/course_acca_finance.webp',
      link: '/accountancy-tuition-sharjah',
      level: 'Grades 9 to 12 & College Foundation',
      duration: 'Weekly Batches & Exam Camps',
      features: [
        'Cambridge IGCSE (0452) & A-Level Accounting (9706)',
        'CBSE Class 11 & 12 Accountancy Practical Ledgers',
        'Step-by-Step Ledger Problem Solving & Error Tracking',
      ],
    },
    {
      id: 'social-science',
      category: 'commerce',
      categoryLabel: 'Humanities & Social Studies',
      title: 'Social Science Tuition (History, Geog, Civics)',
      badge: 'CBSE & IGCSE Humanities',
      mode: 'In-Person & Online',
      desc: 'Structured coaching for CBSE Social Science, Cambridge History and Geography, and UAE Social Studies featuring timeline mapping, cartography map-work, and structured answers.',
      image: '/images/course_social_science.webp',
      link: '/social-science-tuition-sharjah',
      level: 'Classes 6 to 10 & Secondary Boards',
      duration: 'Term-Based & Board Prep',
      features: [
        'CBSE Class 9 & 10 Social Science Board Preparation',
        'Cambridge IGCSE History (0470) & Geography (0460)',
        'Chronological Timeline Memorization & Cartography',
      ],
    },
    {
      id: 'english-tuition',
      category: 'humanities',
      categoryLabel: 'Languages & Literature',
      title: 'English Tuition (Language & Literature)',
      badge: 'Reading Analysis & Essay Writing',
      mode: 'In-Person & Online',
      desc: 'Elevate reading comprehension, persuasive essay structuring, literary criticism, and creative writing for Cambridge, Pearson Edexcel, IB, and CBSE curricula.',
      image: '/images/course_english_tuition.webp',
      link: '/english-tuition-sharjah',
      level: 'Classes 1 to 12 & Board Candidates',
      duration: 'Weekly Batches & 1-on-1 Sessions',
      features: [
        'Cambridge IGCSE First (0500) & Second Language (0510)',
        'Unseen Passage Analysis & Critical Inference',
        'Advanced Literary Criticism for Drama, Prose & Poetry',
      ],
    },
  ],
  ar: [
    {
      id: 'maths',
      category: 'stem',
      categoryLabel: 'الرياضيات',
      title: 'دروس الرياضيات (الصفوف 1–12)',
      badge: 'تأسيس الحساب الذهني حتى التفاضل والتكامل',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'من الجبر الأساسي في المرحلة المتوسطة إلى حساب التفاضل والتكامل والمتجهات والإحصاء لامتحانات كامبريدج وإدكسل وIB وCBSE.',
      image: '/images/course_maths_tuition.webp',
      link: '/maths-tuition-sharjah',
      level: 'الصفوف 1 إلى 12 والسنة التحضيرية للجامعة',
      duration: 'برامج فصلية ومراجعات مكثفة للامتحانات',
      features: [
        'كامبريدج IGCSE (0580/0607) ومستوى A-Level (البحتة والميكانيكا)',
        'رياضيات البكالوريا الدولية (IB AA & AI بمستويي HL/SL)',
        'منهاج CBSE للصفين 10 و12 (المستوى القياسي والأساسي)',
      ],
    },
    {
      id: 'physics',
      category: 'stem',
      categoryLabel: 'العلوم الطبيعية',
      title: 'دروس الفيزياء (الصفوف 8–12)',
      badge: 'الميكانيكا والكهرومغناطيسية والأمواج',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'تحويل المفاهيم الفيزيائية المعقدة إلى فهم بديهي واضح. نغطي ميكانيكا نيوتن، والديناميكا الحرارية، والكهرومغناطيسية، والفيزياء الذرية مع حل مسائل تطبيقية.',
      image: '/images/course_physics_tuition.webp',
      link: '/physics-tuition-sharjah',
      level: 'الصفوف 8 إلى 12 والمسار التمهيدي للهندسة',
      duration: 'مجموعات أسبوعية ومعسكرات تدريب للامتحانات',
      features: [
        'تخصص مناهج كامبريدج IGCSE (0625) وA-Level (9702)',
        'منهاج فيزياء البكالوريا الدولية IB DP (بمستويي SL وHL)',
        'تدريب مكثف على تجارب ورقة بديل العملي (Paper 6 ATP)',
      ],
    },
    {
      id: 'chemistry',
      category: 'stem',
      categoryLabel: 'العلوم الطبيعية',
      title: 'دروس الكيمياء (الصفوف 8–12)',
      badge: 'الكيمياء العضوية والفيزيائية وغير العضوية',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'إتقان الحسابات الكيميائية، والاتزان الكيميائي، وآليات التفاعلات العضوية، مع مطابقة الكلمات المفتاحية في معايير التصحيح الرسمية للامتحانات.',
      image: '/images/course_chemistry_tuition.webp',
      link: '/chemistry-tuition-sharjah',
      level: 'الصفوف 8 إلى 12 والمسار التمهيدي للطب',
      duration: 'برامج فصلية ومراجعات نهائية',
      features: [
        'حل نماذج امتحانات كامبريدج IGCSE (0620) وA-Level (9701)',
        'دعم التقييم الداخلي (IA) لكيمياء البكالوريا الدولية IB',
        'آليات الكيمياء العضوية لمنهاج CBSE للصفين 11 و12',
      ],
    },
    {
      id: 'biology',
      category: 'stem',
      categoryLabel: 'العلوم الطبيعية',
      title: 'دروس الأحياء (الصفوف 8–12)',
      badge: 'وظائف الأعضاء وعلم الوراثة والبيئة',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'إتقان المصطلحات البيولوجية، ووظائف أعضاء الإنسان، وعلم الوراثة الجزيئية، مع رسوم تشريحية دقيقة وأسلوب صياغة المقالات العلمية عالية العلامات.',
      image: '/images/course_biology_tuition.webp',
      link: '/biology-tuition-sharjah',
      level: 'الصفوف 8 إلى 12 والتأسيس لاختبارات NEET',
      duration: 'مجموعات أسبوعية ومراجعات شاملة',
      features: [
        'تخصص كامبريدج IGCSE (0610) وA-Level (9700)',
        'تدريب وفق معايير تقييم البكالوريا الدولية IB SL/HL',
        'المسارات التشريحية والمصطلحات الدقيقة لنماذج الإجابة',
      ],
    },
    {
      id: 'science-general',
      category: 'stem',
      categoryLabel: 'العلوم الطبيعية',
      title: 'العلوم العامة والمتكاملة (الصفوف 1–8)',
      badge: 'تأسيس العلوم للمرحلة الابتدائية والمتوسطة',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'غرس الشغف العلمي مبكراً من خلال التعلم الاستقصائي، وتغطية المفاهيم الأساسية في الفيزياء والكيمياء وعلم الأحياء قبل مراحل الامتحانات الوزارية.',
      image: '/images/course_science_tuition.webp',
      link: '/science-tuition-sharjah',
      level: 'الصفوف 1 إلى 8 والمرحلة الإعدادية',
      duration: 'مسار أكاديمي منظم ومستمر',
      features: [
        'المنهاج البريطاني للمرحلتين التأسيسيتين KS2 وKS3',
        'استعداد لاختبار كامبريدج للمرحلة الإعدادية (Checkpoint)',
        'حل المشكلات والتجربة العلمية القائمة على الفهم',
      ],
    },
    {
      id: 'business',
      category: 'commerce',
      categoryLabel: 'التجارة وإدارة الأعمال',
      title: 'دروس دراسات الأعمال (Business Studies)',
      badge: 'IGCSE وA-Level وIB وCBSE',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'إتقان استراتيجيات المزيج التسويقي، والنسب المالية، وإدارة العمليات، والموارد البشرية، مع تدريب على الأسئلة المقالية والتقييمية (8 و12 علامة).',
      image: '/images/course_economics_business.webp',
      link: '/business-studies-tuition-sharjah',
      level: 'الصفوف 9 إلى 12 وطلاب الجامعات',
      duration: 'برامج فصلية ومعسكرات مراجعة',
      features: [
        'كامبريدج IGCSE (0450) وA-Levels الدولية',
        'تحليل دراسات الحالة لمنهاج IB Business Management',
        'دراسات حالة واقعية من شركات في الإمارات والعالم',
      ],
    },
    {
      id: 'economics',
      category: 'commerce',
      categoryLabel: 'التجارة والاقتصاد',
      title: 'دروس الاقتصاد (الجزئي والكلي)',
      badge: 'مرونة الأسعار، الأسواق، والسياسات المالية',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'بناء فهم اقتصادي متعمق يغطي توازن العرض والطلب، وفشل السوق، والسياسات المالية والنقدية، وأسعار الصرف، مع تحليل الرسوم البيانية الاقتصادية.',
      image: '/images/course_economics_business.webp',
      link: '/economics-tuition-sharjah',
      level: 'الصفوف 9 إلى 12 والسنوات الجامعية الأولى',
      duration: 'مسار أكاديمي منظم ومستمر',
      features: [
        'كامبريدج IGCSE Economics (0455) وA-Level (9708)',
        'إعداد تقارير وتعليقات اقتصادية واقعية لمنهاج IB',
        'منهاج CBSE للصفين 11 و12 (الاقتصاد الجزئي والكلي)',
      ],
    },
    {
      id: 'accountancy',
      category: 'commerce',
      categoryLabel: 'التجارة والمالية',
      title: 'دروس المحاسبة والمالية',
      badge: 'دفاتر الأستاذ، القوائم المالية، والتدفقات النقدية',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'تأسيس قواعد القيد المزدوج للمحاسبة. إتقان حسابات الشركات التضامنية، والميزانيات العمومية، والإهلاك، وقوائم التدفق النقدي، وتحليل النسب المالية.',
      image: '/images/course_acca_finance.webp',
      link: '/accountancy-tuition-sharjah',
      level: 'الصفوف 9 إلى 12 والسنة التحضيرية للجامعة',
      duration: 'مجموعات أسبوعية ومراجعات للامتحانات',
      features: [
        'كامبريدج IGCSE (0452) وA-Level Accounting (9706)',
        'منهاج CBSE للصفين 11 و12 وتطبيقات دفاتر المحاسبة',
        'تدريب عملي خطوة بخطوة على حل المسائل ومعالجة الأخطاء',
      ],
    },
    {
      id: 'social-science',
      category: 'commerce',
      categoryLabel: 'العلوم الإنسانية والدراسات الاجتماعية',
      title: 'الدراسات الاجتماعية (التاريخ، الجغرافيا، التربية)',
      badge: 'منهاج CBSE وIGCSE والدراسات الاجتماعية الإماراتية',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'تدريس منهجي للدراسات الاجتماعية لمنهاج CBSE، وتاريخ وجغرافيا كامبريدج، والدراسات الاجتماعية الإماراتية، مع خرائط زمنية وجغرافية وتدريب كتابي.',
      image: '/images/course_social_science.webp',
      link: '/social-science-tuition-sharjah',
      level: 'الصفوف 6 إلى 10 والمرحلة الثانوية',
      duration: 'برامج فصلية ومراجعات للامتحانات',
      features: [
        'التحضير لامتحانات CBSE للصفين 9 و10',
        'كامبريدج IGCSE التاريخ (0470) والجغرافيا (0460)',
        'حفظ التسلسل الزمني التاريخي ومهارات قراءة الخرائط',
      ],
    },
    {
      id: 'english-tuition',
      category: 'humanities',
      categoryLabel: 'اللغات والأدب',
      title: 'دروس اللغة الإنجليزية وآدابها',
      badge: 'تحليل النصوص والقراءة النقدية وكتابة المقالات',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'الارتقاء بمهارات الاستيعاب القرائي، وبناء المقالات الإقناعية، والنقد الأدبي، والكتابة الإبداعية لمناهج كامبريدج وبيرسون إدكسل وIB وCBSE.',
      image: '/images/course_english_tuition.webp',
      link: '/english-tuition-sharjah',
      level: 'الصفوف 1 إلى 12 والامتحانات الوزارية',
      duration: 'مجموعات أسبوعية وجلسات فردية 1-على-1',
      features: [
        'كامبريدج IGCSE كلغة أولى (0500) وثانية (0510)',
        'تحليل النصوص غير المرئية والاستنتاج النقدي',
        'نقد أدبي متقدم للمسرح والنثر والشعر',
      ],
    },
  ],
};

const textCopy = {
  en: {
    home: 'Home',
    courses: 'Courses',
    breadcrumbCurrent: 'Subject Tuition & Academic Excellence',
    heroEyebrow: 'SCHOOL & TERTIARY SUBJECT TUITION · AL MAJAZ 3, SHARJAH',
    heroTitle: 'School & Tertiary',
    heroTitleSoft: 'Subject Tuition in Sharjah',
    heroIntro:
      'Strengthen core concepts, master challenging board problem sets, and prepare for high-stakes exams. Taught by senior subject matter specialists in micro-batches of 5 to 8 students and 1-on-1 private formats.',
    pills: [
      { icon: GraduationCap, label: 'IGCSE, A-Level, IB & CBSE Boards' },
      { icon: Users, label: 'Micro-Batches (5–8 Students) & 1-on-1' },
      { icon: Target, label: 'Diagnostic Knowledge-Gap Pacing' },
      { icon: ShieldCheck, label: 'SPEA Authorized Institute' },
    ],
    exploreBtn: 'Explore All Subjects ↓',
    diagnosticBtn: 'Book Free Diagnostic Assessment',
    whatsappBtn: 'WhatsApp Academic Advisor',
    floatTitle: 'Personalized Academic Support',
    floatDesc: 'Concept-first mentoring & past board paper drills',
    curriculaLabel: 'Curricula & Examination Boards Supported',
    catalogEyebrow: 'TARGETED DISCIPLINE SUPPORT',
    catalogTitle: 'Academic Subject Tuition Offerings',
    catalogIntro:
      'Every student processes complex concepts at a distinct pace. Select a discipline below to explore our targeted pathways, curriculum outlines, and faculty specialisms.',
    filterAll: 'All Subjects',
    filterStem: 'Mathematics & Sciences',
    filterCommerce: 'Commerce, Business & SST',
    filterHumanities: 'Languages & English',
    exploreSubject: 'Explore Subject',
    whyEyebrow: 'THE NITAQ ACADEMIC METHODOLOGY',
    whyTitle: 'Thoughtful Support. Measurable Progress.',
    whyIntro:
      'We bring structure, attention, and purpose to every step of your child’s academic journey, replacing stressful cramming with deep conceptual mastery.',
    whyCards: [
      {
        icon: BarChart2,
        title: 'Baseline Diagnostic Assessment',
        desc: 'We pinpoint foundational knowledge gaps and conceptual hurdles before designing the customized syllabus roadmap.',
      },
      {
        icon: Users,
        title: 'Micro-Batches (5 to 8 Students)',
        desc: 'Strict enrollment caps ensure every learner gets dedicated speaking time, rapid error correction, and individualized pacing from the instructor.',
      },
      {
        icon: Award,
        title: 'Senior Board Examiners & Mentors',
        desc: 'Learn from experienced educators who understand the exact mark scheme criteria, command words, and examiner expectations.',
      },
      {
        icon: Clock,
        title: 'Continuous Progress Tracking',
        desc: 'Regular evaluations track quantitative score gains and conceptual retention, with detailed parent-teacher feedback sessions.',
      },
    ],
    boardEyebrow: 'CURRICULUM MASTERY',
    boardTitle: 'Specialized Board Support Across All Levels',
    boardIntro:
      'Our syllabi strictly mirror the requirements of international and regional examining boards in the UAE.',
    boardCards: [
      {
        badge: 'Cambridge CAIE & Edexcel',
        title: 'IGCSE & International A-Levels',
        desc: 'Targeting consistent A* and Grade 9 outcomes through command word drills, mark scheme alignment, and extensive past paper practice.',
        bullets: [
          'IGCSE Maths (0580/0607) & Sciences',
          'AS & A2 Level Pure Mathematics & Physics',
          'Alternative to Practical (ATP Paper 6) Drills',
        ],
      },
      {
        badge: 'International Baccalaureate',
        title: 'IB MYP & Diploma Programme',
        desc: 'Specialist academic coaching covering IB Math (AA & AI), IB Sciences, Economics, and structured Internal Assessment (IA) guidance.',
        bullets: [
          'IB Math Analysis & Approaches (HL/SL)',
          'IB Physics, Chemistry & Biology (HL/SL)',
          'Internal Assessment (IA) Criterion Coaching',
        ],
      },
      {
        badge: 'CBSE Board (India)',
        title: 'Class 9 to 12 Board & Foundation',
        desc: 'Concept-first coaching aligned with NCERT textbooks, board exemplar problems, numerical derivations, and competitive exam readiness.',
        bullets: [
          'Class 10 & 12 Board Maths (Standard/Basic)',
          'Senior PCM & PCB (Physics, Chem, Bio, Maths)',
          'Accountancy, Business Studies & Economics',
        ],
      },
    ],
    ctaTitle: 'Unsure Where Your Child Stands Academically?',
    ctaDesc:
      'Schedule a complimentary 30-minute diagnostic subject evaluation with our academic directors in Al Majaz 3, Sharjah. We will identify exact foundational gaps and construct a clear milestone roadmap.',
    ctaBook: 'Book Free Subject Diagnostic',
    ctaCall: 'Call: +971 52 756 9908',
    ctaWa: 'WhatsApp: +971 52 756 9908',
  },
  ar: {
    home: 'الرئيسية',
    courses: 'الدورات',
    breadcrumbCurrent: 'الدروس الأكاديمية والتميّز الدراسي',
    heroEyebrow: 'تعليم متميز ودعم أكاديمي للمدارس والجامعات · المجاز 3، الشارقة',
    heroTitle: 'الدروس الأكاديمية',
    heroTitleSoft: 'والتميّز الدراسي في الشارقة',
    heroIntro:
      'عزّز استيعاب المفاهيم الأساسية، وحل نماذج الامتحانات الوزارية والدولية السابقة، وتدرّب بثقة للامتحانات المصيرية. نخبة من المدرسين المتخصصين في مجموعات صغيرة (5 إلى 8 طلاب) وجلسات فردية خاصة.',
    pills: [
      { icon: GraduationCap, label: 'مناهج كامبريدج، إدكسل، IB وCBSE' },
      { icon: Users, label: 'مجموعات مصغرة (5–8 طلاب) وجلسات 1-على-1' },
      { icon: Target, label: 'تحديد الفجوات المعرفية ومتابعة فردية' },
      { icon: ShieldCheck, label: 'معهد مرخص من هيئة الشارقة للتعليم الخاص' },
    ],
    exploreBtn: 'استكشف جميع المواد الدراسية ↓',
    diagnosticBtn: 'احجز تقييماً تشخيصياً مجانياً',
    whatsappBtn: 'تواصل مع المرشد الأكاديمي عبر واتساب',
    floatTitle: 'دعم دراسي شخصي ومستمر',
    floatDesc: 'تأسيس المفاهيم وحل نماذج الامتحانات الوزارية السابقة',
    curriculaLabel: 'المناهج وهيئات الامتحانات المعتمدة',
    catalogEyebrow: 'دعم دراسي متخصص لكل مادة',
    catalogTitle: 'برامج الدروس الأكاديمية والمدرسية',
    catalogIntro:
      'يستوعب كل طالب المفاهيم بوتيرته الخاصة. اختر التخصص الدراسي أدناه لاستكشاف خططنا المنهجية وتفاصيل المناهج وخبرات المدرسين.',
    filterAll: 'جميع المواد',
    filterStem: 'الرياضيات والعلوم',
    filterCommerce: 'التجارة وإدارة الأعمال',
    filterHumanities: 'اللغات والأدب الإنجليزي',
    exploreSubject: 'استكشف المادة',
    whyEyebrow: 'منهجية نطاق الأكاديمية',
    whyTitle: 'دعم مدروس. تقدّم ملموس.',
    whyIntro:
      'نضفي التنظيم والاهتمام والهدف الواضح على كل خطوة في المسار الدراسي لابنك، لنستبدل التوتر والحفظ العشوائي بفهم عميق ومستدام للمفاهيم.',
    whyCards: [
      {
        icon: BarChart2,
        title: 'تقييم تشخيصي تأسيسي',
        desc: 'نحدد بدقة الفجوات المعرفية الأساسية والتحديات المنهجية قبل تصميم الخطة الدراسية المخصصة.',
      },
      {
        icon: Users,
        title: 'مجموعات مصغرة (5 إلى 8 طلاب)',
        desc: 'أعداد محددة بدقة تضمن لكل طالب وقتاً كافياً للتفاعل والمشاركة، وتصحيحاً فورياً للأخطاء، ومتابعة فردية من المدرس.',
      },
      {
        icon: Award,
        title: 'مدرسون وخبراء في معايير الامتحانات',
        desc: 'تعلّم مع معلمين متمرسين يفهمون معايير التصحيح الوزارية والدولية، والكلمات التوجيهية في أسئلة الامتحانات.',
      },
      {
        icon: Clock,
        title: 'متابعة وتقييم دوري مستمر',
        desc: 'اختبارات تقييمية منتظمة ترصد التحسن العددي وتثبيت المفاهيم، مع جلسات تقرير دورية لأولياء الأمور.',
      },
    ],
    boardEyebrow: 'إتقان المناهج الدولية والوزارية',
    boardTitle: 'دعم متخصص لجميع المناهج والمراحل',
    boardIntro:
      'تتطابق خططنا الدراسية تماماً مع متطلبات هيئات الامتحانات الدولية والوطنية المعمول بها في مدارس دولة الإمارات.',
    boardCards: [
      {
        badge: 'كامبريدج (CAIE) وبيرسون إدكسل',
        title: 'IGCSE والمستوى المتقدم الدولي (A-Levels)',
        desc: 'نستهدف درجات A* والمستوى 9 من خلال التدريب على الكلمات المفتاحية في الأسئلة ونماذج الإجابة والامتحانات السابقة.',
        bullets: [
          'رياضيات IGCSE (0580/0607) ومسارات العلوم',
          'مستوى AS وA2 في الرياضيات البحتة والميكانيكا والفيزياء',
          'تدريب مكثف على أسئلة بديل العملي (Paper 6 ATP)',
        ],
      },
      {
        badge: 'البكالوريا الدولية (IB)',
        title: 'برنامج السنوات المتوسطة والدبلوما (MYP & DP)',
        desc: 'تدريس تخصصي يغطي رياضيات IB (AA & AI)، والعلوم الطبيعية، والاقتصاد، مع دعم التقييم الداخلي (IA).',
        bullets: [
          'رياضيات IB Analysis & Approaches (HL/SL)',
          'فيزياء وكيمياء وأحياء البكالوريا الدولية (HL/SL)',
          'إرشاد منهجي لمعايير التقييم الداخلي (Internal Assessment)',
        ],
      },
      {
        badge: 'منهاج CBSE (الهند)',
        title: 'الصفوف 9 إلى 12 والمسار التأسيسي',
        desc: 'تدريس يركز على الفهم يتوافق مع كتب NCERT وأسئلة الامتحانات النموذجية والمسائل العددية والتأهيل لاختبارات القبول.',
        bullets: [
          'امتحانات الصفين 10 و12 رياضيات (Standard وBasic)',
          'المواد العلمية العليا PCM وPCB (فيزياء، كيمياء، أحياء، رياضيات)',
          'المحاسبة، دراسات الأعمال، والاقتصاد',
        ],
      },
    ],
    ctaTitle: 'هل ترغب في معرفة المستوى الأكاديمي الدقيق لابنك؟',
    ctaDesc:
      'احجز جلسة تقييم تشخيصية مجانية لمدة 30 دقيقة مع مستشارينا الأكاديميين في المجاز 3، الشارقة. سنحدد الفجوات المعرفية ونضع خطة دراسية واضحة ومخصصة.',
    ctaBook: 'احجز تقييم المادة مجاناً',
    ctaCall: 'اتصل: +971 52 756 9908',
    ctaWa: 'واتساب: +971 52 756 9908',
  },
};

export default function AcademicExcellenceCourse() {
  const { lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  const c = textCopy[lang] || textCopy.en;
  const courseList = coursesData[lang] || coursesData.en;

  const filteredCourses = courseList.filter((course) => {
    if (activeFilter === 'all') return true;
    return course.category === activeFilter;
  });

  return (
    <main className="lt-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SEO />

      {/* Hero Section */}
      <section className="lt-hero">
        <div className="container">
          <div className="lt-hero-grid">
            <div className="lt-hero-content">
              <nav className="lt-breadcrumbs" aria-label="Breadcrumbs">
                <Link to="/">{c.home}</Link>
                <span className="sep">/</span>
                <Link to="/courses">{c.courses}</Link>
                <span className="sep">/</span>
                <span>{c.breadcrumbCurrent}</span>
              </nav>

              <p className="nh-eyebrow">
                <span className="nh-dot" />
                {c.heroEyebrow}
              </p>

              <h1 className="lt-hero-title">
                {c.heroTitle} <span className="lt-hero-title-soft">{c.heroTitleSoft}</span>
              </h1>

              <p className="lt-hero-intro">{c.heroIntro}</p>

              <div className="lt-hero-pills">
                {c.pills.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <span key={idx} className="lt-pill">
                      <Icon size={14} /> {pill.label}
                    </span>
                  );
                })}
              </div>

              <div className="lt-hero-actions">
                <a href="#subjects" className="lt-btn lt-btn-primary">
                  {c.exploreBtn}
                </a>
                <Link to="/enquiry" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={14} /> {c.diagnosticBtn}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'listing_academic_tuition')}
                >
                  <MessageSquare size={14} /> {c.whatsappBtn}
                </a>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lt-hero-media">
              <div className="lt-hero-image-wrap">
                <img
                  src="/images/nitaq_tuition_program.jpg"
                  alt="Student engaged in personalized academic subject tuition at Nitaq Academy Sharjah"
                  loading="eager"
                />
                <div className="lt-hero-overlay-scrim" />
                <div className="lt-hero-float-badge">
                  <div className="lt-float-icon">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div className="lt-float-title">{c.floatTitle}</div>
                    <div className="lt-float-desc">{c.floatDesc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curricula & Exam Boards Ribbon */}
      <section className="lt-partners-strip" aria-label="Curricula and Boards Supported">
        <div className="container">
          <div className="lt-partners-inner">
            <span className="lt-partners-label">{c.curriculaLabel}</span>
            <div className="lt-partners-logos">
              <div className="lt-partner-item">
                <img src="/images/partner_british_council.webp" alt="Cambridge Assessment" loading="lazy" />
                <span>Cambridge (CAIE IGCSE / A-Level)</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_pearson.webp" alt="Pearson Edexcel" loading="lazy" />
                <span>Pearson Edexcel GCSE / IAL</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/spea.webp" alt="SPEA" loading="lazy" />
                <span>SPEA Licensed Institute</span>
              </div>
              <div className="lt-partner-item">
                <Award size={18} style={{ color: '#2e7d32' }} />
                <span>International Baccalaureate (IB DP/MYP)</span>
              </div>
              <div className="lt-partner-item">
                <BookOpen size={18} style={{ color: '#2e7d32' }} />
                <span>CBSE Board (Classes 1 to 12)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Subjects Catalog Section */}
      <section id="subjects" className="lt-catalog-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              <span className="nh-dot" />
              {c.catalogEyebrow}
            </p>
            <h2>{c.catalogTitle}</h2>
            <p>{c.catalogIntro}</p>
          </div>

          {/* Filter Bar */}
          <div className="lt-filter-wrap" role="tablist" aria-label="Subject Category Filters">
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'all'}
              className={`lt-filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {c.filterAll} <span className="lt-filter-count">{courseList.length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'stem'}
              className={`lt-filter-btn ${activeFilter === 'stem' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('stem')}
            >
              {c.filterStem} <span className="lt-filter-count">5</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'commerce'}
              className={`lt-filter-btn ${activeFilter === 'commerce' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('commerce')}
            >
              {c.filterCommerce} <span className="lt-filter-count">4</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'humanities'}
              className={`lt-filter-btn ${activeFilter === 'humanities' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('humanities')}
            >
              {c.filterHumanities} <span className="lt-filter-count">1</span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="lt-cards-grid">
            {filteredCourses.map((item) => (
              <article key={item.id} className="lt-card">
                <div className="lt-card-image-wrap">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <div className="lt-card-image-overlay" />
                  <span className="lt-card-badge">{item.badge}</span>
                  <span className="lt-card-mode">{item.mode}</span>
                </div>

                <div className="lt-card-content">
                  <div className="lt-card-category">{item.categoryLabel}</div>
                  <h3 className="lt-card-title">{item.title}</h3>
                  <p className="lt-card-desc">{item.desc}</p>

                  <ul className="lt-card-features">
                    {item.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="lt-card-meta">
                    <div className="lt-card-meta-item">
                      <GraduationCap size={13} />
                      <span>{item.level}</span>
                    </div>
                    <div className="lt-card-meta-item">
                      <Clock size={13} />
                      <span>{item.duration}</span>
                    </div>
                  </div>

                  <div className="lt-card-actions">
                    <Link to={item.link} className="lt-card-btn-view">
                      <span>{c.exploreSubject}</span>
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(item.title)}.`}
                      className="lt-card-btn-wa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp Enquiry for ${item.title}`}
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `academic_${item.id}`)}
                    >
                      <MessageSquare size={15} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Nitaq Academic Approach 4 Pillars */}
      <section className="lt-why-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              <span className="nh-dot" />
              {c.whyEyebrow}
            </p>
            <h2>{c.whyTitle}</h2>
            <p>{c.whyIntro}</p>
          </div>

          <div className="lt-why-grid">
            {c.whyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div key={idx} className="lt-why-card">
                  <div className="lt-why-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curricula Breakdown Section */}
      <section className="lt-cefr-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              <span className="nh-dot" />
              {c.boardEyebrow}
            </p>
            <h2>{c.boardTitle}</h2>
            <p>{c.boardIntro}</p>
          </div>

          <div className="lt-cefr-grid">
            {c.boardCards.map((card, idx) => (
              <div key={idx} className="lt-cefr-card">
                <span className="lt-cefr-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <ul className="lt-cefr-bullets">
                  {card.bullets.map((b, i) => (
                    <li key={i}>
                      <CheckCircle2 size={13} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Diagnostic Assessment & Consultation CTA */}
      <section className="lt-cta-section">
        <div className="container">
          <div className="lt-cta-banner">
            <div className="lt-cta-content">
              <h2>{c.ctaTitle}</h2>
              <p>{c.ctaDesc}</p>
              <div className="lt-cta-actions">
                <Link to="/enquiry" className="lt-btn lt-btn-primary">
                  {c.ctaBook}
                </Link>
                <a href="tel:+971527569908" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={14} /> {c.ctaCall}
                </a>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'academic_tuition_cta_banner')}
                >
                  <MessageSquare size={14} /> {c.ctaWa}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
