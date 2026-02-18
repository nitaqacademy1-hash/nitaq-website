import { useState } from 'react';

const ContactForm = ({ mode = 'contact' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: mode === 'contact' ? '' : 'Course Enquiry',
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
        setStatus({ type: 'info', message: 'Sending your message...' });

        try {
            // Using URLSearchParams for easier integration with Apps Script e.parameter
            const params = new URLSearchParams();
            Object.keys(formData).forEach(key => {
                if (formData[key]) params.append(key, formData[key]);
            });
            params.append('timestamp', new Date().toISOString());
            params.append('form_type', mode);

            // Note: Google Apps Script CORS can be tricky. Often simple POST works.
            // If you face CORS issues, you might need to use 'no-cors' mode, 
            // but then you won't get a response body.
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: params,
                mode: 'no-cors' // This is common for Google Apps Script to avoid preflight issues
            });

            // Since we use no-cors, we assume success if no error is thrown
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: mode === 'contact' ? '' : 'Course Enquiry',
                course: '',
                message: ''
            });
        } catch (error) {
            console.error('Submission error:', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again or contact us directly.' });
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
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+971 5X XXX XXXX"
                            style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                        />
                    </div>
                    {mode === 'contact' ? (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="How can we help?"
                                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                            />
                        </div>
                    ) : (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Course Interested In</label>
                            <select
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '14px 20px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}
                            >
                                <option value="">Select a course</option>
                                <optgroup label="Test Preparations">
                                    <option value="IELTS">IELTS Preparation</option>
                                    <option value="SAT">SAT Preparation</option>
                                    <option value="GRE">GRE Preparation</option>
                                    <option value="GMAT">GMAT Coaching</option>
                                    <option value="TOEFL">TOEFL Preparation</option>
                                    <option value="PTE">PTE Academic</option>
                                    <option value="JEE-NEET">Foundation JEE/NEET</option>
                                    <option value="AcademicExcellence">Academic Excellence</option>
                                </optgroup>
                                <optgroup label="Professional Certifications">
                                    <option value="ACCA">ACCA (UK)</option>
                                    <option value="CMA">CMA (US)</option>
                                    <option value="CPA">CPA (US)</option>
                                    <option value="UAE-VAT">UAE VAT</option>
                                    <option value="Corporate-Tax">UAE Corporate Tax</option>
                                    <option value="AI-Mastery">AI Mastery (Basic-Adv)</option>
                                    <option value="PowerBI-Excel">Power BI & Excel</option>
                                    <option value="CHRM">CHRM</option>
                                    <option value="HRM">HRM Professional</option>
                                    <option value="CPCD">CPCD Professional</option>
                                    <option value="Sales-Negotiations">Sales & Negotiations</option>
                                    <option value="Marketing">Marketing Training</option>
                                    <option value="Data-Management">Data Management</option>
                                    <option value="Soft-Skills">Soft Skills Training</option>
                                    <option value="Kids-Robotics">AI & Robotics for Kids</option>
                                </optgroup>
                                <optgroup label="Language Trainings">
                                    <option value="Spoken-English">Spoken English</option>
                                    <option value="Spoken-Arabic">Spoken Arabic</option>
                                    <option value="French">French Language</option>
                                    <option value="Spanish">Spanish Language</option>
                                    <option value="German">German Language</option>
                                </optgroup>
                            </select>
                        </div>
                    )}
                </div>
                <div>
                    <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '8px' }}>Your Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        placeholder="Write your message here..."
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
                    {isSubmitting ? 'Sending...' : 'Send Message Now'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
