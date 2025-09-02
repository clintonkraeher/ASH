import { useEffect, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TransformativeJourneyPyramid } from './TransformativeJourneyPyramid';

interface TransformativeIllustrationProps {
  src?: string;
  alt?: string;
  overlayColor?: string;
  className?: string;
  width?: number;
  height?: number;
  withParticles?: boolean;
  showPyramid?: boolean;
  pyramidOnly?: boolean;
}

export function TransformativeIllustration({ 
  src, 
  alt = "Transformative illustration",
  overlayColor = 'rgba(10, 115, 115, 0.3)',
  className = '',
  width = 500,
  height = 400,
  withParticles = true,
  showPyramid = false,
  pyramidOnly = false
}: TransformativeIllustrationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      // Subtle parallax effect
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      container.style.setProperty('--move-x', `${moveX}px`);
      container.style.setProperty('--move-y', `${moveY}px`);
      
      // Update glow position
      container.style.setProperty('--glow-x', `${x * 100}%`);
      container.style.setProperty('--glow-y', `${y * 100}%`);
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  useEffect(() => {
    if (!withParticles) return;
    
    const canvas = particlesRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const container = containerRef.current;
    if (!container) return;
    
    const { width, height } = container.getBoundingClientRect();
    canvas.width = width;
    canvas.height = height;
    
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }
    
    const particles: Particle[] = [];
    const numParticles = 20;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.fill();
        
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > height) {
          particle.speedY *= -1;
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [withParticles]);
  
  // Fix image path if it starts with "/public/"
  const imageSrc = src?.startsWith('/public/') 
    ? src.replace('/public/', '/') 
    : src;
  
  // If pyramidOnly is true, render just the pyramid
  if (pyramidOnly) {
    return (
      <div className={`relative ${className}`} style={{ width, height }}>
        <div className="flex items-center justify-center h-full">
          <TransformativeJourneyPyramid className="w-full max-w-sm" />
        </div>
      </div>
    );
  }
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden group ${className}`}
      style={{ 
        width: width,
        height: height,
        '--move-x': '0px',
        '--move-y': '0px',
        '--glow-x': '50%',
        '--glow-y': '50%'
      } as React.CSSProperties}
    >
      {/* Base image - only show if src is provided and not pyramidOnly */}
      {src && !pyramidOnly && (
        <div className="absolute inset-0 transition-transform duration-200" style={{ 
          transform: 'translate(var(--move-x), var(--move-y))'
        }}>
          <ImageWithFallback
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </div>
      )}
      
      {/* Pyramid overlay - show if showPyramid is true */}
      {showPyramid && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <TransformativeJourneyPyramid className="w-full max-w-sm" />
        </div>
      )}
      
      {/* Colored overlay - only if there's a background image */}
      {src && !pyramidOnly && (
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
          style={{ backgroundColor: overlayColor }}
        ></div>
      )}
      
      {/* Magical glow effect */}
      <div 
        className="absolute opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at var(--glow-x) var(--glow-y), white 0%, transparent 50%)',
          left: '-50%',
          top: '-50%',
          width: '200%',
          height: '200%',
          mixBlendMode: 'soft-light'
        }}
      ></div>
      
      {/* Canvas for particles */}
      {withParticles && (
        <canvas
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        />
      )}
    </div>
  );
}