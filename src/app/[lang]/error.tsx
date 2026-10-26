"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const { t, localeHref } = useLanguage();
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 24px',
            textAlign: 'center',
        }}>
            <div style={{ maxWidth: '560px' }}>
                <span style={{
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontSize: '12px',
                    display: 'block',
                    marginBottom: '24px',
                }}>
                    {t.errorPage.eyebrow}
                </span>
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                }}>
                    {t.errorPage.title} <span style={{ color: 'var(--accent-gold)' }}>{t.errorPage.titleHighlight}</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                    {t.errorPage.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                    <button onClick={reset} className="btn btn-primary">{t.errorPage.retry}</button>
                    <Link href={localeHref("/")} className="btn btn-secondary">{t.errorPage.home}</Link>
                    <a href={siteConfig.whatsappMessage(t.whatsapp.trouble)} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        {t.errorPage.whatsapp}
                    </a>
                </div>
            </div>
        </div>
    );
}
