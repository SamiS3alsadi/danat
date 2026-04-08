"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustBar = () => {
    const { t } = useLanguage();
    const highlights = [
        { icon: "⚡", title: t.trust.item1Title, desc: t.trust.item1Desc },
        { icon: "🛡️", title: t.trust.item2Title, desc: t.trust.item2Desc },
        { icon: "💎", title: t.trust.item3Title, desc: t.trust.item3Desc },
        { icon: "📞", title: t.trust.item4Title, desc: t.trust.item4Desc },
    ];

    return (
        <div style={{ backgroundColor: 'var(--surface-primary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '48px 0' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                    {highlights.map((item, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: 'var(--shadow-glow)' }}>
                                {item.icon}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>{item.title}</h3>
                                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
