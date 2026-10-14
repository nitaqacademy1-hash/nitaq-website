import { ArrowUpRight, Youtube, Instagram, Facebook, Linkedin, MessageCircle } from 'lucide-react';
import { Link } from '../../i18n/Link';
import { Link as RouterLink } from 'react-router-dom';
import { contact, programPaths } from './content';

export default function Footer({ c }) {
  return (
    <footer className="nh-footer">
      <div className="nh-container">
        <div className="nh-footer-grid">
          <div className="nh-footer-brand">
            <Link to="/">
              <img src="/images/logo1.webp" width="146" height="55" alt="Nitaq Academy" title="Nitaq Academy" loading="lazy" />
            </Link>
            <p>{c.footerLine}</p>
            <div className="nh-footer-socials" style={{ display: 'flex', gap: '10px', marginTop: '16px' }} aria-label="Social media channels">
              <a href="https://www.youtube.com/@NitaqAcademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube @NitaqAcademy" title="YouTube: @NitaqAcademy" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.12)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Youtube size={17} />
              </a>
              <a href="https://www.instagram.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Instagram @nitaqtraining" title="Instagram: @nitaqtraining" style={{ color: '#ec4899', background: 'rgba(236, 72, 153, 0.12)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Instagram size={17} />
              </a>
              <a href="https://www.facebook.com/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="Facebook @nitaqtraining" title="Facebook: @nitaqtraining" style={{ color: '#1877f2', background: 'rgba(24, 119, 242, 0.12)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Facebook size={17} />
              </a>
              <a href="https://www.linkedin.com/company/nitaqtraining" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn @nitaqtraining" title="LinkedIn: Nitaq Academy" style={{ color: '#0a66c2', background: 'rgba(10, 102, 194, 0.12)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <Linkedin size={17} />
              </a>
              <a href="https://wa.me/971527569908" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp: +971 52 756 9908" style={{ color: '#25d366', background: 'rgba(37, 211, 102, 0.12)', padding: '8px', borderRadius: '50%', display: 'inline-flex' }}>
                <MessageCircle size={17} />
              </a>
            </div>
          </div>
          <div>
            <h3>{c.view}</h3>
            {c.programs.map((p, i) => (
              <RouterLink key={p[0]} to={programPaths[i]}>{p[0]}</RouterLink>
            ))}
          </div>
          <div>
            <h3>{c.academy}</h3>
            <Link to="/about">{c.about}</Link>
            <a href="#approach">{c.whyEyebrow}</a>
            <Link to="/articles">{c.resources}</Link>
            <Link to="/contact">{c.visit}</Link>
          </div>
          <div className="nh-footer-contact">
            <h3>{c.contact}</h3>
            <a href={`tel:${contact.mobile}`} dir="ltr">
              +971 52 756 9908
              <ArrowUpRight size={14} />
            </a>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <p>{c.address}</p>
          </div>
        </div>
        <div className="nh-footer-bottom">
          <span>© {new Date().getFullYear()} Nitaq Academy. {c.rights}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link to="/privacy-policy">{c.privacy}</Link>
            <Link to="/terms-and-conditions">{c.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
