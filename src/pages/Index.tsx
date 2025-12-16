import { Link } from "react-router-dom";
import { BookOpen, Target } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import DonateBanner from "@/components/DonateBanner";
import DonationsList from "@/components/DonationsList";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection />
      
      <div className="px-4 -mt-2">
        <DonateBanner />
      </div>

      {/* Quick Actions */}
      <section className="px-4 mt-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Start Practicing</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/exams">
            <Button 
              variant="outline" 
              className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-primary text-primary-foreground border-primary hover:bg-primary/90 hover:text-primary-foreground"
            >
              <BookOpen className="w-6 h-6" />
              <span className="font-medium">Browse Exams</span>
              <span className="text-xs opacity-80">All categories</span>
            </Button>
          </Link>
          <Link to="/subjects">
            <Button 
              variant="outline" 
              className="w-full h-auto py-4 flex flex-col items-center gap-2 bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground"
            >
              <Target className="w-6 h-6" />
              <span className="font-medium">All Subjects</span>
              <span className="text-xs opacity-80">Quick practice</span>
            </Button>
          </Link>
        </div>
      </section>

      {/* Donations List */}
      <DonationsList />
    </div>
  );
};

export default Index;
