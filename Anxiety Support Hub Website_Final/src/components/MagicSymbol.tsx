
import { useRef, useEffect } from 'react';

interface MagicSymbolProps {
  type?: 'circle' | 'triangle' | 'square' | 'pentagram';
  size?: number;
  color?: string;
  position?: 'static' | 'absolute';
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  rotate?: number;
  className?: string;
  animated?: boolean;
}

export function MagicSymbol({
  type = 'circle',
  size = 40,
  color = '#B19777',
  position = 'static',
  top,
  left,
  right,
  bottom,
  rotate = 0,
  className = '',
  animated = true
}: MagicSymbolProps) {
  // If className contains a text color, use currentColor to inherit it
  const finalColor = className.includes('text-') ? 'currentColor' : color;
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!animated || !svgRef.current) return;
    
    const svg = svgRef.current;
    
    // Subtle floating animation
    const floatInterval = setInterval(() => {
      const randomY = Math.sin(Date.now() / 1000) * 5;
      const randomRotate = Math.sin(Date.now() / 1500) * 3;
      
      svg.style.transform = `translateY(${randomY}px) rotate(${rotate + randomRotate}deg)`;
    }, 50);
    
    return () => clearInterval(floatInterval);
  }, [animated, rotate]);
  
  const renderSymbol = () => {
    switch (type) {
      case 'circle':
        return (
          <>
            <circle cx={size / 2} cy={size / 2} r={size / 2 - 2} stroke={finalColor} strokeWidth="1.5" fill="none" />
            <circle cx={size / 2} cy={size / 2} r={size / 4} stroke={finalColor} strokeWidth="1" fill="none" />
            <circle cx={size / 2} cy={size / 2} r={size / 10} fill={finalColor} />
          </>
        );
      case 'triangle':
        const h = Math.sqrt(3) * size / 2;
        return (
          <>
            <polygon 
              points={`${size/2},${size/10} ${size-size/10},${h-size/10} ${size/10},${h-size/10}`} 
              stroke={finalColor} 
              strokeWidth="1.5" 
              fill="none" 
            />
            <line x1={size/2} y1={size/10} x2={size/2} y2={h-size/10} stroke={finalColor} strokeWidth="1" />
            <line x1={size/10} y1={h-size/10} x2={size-size/10} y2={h-size/10} stroke={finalColor} strokeWidth="1" />
            <line x1={size/2} y1={size/10} x2={size-size/10} y2={h-size/10} stroke={finalColor} strokeWidth="1" />
            <circle cx={size/2} cy={size/2} r={size/10} fill={finalColor} />
          </>
        );
      case 'square':
        return (
          <>
            <rect x={size/10} y={size/10} width={size-size/5} height={size-size/5} stroke={finalColor} strokeWidth="1.5" fill="none" />
            <line x1={size/10} y1={size/10} x2={size-size/10} y2={size-size/10} stroke={finalColor} strokeWidth="1" />
            <line x1={size-size/10} y1={size/10} x2={size/10} y2={size-size/10} stroke={finalColor} strokeWidth="1" />
            <circle cx={size/2} cy={size/2} r={size/10} fill={finalColor} />
          </>
        );

      case 'pentagram':
        const points = [];
        for (let i = 0; i < 5; i++) {
          const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
          points.push([
            size / 2 + (size / 2 - 2) * Math.cos(angle),
            size / 2 + (size / 2 - 2) * Math.sin(angle)
          ]);
        }
        
        // Create the pentagram path
        const pentagramPoints = points.map((point, i) => {
          const next = (i + 2) % 5;
          return `${points[i][0]},${points[i][1]} ${points[next][0]},${points[next][1]}`;
        }).join(' ');
        
        return (
          <>
            <circle cx={size/2} cy={size/2} r={size/2-2} stroke={finalColor} strokeWidth="1" fill="none" opacity="0.6" />
            <polyline points={pentagramPoints} stroke={finalColor} strokeWidth="1.5" fill="none" />
            <circle cx={size/2} cy={size/2} r={size/10} fill={finalColor} />
          </>
        );
      default:
        return null;
    }
  };
  
  const positionStyles: React.CSSProperties = {
    position: position as any,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  };
  
  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        ...positionStyles,
        transition: 'transform 0.3s ease',
        transform: `rotate(${rotate}deg)`
      }}
      className={`transition-opacity duration-500 ${className}`}
    >
      {renderSymbol()}
    </svg>
  );
}
