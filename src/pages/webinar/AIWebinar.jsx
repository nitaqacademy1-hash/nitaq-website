import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from '../../utils/analytics';
import './AIWebinar.css';

const fbq = (...a) => { if (window.fbq) window.fbq(...a); };

/* Inline SVG icons — consistent outline style */
const Icon = {
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Bolt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Arrow: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
  Repeat: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
  Clock2: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" /></svg>,
  TrendDown: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>,
  Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Cog: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>,
  TrendUp: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  Dollar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Target: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Building: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  Settings: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
  Rocket: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /></svg>,
  Users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  Chart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  Mail: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  Lock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
};

export default function AIWebinar() {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const statsRef = useRef(null);

  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [statsVis, setStatsVis] = useState(false);

  // 1. UTM Tracking State Container
  const [utmData, setUtmData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: ''
  });

  useEffect(() => {
    // 2. Extract UTMs on page load
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const extractedUtm = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || ''
      };

      // 3. Determine if we have any URL UTMs
      const hasUrlUtm = Object.values(extractedUtm).some(val => val !== '');

      let finalUtm;
      if (hasUrlUtm) {
        // Prioritize URL, persist to localStorage
        finalUtm = extractedUtm;
        localStorage.setItem('nitaq_ai_webinar_utm', JSON.stringify(finalUtm));
        console.log('[UTM Tracker] Captured from URL & Saved to Storage:', finalUtm);
      } else {
        // Fallback to localStorage
        const stored = localStorage.getItem('nitaq_ai_webinar_utm');
        if (stored) {
          finalUtm = JSON.parse(stored);
          console.log('[UTM Tracker] No URL params. Restored from Storage:', finalUtm);
        } else {
          finalUtm = extractedUtm; // Empty strings
          console.log('[UTM Tracker] No URL params and Storage is empty.');
        }
      }

      setUtmData(finalUtm);
    } catch (err) {
      console.warn('[UTM Tracker] Failed to process UTMs. Continuing without them.', err);
    }

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStatsVis(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    else if (!/^\+?[\d\s\-(). ]{7,15}$/.test(form.phone.trim()))
      e.phone = 'Please enter a valid phone number';
    if (!form.email.trim()) e.email = 'Please enter your email';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Please enter a valid email address';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitting(true);

    trackEvent('webinar_registration', 'AI Webinar – Sunday');
    fbq('track', 'Lead');

    try {
      // Integration with Google Sheets via Apps Script
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbypePVv5qYix3g-vv4YECqwixN2ceA_3KwlCLfcjPW40j5CsjmBgyQula_IXaRDi_d58w/exec';

      const formData = new FormData();
      formData.append('Name', form.name);
      formData.append('Phone', form.phone);
      formData.append('Email', form.email);
      formData.append('Timestamp', new Date().toLocaleString());
      formData.append('Campaign', 'AI Webinar Sunday');

      // Append UTM parameter data to the payload
      formData.append('utm_source', utmData.utm_source);
      formData.append('utm_medium', utmData.utm_medium);
      formData.append('utm_campaign', utmData.utm_campaign);
      formData.append('utm_content', utmData.utm_content);

      console.log('[Form Submission] Sending data with UTMs:', Object.fromEntries(formData.entries()));

      // Attempt background submission
      fetch(scriptUrl, { method: 'POST', body: formData, mode: 'no-cors' });

      // Delay slightly for UX/FB Pixel to fire
      await new Promise(r => setTimeout(r, 1000));

      navigate('/webinar/ai/thank-you', { state: { name: form.name } });
    } catch (error) {
      console.error('Submission error:', error);
      // Still navigate so user isn't stuck
      navigate('/webinar/ai/thank-you', { state: { name: form.name } });
    } finally {
      setSubmitting(false);
    }
  };

  const set = (key) => (ev) => {
    setForm(f => ({ ...f, [key]: ev.target.value }));
    setErrors(e => ({ ...e, [key]: '' }));
  };

  return (
    <>
      <Helmet>
        <title>Free AI Webinar — Improve Business Efficiency | Nitaq Academy</title>
        <meta name="description" content="Join Nitaq Academy's free live webinar Sunday and learn how to use AI to automate workflows, reduce costs, and boost productivity." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="wbr-page">

        {/* ═══ HERO ═══ */}
        <section className="w-hero">
          <div className="w-container">
            <div className="w-hero__inner">

              <div className="w-hero__copy">
                <div className="w-hero__kicker">
                  <span className="w-hero__kicker-dot" />
                  Live Webinar · Sunday
                </div>

                <h1 className="w-hero__h1">
                  How to Use <em>AI</em> to Improve Business Efficiency &amp; Reduce Costs
                </h1>

                <p className="w-hero__desc">
                  Discover how businesses are using AI to automate workflows, save time,
                  and increase productivity — without technical knowledge.
                </p>

                <div className="w-hero__host">
                  <img src="/images/mohammed-marwan.jpeg" alt="Eng. Mohamed Marwan Shahin" className="w-hero__host-img" />
                  <div className="w-hero__host-text">
                    Hosted by <strong>Eng. Mohamed Marwan Shahin</strong>
                    <span>AI Trainer & Tech Expert</span>
                  </div>
                </div>

                <div className="w-hero__meta">
                  {[
                    [<Icon.Calendar />, 'Sunday'],
                    [<Icon.Clock />, '7:30 PM UAE'],
                    [<Icon.Bolt />, '60–75 min'],
                  ].map(([icon, label], i) => (
                    <span key={i} className="w-chip">{icon}{label}</span>
                  ))}
                </div>

                <div className="w-hero__price">
                  <span className="w-price-old">AED 299</span>
                  <span className="w-price-free">FREE</span>
                  <span className="w-price-tag">Limited Time</span>
                </div>

                <div className="w-hero__cta-row">
                  <button id="hero-cta" className="w-btn w-btn--primary" onClick={scrollToForm}>
                    Register Now <Icon.Arrow />
                  </button>
                  <span className="w-hero__seats">Only a few seats remaining</span>
                </div>
              </div>

              <div>
                <div className="w-info-card">
                  <div className="w-info-card__host">
                    <img src="/images/mohammed-marwan.jpeg" alt="Eng. Mohamed Marwan Shahin" />
                    <div className="w-info-card__host-text">
                      <span className="label">Hosted By</span>
                      <strong>Eng. Mohamed Marwan Shahin</strong>
                      <span className="title">AI & Emerging Tech Expert</span>
                    </div>
                  </div>
                  <div className="w-info-card__divider" />
                  <ul className="w-info-card__rows">
                    {[
                      [<Icon.Calendar />, 'Date', 'Sunday'],
                      [<Icon.Clock />, 'Time', '7:30 PM (UAE)'],
                      [<Icon.Bolt />, 'Duration', '60–75 min'],
                      [<Icon.Chart />, 'Format', 'Live Online'],
                    ].map(([icon, label, val], i) => (
                      <li key={i} className="w-info-card__row">
                        <span className="w-info-card__row-icon">{icon}</span>
                        <span className="w-info-card__row-label">{label}</span>
                        <span className="w-info-card__row-val">{val}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-info-card__divider" />
                  <div className="w-info-card__price">
                    <span className="w-price-old" style={{ fontSize: '0.88rem' }}>AED 299</span>
                    <span className="w-price-free" style={{ fontSize: '1.5rem' }}>FREE</span>
                  </div>
                  <button className="w-btn w-btn--primary w-btn--full" onClick={scrollToForm}>
                    Secure My Spot
                  </button>
                  <p className="w-info-card__note">No credit card required</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ PROBLEM ═══ */}
        <section className="w-section w-problem">
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Sound familiar?</div>
              <h2 className="w-h2">Still Running Your Business Manually?</h2>
              <p className="w-subtitle">Most growing businesses hit the same wall — operations that should be automated are still done by hand.</p>
            </div>
            <div className="w-problem__grid">
              {[
                { Ic: Icon.Repeat, title: 'Repetitive Tasks', desc: 'Your team spends hours on tasks that could be automated — draining time and morale.' },
                { Ic: Icon.Clock2, title: 'Time-Heavy Operations', desc: 'Manual processes eat into your most productive hours every single day.' },
                { Ic: Icon.TrendDown, title: 'Slow Growth', desc: 'Without automation, scaling becomes harder, slower, and more expensive.' },
              ].map(({ Ic, title, desc }) => (
                <div key={title} className="w-problem__card">
                  <div className="w-problem__card-icon"><Ic /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="w-callout">
              <strong>AI is transforming how modern businesses operate.</strong>
              <span>Companies embracing AI today are pulling ahead. This webinar shows you exactly where to start.</span>
            </div>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className="w-stats" ref={statsRef}>
          <div className="w-container">
            <div className="w-stats__grid">
              {[
                { val: '80%', label: 'of business leaders say AI saves significant time' },
                { val: '40%', label: 'average reduction in operational costs with AI' },
                { val: '10+', label: 'hours saved per employee weekly' },
                { val: '3×', label: 'faster decision-making with AI insights' },
              ].map(({ val, label }) => (
                <div key={val} className={`w-stat ${statsVis ? 'visible' : ''}`}>
                  <div className="w-stat__val">{val}</div>
                  <div className="w-stat__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BENEFITS ═══ */}
        <section className="w-section w-benefits">
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">What you'll gain</div>
              <h2 className="w-h2">Actionable Outcomes from This Session</h2>
              <p className="w-subtitle">Walk away with strategies you can implement in your business immediately.</p>
            </div>
            <div className="w-benefits__grid">
              {[
                { Ic: Icon.Zap, bg: 'rgba(46, 125, 50, 0.06)', color: '#2E7D32', title: 'Save 10+ Hours Per Week', desc: 'Discover AI tools that eliminate repetitive tasks and free up your team for strategic work.' },
                { Ic: Icon.Cog, bg: 'rgba(16,185,129,0.06)', color: '#10B981', title: 'Automate Business Tasks', desc: 'Build automated workflows that run around the clock — from comms to reporting.' },
                { Ic: Icon.TrendUp, bg: 'rgba(59,130,246,0.06)', color: '#3B82F6', title: 'Improve Team Productivity', desc: 'Equip your team with AI skills that multiply output — no extra headcount needed.' },
                { Ic: Icon.Dollar, bg: 'rgba(245,158,11,0.06)', color: '#F59E0B', title: 'Reduce Operational Costs', desc: 'Cut overhead by automating processes that currently require significant manual effort.' },
                { Ic: Icon.Target, bg: 'rgba(239,68,68,0.06)', color: '#EF4444', title: 'Make Smarter Decisions', desc: 'Use AI to analyse trends, forecast outcomes, and make data-driven decisions faster.' },
              ].map(({ Ic, bg, color, title, desc }) => (
                <div key={title} className="w-benefit">
                  <div className="w-benefit__icon" style={{ background: bg, color }}><Ic /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ WHAT YOU'LL LEARN ═══ */}
        <section className="w-section w-learn">
          <div className="w-container">
            <div className="w-learn__inner">
              <div>
                <div className="w-overline">Agenda</div>
                <h2 className="w-h2" style={{ marginBottom: '6px' }}>What You'll Learn</h2>
                <p className="w-subtitle" style={{ margin: '0 0 32px' }}>
                  A structured, practical session built for business leaders — not technical teams.
                </p>
                <ul className="w-learn__list">
                  {[
                    { n: '01', t: 'Practical AI Tools for Business', s: 'ChatGPT, Claude, Gemini — how to use them effectively in operations.' },
                    { n: '02', t: 'Real-World Use Cases', s: 'Operations, marketing, communication, and customer service automation.' },
                    { n: '03', t: 'Automating Daily Workflows', s: 'Step-by-step examples of workflows you can automate this week.' },
                    { n: '04', t: 'AI Implementation Roadmap', s: 'A clear approach to integrating AI without disruption or high costs.' },
                    { n: '05', t: 'Common Mistakes to Avoid', s: 'What most businesses get wrong and how to ensure ROI from day one.' },
                  ].map(({ n, t, s }) => (
                    <li key={n} className="w-learn__item">
                      <span className="w-learn__num">{n}</span>
                      <div className="w-learn__text">
                        <strong>{t}</strong>
                        <span>{s}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-sticky">
                <div className="w-price-card">
                  <div className="w-price-card__price">
                    <span className="w-price-old" style={{ fontSize: '0.9rem' }}>AED 299</span>
                    <span className="w-price-free" style={{ fontSize: '2rem' }}>FREE</span>
                  </div>
                  <p>Get a full AI business playbook — completely free and live.</p>
                  <button className="w-btn w-btn--primary w-btn--full" onClick={scrollToForm}>
                    Reserve My Seat <Icon.Arrow />
                  </button>
                  <p className="w-price-card__note">Only a few seats remaining</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SPEAKER DETAILS ═══ */}
        <section className="w-section w-speaker">
          <div className="w-container">
            <div className="w-speaker__card">
              <div className="w-speaker__image-col">
                <div className="w-speaker__avatar-wrap">
                  <img
                    src="/images/mohammed-marwan.jpeg"
                    alt="Eng. Mohamed Marwan Shahin"
                    className="w-speaker__img"
                  />
                  <div className="w-speaker__badge">13+ Yrs Exp</div>
                </div>
              </div>
              <div className="w-speaker__content-col">
                <div className="w-overline">Meet Your Expert Instructor</div>
                <h2 className="w-speaker__name">Eng. Mohamed Marwan Shahin</h2>
                <p className="w-speaker__title">Artificial Intelligence Trainer & Emerging Technology Expert</p>

                <p className="w-speaker__bio">
                  Conducted <strong>10K+ training hours</strong> for more than <strong>10K+ participants</strong> globally.
                  A highly skilled professional instructor specializing in cutting-edge technologies with a dynamic
                  personality and engaging teaching style.
                </p>

                <div className="w-speaker__creds">
                  <div className="w-speaker__cred-col">
                    <h4 className="w-speaker__cred-th">Education & Certifications</h4>
                    <ul className="w-speaker__list">
                      <li><Icon.Target /> Master Degree of Artificial Intelligence (2023)</li>
                      <li><Icon.Target /> Microsoft MCT & Certified ILM Trainer</li>
                      <li><Icon.Target /> Certified AI & Data Science Practitioner</li>
                      <li><Icon.Target /> Certified IoT Practitioner</li>
                    </ul>
                  </div>
                  <div className="w-speaker__cred-col">
                    <h4 className="w-speaker__cred-th">Key Expertise</h4>
                    <ul className="w-speaker__list">
                      <li><Icon.Zap /> Machine & Deep Learning</li>
                      <li><Icon.Zap /> Data Science & Python</li>
                      <li><Icon.Zap /> Business Intelligence (Power BI, Tableau)</li>
                      <li><Icon.Zap /> Automation (RPA/UiPath, DataRobot)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHO IS THIS FOR ═══ */}
        <section className="w-section w-who">
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Who should attend</div>
              <h2 className="w-h2">Designed for Business Leaders</h2>
              <p className="w-subtitle">Senior professionals who manage teams, operations, or business growth.</p>
            </div>
            <div className="w-who__grid">
              {[
                { Ic: Icon.Building, role: 'Business Owners', desc: 'Scale operations with AI' },
                { Ic: Icon.Settings, role: 'COO / Ops Managers', desc: 'Optimise workflows and cut costs' },
                { Ic: Icon.Rocket, role: 'Startup Founders', desc: 'Build lean, AI-powered teams' },
                { Ic: Icon.Users, role: 'Team Leaders', desc: 'Boost team output and performance' },
                { Ic: Icon.Chart, role: 'Decision Makers', desc: 'Lead with data-driven insights' },
              ].map(({ Ic, role, desc }) => (
                <div key={role} className="w-who__card">
                  <div className="w-who__card-icon"><Ic /></div>
                  <h3>{role}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SOCIAL PROOF ═══ */}
        <section className="w-section w-proof">
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Industry data</div>
              <h2 className="w-h2">Why AI Adoption Matters Now</h2>
            </div>
            <div className="w-proof__stats">
              {[
                { fig: '77%', text: 'of devices already use AI in some form', src: 'Forbes, 2024' },
                { fig: '$15.7T', text: 'AI\'s projected contribution to the global economy by 2030', src: 'PwC Report' },
                { fig: '64%', text: 'of businesses say AI increases overall productivity', src: 'McKinsey, 2024' },
              ].map(({ fig, text, src }) => (
                <div key={fig} className="w-proof__stat">
                  <div className="w-proof__stat-val">{fig}</div>
                  <p>{text}</p>
                  <cite>{src}</cite>
                </div>
              ))}
            </div>
            <div className="w-proof__quotes">
              {[
                { q: '"We reduced reporting time by 6 hours a week after implementing the AI workflows from this training."', name: 'Operations Director', co: 'Dubai Trading Co.' },
                { q: '"Finally understood how to apply AI practically without needing a technical team."', name: 'CEO & Founder', co: 'UAE Startup' },
                { q: '"The ROI was clear within the first month. Our team now produces twice the output."', name: 'COO', co: 'Abu Dhabi Services' },
              ].map(({ q, name, co }) => (
                <div key={name} className="w-quote">
                  <div className="w-quote__stars">★★★★★</div>
                  <p className="w-quote__text">{q}</p>
                  <div className="w-quote__attr">
                    <strong>{name}</strong>
                    <span>{co}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ OFFER ═══ */}
        <section className="w-section w-offer">
          <div className="w-container">
            <div className="w-offer__inner">
              <div className="w-overline">Exclusive offer</div>
              <h2 className="w-offer__h2">Join This Free Live Webinar</h2>
              <p className="w-offer__sub">
                Get the same knowledge top consultants charge thousands for — completely free for a limited time.
              </p>
              <div className="w-offer__price-row">
                <span className="w-offer__price-old">AED 299</span>
                <span className="w-offer__arrow">→</span>
                <span className="w-offer__price-free">FREE</span>
              </div>
              <p className="w-offer__urgency">Limited seats available — secure your spot now</p>
              <button className="w-btn w-btn--white" onClick={scrollToForm}>
                Reserve My Spot <Icon.Arrow />
              </button>
            </div>
          </div>
        </section>

        {/* ═══ FORM ═══ */}
        <section id="register" className="w-section w-form-section" ref={formRef}>
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Registration</div>
              <h2 className="w-h2">Secure Your Free Seat</h2>
              <p className="w-subtitle">Takes less than 30 seconds to register.</p>
            </div>
            <div className="w-form-card">
              <div className="w-form-card__head">
                <div className="w-form-card__price">
                  <span className="w-price-old" style={{ fontSize: '0.88rem' }}>AED 299</span>
                  <span className="w-price-free" style={{ fontSize: '1.35rem' }}>FREE</span>
                </div>
                <div className="w-form-card__date">Sunday · 7:30 PM UAE</div>
              </div>

              <form id="webinar-form" onSubmit={handleSubmit} noValidate>
                {/* Hidden Fields for UTMs */}
                <input type="hidden" name="utm_source" value={utmData.utm_source} />
                <input type="hidden" name="utm_medium" value={utmData.utm_medium} />
                <input type="hidden" name="utm_campaign" value={utmData.utm_campaign} />
                <input type="hidden" name="utm_content" value={utmData.utm_content} />

                <div className="w-field">
                  <label htmlFor="f-name">Full Name <span className="req">*</span></label>
                  <input id="f-name" type="text" placeholder="e.g. Ahmed Al Rashid" value={form.name} onChange={set('name')} className={errors.name ? 'is-error' : ''} autoComplete="name" />
                  {errors.name && <span className="w-field__error">{errors.name}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-phone">Phone Number <span className="req">*</span> <em>We'll send details here</em></label>
                  <div className={`w-phone-wrap${errors.phone ? ' is-error' : ''}`}>
                    <span className="w-phone-wrap__prefix">+971</span>
                    <input id="f-phone" type="tel" placeholder="50 000 0000" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </div>
                  {errors.phone && <span className="w-field__error">{errors.phone}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-email">Email Address <span className="req">*</span></label>
                  <input id="f-email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} className={errors.email ? 'is-error' : ''} autoComplete="email" />
                  {errors.email && <span className="w-field__error">{errors.email}</span>}
                </div>
                <button id="submit-btn" type="submit" className="w-btn w-btn--primary w-btn--full" disabled={submitting}>
                  {submitting ? <><span className="w-spinner" /> Processing...</> : <>Register Now <Icon.Arrow /></>}
                </button>
                <p className="w-form__note">
                  <Icon.Lock />
                  Details will be shared via WhatsApp. No spam.
                </p>
              </form>
            </div>
          </div>
        </section>

        <div style={{ height: '60px' }} />
      </div>
    </>
  );
}
