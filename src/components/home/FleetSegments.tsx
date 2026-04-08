"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const segmentSlugs = ["Economy", "Sedan", "SUV", "Van", "Luxury", "Supercar"];
const segmentIcons = ["🚗", "🏙️", "🏜️", "🚐", "💎", "🏁"];

const FleetSegments = () => {
    const { t } = useLanguage();

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        {t.segments.eyebrow}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        {t.segments.title} <span style={{ color: 'var(--accent-gold)' }}>{t.segments.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
                    {t.segments.items.map((segment, index) => (
                        <Link
                            key={index}
                            href={`/fleet?segment=${segmentSlugs[index]}`}
                            className="group card"
                            style={{ padding: '32px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', textAlign: 'center', transition: 'all 0.3s ease', display: 'block' }}
                        >
                            <div style={{ fontSize: '40px', marginBottom: '24px', transition: 'transform 0.3s ease' }}>
                                {segmentIcons[index]}
                            </div>
                            <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' as const, letterSpacing: '0.1em' }}>
                                {segment.name}
                            </h3>
                            <p style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginTop: '8px' }}>
                                {segment.count}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetSegments;
