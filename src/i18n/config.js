export const LANGUAGES = {
    en: { code: 'en', dir: 'ltr', label: 'English', short: 'EN', ogLocale: 'en_AE' },
    ar: { code: 'ar', dir: 'rtl', label: 'العربية', short: 'AR', ogLocale: 'ar_AE' },
};

export const DEFAULT_LANG = 'en';
export const SUPPORTED_LANGS = Object.keys(LANGUAGES);

/** '/ar/about' -> 'ar';  '/about' -> 'en' */
export function langFromPath(pathname) {
    return /^\/ar(\/|$)/.test(pathname) ? 'ar' : DEFAULT_LANG;
}

/** '/ar/about' -> '/about';  '/ar' -> '/';  '/about' -> '/about' */
export function stripLangPrefix(pathname) {
    const stripped = pathname.replace(/^\/ar(?=\/|$)/, '');
    return stripped === '' ? '/' : stripped;
}

/**
 * Build a path in the target language.
 * ('/about', 'ar') -> '/ar/about'   ('/', 'ar') -> '/ar'   ('/about', 'en') -> '/about'
 * Query strings and hashes are preserved.
 */
export function localizePath(path, lang) {
    if (typeof path !== 'string' || !path.startsWith('/')) return path;

    const match = path.match(/^([^?#]*)(.*)$/);
    const pathname = stripLangPrefix(match[1]);
    const suffix = match[2] || '';

    if (lang !== 'ar') return pathname + suffix;
    return (pathname === '/' ? '/ar' : `/ar${pathname}`) + suffix;
}
