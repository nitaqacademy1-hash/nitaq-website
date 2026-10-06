import { useEffect, useRef } from 'react';
import { initStudentSequence } from '../../lib/animations/studentSequence';

export default function StudentSequence({ c, onPlayer }) {
  const canvas = useRef(null);
  const scene = useRef(null);
  useEffect(() => {
    const element = scene.current;
    const picture = element.querySelector('img');
    const done = () => element.classList.add('is-ready');
    if (picture.complete) done();
    picture.addEventListener('load', done);
    picture.addEventListener('error', done);
    const timer = setTimeout(done, 2200); // The content never waits for media.
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const small = window.matchMedia('(max-width: 767px)');
    let current;
    let request;
    const setup = async () => {
      request?.abort(); current?.destroy();
      onPlayer(null);
      if (motion.matches || navigator.connection?.saveData) return;
      request = new AbortController();
      const signal = request.signal;
      try {
        const response = await fetch('/nitaq/sequence/manifest.json', { signal });
        if (!response.ok) return;
        const manifest = await response.json();
        if (signal.aborted) return;
        current = initStudentSequence(canvas.current, manifest, small.matches);
        onPlayer(current);
      } catch { /* The high-quality poster stays visible if a sequence fails. */ }
    };
    setup(); motion.addEventListener('change', setup); small.addEventListener('change', setup);
    return () => {
      clearTimeout(timer); picture.removeEventListener('load', done); picture.removeEventListener('error', done);
      request?.abort(); current?.destroy(); onPlayer(null);
      motion.removeEventListener('change', setup); small.removeEventListener('change', setup);
    };
  }, [onPlayer]);
  return <div className="nh-scene" ref={scene}>
    <div className="nh-scene-media">
      <picture><source media="(max-width: 767px)" srcSet="/nitaq/hero/student-800.webp" /><img src="/nitaq/hero/student.webp" width="1440" height="960" fetchPriority="high" alt={c.studentAlt} onError={event => { if (!event.currentTarget.dataset.fallback) { event.currentTarget.dataset.fallback = 'true'; event.currentTarget.parentElement.querySelector('source')?.remove(); event.currentTarget.src = '/images/student_study_hero.webp'; } }} /></picture>
      <canvas ref={canvas} aria-hidden="true" />
      <div className="nh-scene-shade" />
    </div>
    <div className="nh-scene-loader" aria-hidden="true"><img src="/images/logo-white.webp" alt="" width="110" height="41" /><span /></div>
    <div className="nh-photo-caption"><span className="nh-dot" />{c.start}<span>01 — 07</span></div>
  </div>;
}
