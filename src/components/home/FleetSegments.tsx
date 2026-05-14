"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const segmentSlugs = ["Economy", "Sedan", "SUV", "Van", "Luxury", "Supercar"];

const EconomyIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1l2-3h10l2 3h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
);

const SedanIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
    </svg>
);

const SUVIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1l1-2h12l1 2h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2" /><circle cx="7.5" cy="17.5" r="1.5" /><circle cx="16.5" cy="17.5" r="1.5" /><path d="M3 12h18" />
    </svg>
);

const VanIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
);

const LuxuryIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

const SupercarIcon = () => (
    <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const segmentIcons = [<EconomyIcon key="eco" />, <SedanIcon key="sed" />, <SUVIcon key="suv" />, <VanIcon key="van" />, <LuxuryIcon key="lux" />, <SupercarIcon key="sup" />];

const FleetSegments = () => {
    const { t } = useLanguage();

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <span className="eyebrow">
                        {t.segments.eyebrow}
                    </span>
                    <h2 className="display-serif" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)', fontWeight: 400, color: '#fff', lineHeight: 1.05 }}>
                        {t.segments.title} <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>{t.segments.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
                    {t.segments.items.map((segment, index) => (
                        <Link
                            key={index}
                            href={`/fleet?segment=${segmentSlugs[index]}`}
                            className="group card"
                            style={{ padding: '32px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', textAlign: 'center', transition: 'all 0.3s ease', display: 'block', cursor: 'pointer' }}
                        >
                            <div style={{ color: 'var(--accent-gold)', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
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
