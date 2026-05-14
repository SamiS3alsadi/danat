"use client";

import Link from "next/link";
import Image from "next/image";
import { Car } from "@/data/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

interface CarCardProps {
    car: Car;
}

const UserIcon = () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
);

const GearIcon = () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" /><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const LuggageIcon = () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 3h-6a2 2 0 0 0-2 2v1H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-2V5a2 2 0 0 0-2-2Z" /><path d="M9 6V5" /><path d="M15 6V5" />
    </svg>
);

const FuelIcon = () => (
    <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12" /><path d="M3 14h12" /><path d="M17 9h1a2 2 0 0 1 2 2v7a1 1 0 0 0 2 0V9a4 4 0 0 0-4-4h-1" />
    </svg>
);

const CarCard = ({ car }: CarCardProps) => {
    const { t } = useLanguage();
    return (
        <div className="card group flex flex-col overflow-hidden" style={{ padding: 0, cursor: 'pointer' }}>
            <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image
                    src={car.mainImage}
                    alt={`${car.brand} ${car.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        <span style={{ color: 'var(--text-muted)' }}><UserIcon /></span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.seats} {t.fleet.seats}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--text-muted)' }}><GearIcon /></span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.transmission}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--text-muted)' }}><LuggageIcon /></span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.luggage}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ color: 'var(--text-muted)' }}><FuelIcon /></span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.fuel}</span>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <Link href={`/fleet/${car.slug}`} className="btn btn-secondary flex-1" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        {t.fleet.view}
                    </Link>
                    <a href={siteConfig.whatsappMessage(`Hi, I want to rent ${car.brand} ${car.name}.`)} className="btn btn-primary flex-1" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        {t.fleet.whatsapp}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
