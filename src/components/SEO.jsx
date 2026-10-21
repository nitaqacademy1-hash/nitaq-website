import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoRoute } from '../seo-routes';
import { LANGUAGES, langFromPath, stripLangPrefix, localizePath } from '../i18n/config';
import { isArabicPublished } from '../i18n/published';

const SITE_URL = 'https://www.nitaqacademy.com';
const REVIEWED_COURSE_SCHEMA_PATHS = new Set(['/sat-preparation-sharjah', '/sat-preparation-dubai']);
const NOINDEX_PATHS = [/^\/admin(?:\/|$)/, /^\/sat\/(?:results|diagnostic\/results|diagnostic\/quiz|diagnostic\/math-report)/, /^\/verify(?:-|\/|$)/, /^\/enquiry$/, /^\/ig\//, /thank-you$/];

const SOCIAL_PROFILES = [
  'https://www.youtube.com/@NitaqAcademy',
  'https://www.instagram.com/nitaqtraining',
  'https://www.facebook.com/nitaqtraining',
  'https://www.linkedin.com/company/nitaqtraining'
];

const SEO = ({ title, description, faqSchema, ogTitle, ogDescription, ogImage, noIndex = false } = {}) => {
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const basePath = stripLangPrefix(location.pathname);
  const locale = LANGUAGES[lang];
  const fallback = {
    title: 'Nitaq Academy | Education and Training in Sharjah',
    description: 'Explore education and training programmes at Nitaq Academy in Al Majaz 3, Sharjah.',
    ogImage: '/images/logo1.webp'
  };
  const raw = getSeoRoute(basePath, lang) || fallback;
  const isAr = lang === 'ar';
  const hasArabic = (s) => /[\u0600-\u06FF]/.test(s || '');
  const data = {
    ...raw,
    ...(title && (!isAr || hasArabic(title) || !hasArabic(raw.title)) && { title }),
    ...(description && (!isAr || hasArabic(description) || !hasArabic(raw.description)) && { description }),
    ...(ogTitle && (!isAr || hasArabic(ogTitle) || !hasArabic(raw.ogTitle)) && { ogTitle }),
    ...(ogDescription && (!isAr || hasArabic(ogDescription) || !hasArabic(raw.ogDescription)) && { ogDescription }),
    ...(ogImage && { ogImage })
  };
  const effectiveOgTitle = (isAr && !hasArabic(data.ogTitle)) ? data.title : (data.ogTitle || data.title);
  const effectiveOgDescription = (isAr && !hasArabic(data.ogDescription)) ? data.description : (data.ogDescription || data.description);
  const socialTitle = ogTitle || (title ? data.title : effectiveOgTitle);
  const socialDescription = ogDescription || (description ? data.description : effectiveOgDescription);
  const canonical = `${SITE_URL}${localizePath(basePath, lang)}`;
  const image = (data.ogImage || fallback.ogImage).startsWith('http') ? data.ogImage : `${SITE_URL}${data.ogImage || fallback.ogImage}`;
  const isUntranslatedArabic = lang === 'ar' && !isArabicPublished(basePath);
  const shouldNoIndex = noIndex || isUntranslatedArabic || NOINDEX_PATHS.some((rule) => rule.test(basePath));
  const schemas = [
    {
      '@type': ['EducationalOrganization', 'LocalBusiness'],
      '@id': `${SITE_URL}/#organization`,
      name: 'Nitaq Academy',
      legalName: 'Nitaq Supportive Education Services LLC',
      url: `${SITE_URL}/`,
      description: isAr
        ? 'أكاديمية نطاق للتدريب والتعليم في الشارقة (المجاز 3) ودبي - معهد معتمد من هيئة الشارقة للتعليم الخاص (SPEA) لتحضير اختبارات SAT الرقمية، دروس تقوية المناهج المدرسية، دورات اللغات والشهادات المهنية.'
        : 'SPEA-authorized educational training institute in Sharjah (Al Majaz 3) and Dubai, UAE. Specializing in diagnostic-led Digital SAT preparation, small-batch school subject tuition (IGCSE, A-Level, IB, CBSE), language training, and professional corporate certifications.',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo1.webp` },
      telephone: '+971527569908',
      email: 'info@nitaqacademy.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz',
        addressLocality: 'Sharjah',
        addressRegion: 'Sharjah',
        addressCountry: 'United Arab Emirates'
      },
      areaServed: [
        { '@type': 'City', name: 'Sharjah' },
        { '@type': 'City', name: 'Dubai' },
        { '@type': 'City', name: 'Abu Dhabi' },
        { '@type': 'City', name: 'Ajman' },
        { '@type': 'City', name: 'Ras Al Khaimah' },
        { '@type': 'City', name: 'Fujairah' },
        { '@type': 'City', name: 'Umm Al Quwain' },
        { '@type': 'Country', name: 'United Arab Emirates' }
      ],
      sameAs: SOCIAL_PROFILES,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '25.3262',
        longitude: '55.3785'
      },
      hasMap: 'https://maps.google.com/?q=Abu+Khamseen+Tower+Sharjah',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '21:30'
        }
      ],
      priceRange: 'AED 1200 - AED 4800',
      knowsAbout: [
        'Digital SAT Preparation',
        'Desmos Graphing Calculator Speed Strategies',
        'College Board Bluebook Adaptive Testing',
        'Cambridge IGCSE Tuition',
        'Cambridge International A-Level Tuition',
        'Pearson Edexcel IGCSE & A-Level',
        'International Baccalaureate (IB) DP SL & HL Tutoring',
        'IB Middle Years Programme (MYP)',
        'CBSE Class 10 & 12 Board Coaching',
        'American Curriculum & AP Exam Preparation',
        'Pure Mathematics & Calculus Tuition',
        'IGCSE & A-Level Physics Tuition',
        'IGCSE & A-Level Chemistry Tuition',
        'IGCSE & A-Level Biology Tuition',
        'Business Studies & Economics Tuition',
        'Accountancy & Financial Accounting Tuition',
        'English Language & Literature Tuition',
        'IELTS Academic & General Training',
        'TOEFL iBT & PTE Academic Preparation',
        'GMAT Focus & GRE General Test Coaching',
        'Foundation for IIT JEE & NEET',
        'Spoken Arabic & Emirati Khaleeji Dialect',
        'Modern Standard Arabic (MSA)',
        'Spoken English & CEFR Fluency (A1 to C2)',
        'French DELF & DALF Certification',
        'German Goethe-Zertifikat A1-B2',
        'Spanish Language DELE Preparation',
        'ACCA (Association of Chartered Certified Accountants)',
        'US CMA (Certified Management Accountant)',
        'US CPA (Certified Public Accountant)',
        'UAE Corporate Tax Law & Compliance (Decree-Law No. 47/2022)',
        'UAE Value Added Tax (VAT) Practitioner',
        'Microsoft Power BI & Financial Excel Modeling',
        'Python Programming & Applied AI',
        'Professional Digital Marketing & SEO (GA4, Google Ads, Meta Ads)',
        'Corporate Training & Executive Workshops in Sharjah & Dubai'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nitaq Academy Educational Programmes & Certifications',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Digital SAT Preparation Sharjah & Dubai' }, url: `${SITE_URL}/sat-preparation-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Free Digital SAT Diagnostic Assessment' }, url: `${SITE_URL}/sat/diagnostic` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'School Subject Tuition (IGCSE, A-Level, IB, CBSE)' }, url: `${SITE_URL}/academic-excellence` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Mathematics Tuition Sharjah (IGCSE, A-Level, IB, CBSE)' }, url: `${SITE_URL}/maths-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Science Tuition (Physics, Chemistry, Biology)' }, url: `${SITE_URL}/science-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Physics Tuition Sharjah' }, url: `${SITE_URL}/physics-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Chemistry Tuition Sharjah' }, url: `${SITE_URL}/chemistry-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Biology Tuition Sharjah' }, url: `${SITE_URL}/biology-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Business Studies Tuition Sharjah' }, url: `${SITE_URL}/business-studies-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Accountancy Tuition Sharjah' }, url: `${SITE_URL}/accountancy-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'English Tuition Sharjah' }, url: `${SITE_URL}/english-tuition-sharjah` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Language Training (English, Arabic, French, German, Spanish)' }, url: `${SITE_URL}/language-trainings` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Spoken English Course Sharjah' }, url: `${SITE_URL}/spoken-english` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'IELTS Academic & General Preparation' }, url: `${SITE_URL}/ielts-course` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'TOEFL iBT Preparation Course' }, url: `${SITE_URL}/toefl-course` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'PTE Academic Preparation Course' }, url: `${SITE_URL}/pte-course` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'GMAT Focus Edition Preparation' }, url: `${SITE_URL}/gmat-preparation` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'GRE General Test Preparation' }, url: `${SITE_URL}/gre-preparation` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Professional Certifications (ACCA, CMA, CPA, Tax, AI)' }, url: `${SITE_URL}/professional-certifications` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'ACCA Qualification Course' }, url: `${SITE_URL}/acca-course` },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Corporate Training & Workforce Development' }, url: `${SITE_URL}/corporate-trainings` }
        ]
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Nitaq Academy',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: lang
    },
    {
      '@type': 'WebPage',
      '@id': canonical,
      url: canonical,
      name: data.title,
      description: data.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: lang,
      datePublished: data.datePublished || '2026-01-15T08:00:00+04:00',
      dateModified: data.dateModified || '2026-10-21T12:00:00+04:00'
    }
  ];
  // Breadcrumb markup needs to match the visible trail, which varies across
  // article and course templates. Do not infer a hierarchy from URL segments.
  // Legacy courseSchema entries include unverified score, duration and
  // accreditation claims. Add Course markup only for reviewed course details.
  if (data.courseSchema && REVIEWED_COURSE_SCHEMA_PATHS.has(basePath)) schemas.push({ '@type': 'Course', name: data.courseSchema.name, description: data.description, url: canonical, provider: { '@id': `${SITE_URL}/#organization` } });
  const visibleFaq = Array.isArray(faqSchema) ? faqSchema : (Array.isArray(data.faqSchema) ? data.faqSchema : null);
  if (visibleFaq?.length) schemas.push({ '@type': 'FAQPage', mainEntity: visibleFaq.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) });

  return <Helmet htmlAttributes={{ lang: locale.code, dir: locale.dir }}>
    <title>{data.title}</title><meta name="description" content={data.description} />
    <meta name="author" content="Nitaq Academy" />
    <meta name="publisher" content="Nitaq Academy" />
    {data.keywords && <meta name="keywords" content={data.keywords} />}
    <meta name="robots" content={shouldNoIndex ? 'noindex, follow' : 'index, follow'} /><link rel="canonical" href={canonical} />
    {!shouldNoIndex && isArabicPublished(basePath) && [
      <link key="en" rel="alternate" hrefLang="en" href={`${SITE_URL}${basePath === '/' ? '/' : basePath}`} />,
      <link key="ar" rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar${basePath === '/' ? '' : basePath}`} />,
      <link key="xd" rel="alternate" hrefLang="x-default" href={`${SITE_URL}${basePath === '/' ? '/' : basePath}`} />
    ]}
    <meta property="og:url" content={canonical} /><meta property="og:title" content={socialTitle} /><meta property="og:description" content={socialDescription} /><meta property="og:type" content={basePath.startsWith('/article/') ? 'article' : 'website'} /><meta property="og:locale" content={locale.ogLocale} /><meta property="og:image" content={image} />
    {SOCIAL_PROFILES.map((url) => (
      <meta key={url} property="og:see_also" content={url} />
    ))}
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={socialTitle} /><meta name="twitter:description" content={socialDescription} /><meta name="twitter:image" content={image} />
    {!shouldNoIndex && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas })}</script>}
  </Helmet>;
};

export default SEO;
