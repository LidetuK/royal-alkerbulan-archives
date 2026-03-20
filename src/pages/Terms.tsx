import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

const Terms = () => {
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
                Terms of Service
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
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">1. Agreement to Terms</h2>
                <p>
                  These Terms of Use constitute a legally binding agreement made between you and The Institute of African Royal Traditions and Customs Practices, concerning your access to and use of our website as well as any other media form related or connected thereto.
                </p>
              </div>
              
              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">2. Intellectual Property Rights</h2>
                <p>
                  Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">3. User Representations</h2>
                <p>
                  By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-bold text-cream mb-4">4. Governing Law</h2>
                <p>
                  These Terms shall be governed by and defined following the laws governing the jurisdiction in which the Institute primarily operates. The Institute of African Royal Traditions and Customs Practices and yourself irrevocably consent that the courts of the jurisdiction shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
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

export default Terms;
