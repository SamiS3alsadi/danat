"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
    const { t } = useLanguage();

    return (
        <section style={{ backgroundColor: 'var(--surface-secondary)', padding: '120px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '96px', maxWidth: '720px', margin: '0 auto 96px' }}>
                    <span className="eyebrow" style={{ marginBottom: '24px' }}>
                        {t.howItWorks.eyebrow}
                    </span>
                    <h2
                        className="display-serif"
                        style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                            color: '#fff',
                            fontWeight: 400,
                            lineHeight: 1.05,
                            marginTop: '20px',
                        }}
                    >
                        {t.howItWorks.title}{' '}
                        <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>
                            {t.howItWorks.titleHighlight}
                        </span>
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '40px',
                }}>
                    {t.howItWorks.steps.map((step, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                padding: '48px 32px 32px',
                                minHeight: '280px',
                                borderTop: '1px solid var(--border-subtle)',
                                overflow: 'hidden',
                            }}
                        >
                            <span
                                className="editorial-number"
                                aria-hidden="true"
                                style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    insetInlineEnd: '-8px',
                                    zIndex: 0,
                                }}
                            >
                                {String(index + 1).padStart(2, '0')}.
                            </span>
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                <span style={{
                                    fontSize: '11px',
                                    fontWeight: 600,
                                    color: 'var(--accent-gold)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.25em',
                                }}>
                                    Step {String(index + 1).padStart(2, '0')}
                                </span>
                                <h3
                                    className="display-serif"
                                    style={{
                                        fontSize: '28px',
                                        fontWeight: 400,
                                        color: '#fff',
                                        lineHeight: 1.15,
                                    }}
                                >
                                    {step.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--text-secondary)',
                                    lineHeight: 1.7,
                                    maxWidth: '320px',
                                }}>
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
