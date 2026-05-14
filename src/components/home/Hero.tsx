"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import MagneticButton from "@/components/common/MagneticButton";

const Hero = () => {
    const { t, isRTL } = useLanguage();
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!reduceMotion) {
            // Probe video file existence before rendering — avoids a broken <video> tag
            fetch("/videos/hero.mp4", { method: "HEAD" })
                .then((r) => { if (r.ok) setShowVideo(true); })
                .catch(() => {});
        }
    }, []);

    return (
        <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <Image
                    src="/images/hero-car.png"
                    alt=""
                    role="presentation"
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {showVideo && (
                    <video
                        aria-hidden="true"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/images/hero-car.png"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    >
                        <source src="/videos/hero.mp4" type="video/mp4" />
                    </video>
                )}
                <div style={{ background: 'linear-gradient(to right, #050505 0%, rgba(5, 5, 5, 0.55) 55%, transparent 100%)', position: 'absolute', inset: 0 }}></div>
                <div style={{ background: 'linear-gradient(to top, #050505 0%, transparent 55%)', position: 'absolute', inset: 0 }}></div>
            </div>

            {/* Vertical hairline + rotated label (editorial detail) */}
            <div
                aria-hidden="true"
                style={{
                    position: 'absolute',
                    [isRTL ? 'right' : 'left']: '32px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                    zIndex: 5,
                }}
                className="hidden lg:flex"
            >
                <span style={{ width: '1px', height: '96px', background: 'rgba(197, 160, 33, 0.4)' }} />
                <span style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    fontSize: '10px',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                }}>
                    Est. Dubai · Luxury Mobility
                </span>
                <span style={{ width: '1px', height: '96px', background: 'rgba(197, 160, 33, 0.4)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ maxWidth: '820px' }}>
                    <span className="eyebrow" style={{ marginBottom: '28px' }}>
                        {t.hero.tagline}
                    </span>
                    <h1
                        className="display-serif"
                        style={{
                            fontSize: 'clamp(3rem, 9vw, 6.5rem)',
                            color: '#fff',
                            lineHeight: 0.95,
                            marginBottom: '36px',
                            fontWeight: 400,
                            marginTop: '16px',
                        }}
                    >
                        {t.hero.title} <br />
                        <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>
                            {t.hero.subtitle}
                        </span>
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        maxWidth: '560px',
                        marginBottom: '48px',
                        lineHeight: 1.7,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase' as const,
                        fontWeight: 500,
                    }}>
                        {t.hero.features}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: '20px' }}>
                        <MagneticButton>
                            <a href={siteConfig.whatsappBase} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                {t.hero.bookWhatsApp}
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href={siteConfig.tel} className="btn btn-secondary">
                                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                {t.hero.callNow}
                            </a>
                        </MagneticButton>
                    </div>
                </div>

                <div style={{ marginTop: '80px', display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span className="display-serif" style={{ fontSize: '38px', fontWeight: 400, color: 'var(--accent-gold)', lineHeight: 1 }}>{t.hero.stat1Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.15em', marginTop: '6px' }}>{t.hero.stat1Label}</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span className="display-serif" style={{ fontSize: '38px', fontWeight: 400, color: 'var(--accent-gold)', lineHeight: 1 }}>{t.hero.stat2Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.15em', marginTop: '6px' }}>{t.hero.stat2Label}</span>
                    </div>
                    <div style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column' as const }}>
                        <span className="display-serif" style={{ fontSize: '38px', fontWeight: 400, color: 'var(--accent-gold)', lineHeight: 1 }}>{t.hero.stat3Value}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.15em', marginTop: '6px' }}>{t.hero.stat3Label}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
