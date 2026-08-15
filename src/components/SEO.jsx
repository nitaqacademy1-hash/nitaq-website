import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getSeoRoute } from '../seo-routes';
import { LANGUAGES, langFromPath, stripLangPrefix, localizePath } from '../i18n/config';

/**
 * SEO component with full structured data support.
 * Consolidated single-script JSON-LD to prevent duplication and missing field errors.
 */
const SEO = () => {
  const location = useLocation();
  const siteUrl = 'https://www.nitaqacademy.com';

  // SEO copy lives under language-neutral paths, so /ar/about reuses /about's
  // entry. Canonicals and hreflang below re-add the prefix.
  const lang = langFromPath(location.pathname);
  const basePath = stripLangPrefix(location.pathname);
  const localeMeta = LANGUAGES[lang];

  // Find SEO data from central directory, or fallback to generic defaults
  const routeData = getSeoRoute(basePath, lang) || {
    title: "NITAQ ACADEMY Sharjah | IELTS, ACCA, AI & Language Courses",
    description: "Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses.",
    canonical: `${siteUrl}${location.pathname}`,
    ogTitle: "NITAQ ACADEMY Sharjah | IELTS, ACCA, AI & Language Courses",
    ogDescription: "Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses.",
    ogImage: "/images/logo1.webp",
    twitterCard: "summary_large_image",
    datePublished: "2026-05-08T08:00:00+04:00",
    dateModified: "2026-05-08T15:00:00+04:00",
    courseSchema: null,
    faqSchema: null
  };

  // The stored canonical is the English URL; Arabic pages canonicalise to
  // their own /ar/... URL and the two point at each other via hreflang.
  const fullUrl = `${siteUrl}${localizePath(basePath, lang)}`;
  const alternates = Object.values(LANGUAGES).map((l) => ({
    hrefLang: l.code,
    href: `${siteUrl}${localizePath(basePath, l.code)}`,
  }));
  const ogImageUrl = routeData.ogImage.startsWith('http') ? routeData.ogImage : `${siteUrl}${routeData.ogImage}`;

  // Organization ID for linking
  const orgId = `${siteUrl}/#organization`;

  // Schema Builders — All items in @graph must NOT have their own @context
  const schemas = [];

  // 1. Global Organization (no @context inside @graph)
  const organizationSchema = {
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": orgId,
    "name": "NITAQ ACADEMY",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteUrl}/images/logo1.webp`
    },
    "description": "Premier training academy in Sharjah & Dubai, UAE offering IELTS, Digital SAT, GRE, GMAT, ACCA, AI technology, and comprehensive school subject tuition (Maths, Physics, Chemistry, Biology, Business, Accounts, Economics). SPEA Authorized training institute.",
    "telephone": "+971527569908",
    "email": "info@nitaqacademy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3",
      "addressLocality": "Al Majaz 3, Al Majaz",
      "addressRegion": "Sharjah",
      "postalCode": "00000",
      "addressCountry": "United Arab Emirates"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.3259",
      "longitude": "55.3857"
    },
    "hasMap": "https://maps.app.goo.gl/3fX3B1uQ7G2zS5vE8",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$",
    "areaServed": [
      { "@type": "City", "name": "Sharjah" },
      { "@type": "City", "name": "Dubai" },
      { "@type": "City", "name": "Ajman" },
      { "@type": "City", "name": "Abu Dhabi" },
      { "@type": "Country", "name": "United Arab Emirates" }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.3259",
        "longitude": "55.3857"
      },
      "geoRadius": "150000"
    },
    "knowsAbout": [
      "School Subject Tuition UAE",
      "Maths Tuition Sharjah & Dubai",
      "Physics Tuition Sharjah & Dubai",
      "Chemistry Tuition Sharjah & Dubai",
      "Biology Tuition Sharjah & Dubai",
      "Business Studies Tuition Dubai & Sharjah",
      "Accountancy Tuition Dubai & Sharjah",
      "Economics Tuition Dubai & Sharjah",
      "English Tuition Dubai & Sharjah",
      "Social Science Tuition UAE",
      "Cambridge IGCSE Tutors Dubai",
      "Edexcel A Level Coaching UAE",
      "IB DP Tutors Dubai & Sharjah",
      "CBSE Board Coaching Sharjah & Dubai",
      "Digital SAT Preparation Dubai & Sharjah",
      "IELTS Coaching Dubai & Sharjah",
      "ACCA and CMA Coaching UAE",
      "Artificial Intelligence Courses UAE"
    ],
    "sameAs": [
      "https://www.instagram.com/nitaq.academy",
      "https://www.facebook.com/nitaqacademy.ae/",
      "https://www.linkedin.com/company/nitaqacademy",
      "https://maps.app.goo.gl/3fX3B1uQ7G2zS5vE8"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "11"
    }
  };

  // Only add a simplified catalog on the homepage
  if (location.pathname === '/') {
    organizationSchema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      "name": "NITAQ ACADEMY Courses",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "IELTS Preparation", "description": "Expert IELTS coaching for Academic & General modules in Sharjah & Dubai." }, "url": `${siteUrl}/ielts-course` },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "SAT Preparation", "description": "Comprehensive Digital SAT coaching with 1400+ focus in Sharjah & Dubai." }, "url": `${siteUrl}/sat-preparation-sharjah` },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "School Subject Tuition", "description": "Specialized Maths, Physics, Chemistry, Biology, Business, Accounts & Economics tuition in Sharjah, Dubai & UAE." }, "url": `${siteUrl}/academic-excellence` },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "GRE Coaching", "description": "Strategic GRE preparation for graduate school admissions." }, "url": `${siteUrl}/gre-preparation` },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "GMAT Training", "description": "Top-tier GMAT coaching for MBA aspirants." }, "url": `${siteUrl}/gmat-preparation` },
        { "@type": "Offer", "itemOffered": { "@type": "Course", "name": "ACCA Coaching", "description": "Complete ACCA qualification training by experts." }, "url": `${siteUrl}/acca-course` }
      ]
    };
  }

  schemas.push(organizationSchema);

  // 2. WebSite (no @context)
  schemas.push({
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "url": siteUrl,
    "name": "NITAQ ACADEMY",
    "publisher": { "@id": orgId },
    "inLanguage": [lang === 'ar' ? 'ar' : 'en', lang === 'ar' ? 'en' : 'ar']
  });

  // 3. WebPage with Geographic & AI Speakable targeting
  schemas.push({
    "@type": "WebPage",
    "@id": fullUrl,
    "url": fullUrl,
    "name": routeData.title,
    "description": routeData.description,
    "isPartOf": { "@id": `${siteUrl}/#website` },
    "about": { "@id": orgId },
    "inLanguage": lang === 'ar' ? 'ar' : 'en',
    "spatialCoverage": [
      { "@type": "Place", "name": "Sharjah, UAE" },
      { "@type": "Place", "name": "Dubai, UAE" },
      { "@type": "Place", "name": "Abu Dhabi, UAE" },
      { "@type": "Place", "name": "United Arab Emirates" }
    ],
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".subject-quick-answer", ".course-hero h1", ".course-hero p", ".lead-text", "h1", "h2"]
    }
  });

  // 4. Breadcrumbs (no @context)
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
      '@type': 'BreadcrumbList',
      'itemListElement': itemListElement
    });
  }

  // 5. Course Schema — ONLY on actual course pages with courseSchema data
  const excludedFromCourse = ['/', '/about', '/contact', '/enquiry', '/articles', '/courses',
    '/test-preparations', '/language-trainings', '/professional-certifications',
    '/corporate-trainings', '/terms-and-conditions', '/privacy-policy'];
  const isWebinarOrIg = location.pathname.startsWith('/webinar') || location.pathname.startsWith('/ig/') || location.pathname.startsWith('/article/');

  if (routeData.courseSchema && !excludedFromCourse.includes(location.pathname) && !isWebinarOrIg) {
    const cs = routeData.courseSchema;

    const courseDescription = (cs.description && cs.description.trim())
      || (routeData.description && routeData.description.trim())
      || 'Professional training course offered by NITAQ ACADEMY in Sharjah & Dubai, UAE.';

    schemas.push({
      '@type': 'Course',
      'name': cs.name,
      'description': courseDescription,
      'url': fullUrl,
      'areaServed': [
        { '@type': 'City', 'name': 'Sharjah' },
        { '@type': 'City', 'name': 'Dubai' },
        { '@type': 'City', 'name': 'Ajman' },
        { '@type': 'City', 'name': 'Abu Dhabi' },
        { '@type': 'Country', 'name': 'United Arab Emirates' }
      ],
      'spatialCoverage': [
        { '@type': 'Place', 'name': 'Sharjah, UAE' },
        { '@type': 'Place', 'name': 'Dubai, UAE' },
        { '@type': 'Place', 'name': 'Abu Dhabi, UAE' },
        { '@type': 'Place', 'name': 'United Arab Emirates' }
      ],
      'provider': {
        '@type': 'EducationalOrganization',
        'name': 'NITAQ ACADEMY',
        'url': siteUrl,
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Office : F103, Floor F1, Abu Khamseen Tower, Majaz 3',
          'addressLocality': 'Majaz 3',
          'addressRegion': 'Sharjah',
          'addressCountry': 'UAE'
        }
      },
      'offers': {
        '@type': 'Offer',
        'category': 'Education',
        'availability': 'https://schema.org/InStock',
        'validFrom': '2026-01-01',
        'url': fullUrl
      },
      'hasCourseInstance': [
        {
          '@type': 'CourseInstance',
          'courseMode': 'onsite',
          'courseWorkload': cs.duration || 'P8W',
          'location': {
            '@type': 'Place',
            'name': 'NITAQ ACADEMY Sharjah Campus (Serving Sharjah, Dubai & Northern Emirates)',
            'address': {
              '@type': 'PostalAddress',
              'streetAddress': 'Office : F103, Floor F1, Abu Khamseen Tower, Majaz 3',
              'addressLocality': 'Majaz 3',
              'addressRegion': 'Sharjah',
              'addressCountry': 'UAE'
            }
          },
          'instructor': {
            '@type': 'Person',
            'name': 'Nitaq Senior Expert'
          }
        },
        {
          '@type': 'CourseInstance',
          'courseMode': 'online',
          'courseWorkload': cs.duration || 'P8W',
          'location': {
            '@type': 'Place',
            'name': 'NITAQ Live Online Virtual Campus (Serving Dubai, Abu Dhabi, Sharjah & All UAE)'
          },
          'instructor': {
            '@type': 'Person',
            'name': 'Nitaq Senior Expert'
          }
        }
      ],
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '24'
      },
      ...(cs.duration && { timeRequired: cs.duration }),
      ...(cs.educationalLevel && { educationalLevel: cs.educationalLevel }),
      ...(cs.teaches && { teaches: cs.teaches }),
      ...(cs.inLanguage && { inLanguage: cs.inLanguage }),
    });
  }

  // 6. FAQPage Schema (no @context)
  if (routeData.faqSchema && routeData.faqSchema.length > 0) {
    schemas.push({
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

  // 7. Article (BlogPosting) Schema — Optimized for Google AI Overviews, Perplexity & Dubai/UAE Search
  if (location.pathname.startsWith('/article/')) {
    schemas.push({
      '@type': 'BlogPosting',
      'headline': routeData.title.split('|')[0].trim(),
      'description': routeData.description,
      'keywords': routeData.keywords || "Tuition Sharjah, Tuition Dubai, Academic Tutors UAE, IGCSE Dubai, CBSE Sharjah, A Level UAE, IB Tutors Dubai",
      'image': [
        ogImageUrl,
        ogImageUrl.replace('.webp', '-1x1.webp'),
        ogImageUrl.replace('.webp', '-4x3.webp')
      ],
      'datePublished': routeData.datePublished || '2026-05-01T08:00:00+04:00',
      'dateModified': routeData.dateModified || '2026-08-14T15:00:00+04:00',
      'author': [{
        '@type': 'Person',
        'name': 'Nitaq Academy Editorial Team',
        'url': `${siteUrl}/about`
      }],
      'publisher': {
        '@type': 'Organization',
        'name': 'NITAQ ACADEMY',
        'logo': {
          '@type': 'ImageObject',
          'url': `${siteUrl}/images/logo1.webp`
        }
      },
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': fullUrl
      },
      'spatialCoverage': [
        { '@type': 'Place', 'name': 'Sharjah, UAE' },
        { '@type': 'Place', 'name': 'Dubai, UAE' },
        { '@type': 'Place', 'name': 'Abu Dhabi, UAE' },
        { '@type': 'Place', 'name': 'United Arab Emirates' }
      ],
      'speakable': {
        '@type': 'SpeakableSpecification',
        'cssSelector': ['.article-main-title', '.lead-text', '.subject-quick-answer', 'h1', 'h2', 'p']
      }
    });
  }

  return (
    <Helmet htmlAttributes={{ lang: localeMeta.code, dir: localeMeta.dir }}>
      {/* Search Engine Meta Tags */}
      <title>{routeData.title}</title>
      <meta name="description" content={routeData.description} />
      <link rel="canonical" href={fullUrl} />

      {/* Language alternates so each locale is indexed on its own URL */}
      {alternates.map((alt) => (
        <link key={alt.hrefLang} rel="alternate" hrefLang={alt.hrefLang} href={alt.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${siteUrl}${localizePath(basePath, 'en')}`} />

      {/* Social Media (OG/Twitter) Meta Tags */}
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={routeData.ogTitle || routeData.title} />
      <meta property="og:description" content={routeData.ogDescription || routeData.description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={localeMeta.ogLocale} />
      {Object.values(LANGUAGES)
        .filter((l) => l.code !== lang)
        .map((l) => (
          <meta key={l.code} property="og:locale:alternate" content={l.ogLocale} />
        ))}
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content={routeData.twitterCard || "summary_large_image"} />
      <meta name="twitter:title" content={routeData.ogTitle || routeData.title} />
      <meta name="twitter:description" content={routeData.ogDescription || routeData.description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Structured Data: Single root @context with @graph — NO duplicate @context inside nodes */}
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
