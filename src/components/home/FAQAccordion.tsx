"use client";
import { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        { q: "What documents do I need to rent a car?", a: "To rent a car, you need a valid driving license (UAE or international), passport copy, and visit visa (if applicable). UAE residents need an Emirates ID and UAE driving license." },
        { q: "Is there a minimum age requirement?", a: "Yes, the minimum age to rent a car is typically 21 years old. For high-performance supercars, the age requirement may be 25 years or older." },
        { q: "Do you offer delivery to my location?", a: "Absolutely! We offer fast delivery anywhere in Dubai, including hotels, offices, and Dubai International Airport (DXB), usually within 60 minutes." },
        { q: "What is the insurance policy?", a: "All our rentals include comprehensive insurance. Basic insurance is included in the price, and we offer premium coverage options for additional peace of mind." },
        { q: "Can I pay with both card and cash?", a: "Yes, we accept major credit cards, debit cards, cash, and even cryptocurrency (select options) for payment and security deposits." },
        { q: "Is a security deposit mandatory?", a: "While most rentals require a security deposit, we have 'No Deposit' options available for select vehicle categories and customers." },
    ];

    return (
        <section className="py-24 bg-black" style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="text-center mb-16" style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span className="text-gold font-bold tracking-widest uppercase text-xs block mb-4" style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        Got Questions?
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        Frequently Asked <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>Questions</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto flex flex-col gap-4" style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="group border border-white/5 rounded-2xl overflow-hidden bg-surface-primary transition-all"
                            style={{ border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', backgroundColor: 'var(--surface-primary)', overflow: 'hidden' }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 flex justify-between items-center text-left"
                                style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                            >
                                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-gold' : 'text-white'}`} style={{ fontSize: '18px', fontWeight: 700, color: openIndex === index ? 'var(--accent-gold)' : '#fff' }}>
                                    {faq.q}
                                </span>
                                <span className={`text-gold text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} style={{ color: 'var(--accent-gold)', fontSize: '24px', transform: openIndex === index ? 'rotate(45deg)' : 'none' }}>
                                    +
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 animate-fadeInUp" style={{ padding: '0 24px 24px', color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.6 }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
