import ContactForm from '../components/ContactForm';

const Enquiry = () => {
    return (
        <main style={{ background: 'var(--bg-light)', minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '80px 0' }}>
            <div className="container">
                <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2.5rem' }}>Enquire <span className="text-gradient">Now</span></h1>
                    <p style={{ textAlign: 'center', color: 'var(--text-gray)', marginBottom: '30px' }}>Fill in your details and we'll get back to you shortly</p>

                    <ContactForm mode="enquiry" />
                </div>
            </div>
        </main>
    );
};

export default Enquiry;
