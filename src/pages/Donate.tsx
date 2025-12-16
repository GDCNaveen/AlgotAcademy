import { ArrowLeft, Heart, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const Donate = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card border-b border-border px-4 py-3">
        <div className="flex items-center gap-3 max-w-lg mx-auto">
          <Link to="/" className="p-2 -ml-2 hover:bg-muted rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground flex-1">Donate</h1>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="px-4 py-6 max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full gradient-donate flex items-center justify-center">
            <Heart className="w-10 h-10 text-primary-foreground" fill="currentColor" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Help Orphan Children
          </h2>
          <p className="text-muted-foreground">
            Your contribution can change a child's life forever
          </p>
        </div>

        <div className="bg-card rounded-xl p-5 border border-border shadow-card mb-6">
          <h3 className="font-semibold text-foreground mb-3">Why Donate?</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Provide education to underprivileged children
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Support healthcare and nutrition programs
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              Help build a brighter future for orphans
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success">✓</span>
              100% of donations go directly to children
            </li>
          </ul>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full h-12 text-base gradient-donate border-0 hover:opacity-90">
            <Heart className="w-5 h-5 mr-2" fill="currentColor" />
            Donate Now
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </a>

        <p className="text-center text-xs text-muted-foreground mt-4">
          You will be redirected to a secure donation form
        </p>
      </div>
    </div>
  );
};

export default Donate;
