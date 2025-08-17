import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="h-[85vh] flex items-center justify-center bg-subtle relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full float opacity-60"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-accent rounded-full bounce-gentle opacity-50"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-warm rounded-full float opacity-70"></div>
        <div className="absolute bottom-60 right-1/3 w-5 h-5 bg-primary-glow rounded-full bounce-gentle opacity-40"></div>
      </div>

      <div className="text-center z-10 px-4">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-8 opacity-0 scale-95"
          }`}
        >
          <h1 className="font-celebration text-6xl md:text-8xl lg:text-9xl font-bold text-animated mb-4">
            Happy Birthday
          </h1>
          <h2 className="font-elegant text-4xl md:text-6xl lg:text-7xl font-semibold text-animated float">
            Joy
          </h2>
          <div className="w-24 h-1 bg-celebration mx-auto rounded-full glow bounce-gentle"></div>
        </div>
        
        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          <p className="font-elegant text-lg md:text-xl text-muted-foreground mt-8 max-w-2xl mx-auto">
            ✨ A beacon of light and kindness ✨
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;