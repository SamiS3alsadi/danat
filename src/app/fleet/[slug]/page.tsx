"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

const CarDetailsPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = React.use(params);
    const { t } = useLanguage();
    const [preferredDates, setPreferredDates] = useState("");
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) {
        notFound();
    }

    const whatsappMessage = `Hi, I want to rent the ${car.brand} ${car.name}.${preferredDates ? ` Dates: ${preferredDates}.` : ""} Can you provide availability and price?`;
    const whatsappUrl = `https://wa.me/+971529007996?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-black min-h-screen pb-24">
            {/* Top Banner / Breadcrumb */}
            <section style={{ backgroundColor: 'var(--surface-primary)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <Link href="/" style={{ color: 'var(--text-muted)' }}>{t.carDetail.breadcrumbHome}</Link>
                    <span style={{ color: 'var(--text-muted)' }}>/</span>
                    <Link href="/fleet" style={{ color: 'var(--text-muted)' }}>{t.carDetail.breadcrumbFleet}</Link>
                    <span style={{ color: 'var(--text-muted)' }}>/</span>
                    <span style={{ color: 'var(--accent-gold)' }}>{car.name}</span>
                </div>
            </section>

            {/* Hero Section / Gallery */}
            <section style={{ padding: '48px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                        {/* Gallery Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <Image
                                    src={car.mainImage}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }}
                                />
                            </div>
                            {car.images.length > 0 && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                    {[car.mainImage, ...car.images].slice(0, 4).map((img, i) => (
                                        <div key={i} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                            <Image src={img} alt={`${car.name} ${i}`} fill className="object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }} />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info Column */}
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '32px' }}>
                                <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', display: 'block', marginBottom: '16px' }}>
                                    {car.brand} • {car.segment}
                                </span>
                                <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>{car.name}</h1>
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '32px' }}>
                                    <span style={{ fontSize: '36px', fontWeight: 900, color: 'var(--accent-gold)' }}>AED {car.pricePerDay.toLocaleString()}</span>
                                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '6px' }}>{t.carDetail.perDay}</span>
                                </div>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>{car.description}</p>
                            </div>

                            {/* Preferred Dates Input */}
                            <div style={{ backgroundColor: 'var(--surface-primary)', padding: '24px', borderRadius: '16px', marginBottom: '32px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <label style={{ fontSize: '10px', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                                    {t.carDetail.whenRent}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t.carDetail.datePlaceholder}
                                    value={preferredDates}
                                    onChange={(e) => setPreferredDates(e.target.value)}
                                    style={{ width: '100%', backgroundColor: '#000', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '12px 16px', color: '#fff', outline: 'none', boxSizing: 'border-box' }}
                                />
                            </div>

                            {/* CTA */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
                                <a href={whatsappUrl} className="btn btn-primary" style={{ flex: 1, padding: '20px', fontSize: '18px', fontWeight: 900, textAlign: 'center' }}>
                                    {t.carDetail.bookWhatsApp}
                                </a>
                                <a href="tel:+971529007996" className="btn btn-secondary" style={{ flex: 1, padding: '20px', fontSize: '18px', fontWeight: 900, textAlign: 'center' }}>
                                    {t.carDetail.callNow}
                                </a>
                            </div>

                            {/* Detailed Specs Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.carDetail.transmission}</span>
                                    <span style={{ color: '#fff', fontWeight: 700 }}>{car.specs.transmission}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.carDetail.seats}</span>
                                    <span style={{ color: '#fff', fontWeight: 700 }}>{car.specs.seats} {t.carDetail.persons}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.carDetail.fuel}</span>
                                    <span style={{ color: '#fff', fontWeight: 700 }}>{car.specs.fuel}</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.carDetail.luggage}</span>
                                    <span style={{ color: '#fff', fontWeight: 700 }}>{car.specs.luggage}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Included / Requirements Sections */}
            <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: 'var(--surface-primary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px' }}>
                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {t.carDetail.whatsIncluded}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {t.carDetail.insurance}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {car.segment === "Supercar" ? t.carDetail.mileage200 : t.carDetail.mileage250}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {t.carDetail.freeDelivery}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {t.carDetail.roadside}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {t.carDetail.requirements}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {t.carDetail.license}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {t.carDetail.passport}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {car.segment === "Supercar" ? t.carDetail.minAge25 : t.carDetail.minAge21}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span style={{ color: 'var(--accent-gold)' }}>✓</span> {car.depositRequired ? t.carDetail.depositRequired : t.carDetail.noDeposit}
                                </li>
                            </ul>
                        </div>

                        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(197, 160, 33, 0.1)' }}>
                            <h3 style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '18px', marginBottom: '16px' }}>
                                {t.carDetail.transparentPricing}
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                                {t.carDetail.pricingDesc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarDetailsPage;
