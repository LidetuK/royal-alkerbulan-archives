import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { MissionSection } from "@/components/MissionSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
              Institute
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight italic">
              About <span className="gold-gradient-text">Us</span>
            </h1>
            <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the mission, vision, and core values of the Institute of African Royal Traditions and Customs Practices.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Content */}
      <div className="flex-grow">
        <MissionSection />
      </div>

      <SiteFooter />
    </div>
  );
};

export default AboutUs;
