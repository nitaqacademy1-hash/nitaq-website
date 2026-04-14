import { useLocation, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import { trackEvent } from '../../utils/analytics';
import './AIWebinar.css';

const fbq = (...a) => { if (window.fbq) window.fbq(...a); };
const WA_NUMBER  = '971XXXXXXXXX'; // ← replace with real number
const WA_MESSAGE = encodeURIComponent('Hi, I registered for the AI webinar on Sunday. Please send me the joining details.');

export default function AIWebinarThankYou() {
  const { state } = useLocation();
  const firstName = state?.name?.split(' ')[0] || 'there';

  useEffect(() => {
    trackEvent('webinar_confirmed', 'AI Webinar – Thank You');
    fbq('track', 'Lead');
  }, []);

  return (
    <>
      <Helmet>
        <title>You're Registered | AI Business Webinar | Nitaq Academy</title>
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

            <h1 className="w-ty__title">You're in, {firstName}!</h1>
            <p className="w-ty__sub">
              You've successfully registered for the <strong>AI for Business Efficiency</strong> webinar
              on <strong>Sunday at 7:30 PM (UAE)</strong>.
            </p>

            <div className="w-ty__steps">
              {[
                { n:'1', t:'Check your messages',       d:'We\'ll send the webinar join link before the session.' },
                { n:'2', t:'Join the WhatsApp group',    d:'Get reminders, updates, and exclusive pre-session materials.' },
                { n:'3', t:'Show up on Sunday',        d:'7:30 PM UAE — live, interactive, and packed with value.' },
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

            <p className="w-ty__wa-label">Join WhatsApp to get your webinar link &amp; updates:</p>

            <a
              id="ty-wa-btn"
              href="https://chat.whatsapp.com/EH5V7ghD8My8WodBW2y3ho"
              target="_blank"
              rel="noopener noreferrer"
              className="w-btn w-btn--wa w-btn--full"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              Join WhatsApp Group
            </a>
            <p className="w-ty__wa-note">Tap to join the exclusive webinar WhatsApp group.</p>

            <div className="w-ty__reminder">
              {[
                [<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>, 'Sunday'],
                [<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, '7:30 PM (UAE)'],
                [<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8m-4-4v4" /></svg>, 'Live Online'],
              ].map(([icon, text], i) => (
                <div key={i} className="w-ty__reminder-item">{icon}{text}</div>
              ))}
            </div>

            <Link to="/" className="w-ty__home">← Back to Nitaq Academy</Link>
          </div>
        </div>
      </div>
    </>
  );
}
