"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const Reviews = () => {
    const { t } = useLanguage();

    return (
        <section style={{ backgroundColor: 'var(--surface-secondary)', padding: '96px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <span className="eyebrow">
                        {t.reviews.eyebrow}
                    </span>
                    <h2 className="display-serif" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)', fontWeight: 400, color: '#fff', lineHeight: 1.05 }}>
                        {t.reviews.title} <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>{t.reviews.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {t.reviews.items.map((review, index) => (
                        <div key={index} className="card" style={{ padding: '32px', backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ color: 'var(--accent-gold)', fontSize: '18px' }}>★</span>
                                ))}
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                                &ldquo;{review.text}&rdquo;
                            </p>
                            <div>
                                <h4 style={{ color: '#fff', fontWeight: 700 }}>{review.name}</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '10px', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
