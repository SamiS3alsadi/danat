"use client";
import Link from "next/link";
import CarCard from "@/components/common/CarCard";
import fleet from "@/data/fleet.json";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedFleet = () => {
    const { t } = useLanguage();
    const featuredCars = (fleet as Car[]).filter(car => car.isFeatured).slice(0, 6);

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ display: 'flex', flexWrap: 'wrap' as const, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px' }}>
                            {t.fleet.eyebrow}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                            {t.fleet.title} <span style={{ color: 'var(--accent-gold)' }}>{t.fleet.titleHighlight}</span>
                        </h2>
                    </div>
                    <Link href="/fleet" className="btn btn-secondary" style={{ padding: '12px 32px', fontSize: '14px' }}>
                        {t.fleet.viewFull}
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {featuredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedFleet;
