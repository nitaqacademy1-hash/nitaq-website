/**
 * UTM Parameter Extraction & Persistence Utility
 * Preserves Meta & advertising campaign parameters (utm_source, utm_medium, utm_campaign, utm_content, utm_term)
 * across session navigation.
 */

const STORAGE_KEY = 'nitaq_utm_data';

export function getUtmParameters() {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid'];
  const extracted = {};
  let foundInUrl = false;

  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      extracted[key] = value;
      foundInUrl = true;
    }
  });

  if (foundInUrl) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(extracted));
    } catch (e) {
      console.warn('[UTM] Could not store UTM data in sessionStorage:', e);
    }
    return extracted;
  }

  // Fallback to persisted session data
  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.warn('[UTM] Could not read UTM data from sessionStorage:', e);
  }

  return {};
}
