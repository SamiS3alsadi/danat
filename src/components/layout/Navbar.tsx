"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.fleet, href: "/fleet" },
    { name: t.nav.pricing, href: "/pricing" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contact, href: "/contact" },
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
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/danataldonia_logo.png"
            alt="Danat Aldonia"
            width={50}
            height={50}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 800,
              fontSize: '20px',
              color: 'var(--accent-gold)',
              letterSpacing: '-0.02em',
              lineHeight: 1
            }}>
              Danat Aldonia
            </span>
            <span style={{
              fontSize: '10px',
              color: 'var(--text-secondary)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1.5
            }}>
              {t.footer.tagline}
            </span>
          </div>
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
          <button
            onClick={toggleLanguage}
            style={{
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              background: 'none',
              border: '1px solid var(--border-medium)',
              borderRadius: '999px',
              padding: '6px 14px',
              cursor: 'pointer',
              letterSpacing: '0.05em',
              transition: 'var(--transition-fast)',
            }}
            className="hover:bg-gold/10 transition-colors"
            aria-label="Toggle language"
          >
            {locale === "en" ? "العربية" : "English"}
          </button>

          <a href="tel:+971529007996" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '12px' }}>
            {t.nav.callNow}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--accent-gold)',
              background: 'none',
              border: '1px solid var(--border-medium)',
              borderRadius: '999px',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
            aria-label="Toggle language"
          >
            {locale === "en" ? "ع" : "EN"}
          </button>
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
          <a href="tel:+971529007996" className="btn btn-primary mt-2" style={{ padding: '12px 32px', fontSize: '13px' }}>
            {t.nav.callNow}
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
