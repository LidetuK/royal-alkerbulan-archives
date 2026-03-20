import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { GuardianshipDialog } from "./GuardianshipDialog";
import { Eye, BookMarked, Crown } from "lucide-react";

const tiers = [
  {
    icon: Eye,
    name: "The Seeker",
    level: "General Guardianship",
    features: [
      "Full access to digital archives",
      '"Ancestral Wisdom" monthly webinars',
      "Quarterly heritage newsletter",
      "Community forum membership",
    ],
  },
  {
    icon: BookMarked,
    name: "The Custodian",
    level: "Scholar & Professional",
    featured: true,
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
    features: [
      "Everything in The Custodian",
      "Private consultations with the Board",
      "Naming rights for research wings",
      "Institutional partnership framework",
      "Diaspora Immersion priority placement",
    ],
  },
];

export const GuardianshipSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("The Seeker");

  const openDialog = (tierName: string) => {
    setSelectedTier(tierName);
    setDialogOpen(true);
  };

  return (
    <section className="relative py-32">
      <div className="container max-w-6xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            Act of Guardianship
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-6 text-balance leading-[1.15]">
            Become a Guardian of Heritage
          </h2>
          <p className="font-body text-foreground/60 text-center max-w-xl mx-auto mb-16 text-lg leading-relaxed">
            This is not a subscription. It is a covenant — a pledge to ensure that the wisdom of Alkerbulan endures.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={`relative h-full p-8 rounded-sm border transition-all duration-300 ${
                    tier.featured
                      ? "bg-gold/5 border-gold/40 gold-border-glow"
                      : "bg-ebony-light/40 border-border hover:border-gold/20"
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-8 px-3 py-1 bg-primary text-primary-foreground text-xs font-body font-semibold tracking-wide uppercase rounded-sm">
                      Most Chosen
                    </div>
                  )}
                  <Icon className={`w-8 h-8 mb-6 ${tier.featured ? "text-gold" : "text-terracotta"}`} />
                  <h3 className="font-heading text-2xl font-bold text-cream mb-1">{tier.name}</h3>
                  <p className="font-body text-sm text-gold/60 mb-6 italic">{tier.level}</p>
                  <ul className="space-y-3">
                    {tier.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-2 flex-shrink-0" />
                        <span className="font-body text-sm text-foreground/70">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => openDialog(tier.name)}
                    className={`w-full mt-8 py-3 font-body font-semibold text-sm tracking-wide uppercase rounded-sm transition-all duration-200 active:scale-[0.97] ${
                      tier.featured
                        ? "bg-primary text-primary-foreground hover:shadow-[0_4px_24px_hsl(43_56%_56%/0.3)]"
                        : "border border-gold/30 text-gold hover:bg-gold/10"
                    }`}
                  >
                    Join as {tier.name}
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <GuardianshipDialog open={dialogOpen} onOpenChange={setDialogOpen} tierName={selectedTier} />
    </section>
  );
};
