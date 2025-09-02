
import { useState } from "react";
import { WisdomCard } from "./WisdomCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

// Extended array of wisdom cards content
const carouselWisdomCards = [
  {
    front: {
      title: "The Observer",
      description: "Your anxiety is not who you are. It's simply a sensation you're observing.",
      icon: "eye"
    },
    back: {
      quote: "Between stimulus and response, there is a space. In that space lies our freedom and power to choose our response.",
      author: "Viktor Frankl"
    }
  },
  {
    front: {
      title: "The Breath",
      description: "Your breath is the bridge between mind and body. It can anchor you in any storm.",
      icon: "wind"
    },
    back: {
      quote: "Breath is the finest gift of nature. Be grateful for this wonderful gift.",
      author: "Amit Ray"
    }
  },
  {
    front: {
      title: "Impermanence",
      description: "Like clouds passing through the sky, your anxiety will dissolve with time.",
      icon: "cloud"
    },
    back: {
      quote: "This too shall pass. It might pass like a kidney stone, but it will pass.",
      author: "Ancient Wisdom"
    }
  },
  {
    front: {
      title: "Inner Wisdom",
      description: "The answers you seek are already within you. Listen to your inner voice.",
      icon: "star"
    },
    back: {
      quote: "Trust yourself. You know more than you think you do.",
      author: "Benjamin Spock"
    }
  },
  {
    front: {
      title: "Grounding",
      description: "Feel the earth beneath your feet. You are supported in every moment.",
      icon: "anchor"
    },
    back: {
      quote: "Put your thoughts to sleep. Do not let them cast a shadow over the moon of your heart.",
      author: "Rumi"
    }
  },
  {
    front: {
      title: "The Present",
      description: "Anxiety lives in the future. Peace resides in the present moment.",
      icon: "clock"
    },
    back: {
      quote: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
      author: "Thich Nhat Hanh"
    }
  },
  {
    front: {
      title: "Compassion",
      description: "Treat your anxiety with the same compassion you would offer a frightened child.",
      icon: "heart"
    },
    back: {
      quote: "If your compassion does not include yourself, it is incomplete.",
      author: "Jack Kornfield"
    }
  },
  {
    front: {
      title: "The Journey",
      description: "Your anxiety is not a roadblock, but a signpost on your path to growth.",
      icon: "map"
    },
    back: {
      quote: "The wound is the place where the Light enters you.",
      author: "Rumi"
    }
  },
  {
    front: {
      title: "Surrender",
      description: "Stop fighting the current. Sometimes the path forward is to let go.",
      icon: "feather"
    },
    back: {
      quote: "When I let go of what I am, I become what I might be.",
      author: "Lao Tzu"
    }
  },
  {
    front: {
      title: "Transformation",
      description: "Every experience of anxiety holds the seed of profound transformation.",
      icon: "refresh-cw"
    },
    back: {
      quote: "And the day came when the risk to remain tight in a bud was more painful than the risk it took to blossom.",
      author: "Anaïs Nin"
    }
  }
];

export function WisdomCardsCarousel() {
  // State to track the API has loaded
  const [apiLoaded, setApiLoaded] = useState(true);

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
            {carouselWisdomCards.map((card, index) => (
              <CarouselItem 
                key={index} 
                className={`basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2 md:p-4 overflow-visible`}
              >
                <div className="h-64 opacity-0 animate-[fadeIn_0.8s_ease-out_0.3s_forwards] relative z-0 hover:z-10">
                  <WisdomCard
                    front={card.front}
                    back={card.back}
                  />
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
