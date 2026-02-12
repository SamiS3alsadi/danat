const HowItWorks = () => {
    const steps = [
        { number: "01", title: "Choose Your Car", desc: "Select from our premium fleet of supercars, SUVs and luxury sedans." },
        { number: "02", title: "Pick Your Dates", desc: "Choose your desired rental period - daily, weekly or monthly." },
        { number: "03", title: "Instant Delivery", desc: "We deliver the car to your doorstep anywhere in Dubai within 60 minutes." },
        { number: "04", title: "Enjoy Your Drive", desc: "Drive in style and experience absolute comfort across the UAE." },
    ];

    return (
        <section className="py-24 bg-surface-secondary" style={{ backgroundColor: 'var(--surface-secondary)', padding: '96px 0' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="text-center mb-16 max-w-2xl mx-auto" style={{ textAlign: 'center', marginBottom: '64px', maxWidth: '672px', margin: '0 auto' }}>
                    <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        Seamless Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        How It <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Works</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-8 rounded-lg bg-black/40 border border-white/5 hover:border-gold/30 transition-all group" style={{ position: 'relative', padding: '32px', borderRadius: '14px', backgroundColor: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', transition: 'all 0.4s ease' }}>
                            <span className="text-5xl font-black text-white/5 absolute top-4 right-4 group-hover:text-gold/10 transition-colors" style={{ fontSize: '48px', fontWeight: 900, color: 'rgba(255, 255, 255, 0.05)', position: 'absolute', top: '16px', right: '16px' }}>
                                {step.number}
                            </span>
                            <div className="flex flex-col gap-4 relative z-10">
                                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black font-bold text-lg" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '18px' }}>
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white" style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>{step.title}</h3>
                                <p className="text-sm text-secondary leading-relaxed" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
