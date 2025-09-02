import { useEffect, useState, useRef, memo } from "react";
import { MagicSymbol } from "./MagicSymbol";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedContainer } from "./ui/animated-container";
import { AnimatedGrid } from "./ui/animated-grid";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  image: string;
  category: "immediate" | "ongoing" | "resilience";
  subcategory: "breath" | "movement" | "mind";
  resourceType: "book" | "mini-course" | "action-guide";
  tags?: string[];
  duration?: string;
  level?: "beginner" | "intermediate" | "advanced";
  levelValue?: number;
}

interface ResourcesPageProps {
  onNavigateToHome: () => void;
  selectedProductId?: string | null;
  onSelectProduct: (productId: string) => void;
}

// Enhanced product data with more varied and relevant images
const products: Product[] = [
  {
    id: "emergency-calm-guide",
    title: "Emergency Calm Action Guide",
    description: "A step-by-step guide with 12 proven techniques to stop panic attacks and reduce anxiety in under 5 minutes.",
    price: "$27",
    priceValue: 27,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "immediate",
    subcategory: "breath",
    resourceType: "action-guide",
    tags: ["panic attacks", "immediate relief", "emergency techniques"],
    duration: "Quick reference",
    level: "beginner",
    levelValue: 1
  },
  {
    id: "breathing-mastery-course",
    title: "Breathing Mastery Mini-Course",
    description: "Master 7 different breathing techniques used by Navy SEALs, meditation masters, and anxiety specialists.",
    price: "$47",
    priceValue: 47,
    image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "immediate",
    subcategory: "breath",
    resourceType: "mini-course",
    tags: ["breathing", "techniques", "stress relief"],
    duration: "2 hours",
    level: "beginner",
    levelValue: 1
  },
  {
    id: "anxiety-no-more-book",
    title: "Anxiety No More: The Complete Guide",
    description: "The definitive 200-page guide to understanding and overcoming anxiety from a recovered sufferer.",
    price: "$19",
    priceValue: 19,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "ongoing",
    subcategory: "mind",
    resourceType: "book",
    tags: ["comprehensive", "recovery stories", "long-term healing"],
    duration: "200 pages",
    level: "beginner",
    levelValue: 1
  },
  {
    id: "movement-therapy-course",
    title: "Somatic Movement for Anxiety",
    description: "Learn how gentle movement and body awareness can release trapped anxiety and trauma from your nervous system.",
    price: "$67",
    priceValue: 67,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "ongoing",
    subcategory: "movement",
    resourceType: "mini-course",
    tags: ["somatic", "body work", "trauma release"],
    duration: "4 hours",
    level: "beginner",
    levelValue: 1
  },
  {
    id: "meditation-transcendence",
    title: "Transcendental Anxiety Meditation",
    description: "Advanced meditation practices that transform anxiety into spiritual awakening and personal power.",
    price: "$97",
    priceValue: 97,
    image: "/mystical-portal-path.jpg",
    category: "resilience",
    subcategory: "mind",
    resourceType: "mini-course",
    tags: ["meditation", "spiritual", "transformation"],
    duration: "6 hours",
    level: "advanced",
    levelValue: 3
  },
  {
    id: "body-wisdom-book",
    title: "Your Body's Anxiety Wisdom",
    description: "Discover how your body communicates anxiety and learn to work with these signals rather than against them.",
    price: "$24",
    priceValue: 24,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "ongoing",
    subcategory: "movement",
    resourceType: "book",
    tags: ["body awareness", "signals", "wisdom"],
    duration: "180 pages",
    level: "intermediate",
    levelValue: 2
  },
  {
    id: "daily-practices-guide",
    title: "Daily Anxiety Freedom Practices",
    description: "21 simple daily practices that rewire your brain for calm and confidence over 30 days.",
    price: "$37",
    priceValue: 37,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "immediate",
    subcategory: "mind",
    resourceType: "action-guide",
    tags: ["daily practices", "habits", "rewiring"],
    duration: "30 days",
    level: "beginner",
    levelValue: 1
  },
  {
    id: "advanced-breathwork",
    title: "Advanced Breathwork Mastery",
    description: "Transform your relationship with breath through advanced pranayama, Wim Hof method, and conscious breathing.",
    price: "$127",
    priceValue: 127,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    category: "resilience",
    subcategory: "breath",
    resourceType: "mini-course",
    tags: ["advanced", "pranayama", "consciousness"],
    duration: "8 hours",
    level: "advanced",
    levelValue: 3
  },
  {
    id: "sacred-movement-guide",
    title: "Sacred Movement for Healing",
    description: "Ancient movement practices that connect you to your inner wisdom and release generational anxiety patterns.",
    price: "$47",
    priceValue: 47,
    image: "/freedom-illustration.jpg",
    category: "resilience",
    subcategory: "movement",
    resourceType: "action-guide",
    tags: ["sacred", "ancient practices", "generational healing"],
    duration: "Ongoing practice",
    level: "intermediate",
    levelValue: 2
  }
];

// Resource Type Icon Component
const ResourceTypeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "book":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
          <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "mini-course":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
          <polygon points="23 7 16 12 23 17 23 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case "action-guide":
      return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-current">
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 4H20C20.6 4 21 4.4 21 5V19C21 19.6 20.6 20 20 20H4C3.4 20 3 19.6 3 19V5C3 4.4 3.4 4 4 4H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

// Regular product card component matching BlogPage design
const ProductCard = ({ product, onSelectProduct }: { product: Product; onSelectProduct: (productId: string) => void }) => {
  // Get journey stage colors
  const getJourneyStageColor = () => {
    switch (product.category) {
      case 'immediate': 
        return 'text-[#6F4E37]';
      case 'ongoing': 
        return 'text-[#0A7373]';
      case 'resilience': 
        return 'text-[#B19777]';
      default: 
        return 'text-[#314E52]';
    }
  };

  // Get journey stage name
  const getJourneyStage = () => {
    switch (product.category) {
      case 'immediate': return 'Survive';
      case 'ongoing': return 'Understand';
      case 'resilience': return 'Transcend';
      default: return product.category;
    }
  };

  return (
    <div 
      className="block group cursor-pointer w-full h-full"
      onClick={() => onSelectProduct(product.id)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 transition-all duration-500 h-[460px] flex flex-col group-hover:shadow-xl relative animate-glow">
        {/* Fixed height image container */}
        <div className="h-48 bg-[#0C363B]/5 relative overflow-hidden">
          <ImageWithFallback
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4 flex items-center text-gray-600">
            <ResourceTypeIcon type={product.resourceType} />
          </div>
        </div>
        
        {/* Content container with fixed padding and flex column layout */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category and duration */}
          <div className="flex items-center mb-2">
            <span className={`text-sm font-medium ${getJourneyStageColor()}`}>{getJourneyStage()}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{product.duration}</span>
          </div>
          
          {/* Fixed height title area with overflow handling */}
          <div className="h-[60px] mb-2">
            <h3 className="text-xl text-[#314E52] font-medium line-clamp-2">{product.title}</h3>
          </div>
          
          {/* Fixed height description area with truncation */}
          <div className="h-[80px] mb-4">
            <p className="text-gray-700 text-sm line-clamp-4">{product.description}</p>
          </div>
          
          {/* Price and action at the bottom */}
          <div className="mt-auto pt-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-[#0A7373]">
                {product.price}
              </span>
              {product.level && (
                <>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500 capitalize">{product.level}</span>
                </>
              )}
            </div>
            <div className="text-[#86725B] text-sm flex items-center">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transform transition-transform group-hover:translate-x-1">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient effect on hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373] via-[#B19777] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </div>
    </div>
  );
};

export function ResourcesPage({ onNavigateToHome, selectedProductId, onSelectProduct }: ResourcesPageProps) {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageRef = useRef<HTMLDivElement>(null);

  // Create stars effect for the magical background
  const [stars, setStars] = useState<Array<{id: number, size: number, top: string, left: string, delay: number}>>([]);
  
  useEffect(() => {
    const generatedStars = [];
    const starCount = 20;
    
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

  // Filter and search functionality
  const filteredProducts = products
    .filter(product => {
      if (filter === 'all') return true;
      if (filter === 'survive') return product.category === 'immediate';
      if (filter === 'understand') return product.category === 'ongoing';
      if (filter === 'transcend') return product.category === 'resilience';
      return product.category === filter || product.resourceType === filter || product.subcategory === filter;
    })
    .filter(product => {
      if (searchQuery.trim() === '') return true;
      const query = searchQuery.toLowerCase();
      return (
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        product.subcategory.toLowerCase().includes(query) ||
        product.resourceType.toLowerCase().includes(query)
      );
    });

  const categories = ['All', 'Survive', 'Understand', 'Transcend', 'Books', 'Courses', 'Guides'];

  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-16 min-h-screen relative overflow-hidden" style={{ backgroundColor: '#FEE6AF' }} ref={pageRef}>
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.12]" style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(49,78,82,0.6) 1px, transparent 0),
          radial-gradient(circle at 15px 25px, rgba(177,151,119,0.4) 0.5px, transparent 0),
          radial-gradient(circle at 35px 8px, rgba(10,115,115,0.3) 0.5px, transparent 0),
          radial-gradient(circle at 22px 18px, rgba(111,78,55,0.2) 0.5px, transparent 0),
          linear-gradient(45deg, transparent 49%, rgba(245,239,217,0.08) 50%, transparent 51%)
        `,
        backgroundSize: '25px 25px, 35px 35px, 45px 45px, 55px 55px, 15px 15px'
      }}></div>
      
      {/* Magical Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Magical symbols */}
        <div className="absolute top-[15%] left-[8%] opacity-20">
          <MagicSymbol type="pentagram" size={60} position="absolute" rotate={15} className="animate-float text-[#0A7373]" />
        </div>
        <div className="absolute top-[40%] right-[5%] opacity-20">
          <MagicSymbol type="triangle" size={70} position="absolute" rotate={-20} className="animate-float text-[#B19777]" />
        </div>
        <div className="absolute bottom-[20%] left-[12%] opacity-20">
          <MagicSymbol type="circle" size={80} position="absolute" className="animate-float text-[#6F4E37]" />
        </div>
        
        {/* Floating stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute text-[#B19777] animate-twinkle"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}px`
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Page Header */}
        <AnimatedContainer animation="appear" className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl text-[#314E52] mb-6 relative inline-block">
            Your Tools
          </h1>
          <p className="text-gray-700 mt-4" style={{ fontSize: '15px' }}>
            Discover the tools and wisdom that will guide you through your transformation. 
            Each resource has been carefully crafted to meet you exactly where you are 
            on your healing journey.
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
                  placeholder="Search tools..."
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
                onClick={() => setFilter('all')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  filter === 'all' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {filter === 'all' && (
                  <span className="absolute inset-0 bg-[url('/mystical-portal-path.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">All Tools</span>
              </button>
              <button 
                onClick={() => setFilter('survive')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  filter === 'survive' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {filter === 'survive' && (
                  <span className="absolute inset-0 bg-[url('/mystical-portal-path.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Survive</span>
              </button>
              <button 
                onClick={() => setFilter('understand')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300 ${
                  filter === 'understand' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {filter === 'understand' && (
                  <span className="absolute inset-0 bg-[url('/path-illustration.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Understand</span>
              </button>
              <button 
                onClick={() => setFilter('transcend')}
                className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base ${
                  filter === 'transcend' 
                    ? 'bg-[#0A7373] text-white' 
                    : 'text-[#314E52] hover:bg-white/100'
                }`}
              >
                {/* Magical element for active button */}
                {filter === 'transcend' && (
                  <span className="absolute inset-0 bg-[url('/freedom-illustration.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                )}
                <span className="relative z-10">Transcend</span>
              </button>
              </div>
            </div>
          </div>
        </AnimatedContainer>

        {/* Products Grid */}
        <AnimatedGrid delay={300} className="mb-16">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onSelectProduct={onSelectProduct}
                />
              ))}
            </div>
          ) : (
            <AnimatedContainer animation="appear" className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <MagicSymbol type="circle" size={80} position="absolute" className="text-[#B19777] opacity-30" />
              </div>
              <h3 className="text-2xl text-[#314E52] mb-4">No Tools Found</h3>
              <p className="text-[#314E52]/70 mb-6 max-w-md mx-auto">
                Try adjusting your search or filter terms to find the perfect resource for your journey.
              </p>
              <button 
                onClick={() => {
                  setFilter('all');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-colors"
              >
                Clear Filters
              </button>
            </AnimatedContainer>
          )}
        </AnimatedGrid>
      </div>
    </div>
  );
}