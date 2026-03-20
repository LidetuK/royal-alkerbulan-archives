import { ScrollReveal } from "./ScrollReveal";

const founders = [
  {
    name: "HRH Thee Royal Warrior",
    subtitle: "Redeemer Resk'Que",
    role: "Founder & Visionary Lead",
    description:
      "A traditional authority whose life's work is the reclamation and revitalization of African royal customs. Drawing from lineage, lived experience, and an unwavering commitment to cultural sovereignty, he stands as the spiritual anchor of the Institute — a bridge between the throne and the world.",
  },
  {
    name: "Prof. John Aheto",
    subtitle: "",
    role: "Co-Founder & Strategic Architect",
    description:
      "An academic of distinguished rigour, Prof. Aheto brings institutional architecture and scholarly precision to the Institute. His expertise in African governance systems and diaspora studies ensures that every initiative meets the highest standards of research integrity and global relevance.",
  },
];

export const FoundersSection = () => {
  return (
    <section className="relative py-32 kente-pattern">
      <div className="container max-w-5xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-terracotta mb-4 text-center">
            The Visionaries
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-16 text-balance leading-[1.15]">
            Stewards of the Legacy
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.15} direction={i === 0 ? "left" : "right"}>
              <div className="relative p-8 rounded-sm bg-ebony-light/50 border border-border">
                {/* Monogram */}
                <div className="w-16 h-16 rounded-sm bg-gold/10 flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl font-bold text-gold">
                    {f.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-cream">{f.name}</h3>
                {f.subtitle && <p className="font-body text-sm text-gold/60 italic">{f.subtitle}</p>}
                <p className="font-body text-xs tracking-[0.2em] uppercase text-terracotta mt-1 mb-4">{f.role}</p>
                <p className="font-body text-sm text-foreground/60 leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
