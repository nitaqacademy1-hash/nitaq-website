import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { trackEvent } from '../../utils/analytics';
import './AIWebinar.css';

const fbq = (...a) => { if (window.fbq) window.fbq(...a); };

export default function CounselorsOrientationThankYou() {
  const { state } = useLocation();
  const firstName = state?.name?.split(' ')[0] || 'there';

  useEffect(() => {
    trackEvent('counselor_orientation_confirmed', 'Counselors Orientation – Thank You');
    fbq('track', 'Lead');
  }, []);

  return (
    <>
      <Helmet>
        <title>Reservation Confirmed | Counselors Orientation | NITAQ ACADEMY</title>
        <meta name="robots" content="noindex, nofollow" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="wbr-page w-ty">
        <div className="w-container w-container--sm">
          <div className="w-ty__card">

            <div className="w-ty__check">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="w-ty__title">Thank you, {firstName}!</h1>
            <p className="w-ty__sub">
              Your reservation for the <strong>Exclusive Orientation for School Counselors</strong> 
              on <strong>April 14 at 7:00 PM (UAE)</strong> has been received.
            </p>

            <div className="w-ty__steps">
              {[
                { n:'1', t:'Check your WhatsApp',       d:'We\'ll send the session link and joining details shortly.' },
                { n:'2', t:'Mark your calendar',        d:'April 14, 2026 — 07:00 PM UAE time.' },
                { n:'3', t:'Join the session',          d:'We look forward to sharing these exclusive opportunities with you.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="w-ty__step">
                  <div className="w-ty__step-num">{n}</div>
                  <div className="w-ty__step-text">
                    <strong>{t}</strong>
                    <span>{d}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/" className="w-ty__home" style={{marginTop:'32px', display:'inline-block'}}>← Back to NITAQ ACADEMY</Link>
          </div>
        </div>
      </div>
    </>
  );
}
