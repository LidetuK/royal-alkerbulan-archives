import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

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

const Visionaries = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
                Section 03
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight italic">
                Our <span className="gold-gradient-text">Visionaries</span>
              </h1>
              <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                The Institute is guided by a fusion of traditional authority and scholarly precision.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Visionaries Content */}
      <section className="py-24 adinkra-dots border-t border-gold/5 flex-grow">
        <div className="container max-w-4xl px-6">
          <div className="space-y-16">
            {founders.map((f, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gold/5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="flex flex-col sm:flex-row gap-8 items-start">
                    <div className="w-24 h-24 rounded-sm bg-ebony-light flex items-center justify-center border border-gold/20 shrink-0">
                      <span className="font-heading text-3xl font-bold text-gold">
                        {f.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl font-bold text-cream mb-1">{f.name}</h3>
                      <p className="font-body text-sm text-gold/60 italic mb-2">{f.subtitle}</p>
                      <p className="font-body text-xs tracking-widest uppercase text-terracotta mb-6">{f.role}</p>
                      <p className="font-body text-lg text-foreground/70 leading-relaxed italic border-l-2 border-gold/30 pl-6 py-2">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Visionaries;
