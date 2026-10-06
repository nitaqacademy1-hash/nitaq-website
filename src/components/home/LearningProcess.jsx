export default function LearningProcess({ c }) {
  return <section className="nh-section nh-process"><div className="nh-container"><div className="nh-reveal"><p className="nh-eyebrow">{c.processEyebrow}</p><h2>{c.processTitle}</h2></div><ol className="nh-process-list">{c.process.map(([title, body], i) => <li className="nh-reveal" key={title}><span className="nh-process-number">0{i + 1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol></div></section>;
}
