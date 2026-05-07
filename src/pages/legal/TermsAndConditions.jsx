import React from 'react';
import SEO from '../../components/SEO';

const TermsAndConditions = () => {
    return (
        <main className="legal-page section-padding">
            <SEO />
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ color: '#2e7d32', marginBottom: '30px' }}>Terms & Conditions</h1>
                    <p style={{ color: '#6b7280', marginBottom: '40px' }}>Last Updated: April 2024</p>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>1. Introduction</h2>
                        <p>Welcome to NITAQ ACADEMY. By enrolling in our courses or using our services, you agree to the following terms and conditions. NITAQ ACADEMY is operated by Nitaq Supportive Education Services LLC, registered in Sharjah, UAE.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>2. Course Enrollment</h2>
                        <p>Enrollment in any course is subject to availability and payment of the required fees. NITAQ ACADEMY reserves the right to refuse enrollment at its discretion. Students are responsible for providing accurate personal information during registration.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>3. Payment & Refund Policy</h2>
                        <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                            <li>Course fees must be paid in full or as per the agreed installment plan before the commencement of classes.</li>
                            <li>Refunds are only processed under specific circumstances as per our institutional policy.</li>
                            <li>Registration fees are non-refundable.</li>
                            <li>In case a course is cancelled by the academy, a full refund of the remaining course fee will be provided.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>4. Academic Conduct</h2>
                        <p>Students are expected to maintain professional conduct during online and offline sessions. NITAQ ACADEMY reserves the right to terminate enrollment for any student who violates our code of conduct without a refund.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>5. Limitation of Liability</h2>
                        <p>NITAQ ACADEMY (Nitaq Supportive Education Services LLC) shall not be held liable for any indirect, incidental, or consequential damages resulting from the use of its services or participation in its training programs.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>6. Governing Law</h2>
                        <p>These terms are governed by and construed in accordance with the laws of the United Arab Emirates and the Emirate of Sharjah.</p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default TermsAndConditions;
