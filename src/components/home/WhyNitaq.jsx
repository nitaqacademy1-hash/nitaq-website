import { Compass, Focus, GraduationCap, ChartNoAxesCombined } from 'lucide-react';
const icons = [Compass, Focus, GraduationCap, ChartNoAxesCombined];
export default function WhyNitaq({ c }) {
  return <section className="nh-section nh-why" id="approach"><div className="nh-container nh-why-layout">
    <div className="nh-reveal"><p className="nh-eyebrow">{c.whyEyebrow}</p><h2>{c.whyTitle}</h2><p className="nh-section-copy">{c.whyIntro}</p><div className="nh-why-mark" aria-hidden="true"><span /><span /><span /><span /></div></div>
    <div className="nh-benefits">{c.benefits.map(([title, body], i) => { const Icon = icons[i]; return <article className="nh-benefit nh-reveal" key={title}><Icon size={26} strokeWidth={1.35} /><div><h3>{title}</h3><p>{body}</p></div><small>0{i + 1}</small></article>; })}</div>
  </div></section>;
}
