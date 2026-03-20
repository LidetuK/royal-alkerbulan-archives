import { ScrollReveal } from "./ScrollReveal";

export const MissionSection = () => {
  return (
    <section className="relative py-32 kente-pattern">
      <div className="container max-w-5xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            The Source
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-6 text-balance leading-[1.15]">
            Preserving the Soul of a Continent
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-body text-foreground/60 text-center max-w-2xl mx-auto mb-20 text-lg leading-relaxed">
            Before the borders, before the renaming, there was the Source — the unbroken chain of knowledge passed from elder to youth, from sovereign to subject, from the land to its people.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <ScrollReveal delay={0.1} direction="left">
            <div className="relative pl-8 border-l-2 border-gold/30">
              <h3 className="font-heading text-2xl font-semibold text-gold mb-4">Our Vision</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                To be the world's leading authority on pre-colonial African royal traditions — a living archive that bridges the wisdom of our ancestors with the aspirations of generations yet unborn. We envision a world where African heritage is not a relic, but a compass.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right">
            <div className="relative pl-8 border-l-2 border-terracotta/40">
              <h3 className="font-heading text-2xl font-semibold text-terracotta mb-4">Our Mission</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                To document, educate, and revitalize authentic African royal customs through rigorous scholarship, immersive programming, and the empowerment of traditional leaders and the global diaspora. We are the bridge between memory and future.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
