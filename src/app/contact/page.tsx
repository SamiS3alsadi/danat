import Link from "next/link";

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
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
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
    const deliveryAreas = [
        "Dubai Marina", "Downtown Dubai", "Palm Jumeirah", "JBR", "Dubai International Airport (DXB)",
        "DIFC", "Business Bay", "Jumeirah", "Al Barsha", "Deira", "Mirdif", "Silicon Oasis"
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            <div className="bg-black min-h-screen py-24">
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                        {/* Left: Contact Info */}
                        <div>
                            <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>Visit Us</span>
                            <h1 className="text-5xl font-black text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff' }}>Get in <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Touch</span></h1>

                            <div className="space-y-12" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                                {/* Office Location */}
                                <div className="group">
                                    <h3 className="text-gold font-bold uppercase text-sm mb-4 tracking-widest" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Office Address</h3>
                                    <p className="text-xl text-white font-bold leading-relaxed max-w-sm" style={{ fontSize: '20px', fontWeight: 700, color: '#fff', lineHeight: 1.5 }}>
                                        Hor Al Anz East, Deira<br />
                                        Dubai, United Arab Emirates
                                    </p>
                                    <p className="text-secondary text-sm mt-3" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Free guest parking available</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                    <div>
                                        <h3 className="text-gold font-bold uppercase text-xs mb-3 tracking-widest" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone & WhatsApp</h3>
                                        <a href="tel:+971529007996" className="text-lg text-white font-bold hover:text-gold transition-colors block" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>+971 52 900 7996</a>
                                        <a href="https://wa.me/971529007996" className="text-sm text-secondary hover:text-gold transition-colors" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Chat on WhatsApp</a>
                                    </div>
                                    <div>
                                        <h3 className="text-gold font-bold uppercase text-xs mb-3 tracking-widest" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Business Hours</h3>
                                        <p className="text-lg text-white font-bold" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>09:00 AM - 09:00 PM</p>
                                        <p className="text-sm text-secondary" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Open 7 Days a Week</p>
                                    </div>
                                </div>

                                <div className="bg-surface-primary border border-white/5 p-8 rounded-3xl" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '32px' }}>
                                    <h3 className="text-white font-bold mb-4" style={{ color: '#fff', fontWeight: 700 }}>We Deliver Everywhere</h3>
                                    <p className="text-secondary text-sm mb-6" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>We provide doorstep delivery and pickup across Dubai, Sharjah, and Ajman.</p>
                                    <div className="flex flex-wrap gap-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {deliveryAreas.map(area => (
                                            <span key={area} className="text-[10px] bg-black/40 border border-white/5 px-2 py-1 rounded text-muted uppercase tracking-tighter" style={{ fontSize: '10px', backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: '4px', color: 'var(--text-muted)' }}>{area}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5" style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
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
                                href="https://maps.app.goo.gl/..."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary py-4 text-center text-sm font-black uppercase tracking-widest"
                                style={{ textAlign: 'center', padding: '16px', fontSize: '12px', fontWeight: 900, letterSpacing: '0.1em' }}
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
