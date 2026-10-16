// One navigation map for the homepage, course pages and footer. All paths are
// existing routes; the localized Link component supplies reviewed /ar paths.
const item = (path, en, ar) => ({ path, label: { en, ar } });

export const primaryNavigation = [
  {
    id: 'sat', path: '/sat-preparation-sharjah', label: { en: 'SAT Preparation', ar: 'التحضير لاختبار SAT' },
    groups: [{ label: { en: 'Start here', ar: 'ابدأ هنا' }, links: [
      item('/sat/diagnostic', 'Free SAT diagnostic', 'تقييم SAT المجاني'),
      item('/sat-preparation-dubai', 'SAT preparation in Dubai', 'التحضير لاختبار SAT في دبي')
    ] }]
  },
  {
    id: 'tuition', path: '/academic-excellence', label: { en: 'School Tuition', ar: 'الدروس المدرسية' },
    groups: [
      { label: { en: 'By curriculum', ar: 'حسب المنهج' }, links: [item('/academic-excellence', 'IGCSE, A-Level, IB & CBSE', 'IGCSE و A-Level و IB و CBSE')] },
      { label: { en: 'By subject', ar: 'حسب المادة' }, links: [
        item('/maths-tuition-sharjah', 'Mathematics', 'الرياضيات'), item('/science-tuition-sharjah', 'Science', 'العلوم'),
        item('/physics-tuition-sharjah', 'Physics', 'الفيزياء'), item('/chemistry-tuition-sharjah', 'Chemistry', 'الكيمياء'),
        item('/biology-tuition-sharjah', 'Biology', 'الأحياء'), item('/english-tuition-sharjah', 'English', 'اللغة الإنجليزية'),
        item('/business-studies-tuition-sharjah', 'Business Studies', 'دراسات الأعمال'),
        item('/accountancy-tuition-sharjah', 'Accountancy', 'المحاسبة'), item('/economics-tuition-sharjah', 'Economics', 'الاقتصاد'),
        item('/social-science-tuition-sharjah', 'Social Science', 'العلوم الاجتماعية')
      ] }
    ]
  },
  {
    id: 'languages', path: '/language-trainings', label: { en: 'Languages & Test Prep', ar: 'اللغات واختبارات اللغة' },
    groups: [
      { label: { en: 'Language courses', ar: 'دورات اللغات' }, links: [
        item('/spoken-english', 'English', 'الإنجليزية'), item('/spoken-arabic', 'Arabic', 'العربية'),
        item('/french', 'French', 'الفرنسية'), item('/spanish', 'Spanish', 'الإسبانية'), item('/german', 'German', 'الألمانية')
      ] },
      { label: { en: 'English exams', ar: 'اختبارات اللغة الإنجليزية' }, links: [
        item('/ielts-course', 'IELTS', 'IELTS'), item('/toefl-course', 'TOEFL', 'TOEFL'), item('/pte-course', 'PTE Academic', 'PTE Academic')
      ] }
    ]
  },
  {
    id: 'professional', path: '/professional-certifications', label: { en: 'Professional Courses', ar: 'الدورات المهنية' },
    groups: [
      { label: { en: 'Finance & tax', ar: 'المالية والضرائب' }, links: [
        item('/acca-course', 'ACCA', 'ACCA'), item('/cma-course', 'CMA', 'CMA'), item('/cpa-course', 'CPA', 'CPA'),
        item('/uae-corporate-tax', 'UAE Corporate Tax', 'ضريبة الشركات'), item('/uae-vat', 'UAE VAT', 'ضريبة القيمة المضافة'),
        item('/finance-courses', 'All finance courses', 'جميع الدورات المالية')
      ] },
      { label: { en: 'Tech & AI', ar: 'التقنية والذكاء الاصطناعي' }, links: [
        item('/ai-course', 'AI & Machine Learning', 'الذكاء الاصطناعي'), item('/cybersecurity-course-sharjah', 'Cybersecurity', 'الأمن السيبراني'),
        item('/software-engineering-diploma-sharjah', 'Software Engineering', 'هندسة البرمجيات'), item('/power-bi-excel', 'Power BI & Excel', 'Power BI و Excel'),
        item('/courses/professional-digital-marketing-course-sharjah-uae', 'Digital Marketing', 'التسويق الرقمي'),
        item('/data-management', 'Data Management', 'إدارة البيانات')
      ] },
      { label: { en: 'Business & HR', ar: 'الأعمال والموارد البشرية' }, links: [
        item('/corporate-trainings', 'Corporate Training', 'التدريب المؤسسي'), item('/chrm', 'CHRM', 'CHRM'),
        item('/hrm-courses', 'HRM', 'HRM'), item('/soft-skills-training', 'Soft Skills', 'المهارات الشخصية'),
        item('/sales-negotiations', 'Sales & Negotiation', 'المبيعات والتفاوض'), item('/professional-marketing-course', 'Professional Marketing', 'التسويق الاحترافي'),
        item('/cpcd-courses', 'CPCD', 'CPCD')
      ] },
      { label: { en: 'Other preparation', ar: 'اختبارات وبرامج أخرى' }, links: [
        item('/gmat-preparation', 'GMAT', 'GMAT'), item('/gre-preparation', 'GRE', 'GRE'),
        item('/foundation-jee-neet', 'JEE / NEET Foundation', 'التأسيس JEE / NEET'),
        item('/ai-robotics-kids', 'AI & Robotics for Kids', 'الروبوت للأطفال'),
        item('/test-preparations', 'All test preparation', 'جميع اختبارات القبول'), item('/courses', 'All courses', 'جميع الدورات')
      ] }
    ]
  },
  { id: 'about', path: '/about', label: { en: 'About Us', ar: 'من نحن' } },
  { id: 'resources', path: '/articles', label: { en: 'Resources', ar: 'المقالات' } }
];

export const navigationLabel = (entry, lang) => entry.label[lang] || entry.label.en;
