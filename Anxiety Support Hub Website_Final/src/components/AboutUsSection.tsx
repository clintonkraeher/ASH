import { AnimatedContainer } from "./ui/animated-container";
import { MagicSymbol } from "./MagicSymbol";

interface AboutUsSectionProps {
  onNavigateToAboutUs: () => void;
}

export function AboutUsSection({ onNavigateToAboutUs }: AboutUsSectionProps) {
  return (
    <section id="aboutus" className="py-20 bg-[rgba(255,252,241,1)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-10">
          <MagicSymbol type="triangle" size={120} position="absolute" className="animate-float" />
        </div>
        <div className="absolute bottom-20 right-[10%] opacity-10">
          <MagicSymbol type="circle" size={100} position="absolute" className="animate-float" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-[#0A7373]/5 to-[#B19777]/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedContainer animation="appear" className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[#314E52] mb-6">
            About Us
          </h2>
          <p className="text-xl text-[#314E52]/80 max-w-3xl mx-auto" style={{ fontSize: '16px' }}>
            We're not therapists. We're survivors who built what we wished we'd had 
            during our darkest moments - practical tools that actually work when you need them most.
          </p>
        </AnimatedContainer>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column - Story */}
          <AnimatedContainer animation="rise" delay={200} className="h-full">
            <div className="bg-white/80 p-8 rounded-xl shadow-lg border-2 border-gray-300 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-[#314E52] mb-4">
                  We Started From Rock Bottom
                </h3>
                <p className="text-[#314E52]/90 mb-4">
                  Years ago, we were you. Hearts racing at 3am. Unable to leave the house. 
                  Googling "am I dying?" for the hundredth time. We were successful business 
                  people brought to our knees by something we couldn't understand or control.
                </p>
                <p className="text-[#314E52]/80">
                  We tried everything - therapy, meditation, medications, shamanism. Some helped a little. 
                  Most were too slow or disconnected from the raw reality of panic.
                </p>
              </div>
            </div>
          </AnimatedContainer>

          {/* Right Column */}
          <AnimatedContainer animation="rise" delay={400} className="h-full">
            <div className="bg-gradient-to-r from-[#0A7373]/5 to-[#B19777]/5 p-8 rounded-xl border-2 border-gray-300 shadow-lg h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl text-[#314E52] mb-4 text-[26px]">
                  So We Built What We Wished We'd Had
                </h3>
                <p className="text-[#314E52]/90 mb-4">
                  We approached anxiety like any critical business problem: systematically, 
                  pragmatically, relentlessly. No fluff. No toxic positivity. No endless analysis.
                </p>
                <p className="text-[#314E52]/80 font-medium">
                  Just tools that pull you out of the spiral and get you back to living.
                </p>
              </div>
            </div>
          </AnimatedContainer>
        </div>

        {/* Full Width Card Below */}
        <AnimatedContainer animation="rise" delay={600} className="mt-8 lg:mt-12 max-w-6xl mx-auto">
          <div className="hidden bg-gradient-to-r from-[#314E52] to-[#0A7373] rounded-xl p-8 md:p-10 shadow-lg border-2 border-gray-300 text-white relative overflow-hidden text-center">
            {/* Magical elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            
            
            <div className="relative z-10">
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl mb-4">
                We Walked Through Hell
              </h3>
              <p className="mb-6 text-white/90">
                Now we know the way out. And we're here to walk it with you.
              </p>
              <button 
                onClick={onNavigateToAboutUs}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#86725B] text-white rounded-xl hover:bg-[#86725B]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium shadow-lg"
              >
                <span>Read Our Full Story</span>
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
        </AnimatedContainer>
        
        {/* Bottom Stats/Features */}
        <AnimatedContainer animation="appear" delay={800} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-gray-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0A7373]/10 rounded-full flex items-center justify-center">
                <MagicSymbol type="square" size={24} position="relative" className="text-[#0A7373]" />
              </div>
              <h4 className="text-[#314E52] mb-2">Systematic</h4>
              <p className="text-[#314E52]/70 text-sm">Every tool tested and purposeful</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-gray-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0A7373]/10 rounded-full flex items-center justify-center">
                <MagicSymbol type="circle" size={24} position="relative" className="text-[#0A7373]" />
              </div>
              <h4 className="text-[#314E52] mb-2">Practical</h4>
              <p className="text-[#314E52]/70 text-sm">Works now, not after months</p>
            </div>
            
            <div className="text-center p-6 bg-white/60 rounded-xl border-2 border-gray-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-4 bg-[#0A7373]/10 rounded-full flex items-center justify-center">
                <MagicSymbol type="triangle" size={24} position="relative" className="text-[#0A7373]" />
              </div>
              <h4 className="text-[#314E52] mb-2">Proven</h4>
              <p className="text-[#314E52]/70 text-sm">Built from real experience</p>
            </div>
          </div>
        </AnimatedContainer>
        
        {/* Enhanced CTA - Bottom of section */}
        <AnimatedContainer animation="appear" delay={900} className="mt-12 text-center">
          <button 
            onClick={onNavigateToAboutUs}
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium"          >
            <span>Read Our Full Story</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </AnimatedContainer>
      </div>
    </section>
  );
}