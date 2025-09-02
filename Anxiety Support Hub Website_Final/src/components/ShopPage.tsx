
import { useEffect, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MagicSymbol } from "./MagicSymbol";

interface ShopPageProps {
  onNavigateToHome: () => void;
  selectedProductId: string | null;
  onSelectProduct: (productId: string) => void;
}

interface ProductDetails {
  id: string;
  title: string;
  description: string;
  price: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  duration?: string;
  suitable?: string;
  imageSrc: string;
  icon: string;
  category: string;
}

// Sample product data expanded with more details
const productData: ProductDetails[] = [
  {
    id: "breathing-reset-guide",
    title: "Breathing Reset Guide",
    description: "A comprehensive guide for mastering anxiety-reducing breathing techniques.",
    price: "$19",
    fullDescription: "Master the art of anxiety-reducing breathing with our comprehensive guide. This digital resource combines ancient wisdom with modern science to help you develop a powerful toolkit for immediate anxiety relief through conscious breath control.",
    features: ["5 breathing patterns for different anxiety triggers", "Video demonstrations with expert guidance", "Audio sessions for on-the-go practice", "Printable quick-reference cards", "Tracking journal templates"],
    benefits: ["Stop panic attacks before they escalate", "Reduce physical symptoms of anxiety", "Improve focus and mental clarity", "Better sleep quality", "Enhanced stress resilience"],
    duration: "Self-paced",
    suitable: "Beginners experiencing acute anxiety",
    imageSrc: "/breathing-reset.jpg",
    icon: "breath",
    category: "immediate"
  },
  {
    id: "emergency-calm-mini-course",
    title: "Emergency Calm Mini-Course",
    description: "Quick, effective techniques to restore calm during anxiety spikes.",
    price: "$47",
    fullDescription: "Our Emergency Calm Mini-Course is designed for immediate intervention during anxiety spikes. This streamlined 3-day program provides simple yet powerful techniques you can implement in under 15 minutes to quickly return to a state of calm and control.",
    features: ["3-day structured program", "Morning and evening practice routines", "Panic interruption methods", "Quick-response audio guides", "Emergency intervention worksheets"],
    benefits: ["Rapidly reduce anxiety intensity", "Regain mental clarity during stressful situations", "Break the anxiety-panic cycle", "Build confidence in managing anxiety", "Practical tools for high-pressure moments"],
    duration: "15 minutes daily for 3 days",
    suitable: "High-pressure professionals",
    imageSrc: "/emergency-calm.jpg",
    icon: "course",
    category: "immediate"
  },
  {
    id: "anxiety-first-aid-kit",
    title: "Anxiety First Aid Kit",
    description: "Digital toolkit with immediate relief resources for anxiety emergencies.",
    price: "$29",
    fullDescription: "The Anxiety First Aid Kit is your digital emergency companion for anxiety relief. This comprehensive toolkit includes a variety of resources designed to provide immediate support during anxiety emergencies, no matter where you are or what triggered your symptoms.",
    features: ["Guided visualizations for quick calming", "Somatic release exercises for physical tension", "Emergency affirmations and mantras", "Sensory grounding techniques", "Emotional regulation scripts"],
    benefits: ["Immediate anxiety symptom relief", "Portable anxiety support always at hand", "Personalized options for different anxiety presentations", "Discretely use in social and work situations", "Build confidence through preparation"],
    duration: "On-demand access",
    suitable: "Anyone needing quick relief",
    imageSrc: "/anxiety-kit.jpg",
    icon: "toolkit",
    category: "immediate"
  },
  {
    id: "daily-calm-workshop",
    title: "Daily Calm Workshop",
    description: "Learn practical strategies to maintain emotional balance throughout your day.",
    price: "$97",
    fullDescription: "The Daily Calm Workshop transforms how you navigate daily stressors by establishing powerful rituals that maintain emotional equilibrium. This two-week program creates a foundation for lasting calm through structured morning, midday, and evening practices.",
    features: ["Morning routines to set a peaceful tone", "Midday reset practices for stressful moments", "Evening wind-down rituals for better sleep", "Environmental optimization guidance", "Digital detox protocols"],
    benefits: ["Establish a baseline of calm throughout your day", "Prevent anxiety build-up before it starts", "Improve focus and productivity", "Better work-life balance", "Enhanced emotional resilience"],
    duration: "2-week program",
    suitable: "Busy parents and professionals",
    imageSrc: "/daily-calm.jpg",
    icon: "workshop",
    category: "ongoing"
  },
  {
    id: "mind-body-reconnection-program",
    title: "Mind-Body Reconnection Program",
    description: "A 4-week course to restore the vital connection between mind and body.",
    price: "$149",
    fullDescription: "The Mind-Body Reconnection Program helps you restore the vital connection between mind and body that is often disrupted by chronic anxiety. Through guided practices and weekly live sessions, you'll learn to recognize and respond to your body's signals before anxiety escalates.",
    features: ["Weekly live sessions", "Gentle movement practices", "Cognitive reframing exercises", "Somatic tracking tools", "Personalized integration plan"],
    benefits: ["Recognize early warning signs of anxiety", "Develop a healthier relationship with your body", "Increase present moment awareness", "Reduce physical manifestations of anxiety", "Cultivate a sense of safety in your body"],
    duration: "4 weeks",
    suitable: "Those with chronic anxiety",
    imageSrc: "/mind-body.jpg",
    icon: "program",
    category: "ongoing"
  },
  {
    id: "anxiety-alchemy-masterclass",
    title: "Anxiety Alchemy Masterclass",
    description: "Transform your relationship with anxiety in this comprehensive 8-week program.",
    price: "$397",
    fullDescription: "Our signature Anxiety Alchemy Masterclass is a transformative 8-week journey to fundamentally change your relationship with anxiety. This comprehensive program combines psychological insight, somatic awareness, and spiritual perspectives to help you not just manage anxiety, but transform it into a catalyst for growth.",
    features: ["Weekly deep-dive modules on anxiety transformation", "Live Q&A sessions with anxiety specialists", "Lifetime access to all course materials", "Private community forum", "Personalized transformation roadmap"],
    benefits: ["Develop a new relationship with anxiety", "Uncover and heal root causes of anxiety patterns", "Transform anxiety triggers into growth opportunities", "Build lasting emotional resilience", "Create a personalized anxiety management system"],
    duration: "8 weeks",
    suitable: "Committed to transformation",
    imageSrc: "/anxiety-alchemy.jpg",
    icon: "masterclass",
    category: "resilience"
  },
  {
    id: "resilient-mind-intensive",
    title: "Resilient Mind Intensive",
    description: "Deep dive into neuroplasticity and lasting anxiety transformation.",
    price: "$249",
    fullDescription: "The Resilient Mind Intensive offers a deep dive into the neuroscience of anxiety and how to leverage neuroplasticity for lasting transformation. This weekend intensive program provides a concentrated immersion into brain-based approaches to anxiety management.",
    features: ["Brain science education", "Neural rewiring practices", "Habit formation support", "Mindfulness-based stress reduction", "Personalized neural pathway mapping"],
    benefits: ["Understand the neuroscience behind anxiety", "Learn to reshape your brain's response to triggers", "Develop daily practices for neural resilience", "Create sustainable change through neuroplasticity", "Build a science-based anxiety management approach"],
    duration: "Weekend intensive",
    suitable: "Science-oriented learners",
    imageSrc: "/resilient-mind.jpg",
    icon: "intensive",
    category: "resilience"
  }
];

export function ShopPage({ onNavigateToHome, selectedProductId, onSelectProduct }: ShopPageProps) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductDetails[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<ProductDetails[]>(productData);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (selectedProductId) {
      // Find the specific product
      const foundProduct = productData.find(p => p.id === selectedProductId) || null;
      setProduct(foundProduct);
      
      // Find related products in the same category
      if (foundProduct) {
        const related = productData
          .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
          .slice(0, 3);
        setRelatedProducts(related);
      }
    } else {
      // If no product ID, we're on the main shop page
      setProduct(null);
      setRelatedProducts([]);
      
      // Apply any active filter
      filterProducts(activeFilter);
    }
  }, [selectedProductId, activeFilter]);
  
  // Function to filter products based on category
  const filterProducts = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredProducts(productData);
    } else {
      // Map the button text to the category value in our data
      const categoryMap: { [key: string]: string } = {
        "all": "all",
        "immediate": "immediate",
        "ongoing": "ongoing",
        "resilience": "resilience"
      };
      
      const categoryValue = categoryMap[category.toLowerCase()];
      setFilteredProducts(productData.filter(p => p.category === categoryValue));
    }
  };
  
  // Helper function to render icon
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
  
  // If we're viewing a specific product
  if (product) {
    return (
      <section id="shop" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <MagicSymbol type="circle" size={120} position="absolute" top="5%" right="5%" className="opacity-20" />
          <MagicSymbol type="triangle" size={90} position="absolute" bottom="10%" left="8%" rotate={15} className="opacity-20" />
        </div>
        
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => onSelectProduct('')}
              className="text-[#0A7373] hover:text-[#314E52] flex items-center gap-2"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Shop
            </button>
          </div>
          
          {/* Product details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ImageWithFallback 
                  src={product.imageSrc}
                  alt={product.title}
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 opacity-70">
                <MagicSymbol type="pentagram" size={50} color="#B19777" />
              </div>
            </div>
            
            {/* Product info */}
            <div>
              <div className="w-16 h-16 rounded-full bg-[#E9E9E9] flex items-center justify-center mb-4 text-[#0A7373]">
                {renderIcon(product.icon)}
              </div>
              
              <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-4 text-[#314E52]">
                {product.title}
              </h1>
              
              <div className="mb-6">
                <span className="text-2xl text-[#0A7373] font-medium">{product.price}</span>
              </div>
              
              <p className="text-gray-700 mb-6">
                {product.fullDescription}
              </p>
              
              {product.duration && (
                <p className="mb-2 text-gray-700">
                  <span className="font-medium">Duration:</span> {product.duration}
                </p>
              )}
              
              {product.suitable && (
                <p className="mb-6 text-gray-700">
                  <span className="font-medium">Ideal for:</span> {product.suitable}
                </p>
              )}
              
              <button className="px-8 py-3 bg-[#0A7373] hover:bg-[#314E52] text-white rounded-lg transition duration-300 mb-6 w-full sm:w-auto">
                Add to Cart
              </button>
              
              <div className="mt-2">
                <button className="px-8 py-3 bg-[#B19777] hover:bg-[#6F4E37] text-white rounded-lg transition duration-300 w-full sm:w-auto">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          
          {/* Product details tabs */}
          <div className="mb-16">
            <div className="border-b border-gray-200 mb-8">
              <div className="inline-block py-2 px-4 border-b-2 border-[#0A7373] text-[#0A7373] font-medium">
                Details
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">What's Included</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#0A7373] mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">Benefits</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#B19777] mr-2">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-2xl mb-8 text-[#314E52] text-center">
                You May Also Like
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => onSelectProduct(relatedProduct.id)}
                    className="block group cursor-pointer"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 transition-all duration-300 h-full flex flex-col group-hover:shadow-lg">
                      <div className="w-12 h-12 rounded-full bg-[#E9E9E9] flex items-center justify-center mb-4 text-[#0A7373]">
                        {renderIcon(relatedProduct.icon)}
                      </div>
                      
                      <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">
                        {relatedProduct.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 flex-grow">
                        {relatedProduct.description}
                      </p>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <span className="font-medium text-[#0A7373]">{relatedProduct.price}</span>
                        <span className="text-[#B19777] group-hover:text-[#6F4E37] transition-colors flex items-center gap-1">
                          View Details
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
  
  // Shop main page (product catalog)
  return (
    <section id="shop" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <MagicSymbol type="pentagram" size={70} position="absolute" top="5%" left="5%" className="opacity-20" />
        <MagicSymbol type="square" size={50} position="absolute" bottom="10%" right="8%" rotate={15} className="opacity-20" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl mb-4 text-[#314E52]">
            Anxiety Support Resources
          </h1>
          <p className="text-gray-700">
            Browse our collection of anxiety support tools and programs designed to meet you 
            exactly where you are on your journey—whether you need immediate 
            relief or are ready for deep transformation.
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            onClick={() => filterProducts("all")}
            className={`px-5 py-2 rounded-lg ${
              activeFilter === "all" 
                ? "bg-[#0A7373] text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-300`}
          >
            All Resources
          </button>
          <button 
            onClick={() => filterProducts("immediate")}
            className={`px-5 py-2 rounded-lg ${
              activeFilter === "immediate" 
                ? "bg-[#0A7373] text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-300`}
          >
            Immediate Relief
          </button>
          <button 
            onClick={() => filterProducts("ongoing")}
            className={`px-5 py-2 rounded-lg ${
              activeFilter === "ongoing" 
                ? "bg-[#0A7373] text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-300`}
          >
            Ongoing Management
          </button>
          <button 
            onClick={() => filterProducts("resilience")}
            className={`px-5 py-2 rounded-lg ${
              activeFilter === "resilience" 
                ? "bg-[#0A7373] text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            } transition duration-300`}
          >
            Long-Term Resilience
          </button>
        </div>
        
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className="block group cursor-pointer"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300 transition-all duration-300 h-[420px] flex flex-col group-hover:shadow-xl relative">
                  <div className="w-12 h-12 rounded-full bg-[#E9E9E9] flex items-center justify-center mb-4 text-[#0A7373]">
                    {renderIcon(product.icon)}
                  </div>
                  
                  <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">
                    {product.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  {product.features && (
                    <ul className="mb-3">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600 mb-1">
                          <span className="text-[#0A7373] mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {product.duration && (
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-medium">Duration:</span> {product.duration}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-3 border-t border-gray-200 flex justify-between items-center">
                    <span className="font-medium text-[#0A7373]">{product.price}</span>
                    <span className="text-[#B19777] group-hover:text-[#6F4E37] transition-colors flex items-center gap-1">
                      View Details
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">
                No products found in this category
              </h3>
              <p className="text-gray-600">
                Please try another category or check back later for new resources.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
