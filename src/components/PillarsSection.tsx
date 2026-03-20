import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { Crown, BookOpen, Scale, Drum, Brain } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

export const PillarsSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 adinkra-dots">
      <div className="container max-w-6xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-terracotta mb-4 text-center">
            Academic Foundation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-16 text-balance leading-[1.15]">
            The Five Pillars
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isExpanded = expandedIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.08} className={i === 4 ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none" : ""}>
                <motion.div
                  onClick={() => setExpandedIndex(isExpanded ? null : i)}
                  className="relative cursor-pointer group h-full p-8 rounded-sm bg-ebony-light/60 border border-border hover:border-gold/30 transition-colors duration-300 gold-border-glow overflow-hidden"
                  layout
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-cream leading-tight">{pillar.title}</h3>
                      <p className="font-body text-sm text-gold/70 mt-1 italic">{pillar.subtitle}</p>
                    </div>
                  </div>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="font-body text-sm text-foreground/60 leading-relaxed overflow-hidden"
                      >
                        {pillar.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className="font-body text-xs text-gold/40 mt-4 tracking-wide uppercase">
                    {isExpanded ? "Tap to close" : "Tap to explore"}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
