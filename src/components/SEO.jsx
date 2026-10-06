import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoRoute } from '../seo-routes';
import { LANGUAGES, langFromPath, stripLangPrefix, localizePath } from '../i18n/config';
import { isArabicPublished } from '../i18n/published';

const SITE_URL = 'https://www.nitaqacademy.com';
const REVIEWED_COURSE_SCHEMA_PATHS = new Set(['/sat-preparation-sharjah', '/sat-preparation-dubai']);
const NOINDEX_PATHS = [/^\/admin(?:\/|$)/, /^\/sat\/(?:results|diagnostic\/results|diagnostic\/quiz|diagnostic\/math-report)/, /^\/verify(?:-|\/|$)/, /^\/enquiry$/, /^\/ig\//, /thank-you$/];

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
      '@type': ['EducationalOrganization', 'LocalBusiness'], '@id': `${SITE_URL}/#organization`, name: 'Nitaq Academy', legalName: 'Nitaq Supportive Education Services LLC', url: `${SITE_URL}/`,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo1.webp` }, telephone: '+971527569908', email: 'info@nitaqacademy.com',
      address: { '@type': 'PostalAddress', streetAddress: 'Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz', addressLocality: 'Sharjah', addressRegion: 'Sharjah', addressCountry: 'United Arab Emirates' },
      areaServed: { '@type': 'City', name: 'Sharjah' },
      hasOfferCatalog: basePath === '/' ? { '@type': 'OfferCatalog', name: 'Core programmes', itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Digital SAT Preparation' }, url: `${SITE_URL}/sat-preparation-sharjah` },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Language Training' }, url: `${SITE_URL}/language-trainings` },
        { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Subject Tuition' }, url: `${SITE_URL}/academic-excellence` }
      ] } : undefined
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Nitaq Academy', publisher: { '@id': `${SITE_URL}/#organization` }, inLanguage: lang },
    { '@type': 'WebPage', '@id': canonical, url: canonical, name: data.title, description: data.description, isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': `${SITE_URL}/#organization` }, inLanguage: lang }
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
    <meta name="robots" content={shouldNoIndex ? 'noindex, follow' : 'index, follow'} /><link rel="canonical" href={canonical} />
    {!shouldNoIndex && isArabicPublished(basePath) && [
      <link key="en" rel="alternate" hrefLang="en" href={`${SITE_URL}${basePath === '/' ? '/' : basePath}`} />,
      <link key="ar" rel="alternate" hrefLang="ar" href={`${SITE_URL}/ar${basePath === '/' ? '' : basePath}`} />,
      <link key="xd" rel="alternate" hrefLang="x-default" href={`${SITE_URL}${basePath === '/' ? '/' : basePath}`} />
    ]}
    <meta property="og:url" content={canonical} /><meta property="og:title" content={socialTitle} /><meta property="og:description" content={socialDescription} /><meta property="og:type" content={basePath.startsWith('/article/') ? 'article' : 'website'} /><meta property="og:locale" content={locale.ogLocale} /><meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content={socialTitle} /><meta name="twitter:description" content={socialDescription} /><meta name="twitter:image" content={image} />
    {!shouldNoIndex && <script type="application/ld+json">{JSON.stringify({ '@context': 'https://schema.org', '@graph': schemas })}</script>}
  </Helmet>;
};

export default SEO;
