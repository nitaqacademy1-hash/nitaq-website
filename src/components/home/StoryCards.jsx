import { Check, ScanLine, BookOpen, GraduationCap, Timer, ArrowUpRight } from 'lucide-react';

export default function StoryCards({ c }) {
  return <div className="nh-story-objects" aria-hidden="true">
    <div className="nh-float nh-diagnostic"><div className="nh-card-icon"><ScanLine size={20} /></div><div><small>01 / {c.diagnostic}</small><strong>{c.strengths}</strong><span><Check size={13} />{c.focus}</span></div></div>
    <div className="nh-plan"><small>{c.pathway}</small><svg viewBox="0 0 320 90" fill="none"><path d="M12 74C80 74 82 18 150 18S230 65 308 10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 5" /></svg>{c.subjects.map((s, i) => <span className={`nh-subject nh-subject-${i}`} key={s}>{s}<ArrowUpRight size={12} /></span>)}</div>
    <div className="nh-learning-cards">{c.programs.slice(0, 3).map((p, i) => <div className="nh-float nh-course-float" key={p[0]}><BookOpen size={18} /><div><strong>{p[0]}</strong><small>{p[2]}</small></div><span>0{i + 1}</span></div>)}<div className="nh-tutor"><GraduationCap size={18} /><div><strong>{c.tutor}</strong><small>{c.tutorSub}</small></div></div></div>
    <div className="nh-float nh-practice"><div className="nh-card-top"><small>{c.practice}</small><Timer size={17} /></div><strong>{c.question}</strong><div className="nh-practice-line"><span /></div><span><Check size={14} />{c.completion}</span></div>
    <div className="nh-float nh-progress-card"><div className="nh-card-top"><small>{c.readiness}</small><ArrowUpRight size={17} /></div><div className="nh-score" dir="ltr"><strong className="nh-score-number">1180</strong><span>/ 1600</span></div><svg viewBox="0 0 290 85" fill="none"><path d="M0 70H290M0 37H290M0 4H290" stroke="#dce8dc" /><path className="nh-chart-line" d="M4 72C45 74 45 62 82 58S115 49 146 41S188 44 221 22S260 19 284 6" stroke="#2e7d32" strokeWidth="3" pathLength="1" /><circle cx="284" cy="6" r="4" fill="#2e7d32" /></svg><div className="nh-score-labels" dir="ltr"><span>1180</span><span>1260</span><span>1340</span></div><small className="nh-example">{c.example}</small></div>
    <div className="nh-float nh-success"><div className="nh-card-icon"><Check size={22} /></div><strong>{c.success}</strong></div>
  </div>;
}
