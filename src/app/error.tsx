"use client";

import { useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
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
                    Something Went Wrong
                </span>
                <h1 style={{
                    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1.1,
                    marginBottom: '24px',
                }}>
                    We hit a <span style={{ color: 'var(--accent-gold)' }}>roadblock</span>
                </h1>
                <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6, marginBottom: '40px' }}>
                    An unexpected error occurred. Our team has been notified. You can try again, or contact us directly.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                    <button onClick={reset} className="btn btn-primary">Try Again</button>
                    <Link href="/" className="btn btn-secondary">Back to Home</Link>
                    <a href={siteConfig.whatsappBase} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
