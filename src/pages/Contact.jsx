import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const Contact = () => {

    return (
        <main>
            {/* Premium Light Page Hero */}
            <section className="listing-hero">
                <div className="container">
                    <div className="listing-hero-content">
                        <nav className="listing-hero-nav">
                            <Link to="/" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Home</Link> /
                            <span>Contact Us</span>
                        </nav>
                        <h1>Get in <span className="text-gradient">Touch</span></h1>
                        <p>
                            Have questions about our programs? We're here to help you navigate your educational journey.
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
                            <h2 style={{ fontSize: '2.5rem', color: '#0f172a', marginBottom: '24px' }}>Visit Our <span className="text-gradient">Center</span></h2>
                            <p style={{ fontSize: '1.15rem', color: '#64748b', marginBottom: '40px', lineHeight: '1.8' }}>
                                We are located in the heart of Sharjah, providing easy access for students and professionals across the Northern Emirates.
                            </p>

                            <div style={{ display: 'grid', gap: '30px' }}>
                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-color)', padding: '15px', borderRadius: '16px' }}>
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>Our Address</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>Office 402, Al Qasimi Building,<br />Al Majaz 3, Sharjah, UAE</p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(43, 187, 173, 0.1)', color: 'var(--accent-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>Contact Numbers</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            <a href="tel:+971545723181">+971 54 572 3181</a><br />
                                            <a href="tel:+97165500000">+971 6 550 0000</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(46, 125, 50, 0.1)', color: 'var(--primary-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>Email Support</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>
                                            <a href="mailto:info@nitaq.ae">info@nitaq.ae</a><br />
                                            <a href="mailto:admissions@nitaq.ae">admissions@nitaq.ae</a>
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                    <div style={{ background: 'rgba(43, 187, 173, 0.1)', color: 'var(--accent-color)', padding: '15px', borderRadius: '16px' }}>
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.2rem', color: '#0f172a', marginBottom: '5px' }}>Working Hours</h4>
                                        <p style={{ color: '#64748b', lineHeight: 1.5 }}>Monday - Saturday: 9:00 AM - 9:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Box */}
                            <div style={{ marginTop: '40px', borderRadius: '24px', overflow: 'hidden', height: '300px', border: '1px solid #f1f5f9', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8118671681285!2d55.3857!3d25.3259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE5JzMzLjIiTiA1NcKwMjMnMDguNSJF!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
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
                                    <h3 style={{ fontSize: '1.8rem', color: '#0f172a', marginBottom: '8px' }}>Send a <span className="text-gradient">Message</span></h3>
                                    <p style={{ color: '#64748b' }}>Fill out the form below and our team will respond within 24 hours.</p>
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
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0f172a' }}>Prefer an Instant <span className="text-gradient">Chat?</span></h2>
                        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px' }}>Our advisors are active on WhatsApp for quick responses.</p>
                        <a href="https://wa.me/971545723181" className="btn" style={{ background: '#25D366', color: 'white', fontSize: '1.2rem', padding: '20px 40px' }}>
                            Message us on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
