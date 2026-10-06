import { ArrowUpRight, Phone } from 'lucide-react';
import { Link } from '../../i18n/Link';
import { contact } from './content';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';

export default function Actions({ c, diagnostic = false }) {
  return <div className="nh-actions">
    {diagnostic ? <Link className="nh-button nh-button-light" to="/enquiry" onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'home_book_diagnostic')}>{c.book}<ArrowUpRight size={18} /></Link>
      : <a className="nh-button nh-button-light" href="#programs">{c.explore}<ArrowUpRight size={18} /></a>}
    <a className="nh-button nh-button-outline" href={`tel:${contact.phone}`} onClick={() => trackEvent(ANALYTICS_EVENTS.CALL, 'home_admissions')}><Phone size={16} />{c.admissions}</a>
  </div>;
}
