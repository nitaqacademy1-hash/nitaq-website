import React from 'react';
import { Award, BookOpen, Users, Sparkles } from 'lucide-react';
import { useLanguage } from '../i18n/context';

const WhyNitaq = () => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';

    return (
        <section className="sat-why-section" style={{ margin: '40px 0 0 0', borderRadius: '24px', border: '1px solid #E4E7EC', background: '#FFFFFF' }}>
            <div className="sat-why-container" style={{ padding: '40px 32px' }}>
                <div className="sat-why-header-col">
                    <div className="sat-why-eyebrow">
                        {isAr ? 'لماذا أكاديمية نطاق؟' : 'WHY NITAQ ACADEMY?'}
                    </div>
                    <h2 className="sat-why-title">
                        {isAr ? 'توجيه تعليمي مركز.' : 'Focused Guidance.'}
                        <div>
                            {isAr ? (
                                <>نتائج <span className="accent-green">مثبتة وملموسة.</span></>
                            ) : (
                                <>Proven <span className="accent-green">Results.</span></>
                            )}
                        </div>
                    </h2>
                    <p style={{ marginTop: '16px', color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {isAr
                            ? 'تمكين الطلاب والمهنيين في الشارقة والإمارات بمناهج معتمدة، وكادر تدريسي خبير، ومسارات تعليمية مصممة خصيصاً لكل متعلم.'
                            : 'Empowering learners in Sharjah & UAE with authorized curricula, expert faculty, and personalized academic pathways.'}
                    </p>
                </div>

                <div className="sat-why-items-col">
                    {/* Item 01 */}
                    <div className="sat-why-item">
                        <div className="sat-why-number-badge">01</div>
                        <div className="sat-why-icon-circle">
                            <Award size={24} />
                        </div>
                        <h3 className="sat-why-item-title">
                            {isAr ? 'مدربون وخبراء معتمدون' : 'Expert Instruction'}
                        </h3>
                        <p className="sat-why-item-desc">
                            {isAr
                                ? 'تعلم على أيدي معلمين مرخصين ومختصين متمرسين بسجلات حافلة من الإنجازات والنتائج.'
                                : 'Learn from licensed educators and industry specialists with proven track records.'}
                        </p>
                    </div>

                    {/* Item 02 */}
                    <div className="sat-why-item">
                        <div className="sat-why-number-badge">02</div>
                        <div className="sat-why-icon-circle">
                            <BookOpen size={24} />
                        </div>
                        <h3 className="sat-why-item-title">
                            {isAr ? 'مناهج دراسية متكاملة' : 'Structured Curriculum'}
                        </h3>
                        <p className="sat-why-item-desc">
                            {isAr
                                ? 'خارطة طريق تعليمية منهجية تبدأ من ترسيخ الأساسيات وحتى إتقان الامتحانات وتحقيق أعلى الدرجات.'
                                : 'A step-by-step pedagogical roadmap from foundational mastery to exam excellence.'}
                        </p>
                    </div>

                    {/* Item 03 */}
                    <div className="sat-why-item">
                        <div className="sat-why-number-badge">03</div>
                        <div className="sat-why-icon-circle">
                            <Users size={24} />
                        </div>
                        <h3 className="sat-why-item-title">
                            {isAr ? 'مجموعات تدريبية مصغرة' : 'Micro-Batch Focus'}
                        </h3>
                        <p className="sat-why-item-desc">
                            {isAr
                                ? 'مجموعات صغيرة تفاعلية تضمن اهتماماً شخصياً وسرعة ملائمة لكل طالب لحل كافة الاستفسارات.'
                                : 'Small interactive cohorts ensuring dedicated attention and customized pace for each learner.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyNitaq;

