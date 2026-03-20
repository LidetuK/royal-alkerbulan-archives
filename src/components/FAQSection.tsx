import { ScrollReveal } from "./ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the Institute of African Royal Traditions?",
    a: "We are the global repository for pre-colonial Alkerbulan heritage — an academic institute dedicated to the research, documentation, preservation, and promotion of authentic African royal customs and governance traditions.",
  },
  {
    q: "Who can become a Guardian?",
    a: "Anyone with a sincere commitment to preserving African heritage. Our three tiers — The Seeker, The Custodian, and The Royal Patron — accommodate individuals, scholars, professionals, and institutions alike.",
  },
  {
    q: "What is the 'Return to the Source' Diaspora Immersion?",
    a: "An immersive multi-week journey through sacred sites, royal courts, and living cultural traditions in West Africa. It is designed for members of the diaspora seeking to reconnect with their ancestral roots through direct experience rather than textbook study.",
  },
  {
    q: "Is this a religious organization?",
    a: "No. While we study and document the spiritual and philosophical traditions of African peoples — including concepts like Ma'at and Ubuntu — we are an academic and cultural preservation institute, not a religious body.",
  },
  {
    q: "How are research grants awarded?",
    a: "Custodian-tier Guardians and above are eligible to apply for research grants through our annual call for proposals. Projects must align with one of our five academic pillars and demonstrate potential for advancing the preservation of African royal traditions.",
  },
  {
    q: "Can institutions partner with the Institute?",
    a: "Absolutely. Our Royal Patron tier is specifically designed for universities, museums, cultural organizations, and governmental bodies. Partners receive access to our institutional framework, naming rights, and direct consultations with the Board.",
  },
];

export const FAQSection = () => {
  return (
    <section className="relative py-28">
      <div className="container max-w-3xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-16 text-balance leading-[1.15]">
            Answers for the Curious
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-sm bg-card/30 px-6 transition-colors data-[state=open]:border-gold/25 data-[state=open]:bg-card/50">
                <AccordionTrigger className="font-heading text-[0.95rem] font-semibold text-cream hover:text-primary py-5 text-left [&[data-state=open]>svg]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-foreground/65 leading-relaxed pb-5 text-[0.9rem]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
};
