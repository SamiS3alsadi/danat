import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center', marginBottom: '128px' }}>
                    <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/5" style={{ position: 'relative', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <Image
                            src="/images/cars/huracan-main.jpg"
                            alt="Luxury Car Dubai"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}></div>
                    </div>

                    <div className="space-y-8" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        <span className="text-gold font-bold tracking-widest uppercase text-xs block" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block' }}>Since 2020</span>
                        <h1 className="text-4xl md:text-6xl font-black text-white" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff' }}>Dubai's Premium <br /><span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Rental Experience</span></h1>
                        <p className="text-secondary text-lg leading-relaxed" style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: 1.6 }}>
                            Danat Aldonia Rent a Car was founded with a single mission: to provide an unparalleled luxury driving experience in the heart of Dubai. We believe that renting a car should be as exhilarating as driving it.
                        </p>
                        <p className="text-secondary leading-relaxed" style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Our curated fleet includes the world's most desired marques, from the raw power of Lamborghini and Ferrari to the refined elegance of Rolls Royce and Bentley. We don't just rent cars; we deliver dreams, convenience, and absolute prestige.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', textAlign: 'center' }}>
                    <div className="flex flex-col items-center gap-6">
                        <span className="text-5xl">🎯</span>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Mission</h3>
                        <p className="text-sm text-secondary leading-relaxed" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>To redefine luxury mobility in the UAE through speed, transparency, and an obsession with customer satisfaction.</p>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <span className="text-5xl">💎</span>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Values</h3>
                        <p className="text-sm text-secondary leading-relaxed" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>Integrity in every contract, excellence in every vehicle, and personalization in every interaction.</p>
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <span className="text-5xl">🌟</span>
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Vision</h3>
                        <p className="text-sm text-secondary leading-relaxed" style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>To be the first choice for global travelers and local residents seeking the pinnacle of automotive luxury in Dubai.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
