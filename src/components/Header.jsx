import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [currentLang, setCurrentLang] = useState('en');
    const location = useLocation();

    useEffect(() => {
        // Check initial language from Google Translate cookie
        const match = document.cookie.match(/googtrans=\/en\/([a-z]{2})/);
        const lang = match ? match[1] : 'en';
        setCurrentLang(lang);
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
        }
    }, []);

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        
        // Remove existing googtrans cookies
        document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${window.location.hostname}; path=/;`;
        
        if (newLang === 'ar') {
            // Set cookie for google translate
            document.cookie = `googtrans=/en/ar; path=/`;
            document.cookie = `googtrans=/en/ar; domain=.${window.location.hostname}; path=/`;
        }
        window.location.reload();
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };



    return (
        <>

            <header className={`${isScrolled ? 'scrolled' : ''} ${location.pathname === '/' && !isScrolled ? 'home-top-header' : ''}`.trim()}>
                <div className="container nav-wrapper">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img
                            src="/images/logo1.webp"
                            alt="Nitaq Logo"
                            width="160"
                            height="60"
                            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
                            fetchPriority="high"
                        />
                    </Link>

                    <button
                        className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
                        aria-label="Toggle Menu"
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
                        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About</Link>

                        <div className="dropdown">
                            <span className={`dropbtn ${['/test-preparations', '/professional-certifications', '/language-trainings', '/corporate-trainings'].includes(location.pathname) ? 'active' : ''}`}>Courses ▾</span>
                            <div className="dropdown-content">
                                <div className="submenu-item">
                                    <Link to="/test-preparations" onClick={closeMenu}>Test Preparations <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/ielts-course" onClick={closeMenu}>IELTS Preparation</Link>
                                        <Link to="/toefl-course" onClick={closeMenu}>TOEFL Preparation</Link>
                                        <Link to="/pte-course" onClick={closeMenu}>PTE Academic</Link>
                                        <Link to="/sat-preparation-sharjah" onClick={closeMenu}>SAT Preparation</Link>
                                        <Link to="/gmat-preparation" onClick={closeMenu}>GMAT Coaching</Link>
                                        <Link to="/gre-preparation" onClick={closeMenu}>GRE Preparation</Link>
                                        <Link to="/foundation-jee-neet" onClick={closeMenu}>Foundation JEE/NEET</Link>
                                        <Link to="/academic-excellence" onClick={closeMenu}>Academic Excellence</Link>
                                    </div>
                                </div>
                                <div className="submenu-item">
                                    <Link to="/professional-certifications" onClick={closeMenu}>Professional Certifications <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/ai-course" onClick={closeMenu}>AI Course</Link>
                                        <Link to="/cybersecurity-course-sharjah" onClick={closeMenu}>Cybersecurity & Ethical Hacking</Link>
                                        <Link to="/power-bi-excel" onClick={closeMenu}>Power BI & Excel</Link>
                                        <Link to="/sales-negotiations" onClick={closeMenu}>Sales & Negotiations</Link>
                                        <Link to="/courses/professional-digital-marketing-course-sharjah-uae" onClick={closeMenu}>Digital Marketing</Link>
                                        <Link to="/professional-marketing-course" onClick={closeMenu}>Professional Marketing</Link>
                                        <Link to="/software-engineering-diploma-sharjah" onClick={closeMenu}>Software Engineering</Link>
                                        <Link to="/cpcd-courses" onClick={closeMenu}>CPCD Professional</Link>
                                        <Link to="/data-management" onClick={closeMenu}>Data Management</Link>
                                        <Link to="/soft-skills-training" onClick={closeMenu}>Soft Skills Training</Link>
                                    </div>
                                </div>
                                <div className="submenu-item">
                                    <Link to="/language-trainings" onClick={closeMenu}>Language Trainings <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/spoken-english" onClick={closeMenu}>Spoken English</Link>
                                        <Link to="/spoken-arabic" onClick={closeMenu}>Spoken Arabic</Link>
                                        <Link to="/french" onClick={closeMenu}>French Language</Link>
                                        <Link to="/spanish" onClick={closeMenu}>Spanish Language</Link>
                                        <Link to="/german" onClick={closeMenu}>German Language</Link>
                                    </div>
                                </div>
                                <Link to="/corporate-trainings" onClick={closeMenu}>Corporate Trainings</Link>
                            </div>
                        </div>

                        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact</Link>
                        <a 
                            href="tel:+97165798313" 
                            className="btn btn-primary mobile-only-btn"
                            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'header_mobile')}
                        >
                            Call Us
                        </a>

                    </nav>

                    <div className="header-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button 
                            onClick={toggleLanguage}
                            className="lang-toggle"
                            style={{ 
                                padding: '8px 16px', 
                                border: '1px solid var(--primary-color, #2e7d32)',
                                borderRadius: '999px',
                                background: 'transparent',
                                color: 'var(--primary-color, #2e7d32)',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            {currentLang === 'en' ? 'العربية' : 'EN'}
                        </button>

                        <a
                            href="tel:+97165798313"
                            className="btn btn-primary desktop-only-btn"
                            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'header_desktop')}
                        >
                            Call Us
                        </a>
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <div className="mobile-nav-overlay active" onClick={closeMenu}></div>
            )}
        </>
    );
};

export default Header;
