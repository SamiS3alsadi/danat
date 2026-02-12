"use client";

const Reviews = () => {
    const testimonials = [
        { name: "John Smith", role: "Business Traveler", text: "Incredible service. The G-Wagon was delivered to my hotel in under 45 minutes. Highly recommend!", rating: 5 },
        { name: "Sarah Al-Fardan", role: "Dubai Resident", text: "The Huracan EVO was in pristine condition. Best luxury car rental experience in the UAE.", rating: 5 },
        { name: "David Chen", role: "Tourist", text: "Transparent pricing and zero hidden fees. The team was very professional and helpful.", rating: 5 },
        { name: "Emma Wilson", role: "Fashion Blogger", text: "Loved the Continental GT. Perfect for my shoot at the Palm. Will definitely rent again!", rating: 5 },
        { name: "Ahmed Mansoor", role: "Entrepreneur", text: "Reliable and fast. The Cullinan is the ultimate way to get around Dubai in comfort.", rating: 5 },
        { name: "Michael Rossi", role: "Supercar Enthusiast", text: "Blown away by the collection. The F8 Tributo was breathtaking. A must-try.", rating: 5 },
    ];

    return (
        <section className="py-24 bg-surface-secondary" style={{ backgroundColor: 'var(--surface-secondary)', padding: '96px 0' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        What Our Clients Say
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        User <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Reviews</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                    {testimonials.map((review, index) => (
                        <div key={index} className="card p-8 bg-black/50 border border-white/5" style={{ padding: '32px', backgroundColor: 'rgba(0, 0, 0, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <div className="flex gap-1 mb-6" style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-gold text-lg" style={{ color: 'var(--accent-gold)', fontSize: '18px' }}>★</span>
                                ))}
                            </div>
                            <p className="text-secondary italic mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '24px', lineHeight: 1.6 }}>
                                "{review.text}"
                            </p>
                            <div>
                                <h4 className="text-white font-bold" style={{ color: '#fff', fontWeight: 700 }}>{review.name}</h4>
                                <p className="text-muted text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{review.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
