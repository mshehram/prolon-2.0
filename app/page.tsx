import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturedSection from "@/components/FeaturedSection";
import OfferingsSection from "@/components/OfferingsSection"
import InfoSection from "@/components/InfoSection"
import ResearchSection from "@/components/ResearchSection"
import FastingCommunity from "@/components/FastingCommunity"
import BenefitsSection from "@/components/BenefitsSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center">
       <Hero/>
       <FeaturedSection/>
       <OfferingsSection/>
       <InfoSection/>
       <ResearchSection/>
        <BenefitsSection/>
       <FastingCommunity/>
            </main>
    </div>
  );
}