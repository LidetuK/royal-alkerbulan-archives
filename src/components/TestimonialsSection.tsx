import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The Institute has fundamentally reshaped how our university approaches African Studies. Their archives are unmatched in depth and authenticity.",
    name: "Dr. Amara Osei-Bonsu",
    role: "Chair of African Studies, University of Cape Coast",
  },
  {
    quote: "Through the Diaspora Immersion program, I reconnected with traditions my family lost three generations ago. This is not academic — it is deeply personal.",
    name: "Kwame Asante-Johnson",
    role: "Guardian since 2021",
  },
  {
    quote: "As a traditional leader, I trust the Institute to document our customs with the reverence they deserve. They understand that these are living practices, not museum exhibits.",
    name: "Nana Yaa Asantewaa III",
    role: "Queen Mother, Ashanti Region",
  },
  {
    quote: "The Royal Symposium brought together scholars and chiefs in a way I have never witnessed before. The dialogue was electric, respectful, and groundbreaking.",
    name: "Prof. Babatunde Lawal",
    role: "Art History, Virginia Commonwealth University",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="relative py-28 bg-ebony-light/30">
      <div className="container max-w-5xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            Voices of the Guardians
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-16 text-balance leading-[1.15]">
            Those Who Walk With Us
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="relative h-full p-8 rounded-sm border border-border bg-card/40 transition-all duration-300 hover:border-gold/20">
                <Quote className="w-6 h-6 text-primary/30 mb-4" />
                <blockquote className="font-body text-foreground/70 leading-relaxed mb-6 text-[0.95rem]">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-primary font-heading font-bold text-sm">
                    {t.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-cream">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
