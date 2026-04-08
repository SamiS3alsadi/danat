"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

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
                            <div style={{ fontSize: '48px', marginBottom: '24px' }}>{pkg.icon}</div>
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
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '24px' }}>⚡</span>
                                    <div>
                                        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{t.pricing.kmTitle}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.pricing.kmDesc}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '24px' }}>🛡️</span>
                                    <div>
                                        <h4 style={{ color: '#fff', fontWeight: 700, marginBottom: '4px' }}>{t.pricing.insuranceTitle}</h4>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.pricing.insuranceDesc}</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <span style={{ color: 'var(--accent-gold)', fontSize: '24px' }}>📦</span>
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
                                <a href="https://wa.me/+971529007996" className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>
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
