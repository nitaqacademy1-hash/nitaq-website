import React from 'react';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { 
  BookOpen, Award, CheckCircle, Clock, Calendar, 
  Monitor, Laptop, Sparkles, Target, ShieldCheck, 
  TrendingUp, Users, FileText 
} from 'lucide-react';
import WhyNitaq from './WhyNitaq';
import { getArabicCurriculum } from '../data/courseCurriculaArabic';
import '../pages/courses/sat-course.css';

const COURSE_ARABIC_LOOKUP = {
  acca: {
    title: 'شهادة ACCA - جمعية المحاسبين القانونيين المعتمدين',
    subtitle: 'انطلق نحو العالمية في مجال المحاسبة والمالية مع برنامج التحضير الشامل لشهادة ACCA في الشارقة.',
    eyebrow: 'شهادة ACCA البريطانية · تدريب معتمد · الشارقة',
    badgeTitle: 'مناهج BPP و Kaplan',
    badgeSubtitle: 'تدريب تفاعلي ونماذج امتحانات حقيقية.'
  },
  cma: {
    title: 'شهادة CMA - المحاسب الإداري المعتمد (IMA الأمريكية)',
    subtitle: 'طوّر مهاراتك في التخطيط المالي الاستراتيجي والتحليل المالي القيادي مع نخبة من المدربين المعتمدين.',
    eyebrow: 'شهادة CMA الدولية · محاسبة إدارية وقيادة مالية',
    badgeTitle: 'اعتماد IMA الأمريكي',
    badgeSubtitle: 'دراسات حالة عملية ومحاكاة للاختبارات.'
  },
  cpa: {
    title: 'شهادة CPA - المحاسب القانوني المعتمد (AICPA الأمريكية)',
    subtitle: 'أعلى اعتماد مهني في المحاسبة العامة والتدقيق والضرائب وفق المعايير الأمريكية والدولية.',
    eyebrow: 'شهادة CPA الأمريكية · تدقيق ومحاسبة قانونية',
    badgeTitle: 'المعيار الذهبي عالمياً',
    badgeSubtitle: 'تحضير دقيق لجميع أجزاء الامتحان.'
  },
  ielts: {
    title: 'دورة التحضير لاختبار IELTS (الأكاديمي والعام)',
    subtitle: 'حقق الدرجة المستهدفة Band 7.5+ للقبول الجامعي والهجرة مع اختبارات كامبريدج ومراجعات فردية.',
    eyebrow: 'تحضير IELTS معتمد · الشارقة والإمارات',
    badgeTitle: 'الدرجة المستهدفة Band 7.5+',
    badgeSubtitle: 'نماذج كامبريدج وتدريب مكثف على المحادثة والكتابة.'
  },
  spoken_arabic: {
    title: 'دورة اللغة العربية والمحادثة في الشارقة',
    subtitle: 'تحدث العربية بثقة في الحياة اليومية وبيئة العمل في الإمارات مع مدربين ناطقين بالعربية.',
    eyebrow: 'اللغة العربية للمحادثة والأعمال · الشارقة',
    badgeTitle: 'طلاقة وتواصل واقعي',
    badgeSubtitle: 'حوارات تفاعلية ونطق صحيح.'
  },
  spoken_english: {
    title: 'دورة اللغة الإنجليزية والمحادثة في الشارقة',
    subtitle: 'اكتسب الطلاقة والثقة في التحدث بالإنجليزية في بيئة العمل والمواقف اليومية وفق معايير CEFR.',
    eyebrow: 'اللغة الإنجليزية العامة والمحادثة · طلاقة واحتراف',
    badgeTitle: 'طلاقة واقعية',
    badgeSubtitle: 'حوارات حية وتدريب على النطق وثقة التحدث.'
  },
  french: {
    title: 'دورة اللغة الفرنسية (DELF A1 - B2)',
    subtitle: 'تعلم الفرنسية من البداية حتى الاحتراف للتواصل والدراسة والهجرة مع مناهج تفاعلية حديثة.',
    eyebrow: 'اللغة الفرنسية والتأهيل لاختبارات DELF · الشارقة',
    badgeTitle: 'معايير الإطار الأوروبي CEFR',
    badgeSubtitle: 'تواصل ومحادثة واستماع وقواعد مبسطة.'
  },
  german: {
    title: 'دورة اللغة الألمانية (Goethe-Zertifikat A1 - B2)',
    subtitle: 'أتقن الألمانية للدراسة والعمل في ألمانيا والنمسا مع تدريب شامل على المحادثة والقواعد واختبارات جوته.',
    eyebrow: 'اللغة الألمانية المعتمدة · الشارقة',
    badgeTitle: 'شهادات معهد جوته',
    badgeSubtitle: 'بناء أساس لغوي متين ومحادثة واثقة.'
  },
  spanish: {
    title: 'دورة اللغة الإسبانية (DELE A1 - B2)',
    subtitle: 'تحدث إحدى أكثر لغات العالم انتشاراً مع تدريب تطبيقي على المحادثة والتواصل اليومي.',
    eyebrow: 'اللغة الإسبانية المعتمدة · الشارقة',
    badgeTitle: 'تواصل إسباني تفاعلي',
    badgeSubtitle: 'تطوير مهارات النطق والاستماع والتحدث.'
  },
  toefl: {
    title: 'دورة التحضير لاختبار TOEFL iBT',
    subtitle: 'استعد لاختبار التوفل المعتمد عالمياً للقبول الجامعي والمنح الدراسية بدرجة 100+ مع نماذج ETS الرسمية.',
    eyebrow: 'التحضير الرسمي لاختبار TOEFL iBT · الشارقة',
    badgeTitle: 'الدرجة المستهدفة 100+',
    badgeSubtitle: 'تدريب على معامل الصوت والأسئلة الأكاديمية.'
  },
  pte: {
    title: 'دورة التحضير لاختبار PTE Academic',
    subtitle: 'تحضير ذكي وسريع لاختبار بيرسون الأكاديمي للهجرة والدراسة بالخارج مع تحليل الذكاء الاصطناعي.',
    eyebrow: 'PTE ACADEMIC · دراسة وهجرة دولية',
    badgeTitle: 'الدرجة المستهدفة +79',
    badgeSubtitle: 'تحليل دقيق لخوارزميات التقييم وسرعة الأداء.'
  },
  uae_vat: {
    title: 'دورة ضريبة القيمة المضافة UAE VAT والتطبيق العملي',
    subtitle: 'تعلم قوانين الهيئة الاتحادية للضرائب وحساب الإقرارات الضريبية والامتثال المالي للشركات في الإمارات.',
    eyebrow: 'الامتثال الضريبي الإماراتي · تدريب معتمد',
    badgeTitle: 'تطبيق عملي معتمد',
    badgeSubtitle: 'نماذج إقرارات ضريبية حقيقية وحسابات عملية.'
  },
  uae_corporate_tax: {
    title: 'دورة ضريبة الشركات في دولة الإمارات UAE Corporate Tax',
    subtitle: 'دليل شامل لقانون ضريبة الشركات، وحسابات المجموعات الضريبية، وتسعير المعاملات وتعبئة الإقرارات.',
    eyebrow: 'قوانين الهيئة الاتحادية للضرائب FTA · الشارقة',
    badgeTitle: 'امتثال ضريبي احترافي',
    badgeSubtitle: 'معاملات الشركات والتسعير التحويلي والإعفاءات.'
  },
  ai: {
    title: 'دبلوم الذكاء الاصطناعي وتعلم الآلة (AI & Machine Learning)',
    subtitle: 'تعلّم النماذج التوليدية، وتحليل البيانات بلغة Python، وتطبيقات الذكاء الاصطناعي الحديثة في الأعمال.',
    eyebrow: 'التكنولوجيا والذكاء الاصطناعي · تدريب عملي متقدم',
    badgeTitle: 'مشاريع تطبيقية حقيقية',
    badgeSubtitle: 'Python و LLMs وبناء نماذج الذكاء الاصطناعي.'
  },
  power_bi: {
    title: 'دورة Power BI وتحليل البيانات المتقدم بـ Excel',
    subtitle: 'حوّل البيانات إلى لوحات تحكم تفاعلية وتقارير قيادية تدعم اتخاذ القرارات في المؤسسات الحديثة.',
    eyebrow: 'ذكاء الأعمال وتحليل البيانات المتقدم · الشارقة',
    badgeTitle: 'لوحات تحكم Dashboard تفاعلية',
    badgeSubtitle: 'DAX و Power Query والنمذجة المالية.'
  },
  chrm: {
    title: 'المدير المعتمد للموارد البشرية (CHRM)',
    subtitle: 'برنامج قيادي معتمد يغطي إدارة المواهب، وتخطيط القوى العاملة، وقانون العمل الإماراتي الحديث.',
    eyebrow: 'إدارة الموارد البشرية والقيادة · الشارقة',
    badgeTitle: 'شهادة مهنية معتمدة',
    badgeSubtitle: 'قانون العمل الإماراتي واستراتيجيات استقطاب المواهب.'
  },
  hrm: {
    title: 'دورة إدارة الموارد البشرية الاحترافية',
    subtitle: 'تأهيل شامل لممارسي الموارد البشرية من التوظيف إلى تقييم الأداء والتطوير المؤسسي.',
    eyebrow: 'إدارة الموارد البشرية للمؤسسات · الشارقة',
    badgeTitle: 'تطوير الكوادر البشرية',
    badgeSubtitle: 'إجراءات التوظيف والتقييم المؤسسي.'
  },
  cybersecurity: {
    title: 'دبلوم الأمن السيبراني والاختراق الأخلاقي',
    subtitle: 'حماية الشبكات، واختبار الاختراق، والاستجابة للحوادث الأمنية والامتثال الأمني للمؤسسات.',
    eyebrow: 'الأمن السيبراني وحماية البيانات · الشارقة',
    badgeTitle: 'تدريب عملي على الاختراق الأخلاقي',
    badgeSubtitle: 'مختبرات افتراضية وأدوات الحماية المتقدمة.'
  },
  software_engineering: {
    title: 'دبلوم هندسة البرمجيات وتطوير الويب المتكامل',
    subtitle: 'بناء تطبيقات الويب الحديثة Full-Stack، وإدارة قواعد البيانات، ونشر المشاريع الاحترافية.',
    eyebrow: 'تطوير البرمجيات وهندسة الويب · الشارقة',
    badgeTitle: 'مشاريع عملية في السيرة الذاتية',
    badgeSubtitle: 'JavaScript و React و Node.js وقواعد البيانات.'
  },
  sales_negotiations: {
    title: 'دورة مهارات المبيعات والتفاوض الاحترافي',
    subtitle: 'إتقان أحدث أساليب الإقناع، وإبرام الصفقات الكبرى، وبناء علاقات طويلة الأمد مع العملاء.',
    eyebrow: 'المبيعات والتفاوض التجاري · الشارقة',
    badgeTitle: 'استراتيجيات إغلاق الصفقات',
    badgeSubtitle: 'سيناريوهات واقعية وتفاوض عملي.'
  },
  professional_marketing: {
    title: 'دورة التسويق الاحترافي وإدارة العلامات التجارية',
    subtitle: 'بناء استراتيجيات تسويقية ناجحة، ودراسة سلوك المستهلك، وتحقيق نمو ملموس في السوق.',
    eyebrow: 'التسويق وإدارة العلامات التجارية · الشارقة',
    badgeTitle: 'استراتيجيات نمو الأعمال',
    badgeSubtitle: 'تحليل السوق والحملات التسويقية المتكاملة.'
  },
  digital_marketing: {
    title: 'دبلوم التسويق الرقمي الشامل (SEO والإعلانات المدفوعة)',
    subtitle: 'احترف تحسين محركات البحث SEO، وإعلانات Google و Social Media، والتسويق بالمحتوى والتحليلات.',
    eyebrow: 'التسويق الرقمي والتجارة الإلكترونية · الشارقة',
    badgeTitle: 'إدارة حملات إعلانية حقيقية',
    badgeSubtitle: 'Google Ads و Meta Ads و SEO و Google Analytics.'
  },
  data_management: {
    title: 'دورة إدارة البيانات ونظم المعلومات',
    subtitle: 'تنظيم وتخزين وتحليل البيانات المؤسسية بدقة وكفاءة لدعم التحول الرقمي.',
    eyebrow: 'إدارة البيانات ونظم المعلومات · الشارقة',
    badgeTitle: 'حوكمة وتنظيم البيانات',
    badgeSubtitle: 'SQL وإدارة قواعد البيانات والتقارير.'
  },
  soft_skills: {
    title: 'دورة المهارات الشخصية وتطوير القيادة',
    subtitle: 'التواصل الفعال، والذكاء العاطفي، والعمل الجماعي، وإدارة الوقت لتحقيق التميز الوظيفي.',
    eyebrow: 'المهارات الشخصية والتواصل الفعال · الشارقة',
    badgeTitle: 'بناء الشخصية القيادية',
    badgeSubtitle: 'تواصل مؤثر وتفكير نقدي وإدارة الضغوط.'
  },
  gmat: {
    title: 'دورة التحضير لاختبار GMAT Focus لإدارة الأعمال',
    subtitle: 'حقق قبولك في كبرى كليات إدارة الأعمال وماجستير MBA بدرجة مستهدفة 705+ مع نخبة من مدربي GMAT.',
    eyebrow: 'التحضير المتقدم لاختبار GMAT · الشارقة والإمارات',
    badgeTitle: 'الدرجة المستهدفة +705',
    badgeSubtitle: 'إتقان التحليل الكمي واللفظي وقسم Data Insights.'
  },
  gre: {
    title: 'دورة التحضير لاختبار GRE للدراسات العليا',
    subtitle: 'طريقك نحو برامج الماجستير والدكتوراه العالمية مع استراتيجيات التفكير الكمي والتحليلي بدرجة 325+.',
    eyebrow: 'التحضير المتقدم لاختبار GRE · الشارقة والإمارات',
    badgeTitle: 'الدرجة المستهدفة +325',
    badgeSubtitle: 'مفردات متقدمة وتقنيات حل سريعة ونماذج محاكاة كاملة.'
  },
  foundation_jee: {
    title: 'البرنامج التأسيسي لاختبارات JEE و NEET',
    subtitle: 'بناء قاعدة علمية متينة في الرياضيات والفيزياء والكيمياء للقبول في كليات الهندسة والطب.',
    eyebrow: 'التأسيس الأكاديمي لاختبارات الهندسة والطب · الشارقة',
    badgeTitle: 'منهج علمي مكثف',
    badgeSubtitle: 'مسائل متقدمة وأسلوب تفكير تحليلي دقيق.'
  },
  ai_robotics_kids: {
    title: 'برنامج الروبوت والذكاء الاصطناعي للأطفال واليافعين',
    subtitle: 'تنمية شغف الابتكار والبرمجة وحل المشكلات العملية للأعمار من 8 إلى 16 سنة في بيئة معملية تفاعلية.',
    eyebrow: 'تعليم البرمجة والروبوتات للأطفال · الشارقة',
    badgeTitle: 'تطبيق عملي ممتع',
    badgeSubtitle: 'برمجة Python وروبوتات ومشاريع ابتكارية.'
  },
  maths: {
    title: 'دروس التقوية في الرياضيات (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'شرح مبسط وتأسيس عميق لجميع المراحل الدراسية مع حل نماذج الامتحانات السابقة وتحقيق أعلى الدرجات.',
    eyebrow: 'الدروس الخصوصية في الرياضيات · الشارقة',
    badgeTitle: 'فهم وتطبيق عملي',
    badgeSubtitle: 'مجموعات صغيرة ومتابعة مستمرة لكل طالب.'
  },
  physics: {
    title: 'دروس التقوية في الفيزياء (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'فهم عميق لقوانين الميكانيكا، الكهرومغناطيسية، والحرارة، مع حل مكثف للمسائل ونماذج الامتحانات الرسمية.',
    eyebrow: 'الدروس الخصوصية في الفيزياء · الشارقة',
    badgeTitle: 'فهم وتطبيق حسابي دقيق',
    badgeSubtitle: 'تدريب على أوراق الامتحانات وتجارب ATP Paper 6.'
  },
  chemistry: {
    title: 'دروس التقوية في الكيمياء (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'شرح مبسط للبنية الذرية، التفاعلات الكيميائية، والكيمياء العضوية مع التدريب على حل المسائل المعقدة.',
    eyebrow: 'الدروس الخصوصية في الكيمياء · الشارقة',
    badgeTitle: 'إتقان المعادلات والتجارب',
    badgeSubtitle: 'تبسيط المفاهيم النظرية وتطبيق عملي للاختبارات.'
  },
  biology: {
    title: 'دروس التقوية في علم الأحياء (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'إتقان علم الوراثة، الخلية، ووظائف الأعضاء مع تقنيات الإجابة النموذجية للأسئلة المقالية في امتحانات البورد.',
    eyebrow: 'الدروس الخصوصية في علم الأحياء · الشارقة',
    badgeTitle: 'فهم بيولوجي ورسوم توضيحية',
    badgeSubtitle: 'تدريب منهجي على مصطلحات ورسوم الامتحانات.'
  },
  science: {
    title: 'دروس التقوية في العلوم العامة والفيزياء والكيمياء والأحياء',
    subtitle: 'مناهج بريطانية وأمريكية ووزارية مع تركيز على التطبيق العلمي والاستعداد للاختبارات الوزارية والدولية.',
    eyebrow: 'الدروس الخصوصية الأكاديمية في العلوم · الشارقة',
    badgeTitle: 'تفوق أكاديمي مضمون',
    badgeSubtitle: 'شرح التجارب العلمية وأسئلة الامتحانات السابقة.'
  },
  economics: {
    title: 'دروس التقوية في الاقتصاد (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'تحليل قوى السوق، السياسات المالية والنقدية، والتجارة الدولية مع تدريب على صياغة المقالات الاقتصادية.',
    eyebrow: 'الدروس الخصوصية في الاقتصاد · الشارقة',
    badgeTitle: 'تحليل اقتصادي وبياني',
    badgeSubtitle: 'رسوم بيانية وحسابات المرونة والسياسات النقدية.'
  },
  accountancy: {
    title: 'دروس التقوية في المحاسبة والمالية المدرسية',
    subtitle: 'إتقان القيد المزدوج، ميزان المراجعة، الحسابات الختامية، وإعداد القوائم المالية وفق المناهج البريطانية والهندية.',
    eyebrow: 'الدروس الخصوصية في المحاسبة · الشارقة',
    badgeTitle: 'تأسيس محاسبي دقيق',
    badgeSubtitle: 'تمارين عملية مكثفة على الدفاتر والقيود المحاسبية.'
  },
  accounting: {
    title: 'دروس التقوية في المحاسبة والمالية المدرسية',
    subtitle: 'إتقان القيد المزدوج، ميزان المراجعة، الحسابات الختامية، وإعداد القوائم المالية وفق المناهج البريطانية والهندية.',
    eyebrow: 'الدروس الخصوصية في المحاسبة · الشارقة',
    badgeTitle: 'تأسيس محاسبي دقيق',
    badgeSubtitle: 'تمارين عملية مكثفة على الدفاتر والقيود المحاسبية.'
  },
  business_studies: {
    title: 'دروس التقوية في دراسات الأعمال (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'إتقان مفاهيم التسويق، التمويل، إدارة العمليات، والموارد البشرية مع دراسات حالة تطبيقية.',
    eyebrow: 'الدروس الخصوصية في إدارة الأعمال · الشارقة',
    badgeTitle: 'دراسات حالة وتحليل قرارات',
    badgeSubtitle: 'تدريب على استراتيجيات الحل للأسئلة التحليلية والمقالية.'
  },
  business: {
    title: 'دروس التقوية في دراسات الأعمال (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'إتقان مفاهيم التسويق، التمويل، إدارة العمليات، والموارد البشرية مع دراسات حالة تطبيقية.',
    eyebrow: 'الدروس الخصوصية في إدارة الأعمال · الشارقة',
    badgeTitle: 'دراسات حالة وتحليل قرارات',
    badgeSubtitle: 'تدريب على استراتيجيات الحل للأسئلة التحليلية والمقالية.'
  },
  social_science: {
    title: 'دروس التقوية في الدراسات الاجتماعية والتاريخ والجغرافيا',
    subtitle: 'فهم شامل للظواهر الجغرافية والتاريخية والتربية الوطنية بأسلوب تفاعلي ممتع يحقق أعلى الدرجات.',
    eyebrow: 'الدروس الخصوصية في الدراسات الاجتماعية · الشارقة',
    badgeTitle: 'استيعاب وتحليل منهجي',
    badgeSubtitle: 'خرائط ومصطلحات ونماذج أسئلة وزارية ودولية.'
  },
  english_tuition: {
    title: 'دروس التقوية في اللغة الإنجليزية (IGCSE, A-Level, IB, CBSE)',
    subtitle: 'تطوير مهارات القراءة التحليلية والكتابة الأكاديمية وفهم النصوص الأدبية وتحقيق أعلى الدرجات في الامتحانات.',
    eyebrow: 'الدروس الخصوصية في اللغة الإنجليزية · الشارقة',
    badgeTitle: 'تحليل نصوص وأدب إنجليزي',
    badgeSubtitle: 'مجموعات صغيرة وتأسيس لغوي وأكاديمي متقدم.'
  },
  cpcd: {
    title: 'الشهادة المهنية في التطوير والتوجيه المهني (CPCD)',
    subtitle: 'احترف مهارات الإرشاد المهني، وتخطيط المسارات الوظيفية، وبناء الكفاءات القيادية في بيئة الأعمال المعاصرة.',
    eyebrow: 'التوجيه والإرشاد المهني المعتمد · الشارقة',
    badgeTitle: 'اعتماد مهني في الإرشاد',
    badgeSubtitle: 'أدوات تقييم الميول وتخطيط النمو الوظيفي الفردي والمؤسسي.'
  }
};

const SNAPSHOT_LABELS_AR = {
  'qualification': 'المؤهل',
  'levels': 'المستويات',
  'duration': 'المدة',
  'mode': 'نمط الدراسة',
  'target': 'الفئة المستهدفة',
  'authorization': 'الاعتماد',
  'grades': 'الصفوف الدراسية',
  'format': 'الشكل',
  'curriculum': 'المنهج الدراسي',
  'focus': 'التركيز',
  'schedule': 'الجدول',
  'location': 'المقر',
  'accreditation': 'الاعتماد الدولي',
  'exam window': 'فترات الاختبار',
  'prerequisites': 'المتطلبات السابقة',
  'certificate': 'الشهادة الممنوحة',
  'programs': 'البرنامج',
  'track': 'المسار',
  'intake': 'مواعيد التسجيل'
};

const SNAPSHOT_VALUES_AR = {
  'online | offline | hybrid': 'حضوري | عبر الإنترنت | مدمج',
  'online | in-person': 'حضوري وعبر الإنترنت',
  'in-person & online': 'حضوري وعبر الإنترنت',
  'spea authorized': 'معتمد من هيئة الشارقة للتعليم الخاص',
  'flexible (module-based)': 'مرن (حسب الوحدات التدريبية)',
  'finance & accounting professionals': 'المتخصصون في المحاسبة والمالية',
  'all levels': 'جميع المستويات',
  'high school (grades 10–12)': 'المرحلة الثانوية (الصفوف 10–12)',
  'grades 6 to 12': 'الصفوف من 6 إلى 12',
  'assessment-led programme selection': 'اختيار البرنامج بناءً على تقييم تشخيصي',
  'reading, writing & mathematics': 'القراءة والكتابة والرياضيات',
  'intensive & flexible tracks': 'مسارات مكثفة ومرنة تناسب جدولك'
};

/**
 * Intelligent course-specific visual mapping:
 * Returns realistic, subject-referencing photography and metadata so that
 * anyone looking at the hero immediately knows which course it is
 * (e.g. English books/teaching for Spoken English, Cambridge test/headphones for IELTS,
 * math graphing tools for Maths, lab equipment for Science, UAE tax manuals for Finance, etc.)
 */
function getCourseVisuals(title = '', customImage = null, customBadgeTitle = null, customBadgeSubtitle = null, customEyebrow = null) {
  if (customImage) {
    return {
      heroImage: customImage,
      eyebrow: customEyebrow || 'NITAQ ACADEMY · EXPERT GUIDANCE · PROVEN PROGRESS',
      badgeTitle: customBadgeTitle || 'Verified Curriculum',
      badgeSubtitle: customBadgeSubtitle || 'Structured. Effective. Results-driven.',
      badgeIcon: 'award'
    };
  }

  const raw = title.toLowerCase();
  const norm = ` ${raw.replace(/[^a-z0-9]/g, ' ')} `;

  // 1. Spoken English (Language training)
  if (norm.includes(' spoken english ') || norm.includes(' english course ') || (norm.includes(' english ') && !norm.includes(' tuition ') && !norm.includes(' ielts '))) {
    return {
      heroImage: '/images/course_english_spoken.webp',
      eyebrow: 'ENGLISH LANGUAGE · FLUENCY & COMMUNICATION',
      badgeTitle: 'Practical Fluency',
      badgeSubtitle: 'Real-world dialogues & accent confidence.',
      badgeIcon: 'book'
    };
  }

  // 2. English School Subject Tuition
  if (norm.includes(' english tuition ') || (norm.includes(' english ') && norm.includes(' tuition '))) {
    return {
      heroImage: '/images/course_english_tuition.webp',
      eyebrow: 'ENGLISH TUITION · LITERATURE & ACADEMIC WRITING',
      badgeTitle: 'Critical Essay Analysis',
      badgeSubtitle: 'Shakespeare, poetry, comprehension & grammar.',
      badgeIcon: 'book'
    };
  }

  // 3. IELTS Preparation
  if (norm.includes(' ielts ')) {
    return {
      heroImage: '/images/course_ielts_prep.webp',
      eyebrow: 'IELTS PREPARATION · ACADEMIC & GENERAL TRAINING',
      badgeTitle: 'Target Band 7.5+',
      badgeSubtitle: 'Authentic Cambridge mocks & strategies.',
      badgeIcon: 'award'
    };
  }

  // 4. TOEFL & PTE
  if (norm.includes(' toefl ')) {
    return {
      heroImage: '/images/course_toefl_prep.webp',
      eyebrow: 'TOEFL iBT PREPARATION · UNIVERSITY ADMISSIONS',
      badgeTitle: 'Target 100+ Score',
      badgeSubtitle: 'Official ETS format, audio labs & speaking drills.',
      badgeIcon: 'award'
    };
  }
  if (norm.includes(' pte ')) {
    return {
      heroImage: '/images/course_pte_prep.webp',
      eyebrow: 'PTE ACADEMIC · GLOBAL STUDY & MIGRATION',
      badgeTitle: 'PTE Academic 79+',
      badgeSubtitle: 'Oral fluency, AI score analytics & mock exams.',
      badgeIcon: 'award'
    };
  }

  // 5. Arabic Language
  if (norm.includes(' arabic ')) {
    return {
      heroImage: '/images/course_arabic_language.webp',
      eyebrow: 'SPOKEN ARABIC · CONVERSATIONAL & PROFESSIONAL',
      badgeTitle: 'Native Immersion',
      badgeSubtitle: 'Dialects, vocabulary & UAE workplace fluency.',
      badgeIcon: 'book'
    };
  }

  // 6. French, German, Spanish
  if (norm.includes(' french ')) {
    return {
      heroImage: '/images/course_french_language.webp',
      eyebrow: 'FRENCH LANGUAGE · DELF A1-B2 & CONVERSATIONAL',
      badgeTitle: 'Alliance Française Prep',
      badgeSubtitle: 'Conjugations, vocabulary & fluent dialogue.',
      badgeIcon: 'book'
    };
  }
  if (norm.includes(' german ')) {
    return {
      heroImage: '/images/course_german_language.webp',
      eyebrow: 'GERMAN LANGUAGE · GOETHE-ZERTIFIKAT A1-B2',
      badgeTitle: 'Grammatik & Dialoge',
      badgeSubtitle: 'der/die/das system, speaking & writing.',
      badgeIcon: 'book'
    };
  }
  if (norm.includes(' spanish ')) {
    return {
      heroImage: '/images/course_spanish_language.webp',
      eyebrow: 'SPANISH LANGUAGE · DELE & PRACTICAL CONVERSATION',
      badgeTitle: 'DELE A1-B2 & Fluency',
      badgeSubtitle: 'Everyday communication & structured grammar.',
      badgeIcon: 'book'
    };
  }

  // 7. Mathematics Tuition
  if (norm.includes(' math ') || norm.includes(' maths ') || norm.includes(' calculus ')) {
    return {
      heroImage: '/images/course_maths_tuition.webp',
      eyebrow: 'MATHEMATICS TUITION · CLASS 1-12 & IGCSE / IB',
      badgeTitle: 'Concept Mastery',
      badgeSubtitle: 'Problem-solving, past papers & step marks.',
      badgeIcon: 'target'
    };
  }

  // 8. Physics Tuition
  if (norm.includes(' physics ')) {
    return {
      heroImage: '/images/course_physics_tuition.webp',
      eyebrow: 'PHYSICS TUITION · IGCSE, EDEXCEL, A-LEVEL & IB',
      badgeTitle: 'Mechanics & Optics',
      badgeSubtitle: 'Derivations, circuit theory & past papers.',
      badgeIcon: 'sparkles'
    };
  }

  // 9. Chemistry Tuition
  if (norm.includes(' chemistry ')) {
    return {
      heroImage: '/images/course_chemistry_tuition.webp',
      eyebrow: 'CHEMISTRY TUITION · ORGANIC, INORGANIC & PHYSICAL',
      badgeTitle: 'Stoichiometry & Reactions',
      badgeSubtitle: 'Lab concepts, molecular bonds & exam prep.',
      badgeIcon: 'sparkles'
    };
  }

  // 10. Biology Tuition
  if (norm.includes(' biology ')) {
    return {
      heroImage: '/images/course_biology_tuition.webp',
      eyebrow: 'BIOLOGY TUITION · HUMAN ANATOMY & GENETICS',
      badgeTitle: 'Cellular & DNA Mastery',
      badgeSubtitle: 'Diagrams, medical pathways & step marking.',
      badgeIcon: 'sparkles'
    };
  }

  // 11. General Science Tuition
  if (norm.includes(' science ') && !norm.includes(' social science ')) {
    return {
      heroImage: '/images/course_science_tuition.webp',
      eyebrow: 'GENERAL SCIENCE TUITION · STEM MASTERY CLASS 1-10',
      badgeTitle: 'Foundation STEM',
      badgeSubtitle: 'Curiosity-led, experiment-backed tutoring.',
      badgeIcon: 'sparkles'
    };
  }

  // 12. Economics & Business Studies Tuition
  if (norm.includes(' economics ') || norm.includes(' business studies ')) {
    return {
      heroImage: '/images/course_economics_business.webp',
      eyebrow: norm.includes(' economics ') ? 'ECONOMICS TUITION · MICRO & MACROECONOMICS' : 'BUSINESS STUDIES TUITION · IGCSE, IB & A-LEVEL',
      badgeTitle: norm.includes(' economics ') ? 'Market Equilibrium' : 'Strategic Case Studies',
      badgeSubtitle: 'Fiscal policy, business models & analytical diagrams.',
      badgeIcon: 'trending'
    };
  }

  // 13. Cybersecurity
  if (norm.includes(' cyber ')) {
    return {
      heroImage: '/images/course_cybersecurity_tech.webp',
      eyebrow: 'CYBERSECURITY · NETWORK DEFENSE & ETHICAL HACKING',
      badgeTitle: 'Threat Mitigation Labs',
      badgeSubtitle: 'Wireshark, firewalls, Linux & penetration testing.',
      badgeIcon: 'laptop'
    };
  }

  // 14. AI, Software Engineering & Data
  if (
    norm.includes(' ai ') || 
    norm.includes(' a i ') || 
    norm.includes(' artificial intelligence ') || 
    norm.includes(' machine learning ') || 
    norm.includes(' robotics ') || 
    norm.includes(' software ') || 
    norm.includes(' data ') || 
    norm.includes(' power bi ')
  ) {
    return {
      heroImage: norm.includes(' robotics ') ? '/images/kids_robotics_v2.webp' : '/images/course_ai_tech.webp',
      eyebrow: 'TECHNOLOGY & COMPUTING · PRACTICAL PROJECTS',
      badgeTitle: 'Hands-on Labs',
      badgeSubtitle: 'Industry tools, live code & portfolio projects.',
      badgeIcon: 'laptop'
    };
  }

  // 15. Accounting & Finance (ACCA, CMA, CPA, Tax, VAT)
  if (
    norm.includes(' acca ') || 
    norm.includes(' cma ') || 
    norm.includes(' cpa ') || 
    norm.includes(' tax ') || 
    norm.includes(' vat ') || 
    norm.includes(' finance ') || 
    norm.includes(' accountancy ')
  ) {
    return {
      heroImage: '/images/course_acca_finance.webp',
      eyebrow: 'FINANCE & ACCOUNTING · GLOBAL QUALIFICATIONS & TAX',
      badgeTitle: 'Chartered Tutors',
      badgeSubtitle: 'FTA compliance & global exam mastery.',
      badgeIcon: 'award'
    };
  }

  // 16. Marketing & Digital Marketing
  if (norm.includes(' marketing ')) {
    return {
      heroImage: '/images/digital_marketing_overview.webp',
      eyebrow: 'DIGITAL MARKETING · PERFORMANCE & STRATEGY',
      badgeTitle: 'Campaign Mastery',
      badgeSubtitle: 'SEO, Google Ads, Meta & Analytics.',
      badgeIcon: 'trending'
    };
  }

  // 17. GMAT & GRE
  if (norm.includes(' gmat ') || norm.includes(' gre ')) {
    return {
      heroImage: '/images/course_gmat_gre_prep.webp',
      eyebrow: 'GRADUATE ADMISSIONS · GMAT & GRE GENERAL',
      badgeTitle: 'Exam Preparation',
      badgeSubtitle: 'Official guides, timed sectionals & adaptive drills.',
      badgeIcon: 'target'
    };
  }

  // 18. IIT-JEE & NEET Foundation
  if (norm.includes(' jee ') || norm.includes(' neet ')) {
    return {
      heroImage: '/images/jee_neet_v2.webp',
      eyebrow: 'ENGINEERING & MEDICAL FOUNDATION · JEE & NEET COACHING',
      badgeTitle: 'Problem-Solving Drills',
      badgeSubtitle: 'HC Verma, advanced mechanics & chemistry mastery.',
      badgeIcon: 'target'
    };
  }

  // 19. Social Science & Humanities Tuition
  if (norm.includes(' social science ') || norm.includes(' history ') || norm.includes(' geography ') || norm.includes(' civics ')) {
    return {
      heroImage: '/images/course_social_science.webp',
      eyebrow: 'SOCIAL SCIENCE TUITION · HISTORY, CIVICS & GEOGRAPHY',
      badgeTitle: 'Conceptual Analysis',
      badgeSubtitle: 'Cartography, timeline mastery & structured answers.',
      badgeIcon: 'book'
    };
  }

  // 20. HR, Management & Corporate Training
  if (norm.includes(' hrm ') || norm.includes(' chrm ') || norm.includes(' corporate ') || norm.includes(' soft skills ') || norm.includes(' sales ') || norm.includes(' business ')) {
    return {
      heroImage: '/images/hrm_pro_v2.webp',
      eyebrow: 'EXECUTIVE & CORPORATE DEVELOPMENT · SKILLS FOR UAE',
      badgeTitle: 'Leadership Focus',
      badgeSubtitle: 'Workshops, negotiation tactics & HR strategy.',
      badgeIcon: 'users'
    };
  }

  // 21. General School Subject Tuition (Academic Excellence)
  if (norm.includes(' tuition ') || norm.includes(' academic ')) {
    return {
      heroImage: '/images/course_academic_tuition.webp',
      eyebrow: 'SUBJECT TUITION · IGCSE, EDEXCEL, IB & CBSE',
      badgeTitle: 'Micro-Batch Support',
      badgeSubtitle: 'Individual attention & diagnostic tracking.',
      badgeIcon: 'book'
    };
  }

  // Default fallback
  return {
    heroImage: '/images/course_academic_tuition.webp',
    eyebrow: 'NITAQ ACADEMY · EXPERT GUIDANCE · PROVEN PROGRESS',
    badgeTitle: 'Academic Excellence',
    badgeSubtitle: 'Structured. Effective. Results-driven.',
    badgeIcon: 'award'
  };
}

/**
 * Returns clean modern SVG icons for snapshot strip items based on label/index
 */
function getSnapshotIcon(index, label = '') {
  const l = label.toLowerCase();
  if (l.includes('grade') || l.includes('module') || l.includes('subject') || l.includes('level') || l.includes('program')) {
    return <BookOpen size={22} />;
  }
  if (l.includes('schedule') || l.includes('duration') || l.includes('time') || l.includes('batch')) {
    return <Clock size={22} />;
  }
  if (l.includes('mode') || l.includes('delivery') || l.includes('format')) {
    return <Monitor size={22} />;
  }
  if (l.includes('license') || l.includes('authoriz') || l.includes('certif') || l.includes('focus') || l.includes('target')) {
    return <ShieldCheck size={22} />;
  }

  // Default fallback icons by position
  const defaults = [<BookOpen size={22} />, <Clock size={22} />, <Monitor size={22} />, <Award size={22} />];
  return defaults[index % defaults.length];
}

function renderBadgeIcon(iconName) {
  switch (iconName) {
    case 'target':
      return <Target size={22} />;
    case 'laptop':
      return <Laptop size={22} />;
    case 'sparkles':
      return <Sparkles size={22} />;
    case 'trending':
      return <TrendingUp size={22} />;
    case 'users':
      return <Users size={22} />;
    case 'book':
      return <BookOpen size={22} />;
    case 'award':
    default:
      return <Award size={22} />;
  }
}

const CourseLayout = ({ 
  title, 
  subtitle, 
  infoData, 
  heroImage, 
  badgeTitle, 
  badgeSubtitle, 
  eyebrow, 
  children 
}) => {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  
  // Find arabic course lookup if available (matching most specific multi-word keys first)
  const rawKey = (title || '').toLowerCase().replace(/[^a-z0-9]+/g, '_');
  let matchedLookup = null;
  const sortedLookups = Object.entries(COURSE_ARABIC_LOOKUP).sort((a, b) => b[0].length - a[0].length);
  for (const [k, v] of sortedLookups) {
    if (rawKey.includes(k)) {
      matchedLookup = v;
      break;
    }
  }

  const effectiveTitle = (isAr && matchedLookup?.title) || title;
  const effectiveSubtitle = (isAr && matchedLookup?.subtitle) || subtitle;
  const courseSlug = title ? title.split(' - ')[0].toLowerCase().replace(/[^a-z0-9]+/g, '_') : 'course';
  const visuals = getCourseVisuals(title, heroImage, badgeTitle, badgeSubtitle, eyebrow);
  const curr = getArabicCurriculum(title);

  const effectiveEyebrow = (isAr && matchedLookup?.eyebrow) || visuals.eyebrow;
  const effectiveBadgeTitle = (isAr && matchedLookup?.badgeTitle) || visuals.badgeTitle;
  const effectiveBadgeSubtitle = (isAr && matchedLookup?.badgeSubtitle) || visuals.badgeSubtitle;

  // Normalize infoData into up to 4 items for the snapshot strip
  const snapshotEntries = infoData ? Object.entries(infoData).slice(0, 4) : [];

  const translateSnapshotLabel = (lbl) => {
    if (!isAr) return lbl;
    const lower = lbl.toLowerCase().trim();
    return SNAPSHOT_LABELS_AR[lower] || lbl;
  };

  const translateSnapshotValue = (val) => {
    if (!isAr || typeof val !== 'string') return val;
    const lower = val.toLowerCase().trim();
    return SNAPSHOT_VALUES_AR[lower] || val;
  };

  return (
    <main className="sat-landing-page course-landing-page">
      {/* ── 1. HERO SECTION (Identical to SAT Course Landing Page) ────────── */}
      <section className="sat-hero-section">
        {/* Smooth Sweeping Green Arch Background on Right */}
        <div className="sat-hero-arch-bg" />

        <div className="sat-hero-container">
          <div className="sat-hero-content">
            <div className="sat-hero-eyebrow">
              {effectiveEyebrow}
            </div>

            <h1 className="sat-hero-heading">
              {effectiveTitle}
            </h1>

            <p className="sat-hero-description">
              {effectiveSubtitle}
            </p>

            <div className="sat-hero-cta-group">
              <a
                href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً أكاديمية نطاق، أود الاستفسار عن ${effectiveTitle}` : `I am interested in ${title}`)}`}
                className="sat-btn-primary"
                onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `enroll_${courseSlug}`)}
              >
                {isAr ? 'سجل اليوم ←' : 'Enroll Today →'}
              </a>
              <a
                href="tel:+971527569908"
                className="sat-btn-secondary"
                onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, `advisor_${courseSlug}`)}
              >
                {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak to an Advisor'}
              </a>
            </div>

            <div className="sat-hero-trust-line">
              <span className="sat-trust-check-icon">✓</span>
              {isAr ? 'خيارات تعلم مرنة · حضوري وعبر الإنترنت · الشارقة والإمارات' : 'Flexible learning · In-Person & Live Online · Sharjah & UAE'}
            </div>
          </div>

          <div className="sat-hero-image-col">
            <div className="sat-hero-image-wrapper">
              <img
                src={visuals.heroImage}
                alt={effectiveTitle}
                width="540"
                height="500"
                fetchPriority="high"
              />

              {/* Floating Rounded Badge Over Image */}
              <div className="sat-hero-floating-badge">
                <div className="sat-floating-icon-box">
                  {renderBadgeIcon(visuals.badgeIcon)}
                </div>
                <div>
                  <div className="sat-floating-title">{effectiveBadgeTitle}</div>
                  <div className="sat-floating-subtitle">{effectiveBadgeSubtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COURSE SNAPSHOT STRIP (Identical to SAT Course Landing Page) ── */}
      {snapshotEntries.length > 0 && (
        <section className="sat-snapshot-strip">
          <div className="sat-snapshot-container">
            {snapshotEntries.map(([label, value], idx) => (
              <div key={label} className="sat-snapshot-item">
                <div className="sat-snapshot-icon-wrapper">
                  {getSnapshotIcon(idx, label)}
                </div>
                <div>
                  <div className="sat-snapshot-label">{translateSnapshotLabel(label)}</div>
                  <div className="sat-snapshot-value">{translateSnapshotValue(value)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 3. MAIN COURSE CONTENT (Preserving 100% of all existing content in English, authentic Arabic curriculum when in Arabic) ── */}
      <section className="course-body-section">
        <div className="sat-section-container">
          {isAr ? (
            <div className="arabic-course-content">
              {/* Program Overview Card */}
              <div className="content-card">
                <h2>{curr.overviewTitle}</h2>
                <div className="overview-text">
                  {curr.overviewParas.map((para, i) => (
                    <p key={i} style={{ marginBottom: i === curr.overviewParas.length - 1 ? 0 : '15px' }}>
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Study Tracks & Modules */}
              {curr.tracks && curr.tracks.length > 0 && (
                <div className="content-card">
                  <h2>{curr.tracksTitle}</h2>
                  <div className="tracks-grid">
                    {curr.tracks.map((track, i) => (
                      <div key={i} className="feature-item" style={{ borderTop: `4px solid ${track.color || 'var(--primary-color)'}` }}>
                        <h3 style={{ color: track.color || 'var(--primary-color)', marginBottom: '10px' }}>{track.title}</h3>
                        <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>{track.subtitle}</p>
                        <ul className="styled-list">
                          {track.items.map((item, j) => (
                            <li key={j}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why Choose Nitaq Card */}
              {curr.whyItems && (
                <div className="content-card">
                  <h2>{curr.whyTitle}</h2>
                  <ul className="styled-list">
                    {curr.whyItems.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Outcomes & Path */}
              {(curr.idealFor || curr.careers) && (
                <div className="outcomes-grid">
                  {curr.idealFor && (
                    <div className="content-card" style={{ marginBottom: 0 }}>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>الفئات المستهدفة</h3>
                      <ul className="styled-list">
                        {curr.idealFor.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {curr.careers && (
                    <div className="content-card" style={{ marginBottom: 0 }}>
                      <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>الفرص والآفاق المهنية</h3>
                      <ul className="styled-list">
                        {curr.careers.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Institutional Why Nitaq */}
              <WhyNitaq />
            </div>
          ) : (
            children
          )}
        </div>
      </section>

      {/* ── 4. FINAL CALL TO ACTION BANNER (Matching SAT Design) ─────────── */}
      <section className="sat-final-cta-section">
        <div className="sat-final-cta-container">
          <h2 className="sat-final-cta-title">
            {isAr ? 'جاهز للانطلاق في مسيرتك التعليمية؟' : 'Ready to take the next step?'}
          </h2>
          <p className="sat-final-cta-desc">
            {isAr
              ? 'تحدث مع مستشارينا الأكاديميين في الشارقة للحصول على خطة تعليمية مخصصة تناسب أهدافك وجدولك الزمني.'
              : 'Speak with our academic advisors and find the right learning plan tailored to your schedule and goals.'}
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`https://wa.me/971527569908?text=${encodeURIComponent(isAr ? `مرحباً، أود التسجيل في ${effectiveTitle}` : `I want to enroll in ${title}`)}`}
              className="sat-btn-cta-white"
              onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, `final_cta_enroll_${courseSlug}`)}
            >
              {isAr ? 'سجل اليوم ←' : 'Enroll Today →'}
            </a>
            <a
              href="tel:+971527569908"
              className="sat-btn-cta-outline"
              onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, `final_cta_advisor_${courseSlug}`)}
            >
              {isAr ? 'تحدث مع مستشار أكاديمي' : 'Speak to an Advisor'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CourseLayout;
