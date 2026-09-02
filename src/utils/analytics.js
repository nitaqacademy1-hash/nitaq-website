/**
 * Reusable Analytics Utility for NITAQ ACADEMY
 * Standardizes event tracking across the entire platform.
 */

export const trackEvent = (eventName, eventLabel) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'contact',
      event_label: eventLabel,
      // Additional metadata for GA4
      value: 1,
      send_to: 'G-VZN7JBMNPN' 
    });
    console.log(`[Analytics] Tracked: ${eventName} - ${eventLabel}`);
  }
};

/**
 * Pre-defined event names for consistency
 */
export const ANALYTICS_EVENTS = {
  WHATSAPP: 'whatsapp_click',
  CALL: 'call_click',
  FORM: 'form_submit'
};

/**
 * Programmatically fire Meta Pixel 'Lead' event.
 * Ensures the event fires strictly ONCE per successful form submission key,
 * preventing duplicates on page refresh, double submission, or re-renders.
 */
export const trackMetaLead = (submissionKey) => {
  if (typeof window === 'undefined') return;

  if (submissionKey) {
    const dedupeStorageKey = `nitaq_lead_fired_${submissionKey}`;
    if (sessionStorage.getItem(dedupeStorageKey)) {
      console.log(`[Meta Pixel] Lead event skipped: Already fired for submission key ${submissionKey}`);
      return;
    }
    sessionStorage.setItem(dedupeStorageKey, 'true');
  }

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
    console.log('[Meta Pixel] Lead event fired successfully: fbq("track", "Lead")');
  } else {
    console.warn('[Meta Pixel] window.fbq is not defined. Ensure Meta Pixel base code is loaded.');
  }
};

