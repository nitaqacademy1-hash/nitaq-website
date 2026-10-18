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

  // Only enable Lenis virtual smooth-scrolling on desktop devices.
  // Mobile touch devices use native momentum scrolling to prevent jump-on-touch and unwanted auto-scrolling.
  media.add('(min-width: 861px) and (prefers-reduced-motion: no-preference)', () => {
    const previousScroll = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = 'auto';

    // Lenis smooth scroll on desktop
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false, anchors: false });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = time => lenis.raf(time * 1000);
    gsap.ticker.add(tick);

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
