import image_26116fb3f9e7665d0407d4e3807a6a5363135896 from 'figma:asset/26116fb3f9e7665d0407d4e3807a6a5363135896.png';

import { MagicSymbol } from './MagicSymbol';
import logoImage from 'figma:asset/8f7bd56f8a05277cb6d13615a96ae14f1313399b.png';

export function Footer() {
  return (
    <footer className="relative bg-[#314E52] text-white pt-16 pb-8">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <MagicSymbol type="circle" size={100} position="absolute" top="20%" left="5%" color="#B19777" className="opacity-10" />
        <MagicSymbol type="square" size={60} position="absolute" top="20%" right="10%" color="#B19777" rotate={45} className="opacity-10" />
        <MagicSymbol type="triangle" size={80} position="absolute" bottom="35%" right="37%" color="#B19777" className="opacity-10" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 relative">
                <img 
                  src={image_26116fb3f9e7665d0407d4e3807a6a5363135896} 
                  alt="Anxiety Support Hub Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Cormorant_Garamond'] font-semibold text-xl text-white">
                Anxiety Support Hub
              </span>
            </div>
            
            <p className="text-white/70 mb-6">
              Transforming anxiety from a burden into a source of wisdom, strength, and purpose.
            </p>
            
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook', 'youtube'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="none" rx="0" ry="0"/>
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-xl mb-6">Blog</h3>
            <ul className="space-y-3">
              {[
                'Breathing Reset Guide',
                'Emergency Calm Mini-Course',
                'Daily Calm Workshop',
                'Anxiety Alchemy Masterclass',
                'Future Self Integration'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#services" 
                    className="text-white/70 hover:text-[#B19777] transition-colors"
                    aria-label="Blog post"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-xl mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                'About Us',
                'Our Mission',
                'The Team',
                'About Blog',
                'Careers'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-[#B19777] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-['Cormorant_Garamond'] text-xl mb-6">Subscribe</h3>
            <p className="text-white/70 mb-4">
              Get our latest blog posts, event updates, and exclusive offers delivered to your inbox.
            </p>
            
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#B19777]"
              />
              <button 
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-[rgba(245,239,217,1)] text-[#314E52] hover:bg-[#FEE6AF]/90 transition duration-300 font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Anxiety Support Hub. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
              'Sitemap'
            ].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
