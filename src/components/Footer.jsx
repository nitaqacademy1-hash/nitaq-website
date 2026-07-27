import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-minimal">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">

                        <div style={{ marginTop: '0px', marginBottom: '0px' }}>
                            <img src="/images/whatsapp-img-3.png" alt={t('footer.speaAlt')} style={{ height: '70px', width: 'auto', objectFit: 'contain' }} loading="lazy" />
                        </div>
                        <p>{t('footer.tagline')}</p>
                    </div>
                    <div className="footer-nav">
                        <div>
                            <h4>{t('footer.testPreparations')}</h4>
                            <Link to="/academic-excellence">{t('footer.links.academicExcellence')}</Link>
                            <Link to="/foundation-jee-neet">{t('footer.links.jeeNeet')}</Link>
                            <Link to="/sat-preparation-sharjah">{t('footer.links.sat')}</Link>
                            <Link to="/gmat-preparation">{t('footer.links.gmat')}</Link>
                            <Link to="/gre-preparation">{t('footer.links.gre')}</Link>
                            <Link to="/ai-robotics-kids">{t('footer.links.aiRobotics')}</Link>
                        </div>
                        <div>
                            <h4>{t('footer.certifications')}</h4>
                            <Link to="/finance-courses">{t('footer.links.finance')}</Link>
                            <Link to="/uae-vat">{t('footer.links.vat')}</Link>
                            <Link to="/uae-corporate-tax">{t('footer.links.corporateTax')}</Link>
                            <Link to="/ai-course">{t('footer.links.ai')}</Link>
                            <Link to="/power-bi-excel">{t('footer.links.powerBi')}</Link>
                            <Link to="/chrm">{t('footer.links.chrm')}</Link>
                            <Link to="/hrm-courses">{t('footer.links.hrm')}</Link>
                            <Link to="/sales-negotiations">{t('footer.links.sales')}</Link>
                            <Link to="/courses/professional-digital-marketing-course-sharjah-uae">{t('footer.links.digitalMarketing')}</Link>
                            <Link to="/professional-marketing-course" style={{ fontWeight: 600 }}>{t('footer.links.professionalMarketing')}</Link>
                        </div>
                        <div>
                            <h4>{t('footer.languagesAndMore')}</h4>
                            <Link to="/spoken-arabic">{t('footer.links.spokenArabic')}</Link>
                            <Link to="/spoken-english">{t('footer.links.spokenEnglish')}</Link>
                            <Link to="/french">{t('footer.links.french')}</Link>
                            <Link to="/german">{t('footer.links.german')}</Link>
                            <Link to="/spanish">{t('footer.links.spanish')}</Link>
                            <Link to="/ielts-course">IELTS</Link>
                            <Link to="/pte-course">PTE</Link>
                            <Link to="/toefl-course">TOEFL</Link>
                        </div>
                        <div>
                            <h4>{t('footer.articlesAndInsights')}</h4>
                            <Link to="/article/sat-score-1300-guide">SAT 1300+ Guide</Link>
                            <Link to="/article/common-sat-mistakes">Common SAT Mistakes</Link>
                            <Link to="/article/ielts-dubai-guide">IELTS Dubai Guide</Link>
                            <Link to="/article/ai-courses-sharjah-essential">AI for 2026</Link>
                            <Link to="/article/professional-courses-sharjah-growth">Career Growth Tips</Link>
                            <Link to="/articles" style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>{t('footer.viewAllArticles')}</Link>
                        </div>
                        <div>
                            <h4>{t('footer.support')}</h4>
                            <Link to="/contact">{t('common.contactUs')}</Link>
                            {/* Full enrolment form is a standalone static page, not an SPA route */}
                            <a href="/enrolment.html">{t('footer.links.enrolmentForm')}</a>
                            <Link to="/enquiry">{t('footer.links.enquiryForm')}</Link>
                            <Link to="/about">{t('footer.links.aboutNitaq')}</Link>
                            <Link to="/terms-and-conditions">{t('footer.links.terms')}</Link>
                            <Link to="/privacy-policy">{t('footer.links.privacy')}</Link>
                        </div>
                        <div>
                            <h4>{t('footer.getInTouch')}</h4>
                            <li style={{ fontSize: '0.95rem' }}>
                                {t('footer.address').split('\n').map((line, i) => (
                                    <span key={i}>{line}<br /></span>
                                ))}
                            </li>
                            <li style={{ fontSize: '0.95rem', marginTop: '10px' }}>
                                <a
                                    href="tel:+971527569908"
                                    onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'footer_mobile')}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <span className="ltr-inline">+971 52 756 9908</span> ({t('footer.mobileLabel')})
                                </a>
                                <br />
                                <a
                                    href="tel:+97165798313"
                                    onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'footer_phone')}
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <span className="ltr-inline">+971 6 579 8313</span> ({t('footer.phoneLabel')})
                                </a>
                                <br />
                                <a 
                                    href="mailto:info@nitaqacademy.com" 
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    info@nitaqacademy.com
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div>
                        <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
                        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '5px' }}>
                            {t('footer.operatedBy')}
                        </p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.instagram.com/nitaq.academy" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/company/nitaqacademy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/nitaqacademy.ae/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
