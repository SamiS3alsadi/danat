"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { t } = useLanguage();

    return (
        <section style={{ paddingTop: '96px', paddingBottom: '96px', backgroundColor: '#000' }}>
            <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ textAlign: 'center', marginBottom: '72px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <span className="eyebrow">
                        {t.faq.eyebrow}
                    </span>
                    <h2 className="display-serif" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 3.5rem)', fontWeight: 400, color: '#fff', lineHeight: 1.05 }}>
                        {t.faq.title} <span className="display-serif-italic" style={{ color: 'var(--accent-gold)' }}>{t.faq.titleHighlight}</span>
                    </h2>
                </div>

                <div style={{ maxWidth: '768px', margin: '0 auto', display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
                    {t.faq.items.map((faq, index) => {
                        const isOpen = openIndex === index;
                        const panelId = `faq-panel-${index}`;
                        const buttonId = `faq-button-${index}`;
                        return (
                        <div
                            key={index}
                            style={{ border: `1px solid ${isOpen ? 'var(--border-medium)' : 'rgba(255, 255, 255, 0.05)'}`, borderRadius: '16px', backgroundColor: 'var(--surface-primary)', overflow: 'hidden', transition: 'border-color 0.3s ease' }}
                        >
                            <button
                                id={buttonId}
                                aria-expanded={isOpen}
                                aria-controls={panelId}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' as const }}
                            >
                                <span style={{ fontSize: '17px', fontWeight: 700, color: isOpen ? 'var(--accent-gold)' : '#fff', transition: 'color 0.3s ease', flex: 1, paddingRight: '16px' }}>
                                    {faq.q}
                                </span>
                                <span aria-hidden="true" style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0, transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                                    +
                                </span>
                            </button>
                            <div
                                id={panelId}
                                role="region"
                                aria-labelledby={buttonId}
                                style={{ maxHeight: isOpen ? '300px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}
                            >
                                <div style={{ padding: '0 24px 24px', color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.7 }}>
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQAccordion;
