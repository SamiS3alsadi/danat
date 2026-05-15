"use client";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ backgroundColor: '#050505', borderTop: '1px solid var(--border-subtle)', paddingTop: '80px', paddingBottom: '40px' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '6px 12px', display: 'inline-flex', alignItems: 'center' }}>
                                <Image src="/images/danataldonia_logo.png" alt="Danat Al Donia Car Rental" width={180} height={60} style={{ objectFit: 'contain', height: '48px', width: 'auto' }} />
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
                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0 1 15 0Z" />
                                </svg>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{t.footer.address}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                <a href={siteConfig.tel} dir="ltr" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{siteConfig.phoneDisplay}</a>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
                                    <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <a href={`mailto:${siteConfig.email}`} dir="ltr" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{siteConfig.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '80px', paddingTop: '32px', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                        &copy; {currentYear} Danat Aldonia Rent a Car. {t.footer.allRights}
                    </p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>Instagram</a>
                        <a href={siteConfig.whatsappBase} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors" style={{ color: 'var(--text-muted)', fontSize: '12px' }}>WhatsApp</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
