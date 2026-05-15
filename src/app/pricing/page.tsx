"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const packageIcons = [
    // Daily
    <svg key="daily" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h10l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" />
    </svg>,
    // Weekly
    <svg key="weekly" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>,
    // Monthly
    <svg key="monthly" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>,
];

const categoryPrices = ["AED 90", "AED 180", "AED 250", "AED 350", "AED 800", "AED 2500"];

export default function PricingPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        {t.pricing.eyebrow}
                    </span>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
                        {t.pricing.title} <span style={{ color: 'var(--accent-gold)' }}>{t.pricing.titleHighlight}</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
                        {t.pricing.desc}
                    </p>
                </div>

                {/* Main Packages */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '96px' }}>
                    {t.pricing.packages.map((pkg, index) => (
                        <div key={index} style={{ padding: '40px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>{packageIcons[index]}</div>
                            <div style={{ marginBottom: '24px' }}>
                                <span style={{ color: 'var(--accent-gold)', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' as const, letterSpacing: '0.2em', display: 'block', marginBottom: '8px' }}>{pkg.discount}</span>
                                <h3 style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>{pkg.name} {t.pricing.rental}</h3>
                            </div>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>{pkg.desc}</p>
                            <Link href="/fleet" className="btn btn-secondary" style={{ display: 'block', width: '100%', textAlign: 'center' }}>
                                {t.pricing.browseFleet}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Category Starting Prices */}
                <div style={{ marginBottom: '96px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
                        {t.pricing.ratesByCategory}
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                        {t.pricing.categories.map((cat, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px' }}>
                                <div>
                                    <h4 style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase' as const, fontSize: '14px', marginBottom: '4px' }}>{cat.name}</h4>
                                    <p style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>{cat.cars}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>{t.pricing.startsAt}</span>
                                    <span style={{ color: 'var(--accent-gold)', fontWeight: 900, fontSize: '20px' }}>{categoryPrices[i]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transparent Pricing Info */}
                <div style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '80px 48px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '32px' }}>
                            <h2 style={{ fontSize: '30px', fontWeight: 900, color: '#fff' }}>{t.pricing.affectsTitle}</h2>
                            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                    </svg>
                                    <div>
                                        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{t.pricing.kmTitle}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.pricing.kmDesc}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                                    </svg>
                                    <div>
                                        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{t.pricing.insuranceTitle}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.pricing.insuranceDesc}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                        <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                                    </svg>
                                    <div>
                                        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{t.pricing.monthlyTitle}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.pricing.monthlyDesc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(197, 160, 33, 0.1)', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center', gap: '24px' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: 900, color: 'var(--accent-gold)' }}>{t.pricing.zeroFeesTitle}</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t.pricing.zeroFeesDesc}</p>
                            <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <a href="https://wa.me/+971525944022" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
                                    {t.pricing.inquireCta}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
