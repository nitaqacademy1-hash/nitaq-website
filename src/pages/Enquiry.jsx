import { useState } from 'react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry! We will contact you shortly.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            course: '',
            message: ''
        });
    };

    return (
        <main style={{ background: 'var(--bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2.5rem' }}>Enquire <span className="text-gradient">Now</span></h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '30px' }}>Fill in your details and we'll get back to you shortly</p>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-dark)' }}>Full Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                                placeholder="Enter your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-dark)' }}>Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-dark)' }}>Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit' }}
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div>
                            <label htmlFor="course" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-dark)' }}>Course Interested In *</label>
                            <select
                                id="course"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', background: 'white' }}
                            >
                                <option value="">Select a course</option>
                                <optgroup label="Test Preparations">
                                    <option value="Academic Excellence">Academic Excellence</option>
                                    <option value="Foundation JEE/NEET">Foundation JEE/NEET</option>
                                    <option value="SAT Preparation">SAT Preparation</option>
                                    <option value="GMAT Preparation">GMAT Preparation</option>
                                    <option value="GRE Preparation">GRE Preparation</option>
                                    <option value="AI & Robotics for Kids">AI & Robotics for Kids</option>
                                </optgroup>
                                <optgroup label="Professional Certifications">
                                    <option value="Finance (ACCA/CMA/CPA)">Finance (ACCA/CMA/CPA)</option>
                                    <option value="UAE VAT">UAE VAT</option>
                                    <option value="UAE Corporate Tax">UAE Corporate Tax</option>
                                    <option value="AI Course">AI Course</option>
                                    <option value="Power BI & Excel">Power BI & Excel</option>
                                    <option value="CHRM">CHRM</option>
                                    <option value="HRM">HRM</option>
                                    <option value="Sales & Negotiations">Sales & Negotiations</option>
                                    <option value="Marketing">Marketing</option>
                                </optgroup>
                                <optgroup label="Language Trainings">
                                    <option value="Spoken Arabic">Spoken Arabic</option>
                                    <option value="Spoken English">Spoken English</option>
                                    <option value="French">French</option>
                                    <option value="German">German</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="IELTS">IELTS</option>
                                    <option value="PTE">PTE</option>
                                    <option value="TOEFL">TOEFL</option>
                                </optgroup>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--text-dark)' }}>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                style={{ width: '100%', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '8px', fontSize: '1rem', fontFamily: 'inherit', resize: 'vertical' }}
                                placeholder="Tell us more about your requirements"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%', borderRadius: '8px', padding: '16px' }}>Submit Enquiry</button>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Enquiry;
