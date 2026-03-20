import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { PillarsSection } from "@/components/PillarsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuardianshipSection } from "@/components/GuardianshipSection";
import { EventsSection } from "@/components/EventsSection";
import { GallerySection } from "@/components/GallerySection";
import { FoundersSection } from "@/components/FoundersSection";
import { FAQSection } from "@/components/FAQSection";
import { BridgeSection } from "@/components/BridgeSection";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <TestimonialsSection />
      <GuardianshipSection />
      <EventsSection />
      <GallerySection />
      <FoundersSection />
      <FAQSection />
      <BridgeSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
