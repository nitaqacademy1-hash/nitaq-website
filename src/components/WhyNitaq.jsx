import React from 'react';

const WhyNitaq = () => {
    return (
        <div className="highlight-box" style={{ marginTop: '60px', textAlign: 'left' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', opacity: 0.8, display: 'block', marginBottom: '10px' }}>Excellence in Education</span>
            <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '30px' }}>Why <span style={{ color: 'var(--primary-light)' }}>NITAQ?</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Expert Instructors</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Learn from industry professionals with deep subject matter expertise and passion for teaching.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Modern Facilities</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Experience learning in a premium, tech-enabled environment designed for collaborative education.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Future-Focused</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Our curriculum is built on the latest industry trends, ensuring you gain skills for tomorrow's market.</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '25px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <h4 style={{ color: 'white', marginBottom: '10px', fontSize: '1.2rem' }}>Personal Attention</h4>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem' }}>Small batch sizes ensuring individual focus and customized learning plans for every student.</p>
                </div>
            </div>

            <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'white' }}>"Your success starts with the right guidance."</p>
            </div>
        </div>
    );
};

export default WhyNitaq;
