import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import { serverT } from "@/i18n/server";
import FAQAccordion from "@/components/home/FAQAccordion";
import { siteConfig } from "@/config/site";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/faq");
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = serverT(lang);

    // Built from the same t.faq.items the accordion renders, so the structured
    // data can never drift from the visible answers and is localized for free.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: t.faq.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
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
                        <h2 className="text-2xl font-black text-white mb-6" style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>{t.faqPage.stillQuestions}</h2>
                        <p className="text-secondary mb-10" style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>{t.faqPage.stillQuestionsDesc}</p>
                        <a href={siteConfig.whatsappMessage(t.whatsapp.question)} className="btn btn-primary">{t.faqPage.messageWhatsApp}</a>
                    </div>
                </section>
            </div>
        </>
    );
}
