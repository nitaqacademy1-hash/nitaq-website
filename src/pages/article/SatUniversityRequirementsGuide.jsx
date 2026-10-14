import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  GraduationCap, CheckCircle2, AlertCircle, Clock, ShieldCheck, 
  HelpCircle, ArrowRight, Award, Zap, Building2, Globe2, Sparkles, ChevronRight
} from 'lucide-react';

const SatUniversityRequirementsGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const uaeUniversities = [
    {
      institution: 'American University of Sharjah (AUS)',
      location: 'Sharjah (University City)',
      minScore: '1100 – 1150',
      competitiveScore: '1250 – 1400',
      notes: 'Engineering and Computer Science programs require 600+ Math. 1350+ qualifies for Chancellor’s Merit Scholarship tiers (up to 50% tuition reduction).'
    },
    {
      institution: 'Khalifa University',
      location: 'Abu Dhabi',
      minScore: '1200 (Math 650+)',
      competitiveScore: '1350 – 1480',
      notes: 'Premier STEM university. High Math scores combined with high school GPA unlock fully funded government scholarship packages.'
    },
    {
      institution: 'NYU Abu Dhabi (NYUAD)',
      location: 'Saadiyat Island, Abu Dhabi',
      minScore: '1350',
      competitiveScore: '1480 – 1560',
      notes: 'Global liberal arts campus. Middle 50% SAT scores match NYU New York and Ivy League standards. Need-blind global financial aid.'
    },
    {
      institution: 'American University in Dubai (AUD)',
      location: 'Dubai Media City',
      minScore: '1050 – 1100',
      competitiveScore: '1200 – 1300',
      notes: 'Accepts SAT Math for math placement exam exemptions across engineering and architecture majors.'
    },
    {
      institution: 'University of Birmingham Dubai / Heriot-Watt',
      location: 'Dubai International Academic City',
      minScore: '1150 – 1200',
      competitiveScore: '1300 – 1420',
      notes: 'UK branch campuses accept SAT for American curriculum high school diploma holders in place of AP or A-Levels.'
    }
  ];

  return (
    <div className="sat-guide-page">
      <SEO />

      {/* Breadcrumbs with clearance */}
      <div className="sat-guide-breadcrumbs-wrap">
        <div className="sat-guide-container">
          <nav className="sat-guide-breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} className="sat-breadcrumb-separator" />
            <span>SAT University Requirements UAE & Harvard</span>
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <header className="sat-guide-hero">
        <div className="sat-guide-container">
          <div className="sat-guide-badge">
            <GraduationCap size={14} />
            <span>Admissions & Scholarship Benchmark Guide (2026–2027)</span>
          </div>
          <h1>SAT Requirements for UAE & Top International Universities (2026–2027)</h1>
          <p className="sat-guide-lead">
            Compare minimum cutoffs and competitive score bands for American University of Sharjah, Khalifa University, NYU Abu Dhabi, and Ivy League benchmarks like Harvard.
          </p>
          <div className="sat-guide-meta">
            <span className="sat-meta-item"><Clock size={14} /> 11-Minute Read</span>
            <span className="sat-meta-item"><Globe2 size={14} /> UAE & Global Higher Education</span>
            <span className="sat-meta-item"><Sparkles size={14} /> Verified 2026–2027 Cutoffs</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="sat-guide-main">
        <div className="sat-guide-container">
          {/* Harvard & Ivy League Focus Section */}
          <section className="sat-section">
            <div style={{ background: '#f8fafc', color: '#1e293b', borderRadius: '16px', padding: '32px 28px', border: '1px solid #e2e8f0', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b45309', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                <Sparkles size={16} /> Global Ivy League Benchmark
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px', lineHeight: 1.3 }}>
                What SAT Score Does Harvard University Require in 2026?
              </h2>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Harvard reinstated required standardized testing for all undergraduate applicants. For UAE and international students applying to Harvard and peer Ivy League institutions (Columbia, Yale, Princeton, MIT), standardized scores are a central factor in holistic evaluations.
              </p>
              <div className="sat-grid sat-grid-3" style={{ borderTop: '1px solid #e2e8f0', paddingTop: '20px' }}>
                <div style={{ background: '#ffffff', padding: '18px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Middle 50% Composite</span>
                  <strong style={{ fontSize: '1.85rem', fontWeight: 900, color: '#166534' }}>1500 – 1580</strong>
                </div>
                <div style={{ background: '#ffffff', padding: '18px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Middle 50% Math</span>
                  <strong style={{ fontSize: '1.85rem', fontWeight: 900, color: '#166534' }}>760 – 800</strong>
                </div>
                <div style={{ background: '#ffffff', padding: '18px 20px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', display: 'block', marginBottom: '6px', fontWeight: 600 }}>Middle 50% Reading & Writing</span>
                  <strong style={{ fontSize: '1.85rem', fontWeight: 900, color: '#166534' }}>740 – 780</strong>
                </div>
              </div>
            </div>
          </section>

          {/* UAE Universities Comparison Table */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Building2 size={26} />
              SAT Score Cutoffs for UAE Universities
            </h2>

            <div className="sat-table-wrap">
              <table className="sat-table">
                <thead>
                  <tr>
                    <th>University & Campus</th>
                    <th>Minimum Eligibility</th>
                    <th>Competitive Band</th>
                    <th>Special Notes & Scholarships</th>
                  </tr>
                </thead>
                <tbody>
                  {uaeUniversities.map((u, idx) => (
                    <tr key={idx}>
                      <td>
                        <strong style={{ display: 'block', color: '#0f172a' }}>{u.institution}</strong>
                        <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{u.location}</span>
                      </td>
                      <td>{u.minScore}</td>
                      <td>
                        <span className="sat-badge sat-badge-emerald" style={{ display: 'inline-block', fontSize: '0.85rem' }}>
                          {u.competitiveScore}
                        </span>
                      </td>
                      <td style={{ fontSize: '0.85rem', color: '#475569', maxWidth: '320px', lineHeight: 1.5 }}>
                        {u.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Scholarship Tiers */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <Award size={26} />
              How SAT Scores Unlock Merit Scholarships in the UAE
            </h2>

            <div className="sat-grid sat-grid-3">
              <div className="sat-card">
                <span className="sat-badge" style={{ background: '#f1f5f9', color: '#334155', marginBottom: '12px' }}>
                  Score: 1250 – 1340
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>Standard Entry Tier</h3>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Satisfies basic admissions criteria for engineering and business across UAE universities. Grants English and math placement exam exemptions.
                </p>
              </div>

              <div className="sat-card sat-card-emerald">
                <span className="sat-badge sat-badge-emerald" style={{ marginBottom: '12px' }}>
                  Score: 1350 – 1440
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#064e3b', marginBottom: '8px' }}>Merit Scholarship Tier</h3>
                <p style={{ fontSize: '0.88rem', color: '#064e3b', lineHeight: 1.6 }}>
                  Unlocks 20% to 50% tuition reduction scholarships at private UAE institutions (such as AUS, Heriot-Watt, and AUD) when paired with a strong high school GPA.
                </p>
              </div>

              <div className="sat-card" style={{ borderColor: '#d8b4fe', background: 'rgba(250, 245, 255, 0.6)' }}>
                <span className="sat-badge" style={{ background: '#f3e8ff', color: '#6b21a8', marginBottom: '12px' }}>
                  Score: 1450 – 1550+
                </span>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#581c87', marginBottom: '8px' }}>Elite Fellowship Tier</h3>
                <p style={{ fontSize: '0.88rem', color: '#581c87', lineHeight: 1.6 }}>
                  Makes applicants highly competitive for full tuition and presidential scholarships at Khalifa University and NYU Abu Dhabi, plus direct admission to Ivy League universities.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div className="sat-cta-content">
              <div className="sat-cta-badge">
                <Award size={14} /> University Readiness Check
              </div>
              <h3 className="sat-cta-title">Does Your Score Match Your Dream University?</h3>
              <p className="sat-cta-desc">
                Take our free 24-question adaptive diagnostic assessment. See where your current baseline sits compared to cutoffs at AUS, Khalifa University, and international benchmarks.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn">
              Check My Score Band <ArrowRight size={16} />
            </Link>
          </div>

          {/* FAQ Section */}
          <section className="sat-section">
            <h2 className="sat-section-title">
              <HelpCircle size={26} />
              Frequently Asked Questions: University SAT Requirements
            </h2>
            <div className="sat-faq-list">
              {[
                {
                  q: 'Do UAE universities require the SAT for Ministry of Education (MoE) equivalency?',
                  a: 'For students completing an American Curriculum High School Diploma in the UAE, the Ministry of Education requires standardized test scores (either SAT Math minimum 450–500, or equivalent national exams) to grant official high school equivalency for university matriculation.'
                },
                {
                  q: 'What is "Super Scoring" and do UAE universities allow it?',
                  a: 'Super Scoring means combining your highest Reading & Writing score from one test date with your highest Math score from another test date. Most UAE universities (including AUS) and international universities support Super Scoring through the College Board Score Choice system.'
                },
                {
                  q: 'Can a high SAT score waive IELTS or TOEFL requirements in UAE?',
                  a: 'At many UAE universities, scoring 550 to 600+ on the SAT Reading & Writing section automatically exempts you from taking IELTS or TOEFL for English proficiency admission requirements.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="sat-faq-item">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="sat-faq-trigger"
                    aria-expanded={openFaq === idx}
                  >
                    <span>{faq.q}</span>
                    <span className="sat-faq-icon">{openFaq === idx ? '−' : '+'}</span>
                  </button>
                  {openFaq === idx && (
                    <div className="sat-faq-answer">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Next Reading / Related Links */}
          <nav className="sat-guide-nav" aria-label="Article navigation">
            <Link to="/article/sat-prep-options-uae-academy-comparison" className="sat-nav-prev">
              ← SAT Prep Options in UAE Comparison
            </Link>
            <Link to="/article/sat-english-reading-writing-practice-guide" className="sat-nav-next">
              Next: SAT English & Reading & Writing Practice Guide →
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
};

export default SatUniversityRequirementsGuide;
