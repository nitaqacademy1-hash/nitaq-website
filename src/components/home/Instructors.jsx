import { useLanguage } from '../../i18n/context';
import { Award, BookOpen, Clock, ShieldCheck, ArrowUpRight, GraduationCap } from 'lucide-react';
import '../../styles/instructors.css';

export default function Instructors({ c }) {
  const { lang } = useLanguage();
  const isAr = lang === 'ar';
  const list = c.instructors || [];

  return (
    <section className="nh-section nh-instructors-section" id="faculty" aria-label={c.instructorsEyebrow}>
      <div className="nh-container">
        {/* Section Header */}
        <div className="nh-instructors-header nh-reveal">
          <p className="nh-eyebrow">
            <span className="nh-dot" aria-hidden="true" />
            {c.instructorsEyebrow}
          </p>
          <h2>{c.instructorsTitle}</h2>
          <p className="nh-section-copy">{c.instructorsIntro}</p>
        </div>

        {/* Instructors Grid */}
        <div className="nh-instructors-grid">
          {list.map((inst, idx) => (
            <article key={inst.name || idx} className="nh-instructor-card nh-reveal">
              <div className="nh-instructor-card-top">
                <div className="nh-instructor-avatar-wrap">
                  {inst.image ? (
                    <img
                      src={inst.image}
                      alt={inst.name}
                      width="110"
                      height="110"
                      loading="lazy"
                      decoding="async"
                      className="nh-instructor-img"
                    />
                  ) : (
                    <div className="nh-instructor-panel-icon" aria-hidden="true">
                      <GraduationCap size={44} strokeWidth={1.4} />
                    </div>
                  )}
                  {inst.badge && (
                    <span className="nh-instructor-badge">
                      <ShieldCheck size={13} aria-hidden="true" />
                      {inst.badge}
                    </span>
                  )}
                </div>

                <div className="nh-instructor-identity">
                  <h3 className="nh-instructor-name">{inst.name}</h3>
                  <p className="nh-instructor-role">{inst.role}</p>
                </div>
              </div>

              <div className="nh-instructor-body">
                {/* Qualifications */}
                {inst.qualifications && (
                  <div className="nh-instructor-meta-item">
                    <Award size={16} className="nh-meta-icon" aria-hidden="true" />
                    <div>
                      <span className="nh-meta-label">{isAr ? 'المؤهلات والاعتماد' : 'Qualifications'}</span>
                      <p className="nh-meta-text">{inst.qualifications}</p>
                    </div>
                  </div>
                )}

                {/* Experience */}
                {inst.experience && (
                  <div className="nh-instructor-meta-item">
                    <Clock size={16} className="nh-meta-icon" aria-hidden="true" />
                    <div>
                      <span className="nh-meta-label">{isAr ? 'الخبرة التدريسية' : 'Experience'}</span>
                      <p className="nh-meta-text">{inst.experience}</p>
                    </div>
                  </div>
                )}

                {/* Subjects Taught */}
                {inst.subjects && (
                  <div className="nh-instructor-meta-item">
                    <BookOpen size={16} className="nh-meta-icon" aria-hidden="true" />
                    <div>
                      <span className="nh-meta-label">{isAr ? 'المواد والتخصصات' : 'Subjects Taught'}</span>
                      <div className="nh-instructor-tags">
                        {inst.subjects.map((sub, sIdx) => (
                          <span key={sIdx} className="nh-inst-tag">{sub}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Bio Introduction */}
                {inst.bio && (
                  <p className="nh-instructor-bio">{inst.bio}</p>
                )}
              </div>

              <div className="nh-instructor-foot">
                <a
                  href={`https://wa.me/971527569908?text=${encodeURIComponent(
                    isAr
                      ? `مرحباً أكاديمية نطاق، أود الاستفسار عن التدريس وحجز استشارة بخصوص: ${inst.name}`
                      : `Hello Nitaq Academy, I would like to enquire about consultation / classes with: ${inst.name}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nh-instructor-contact-btn"
                >
                  <span>{isAr ? 'استشارة أكاديمية' : 'Consult Advisor'}</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Diagnostic assessment banner below faculty */}
        <div className="nh-instructors-bottom-banner nh-reveal">
          <div className="nh-inst-banner-text">
            <h4>{isAr ? 'تبحث عن دعم تخصصي لمادة محددة؟' : 'Need subject-specific guidance or test prep?'}</h4>
            <p>
              {isAr
                ? 'يبدأ كل طالب بتقييم تشخيصي أولي لتحديد نقاط القوة وسد الثغرات في الرياضيات والعلوم واللغات و SAT.'
                : 'Every student begins with a diagnostic evaluation to identify strengths and prioritize focus areas across SAT, school subjects, and languages.'}
            </p>
          </div>
          <a
            href="/sat/diagnostic"
            className="nh-button nh-button-green"
          >
            <span>{c.instructorsDiag || (isAr ? 'ابدأ التقييم التشخيصي' : 'Start Free Diagnostic')}</span>
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
