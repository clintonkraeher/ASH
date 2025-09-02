
import { useEffect, useRef } from 'react';

interface StarBackgroundProps {
  density?: number;
  speed?: number;
  color?: string;
  className?: string;
}

export function StarBackground({ 
  density = 50, 
  speed = 0.05, 
  color = '#B19777', 
  className = ''
}: StarBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    let animationFrameId: number;
    
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      generateStars();
    };
    
    const generateStars = () => {
      stars = [];
      const { width, height } = canvas;
      
      for (let i = 0; i < density; i++) {
        const size = Math.random() * 2 + 0.5;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size,
          opacity: Math.random() * 0.5 + 0.2,
          speed: (Math.random() * 0.5 + 0.1) * speed
        });
      }
    };
    
    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = star.opacity;
        
        // Draw a 4-point star
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        ctx.fill();
        
        // Update position for subtle movement
        star.y += star.speed;
        
        // Reset position if star moves out of canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Pulse effect
      const pulseInterval = Date.now() / 1000;
      const pulseFactor = Math.sin(pulseInterval) * 0.2 + 0.8;
      
      // Create occasional glowing stars
      if (Math.random() > 0.99) {
        const randomStar = Math.floor(Math.random() * stars.length);
        if (stars[randomStar]) {
          ctx.beginPath();
          ctx.globalAlpha = 0.7;
          ctx.arc(stars[randomStar].x, stars[randomStar].y, stars[randomStar].size * 2 * pulseFactor, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
          
          ctx.beginPath();
          ctx.globalAlpha = 0.3;
          ctx.arc(stars[randomStar].x, stars[randomStar].y, stars[randomStar].size * 4 * pulseFactor, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.fill();
        }
      }
      
      animationFrameId = requestAnimationFrame(drawStars);
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    drawStars();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, color]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
