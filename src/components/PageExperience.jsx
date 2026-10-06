import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/context';
import '../styles/experience.css';

// Progressive enhancement: prerendered content is always visible. Motion only
// starts when a below-the-fold element enters view, never on the hero/LCP image.
export default function PageExperience({ children }) {
  const root = useRef(null);
  const progress = useRef(null);
  const topButton = useRef(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const page = root.current;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet();
    const animations = new Set();
    let frame = 0;
    let enabled = false;
    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        if (preference.matches || !entry.target.animate) return;
        const animation = entry.target.animate([
          { opacity: 0.45, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 650, easing: 'cubic-bezier(.22, 1, .36, 1)' });
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
      });
    }, { threshold: 0, rootMargin: '0px 0px -36px 0px' }) : null;

    const updateProgress = () => {
      frame = 0;
      const main = page.querySelector('main');
      if (!main || !enabled) return;
      const end = main.getBoundingClientRect().bottom + window.scrollY - window.innerHeight;
      const ratio = Math.min(1, Math.max(0, window.scrollY / Math.max(1, end)));
      progress.current.style.transform = `scaleX(${ratio})`;
      topButton.current.hidden = window.scrollY < 700;
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateProgress); };
    const scan = () => {
      enabled = !!page.querySelector('.home-repositioned, .course-detail-page, .sat-landing-page, .article-details-page, .articles-page, .listing-hero');
      if (!enabled) return;
      const candidates = page.querySelectorAll('.home-section > .container, .course-description-area > .content-card, .course-description-area > .outcomes-grid, .sat-landing-page > section > div[class$="container"], .article-main-content > h2, .article-featured-img, .article-card, .course-scroll-card');
      candidates.forEach(element => {
        if (seen.has(element)) return;
        seen.add(element);
        if (element.getBoundingClientRect().top > window.innerHeight && !preference.matches) observer?.observe(element);
      });
      onScroll();
    };
    const stopMotion = () => {
      if (preference.matches) {
        observer?.disconnect();
        animations.forEach(animation => animation.cancel());
        animations.clear();
      }
    };
    // Lazy routes resolve inside Suspense after the shared layout has mounted.
    const mutations = new MutationObserver(scan);
    mutations.observe(page, { childList: true, subtree: true });
    scan();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    preference.addEventListener('change', stopMotion);
    return () => {
      observer?.disconnect();
      mutations.disconnect();
      animations.forEach(animation => animation.cancel());
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      preference.removeEventListener('change', stopMotion);
    };
  }, []);

  return <div className="academy-experience" ref={root}>
    <div className="reading-progress" ref={progress} aria-hidden="true" />
    {children}
    <button type="button" ref={topButton} hidden className="page-back-to-top"
      aria-label={lang === 'ar' ? 'العودة إلى أعلى الصفحة' : 'Back to top'}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
        const heading = root.current.querySelector('h1');
        if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
      }}>
      <span aria-hidden="true">↑</span>
    </button>
  </div>;
}
