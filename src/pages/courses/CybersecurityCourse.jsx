import CourseLayout from '../../components/CourseLayout';
import SEO from '../../components/SEO';
import WhyNitaq from '../../components/WhyNitaq';
import { trackEvent, ANALYTICS_EVENTS } from '../../utils/analytics';

const CybersecurityCourse = () => {
    const infoData = {
        "Certification": "SPEA Licensed",
        "Duration": "11 Weeks (45 Hours)",
        "Mode": "Online | In-Person",
        "Level": "Professional | Beginner Friendly",
        "Sessions": "22 Sessions (2x/week)"
    };

    return (
        <>
            <SEO />
            <CourseLayout
                title="Cybersecurity Foundations & Ethical Hacking"
                subtitle="CyberShield Program (NITAQ-CS-101) - Learn to think like a hacker before a hacker thinks about you. The most practical cybersecurity program in Sharjah, built for complete beginners."
                infoData={infoData}
            >
                {/* Highlights Banner */}
                <div className="award-banner" style={{ marginBottom: '30px', padding: '15px 25px', background: '#f8fafc', borderRadius: '15px', border: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                    <span style={{ fontWeight: 600, color: '#1e293b' }}>Tools Covered:</span>
                    <span style={{ color: '#0f172a', background: '#e2e8f0', padding: '2px 10px', borderRadius: '20px', fontSize: '0.9rem' }}>Kali Linux</span>
                    <span style={{ color: '#0f172a', background: '#e2e8f0', padding: '2px 10px', borderRadius: '20px', fontSize: '0.9rem' }}>Metasploit</span>
                    <span style={{ color: '#0f172a', background: '#e2e8f0', padding: '2px 10px', borderRadius: '20px', fontSize: '0.9rem' }}>Wireshark</span>
                    <span style={{ color: '#0f172a', background: '#e2e8f0', padding: '2px 10px', borderRadius: '20px', fontSize: '0.9rem' }}>Nmap</span>
                    <span style={{ color: '#0f172a', background: '#e2e8f0', padding: '2px 10px', borderRadius: '20px', fontSize: '0.9rem' }}>Burp Suite</span>
                </div>

                {/* Why This Matters */}
                <div className="content-card">
                    <h2>The Threat Is Real. <span className="text-gradient">The Skills Are Yours.</span></h2>
                    <div className="overview-text">
                        <p style={{ marginBottom: '15px' }}>
                            Every professional who uses a device is a target. The CyberShield program teaches you how attacks happen — then gives you the practical tools to stop them. Starting from zero. No IT background needed.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
                            <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '10px' }}>71%</h3>
                                <p style={{ fontSize: '0.9rem', color: '#475569' }}>of UAE companies experienced a cyberattack in the past year</p>
                            </div>
                            <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '10px' }}>94%</h3>
                                <p style={{ fontSize: '0.9rem', color: '#475569' }}>of attacks begin with phishing — human error is the entry point</p>
                            </div>
                            <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)', marginBottom: '10px' }}>#1</h3>
                                <p style={{ fontSize: '0.9rem', color: '#475569' }}>most targeted region in the Middle East for cyber attacks</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who is this for */}
                <div className="content-card">
                    <h2>Who Is This For? <span className="text-gradient">No Experience Required. Seriously.</span></h2>
                    <ul className="styled-list" style={{ marginTop: '20px' }}>
                        <li><strong>Professionals</strong> who handle sensitive data and want to protect it</li>
                        <li><strong>Business Owners</strong> who want to secure their operations</li>
                        <li><strong>Fresh Graduates</strong> entering the cybersecurity field</li>
                        <li><strong>IT Staff</strong> who want to specialise in security</li>
                        <li><strong>Curious Minds</strong> who want to understand how hacking works</li>
                    </ul>
                    <p style={{ marginTop: '20px', fontWeight: 600, color: 'var(--primary-color)' }}>✓ No IT background required — just bring a laptop with 8GB RAM</p>
                </div>

                {/* Modules */}
                <div className="content-card">
                    <h2>From Zero to <span className="text-gradient">Ethical Hacker</span></h2>
                    <p style={{ marginBottom: '30px', color: '#64748b' }}>6 Comprehensive Modules • 45 Hours of Practical Training</p>
                    
                    <div className="tracks-grid">
                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>M-01: Cybersecurity Foundations</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>10 hrs | 5 sessions</p>
                            <ul className="styled-list">
                                <li>Internet, IP, DNS and protocols</li>
                                <li>Black, White & Grey hat hackers</li>
                                <li>The Cyber Kill Chain</li>
                                <li>UAE Cybersecurity Law</li>
                                <li>Setting up Kali Linux lab</li>
                            </ul>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>M-02: Network Security</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>10 hrs | 5 sessions</p>
                            <ul className="styled-list">
                                <li>TCP/IP and OSI model</li>
                                <li>Port scanning with Nmap</li>
                                <li>Wireless & Wi-Fi attacks</li>
                                <li>Packet analysis with Wireshark</li>
                                <li>Firewalls and IDS/IPS</li>
                            </ul>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>M-03: System Security</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>8 hrs | 4 sessions</p>
                            <ul className="styled-list">
                                <li>Password hashing & cracking</li>
                                <li>Vulnerability scanning</li>
                                <li>Encryption and SSL/TLS</li>
                                <li>Mid-Course Practical Assessment</li>
                            </ul>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>M-04: Web App Security</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>8 hrs | 4 sessions</p>
                            <ul className="styled-list">
                                <li>Ethical hacking methodology</li>
                                <li>OWASP Top 10 vulnerabilities</li>
                                <li>SQL Injection & XSS attacks</li>
                                <li>Burp Suite web traffic manipulation</li>
                            </ul>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--accent-color)' }}>
                            <h3 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>M-05: Penetration Testing</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>6 hrs | 3 sessions</p>
                            <ul className="styled-list">
                                <li>Metasploit Framework exploitation</li>
                                <li>Post-exploitation & privilege escalation</li>
                                <li>Writing professional pentest reports</li>
                            </ul>
                        </div>

                        <div className="feature-item" style={{ borderTop: '4px solid var(--primary-color)' }}>
                            <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>M-06: Incident Response</h3>
                            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '15px', fontWeight: 600 }}>8 hrs | 4 sessions</p>
                            <ul className="styled-list">
                                <li>Incident response lifecycle</li>
                                <li>MITRE ATT&CK Framework</li>
                                <li>Final Project: Full pentest</li>
                                <li>Professional client briefing</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Career Pathways */}
                <div className="content-card" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h2>Where This <span className="text-gradient">Takes You Next</span></h2>
                    <p style={{ marginBottom: '20px' }}>Cybersecurity is the fastest-growing field in the UAE job market. CEH-qualified analysts earn AED 10,000–16,000/month. This program is your entry point.</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid #ef4444' }}>
                            <h4 style={{ margin: 0, color: '#0f172a' }}>Junior Penetration Tester</h4>
                            <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#64748b' }}>AED 8,000 – 12,000 / month • Next: CompTIA Security+ → CEH</p>
                        </div>
                        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid #eab308' }}>
                            <h4 style={{ margin: 0, color: '#0f172a' }}>SOC Analyst — Level 1</h4>
                            <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#64748b' }}>AED 7,000 – 10,000 / month • Next: CompTIA CySA+</p>
                        </div>
                        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid #22c55e' }}>
                            <h4 style={{ margin: 0, color: '#0f172a' }}>Cybersecurity Consultant</h4>
                            <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#64748b' }}>AED 15,000 – 25,000 / month • Next: CEH → CISSP</p>
                        </div>
                        <div style={{ background: 'white', padding: '15px 20px', borderRadius: '10px', borderLeft: '4px solid #3b82f6' }}>
                            <h4 style={{ margin: 0, color: '#0f172a' }}>IT Security Officer</h4>
                            <p style={{ margin: '5px 0 0', fontSize: '0.9rem', color: '#64748b' }}>AED 12,000 – 18,000 / month • Next: CompTIA Security+ → CISM</p>
                        </div>
                    </div>
                </div>

                {/* Pricing & Certification */}
                <div className="outcomes-grid">
                    <div className="content-card" style={{ marginBottom: 0, border: '2px solid var(--primary-color)' }}>
                        <h3 style={{ fontSize: '1.4rem' }}>Tuition & Investment</h3>
                        <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary-color)', margin: '15px 0' }}>AED 3,990</p>
                        <ul className="styled-list">
                            <li>Inclusive of 5% VAT</li>
                            <li>All course materials included</li>
                            <li>All software tools are free</li>
                            <li>Instalment plan available on request</li>
                            <li>Maximum 12 students per cohort</li>
                        </ul>
                    </div>
                    <div className="content-card" style={{ marginBottom: 0 }}>
                        <h3 style={{ fontSize: '1.4rem' }}>Official Certification</h3>
                        <p style={{ marginBottom: '15px' }}>Every graduate receives an official Certificate of Achievement from Nitaq Academy.</p>
                        <ul className="styled-list">
                            <li>Licensed by SPEA (Sharjah Private Education Authority)</li>
                            <li>Validates 45 hours of practical training</li>
                            <li>Covers network security, web app attacks & pentesting</li>
                            <li>Enhances LinkedIn profile and CV</li>
                        </ul>
                    </div>
                </div>

                {/* Registration CTA */}
                <div style={{ textAlign: 'center', marginTop: '40px', padding: '40px', background: '#0f172a', borderRadius: '20px', color: 'white' }}>
                    <h2 style={{ color: 'white', marginBottom: '15px' }}>Register Now — Seats Limited</h2>
                    <p style={{ marginBottom: '30px', color: '#94a3b8' }}>Each cohort is capped at 12 students. Once seats fill, the next batch may be weeks away.</p>
                    <a 
                        href="https://wa.me/971527569908?text=Hi,%20I%20am%20interested%20in%20the%20CyberShield%20Cybersecurity%20Program."
                        className="btn btn-primary"
                        style={{ background: '#22c55e', borderColor: '#22c55e', fontSize: '1.1rem', padding: '15px 30px' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent(ANALYTICS_EVENTS.WHATSAPP, 'cybersecurity_course_register')}
                    >
                        Reserve Your Seat on WhatsApp
                    </a>
                </div>

            </CourseLayout>
        </>
    );
};

export default CybersecurityCourse;
