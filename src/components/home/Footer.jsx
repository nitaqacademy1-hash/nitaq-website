import { ArrowUpRight } from 'lucide-react';
import { Link } from '../../i18n/Link';
import { Link as RouterLink } from 'react-router-dom';
import { contact, programPaths } from './content';
export default function Footer({ c }) {
  return <footer className="nh-footer"><div className="nh-container"><div className="nh-footer-grid">
    <div className="nh-footer-brand"><Link to="/"><img src="/images/logo1.webp" width="146" height="55" alt="Nitaq Academy" loading="lazy" /></Link><p>{c.footerLine}</p></div>
    <div><h3>{c.view}</h3>{c.programs.map((p, i) => <RouterLink key={p[0]} to={programPaths[i]}>{p[0]}</RouterLink>)}</div>
    <div><h3>{c.academy}</h3><Link to="/about">{c.about}</Link><a href="#approach">{c.whyEyebrow}</a><Link to="/articles">{c.resources}</Link><Link to="/contact">{c.visit}</Link></div>
    <div className="nh-footer-contact"><h3>{c.contact}</h3><a href={`tel:${contact.mobile}`} dir="ltr">+971 52 756 9908<ArrowUpRight size={14} /></a><a href={`mailto:${contact.email}`}>{contact.email}</a><p>{c.address}</p></div>
  </div><div className="nh-footer-bottom"><span>© {new Date().getFullYear()} Nitaq Academy. {c.rights}</span><div><Link to="/privacy-policy">{c.privacy}</Link><Link to="/terms-and-conditions">{c.terms}</Link></div></div></div></footer>;
}
