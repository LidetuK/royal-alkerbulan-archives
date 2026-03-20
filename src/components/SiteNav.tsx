import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["Pillars", "Guardianship", "Visionaries", "Contact"];

export const SiteNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ebony/80 backdrop-blur-md border-b border-gold/10">
      <div className="container max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-sm font-bold tracking-wide text-gold">
          IARTCP
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href="#" className="font-body text-xs tracking-[0.15em] uppercase text-foreground/60 hover:text-gold transition-colors duration-200">
              {l}
            </a>
          ))}
          <button className="px-5 py-2 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-wide uppercase rounded-sm transition-all duration-200 hover:shadow-[0_2px_16px_hsl(43_56%_56%/0.25)] active:scale-[0.97]">
            Secure Your Legacy
          </button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground/70 active:scale-[0.95]">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-ebony border-b border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((l) => (
                <a key={l} href="#" className="block font-body text-sm tracking-wide uppercase text-foreground/60 hover:text-gold transition-colors">
                  {l}
                </a>
              ))}
              <button className="w-full mt-2 px-5 py-3 bg-primary text-primary-foreground font-body text-xs font-semibold tracking-wide uppercase rounded-sm">
                Secure Your Legacy
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
