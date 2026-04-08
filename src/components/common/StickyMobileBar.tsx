"use client";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const StickyMobileBar = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 w-full z-50 p-4 transition-transform duration-500 md:hidden ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div style={{ display: 'flex', gap: '16px' }}>
                <a
                    href="tel:+971529007996"
                    style={{ flex: 1, backgroundColor: '#fff', color: '#000', fontWeight: 900, padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(0,0,0,0.5)', textDecoration: 'none' }}
                >
                    <span>📞</span> {t.sticky.callNow}
                </a>
                <a
                    href="https://wa.me/+971529007996"
                    style={{ flex: 1, backgroundColor: '#25D366', color: '#fff', fontWeight: 900, padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)', textDecoration: 'none' }}
                >
                    <span>💬</span> {t.sticky.whatsapp}
                </a>
            </div>
        </div>
    );
};

export default StickyMobileBar;
