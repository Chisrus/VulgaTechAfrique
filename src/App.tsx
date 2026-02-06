import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import ArticleDetail from "./pages/ArticleDetail";
import Articles from "./pages/Articles";
import About from "./pages/About";
import Inclusion from "./pages/Inclusion";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/cours" element={<Courses />} />
            <Route path="/cours/:id" element={<CourseDetail />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/inclusion" element={<Inclusion />} />
            <Route path="/confidentialite" element={<Privacy />} />
            <Route path="/conditions" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
