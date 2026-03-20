import { ScrollReveal } from "./ScrollReveal";
import { Play } from "lucide-react";

const items = [
  { title: "Royal Durbar Ceremony", category: "Ceremony", aspect: "tall" },
  { title: "Kente Weaving Workshop", category: "Arts", aspect: "wide" },
  { title: "Elder Council Assembly", category: "Governance", aspect: "square" },
  { title: "Naming Ceremony, Kumasi", category: "Rites", aspect: "square" },
  { title: "Ancestral Shrine, Benin", category: "Sacred Sites", aspect: "tall" },
  { title: "Drum Language Symposium", category: "Performance", aspect: "wide" },
];

const aspectClasses: Record<string, string> = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
};

export const GallerySection = () => {
  return (
    <section className="relative py-28 bg-ebony-light/20">
      <div className="container max-w-6xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            Living Archives
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-16 text-balance leading-[1.15]">
            Glimpses of Heritage
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className={`relative group rounded-sm overflow-hidden cursor-pointer h-full ${aspectClasses[item.aspect]}`}>
                {/* Placeholder with pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-ebony-light to-earth/40 kente-pattern" />
                <div className="absolute inset-0 bg-ebony/50 group-hover:bg-ebony/30 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-body text-[0.6rem] tracking-[0.25em] uppercase text-primary/70 mb-2">{item.category}</span>
                  <h3 className="font-heading text-sm sm:text-base font-semibold text-cream/90 leading-snug">{item.title}</h3>
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-3 h-3 text-primary ml-0.5" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
