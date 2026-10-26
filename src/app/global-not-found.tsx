import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import { siteConfig } from "@/config/site";

/**
 * Served for URLs that match no route at all. It sits outside app/[lang]/, so
 * it has no locale and no LanguageProvider — hence its own <html> and English
 * copy. In-tree 404s (an unknown car slug) still use [lang]/not-found.tsx and
 * are localized.
 */
export const metadata: Metadata = {
    title: "Page Not Found | Danat Aldonia Rent a Car",
    robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
    return (
        <html lang="en" dir="ltr">
            <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                <div
                    style={{
                        flex: 1,
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px 24px',
                        textAlign: 'center',
                    }}
                >
                    <div style={{ maxWidth: '560px' }}>
                        <Link
                            href="/"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}
                        >
                            <Image
                                src="/images/logo-icon.png"
                                alt="Danat Aldonia"
                                width={56}
                                height={56}
                                style={{ objectFit: 'contain', height: '56px', width: '56px' }}
                                priority
                            />
                            <Image
                                src="/images/logo-text.png"
                                alt="Danat Aldonia Car Rental"
                                width={160}
                                height={36}
                                style={{ objectFit: 'contain', height: '36px', width: 'auto' }}
                                priority
                            />
                        </Link>

                        <span
                            style={{
                                color: 'var(--accent-gold)',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                fontSize: '12px',
                                display: 'block',
                                marginBottom: '24px',
                            }}
                        >
                            Error 404
                        </span>
                        <h1
                            className="display-serif"
                            style={{
                                fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                                color: '#fff',
                                lineHeight: 1,
                                marginBottom: '24px',
                                fontWeight: 400,
                            }}
                        >
                            Page Not{" "}
                            <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>
                                Found
                            </span>
                        </h1>
                        <p
                            style={{
                                color: 'var(--text-secondary)',
                                fontSize: '16px',
                                lineHeight: 1.6,
                                marginBottom: '40px',
                            }}
                        >
                            The car or page you&apos;re looking for has left the garage. Let&apos;s get you back on
                            the road.
                        </p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
                            <Link href="/" className="btn btn-primary">
                                Back to Home
                            </Link>
                            <a
                                href={siteConfig.whatsappMessage(
                                    "Hi, I had trouble on your website. Can you help me book a car?",
                                )}
                                className="btn btn-secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
