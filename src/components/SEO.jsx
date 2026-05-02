import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoRoute } from '../seo-routes';

/**
 * SEO component with full structured data support.
 * Dynamically infers the current route and looks up all meta tags
 * centrally from src/seo-routes.js.
 */
const SEO = () => {
  const location = useLocation();
  const siteUrl = 'https://www.nitaqacademy.com';
  
  // Find SEO data from central directory, or fallback to generic defaults
  const routeData = getSeoRoute(location.pathname) || {
    title: "Nitaq Academy Sharjah | IELTS, ACCA, AI & Language Courses",
    description: "Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses.",
    canonical: `${siteUrl}${location.pathname}`,
    ogTitle: "Nitaq Academy Sharjah | IELTS, ACCA, AI & Language Courses",
    ogDescription: "Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses.",
    ogImage: "/images/logo1.webp",
    twitterCard: "summary_large_image",
    courseSchema: null,
    faqSchema: null
  };

  const fullUrl = routeData.canonical || `${siteUrl}${location.pathname}`;
  const ogImageUrl = routeData.ogImage.startsWith('http') ? routeData.ogImage : `${siteUrl}${routeData.ogImage}`;

  const buildCourseJsonLd = (cs) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: cs.name,
    description: cs.description,
    url: fullUrl,
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Nitaq Academy',
      url: siteUrl,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sharjah',
        addressCountry: 'AE',
      },
    },
    ...(cs.duration && { timeRequired: cs.duration }),
    ...(cs.mode && { courseMode: cs.mode }),
    ...(cs.educationalLevel && { educationalLevel: cs.educationalLevel }),
    ...(cs.teaches && { teaches: cs.teaches }),
    ...(cs.image && { image: cs.image }),
    ...(cs.inLanguage && { inLanguage: cs.inLanguage }),
    ...(cs.offers && {
      offers: {
        '@type': 'Offer',
        priceCurrency: 'AED',
        availability: 'https://schema.org/InStock',
        ...cs.offers,
      },
    }),
  });

  const buildFaqJsonLd = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  });

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{routeData.title}</title>
      <meta name="description" content={routeData.description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={routeData.ogTitle || routeData.title} />
      <meta property="og:description" content={routeData.ogDescription || routeData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={routeData.twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={routeData.ogTitle || routeData.title} />
      <meta name="twitter:description" content={routeData.ogDescription || routeData.description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Course JSON-LD */}
      {routeData.courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(buildCourseJsonLd(routeData.courseSchema))}
        </script>
      )}

      {/* FAQPage JSON-LD */}
      {routeData.faqSchema && routeData.faqSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(routeData.faqSchema))}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
