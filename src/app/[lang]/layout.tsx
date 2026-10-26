import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/common/StickyMobileBar";
import CookieConsent from "@/components/common/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";
import { BASE_URL, LOCALES, isLocale, urlFor } from "@/i18n/routes";
import { routeMeta, staticPageMetadata } from "@/i18n/meta";
import { serverT } from "@/i18n/server";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  return {
    metadataBase: new URL(BASE_URL),
    keywords:
      "luxury car rental dubai, rent supercar dubai, economy car rental dubai, lamborghini rental dubai, rolls royce rental dubai, car hire dubai",
    ...staticPageMetadata(lang, "/"),
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const isRTL = lang === "ar";
  const skipLabel = serverT(lang).a11y.skipToContent;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: routeMeta(lang, "/").description,
    url: urlFor(lang, "/"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    sameAs: [siteConfig.instagram],
    priceRange: "AED 200 - AED 5000",
    openingHours: "Mo-Su 00:00-23:59",
  };

  return (
    <html lang={lang} dir={isRTL ? "rtl" : "ltr"}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider locale={lang}>
          <a
            href="#main-content"
            style={{
              position: 'absolute',
              left: '-9999px',
              top: 'auto',
              width: '1px',
              height: '1px',
              overflow: 'hidden',
            }}
            className="focus:left-0 focus:w-auto focus:h-auto focus:p-4 focus:z-[9999] focus:bg-black focus:text-white"
          >
            {skipLabel}
          </a>
          <Navbar />
          <main id="main-content" style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
            {children}
          </main>
          <Footer />
          <StickyMobileBar />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
