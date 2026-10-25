"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import CarCard from "@/components/common/CarCard";
import fleetData from "@/data/fleet.json";
import { Car } from "@/data/types";
import { AVAILABLE_CATEGORIES, findCategory, matchesCategory } from "@/data/categories";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

const FleetPage = () => {
    const { t } = useLanguage();
    const cars = fleetData as Car[];
    const [searchQuery, setSearchQuery] = useState("");
    const [searchInput, setSearchInput] = useState("");
    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleSearchChange = useCallback((value: string) => {
        setSearchInput(value);
        if (debounceTimer.current) clearTimeout(debounceTimer.current);
        debounceTimer.current = setTimeout(() => setSearchQuery(value), 300);
    }, []);
    const [filterCategory, setFilterCategory] = useState<string>("All");
    const [filterSeats, setFilterSeats] = useState<string>("All");
    const [sortBy, setSortBy] = useState<string>("recommended");

    // Preselect a category from the URL — ?category= , or legacy ?segment=
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = findCategory(params.get("category") ?? params.get("segment"));
        if (category) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFilterCategory(category.slug);
        }
    }, []);

    const seatOptions = ["All", "2", "4", "5", "7+"];

    const sortOptions = [
        { value: "recommended", label: t.fleetPage.recommended },
        { value: "price_low", label: t.fleetPage.priceLow },
        { value: "price_high", label: t.fleetPage.priceHigh },
        { value: "newest", label: t.fleetPage.newest },
    ];

    const filteredAndSortedCars = useMemo(() => {
        const result = cars.filter(car => {
            const searchMatch = searchQuery === "" ||
                car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                car.brand.toLowerCase().includes(searchQuery.toLowerCase());
            const categoryMatch = filterCategory === "All" || matchesCategory(car, filterCategory);
            const seatsMatch = filterSeats === "All" ||
                (filterSeats === "2" && car.specs.seats === 2) ||
                (filterSeats === "4" && car.specs.seats === 4) ||
                (filterSeats === "5" && car.specs.seats === 5) ||
                (filterSeats === "7+" && car.specs.seats >= 7);
            return searchMatch && categoryMatch && seatsMatch;
        });

        switch (sortBy) {
            case "price_low":
                result.sort((a, b) => a.pricePerDay - b.pricePerDay);
                break;
            case "price_high":
                result.sort((a, b) => b.pricePerDay - a.pricePerDay);
                break;
            case "newest":
                result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
                break;
            default:
                result.sort((a, b) => {
                    if (a.isBestDeal && !b.isBestDeal) return -1;
                    if (!a.isBestDeal && b.isBestDeal) return 1;
                    if (a.isFeatured && !b.isFeatured) return -1;
                    if (!a.isFeatured && b.isFeatured) return 1;
                    return 0;
                });
        }

        return result;
    }, [cars, searchQuery, filterCategory, filterSeats, sortBy]);

    return (
        <div className="bg-black min-h-screen pb-24">
            {/* Header */}
            <section style={{ backgroundColor: 'var(--surface-primary)', borderBottom: '1px solid var(--border-subtle)', padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
                        {t.fleetPage.title} <span style={{ color: 'var(--accent-gold)' }}>{t.fleetPage.titleHighlight}</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '672px' }}>
                        {t.fleetPage.desc}
                    </p>
                </div>
            </section>

            {/* Filters & Sorting */}
            <section style={{ position: 'sticky', top: 'var(--header-height)', zIndex: 30, backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border-subtle)', padding: '24px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
                        {/* Filters */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', flex: 1 }}>
                            <div style={{ flex: 1, minWidth: '200px' }}>
                                <label htmlFor="fleet-search" style={{ fontSize: '10px', color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                                    {t.fleetPage.searchLabel}
                                </label>
                                <input
                                    id="fleet-search"
                                    type="text"
                                    placeholder={t.fleetPage.searchPlaceholder}
                                    value={searchInput}
                                    onChange={(e) => handleSearchChange(e.target.value)}
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff', width: '100%' }}
                                />
                            </div>

                            <div>
                                <label htmlFor="fleet-category" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                                    {t.fleetPage.categoryLabel}
                                </label>
                                <select
                                    id="fleet-category"
                                    value={filterCategory}
                                    onChange={(e) => setFilterCategory(e.target.value)}
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff', cursor: 'pointer' }}
                                >
                                    <option value="All">{t.fleetPage.allSeats}</option>
                                    {AVAILABLE_CATEGORIES.map(category => (
                                        <option key={category.slug} value={category.slug}>
                                            {t.segments.items[category.i18nIndex].name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="fleet-seats" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                                    {t.fleetPage.seatsLabel}
                                </label>
                                <select
                                    id="fleet-seats"
                                    value={filterSeats}
                                    onChange={(e) => setFilterSeats(e.target.value)}
                                    style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff', cursor: 'pointer' }}
                                >
                                    {seatOptions.map(option => (
                                        <option key={option} value={option}>
                                            {option === "All" ? t.fleetPage.allSeats : `${option} ${t.fleetPage.seatsOption}`}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Sorting */}
                        <div style={{ marginLeft: 'auto' }}>
                            <label htmlFor="fleet-sort" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, display: 'block', marginBottom: '6px' }}>
                                {t.fleetPage.sortLabel}
                            </label>
                            <select
                                id="fleet-sort"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                style={{ backgroundColor: 'var(--surface-secondary)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', color: '#fff', cursor: 'pointer', minWidth: '150px' }}
                            >
                                {sortOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Car Grid */}
            <section style={{ padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    {filteredAndSortedCars.length > 0 ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                            {filteredAndSortedCars.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <svg aria-hidden="true" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', margin: '0 auto 24px' }}>
                                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{t.fleetPage.noResults}</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>{t.fleetPage.noResultsDesc}</p>
                            <button
                                onClick={() => { setFilterCategory("All"); setFilterSeats("All"); setSearchQuery(""); setSearchInput(""); }}
                                style={{ marginTop: '32px', color: 'var(--accent-gold)', fontWeight: 700, cursor: 'pointer', background: 'none', border: 'none', fontSize: '14px' }}
                            >
                                {t.fleetPage.clearFilters}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Best Deals Banner */}
            {filteredAndSortedCars.length > 0 && (
                <section className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto 96px', padding: '0 24px' }}>
                    <div style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                            {t.fleetPage.specialOffers}
                        </span>
                        <h2 style={{ fontSize: '24px', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>{t.fleetPage.savingsTitle}</h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '576px', margin: '0 auto 32px' }}>{t.fleetPage.savingsDesc}</p>
                        <a href={siteConfig.whatsappMessage("Hi, I'm interested in monthly rental deals.")} className="btn btn-primary">
                            {t.fleetPage.inquireMonthly}
                        </a>
                    </div>
                </section>
            )}
        </div>
    );
};

export default FleetPage;
