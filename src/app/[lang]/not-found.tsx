"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
    const { localeHref } = useLanguage();
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
                    Error 404
                </span>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: '24px',
                }}>
                    Page Not <span style={{ color: 'var(--accent-gold)' }}>Found</span>
                </h1>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: '40px',
                }}>
                    The car or page you&apos;re looking for has left the garage. Let&apos;s get you back on the road.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                    <Link href={localeHref("/")} className="btn btn-primary">Back to Home</Link>
                    <Link href={localeHref("/fleet")} className="btn btn-secondary">Browse Fleet</Link>
                    <a href={siteConfig.whatsappMessage("Hi, I had trouble on your website. Can you help me book a car?")} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
