"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Danat Aldonia Rent a Car",
    "image": "https://danataldonia.com/images/logo.png",
    "@id": "https://danataldonia.com",
    "url": "https://danataldonia.com",
    "telephone": "+971529007996",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hor Al Anz East, Deira",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2764,
        "longitude": 55.3400
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "09:00",
            "closes": "21:00"
        }
    ],
    "sameAs": [
        "https://www.instagram.com/danataldonia/",
        "https://wa.me/971529007996"
    ]
};


export default function ContactPage() {
    const { t } = useLanguage();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <div className="bg-black min-h-screen py-24">
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                        {/* Left: Contact Info */}
                        <div>
                            <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                                {t.contact.eyebrow}
                            </span>
                            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '48px' }}>
                                {t.contact.title} <span style={{ color: 'var(--accent-gold)' }}>{t.contact.titleHighlight}</span>
                            </h1>

                            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '48px' }}>
                                {/* Office Location */}
                                <div>
                                    <h3 style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '16px' }}>
                                        {t.contact.officeLabel}
                                    </h3>
                                    <p style={{ fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: 1.5, whiteSpace: 'pre-line' as const }}>
                                        {t.contact.address}
                                    </p>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '12px' }}>
                                        {t.contact.parking}
                                    </p>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                    <div>
                                        <h3 style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '12px' }}>
                                            {t.contact.phoneLabel}
                                        </h3>
                                        <a href={siteConfig.tel} style={{ fontSize: '18px', fontWeight: 700, color: '#fff', display: 'block', textDecoration: 'none' }}>{siteConfig.phoneDisplay}</a>
                                        <a href={siteConfig.whatsappBase} target="_blank" rel="noopener noreferrer" style={{ fontSize: '14px', color: 'var(--text-secondary)', textDecoration: 'none' }}>
                                            {t.contact.chatWhatsApp}
                                        </a>
                                    </div>
                                    <div>
                                        <h3 style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '12px' }}>
                                            {t.contact.hoursLabel}
                                        </h3>
                                        <p style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>{t.contact.hours}</p>
                                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{t.contact.daysOpen}</p>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '32px' }}>
                                    <h3 style={{ color: '#fff', fontWeight: 700, marginBottom: '16px' }}>{t.contact.deliverTitle}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>{t.contact.deliverDesc}</p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '8px' }}>
                                        {t.contact.deliveryAreas.map(area => (
                                            <span key={area} style={{ fontSize: '11px', backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.08)', padding: '6px 10px', borderRadius: '8px', color: 'var(--text-secondary)', textAlign: 'center' as const, fontWeight: 500 }}>
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '24px' }}>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115458.07095922375!2d55.309068!3d25.276413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5da8e37678bb%3A0xb1679532420a7b44!2sHor%20Al%20Anz%20East%20-%20Dubai!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Hor+Al+Anz+East+Dubai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                                style={{ textAlign: 'center', padding: '16px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase' as const }}
                            >
                                {t.contact.openMaps}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
