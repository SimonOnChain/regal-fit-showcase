import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Gallery from "./pages/Gallery";
import Fitness from "./pages/Fitness";
import Foot from "./pages/Foot";
import Aqua from "./pages/Aqua";
import Spa from "./pages/Spa";
import Kids from "./pages/Kids";
import MoSnack from "./pages/MoSnack";
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/foot" element={<Foot />} />
          <Route path="/aqua" element={<Aqua />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/mosnack" element={<MoSnack />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
