"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";

// Note: generateStaticParams is for Server Components, 
// for Client Components in a dynamic route we rely on standard fetching or direct use of data.
// Since we are using a JSON file, we find the car at the component level.

const CarDetailsPage = ({ params }: { params: { slug: string } }) => {
    const [preferredDates, setPreferredDates] = useState("");
    const car = (fleetData as Car[]).find((c) => c.slug === params.slug);

    if (!car) {
        notFound();
    }

    const whatsappMessage = `Hi, I want to rent the ${car.brand} ${car.name}.${preferredDates ? ` Dates: ${preferredDates}.` : ""} Can you provide availability and price?`;
    const whatsappUrl = `https://wa.me/+971529007996?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <div className="bg-black min-h-screen pb-24">
            {/* Top Banner / Breadcrumb */}
            <section className="bg-surface-primary border-b border-white/5 py-6" style={{ backgroundColor: 'var(--surface-primary)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
                <div className="container flex items-center gap-4 text-xs font-bold uppercase tracking-widest" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: '16px', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    <Link href="/" className="text-muted hover:text-white transition-colors">Home</Link>
                    <span className="text-muted">/</span>
                    <Link href="/fleet" className="text-muted hover:text-white transition-colors">Fleet</Link>
                    <span className="text-muted">/</span>
                    <span className="text-gold">{car.name}</span>
                </div>
            </section>

            {/* Hero Section / Gallery */}
            <section className="py-12" style={{ padding: '48px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
                        {/* Gallery Column */}
                        <div className="flex flex-col gap-6">
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/5 group" style={{ position: 'relative', aspectRatio: '16/10', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <Image
                                    src={car.mainImage}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                            {car.images.length > 0 && (
                                <div className="grid grid-cols-4 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                                    {[car.mainImage, ...car.images].slice(0, 4).map((img, i) => (
                                        <div key={i} className="relative aspect-square rounded-xl overflow-hidden border border-white/5 cursor-pointer hover:border-gold transition-colors" style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                            <Image src={img} alt={`${car.name} ${i}`} fill className="object-cover" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Info Column */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', display: 'block', marginBottom: '16px' }}>{car.brand} • {car.segment}</span>
                                <h1 className="text-5xl md:text-6xl font-black text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff' }}>{car.name}</h1>
                                <div className="flex items-end gap-3 mb-8" style={{ display: 'flex', alignItems: 'flex-end', gap: '12px', marginBottom: '32px' }}>
                                    <span className="text-4xl font-black text-gold" style={{ fontSize: '36px', fontWeight: 900, color: 'var(--accent-gold)' }}>AED {car.pricePerDay.toLocaleString()}</span>
                                    <span className="text-secondary text-sm mb-1.5" style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '6px' }}>/ Day</span>
                                </div>
                                <p className="text-secondary leading-relaxed text-lg mb-8" style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6, marginBottom: '32px' }}>{car.description}</p>
                            </div>

                            {/* Preferred Dates Input (Inline Date Collector) */}
                            <div className="bg-surface-primary p-6 rounded-2xl mb-8 border border-white/5" style={{ backgroundColor: 'var(--surface-primary)', padding: '24px', borderRadius: '16px', marginBottom: '32px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-3" style={{ fontSize: '10px', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>When do you want to rent?</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Next weekend, 15-20 Feb..."
                                    value={preferredDates}
                                    onChange={(e) => setPreferredDates(e.target.value)}
                                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-gold transition-colors"
                                    style={{ width: '100%', backgroundColor: '#000', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', padding: '12px 16px', color: '#fff' }}
                                />
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-6 mb-12" style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
                                <a href={whatsappUrl} className="btn btn-primary flex-1 py-5 text-xl font-black uppercase tracking-widest" style={{ flex: 1, padding: '20px', fontSize: '20px', fontWeight: 900 }}>
                                    Book on WhatsApp
                                </a>
                                <a href="tel:+971529007996" className="btn btn-secondary py-5 text-xl font-black uppercase tracking-widest" style={{ flex: 1, padding: '20px', fontSize: '20px', fontWeight: 900 }}>
                                    Call Now
                                </a>
                            </div>

                            {/* Detailed Specs Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '24px', paddingTop: '40px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Transmission</span>
                                    <span className="text-white font-bold" style={{ color: '#fff', fontWeight: 700 }}>{car.specs.transmission}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Seats</span>
                                    <span className="text-white font-bold" style={{ color: '#fff', fontWeight: 700 }}>{car.specs.seats} Persons</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Fuel</span>
                                    <span className="text-white font-bold" style={{ color: '#fff', fontWeight: 700 }}>{car.specs.fuel}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Luggage</span>
                                    <span className="text-white font-bold" style={{ color: '#fff', fontWeight: 700 }}>{car.specs.luggage}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Included / Requirements Sections */}
            <section className="py-24 bg-surface-primary border-y border-white/5" style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: 'var(--surface-primary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '64px' }}>
                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>What's Included</h3>
                            <ul className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> Comprehensive Insurance
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> {car.segment === "Supercar" ? "200" : "250"} km / Day Mileage
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> Free Delivery in Dubai
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> 24/7 Roadside Assistance
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Requirements</h3>
                            <ul className="flex flex-col gap-4" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> Valid Driving License
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> Passport / Emirates ID
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> Minimum Age: {car.segment === "Supercar" ? "25" : "21"} Years
                                </li>
                                <li className="flex items-center gap-3 text-secondary text-sm" style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                                    <span className="text-gold">✓</span> {car.depositRequired ? "Refundable Security Deposit" : "No Security Deposit Required"}
                                </li>
                            </ul>
                        </div>

                        <div className="bg-black/40 p-8 rounded-2xl border border-gold/10" style={{ backgroundColor: 'rgba(0,0,0,0.4)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(197, 160, 33, 0.1)' }}>
                            <h3 className="text-lg font-bold text-gold mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, fontSize: '18px', marginBottom: '16px' }}>Transparent Pricing</h3>
                            <p className="text-secondary text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>All prices are inclusive of 5% VAT. No hidden fees. The price you see here is the price you pay at the time of delivery.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CarDetailsPage;
