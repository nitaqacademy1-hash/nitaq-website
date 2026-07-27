import { createContext, useContext } from 'react';

/**
 * Kept in a component-free module so Fast Refresh keeps working for the
 * provider and the Link components that consume it.
 */
export const LanguageContext = createContext(null);

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
    return ctx;
}

/** Prefix a path for the language currently being browsed. */
export function useLocalizedPath() {
    return useLanguage().localize;
}
