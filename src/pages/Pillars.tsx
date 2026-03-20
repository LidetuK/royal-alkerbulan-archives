import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Crown, BookOpen, Scale, Drum, Brain } from "lucide-react";

const pillars = [
  {
    icon: Crown,
    title: "Chieftaincy & Traditional Governance",
    subtitle: "The art of royal leadership and succession",
    description: "Exploring the intricate systems of rulership, council governance, and succession protocols that have sustained African kingdoms for millennia. From the Ashanti Golden Stool to the Zulu monarchy, we document the living architecture of power.",
  },
  {
    icon: BookOpen,
    title: "Rites of Passage Education",
    subtitle: "The journey of the soul — ROPE",
    description: "Birth, Puberty, Marriage, Elderhood, and Ancestorship — the five thresholds every soul must cross. We preserve the ceremonies, teachings, and spiritual technologies that transform individuals into pillars of community.",
  },
  {
    icon: Scale,
    title: "Customary Law & Jurisprudence",
    subtitle: "The foundation of justice and land tenure",
    description: "Before colonial courts, Africa's legal traditions governed land, family, and trade with nuance and equity. We research and teach these systems of restorative justice that continue to shape communities across the continent.",
  },
  {
    icon: Drum,
    title: "Traditional Arts & Performance",
    subtitle: "Living documents through drum, cloth, and story",
    description: "Every rhythm tells a history. Every pattern encodes a philosophy. We preserve the oral traditions, textile arts, ceremonial performances, and sacred music that are the true libraries of African civilization.",
  },
  {
    icon: Brain,
    title: "African Philosophy & Worldview",
    subtitle: "The mind of Alkerbulan",
    description: "Ubuntu. Ma'at. Sankofa. The philosophical traditions of Africa are not footnotes to Western thought — they are complete systems of ethics, metaphysics, and governance. We study them on their own terms and in their full complexity.",
  },
];

const Pillars = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
                Section 01
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight italic">
                The Five <span className="gold-gradient-text">Pillars</span>
              </h1>
              <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Our academic foundation is built upon five essential disciplines of African traditional life and governance.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Pillars Content */}
      <section className="py-24 adinkra-dots border-t border-gold/5">
        <div className="container max-w-6xl px-6">
          <div className="space-y-12">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-sm bg-ebony-light/40 border border-border hover:border-gold/30 transition-all duration-500 hover:gold-border-glow">
                    <div className="flex flex-col">
                      <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                        <Icon className="w-6 h-6 text-gold" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-cream mb-2 leading-tight">{pillar.title}</h3>
                      <p className="font-body text-sm text-gold/70 italic">{pillar.subtitle}</p>
                    </div>
                    <div className="flex items-center text-foreground/70 font-body text-base leading-relaxed">
                      {pillar.description}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Pillars;
