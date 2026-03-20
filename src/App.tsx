import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Pillars from "./pages/Pillars.tsx";
import Guardianship from "./pages/Guardianship.tsx";
import Visionaries from "./pages/Visionaries.tsx";
import Contact from "./pages/Contact.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Accessibility from "./pages/Accessibility.tsx";
import ResearchArchives from "./pages/ResearchArchives.tsx";
import RoyalSymposium from "./pages/RoyalSymposium.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import PressMedia from "./pages/PressMedia.tsx";
import DiasporaImmersion from "./pages/DiasporaImmersion.tsx";
import Vanguard from "./pages/Vanguard.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pillars" element={<Pillars />} />
          <Route path="/guardianship" element={<Guardianship />} />
          <Route path="/visionaries" element={<Visionaries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/research-archives" element={<ResearchArchives />} />
          <Route path="/royal-symposium" element={<RoyalSymposium />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/press" element={<PressMedia />} />
          <Route path="/diaspora" element={<DiasporaImmersion />} />
          <Route path="/vanguard" element={<Vanguard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
