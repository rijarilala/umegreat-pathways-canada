
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Testimonials from "./pages/Testimonials";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Orientation from "./pages/services/Orientation";
import Formation from "./pages/services/Formation";
import Coaching from "./pages/services/Coaching";
import Etudes from "./pages/services/Etudes";
import Immigration from "./pages/services/Immigration";
import TestEligibility from "./pages/services/TestEligibility";
import Recrutement from "./pages/services/Recrutement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/orientation" element={<Orientation />} />
          <Route path="/services/formation" element={<Formation />} />
          <Route path="/services/coaching" element={<Coaching />} />
          <Route path="/services/etudes" element={<Etudes />} />
          <Route path="/services/immigration" element={<Immigration />} />
          <Route path="/services/test" element={<TestEligibility />} />
          <Route path="/services/recrutement" element={<Recrutement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
