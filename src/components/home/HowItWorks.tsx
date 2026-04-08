"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
    const { t } = useLanguage();

    return (
        <section style={{ backgroundColor: 'var(--surface-secondary)', padding: '96px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '672px', margin: '0 auto 64px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        {t.howItWorks.eyebrow}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        {t.howItWorks.title} <span style={{ color: 'var(--accent-gold)' }}>{t.howItWorks.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                    {t.howItWorks.steps.map((step, index) => (
                        <div key={index} className="card" style={{ position: 'relative', padding: '32px', borderRadius: '14px', backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', transition: 'all 0.4s ease' }}>
                            <span style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.05)', position: 'absolute', top: '16px', right: '16px' }}>
                                {String(index + 1).padStart(2, '0')}
                            </span>
                            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px', position: 'relative', zIndex: 10 }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                                    {index + 1}
                                </div>
                                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>{step.title}</h3>
                                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
