import { Check, ScanLine, ArrowUpRight } from 'lucide-react';
import Actions from './Actions';
import WarpGridCanvas from './WarpGridCanvas';

export default function ScrollStory({ c }) {
  return (
    <section className="nh-story" aria-labelledby="nh-hero-title">
      {/* Clean ambient hero atmosphere with soft gradient */}
      <div className="nh-atmosphere" aria-hidden="true">
        <WarpGridCanvas />
        <span className="nh-orbit nh-orbit-one" />
        <span className="nh-orbit nh-orbit-two" />
      </div>

      <div className="nh-story-inner nh-hero-grid">
        {/* ── Left: Content ── */}
        <div className="nh-hero-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
            <p className="nh-eyebrow" style={{ margin: 0 }}>
              <span className="nh-dot" />
              {c.eyebrow}
            </p>
            {c.lastUpdated && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', color: '#86efac', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: '2px 10px', borderRadius: '100px', fontWeight: 600 }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22c55e' }} />
                <time dateTime="2026-10-21">{c.lastUpdated}</time>
              </span>
            )}
          </div>

          <h1 id="nh-hero-title" className="nh-hero-h1">
            {c.title.map((line, i) => (
              <span
                className={`nh-line${i > 0 ? ' nh-heading-soft' : ''}`}
                key={line}
              >
                {line}
              </span>
            )).reduce((prev, curr) => [prev, ' ', curr])}
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
        <div className="nh-hero-visual">
          {/* Main image */}
          <div className="nh-hero-image-wrap">
            <img
              src="/nitaq/hero/student-desk-800.webp"
              srcSet="/nitaq/hero/student-desk-480.webp 480w, /nitaq/hero/student-desk-800.webp 800w, /nitaq/hero/student-desk.webp 1376w"
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1200px) 46vw, 600px"
              width="800"
              height="446"
              fetchPriority="high"
              loading="eager"
              decoding="async"
              alt={c.studentAlt || "Nitaq Academy students learning in modern micro-batch classroom"}
              onError={e => {
                if (!e.currentTarget.dataset.fb) {
                  e.currentTarget.dataset.fb = '1';
                  e.currentTarget.src = '/nitaq/hero/student.webp';
                }
              }}
            />
            <div className="nh-hero-shade" aria-hidden="true" />
          </div>

          {/* Floating badge card */}
          <div className="nh-hero-float-badge nh-float" aria-hidden="true">
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
