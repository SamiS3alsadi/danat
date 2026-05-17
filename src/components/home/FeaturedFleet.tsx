"use client";
import Link from "next/link";
import { useRef, useCallback } from "react";
import CarCard from "@/components/common/CarCard";
import fleet from "@/data/fleet.json";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedFleet = () => {
    const { t, isRTL } = useLanguage();
    const featuredCars = (fleet as Car[]).filter(car => car.isFeatured).slice(0, 6);
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = useCallback(() => {
        const el = scrollerRef.current;
        const wrap = wrapRef.current;
        if (!el || !wrap) return;
        const scrolled = isRTL
            ? el.scrollWidth - el.clientWidth + el.scrollLeft
            : el.scrollLeft;
        wrap.classList.toggle('can-scroll-left', scrolled > 16);
    }, [isRTL]);

    const scrollByCard = (direction: 1 | -1) => {
        const el = scrollerRef.current;
        if (!el) return;
        const child = el.firstElementChild as HTMLElement | null;
        const delta = (child?.getBoundingClientRect().width ?? 360) + 24;
        el.scrollBy({ left: delta * direction, behavior: 'smooth' });
    };

    return (
        <section style={{ paddingTop: '120px', paddingBottom: '120px', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', gap: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '620px' }}>
                        <span className="eyebrow">
                            {t.fleet.eyebrow}
                        </span>
                        <h2
                            className="display-serif"
                            style={{
                                fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
                                color: '#fff',
                                fontWeight: 400,
                                lineHeight: 1.05,
                            }}
                        >
                            {t.fleet.title}{' '}
                            <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>
                                {t.fleet.titleHighlight}
                            </span>
                        </h2>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div className="hidden md:flex" style={{ gap: '10px' }}>
                            <button
                                type="button"
                                aria-label="Scroll previous"
                                className="scroller-chevron"
                                onClick={() => scrollByCard(isRTL ? 1 : -1)}
                            >
                                <span aria-hidden="true">{isRTL ? '›' : '‹'}</span>
                            </button>
                            <button
                                type="button"
                                aria-label="Scroll next"
                                className="scroller-chevron"
                                onClick={() => scrollByCard(isRTL ? -1 : 1)}
                            >
                                <span aria-hidden="true">{isRTL ? '‹' : '›'}</span>
                            </button>
                        </div>
                        <Link href="/fleet" className="btn btn-secondary" style={{ padding: '12px 28px', fontSize: '13px' }}>
                            {t.fleet.viewFull}
                        </Link>
                    </div>
                </div>

                <div ref={wrapRef} className="fleet-scroller-wrap">
                    <div
                        ref={scrollerRef}
                        className="fleet-scroller"
                        tabIndex={0}
                        role="region"
                        aria-label={t.fleet.eyebrow}
                        onScroll={handleScroll}
                    >
                        {featuredCars.map((car) => (
                            <CarCard key={car.id} car={car} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedFleet;
