import Link from "next/link";

export default function PricingPage() {
    const packages = [
        { name: "Daily", discount: "Base Rate", desc: "Perfect for a day of thrill or business meetings.", icon: "🚗" },
        { name: "Weekly", discount: "Save 15%", desc: "Ideal for a full week of exploration in the UAE.", icon: "📅" },
        { name: "Monthly", discount: "Save 40%", desc: "The best value for long-term luxury and comfort.", icon: "💎" },
    ];

    const categoryPricing = [
        { name: "Economy", start: "AED 90", cars: "Kia Pegas, MG 5" },
        { name: "Sedan", start: "AED 180", cars: "Toyota Camry, Accord" },
        { name: "SUV", start: "AED 250", cars: "Tucson, Sportage, Patrol" },
        { name: "Van / 7-Seater", start: "AED 350", cars: "Odyssey, V-Class" },
        { name: "Luxury", start: "AED 800", cars: "S-Class, Range Rover" },
        { name: "Supercar", start: "AED 2500", cars: "Ferrari, Lamborghini" },
    ];

    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        Flexible & Transparent
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff' }}>
                        Economy to <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Luxury</span>
                    </h1>
                    <p className="text-secondary text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)', fontSize: '18px', maxWidth: '672px', margin: '0 auto' }}>
                        Whatever your budget or style, Danat Aldonia has the perfect ride. Discover our starting rates across all car segments.
                    </p>
                </div>

                {/* Main Packages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '96px' }}>
                    {packages.map((pkg, index) => (
                        <div key={index} className="group p-10 bg-surface-primary border border-white/5 rounded-3xl text-center hover:border-gold transition-all" style={{ padding: '40px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', textAlign: 'center' }}>
                            <div className="text-5xl mb-6" style={{ fontSize: '48px', marginBottom: '24px' }}>{pkg.icon}</div>
                            <div className="space-y-2 mb-6">
                                <span className="text-gold font-black text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--accent-gold)', fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.2em' }}>{pkg.discount}</span>
                                <h3 className="text-3xl font-black text-white" style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>{pkg.name} Rental</h3>
                            </div>
                            <p className="text-sm text-secondary leading-relaxed mb-8" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>{pkg.desc}</p>
                            <Link href="/fleet" className="btn btn-secondary w-full" style={{ width: '100%' }}>
                                Browse Fleet
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Category Starting Prices */}
                <div className="mb-24" style={{ marginBottom: '96px' }}>
                    <h2 className="text-2xl font-black text-white mb-10 text-center uppercase tracking-widest" style={{ fontSize: '24px', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '40px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Rates by Category</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                        {categoryPricing.map((cat, i) => (
                            <div key={i} className="flex items-center justify-between p-6 bg-surface-primary border border-white/5 rounded-2xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px' }}>
                                <div>
                                    <h4 className="text-white font-black uppercase text-sm mb-1" style={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase', fontSize: '14px' }}>{cat.name}</h4>
                                    <p className="text-[10px] text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{cat.cars}</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs text-muted block" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>Starts at</span>
                                    <span className="text-gold font-black text-xl" style={{ color: 'var(--accent-gold)', fontWeight: 900, fontSize: '20px' }}>{cat.start}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Transparent Pricing Info */}
                <div className="bg-surface-primary border border-white/5 rounded-3xl p-12 md:p-20" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '80px 48px' }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
                        <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                            <h2 className="text-3xl font-black text-white" style={{ fontSize: '30px', fontWeight: 900, color: '#fff' }}>What affects the price?</h2>
                            <div className="flex flex-col gap-6" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                                <div className="flex gap-4">
                                    <span className="text-gold text-2xl">⚡</span>
                                    <div>
                                        <h4 className="text-white font-bold mb-1" style={{ color: '#fff', fontWeight: 700 }}>Kilometers Included</h4>
                                        <p className="text-sm text-secondary" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Economy/SUV: 250km/day. Luxury/Supercar: 200km/day. Extra KM charges apply.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gold text-2xl">🛡️</span>
                                    <div>
                                        <h4 className="text-white font-bold mb-1" style={{ color: '#fff', fontWeight: 700 }}>Standard Insurance</h4>
                                        <p className="text-sm text-secondary" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>All rentals include basic collision coverage. Premium upgrades available on request.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <span className="text-gold text-2xl">📦</span>
                                    <div>
                                        <h4 className="text-white font-bold mb-1" style={{ color: '#fff', fontWeight: 700 }}>Monthly Deals</h4>
                                        <p className="text-sm text-secondary" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Long-term rentals of 30+ days receive an automatic 40% discount on base rates.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/30 p-10 rounded-2xl border border-gold/10 flex flex-col justify-center gap-6" style={{ backgroundColor: 'rgba(0,0,0,0.3)', padding: '40px', borderRadius: '16px', border: '1px solid rgba(197, 160, 33, 0.1)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <h3 className="text-2xl font-black text-gold" style={{ fontSize: '24px', fontWeight: 900, color: 'var(--accent-gold)' }}>Zero Hidden Fees</h3>
                            <p className="text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We guarantee that the price quoted on WhatsApp is the final price you'll pay at delivery. This includes VAT and standard delivery within Dubai.</p>
                            <div className="pt-6 border-t border-white/5" style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <a href="https://wa.me/+971529007996" className="btn btn-primary w-full text-center">Inquire Pricing on WhatsApp</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
