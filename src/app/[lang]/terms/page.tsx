import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import { serverT } from "@/i18n/server";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/terms");
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const t = serverT(lang);

    return (
        <div className="bg-black min-h-screen py-24">
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="max-w-4xl mx-auto space-y-12" style={{ maxWidth: '896px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                    <h1 className="text-4xl font-black text-white" style={{ fontSize: '36px', fontWeight: 900, color: '#fff' }}>
                        {t.termsPage.title}{" "}
                        <span className="text-gold" style={{ color: 'var(--accent-gold)' }}>{t.termsPage.titleHighlight}</span>
                    </h1>

                    <div className="space-y-8 text-secondary leading-relaxed" style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        {t.termsPage.sections.map((section) => (
                            <section key={section.heading} className="space-y-4">
                                <h2 className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontSize: '18px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    {section.heading}
                                </h2>
                                <p>{section.body}</p>
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
