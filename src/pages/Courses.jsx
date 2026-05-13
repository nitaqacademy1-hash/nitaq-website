import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Courses = () => {
    const courseCategories = [
        {
            id: "professional",
            title: "Professional Courses",
            subtitle: "Industry-recognized certifications to advance your career.",
            courses: [
                { title: "ACCA Qualification", image: "/images/acca_v2.webp", link: "/acca-course" },
                { title: "UAE Corporate Tax", image: "/images/corp_tax_v2.webp", link: "/uae-corporate-tax" },
                { title: "AI & Machine Learning", image: "/images/ai_v2.webp", link: "/ai-course" },
                { title: "Power BI & Excel", image: "/images/data_v2.webp", link: "/power-bi-excel" },
                { title: "Professional Marketing", image: "/images/marketing_v2.webp", link: "/professional-marketing-course" },
                { title: "Sales & Negotiation", image: "/images/sales_v2.webp", link: "/sales-negotiations" }
            ],
            viewMore: "/professional-certifications"
        },
        {
            id: "testprep",
            title: "Test Preparations",
            subtitle: "Expert coaching for global entrance exams.",
            courses: [
                { title: "SAT Prep", image: "/images/sat_v2.webp", link: "/sat-preparation-sharjah" },
                { title: "IELTS Coaching", image: "/images/ielts_v2.webp", link: "/ielts-course" },
                { title: "TOEFL Prep", image: "/images/toefl_v2.webp", link: "/toefl-course" },
                { title: "PTE Academic", image: "/images/pte_v2.webp", link: "/pte-course" },
                { title: "GRE Preparation", image: "/images/gmat_gre_v2.webp", link: "/gre-preparation" },
                { title: "GMAT Coaching", image: "/images/gmat_gre_v2.webp", link: "/gmat-preparation" }
            ],
            viewMore: "/test-preparations"
        },
        {
            id: "languages",
            title: "Language Trainings",
            subtitle: "Master new languages for personal and professional growth.",
            courses: [
                { title: "Spoken English", image: "/images/english_lang_v2.webp", link: "/spoken-english" },
                { title: "Spoken Arabic", image: "/images/arabic_lang_v2.webp", link: "/spoken-arabic" },
                { title: "French Language", image: "/images/french_lang_v2.webp", link: "/french" },
                { title: "German Language", image: "/images/german_lang_v2.webp", link: "/german" },
                { title: "Spanish Language", image: "/images/spanish_lang_v2.webp", link: "/spanish" }
            ],
            viewMore: "/language-trainings"
        }
    ];

    return (
        <main className="courses-explorer-page">
            <SEO />
            
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav className="listing-hero-nav" style={{ marginBottom: '20px' }}>
                            <Link to="/" style={{ color: 'var(--primary-color)' }}>Home</Link> / <span>Courses</span>
                        </nav>
                        <h1>Courses by <span className="text-gradient">NITAQ ACADEMY</span></h1>
                        <p>Explore our wide range of professional, academic, and language programs designed for your success.</p>
                    </div>
                </div>
            </section>

            {courseCategories.map((cat) => (
                <section key={cat.id} className="section-padding" style={{ background: cat.id === 'testprep' ? '#f8fafc' : 'white' }}>
                    <div className="container">
                        <div className="cat-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
                            <div>
                                <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '10px' }}>{cat.title}</h2>
                                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>{cat.subtitle}</p>
                            </div>
                            <Link to={cat.viewMore} className="view-more-link" style={{ color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                                View All {cat.title} <span>→</span>
                            </Link>
                        </div>

                        <div className="course-scroll-container">
                            <div className="course-scroll-track">
                                {cat.courses.map((course, idx) => (
                                    <div key={idx} className="course-scroll-card">
                                        <div className="scroll-card-img">
                                            <img src={course.image} alt={course.title} />
                                        </div>
                                        <div className="scroll-card-content">
                                            <h3>{course.title}</h3>
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                <Link to={course.link} className="scroll-btn-view">Details</Link>
                                                <a href="tel:+97165798313" className="scroll-btn-call">Enroll</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            <style dangerouslySetInnerHTML={{ __html: `
                .course-scroll-container {
                    overflow-x: auto;
                    padding-bottom: 30px;
                    margin-bottom: -30px;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none;  /* IE and Edge */
                }
                .course-scroll-container::-webkit-scrollbar {
                    display: none; /* Chrome, Safari and Opera */
                }
                .course-scroll-track {
                    display: flex;
                    gap: 25px;
                }
                .course-scroll-card {
                    flex: 0 0 320px;
                    background: white;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid #f1f5f9;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                    transition: transform 0.3s ease;
                }
                .course-scroll-card:hover {
                    transform: translateY(-5px);
                    border-color: var(--primary-color);
                }
                .scroll-card-img {
                    height: 200px;
                }
                .scroll-card-img img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .scroll-card-content {
                    padding: 25px;
                }
                .scroll-card-content h3 {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                    color: #1e293b;
                    height: 2.8rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                .scroll-btn-view {
                    flex: 1;
                    padding: 10px;
                    text-align: center;
                    background: #f8fafc;
                    color: #475569;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    font-weight: 600;
                }
                .scroll-btn-call {
                    flex: 1;
                    padding: 10px;
                    text-align: center;
                    background: var(--primary-color);
                    color: white;
                    border-radius: 10px;
                    font-size: 0.9rem;
                    font-weight: 600;
                }
                @media (max-width: 768px) {
                    .cat-header {
                        flex-direction: column;
                        align-items: flex-start !important;
                        gap: 15px;
                    }
                }
            `}} />
        </main>
    );
};

export default Courses;
