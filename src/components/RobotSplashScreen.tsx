import { useState, useEffect } from "react";

interface RobotSplashScreenProps {
  onComplete: () => void;
}

const RobotSplashScreen = ({ onComplete }: RobotSplashScreenProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
      setTimeout(() => setPhase(5), 1800),
      setTimeout(() => onComplete(), 2800),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-500 ${
        phase >= 5 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative w-48 h-64 flex flex-col items-center">
        {/* Robot Head */}
        <div 
          className={`relative w-24 h-20 bg-secondary rounded-2xl border-2 border-primary/30 transition-all duration-500 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
          }`}
        >
          {/* Eyes */}
          <div className="absolute top-6 left-4 w-4 h-4 rounded-full bg-primary animate-pulse" />
          <div className="absolute top-6 right-4 w-4 h-4 rounded-full bg-primary animate-pulse" />
          {/* Antenna */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-4 bg-primary/60" />
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
        </div>

        {/* Robot Neck */}
        <div 
          className={`w-6 h-4 bg-muted rounded transition-all duration-400 ${
            phase >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        />

        {/* Robot Body */}
        <div 
          className={`relative w-32 h-28 bg-secondary rounded-xl border-2 border-primary/30 transition-all duration-500 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Chest Light */}
          <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center ${
            phase >= 3 ? 'animate-pulse' : ''
          }`}>
            <div className="w-4 h-4 rounded-full bg-primary" />
          </div>
          {/* Control Panel */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${phase >= 3 ? 'bg-accent' : 'bg-muted'}`} />
            <div className={`w-2 h-2 rounded-full transition-all duration-300 delay-100 ${phase >= 3 ? 'bg-primary' : 'bg-muted'}`} />
            <div className={`w-2 h-2 rounded-full transition-all duration-300 delay-200 ${phase >= 3 ? 'bg-accent' : 'bg-muted'}`} />
          </div>
        </div>

        {/* Robot Arms */}
        <div 
          className={`absolute top-[6.5rem] -left-2 w-6 h-16 bg-secondary rounded-lg border-2 border-primary/30 transition-all duration-500 ${
            phase >= 3 ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 -translate-x-8 -rotate-45'
          }`}
        >
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-muted rounded-lg" />
        </div>
        <div 
          className={`absolute top-[6.5rem] -right-2 w-6 h-16 bg-secondary rounded-lg border-2 border-primary/30 transition-all duration-500 ${
            phase >= 3 ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-8 rotate-45'
          }`}
        >
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 bg-muted rounded-lg" />
        </div>

        {/* Robot Legs */}
        <div className="flex gap-4 mt-1">
          <div 
            className={`w-8 h-12 bg-secondary rounded-lg border-2 border-primary/30 transition-all duration-500 ${
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -bottom-1 w-10 h-4 bg-muted rounded-lg -translate-x-1" />
          </div>
          <div 
            className={`w-8 h-12 bg-secondary rounded-lg border-2 border-primary/30 transition-all duration-500 delay-100 ${
              phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="absolute -bottom-1 w-10 h-4 bg-muted rounded-lg -translate-x-1" />
          </div>
        </div>

        {/* Loading Text */}
        <p 
          className={`absolute -bottom-12 text-sm text-muted-foreground font-medium transition-all duration-500 ${
            phase >= 4 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-gradient-primary font-display font-bold">VulgaTechAfrique</span>
        </p>

        {/* Particles Effect */}
        {phase < 5 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-primary rounded-full transition-all duration-700 ${
                  phase >= 2 ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${10 + Math.random() * 80}%`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RobotSplashScreen;
