import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight, ExternalLink, Filter, Search } from 'lucide-react';

const articles = [
    {
        id: 15,
        title: "How Digital Marketing Can Increase Your Salary: UAE Career Guide",
        excerpt: "Discover how mastering digital marketing in Dubai and Sharjah can lead to significant salary growth and career opportunities in the UAE's digital economy.",
        category: "Career & Courses",
        path: "/article/digital-marketing-salary-increase-uae",
        coursePath: "/professional-marketing-course",
        courseLabel: "Marketing Course",
        date: "May 17, 2026",
        image: "/images/course-marketing.webp"
    },

    {
        id: 14,
        title: "Best Professional Certifications UAE for Career Growth",
        excerpt: "Accelerate your career in 2026 with the most in-demand professional certifications in UAE and Sharjah. From ACCA and HR to AI and Corporate Tax.",
        category: "Career & Courses",
        path: "/article/best-professional-certifications-uae",
        coursePath: "/professional-certifications",
        courseLabel: "View All",
        date: "May 16, 2026",
        image: "/images/hero-professional.webp"
    },

    {
        id: 13,
        title: "Why You Are Not Getting Hired in UAE: 5 Common Mistakes & How to Fix Them",
        excerpt: "Struggling to land interviews in Dubai or Sharjah? Explore the top reasons candidates fail in the UAE job market and how to optimize your strategy.",
        category: "Career & Courses",
        path: "/article/why-not-getting-hired-uae",
        coursePath: "/contact",
        courseLabel: "Get Advisor",
        date: "May 15, 2026",
        image: "/images/hero_new_1.png"
    },
    {
        id: 12,
        title: "Best AI Courses in Dubai: Mastering the Future of Innovation",
        excerpt: "Dubai is the global hub for AI. Discover the best AI courses in Dubai and master prompt engineering, Generative AI, and tech automation today.",
        category: "Career & Courses",
        path: "/article/best-ai-courses-dubai",
        coursePath: "/ai-course",
        courseLabel: "AI Course",
        date: "May 15, 2026",
        image: "/images/AI-ML.webp"
    },
    {
        id: 0,
        title: "Top Skills in UAE for 2026: AI, Digital Marketing, SAT & Future Careers",
        excerpt: "Master the most in-demand skills in UAE for 2026. From AI and Digital Marketing to academic excellence with SAT, discover how to future-proof your career today.",
        category: "Career & Courses",
        path: "/article/top-skills-uae-2026",
        coursePath: "/courses",
        courseLabel: "View Courses",
        date: "May 08, 2026",
        image: "/images/article-future-skills-uae.webp"
    },
    {
        id: 1,
        title: "SAT Coaching in Sharjah: A Complete Guide to Scoring Higher in 2026",
        excerpt: "Discover proven SAT coaching strategies in Sharjah and learn how structured preparation can help you achieve higher scores and secure admission to top universities.",
        category: "SAT Preparation",
        path: "/article/sat-coaching-sharjah",
        coursePath: "/sat-preparation-sharjah",
        courseLabel: "SAT Course",
        date: "Apr 26, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 2,
        title: "How to Score 1300+ on the SAT in 2026",
        excerpt: "Unlock your academic potential with advanced SAT preparation in Sharjah. This guide breakdown the roadmap top achievers use to secure scores of 1300 and beyond.",
        category: "SAT Preparation",
        path: "/article/sat-score-1300-guide",
        coursePath: "/sat-preparation-sharjah",
        courseLabel: "SAT Course",
        date: "Apr 25, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 3,
        title: "IELTS Training in Dubai: Your Guide to Academic Success",
        excerpt: "Excel in your language proficiency goals with comprehensive IELTS training in Dubai. Learn the specific techniques required to secure high band scores for global migration.",
        category: "IELTS Training",
        path: "/article/ielts-dubai-guide",
        coursePath: "/ielts-course",
        courseLabel: "IELTS Course",
        date: "Apr 24, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 4,
        title: "SAT vs IELTS: Which Exam Do You Need for Studying Abroad?",
        excerpt: "Understanding the difference between academic and language proficiency tests in the UAE is crucial. We break down which exam fits your specific international goals.",
        category: "SAT Preparation",
        path: "/article/sat-vs-ielts-guide",
        coursePath: "/courses",
        courseLabel: "Explore All",
        date: "Apr 23, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 5,
        title: "ACCA Coaching in UAE: Benefits of Certification in 2026",
        excerpt: "Accelerate your finance career with premier ACCA coaching in UAE. Gain the global professional certification needed to lead and excel in the accounting industry.",
        category: "Career & Courses",
        path: "/article/acca-coaching-uae-benefits",
        coursePath: "/acca-course",
        courseLabel: "ACCA Course",
        date: "Apr 22, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 6,
        title: "AI Courses in Sharjah: Why Mastering AI is Essential",
        excerpt: "Future-proof your career with professional AI courses in Sharjah. Master the latest artificial intelligence tools to stay competitive in the UAE's job market.",
        category: "Career & Courses",
        path: "/article/ai-courses-sharjah-essential",
        coursePath: "/ai-course",
        courseLabel: "AI Course",
        date: "Apr 21, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 7,
        title: "Common SAT Mistakes Students in UAE Make & How to Avoid Them",
        excerpt: "Small errors can cost big points on your exam. Identify the most frequent pitfalls students face in the UAE and how our expert SAT coaching helps you navigate them.",
        category: "SAT Preparation",
        path: "/article/common-sat-mistakes",
        coursePath: "/sat-preparation-sharjah",
        courseLabel: "SAT Course",
        date: "Apr 20, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 8,
        title: "How to Improve Your IELTS Band Score: Expert Strategies",
        excerpt: "Stuck at a lower band? Our IELTS specialists in Sharjah share high-impact strategies to help you reach a Band 7.5 or 8.0 through targeted practice and feedback.",
        category: "IELTS Training",
        path: "/article/improve-ielts-band-score",
        coursePath: "/ielts-course",
        courseLabel: "IELTS Course",
        date: "Apr 19, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 9,
        title: "Professional Courses in Sharjah: Career Growth Guide",
        excerpt: "Sharjah is a hub for professional development. Explore the courses that are currently driving the most significant career jumps and salary growth in the UAE.",
        category: "Career & Courses",
        path: "/article/professional-courses-sharjah-growth",
        coursePath: "/professional-certifications",
        courseLabel: "View Courses",
        date: "Apr 18, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 10,
        title: "Best Training Institute in Sharjah for Your Career",
        excerpt: "Not all certificates are equal in the UAE. Learn what to look for in a training institute in Sharjah—from accreditation to expertise—to ensure your education is an investment.",
        category: "Career & Courses",
        path: "/article/best-training-institute-sharjah",
        coursePath: "/courses",
        courseLabel: "Find Courses",
        date: "Apr 17, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 11,
        title: "Choose the Right Course in UAE: A Guide to Excellence",
        excerpt: "Matching your skills to market demand is the key to success. This guide helps you navigate the UAE's academic landscape to find your perfect fit for professional growth.",
        category: "Career & Courses",
        path: "/article/choose-right-course-uae",
        coursePath: "/courses",
        courseLabel: "Career Paths",
        date: "Apr 16, 2026",
        image: "/images/h2.webp"
    }
];

const categories = ["All", "SAT Preparation", "IELTS Training", "Career & Courses"];

const Articles = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredArticles = activeCategory === "All" 
        ? articles 
        : articles.filter(article => article.category === activeCategory);

    return (
        <main className="articles-page">
            <SEO />

            {/* Hero Section */}
            <section className="articles-hero">
                <div className="container">
                    <span className="badge">Leading Training Institute in Sharjah</span>
                    <h1>Educational <span className="text-gradient">Insights & Guides</span></h1>
                    <p>Stay updated with expert perspectives on test preparation, professional certifications, and academic excellence in the UAE.</p>
                </div>
            </section>

            {/* SEO Intro Content */}
            <section className="articles-intro-section">
                <div className="container">
                    <div className="articles-intro-card">
                        <h2>Your Hub for <span className="text-gradient">Academic & Professional Growth</span></h2>
                        <p>
                            Welcome to the NITAQ ACADEMY insights portal, the premier resource for students and professionals seeking a <strong>training institute in Sharjah</strong> that delivers real results. Our expert-curated articles are designed to bridge the gap between classroom learning and career success in the dynamic UAE market.
                        </p>
                        <p>
                            Whether you are looking for high-impact <strong>SAT coaching in Sharjah</strong> to secure admission to top global universities, or specialized <strong>IELTS training in UAE</strong> to achieve your target band scores for migration and study, our guides provide actionable strategies and proven techniques. We also explore the latest trends in professional certifications, including AI, ACCA, and corporate training, ensuring you stay competitive in the 2026 job market.
                        </p>
                        <div className="quick-links-row">
                            <Link to="/sat-preparation-sharjah" className="quick-link-item">👉 Explore SAT Coaching in Sharjah</Link>
                            <Link to="/ielts-course" className="quick-link-item">👉 Join IELTS Training in Dubai</Link>
                            <Link to="/courses" className="quick-link-item">👉 Browse All Courses in UAE</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="category-filter-section">
                <div className="container">
                    <div className="filter-wrapper">
                        <div className="filter-label">
                            <Filter size={18} />
                            <span>Filter by Interest:</span>
                        </div>
                        <div className="filter-buttons">
                            {categories.map(cat => (
                                <button 
                                    key={cat} 
                                    className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="articles-grid-section">
                <div className="container">
                    <div className="articles-grid">
                        {filteredArticles.map((article) => (
                            <div key={article.id} className="article-card">
                                <Link to={article.path} className="article-card-image-link">
                                    <div className="article-card-image">
                                        <img src={article.image} alt={article.title} />
                                        <span className="article-card-badge">{article.category}</span>
                                    </div>
                                </Link>
                                <div className="article-card-content">
                                    <div className="article-card-meta">
                                        <span><Calendar size={14} /> {article.date}</span>
                                        <span><User size={14} /> Nitaq Editorial</span>
                                    </div>
                                    <Link to={article.path} className="article-title-link">
                                        <h3>{article.title}</h3>
                                    </Link>
                                    <p>{article.excerpt}</p>
                                    
                                    <div className="article-card-actions">
                                        <Link to={article.path} className="read-more-inline">
                                            Read Guide <ArrowRight size={16} />
                                        </Link>
                                        <Link to={article.coursePath} className="card-course-btn">
                                            {article.courseLabel} <ExternalLink size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredArticles.length === 0 && (
                        <div className="no-results text-center">
                            <p>No articles found in this category. Please try another one.</p>
                        </div>
                    )}

                    {/* Bottom CTA for SEO Hub */}
                    <div className="articles-bottom-cta">
                        <h3>Ready to Start Your Journey?</h3>
                        <p>Join thousands of successful students at the most trusted training institute in Sharjah.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary">Book Free Consultation</Link>
                            <Link to="/courses" className="btn btn-outline">Explore Course Catalog</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Articles;
