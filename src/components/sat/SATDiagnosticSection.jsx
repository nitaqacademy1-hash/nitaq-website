import React from 'react';
import { Link } from '../../i18n/Link';
import './SATDiagnosticSection.css';

/**
 * Diagnostic Dashboard Sample Preview Data
 * Conceptual representation of what a student receives after completing the 24-question diagnostic.
 */
const DIAGNOSTIC_PREVIEW_DATA = {
  overallScore: 16,
  totalQuestions: 24,
  accuracyPercent: 67,
  sections: [
    {
      id: 'math',
      name: 'Mathematics',
      score: 9,
      total: 12,
      percent: 75,
      status: 'Strong foundation',
      tone: 'strong',
      type: 'math'
    },
    {
      id: 'rw',
      name: 'Reading & Writing',
      score: 7,
      total: 12,
      percent: 58,
      status: 'Needs improvement',
      tone: 'review',
      type: 'rw'
    }
  ],
  skills: [
    {
      name: 'Algebra',
      score: 3,
      total: 3,
      status: 'Strong',
      tone: 'strong'
    },
    {
      name: 'Advanced Math',
      score: 1,
      total: 3,
      status: 'Review',
      tone: 'review'
    },
    {
      name: 'Craft & Structure',
      score: 3,
      total: 3,
      status: 'Strong',
      tone: 'strong'
    },
    {
      name: 'Standard English Conventions',
      score: 1,
      total: 3,
      status: 'Review',
      tone: 'review'
    }
  ],
  priority: {
    focusArea: 'Advanced Math + Grammar',
    description: 'Your diagnostic highlights the areas where focused practice could make the biggest difference.'
  }
};

const BENEFITS_LIST = [
  'Your Math & Reading/Writing performance',
  'Your strongest SAT skill areas',
  "Where you're currently losing points",
  'Your priority areas for improvement'
];

/**
 * Sub-component: Diagnostic Intro (Left Column)
 */
const DiagnosticIntro = () => {
  return (
    <div className="sat-diagnostic-intro">
      <div className="sat-diagnostic-eyebrow">
        <span className="sat-diagnostic-eyebrow-dot" aria-hidden="true" />
        <span>Free SAT Diagnostic</span>
      </div>

      <h2 className="sat-diagnostic-heading">
        Find Out Where You
        <span>Stand on the SAT</span>
      </h2>

      <p className="sat-diagnostic-desc">
        Take a short 24-question diagnostic assessment and discover your strengths, areas for improvement, and what you should focus on next.
      </p>

      <ul className="sat-diagnostic-benefits" aria-label="Diagnostic Benefits">
        {BENEFITS_LIST.map((benefit, index) => (
          <li key={index} className="sat-diagnostic-benefit-item">
            <span className="sat-diagnostic-check-icon" aria-hidden="true">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Information Row */}
      <div className="sat-diagnostic-meta" aria-label="Assessment Specifications">
        <div className="sat-diagnostic-meta-item">
          <strong>24</strong> Questions
        </div>
        <span className="sat-diagnostic-meta-divider" aria-hidden="true">·</span>
        <div className="sat-diagnostic-meta-item">
          12 Math + 12 Reading &amp; Writing
        </div>
        <span className="sat-diagnostic-meta-divider" aria-hidden="true">·</span>
        <div className="sat-diagnostic-meta-item">
          <span className="sat-diagnostic-meta-badge">Free</span>
        </div>
        <span className="sat-diagnostic-meta-divider" aria-hidden="true">·</span>
        <div className="sat-diagnostic-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#6B7280' }}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>15–20 min</span>
        </div>
      </div>

      {/* Primary CTA */}
      <div className="sat-diagnostic-cta-wrapper">
        <Link
          to="/sat/diagnostic"
          className="sat-diagnostic-cta"
          id="sat-diagnostic-hero-cta"
          aria-label="Take the Free Diagnostic assessment"
        >
          <span>Take the Free Diagnostic</span>
          <span className="sat-diagnostic-cta-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>
        <p className="sat-diagnostic-reassurance">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: '#2e7d32' }}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>No preparation required. Takes approximately 15–20 minutes.</span>
        </p>
      </div>
    </div>
  );
};

/**
 * Sub-component: Diagnostic Preview Dashboard (Right Column)
 */
const DiagnosticPreview = () => {
  const { overallScore, totalQuestions, sections, skills, priority } = DIAGNOSTIC_PREVIEW_DATA;

  return (
    <div className="sat-diagnostic-preview-card-wrap">
      {/* Soft glowing ambient back-filter */}
      <div className="sat-diagnostic-preview-glow" aria-hidden="true" />

      <aside className="sat-diagnostic-preview-card" aria-label="SAT Diagnostic Results Preview">
        {/* Dashboard Header */}
        <header className="sat-dashboard-header">
          <div className="sat-dashboard-title-group">
            <span className="sat-dashboard-eyebrow">SAT Diagnostic</span>
            <h3 className="sat-dashboard-title">Your Diagnostic Results</h3>
          </div>
          <div className="sat-dashboard-badge" title="Visual preview of student diagnostic report">
            <span className="sat-dashboard-badge-dot" aria-hidden="true" />
            <span>Preview</span>
          </div>
        </header>

        {/* Overall Performance Card */}
        <section className="sat-overall-card" aria-label="Overall Diagnostic Performance">
          <div className="sat-overall-info">
            <span className="sat-overall-label">Overall Performance</span>
            <span className="sat-overall-caption">Diagnostic Performance</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="sat-overall-score-group">
              <span className="sat-overall-score-big">{overallScore}</span>
              <span className="sat-overall-score-total">/ {totalQuestions}</span>
            </div>
            <span className="sat-overall-tag">67% Correct</span>
          </div>
        </section>

        {/* Section Performance (Math & RW) */}
        <section className="sat-sections-grid" aria-label="Section Breakdown">
          {sections.map((sec) => (
            <div key={sec.id} className="sat-section-card">
              <div className="sat-section-header">
                <span className="sat-section-name">{sec.name}</span>
                <div className="sat-section-score">
                  {sec.score} <span className="sat-section-score-total">/ {sec.total}</span>
                </div>
              </div>

              {/* Accessible Progress Meter */}
              <div
                className="sat-progress-bar-track"
                role="progressbar"
                aria-valuenow={sec.score}
                aria-valuemin={0}
                aria-valuemax={sec.total}
                aria-label={`${sec.name} score: ${sec.score} out of ${sec.total}`}
              >
                <div
                  className={`sat-progress-bar-fill ${sec.type}`}
                  style={{ width: `${sec.percent}%` }}
                />
              </div>

              <div className="sat-section-status">
                <span className={`sat-status-dot ${sec.tone}`} aria-hidden="true" />
                <span>{sec.status}</span>
              </div>
            </div>
          ))}
        </section>

        {/* Skill Analysis (4 Representative Domains) */}
        <section className="sat-skills-area" aria-label="Skill Analysis Preview">
          <div className="sat-skills-heading-row">
            <h4 className="sat-skills-title">Skill Analysis</h4>
            <span className="sat-skills-hint">Sample of 4 domains</span>
          </div>

          <div className="sat-skills-grid">
            {skills.map((skill, i) => {
              const fillPercent = Math.round((skill.score / skill.total) * 100);
              return (
                <div key={i} className="sat-skill-item">
                  <div className="sat-skill-top">
                    <span className="sat-skill-name" title={skill.name}>{skill.name}</span>
                    <span className="sat-skill-score">{skill.score}/{skill.total}</span>
                  </div>
                  <div
                    className="sat-skill-bar-track"
                    role="progressbar"
                    aria-valuenow={skill.score}
                    aria-valuemin={0}
                    aria-valuemax={skill.total}
                    aria-label={`${skill.name} skill score: ${skill.score} of ${skill.total}`}
                  >
                    <div
                      className={`sat-skill-bar-fill ${skill.tone}`}
                      style={{ width: `${fillPercent}%` }}
                    />
                  </div>
                  <span className={`sat-skill-badge ${skill.tone}`}>
                    {skill.status}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Highlighted Priority Card */}
        <section className="sat-priority-card" aria-label="Diagnostic Recommended Priority">
          <div className="sat-priority-header">
            <span className="sat-priority-badge">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
              Your Priority
            </span>
            <span className="sat-priority-target">{priority.focusArea}</span>
          </div>
          <p className="sat-priority-desc">
            {priority.description}
          </p>
          <div className="sat-priority-link" tabIndex={0} role="button" aria-label="View personalized study plan preview">
            <span>View Your Personalized Plan</span>
            <span aria-hidden="true">→</span>
          </div>
        </section>
      </aside>
    </div>
  );
};

/**
 * Main SATDiagnosticSection Component
 */
const SATDiagnosticSection = ({ className = '' }) => {
  return (
    <section className={`sat-diagnostic-section ${className}`} id="sat-diagnostic-section" aria-labelledby="sat-diagnostic-heading">
      {/* Decorative ambient gradients */}
      <div className="sat-diagnostic-ambient" aria-hidden="true">
        <div className="sat-diagnostic-ambient-glow-1" />
        <div className="sat-diagnostic-ambient-glow-2" />
      </div>

      <div className="sat-diagnostic-container">
        <div className="sat-diagnostic-grid">
          <DiagnosticIntro />
          <DiagnosticPreview />
        </div>
      </div>
    </section>
  );
};

export default SATDiagnosticSection;
export { DiagnosticIntro, DiagnosticPreview, DIAGNOSTIC_PREVIEW_DATA };
