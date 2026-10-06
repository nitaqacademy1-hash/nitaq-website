import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, ChevronDown, Plus, Minus } from 'lucide-react';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { stripLangPrefix } from '../i18n/config';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';
import '../styles/header.css';

const menu = {
  en: {
    sat: 'SAT Preparation',
    languages: 'Language Training',
    tuition: 'Subject Tuition',
    other: 'Other Courses',
    call: 'Call Admissions',
    menu: 'Open navigation',
    close: 'Close navigation',
    general: 'Language courses',
    exams: 'English exam preparation',
    professional: 'Professional & technical',
    business: 'Business & corporate',
    finance: 'Finance & Accounting',
    tech: 'Tech, AI & Digital',
    businessMgmt: 'Business & Management',
    testPrepFoundations: 'Test Prep & Foundations',
    allLanguages: 'All Language Trainings →',
    allTuition: 'All Subject Tuition →',
    allCourses: 'All Other Courses →'
  },
  ar: {
    sat: 'التحضير لاختبار SAT',
    languages: 'تدريب اللغات',
    tuition: 'الدروس الأكاديمية',
    other: 'دورات أخرى',
    call: 'اتصل بالقبول',
    menu: 'فتح قائمة التنقل',
    close: 'إغلاق قائمة التنقل',
    general: 'دورات اللغات',
    exams: 'اختبارات كفاءة الإنجليزية',
    professional: 'دورات مهنية وتقنية',
    business: 'الأعمال والتدريب المؤسسي',
    finance: 'المحاسبة والمالية',
    tech: 'التكنولوجيا والذكاء الاصطناعي',
    businessMgmt: 'الأعمال والإدارة',
    testPrepFoundations: 'اختبارات وتأسيس',
    allLanguages: 'جميع تدريبات اللغات ←',
    allTuition: 'جميع الدروس الأكاديمية ←',
    allCourses: 'جميع الدورات الأخرى ←'
  }
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();
  const { lang, switchLanguage } = useLanguage();
  const c = menu[lang] || menu.en;
  const path = stripLangPrefix(location.pathname);

  const close = () => {
    setOpen(false);
    setExpanded(null);
    document.body.style.overflow = '';
  };

  const toggle = () => {
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === 'Escape') {
        close();
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = event => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        close();
      }
    };

    const media = window.matchMedia('(min-width: 1101px)');
    const onBreakpoint = () => {
      if (media.matches) close();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    media.addEventListener('change', onBreakpoint);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      media.removeEventListener('change', onBreakpoint);
      document.body.style.overflow = '';
    };
  }, []);

  // Check active states
  const isSatActive = path === '/sat-preparation-sharjah' || path === '/sat-preparation-dubai';
  const isLanguagesActive =
    path === '/language-trainings' ||
    ['/spoken-english', '/spoken-arabic', '/french', '/spanish', '/german', '/ielts-course', '/toefl-course', '/pte-course'].includes(path);
  const isTuitionActive =
    path === '/academic-excellence' ||
    path.includes('tuition');
  const isOtherActive =
    path === '/courses' ||
    ['/professional-certifications', '/ai-course', '/cybersecurity-course-sharjah', '/finance-courses', '/corporate-trainings', '/soft-skills-training', '/sales-negotiations', '/test-preparations'].includes(path);

  return (
    <>
      <header
        ref={headerRef}
        className={`nh-site-navbar nh-navbar ${scrolled ? 'is-scrolled' : ''}`}
      >
        {/* Brand Logo */}
        <Link to="/" className="nh-logo" aria-label="Nitaq Academy" onClick={close}>
          <img
            src="/images/logo-white.webp"
            alt="Nitaq Academy"
            width="142"
            height="53"
            fetchPriority="high"
          />
        </Link>

        {/* Navigation Menu */}
        <nav
          id="site-navigation"
          className={`nh-navigation ${open ? 'is-open' : ''}`}
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Main navigation'}
        >
          {/* 1. SAT Preparation */}
          <div className="nh-nav-item">
            <Link
              to="/sat-preparation-sharjah"
              className={`nh-nav-link ${isSatActive ? 'is-active' : ''}`}
              onClick={close}
            >
              {c.sat}
            </Link>
          </div>

          {/* 2. Language Training */}
          <div className={`nh-nav-item ${expanded === 'languages' ? 'is-expanded' : ''}`}>
            <div className="nh-mobile-item-row">
              <Link
                to="/language-trainings"
                className={`nh-nav-link ${isLanguagesActive ? 'is-active' : ''}`}
                onClick={close}
              >
                <span>{c.languages}</span>
                <ChevronDown size={13} className="nh-dropdown-caret desktop-only-icon" />
              </Link>
              <button
                type="button"
                className="nh-mobile-expand-btn mobile-only-btn"
                aria-label={(expanded === 'languages' ? 'Collapse ' : 'Expand ') + c.languages}
                onClick={e => toggleExpand('languages', e)}
              >
                {expanded === 'languages' ? <Minus size={15} /> : <Plus size={15} />}
              </button>
            </div>

            <div className="nh-dropdown-menu">
              <div className="nh-dropdown-mega two-col">
                <div className="nh-dropdown-column">
                  <strong>{c.general}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/spoken-english" onClick={close}>{lang === 'ar' ? 'اللغة الإنجليزية والمحادثة' : 'English'}</Link></li>
                    <li><Link to="/spoken-arabic" onClick={close}>{lang === 'ar' ? 'العربية للناطقين بغيرها' : 'العربية / Arabic'}</Link></li>
                    <li><Link to="/french" onClick={close}>{lang === 'ar' ? 'اللغة الفرنسية' : 'French'}</Link></li>
                    <li><Link to="/spanish" onClick={close}>{lang === 'ar' ? 'اللغة الإسبانية' : 'Spanish'}</Link></li>
                    <li><Link to="/german" onClick={close}>{lang === 'ar' ? 'اللغة الألمانية' : 'German'}</Link></li>
                  </ul>
                </div>
                <div className="nh-dropdown-column">
                  <strong>{c.exams}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/ielts-course" onClick={close}>{lang === 'ar' ? 'التحضير لاختبار IELTS' : 'IELTS Academic & General'}</Link></li>
                    <li><Link to="/toefl-course" onClick={close}>{lang === 'ar' ? 'التحضير لاختبار TOEFL iBT' : 'TOEFL iBT'}</Link></li>
                    <li><Link to="/pte-course" onClick={close}>{lang === 'ar' ? 'التحضير لاختبار PTE Academic' : 'PTE Academic'}</Link></li>
                  </ul>
                  <div className="nh-dropdown-footer">
                    <Link to="/language-trainings" className="nh-dropdown-view-all" onClick={close}>
                      {c.allLanguages}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Subject Tuition */}
          <div className={`nh-nav-item ${expanded === 'tuition' ? 'is-expanded' : ''}`}>
            <div className="nh-mobile-item-row">
              <Link
                to="/academic-excellence"
                className={`nh-nav-link ${isTuitionActive ? 'is-active' : ''}`}
                onClick={close}
              >
                <span>{c.tuition}</span>
                <ChevronDown size={13} className="nh-dropdown-caret desktop-only-icon" />
              </Link>
              <button
                type="button"
                className="nh-mobile-expand-btn mobile-only-btn"
                aria-label={(expanded === 'tuition' ? 'Collapse ' : 'Expand ') + c.tuition}
                onClick={e => toggleExpand('tuition', e)}
              >
                {expanded === 'tuition' ? <Minus size={15} /> : <Plus size={15} />}
              </button>
            </div>

            <div className="nh-dropdown-menu">
              <div className="nh-dropdown-mega single-col">
                <div className="nh-dropdown-column">
                  <strong>{c.tuition}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/maths-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس الرياضيات' : 'Mathematics Tuition'}</Link></li>
                    <li><Link to="/science-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس العلوم العامة' : 'Science Tuition'}</Link></li>
                    <li><Link to="/physics-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس الفيزياء' : 'Physics Tuition'}</Link></li>
                    <li><Link to="/chemistry-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس الكيمياء' : 'Chemistry Tuition'}</Link></li>
                    <li><Link to="/biology-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس الأحياء' : 'Biology Tuition'}</Link></li>
                    <li><Link to="/english-tuition-sharjah" onClick={close}>{lang === 'ar' ? 'دروس اللغة الإنجليزية' : 'English Tuition'}</Link></li>
                  </ul>
                  <div className="nh-dropdown-footer">
                    <Link to="/academic-excellence" className="nh-dropdown-view-all" onClick={close}>
                      {c.allTuition}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Other Courses */}
          <div className={`nh-nav-item has-mega-dropdown ${expanded === 'other' ? 'is-expanded' : ''}`}>
            <div className="nh-mobile-item-row">
              <Link
                to="/courses"
                className={`nh-nav-link ${isOtherActive ? 'is-active' : ''}`}
                onClick={close}
              >
                <span>{c.other}</span>
                <ChevronDown size={13} className="nh-dropdown-caret desktop-only-icon" />
              </Link>
              <button
                type="button"
                className="nh-mobile-expand-btn mobile-only-btn"
                aria-label={(expanded === 'other' ? 'Collapse ' : 'Expand ') + c.other}
                onClick={e => toggleExpand('other', e)}
              >
                {expanded === 'other' ? <Minus size={15} /> : <Plus size={15} />}
              </button>
            </div>

            <div className="nh-dropdown-menu">
              <div className="nh-dropdown-mega four-col">
                {/* Column 1: Finance & Accounting */}
                <div className="nh-dropdown-column">
                  <strong>{c.finance}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/acca-course" onClick={close}>{lang === 'ar' ? 'شهادة ACCA' : 'ACCA Qualification'}</Link></li>
                    <li><Link to="/cma-course" onClick={close}>{lang === 'ar' ? 'شهادة CMA' : 'CMA Preparation'}</Link></li>
                    <li><Link to="/cpa-course" onClick={close}>{lang === 'ar' ? 'شهادة CPA' : 'CPA Preparation'}</Link></li>
                    <li><Link to="/uae-corporate-tax" onClick={close}>{lang === 'ar' ? 'ضريبة الشركات في الإمارات' : 'UAE Corporate Tax'}</Link></li>
                    <li><Link to="/uae-vat" onClick={close}>{lang === 'ar' ? 'ضريبة القيمة المضافة UAE VAT' : 'UAE VAT Training'}</Link></li>
                    <li><Link to="/finance-courses" onClick={close}>{lang === 'ar' ? 'جميع الدورات المالية' : 'All Finance Courses'}</Link></li>
                  </ul>
                </div>

                {/* Column 2: Tech, AI & Software */}
                <div className="nh-dropdown-column">
                  <strong>{c.tech}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/ai-course" onClick={close}>{lang === 'ar' ? 'الذكاء الاصطناعي والتعلم الآلي' : 'AI & Machine Learning'}</Link></li>
                    <li><Link to="/cybersecurity-course-sharjah" onClick={close}>{lang === 'ar' ? 'دبلوم الأمن السيبراني' : 'Cybersecurity Diploma'}</Link></li>
                    <li><Link to="/software-engineering-diploma-sharjah" onClick={close}>{lang === 'ar' ? 'هندسة البرمجيات' : 'Software Engineering'}</Link></li>
                    <li><Link to="/power-bi-excel" onClick={close}>{lang === 'ar' ? 'Power BI والإكسيل المتقدم' : 'Power BI & Excel'}</Link></li>
                    <li><Link to="/courses/professional-digital-marketing-course-sharjah-uae" onClick={close}>{lang === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}</Link></li>
                    <li><Link to="/data-management" onClick={close}>{lang === 'ar' ? 'إدارة البيانات' : 'Data Management'}</Link></li>
                  </ul>
                </div>

                {/* Column 3: Business & Management */}
                <div className="nh-dropdown-column">
                  <strong>{c.businessMgmt}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/corporate-trainings" onClick={close}>{lang === 'ar' ? 'التدريب المؤسسي للشركات' : 'Corporate Training'}</Link></li>
                    <li><Link to="/chrm" onClick={close}>{lang === 'ar' ? 'إدارة الموارد البشرية CHRM' : 'HR Management (CHRM)'}</Link></li>
                    <li><Link to="/hrm-courses" onClick={close}>{lang === 'ar' ? 'دورات الموارد البشرية' : 'HRM Courses'}</Link></li>
                    <li><Link to="/soft-skills-training" onClick={close}>{lang === 'ar' ? 'تطوير المهارات الشخصية' : 'Soft Skills Training'}</Link></li>
                    <li><Link to="/sales-negotiations" onClick={close}>{lang === 'ar' ? 'المبيعات والتفاوض' : 'Sales & Negotiation'}</Link></li>
                    <li><Link to="/professional-marketing-course" onClick={close}>{lang === 'ar' ? 'التسويق الاحترافي' : 'Professional Marketing'}</Link></li>
                  </ul>
                </div>

                {/* Column 4: Other Test Prep & Foundations */}
                <div className="nh-dropdown-column">
                  <strong>{c.testPrepFoundations}</strong>
                  <ul className="nh-dropdown-list">
                    <li><Link to="/gmat-preparation" onClick={close}>{lang === 'ar' ? 'التحضير لاختبار GMAT' : 'GMAT Preparation'}</Link></li>
                    <li><Link to="/gre-preparation" onClick={close}>{lang === 'ar' ? 'التحضير لاختبار GRE' : 'GRE Preparation'}</Link></li>
                    <li><Link to="/foundation-jee-neet" onClick={close}>{lang === 'ar' ? 'برنامج التأسيس JEE / NEET' : 'Foundation JEE / NEET'}</Link></li>
                    <li><Link to="/ai-robotics-kids" onClick={close}>{lang === 'ar' ? 'الروبوت والذكاء الاصطناعي للأطفال' : 'AI & Robotics for Kids'}</Link></li>
                    <li><Link to="/test-preparations" onClick={close}>{lang === 'ar' ? 'جميع اختبارات القبول' : 'All Test Preparations'}</Link></li>
                    <li><Link to="/professional-certifications" onClick={close}>{lang === 'ar' ? 'جميع الدورات المهنية' : 'All Professional Courses'}</Link></li>
                  </ul>
                  <div className="nh-dropdown-footer">
                    <Link to="/courses" className="nh-dropdown-view-all" onClick={close}>
                      {c.allCourses}
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
              href="tel:+971527569908"
              onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'site_header_mobile')}
            >
              {c.call}
              <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>

        {/* Right Actions for Desktop */}
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
            href="tel:+971527569908"
            onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'site_header_desktop')}
          >
            {c.call}
            <ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            ref={toggleRef}
            className="nh-menu-toggle"
            aria-expanded={open}
            aria-controls="site-navigation"
            aria-label={open ? c.close : c.menu}
            onClick={toggle}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay for mobile menu */}
      {open && <div className="nh-mobile-backdrop" onClick={close} />}
    </>
  );
};

export default Header;
