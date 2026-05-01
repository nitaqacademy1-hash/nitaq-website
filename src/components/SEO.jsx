import { Helmet } from 'react-helmet-async';

/**
 * SEO component with full structured data support.
 * Props:
 *  - title: string
 *  - description: string
 *  - path: string  (e.g. "/ielts-course")
 *  - courseSchema: object  — Schema.org Course data (optional)
 *  - faqSchema: array      — Array of { question, answer } pairs (optional)
 */
const SEO = ({ title, description, path = '', courseSchema = null, faqSchema = null }) => {
  const siteUrl = 'https://www.nitaqacademy.com';
  const fullUrl = `${siteUrl}${path}`;

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
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags for Social Sharing */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}/images/logo1.webp`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Course JSON-LD */}
      {courseSchema && (
        <script type="application/ld+json">
          {JSON.stringify(buildCourseJsonLd(courseSchema))}
        </script>
      )}

      {/* FAQPage JSON-LD */}
      {faqSchema && faqSchema.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildFaqJsonLd(faqSchema))}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
