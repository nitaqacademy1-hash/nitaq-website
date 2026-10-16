import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, Minus, Plus, X } from 'lucide-react';
import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { stripLangPrefix } from '../i18n/config';
import { primaryNavigation, navigationLabel } from '../data/siteNavigation';
import '../styles/header.css';

export default function Header() {
  const { lang, switchLanguage } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const path = stripLangPrefix(pathname);
  const isAr = lang === 'ar';

  const close = (returnFocus = false) => {
    setOpen(false);
    setExpanded(null);
    if (returnFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) requestAnimationFrame(() => navRef.current?.querySelector('a')?.focus());
    const onKeyDown = (event) => {
      if (!open) return;
      if (event.key === 'Escape') {
        close(true);
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...headerRef.current.querySelectorAll('a, button')]
        .filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault(); last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault(); first.focus();
      }
    };
    const onBreakpoint = () => { if (window.innerWidth > 1100) close(); };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onBreakpoint);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onBreakpoint);
    };
  }, [open]);

  const isActive = (entry) => path === entry.path || entry.groups?.some(group =>
    group.links.some(link => link.path === path));

  return <>
    <header ref={headerRef} className={`nh-site-navbar nh-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <Link to="/" className="nh-logo" aria-label={isAr ? 'أكاديمية نطاق - الرئيسية' : 'Nitaq Academy - Home'} onClick={() => close()}>
        <img src="/images/logo-white.webp" alt="Nitaq Academy" width="142" height="53" fetchPriority="high" />
      </Link>
      <nav id="site-navigation" ref={navRef} className={`nh-navigation ${open ? 'is-open' : ''}`} aria-label={isAr ? 'التنقل الرئيسي' : 'Main navigation'}>
        {primaryNavigation.map(entry => <div key={entry.id} className={`nh-nav-item ${entry.groups ? 'has-dropdown' : ''} ${entry.id === 'professional' ? 'has-mega-dropdown' : ''} ${expanded === entry.id ? 'is-expanded' : ''}`}>
          <div className="nh-mobile-item-row">
            <Link to={entry.path} className={`nh-nav-link ${isActive(entry) ? 'is-active' : ''}`} aria-current={path === entry.path ? 'page' : undefined} onClick={() => close()}>
              {navigationLabel(entry, lang)}
              {entry.groups && <ChevronDown size={13} className="nh-dropdown-caret desktop-only-icon" aria-hidden="true" />}
            </Link>
            {entry.groups && <button type="button" className="nh-mobile-expand-btn mobile-only-btn"
              aria-expanded={expanded === entry.id} aria-controls={`nav-${entry.id}`}
              aria-label={`${expanded === entry.id ? (isAr ? 'إغلاق' : 'Collapse') : (isAr ? 'فتح' : 'Expand')} ${navigationLabel(entry, lang)}`}
              onClick={() => setExpanded(current => current === entry.id ? null : entry.id)}>
              {expanded === entry.id ? <Minus size={17} /> : <Plus size={17} />}
            </button>}
          </div>
          {entry.groups && <div id={`nav-${entry.id}`} className="nh-dropdown-menu">
            <div className={`nh-dropdown-mega ${entry.id === 'professional' ? 'four-col' : entry.groups.length > 1 ? 'two-col' : 'single-col'}`}>
              {entry.groups.map(group => <div key={group.label.en} className="nh-dropdown-column">
                <strong>{navigationLabel(group, lang)}</strong>
                <ul className="nh-dropdown-list">{group.links.map(link => <li key={link.path}>
                  <Link to={link.path} onClick={() => close()}>{navigationLabel(link, lang)}</Link>
                </li>)}</ul>
              </div>)}
            </div>
          </div>}
        </div>)}
        <div className="nh-mobile-actions-row mobile-only-block">
          <Link to="/contact" className="nh-nav-call" onClick={() => close()}>
            {isAr ? 'تواصل مع فريق القبول' : 'Contact Admissions'} <ArrowUpRight size={16} />
          </Link>
        </div>
      </nav>
      <div className="nh-nav-actions">
        <button type="button" className="nh-language" onClick={() => { switchLanguage(isAr ? 'en' : 'ar'); close(); }}
          aria-label={isAr ? 'EN — Switch to English' : 'AR — Switch to Arabic'}>{isAr ? 'EN' : 'AR'}</button>
        <Link to="/contact" className="nh-nav-call">{isAr ? 'تواصل مع القبول' : 'Contact Admissions'}<ArrowUpRight size={15} /></Link>
        <button type="button" ref={toggleRef} className="nh-menu-toggle" aria-expanded={open} aria-controls="site-navigation"
          aria-label={open ? (isAr ? 'إغلاق القائمة' : 'Close navigation') : (isAr ? 'فتح القائمة' : 'Open navigation')}
          onClick={() => setOpen(value => !value)}>{open ? <X size={23} /> : <Menu size={23} />}</button>
      </div>
    </header>
    {open && <div className="nh-mobile-backdrop" onClick={() => close(true)} aria-hidden="true" />}
  </>;
}
