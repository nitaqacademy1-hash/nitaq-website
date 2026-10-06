import { useState } from 'react';
import { useLanguage } from '../i18n/context';
import { trackEvent, ANALYTICS_EVENTS } from '../utils/analytics';

const ContactForm = ({ mode = 'contact' }) => {
    const { lang } = useLanguage();
    const isAr = lang === 'ar';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: mode === 'contact' ? '' : (isAr ? 'استفسار عن الدورات' : 'Course Enquiry'),
        course: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Replace this with your actual Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxoF4VKvsRxBoTfwCq7KyK7llaJ7Q-dwoS9MVyRl8Cri0uWiWh0vuBNZL-BbWNwhluJ/exec';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({
            type: 'info',
            message: isAr ? 'جاري إرسال رسالتك...' : 'Sending your message...'
        });

        try {
            // Using URLSearchParams for easier integration with Apps Script e.parameter
            const params = new URLSearchParams();
            Object.keys(formData).forEach(key => {
                if (formData[key]) params.append(key, formData[key]);
            });
            params.append('timestamp', new Date().toISOString());
            params.append('form_type', mode);

            let delivered = false;
            try {
                const response = await fetch(SCRIPT_URL, { method: 'POST', body: params });
                if (!response.ok) {
                    throw new Error(`Apps Script responded ${response.status}`);
                }
                delivered = true;
            } catch (corsError) {
                if (corsError instanceof TypeError) {
                    // CORS-blocked read; send blind rather than lose the lead.
                    await fetch(SCRIPT_URL, { method: 'POST', body: params, mode: 'no-cors' });
                    delivered = true;
                } else {
                    throw corsError;
                }
            }

            if (delivered) {
                setStatus({
                    type: 'success',
                    message: isAr
                        ? 'شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسيتواصل معك مستشارنا الأكاديمي قريباً.'
                        : 'Thank you! Your message has been sent successfully.'
                });
                trackEvent(ANALYTICS_EVENTS.FORM, `form_submit_${mode}`);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: mode === 'contact' ? '' : (isAr ? 'استفسار عن الدورات' : 'Course Enquiry'),
                    course: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            trackEvent(ANALYTICS_EVENTS.FORM, `form_error_${mode}`);
            setStatus({
                type: 'error',
                message: isAr
                    ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مجدداً أو الاتصال بنا مباشرة على 9908 756 52 971+ / واتساب 9908 756 52 971+.'
                    : 'Something went wrong and your message was NOT sent. Please try again, or call us on +971 52 756 9908 / WhatsApp +971 52 756 9908.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-form-container">
            {status.message && (
                <div className={`form-status ${status.type}`} style={{
                    padding: '15px',
                    borderRadius: '10px',
                    marginBottom: '20px',
                    backgroundColor: status.type === 'success' ? '#dcfce7' : status.type === 'info' ? '#e0f2fe' : '#fee2e2',
                    color: status.type === 'success' ? '#166534' : status.type === 'info' ? '#075985' : '#991b1b',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    textAlign: 'center'
                }}>
                    {status.message}
                </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-name`}>
                            {isAr ? 'الاسم الكامل' : 'Full Name'}
                        </label>
                        <input
                            id={`cf-${mode}-name`}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder={isAr ? 'محمد أحمد' : 'John Doe'}
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-email`}>
                            {isAr ? 'البريد الإلكتروني' : 'Email Address'}
                        </label>
                        <input
                            id={`cf-${mode}-email`}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="name@example.com"
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-phone`}>
                            {isAr ? 'رقم الهاتف / واتساب' : 'Phone Number'}
                        </label>
                        <input
                            id={`cf-${mode}-phone`}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+971 5X XXX XXXX"
                            dir="ltr"
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                    {mode === 'contact' ? (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-subject`}>
                                {isAr ? 'موضوع الرسالة' : 'Subject'}
                            </label>
                            <input
                                id={`cf-${mode}-subject`}
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder={isAr ? 'كيف يمكننا مساعدتك؟' : 'How can we help?'}
                                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                            />
                        </div>
                    ) : (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-course`}>
                                {isAr ? 'الدورة أو البرنامج المطلوب' : 'Course Interested In'}
                            </label>
                            <select
                                id={`cf-${mode}-course`}
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                            >
                                <option value="">{isAr ? 'اختر دورة أو برنامجاً' : 'Select a course'}</option>
                                <optgroup label={isAr ? 'التحضير للاختبارات الدولية' : 'Test Preparations'}>
                                    <option value="IELTS">{isAr ? 'التحضير لاختبار IELTS' : 'IELTS Preparation'}</option>
                                    <option value="SAT">{isAr ? 'التحضير لاختبار Digital SAT' : 'SAT Preparation'}</option>
                                    <option value="GRE">{isAr ? 'التحضير لاختبار GRE' : 'GRE Preparation'}</option>
                                    <option value="GMAT">{isAr ? 'التحضير لاختبار GMAT' : 'GMAT Coaching'}</option>
                                    <option value="TOEFL">{isAr ? 'التحضير لاختبار TOEFL iBT' : 'TOEFL Preparation'}</option>
                                    <option value="PTE">{isAr ? 'اختبار PTE الأكاديمي' : 'PTE Academic'}</option>
                                    <option value="JEE-NEET">{isAr ? 'البرنامج التأسيسي JEE / NEET' : 'Foundation JEE/NEET'}</option>
                                    <option value="AcademicExcellence">{isAr ? 'الدروس الخصوصية والتقوية المدرسية' : 'Academic Excellence'}</option>
                                </optgroup>
                                <optgroup label={isAr ? 'الشهادات والبرامج المهنية' : 'Professional Certifications'}>
                                    <option value="ACCA">{isAr ? 'شهادة ACCA البريطانية' : 'ACCA (UK)'}</option>
                                    <option value="CMA">{isAr ? 'شهادة CMA الأمريكية' : 'CMA (US)'}</option>
                                    <option value="CPA">{isAr ? 'شهادة CPA الأمريكية' : 'CPA (US)'}</option>
                                    <option value="UAE-VAT">{isAr ? 'ضريبة القيمة المضافة UAE VAT' : 'UAE VAT'}</option>
                                    <option value="Corporate-Tax">{isAr ? 'ضريبة الشركات في الإمارات' : 'UAE Corporate Tax'}</option>
                                    <option value="AI-Mastery">{isAr ? 'دبلوم الذكاء الاصطناعي وتعلم الآلة' : 'AI Mastery (Basic-Adv)'}</option>
                                    <option value="PowerBI-Excel">{isAr ? 'تحليل البيانات Power BI & Excel' : 'Power BI & Excel'}</option>
                                    <option value="Cybersecurity">{isAr ? 'الأمن السيبراني والاختراق الأخلاقي' : 'Cybersecurity & Ethical Hacking'}</option>
                                    <option value="CHRM">{isAr ? 'إدارة الموارد البشرية CHRM' : 'CHRM'}</option>
                                    <option value="HRM">{isAr ? 'الممارس المحترف للموارد البشرية HRM' : 'HRM Professional'}</option>
                                    <option value="CPCD">{isAr ? 'التطوير المهني والاستشارات CPCD' : 'CPCD Professional'}</option>
                                    <option value="Sales-Negotiations">{isAr ? 'المبيعات والتفاوض التجاري' : 'Sales & Negotiations'}</option>
                                    <option value="Marketing">{isAr ? 'التسويق وإدارة العلامات التجارية' : 'Marketing Training'}</option>
                                    <option value="Digital-Marketing">{isAr ? 'دبلوم التسويق الرقمي الشامل' : 'Digital Marketing Course'}</option>
                                    <option value="Data-Management">{isAr ? 'إدارة البيانات ونظم المعلومات' : 'Data Management'}</option>
                                    <option value="Soft-Skills">{isAr ? 'تطوير المهارات الشخصية والقيادة' : 'Soft Skills Training'}</option>
                                    <option value="Kids-Robotics">{isAr ? 'الروبوت والبرمجة للأطفال' : 'AI & Robotics for Kids'}</option>
                                </optgroup>
                                <optgroup label={isAr ? 'تدريب اللغات الحية' : 'Language Trainings'}>
                                    <option value="Spoken-English">{isAr ? 'دورة اللغة الإنجليزية والمحادثة' : 'Spoken English'}</option>
                                    <option value="Spoken-Arabic">{isAr ? 'دورة اللغة العربية والمحادثة' : 'Spoken Arabic'}</option>
                                    <option value="French">{isAr ? 'دورة اللغة الفرنسية (DELF)' : 'French Language'}</option>
                                    <option value="Spanish">{isAr ? 'دورة اللغة الإسبانية (DELE)' : 'Spanish Language'}</option>
                                    <option value="German">{isAr ? 'دورة اللغة الألمانية (Goethe)' : 'German Language'}</option>
                                </optgroup>
                            </select>
                        </div>
                    )}
                </div>
                <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }} htmlFor={`cf-${mode}-message`}>
                        {isAr ? 'تفاصيل رسالتك أو استفسارك' : 'Your Message'}
                    </label>
                    <textarea
                        id={`cf-${mode}-message`}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder={isAr ? 'اكتب رسالتك أو استفسارك هنا...' : 'Write your message here...'}
                        style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem', resize: 'vertical' }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{
                        width: '100%',
                        marginTop: '10px',
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                    }}
                >
                    {isSubmitting ? (isAr ? 'جاري الإرسال...' : 'Sending...') : (isAr ? 'إرسال الرسالة الآن' : 'Send Message Now')}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
