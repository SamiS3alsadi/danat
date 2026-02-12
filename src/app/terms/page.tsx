export default function TermsPage() {
    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="max-w-4xl mx-auto space-y-12" style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    <h1 className="text-4xl font-black text-white" style={{ fontSize: '36px', fontWeight: 900, color: '#fff' }}>Terms & <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Conditions</span></h1>

                    <div className="space-y-8 text-secondary leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>1. Rental Requirements</h2>
                            <p>All drivers must be at least 21 years of age (25 for supercars). A valid UAE driving license or an international driving permit along with a home-country license is required.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>2. Booking & Cancellation</h2>
                            <p>Bookings are confirmed upon receipt of a partial or full payment. Cancellations made within 48 hours of the pickup time may be subject to a cancellation fee.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>3. Insurance & Liability</h2>
                            <p>Vehicle rental includes comprehensive insurance coverage. However, the hirer is responsible for the insurance excess amount in case of an accident where the hirer is at fault (Police Report is mandatory).</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>4. Security Deposit</h2>
                            <p>A refundable security deposit is required for all rentals. This deposit covers potential traffic fines, Salik charges, or minor damages not covered by insurance. The refund process takes 21-30 business days.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
