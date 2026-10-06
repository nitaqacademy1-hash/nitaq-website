import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { Link } from '../../i18n/Link';
import { useLanguage } from '../../i18n/context';
import { contact } from './content';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';
import '../../styles/header.css';

export default function Navbar({ c }) {
  const { lang, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const toggle = useRef(null);
  const nav = useRef(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
    document.body.style.overflow = '';
  };

  const toggleOpen = () => {
    setOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const toggleExpand = (section, e) => {
    e.stopPropagation();
    setExpanded(prev => (prev === section ? null : section));
  };

  useEffect(() => {
    const escape = event => {
      if (event.key === 'Escape') {
        close();
        toggle.current?.focus();
      }
    };
    const outside = event => {
      if (!nav.current?.contains(event.target)) {
        close();
      }
    };
    const desktop = window.matchMedia('(min-width: 1101px)');
    const handleBreakpoint = () => {
      if (desktop.matches) close();
    };

    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    desktop.addEventListener('change', handleBreakpoint);

    return () => {
      document.removeEventListener('keydown', escape);
      document.removeEventListener('pointerdown', outside);
      desktop.removeEventListener('change', handleBreakpoint);
      document.body.style.overflow = '';
    };
  }, []);

  const isAr = lang === 'ar';

  return (
    <>
      <header className="nh-navbar nh-site-navbar" ref={nav}>
        {/* Brand Logo */}
        <Link className="nh-logo" to="/" aria-label="Nitaq Academy" onClick={close}>
          <img src="/images/logo-white.webp" width="142" height="53" alt="Nitaq Academy" />
        </Link>

        {/* Navigation Links */}
        <nav
          id="home-navigation"
          className={`nh-navigation ${open ? 'is-open' : ''}`}
          aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'}
        >
          {/* 1. SAT Preparation */}
          <div className="nh-nav-item">
            <Link
              to="/sat-preparation-sharjah"
              className="nh-nav-link"
              onClick={close}
            >
              {isAr ? 'التحضير لاختبار SAT' : 'SAT Preparation'}
            </Link>
          </div>

          {/* 2. Language Training */}
          <div className="nh-nav-item">
            <Link
              to="/language-trainings"
              className="nh-nav-link"
              onClick={close}
            >
              {isAr ? 'تدريب اللغات' : 'Language Training'}
            </Link>
          </div>

          {/* 3. Subject Tuition */}
          <div className="nh-nav-item">
            <Link
              to="/academic-excellence"
              className="nh-nav-link"
              onClick={close}
            >
              {isAr ? 'الدروس الأكاديمية' : 'Subject Tuition'}
            </Link>
          </div>

          {/* 4. Other Courses with Hover Arrow & Categorized Mega Dropdown */}
          <div className={`nh-nav-item has-mega-dropdown ${expanded === 'other' ? 'is-expanded' : ''}`}>
            <div className="nh-mobile-item-row">
              <Link
                to="/courses"
                className="nh-nav-link"
                onClick={close}
              >
                <span>{isAr ? 'دورات أخرى' : 'Other Courses'}</span>
                <ChevronDown size={13} className="nh-dropdown-caret desktop-only-icon" />
              </Link>
              <button
                type="button"
                className="nh-mobile-expand-btn mobile-only-btn"
                aria-label={(expanded === 'other' ? 'Collapse ' : 'Expand ') + (isAr ? 'دورات أخرى' : 'Other Courses')}
                onClick={e => toggleExpand('other', e)}
              >
                {expanded === 'other' ? <Minus size={15} /> : <Plus size={15} />}
              </button>
            </div>

            <div className="nh-dropdown-menu">
              <div className="nh-dropdown-mega four-col">
                {/* Column 1: Finance & Accounting */}
                <div className="nh-dropdown-column">
                  <strong>{isAr ? 'المحاسبة والمالية' : 'Finance & Accounting'}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/acca-course" onClick={close}>{isAr ? 'شهادة ACCA' : 'ACCA Qualification'}</Link></li>
                    <li><Link to="/cma-course" onClick={close}>{isAr ? 'شهادة CMA' : 'CMA Preparation'}</Link></li>
                    <li><Link to="/cpa-course" onClick={close}>{isAr ? 'شهادة CPA' : 'CPA Preparation'}</Link></li>
                    <li><Link to="/uae-corporate-tax" onClick={close}>{isAr ? 'ضريبة الشركات في الإمارات' : 'UAE Corporate Tax'}</Link></li>
                    <li><Link to="/uae-vat" onClick={close}>{isAr ? 'ضريبة القيمة المضافة UAE VAT' : 'UAE VAT Training'}</Link></li>
                    <li><Link to="/finance-courses" onClick={close}>{isAr ? 'جميع الدورات المالية' : 'All Finance Courses'}</Link></li>
                  </ul>
                </div>

                {/* Column 2: Tech, AI & Software */}
                <div className="nh-dropdown-column">
                  <strong>{isAr ? 'التكنولوجيا والذكاء الاصطناعي' : 'Tech, AI & Digital'}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/ai-course" onClick={close}>{isAr ? 'الذكاء الاصطناعي والتعلم الآلي' : 'AI & Machine Learning'}</Link></li>
                    <li><Link to="/cybersecurity-course-sharjah" onClick={close}>{isAr ? 'دبلوم الأمن السيبراني' : 'Cybersecurity Diploma'}</Link></li>
                    <li><Link to="/software-engineering-diploma-sharjah" onClick={close}>{isAr ? 'هندسة البرمجيات' : 'Software Engineering'}</Link></li>
                    <li><Link to="/power-bi-excel" onClick={close}>{isAr ? 'Power BI والإكسيل المتقدم' : 'Power BI & Excel'}</Link></li>
                    <li><Link to="/courses/professional-digital-marketing-course-sharjah-uae" onClick={close}>{isAr ? 'التسويق الرقمي' : 'Digital Marketing'}</Link></li>
                    <li><Link to="/data-management" onClick={close}>{isAr ? 'إدارة البيانات' : 'Data Management'}</Link></li>
                  </ul>
                </div>

                {/* Column 3: Management, Business & Corporate */}
                <div className="nh-dropdown-column">
                  <strong>{isAr ? 'الأعمال والإدارة' : 'Business & Corporate'}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/corporate-trainings" onClick={close}>{isAr ? 'التدريب المؤسسي للشركات' : 'Corporate Training'}</Link></li>
                    <li><Link to="/chrm" onClick={close}>{isAr ? 'إدارة الموارد البشرية CHRM' : 'HR Management (CHRM)'}</Link></li>
                    <li><Link to="/hrm-courses" onClick={close}>{isAr ? 'دورات الموارد البشرية' : 'HRM Courses'}</Link></li>
                    <li><Link to="/soft-skills-training" onClick={close}>{isAr ? 'تطوير المهارات الشخصية' : 'Soft Skills Training'}</Link></li>
                    <li><Link to="/sales-negotiations" onClick={close}>{isAr ? 'المبيعات والتفاوض' : 'Sales & Negotiation'}</Link></li>
                    <li><Link to="/professional-marketing-course" onClick={close}>{isAr ? 'التسويق الاحترافي' : 'Professional Marketing'}</Link></li>
                  </ul>
                </div>

                {/* Column 4: Other Test Prep & Foundations */}
                <div className="nh-dropdown-column">
                  <strong>{isAr ? 'اختبارات وتأسيس' : 'Test Prep & Foundations'}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/gmat-preparation" onClick={close}>{isAr ? 'التحضير لاختبار GMAT' : 'GMAT Preparation'}</Link></li>
                    <li><Link to="/gre-preparation" onClick={close}>{isAr ? 'التحضير لاختبار GRE' : 'GRE Preparation'}</Link></li>
                    <li><Link to="/foundation-jee-neet" onClick={close}>{isAr ? 'برنامج التأسيس JEE / NEET' : 'Foundation JEE / NEET'}</Link></li>
                    <li><Link to="/ai-robotics-kids" onClick={close}>{isAr ? 'الروبوت والذكاء الاصطناعي للأطفال' : 'AI & Robotics for Kids'}</Link></li>
                    <li><Link to="/test-preparations" onClick={close}>{isAr ? 'جميع اختبارات القبول' : 'All Test Preparations'}</Link></li>
                    <li><Link to="/professional-certifications" onClick={close}>{isAr ? 'جميع الدورات المهنية' : 'All Professional Courses'}</Link></li>
                  </ul>
                  <div className="nh-dropdown-footer">
                    <Link to="/courses" className="nh-dropdown-view-all" onClick={close}>
                      {isAr ? 'عرض جميع الدورات الأخرى ←' : 'View All Other Courses →'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Actions Inside Drawer */}
          <div className="nh-mobile-actions-row mobile-only-block">
            <button
              type="button"
              className="nh-language"
              onClick={() => {
                switchLanguage(lang === 'en' ? 'ar' : 'en');
                close();
              }}
              aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
            <a
              className="nh-nav-call"
              href={`tel:${contact.phone}`}
              onClick={() => {
                trackEvent(ANALYTICS_EVENTS.CALL, 'home_header_mobile');
                close();
              }}
            >
              {c.call}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>

        {/* Right Desktop Actions */}
        <div className="nh-nav-actions">
          <button
            type="button"
            className="nh-language"
            onClick={() => switchLanguage(lang === 'en' ? 'ar' : 'en')}
            aria-label={lang === 'en' ? 'Switch to Arabic' : 'Switch to English'}
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
          <a
            className="nh-nav-call"
            href={`tel:${contact.phone}`}
            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'home_header')}
          >
            {c.call}
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            ref={toggle}
            className="nh-menu-toggle"
            aria-expanded={open}
            aria-controls="home-navigation"
            aria-label={open ? c.close : c.menu}
            onClick={toggleOpen}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Backdrop Blur on Mobile Drawer Open */}
      {open && <div className="nh-mobile-backdrop mobile-only-block" onClick={close} />}
    </>
  );
}
