import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import TrustBadges from "@/components/home/TrustBadges";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Reviews from "@/components/home/Reviews";
import FAQAccordion from "@/components/home/FAQAccordion";
import FleetSegments from "@/components/home/FleetSegments";
import FinalCTA from "@/components/home/FinalCTA";

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
      <Reviews />
      <FAQAccordion />
      <FinalCTA />
    </>
  );
}
