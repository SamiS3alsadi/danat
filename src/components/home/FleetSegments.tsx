import Link from "next/link";

const segments = [
    { name: "Economy", icon: "🚗", count: "10+ Cars", slug: "Economy" },
    { name: "Sedan", icon: "🏙️", count: "15+ Cars", slug: "Sedan" },
    { name: "SUV", icon: "🏜️", count: "20+ Cars", slug: "SUV" },
    { name: "Van / 7-Seater", icon: "🚐", count: "8+ Cars", slug: "Van" },
    { name: "Luxury", icon: "💎", count: "12+ Cars", slug: "Luxury" },
    { name: "Supercar", icon: "🏁", count: "10+ Cars", slug: "Supercar" },
];

const FleetSegments = () => {
    return (
        <section className="py-24 bg-black" style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        Choose Your Category
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        Explore Our <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Segments</span>
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
                    {segments.map((segment, index) => (
                        <Link
                            key={index}
                            href={`/fleet?segment=${segment.slug}`}
                            className="group p-8 bg-surface-primary border border-white/5 rounded-3xl text-center hover:border-gold transition-all hover:translate-y-[-5px]"
                            style={{ padding: '32px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', textAlign: 'center', transition: 'all 0.3s ease' }}
                        >
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform" style={{ fontSize: '40px', marginBottom: '24px', transition: 'transform 0.3s ease' }}>
                                {segment.icon}
                            </div>
                            <h3 className="text-white font-bold mb-2 uppercase tracking-wider" style={{ color: '#fff', fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {segment.name}
                            </h3>
                            <p className="text-[10px] text-muted uppercase font-bold tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                {segment.count}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FleetSegments;
