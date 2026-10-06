import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import SEO from '../components/SEO';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const CorporateTrainings = () => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';

    return (
        <main>
            <SEO />
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav className="listing-hero-nav">
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>{isAr ? 'الرئيسية' : 'Home'}</Link> /
                            <span>{isAr ? 'التدريب المؤسسي' : 'Corporate Training'}</span>
                        </nav>
                        <h1>{isAr ? <>التطوير والتمكين <span className="text-gradient">المؤسسي</span></> : <>Corporate <span className="text-gradient">Enablement</span></>}</h1>
                        <p>
                            {isAr
                                ? 'حلول وبرامج تدريبية مخصصة للشركات والمؤسسات تهدف إلى رفع كفاءة فرق العمل، وتعزيز الإنتاجية، وتحقيق التميز التشغيلي في دولة الإمارات.'
                                : 'Customized training solutions designed to empower your workforce, enhance productivity, and drive organizational excellence.'}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="listing-grid-container">
                <div className="container">
                    <div className="corporate-grid">

                        {/* Information Section */}
                        <div className="corporate-info">
                            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '24px' }}>
                                {isAr ? <>طوّر قدرات <span className="text-gradient">فريق عملك</span></> : <>Empower Your <span className="text-gradient">Workforce</span></>}
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#64748b', marginBottom: '40px', lineHeight: '1.8' }}>
                                {isAr
                                    ? 'في أكاديمية نطاق، ندرك أن لكل مؤسسة أهدافاً وتحديات فريدة. نصمم برامجنا التدريبية المؤسسية خصيصاً لتواكب متطلبات الأعمال وتدعم مسيرة النمو في السوق الإماراتي والخليجي.'
                                    : 'At NITAQ, we understand that every organization is unique. Our corporate training programs are tailored to meet the specific challenges and goals of your business in the modern Middle Eastern market.'}
                            </p>

                            <div style={{ display: 'grid', gap: '24px' }}>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>{isAr ? 'مناهج مصممة خصيصاً' : 'Customized Curriculum'}</h4>
                                    <p style={{ color: '#64748b' }}>
                                        {isAr
                                            ? 'نصمم وحدات تدريبية متوافقة تماماً مع مجال عمل شركتكم لضمان أقصى فائدة وأثر تشغيلي مباشر.'
                                            : 'We design training modules specifically for your industry, ensuring maximum relevance and impact.'}
                                    </p>
                                </div>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>{isAr ? 'مدربون وممارسون خبراء' : 'Expert Facilitators'}</h4>
                                    <p style={{ color: '#64748b' }}>
                                        {isAr
                                            ? 'نخبة من المدربين المعتمدين والممارسين التنفيذيين ذوي الخبرة الإقليمية والدولية الواسعة.'
                                            : 'Our trainers are industry leaders with specialized practical expertise across global and regional markets.'}
                                    </p>
                                </div>
                                <div style={{ background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                                    <h4 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '12px' }}>{isAr ? 'نتائج ملموسة وعائد حقيقي' : 'Measurable Results'}</h4>
                                    <p style={{ color: '#64748b' }}>
                                        {isAr
                                            ? 'نركز على التطبيق العملي والعائد الاستثماري على التدريب ROI مع تقارير تقييم ومتابعة شاملة.'
                                            : 'We focus on skill application and ROI, providing comprehensive post-training assessments and support.'}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="corporate-form-card" style={{ background: 'white', padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', boxShadow: '0 40px 100px -30px rgba(0,0,0,0.08)' }}>
                            <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '8px' }}>
                                {isAr ? 'طلب عرض تدريبي مخصص' : 'Request a Proposal'}
                            </h3>
                            <p style={{ color: '#64748b', marginBottom: '32px' }}>
                                {isAr
                                    ? 'أطلعنا على احتياجات مؤسستكم التدريبية وسنوافيكم بخطة تدريبية مخصصة وعرض أسعار تنافسي.'
                                    : "Tell us about your training needs and we'll get back to you with a tailored plan."}
                            </p>

                            <form style={{ display: 'grid', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                                        {isAr ? 'اسم الشركة / المؤسسة' : 'Company Name'}
                                    </label>
                                    <input type="text" placeholder={isAr ? 'اسم شركتك أو جهتك' : 'Your Organization'} style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                                        {isAr ? 'البريد الإلكتروني للعمل' : 'Work Email'}
                                    </label>
                                    <input type="email" placeholder="email@company.com" style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>
                                        {isAr ? 'المجال التدريبي المطلوب' : 'Training Interest'}
                                    </label>
                                    <select style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}>
                                        <option>{isAr ? 'القيادة والإدارة الاستراتيجية' : 'Leadership & Management'}</option>
                                        <option>{isAr ? 'التحول الرقمي والذكاء الاصطناعي' : 'Digital Transformation'}</option>
                                        <option>{isAr ? 'المهارات الشخصية والتواصل المؤسسي' : 'Soft Skills & Communication'}</option>
                                        <option>{isAr ? 'المحاسبة والضرائب والامتثال' : 'Finance & Compliance'}</option>
                                        <option>{isAr ? 'مجال آخر' : 'Other'}</option>
                                    </select>
                                </div>
                                <button 
                                    type="button"
                                    className="btn btn-primary" 
                                    style={{ width: '100%', marginTop: '10px' }}
                                    onClick={() => trackEvent(ANALYTICS_EVENTS.FORM, 'corporate_consultation_click')}
                                >
                                    {isAr ? 'طلب استشارة مجانية' : 'Get Free Consultation'}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div className="content-card" style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '25px', textAlign: 'center' }}>
                            {isAr ? <>الأسئلة الشائعة حول <span className="text-gradient">التدريب المؤسسي</span></> : <>Corporate Training <span className="text-gradient">FAQs</span></>}
                        </h2>
                        <div className="faq-accordion-group">
                            <details className="faq-accordion">
                                <summary>{isAr ? 'ما هو التدريب المؤسسي في أكاديمية نطاق؟' : 'What is corporate training at NITAQ ACADEMY?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'برامج تدريبية مخصصة للمؤسسات مصممة لرفع كفاءة الموظفين، وتعزيز الإنتاجية وتطوير المهارات القيادية وفق احتياجات العمل الفعلية.'
                                            : 'Corporate training programs are customized courses designed to improve employee skills, productivity, and leadership within organizations.'}
                                    </p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>{isAr ? 'ما هي أبرز المجالات التدريبية المتاحة؟' : 'What topics are covered?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'تشمل المجالات: القيادة والإدارة، المبيعات والتفاوض، المالية والضرائب، الموارد البشرية، الذكاء الاصطناعي، والتسويق الرقمي.'
                                            : 'Topics include leadership, communication, finance, HR, digital skills, and business development.'}
                                    </p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>{isAr ? 'هل يمكن تصميم وتعديل المنهج التدريبي؟' : 'Can training be customized?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'نعم، يتم تفصيل كافة الدورات بناءً على أهداف الشركة وتحدياتها الخاصة وحجم فريق العمل.'
                                            : 'Yes, all programs are tailored to the company’s specific needs and goals.'}
                                    </p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>{isAr ? 'أين يُعقد التدريب؟' : 'Is training conducted onsite?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'يمكن عقد التدريب في مقر شركتكم (Onsite)، أو في قاعات أكاديمية نطاق الحديثة في الشارقة، أو عبر الإنترنت بشكل تفاعلي.'
                                            : 'Yes, training can be conducted onsite or at the institute depending on requirements.'}
                                    </p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>{isAr ? 'من يمكنه الاستفادة من التدريب المؤسسي؟' : 'Who can enroll in corporate training?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'الشركات الناشئة، والشركات الصغيرة والمتوسطة، والشركات الكبرى والمؤسسات الحكومية والخاصة الراغبة في ترقية مهارات كوادرها.'
                                            : 'Businesses, startups, and organizations looking to upskill their workforce can enroll.'}
                                    </p>
                                </div>
                            </details>
                            <details className="faq-accordion">
                                <summary>{isAr ? 'ما هي الفوائد العائدة على المؤسسة؟' : 'What are the benefits?'}</summary>
                                <div className="faq-accordion-content">
                                    <p>
                                        {isAr
                                            ? 'تحسن مباشر في كفاءة الأداء، وانسجام أعلى بين فرق العمل، وتقليل الأخطاء التشغيلية، ومواكبة متطلبات التحول الرقمي والامتثال.'
                                            : 'Improved performance, better team collaboration, and enhanced leadership skills.'}
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CorporateTrainings;
