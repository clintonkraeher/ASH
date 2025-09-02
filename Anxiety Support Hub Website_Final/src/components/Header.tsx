import image_657f20964cdf84b7dbd16b402a3986c990dbb54f from 'figma:asset/657f20964cdf84b7dbd16b402a3986c990dbb54f.png';
import { useState, useEffect } from 'react';
import { navigationContent } from '../content/texts';
import logoBeige from 'figma:asset/e00ae63d9ac5b71f3f000b5cc52f0cc721912cb8.png';

interface HeaderProps {
  onNavigateToShop: () => void;
  onNavigateToHome: () => void;
  onNavigateToBlog: () => void;
  onNavigateToServices: () => void;
  onNavigateToAbout: () => void;
  onNavigateToAboutUs: () => void;
  onNavigateToConnect: () => void;
  onNavigateToCart: () => void;
  onBookCall: () => void;
  currentView: string;
  cartItemsCount: number;
}

export function Header({ 
  onNavigateToShop, 
  onNavigateToHome, 
  onNavigateToBlog, 
  onNavigateToServices, 
  onNavigateToAbout,
  onNavigateToAboutUs,
  onNavigateToConnect,
  onNavigateToCart,
  onBookCall,
  currentView,
  cartItemsCount 
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactSectionVisible, setIsContactSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Check if contact section is visible only when on home page
      if (currentView === 'home') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          const rect = contactSection.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
          setIsContactSectionVisible(isVisible);
        }
      } else {
        setIsContactSectionVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Reset contact section visibility when leaving home page
  useEffect(() => {
    if (currentView !== 'home') {
      setIsContactSectionVisible(false);
    }
  }, [currentView]);

  const navItems = [
    navigationContent.menuItems.aboutRenamed, 
    navigationContent.menuItems.servicesRenamed, 
    navigationContent.menuItems.resourcesRenamed,
    navigationContent.menuItems.blogRenamed, 
    'About Us', 
    navigationContent.menuItems.connect
  ];

  const handleNavClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    
    switch(item) {
      case navigationContent.menuItems.resourcesRenamed:
        onNavigateToShop();
        break;
      case 'About Us':
        onNavigateToAboutUs();
        break;
      case navigationContent.menuItems.blogRenamed:
        onNavigateToBlog();
        break;
      case navigationContent.menuItems.servicesRenamed:
        onNavigateToServices();
        break;
      case navigationContent.menuItems.aboutRenamed:
        onNavigateToAbout();
        break;
      case navigationContent.menuItems.connect:
        onNavigateToConnect();
        break;
      default:
        onNavigateToHome();
        break;
    }
  };

  const handleBookCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    onBookCall();
  };

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu
    onNavigateToCart();
  };

  // Helper function to check if a nav item is active
  const isNavItemActive = (item: string) => {
    switch(item) {
      case navigationContent.menuItems.aboutRenamed:
        return currentView === 'about';
      case navigationContent.menuItems.servicesRenamed:
        return currentView === 'services';
      case navigationContent.menuItems.resourcesRenamed:
        return currentView === 'resources';
      case 'About Us':
        return currentView === 'aboutus';
      case navigationContent.menuItems.blogRenamed:
        return currentView === 'blog';
      case navigationContent.menuItems.connect:
        return currentView === 'home' && isContactSectionVisible; // Connect is active only when on home page AND contact section is visible
      default:
        return false;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      (isScrolled || currentView !== 'home')
        ? 'bg-[#314E52]/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo - Now has the home navigation functionality */}
        <a 
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onNavigateToHome();
          }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-8 h-8 relative">
            <img 
              src={image_657f20964cdf84b7dbd16b402a3986c990dbb54f} 
              alt="Anxiety Support Hub Logo" 
              className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <span className="font-['Cormorant_Garamond'] font-semibold text-xl transition-colors text-[#F5EFD9] hover:text-[#F5EFD9]/80">
            Anxiety Support Hub
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);
              const href = item === navigationContent.menuItems.resourcesRenamed ? '#tools' : 
                          item === 'About Us' ? '#aboutus' :
                          item === navigationContent.menuItems.blogRenamed ? '#insights' : 
                          item === navigationContent.menuItems.servicesRenamed ? '#rituals' :
                          item === navigationContent.menuItems.aboutRenamed ? '#our-path' :
                          item === navigationContent.menuItems.connect ? '#connect' :
                          `#${item.toLowerCase()}`;
              
              return (
                <a 
                  key={item} 
                  href={href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`relative overflow-hidden group ${
                    isActive 
                      ? 'text-[#F5EFD9]' 
                      : 'text-[#F5EFD9] hover:text-[#F5EFD9]/80'
                  }`}
                >
                  <span className={`block transition-transform duration-300 ${isActive ? '' : 'group-hover:-translate-y-full'}`}>
                    {item}
                  </span>
                  {!isActive && (
                    <span className="absolute top-0 left-0 h-full w-full text-[#F5EFD9]/80 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      {item}
                    </span>
                  )}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#F5EFD9] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              );
            })}
            
            {/* Shopping Cart Button - Desktop */}
            {cartItemsCount > 0 && (
              <button
                onClick={handleCartClick}
                className="relative group p-2.5 hover:bg-[#F5EFD9]/10 rounded-lg transition-all duration-300"
                aria-label="Shopping Cart"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#F5EFD9] group-hover:text-[#F5EFD9]/80 transition-colors"
                >
                  <path 
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M9 21C9.6 21 10 20.6 10 20S9.6 19 9 19 8 19.4 8 20 8.4 21 9 21ZM20 21C20.6 21 21 20.6 21 20S20.6 19 20 19 19 19.4 19 20 19.4 21 20 21Z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-[#B19777] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                  {cartItemsCount > 9 ? '9+' : cartItemsCount}
                </span>
              </button>
            )}
          </nav>
          
          {/* Book a Call CTA Button - Desktop */}
          <button
            onClick={handleBookCallClick}
            className="group relative px-6 py-2.5 bg-[#F5EFDA] hover:bg-[#FEE6AF] text-[#324E52] rounded-lg transition-all duration-300 hover:shadow-lg overflow-hidden"
          >
            <span className="relative z-10 font-medium">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FEE6AF]/90 to-[#FEE6AF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              (isScrolled || currentView !== 'home') ? 'bg-white' : 'bg-[#314E52]'
            } ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              (isScrolled || currentView !== 'home') ? 'bg-white' : 'bg-[#314E52]'
            } ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          ></span>
          <span 
            className={`block w-6 h-0.5 transition-all duration-300 ${
              (isScrolled || currentView !== 'home') ? 'bg-white' : 'bg-[#314E52]'
            } ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`fixed top-[89px] right-0 bottom-0 bg-[#314E52]/95 backdrop-blur-md w-64 p-6 transition-transform duration-300 shadow-lg md:hidden mobile-menu ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => {
              const isActive = isNavItemActive(item);
              const href = item === navigationContent.menuItems.resourcesRenamed ? '#tools' : 
                         item === 'About Us' ? '#aboutus' :
                         item === navigationContent.menuItems.blogRenamed ? '#insights' : 
                         item === navigationContent.menuItems.servicesRenamed ? '#rituals' :
                         item === navigationContent.menuItems.aboutRenamed ? '#our-path' :
                         item === navigationContent.menuItems.connect ? '#connect' :
                         `#${item.toLowerCase()}`;
              
              return (
                <a 
                  key={item} 
                  href={href}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`text-lg border-b pb-2 transition-colors relative ${
                    isActive 
                      ? 'text-[#F5EFD9] border-[#F5EFD9]' 
                      : 'text-[#F5EFD9] border-[#F5EFD9]/30 hover:text-[#F5EFD9]/80 hover:border-[#F5EFD9]/60'
                  }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#F5EFD9] rounded-full -ml-4"></span>
                  )}
                </a>
              );
            })}
            
            {/* Shopping Cart Button - Mobile */}
            {cartItemsCount > 0 && (
              <button
                onClick={handleCartClick}
                className="flex items-center justify-between w-full text-lg border-b pb-2 transition-colors text-[#F5EFD9] border-[#F5EFD9]/30 hover:text-[#F5EFD9]/80 hover:border-[#F5EFD9]/60"
              >
                <span>Shopping Cart</span>
                <div className="flex items-center gap-2">
                  <span className="bg-[#B19777] text-white text-xs rounded-full px-2 py-1 font-medium">
                    {cartItemsCount}
                  </span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-current"
                  >
                    <path 
                      d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M9 21C9.6 21 10 20.6 10 20S9.6 19 9 19 8 19.4 8 20 8.4 21 9 21ZM20 21C20.6 21 21 20.6 21 20S20.6 19 20 19 19 19.4 19 20 19.4 21 20 21Z" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            )}
            
            {/* Book a Call CTA Button - Mobile */}
            <button
              onClick={handleBookCallClick}
              className="mt-4 w-full px-6 py-3 bg-[#F5EFDA] hover:bg-[#FEE6AF] text-[#324E52] rounded-lg transition-all duration-300 font-medium"
            >
              Book a Call
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}