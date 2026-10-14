import { Link } from '../i18n/Link';
import { useLanguage } from '../i18n/context';
import { Phone, Mail, MapPin, Clock, Youtube, Instagram, Facebook, Linkedin, MessageCircle, ExternalLink } from 'lucide-react';
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

                                {/* Official Social Media Channels */}
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '15px', borderRadius: '16px' }}>
                                        <Youtube size={24} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '8px' }}>
                                            {isAr ? 'قنواتنا الرسمية على وسائل التواصل' : 'Official Social Channels'}
                                        </h4>
                                        <div style={{ display: 'grid', gap: '10px' }}>
                                            <a
                                                href="https://www.youtube.com/@NitaqAcademy"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px', background: '#FEF2F2', border: '1px solid #FEE2E2', color: '#DC2626', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <Youtube size={20} />
                                                    <span>YouTube: @NitaqAcademy</span>
                                                </span>
                                                <ExternalLink size={15} />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/nitaqtraining"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderRadius: '12px', background: '#FDF2F8', border: '1px solid #FCE7F3', color: '#DB2777', fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none' }}
                                            >
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                    <Instagram size={20} />
                                                    <span>Instagram: @nitaqtraining</span>
                                                </span>
                                                <ExternalLink size={15} />
                                            </a>
                                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
                                                <a
                                                    href="https://www.facebook.com/nitaqtraining"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '12px', background: '#EFF6FF', border: '1px solid #DBEAFE', color: '#2563EB', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}
                                                >
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <Facebook size={18} />
                                                        <span>Facebook</span>
                                                    </span>
                                                    <ExternalLink size={13} />
                                                </a>
                                                <a
                                                    href="https://www.linkedin.com/company/nitaqtraining"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '12px', background: '#F0F9FF', border: '1px solid #E0F2FE', color: '#0284C7', fontWeight: 600, fontSize: '0.92rem', textDecoration: 'none' }}
                                                >
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                        <Linkedin size={18} />
                                                        <span>LinkedIn</span>
                                                    </span>
                                                    <ExternalLink size={13} />
                                                </a>
                                            </div>
                                        </div>
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
                    <div style={{ background: 'white', padding: '60px 30px', borderRadius: '40px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.02)', boxShadow: '0 20px 60px rgba(0,0,0,0.03)' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>
                            {isAr ? <>تواصل وتعلّم <span className="text-gradient">معنا</span></> : <>Connect & Learn <span className="text-gradient">With Us</span></>}
                        </h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px', maxWidth: '640px', margin: '0 auto 40px' }}>
                            {isAr
                                ? 'تابع شروحاتنا ودروسنا المجانية على يوتيوب، أو تحدث مباشرة مع مستشارينا الأكاديميين عبر واتساب للحصول على استشارة فورية.'
                                : 'Subscribe to our free tutorials on YouTube or connect with our academic advisors on WhatsApp for immediate guidance.'}
                        </p>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '32px' }}>
                            <a
                                href="https://www.youtube.com/@NitaqAcademy"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#FF0000', color: 'white', fontSize: '1.1rem', padding: '18px 36px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', borderRadius: '16px', fontWeight: 600 }}
                            >
                                <Youtube size={22} />
                                {isAr ? 'قناة يوتيوب: @NitaqAcademy' : 'Subscribe on YouTube'}
                            </a>
                            <a
                                href="https://wa.me/971527569908"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{ background: '#25D366', color: 'white', fontSize: '1.1rem', padding: '18px 36px', display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', borderRadius: '16px', fontWeight: 600 }}
                            >
                                <MessageCircle size={22} />
                                {isAr ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp'}
                            </a>
                        </div>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            <span style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 500, marginRight: '6px' }}>
                                {isAr ? 'تابعنا أيضاً على:' : 'Also follow us on:'}
                            </span>
                            <a
                                href="https://www.instagram.com/nitaqtraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram @nitaqtraining"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '30px', background: '#F1F5F9', color: '#0F172A', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
                            >
                                <Instagram size={16} color="#E1306C" /> Instagram
                            </a>
                            <a
                                href="https://www.facebook.com/nitaqtraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook @nitaqtraining"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '30px', background: '#F1F5F9', color: '#0F172A', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
                            >
                                <Facebook size={16} color="#1877F2" /> Facebook
                            </a>
                            <a
                                href="https://www.linkedin.com/company/nitaqtraining"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Nitaq Academy"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '30px', background: '#F1F5F9', color: '#0F172A', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}
                            >
                                <Linkedin size={16} color="#0A66C2" /> LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
