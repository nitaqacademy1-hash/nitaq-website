import React, { useState, useEffect, useRef } from 'react';

const APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbyNLr98VD7YN1qQz_hjtMmH_PvdJimnHITC8rM9wPEb12bYV0SokgpBrrEfm40eienl/exec';

function toDriveImg(url) {
    if (!url) return url;
    if (!url.includes('drive.google.com')) return url;
    const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (!m) return url;
    return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1000`;
}

const DynamicPopup = () => {
    const [data, setData] = useState(null);
    const [imageReady, setImageReady] = useState(false);
    const [show, setShow] = useState(false);
    const [animIn, setAnimIn] = useState(false);
    const triggered = useRef(false);
    const scrollReady = useRef(false);

    /* ── 1. Fetch data AND preload image ───────────────────── */
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(APPS_SCRIPT_URL);
                const json = await res.json();

                if (json.published && json.imageUrl) {
                    const imgUrl = toDriveImg(json.imageUrl);
                    setData({ imageUrl: imgUrl, actionUrl: json.actionUrl || '' });

                    // Preload the image in background
                    const img = new Image();
                    img.onload = () => setImageReady(true);
                    img.onerror = () => {
                        // Try fallback URL
                        const m2 = json.imageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
                        if (m2) {
                            const fallback = `https://lh3.googleusercontent.com/d/${m2[1]}`;
                            setData(prev => ({ ...prev, imageUrl: fallback }));
                            const img2 = new Image();
                            img2.onload = () => setImageReady(true);
                            img2.src = fallback;
                        }
                    };
                    img.src = imgUrl;
                }
            } catch (e) {
                console.error('Popup error:', e);
            }
        })();
    }, []);

    /* ── 2. Trigger the instant user tries to scroll (wheel / touch) ── */
    useEffect(() => {
        if (!data) return;
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
    }, [data, imageReady]);

    /* ── 3. Show popup only when BOTH scroll happened AND image loaded ── */
    useEffect(() => {
        if (imageReady && scrollReady.current) {
            tryShowPopup();
        }
    }, [imageReady]);

    const tryShowPopup = () => {
        if (triggered.current) return;
        if (!imageReady || !scrollReady.current) return;
        if (sessionStorage.getItem('nitaq_popup_closed')) return;

        triggered.current = true;
        setShow(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setAnimIn(true));
        });
    };

    /* ── 4. Close ──────────────────────────────────────────── */
    const close = () => {
        setAnimIn(false);
        setTimeout(() => setShow(false), 350);
        sessionStorage.setItem('nitaq_popup_closed', 'true');
    };

    if (!show || !data) return null;

    /* ── 5. Render ─────────────────────────────────────────── */
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

                {/* Image */}
                <img
                    src={data.imageUrl}
                    alt="Offer"
                    onClick={data.actionUrl ? () => window.open(data.actionUrl, '_blank') : undefined}
                    style={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        maxHeight: '85vh',
                        objectFit: 'contain',
                        cursor: data.actionUrl ? 'pointer' : 'default',
                        borderRadius: '20px',
                    }}
                />
            </div>
        </>
    );
};

export default DynamicPopup;
