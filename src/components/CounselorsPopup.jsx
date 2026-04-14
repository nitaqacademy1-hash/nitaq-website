import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CounselorsPopup.css';

const Icon = {
    Calendar: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    ),
    Clock: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    Target: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="6" />
            <circle cx="12" cy="12" r="2" />
        </svg>
    )
};

const CounselorsPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Don't show on the webinar page itself or if already closed this session
        const isWebinarPage = location.pathname.includes('/webinar/counselors');
        const isClosed = sessionStorage.getItem('nitaq_counselors_popup_closed');

        if (isWebinarPage || isClosed) return;

        let timer;
        const handleTrigger = () => {
            setShouldRender(true);
            setTimeout(() => setIsVisible(true), 10);
            cleanup();
        };

        const onScroll = () => {
            if (window.scrollY > 10) {
                handleTrigger();
            }
        };

        const cleanup = () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', onScroll);
        };

        // Show after 7 seconds delay
        timer = setTimeout(handleTrigger, 7000);

        // Or show immediately on scroll
        window.addEventListener('scroll', onScroll, { passive: true });

        return cleanup;
    }, [location.pathname]);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => setShouldRender(false), 400);
        sessionStorage.setItem('nitaq_counselors_popup_closed', 'true');
    };

    const handleRegister = () => {
        handleClose();
        navigate('/webinar/counselors');
    };

    if (!shouldRender) return null;

    return (
        <div className={`counselors-popup-overlay ${isVisible ? 'active' : ''}`} onClick={handleClose}>
            <div className="counselors-popup-container" onClick={(e) => e.stopPropagation()}>
                <button className="counselors-popup-close" onClick={handleClose} aria-label="Close">✕</button>
                
                <div className="counselors-popup-image-side">
                    <img src="/images/new invite nitaq.png" alt="School Counselor Orientation Invitation" />
                </div>

                <div className="counselors-popup-content-side">
                    <span className="counselors-popup-hook">Still guiding students the old way?</span>
                    <h2 className="counselors-popup-headline">Exclusive Orientation for School Counselors</h2>
                    <p className="counselors-popup-subheadline">
                        Discover how school counselors can expand their impact, support future-ready students, and explore new professional opportunities.
                    </p>

                    <div className="counselors-popup-details">
                        <div className="counselors-popup-detail-item">
                            <Icon.Calendar /> April 15, 2026
                        </div>
                        <div className="counselors-popup-detail-item">
                            <Icon.Clock /> 07:00 PM (UAE Time)
                        </div>
                        <div className="counselors-popup-detail-item">
                            <Icon.Target /> Free Online Session
                        </div>
                    </div>

                    <ul className="counselors-popup-benefits">
                        <li>Expand your professional role beyond traditional counseling</li>
                        <li>Help students with future-ready learning and career pathways</li>
                        <li>Explore additional income opportunities</li>
                    </ul>

                    <button onClick={handleRegister} className="counselors-popup-cta">
                        Reserve Your Free Spot
                    </button>
                    
                    <span className="counselors-popup-secondary-text">
                        <span className="counselors-popup-urgency">Seats filling fast</span> – Secure your place now
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CounselorsPopup;
