import FAQAccordion from "@/components/home/FAQAccordion";

export default function FAQPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            { "@type": "Question", "name": "What documents do I need to rent a car?", "acceptedAnswer": { "@type": "Answer", "text": "To rent a car, you need a valid driving license (UAE or international), passport copy, and visit visa (if applicable). UAE residents need an Emirates ID and UAE driving license." } },
            { "@type": "Question", "name": "Is there a minimum age requirement?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the minimum age to rent a car is typically 21 years old. For high-performance supercars, the age requirement may be 25 years or older." } },
            { "@type": "Question", "name": "Do you offer delivery to my location?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely! We offer fast delivery anywhere in Dubai, including hotels, offices, and Dubai International Airport (DXB), usually within 60 minutes." } },
            { "@type": "Question", "name": "What is the insurance policy?", "acceptedAnswer": { "@type": "Answer", "text": "All our rentals include comprehensive insurance. Basic insurance is included in the price, and we offer premium coverage options for additional peace of mind." } }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="bg-black min-h-screen">
                <FAQAccordion />

                <section className="container pb-24" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px 96px' }}>
                    <div className="bg-surface-primary border border-white/5 rounded-3xl p-12 text-center" style={{ backgroundColor: 'var(--surface-primary)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
                        <h2 className="text-2xl font-black text-white mb-6" style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>Still have questions?</h2>
                        <p className="text-secondary mb-10" style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>Our team is available 24/7 to assist you with any inquiries regarding our feet, pricing, or rental policies.</p>
                        <a href="https://wa.me/+971529007996" className="btn btn-primary">Message Us on WhatsApp</a>
                    </div>
                </section>
            </div>
        </>
    );
}
