import { useRef, useEffect, useState } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { TransformativeIllustration } from './TransformativeIllustration';
import { BreathingExercise } from './BreathingExercise';
import { WisdomCardsCarousel } from './WisdomCardsCarousel';
import { BlogCarousel } from './BlogCarousel';

interface ServicesSectionProps {
  onProductSelect?: (productId: string) => void;
  showCommunitySection?: boolean; // Feature flag to control visibility of community section
}

export function ServicesSection({ onProductSelect, showCommunitySection = false }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('immediate');
  const [showBreathingExercise, setShowBreathingExercise] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-[fadeIn_0.8s_ease-out_forwards]');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  const services = {
    immediate: [
      {
        id: "breathing-reset-guide",
        title: "Breathing Reset Guide",
        description: "A comprehensive guide for mastering anxiety-reducing breathing techniques.",
        price: "$19",
        icon: "breath",
        features: ["5 breathing patterns", "Video demonstrations", "Audio guidance"],
        duration: "Self-paced",
        suitable: "Beginners experiencing acute anxiety",
        action: () => setShowBreathingExercise(true)
      },
      {
        id: "emergency-calm-mini-course",
        title: "Emergency Calm Mini-Course",
        description: "Quick, effective techniques to restore calm during anxiety spikes.",
        price: "$47",
        icon: "course",
        features: ["3-day program", "Morning and evening practices", "Panic interruption methods"],
        duration: "15 minutes daily for 3 days",
        suitable: "High-pressure professionals"
      },
      {
        id: "anxiety-first-aid-kit",
        title: "Anxiety First Aid Kit",
        description: "Digital toolkit with immediate relief resources for anxiety emergencies.",
        price: "$29",
        icon: "toolkit",
        features: ["Guided visualizations", "Somatic release exercises", "Emergency affirmations"],
        duration: "On-demand access",
        suitable: "Anyone needing quick relief"
      },
      {
        id: "body-scan-meditation-bundle",
        title: "Body Scan Meditation Bundle",
        description: "Progressive body awareness meditations to interrupt anxiety patterns.",
        price: "$24",
        icon: "body",
        features: ["5 guided audio sessions", "Tension release focus", "Sleep-friendly versions"],
        duration: "10-20 minutes per session",
        suitable: "Physical anxiety manifestations"
      },
      {
        id: "grounding-techniques-masterclass",
        title: "Grounding Techniques Masterclass",
        description: "Learn to quickly return to your body when anxiety pulls you into worry.",
        price: "$35",
        icon: "ground",
        features: ["12 practical techniques", "Workplace-friendly options", "Sensory focus tools"],
        duration: "90-minute workshop",
        suitable: "Overthinking and rumination tendencies"
      }
    ],
    ongoing: [
      {
        id: "daily-calm-workshop",
        title: "Daily Calm Workshop",
        description: "Learn practical strategies to maintain emotional balance throughout your day.",
        price: "$97",
        icon: "workshop",
        features: ["Morning routines", "Midday reset practices", "Evening wind-down rituals"],
        duration: "2-week program",
        suitable: "Busy parents and professionals"
      },
      {
        id: "mind-body-reconnection-program",
        title: "Mind-Body Reconnection Program",
        description: "A 4-week course to restore the vital connection between mind and body.",
        price: "$149",
        icon: "program",
        features: ["Weekly live sessions", "Gentle movement practices", "Cognitive reframing exercises"],
        duration: "4 weeks",
        suitable: "Those with chronic anxiety"
      },
      {
        id: "anxiety-journaling-system",
        title: "Anxiety Journaling System",
        description: "Structured journaling approach to track and transform anxiety patterns.",
        price: "$39",
        icon: "journal",
        features: ["Digital and printable templates", "Guided prompts", "Pattern recognition tools"],
        duration: "Ongoing practice",
        suitable: "Self-reflective learners"
      },
      {
        id: "emotional-regulation-framework",
        title: "Emotional Regulation Framework",
        description: "Systematic approach to understanding and managing difficult emotions.",
        price: "$89",
        icon: "emotions",
        features: ["Emotion mapping tools", "Trigger identification", "Response strategy library"],
        duration: "6-week course",
        suitable: "Those with emotional intensity"
      },
      {
        id: "conscious-communication-course",
        title: "Conscious Communication Course",
        description: "Transform anxiety-driven communication patterns in relationships and work.",
        price: "$129",
        icon: "communication",
        features: ["Conflict navigation", "Boundary setting", "Authentic expression"],
        duration: "8 modules",
        suitable: "Relationship and workplace anxiety"
      }
    ],
    resilience: [
      {
        id: "anxiety-alchemy-masterclass",
        title: "Anxiety Alchemy Masterclass",
        description: "Transform your relationship with anxiety in this comprehensive 8-week program.",
        price: "$397",
        icon: "masterclass",
        features: ["Weekly deep-dive modules", "Live Q&A sessions", "Lifetime access to materials"],
        duration: "8 weeks",
        suitable: "Committed to transformation"
      },
      {
        id: "resilient-mind-intensive",
        title: "Resilient Mind Intensive",
        description: "Deep dive into neuroplasticity and lasting anxiety transformation.",
        price: "$249",
        icon: "intensive",
        features: ["Brain science education", "Neural rewiring practices", "Habit formation support"],
        duration: "Weekend intensive",
        suitable: "Science-oriented learners"
      },
      {
        id: "future-self-integration",
        title: "Future Self Integration",
        description: "Advanced coaching to align your present healing with your highest potential.",
        price: "$199",
        icon: "integration",
        features: ["Visualization practices", "Timeline work", "Identity transformation"],
        duration: "4 sessions",
        suitable: "Personal development enthusiasts"
      },
      {
        id: "meaning-making-framework",
        title: "Meaning-Making Framework",
        description: "Turn anxiety experiences into wisdom and purpose through narrative transformation.",
        price: "$179",
        icon: "meaning",
        features: ["Story reclamation", "Purpose discovery", "Wisdom extraction methods"],
        duration: "6-module program",
        suitable: "Spiritually-oriented seekers"
      },
      {
        id: "shadow-integration-journey",
        title: "Shadow Integration Journey",
        description: "Explore and embrace the hidden aspects of anxiety for complete healing.",
        price: "$299",
        icon: "shadow",
        features: ["Deep unconscious work", "Parts integration", "Wholeness practices"],
        duration: "12-week journey",
        suitable: "Depth psychology enthusiasts"
      }
    ]
  };
  
  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'breath':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
          </svg>
        );
      case 'course':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'body':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 20V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'journal':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 3H21V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 7L21 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 13H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 17H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
    }
  };
  
  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[rgba(254,230,175,1)] hidden"
      data-blog-section="true"
    >
      <div className="absolute inset-0 pointer-events-none">
        <MagicSymbol type="pentagram" size={70} position="absolute" top="5%" left="5%" className="opacity-30" />
        <MagicSymbol type="square" size={50} position="absolute" bottom="10%" right="8%" rotate={15} className="opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">

          <h2 className="font-['Cormorant_Garamond'] text-[42px] mb-4 text-[#314E52]">
            Transformative Resources
          </h2>
          <p className="text-gray-700">
            Discover our curated collection of articles and insights designed to meet you 
            exactly where you are on your anxiety journey—whether you need immediate 
            relief or are ready for deep transformation. Swipe or use the arrows to explore more blog posts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mt-8">
            <button 
              onClick={() => setActiveTab('immediate')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'immediate' 
                  ? 'bg-[#0A7373] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Survive
            </button>
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'ongoing' 
                  ? 'bg-[#0A7373] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Understand
            </button>
            <button 
              onClick={() => setActiveTab('resilience')}
              className={`px-5 py-2 rounded-lg transition-all duration-300 ${
                activeTab === 'resilience' 
                  ? 'bg-[#0A7373] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Transcend
            </button>
          </div>
        </div>
        
        {/* Blog Carousel */}
        <BlogCarousel 
          posts={services[activeTab as keyof typeof services]} 
          renderIcon={renderIcon} 
          onProductSelect={onProductSelect}
        />
        
        {/* Wisdom Cards Section */}
        <div className="mt-20">
          <div className="text-center max-w-3xl mx-auto mb-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl mb-4 text-[#314E52]">
              Wisdom Cards
            </h3>
            <p className="text-gray-700">
              Draw from our collection of alchemical wisdom. Each card contains a powerful 
              insight to support you in moments of anxiety or uncertainty. Swipe or use the 
              arrows to explore more cards.
            </p>
          </div>
          
          <WisdomCardsCarousel />
        </div>
        
        {/* Breathing Exercise Modal */}
        {showBreathingExercise && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
            <div className="max-w-md w-full mx-4">
              <div className="relative">
                <button 
                  onClick={() => setShowBreathingExercise(false)}
                  className="absolute -top-10 right-0 text-white hover:text-[#B19777] transition-colors"
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
        
        {/* Community section - hidden for now but preserved for future use */}
        {showCommunitySection && (
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-2 flex justify-center">
              <TransformativeIllustration 
                src="/profile-silhouette.jpg"
                alt="Profile silhouette with abstract flowing elements"
                overlayColor="rgba(177, 151, 119, 0.25)"
                className="rounded-2xl shadow-xl"
                width={400}
                height={500}
              />
            </div>
            
            <div className="lg:col-span-3 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl mb-4 text-[#314E52]">
                Coming Soon: The Anxiety Support Hub Community
              </h3>
              
              <p className="text-gray-700 mb-6">
                Join our waitlist for our upcoming membership community where you'll gain access 
                to monthly masterclasses, live Q&As with anxiety experts, a supportive community 
                of fellow travelers, and exclusive resources to support your journey.
              </p>
              
              <div className="bg-[#F7F7F7] p-6 rounded-lg">
                <h4 className="font-['Cormorant_Garamond'] text-xl mb-3 text-[#314E52]">Be the first to know</h4>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0A7373]"
                  />
                  <button className="px-6 py-3 rounded-lg bg-[#B19777] text-white hover:bg-[#a0865d] transition duration-300">
                    Join Waitlist
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}