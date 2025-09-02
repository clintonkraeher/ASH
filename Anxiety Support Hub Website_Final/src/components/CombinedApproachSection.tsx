import image_053cdbc1c21eb25161815de24aa3fbc011aaa081 from 'figma:asset/053cdbc1c21eb25161815de24aa3fbc011aaa081.png';
import image_693311878f48fba10731bec1f088e66e915bed9d from 'figma:asset/693311878f48fba10731bec1f088e66e915bed9d.png';
import { useRef, useEffect } from 'react';
import { IllustratedBackground } from './IllustratedBackground';
import { MagicSymbol } from './MagicSymbol';
import { sectionContent } from '../content/texts';

export function CombinedApproachSection({ 
  onNavigateToAbout 
}: { 
  onNavigateToAbout: () => void; 
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-appear');
              }, index * 150);
            });
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
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center px-6 py-16 overflow-hidden"
      style={{
        background: '#fffcf1'
      }}
    >
      {/* Enhanced magical background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <IllustratedBackground />
        
        {/* Floating magical symbols */}
        <div className="absolute top-[15%] left-[8%] opacity-25">
          <MagicSymbol type="pentagram" size={60} position="absolute" className="animate-float text-[#B19777]" />
        </div>
        <div className="absolute top-[70%] right-[10%] opacity-25">
          <MagicSymbol type="circle" size={80} position="absolute" className="animate-float text-[#0A7373]" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-[25%] left-[12%] opacity-25">
          <MagicSymbol type="triangle" size={50} position="absolute" className="animate-float text-[#6F4E37]" style={{ animationDelay: '4s' }} />
        </div>
        <div className="absolute top-[40%] right-[5%] opacity-20">
          <MagicSymbol type="square" size={45} position="absolute" className="animate-twinkle text-[#B19777]" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B19777]/5 via-transparent to-[#314E52]/5"></div>
      </div>

      {/* Main content container */}
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Header Section - Centered */}
        <div className="text-center mb-16 animate-on-scroll opacity-0">
          <div className="relative inline-block">
            <h2 className="font-['Cormorant_Garamond'] text-[42px] text-[#314E52] relative">
              The Path
            </h2>
            

          </div>
          
          <div className="max-w-4xl mx-auto mt-8 space-y-6">
            <p className="text-[#314E52]/80 leading-relaxed font-['Space_Grotesk'] text-[16px]">
              {sectionContent.combinedApproach.paragraphs[0]}
            </p>
            
            <p className="text-[#314E52]/80 leading-relaxed font-['Space_Grotesk'] text-[16px]">
              That's why we guide you toward stability in the here and now – before moving into the next level of long-term intervention. We believe in a three-level pyramid system that prioritizes survival, fosters understanding, and ultimately leads to self-awareness – so you can return to a life with purpose, presence, and clarity.
            </p>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 lg:items-stretch">
          
          {/* Left - Enhanced Image */}
          <div className="animate-on-scroll opacity-0 flex items-stretch">
            <div className="relative group w-full">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#B19777]/20 via-[#0A7373]/10 to-[#314E52]/20 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full flex items-center">
                <img
                  src={image_053cdbc1c21eb25161815de24aa3fbc011aaa081}
                  alt="Transformative journey pyramid - three levels of consciousness"
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#314E52]/10"></div>
              </div>
              
              
            </div>
          </div>

          {/* Right - Descriptions */}
          <div className="animate-on-scroll opacity-0 flex flex-col justify-between h-full">
            
            {/* Unified Journey Card */}
            <div className="group relative bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300 hover:border-[#0A7373]/40 transition-all duration-500 shadow-lg hover:shadow-2xl p-8 h-full overflow-hidden">
              
              {/* Background Journey Flow */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#B19777]/30 via-[#0A7373]/20 to-[#314E52]/30"></div>
              </div>

              

              {/* Journey Steps */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                
                {/* Section Header */}
                <h3 className="font-['Cormorant_Garamond'] text-[#314E52] mb-8 text-left">
                  Our Three Level Approach
                </h3>
                
                {/* Level 1: Survive */}
                <div className="relative group/step mb-6 z-10">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#86725B] to-[#B19777] rounded-xl flex items-center justify-center shadow-lg">
                        <MagicSymbol type="square" size={24} position="relative" className="text-white" animated={false} />
                      </div>
                      {/* Connecting Line - extends to next level */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-40 bg-gradient-to-b from-[#B19777] to-[#0A7373] opacity-60 z-0"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Cormorant_Garamond'] text-[#314E52] mb-3">
                        Survive - Body
                      </h4>
                      <p className="text-[#314E52]/80 text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
                        <strong>For immediate relief:</strong><br /> We guide and support you through the immediate phase of anxiety when it kicks in. We provide physical methods and body-oriented tools to help you break the panic loop.
                      </p>
                    </div>
                  </div>
                </div>



                {/* Level 2: Understand */}
                <div className="relative group/step mb-6 z-10">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#28767A] to-[#0A7373] rounded-xl flex items-center justify-center shadow-lg">
                        <MagicSymbol type="circle" size={24} position="relative" className="text-white" animated={false} />
                      </div>
                      {/* Connecting Line - extends to next level */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-[#0A7373] to-[#314E52] opacity-60 z-0"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Cormorant_Garamond'] text-[#314E52] mb-3">
                        Understand - Mind
                      </h4>
                      <p className="text-[#314E52]/80 text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
                        <strong>For ongoing support:</strong> <br /> What you gain from immediate relief is the ability to think clearly again. This opens the space for a more systematic understanding of your situation and its roots.
                      </p>
                    </div>
                  </div>
                </div>



                {/* Level 3: Transcend */}
                <div className="relative group/step z-10">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#071834] to-[#314E52] rounded-xl flex items-center justify-center shadow-lg relative">
                      <MagicSymbol type="triangle" size={24} position="relative" className="text-white" animated={false} />
                      {/* Transcendence Glow */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#B19777]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-['Cormorant_Garamond'] text-[#314E52] mb-3">
                        Transcend - Spirit
                      </h4>
                      <p className="text-[#314E52]/80 text-base md:text-lg leading-relaxed font-['Space_Grotesk']">
                        <strong>For deep transformation:</strong> <br /> This is your rise where you redefine who you are and step into purpose, power, and clarity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Journey Completion Indicator */}
              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-6 h-6 border-2 border-[#B19777] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#B19777] rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA - Centered below grid */}
        <div className="mt-12 text-center animate-on-scroll opacity-0">
          <button 
            onClick={onNavigateToAbout}
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium"
          >
            <span>Discover the Full Path</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#B19777]/40 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-[#0A7373]/40 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-2.5 h-2.5 bg-[#314E52]/30 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      </div>
    </section>
  );
}