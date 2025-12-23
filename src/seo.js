// SEO Meta Tags Generator for Nitaq Training Center
// This file contains reusable SEO functions and structured data

/**
 * Generate complete SEO meta tags for a page
 * @param {Object} config - SEO configuration
 * @returns {string} HTML meta tags
 */
function generateSEOTags(config) {
    const {
        title,
        description,
        keywords,
        url,
        image = '/images/logo.png',
        type = 'website',
        course = null
    } = config;

    const baseUrl = 'https://nitaq-training-center.vercel.app';
    const fullUrl = `${baseUrl}${url}`;
    const fullImage = `${baseUrl}${image}`;

    return `
    <!-- Primary Meta Tags -->
    <title>${title}</title>
    <meta name="title" content="${title}">
    <meta name="description" content="${description}">
    <meta name="keywords" content="${keywords}">
    <meta name="author" content="Nitaq Training Center">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${fullUrl}">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${type}">
    <meta property="og:url" content="${fullUrl}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${fullImage}">
    <meta property="og:site_name" content="Nitaq Training Center">
    <meta property="og:locale" content="en_AE">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="${fullUrl}">
    <meta property="twitter:title" content="${title}">
    <meta property="twitter:description" content="${description}">
    <meta property="twitter:image" content="${fullImage}">

    <!-- Additional SEO -->
    <meta name="geo.region" content="AE-SH">
    <meta name="geo.placename" content="Sharjah">
    <meta name="geo.position" content="25.3463;55.4209">
    <meta name="ICBM" content="25.3463, 55.4209">
    `;
}

/**
 * Generate LocalBusiness Schema for Nitaq
 */
function generateLocalBusinessSchema() {
    return {
        "@context": "https://schema.org",
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "name": "Nitaq Training Center",
        "alternateName": "Nitaq",
        "description": "Premier training center in Sharjah offering IELTS, SAT, GRE, GMAT preparation, language courses (French, German, Spanish), and technology training (AI, ML, Robotics).",
        "url": "https://nitaq-training-center.vercel.app",
        "logo": "https://nitaq-training-center.vercel.app/images/logo.png",
        "image": "https://nitaq-training-center.vercel.app/images/logo.png",
        "telephone": "+971545723181",
        "email": "info@nitaq.ae",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office 103, Floor F1, Abu Khamseen Tower, Al Majaz 3",
            "addressLocality": "Sharjah",
            "addressRegion": "Sharjah",
            "addressCountry": "AE",
            "postalCode": ""
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.3463",
            "longitude": "55.4209"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "09:00",
                "closes": "21:00"
            }
        ],
        "areaServed": {
            "@type": "City",
            "name": "Sharjah"
        },
        "priceRange": "$$",
        "currenciesAccepted": "AED",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer",
        "sameAs": [
            "https://www.facebook.com/nitaqtraining",
            "https://www.instagram.com/nitaqtraining",
            "https://www.linkedin.com/company/nitaqtraining"
        ]
    };
}

/**
 * Generate Course Schema
 */
function generateCourseSchema(courseConfig) {
    const {
        name,
        description,
        provider = "Nitaq Training Center",
        duration,
        mode = ["Online", "Offline"],
        price = "Contact for pricing"
    } = courseConfig;

    return {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": name,
        "description": description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": provider,
            "sameAs": "https://nitaq-training-center.vercel.app"
        },
        "courseMode": mode,
        "duration": duration,
        "offers": {
            "@type": "Offer",
            "category": "Educational",
            "price": price,
            "priceCurrency": "AED"
        },
        "availableLanguage": ["en", "ar"],
        "inLanguage": "en"
    };
}

/**
 * Generate FAQ Schema
 */
function generateFAQSchema(faqs) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

// Export for use in HTML pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateSEOTags,
        generateLocalBusinessSchema,
        generateCourseSchema,
        generateFAQSchema
    };
}
