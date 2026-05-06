import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoRoute } from '../seo-routes';

/**
 * SEO component with full structured data support.
 * Consolidated single-script JSON-LD to prevent duplication errors in Search Console.
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

  // Schema Builders
  const schemas = [];

  // 1. Global Organization & WebSite
  schemas.push({
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    "name": "Nitaq Academy",
    "url": siteUrl,
    "logo": `${siteUrl}/images/logo1.webp`,
    "description": "Premier training academy in Sharjah offering IELTS, SAT, GRE, GMAT, language courses, AI training and professional certifications.",
    "telephone": "+971545723181",
    "email": "info@nitaqacademy.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Al Majaz 3",
      "addressRegion": "Sharjah",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3259",
      "longitude": "55.3857"
    },
    "sameAs": [
      "https://www.instagram.com/nitaqacademy",
      "https://www.facebook.com/nitaqacademy"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "24"
    }
  });

  schemas.push({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "Nitaq Academy",
    "publisher": {"@id": `${siteUrl}/#organization`},
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/course?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  });

  // 2. Breadcrumbs (if not homepage)
  if (location.pathname !== '/') {
    const segments = location.pathname.split('/').filter(Boolean);
    const itemListElement = [{
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl
    }];
    let currentPath = '';
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        item: `${siteUrl}${currentPath}`
      });
    });
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    });
  }

  // 3. Course Schema
  if (routeData.courseSchema) {
    const cs = routeData.courseSchema;
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': cs.name,
      'description': cs.description,
      'url': fullUrl,
      'provider': { '@id': `${siteUrl}/#organization` },
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '24'
      },
      ...(cs.duration && { timeRequired: cs.duration }),
      ...(cs.mode && { courseMode: cs.mode }),
      ...(cs.educationalLevel && { educationalLevel: cs.educationalLevel }),
      ...(cs.teaches && { teaches: cs.teaches }),
      ...(cs.image && { image: cs.image }),
      ...(cs.inLanguage && { inLanguage: cs.inLanguage }),
    });
  }

  // 4. FAQPage Schema
  if (routeData.faqSchema && routeData.faqSchema.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': routeData.faqSchema.map(({ question, answer }) => ({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': answer,
        },
      })),
    });
  }

  // 5. Article Schema
  if (location.pathname.startsWith('/article/')) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      'headline': routeData.title,
      'description': routeData.description,
      'image': ogImageUrl,
      'author': { '@type': 'Person', 'name': 'Nitaq Expert Team' },
      'publisher': { '@id': `${siteUrl}/#organization` },
      'datePublished': '2026-05-01'
    });
  }

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

      {/* Structured Data: Consolidated into a single script block using @graph for better Search Console handling */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": schemas
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
