import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '../../i18n/Link';

gsap.registerPlugin(ScrollTrigger);

const programMedia = {
  sat: { full: '/nitaq/courses/sat.webp', small: '/nitaq/courses/sat-480.webp', path: '/sat-preparation-sharjah' },
  tuition: { full: '/nitaq/courses/tuition.webp', small: '/nitaq/courses/tuition-480.webp', path: '/academic-excellence' },
  languages: { full: '/nitaq/courses/languages.webp', small: '/nitaq/courses/languages-480.webp', path: '/language-trainings' },
  courses: { full: '/nitaq/courses/courses.webp', small: '/nitaq/courses/courses-480.webp', path: '/courses' }
};

function getProgramInfo(title) {
  if (title.includes('SAT') || title.includes('التحضير')) return programMedia.sat;
  if (title.includes('Subject') || title.includes('الأكاديمية')) return programMedia.tuition;
  if (title.includes('Language') || title.includes('اللغات')) return programMedia.languages;
  return programMedia.courses;
}

export default function Programs({ c }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const isAutoScrollingRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  // Auto-scroll the mobile tab bar to keep the active pill centered
  useEffect(() => {
    if (tabsRef.current && window.innerWidth <= 860) {
      const activeBtn = tabsRef.current.children[activeIndex];
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  // Mobile scroll-driven progression using GSAP ScrollTrigger:
  // Card 01 -> Card 02 -> Card 03 -> Card 04 opens sequentially as user scrolls down
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const mm = gsap.matchMedia();

    mm.add('(max-width: 860px)', () => {
      const numPrograms = c.programs.length;
      // Scroll distance gives ~380px per card (approx 2 natural thumb swipes each)
      const scrollDistance = Math.max(window.innerHeight * 1.5, numPrograms * 380);

      const trigger = ScrollTrigger.create({
        trigger: section,
        pin: true,
        start: 'top top+=68',
        end: () => `+=${scrollDistance}`,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        onUpdate: (self) => {
          if (isAutoScrollingRef.current) return;
          const clamped = Math.min(Math.max(self.progress, 0), 0.9999);
          const newIndex = Math.floor(clamped * numPrograms);
          if (newIndex !== activeIndexRef.current) {
            activeIndexRef.current = newIndex;
            setActiveIndex(newIndex);
          }
        },
      });

      scrollTriggerRef.current = trigger;
    });

    return () => {
      mm.revert();
      scrollTriggerRef.current = null;
    };
  }, [c.programs.length]);

  // Smooth-scroll into the matching card slice when user taps a pill
  const selectCard = (index) => {
    setActiveIndex(index);
    activeIndexRef.current = index;

    const trigger = scrollTriggerRef.current;
    if (trigger && window.innerWidth <= 860) {
      const totalProg = c.programs.length;
      // Target progress is centered in that card's slice
      const targetProgress = (index + 0.5) / totalProg;
      const targetScroll = trigger.start + targetProgress * (trigger.end - trigger.start);

      isAutoScrollingRef.current = true;
      gsap.to(window, {
        scrollTo: targetScroll,
        duration: 0.45,
        ease: 'power2.out',
        onComplete: () => {
          isAutoScrollingRef.current = false;
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="nh-section nh-programs"
      id="programs"
      aria-labelledby="nh-programs-title"
    >
      <div className="nh-container">
        {/* Header Block */}
        <div className="nh-section-heading nh-reveal">
          <div>
            <p className="nh-eyebrow">
              <span className="nh-dot" aria-hidden="true" />
              {c.programsEyebrow}
            </p>
            <h2 id="nh-programs-title">{c.programsTitle}</h2>
          </div>
          <p>{c.programsIntro}</p>
        </div>

        {/* Rail Carousel */}
        <div className="nh-accordion-wrapper nh-reveal">
          {/* Mobile Selector Pills */}
          <div
            className="nh-programs-mobile-tabs"
            role="tablist"
            ref={tabsRef}
            aria-label={c.programsTitle}
          >
            {c.programs.map(([title], i) => (
              <button
                key={title}
                type="button"
                role="tab"
                aria-selected={i === activeIndex}
                className={`nh-program-tab-btn ${i === activeIndex ? 'is-active' : ''}`}
                onClick={() => selectCard(i)}
              >
                <span className="tab-idx">0{i + 1}</span>
                <span className="tab-name">{title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Accordion Sliver Rail Stage */}
          <div className="nh-accordion-stage">
            <div className="nh-accordion-rail" role="region" aria-label="Course Programs Accordion Rail">
              {c.programs.map(([title, body, tags, alt], i) => {
                const isOpen = i === activeIndex;
                const info = getProgramInfo(title);
                return (
                  <Link
                    to={info.path}
                    key={title}
                    className={`nh-sliver nh-sliver-${i + 1}${isOpen ? ' is-open' : ''}`}
                    tabIndex="0"
                    onMouseEnter={() => {
                      if (window.innerWidth > 860) setActiveIndex(i);
                    }}
                    onFocus={() => setActiveIndex(i)}
                    onClick={(e) => {
                      // On touch / mobile screens: tapping a closed card opens it instead of navigating away
                      if (!isOpen) {
                        e.preventDefault();
                        selectCard(i);
                      }
                    }}
                    aria-expanded={isOpen}
                    aria-label={title}
                  >
                    {/* Photo Background & Dark Scrim */}
                    <div className="nh-sliver-bg">
                      <img
                        src={info.small}
                        srcSet={`${info.small} 480w, ${info.full} 960w`}
                        sizes="(max-width: 768px) 90vw, 360px"
                        alt={alt || title}
                        width="480"
                        height="436"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="nh-sliver-overlay" />
                    </div>

                    {/* Top Bar with Number & Arrow */}
                    <div className="nh-sliver-top">
                      <span className="nh-sliver-index">0{i + 1}</span>
                      <span className="nh-sliver-arrow">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>

                    {/* Title displayed when closed (horizontal on mobile, vertical pill on desktop) */}
                    <div className="nh-sliver-vertical-title" aria-hidden="true">
                      <span>{title}</span>
                    </div>

                    {/* Caption when card is open */}
                    <div className="nh-sliver-caption" aria-hidden={!isOpen}>
                      <div className="nh-sliver-tag">
                        <span className="nh-sliver-tag-dot" />
                        {tags}
                      </div>
                      <h3 className="nh-sliver-title">{title}</h3>
                      <p className="nh-sliver-desc">{body}</p>
                      <div className="nh-sliver-cta">
                        <span>{c.programs[i][4] || c.discover}</span>
                        <ArrowUpRight size={15} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
