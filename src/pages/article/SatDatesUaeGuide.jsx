import React, { useState } from 'react';
import { Link } from '../../i18n/Link';
import SEO from '../../components/SEO';
import { 
  Calendar, Clock, AlertCircle, CheckCircle2, MapPin, 
  ArrowRight, ShieldCheck, HelpCircle, Laptop, DollarSign, Award, ChevronRight
} from 'lucide-react';

const SatDatesUaeGuide = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  const testDates = [
    {
      season: 'Autumn 2026',
      testDate: 'Saturday, October 3, 2026',
      regDeadline: 'September 18, 2026',
      lateDeadline: 'September 22, 2026',
      status: 'Concluded',
      badgeClass: 'sat-badge-past',
      badgeText: 'Past Sitting',
      notes: 'First major sitting for Grade 12 early university applications.'
    },
    {
      season: 'Autumn 2026',
      testDate: 'Saturday, November 7, 2026',
      regDeadline: 'October 23, 2026',
      lateDeadline: 'October 27, 2026',
      status: 'High Demand',
      badgeClass: 'sat-badge-hot',
      badgeText: 'High Demand — Book Early',
      notes: 'Peak test date in UAE. Sharjah & Dubai centers typically fill 3 weeks prior.'
    },
    {
      season: 'Winter 2026',
      testDate: 'Saturday, December 5, 2026',
      regDeadline: 'November 20, 2026',
      lateDeadline: 'November 24, 2026',
      status: 'Registration Open',
      badgeClass: 'sat-badge-open',
      badgeText: 'Registration Open',
      notes: 'Final chance for January 2027 university regular decision cutoffs.'
    },
    {
      season: 'Spring 2027',
      testDate: 'Saturday, March 13, 2027',
      regDeadline: 'February 26, 2027',
      lateDeadline: 'March 2, 2027',
      status: 'Early Booking',
      badgeClass: 'sat-badge-future',
      badgeText: 'Registration Opening Soon',
      notes: 'Ideal baseline testing sitting for Grade 11 high school students.'
    },
    {
      season: 'Spring 2027',
      testDate: 'Saturday, May 8, 2027',
      regDeadline: 'April 23, 2027',
      lateDeadline: 'April 27, 2027',
      status: 'Scheduled',
      badgeClass: 'sat-badge-future',
      badgeText: '2027 Cycle',
      notes: 'Spring testing sitting before school final board examinations.'
    },
    {
      season: 'Summer 2027',
      testDate: 'Saturday, June 5, 2027',
      regDeadline: 'May 21, 2027',
      lateDeadline: 'May 25, 2027',
      status: 'Scheduled',
      badgeClass: 'sat-badge-future',
      badgeText: '2027 Cycle',
      notes: 'Final sitting of the academic year before summer university preparation.'
    }
  ];

  const feeTable = [
    { item: 'Digital SAT International Registration', costAed: '~AED 405 (USD 111)', details: 'Includes base test fee USD 68 + International Regional Fee USD 43.' },
    { item: 'Late Registration Fee', costAed: '~AED 125 (USD 34)', details: 'Applied when registering after the regular deadline up to the late deadline.' },
    { item: 'Test Center Change Fee', costAed: '~AED 92 (USD 25)', details: 'Switching test centers within Sharjah or Dubai subject to seat availability.' },
    { item: 'Date Cancellation & Refund', costAed: 'Partial Refund (USD 25 retained)', details: 'Cancellations must be done at least 5 days prior via your College Board account.' }
  ];

  return (
    <main className="article-details-page sat-guide-page">
      <SEO />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav className="article-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={14} />
            <Link to="/articles">Articles</Link>
            <ChevronRight size={14} />
            <span>SAT Dates UAE 2026–2027</span>
          </nav>
        </div>
      </div>

      <article className="sat-guide-container section-padding">
        {/* Header */}
        <div className="article-header" style={{ maxWidth: '900px', margin: '40px auto 32px' }}>
          <span className="article-category" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Calendar size={14} /> Official SAT Schedule UAE (2026–2027)
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.85rem)', lineHeight: 1.25, marginTop: '12px', marginBottom: '16px' }}>
            SAT Dates UAE 2026–2027: Test Dates, Registration Deadlines & Centers
          </h1>
          <p className="lead-text" style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, marginBottom: '24px' }}>
            Complete schedule of upcoming Digital SAT exam dates in the UAE, registration deadlines, Sharjah and Dubai center availability, registration fees in AED, and late registration rules.
          </p>

          <div className="article-meta" style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', marginTop: '20px', alignItems: 'center' }}>
            <div className="meta-item">
              <div className="author-avatar" style={{ background: '#1a5c2e', color: 'white', fontWeight: 'bold' }}>NA</div>
              <div className="meta-text">
                <span className="meta-label">Author</span>
                <span className="meta-value">Nitaq Academy Academic Editorial</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <Calendar size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Published</span>
                <span className="meta-value">October 2026 Edition</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <Clock size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Reading Time</span>
                <span className="meta-value">8 min read</span>
              </div>
            </div>
            <div className="meta-divider"></div>
            <div className="meta-item">
              <ShieldCheck size={18} className="meta-icon" />
              <div className="meta-text">
                <span className="meta-label">Verified</span>
                <span className="meta-value">College Board Official</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="article-featured-img" style={{ maxWidth: '940px', margin: '0 auto 40px' }}>
          <img
            src="/images/sat_v2.webp"
            alt="Digital SAT Dates and Test Centers in UAE - Nitaq Academy"
          />
        </div>

        <div className="sat-guide-content">
          {/* Urgent Alert Banner */}
          <div className="sat-alert-box">
            <AlertCircle size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h3 className="sat-alert-title">November & December UAE Test Seats Fill Fast</h3>
              <p className="sat-alert-desc">
                High-demand test centers in Sharjah (Wesgreen, ASCS) and Dubai (Dubai College, ASD, GEMS) frequently reach full capacity 3 to 4 weeks before registration closes. We advise booking your seat immediately upon opening to avoid distant commuting across emirates.
              </p>
            </div>
          </div>

          {/* Test Dates Schedule Table */}
          <h2>
            <Calendar size={24} color="#166534" />
            Official Digital SAT Dates Schedule for UAE Students
          </h2>
          <p>
            All Digital SAT sessions are administered on Saturday mornings in authorized testing schools across the UAE. Make sure to download and test the College Board Bluebook testing application on your laptop or tablet at least 5 days prior to your test date.
          </p>

          <div className="sat-table-wrap">
            <table className="sat-table">
              <thead>
                <tr>
                  <th>Test Date</th>
                  <th>Registration Deadline</th>
                  <th>Late Registration</th>
                  <th>Status & Trend</th>
                </tr>
              </thead>
              <tbody>
                {testDates.map((item, idx) => (
                  <tr key={idx} className={item.status === 'High Demand' ? 'highlight-row' : ''}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{item.testDate}</div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '4px' }}>{item.notes}</div>
                    </td>
                    <td><strong>{item.regDeadline}</strong></td>
                    <td style={{ color: '#64748b' }}>{item.lateDeadline}</td>
                    <td>
                      <span className={`sat-badge ${item.badgeClass}`}>
                        {item.badgeText}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fees in AED & USD */}
          <h2>
            <DollarSign size={24} color="#166534" />
            Digital SAT Registration Fees in UAE (AED & USD)
          </h2>
          <p>
            The College Board charges international students a base registration fee plus an international regional delivery fee. Below is the official fee breakdown converted to UAE Dirhams:
          </p>

          <div className="sat-cards-grid">
            {feeTable.map((f, i) => (
              <div key={i} className="sat-card">
                <div className="sat-card-tag">{f.item}</div>
                <div className="sat-card-val">{f.costAed}</div>
                <p className="sat-card-desc">{f.details}</p>
              </div>
            ))}
          </div>

          {/* Timeline Planning for Grade 11 & 12 */}
          <h2>
            <Laptop size={24} color="#166534" />
            How UAE Students Should Plan Their Testing Timeline
          </h2>
          
          <div className="sat-step-item">
            <div className="sat-step-num">1</div>
            <div>
              <h3 className="sat-step-title">Grade 11 (Junior Year) Students: The 2-Test Strategy</h3>
              <p className="sat-step-desc">
                Take your first official SAT in <strong>March or May 2027</strong> after completing a diagnostic assessment in Autumn 2026. This allows you to evaluate your true score under timed exam conditions and gives you the summer to target weak areas before an elite second sitting in Autumn 2027.
              </p>
            </div>
          </div>

          <div className="sat-step-item">
            <div className="sat-step-num">2</div>
            <div>
              <h3 className="sat-step-title">Grade 12 (Senior Year) Students: University Deadlines</h3>
              <p className="sat-step-desc">
                For UAE university admissions (such as the American University of Sharjah, Khalifa University) and global universities in the US/UK, <strong>November 7 or December 5, 2026</strong> is your critical deadline. Digital SAT scores are released in just 13 to 14 days, arriving well before January university application cutoffs.
              </p>
            </div>
          </div>

          {/* Diagnostic Assessment CTA Card */}
          <div className="sat-cta-banner">
            <div>
              <div className="sat-cta-eyebrow">
                <Award size={15} /> Know Your Score Before Booking
              </div>
              <h3 className="sat-cta-title">Take the Free 24-Question SAT Diagnostic</h3>
              <p className="sat-cta-desc">
                Measure your baseline score across Reading & Writing and Math before paying the registration fee. Receive an instant diagnostic score breakdown with personalized preparation recommendations.
              </p>
            </div>
            <Link to="/sat/diagnostic" className="sat-cta-btn-primary">
              Take Free Diagnostic <ArrowRight size={16} />
            </Link>
          </div>

          {/* Frequently Asked Questions */}
          <h2>
            <HelpCircle size={24} color="#166534" />
            Frequently Asked Questions: SAT Dates UAE
          </h2>

          <div className="sat-faq-wrap">
            {[
              {
                q: 'When is the November SAT in the UAE for 2026?',
                a: 'The November Digital SAT takes place on Saturday, November 7, 2026. The regular registration deadline is October 23, 2026, and the late registration deadline is October 27, 2026.'
              },
              {
                q: 'What is the exact registration deadline for the December SAT in UAE?',
                a: 'For the December 5, 2026 test sitting, regular registration closes on November 20, 2026. Because December is the final testing date for regular decision university deadlines, centers fill very quickly.'
              },
              {
                q: 'What happens if all Sharjah or Dubai SAT centers are fully booked?',
                a: 'If your preferred school in Sharjah (e.g., Wesgreen or ASCS) or Dubai is full, check neighboring centers in Ajman or Dubai schools with larger testing halls (such as Dubai College or GEMS). You can also sign up for the College Board waitlist if opened by the center.'
              },
              {
                q: 'How many days after the test are Digital SAT scores released in UAE?',
                a: 'Digital SAT scores are released online 13 to 14 days after exam day. For a Saturday sitting, scores are typically published on the second following Friday afternoon UAE time.'
              },
              {
                q: 'Can I change my SAT test date after booking?',
                a: 'Yes. You can change your test date through your College Board student portal, subject to a USD 25 (~AED 92) test change fee and seat availability at an authorized UAE center.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="sat-faq-item">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="sat-faq-btn"
                >
                  <span>{faq.q}</span>
                  <span className="sat-faq-icon">{openFaq === idx ? '−' : '+'}</span>
                </button>
                {openFaq === idx && (
                  <div className="sat-faq-body">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related Navigation Links */}
          <div className="sat-guide-footer-links">
            <Link to="/article/how-to-register-for-sat-exam-uae-guide">
              ← How to Register for SAT in UAE
            </Link>
            <Link to="/sat-preparation-sharjah">
              Explore Nitaq SAT Course in Sharjah →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
};

export default SatDatesUaeGuide;
