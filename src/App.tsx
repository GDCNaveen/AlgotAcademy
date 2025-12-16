import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomNavigation from "@/components/BottomNavigation";
import InstallPrompt from "@/components/InstallPrompt";
import Index from "./pages/Index";
import Exams from "./pages/Exams";
import ExamDetail from "./pages/ExamDetail";
import Subjects from "./pages/Subjects";
import Donate from "./pages/Donate";
import PDFs from "./pages/PDFs";
import Quiz from "./pages/Quiz";
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
          <Route path="/exams" element={<Exams />} />
          <Route path="/exams/:examId" element={<ExamDetail />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:subjectId/quiz" element={<Quiz />} />
          <Route path="/pdfs" element={<PDFs />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavigation />
        <InstallPrompt />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
