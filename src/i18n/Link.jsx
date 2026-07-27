import { forwardRef } from 'react';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom';
import { useLanguage } from './context';

/**
 * Drop-in replacements for react-router's Link/NavLink that keep the visitor
 * in the language they are browsing. `<Link to="/about">` resolves to
 * `/ar/about` while Arabic is active.
 *
 * Absolute URLs (http://, mailto:, tel:) and `to` objects are passed through
 * untouched.
 */
function useLocalizedTo(to) {
    const { localize } = useLanguage();
    if (typeof to !== 'string') return to;
    if (/^[a-z][a-z0-9+.-]*:/i.test(to) || to.startsWith('//')) return to;
    if (!to.startsWith('/')) return to; // relative link, router resolves it
    return localize(to);
}

export const Link = forwardRef(function Link({ to, ...rest }, ref) {
    return <RouterLink ref={ref} to={useLocalizedTo(to)} {...rest} />;
});

export const NavLink = forwardRef(function NavLink({ to, ...rest }, ref) {
    return <RouterNavLink ref={ref} to={useLocalizedTo(to)} {...rest} />;
});
