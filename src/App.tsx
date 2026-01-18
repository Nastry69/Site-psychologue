import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/pages/Index";
import Pricing from "./components/pages/Pricing";
import ThankYou from "./components/pages/ThanksYou";
import MonLivre from "./components/pages/MonLivre";
import NotFound from "./components/pages/NotFound";
import Merci from "./components/pages/Merci";
import Programme from "./components/pages/Programme";
import ContactSection from "./components/pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Programmes" element={<Programme/>}/>
          <Route path="/Livre" element={<MonLivre />} />
          <Route path="/tarifs" element={<Pricing />} />
          <Route path="/confirmation_payment" element={<Merci />} />
          <Route path="/merci" element={<ThankYou/>}/>
          <Route path="/contact" element={<ContactSection/>}/>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
