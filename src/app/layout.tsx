import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import StickyMobileBar from "@/components/common/StickyMobileBar";

export const metadata: Metadata = {
  title: "Premium Car Rental Dubai | Danat Aldonia Rent a Car",
  description: "Experience the ultimate luxury car rental in Dubai. Wide range of supercars, SUVs, and luxury sedans with 24/7 support and doorstep delivery.",
  keywords: "luxury car rental dubai, rent supercar dubai, lamborghini rental dubai, rolls royce rental dubai, car hire dubai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileBar />
      </body>
    </html>
  );
}
