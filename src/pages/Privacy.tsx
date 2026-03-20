import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-4xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
                Legal
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-cream mb-8 leading-tight">
                Privacy Policy
              </h1>
              <p className="font-body text-foreground/60 text-lg leading-relaxed italic">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
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
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">1. Introduction</h2>
                <p>
                  The Institute of African Royal Traditions and Customs Practices ("we", "our", "us") respects your privacy and is committed to protecting your personal data. This privacy policy informs you about how we look after your personal data when you visit our website and tells you about your privacy rights.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">2. The Data We Collect</h2>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4 text-sm marker:text-gold/50">
                  <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                  <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                  <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">3. How We Use Your Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to perform the contract we are about to enter into or have entered into with you, where it is necessary for our legitimate interests, or where we need to comply with a legal obligation.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.
                </p>
              </div>

              <div>
                <p className="italic text-sm text-foreground/50 mt-8 border-t border-gold/10 pt-8">
                  For full inquiries regarding data protections, please open a request via our Contact page.
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

export default Privacy;
