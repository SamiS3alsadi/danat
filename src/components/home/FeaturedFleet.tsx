import Link from "next/link";
import CarCard from "@/components/common/CarCard";
import fleet from "@/data/fleet.json";
import { Car } from "@/data/types";

const FeaturedFleet = () => {
    // Get first 6 featured cars
    const featuredCars = (fleet as Car[]).filter(car => car.isFeatured).slice(0, 6);

    return (
        <section className="py-24 bg-black" style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', gap: '32px' }}>
                    <div className="flex flex-col gap-4">
                        <span className="text-gold font-bold tracking-widest uppercase text-xs" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px' }}>
                            Explore Our Collection
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                            Featured <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Fleet</span>
                        </h2>
                    </div>
                    <Link href="/fleet" className="btn btn-secondary py-3 px-8 text-xs sm:text-sm" style={{ padding: '12px 32px', fontSize: '14px' }}>
                        View Full Fleet
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {featuredCars.map((car) => (
                        <CarCard key={car.id} car={car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedFleet;
