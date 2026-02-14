import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer-minimal">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">

                        <div style={{ marginTop: '0px', marginBottom: '0px' }}>
                            <img src="/images/whatsapp-img-3.png" alt="SPEA Authorized" style={{ height: '70px', width: 'auto', objectFit: 'contain' }} loading="lazy" />
                        </div>
                        <p>Empowering the next generation of professionals in the UAE.</p>
                    </div>
                    <div className="footer-nav">
                        <div>
                            <h4>Test Preparations</h4>
                            <Link to="/academic-excellence">Academic Excellence</Link>
                            <Link to="/foundation-jee-neet">Foundation JEE/NEET</Link>
                            <Link to="/sat-preparation">SAT Prep</Link>
                            <Link to="/gmat-preparation">GMAT Prep</Link>
                            <Link to="/gre-preparation">GRE Prep</Link>
                            <Link to="/ai-robotics-kids">AI & Robotics for Kids</Link>
                        </div>
                        <div>
                            <h4>Certifications</h4>
                            <Link to="/finance-courses">Finance (ACCA/CMA)</Link>
                            <Link to="/uae-vat">UAE VAT</Link>
                            <Link to="/uae-corporate-tax">UAE Corporate Tax</Link>
                            <Link to="/ai-course">AI Course</Link>
                            <Link to="/power-bi-excel">Power BI & Excel</Link>
                            <Link to="/chrm">CHRM</Link>
                            <Link to="/hrm-courses">HRM</Link>
                            <Link to="/sales-negotiations">Sales & Negotiations</Link>
                            <Link to="/marketing-training">Marketing</Link>
                        </div>
                        <div>
                            <h4>Languages & More</h4>
                            <Link to="/spoken-arabic">Spoken Arabic</Link>
                            <Link to="/spoken-english">Spoken English</Link>
                            <Link to="/french">French</Link>
                            <Link to="/german">German</Link>
                            <Link to="/spanish">Spanish</Link>
                            <Link to="/ielts-course">IELTS</Link>
                            <Link to="/pte-course">PTE</Link>
                            <Link to="/toefl-course">TOEFL</Link>
                        </div>
                        <div>
                            <h4>Support</h4>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/enquiry">Enrolment Form</Link>
                            <Link to="/about">About Nitaq</Link>
                        </div>
                        <div>
                            <h4>Get in Touch</h4>
                            <li style={{ fontSize: '0.95rem' }}>Office 103, Floor F1,<br />Abu Khamseen Tower,<br />Al Majaz 3, Sharjah</li>
                            <li style={{ fontSize: '0.95rem', marginTop: '10px' }}>+971 54 572 3181</li>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Nitaq Training Center. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                        <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
