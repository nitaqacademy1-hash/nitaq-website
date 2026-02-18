import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

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
                                        <Link to="/sat-preparation" onClick={closeMenu}>SAT Preparation</Link>
                                        <Link to="/gmat-preparation" onClick={closeMenu}>GMAT Coaching</Link>
                                        <Link to="/gre-preparation" onClick={closeMenu}>GRE Preparation</Link>
                                        <Link to="/foundation-jee-neet" onClick={closeMenu}>Foundation JEE/NEET</Link>
                                        <Link to="/academic-excellence" onClick={closeMenu}>Academic Excellence</Link>
                                    </div>
                                </div>
                                <div className="submenu-item">
                                    <Link to="/professional-certifications" onClick={closeMenu}>Professional Certifications <span className="arrow-right">›</span></Link>
                                    <div className="submenu-content">
                                        <Link to="/acca-course" onClick={closeMenu}>ACCA (UK)</Link>
                                        <Link to="/cma-course" onClick={closeMenu}>CMA (US)</Link>
                                        <Link to="/cpa-course" onClick={closeMenu}>CPA (US)</Link>
                                        <Link to="/uae-vat" onClick={closeMenu}>UAE VAT</Link>
                                        <Link to="/uae-corporate-tax" onClick={closeMenu}>UAE Corporate Tax</Link>
                                        <Link to="/ai-course" onClick={closeMenu}>AI Mastery (Basic-Adv)</Link>
                                        <Link to="/power-bi-excel" onClick={closeMenu}>Power BI & Excel</Link>
                                        <Link to="/chrm" onClick={closeMenu}>CHRM</Link>
                                        <Link to="/hrm-courses" onClick={closeMenu}>HRM Professional</Link>
                                        <Link to="/sales-negotiations" onClick={closeMenu}>Sales & Negotiations</Link>
                                        <Link to="/marketing-training" onClick={closeMenu}>Marketing Training</Link>
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
                        <a href="tel:+971545723181" className="btn btn-primary mobile-only-btn">Call Us</a>

                    </nav>

                    <a href="tel:+971545723181" className="btn btn-primary desktop-only-btn">Call Us</a>
                </div>
            </header>

            {isMenuOpen && (
                <div className="mobile-nav-overlay active" onClick={closeMenu}></div>
            )}
        </>
    );
};

export default Header;
