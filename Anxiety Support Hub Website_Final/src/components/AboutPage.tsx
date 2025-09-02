import { useState, useEffect, useRef } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedContainer } from './ui/animated-container';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';

interface AboutPageProps {
  onNavigateToHome: () => void;
  onNavigateToServices: () => void;
  onNavigateToAbout: () => void;
}

export function AboutPage({ onNavigateToHome, onNavigateToServices, onNavigateToAbout }: AboutPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="relative pt-32 pb-16 min-h-screen bg-[#F5EFD9]/40 bg-[rgba(255,252,241,1)]" ref={pageRef}>
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
      
      {/* About Content */}
      <div className="container mx-auto px-4">
        {/* About Header */}
        <AnimatedContainer animation="appear" className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl text-[#314E52] mb-6 relative inline-block">
            The Path
          </h1>
          <p className="text-gray-700 mt-4" style={{ fontSize: '15px' }}>
            Discover our unique three-level approach to anxiety transformation, 
            designed to meet you exactly where you are and guide you toward 
            lasting freedom and inner strength.
          </p>
        </AnimatedContainer>
        {/* Our Approach Section */}
          <AnimatedContainer animation="rise" delay={300} className="bg-white/90 rounded-xl shadow-lg overflow-hidden mb-12 w-full border-2 border-gray-300">
            <div className="p-6 md:p-8 w-full">
              <h2 className="text-3xl mb-6 text-[#314E52] text-center mb-0">
                <span>Our Three Levels</span>
              </h2>
              
              <Tabs defaultValue="survive" className="w-full min-h-[800px]">
                {/* Tab Navigation */}
                <TabsList className="grid grid-cols-3 w-full mb-8 bg-[#FFFCF1]/30 rounded-xl border border-2 border-gray-300 h-16 items-center">
                  <TabsTrigger 
                    value="survive" 
                    className="flex items-center gap-2 px-4 h-12 text-[#314E52] data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#314E52] data-[state=active]:border-2 data-[state=active]:border-[#B19777]/40 hover:bg-white/50 transition-all duration-300 rounded-lg mx-1 font-medium"
                  >
                    <MagicSymbol type="square" size={20} position="relative" className="text-[#B19777]" animated={false} />
                    <span className="hidden sm:inline text-[16px]">Survive</span>
                    <span className="sm:hidden">S</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="understand" 
                    className="flex items-center gap-2 px-4 h-12 text-[#314E52] data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#314E52] data-[state=active]:border-2 data-[state=active]:border-[#0A7373]/40 hover:bg-white/50 transition-all duration-300 rounded-lg mx-1 font-medium"
                  >
                    <MagicSymbol type="circle" size={20} position="relative" className="text-[#0A7373]" animated={false} />
                    <span className="hidden sm:inline text-[16px]">Understand</span>
                    <span className="sm:hidden">U</span>
                  </TabsTrigger>
                  <TabsTrigger 
                    value="transcend" 
                    className="flex items-center gap-2 px-4 h-12 text-[#314E52] data-[state=active]:bg-white data-[state=active]:shadow-lg data-[state=active]:text-[#314E52] data-[state=active]:border-2 data-[state=active]:border-[#314E52]/40 hover:bg-white/50 transition-all duration-300 rounded-lg mx-1 font-medium"
                  >
                    <MagicSymbol type="triangle" size={20} position="relative" className="text-[#314E52]" animated={false} />
                    <span className="hidden sm:inline text-[16px]">Transcend</span>
                    <span className="sm:hidden">T</span>
                  </TabsTrigger>
                </TabsList>

                {/* Tab Content */}
                <TabsContent value="survive" className="mt-0 min-h-[700px]">
                  <div className="bg-[#B19777]/5 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-[#B19777]/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#86725B] to-[#B19777] rounded-xl flex items-center justify-center shadow-lg">
                        <MagicSymbol type="square" size={24} position="relative" className="text-white" animated={false} />
                      </div>
                      <h3 className="text-2xl text-[#314E52]">Level I – Survive</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#B19777]/10 to-[#F9E8BC]/10 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg mb-6">
                      <h4 className="text-xl text-[#314E52] font-medium text-center mb-0">Before You Heal, You Must Feel Safe Again.</h4>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-[#314E52]/90 text-base leading-relaxed">
                        When anxiety or panic strikes, it doesn't ask for permission. Your heart races. Your breath disappears. Your thoughts blur into static. It can feel like your body turns against you – or like you're not even in it anymore. In moments like these, you don't need advice. You don't need a diagnosis. You need to survive the wave. This is where our work begins.
                      </p>
                      
                      <p className="text-[#314E52]/90 text-base leading-relaxed">
                        Level I is not just the start of your journey – it's the ground beneath it. Before we examine your story, your beliefs, or your patterns, we start with something simpler, but far more urgent: helping your nervous system find its way back to safety. Because only when you feel safe – in your body, in your breath, in your brain – can anything else begin to grow.
                      </p>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">What Survival Really Means.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          Survival doesn't mean pushing through, gritting your teeth, or waiting it out.
                        </p>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          It means knowing how to guide your system back from the edge – again and again, until safety becomes familiar. That's why Level I focuses on three direct, physical access points:
                        </p>
                        <ul className="space-y-2 text-[#314E52]/80 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            <strong>Body</strong> – Calm the physical storm.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            <strong>Breath</strong> – Reclaim control of your rhythm.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            <strong>Brain</strong> – Shift your attention and pattern of thought.
                          </li>
                        </ul>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          These tools aren't nice-to-haves. They're the foundation of regulation. Without them, your brain literally cannot process, reflect, or decide.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#B19777]/10 to-[#F9E8BC]/10 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">Why This Comes First.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          Panic doesn't come from the logical parts of your brain – it comes from the limbic system (survival center), not the prefrontal cortex (thinking brain). That's why you can know you're safe, but still feel like you're dying. It's not about logic. It's about physiology.
                        </p>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          Level I gives you practical ways to work with your nervous system, not against it. You'll learn how to create real-time stability – and how to rebuild trust in your own capacity.
                        </p>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <h3 className="text-xl text-[#314E52] mb-6 font-medium">The Tools We Use</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Your Body: Come Back to Solid Ground.</h4>
                            <p className="text-[#314E52]/90 text-base leading-relaxed mb-3">
                              We start by making the body a safe place to return to – not a source of fear.
                            </p>
                            <p className="text-[#314E52]/90 text-base leading-relaxed mb-3">
                              You'll explore gentle techniques like:
                            </p>
                            <ul className="space-y-2 text-[#314E52]/80 mb-4">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>EFT Tapping:</strong> Gentle acupressure for emotional release.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Progressive Muscle Relaxation (PMR):</strong> Physically unwind tension.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Grounding techniques:</strong> Use cold water, texture, or pressure to stay present.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Quick interventions:</strong> Brisk walks, jumping jacks, or even sour candy.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Vagus nerve stimulation:</strong> Help the body naturally shift into calm.
                              </li>
                            </ul>
                            <p className="text-[#314E52]/90 text-base leading-relaxed">
                              Each helps your system remember: you're here, and you're okay.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Breath: Regulate From Within.</h4>
                            <p className="text-[#314E52]/90 text-base leading-relaxed mb-3">
                              Your breath is always with you – and it's one of the fastest ways to shift your state.
                            </p>
                            <p className="text-[#314E52]/90 text-base leading-relaxed mb-3">
                              We'll show you how to use it intentionally, through:
                            </p>
                            <ul className="space-y-2 text-[#314E52]/80 mb-4">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Box Breathing:</strong> A fast-acting technique to restore rhythm.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Alternate Nostril Breathing (Nadi Shodhana):</strong> Balance brain hemispheres and slow racing thoughts.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Bhramari (Bee Breath):</strong> Calm your nervous system through vibration.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Psychological Sigh:</strong> Scientifically proven to reduce stress quickly.
                              </li>
                            </ul>
                            <p className="text-[#314E52]/90 text-base leading-relaxed">
                              These are tools you'll reach for instinctively once you feel their effects.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Brain: Out of Panic, Into Presence.</h4>
                            <p className="text-[#314E52]/90 text-base leading-relaxed mb-3">
                              When your thoughts spin out, distraction isn't the answer – redirection is. These exercises use curiosity, play, and sensory awareness to bring your brain out of survival mode:
                            </p>
                            <ul className="space-y-2 text-[#314E52]/80 mb-4">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>The ABC Method:</strong> Accept what's happening, breathe deeply, count what you see.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Counting games:</strong> Count leaves, windows, red cars, or license plate numbers.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Color play:</strong> Mentally turn trees blue or count shades of green.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Word games:</strong> Spell things backward, make up rhymes about everyday objects.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Absurdity:</strong> Create silly stories, scavenger hunts, or "traffic trivia".
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                                <strong>Sensory imagination:</strong> Mentally build a pancake with 20 toppings or imagine sand in an ice cream cone.
                              </li>
                            </ul>
                            <p className="text-[#314E52]/90 text-base leading-relaxed">
                              These aren't just tricks – they're neurological pattern interrupts. They help shift your mind out of fear and into here.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#B19777]/10 to-[#F9E8BC]/10 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">When You Stabilize, Everything Changes.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          The moment you stop fighting the wave – and start riding it – something opens:
                        </p>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          Breath returns. Thought returns. A sense of agency returns. And for the first time, your body becomes an ally. This is where healing begins – not with insight, but with safety. When your system feels regulated, you're ready to move to Level II: to explore, to understand, to transform. But it all begins here.
                        </p>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">What You'll Gain:</h4>
                        <ul className="space-y-2 text-[#314E52]/80">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            A personalized toolkit to calm your body and brain
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            Confidence in your ability to handle anxiety in the moment
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            An inner foundation that prepares you for deeper healing
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#B19777] mt-2 flex-shrink-0"></span>
                            The felt sense: I am safe. I can do this.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#B19777]/20 shadow-lg">
                        <p className="text-[#314E52]/90 text-base leading-relaxed italic mb-3">
                          "Level I made me realize I'm not powerless. I used to be afraid of the panic. Now I have tools. And I use them. That changes everything."
                        </p>
                        <p className="text-[#314E52]/70 text-sm">
                          — Participant, ASH Cohort
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="understand" className="mt-0 min-h-[700px]">
                  <div className="bg-[#0A7373]/5 rounded-xl shadow-lg overflow-hidden p-8 border-2 border-[#0A7373]/20">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#28767A] to-[#0A7373] rounded-xl flex items-center justify-center shadow-lg">
                        <MagicSymbol type="circle" size={24} position="relative" className="text-white" animated={false} />
                      </div>
                      <h3 className="text-2xl text-[#314E52]">Level II – Understand</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#0A7373]/10 to-[#28767A]/10 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg mb-6">
                      <h4 className="text-xl text-[#314E52] font-medium text-center mb-0">See the Patterns. Reclaim the Story.</h4>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          When the storm settles, something else appears: Silence. And in that silence, a question:
                        </p>
                        <p className="text-[#314E52]/90 text-base leading-relaxed italic text-center">
                          Why?
                        </p>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          Level II is about understanding – the phase of insight, reflection, and meaning. Not to explain the pain away. But to see it clearly. And to walk with it – instead of running from it. You survived. Now you begin to see.
                        </p>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">What Understanding Really Means.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          You've likely heard the phrase: "Name it to tame it." When pain lives in the shadows, it controls us. When we bring it into the light, we begin to heal it. Level II is for people who are ready to look under the surface. You've built some stability. You can breathe again. You can think clearly. Now, it's time to understand:
                        </p>
                        <ul className="space-y-2 text-[#314E52]/80">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Where did this anxiety come from?
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            What are the deeper patterns behind it?
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            And how do we transform those patterns into something useful?
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#0A7373]/10 to-[#28767A]/10 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">Where It All Began.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          No family is perfect. But some wounds go deeper and last longer. Anxiety often begins where safety was missing. In this part, you'll explore:
                        </p>
                        <ul className="space-y-2 text-[#314E52]/80 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Early childhood experiences that shaped your self-worth and stress responses.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Family patterns that repeat across generations (abandonment, enmeshment, silence).
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Unprocessed trauma that was passed down like inheritance.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            The nervous system of your family system – how safety or fear was communicated.
                          </li>
                        </ul>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          This isn't about blame. It's about clarity. Because when you see where your reactions come from, you gain the power to choose a different response.
                        </p>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">Thoughts Are Not Truth.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          Your mind is a storyteller. It protects. It scans. It warns. But it also distorts. In Level II, you'll learn to observe your thoughts without believing all of them. We'll explore:
                        </p>
                        <ul className="space-y-2 text-[#314E52]/80 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            The "monkey mind" – and how to train it.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            How to separate thought from reality.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Cognitive distortions that create anxiety.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Practices to focus attention on truth, not fear.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            How to extract wisdom from your thoughts – and let the rest go.
                          </li>
                        </ul>
                        <p className="text-[#314E52]/90 text-base leading-relaxed">
                          Mental freedom begins with one skill: Observation. Not everything you think deserves your belief.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#0A7373]/10 to-[#28767A]/10 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">Purpose in the Pain.</h4>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          We don't believe in toxic positivity. Yes, what happened to you may have been unfair. It may have broken parts of you. But you're still here. And you have the power to decide what it all means. We guide you through the process of finding purpose in your pain:
                        </p>
                        <ul className="space-y-2 text-[#314E52]/80 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            What did anxiety teach you about empathy, depth, or sensitivity?
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            What inner strength was born from your survival?
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            What has your struggle revealed about what matters most to you?
                          </li>
                        </ul>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-4">
                          This isn't about sugarcoating trauma. It's about reclaiming authorship. You are not defined by what happened to you. You are defined by what you do next. Level II is where healing takes shape. You begin to connect the dots. You stop blaming yourself. You step out of the old story. In Level II, you'll gain:
                        </p>
                        <div className="bg-white/80 p-4 rounded-lg mt-4">
                          <ul className="space-y-2 text-[#314E52]/80">
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                              A deeper understanding of the roots of your anxiety.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                              Insight into your family dynamics and generational wounds.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                              Tools to recognize, question, and redirect unhelpful thoughts.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                              A more compassionate and spacious relationship with your past.
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                              A sense of purpose and meaning in your healing journey.
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h3 className="text-xl text-[#314E52] mb-6 font-medium">The Tools We Use</h3>
                        <p className="text-[#314E52]/90 text-base leading-relaxed mb-6">
                          To support your insights and growth, we guide you through simple but powerful reflection and cognitive tools:
                        </p>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Roots & Origins</h4>
                            <ul className="space-y-2 text-[#314E52]/80">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>The Family Map:</strong> Trace emotional patterns across generations.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Inner Child Journaling:</strong> Reconnect with the parts of you that never felt seen.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Reparenting Practices:</strong> Give yourself the safety and care you may not have received.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Genogram Exploration:</strong> Visualize inherited beliefs, traumas, and roles.
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Attention & Thoughts</h4>
                            <ul className="space-y-2 text-[#314E52]/80">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Thought Labeling:</strong> "This is just a thought – not a truth.".
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Mind as a Radio Exercise:</strong> Learn to tune in… and then tune out.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Daily Thought Dumping:</strong> Clear mental clutter before bed.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Monkey Mind Dialogue:</strong> Playfully externalize and challenge anxious thoughts.
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#314E52] font-medium mb-3">Purpose of Trauma</h4>
                            <ul className="space-y-2 text-[#314E52]/80">
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>"What did it give me?" Prompt:</strong> Journal what depth, empathy, or creativity came from struggle.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Identity Expansion:</strong> Explore who you became because of what happened.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Symbol Work:</strong> Choose an image or metaphor that captures your transformation.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                                <strong>Meaning-Making Storytelling:</strong> Rewrite your past as a story of survival and growth.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#0A7373]/10 to-[#28767A]/10 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <h4 className="text-lg text-[#314E52] mb-3 font-medium">What You'll Gain:</h4>
                        <ul className="space-y-2 text-[#314E52]/80">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Clarity about where your anxiety began – and why it stayed.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Awareness of the deeper patterns shaping your thoughts and behaviors.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            Tools to interrupt old cycles and create new ones.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            A kinder, wiser relationship with your own story.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#0A7373] rounded-full mt-2 flex-shrink-0"></span>
                            The first real sense that healing is not just possible – it's already happening.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/80 p-6 rounded-lg border-2 border-[#0A7373]/20 shadow-lg">
                        <p className="text-[#314E52]/90 text-base leading-relaxed italic mb-3">
                          "I used to think something was wrong with me. But when I saw where my patterns came from – everything softened. I wasn't broken. I was trained to survive. And now I can choose differently."
                        </p>
                        <p className="text-[#314E52]/70 text-sm">
                          — Participant, ASH Level II
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="transcend" className="mt-0 min-h-[700px]">
                  <div className="bg-gradient-to-br from-[#F8FAFA] to-[#F0F4F4] rounded-xl shadow-lg overflow-hidden p-8 border-2 border-[#314E52]/15">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#071834] to-[#314E52] rounded-xl flex items-center justify-center shadow-lg">
                        <MagicSymbol type="triangle" size={24} position="relative" className="text-white" animated={false} />
                      </div>
                      <h3 className="text-2xl text-[#2B4A54]">Level III – Transcend</h3>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#314E52]/8 to-[#2B4A54]/8 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg mb-6">
                      <h4 className="text-xl text-[#2B4A54] font-medium text-center mb-0">It All Comes Down To This.</h4>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-[#2B4A54]/90 text-base leading-relaxed">
                        You've stabilized your nervous system. You've explored the roots of your anxiety, understood your patterns, and made meaning from your story. Now something beautiful becomes possible: You don't have to keep healing forever. You can begin to live freely, create with purpose, and step into who you were meant to be. This is Level III – the final arc in the ASH journey. Here, we release, we retrieve, and we rise.
                      </p>
                      
                      <div className="bg-white/90 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h4 className="text-lg text-[#2B4A54] mb-3 font-medium">What Transcendence Really Means.</h4>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4">
                          To transcend is not to escape. It's to move through your pain and emerge with clarity and depth on the other side. In Level III, you no longer define yourself by your trauma. You remember that you are not just a survivor or a struggler. You are creative, intuitive, and capable of joy. You start to live from your center – not your fear. You feel life moving through you, not against you. This is where healing becomes expansion.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#314E52]/8 to-[#2B4A54]/8 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h4 className="text-lg text-[#2B4A54] mb-3 font-medium">Release – Letting Go With Grace.</h4>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4">
                          Many of us carry identities shaped by pain:
                        </p>
                        <div className="bg-white/90 p-4 rounded-lg mb-4">
                          <ul className="space-y-2 text-[#2B4A54]/80">
                            <li className="flex items-start gap-2">
                              <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                              "I am the anxious one."
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                              "I am the caretaker."
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                              "I am the strong one who never breaks."
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                              "I am broken."
                            </li>
                          </ul>
                        </div>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4">
                          Level III asks you to release these worn roles and stories that no longer serve. You will learn, how to grieve your past without clinging to it, how to identify inner roles you've outgrown, practices to consciously let go of patterns tied to survival and somatic rituals for closure, forgiveness, and freedom. This is not forgetting. It is unhooking. You will ask: Who am I, if not this story?
                        </p>
                      </div>
                      
                      <div className="bg-white/90 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h4 className="text-lg text-[#2B4A54] mb-3 font-medium">Destiny Retrieval – Reclaim Your Inner Gold.</h4>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4">
                          Survival often means leaving parts of yourself behind – dreams, talents, joy, confidence.
                        </p>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4 font-medium">
                          But they are not lost. They are waiting for your return. Here, you reconnect with your deeper calling – the thread that never broke, even in darkness. You will explore the gifts in your sensitivity, what it means to live from soul rather than strategy and meet the future self already waiting. You were never broken. Just buried. Now you begin to shine.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#314E52]/8 to-[#2B4A54]/8 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h4 className="text-lg text-[#2B4A54] mb-3 font-medium">Flow – Live Connected, Creative, and Clear.</h4>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed mb-4">
                          Flow is not perfection. It is presence. It is life where fear no longer runs the show. Where anxiety may remain, but no longer has the final word. In Level III, you learn to live in alignment:
                        </p>
                        <ul className="space-y-2 text-[#2B4A54]/80 mb-4">
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            With your values.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            With your nervous system.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            With your boundaries.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            With your creativity.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            With your inner truth.
                          </li>
                        </ul>
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed">
                          This is where your healing stops being the focus – and life itself becomes the focus again. You're no longer in reaction. You're in creation.
                        </p>
                      </div>
                      
                      <div className="bg-white/90 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h3 className="text-xl text-[#2B4A54] mb-6 font-medium">The Tools We Use</h3>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg text-[#2B4A54] font-medium mb-3">Release</h4>
                            <ul className="space-y-2 text-[#2B4A54]/80">
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Rituals to shed old identities and beliefs.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Compassionate letters to your past self.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Gentle somatic work to release emotional residue.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Ceremonies to honor and let go.
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#2B4A54] font-medium mb-3">Destiny Retrieval</h4>
                            <ul className="space-y-2 text-[#2B4A54]/80">
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Journaling to remember moments of aliveness.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Creative expression to give voice to lost parts.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Visualization of your emerging future self.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Reflection prompts to reconnect with paused passions.
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg text-[#2B4A54] font-medium mb-3">Flow</h4>
                            <ul className="space-y-2 text-[#2B4A54]/80">
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Designing routines that honor nervous system ease.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Tracking moments of genuine joy and "yes".
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Movement practices in nature to sync with natural rhythms.
                              </li>
                              <li className="flex items-start gap-2">
                                <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                                Short creative and mindful practices to cultivate presence.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[#314E52]/8 to-[#2B4A54]/8 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <h4 className="text-lg text-[#2B4A54] mb-3 font-medium">What You Gain:</h4>
                        <ul className="space-y-2 text-[#2B4A54]/80">
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            The ability to release old identities and patterns with compassion.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            A deep reconnection with your essence, calling, and natural energy.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            A lifestyle of nervous system flow – not fight-or-flight.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            Permission to live from inspiration, not fear.
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="mt-2 flex-shrink-0 border-l-[3px] border-l-[#314E52] border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent"></span>
                            A renewed sense of joy, creativity, and personal power.
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/90 p-6 rounded-lg border-2 border-[#314E52]/20 shadow-lg">
                        <p className="text-[#2B4A54]/90 text-base leading-relaxed italic mb-3">
                          "For the first time, I feel like I'm living – not just managing. I didn't even realize how small my life had become while I was healing. Now I feel flow again. Play. Curiosity. That's what Level III gave me."
                        </p>
                        <p className="text-[#2B4A54]/70 text-sm">
                          — Participant, ASH Level III
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </AnimatedContainer>
        {/* All Content Sections with Consistent Width */}
        <div className="max-w-7xl mx-auto w-full">
          {/* Call to Action Section */}
          <AnimatedContainer animation="appear" delay={500} className="text-center max-w-3xl mx-auto mt-16">
            <h2 className="text-3xl mb-4 text-[#314E52]">Ready to Begin Your Journey?</h2>
            <p className="text-[#314E52]/80 mb-8 max-w-2xl mx-auto">
Discover our comprehensive services designed to support you through each level of your healing journey.            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
            onClick={onNavigateToAbout}
            className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium"
          >
            <span>Explore OurJourneys</span>
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