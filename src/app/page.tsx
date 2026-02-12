import Image from "next/image";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
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
