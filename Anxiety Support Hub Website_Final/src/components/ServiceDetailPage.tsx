import { useState, useEffect } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { AnimatedContainer } from './ui/animated-container';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigateBack: () => void;
  onScheduleConsultation: () => void;
  onAddToCart: (service: any) => void;
  onBuyNow: (service: any) => void;
}

export function ServiceDetailPage({ serviceId, onNavigateBack, onScheduleConsultation, onAddToCart, onBuyNow }: ServiceDetailPageProps) {
  const [stars, setStars] = useState<Array<{id: number, size: number, top: string, left: string, delay: number}>>([]);
  
  // Create stars effect for the magical background
  useEffect(() => {
    const generatedStars = [];
    const starCount = 15;
    
    for (let i = 0; i < starCount; i++) {
      generatedStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5
      });
    }
    
    setStars(generatedStars);
  }, []);
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service data with detailed information
  const serviceDetails = {
    "1-1-anxiety-coaching": {
      title: "1:1 Anxiety Coaching",
      subtitle: "Personalized Support for Your Unique Journey",
      price: "$150 / session",
      category: "Survive",
      description: "Experience the power of personalized, one-on-one sessions with our certified anxiety specialists. Each session is tailored to your unique challenges, triggers, and goals, providing you with the individualized attention and support you deserve.",
      longDescription: "Our 1:1 anxiety coaching goes beyond traditional therapy by focusing specifically on anxiety management and transformation. We combine evidence-based techniques with intuitive guidance to help you develop practical skills for managing anxiety in real-time. Whether you're dealing with work stress, social anxiety, panic attacks, or generalized anxiety, our coaches will work with you to create a personalized roadmap to calm and confidence.",
      duration: "Weekly or bi-weekly sessions",
      sessionLength: "45 minutes",
      suitable: "Anyone seeking personalized support",
      features: [
        "45-minute focused sessions with certified anxiety specialist",
        "Personalized action plan tailored to your specific triggers",
        "Email support between sessions for ongoing guidance",
        "Customized breathing and grounding techniques",
        "Progress tracking and session notes",
        "Flexible scheduling to fit your lifestyle"
      ],
      whatToExpect: [
        "Initial assessment to understand your unique anxiety patterns",
        "Collaborative goal-setting for your healing journey", 
        "Learning practical tools for immediate anxiety relief",
        "Exploring root causes and developing long-term strategies",
        "Regular check-ins and plan adjustments as needed"
      ],
      testimonials: [
        {
          text: "My 1:1 coaching sessions have been life-changing. Sarah helped me understand my anxiety triggers and gave me tools I actually use every day. I feel so much more confident now.",
          author: "Emma T.",
          role: "Marketing Manager"
        },
        {
          text: "I was skeptical about coaching, but after just a few sessions, I noticed a huge difference. Having someone who really understands anxiety made all the difference.",
          author: "Michael R.",
          role: "Entrepreneur"
        }
      ],
      whatIncluded: [
        "45-minute video or phone sessions",
        "Personalized homework assignments",
        "Email support between sessions",
        "Session recordings (upon request)",
        "Progress tracking dashboard",
        "Resource library access"
      ],
      perfectFor: [
        "High-achieving professionals experiencing work-related anxiety",
        "People who prefer individual attention over group settings",
        "Those dealing with specific phobias or triggers",
        "Anyone wanting a customized approach to anxiety management",
        "Individuals ready to invest in their mental health journey"
      ]
    },
    "breathing-reset-guide": {
      title: "Breathing Reset Program",
      subtitle: "Master the Foundation of Calm",
      price: "$97",
      category: "Survive", 
      description: "A comprehensive 4-week program designed to teach you powerful breathing techniques that can instantly calm your nervous system and reduce anxiety. Learn five distinct breathing patterns that you can use anywhere, anytime.",
      longDescription: "Breath is your most powerful tool for managing anxiety, yet most people don't know how to use it effectively. Our Breathing Reset Program teaches you scientifically-proven breathing techniques that activate your parasympathetic nervous system, instantly shifting you from anxiety to calm. This isn't just about deep breathing - you'll learn specific patterns, rhythms, and techniques that professional athletes, performers, and anxiety specialists use to maintain peak mental state.",
      duration: "4-week program",
      sessionLength: "15-20 minutes daily practice",
      suitable: "All levels, especially during acute anxiety",
      features: [
        "5 distinct breathing patterns for different situations",
        "HD video demonstrations with clear instructions",
        "Audio-guided practice sessions for each technique",
        "2 live group practice sessions with Q&A",
        "Downloadable practice cards for quick reference",
        "Progress tracking worksheet"
      ],
      whatToExpected: [
        "Week 1: Foundation breathing and basic techniques",
        "Week 2: Intermediate patterns for stress relief",
        "Week 3: Advanced techniques for panic and overwhelm",
        "Week 4: Integration and creating your personal practice",
        "Ongoing access to all materials for review"
      ],
      testimonials: [
        {
          text: "I've tried so many things for my anxiety, but learning proper breathing techniques through this program has been the most effective. I use the 4-7-8 technique every night before bed now.",
          author: "Lisa K.",
          role: "Teacher"
        },
        {
          text: "As someone who travels a lot for work, having these breathing techniques I can do anywhere has been invaluable. The airplane breathing technique alone was worth the entire program.",
          author: "David P.",
          role: "Sales Director"
        }
      ],
      whatIncluded: [
        "4 comprehensive training modules",
        "Video demonstrations for each technique",
        "Audio-guided practice sessions",
        "Printable quick-reference cards",
        "2 live group practice sessions",
        "Email sequence with daily tips"
      ],
      perfectFor: [
        "People who want immediate, practical tools",
        "Those experiencing panic attacks or acute anxiety",
        "Busy professionals needing quick relief techniques",
        "Anyone interested in natural anxiety management",
        "People who prefer self-paced learning"
      ]
    },
    "emergency-calm-mini-course": {
      title: "Emergency Calm Mini-Course",
      subtitle: "Rapid Relief When You Need It Most",
      price: "$47",
      category: "Survive",
      description: "A focused 3-day intensive program designed to give you immediate tools for managing anxiety spikes and panic attacks. Perfect for those who need quick, effective relief techniques.",
      longDescription: "When anxiety strikes suddenly, you need tools that work immediately. This intensive mini-course is designed for rapid results, teaching you the most effective emergency techniques used by anxiety specialists worldwide. In just three days, you'll have a complete toolkit for interrupting panic, calming your nervous system, and regaining control when anxiety feels overwhelming.",
      duration: "15 minutes daily for 3 days",
      sessionLength: "15 minutes per day",
      suitable: "High-pressure professionals and anyone needing immediate relief",
      features: [
        "3-day intensive program with daily lessons",
        "Morning centering practices to start your day calm",
        "Evening wind-down techniques for better sleep",
        "Panic interruption methods for emergency situations",
        "Mobile-friendly format for on-the-go access",
        "Bonus: 5-minute workplace calm technique"
      ],
      whatToExpect: [
        "Day 1: Emergency stop techniques for panic",
        "Day 2: Grounding methods for overwhelming moments", 
        "Day 3: Integration and creating your emergency toolkit",
        "Lifetime access to all materials",
        "Follow-up check-in email sequence"
      ],
      testimonials: [
        {
          text: "This mini-course literally saved me during a particularly stressful project deadline. The panic interruption technique works so fast - I was amazed.",
          author: "Jennifer M.",
          role: "Project Manager"
        },
        {
          text: "Short, sweet, and incredibly effective. I loved that I could complete it quickly but still get real, practical tools I use regularly.",
          author: "Alex C.",
          role: "Startup Founder"
        }
      ],
      whatIncluded: [
        "3 comprehensive daily lessons",
        "Morning and evening practice videos",
        "Panic interruption technique guide",
        "Workplace calm quick-reference",
        "Mobile app with emergency techniques",
        "7-day follow-up email support"
      ],
      perfectFor: [
        "Busy people who want fast results",
        "Those experiencing frequent panic attacks",
        "People in high-stress jobs or situations",
        "Anyone wanting a quick introduction to anxiety management",
        "Those who prefer bite-sized learning"
      ]
    }
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails];

  if (!service) {
    return (
      <div className="py-24 min-h-[60vh] bg-[#FEE6AF] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl text-[#314E52] mb-4">Service Not Found</h1>
          <button 
            onClick={onNavigateBack}
            className="px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const renderIcon = (category: string) => {
    switch (category) {
      case 'Survive':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
          </svg>
        );
      case 'Understand':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'Transcend':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.27002 6.96002L12 12.01L20.73 6.96002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#FEE6AF] py-8 min-h-[calc(100vh-200px)]">
      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {stars.map(star => (
          <div 
            key={star.id}
            className="absolute rounded-full bg-[#B19777] animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: star.top,
              left: star.left,
              opacity: 0.6,
              animationDelay: `${star.delay}s`
            }}
          ></div>
        ))}
        
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

      <div className="container mx-auto px-4 max-w-4xl relative pt-24">
        {/* Back Navigation */}
        <AnimatedContainer animation="appear" className="mb-6">
          <button 
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-[#0A7373] hover:text-[#314E52] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Our Journeys
          </button>
        </AnimatedContainer>

        {/* Service Header */}
        <AnimatedContainer animation="appear" delay={100} className="mb-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#314E52] to-[#0A7373] p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {renderIcon(service.category)}
                </div>
                <div className="flex-1">
                  <span className="text-[rgba(254,230,175,1)] text-sm uppercase tracking-wide">{service.category} Service</span>
                  <h1 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl">{service.title}</h1>
                </div>
              </div>
              <p className="text-lg text-white/90 mb-4">{service.subtitle}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-white/80">
                  <p>Sessions: {service.duration}</p>
                  <p>Duration: {service.sessionLength}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-white/70 text-right">
                    <p className="text-[rgba(254,230,175,1)]">Professional service</p>
                    <p>Flexible scheduling</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                  </div>
                </div>
              </div>
              {/* Action Buttons - Desktop */}
              <div className="hidden md:flex gap-3 mb-4 justify-end">
                <button 
                  onClick={() => onAddToCart({ id: serviceId, title: service.title, price: service.price, type: 'service' })}
                  className="px-6 py-3 rounded-lg border-2 border-[#FFFCF1] text-[rgba(255,252,241,1)] hover:bg-[#F8EFD2]/10 hover:text-white transition duration-300 whitespace-nowrap"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => onBuyNow({ id: serviceId, title: service.title, price: service.price, type: 'service' })}
                  className="px-6 py-3 bg-[rgba(255,252,241,1)] text-[rgba(49,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors whitespace-nowrap"
                >
                  Buy Now
                </button>
              </div>
              {/* Action Buttons - Mobile */}
              <div className="flex md:hidden gap-3">
                <button 
                  onClick={onScheduleConsultation}
                  className="flex-1 px-6 py-3 bg-[rgba(255,252,241,1)] text-[rgba(49,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors"
                >
                  Schedule
                </button>
                <button className="flex-1 px-6 py-3 bg-[#86725B] text-white rounded-lg hover:bg-[#86725B]/90 transition-colors">
                  Contact
                </button>
              </div>
              <p className="text-xs text-white/70 text-center mt-3 md:hidden">
                Professional consultation • Flexible scheduling
              </p>
            </div>
          </div>
        </AnimatedContainer>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Overview */}
          <AnimatedContainer animation="rise" delay={200} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
            <h2 className="font-['Cormorant_Garamond'] text-2xl mb-4 text-[#314E52]">Overview</h2>
            <p className="text-[#314E52]/80 mb-4">{service.description}</p>
            <p className="text-[#314E52]/80">{service.longDescription}</p>
          </AnimatedContainer>

          {/* What to Expect & What's Included Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedContainer animation="rise" delay={300} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">What to Expect</h3>
              <ul className="space-y-2">
                {service.whatToExpect?.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#0A7373] mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#314E52]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

            <AnimatedContainer animation="rise" delay={350} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">What's Included</h3>
              <ul className="space-y-2">
                {service.whatIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0A7373] mt-0.5 flex-shrink-0">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-[#314E52]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>
          </div>

          {/* Perfect For & Call to Action Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedContainer animation="rise" delay={400} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">Perfect For</h3>
              <ul className="space-y-2">
                {service.perfectFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#B19777] mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#314E52]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

            <AnimatedContainer animation="rise" delay={450} className="bg-gradient-to-br from-[#0A7373] to-[#314E52] rounded-xl p-6 text-white">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4">Not sure if this journey is right for you?</h3>
              <p className="text-white/90 text-sm mb-6">
                Book a complimentary 20-minute consultation to discuss your unique needs and find the perfect support option for you.
              </p>
              <button 
                onClick={onScheduleConsultation}
                className="w-full px-6 py-3 bg-[rgba(255,252,241,1)] text-[rgba(49,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors mb-3"
              >
                Schedule Consultation
              </button>
              <p className="text-xs text-white/70 text-center">
                Free 20-minute consultation available
              </p>
            </AnimatedContainer>
          </div>

          {/* Testimonials */}
          <AnimatedContainer animation="rise" delay={500} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
            <h3 className="font-['Cormorant_Garamond'] text-xl mb-6 text-[#314E52]">What Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.testimonials.map((testimonial, index) => (
                <div key={index} className="border-l-4 border-[#B19777] pl-4">
                  <p className="text-[#314E52]/80 italic mb-3 text-sm">"{testimonial.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#0A7373]/20 rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#314E52] text-sm">{testimonial.author}</p>
                      <p className="text-xs text-[#314E52]/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContainer>

          {/* Contact Support */}

        </div>
      </div>
    </div>
  );
}