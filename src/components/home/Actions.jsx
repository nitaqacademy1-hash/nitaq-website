import { ArrowUpRight, Phone } from 'lucide-react';
import { Link } from '../../i18n/Link';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';

export default function Actions({ c, diagnostic = false }) {
  const isAr = c?.explore?.includes('استكشف') || c?.admissions?.includes('القبول');
  const waMsg = isAr
    ? 'مرحباً أكاديمية نطاق، أود الاستفسار عن برامج التحضير لاختبار SAT والدروس الأكاديمية واللغات في الشارقة.'
    : 'Hello Nitaq Academy, I would like to enquire about SAT preparation, Subject Tuition, and Courses in Sharjah.';

  return (
    <div className="nh-actions">
      {diagnostic ? (
        <Link
          className="nh-button nh-button-diagnostic"
          to="/sat/diagnostic"
          onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'home_book_diagnostic')}
        >
          {c.book}
          <ArrowUpRight size={18} />
        </Link>
      ) : (
        <Link
          className="nh-button nh-button-diagnostic"
          to="/sat/diagnostic"
          onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'home_sat_diagnostic')}
        >
          {c.book}
          <ArrowUpRight size={18} />
        </Link>
      )}
      {!diagnostic && <a className="nh-button nh-button-outline" href="#programs">{c.explore}<ArrowUpRight size={17} /></a>}
      <a
        className="nh-admissions-link"
        href={`https://wa.me/971527569908?text=${encodeURIComponent(waMsg)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent(ANALYTICS_EVENTS.CLICK, 'home_whatsapp_admissions')}
      >
        <Phone size={16} />
        {c.admissions}
      </a>
    </div>
  );
}
