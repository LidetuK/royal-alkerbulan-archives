import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Eye, BookMarked, Crown } from "lucide-react";

const tiers = [
  {
    icon: Eye,
    name: "The Seeker",
    level: "General Guardianship",
    description: "For those beginning their journey into the depths of African royal history and traditional wisdom.",
    features: [
      "Full access to digital archives",
      "Ancestral Wisdom monthly webinars",
      "Quarterly heritage newsletter",
      "Community forum membership",
    ],
  },
  {
    icon: BookMarked,
    name: "The Custodian",
    level: "Scholar & Professional",
    description: "For researchers, educators, and professionals dedicated to the preservation of cultural architecture.",
    features: [
      "Everything in The Seeker",
      "Research grant eligibility",
      "Annual Royal Symposium invitation",
      "Peer-reviewed publication access",
      "Mentorship pairing with elders",
    ],
  },
  {
    icon: Crown,
    name: "The Royal Patron",
    level: "Institutional",
    description: "For institutions and individuals seeking to provide foundational support for the Institute's global mission.",
    features: [
      "Everything in The Custodian",
      "Private consultations with the Board",
      "Naming rights for research wings",
      "Institutional partnership framework",
      "Diaspora Immersion priority placement",
    ],
  },
];

const Guardianship = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-terracotta mb-4">
                Section 02
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight">
                Guardianship <span className="gold-gradient-text">Roles</span>
              </h1>
              <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed italic">
                Covenants of preservation for those who choose to stand as shields for our collective inheritance.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Guardianship Content */}
      <section className="py-24 bg-ebony-light/20 relative border-t border-gold/5 flex-grow">
        <div className="container max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="h-full flex flex-col p-8 rounded-sm border border-border bg-background hover:bg-ebony-light/40 transition-all duration-300">
                    <Icon className="w-8 h-8 text-gold mb-6" />
                    <h3 className="font-heading text-2xl font-bold text-cream mb-1">{tier.name}</h3>
                    <p className="font-body text-xs text-gold/60 mb-6 uppercase tracking-widest">{tier.level}</p>
                    <p className="font-body text-sm text-foreground/60 mb-8 leading-relaxed italic">{tier.description}</p>
                    <ul className="mt-auto space-y-4">
                      {tier.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-terracotta mt-2 shrink-0" />
                          <span className="font-body text-sm text-foreground/80 leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
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

export default Guardianship;
