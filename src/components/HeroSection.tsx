import { BookOpen, Target, Users, HelpCircle } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const stats = [
  { icon: BookOpen, value: "7", label: "Exams" },
  { icon: Target, value: "50+", label: "Subjects" },
  { icon: HelpCircle, value: "1000+", label: "Questions" },
  { icon: Users, value: "5K+", label: "Users" },
];

const HeroSection = () => {
  return (
    <div className="gradient-hero text-primary-foreground pb-8 pt-6 px-4 relative">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-2xl font-bold mb-2">Algot Academy</h1>
        <p className="text-primary-foreground/90 text-sm mb-1">Welcome to Algot Academy</p>
        <p className="text-primary-foreground/80 text-sm mb-6">
          Prepare for Banking, SSC, RRB, TSPSC, Groups exams with our comprehensive MCQ practice.
        </p>

        {/* Stats Card */}
        <div className="bg-card rounded-2xl p-4 shadow-elevated">
          <div className="grid grid-cols-4 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
