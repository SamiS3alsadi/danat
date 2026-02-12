import Link from "next/link";

const FinalCTA = () => {
    return (
        <section className="py-24" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="relative rounded-3xl overflow-hidden bg-surface-primary border border-white/5 p-12 md:p-24 text-center ring-1 ring-gold/20" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '96px 48px', textAlign: 'center' }}>
                    {/* Background Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 blur-[120px] rounded-full" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', backgroundColor: 'rgba(197, 160, 33, 0.1)', filter: 'blur(120px)', borderRadius: '50%' }}></div>

                    <div className="relative z-10 max-w-2xl mx-auto" style={{ position: 'relative', zIndex: 10, maxWidth: '672px', margin: '0 auto' }}>
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, color: '#fff', marginBottom: '32px' }}>
                            Ready to <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Drive?</span>
                        </h2>
                        <p className="text-lg text-secondary mb-12 leading-relaxed" style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: 1.6 }}>
                            Experience the best luxury car rental service in Dubai. Book your dream car in minutes and have it delivered today. No hidden fees, just pure driving pleasure.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
                            <Link href="https://wa.me/+971529007996" className="btn btn-primary px-10">
                                Book on WhatsApp
                            </Link>
                            <Link href="/fleet" className="btn btn-secondary px-10">
                                Browse Full Fleet
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
