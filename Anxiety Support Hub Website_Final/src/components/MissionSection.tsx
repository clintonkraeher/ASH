
import { useRef, useEffect } from 'react';
import { IllustratedBackground } from './IllustratedBackground';
import { MagicSymbol } from './MagicSymbol';
import { TransformativeIllustration } from './TransformativeIllustration';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MissionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (contentRef.current) {
              contentRef.current.classList.add('animate-[fadeIn_1s_ease-out_forwards]');
              contentRef.current.classList.remove('opacity-0');
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-[rgba(255,247,221,1)]"
    >
      {/* Background elements */}
      <IllustratedBackground color1="#0A7373" color2="#B19777" />
      
      <div className="absolute inset-0 pointer-events-none">
        <MagicSymbol type="circle" size={60} position="absolute" top="10%" right="5%" className="opacity-30" />
        <MagicSymbol type="triangle" size={50} position="absolute" bottom="15%" left="10%" rotate={-15} className="opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <div 
          ref={contentRef} 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0"
        >
          {/* Illustration */}
          <div className="flex justify-center">
            <TransformativeIllustration 
              src="/freedom-illustration.jpg"
              alt="Silhouette figure breaking free from anxiety"
              overlayColor="rgba(49, 78, 82, 0.25)"
              className="rounded-2xl shadow-xl"
              width={500}
              height={500}
            />
          </div>
          
          {/* Text content */}
          <div className="flex flex-col">
            <h2 className="font-['Cormorant_Garamond'] text-[42px] mb-6 text-[#314E52]">
              Our Alchemical Approach to Anxiety
            </h2>
            
            <p className="text-gray-700 mb-6">
              We believe anxiety isn't merely a condition to manage—it's a profound 
              teacher on your journey of personal transformation. Like the ancient 
              alchemists who turned base metals into gold, we guide you to transmute 
              your anxiety into wisdom, strength, and purpose.
            </p>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  title: "Immediate Survival & Physical Calmness",
                  description: "Practical techniques to ease acute anxiety in the moment, creating space for clarity and calm."
                },
                {
                  title: "Emotional Regulation & Conscious Awareness",
                  description: "Tools and practices to navigate daily challenges with greater ease and emotional resilience."
                },
                {
                  title: "Spiritual Expansion & Integration",
                  description: "Deep transformative work that helps you not just cope with anxiety, but thrive because of it."
                }
              ].map((item, index) => (
                <div key={index} className="relative group bg-gradient-to-br from-white/80 via-white/70 to-white/60 backdrop-blur-sm rounded-xl border border-[#B19777]/30 hover:border-[#0A7373]/40 transition-all duration-500 hover:shadow-lg p-4 overflow-hidden">
                  {/* Background mystical overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#B19777]/20 to-[#0A7373]/20"></div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-[#B19777]/40 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-1/4 left-3/4 w-1.5 h-1.5 bg-[#0A7373]/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="mt-1 relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F9E8BC] to-[#0A7373] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-medium">{index + 1}</span>
                      </div>
                      {index < 2 && (
                        <div className="absolute top-10 left-5 w-px h-10 bg-gradient-to-b from-[#0A7373] to-[#0A7373]/30"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Cormorant_Garamond'] text-xl text-[#314E52] mb-2">{item.title}</h3>
                      <p className="text-[#314E52]/80 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-4 h-4 border border-[#B19777] rounded-full flex items-center justify-center">
                      <div className="w-1 h-1 bg-[#B19777] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <a 
              href="#services" 
              className="self-start px-6 py-3 rounded-lg bg-[#B19777] text-white hover:bg-[#a0865d] transition duration-300 shadow-md"
            >
              Discover Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
