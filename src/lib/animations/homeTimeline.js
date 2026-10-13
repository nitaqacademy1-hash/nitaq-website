import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function initHomeAnimations(root) {
  const media = gsap.matchMedia();
  const query = gsap.utils.selector(root);
  const nav = query('.nh-navbar')[0];

  // Navbar compact-mode on scroll
  const navTrigger = ScrollTrigger.create({
    start: 50,
    onUpdate: self => nav?.classList.toggle('is-scrolled', self.scroll() > 50),
  });

  media.add('(prefers-reduced-motion: no-preference)', () => {
    const previousScroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    // Lenis smooth scroll
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, anchors: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = time => lenis.raf(time * 1000);
    gsap.ticker.add(tick);

    // Navbar entrance
    gsap.fromTo(nav, { y: -15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' });

    // Hero content entrance: keep immediately readable, gentle non-blocking entrance
    const heroContent = query('.nh-hero-content > *');
    gsap.fromTo(
      heroContent,
      { y: 12, opacity: 0.85 },
      { y: 0, opacity: 1, stagger: 0.04, duration: 0.45, ease: 'power2.out' }
    );

    // Hero visual entrance (keep hero image visible immediately to eliminate LCP delay)
    gsap.fromTo(
      query('.nh-hero-float-badge'),
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'back.out(1.5)', delay: 0.2 }
    );

    // Reveal sections below the hero as they enter viewport
    query('.nh-reveal').forEach(element => {
      gsap.fromTo(
        element,
        { y: 28, opacity: 0.2 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: { trigger: element, start: 'top 92%', once: true },
        }
      );
    });

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = previousScroll;
    };
  }, root);

  const refresh = () => {
    requestAnimationFrame(() => {
      if (root.isConnected) ScrollTrigger.refresh();
    });
  };
  document.fonts?.ready.then(() => { if (root.isConnected) refresh(); });
  window.addEventListener('load', refresh);

  return () => {
    window.removeEventListener('load', refresh);
    media.revert();
    navTrigger.kill();
  };
}
