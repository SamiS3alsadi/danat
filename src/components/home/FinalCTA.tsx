"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const FinalCTA = () => {
    const { t } = useLanguage();
    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <div className="container">
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '96px 48px', textAlign: 'center' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(197, 160, 33, 0.1)', filter: 'blur(120px)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'relative', zIndex: 10, maxWidth: '672px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '32px' }}>
                            {t.cta.title} <span style={{ color: 'var(--accent-gold)' }}>{t.cta.titleHighlight}</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: 1.6 }}>
                            {t.cta.desc}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'center', gap: '24px' }}>
                            <Link href="https://wa.me/+971529007996" className="btn btn-primary" style={{ padding: '14px 40px' }}>
                                {t.cta.bookWhatsApp}
                            </Link>
                            <Link href="/fleet" className="btn btn-secondary" style={{ padding: '14px 40px' }}>
                                {t.cta.browseFleet}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
