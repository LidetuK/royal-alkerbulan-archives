import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

const Accessibility = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-4xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
                Standards
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-8 leading-tight">
                Accessibility Statement
              </h1>
              <p className="font-body text-foreground/60 text-lg leading-relaxed italic">
                Our Commitment to Universal Access
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Content */}
      <section className="py-16 relative bg-background flex-grow">
        <div className="container max-w-3xl px-6">
          <ScrollReveal delay={0.1}>
            <div className="font-body text-foreground/70 leading-relaxed space-y-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">Our Commitment</h2>
                <p>
                  The Institute of African Royal Traditions and Customs Practices is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards to our website.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">Conformance Status</h2>
                <p>
                  We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. These guidelines explain how to make web content more accessible for people with disabilities, and user friendly for everyone.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">Technology Support</h2>
                <p>
                  Our site is designed to be compatible with modern assistive technologies, and relies upon a semantic structure of HTML, CSS, styled content, and modern JavaScript features. We routinely test this platform against widely-used browsers.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">Feedback</h2>
                <p>
                  We welcome your feedback on the accessibility of our site. Please let us know if you encounter any barriers so we can work to properly address them. You may leave a direct message via our Contact page outlining any specific accessibility blockers you encountered.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Accessibility;
