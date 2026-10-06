import { ArrowUpRight, MapPin } from 'lucide-react';
import { Link } from '../../i18n/Link';
export default function Location({ c }) {
  return <section className="nh-section nh-location" id="visit"><div className="nh-container nh-location-layout">
    <figure className="nh-location-image nh-reveal"><img src="/images/nitaq_classroom_landing.webp" srcSet="/images/nitaq_classroom_landing-640.webp 640w, /images/nitaq_classroom_landing.webp 765w" sizes="(max-width: 767px) 90vw, 50vw" width="765" height="1020" loading="lazy" decoding="async" alt="Nitaq Academy modern micro-batch classroom in Al Majaz 3, Sharjah" style={{ objectPosition: 'center 30%' }} /><figcaption>{c.concept}</figcaption></figure>
    <div className="nh-location-copy nh-reveal"><p className="nh-eyebrow">{c.locationEyebrow}</p><h2>{c.locationTitle}</h2><p>{c.locationBody}</p><address><MapPin size={21} /><span>{c.address}</span></address><Link to="/contact" className="nh-button nh-button-green">{c.visit}<ArrowUpRight size={17} /></Link></div>
  </div></section>;
}
