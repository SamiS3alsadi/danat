"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "danat-cookie-consent";

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            if (!localStorage.getItem(STORAGE_KEY)) {
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setVisible(true);
            }
        } catch {
            // localStorage blocked – just skip the banner
        }
    }, []);

    const setConsent = (value: "accepted" | "declined") => {
        try {
            localStorage.setItem(STORAGE_KEY, value);
        } catch {
            // ignore
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-live="polite"
            aria-label="Cookie consent"
            style={{
                position: 'fixed',
                bottom: '16px',
                left: '16px',
                right: '16px',
                maxWidth: '560px',
                margin: '0 auto',
                zIndex: 70,
                backgroundColor: 'rgba(5, 5, 5, 0.98)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                color: '#fff',
            }}
        >
            <div style={{ fontSize: '14px', lineHeight: 1.5, marginBottom: '14px', color: 'var(--text-secondary)' }}>
                We use cookies to improve your experience and understand how our site is used.
                See our{' '}
                <a href="/privacy" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>
                    Privacy Policy
                </a>
                .
            </div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button
                    onClick={() => setConsent("accepted")}
                    className="btn btn-primary"
                    style={{ flex: 1, padding: '10px 16px', fontSize: '12px' }}
                >
                    Accept
                </button>
                <button
                    onClick={() => setConsent("declined")}
                    className="btn btn-secondary"
                    style={{ flex: 1, padding: '10px 16px', fontSize: '12px' }}
                >
                    Decline
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
