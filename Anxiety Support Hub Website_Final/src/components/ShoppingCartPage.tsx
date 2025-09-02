import { useState, useEffect } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { AnimatedContainer } from './ui/animated-container';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CartItem {
  id: string;
  title: string;
  price: string;
  category: string;
  description: string;
  image?: string;
  quantity: number;
}

interface ShoppingCartPageProps {
  onNavigateToHome: () => void;
  onNavigateToResources: () => void;
  onContinueShopping: () => void;
  cartItems: CartItem[];
  onUpdateCart: (items: CartItem[]) => void;
}

export function ShoppingCartPage({
  onNavigateToHome,
  onNavigateToResources,
  onContinueShopping,
  cartItems: initialCartItems,
  onUpdateCart
}: ShoppingCartPageProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems || []);
  const [isProcessing, setIsProcessing] = useState(false);

  // Update cart items when props change
  useEffect(() => {
    setCartItems(initialCartItems || []);
  }, [initialCartItems]);

  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  // Update quantity
  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  // Remove item
  const removeItem = (itemId: string) => {
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedItems);
    onUpdateCart(updatedItems);
  };

  // Handle checkout
  const handleCheckout = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      alert('Thank you for your purchase! You will receive an email confirmation shortly.');
      // Clear cart
      setCartItems([]);
      onUpdateCart([]);
      onNavigateToHome();
    }, 2000);
  };

  const renderCategoryIcon = (category: string) => {
    switch (category) {
      case 'Meditation':
        return <span className="text-lg">🧘</span>;
      case 'Therapy':
        return <span className="text-lg">💭</span>;
      case 'Mindfulness':
        return <span className="text-lg">🌱</span>;
      case 'Self-Help':
        return <span className="text-lg">📚</span>;
      case 'Wellness':
        return <span className="text-lg">✨</span>;
      default:
        return <span className="text-lg">🔮</span>;
    }
  };

  return (
    <div style={{ backgroundColor: '#FEE6AF' }} className="min-h-screen">
      {/* Background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <MagicSymbol type="circle" size={60} position="absolute" top="10%" left="5%" className="opacity-20" />
        <MagicSymbol type="triangle" size={40} position="absolute" top="60%" left="10%" rotate={30} className="opacity-15" />
        <MagicSymbol type="pentagram" size={50} position="absolute" top="20%" right="15%" rotate={15} className="opacity-20" />
        <MagicSymbol type="square" size={35} position="absolute" bottom="20%" right="8%" rotate={45} className="opacity-15" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <AnimatedContainer animation="appear" delay={100} className="mb-8">
          <div className="mb-4">
            <button
              onClick={onNavigateToHome}
              className="inline-flex items-center gap-2 text-[#314E52] hover:text-[#0A7373] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Home</span>
            </button>
          </div>
          <div className="text-center">
            <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#314E52] mb-4">
              Shopping Cart
            </h1>
          </div>
        </AnimatedContainer>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <AnimatedContainer animation="appear" delay={200} className="text-center py-16">
            <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 p-12 max-w-md mx-auto">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#314E52] to-[#0A7373] flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 16.1 19 15 19H9C7.9 19 7 18.1 7 17V13M9 21C9.6 21 10 20.6 10 20S9.6 19 9 19 8 19.4 8 20 8.4 21 9 21ZM20 21C20.6 21 21 20.6 21 20S20.6 19 20 19 19 19.4 19 20 19.4 21 20 21Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#314E52] mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">Discover our transformative resources and add them to your cart.</p>
              <button
                onClick={onContinueShopping}
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium"
              >
                <span>Continue Shopping</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </AnimatedContainer>
        ) : (
          /* Cart Content */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <AnimatedContainer animation="appear" delay={200}>
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6">
                  <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#314E52] mb-6">
                    Cart Items ({cartItems.length})
                  </h2>
                  
                  <div className="space-y-4">
                    {cartItems.map((item, index) => (
                      <AnimatedContainer key={item.id} animation="appear" delay={300 + (index * 100)}>
                        <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:border-[#314E52] transition-colors">
                          <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-[#314E52] to-[#0A7373] flex items-center justify-center text-white">
                            {renderCategoryIcon(item.category)}
                          </div>
                          
                          <div className="flex-1">
                            <h3 className="font-['Cormorant_Garamond'] text-lg text-[#314E52]">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.category}</p>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.description}</p>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                disabled={item.quantity <= 1}
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              </button>
                              <span className="w-8 text-center font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                              >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                              </button>
                            </div>
                            
                            {/* Price */}
                            <div className="text-right min-w-[80px]">
                              <p className="font-semibold text-[#314E52]">{item.price}</p>
                              {item.quantity > 1 && (
                                <p className="text-xs text-gray-500">
                                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)} total
                                </p>
                              )}
                            </div>
                            
                            {/* Remove Button */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="w-8 h-8 rounded-full text-red-500 hover:bg-red-50 transition-colors flex items-center justify-center"
                              title="Remove item"
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </AnimatedContainer>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                      onClick={onContinueShopping}
                      className="inline-flex items-center gap-2 text-[#314E52] hover:text-[#0A7373] transition-colors"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Continue Shopping</span>
                    </button>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <AnimatedContainer animation="appear" delay={400}>
                <div className="bg-white rounded-xl shadow-lg border-2 border-gray-300 p-6 sticky top-8">
                  <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#314E52] mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-[#314E52]">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={isProcessing}
                    className={`w-full inline-flex items-center justify-center gap-3 px-8 py-3 bg-[#0A7373] text-white rounded-xl hover:bg-[#0A7373]/90 transition-all duration-300 group text-base md:text-lg font-['Space_Grotesk'] font-medium mt-8 ${
                      isProcessing 
                        ? 'opacity-50 cursor-not-allowed' 
                        : ''
                    }`}
                  >
                    {isProcessing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <>
                        <span>Proceed to Checkout</span>
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                  
                  <div className="mt-4 p-4 bg-gradient-to-r from-[#314E52]/5 to-[#0A7373]/5 rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-[#314E52]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12S17.5 2 12 2 2 6.5 2 12 6.5 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Secure checkout</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">
                      30-day money-back guarantee • Instant digital access
                    </p>
                  </div>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}