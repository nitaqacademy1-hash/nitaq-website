import Actions from './Actions';
export default function CTA({ c }) {
  return <section className="nh-cta"><div className="nh-container nh-reveal"><p className="nh-eyebrow">{c.ctaEyebrow}</p><h2>{c.ctaTitle}</h2><p>{c.ctaBody}</p><Actions c={c} diagnostic /></div><div className="nh-cta-rings" aria-hidden="true" /></section>;
}
