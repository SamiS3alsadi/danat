export default function PrivacyPage() {
    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="max-w-4xl mx-auto space-y-12" style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    <h1 className="text-4xl font-black text-white" style={{ fontSize: '36px', fontWeight: 900, color: '#fff' }}>Privacy <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Policy</span></h1>

                    <div className="space-y-8 text-secondary leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <p>At Danat Aldonia Rent a Car, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you use our website or services.</p>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>1. Information Collection</h2>
                            <p>We collect personal information such as your name, contact details, driving license information, and payment details necessary for the car rental process.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2. Use of Information</h2>
                            <p>Your information is used to process bookings, manage rentals, provide 24/7 support, and comply with UAE legal requirements for car rental operations.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>3. Data Sharing</h2>
                            <p>We do not sell your data. Information may be shared with government authorities (RTA/Police) as required by law or with insurance providers during claims processing.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
