import React from 'react';
import SEO from '../../components/SEO';

const PrivacyPolicy = () => {
    return (
        <main className="legal-page section-padding">
            <SEO 
                title="Privacy Policy | Nitaq Academy Sharjah"
                description="Our privacy policy explains how Nitaq Academy collects, uses, and protects student information in compliance with UAE data protection standards."
                path="/privacy-policy"
            />
            <div className="container">
                <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                    <h1 style={{ color: '#2e7d32', marginBottom: '20px' }}>Privacy Policy – Nitaq Academy</h1>
                    <p style={{ color: '#6b7280', marginBottom: '40px' }}>Effective Date: 26/03/2026</p>

                    <p style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                        Nitaq Academy (“Company”, “we”, “our”, or “us”) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains in detail how we collect, use, store, disclose, and safeguard your information when you visit our website, enroll in our programs, or interact with us.
                    </p>
                    <p style={{ marginBottom: '40px', lineHeight: '1.8', fontWeight: 500 }}>
                        This policy applies to all users, students, parents/guardians, and visitors of our services.
                    </p>

                    {[
                        {
                            title: "1. Definitions",
                            content: (
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li><strong>Personal Data:</strong> Any information that identifies you directly or indirectly</li>
                                    <li><strong>User:</strong> Any individual accessing our services</li>
                                    <li><strong>Student:</strong> Any individual enrolled in our courses</li>
                                    <li><strong>Guardian/Parent:</strong> Legal representative of a minor</li>
                                    <li><strong>Services:</strong> Courses, training, website access, and related offerings</li>
                                </ul>
                            )
                        },
                        {
                            title: "2. Scope of Policy",
                            content: (
                                <>
                                    <p>This Privacy Policy applies to:</p>
                                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li>Website usage</li>
                                        <li>Offline and online enrollment</li>
                                        <li>Communication channels (email, phone, WhatsApp, social media)</li>
                                        <li>Third-party integrations used by Nitaq Academy</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            title: "3. Information We Collect",
                            content: (
                                <>
                                    <h4 style={{ margin: '15px 0' }}>3.1 Personal Identification Information</h4>
                                    <p>We may collect: Full name, Date of birth, Gender (optional), Email address, Phone number, Residential address, Emirates ID / Passport details (if required for certification or compliance).</p>
                                    
                                    <h4 style={{ margin: '15px 0' }}>3.2 Academic & Student Information</h4>
                                    <p>Grade/class level, School/college name, Academic performance data, Course progress and assessments, Attendance records.</p>
                                    
                                    <h4 style={{ margin: '15px 0' }}>3.3 Payment & Financial Information</h4>
                                    <p>Billing address, Transaction details, Payment method (processed securely via third-party providers).</p>
                                    <p style={{ fontStyle: 'italic', color: '#dc2626' }}>⚠️ We do not store full card details.</p>
                                    
                                    <h4 style={{ margin: '15px 0' }}>3.4 Technical & Usage Data</h4>
                                    <p>IP address, Device type and operating system, Browser type, Website usage behavior, Login data and timestamps.</p>
                                    
                                    <h4 style={{ margin: '15px 0' }}>3.5 Communication Data</h4>
                                    <p>Emails, messages, and call records, Customer support interactions, Feedback and survey responses.</p>
                                    
                                    <h4 style={{ margin: '15px 0' }}>3.6 Marketing & Preferences Data</h4>
                                    <p>Preferences for courses, Subscription to newsletters, Promotional engagement.</p>
                                </>
                            )
                        },
                        {
                            title: "4. How We Collect Information",
                            content: (
                                <>
                                    <p>We collect information through:</p>
                                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li><strong>4.1 Direct Collection:</strong> Registration forms, Admission processes, Phone calls and in-person interactions.</li>
                                        <li><strong>4.2 Automated Collection:</strong> Cookies and tracking technologies, Website analytics tools.</li>
                                        <li><strong>4.3 Third-Party Sources:</strong> Payment gateways, Marketing platforms, Referral partners.</li>
                                    </ul>
                                </>
                            )
                        },
                        {
                            title: "5. Legal Basis for Processing",
                            content: (
                                <p>We process your data based on: Your consent, Contractual necessity (course enrollment), Legal obligations, and Legitimate business interests.</p>
                            )
                        },
                        {
                            title: "6. How We Use Your Information",
                            content: (
                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                    <li><strong>6.1 Service Delivery:</strong> Course enrollment and management, Scheduling classes and exams, Providing certificates.</li>
                                    <li><strong>6.2 Communication:</strong> Sending updates, reminders, and notifications, Responding to queries.</li>
                                    <li><strong>6.3 Personalization:</strong> Recommending courses, Improving learning experience.</li>
                                    <li><strong>6.4 Marketing:</strong> Sending promotional offers (only with consent), Running advertising campaigns.</li>
                                    <li><strong>6.5 Operations & Improvement:</strong> Website optimization, Data analytics, Internal reporting.</li>
                                    <li><strong>6.6 Legal Compliance:</strong> Fraud prevention, Regulatory requirements.</li>
                                </ul>
                            )
                        },
                        {
                            title: "7. Sharing & Disclosure of Information",
                            content: (
                                <>
                                    <p>We may share your information with:</p>
                                    <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                        <li><strong>7.1 Service Providers:</strong> Payment processors, CRM systems, IT and hosting providers.</li>
                                        <li><strong>7.2 Academic & Training Staff:</strong> Trainers and instructors for course delivery.</li>
                                        <li><strong>7.3 Government & Legal Authorities:</strong> When required by UAE laws.</li>
                                        <li><strong>7.4 Business Transfers:</strong> In case of merger, acquisition, or restructuring.</li>
                                    </ul>
                                    <p>We ensure all third parties maintain strict confidentiality.</p>
                                </>
                            )
                        },
                        {
                            title: "8. International Data Transfers",
                            content: (
                                <p>Your data may be transferred and stored outside the UAE. We ensure adequate safeguards such as secure contracts and data protection agreements.</p>
                            )
                        },
                        {
                            title: "9. Data Retention Policy",
                            content: (
                                <>
                                    <p>We retain data as long as the student is enrolled, as required for legal and accounting purposes, or until deletion is requested where applicable.</p>
                                    <p><strong>Typical retention:</strong> Student records (up to 5 years), Financial records (as per UAE regulations).</p>
                                </>
                            )
                        },
                        {
                            title: "10. Data Security Measures",
                            content: (
                                <p>We implement SSL encryption, secure servers, access control systems, employee confidentiality agreements, and regular system audits. Despite this, no digital system is completely secure.</p>
                            )
                        },
                        {
                            title: "11. Cookies Policy",
                            content: (
                                <p>We use cookies for website functionality, analytics, and user preferences. You can disable cookies via browser settings, but some features may not work properly.</p>
                            )
                        },
                        {
                            title: "12. Your Rights",
                            content: (
                                <p>You have the right to access your personal data, correct inaccuracies, request deletion, restrict processing, withdraw consent, and object to marketing. Requests can be made via email.</p>
                            )
                        },
                        {
                            title: "13. Children’s Privacy",
                            content: (
                                <p>We collect data of minors only with parental/guardian consent and for educational purposes only. Parents have full rights to review or delete their child’s data.</p>
                            )
                        },
                        {
                            title: "14. Third-Party Services & Links",
                            content: (
                                <p>Our website may contain links to external platforms. We are not responsible for their privacy policies.</p>
                            )
                        },
                        {
                            title: "15. Data Breach Policy",
                            content: (
                                <p>In case of a data breach, we will investigate immediately, take corrective actions, and notify affected users if required.</p>
                            )
                        },
                        {
                            title: "16. Automated Decision Making",
                            content: (
                                <p>We do not use fully automated decision-making systems that significantly affect users.</p>
                            )
                        },
                        {
                            title: "17. Marketing Communications",
                            content: (
                                <p>You may receive marketing communications if you opt in. You can unsubscribe anytime via the email link or direct contact.</p>
                            )
                        },
                        {
                            title: "18. Complaints & Dispute Resolution",
                            content: (
                                <p>If you have concerns, contact us first for resolution. If unresolved, you may approach relevant UAE authorities.</p>
                            )
                        },
                        {
                            title: "19. Updates to This Policy",
                            content: (
                                <p>We may update this Privacy Policy periodically. Changes will be posted with a revised effective date.</p>
                            )
                        },
                        {
                            title: "20. Contact Information",
                            content: (
                                <div style={{ background: '#f9fafb', padding: '25px', borderRadius: '12px' }}>
                                    <strong>Nitaq Academy</strong><br />
                                    📧 hr@nitaqacademy.com
                                </div>
                            )
                        },
                        {
                            title: "21. Consent",
                            content: (
                                <p>By using our services, you agree to this Privacy Policy and consent to data collection and processing.</p>
                            )
                        }
                    ].map((section, idx) => (
                        <section key={idx} style={{ marginBottom: '40px' }}>
                            <h2 style={{ fontSize: '1.5rem', color: '#111827', marginBottom: '20px', borderBottom: '1px solid #f3f4f6', paddingBottom: '10px' }}>
                                {section.title}
                            </h2>
                            <div style={{ color: '#4b5563', lineHeight: '1.8' }}>
                                {section.content}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
