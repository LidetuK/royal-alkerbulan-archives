import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";

const Vanguard = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-terracotta mb-4">
                Sister Institution
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight italic">
                The Institute of <span className="text-terracotta">Vanguard Leaders</span>
              </h1>
              <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Transitioning from the ancient soul of tradition to the vanguard sword of modern strategy. This platform is currently under construction.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      <div className="flex-grow py-24 bg-background">
        <div className="container max-w-4xl text-center">
          <p className="font-body text-foreground/50 text-xl italic">
            Check back soon for the official launch of the Vanguard Leadership portal.
          </p>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
};

export default Vanguard;
