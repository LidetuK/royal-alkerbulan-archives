import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";

export const BridgeSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ebony via-ebony-light to-ebony" />
      <div className="absolute inset-0 adinkra-dots opacity-50" />

      <div className="relative container max-w-4xl px-6 text-center">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold/60 mb-4">
            The Dual Path
          </p>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-cream mb-4 text-balance leading-[1.15]">
            "A leader without a past has no footing."
          </h2>
          <p className="font-body text-foreground/60 mb-8 max-w-lg mx-auto leading-relaxed">
            Transition from the <span className="text-gold italic">Soul</span> (Tradition) to the <span className="text-terracotta italic">Sword</span> (Strategy). Discover our sister institution.
          </p>
          <a
            href="/vanguard"
            className="inline-flex items-center gap-3 px-8 py-4 border border-terracotta/40 text-terracotta font-body font-semibold text-sm tracking-wide uppercase rounded-sm transition-all duration-200 hover:bg-terracotta/10 hover:border-terracotta/60 active:scale-[0.97] group"
          >
            The Institute of Vanguard Leaders
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
