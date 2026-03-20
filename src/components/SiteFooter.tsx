export const SiteFooter = () => {
  return (
    <footer className="relative py-20 border-t border-border">
      <div className="container max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-lg font-bold text-cream mb-2">IARTCP</h3>
            <p className="font-body text-sm text-foreground/50 leading-relaxed">
              The Institute of African Royal Traditions and Customs Practices. Upholding the Legacy of Alkerbulan.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { name: "The Five Pillars", href: "/pillars" },
                { name: "Guardianship", href: "/guardianship" },
                { name: "Research Archives", href: "/research-archives" },
                { name: "Royal Symposium", href: "/royal-symposium" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="font-body text-sm text-foreground/50 hover:text-gold transition-colors duration-200">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">Institute</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", href: "/about" },
                { name: "The Visionaries", href: "/visionaries" },
                { name: "Press & Media", href: "/press" },
                { name: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="font-body text-sm text-foreground/50 hover:text-gold transition-colors duration-200">{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-terracotta mb-4">Return to the Source</h4>
            <p className="font-body text-sm text-foreground/50 leading-relaxed mb-4 italic">
              The Diaspora Immersion Programme — a transformative journey to reconnect with your ancestral heritage on the continent.
            </p>
            <a href="/diaspora" className="font-body text-sm font-semibold text-terracotta hover:text-terracotta-light transition-colors duration-200 uppercase tracking-widest flex items-center gap-2">
              Learn More <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-foreground/30">
            © {new Date().getFullYear()} The Institute of African Royal Traditions and Customs Practices. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { name: "Privacy", href: "/privacy" },
              { name: "Terms", href: "/terms" },
              { name: "Accessibility", href: "/accessibility" },
            ].map((l) => (
              <a key={l.name} href={l.href} className="font-body text-xs text-foreground/30 hover:text-gold/60 transition-colors duration-200">{l.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
