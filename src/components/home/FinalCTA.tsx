"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import MagneticButton from "@/components/common/MagneticButton";

const FinalCTA = () => {
    const { t } = useLanguage();
    return (
        <section style={{ paddingTop: '120px', paddingBottom: '120px' }}>
            <div className="container">
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'var(--surface-primary)', border: '1px solid var(--border-subtle)', padding: '112px 48px', textAlign: 'center' }}>
                    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(197, 160, 33, 0.12)', filter: 'blur(120px)', borderRadius: '50%' }}></div>
                    <div style={{ position: 'relative', zIndex: 10, maxWidth: '720px', margin: '0 auto' }}>
                        <span className="eyebrow" style={{ marginBottom: '28px', justifyContent: 'center' }}>
                            {t.fleet.eyebrow}
                        </span>
                        <h2
                            className="display-serif"
                            style={{
                                fontSize: 'clamp(2.5rem, 7vw, 5rem)',
                                color: '#fff',
                                fontWeight: 400,
                                lineHeight: 1,
                                marginTop: '20px',
                                marginBottom: '32px',
                            }}
                        >
                            {t.cta.title}{' '}
                            <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>
                                {t.cta.titleHighlight}
                            </span>
                        </h2>
                        <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 48px' }}>
                            {t.cta.desc}
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                            <MagneticButton>
                                <a href={siteConfig.whatsappBase} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '14px 40px' }}>
                                    {t.cta.bookWhatsApp}
                                </a>
                            </MagneticButton>
                            <MagneticButton>
                                <Link href="/fleet" className="btn btn-secondary" style={{ padding: '14px 40px' }}>
                                    {t.cta.browseFleet}
                                </Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
