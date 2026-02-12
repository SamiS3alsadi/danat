"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import CarCard from "@/components/common/CarCard";
import fleetData from "@/data/fleet.json";
import { Car, CarType } from "@/data/types";

const FleetPage = () => {
    const cars = fleetData as Car[];
    const [searchQuery, setSearchQuery] = useState("");
    const [filterBrand, setFilterBrand] = useState<string>("All");
    const [filterSegment, setFilterSegment] = useState<string>("All");
    const [filterType, setFilterType] = useState<string>("All");
    const [filterSeats, setFilterSeats] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("Recommended");

    // Get search param from URL if present
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const segment = params.get("segment");
        if (segment) setFilterSegment(segment);
    }, []);

    const brands = ["All", ...Array.from(new Set(cars.map(car => car.brand)))];
    const segments = ["All", "Economy", "Mid-Range", "Premium", "Luxury", "Supercar"];
    const types = ["All", "Sedan", "SUV", "Van", "Economy", "Luxury"];
    const seatOptions = ["All", "2", "4", "5", "7+"];

    const filteredAndSortedCars = useMemo(() => {
        let result = cars.filter(car => {
            const searchMatch = searchQuery === "" ||
                car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                car.brand.toLowerCase().includes(searchQuery.toLowerCase());
            const brandMatch = filterBrand === "All" || car.brand === filterBrand;
            const segmentMatch = filterSegment === "All" || car.segment === filterSegment;
            const typeMatch = filterType === "All" || car.type === filterType;
            const seatsMatch = filterSeats === "All" ||
                (filterSeats === "2" && car.specs.seats === 2) ||
                (filterSeats === "4" && car.specs.seats === 4) ||
                (filterSeats === "5" && car.specs.seats === 5) ||
                (filterSeats === "7+" && car.specs.seats >= 7);
            return searchMatch && brandMatch && segmentMatch && typeMatch && seatsMatch;
        });

        switch (sortBy) {
            case "Price: Low to High":
                result.sort((a, b) => a.pricePerDay - b.pricePerDay);
                break;
            case "Price: High to Low":
                result.sort((a, b) => b.pricePerDay - a.pricePerDay);
                break;
            case "Newest":
                result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
                break;
            default:
                // Recommended: Featured and Best Deals first
                result.sort((a, b) => {
                    if (a.isBestDeal && !b.isBestDeal) return -1;
                    if (!a.isBestDeal && b.isBestDeal) return 1;
                    if (a.isFeatured && !b.isFeatured) return -1;
                    if (!a.isFeatured && b.isFeatured) return 1;
                    return 0;
                });
        }

        return result;
    }, [cars, filterBrand, filterType, filterSeats, sortBy]);

    return (
        <div className="bg-black min-h-screen pb-24">
            {/* Header */}
            <section className="relative py-20 bg-surface-primary border-b border-white/5" style={{ backgroundColor: 'var(--surface-primary)', borderBottom: '1px solid var(--border-subtle)', padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff' }}>
                        Our <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Fleet</span>
                    </h1>
                    <p className="text-secondary max-w-2xl text-lg" style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '672px' }}>
                        Choose from Dubai's most exclusive collection of supercars, luxury SUVs, and prestigious sedans. Each vehicle is meticulously maintained for your safety and comfort.
                    </p>
                </div>
            </section>

            {/* Filters & Sorting */}
            <section className="sticky top-[80px] z-30 bg-black/80 backdrop-blur-xl border-b border-white/5 py-6" style={{ position: 'sticky', top: 'var(--header-height)', zIndex: 30, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div className="flex flex-wrap items-center justify-between gap-6" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                        {/* Filters */}
                        <div className="flex flex-wrap gap-4 flex-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 }}>
                            <div className="flex flex-col gap-1.5 flex-1 min-w-[200px]" style={{ flex: 1, minWidth: '200px' }}>
                                <label className="text-[10px] text-gold uppercase tracking-widest font-bold" style={{ fontSize: '10px', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Search</label>
                                <input
                                    type="text"
                                    placeholder="Search car name..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="bg-surface-secondary border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gold outline-none"
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff' }}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] text-muted uppercase tracking-widest font-bold" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Segment</label>
                                <select
                                    value={filterSegment}
                                    onChange={(e) => setFilterSegment(e.target.value)}
                                    className="bg-surface-secondary border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gold outline-none cursor-pointer"
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff' }}
                                >
                                    {segments.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] text-muted uppercase tracking-widest font-bold" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Body Type</label>
                                <select
                                    value={filterType}
                                    onChange={(e) => setFilterType(e.target.value)}
                                    className="bg-surface-secondary border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gold outline-none cursor-pointer"
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff' }}
                                >
                                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                                </select>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-[10px] text-muted uppercase tracking-widest font-bold" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Seats</label>
                                <select
                                    value={filterSeats}
                                    onChange={(e) => setFilterSeats(e.target.value)}
                                    className="bg-surface-secondary border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gold outline-none cursor-pointer"
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff' }}
                                >
                                    {seatOptions.map(option => <option key={option} value={option}>{option === "All" ? "All" : `${option} Seats`}</option>)}
                                </select>
                            </div>
                        </div>

                        {/* Sorting */}
                        <div className="flex flex-col gap-1.5 ml-auto">
                            <label className="text-[10px] text-muted uppercase tracking-widest font-bold" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sort By</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="bg-surface-secondary border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:border-gold outline-none cursor-pointer min-w-[150px]"
                                style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff', minWidth: '150px' }}
                            >
                                <option>Recommended</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Car Grid */}
            <section className="py-20" style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    {filteredAndSortedCars.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            {filteredAndSortedCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20" style={{ textAlign: 'center', padding: '80px 0' }}>
                            <span className="text-5xl block mb-6" style={{ fontSize: '48px', display: 'block', marginBottom: '24px' }}>🔍</span>
                            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}>No cars found</h2>
                            <p className="text-secondary" style={{ color: 'var(--text-secondary)' }}>Try adjusting your filters to find your perfect ride.</p>
                            <button
                                onClick={() => { setFilterBrand("All"); setFilterType("All"); setFilterSeats("All"); }}
                                className="mt-8 text-gold font-bold hover:underline"
                                style={{ marginTop: '32px', color: 'var(--accent-gold)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none' }}
                            >
                                Clear All Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Best Deals Banner */}
            {filteredAndSortedCars.length > 0 && (
                <section className="container mb-24" style={{ maxWidth: 'var(--container-width)', margin: '0 auto 96px', padding: '0 24px' }}>
                    <div className="bg-surface-primary border border-white/5 rounded-3xl p-12 text-center" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '48px' }}>
                        <span className="text-gold font-bold uppercase tracking-widest text-xs mb-4 block" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>Special Offers</span>
                        <h2 className="text-3xl font-black text-white mb-6" style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>Monthly Rentals Save Up To 40%</h2>
                        <p className="text-secondary max-w-xl mx-auto mb-8" style={{ color: 'var(--text-secondary)', maxWidth: '576px', margin: '0 auto 32px' }}>Enjoy significant discounts on long-term rentals. Contact us for personalized corporate and monthly packages.</p>
                        <a href="https://wa.me/+971529007996?text=Hi, I'm interested in monthly rental deals." className="btn btn-primary">Inquire for Monthly Deals</a>
                    </div>
                </section>
            )}
        </div>
    );
};

export default FleetPage;
