"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

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
                            <span style={{ fontSize: '48px' }}>{pillar.icon}</span>
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
