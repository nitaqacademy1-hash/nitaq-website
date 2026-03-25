/**
 * Reusable Analytics Utility for Nitaq Academy
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
