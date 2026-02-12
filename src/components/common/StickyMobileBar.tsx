"use client";

import { useEffect, useState } from "react";

const StickyMobileBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show bar after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-50 p-4 transition-transform duration-500 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                zIndex: 50,
                padding: '16px',
                transition: 'transform 0.5s ease'
            }}
        >
            <div className="flex gap-4" style={{ display: 'flex', gap: '16px' }}>
                <a
                    href="tel:+971529007996"
                    className="flex-1 bg-white text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-transform"
                    style={{ flex: 1, backgroundColor: '#fff', color: '#000', fontWeight: 900, padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)' }}
                >
                    <span>📞</span> Call Now
                </a>
                <a
                    href="https://wa.me/+971529007996"
                    className="flex-1 bg-[#25D366] text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-transform"
                    style={{ flex: 1, backgroundColor: '#25D366', color: '#fff', fontWeight: 900, padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)' }}
                >
                    <span>💬</span> WhatsApp
                </a>
            </div>
        </div>
    );
};

export default StickyMobileBar;
