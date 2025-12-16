import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubjectCard from "@/components/SubjectCard";
import DonateBanner from "@/components/DonateBanner";
import ThemeToggle from "@/components/ThemeToggle";
import { subjects } from "@/data/examData";
import { Input } from "@/components/ui/input";

const Subjects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">All Subjects</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Donate Banner */}
      <div className="py-4">
        <DonateBanner />
      </div>

      {/* Search */}
      <div className="px-4 py-4 max-w-lg mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Subject List */}
      <div className="px-4 max-w-lg mx-auto">
        <p className="text-sm text-muted-foreground mb-4">
          {filteredSubjects.length} subjects available
        </p>
        <div className="space-y-3">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
        {filteredSubjects.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No subjects found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Subjects;
