import { useEffect, useRef } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedContainer } from './ui/animated-container';

interface AboutUsPageProps {
  onNavigateToHome: () => void;
  onNavigateToResources: () => void;
  onNavigateToServices: () => void;
}

export function AboutUsPage({ onNavigateToHome, onNavigateToResources, onNavigateToServices }: AboutUsPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative pt-32 pb-16 min-h-screen bg-[rgba(255,252,241,1)]" ref={pageRef}>
      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magical Symbols */}
        <div className="absolute top-[10%] left-[5%] opacity-20">
          <MagicSymbol type="pentagram" size={60} position="absolute" rotate={15} className="animate-float" />
        </div>
        <div className="absolute top-[30%] right-[8%] opacity-20">
          <MagicSymbol type="circle" size={80} position="absolute" className="animate-float" />
        </div>
        <div className="absolute bottom-[15%] left-[10%] opacity-20">
          <MagicSymbol type="triangle" size={70} position="absolute" rotate={-10} className="animate-float" />
        </div>
        
     
      </div>
      
      {/* About Us Content */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedContainer animation="appear" className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl text-[#3A5659] mb-6 relative inline-block">
            About Us
          </h1>
          <p className="text-[#3A5659] mt-4 max-w-3xl" style={{ fontSize: '15px' }}>
            We're not therapists. We're survivors who built what we wished we'd had 
            during our darkest moments - practical tools that actually work when you need them most.
          </p>
        </AnimatedContainer>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* We're Not Therapists Section */}
          <AnimatedContainer animation="rise" delay={300} className="bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              We're Not Therapists. We're Survivors.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
                We didn't start ASH from a place of expertise. We started from rock bottom.
              </p>
              <p>
                Years ago, we were where you are now. Sleepless at 3am, feeling your heart pound for no reason you could name. Avoiding places that once felt easy. Wondering if something was deeply wrong. Plans collapsed. Work suffered. Relationships grew tense. We were high-performing professionals suddenly facing something we couldn't explain, negotiate with, or control.              </p>
            </div>
          </AnimatedContainer>

          {/* We Tried Everything Section */}
          <AnimatedContainer animation="rise" delay={300} className="bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              We Tried Everything. And We Mean Everything.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
              Psychotherapy. Clinics. Medications. Meditation apps. Stoicism. Shamanism. Conscious connected breathing. CBT workbooks. EMDR. Somatic experiencing. Cold plunges. Supplements. Elimination diets.               </p>
              <p>
              We spent years – and fortunes – searching for a way out. Some things helped a little. Some made it worse. Most were too slow, too abstract, or too far from the raw reality of panic. We needed solutions that worked now – not after six months of weekly sessions.              </p>
            </div>
          </AnimatedContainer>

          {/* So We Built Section */}
          <AnimatedContainer animation="rise" delay={400} className="bg-gradient-to-br from-[#0A7373]/10 to-[#B19777]/10 rounded-xl shadow-lg p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              So We Built What We Wished We'd Had.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
                We're not doctors. We're not psychologists. We're not spiritual guides. We're business people who approached anxiety like any urgent problem: systematically, pragmatically, relentlessly.               </p>
              <p>
                We took what actually worked – from neuroscience, from enduring practices, from hard-won personal experience – and left out what didn't. No fluff. No empty optimism. No getting lost in theory. Just tools that break the spiral and get you back to living.
              </p>
            </div>
          </AnimatedContainer>

          {/* German Engineering Section */}
          <AnimatedContainer animation="rise" delay={500} className="bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              The German Engineering Approach to Anxiety.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
                That's what our participants call it. Because we built ASH like a machine: Every component tested. Every tool serving a purpose. Nothing decorative. Everything functional.               </p>
              <p>
                If you have years to explore your trauma in therapy – good. Do that. But if you need to function tomorrow, if you need to reclaim your life now, if you're done hearing „just breathe“ from people who've never felt their body turn against them – you're in the right place.              </p>
            </div>
          </AnimatedContainer>

          {/* Still Learning Section */}
          <AnimatedContainer animation="rise" delay={600} className="bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              We're Still Learning. Still Fighting. Still Here.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
                We're not perfect. Anxiety still visits us sometimes. The difference is, now we know what to do. We have the tools. We have each other. And we have a system that works.               </p>
              <p>
                We built ASH because we remember the desperation. The shame. The loneliness of suffering while everyone else seemed fine. We remember thinking we were broken beyond repair.              </p>
            </div>
          </AnimatedContainer>

          {/* Final Message Section */}
          <AnimatedContainer animation="rise" delay={700} className="bg-white/90 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-gray-300">
            <h2 className="text-3xl text-[#3A5659] mb-6">
              We weren't broken. And neither are you.
            </h2>
            <div className="space-y-4 text-[#3A5659]/90">
              <p>
                This isn't about inspiration. It's about practical change. We survived by discipline, by effort, by refusing to accept this as permanent. Now we teach what we learned through experience.              </p>
            </div>
          </AnimatedContainer>

          {/* Final Dedication Section */}
          <AnimatedContainer animation="rise" delay={400} className="bg-gradient-to-br from-[#0A7373]/10 to-[#B19777]/10 rounded-xl shadow-lg p-8 border-2 border-gray-300 flex items-center justify-center">
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-md"></div>
            
            
            <div className="relative z-10">
              <h2 className="text-3xl text-[#3A5659] text-center">
                We walked through hell. Now we know the way out.
              </h2>
              
              
            </div>
          </AnimatedContainer>

{/* Ready to Begin Your Transformation Card */}
          <div className="max-w-7xl mx-auto w-full mt-16">
            <div className="max-w-7xl mx-auto w-full">
          {/* Call to Action Section */}
          <AnimatedContainer animation="appear" delay={500} className="text-center max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl mb-4 text-[#314E52]">And we're here to walk it with you.</h2>
            <p className="text-[#314E52]/80 mb-8 max-w-2xl mx-auto">
              Explore the wisdom we've gathered along our healing paths - tools born from our own struggles and refined through our transformation. Every resource here carries the understanding that can only come from walking through the darkness and finding the light.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onNavigateToResources}
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium"
              >
                <span>Come with Us</span>
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
          </AnimatedContainer>
        </div>
          </div>
          
          {/* Call to Action */}


          
          <AnimatedContainer animation="appear" delay={900} className="text-center mt-16 hidden">
            <h2 className="text-3xl mb-4 text-[#3A5659]">Ready to Begin Your Journey?</h2>
            <p className="text-[#3A5659]/80 mb-8 max-w-2xl mx-auto">
              Explore the wisdom we've gathered along our healing paths—tools born from our own struggles and refined through our transformation. Every resource here carries the understanding that can only come from walking through the darkness and finding the light.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onNavigateToResources}
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-all duration-300 group"
              >
                <span>Explore Your Tools</span>
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
          </AnimatedContainer>

          
        </div>
      </div>
    </div>
  );
}