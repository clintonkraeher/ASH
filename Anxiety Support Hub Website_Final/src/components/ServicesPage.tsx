import { useState, useEffect, useRef } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedContainer } from './ui/animated-container';
import { AnimatedGrid } from './ui/animated-grid';
import { TransformativeJourneyPyramid } from './TransformativeJourneyPyramid';

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  price: string;
  icon: string;
  features: string[];
  duration: string;
  suitable: string;
  action?: () => void;
}

interface ServicesSectionProps {
  onNavigateToHome: () => void;
  onScheduleConsultation?: () => void;
  onSelectService?: (serviceId: string) => void;
}

export function ServicesPage({ onNavigateToHome, onScheduleConsultation, onSelectService }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const services = {
    immediate: [
      {
        id: "1-1-anxiety-coaching",
        title: "1:1 Anxiety Coaching",
        description: "Personalized, one-on-one sessions with our anxiety specialists tailored to your unique challenges and goals.",
        price: "$150 / session",
        icon: "coaching",
        features: ["45-minute focused sessions", "Personalized action plan", "Email support between sessions"],
        duration: "Weekly or bi-weekly sessions",
        suitable: "Anyone seeking personalized support"
      },
      {
        id: "breathing-reset-guide",
        title: "Breathing Reset Program",
        description: "A comprehensive guide for mastering anxiety-reducing breathing techniques with guided practice sessions.",
        price: "$97",
        icon: "breath",
        features: ["5 breathing patterns", "Video demonstrations", "Audio guidance", "2 live group practice sessions"],
        duration: "4-week program",
        suitable: "All levels, especially during acute anxiety"
      },
      {
        id: "emergency-calm-mini-course",
        title: "Emergency Calm Mini-Course",
        description: "Quick, effective techniques to restore calm during anxiety spikes and panic attacks.",
        price: "$47",
        icon: "course",
        features: ["3-day program", "Morning and evening practices", "Panic interruption methods"],
        duration: "15 minutes daily for 3 days",
        suitable: "High-pressure professionals"
      },
      {
        id: "anxiety-first-aid-kit",
        title: "Anxiety First Aid Workshop",
        description: "Learn immediate relief tools in this live workshop, with take-home resources for anxiety emergencies.",
        price: "$85",
        icon: "toolkit",
        features: ["Live 3-hour workshop", "Guided visualizations", "Somatic release exercises", "Digital resource kit"],
        duration: "One 3-hour session + resources",
        suitable: "Anyone needing quick-access relief tools"
      }
    ],
    ongoing: [
      {
        id: "group-anxiety-support",
        title: "Group Anxiety Support",
        description: "Connect with others on the same journey in our facilitated small group sessions focused on specific anxiety challenges.",
        price: "$45 / session",
        icon: "group",
        features: ["6-8 person groups", "Theme-based sessions", "Shared learning", "Community connection"],
        duration: "90-minute weekly sessions",
        suitable: "Those who benefit from community support"
      },
      {
        id: "mind-body-reconnection-program",
        title: "Mind-Body Reconnection Program",
        description: "A comprehensive 8-week course to restore the vital connection between mind and body for anxiety management.",
        price: "$375",
        icon: "program",
        features: ["Weekly live sessions", "Gentle movement practices", "Cognitive reframing exercises", "Daily practice guidance"],
        duration: "8 weeks",
        suitable: "Those with chronic anxiety"
      },
      {
        id: "anxiety-journaling-system",
        title: "Anxiety Journaling Workshop",
        description: "Learn a structured journaling approach to track and transform anxiety patterns in this interactive workshop.",
        price: "$65",
        icon: "journal",
        features: ["Interactive 2-hour workshop", "Digital and printable templates", "Guided prompts", "Pattern recognition tools"],
        duration: "2-hour workshop + materials",
        suitable: "Self-reflective learners"
      },
      {
        id: "emotional-regulation-framework",
        title: "Emotional Regulation Course",
        description: "Master a systematic approach to understanding and managing difficult emotions that fuel anxiety.",
        price: "$275",
        icon: "emotions",
        features: ["6 weekly modules", "Emotion mapping tools", "Trigger identification", "Response strategy library"],
        duration: "6-week course",
        suitable: "Those with emotional intensity"
      }
    ],
    resilience: [
      {
        id: "anxiety-transformation-intensive",
        title: "Anxiety Transformation Intensive",
        description: "Our premium 3-month program for deep, lasting change in your relationship with anxiety.",
        price: "$1,495",
        icon: "masterclass",
        features: ["6 private coaching sessions", "Bi-weekly group calls", "Custom practice plan", "Comprehensive resource library"],
        duration: "3 months",
        suitable: "Committed to profound transformation"
      },
      {
        id: "resilient-mind-retreat",
        title: "Resilient Mind Retreat",
        description: "Immerse yourself in a weekend of focused anxiety work in a beautiful, supportive environment.",
        price: "$695",
        icon: "retreat",
        features: ["3-day in-person experience", "Lodging and meals included", "Multi-modality approach", "Follow-up integration call"],
        duration: "Weekend intensive (Fri-Sun)",
        suitable: "Those ready for immersive experience"
      },
      {
        id: "future-self-integration",
        title: "Future Self Integration Coaching",
        description: "Advanced coaching to align your present healing with your highest potential and vision.",
        price: "$450",
        icon: "integration",
        features: ["4 deep-dive sessions", "Visualization practices", "Timeline work", "Identity transformation"],
        duration: "4 sessions over 2 months",
        suitable: "Personal development enthusiasts"
      },
      {
        id: "spiritual-anxiety-exploration",
        title: "Spiritual Anxiety Exploration",
        description: "Explore the deeper meaning and spiritual dimensions of your anxiety with expert guidance.",
        price: "$325",
        icon: "spiritual",
        features: ["4 guided sessions", "Meaning-making frameworks", "Purpose discovery", "Wisdom extraction methods"],
        duration: "4-session program",
        suitable: "Spiritually-oriented seekers"
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
      case 'coaching':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'group':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'toolkit':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 7H16V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V7H5C4.46957 7 3.96086 7.21071 3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6V7H10V6ZM19 18H5V9H19V18Z" fill="currentColor"/>
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
      case 'retreat':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'spiritual':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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
  
  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'immediate':
        return 'Survive<br />Services';
      case 'ongoing':
        return 'Understand<br />Programs';
      case 'resilience':
        return 'Transcend<br />Development';
      default:
        return '';
    }
  };
  
  const getCategoryDescription = (category: string) => {
    switch(category) {
      case 'all':
        return 'Explore our comprehensive range of anxiety support services, from immediate relief tools to transformative long-term programs designed to meet you wherever you are on your healing journey.';
      case 'immediate':
        return 'For those experiencing acute anxiety, these services provide rapid physical grounding and survival tools to help you navigate through challenging moments and restore bodily calm.';
      case 'ongoing':
        return 'Develop emotional intelligence and conscious awareness practices to recognize triggers, regulate responses, and create lasting stability in your day-to-day experience.';
      case 'resilience':
        return 'Transform your relationship with anxiety at its roots through spiritual exploration, meaning-making, and integration work that connects you to deeper wisdom and purpose.';
      default:
        return '';
    }
  };


  
  return (
    <div className="relative pt-32 pb-16 min-h-screen bg-[#F5EFD9]/40 bg-[rgba(254,230,175,1)]" ref={sectionRef}>
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
      
      {/* Services Content */}
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <AnimatedContainer animation="appear" className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#314E52] mb-6">
            Our Journeys
          </h1>
          <p className="text-lg text-[#314E52]/80 mb-10 max-w-3xl mx-auto">
            From immediate anxiety relief to long-term transformation, we offer personalized services designed to meet you wherever you are on your healing journey.
          </p>
          
        </AnimatedContainer>

        {/* Search Field and Service Category Navigation Row - Full Width */}
        <AnimatedContainer animation="appear" delay={300} className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search Field - Left Side */}
            <div className="w-full max-w-md">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search journeys..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A7373] bg-white/80"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#314E52]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Service Category Navigation - Right Side */}
            <div className="flex justify-center sm:justify-end">
              <div className="inline-flex flex-col md:flex-row border-2 border-gray-300 rounded-lg overflow-hidden bg-white/80 shadow-lg">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  activeTab === 'all' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {activeTab === 'all' && (
                  <span className="absolute inset-0 bg-[url('/mystical-portal-path.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">All Journeys</span>
              </button>
              <button 
                onClick={() => setActiveTab('immediate')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  activeTab === 'immediate' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {activeTab === 'immediate' && (
                  <span className="absolute inset-0 bg-[url('/mystical-portal-path.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Survive</span>
              </button>
              <button 
                onClick={() => setActiveTab('ongoing')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  activeTab === 'ongoing' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {activeTab === 'ongoing' && (
                  <span className="absolute inset-0 bg-[url('/path-illustration.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Understand</span>
              </button>
              <button 
                onClick={() => setActiveTab('resilience')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base ${
                  activeTab === 'resilience' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {activeTab === 'resilience' && (
                  <span className="absolute inset-0 bg-[url('/freedom-illustration.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Transcend</span>
              </button>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Get filtered services */}
        {(() => {
          const filteredServices = (activeTab === 'all' 
            ? [...services.immediate, ...services.ongoing, ...services.resilience]
            : services[activeTab as keyof typeof services]
          ).filter(service => {
            if (searchQuery.trim() === '') return true;
            const query = searchQuery.toLowerCase();
            return (
              service.title.toLowerCase().includes(query) ||
              service.description.toLowerCase().includes(query) ||
              service.features.some(feature => feature.toLowerCase().includes(query)) ||
              service.suitable.toLowerCase().includes(query)
            );
          });

          // Show empty state if no services found
          if (filteredServices.length === 0) {
            return (
              <AnimatedContainer animation="appear" className="text-center py-16 mb-16">
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <MagicSymbol type="circle" size={80} position="absolute" className="text-[#B19777] opacity-30" />
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#314E52] mb-4">No Journeys Found</h3>
                <p className="text-[#314E52]/70 mb-6 max-w-md mx-auto">
                  Try adjusting your search terms or explore different journey stages to find the perfect support for your path.
                </p>
                <button 
                  onClick={() => {
                    setActiveTab('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-colors"
                >
                  View All Journeys
                </button>
              </AnimatedContainer>
            );
          }

          // Show service cards if services found
          return (
            <AnimatedGrid 
              animation="rise"
              baseDelay={300}
              staggerDelay="diagonal"
              cols={2}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
              itemClassName="w-full h-full"
            >
                {filteredServices.map((service) => (
                  <div 
                    key={service.id}
                    className="block group cursor-pointer w-full h-full"
                    onClick={() => onSelectService?.(service.id)}
                  >
                    <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-gray-300 transition-all duration-500 h-full flex flex-col group-hover:shadow-xl relative animate-glow">
                      <div className="flex items-start flex-1">
                        <div className="w-12 h-12 rounded-full bg-[#0A7373]/10 flex items-center justify-center text-[#0A7373] mr-4 flex-shrink-0">
                          {renderIcon(service.icon)}
                        </div>
                        <div className="flex-1 flex flex-col h-full">
                          <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl mb-2 text-[#314E52]">
                            {service.title}
                          </h3>
                          <p className="text-[#314E52]/70 mb-6">
                            {service.description}
                          </p>
                          
                          <div className="border-t border-gray-100 pt-4 mb-6 flex-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <p className="text-sm text-[#314E52]/60 mb-1">Includes:</p>
                                <ul className="list-disc pl-5 text-[#314E52]/80 text-sm space-y-1">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p className="text-sm text-[#314E52]/60 mb-1">Duration:</p>
                                <p className="text-[#314E52]/80 text-sm mb-3">{service.duration}</p>
                                
                                <p className="text-sm text-[#314E52]/60 mb-1">Best for:</p>
                                <p className="text-[#314E52]/80 text-sm">{service.suitable}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-auto pt-3 border-t border-gray-200 flex items-center justify-between">
                            <span className="text-[#0A7373] font-semibold">{service.price}</span>
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectService?.(service.id);
                              }}
                              className="px-5 py-2 text-[rgba(134,114,91,1)] hover:text-[#6F4E37] transition-colors flex items-center gap-1"
                            >
                              Learn More
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transform transition-transform group-hover:translate-x-1">
                                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom gradient effect on hover */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373] via-[#B19777] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </div>
                  </div>
                ))}
              </AnimatedGrid>
            );
        })()}
        
        {/* Call to Action */}
        <AnimatedContainer animation="appear" delay={500} className="hidden max-w-3xl mx-auto bg-gradient-to-r from-[#314E52] to-[#0A7373] rounded-xl p-8 md:p-10 shadow-lg text-white relative overflow-hidden">
          {/* Magical elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
          
          
          <div className="relative z-10 text-center">
            <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl mb-4">
              Not sure which service is right for you?
            </h3>
            <p className="mb-6 text-white/90">
              Book a complimentary 20-minute consultation with one of our anxiety specialists to discuss your unique needs and find the perfect support option for your journey.
            </p>
            <button 
              onClick={onScheduleConsultation}
              className="px-6 py-3 bg-[rgba(245,239,218,1)] text-[rgba(50,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors"
            >
              Schedule Free Consultation
            </button>
          </div>
        </AnimatedContainer>
        
        
      </div>
    </div>
  );
}