import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { stripLangPrefix } from '../i18n/config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const { lang, t, switchLanguage } = useLanguage();

    // Active-state checks must ignore the /ar prefix so the Arabic pages
    // highlight the same nav items as their English counterparts.
    const path = stripLangPrefix(location.pathname);

    const toggleLanguage = () => switchLanguage(lang === 'en' ? 'ar' : 'en');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
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

            <header className={`${isScrolled ? 'scrolled' : ''} ${path === '/' && !isScrolled ? 'home-top-header' : ''}`.trim()}>
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
                        aria-label={t('nav.toggleMenu')}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className={path === '/' ? 'active' : ''} onClick={closeMenu}>{t('nav.home')}</Link>
                        <Link to="/about" className={path === '/about' ? 'active' : ''} onClick={closeMenu}>{t('nav.about')}</Link>

                        <div className="dropdown">
                            <span className={`dropbtn ${['/test-preparations', '/professional-certifications', '/language-trainings', '/corporate-trainings'].includes(path) ? 'active' : ''}`}>{t('nav.courses')} ▾</span>
                            <div className="dropdown-content">
                                <div className="submenu-item">
                                    <Link to="/test-preparations" onClick={closeMenu}>{t('nav.testPreparations')} <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/ielts-course" onClick={closeMenu}>{t('nav.items.ielts')}</Link>
                                        <Link to="/toefl-course" onClick={closeMenu}>{t('nav.items.toefl')}</Link>
                                        <Link to="/pte-course" onClick={closeMenu}>{t('nav.items.pte')}</Link>
                                        <Link to="/sat-preparation-sharjah" onClick={closeMenu}>{t('nav.items.sat')}</Link>
                                        <Link to="/gmat-preparation" onClick={closeMenu}>{t('nav.items.gmat')}</Link>
                                        <Link to="/gre-preparation" onClick={closeMenu}>{t('nav.items.gre')}</Link>
                                        <Link to="/foundation-jee-neet" onClick={closeMenu}>{t('nav.items.jeeNeet')}</Link>
                                        <Link to="/academic-excellence" onClick={closeMenu}>{t('nav.items.academicExcellence')}</Link>
                                    </div>
                                </div>
                                <div className="submenu-item">
                                    <Link to="/professional-certifications" onClick={closeMenu}>{t('nav.professionalCertifications')} <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/ai-course" onClick={closeMenu}>{t('nav.items.ai')}</Link>
                                        <Link to="/cybersecurity-course-sharjah" onClick={closeMenu}>{t('nav.items.cybersecurity')}</Link>
                                        <Link to="/power-bi-excel" onClick={closeMenu}>{t('nav.items.powerBi')}</Link>
                                        <Link to="/sales-negotiations" onClick={closeMenu}>{t('nav.items.sales')}</Link>
                                        <Link to="/courses/professional-digital-marketing-course-sharjah-uae" onClick={closeMenu}>{t('nav.items.digitalMarketing')}</Link>
                                        <Link to="/professional-marketing-course" onClick={closeMenu}>{t('nav.items.professionalMarketing')}</Link>
                                        <Link to="/software-engineering-diploma-sharjah" onClick={closeMenu}>{t('nav.items.softwareEngineering')}</Link>
                                        <Link to="/cpcd-courses" onClick={closeMenu}>{t('nav.items.cpcd')}</Link>
                                        <Link to="/data-management" onClick={closeMenu}>{t('nav.items.dataManagement')}</Link>
                                        <Link to="/soft-skills-training" onClick={closeMenu}>{t('nav.items.softSkills')}</Link>
                                    </div>
                                </div>
                                <div className="submenu-item">
                                    <Link to="/language-trainings" onClick={closeMenu}>{t('nav.languageTrainings')} <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/spoken-english" onClick={closeMenu}>{t('nav.items.spokenEnglish')}</Link>
                                        <Link to="/spoken-arabic" onClick={closeMenu}>{t('nav.items.spokenArabic')}</Link>
                                        <Link to="/french" onClick={closeMenu}>{t('nav.items.french')}</Link>
                                        <Link to="/spanish" onClick={closeMenu}>{t('nav.items.spanish')}</Link>
                                        <Link to="/german" onClick={closeMenu}>{t('nav.items.german')}</Link>
                                    </div>
                                </div>
                                <Link to="/corporate-trainings" onClick={closeMenu}>{t('nav.corporateTrainings')}</Link>
                            </div>
                        </div>

                        <Link to="/contact" className={path === '/contact' ? 'active' : ''} onClick={closeMenu}>{t('nav.contact')}</Link>
                        <a
                            href="tel:+97165798313"
                            className="btn btn-primary mobile-only-btn"
                            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'header_mobile')}
                        >
                            {t('common.callUs')}
                        </a>

                    </nav>

                    <div className="header-right-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button
                            onClick={toggleLanguage}
                            className="lang-toggle"
                            lang={lang === 'en' ? 'ar' : 'en'}
                            aria-label={t('common.switchLanguage')}
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
                            {lang === 'en' ? 'العربية' : 'English'}
                        </button>

                        <a
                            href="tel:+97165798313"
                            className="btn btn-primary desktop-only-btn"
                            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'header_desktop')}
                        >
                            {t('common.callUs')}
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
