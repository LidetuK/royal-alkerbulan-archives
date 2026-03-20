import { SiteNav } from "@/components/SiteNav";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { PillarsSection } from "@/components/PillarsSection";
import { GuardianshipSection } from "@/components/GuardianshipSection";
import { FoundersSection } from "@/components/FoundersSection";
import { BridgeSection } from "@/components/BridgeSection";
import { SiteFooter } from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HeroSection />
      <MissionSection />
      <PillarsSection />
      <GuardianshipSection />
      <FoundersSection />
      <BridgeSection />
      <SiteFooter />
    </div>
  );
};

export default Index;
