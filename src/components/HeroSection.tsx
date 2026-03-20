import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Ancient African royal palace at golden hour" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ebony/80 via-ebony/60 to-ebony" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl text-center px-6 py-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-8"
        >
          Upholding the Legacy of Alkerbulan
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-cream mb-6"
        >
          The ancestors are calling.
          <br />
          <span className="italic font-normal text-gold">Will you answer?</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The global repository for pre-colonial Alkerbulan heritage. Dedicated to the research, preservation, and promotion of authentic African royal customs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold tracking-wide text-sm uppercase rounded-sm transition-all duration-200 hover:shadow-[0_4px_24px_hsl(43_56%_56%/0.3)] active:scale-[0.97]">
            Secure Your Legacy
          </button>
          <button className="px-8 py-4 border border-gold/30 text-gold font-body font-semibold tracking-wide text-sm uppercase rounded-sm transition-all duration-200 hover:bg-gold/10 hover:border-gold/50 active:scale-[0.97]">
            Become a Guardian
          </button>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
};
