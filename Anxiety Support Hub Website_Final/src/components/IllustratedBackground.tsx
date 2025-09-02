
import { useState, useEffect, useRef } from 'react';

interface IllustratedBackgroundProps {
  color1?: string;
  color2?: string;
  className?: string;
}

export function IllustratedBackground({
  color1 = '#0A7373',
  color2 = '#B19777',
  className = ''
}: IllustratedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;
    
    let animationFrameId: number;
    
    const drawBackground = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create magical background with flowing lines
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `${color1}10`);
      gradient.addColorStop(1, `${color2}10`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw flowing lines
      const numLines = Math.floor(canvas.width / 100);
      
      for (let i = 0; i < numLines; i++) {
        const x = (i / numLines) * canvas.width;
        
        ctx.beginPath();
        ctx.moveTo(x, 0);
        
        // Create flowing curves
        const amplitude = canvas.height / 10;
        const frequency = 0.002;
        const speed = 0.0005;
        
        for (let y = 0; y < canvas.height; y += 5) {
          const offsetX = Math.sin((y * frequency) + (time * speed)) * amplitude;
          ctx.lineTo(x + offsetX, y);
        }
        
        // Gradient for the lines
        const lineGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        lineGradient.addColorStop(0, `${color1}20`);
        lineGradient.addColorStop(0.5, `${color2}20`);
        lineGradient.addColorStop(1, `${color1}20`);
        
        ctx.strokeStyle = lineGradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Draw magical dots at line intersections
      for (let i = 0; i < numLines / 2; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = Math.random() > 0.5 ? `${color1}40` : `${color2}40`;
        ctx.fill();
      }
      
      animationFrameId = requestAnimationFrame(drawBackground);
    };
    
    animationFrameId = requestAnimationFrame(drawBackground);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, color1, color2]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity: 0.3 }}
    />
  );
}
