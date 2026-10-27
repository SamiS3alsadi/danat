import type { Metadata } from "next";
import { staticPageMetadata } from "@/i18n/meta";
import { isLocale } from "@/i18n/routes";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FAQAccordion from "@/components/home/FAQAccordion";
import FleetSegments from "@/components/home/FleetSegments";
import FinalCTA from "@/components/home/FinalCTA";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return staticPageMetadata(isLocale(lang) ? lang : "en", "/");
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <TrustBadges />
      <FleetSegments />
      <FeaturedFleet />
      <HowItWorks />
      <WhyChooseUs />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
