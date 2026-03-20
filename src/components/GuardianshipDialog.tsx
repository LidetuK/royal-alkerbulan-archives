import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, BookMarked, Crown, type LucideIcon } from "lucide-react";

interface TierInfo {
  icon: LucideIcon;
  name: string;
  level: string;
}

const tierMap: Record<string, TierInfo> = {
  "The Seeker": { icon: Eye, name: "The Seeker", level: "General Guardianship" },
  "The Custodian": { icon: BookMarked, name: "The Custodian", level: "Scholar & Professional" },
  "The Royal Patron": { icon: Crown, name: "The Royal Patron", level: "Institutional" },
};

interface GuardianshipDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  tierName: string;
}

export const GuardianshipDialog = ({ open, onOpenChange, tierName }: GuardianshipDialogProps) => {
  const tier = tierMap[tierName] || tierMap["The Seeker"];
  const Icon = tier.icon;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organization: "",
    title: "",
    interest: "",
    statement: "",
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    setForm({ fullName: "", email: "", phone: "", organization: "", title: "", interest: "", statement: "" });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <DialogTitle className="font-heading text-xl text-cream">{tier.name}</DialogTitle>
              <DialogDescription className="text-muted-foreground text-xs italic">{tier.level}</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 pt-2">
          {/* Basic Info */}
          <fieldset className="space-y-3">
            <legend className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">Personal Information</legend>
            <div>
              <Label htmlFor="fullName" className="text-cream/80 text-sm font-body">Full Name *</Label>
              <Input id="fullName" value={form.fullName} onChange={handleChange("fullName")} required maxLength={100} placeholder="Your full name" className="mt-1 bg-background border-border text-cream placeholder:text-muted-foreground focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="text-cream/80 text-sm font-body">Email Address *</Label>
              <Input id="email" type="email" value={form.email} onChange={handleChange("email")} required maxLength={255} placeholder="you@example.com" className="mt-1 bg-background border-border text-cream placeholder:text-muted-foreground focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="phone" className="text-cream/80 text-sm font-body">Phone Number</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={handleChange("phone")} maxLength={20} placeholder="+1 (000) 000-0000" className="mt-1 bg-background border-border text-cream placeholder:text-muted-foreground focus:border-primary" />
            </div>
          </fieldset>

          {/* Professional */}
          <fieldset className="space-y-3">
            <legend className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">Professional Details</legend>
            <div>
              <Label htmlFor="organization" className="text-cream/80 text-sm font-body">Organization / Institution</Label>
              <Input id="organization" value={form.organization} onChange={handleChange("organization")} maxLength={150} placeholder="University, organization, or affiliation" className="mt-1 bg-background border-border text-cream placeholder:text-muted-foreground focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="title" className="text-cream/80 text-sm font-body">Title / Role</Label>
              <Input id="title" value={form.title} onChange={handleChange("title")} maxLength={100} placeholder="e.g., Professor, Cultural Leader, Student" className="mt-1 bg-background border-border text-cream placeholder:text-muted-foreground focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="interest" className="text-cream/80 text-sm font-body">Area of Interest</Label>
              <select id="interest" value={form.interest} onChange={handleChange("interest")} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-cream ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1">
                <option value="">Select an area…</option>
                <option value="chieftaincy">Chieftaincy & Traditional Governance</option>
                <option value="rites">Rites of Passage Education</option>
                <option value="law">Customary Law & Jurisprudence</option>
                <option value="arts">Traditional Arts & Performance</option>
                <option value="philosophy">African Philosophy & Worldview</option>
                <option value="general">General Heritage Studies</option>
              </select>
            </div>
          </fieldset>

          {/* Statement */}
          <fieldset className="space-y-3">
            <legend className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-2">Your Covenant</legend>
            <div>
              <Label htmlFor="statement" className="text-cream/80 text-sm font-body">Why do you wish to become {tier.name}?</Label>
              <textarea id="statement" value={form.statement} onChange={handleChange("statement")} maxLength={1000} rows={3} placeholder="Share your connection to African heritage and what drives your guardianship…" className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-cream ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-1 resize-none" />
            </div>
          </fieldset>

          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide uppercase rounded-sm transition-all duration-200 hover:shadow-[0_4px_24px_hsl(43_56%_56%/0.3)] active:scale-[0.97]">
            Pledge as {tier.name}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
