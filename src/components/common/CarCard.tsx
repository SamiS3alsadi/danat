import Link from "next/link";
import Image from "next/image";
import { Car } from "@/data/types";

interface CarCardProps {
    car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
    return (
        <div className="card group flex flex-col overflow-hidden p-0" style={{ padding: 0 }}>
            {/* Car Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden" style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                <Image
                    src={car.mainImage}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {car.segment && (
                    <div className="absolute top-4 right-4 z-10" style={{ position: 'absolute', top: '16px', right: '16px', zIndex: 10 }}>
                        <span className="bg-white/10 backdrop-blur-md text-[9px] font-black text-white px-3 py-1 rounded-md uppercase tracking-widest border border-white/10" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#fff', fontSize: '9px', fontWeight: 900, padding: '4px 10px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.15em', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            {car.segment}
                        </span>
                    </div>
                )}
            </div>

            {/* Car Content */}
            <div className="p-6 flex flex-col flex-1 gap-4" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '16px' }}>
                <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                        <span className="text-xs text-muted uppercase tracking-widest mb-1" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                            {car.brand} {car.type}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>
                            {car.name}
                        </h3>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-muted block mb-1" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Starting at</span>
                        <span className="text-gold font-black text-lg" style={{ color: 'var(--accent-gold)', fontWeight: 900, fontSize: '18px' }}>
                            AED {car.pricePerDay.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted block" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>/ Day</span>
                    </div>
                </div>

                {/* Specs Grid - Adapt based on segment */}
                <div className="grid grid-cols-2 gap-y-3 py-4 border-y border-white/5" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '12px', padding: '16px 0', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div className="flex items-center gap-2">
                        <span style={{ fontSize: '14px' }}>👤</span>
                        <span className="text-xs text-secondary" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span style={{ fontSize: '14px' }}>⚙️</span>
                        <span className="text-xs text-secondary" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.transmission}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span style={{ fontSize: '14px' }}>🧳</span>
                        <span className="text-xs text-secondary" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span style={{ fontSize: '14px' }}>⛽</span>
                        <span className="text-xs text-secondary" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{car.specs.fuel}</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto" style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                    <Link href={`/fleet/${car.slug}`} className="btn btn-secondary flex-1 py-3 text-[10px] font-black uppercase tracking-widest" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        View
                    </Link>
                    <a href={`https://wa.me/+971529007996?text=${encodeURIComponent(`Hi, I want to rent ${car.brand} ${car.name}.`)}`} className="btn btn-primary flex-1 py-3 text-[10px] font-black uppercase tracking-widest" style={{ flex: 1, padding: '12px', fontSize: '10px', fontWeight: 900, letterSpacing: '0.1em' }}>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
