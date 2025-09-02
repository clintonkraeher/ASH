import { useEffect, useState, useRef } from "react";
import { MagicSymbol } from './MagicSymbol';
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AnimatedContainer } from "./ui/animated-container";

interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  icon: string;
  features?: string[];
  benefits?: string[];
  duration?: string;
  idealFor?: string;
  category: "immediate" | "ongoing" | "resilience";
  image?: string;
  whatToExpect?: string[];
  whatIncluded: string[];
  perfectFor: string[];
  testimonials: Array<{
    text: string;
    author: string;
    role: string;
  }>;
}

interface ProductDetailPageProps {
  productId: string;
  onNavigateBack: () => void;
  onSelectRelatedProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onBuyNow: (product: Product) => void;
}

export function ProductDetailPage({
  productId,
  onNavigateBack,
  onSelectRelatedProduct,
  onAddToCart,
  onBuyNow
}: ProductDetailPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
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
  
  // Product data matching ResourcesPage with expanded details 
  const products: Product[] = [
    {
      id: "emergency-calm-guide",
      title: "Emergency Calm Action Guide",
      description: "A step-by-step guide with 12 proven techniques to stop panic attacks and reduce anxiety in under 5 minutes.",
      longDescription: "When panic strikes, you need tools that work immediately. This comprehensive action guide provides you with 12 scientifically-proven techniques that can stop anxiety and panic attacks in their tracks. Each technique is designed to be implemented in under 5 minutes, making this your go-to resource for emergency situations. From breathing protocols to grounding exercises, you'll have a complete arsenal of tools to regain control when anxiety feels overwhelming.",
      price: "$27",
      icon: "guide",
      duration: "Quick reference guide",
      idealFor: "Beginners needing immediate relief",
      category: "immediate",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Learn 12 different panic-stopping techniques",
        "Understand the science behind each method",
        "Practice with step-by-step instructions",
        "Build your personal emergency toolkit",
        "Develop confidence in handling panic"
      ],
      whatIncluded: [
        "Digital action guide (PDF format)",
        "12 illustrated technique cards",
        "Quick reference emergency protocol",
        "Printable wallet-sized reminder cards",
        "Audio instructions for each technique",
        "Lifetime access to all materials"
      ],
      perfectFor: [
        "People experiencing panic attacks",
        "Those needing immediate relief techniques",
        "Anyone wanting emergency preparedness",
        "Individuals in high-stress situations",
        "People who prefer visual learning guides"
      ],
      testimonials: [
        {
          text: "This guide literally saved me during a panic attack at work. The 5-4-3-2-1 technique brought me back to calm in minutes.",
          author: "Emma R.",
          role: "Software Developer"
        },
        {
          text: "I keep this on my phone and it's been invaluable. Having these tools ready gives me so much confidence.",
          author: "Michael T.",
          role: "Teacher"
        }
      ]
    },
    {
      id: "breathing-mastery-course",
      title: "Breathing Mastery Mini-Course",
      description: "Master 7 different breathing techniques used by Navy SEALs, meditation masters, and anxiety specialists.",
      longDescription: "Breath is your most powerful tool for managing anxiety, yet most people don't know how to use it effectively. This comprehensive mini-course teaches you 7 distinct breathing patterns used by elite performers, military personnel, and meditation masters worldwide. Each technique is designed for specific situations - from instant calm to deep meditation states. You'll learn the science behind each pattern and how to apply them in real-world scenarios.",
      price: "$47",
      icon: "breath",
      duration: "2-hour comprehensive course",
      idealFor: "Beginners to breathing techniques",
      category: "immediate",
      image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Master 7 powerful breathing techniques",
        "Learn when and how to use each pattern",
        "Practice with guided video demonstrations",
        "Understand the physiology of breath and anxiety",
        "Build a sustainable daily practice"
      ],
      whatIncluded: [
        "7 comprehensive video lessons",
        "Guided practice sessions for each technique",
        "Printable technique reference cards",
        "Progress tracking worksheets",
        "Bonus: Advanced breathwork techniques",
        "30 days of email support"
      ],
      perfectFor: [
        "People seeking natural anxiety relief",
        "Those interested in breathwork mastery",
        "Anyone wanting to improve focus and calm",
        "Individuals dealing with stress and overwhelm",
        "People who prefer structured learning"
      ],
      testimonials: [
        {
          text: "The box breathing technique from this course has completely changed my anxiety management. I use it before every presentation now.",
          author: "Sarah K.",
          role: "Marketing Manager"
        },
        {
          text: "Finally, breathing techniques that actually work! The Navy SEAL breathing method is incredible for high-stress moments.",
          author: "David M.",
          role: "Paramedic"
        }
      ]
    },
    {
      id: "anxiety-no-more-book",
      title: "Anxiety No More: The Complete Guide",
      description: "The definitive 200-page guide to understanding and overcoming anxiety from a recovered sufferer.",
      longDescription: "Written by someone who has walked through the depths of anxiety and emerged transformed, this comprehensive guide offers hope, understanding, and practical strategies for lasting recovery. Drawing from personal experience, scientific research, and proven therapeutic approaches, this 200-page resource provides a complete roadmap for understanding anxiety and building a life of freedom and confidence.",
      price: "$19",
      icon: "book",
      duration: "200-page comprehensive guide",
      idealFor: "Anyone seeking deep understanding",
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Understand anxiety from a recovered person's perspective",
        "Learn the root causes of anxiety disorders",
        "Discover evidence-based recovery strategies",
        "Read real recovery stories for inspiration",
        "Build your personalized healing plan"
      ],
      whatIncluded: [
        "200-page comprehensive digital book",
        "Personal recovery story and insights",
        "Scientific explanations made accessible",
        "Practical exercises and worksheets",
        "Resource directory for additional support",
        "Lifetime updates and revisions"
      ],
      perfectFor: [
        "People seeking comprehensive understanding",
        "Those wanting a complete recovery roadmap",
        "Anyone looking for hope and inspiration",
        "Individuals who prefer in-depth reading",
        "People wanting to understand anxiety fully"
      ],
      testimonials: [
        {
          text: "This book gave me hope when I thought recovery wasn't possible. The author truly understands what it's like to live with anxiety.",
          author: "Lisa J.",
          role: "Nurse"
        },
        {
          text: "The most comprehensive anxiety resource I've found. It's like having a recovered mentor guiding your journey.",
          author: "Tom W.",
          role: "Engineer"
        }
      ]
    },
    {
      id: "movement-therapy-course",
      title: "Somatic Movement for Anxiety",
      description: "Learn how gentle movement and body awareness can release trapped anxiety and trauma from your nervous system.",
      longDescription: "Anxiety isn't just in your mind - it lives in your body too. This transformative course teaches you how to use gentle, therapeutic movement to release trapped anxiety and trauma from your nervous system. Based on somatic therapy principles, you'll learn how to listen to your body's wisdom and use movement as medicine for anxiety healing.",
      price: "$67",
      icon: "movement",
      duration: "4-hour course with practices",
      idealFor: "Those interested in body-based healing",
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Learn the connection between body and anxiety",
        "Practice gentle somatic movements",
        "Understand your nervous system's responses",
        "Release stored tension and trauma",
        "Build body awareness and confidence"
      ],
      whatIncluded: [
        "4 hours of guided movement sessions",
        "Somatic therapy educational modules",
        "Daily movement practice routines",
        "Body awareness assessment tools",
        "Trauma-informed movement guidelines",
        "6 months of course access"
      ],
      perfectFor: [
        "People interested in body-based healing",
        "Those dealing with trauma and anxiety",
        "Anyone wanting to reconnect with their body",
        "Individuals seeking holistic approaches",
        "People who enjoy gentle movement"
      ],
      testimonials: [
        {
          text: "I never realized how much tension I was holding until I started this course. The gentle movements have been incredibly healing.",
          author: "Maria S.",
          role: "Yoga Instructor"
        },
        {
          text: "This approach to anxiety through movement has been revelatory. I feel more connected to my body and less anxious overall.",
          author: "James L.",
          role: "Therapist"
        }
      ]
    },
    {
      id: "meditation-transcendence",
      title: "Transcendental Anxiety Meditation",
      description: "Advanced meditation practices that transform anxiety into spiritual awakening and personal power.",
      longDescription: "For those ready to transcend anxiety and discover the profound gifts it offers, this advanced course transforms your relationship with fear into one of spiritual awakening and personal empowerment. Through ancient meditation practices adapted for modern anxiety, you'll learn to see anxiety as a gateway to deeper consciousness and authentic power.",
      price: "$97",
      icon: "transcend",
      duration: "6-hour transformational course",
      idealFor: "Advanced practitioners seeking transcendence",
      category: "resilience",
      image: "/mystical-portal-path.jpg",
      whatToExpect: [
        "Transform anxiety into spiritual awakening",
        "Learn advanced meditation techniques",
        "Discover the gifts within your anxiety",
        "Develop unshakeable inner peace",
        "Access your authentic personal power"
      ],
      whatIncluded: [
        "6 hours of advanced meditation training",
        "Ancient practices for modern anxiety",
        "Guided transcendental meditations",
        "Personal power activation exercises",
        "Spiritual framework for anxiety",
        "Lifetime access to all materials"
      ],
      perfectFor: [
        "Advanced meditation practitioners",
        "Those seeking spiritual transformation",
        "People ready for deep inner work",
        "Individuals wanting to transcend limitations",
        "Anyone drawn to mystical approaches"
      ],
      testimonials: [
        {
          text: "This course completely changed my relationship with anxiety. What I once feared has become my greatest teacher and source of power.",
          author: "Sophia R.",
          role: "Meditation Teacher"
        },
        {
          text: "The depth of these practices is extraordinary. I've found peace and power I never knew existed within my anxiety.",
          author: "Marcus D.",
          role: "Life Coach"
        }
      ]
    },
    {
      id: "body-wisdom-book",
      title: "Your Body's Anxiety Wisdom",
      description: "Discover how your body communicates anxiety and learn to work with these signals rather than against them.",
      longDescription: "Your body is constantly communicating with you about anxiety, but most people don't know how to listen. This insightful book teaches you to decode your body's anxiety signals and work with them as valuable information rather than fighting against them. Learn to trust your body's wisdom and use physical sensations as guides for healing.",
      price: "$24",
      icon: "wisdom",
      duration: "180-page insightful guide",
      idealFor: "Those seeking body-mind integration",
      category: "ongoing",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Learn to decode your body's anxiety signals",
        "Understand the wisdom in physical symptoms",
        "Develop body-based healing strategies",
        "Build trust in your body's intelligence",
        "Create harmony between mind and body"
      ],
      whatIncluded: [
        "180-page comprehensive guide",
        "Body signal interpretation charts",
        "Self-assessment tools and exercises",
        "Case studies and real examples",
        "Integration practices and techniques",
        "Bonus: Body wisdom meditation audio"
      ],
      perfectFor: [
        "People interested in body-mind connection",
        "Those wanting to understand physical symptoms",
        "Anyone seeking holistic healing approaches",
        "Individuals experiencing somatic anxiety",
        "People who prefer integrative methods"
      ],
      testimonials: [
        {
          text: "This book helped me understand that my body wasn't betraying me - it was trying to help me heal. Revolutionary perspective.",
          author: "Rachel K.",
          role: "Holistic Therapist"
        },
        {
          text: "Finally, a resource that honors the body's wisdom in anxiety healing. This approach has been transformative for my clients.",
          author: "Dr. Elena M.",
          role: "Integrative Physician"
        }
      ]
    },
    {
      id: "daily-practices-guide",
      title: "Daily Anxiety Freedom Practices",
      description: "21 simple daily practices that rewire your brain for calm and confidence over 30 days.",
      longDescription: "Transform your relationship with anxiety through the power of consistent daily practice. This practical guide offers 21 simple, science-backed practices designed to rewire your brain for calm and confidence. Each practice takes just 5-10 minutes and can be easily integrated into your daily routine for lasting change.",
      price: "$37",
      icon: "practices",
      duration: "30-day transformation program",
      idealFor: "Those wanting consistent daily support",
      category: "immediate",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Implement 21 brain-rewiring practices",
        "Build sustainable daily routines",
        "Track your progress over 30 days",
        "Experience measurable anxiety reduction",
        "Create lasting positive change"
      ],
      whatIncluded: [
        "21 detailed practice instructions",
        "30-day implementation calendar",
        "Progress tracking worksheets",
        "Morning and evening routines",
        "Habit formation guidance",
        "Community access for support"
      ],
      perfectFor: [
        "People wanting structured daily support",
        "Those interested in habit formation",
        "Anyone seeking gradual transformation",
        "Individuals who prefer step-by-step guidance",
        "People ready to commit to daily practice"
      ],
      testimonials: [
        {
          text: "These daily practices have become my anchor. After 30 days, I feel like a completely different person - calm and confident.",
          author: "Ashley N.",
          role: "Project Manager"
        },
        {
          text: "The structure of this program made it so easy to stick with. Small daily actions led to huge transformation.",
          author: "Chris B.",
          role: "Entrepreneur"
        }
      ]
    },
    {
      id: "advanced-breathwork",
      title: "Advanced Breathwork Mastery",
      description: "Transform your relationship with breath through advanced pranayama, Wim Hof method, and conscious breathing.",
      longDescription: "For those ready to master the most powerful breathwork techniques available, this advanced course combines ancient pranayama practices with modern methods like the Wim Hof technique and conscious connected breathing. These practices don't just manage anxiety - they transform your entire relationship with stress, fear, and consciousness itself.",
      price: "$127",
      icon: "advanced-breath",
      duration: "8-hour mastery intensive",
      idealFor: "Advanced practitioners seeking mastery",
      category: "resilience",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      whatToExpect: [
        "Master advanced breathing techniques",
        "Learn pranayama and Wim Hof methods",
        "Experience altered states of consciousness",
        "Build extraordinary stress resilience",
        "Develop breathwork teaching skills"
      ],
      whatIncluded: [
        "8 hours of intensive training",
        "Ancient pranayama techniques",
        "Modern breathwork methods",
        "Safety protocols and guidelines",
        "Advanced practice sequences",
        "Certification of completion"
      ],
      perfectFor: [
        "Advanced breathwork practitioners",
        "Those seeking consciousness expansion",
        "People interested in teaching breathwork",
        "Anyone wanting extreme stress resilience",
        "Individuals drawn to intensive practices"
      ],
      testimonials: [
        {
          text: "This intensive completely transformed my breathwork practice. The advanced techniques are incredibly powerful and transformative.",
          author: "Jordan P.",
          role: "Breathwork Instructor"
        },
        {
          text: "After completing this mastery course, I have tools that work in any situation. My stress resilience is now unshakeable.",
          author: "Maya T.",
          role: "Performance Coach"
        }
      ]
    },
    {
      id: "sacred-movement-guide",
      title: "Sacred Movement for Healing",
      description: "Ancient movement practices that connect you to your inner wisdom and release generational anxiety patterns.",
      longDescription: "Some anxiety patterns run deeper than personal experience - they're carried in our bodies from generations past. This profound guide teaches you sacred movement practices from various wisdom traditions that help release not just personal anxiety, but generational patterns stored in your cellular memory. Connect with your inner wisdom and ancestral healing through movement.",
      price: "$47",
      icon: "sacred",
      duration: "Ongoing transformational practice",
      idealFor: "Those seeking deep ancestral healing",
      category: "resilience",
      image: "/freedom-illustration.jpg",
      whatToExpect: [
        "Learn sacred movement from wisdom traditions",
        "Release generational anxiety patterns",
        "Connect with your ancestral wisdom",
        "Heal at the cellular level",
        "Develop intuitive movement practice"
      ],
      whatIncluded: [
        "Ancient movement practices guide",
        "Video demonstrations of techniques",
        "Generational healing framework",
        "Intuitive movement development",
        "Sacred space creation guidance",
        "Ongoing practice support"
      ],
      perfectFor: [
        "People interested in ancestral healing",
        "Those drawn to sacred practices",
        "Anyone seeking deep transformation",
        "Individuals feeling called to ancient wisdom",
        "People wanting to heal family patterns"
      ],
      testimonials: [
        {
          text: "These sacred practices helped me heal anxiety patterns I didn't even know I was carrying. Profound and deeply healing.",
          author: "Luna C.",
          role: "Energy Healer"
        },
        {
          text: "The connection to ancestral wisdom through movement has been life-changing. I feel like I'm healing not just for me, but for my lineage.",
          author: "Gabriel R.",
          role: "Spiritual Teacher"
        }
      ]
    }
  ];
  
  // Load product data based on productId
  useEffect(() => {
    const selectedProduct = products.find(p => p.id === productId);
    
    if (selectedProduct) {
      setProduct(selectedProduct);
      
      // Find related products (excluding the current product)
      const related = products
        .filter(p => p.id !== productId)
        .slice(0, 2);
      
      setRelatedProducts(related);
    }
  }, [productId]);
  
  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case 'immediate':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"/>
          </svg>
        );
      case 'ongoing':
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'resilience':
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

  // If product not found, show error message
  if (!product) {
    return (
      <div className="bg-[#FEE6AF] py-24 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-['Cormorant_Garamond'] text-3xl text-[#314E52] mb-4">Product Not Found</h1>
          <button 
            onClick={onNavigateBack}
            className="px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-colors"
          >
            Back to Your Tools
          </button>
        </div>
      </div>
    );
  }

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
            Back to Your Tools
          </button>
        </AnimatedContainer>

        {/* Product Header */}
        <AnimatedContainer animation="appear" delay={100} className="mb-8">
          <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 overflow-hidden">
            <div className="bg-gradient-to-r from-[#314E52] to-[#0A7373] p-6 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  {renderCategoryIcon(product.category)}
                </div>
                <div className="flex-1">
                  <span className="text-[rgba(254,230,175,1)] text-sm uppercase tracking-wide">{product.category} Resource</span>
                  <h1 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl">{product.title}</h1>
                </div>
              </div>
              <p className="text-lg text-white/90 mb-4">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-white/80">
                  <p>Access: {product.duration}</p>
                  <p>Level: {product.idealFor}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-white/70 text-right">
                    <p className="text-[rgba(254,230,175,1)]">One-time payment</p>
                    <p>Instant access</p>
                  </div>
                  <div>
                    <span className="text-3xl font-bold text-white">{product.price}</span>
                  </div>
                </div>
              </div>
              {/* Action Buttons - Desktop */}
              <div className="hidden md:flex gap-3 mb-4 justify-end">
                <button 
                  onClick={() => onAddToCart(product)}
                  className="px-6 py-3 rounded-lg border-2 border-[#FFFCF1] text-[rgba(255,252,241,1)] hover:bg-[#F8EFD2]/10 hover:text-white transition duration-300 whitespace-nowrap"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={() => onBuyNow(product)}
                  className="px-6 py-3 bg-[rgba(255,252,241,1)] text-[rgba(49,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors whitespace-nowrap"
                >
                  Buy Now
                </button>
              </div>
              {/* Action Buttons - Mobile */}
              <div className="flex md:hidden gap-3">
                <button className="flex-1 px-6 py-3 bg-[rgba(255,252,241,1)] text-[rgba(49,78,82,1)] rounded-lg hover:bg-[#FEE6AF]/90 transition-colors">
                  Add to Cart
                </button>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="flex-1 px-6 py-3 bg-[#86725B] text-white rounded-lg hover:bg-[#86725B]/90 transition-colors"
                >
                  Buy Now
                </button>
              </div>
              <p className="text-xs text-white/70 text-center mt-3 md:hidden">
                Instant digital access • 30-day money-back guarantee
              </p>
            </div>
          </div>
        </AnimatedContainer>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Overview */}
          <AnimatedContainer animation="rise" delay={200} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
            <h2 className="font-['Cormorant_Garamond'] text-2xl mb-4 text-[#314E52]">Overview</h2>
            <p className="text-[#314E52]/80 mb-4">{product.description}</p>
            <p className="text-[#314E52]/80">{product.longDescription}</p>
          </AnimatedContainer>

          {/* What to Expect & What's Included Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedContainer animation="rise" delay={300} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4 text-[#314E52]">What to Expect</h3>
              <ul className="space-y-2">
                {product.whatToExpect?.map((item, index) => (
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
                {product.whatIncluded.map((item, index) => (
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
                {product.perfectFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#B19777] mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-[#314E52]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedContainer>

            <AnimatedContainer animation="rise" delay={450} className="bg-gradient-to-br from-[#0A7373] to-[#314E52] rounded-xl p-6 text-white shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-4">Why Choose This Resource?</h3>
              <div className="space-y-3 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgba(177,151,119,1)] flex-shrink-0">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Instant digital access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgba(177,151,119,1)] flex-shrink-0">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgba(177,151,119,1)] flex-shrink-0">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Lifetime access to materials</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[rgba(177,151,119,1)] flex-shrink-0">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Expert guidance included</span>
                </div>
              </div>
              <p className="text-xs text-white/60 text-center mt-6">
                Join thousands who have transformed their anxiety with our proven resources
              </p>
            </AnimatedContainer>
          </div>

          {/* Testimonials */}
          <AnimatedContainer animation="rise" delay={500} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
            <h3 className="font-['Cormorant_Garamond'] text-xl mb-6 text-[#314E52]">What People Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.testimonials.map((testimonial, index) => (
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

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <AnimatedContainer animation="rise" delay={600} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300">
              <h3 className="font-['Cormorant_Garamond'] text-xl mb-6 text-[#314E52]">You May Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div 
                    key={relatedProduct.id}
                    onClick={() => onSelectRelatedProduct(relatedProduct.id)}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex gap-4">
                      {relatedProduct.image && (
                        <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={relatedProduct.image}
                            alt={relatedProduct.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-medium text-[#314E52] mb-1">{relatedProduct.title}</h4>
                        <p className="text-sm text-[#314E52]/70 mb-2 line-clamp-2">{relatedProduct.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-[#0A7373]">{relatedProduct.price}</span>
                          <span className="text-[#B19777] text-sm flex items-center">
                            View Details
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedContainer>
          )}
        </div>
      </div>
    </div>
  );
}