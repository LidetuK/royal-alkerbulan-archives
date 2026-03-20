import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const SecureLegacyDialog = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-ebony border-gold/20 text-cream">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-gold">Secure Your Legacy</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 mt-2">
          <p className="font-body text-sm text-foreground/60 leading-relaxed italic mb-2">
            Register your interest in our guardianship programs and ancestral initiatives.
          </p>
          <div className="grid gap-2">
            <Label htmlFor="legacy-name" className="text-foreground/70">Full Name</Label>
            <Input id="legacy-name" placeholder="Kwame Osei" className="bg-background border-border placeholder:text-foreground/30" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="legacy-email" className="text-foreground/70">Email Address</Label>
            <Input id="legacy-email" type="email" placeholder="kwame@example.com" className="bg-background border-border placeholder:text-foreground/30" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="legacy-interest" className="text-foreground/70">Area of Interest</Label>
            <Input id="legacy-interest" placeholder="E.g., Guardianship, Donations" className="bg-background border-border placeholder:text-foreground/30" />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button 
            type="button" 
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-primary text-primary-foreground font-body text-xs font-bold tracking-widest uppercase rounded-sm hover:gold-border-glow transition-all"
          >
            Submit Request
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
