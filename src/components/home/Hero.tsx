import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative', overflow: 'hidden' }}>
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/hero-car.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
                    style={{
                        background: 'linear-gradient(to right, #050505 0%, rgba(5, 5, 5, 0.6) 50%, transparent 100%)',
                        position: 'absolute',
                        inset: 0
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
                    style={{
                        background: 'linear-gradient(to top, #050505 0%, transparent 50%)',
                        position: 'absolute',
                        inset: 0
                    }}
                ></div>
            </div>

            <div className="container relative z-10" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 10 }}>
                <div className="max-w-3xl animate-fadeInUp" style={{ maxWidth: '768px' }}>
                    <span className="text-gold font-bold tracking-[0.2em] uppercase text-sm mb-6 block" style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '14px', marginBottom: '24px', display: 'block' }}>
                        The Ultimate Driving Experience
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8 animate-fadeInUp" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: 900, color: '#fff', lineHeight: 1, marginBottom: '32px' }}>
                        Car Rental in Dubai <br />
                        <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Economy to Luxury</span>
                    </h1>

                    <p className="text-lg md:text-xl text-secondary max-w-2xl mb-12 animate-fadeInUp delay-100 uppercase tracking-widest font-bold" style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '672px', marginBottom: '48px', lineHeight: 1.6, letterSpacing: '0.1em' }}>
                        Daily • Weekly • Monthly • Delivery Available • 24/7 Support
                    </p>

                    <div className="flex flex-wrap gap-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
                        <a href="https://wa.me/+971529007996" className="btn btn-primary">
                            <span style={{ marginRight: '8px' }}>💬</span> Book on WhatsApp
                        </a>
                        <a href="tel:+971529007996" className="btn btn-secondary">
                            <span style={{ marginRight: '8px' }}>📞</span> Call Now
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex gap-10 items-center" style={{ marginTop: '64px', display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 700 }}>60 Min</span>
                        <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Fast Delivery</span>
                    </div>
                    <div className="w-px h-10 bg-white/10" style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 700 }}>24/7</span>
                        <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Local Support</span>
                    </div>
                    <div className="w-px h-10 bg-white/10" style={{ width: '1px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold" style={{ fontSize: '24px', fontWeight: 700 }}>100%</span>
                        <span className="text-xs text-muted uppercase tracking-widest" style={{ fontSize: '10px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Verified Fleet</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
