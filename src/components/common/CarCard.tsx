"use client";

import Link from "next/link";
import Image from "next/image";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";

interface CarCardProps {
    car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
    const { t } = useLanguage();
    return (
        <div className="card group flex flex-col overflow-hidden p-0" style={{ padding: 0 }}>
            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image
                    src={car.mainImage}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/images/hero-car.png'; }}
                />
                {car.isBestDeal && (
                    <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                        <span style={{ backgroundColor: 'var(--accent-gold)', color: '#050505', fontSize: '9px', fontWeight: 900, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                            {t.fleet.bestDeal}
                        </span>
                    </div>
                )}
                {car.segment && (
                    <div style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
                        <span style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.15em', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            {car.segment}
                        </span>
                    </div>
                )}
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px', display: 'block' }}>
                            {car.brand} {car.type}
                        </span>
                        <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>{car.name}</h3>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>{t.fleet.startingAt}</span>
                        <span style={{ color: 'var(--accent-gold)', fontWeight: 900, fontSize: '18px' }}>AED {car.pricePerDay.toLocaleString()}</span>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>{t.fleet.perDay}</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '12px', padding: '16px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>👤</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.seats} {t.fleet.seats}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>⚙️</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.transmission}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>🧳</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.luggage}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '14px' }}>⛽</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.fuel}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <Link href={`/fleet/${car.slug}`} className="btn btn-secondary flex-1" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        {t.fleet.view}
                    </Link>
                    <a href={`https://wa.me/+971529007996?text=${encodeURIComponent(`Hi, I want to rent ${car.brand} ${car.name}.`)}`} className="btn btn-primary flex-1" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        {t.fleet.whatsapp}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
