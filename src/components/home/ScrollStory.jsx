import { Check, ScanLine, ArrowUpRight } from 'lucide-react';
import Actions from './Actions';
import WarpGridCanvas from './WarpGridCanvas';

export default function ScrollStory({ c }) {
  return (
    <section className="nh-story" aria-labelledby="nh-hero-title">
      {/* Interactive gravitational singularity rubber-sheet dot grid */}
      <div className="nh-atmosphere" aria-hidden="true">
        <WarpGridCanvas />
        <span className="nh-orbit nh-orbit-one" />
        <span className="nh-orbit nh-orbit-two" />
        <span className="nh-academic">x² &nbsp; √ &nbsp; +</span>
      </div>

      <div className="nh-story-inner nh-hero-grid">
        {/* ── Left: Content ── */}
        <div className="nh-hero-content">
          <p className="nh-eyebrow">
            <span className="nh-dot" />
            {c.eyebrow}
          </p>

          <h1 id="nh-hero-title" className="nh-hero-h1">
            {c.title.map((line, i) => (
              <span
                className={`nh-line${i > 0 ? ' nh-heading-soft' : ''}`}
                key={line}
              >
                {line}
              </span>
            ))}
          </h1>

          <p className="nh-hero-intro">
            {c.intro}
          </p>

          <Actions c={c} />

          <ul className="nh-trust" aria-label="Key benefits">
            {c.trust.map(item => (
              <li key={item}>
                <Check size={13} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          {/* Stats */}
          <div className="nh-hero-stats" aria-label="Academy highlights">
            <div className="nh-hero-stat">
              <strong>{c.highlights[0][0]}</strong>
              <span>{c.highlights[0][1]}</span>
            </div>
            <div className="nh-stat-divider" aria-hidden="true" />
            <div className="nh-hero-stat">
              <strong>{c.highlights[1][0]}</strong>
              <span>{c.highlights[1][1]}</span>
            </div>
            <div className="nh-stat-divider" aria-hidden="true" />
            <div className="nh-hero-stat">
              <strong>{c.highlights[2][0]}</strong>
              <span>{c.highlights[2][1]}</span>
            </div>
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="nh-hero-visual" aria-hidden="true">
          {/* Main image */}
          <div className="nh-hero-image-wrap">
            <img
              src="/nitaq/hero/student-desk.webp"
              srcSet="/nitaq/hero/student-desk-800.webp 800w, /nitaq/hero/student-desk.webp 1376w"
              sizes="(max-width: 767px) calc(100vw - 112px), 48vw"
              width="1376"
              height="768"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              alt=""
              onError={e => {
                if (!e.currentTarget.dataset.fb) {
                  e.currentTarget.dataset.fb = '1';
                  e.currentTarget.src = '/nitaq/hero/student.webp';
                }
              }}
            />
            <div className="nh-hero-shade" />
          </div>

          {/* Floating badge card */}
          <div className="nh-hero-float-badge nh-float">
            <div className="nh-card-icon">
              <ScanLine size={18} />
            </div>
            <div>
              <small>01 / {c.diagnostic}</small>
              <strong>{c.strengths}</strong>
              <span>
                <Check size={11} />
                {c.focus}
              </span>
            </div>
          </div>

          {/* Caption */}
          <div className="nh-hero-caption">
            <span className="nh-dot" />
            {c.start}
            <a className="nh-hero-caption-link" href="#programs">
              {c.view} <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
