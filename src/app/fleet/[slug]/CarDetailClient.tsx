"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const CarDetailClient = ({ slug }: { slug: string }) => {
    const { t } = useLanguage();
    const today = new Date().toISOString().split("T")[0];
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const car = (fleetData as Car[]).find((c) => c.slug === slug);

    if (!car) {
        notFound();
    }

    // Calculate days & total price
    let days = 0;
    let totalPrice = 0;
    let effectiveRate = car.pricePerDay;
    if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const diffMs = end.getTime() - start.getTime();
        days = Math.max(0, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
        if (days >= 30) {
            effectiveRate = Math.round(car.pricePerMonth / 30);
        } else if (days >= 7) {
            effectiveRate = Math.round(car.pricePerWeek / 7);
        }
        totalPrice = days * effectiveRate;
    }

    const datesText = startDate && endDate ? ` Dates: ${startDate} to ${endDate} (${days} days).` : "";
    const priceText = totalPrice > 0 ? ` Estimated total: AED ${totalPrice.toLocaleString()}.` : "";
    const whatsappMessage = `Hi, I want to rent the ${car.brand} ${car.name}.${datesText}${priceText} Can you confirm availability?`;
    const whatsappUrl = siteConfig.whatsappMessage(whatsappMessage);

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
                                    alt={`${car.brand} ${car.name} rental Dubai`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }}
                                />
                            </div>
                            {car.images.length > 0 && (
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                    {[car.mainImage, ...car.images].slice(0, 4).map((img, i) => (
                                        <div key={i} style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                            <Image src={img} alt={`${car.brand} ${car.name} view ${i + 1}`} fill sizes="(max-width: 768px) 25vw, 12vw" className="object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }} />
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

                            {/* Date Range + Price Calculator */}
                            <div style={{ backgroundColor: 'var(--surface-primary)', padding: '24px', borderRadius: '16px', marginBottom: '32px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <label style={{ fontSize: '10px', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>
                                    {t.carDetail.whenRent}
                                </label>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                                    <input
                                        aria-label="Pickup date"
                                        type="date"
                                        min={today}
                                        value={startDate}
                                        onChange={(e) => {
                                            setStartDate(e.target.value);
                                            if (endDate && e.target.value > endDate) setEndDate("");
                                        }}
                                        style={{ width: '100%', backgroundColor: '#000', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '12px 14px', color: '#fff', boxSizing: 'border-box', colorScheme: 'dark' }}
                                    />
                                    <input
                                        aria-label="Return date"
                                        type="date"
                                        min={startDate || today}
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        style={{ width: '100%', backgroundColor: '#000', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '12px 14px', color: '#fff', boxSizing: 'border-box', colorScheme: 'dark' }}
                                    />
                                </div>
                                {days > 0 && (
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        <div>
                                            <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block' }}>
                                                {days} {days === 1 ? 'day' : 'days'} × AED {effectiveRate.toLocaleString()}
                                                {days >= 30 && ' (monthly rate)'}
                                                {days >= 7 && days < 30 && ' (weekly rate)'}
                                            </span>
                                            <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Estimated total</span>
                                        </div>
                                        <span style={{ fontSize: '22px', fontWeight: 900, color: 'var(--accent-gold)' }}>
                                            AED {totalPrice.toLocaleString()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
                                <a href={whatsappUrl} className="btn btn-primary" style={{ flex: 1, padding: '20px', fontSize: '18px', fontWeight: 900, textAlign: 'center' }}>
                                    {t.carDetail.bookWhatsApp}
                                </a>
                                <a href={siteConfig.tel} className="btn btn-secondary" style={{ flex: 1, padding: '20px', fontSize: '18px', fontWeight: 900, textAlign: 'center' }}>
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
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {t.carDetail.insurance}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {car.segment === "Supercar" ? t.carDetail.mileage200 : t.carDetail.mileage250}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {t.carDetail.freeDelivery}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {t.carDetail.roadside}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {t.carDetail.requirements}
                            </h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {t.carDetail.license}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {t.carDetail.passport}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {car.segment === "Supercar" ? t.carDetail.minAge25 : t.carDetail.minAge21}
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4.5 12.75l6 6 9-13.5" /></svg> {car.depositRequired ? t.carDetail.depositRequired : t.carDetail.noDeposit}
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

export default CarDetailClient;
