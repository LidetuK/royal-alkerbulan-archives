import { ScrollReveal } from "./ScrollReveal";
import { Calendar, MapPin, Users } from "lucide-react";

const events = [
  {
    date: "Aug 14–18, 2026",
    title: "Annual Royal Symposium",
    location: "Accra, Ghana",
    type: "Conference",
    description: "Five days of keynotes, panels, and ceremonies bringing together traditional leaders, scholars, and the diaspora.",
  },
  {
    date: "Oct 3, 2026",
    title: "Ancestral Wisdom Webinar: Ubuntu in Modern Governance",
    location: "Virtual",
    type: "Webinar",
    description: "A live session exploring how Ubuntu philosophy can inform contemporary leadership frameworks.",
  },
  {
    date: "Nov 20 – Dec 8, 2026",
    title: "Return to the Source: Diaspora Immersion",
    location: "Kumasi & Cape Coast, Ghana",
    type: "Immersion",
    description: "A transformative 18-day journey through sacred sites, royal courts, and living cultural traditions.",
  },
  {
    date: "Jan 2027",
    title: "Rites of Passage Educators' Retreat",
    location: "Johannesburg, South Africa",
    type: "Retreat",
    description: "Intensive training for educators and community leaders in authentic rites of passage curriculum design.",
  },
];

const typeColors: Record<string, string> = {
  Conference: "bg-primary/15 text-primary",
  Webinar: "bg-secondary/15 text-secondary",
  Immersion: "bg-primary/15 text-primary",
  Retreat: "bg-secondary/15 text-secondary",
};

export const EventsSection = () => {
  return (
    <section className="relative py-28">
      <div className="container max-w-5xl px-6">
        <ScrollReveal>
          <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4 text-center">
            Sacred Calendar
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-cream text-center mb-6 text-balance leading-[1.15]">
            Upcoming Gatherings
          </h2>
          <p className="font-body text-foreground/60 text-center max-w-xl mx-auto mb-16 text-lg leading-relaxed">
            Where knowledge is exchanged, bonds are forged, and traditions are honored in the flesh.
          </p>
        </ScrollReveal>

        <div className="space-y-5">
          {events.map((evt, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 rounded-sm border border-border bg-card/30 transition-all duration-300 hover:border-gold/25 hover:bg-card/50">
                <div className="md:w-36 flex-shrink-0">
                  <div className="flex items-center gap-2 text-primary">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body text-sm font-medium">{evt.date}</span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading text-lg font-bold text-cream truncate">{evt.title}</h3>
                    <span className={`inline-flex px-2 py-0.5 rounded-sm text-[0.65rem] font-body font-semibold uppercase tracking-wider flex-shrink-0 ${typeColors[evt.type] || "bg-muted text-muted-foreground"}`}>
                      {evt.type}
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground/60 leading-relaxed line-clamp-2">{evt.description}</p>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">{evt.location}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
