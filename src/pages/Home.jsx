import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/context';
import SEO from '../components/SEO';
import Header from '../components/Header';
import ScrollStory from '../components/home/ScrollStory';
import TrustBar from '../components/home/TrustBar';
import Programs from '../components/home/Programs';
import TrustedOrganizations from '../components/home/TrustedOrganizations';
import WhyNitaq from '../components/home/WhyNitaq';
import Instructors from '../components/home/Instructors';
import CampusGallery from '../components/home/CampusGallery';
import LearningProcess from '../components/home/LearningProcess';
import Location from '../components/home/Location';
import GoogleReviews from '../components/home/GoogleReviews';
import CTA from '../components/home/CTA';
import Footer from '../components/Footer';
import { homeCopy } from '../components/home/content';
import '../styles/home.css';

export default function Home() {
  const { lang } = useLanguage();
  const c = homeCopy[lang] || homeCopy.en;
  const root = useRef(null);

  useEffect(() => {
    let cleanup;
    let cancelled = false;

    const startAnimations = () => {
      if (cancelled || !root.current) return;
      import('../lib/animations/homeTimeline').then(({ initHomeAnimations }) => {
        if (!cancelled && root.current) {
          cleanup = initHomeAnimations(root.current);
        }
      }).catch(() => {
        /* The static homepage remains fully usable */
      });
    };

    // Trigger immediately on first user scroll, touch or pointer interaction
    const events = ['scroll', 'pointerdown', 'touchstart'];
    const handleInteraction = () => {
      events.forEach(evt => window.removeEventListener(evt, handleInteraction));
      startAnimations();
    };
    events.forEach(evt => window.addEventListener(evt, handleInteraction, { once: true, passive: true }));

    return () => {
      cancelled = true;
      events.forEach(evt => window.removeEventListener(evt, handleInteraction));
      cleanup?.();
    };
  }, [lang]);

  return (
    <div className="nitaq-home" ref={root} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SEO ogImage="/nitaq/hero/student-desk.webp" />
      <a className="nh-keyboard-skip" href="#programs">{c.skip}</a>
      <Header />
      <main>
        <ScrollStory c={c} />
        <TrustBar />
        <Programs c={c} />
        <WhyNitaq c={c} />
        <Instructors c={c} />
        <CampusGallery c={c} />
        <LearningProcess c={c} />
        <GoogleReviews c={c} />
        <Location c={c} />
        <TrustedOrganizations c={c} lang={lang} />
        <CTA c={c} />
      </main>
      <Footer />
    </div>
  );
}
