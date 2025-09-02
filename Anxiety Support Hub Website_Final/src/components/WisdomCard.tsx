
import { useState, useEffect, useRef } from 'react';
import { MagicSymbol } from './MagicSymbol';

interface WisdomCardProps {
  front: {
    title: string;
    description?: string;
    icon?: string;
  };
  back: {
    quote: string;
    author?: string;
  };
  className?: string;
}

export function WisdomCard({ front, back, className = '' }: WisdomCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;
      
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      // Subtle 3D rotation effect
      const rotateY = x * 10;
      const rotateX = -y * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isFlipped ? 'rotateY(180deg)' : ''}`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, isFlipped]);
  
  const renderIcon = () => {
    switch (front.icon) {
      case 'eye':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'wind':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2M12.59 19.41A2 2 0 1 0 14 16H2M17.73 7.73A2.5 2.5 0 1 1 19.5 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'cloud':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 10H16.74C16.3659 8.551 15.5928 7.23599 14.5086 6.2193C13.4245 5.20261 12.0727 4.50893 10.6069 4.22228C9.14112 3.93564 7.62348 4.06691 6.23662 4.60031C4.84976 5.13371 3.65044 6.04664 2.78694 7.22659C1.92344 8.40654 1.43429 9.80408 1.38509 11.2538C1.33589 12.7036 1.72864 14.1338 2.51776 15.368C3.30688 16.6021 4.45267 17.5862 5.80657 18.1934C7.16047 18.8005 8.6609 19.0029 10.127 18.778" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 16.92C22 16.3353 21.8707 15.7587 21.6213 15.2322C21.3719 14.7057 21.0082 14.2416 20.5555 13.8748C20.1028 13.5081 19.5715 13.2486 19.0008 13.1156C18.43 12.9827 17.8359 12.9798 17.264 13.107C17.2309 11.3976 16.4972 9.77917 15.2122 8.61397C13.9272 7.44877 12.195 6.83242 10.4843 6.89067C8.77359 6.94891 7.09154 7.67773 5.89363 8.93246C4.69571 10.1872 4.08126 11.8679 4.151 13.579" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'anchor':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 12H2C2 14.6522 3.05357 17.1957 4.92893 19.0711C6.8043 20.9464 9.34784 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'clock':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'heart':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'map':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'feather':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'refresh-cw':
        return (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 4V10H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M1 20V14H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.51 9.00004C4.01717 7.56645 4.87913 6.28577 6.01547 5.27543C7.1518 4.26508 8.52547 3.55985 10.0083 3.22427C11.4911 2.8887 13.0348 2.93432 14.4952 3.35677C15.9556 3.77922 17.2853 4.56473 18.36 5.64004L23 10M1 14L5.64 18.36C6.71475 19.4354 8.04437 20.221 9.50481 20.6435C10.9652 21.0659 12.5089 21.1115 13.9917 20.776C15.4745 20.4404 16.8482 19.7351 17.9845 18.7248C19.1209 17.7144 19.9828 16.4338 20.49 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className={`relative w-full h-full cursor-pointer transition-transform duration-700 transform-gpu ${className} z-0 hover:z-10`}
      style={{ transformStyle: 'preserve-3d' }}
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (cardRef.current) {
          cardRef.current.style.transform = isFlipped ? 'rotateY(180deg)' : '';
        }
      }}
    >
      {/* Front */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm rounded-xl p-6 shadow-2xl border border-[#B19777]/30 hover:border-[#0A7373]/40 transition-all duration-500 hover:shadow-2xl flex flex-col items-center justify-center text-center overflow-hidden ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
        style={{ backfaceVisibility: 'hidden' }}
      >
        {/* Background Journey Flow */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B19777]/20 via-[#0A7373]/10 to-[#314E52]/20"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#B19777]/40 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#0A7373]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#314E52]/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        {/* Content - Above overlays */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F9E8BC] to-[#B19777] flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
            {renderIcon()}
          </div>
          
          <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">{front.title}</h3>
          
          {front.description && (
            <p className="text-[#314E52]/80 text-sm mb-3 leading-relaxed">{front.description}</p>
          )}
          
          <span className="text-[#6F4E37]/70 text-sm mt-2">Click for wisdom</span>
        </div>
        
        {/* Enhanced magic symbol */}
        <div className="absolute top-4 right-4 text-[#B19777] opacity-60 hover:opacity-100 transition-opacity duration-300">
          <MagicSymbol type="circle" size={20} position="static" />
        </div>
        
        {/* Corner accent */}
        <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
          <div className="w-4 h-4 border border-[#B19777] rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#B19777] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Back */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br from-[#314E52] via-[#071834] to-[#314E52] rounded-xl p-6 shadow-2xl border border-[#B19777]/40 flex flex-col items-center justify-center text-center overflow-hidden ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
        style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
      >
        {/* Enhanced background with mystical overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B19777]/10 via-transparent to-[#0A7373]/10"></div>
          <div className="absolute inset-0 bg-[#314E52]/80"></div>
        </div>

        {/* Floating mystical particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#B19777]/60 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-[#B19777]/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#B19777]/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        {/* Mystical background symbols - enhanced */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl opacity-15">
          <div className="absolute -top-4 -left-4 w-20 h-20">
            <MagicSymbol type="pentagram" size={40} color="#B19777" />
          </div>
          <div className="absolute bottom-4 right-4 w-20 h-20">
            <MagicSymbol type="triangle" size={30} color="#B19777" />
          </div>
          <div className="absolute top-1/2 right-6 w-16 h-16 opacity-60">
            <MagicSymbol type="sparkle" size={24} color="#B19777" className="animate-twinkle" />
          </div>
        </div>
        
        {/* Content - Above overlays */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <p className="text-white mb-4 italic leading-relaxed">"{back.quote}"</p>
          
          {back.author && (
            <p className="text-[#B19777] font-medium">— {back.author}</p>
          )}
          
          <span className="text-white/50 text-sm mt-4">Click to return</span>
        </div>
        
        {/* Corner glow effect */}
        <div className="absolute bottom-4 left-4 opacity-30">
          <div className="w-6 h-6 bg-[#B19777]/30 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
