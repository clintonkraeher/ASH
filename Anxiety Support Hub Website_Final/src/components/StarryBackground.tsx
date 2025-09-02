
import React from 'react';

interface Star {
  id: number;
  x: string;
  y: string;
  size: number;
  opacity: number;
  delay: number;
}

interface StarryBackgroundProps {
  count?: number;
  color?: string;
  className?: string;
}

export function StarryBackground({ 
  count = 50, 
  color = "#FFFCF1",
  className = ""
}: StarryBackgroundProps) {
  // Generate random stars
  const generateStars = (): Star[] => {
    const stars: Star[] = [];
    
    for (let i = 0; i < count; i++) {
      stars.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1, // 1-3px
        opacity: Math.random() * 0.7 + 0.3, // 0.3-1
        delay: Math.random() * 5, // 0-5s delay for animation
      });
    }
    
    return stars;
  };
  
  const stars = React.useMemo(() => generateStars(), [count]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: color,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
