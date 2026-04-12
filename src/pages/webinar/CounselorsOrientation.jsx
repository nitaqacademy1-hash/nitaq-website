import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { trackEvent } from '../../utils/analytics';
import './AIWebinar.css'; // Reusing the same styling for consistency

const fbq = (...a) => { if (window.fbq) window.fbq(...a); };

/* Inline SVG icons — consistent outline style */
const Icon = {
  Calendar: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Clock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  Bolt: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  Arrow: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>,
  Zap: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  TrendUp: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
  Users: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  Chart: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  Target: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>,
  Lock: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
};

export default function CounselorsOrientation() {
  const navigate  = useNavigate();
  const formRef   = useRef(null);

  const [form, setForm]             = useState({ name:'', designation:'', school:'', phone:'', email:'' });
  const [errors, setErrors]         = useState({});
  const [submitting, setSubmitting] = useState(false);

  /* UTM Tracking */
  const [utmData, setUtmData] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: ''
  });

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const extractedUtm = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_content: urlParams.get('utm_content') || ''
      };

      const hasUrlUtm = Object.values(extractedUtm).some(val => val !== '');
      let finalUtm;
      
      if (hasUrlUtm) {
        finalUtm = extractedUtm;
        localStorage.setItem('nitaq_counselor_utm', JSON.stringify(finalUtm));
      } else {
        const stored = localStorage.getItem('nitaq_counselor_utm');
        finalUtm = stored ? JSON.parse(stored) : extractedUtm;
      }
      setUtmData(finalUtm);
    } catch (err) {
      console.warn('[UTM Tracker] Error processing UTMs', err);
    }
  }, []);

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior:'smooth', block:'center' });

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Please enter your name';
    if (!form.designation.trim()) e.designation = 'Please enter your designation';
    if (!form.school.trim())      e.school = 'Please enter your school name';
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
    
    trackEvent('counselor_orientation_reg', 'Counselors Orientation – April 14');
    fbq('track', 'Lead');

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbw2HPMan48xQkPOhLWSRocv54BCX8BJ5eI2kBMqdaLtvRZxA_CNEQVhaDmDQ1hJLRtBoQ/exec'; 
      
      const formData = new FormData();
      formData.append('Name', form.name);
      formData.append('Designation', form.designation);
      formData.append('School', form.school);
      formData.append('Phone', form.phone);
      formData.append('Email', form.email);
      formData.append('Timestamp', new Date().toLocaleString());
      formData.append('Campaign', 'Counselors Orientation April 14');
      
      // Append UTMs
      formData.append('utm_source', utmData.utm_source);
      formData.append('utm_medium', utmData.utm_medium);
      formData.append('utm_campaign', utmData.utm_campaign);
      formData.append('utm_content', utmData.utm_content);

      fetch(scriptUrl, { method: 'POST', body: formData, mode: 'no-cors' });
      await new Promise(r => setTimeout(r, 1000));
      
      navigate('/webinar/counselors/thank-you', { state: { name: form.name } });
    } catch (error) {
      console.error('Submission error:', error);
      navigate('/webinar/counselors/thank-you', { state: { name: form.name } });
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
        <title>Counselors Orientation | Growth Opportunities | Nitaq Academy</title>
        <meta name="description" content="Exclusive orientation for school counselors to explore growth opportunities and student impact. Join Nitaq Academy on April 14." />
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
                  Presented by Nitaq Academy
                </div>

                <h1 className="w-hero__h1">
                  Exclusive Orientation For <em>School Counselors</em>
                </h1>

                <p className="w-hero__desc">
                  Join us for an insightful session to explore new growth opportunities 
                  and better support your students with future-ready learning pathways.
                </p>

                <div className="w-hero__meta">
                  {[
                    [<Icon.Calendar />, 'April 14, 2026'],
                    [<Icon.Clock />,    '07:00 PM UAE'],
                    [<Icon.Bolt />,     'Exclusive'],
                  ].map(([icon, label], i) => (
                    <span key={i} className="w-chip">{icon}{label}</span>
                  ))}
                </div>

                <div className="w-hero__cta-row">
                  <button id="hero-cta" className="w-btn w-btn--primary" onClick={scrollToForm}>
                    Reserve Your Presence <Icon.Arrow />
                  </button>
                </div>
              </div>

              <div>
                <div className="w-info-card">
                  <div className="w-info-card__host">
                    <img src="https://ui-avatars.com/api/?name=Nitaq+Academy&background=2E7D32&color=fff&size=100" alt="Nitaq Academy" />
                    <div className="w-info-card__host-text">
                      <span className="label">Host</span>
                      <strong>Nitaq Academy</strong>
                      <span className="title">Professional Training UAE</span>
                    </div>
                  </div>
                  <div className="w-info-card__divider" />
                  <ul className="w-info-card__rows">
                    {[
                      [<Icon.Calendar />, 'Date',     'April 14, 2026'],
                      [<Icon.Clock />,    'Time',     '07:00 PM (UAE)'],
                      [<Icon.Bolt />,     'Duration', 'Exclusive Session'],
                      [<Icon.Chart />,    'Format',   'Live / In-Person'],
                    ].map(([icon, label, val], i) => (
                      <li key={i} className="w-info-card__row">
                        <span className="w-info-card__row-icon">{icon}</span>
                        <span className="w-info-card__row-label">{label}</span>
                        <span className="w-info-card__row-val">{val}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="w-info-card__divider" />
                  <button className="w-btn w-btn--primary w-btn--full" onClick={scrollToForm}>
                    Confirm Attendance
                  </button>
                  <p className="w-info-card__note">Exclusive for School Counselors</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ═══ WHY ATTEND ═══ */}
        <section className="w-section w-benefits">
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Orientation Agenda</div>
              <h2 className="w-h2">Why Attend This Orientation?</h2>
              <p className="w-subtitle">Explore a platform designed to create value for both counselors and students.</p>
            </div>
            <div className="w-benefits__grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))'}}>
              {[
                { Ic: Icon.TrendUp, bg:'rgba(46, 125, 50, 0.06)',  color:'#2E7D32', title:'Professional Growth',    desc:'Discover how counselors can broaden their role beyond traditional guidance and lead institutional growth.' },
                { Ic: Icon.Target,  bg:'rgba(59,130,246,0.06)', color:'#3B82F6', title:'Student Impact',        desc:'Learn how to better support students with future-ready learning and career pathways in emerging tech.' },
                { Ic: Icon.Zap,     bg:'rgba(245,158,11,0.06)', color:'#F59E0B', title:'Income Opportunities',  desc:'Explore a structured opportunity that can be both professionally rewarding and financially beneficial.' },
              ].map(({ Ic, bg, color, title, desc }) => (
                <div key={title} className="w-benefit">
                  <div className="w-benefit__icon" style={{background:bg, color}}><Ic /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <div className="w-callout" style={{marginTop:'64px'}}>
              <strong>A platform designed to create value for both counselors and students.</strong>
              <span>Be a part of a community shaping the future of education in the UAE.</span>
            </div>
          </div>
        </section>

        {/* ═══ FORM ═══ */}
        <section id="register" className="w-section w-form-section" ref={formRef}>
          <div className="w-container">
            <div className="w-header">
              <div className="w-overline">Registration</div>
              <h2 className="w-h2">Be a Part of the Orientation</h2>
              <p className="w-subtitle">April 14, 2026 · We look forward to welcoming you.</p>
            </div>
            <div className="w-form-card">
              <div className="w-form-card__head">
                <div className="w-form-card__host" style={{border:'none', background:'none', padding:0, margin:0}}>
                   <strong>Exclusive Orientation</strong>
                </div>
                <div className="w-form-card__date">April 14 · 7:00 PM UAE</div>
              </div>

              <p style={{textAlign:'center', fontSize:'0.9rem', color:'#64748b', marginBottom:'24px'}}>
                 We look forward to welcoming respected School Counselors for this exclusive session.
              </p>

              <form id="orientation-form" onSubmit={handleSubmit} noValidate>
                {/* Hidden Fields for UTMs */}
                <input type="hidden" name="utm_source" value={utmData.utm_source} />
                <input type="hidden" name="utm_medium" value={utmData.utm_medium} />
                <input type="hidden" name="utm_campaign" value={utmData.utm_campaign} />
                <input type="hidden" name="utm_content" value={utmData.utm_content} />

                <div className="w-field">
                  <label htmlFor="f-name">Full Name <span className="req">*</span></label>
                  <input id="f-name" type="text" placeholder="e.g. Ahmed Al Rashid" value={form.name} onChange={set('name')} className={errors.name?'is-error':''} autoComplete="name" />
                  {errors.name && <span className="w-field__error">{errors.name}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-designation">Designation <span className="req">*</span></label>
                  <input id="f-designation" type="text" placeholder="e.g. School Counselor" value={form.designation} onChange={set('designation')} className={errors.designation?'is-error':''} />
                  {errors.designation && <span className="w-field__error">{errors.designation}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-school">School <span className="req">*</span></label>
                  <input id="f-school" type="text" placeholder="e.g. International School" value={form.school} onChange={set('school')} className={errors.school?'is-error':''} />
                  {errors.school && <span className="w-field__error">{errors.school}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-phone">Phone Number <span className="req">*</span></label>
                  <div className={`w-phone-wrap${errors.phone?' is-error':''}`}>
                    <span className="w-phone-wrap__prefix">+971</span>
                    <input id="f-phone" type="tel" placeholder="50 000 0000" value={form.phone} onChange={set('phone')} autoComplete="tel" />
                  </div>
                  {errors.phone && <span className="w-field__error">{errors.phone}</span>}
                </div>
                <div className="w-field">
                  <label htmlFor="f-email">Email Address <span className="req">*</span></label>
                  <input id="f-email" type="email" placeholder="counselor@school.com" value={form.email} onChange={set('email')} className={errors.email?'is-error':''} autoComplete="email" />
                  {errors.email && <span className="w-field__error">{errors.email}</span>}
                </div>
                <button id="submit-btn" type="submit" className="w-btn w-btn--primary w-btn--full" disabled={submitting}>
                  {submitting ? <><span className="w-spinner" /> Processing...</> : <>Reserve Your Presence <Icon.Arrow /></>}
                </button>
                <p className="w-form__note">
                  <Icon.Lock />
                  RSVP confirmation will be sent via WhatsApp.
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
