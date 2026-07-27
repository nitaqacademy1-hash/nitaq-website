import { useMemo, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LANGUAGES, DEFAULT_LANG, langFromPath, localizePath } from './config';
import { LanguageContext } from './context';
import en from './translations/en';
import ar from './translations/ar';

const BUNDLES = { en, ar };

/** Resolve 'nav.home' against a nested object. */
function lookup(bundle, key) {
    return key.split('.').reduce((acc, part) => (acc == null ? undefined : acc[part]), bundle);
}

export function LanguageProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const lang = langFromPath(location.pathname);
    const meta = LANGUAGES[lang] || LANGUAGES[DEFAULT_LANG];

    // Keep the document in sync so CSS ([dir=rtl], [lang=ar]) and screen
    // readers both see the active language.
    useEffect(() => {
        document.documentElement.setAttribute('lang', meta.code);
        document.documentElement.setAttribute('dir', meta.dir);
    }, [meta.code, meta.dir]);

    const value = useMemo(() => {
        /**
         * Translate a dot-key. Falls back to English, then to the key itself,
         * so a missing Arabic string shows English copy rather than blowing up.
         * Pass `vars` to fill {placeholders}.
         */
        const t = (key, vars) => {
            let str = lookup(BUNDLES[lang], key);
            if (str === undefined) str = lookup(BUNDLES[DEFAULT_LANG], key);
            if (str === undefined) {
                if (import.meta.env?.DEV) console.warn(`[i18n] missing key: ${key}`);
                return key;
            }
            if (vars && typeof str === 'string') {
                return str.replace(/\{(\w+)\}/g, (m, name) =>
                    Object.prototype.hasOwnProperty.call(vars, name) ? vars[name] : m
                );
            }
            return str;
        };

        /** Prefix a path for the current language. */
        const localize = (path) => localizePath(path, lang);

        /** Switch language, staying on the equivalent page. */
        const switchLanguage = (nextLang) => {
            if (nextLang === lang) return;
            navigate(localizePath(location.pathname, nextLang) + location.search + location.hash);
        };

        return { lang, dir: meta.dir, isRTL: meta.dir === 'rtl', t, localize, switchLanguage };
    }, [lang, meta.dir, location.pathname, location.search, location.hash, navigate]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
