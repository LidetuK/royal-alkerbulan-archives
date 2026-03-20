import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { MessageSquare, Brain } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />

      {/* Page Header */}
      <section className="relative pt-40 pb-20 overflow-hidden kente-pattern">
        <div className="container max-w-6xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center">
              <p className="font-body text-sm tracking-[0.25em] uppercase text-gold mb-4">
                Section 04
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight italic">
                Inquire & <span className="gold-gradient-text">Engage</span>
              </h1>
              <p className="font-body text-foreground/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Connect with the Institute.
              </p>
            </div>
          </ScrollReveal>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-background z-0" />
      </section>

      {/* Contact Content */}
      <section className="py-24 relative overflow-hidden bg-background flex-grow border-t border-gold/5">
        <div className="container max-w-4xl px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="font-body text-foreground/60 max-w-xl mx-auto text-lg">
                Reach out to the Institute for research partnerships, institutional inquiries, or to learn more about our mission to secure the legacy of Alkerbulan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="p-10 rounded-sm bg-ebony-light/40 border border-border text-center hover:border-gold/30 transition-all">
                <MessageSquare className="w-10 h-10 text-gold mx-auto mb-6" />
                <h4 className="font-heading text-2xl font-bold text-cream mb-2">Message Us</h4>
                <p className="font-body text-sm text-foreground/50 mb-8 italic">Send us an inquiry directly</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full py-4 bg-primary text-primary-foreground font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:gold-border-glow transition-all">
                      Open Inquiry Form
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-ebony border-gold/20 text-cream">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-gold">Submit Inquiry</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 mt-2">
                      <div className="grid gap-2">
                        <Label htmlFor="name" className="text-foreground/70">Full Name</Label>
                        <Input id="name" placeholder="Kwame Osei" className="bg-background border-border placeholder:text-foreground/30" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email" className="text-foreground/70">Email Address</Label>
                        <Input id="email" type="email" placeholder="kwame@example.com" className="bg-background border-border placeholder:text-foreground/30" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="message" className="text-foreground/70">Message</Label>
                        <Textarea id="message" placeholder="How can we help?" className="bg-background border-border placeholder:text-foreground/30 min-h-[100px]" />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="px-6 py-2 bg-primary text-primary-foreground font-body text-xs font-bold tracking-widest uppercase rounded-sm hover:gold-border-glow transition-all">
                        Send Message
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="p-10 rounded-sm bg-ebony-light/40 border border-border text-center hover:border-gold/30 transition-all">
                <Brain className="w-10 h-10 text-terracotta mx-auto mb-6" />
                <h4 className="font-heading text-2xl font-bold text-cream mb-2">Research Portal</h4>
                <p className="font-body text-sm text-foreground/50 mb-8 italic">For scholarly collaborations</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full py-4 border border-gold/30 text-gold font-body text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-all">
                      Submit Research Proposal
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] bg-ebony border-gold/20 text-cream">
                    <DialogHeader>
                      <DialogTitle className="font-heading text-2xl text-terracotta">Research Proposal</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 mt-2">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="researcher" className="text-foreground/70">Lead Researcher</Label>
                          <Input id="researcher" placeholder="Dr. Nneka Eze" className="bg-background border-border placeholder:text-foreground/30" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="institution" className="text-foreground/70">Institution</Label>
                          <Input id="institution" placeholder="University of..." className="bg-background border-border placeholder:text-foreground/30" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="topic" className="text-foreground/70">Research Topic / Title</Label>
                        <Input id="topic" placeholder="Preservation of..." className="bg-background border-border placeholder:text-foreground/30" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="abstract" className="text-foreground/70">Abstract / Objectives</Label>
                        <Textarea id="abstract" placeholder="Brief overview of your proposal..." className="bg-background border-border placeholder:text-foreground/30 min-h-[120px]" />
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button className="px-6 py-2 border border-gold/30 text-gold font-body text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-gold/10 transition-all">
                        Submit Proposal
                      </button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Subtle decorative background element */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full -mb-48 -mr-48" />
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;
