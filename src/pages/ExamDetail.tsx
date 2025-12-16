import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getExamById, subjects } from "@/data/examData";
import SubjectCard from "@/components/SubjectCard";
import ThemeToggle from "@/components/ThemeToggle";

const ExamDetail = () => {
  const { examId } = useParams<{ examId: string }>();
  const exam = examId ? getExamById(examId) : null;

  if (!exam) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center pb-20">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-foreground mb-2">Exam not found</h1>
          <Link to="/exams" className="text-primary hover:underline">
            Browse all exams
          </Link>
        </div>
      </div>
    );
  }

  const examSubjects = subjects.filter((s) => exam.subjects.includes(s.id));

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/exams" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-foreground">{exam.shortName}</h1>
            <p className="text-xs text-muted-foreground">{exam.name}</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Exam Info */}
      <div className="px-4 py-4 max-w-lg mx-auto">
        <div 
          className="p-4 rounded-xl mb-4 text-primary-foreground"
          style={{ backgroundColor: exam.color }}
        >
          <p className="text-sm opacity-90">{exam.description}</p>
        </div>

        <h2 className="text-lg font-semibold text-foreground mb-4">
          Subjects ({examSubjects.length})
        </h2>
        
        <div className="space-y-3">
          {examSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamDetail;
