import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ExamCard from "@/components/ExamCard";
import DonateBanner from "@/components/DonateBanner";
import ThemeToggle from "@/components/ThemeToggle";
import { exams } from "@/data/examData";

const Exams = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">All Exams</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Donate Banner */}
      <div className="py-4">
        <DonateBanner />
      </div>

      {/* Exam List */}
      <div className="px-4 py-4 max-w-lg mx-auto">
        <p className="text-sm text-muted-foreground mb-4">
          Choose an exam to start practicing
        </p>
        <div className="space-y-3">
          {exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
