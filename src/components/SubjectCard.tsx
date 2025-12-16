import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Subject } from "@/data/examData";

interface SubjectCardProps {
  subject: Subject;
}

const SubjectCard = ({ subject }: SubjectCardProps) => {
  return (
    <Link
      to={`/subjects/${subject.id}/quiz`}
      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 group"
    >
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: `${subject.color}15` }}
      >
        {subject.icon}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-foreground">{subject.name}</h3>
        <p className="text-sm text-muted-foreground">{subject.questionCount} questions</p>
      </div>
      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </Link>
  );
};

export default SubjectCard;
