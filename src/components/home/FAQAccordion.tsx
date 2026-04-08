"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <span style={{ color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.1em', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
                        {t.faq.eyebrow}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff' }}>
                        {t.faq.title} <span style={{ color: 'var(--accent-gold)' }}>{t.faq.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                    {t.faq.items.map((faq, index) => (
                        <div
                            key={index}
                            style={{ border: `1px solid ${openIndex === index ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.05)'}`, borderRadius: '16px', backgroundColor: 'var(--surface-primary)', overflow: 'hidden', transition: 'border-color 0.3s ease' }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' as const }}
                            >
                                <span style={{ fontSize: '17px', fontWeight: 700, color: openIndex === index ? 'var(--accent-gold)' : '#fff', transition: 'color 0.3s ease', flex: 1, paddingRight: '16px' }}>
                                    {faq.q}
                                </span>
                                <span style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0, transition: 'transform 0.3s ease', transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                    +
                                </span>
                            </button>
                            <div style={{ maxHeight: openIndex === index ? '300px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                                <div style={{ padding: '0 24px 24px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
