"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitch from "./LanguageSwitch";
import { siteConfig } from "@/config/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, localeHref } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: localeHref("/") },
    { name: t.nav.fleet, href: localeHref("/fleet") },
    { name: t.nav.pricing, href: localeHref("/pricing") },
    { name: t.nav.about, href: localeHref("/about") },
    { name: t.nav.faq, href: localeHref("/faq") },
    { name: t.nav.contact, href: localeHref("/contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid var(--border-subtle)" : "none",
        backgroundColor: isScrolled ? "rgba(5, 5, 5, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container flex items-center justify-between">
        <Link href={localeHref("/")} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image
            src="/images/logo-icon.png"
            alt="Danat Al Donia"
            width={44}
            height={44}
            className="object-contain"
            style={{ height: '44px', width: '44px' }}
            priority
          />
          <Image
            src="/images/logo-text.png"
            alt="Danat Al Donia Car Rental"
            width={140}
            height={32}
            className="object-contain"
            style={{ height: '32px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.05em',
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
              }}
              className="hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Language Toggle */}
          <LanguageSwitch variant="desktop" />

          <a href={siteConfig.tel} className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            {t.nav.callNow}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitch variant="mobile" />
          <button
            className="text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-8 flex flex-col items-center gap-6 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={siteConfig.tel} className="btn btn-primary mt-2" style={{ padding: '12px 32px', fontSize: '13px' }}>
            {t.nav.callNow}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
