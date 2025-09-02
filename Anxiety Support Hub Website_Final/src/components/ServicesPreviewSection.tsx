import image_5d85e5bf181bf834d16fa4eb05c2f5288dcc659e from 'figma:asset/5d85e5bf181bf834d16fa4eb05c2f5288dcc659e.png';
import image_5d85e5bf181bf834d16fa4eb05c2f5288dcc659e from 'figma:asset/5d85e5bf181bf834d16fa4eb05c2f5288dcc659e.png';
import image_5be11ca1c812ab1acd4dd5d587356024c49923a2 from 'figma:asset/5be11ca1c812ab1acd4dd5d587356024c49923a2.png';
import image_f8eee4e3d6a2c60c049ac7b1396409a305d28b49 from 'figma:asset/f8eee4e3d6a2c60c049ac7b1396409a305d28b49.png';
import image_585be205bc9e3af4fa60e9230defb02129be88c4 from 'figma:asset/585be205bc9e3af4fa60e9230defb02129be88c4.png';
import image_5cbeb97024401f0055701146558095f438ec68e0 from 'figma:asset/5cbeb97024401f0055701146558095f438ec68e0.png';
import image_6bafdc5f22352c17805253a5a69d49829e4cbffe from 'figma:asset/6bafdc5f22352c17805253a5a69d49829e4cbffe.png';
import image_7518b50d27643d0dd18a127c21202922310f407a from 'figma:asset/7518b50d27643d0dd18a127c21202922310f407a.png';
import image_acd5b2bb2e3705ca492b1ca61ab95b855812046f from 'figma:asset/acd5b2bb2e3705ca492b1ca61ab95b855812046f.png';
import { useState, useEffect } from 'react';
import { MagicSymbol } from './MagicSymbol';
import pathIllustration from 'figma:asset/7603f1ef5bb043cf0627eed00b14d22b52bb2cb6.png';
import mysticalIllustration from 'figma:asset/9151700aa39178e62af3c688f454a76976c9f91d.png';

interface ServicesPreviewSectionProps {
  onNavigateToServices: () => void;
  onNavigateToResources: () => void;
}

export function ServicesPreviewSection({
  onNavigateToServices,
  onNavigateToResources
}: ServicesPreviewSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('alchemy-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Magical Ritual Illustration Component
  const MagicalRitualIllustration = () => (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto flex-shrink-0">
      <img 
        src={image_5be11ca1c812ab1acd4dd5d587356024c49923a2} 
        alt="Mystical path illustration" 
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );

  // Glowing Book/Toolkit Illustration Component
  const GlowingBookIllustration = () => (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto flex-shrink-0">
      <img 
        src={image_5d85e5bf181bf834d16fa4eb05c2f5288dcc659e} 
        alt="Mystical flame illustration with stars" 
        className="w-full h-full object-contain drop-shadow-lg"
      />
    </div>
  );

  return (
    <section 
      id="alchemy-section" 
      className="relative bg-[rgba(254,230,175,1)] overflow-hidden"
      style={{ 
        minHeight: '100vh',
        minHeight: '100dvh'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <MagicSymbol type="pentagram" size={70} position="absolute" top="5%" left="5%" className="opacity-30" />
        <MagicSymbol type="square" size={50} position="absolute" bottom="10%" right="8%" rotate={15} className="opacity-30" />
      </div>

      {/* Main content container with proper spacing */}
      <div className="relative z-10 w-full" style={{ minHeight: 'inherit' }}>
        <div 
          className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col justify-center"
          style={{ 
            maxWidth: '1024px',
            minHeight: 'inherit',
            paddingTop: 'max(3rem, 8vh)',
            paddingBottom: 'max(3rem, 8vh)'
          }}
        >
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8 lg:mb-12 flex-shrink-0">
            <h2 className={`font-['Cormorant_Garamond'] text-[42px] text-[#314E52] mb-3 md:mb-4 lg:mb-6 relative inline-block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ letterSpacing: '0.02em' }}>
              What We Can Do for You 
              

            </h2>
            
            <p className={`text-gray-700 text-[16px] leading-relaxed mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Here you'll find some of the most effective and accessible tools we've discovered for navigating panic and anxiety. These are the ones we return to – with the people we care about – when stress begins to rise.
            </p>
            <p className={`text-gray-700 text-[16px] leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              They’re simple, body-based, and designed for the very first moments. And this is only the beginning. Whether you prefer to go with guidance or walk in your own rhythm – you're not alone.
            </p>

            
          </div>

          {/* Two-Column Cards - Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12 mb-6 md:mb-8 lg:mb-12">
            
            {/* Card 1: Guided Journeys */}
            <div 
                className={`group bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300 p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg cursor-pointer relative overflow-hidden flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}              style={{ 
                transitionDelay: '400ms',
                minHeight: '400px',
                maxHeight: '600px'
              }}
              onClick={onNavigateToServices}
            >
              {/* Enhanced background with mystical overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300"></div>
              </div>

              
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Illustration */}
                <div className="mb-4 md:mb-6 flex-shrink-0">
                  <MagicalRitualIllustration />
                </div>
                
                {/* Title */}
                <h3 className="font-['Cormorant_Garamond'] text-[#314E52] text-center mb-4 md:mb-6 flex-shrink-0">
                  Our Journeys
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed text-sm md:text-base lg:text-lg flex-grow">
                  Experience deep transformation through live rituals, healing sessions, and personalized guidance.
                </p>
                
                {/* Featured Items */}
                <div className="space-y-3 mb-8 flex-shrink-0">
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#B19777] rounded-full mr-3 md:mr-4 animate-pulse"></div>
                    1:1 Sessions
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#B19777] rounded-full mr-3 md:mr-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    Breathing Lab
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#B19777] rounded-full mr-3 md:mr-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    Shamanic Practices
                  </div>
                </div>
                
                {/* Button */}
                <div className="text-center mt-auto flex-shrink-0">
                  <button className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-3 lg:px-10 lg:py-3 bg-[#0A7373] text-white rounded-lg md:rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-sm md:text-base lg:text-lg">
                    <span>Explore Our Journeys</span>
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Enhanced magical decoration */}
              <div className="absolute top-6 right-8 opacity-30">
                <MagicSymbol type="triangle" size={24} position="absolute" className="text-[#B19777] animate-float" />
              </div>
              
              {/* Journey completion indicator */}
              <div className="absolute bottom-6 left-8 opacity-20">
                <div className="w-6 h-6 border-2 border-[#B19777] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#B19777] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Card 2: Empowerment Tools */}
            <div 
                className={`group bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300 p-4 md:p-6 lg:p-8 xl:p-10 shadow-lg cursor-pointer relative overflow-hidden flex flex-col ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}              style={{ 
                transitionDelay: '600ms',
                minHeight: '400px',
                maxHeight: '600px'
              }}
              onClick={onNavigateToResources}
            >
              {/* Enhanced background with mystical overlay */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0A7373]/30 via-[#314E52]/20 to-[#B19777]/30"></div>
              </div>

              
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Illustration */}
                <div className="mb-4 md:mb-6 flex-shrink-0">
                  <GlowingBookIllustration />
                </div>
                
                {/* Title */}
                <h3 className="font-['Cormorant_Garamond'] text-[#314E52] text-center mb-4 md:mb-6 flex-shrink-0">
                  Your Tools
                </h3>
                
                {/* Description */}
                <p className="text-gray-700 text-center mb-6 leading-relaxed text-sm md:text-base lg:text-lg flex-grow">
                  Access practical guides, e-books, and courses to empower your daily journey - at your own pace.
                </p>
                
                {/* Featured Items */}
                <div className="space-y-3 mb-8 flex-shrink-0">
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0A7373] rounded-full mr-3 md:mr-4 animate-pulse"></div>
                    Books
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0A7373] rounded-full mr-3 md:mr-4 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    Courses
                  </div>
                  <div className="flex items-center text-gray-600 text-sm md:text-base">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-[#0A7373] rounded-full mr-3 md:mr-4 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    Guides
                  </div>
                </div>
                
                {/* Button */}
                <div className="text-center mt-auto flex-shrink-0">
                  <button className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-3 bg-[#0A7373] text-white rounded-lg md:rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-sm md:text-base lg:text-lg">
                    <span>Browse Your Tools</span>
                    <svg 
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Enhanced magical decoration */}
              <div className="absolute top-6 right-8 opacity-30">
                <MagicSymbol type="circle" size={24} position="absolute" className="text-[#0A7373] animate-float" />
              </div>
              
              {/* Journey completion indicator */}
              <div className="absolute bottom-6 left-8 opacity-20">
                <div className="w-6 h-6 border-2 border-[#0A7373] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#0A7373] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Not Sure Which Service Card */}
          <div className={`transition-all duration-1000 delay-1200 flex-shrink-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="max-w-4xl mx-auto">
              <div className="relative group bg-gradient-to-br from-[#314E52] to-[#0A7373] rounded-2xl md:rounded-3xl  p-6 md:p-8 lg:p-10 shadow-lg cursor-pointer overflow-hidden">
                
                {/* Floating magical decorative elements */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute top-4 right-4 animate-float" style={{ animationDelay: '0s' }}>
                    <MagicSymbol type="circle" size={20} position="absolute" className="text-white/60" />
                  </div>
                  <div className="absolute top-1/2 left-4 animate-float" style={{ animationDelay: '1s' }}>
                    <MagicSymbol type="triangle" size={16} position="absolute" className="text-white/40" />
                  </div>
                  <div className="absolute bottom-6 right-1/3 animate-float" style={{ animationDelay: '2s' }}>
                    <MagicSymbol type="pentagram" size={18} position="absolute" className="text-white/50" />
                  </div>
                  <div className="absolute top-1/4 right-1/4 animate-twinkle" style={{ animationDelay: '0.5s' }}>
                    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-1/3 left-1/4 animate-twinkle" style={{ animationDelay: '1.5s' }}>
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                  </div>
                </div>

                <div className="relative z-10 text-center">
                  <h3 className="font-['Cormorant_Garamond'] text-white mb-4">
                    Not sure which service or tool is right for you?
                  </h3>
                  
                  <p className="text-white/90 mb-8 leading-relaxed text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                    Book a complimentary 20-minute consultation to discuss your unique needs and find the perfect support option for your journey.
                  </p>
                  
                  <button className="inline-flex items-center gap-3 px-8 py-3 bg-[rgba(245,239,217,1)] text-[#314E52] rounded-xl  hover:bg-[#FEE6AF]/90 transition-colors">
                    <span>Schedule a Free Consultation</span>
                    
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section Footer */}
          <div className={`text-center transition-all duration-1000 delay-1400 flex-shrink-0 mt-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-gray-700 italic max-w-3xl mx-auto leading-relaxed text-[16px]">
              Every journey is guided by wisdom, care, and the quiet magic of transformation. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}