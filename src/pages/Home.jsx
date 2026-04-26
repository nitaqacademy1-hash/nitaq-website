import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import { Calendar, ArrowRight, ExternalLink } from 'lucide-react';

const homeArticles = [
    {
        id: 1,
        title: "SAT Coaching in Sharjah: A Complete Guide to Scoring Higher in 2026",
        excerpt: "Discover proven SAT coaching strategies in Sharjah and learn how structured preparation can help you achieve higher scores and secure admission to top universities.",
        category: "Test Prep",
        path: "/article/sat-coaching-sharjah",
        coursePath: "/sat-preparation",
        courseLabel: "SAT Course",
        date: "Apr 26, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 2,
        title: "How to Score 1300+ on the SAT in 2026",
        excerpt: "Unlock your academic potential with advanced SAT preparation in Sharjah. This guide breakdown the roadmap top achievers use to secure scores of 1300 and beyond.",
        category: "Test Prep",
        path: "/article/sat-score-1300-guide",
        coursePath: "/sat-preparation",
        courseLabel: "SAT Course",
        date: "Apr 25, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 3,
        title: "IELTS Training in Dubai: Your Guide to Academic Success",
        excerpt: "Excel in your language proficiency goals with comprehensive IELTS training in Dubai. Learn the specific techniques required to secure high band scores for global migration.",
        category: "Languages",
        path: "/article/ielts-dubai-guide",
        coursePath: "/ielts-course",
        courseLabel: "IELTS Course",
        date: "Apr 24, 2026",
        image: "/images/h3.webp"
    },
    {
        id: 4,
        title: "AI Courses in Sharjah: Why Mastering AI is Essential",
        excerpt: "Future-proof your career with professional AI courses in Sharjah. Master the latest artificial intelligence tools to stay competitive in the UAE's evolving job market.",
        category: "Technology",
        path: "/article/ai-courses-sharjah-essential",
        coursePath: "/ai-course",
        courseLabel: "AI Course",
        date: "Apr 23, 2026",
        image: "/images/h1.webp"
    },
    {
        id: 5,
        title: "ACCA Coaching in UAE: Benefits of Certification in 2026",
        excerpt: "Accelerate your finance career with premier ACCA coaching in UAE. Gain the global professional certification needed to lead and excel in the accounting industry.",
        category: "Finance",
        path: "/article/acca-coaching-uae-benefits",
        coursePath: "/acca-course",
        courseLabel: "ACCA Course",
        date: "Apr 22, 2026",
        image: "/images/h2.webp"
    },
    {
        id: 6,
        title: "Professional Courses in Sharjah: Career Growth Guide",
        excerpt: "Explore high-demand professional courses in Sharjah designed to drive career growth and salary increases in any sector across the UAE.",
        category: "Professional",
        path: "/article/professional-courses-sharjah-growth",
        coursePath: "/professional-certifications",
        courseLabel: "View Courses",
        date: "Apr 21, 2026",
        image: "/images/h3.webp"
    }
];

const Home = () => {
    const excellenceSlides = [
        {
            title: <>Empowering <span className="text-gradient">Professional Excellence</span></>,
            subtitle: "Sharjah's premier hub for growth. We bridge the gap between ambition and achievement through expert-led, industry-aligned training."
        },
        {
            title: <>Master <span className="text-gradient">Future-Ready Skills</span></>,
            subtitle: "Stay ahead of the curve with our cutting-edge curriculum. From AI to Finance, we provide the tools you need to succeed in a digital economy."
        },
        {
            title: <>Global <span className="text-gradient">Recognition & Success</span></>,
            subtitle: "Join thousands of successful alumni. Our certifications are recognized by leading employers worldwide, opening doors to global opportunities."
        }
    ];

    const [currentExcellenceSlide, setCurrentExcellenceSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentExcellenceSlide((prev) => (prev + 1) % excellenceSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [excellenceSlides.length]);

    const heroSlides = [
        {
            image: "/images/hero_new_1.png",
            title: "Top-Rated Training Institute in Sharjah for Professional Growth.",
            link: "/course"
        },
        {
            image: "/images/hero_new_2.png",
            title: "Expert Coaching for SAT, IELTS & Competitive Examinations.",
            link: "/course"
        },
        {
            image: "/images/hero_new_3.png",
            title: "Advance Your Career with Globally Recognized Certifications.",
            link: "/course"
        }
    ];

    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const featuredCourses = [
        {
            title: "SAT Preparation Course",
            desc: "Achieve higher SAT scores with structured coaching, expert guidance, and regular mock tests. Designed for students aiming to study abroad.",
            image: "/images/sat_v2.webp",
            link: "/sat-preparation",
            alt: "SAT Coaching in Sharjah"
        },
        {
            title: "IELTS Coaching",
            desc: "Improve your English proficiency and achieve your target band score with expert-led training. Ideal for students and professionals planning to migrate.",
            image: "/images/ielts_v2.webp",
            link: "/ielts-course",
            alt: "IELTS Training Sharjah"
        },
        {
            title: "Corporate Training Programs",
            desc: "Customized corporate training solutions designed to enhance employee performance and organizational growth across industries in the UAE.",
            image: "/images/course-corporate.webp",
            link: "/corporate-trainings",
            alt: "Corporate Training UAE"
        },
        {
            title: "English Language Training",
            desc: "Develop strong communication skills with practical English training programs focused on speaking and professional workplace communication.",
            image: "/images/english.webp",
            link: "/spoken-english",
            alt: "English Speaking Course Sharjah"
        },
        {
            title: "Arabic Language Training",
            desc: "Learn Arabic for daily communication and professional growth with easy-to-follow programs tailored for beginners and professionals.",
            image: "/images/arabic.webp",
            link: "/spoken-arabic",
            alt: "Arabic Language Course UAE"
        },
        {
            title: "ACCA Coaching",
            desc: "Build a successful career in finance with ACCA coaching that covers key concepts and real-world accounting applications.",
            image: "/images/acca_v2.webp",
            link: "/finance-courses",
            alt: "ACCA Coaching UAE"
        }
    ];

    const nextFeatured = () => {
        setCurrentFeaturedIndex((prev) => (prev + 1) % (featuredCourses.length - 2));
    };

    const prevFeatured = () => {
        setCurrentFeaturedIndex((prev) => (prev - 1 + (featuredCourses.length - 2)) % (featuredCourses.length - 2));
    };

    return (
        <main>
            <SEO
                title="Nitaq Academy Sharjah | IELTS, ACCA, AI & Language Courses"
                description="Top-rated training academy in Sharjah offering IELTS, TOEFL, ACCA, CMA, AI & language courses. Expert tutors, flexible timing. Enroll today at Nitaq Academy."
                path="/"
            />
            {/* Hero Section */}
            <section className="hero-minimal">
                <div className="container">
                    <div className="hero-minimal-grid">
                        <div className="hero-minimal-content">
                            <span className="hero-minimal-tag">
                                SPEA Approved Training Institute in Sharjah
                            </span>
                            <h1>
                                Top Training Institute in Sharjah for SAT, IELTS, AI & Professional Courses
                            </h1>
                            <p className="subheading">
                                Advance your career and academic future with expert-led coaching, practical training, and globally recognized programs at Nitaq Academy in Sharjah.
                            </p>

                            <div className="hero-minimal-trust">
                                <div className="trust-item">
                                    <span>SPEA</span> Approved
                                </div>
                                <div className="trust-item">
                                    <span>Expert</span> Faculty
                                </div>
                                <div className="trust-item">
                                    <span>Career-Focused</span> Programs
                                </div>
                            </div>

                            <div className="hero-minimal-actions">
                                <a href="tel:+97165798313" className="btn-minimal-primary">
                                    Enroll Now
                                </a>
                                <Link to="/course" className="btn-minimal-secondary">
                                    Course Explorer
                                </Link>
                            </div>
                        </div>

                        <div className="hero-minimal-visual">
                            <div className="hero-slider-v4">
                                {heroSlides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className={`hero-slide-v4 ${index === currentHeroSlide ? 'active' : ''}`}
                                    >
                                        <img src={slide.image} alt="Nitaq course" />
                                        <div className="hero-slide-content">
                                            <h3>{slide.title}</h3>
                                            <Link to={slide.link} className="btn-read-more">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                <div className="slider-dots">
                                    {heroSlides.map((_, index) => (
                                        <span
                                            key={index}
                                            className={`dot ${index === currentHeroSlide ? 'active' : ''}`}
                                            onClick={() => setCurrentHeroSlide(index)}
                                        ></span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Nitaq Section - Poster Style */}
            <section className="section-padding" style={{ paddingBottom: 0 }}>
                <div className="container">
                    <div className="testimonial-poster professional-excellence-section">
                        <div className="poster-graphic excellence-graphic"></div>

                        <div className="excellence-slider">
                            {excellenceSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`excellence-slide ${index === currentExcellenceSlide ? 'active' : ''}`}
                                >
                                    <h2 className="poster-title">{slide.title}</h2>
                                    <p className="poster-subtitle">{slide.subtitle}</p>
                                </div>
                            ))}
                        </div>

                        <div className="poster-stats">
                            <div className="stat-box">
                                <span className="stat-number">40+</span>
                                <span className="stat-label">Programs</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Commitment</span>
                            </div>
                            <div className="stat-box">
                                <span className="stat-number">Expert</span>
                                <span className="stat-label">Instructors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visual Journey */}
            <section className="section-padding journey-section">
                <div className="container">
                    <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Your Journey to Success</h2>
                        <p style={{ color: 'var(--text-gray)' }}>We've designed a seamless path to help you achieve your career goals.</p>
                    </div>

                    <div className="journey-grid">
                        <div className="journey-line"></div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                            </div>
                            <h3>Discover</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Find the perfect course for your career path.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                </svg>
                            </div>
                            <h3>Learn</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Master skills with expert-led training.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <h3>Certify</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Earn globally recognized credentials.</p>
                        </div>

                        <div className="journey-step">
                            <div className="step-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="1" x2="12" y2="23" />
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                </svg>
                            </div>
                            <h3>Excel</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)', marginTop: '10px' }}>Advance your career and increase earnings.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Course Categories Pill Section */}
            <section className="categories-section">
                <div className="container">
                    <div className="categories-grid">
                        {/* 1. Professional & Management */}
                        <div className="category-pill-card">
                            <div className="category-icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                </svg>
                            </div>
                            <div className="category-info">
                                <h3>Professional & Management Courses</h3>
                                <div className="category-list">
                                    UAE Corporate Tax | Digital Marketing | Accounting Software | CHRP | CHRM | Logistics & Supply Chain | ACCA | CMA | CPA
                                </div>
                            </div>
                        </div>

                        {/* 2. Corporate Trainings */}
                        <div className="category-pill-card">
                            <div className="category-icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <div className="category-info">
                                <h3>Corporate Trainings</h3>
                                <div className="category-list">
                                    Business Skills Development | Accounts and Finance Trainings | HR and Talent Development | International Delegations
                                </div>
                            </div>
                        </div>

                        {/* 3. Language Courses */}
                        <div className="category-pill-card">
                            <div className="category-icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            </div>
                            <div className="category-info">
                                <h3>Language Courses</h3>
                                <div className="category-list">
                                    Communicative English | Arabic for Non-Arabs | Business English | Spoken Arabic | IELTS & TOEFL Training
                                </div>
                            </div>
                        </div>

                        {/* 4. Test Preparation Courses */}
                        <div className="category-pill-card">
                            <div className="category-icon-wrapper">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 14" />
                                </svg>
                            </div>
                            <div className="category-info">
                                <h3>Test Preparation Courses</h3>
                                <div className="category-list">
                                    SAT | GMAT | GRE | OET | PTE | TOEFL | Medical & Engineering Entrance Prep
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Courses Carousel Section */}
            <section className="featured-courses-section section-padding">
                <div className="container">
                    <div className="section-header featured-flex-header">
                        <div>
                            <h2 style={{ color: '#2e7d32', fontSize: '2.5rem', fontWeight: 800, marginBottom: '10px' }}>Featured Courses</h2>
                            <p className="subtitle" style={{ fontSize: '1.1rem', color: '#4b5563', maxWidth: '600px' }}>
                                Explore our most in-demand programs designed for academic and career excellence.
                            </p>
                        </div>
                        <div className="featured-nav-controls">
                            <button onClick={prevFeatured} className="nav-btn-round" aria-label="Previous">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                            </button>
                            <button onClick={nextFeatured} className="nav-btn-round" aria-label="Next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    <div className="featured-slider-viewport">
                        <div 
                            className="featured-slider-track" 
                            style={{ transform: `translateX(-${currentFeaturedIndex * (100 / 3)}%)` }}
                        >
                            {featuredCourses.map((course, idx) => (
                                <div key={idx} className="featured-slide-item">
                                    <div className="featured-course-card-v2">
                                        <div className="featured-course-img-v2">
                                            <img src={course.image} alt={course.alt} />
                                        </div>
                                        <div className="featured-course-content-v2">
                                            <h3>{course.title}</h3>
                                            <p>{course.desc}</p>
                                            <Link to={course.link} className="btn-view-course-minimal">View Course <span>→</span></Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="featured-dots">
                        {[0, 1, 2, 3].map((dot) => (
                            <span 
                                key={dot} 
                                className={`f-dot ${currentFeaturedIndex === dot ? 'active' : ''}`}
                                onClick={() => setCurrentFeaturedIndex(dot)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Accreditation & Partnerships Section */}
            <section className="section-padding" style={{ background: '#f9fafb' }}>
                <div className="container">
                    <div className="accreditation-header">
                        <h2>TRUSTED BY LEADING ORGANIZATIONS</h2>
                        <p>
                            We deliver globally recognised professional training programs,
                            built in partnership with the world’s leading international organisations
                            and certification bodies.
                        </p>
                    </div>

                    <div className="accreditation-grid">
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/british council.png" alt="British Council" style={{ maxWidth: '100%', maxHeight: '50px' }} />
                            </div>
                            <span>British Council</span>
                        </div>
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/ielts.png" alt="IELTS" style={{ maxWidth: '100%', maxHeight: '45px' }} />
                            </div>
                            <span>IELTS</span>
                        </div>
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/spea sharja.jpg" alt="SPEA" style={{ maxWidth: '100%', maxHeight: '55px' }} />
                            </div>
                            <span>SPEA Sharjah</span>
                        </div>
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/pte logo.png" alt="Pearson PTE" style={{ maxWidth: '100%', maxHeight: '40px' }} />
                            </div>
                            <span>Pearson PTE</span>
                        </div>
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/toefl logo.png" alt="TOEFL" style={{ maxWidth: '100%', maxHeight: '35px' }} />
                            </div>
                            <span>ETS TOEFL</span>
                        </div>
                        <div className="accreditation-item">
                            <div className="logo-box">
                                <img src="/images/ACCA_logo.svg.png" alt="ACCA" style={{ maxWidth: '100%', maxHeight: '45px' }} />
                            </div>
                            <span>ACCA Global</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section id="programs" className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', lineHeight: 1 }}>Our Programs</h2>
                            <p style={{ color: 'var(--text-gray)', marginTop: '10px' }}>Designed for every stage of your career.</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {/* Card 1 */}
                        <div className="program-graphic-card">
                            <div className="program-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                                </svg>
                            </div>
                            <h3>Test Preparations</h3>
                            <p>Ace your exams with our comprehensive preparation courses for IELTS, TOEFL, SAT, and more.</p>
                            <a href="tel:+97165798313" className="program-link">Enroll Now <span>→</span></a>
                        </div>

                        {/* Card 2 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'var(--gradient-accent)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <h3>Professional Certifications</h3>
                            <p>Gain industry-recognized certifications in Finance, IT, Management, and more.</p>
                            <a href="tel:+97165798313" className="program-link">Enroll Now <span>→</span></a>
                        </div>

                        {/* Card 3 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'linear-gradient(135deg, #FF7043 0%, #F4511E 100%)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <h3>Language Trainings</h3>
                            <p>Master new languages including English, Arabic, French, German, and Spanish.</p>
                            <a href="tel:+97165798313" className="program-link">Enroll Now <span>→</span></a>
                        </div>

                        {/* Card 4 */}
                        <div className="program-graphic-card">
                            <div className="program-icon" style={{ background: 'linear-gradient(135deg, #7E57C2 0%, #5E35B1 100%)' }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                </svg>
                            </div>
                            <h3>Corporate Trainings</h3>
                            <p>Customized training solutions for organizations to upskill their workforce.</p>
                            <a href="tel:+97165798313" className="program-link">Enroll Now <span>→</span></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Choose Nitaq Academy Section */}
            <section className="why-choose-section section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Why Choose Nitaq Academy in Sharjah</h2>
                        <p className="subtitle">
                            Delivering practical, career-focused education with globally relevant training and expert guidance.
                        </p>
                    </div>

                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3>Expert Instructors</h3>
                            <p>Learn from experienced professionals and experts who bring practical insights and proven strategies into every session.</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                            </div>
                            <h3>Flexible Learning Options</h3>
                            <p>Choose between offline classroom training in Sharjah or online sessions with flexible schedules for all professionals.</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                            <h3>Industry-Relevant Curriculum</h3>
                            <p>Our courses gain you practical, up-to-date skills aligned with global standards and job market needs in the UAE.</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                            </div>
                            <h3>Career Support & Guidance</h3>
                            <p>Get access to career counseling, interview preparation, and professional guidance to help you grow confidently.</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                            </div>
                            <h3>Modern Learning Environment</h3>
                            <p>Experience a professional learning space equipped with modern tools and structured training systems for skill development.</p>
                        </div>

                        <div className="why-card">
                            <div className="why-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <h3>Recognized & Approved</h3>
                            <p>Nitaq Academy is an SPEA approved training institute in Sharjah, delivering globally recognized certification standards.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Latest Articles Section */}
            <section className="home-articles-section" style={{ padding: '80px 0', background: '#fff' }}>
                <div className="container">
                    <div className="section-header-flex">
                        <div>
                            <span className="badge-primary">Latest Insights</span>
                            <h2>Latest Articles on SAT, IELTS & <span className="text-gradient">Career Training in Sharjah</span></h2>
                            <p>Explore expert insights, preparation strategies, and career-focused guidance to help you succeed academically and professionally in the UAE.</p>
                        </div>
                        <Link to="/articles" className="btn-outline-primary">
                            View All Articles <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="articles-grid">
                        {homeArticles.map((article) => (
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
                                    </div>
                                    <Link to={article.path} className="article-title-link">
                                        <h3>{article.title}</h3>
                                    </Link>
                                    <p>{article.excerpt}</p>
                                    <div className="article-card-actions">
                                        <Link to={article.path} className="read-more-inline">
                                            Read More <ArrowRight size={16} />
                                        </Link>
                                        <Link to={article.coursePath} className="card-course-btn">
                                            {article.courseLabel} <ExternalLink size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="google-reviews-section">
                <div className="container">
                    <div className="reviews-header text-center">
                        <h2>Trusted by Our Students</h2>
                        <p>See what our students say about their learning experience at Nitaq Academy.</p>
                    </div>

                    <div className="reviews-grid">
                        <div className="review-card-minimal">
                            <div className="review-rating">★★★★★</div>
                            <p className="review-body">"I did corporate tax, cash flow, budget forecasting, and how to use AI in my work. No boring lectures, just real stuff you can use. The instructors were good, they kept it practical. Very friendly & understanding staff .."</p>
                            <h4 className="student-name">MOHAMMED SAMEER</h4>
                        </div>

                        <div className="review-card-minimal">
                            <div className="review-rating">★★★★★</div>
                            <p className="review-body">"Good environment worth every minute spent here , amazing experience 5/5 ."</p>
                            <h4 className="student-name">Mohammed Suhail</h4>
                        </div>

                        <div className="review-card-minimal">
                            <div className="review-rating">★★★★★</div>
                            <p className="review-body">"I have attended the webinar on emotional intelligence it helped me a lot understand the importance of it. Wonderful initiative."</p>
                            <h4 className="student-name">syed musthafa</h4>
                        </div>
                    </div>

                    <div className="reviews-actions">
                        <a href="https://search.google.com/local/reviews?placeid=ChIJoS33-mRbXz4R3X78E_0X3X78" target="_blank" rel="noopener noreferrer" className="btn-reviews-primary">
                            View All Reviews on Google
                        </a>
                        <a href="https://search.google.com/local/writereview?placeid=ChIJoS33-mRbXz4R3X78E_0X3X78" target="_blank" rel="noopener noreferrer" className="btn-reviews-outline">
                            Write a Review
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
