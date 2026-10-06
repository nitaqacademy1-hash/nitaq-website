import { useState } from 'react';
import { Link } from '../i18n/Link';
import SEO from '../components/SEO';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import '../styles/language-trainings.css';
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
  Globe2,
  Headphones,
  BookOpen,
} from 'lucide-react';

const coursesData = {
  en: [
    {
      id: 'spoken-english',
      category: 'general',
      title: 'Spoken English Fluency',
      badge: 'Most Popular · All Levels',
      mode: 'In-Person & Online',
      desc: 'Develop spontaneous conversational confidence, accent neutrality, and articulate professional speech through communicative roleplays.',
      image: '/images/course_english_spoken.webp',
      link: '/spoken-english',
      level: 'Beginner (A1) to Advanced (C2)',
      duration: '40–60 Hours / Level',
      features: [
        'Accent Neutralization & Phonetic Pronunciation',
        'Boardroom Presentations & Workplace Idioms',
      ],
    },
    {
      id: 'spoken-arabic',
      category: 'general',
      title: 'Spoken Arabic (Khaleeji & MSA)',
      badge: 'Emirati & Modern Standard',
      mode: 'In-Person & Online',
      desc: 'Master everyday Gulf dialect and standard Arabic for seamless business transactions, government dealings, and social integration in the UAE.',
      image: '/images/course_arabic_language.webp',
      link: '/spoken-arabic',
      level: 'Conversational to Fluent',
      duration: '36–48 Hours',
      features: [
        'Everyday Emirati Situational Scenarios',
        'Formal Document & Email Comprehension',
      ],
    },
    {
      id: 'french',
      category: 'general',
      title: 'French Language (DELF / DALF)',
      badge: 'DELF Aligned Curriculum',
      mode: 'In-Person & Online',
      desc: 'Learn French for academic progression, international travel, or Canadian immigration points (TEF/TCF) with native-pedagogy trainers.',
      image: '/images/course_french_language.webp',
      link: '/french',
      level: 'DELF A1, A2, B1, B2 Levels',
      duration: '45 Hours / Level',
      features: [
        'Immersive Conversational & Listening Labs',
        'TEF / TCF Canada Immigration Modules',
      ],
    },
    {
      id: 'german',
      category: 'general',
      title: 'German Language (Goethe-Zertifikat)',
      badge: 'Goethe Institute Standard',
      mode: 'In-Person & Online',
      desc: 'Prepare for university studies and career pathways in Germany and Austria through rigorous German grammar and communicative training.',
      image: '/images/course_german_language.webp',
      link: '/german',
      level: 'Goethe A1 to B2 Batches',
      duration: '50 Hours / Level',
      features: [
        'Structured Syntax & Declension Workshops',
        'Official Goethe-Zertifikat Exam Training',
      ],
    },
    {
      id: 'spanish',
      category: 'general',
      title: 'Spanish Language (DELE)',
      badge: 'DELE Framework Aligned',
      mode: 'In-Person & Online',
      desc: 'Communicate naturally in global Spanish. Fast-track conversational fluency through interactive dialogue, grammar, and Latin culture.',
      image: '/images/course_spanish_language.webp',
      link: '/spanish',
      level: 'DELE A1 to B2 Syllabus',
      duration: '45 Hours / Level',
      features: [
        'Conversational Fluency with Native Speakers',
        'DELE Examination Strategy & Practice',
      ],
    },
    {
      id: 'business-english',
      category: 'professional',
      title: 'Business English & Corporate Communication',
      badge: 'Executive & Career Focus',
      mode: 'In-Person & Corporate',
      desc: 'Designed for working professionals across UAE enterprises. Refine formal business correspondence, boardroom pitching, and negotiation English.',
      image: '/images/course_english_spoken.webp',
      link: '/spoken-english',
      level: 'Intermediate to Advanced',
      duration: '30–40 Hours Intensive',
      features: [
        'Executive Email Writing & Memo Composition',
        'Cross-Cultural Business Negotiation Seminars',
      ],
    },
    {
      id: 'ielts',
      category: 'exams',
      title: 'IELTS Academic & General Training',
      badge: 'Official Exam Preparation',
      mode: 'In-Person & Online',
      desc: 'Target Band 7.5+ with diagnostic writing evaluations, speaking mock interviews under timed exam conditions, and proven heuristics.',
      image: '/images/course_ielts_prep.webp',
      link: '/ielts-course',
      level: 'Target Band 6.5 to 8.5+',
      duration: '36–48 Hours + Mocks',
      features: [
        'Weekly Cambridge Timed Mock Simulations',
        '1-on-1 Certified Speaking Examiner Feedback',
      ],
    },
    {
      id: 'pte',
      category: 'exams',
      title: 'PTE Academic Preparation',
      badge: 'AI-Scored Exam Coaching',
      mode: 'In-Person & Online Lab',
      desc: 'Master the computer-delivered Pearson Test with strategies on oral fluency, pronunciation scoring, and template-assisted essay generation.',
      image: '/images/course_pte_prep.webp',
      link: '/pte-course',
      level: 'Target Score 65 to 79+',
      duration: '30–40 Hours',
      features: [
        'Dedicated Lab Practice with AI Voice Scoring',
        'Repeat Sentence & Describe Image Heuristics',
      ],
    },
    {
      id: 'toefl',
      category: 'exams',
      title: 'TOEFL iBT Test Preparation',
      badge: 'US & Global University Target',
      mode: 'In-Person & Online',
      desc: 'Prepare for university admissions and scholarship thresholds with high-yield drills for TOEFL iBT listening, reading, and speaking.',
      image: '/images/course_toefl_prep.webp',
      link: '/toefl-course',
      level: 'Target Scores 90 to 110+',
      duration: '30–40 Hours',
      features: [
        'Integrated Speaking & Listening Synthesis Drills',
        'Timed Essay Structuring for Rubric Points',
      ],
    },
  ],
  ar: [
    {
      id: 'spoken-english',
      category: 'general',
      title: 'دورة طلاقة المحادثة الإنجليزية',
      badge: 'الأكثر طلباً · جميع المستويات',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'طوّر ثقتك في المحادثة العفوية ومخارج الحروف والتواصل المهني السليم من خلال تمثيل الأدوار الواقعية.',
      image: '/images/course_english_spoken.webp',
      link: '/spoken-english',
      level: 'من المبتدئ (A1) إلى المتقدم (C2)',
      duration: '40–60 ساعة لكل مستوى',
      features: [
        'تحسين النطق وتصحيح مخارج الألفاظ واللكنة',
        'العروض التقديمية في بيئة العمل والمصطلحات المهنية',
      ],
    },
    {
      id: 'spoken-arabic',
      category: 'general',
      title: 'العربية المحادثة (اللهجة الخليجية والفصحى)',
      badge: 'اللهجة المحلية والعربية الفصحى',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'تواصل بطبيعية باللغة العربية مع التركيز على اللهجة الإماراتية المحكية والفصحى المعاصرة للمعاملات الرسمية واليومية.',
      image: '/images/course_arabic_language.webp',
      link: '/spoken-arabic',
      level: 'من المبتدئ إلى المتحدث بطلاقة',
      duration: '36–48 ساعة',
      features: [
        'حوارات ومواقف يومية من واقع الحياة في الإمارات',
        'مفردات اللهجة الخليجية والعربية المعاصرة',
      ],
    },
    {
      id: 'french',
      category: 'general',
      title: 'دورة اللغة الفرنسية (DELF / DALF)',
      badge: 'معتمدة وفق معايير DELF',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'أتقن اللغة الفرنسية للدراسة الجامعية والسفر وملفات الهجرة لكندا وفق الإطار الأوروبي المشترك CEFR.',
      image: '/images/course_french_language.webp',
      link: '/french',
      level: 'مستويات DELF (A1, A2, B1, B2)',
      duration: '45 ساعة لكل مستوى',
      features: [
        'معايشة تفاعلية في التحدث والاستماع اليومي',
        'تدريب على نماذج امتحانات DELF وامتحانات الهجرة كندا',
      ],
    },
    {
      id: 'german',
      category: 'general',
      title: 'دورة اللغة الألمانية (Goethe-Zertifikat)',
      badge: 'متوافقة مع معهد غوته',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'عزّز فرصك المهنية والجامعية في ألمانيا والنمسا مع دراسة منهجية لقواعد اللغة الألمانية وبناء المفردات.',
      image: '/images/course_german_language.webp',
      link: '/german',
      level: 'مستويات غوته من A1 إلى B2',
      duration: '50 ساعة لكل مستوى',
      features: [
        'قواعد منهجية وبناء الجمل والتراكيب اللغوية',
        'تدريب رسمي لامتحانات شهادة غوته Goethe-Zertifikat',
      ],
    },
    {
      id: 'spanish',
      category: 'general',
      title: 'دورة اللغة الإسبانية (DELE)',
      badge: 'متوافقة مع امتحانات DELE',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'تعلّم الإسبانية من خلال منهاج تفاعلي يعزز سرعة الاستيعاب والتعبير الطبيعي في المواقف اليومية والمهنية.',
      image: '/images/course_spanish_language.webp',
      link: '/spanish',
      level: 'مستويات DELE من A1 إلى B2',
      duration: '45 ساعة لكل مستوى',
      features: [
        'محادثة تفاعلية مع مدربين ناطقين بالإسبانية',
        'استراتيجيات التحضير لامتحانات معهد سيرفانتس DELE',
      ],
    },
    {
      id: 'business-english',
      category: 'professional',
      title: 'الإنجليزية للأعمال والتواصل المؤسسي',
      badge: 'تركيز تنفيذي ومهني للشركات',
      mode: 'حضوري وتدريب مؤسسي',
      desc: 'صياغة المراسلات الرسمية، وتقديم العروض التنفيذية، وإدارة المفاوضات باللغة الإنجليزية في بيئة العمل.',
      image: '/images/course_english_spoken.webp',
      link: '/spoken-english',
      level: 'المستوى المتوسط إلى المتقدم',
      duration: '30–40 ساعة مكثفة',
      features: [
        'كتابة الرسائل التنفيذية والمذكرات الإدارية الرسمية',
        'ورش عمل التفاوض في بيئات العمل متعددة الثقافات',
      ],
    },
    {
      id: 'ielts',
      category: 'exams',
      title: 'التحضير لاختبار IELTS (الأكاديمي والعام)',
      badge: 'تحضير رسمي معتمد',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'استهدف درجة 7.5+ مع تقييم كتابي تفصيلي، ومقابلات محادثة تجريبية في ظروف الامتحان الفعلية، واستراتيجيات مثبتة في القراءة والاستماع.',
      image: '/images/course_ielts_prep.webp',
      link: '/ielts-course',
      level: 'استهداف الدرجات 6.5 إلى 8.5+',
      duration: '36–48 ساعة + اختبارات تجريبية',
      features: [
        'محاكاة أسبوعية لاختبارات كامبريدج في الوقت المحدد',
        'تصحيح تفصيلي لمقالات المهمة الأولى والثانية (Task 1 & 2)',
        'تقييم فردي للمحادثة مع خبراء معتمدين',
      ],
    },
    {
      id: 'pte',
      category: 'exams',
      title: 'التحضير لاختبار PTE الأكاديمي',
      badge: 'تدريب على الاختبار المحوسب بالذكاء الاصطناعي',
      mode: 'حضوري ومختبر رقمي',
      desc: 'أتقن اختبار بيرسون المحوسب (PTE). استراتيجيات مركزة على الطلاقة الشفوية، ومعايير تقييم النطق، وقوالب كتابة المقال لتحقيق أعلى الدرجات.',
      image: '/images/course_pte_prep.webp',
      link: '/pte-course',
      level: 'استهداف 65 إلى 79+ (ما يعادل 7–8 في IELTS)',
      duration: '30–40 ساعة',
      features: [
        'مختبر مخصص مع تقييم صوتي بالذكاء الاصطناعي',
        'استراتيجيات أسئلة Repeat Sentence وDescribe Image',
        'سلسلة اختبارات محوسبة تجريبية كاملة',
      ],
    },
    {
      id: 'toefl',
      category: 'exams',
      title: 'التحضير لاختبار TOEFL iBT',
      badge: 'للقبول بالجامعات الأمريكية والدولية',
      mode: 'حضوري وعبر الإنترنت',
      desc: 'استعد للقبول في الجامعات الأمريكية والمنح الدراسية مع تدريبات مكثفة على محاضرات الاستماع، والنصوص الأكاديمية، والمهام المدمجة.',
      image: '/images/course_toefl_prep.webp',
      link: '/toefl-course',
      level: 'استهداف الدرجات 90 إلى 110+',
      duration: '30–40 ساعة',
      features: [
        'تدريب على مهام الاستماع والتحدث الأكاديمي المدمج',
        'تقنيات القراءة الأكاديمية واستنتاج المفردات الصعبة',
        'بناء المقال وفق أعلى معايير التصحيح الرسمية',
      ],
    },
  ],
};

const textCopy = {
  en: {
    home: 'Home',
    courses: 'Courses',
    breadcrumbCurrent: 'Language Training',
    heroEyebrow: 'NITAQ LANGUAGE INSTITUTE · AL MAJAZ 3, SHARJAH',
    heroTitle: 'Language Training &',
    heroTitleSoft: 'Exam Prep in Sharjah',
    heroIntro:
      'Gain real-world fluency, accent confidence, and international certification. Explore structured language levels in English, Arabic, French, German, and Spanish, alongside official coaching for IELTS, TOEFL, and PTE.',
    pills: [
      { icon: Globe2, label: 'CEFR A1 to C2 Levels' },
      { icon: Users, label: 'Small Batches (4–8 Students)' },
      { icon: Clock, label: 'Flexible Evening & Weekend Batches' },
      { icon: ShieldCheck, label: 'SPEA Licensed Educational Institute' },
    ],
    exploreBtn: 'Explore All Courses ↓',
    assessmentBtn: 'Book Free Level Assessment',
    whatsappBtn: 'Chat with Admissions on WhatsApp',
    floatTitle: 'Real-Life Conversational Focus',
    floatDesc: 'Authentic dialogues and certified native-aligned linguists',
    partnersLabel: 'Accreditation & Partner Examination Boards',
    catalogEyebrow: 'Targeted Language Pathways',
    catalogTitle: 'Explore Language Courses & Exam Prep',
    catalogIntro:
      'Whether advancing your corporate career, meeting immigration prerequisites, or building global conversational fluency, select your pathway below to view details and syllabus frameworks.',
    filterAll: 'All Programs',
    filterGeneral: 'Conversational Fluency',
    filterProfessional: 'Business Communication',
    filterExams: 'Exam Prep (IELTS / PTE / TOEFL)',
    exploreCourse: 'View Course Details',
    whyEyebrow: 'THE NITAQ ADVANTAGE',
    whyTitle: 'Why Study Languages at Nitaq Academy?',
    whyIntro:
      'We replace passive textbook memorization with communicative, task-based learning so you speak with natural rhythm, accurate pronunciation, and genuine poise.',
    whyCards: [
      {
        icon: Users,
        title: 'Micro-Batch Interactive Learning',
        desc: 'Strictly capped class sizes (4 to 8 students maximum) ensure every learner gets dedicated speaking time, corrective feedback, and individual attention.',
      },
      {
        icon: Globe2,
        title: 'Native-Aligned Certified Faculty',
        desc: 'Learn with experienced instructors native to your target language, trained in modern communicative methodologies and official CEFR frameworks.',
      },
      {
        icon: Award,
        title: 'Official Exam Rubric Mastery',
        desc: 'Dedicated coaching for IELTS, TOEFL, DELF, and Goethe examinations using authentic past papers, timing strategies, and examiner scoring keys.',
      },
      {
        icon: Clock,
        title: 'Flexible Schedules for Adults',
        desc: 'Convenient weekday evening and weekend cohorts tailored for working professionals and university students across Sharjah and Dubai.',
      },
    ],
    cefrEyebrow: 'INTERNATIONAL STANDARD',
    cefrTitle: 'Mapped to the Common European Framework (CEFR)',
    cefrIntro:
      'Every course level at Nitaq Academy strictly follows the CEFR standard, ensuring your credentials are recognized by employers, embassies, and universities worldwide.',
    cefrCards: [
      {
        badge: 'Basic User',
        title: 'A1 – A2: Breakthrough & Waystage',
        desc: 'Understand basic expressions, introduce yourself, ask and answer questions about personal details, and engage in simple routine interactions.',
      },
      {
        badge: 'Independent User',
        title: 'B1 – B2: Threshold & Vantage',
        desc: 'Communicate with confidence in most workplace situations, explain viewpoints on topical issues, and produce clear, connected text on familiar topics.',
      },
      {
        badge: 'Proficient User',
        title: 'C1 – C2: Effective & Mastery',
        desc: 'Express ideas fluently and spontaneously without searching for expressions. Use language flexibly and effectively for social, academic, and professional purposes.',
      },
    ],
    ctaTitle: 'Unsure Which Language Level Fits You Best?',
    ctaDesc:
      'Schedule a complimentary 20-minute diagnostic speaking evaluation with our certified language instructors at Abu Khamseen Tower, Al Majaz 3, Sharjah. We will determine your exact CEFR level.',
    ctaBook: 'Book Free Level Assessment',
    ctaCall: 'Call: +971 52 756 9908',
    ctaWa: 'WhatsApp: +971 52 756 9908',
  },
  ar: {
    home: 'الرئيسية',
    courses: 'الدورات',
    breadcrumbCurrent: 'تدريب اللغات',
    heroEyebrow: 'معهد نطاق للغات · المجاز 3، الشارقة · مرخص من SPEA',
    heroTitle: 'تدريب ودورات اللغات',
    heroTitleSoft: 'واختبارات الكفاءة في الشارقة',
    heroIntro:
      'اكتسب طلاقة حقيقية وثقة في التحدث وشهادات دولية معتمدة. استكشف مستويات تعليمية متدرجة في الإنجليزية والعربية والفرنسية والألمانية والإسبانية، بالإضافة إلى برامج تدريبية رسمية لاختبارات IELTS وTOEFL وPTE.',
    pills: [
      { icon: Globe2, label: 'مستويات الإطار الأوروبي (A1 إلى C2)' },
      { icon: Users, label: 'مجموعات مصغرة (4 إلى 8 متدربين)' },
      { icon: Clock, label: 'فترات مسائية ونهاية الأسبوع' },
      { icon: ShieldCheck, label: 'معهد مرخص من هيئة الشارقة للتعليم الخاص' },
    ],
    exploreBtn: 'استكشف جميع الدورات ↓',
    assessmentBtn: 'اختبار تحديد المستوى مجاناً',
    whatsappBtn: 'تواصل مع القبول عبر واتساب',
    floatTitle: 'تركيز تفاعلي على المحادثة',
    floatDesc: 'حوارات واقعية ومدربون لغويون معتمدون',
    partnersLabel: 'هيئات الاعتماد ومراكز الاختبارات الشريكة',
    catalogEyebrow: 'مسارات لغوية متخصصة',
    catalogTitle: 'استكشف برامج ودورات اللغات',
    catalogIntro:
      'سواء كنت ترغب في تطوير مسارك المهني، أو استيفاء متطلبات الهجرة والدراسة، أو اكتساب طلاقة جديدة، اختر المسار المناسب أدناه للاطلاع على التفاصيل والمواعيد.',
    filterAll: 'جميع البرامج',
    filterGeneral: 'المحادثة والتحدث اليومي',
    filterProfessional: 'الإنجليزية للأعمال',
    filterExams: 'اختبارات الكفاءة (IELTS/PTE)',
    exploreCourse: 'تفاصيل الدورة والتسجيل',
    whyEyebrow: 'ميزة أكاديمية نطاق',
    whyTitle: 'لماذا تختار تعلم اللغات في نطاق؟',
    whyIntro:
      'نستبدل الحفظ النظري للمفاهيم بمواقف محادثة تفاعلية مستمدة من الحياة الواقعية لتمكينك من التحدث بطلاقة وثقة وسرعة.',
    whyCards: [
      {
        icon: Users,
        title: 'مجموعات تدريبية مصغرة',
        desc: 'أعداد محددة (4 إلى 8 متدربين كحد أقصى) تتيح لك وقتاً كافياً للتحدث النشط وتصحيح مخارج الألفاظ ومتابعة فردية من المدرب.',
      },
      {
        icon: Globe2,
        title: 'مدربون متخصصون وناطقون باللغة',
        desc: 'تعلّم مع معلمين لغويين ذوي خبرة ومعتمدين في أحدث أساليب التدريس التواصلي المتوافقة مع الإطار الأوروبي المشترك.',
      },
      {
        icon: Award,
        title: 'إتقان معايير الامتحانات الدولية',
        desc: 'تدريب موجه لاختبارات IELTS وTOEFL وDELF وGoethe عبر نماذج امتحانات رسمية سابقة واستراتيجيات إدارة الوقت.',
      },
      {
        icon: Clock,
        title: 'مواعيد مرنة تناسب الموظفين',
        desc: 'فترات مسائية ملائمة وأيام سبت وأحد تناسب المهنيين وطلاب الجامعات في الشارقة ودبي وعجمان.',
      },
    ],
    cefrEyebrow: 'المعايير الدولية',
    cefrTitle: 'متوافق مع الإطار الأوروبي المرجعي المشترك (CEFR)',
    cefrIntro:
      'تتبع كل مستويات اللغات في أكاديمية نطاق معايير CEFR المعتمدة دولياً، مما يضمن الاعتراف بشهادتك لدى الجامعات والسفارات وجهات التوظيف.',
    cefrCards: [
      {
        badge: 'المستوى الأساسي',
        title: 'A1 – A2: المبتدئ والتأسيسي',
        desc: 'فهم التعبيرات البسيطة، والتعريف بالنفس، وطرح الإجابات عن البيانات الشخصية، والتفاعل البسيط في المواقف الروتينية.',
      },
      {
        badge: 'المستوى المستقل',
        title: 'B1 – B2: المتوسط وفوق المتوسط',
        desc: 'التواصل بثقة في معظم مواقف العمل والسفر، والتعبير عن الآراء بوضوح، وإنشاء نصوص مترابطة في الموضوعات المألوفة.',
      },
      {
        badge: 'المستوى المتقدم',
        title: 'C1 – C2: الاحترافي والطلاقة التامة',
        desc: 'التعبير عن الأفكار بطلاقة وعفوية دون عناء في البحث عن الكلمات، واستخدام اللغة بمرونة للأغراض الأكاديمية والمهنية العليا.',
      },
    ],
    ctaTitle: 'هل أنت غير متأكد من مستواك اللغوي الحالي؟',
    ctaDesc:
      'احجز جلسة تقييم محادثة تشخيصية مجانية لمدة 20 دقيقة مع مدربينا اللغويين المعتمدين في برج أبو خمسين، المجاز 3، الشارقة. سنحدد مستواك الدقيق بدقة.',
    ctaBook: 'احجز تقييم المستوى مجاناً',
    ctaCall: 'اتصل: +971 52 756 9908',
    ctaWa: 'واتساب: +971 52 756 9908',
  },
};

export default function LanguageTrainings() {
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
            {/* Left Content */}
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
                <a href="#courses" className="lt-btn lt-btn-primary">
                  {c.exploreBtn}
                </a>
                <Link to="/enquiry" className="lt-btn lt-btn-secondary">
                  <PhoneCall size={14} /> {c.assessmentBtn}
                </Link>
                <a
                  href="https://wa.me/971527569908"
                  className="lt-btn lt-btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'listing_languages')}
                >
                  <MessageSquare size={14} /> {c.whatsappBtn}
                </a>
              </div>
            </div>

            {/* Right Media Card */}
            <div className="lt-hero-media">
              <div className="lt-hero-image-wrap">
                <img
                  src="/images/nitaq_language_program.jpg"
                  alt="Students engaged in interactive language training at Nitaq Academy Sharjah"
                  loading="eager"
                />
                <div className="lt-hero-overlay-scrim" />
                <div className="lt-hero-float-badge">
                  <div className="lt-float-icon">
                    <GraduationCap size={20} />
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

      {/* Accreditation Ribbon */}
      <section className="lt-partners-strip" aria-label="Official Partner Accreditation Bodies">
        <div className="container">
          <div className="lt-partners-inner">
            <span className="lt-partners-label">{c.partnersLabel}</span>
            <div className="lt-partners-logos">
              <div className="lt-partner-item">
                <img src="/images/partner_british_council.webp" alt="British Council" loading="lazy" />
                <span>British Council Partner</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_ielts.webp" alt="IELTS" loading="lazy" />
                <span>IELTS Preparation</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_pearson.webp" alt="Pearson PTE" loading="lazy" />
                <span>PTE Academic Coaching</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/partner_toefl.webp" alt="TOEFL" loading="lazy" />
                <span>ETS TOEFL Preparation</span>
              </div>
              <div className="lt-partner-item">
                <img src="/images/spea.webp" alt="SPEA" loading="lazy" />
                <span>SPEA Licensed Institute</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Course Catalog Section */}
      <section id="courses" className="lt-catalog-section">
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
          <div className="lt-filter-wrap" role="tablist" aria-label="Language Category Filters">
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
              aria-selected={activeFilter === 'general'}
              className={`lt-filter-btn ${activeFilter === 'general' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('general')}
            >
              {c.filterGeneral} <span className="lt-filter-count">{courseList.filter(item => item.category === 'general').length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'professional'}
              className={`lt-filter-btn ${activeFilter === 'professional' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('professional')}
            >
              {c.filterProfessional} <span className="lt-filter-count">{courseList.filter(item => item.category === 'professional').length}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeFilter === 'exams'}
              className={`lt-filter-btn ${activeFilter === 'exams' ? 'is-active' : ''}`}
              onClick={() => setActiveFilter('exams')}
            >
              {c.filterExams} <span className="lt-filter-count">{courseList.filter(item => item.category === 'exams').length}</span>
            </button>
          </div>

          {/* Course Cards Grid */}
          <div className="lt-cards-grid">
            {filteredCourses.map((course) => (
              <article key={course.id} className="lt-card">
                <div className="lt-card-image-wrap">
                  <img src={course.image} alt={course.title} loading="lazy" />
                  <div className="lt-card-image-overlay" />
                  <span className="lt-card-badge">{course.badge}</span>
                  <span className="lt-card-mode">{course.mode}</span>
                </div>

                <div className="lt-card-content">
                  <div className="lt-card-category">{course.category.toUpperCase()}</div>
                  <h3 className="lt-card-title">{course.title}</h3>
                  <p className="lt-card-desc">{course.desc}</p>

                  <ul className="lt-card-features">
                    {course.features.map((feat, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={13} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="lt-card-meta">
                    <div className="lt-card-meta-item">
                      <GraduationCap size={13} />
                      <span>{course.level}</span>
                    </div>
                    <div className="lt-card-meta-item">
                      <Clock size={13} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="lt-card-actions">
                    <Link to={course.link} className="lt-card-btn-view">
                      <span>{c.exploreCourse}</span>
                      <ArrowRight size={13} />
                    </Link>
                    <a
                      href={`https://wa.me/971527569908?text=Hello%20Nitaq%20Academy,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(course.title)}.`}
                      className="lt-card-btn-wa"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp Enquiry for ${course.title}`}
                      onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `lang_${course.id}`)}
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

      {/* Why Choose Nitaq for Languages Section */}
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
            {c.whyCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="lt-why-card">
                  <div className="lt-why-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CEFR Framework Explanation */}
      <section className="lt-cefr-section">
        <div className="container">
          <div className="lt-section-header">
            <p className="lt-eyebrow">
              <span className="nh-dot" />
              {c.cefrEyebrow}
            </p>
            <h2>{c.cefrTitle}</h2>
            <p>{c.cefrIntro}</p>
          </div>

          <div className="lt-cefr-grid">
            {c.cefrCards.map((card, idx) => (
              <div key={idx} className="lt-cefr-card">
                <span className="lt-cefr-badge">{card.badge}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Diagnostic Assessment CTA */}
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
                  onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'listing_languages_cta_banner')}
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
