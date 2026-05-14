"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const pillarIcons = [
    // Mission
    <svg key="mission" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Z" /><path d="M12 6v.75m0 10.5v-.75" />
    </svg>,
    // Values
    <svg key="values" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>,
    // Vision
    <svg key="vision" aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>,
];

export default function AboutPage() {
    const { t } = useLanguage();

    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                {/* Hero Section */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '128px' }}>
                    <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <Image
                            src="/images/cars/huracan-main.jpg"
                            alt="Luxury Car Dubai"
                            fill
                            className="object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}></div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block' }}>
                            {t.about.eyebrow}
                        </span>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff' }}>
                            {t.about.title} <br /><span style={{ color: 'var(--accent-gold)' }}>{t.about.titleHighlight}</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
                            {t.about.para1}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {t.about.para2}
                        </p>
                    </div>
                </div>

                {/* Mission / Values / Vision */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', textAlign: 'center' }}>
                    {t.about.pillars.map((pillar, i) => (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '24px' }}>
                            <span>{pillarIcons[i]}</span>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
                                {pillar.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {pillar.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
