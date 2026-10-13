import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from '../../i18n/Link';

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
  const [viewedIndices, setViewedIndices] = useState(() => new Set([0]));
  const activeIndexRef = useRef(0);
  const sectionRef = useRef(null);
  const tabsRef = useRef(null);
  const touchStartX = useRef(null);

  // Auto-scroll the mobile tab bar to keep the active pill centered
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth > 860) {
      setViewedIndices(new Set([0, 1, 2, 3]));
    }
  }, []);

  useEffect(() => {
    setViewedIndices((prev) => {
      if (prev.has(activeIndex)) return prev;
      const next = new Set(prev);
      next.add(activeIndex);
      return next;
    });

    if (tabsRef.current && window.innerWidth <= 860) {
      const activeBtn = tabsRef.current.children[activeIndex];
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeIndex]);

  const selectCard = (index) => {
    setActiveIndex(index);
    activeIndexRef.current = index;
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // Swiped left -> Next
        setActiveIndex((prev) => (prev + 1) % c.programs.length);
      } else {
        // Swiped right -> Prev
        setActiveIndex((prev) => (prev - 1 + c.programs.length) % c.programs.length);
      }
    }
    touchStartX.current = null;
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
          <div
            className="nh-accordion-stage"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
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
                    aria-label={`${title} - ${c.programs[i]?.[4] || c.discover}`}
                  >
                    {/* Photo Background & Dark Scrim */}
                    <div className="nh-sliver-bg">
                      {(isOpen || viewedIndices.has(i)) && (
                        <img
                          src={info.small}
                          srcSet={`${info.small} 480w, ${info.full} 960w`}
                          sizes="(max-width: 768px) 420px, 360px"
                          alt={alt || title}
                          width="480"
                          height="436"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
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

          {/* Mobile Card Switcher Navigation */}
          <div className="nh-programs-mobile-nav" aria-label="Program pagination">
            <button
              type="button"
              className="nh-program-nav-btn prev"
              onClick={() => setActiveIndex((prev) => (prev - 1 + c.programs.length) % c.programs.length)}
              aria-label="Previous Program"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="nh-program-nav-dots">
              {c.programs.map(([title], i) => (
                <button
                  key={title}
                  type="button"
                  className={`nh-program-dot ${i === activeIndex ? 'is-active' : ''}`}
                  onClick={() => selectCard(i)}
                  aria-label={`Go to program ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              className="nh-program-nav-btn next"
              onClick={() => setActiveIndex((prev) => (prev + 1) % c.programs.length)}
              aria-label="Next Program"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
