import { Heart } from "lucide-react";

const DonateBanner = () => {
  return (
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSexample/viewform"
      target="_blank"
      rel="noopener noreferrer"
      className="block relative overflow-hidden p-4 mx-4 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-pink-500 animate-gradient-slow" />
      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/50 via-rose-400/50 to-purple-400/50 animate-gradient-reverse" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-1">
          <Heart className="w-5 h-5 text-white animate-pulse" fill="currentColor" />
          <span className="font-semibold text-center text-white drop-shadow-md">Donate to Help Orphan Children</span>
          <Heart className="w-5 h-5 text-white animate-pulse" fill="currentColor" />
        </div>
        <p className="text-center text-sm text-white/90 drop-shadow-sm">
          Your contribution can change a child's life. Click here to donate now.
        </p>
      </div>
    </a>
  );
};

export default DonateBanner;
