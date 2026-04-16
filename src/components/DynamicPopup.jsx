import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// ─── Popup Configuration ───────────────────────────────────────────────────
// To update the popup, change these values:
const POPUP_CONFIG = {
  imageUrl: '/images/ai-webinar-popup.jpeg',      // local image in /public/images/
  actionUrl: '/webinar/ai',                        // where clicking the image goes
  // Pages that start with these paths will NOT show the popup
  excludedPaths: ['/webinar/ai', '/webinar/counselors'],
};
// ──────────────────────────────────────────────────────────────────────────

const DynamicPopup = () => {
  const location  = useLocation();
  const navigate  = useNavigate();
  const [imageReady, setImageReady] = useState(false);
  const [show, setShow]             = useState(false);
  const [animIn, setAnimIn]         = useState(false);
  const triggered    = useRef(false);
  const scrollReady  = useRef(false);

  // Check if current route should suppress the popup
  const isExcluded = POPUP_CONFIG.excludedPaths.some(p =>
    location.pathname.startsWith(p)
  );

  /* ── 1. Preload image on mount ─────────────────────────────── */
  useEffect(() => {
    if (isExcluded) return;
    if (sessionStorage.getItem('nitaq_popup_closed')) return;

    const img = new Image();
    img.onload  = () => setImageReady(true);
    img.onerror = () => setImageReady(true); // show even if image fails
    img.src = POPUP_CONFIG.imageUrl;
  }, [isExcluded]);

  /* ── 2. Trigger when user starts scrolling ──────────────────── */
  useEffect(() => {
    if (isExcluded || !imageReady) return;
    if (sessionStorage.getItem('nitaq_popup_closed')) return;

    const onInteract = () => {
      if (!scrollReady.current) {
        scrollReady.current = true;
        cleanup();
        tryShowPopup();
      }
    };

    const cleanup = () => {
      window.removeEventListener('wheel', onInteract);
      window.removeEventListener('touchmove', onInteract);
    };

    window.addEventListener('wheel', onInteract, { passive: true, once: true });
    window.addEventListener('touchmove', onInteract, { passive: true, once: true });
    return cleanup;
  }, [imageReady, isExcluded]);

  /* ── 3. Show popup when image ready + scroll happened ───────── */
  useEffect(() => {
    if (imageReady && scrollReady.current) tryShowPopup();
  }, [imageReady]);

  const tryShowPopup = () => {
    if (triggered.current) return;
    if (!imageReady) return;
    if (sessionStorage.getItem('nitaq_popup_closed')) return;

    triggered.current = true;
    setShow(true);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => setAnimIn(true))
    );
  };

  /* ── 4. Close ─────────────────────────────────────────────── */
  const close = () => {
    setAnimIn(false);
    setTimeout(() => setShow(false), 350);
    sessionStorage.setItem('nitaq_popup_closed', 'true');
  };

  const handleImageClick = () => {
    close();
    navigate(POPUP_CONFIG.actionUrl);
  };

  if (!show || isExcluded) return null;

  /* ── 5. Render ───────────────────────────────────────────── */
  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={close}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 999998,
          background: 'rgba(0,0,0,0.72)',
          backdropFilter: 'blur(5px)',
          WebkitBackdropFilter: 'blur(5px)',
          opacity: animIn ? 1 : 0,
          transition: 'opacity 0.35s ease',
        }}
      />

      {/* CARD */}
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          zIndex: 999999,
          transform: animIn
            ? 'translate(-50%, -50%) scale(1)'
            : 'translate(-50%, -50%) scale(0.85)',
          opacity: animIn ? 1 : 0,
          transition: 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.34,1.45,0.64,1)',
          width: 'min(90vw, 480px)',
          maxHeight: '85vh',
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 8px 16px rgba(0,0,0,0.15), 0 32px 80px rgba(0,0,0,0.35)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1000000,
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(4px)',
            color: '#fff',
            fontSize: '18px',
            lineHeight: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            transition: 'background 0.2s',
            padding: 0,
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.85)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
        >
          ✕
        </button>

        {/* Image — clickable, navigates to webinar */}
        <img
          src={POPUP_CONFIG.imageUrl}
          alt="AI Webinar – Free Live Session"
          onClick={handleImageClick}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            maxHeight: '85vh',
            objectFit: 'contain',
            cursor: 'pointer',
            borderRadius: '20px',
          }}
        />
      </div>
    </>
  );
};

export default DynamicPopup;
