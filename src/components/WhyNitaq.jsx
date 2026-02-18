import React from 'react';

const WhyNitaq = () => {
    return (
        <div className="highlight-box why-nitaq-container">
            <span className="why-nitaq-subtitle">Excellence in Education</span>
            <h2 className="why-nitaq-title">Why <span style={{ color: 'var(--primary-light)' }}>NITAQ?</span></h2>

            <div className="why-nitaq-grid">
                <div className="why-nitaq-card">
                    <h4>Expert Instructors</h4>
                    <p>Learn from industry professionals with deep subject matter expertise and passion for teaching.</p>
                </div>
                <div className="why-nitaq-card">
                    <h4>Modern Facilities</h4>
                    <p>Experience learning in a premium, tech-enabled environment designed for collaborative education.</p>
                </div>
                <div className="why-nitaq-card">
                    <h4>Future-Focused</h4>
                    <p>Our curriculum is built on the latest industry trends, ensuring you gain skills for tomorrow's market.</p>
                </div>
                <div className="why-nitaq-card">
                    <h4>Personal Attention</h4>
                    <p>Small batch sizes ensuring individual focus and customized learning plans for every student.</p>
                </div>
            </div>

            <div className="why-nitaq-footer">
                <p>"Your success starts with the right guidance."</p>
            </div>
        </div>
    );
};

export default WhyNitaq;
