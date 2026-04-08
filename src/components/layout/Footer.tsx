"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-subtle)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Image src="/images/danataldonia_logo.png" alt="Danat Aldonia" width={60} height={60} style={{ objectFit: 'contain' }} />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '24px', color: 'var(--accent-gold)', letterSpacing: '-0.02em', lineHeight: 1 }}>Danat Aldonia</span>
                                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{t.footer.luxuryRental}</span>
                            </div>
                        </Link>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '300px' }}>{t.footer.desc}</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <h4 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>{t.footer.quickLinks}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/fleet" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.fleet}</Link>
                            <Link href="/pricing" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.pricing}</Link>
                            <Link href="/about" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.about}</Link>
                            <Link href="/faq" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.faq}</Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <h4 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>{t.footer.information}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <Link href="/terms" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.terms}</Link>
                            <Link href="/privacy" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.privacy}</Link>
                            <Link href="/contact" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.contact}</Link>
                            <Link href="/delivery-areas" className="hover:text-gold transition-colors" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.links.delivery}</Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <h4 style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '16px' }}>{t.footer.getInTouch}</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>📍</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.address}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>📞</span>
                                <span dir="ltr" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>+971 52 900 7996</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <span style={{ color: 'var(--accent-gold)' }}>✉️</span>
                                <span dir="ltr" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>alsdysamy594@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                        &copy; {currentYear} Danat Aldonia Rent a Car. {t.footer.allRights}
                    </p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <a href="https://instagram.com/1dubairentacar" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Instagram</a>
                        <a href="https://wa.me/+971529007996" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>WhatsApp</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
