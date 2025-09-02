
import { useRef, useEffect } from 'react';
import { MagicSymbol } from './MagicSymbol';

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-[rgba(254,230,175,1)]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <MagicSymbol type="triangle" size={60} position="absolute" top="10%" right="10%" className="opacity-30" />
        <MagicSymbol type="square" size={40} position="absolute" bottom="15%" left="5%" rotate={45} className="opacity-30" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards] bg-[rgba(255,252,241,1)]">
              <h2 className="font-['Cormorant_Garamond'] text-[42px] mb-4 text-[#314E52]">
            Connect With Us 
          </h2> 
              
              <p className="text-gray-700 mb-8">
                Whether you’re looking for guidance, support, or just a place to share, we’re here to listen and respond with care.

              </p>
              
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-1 text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A7373]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1 text-gray-700">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A7373]"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 text-gray-700">Subject</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A7373]"
                  >
                    <option value="">Select an option</option>
                    <option value="resource">Question about a resource</option>
                    <option value="custom">Custom solution inquiry</option>
                    <option value="coaching">1:1 Coaching inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0A7373]"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/90 transition-all duration-300 group"
                >
                  <span>Send Message</span>
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </div>
            
            <div className="bg-[#314E52] p-8 md:p-12 text-white flex flex-col justify-between opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards]">
              <div>
                <h3 className="font-['Cormorant_Garamond'] text-3xl mb-6">We'll Meet you There</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Visit our studio</h4>
                      <p className="text-white/70">123 Serenity Lane<br />Mindful City, MC 98765</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77383 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27097 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.2165 3.36163C2.30513 3.09849 2.44757 2.85669 2.63477 2.65163C2.82196 2.44656 3.04981 2.28271 3.30379 2.17052C3.55778 2.05833 3.83234 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04208 3.23945 9.11 3.72C9.23651 4.68007 9.47141 5.62273 9.81 6.53C9.94474 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0552 17.47 14.19C18.3773 14.5286 19.3199 14.7635 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Call us</h4>
                      <p className="text-white/70">(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mt-1">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email us</h4>
                      <p className="text-white/70">hello@anxietysupporthub.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="font-medium mb-4">Follow us</h4>
                <div className="flex gap-4">
                  {['instagram', 'twitter', 'facebook', 'youtube'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" fill="none" rx="0" ry="0"/>
                        <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
