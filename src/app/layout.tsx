import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileBar from "@/components/common/StickyMobileBar";
import CookieConsent from "@/components/common/CookieConsent";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://danataldonia.com"),
  title: "Premium Car Rental Dubai | Danat Aldonia Rent a Car",
  description: siteConfig.description,
  keywords: "luxury car rental dubai, rent supercar dubai, lamborghini rental dubai, rolls royce rental dubai, car hire dubai",
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "Premium Car Rental Dubai | Danat Aldonia Rent a Car",
    description: siteConfig.description,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <LanguageProvider>
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
            Skip to main content
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
