import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/fonts.css";
import { useEffect, useState } from "react";
import { toast } from "sonner@2.0.3";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { CombinedApproachSection } from "./components/CombinedApproachSection";
import { ServicesSection } from "./components/ServicesSection";
import { ServicesPreviewSection } from "./components/ServicesPreviewSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { ResourcesPage } from "./components/ResourcesPage";
import { BlogPage } from "./components/BlogPage";
import { BlogPostPage } from "./components/BlogPostPage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { AboutUsPage } from "./components/AboutUsPage";
import { AboutUsSection } from "./components/AboutUsSection";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { ServiceDetailPage } from "./components/ServiceDetailPage";
import { ShoppingCartPage } from "./components/ShoppingCartPage";

// HomePage component to contain all the sections
function HomePage({
  onProductSelect,
  onNavigateToServices,
  onNavigateToResources,
  onNavigateToAbout,
  onNavigateToAboutUs,
}: {
  onProductSelect: (productId: string) => void;
  onNavigateToServices: () => void;
  onNavigateToResources: () => void;
  onNavigateToAbout: () => void;
  onNavigateToAboutUs: () => void;
}) {
  return (
    <main className="flex-1">
      <HeroSection
        onNavigateToResources={onNavigateToResources}
      />
      <CombinedApproachSection
        onNavigateToAbout={onNavigateToAbout}
      />
      <ServicesPreviewSection
        onNavigateToServices={onNavigateToServices}
        onNavigateToResources={onNavigateToResources}
      />
      <ServicesSection onProductSelect={onProductSelect} />
      <TestimonialsSection />
      <AboutUsSection
        onNavigateToAboutUs={onNavigateToAboutUs}
      />
      <ContactSection />
    </main>
  );
}

// PageTransition component for smooth page transitions
function PageTransition({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) {
  return (
    <div
      className={`flex-1 transition-opacity duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
      style={{
        transform: isActive
          ? "translateY(0)"
          : "translateY(10px)",
        transition:
          "opacity 500ms var(--transition-ease-out), transform 600ms var(--transition-ease-out)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState<
    string | null
  >(null);
  const [selectedServiceId, setSelectedServiceId] = useState<
    string | null
  >(null);
  const [selectedBlogId, setSelectedBlogId] = useState<
    string | null
  >(null);
  const [isPageTransitioning, setIsPageTransitioning] =
    useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    // Simulate loading time to show the magical entrance
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle page transitions smoothly
  const handlePageTransition = (
    newView: string,
    callback?: () => void,
  ) => {
    setIsPageTransitioning(true);

    // Fade out current page
    setTimeout(() => {
      // Update the view after fade out
      setCurrentView(newView);
      window.scrollTo(0, 0);

      // Execute any additional callback if provided
      if (callback) callback();

      // Fade in new page
      setTimeout(() => {
        setIsPageTransitioning(false);
      }, 100);
    }, 300);
  };

  // Function to navigate to Resources page
  const navigateToResources = (
    productId: string | null = null,
  ) => {
    handlePageTransition("resources", () => {
      setSelectedProductId(productId);
    });
  };

  // Function to navigate to Product Detail page
  const navigateToProductDetail = (productId: string) => {
    handlePageTransition("product-detail", () => {
      setSelectedProductId(productId);
    });
  };

  // Function to navigate to Services page
  const navigateToServices = () => {
    handlePageTransition("services", () => {
      setSelectedServiceId(null);
    });
  };

  // Function to navigate to Service Detail page
  const navigateToServiceDetail = (serviceId: string) => {
    handlePageTransition("service-detail", () => {
      setSelectedServiceId(serviceId);
    });
  };

  // Function to navigate to Blog page
  const navigateToBlog = () => {
    handlePageTransition("blog", () => {
      setSelectedBlogId(null);
    });
  };

  // Function to navigate to About page
  const navigateToAbout = () => {
    handlePageTransition("about");
  };

  // Function to navigate to About Us page
  const navigateToAboutUs = () => {
    handlePageTransition("aboutus");
  };

  // Function to navigate to Connect (scroll to contact section)
  const navigateToConnect = () => {
    // If we're not on the home page, navigate to home first
    if (currentView !== "home") {
      handlePageTransition("home", () => {
        setSelectedProductId(null);
        setSelectedServiceId(null);
        setSelectedBlogId(null);

        // Wait for the page to load and then scroll to contact
        setTimeout(() => {
          const contactSection =
            document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({
              behavior: "smooth",
            });
          }
        }, 500);
      });
    } else {
      // If already on home page, just scroll to contact
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Function to navigate to a specific Blog post
  const navigateToBlogPost = (blogId: string) => {
    handlePageTransition("blogpost", () => {
      setSelectedBlogId(blogId);
    });
  };

  // Function to navigate to Home page
  const navigateToHome = () => {
    handlePageTransition("home", () => {
      setSelectedProductId(null);
      setSelectedServiceId(null);
      setSelectedBlogId(null);
    });
  };

  // Function to navigate to Shopping Cart
  const navigateToCart = () => {
    handlePageTransition("cart");
  };

  // Function to add item to cart
  const addToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    // Show success feedback without redirecting
    toast.success(`Added "${product.title}" to cart!`, {
      description: `Price: ${product.price}`,
      duration: 3000,
    });
  };

  // Function to buy now - add to cart and redirect
  const buyNow = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    let newCartItems;
    
    if (existingItem) {
      newCartItems = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCartItems = [...cartItems, { ...product, quantity: 1 }];
    }
    
    setCartItems(newCartItems);
    
    // Show success feedback and redirect to cart
    toast.success(`Added "${product.title}" to cart!`, {
      description: "Redirecting to cart...",
      duration: 2000,
    });
    
    // Small delay to show the toast before redirecting
    setTimeout(() => {
      navigateToCart();
    }, 300);
  };

  // Function to update cart
  const updateCart = (newCartItems: any[]) => {
    setCartItems(newCartItems);
  };

  // Function for scheduling a consultation (placeholder)
  const scheduleConsultation = () => {
    // This could open a modal or redirect to a booking page in the future
    alert(
      "This would open a booking calendar in a production application. For now, this is just a placeholder.",
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading ? (
        <div className="fixed inset-0 bg-[#314E52] flex items-center justify-center z-50">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 relative">
              <svg
                className="animate-spin w-full h-full"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L3 7V17L12 22L21 17V7L12 2Z"
                  stroke="#B19777"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#B19777] rounded-full"></div>
              </div>
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-2xl text-white">
              Anxiety Support Hub
            </h2>
            <p className="text-white/70 text-sm mt-2">
              Transforming your experience...
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header
            onNavigateToShop={navigateToResources}
            onNavigateToHome={navigateToHome}
            onNavigateToBlog={navigateToBlog}
            onNavigateToServices={navigateToServices}
            onNavigateToAbout={navigateToAbout}
            onNavigateToAboutUs={navigateToAboutUs}
            onNavigateToConnect={navigateToConnect}
            onNavigateToCart={navigateToCart}
            onBookCall={scheduleConsultation}
            currentView={currentView}
            cartItemsCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
          />

          <PageTransition isActive={!isPageTransitioning}>
            {currentView === "home" ? (
              <HomePage
                onProductSelect={(productId) =>
                  navigateToResources(productId)
                }
                onNavigateToServices={navigateToServices}
                onNavigateToResources={() =>
                  navigateToResources()
                }
                onNavigateToAbout={navigateToAbout}
                onNavigateToAboutUs={navigateToAboutUs}
              />
            ) : currentView === "resources" ? (
              <div className="flex-1">
                <ResourcesPage
                  onNavigateToHome={navigateToHome}
                  selectedProductId={selectedProductId}
                  onSelectProduct={navigateToProductDetail}
                />
              </div>
            ) : currentView === "product-detail" &&
              selectedProductId ? (
              <div className="flex-1">
                <ProductDetailPage
                  productId={selectedProductId}
                  onNavigateBack={() => navigateToResources()}
                  onSelectRelatedProduct={
                    navigateToProductDetail
                  }
                  onAddToCart={addToCart}
                  onBuyNow={buyNow}
                />
              </div>
            ) : currentView === "services" ? (
              <div className="flex-1">
                <ServicesPage
                  onNavigateToHome={navigateToHome}
                  onScheduleConsultation={scheduleConsultation}
                  onSelectService={navigateToServiceDetail}
                />
              </div>
            ) : currentView === "service-detail" &&
              selectedServiceId ? (
              <div className="flex-1">
                <ServiceDetailPage
                  serviceId={selectedServiceId}
                  onNavigateBack={() => navigateToServices()}
                  onScheduleConsultation={scheduleConsultation}
                  onAddToCart={addToCart}
                  onBuyNow={buyNow}
                />
              </div>
            ) : currentView === "blog" ? (
              <div className="flex-1">
                <BlogPage
                  onNavigateToHome={navigateToHome}
                  onSelectBlogPost={navigateToBlogPost}
                />
              </div>
            ) : currentView === "about" ? (
              <div className="flex-1">
                <AboutPage
                  onNavigateToHome={navigateToHome}
                  onNavigateToServices={navigateToServices}
                  onNavigateToAbout={navigateToAbout}
                />
              </div>
            ) : currentView === "aboutus" ? (
              <div className="flex-1">
                <AboutUsPage
                  onNavigateToHome={navigateToHome}
                  onNavigateToResources={() =>
                    navigateToResources()
                  }
                  onNavigateToServices={navigateToServices}
                />
              </div>
            ) : currentView === "blogpost" && selectedBlogId ? (
              <div className="flex-1">
                <BlogPostPage
                  blogId={selectedBlogId}
                  onNavigateToHome={navigateToHome}
                  onNavigateToBlog={navigateToBlog}
                  onSelectBlogPost={navigateToBlogPost}
                />
              </div>
            ) : currentView === "cart" ? (
              <div className="flex-1">
                <ShoppingCartPage
                  onNavigateToHome={navigateToHome}
                  onNavigateToResources={() => navigateToResources()}
                  onContinueShopping={() => navigateToResources()}
                  cartItems={cartItems}
                  onUpdateCart={updateCart}
                />
              </div>
            ) : null}
          </PageTransition>

          <Footer />
        </div>
      )}
      <Toaster richColors />
    </div>
  );
}