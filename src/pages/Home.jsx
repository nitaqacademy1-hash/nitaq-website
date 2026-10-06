import { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/context';
import SEO from '../components/SEO';
import Navbar from '../components/home/Navbar';
import ScrollStory from '../components/home/ScrollStory';
import Programs from '../components/home/Programs';
import TrustedOrganizations from '../components/home/TrustedOrganizations';
import WhyNitaq from '../components/home/WhyNitaq';
import LearningProcess from '../components/home/LearningProcess';
import Location from '../components/home/Location';
import GoogleReviews from '../components/home/GoogleReviews';
import CTA from '../components/home/CTA';
import Footer from '../components/home/Footer';
import { homeCopy } from '../components/home/content';
import '../styles/home.css';

export default function Home() {
  const { lang } = useLanguage();
  const c = homeCopy[lang] || homeCopy.en;
  const root = useRef(null);

  useEffect(() => {
    let cleanup;
    let cancelled = false;

    import('../lib/animations/homeTimeline').then(({ initHomeAnimations }) => {
      if (!cancelled && root.current) {
        cleanup = initHomeAnimations(root.current);
      }
    }).catch(() => {
      /* The static homepage remains fully usable */
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [lang]);

  return (
    <div className="nitaq-home" ref={root} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <SEO ogImage="/nitaq/hero/student-desk.webp" />
      <a className="nh-keyboard-skip" href="#programs">{c.skip}</a>
      <Navbar c={c} />
      <main>
        <ScrollStory c={c} />
        <Programs c={c} />
        <TrustedOrganizations c={c} />
        <WhyNitaq c={c} />
        <LearningProcess c={c} />
        <Location c={c} />
        <GoogleReviews c={c} />
        <CTA c={c} />
      </main>
      <Footer c={c} />
    </div>
  );
}
