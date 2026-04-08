"use client";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
    const { t } = useLanguage();

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '64px', alignItems: 'center' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <div style={{ marginBottom: '32px' }}>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                                {t.why.eyebrow}
                            </span>
                            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
                                {t.why.title} <br />
                                <span style={{ color: 'var(--accent-gold)' }}>{t.why.titleHighlight}</span>
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '512px' }}>
                                {t.why.desc}
                            </p>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                            {t.why.points.map((point, index) => (
                                <div key={index} style={{ display: 'flex', flexDirection: 'column' as const, gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <span style={{ color: 'var(--accent-gold)', fontSize: '20px' }}>✓</span>
                                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{point.title}</h3>
                                    </div>
                                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(197, 160, 33, 0.2)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
                        <div style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <Image
                                src="/images/hero-car.png"
                                alt="Danat Aldonia luxury car"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.8) 0%, transparent 60%)', zIndex: 1 }}></div>
                            <div style={{ position: 'absolute', bottom: '24px', left: '24px', zIndex: 2 }}>
                                <span style={{ color: 'var(--accent-gold)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', display: 'block', marginBottom: '8px' }}>{t.why.trustedLabel}</span>
                                <h4 style={{ fontSize: '22px', fontWeight: 900, color: '#fff', textTransform: 'uppercase' as const, letterSpacing: '-0.02em' }}>{t.why.trustedTitle}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
