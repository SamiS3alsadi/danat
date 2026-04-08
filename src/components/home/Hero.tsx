"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
    const { t } = useLanguage();
    return (
        <section style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                backgroundImage: 'url("/images/hero-car.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                inset: 0,
                zIndex: 0
            }}>
                <div style={{ background: 'linear-gradient(to right, #050505 0%, rgba(5, 5, 5, 0.6) 50%, transparent 100%)', position: 'absolute', inset: 0 }}></div>
                <div style={{ background: 'linear-gradient(to top, #050505 0%, transparent 50%)', position: 'absolute', inset: 0 }}></div>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '768px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' as const, fontSize: '14px', marginBottom: '24px', display: 'block' }}>
                        {t.hero.tagline}
                    </span>
                    <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '32px' }}>
                        {t.hero.title} <br />
                        <span style={{ color: 'var(--accent-gold)' }}>{t.hero.subtitle}</span>
                    </h1>
                    <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '672px', marginBottom: '48px', lineHeight: 1.6, letterSpacing: '0.1em', textTransform: 'uppercase' as const, fontWeight: 700 }}>
                        {t.hero.features}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '24px' }}>
                        <a href="https://wa.me/+971529007996" className="btn btn-primary">
                            <span style={{ marginRight: '8px' }}>💬</span> {t.hero.bookWhatsApp}
                        </a>
                        <a href="tel:+971529007996" className="btn btn-secondary">
                            <span style={{ marginRight: '8px' }}>📞</span> {t.hero.callNow}
                        </a>
                    </div>
                </div>

                <div style={{ marginTop: '64px', display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span style={{ fontSize: '24px', fontWeight: 700 }}>{t.hero.stat1Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>{t.hero.stat1Label}</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span style={{ fontSize: '24px', fontWeight: 700 }}>{t.hero.stat2Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>{t.hero.stat2Label}</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span style={{ fontSize: '24px', fontWeight: 700 }}>{t.hero.stat3Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>{t.hero.stat3Label}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
