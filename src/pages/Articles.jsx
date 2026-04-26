import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronRight, Calendar, User, ArrowRight } from 'lucide-react';

const articles = [
    {
        id: 1,
        title: "SAT Coaching in Sharjah: A Complete Guide to Scoring Higher in 2026",
        excerpt: "Master the SAT with Sharjah's most effective strategies. Learn about the digital format, latest curriculum changes, and proven techniques to boost your score.",
        category: "Test Prep",
        path: "/article/sat-coaching-sharjah",
        date: "Apr 26, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 2,
        title: "How to Score 1300+ on the SAT in 2026",
        excerpt: "Achieving a competitive target score requires more than just practice. Discover the specific roadmap used by Sharjah's top students to break the 1300 barrier.",
        category: "Test Prep",
        path: "/article/sat-score-1300-guide",
        date: "Apr 25, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 3,
        title: "IELTS Training in Dubai: Your Guide to Academic and Career Success",
        excerpt: "Whether for university admission or immigration, mastering the IELTS is essential. Explore the best training pathways in Dubai for achieving Your target band score.",
        category: "Languages",
        path: "/article/ielts-dubai-guide",
        date: "Apr 24, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 4,
        title: "SAT vs IELTS: Which Exam Do You Need for Studying Abroad?",
        excerpt: "Understanding the difference between academic and language proficiency tests is crucial. We break down which exam fits your specific international education goals.",
        category: "Test Prep",
        path: "/article/sat-vs-ielts-guide",
        date: "Apr 23, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 5,
        title: "ACCA Coaching in UAE: Benefits of Professional Certification in 2026",
        excerpt: "Global finance is evolving. Discover why the ACCA qualification remains the gold standard for finance professionals in the UAE and how to pass your exams.",
        category: "Finance",
        path: "/article/acca-coaching-uae-benefits",
        date: "Apr 22, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 6,
        title: "AI Courses in Sharjah: Why Mastering Artificial Intelligence is Essential",
        excerpt: "AI is no longer the future—it's the present. Learn why professionals in Sharjah are rushing to gain AI skills to stay competitive in the 2026 job market.",
        category: "Technology",
        path: "/article/ai-courses-sharjah-essential",
        date: "Apr 21, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 7,
        title: "Common SAT Mistakes Students in UAE Make & How to Avoid Them",
        excerpt: "Small errors can cost big points. Identify the most frequent pitfalls students face in the UAE and how our expert coaching helps you navigate them.",
        category: "Test Prep",
        path: "/article/common-sat-mistakes",
        date: "Apr 20, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 8,
        title: "How to Improve Your IELTS Band Score: Expert Strategies for 2026",
        excerpt: "Stuck at a Band 6? Our IELTS specialists share high-impact strategies to help you reach a Band 7.5 or 8.0 through targeted practice and feedback.",
        category: "Languages",
        path: "/article/improve-ielts-band-score",
        date: "Apr 19, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 9,
        title: "Professional Courses in Sharjah: Career Growth in a Global Market",
        excerpt: "Sharjah is a hub for professional development. Explore the courses that are currently driving the most significant salary increases and career jumps in the UAE.",
        category: "Professional",
        path: "/article/professional-courses-sharjah-growth",
        date: "Apr 18, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 10,
        title: "Choosing the Best Training Institute in Sharjah for Your Career",
        excerpt: "Not all certificates are equal. Learn what to look for in a training institute—from accreditation to trainer expertise—to ensure your education is an investment.",
        category: "Guidelines",
        path: "/article/best-training-institute-sharjah",
        date: "Apr 17, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 11,
        title: "Choose the Right Course in UAE: A Guide to Academic Excellence",
        excerpt: "Matching your skills to market demand is the key to success. This guide helps you navigate the UAE's educational landscape to find your perfect fit.",
        category: "Guidelines",
        path: "/article/choose-right-course-uae",
        date: "Apr 16, 2026",
        image: "/images/h2.webp"
    }
];

const Articles = () => {
    return (
        <main className="articles-page">
            <SEO 
                title="Articles & Insights | Nitaq Academy Sharjah"
                description="Explore expert guides, preparation tips, and career insights from Nitaq Academy. Stay updated with the latest in SAT, IELTS, and professional training in the UAE."
                path="/articles"
            />

            {/* Hero Section */}
            <section className="articles-hero">
                <div className="container">
                    <span className="badge">Insights & Education</span>
                    <h1>Articles & <span className="text-gradient">Resources</span></h1>
                    <p>Expert perspectives on test preparation, professional growth, and academic excellence in the UAE.</p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="articles-grid-section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.map((article) => (
                            <Link to={article.path} key={article.id} className="article-card">
                                <div className="article-card-image">
                                    <img src={article.image} alt={article.title} />
                                    <span className="article-card-badge">{article.category}</span>
                                </div>
                                <div className="article-card-content">
                                    <div className="article-card-meta">
                                        <span><Calendar size={14} /> {article.date}</span>
                                        <span><User size={14} /> Nitaq Editorial</span>
                                    </div>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <div className="read-more-btn">
                                        Read Article <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Articles;
