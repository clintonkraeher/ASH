import { useEffect, useRef, useState } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { BreathingExercise } from './BreathingExercise';
import image_f2094519c3cb236af654545c1019b305e9208f5f from 'figma:asset/f2094519c3cb236af654545c1019b305e9208f5f.png';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { heroContent } from '../content/texts';

interface HeroSectionProps {
  onNavigateToResources: () => void;
}

export function HeroSection({ onNavigateToResources }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Removed headlineRef as heading is now plain text
  const [breathingActive, setBreathingActive] = useState(false);
  const [breathScale, setBreathScale] = useState(1);
  // State for controlling the breathing exercise modal
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  // Removed mousePosition state since we're making the image static
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Removed heading animation effect - heading is now plain text
  
  // Breathing animation effect
  useEffect(() => {
    // Set breathing active to true by default to always animate the button icon
    setBreathingActive(true);
    
    let growing = true;
    let scale = 1;
    
    const animateBreathing = () => {
      if (growing) {
        scale += 0.01;
        if (scale >= 1.3) growing = false;
      } else {
        scale -= 0.01;
        if (scale <= 1) growing = true;
      }
      
      setBreathScale(scale);
    };
    
    const interval = setInterval(animateBreathing, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  // Removed parallax effect from the image to make it static
  
  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
      style={{ backgroundColor: "#0C363B" }}
    >
      {/* Background elements */}

      
      <div className="absolute inset-0 pointer-events-none">
        <MagicSymbol type="circle" size={80} position="absolute" top="15%" left="5%" className="opacity-40" />
        <MagicSymbol type="triangle" size={60} position="absolute" top="70%" left="15%" rotate={25} className="opacity-30" />
        <MagicSymbol type="pentagram" size={50} position="absolute" top="15%" right="20%" rotate={10} className="opacity-30" />
        <MagicSymbol type="square" size={40} position="absolute" bottom="15%" right="5%" rotate={45} className="opacity-40" />
      </div>
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Text content */}
        <div className="flex flex-col order-2 lg:order-1 opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
          <span className="text-[rgba(254,230,175,1)] mb-2 text-[15px]">
            {heroContent.tagline}
          </span>
          
          <h1
            className="mb-6 text-[rgba(255,252,241,1)]"
          >
            {heroContent.title}
          </h1>
          
          <p className="text-[#E9E9E9]/80 m-[0px] max-w-lg text-[rgba(255,252,241,1)] text-[16px] mt-[0px] mr-[0px] mb-[36px] ml-[0px] font-normal font-[Space_Grotesk]">
            {heroContent.paragraphs[0]}
          </p>
          <p className="text-[#E9E9E9]/80 m-[0px] max-w-lg text-[rgba(255,252,241,1)] text-[16px] mt-[0px] mr-[0px] mb-[36px] ml-[0px] font-normal font-[Space_Grotesk]">
            {heroContent.paragraphs[1]}
          </p>
          <p className="text-[#E9E9E9]/80 m-[0px] max-w-lg text-[rgba(255,252,241,1)] text-[16px] mt-[0px] mr-[0px] mb-[36px] ml-[0px] font-normal font-[Space_Grotesk]">
            {heroContent.paragraphs[2]}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNavigateToResources}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-all duration-300 group"
            >
              <span>{heroContent.buttons.primary}</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-[#FFFCF1] text-[rgba(255,252,241,1)] hover:bg-[#F8EFD2]/10 hover:text-white transition duration-300"
              onClick={() => setShowBreathingExercise(true)}
            >
              <span>{heroContent.buttons.secondary}</span>
              <div 
                className="w-6 h-6 rounded-full bg-[#F8EFD2]/20 flex items-center justify-center transition-transform duration-300"
                style={{ transform: `scale(${breathScale})` }}
              >
                <div className="w-4 h-4 rounded-full bg-[#F8EFD2]/40 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#F8EFD2]"></div>
                </div>
              </div>
            </button>
          </div>
          
          
        </div>
        
        {/* Illustration - Static (non-reactive) */}
        <div 
          className="order-1 lg:order-2 flex justify-center opacity-0 animate-[fadeIn_1s_ease-out_forwards]"
        >
          <div className="relative rounded-2xl shadow-xl overflow-hidden w-full max-w-[600px] aspect-[4/3]">
            {/* Main image - Made static with no hover effects */}
            <div className="w-full h-full">
              <ImageWithFallback
                src={image_f2094519c3cb236af654545c1019b305e9208f5f}
                alt="Mystical portal - golden path leading to enlightenment"
                className="object-cover w-full h-full"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Breathing Exercise Modal - Positioned relative to hero section */}
      {showBreathingExercise && (
        <div className="absolute inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          <div className="max-w-md w-full mx-4">
            <div className="relative">
              <button 
                onClick={() => setShowBreathingExercise(false)}
                className="absolute -top-10 right-0 text-white hover:text-[#B19777] transition-colors z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <BreathingExercise />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}