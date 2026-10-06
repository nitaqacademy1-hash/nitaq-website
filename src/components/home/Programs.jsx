import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from '../../i18n/Link';
import { programPaths } from './content';

gsap.registerPlugin(ScrollTrigger);

const programImages = [
  '/nitaq/courses/sat.webp',
  '/nitaq/courses/languages.webp',
  '/nitaq/courses/tuition.webp',
  '/nitaq/courses/courses.webp',
];

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

      return () => {
        trigger.kill();
        scrollTriggerRef.current = null;
      };
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [c.programs.length]);

  // Smooth scroll sync when a user taps a pill tab or closed card directly
  const selectCard = (index) => {
    setActiveIndex(index);
    activeIndexRef.current = index;
    const st = scrollTriggerRef.current;
    if (st && window.innerWidth <= 860) {
      isAutoScrollingRef.current = true;
      const numPrograms = c.programs.length;
      const targetProgress = (index + 0.5) / numPrograms;
      const targetScroll = st.start + targetProgress * (st.end - st.start);
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, 550);
    }
  };

  return (
    <section
      id="programs"
      ref={sectionRef}
      tabIndex="-1"
      className="nh-section nh-programs"
      aria-label={c.programsTitle}
    >
      {/* Section Heading */}
      <div className="nh-container nh-programs-header-container">
        <div className="nh-section-heading nh-reveal">
          <div>
            <p className="nh-eyebrow">{c.programsEyebrow}</p>
            <h2>{c.programsTitle}</h2>
          </div>
          <p className="nh-programs-intro-text">{c.programsIntro}</p>
        </div>
      </div>

      {/* Accordion container for programs */}
      <div className="nh-programs-sticky-wrap">
        <div className="nh-programs-sticky-box">
          <div className="nh-container">
            {/* Mobile Quick-Switcher Tabs */}
            <div className="nh-programs-mobile-tabs" role="tablist" ref={tabsRef} aria-label={c.programsTitle}>
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
                  return (
                    <Link
                      to={programPaths[i] || '#programs'}
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
                          src={programImages[i]}
                          alt={alt || title}
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
                          <span>{c.discover}</span>
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
      </div>
    </section>
  );
}
