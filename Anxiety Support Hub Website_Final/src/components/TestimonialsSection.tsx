
import { useRef, useEffect, useState } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { StarryBackground } from './StarryBackground';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    quote: "The techniques I learned through the Anxiety Support Hub completely transformed how I handle work pressure. I used to have near-daily anxiety attacks before important meetings, but now I have a toolkit that helps me stay centered and actually perform better under pressure.",
    author: "Michael R.",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "As a mother of three running my own business, I was constantly in fight-or-flight mode. The ongoing management program gave me practical ways to build resilience into my daily routine. I'm now more present with my children and more effective in my work.",
    author: "Samantha K.",
    role: "Entrepreneur & Parent",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    quote: "I was skeptical that anything could help my anxiety after years of struggling, but the alchemical approach here is different. It's not just about managing symptoms—it's about transforming your relationship with anxiety. I now see my sensitivity as a strength rather than a weakness.",
    author: "David W.",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Function to navigate to the next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  // Function to navigate to the previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('opacity-0')) {
              entry.target.classList.remove('opacity-0');
              entry.target.classList.add('animate-[fadeIn_0.8s_ease-out_forwards]');
            }
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animated-element');
    elements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #0E393E, #314E52)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="animate-float" style={{ animationDelay: '0s' }}>
          <MagicSymbol type="pentagram" size={60} position="absolute" top="20%" left="5%" />
        </div>
        <div className="animate-float" style={{ animationDelay: '2s' }}>
          <MagicSymbol type="circle" size={80} position="absolute" top="50%" right="10%" />
        </div>
        <div className="animate-float" style={{ animationDelay: '1s' }}>
          <MagicSymbol type="triangle" size={70} position="absolute" bottom="15%" left="15%" rotate={30} />
        </div>
        <div className="animate-float" style={{ animationDelay: '3s' }}>
          <MagicSymbol type="square" size={50} position="absolute" bottom="25%" right="25%" rotate={45} />
        </div>
      </div>
      
      {/* Decorative stars/dots - two layers for depth effect */}
      <StarryBackground count={75} color="#FFFCF1" className="opacity-20" />
      <StarryBackground count={35} color="#B19777" className="opacity-15" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-xl mx-auto mb-12 opacity-0 animated-element">
          <h2 className="font-['Cormorant_Garamond'] text-[42px] mb-4 text-[rgba(255,252,241,1)]">
            How Things Shifted
          </h2>
          <p className="text-white/80 text-[rgba(255,252,241,0.8)] text-[16px] text-[15px]">
            Discover how our approach has supported real people in transforming fear into awareness, and pressure into presence.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative opacity-0 animated-element">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[80px] text-[#B19777]/20 font-serif">
            "
          </div>
          
          {/* Testimonials Container */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  currentTestimonial === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 absolute inset-0 translate-x-16'
                }`}
              >
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#B19777]/30 hover:border-[#FFFCF1]/40 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                  {/* Enhanced background with mystical overlay */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#B19777]/20 via-[#FFFCF1]/10 to-[#0A7373]/20"></div>
                  </div>

                  {/* Floating mystical particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#B19777]/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-[#FFFCF1]/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#0A7373]/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                  
                  {/* Content - Above overlays */}
                  <div className="relative z-10">
                    <p className="text-[rgba(255,252,241,1)] text-lg md:text-xl mb-8 italic leading-relaxed">
                      {testimonial.quote}
                    </p>
                    
                    <div className="flex items-center">
                      <div 
                        className="w-14 h-14 rounded-full bg-gray-200 mr-4 ring-2 ring-[#B19777]/30"
                        style={{
                          backgroundImage: `url(${testimonial.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      <div>
                        <h4 className="font-['Cormorant_Garamond'] text-xl text-white">
                          {testimonial.author}
                        </h4>
                        <p className="text-white/70">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accent */}
                  <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="w-6 h-6 border border-[#B19777] rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-[#B19777] rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Manual Navigation Buttons */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 md:-translate-x-20">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-[#0A7373]/50 hover:bg-[#0A7373]/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 md:translate-x-20">
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[#0A7373]/50 hover:bg-[#0A7373]/80 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-[#FFFCF1] w-8' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white opacity-0 animated-element">
          {[
            { number: "1,200+", label: "Students Enrolled" },
            { number: "92%", label: "Satisfaction Rate" },
            { number: "15+", label: "Specialized Resources" },
            { number: "8", label: "Years of Experience" }
          ].map((stat, index) => (
            <div key={index}>
              <div className="font-['Cormorant_Garamond'] text-3xl md:text-4xl text-[rgba(255,252,241,1)] mb-2">
                {stat.number}
              </div>
              <p className="text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
