import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-white/5 pt-20 pb-10" style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-subtle)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
                    {/* Brand Col */}
                    <div className="flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/images/logo.png"
                                alt="Danat Aldonia"
                                width={60}
                                height={60}
                                className="object-contain"
                            />
                            <div className="flex flex-col">
                                <span style={{
                                    fontFamily: 'Outfit, sans-serif',
                                    fontWeight: 800,
                                    fontSize: '24px',
                                    color: 'var(--accent-gold)',
                                    letterSpacing: '-0.02em',
                                    lineHeight: 1
                                }}>
                                    Danat Aldonia
                                </span>
                                <span style={{
                                    fontSize: '11px',
                                    color: 'var(--text-secondary)',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase'
                                }}>
                                    Luxury Car Rental
                                </span>
                            </div>
                        </Link>
                        <p className="text-secondary text-sm leading-relaxed max-width" style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '300px' }}>
                            Experience the pinnacle of luxury with Dubai's premier car rental service. From supercars to luxury SUVs, we deliver excellence to your doorstep.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 style={{ color: 'var(--accent-white)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>Quick Links</h4>
                        <div className="flex flex-col gap-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/fleet" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Our Fleet</Link>
                            <Link href="/pricing" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Pricing & Packages</Link>
                            <Link href="/about" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>About Us</Link>
                            <Link href="/faq" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>FAQs</Link>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="flex flex-col gap-6">
                        <h4 style={{ color: 'var(--accent-white)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>Information</h4>
                        <div className="flex flex-col gap-3" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/terms" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Terms & Conditions</Link>
                            <Link href="/privacy" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Privacy Policy</Link>
                            <Link href="/contact" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Contact Us</Link>
                            <Link href="/delivery-areas" className="text-secondary hover:text-gold transition-colors text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Delivery Areas</Link>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="flex flex-col gap-6">
                        <h4 style={{ color: 'var(--accent-white)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>Get In Touch</h4>
                        <div className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div className="flex items-start gap-3">
                                <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>📍</span>
                                <span className="text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Dubai Marina, Dubai, UAE</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>📞</span>
                                <span className="text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>+971 52 900 7996</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>✉️</span>
                                <span className="text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>info@danataldonia.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6" style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p className="text-muted text-xs" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                        © {currentYear} Danat Aldonia Rent a Car. All Rights Reserved.
                    </p>
                    <div className="flex gap-8" style={{ display: 'flex', gap: '32px' }}>
                        {/* Social placeholders */}
                        <span className="text-muted text-xs hover:text-gold cursor-pointer" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Instagram</span>
                        <span className="text-muted text-xs hover:text-gold cursor-pointer" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>WhatsApp</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
