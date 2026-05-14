"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

export default function DeliveryAreasPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        {t.carDetail.freeDelivery}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
                        {t.contact.deliverTitle}
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
                        {t.contact.deliverDesc}
                    </p>
                </div>

                {/* Areas Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px', marginBottom: '80px' }}>
                    {t.contact.deliveryAreas.map((area: string, i: number) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '20px 24px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                                <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                            </svg>
                            <span style={{ color: '#fff', fontWeight: 600, fontSize: '14px' }}>{area}</span>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(197,160,33,0.15)', borderRadius: '24px', padding: '64px 48px', textAlign: 'center', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '24px' }}>
                    <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
                    <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#fff' }}>{t.carDetail.freeDelivery}</h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.7 }}>
                        {t.contact.deliverDesc}
                    </p>
                    <a href={siteConfig.whatsappBase} className="btn btn-primary" style={{ padding: '14px 40px', fontSize: '14px' }}>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
