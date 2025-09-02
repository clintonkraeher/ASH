
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface Resource {
  title: string;
  description: string;
  price: string;
  icon: string;
  id: string;
  action?: () => void;
  features?: string[];
  duration?: string;
  suitable?: string;
}

interface ResourcesCarouselProps {
  resources: Resource[];
  renderIcon: (icon: string) => JSX.Element;
  onProductSelect?: (productId: string) => void;
}

export function ResourcesCarousel({ resources, renderIcon, onProductSelect }: ResourcesCarouselProps) {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Extra padding wrapper to ensure the first card has enough space on the left */}
      <div className="px-6 md:px-8 overflow-visible">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full overflow-visible"
        >
          <CarouselContent className="overflow-visible -ml-2 md:-ml-4">
            {resources.map((resource, index) => (
              <CarouselItem 
                key={index} 
                className={`basis-full sm:basis-1/2 lg:basis-1/3 p-2 md:p-4 overflow-visible`}
              >
                <div 
                  onClick={() => {
                    if (resource.action) {
                      resource.action();
                    } else if (onProductSelect) {
                      onProductSelect(resource.id);
                    }
                  }}
                  className="block group h-[420px] cursor-pointer"
                > 
                  <div 
                    className="h-full bg-white rounded-xl p-6 shadow-lg border-2 border-gray-300 transition-all duration-300 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards] group-hover:shadow-xl relative z-0 group-hover:z-10 flex flex-col"
                    style={{
                      transformOrigin: "center center",
                      transform: "translate3d(0, 0, 0)",
                      willChange: "transform, box-shadow"
                    }}
                  >
                    <div 
                      className="absolute inset-0 w-full h-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                      style={{
                        transformOrigin: "center center",
                        transform: "translate3d(0, 0, 0)",
                        willChange: "transform"
                      }}
                    ></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Card Header - Fixed height */}
                      <div>
                        <div className="w-12 h-12 rounded-full bg-[#E9E9E9] flex items-center justify-center mb-3 text-[#0A7373]">
                          {renderIcon(resource.icon)}
                        </div>
                        
                        <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">{resource.title}</h3>
                      </div>
                      
                      {/* Card Content - Fixed height without scrolling */}
                      <div className="flex-grow">
                        <p className="text-gray-600 mb-3">{resource.description}</p>
                        
                        {resource.features && (
                          <ul className="mb-3 space-y-1">
                            {resource.features.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-gray-600">
                                <span className="text-[#0A7373] mr-2">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {resource.duration && (
                          <p className="text-sm text-gray-500 mb-1">
                            <span className="font-medium">Duration:</span> {resource.duration}
                          </p>
                        )}
                        
                        {resource.suitable && (
                          <p className="text-sm text-gray-500">
                            <span className="font-medium">Ideal for:</span> {resource.suitable}
                          </p>
                        )}
                      </div>
                      
                      {/* Card Footer - Fixed at bottom */}
                      <div className="mt-auto pt-3 border-t border-gray-200 flex justify-between items-center">
                        <span className="font-medium text-[#0A7373]">{resource.price}</span>
                        <span className="text-[#B19777] group-hover:text-[#6F4E37] transition-colors flex items-center gap-1">
                          Learn more
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center mt-6 gap-4">
            <CarouselPrevious 
              className="relative static rounded-full bg-[#0A7373] hover:bg-[#0B9B9B] text-white border-none"
            />
            <CarouselNext 
              className="relative static rounded-full bg-[#0A7373] hover:bg-[#0B9B9B] text-white border-none"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
