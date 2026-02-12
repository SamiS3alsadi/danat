const TrustBar = () => {
    const highlights = [
        { icon: "⚡", title: "Delivery in 60 minutes", desc: "Fastest turnaround in Dubai" },
        { icon: "🛡️", title: "Insurance Options", desc: "Comprehensive coverage plans" },
        { icon: "💎", title: "Verified Cars", desc: "Pristine condition guaranteed" },
        { icon: "📞", title: "24/7 Support", desc: "Always here when you need us" },
    ];

    return (
        <div className="bg-surface-primary border-y border-white/5 py-12" style={{ backgroundColor: 'var(--surface-primary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: '48px 0' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                    {highlights.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4 transition-transform hover:scale-105" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
                            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-3xl shadow-glow border border-white/5" style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: 'var(--shadow-glow)' }}>
                                {item.icon}
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-white" style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fff' }}>
                                    {item.title}
                                </h3>
                                <p className="text-xs text-muted" style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
