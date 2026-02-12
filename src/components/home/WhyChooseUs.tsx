const WhyChooseUs = () => {
    const points = [
        { title: "No Deposit Required", desc: "Select cars available with zero security deposit for hassle-free rentals." },
        { title: "Transparent Pricing", desc: "No hidden charges, zero contract fees, and clear insurance policies." },
        { title: "Maintained Fleet", desc: "Our cars undergo regular inspections to ensure peak performance and safety." },
        { title: "Personalized Service", desc: "Dedicated account managers for a seamless and premium experience." },
    ];

    return (
        <section className="py-24 bg-black" style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="flex flex-col lg:flex-row gap-16 items-center" style={{ display: 'flex', flexDirection: 'column', gap: '64px', alignItems: 'center' }}>
                    <div className="flex-1 space-y-8" style={{ flex: 1 }}>
                        <div>
                            <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                                Excellence Guaranteed
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>
                                Why Rent From <br />
                                <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Danat Aldonia?</span>
                            </h2>
                            <p className="text-secondary leading-relaxed max-w-lg" style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '512px' }}>
                                We redefine luxury car rental in Dubai by combining a world-class fleet with exceptional customer service and complete transparency.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
                            {points.map((point, index) => (
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="flex items-center gap-3">
                                        <span className="text-gold text-xl" style={{ color: 'var(--accent-gold)', fontSize: '20px' }}>✓</span>
                                        <h3 className="text-lg font-bold text-white" style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{point.title}</h3>
                                    </div>
                                    <p className="text-sm text-muted leading-relaxed" style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{point.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative group" style={{ flex: 1, position: 'relative' }}>
                        <div className="absolute inset-0 bg-gold/20 blur-[100px] rounded-full group-hover:bg-gold/30 transition-all" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(197, 160, 33, 0.2)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10" style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            {/* Placeholder for an image or graphic */}
                            <div className="absolute inset-0 bg-surface-primary flex items-center justify-center p-12 text-center" style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--surface-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '48px', textAlign: 'center' }}>
                                <div>
                                    <span className="text-gold text-6xl block mb-6" style={{ fontSize: '60px', display: 'block', marginBottom: '24px' }}>🏆</span>
                                    <h4 className="text-2xl font-black text-white uppercase tracking-tighter" style={{ fontSize: '24px', fontWeight: 900, color: '#fff', textTransform: 'uppercase' }}>Dubai's Most Trusted Rental</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
