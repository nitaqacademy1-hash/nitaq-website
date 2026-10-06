import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const Contact = () => {
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
                            <span>{isAr ? 'تواصل معنا' : 'Contact Us'}</span>
                        </nav>
                        <h1>{isAr ? <>تواصل <span className="text-gradient">معنا</span></> : <>Get in <span className="text-gradient">Touch</span></>}</h1>
                        <p>
                            {isAr
                                ? 'هل لديك استفسارات حول برامجنا التعليمية؟ نحن هنا لإرشادك ومساعدتك في اختيار المسار الأكاديمي أو المهني الأنسب.'
                                : "Have questions about our programs? We're here to help you navigate your educational journey."}
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content Section */}
            <section className="listing-grid-container" style={{ paddingBottom: '120px' }}>
                <div className="container">
                    <div className="corporate-grid">

                        {/* Contact Info Side */}
                        <div className="contact-info-side">
                            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '24px' }}>
                                {isAr ? <>تفضل <span className="text-gradient">بزيارتنا</span></> : <>Visit <span className="text-gradient">Us</span></>}
                            </h2>
                            <p style={{ fontSize: '1.15rem', color: '#64748b', marginBottom: '40px', lineHeight: '1.8' }}>
                                {isAr
                                    ? 'يقع مقرنا في قلب الشارقة، مما يسهل وصول الطلاب والمهنيين من كافة أرجاء الشارقة والإمارات الشمالية ودبي.'
                                    : 'We are located in the heart of Sharjah, providing easy access for students and professionals across the Northern Emirates.'}
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-color)', padding: '15px', borderRadius: '16px' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>{isAr ? 'عنوان المقر' : 'Our Address'}</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            {isAr ? (
                                                <>برج أبو خمسين - مكتب F103، الطابق F1 - المجاز 3 - المجاز - الشارقة - الإمارات العربية المتحدة<br /><span style={{ fontSize: '0.85rem' }}>مرخص باسم شركة نطاق لخدمات التعليم المساند ذ.م.م</span></>
                                            ) : (
                                                <>Abu Khamseen Tower - Office : F103, Floor F1 - Al Majaz 3 - Al Majaz - Sharjah - United Arab Emirates<br /><span style={{ fontSize: '0.85rem' }}>Registered as Nitaq Supportive Education Services LLC</span></>
                                            )}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(43, 187, 173, 0.1)', color: 'var(--accent-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>{isAr ? 'أرقام التواصل' : 'Contact Numbers'}</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            <a href="tel:+971527569908" dir="ltr">+971 52 756 9908</a> {isAr ? '(اتصال / واتساب)' : '(Call & WhatsApp)'}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>{isAr ? 'البريد الإلكتروني' : 'Email Support'}</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            <a href="mailto:info@nitaqacademy.com">info@nitaqacademy.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(43, 187, 173, 0.1)', color: 'var(--accent-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>{isAr ? 'ساعات العمل' : 'Working Hours'}</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            {isAr ? (
                                                <>من الإثنين إلى السبت: 9:00 صباحاً - 9:00 مساءً<br />الأحد: مغلق</>
                                            ) : (
                                                <>Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: Closed</>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Box */}
                            <div style={{ marginTop: '40px', borderRadius: '24px', overflow: 'hidden', height: '300px', border: '1px solid #f1f5f9', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <iframe
                                    src="https://www.google.com/maps?q=Abu%20Khamseen%20Tower%2C%20Al%20Majaz%203%2C%20Sharjah&output=embed"
                                    title="Map of Abu Khamseen Tower, Al Majaz 3, Sharjah"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Contact Form Side */}
                        <div className="contact-form-side">
                            <div style={{ background: 'white', padding: '48px', borderRadius: '32px', border: '1px solid #f1f5f9', boxShadow: '0 40px 100px -30px rgba(0,0,0,0.08)' }}>
                                <div style={{ marginBottom: '32px' }}>
                                    <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '8px' }}>
                                        {isAr ? <>أرسل <span className="text-gradient">رسالة</span></> : <>Send a <span className="text-gradient">Message</span></>}
                                    </h3>
                                    <p style={{ color: '#64748b' }}>
                                        {isAr ? 'املأ النموذج أدناه وسيقوم فريقنا بالرد عليك خلال 24 ساعة.' : 'Fill out the form below and our team will respond within 24 hours.'}
                                    </p>
                                </div>

                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Social Connect CTA */}
            <section className="section-padding" style={{ background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
                <div className="container">
                    <div style={{ background: 'white', padding: '60px', borderRadius: '40px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>
                            {isAr ? <>تفضل المحادثة <span className="text-gradient">الفورية؟</span></> : <>Prefer an Instant <span className="text-gradient">Chat?</span></>}
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px' }}>
                            {isAr ? 'مستشارونا متاحون عبر واتساب للرد السريع على استفساراتك.' : 'Our advisors are active on WhatsApp for quick responses.'}
                        </p>
                        <a href="https://wa.me/971527569908" className="btn" style={{ background: '#25D366', color: 'white', fontSize: '1.2rem', padding: '20px 40px' }}>
                            {isAr ? 'تواصل معنا عبر واتساب' : 'Message us on WhatsApp'}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
