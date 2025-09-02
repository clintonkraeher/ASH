
import React, { useState } from 'react';
import { PlusIcon } from 'lucide-react';

export function WeAreHereForYouSection() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    if (openItem === item) {
      setOpenItem(null);
    } else {
      setOpenItem(item);
    }
  };

  return (
    <section 
      className="py-16 md:py-24"
      style={{ backgroundColor: "#F5EFD9" }} // Light cream background matching the image
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left side - Custom Accordion */}
          <div className="border-t border-[#314E52]/20">
            {/* For Whom Item */}
            <div className="border-b border-[#314E52]/20 py-2">
              <button 
                onClick={() => toggleItem('for-whom')}
                className="flex justify-between items-center py-4 w-full text-[#314E52] text-left"
              >
                <span className="text-base md:text-lg">For Whom</span>
                <PlusIcon className="h-5 w-5 shrink-0" />
              </button>
              {openItem === 'for-whom' && (
                <div className="py-3 text-[#314E52]/80">
                  <p>Our support is designed for high-achieving professionals, entrepreneurs, and busy parents who struggle with anxiety despite their outward success.</p>
                  <p className="mt-2">We serve those who appear to have it all together but internally battle with persistent worry, stress, and overwhelm.</p>
                </div>
              )}
            </div>

            {/* What Item */}
            <div className="border-b border-[#314E52]/20 py-2">
              <button 
                onClick={() => toggleItem('what')}
                className="flex justify-between items-center py-4 w-full text-[#314E52] text-left"
              >
                <span className="text-base md:text-lg">What</span>
                <PlusIcon className="h-5 w-5 shrink-0" />
              </button>
              {openItem === 'what' && (
                <div className="py-3 text-[#314E52]/80">
                  <p>We provide practical tools, resources, and guidance across three key areas:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Survive: Quick techniques to calm your nervous system during anxiety spikes</li>
                    <li>Understand: Daily practices to reduce baseline anxiety levels</li>
                    <li>Transcend: Deeper work to address the root causes of anxiety</li>
                  </ul>
                </div>
              )}
            </div>

            {/* How Item */}
            <div className="border-b border-[#314E52]/20 py-2">
              <button 
                onClick={() => toggleItem('how')}
                className="flex justify-between items-center py-4 w-full text-[#314E52] text-left"
              >
                <span className="text-base md:text-lg">How</span>
                <PlusIcon className="h-5 w-5 shrink-0" />
              </button>
              {openItem === 'how' && (
                <div className="py-3 text-[#314E52]/80">
                  <p>Our approach combines evidence-based techniques with holistic practices:</p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Somatic practices that address anxiety's physical manifestations</li>
                    <li>Cognitive tools to transform limiting thought patterns</li>
                    <li>Mindfulness techniques to develop present-moment awareness</li>
                    <li>Personalized strategies tailored to your unique anxiety triggers and symptoms</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h2 className="font-['Cormorant_Garamond'] text-[42px] text-[#314E52] mb-6">
              We Are Here For You
            </h2>
            
            <p className="text-[#314E52]/90 mb-4 max-w-md">
              Anxiety Support Hub is here – anytime, anywhere – to provide immediate, effective, and tangible support for the overwhelmed, the restless, and the driven – those weighed down by stress, frustration, and panic.
            </p>
            
            <p className="text-[#314E52]/90 mb-8 max-w-md">
              Our mission is to address anxiety at its physical roots, unlocking your full potential and catalyzing your transformation into a more grounded, whole version of yourself – and, in doing so, creating a positive impact on everyone around you.
            </p>
            
            <button className="bg-[#314E52] text-white px-6 py-3 rounded-lg hover:bg-[#314E52]/90 transition-colors">
              Would like to hear more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
