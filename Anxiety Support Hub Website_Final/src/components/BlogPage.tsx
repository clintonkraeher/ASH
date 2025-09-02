import { useRef, useEffect, useState } from 'react';
import { MagicSymbol } from './MagicSymbol';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatedContainer } from './ui/animated-container';
import { AnimatedGrid } from './ui/animated-grid';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

interface BlogPageProps {
  onNavigateToHome: () => void;
  onSelectBlogPost: (blogId: string) => void;
}

export function BlogPage({ onNavigateToHome, onSelectBlogPost }: BlogPageProps) {
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Define blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "anxiety-modern-life",
      title: "Anxiety in Modern Life: Finding Your Center",
      excerpt: "Discover practical ways to maintain equilibrium in a world that moves too fast.",
      content: `
        <p>In today's hyper-connected world, finding stillness feels increasingly difficult. The constant barrage of notifications, deadlines, and social pressures can create a perfect storm for anxiety to flourish.</p>
        
        <p>The modern professional faces unique challenges:</p>
        <ul>
          <li>Information overload from multiple digital channels</li>
          <li>Blurred boundaries between work and personal life</li>
          <li>Competitive environments that foster comparison</li>
          <li>The paradox of connection in a disconnected society</li>
        </ul>
        
        <p>What we often forget is that our nervous systems weren't designed for this level of constant stimulation. Our ancient fight-or-flight responses, once reserved for physical danger, now activate when we receive a critical email or scroll through perfected social media lives.</p>
        
        <h3>Reclaiming Your Center</h3>
        
        <p>Finding balance requires conscious effort in creating sacred boundaries around your energy and attention:</p>
        
        <p><strong>1. Digital Boundaries</strong> - Establish tech-free zones and times in your daily life. The bedroom, meal times, and the first hour after waking can become sanctuaries from digital distraction.</p>
        
        <p><strong>2. Nervous System Regulation</strong> - Incorporate practices that activate your parasympathetic nervous system daily. Deep breathing exercises, particularly extending the exhale longer than the inhale, signals to your body that you're safe.</p>
        
        <p><strong>3. Physical Intelligence</strong> - Your body holds profound wisdom. Regular movement—whether gentle yoga, walking in nature, or more vigorous exercise—helps process stress hormones and release tension held in the physical form.</p>
        
        <p><strong>4. Sacred Pauses</strong> - Insert micro-moments of presence throughout your day. Even 30 seconds of conscious breathing or sensory awareness can reset your nervous system and bring you back to center.</p>
        
        <p>Remember that centering isn't about eliminating anxiety completely—it's about creating a strong enough internal foundation that you can weather emotional storms without being uprooted.</p>
        
        <p>In the words of meditation teacher Jack Kornfield: "You cannot stop the waves, but you can learn to surf."</p>
      `,
      category: "Mindfulness",
      author: "Dr. Eliza Morgan",
      date: "May 25, 2025",
      readTime: "7 min read",
      image: "/mystical-portal-path.jpg",
      featured: true
    },
    {
      id: "breathing-techniques",
      title: "5 Breathing Techniques to Calm Your Mind",
      excerpt: "Ancient breathing practices that can transform your anxiety response in minutes.",
      content: `
        <p>The breath is our most accessible tool for transformation. It requires no equipment, can be practiced anywhere, and directly influences our autonomic nervous system—the system responsible for our fight-or-flight and rest-and-digest responses.</p>
        
        <p>Here are five potent breathing techniques from various wisdom traditions that can help you shift from anxiety to calm:</p>
        
        <h3>1. Extended Exhale Breathing</h3>
        
        <p>This simple technique activates your parasympathetic nervous system, signaling to your body that you're safe.</p>
        
        <p><strong>Practice:</strong> Inhale for a count of 4, then exhale slowly for a count of 6-8. The extended exhale is key to this practice. Continue for 2-3 minutes, gradually extending the exhale further if comfortable.</p>
        
        <h3>2. Alternate Nostril Breathing (Nadi Shodhana)</h3>
        
        <p>This yogic practice balances the hemispheres of the brain and brings equilibrium to your nervous system.</p>
        
        <p><strong>Practice:</strong> Using your right hand, fold your index and middle fingers toward your palm. Close your right nostril with your thumb and inhale through your left nostril. At the peak of your inhalation, close your left nostril with your ring finger, release your thumb, and exhale through your right nostril. Inhale through the right, close it, and exhale through the left. This is one complete cycle. Continue for 5-10 cycles.</p>
        
        <h3>3. 4-7-8 Breath</h3>
        
        <p>Developed by Dr. Andrew Weil, this practice acts as a natural tranquilizer for the nervous system.</p>
        
        <p><strong>Practice:</strong> Inhale quietly through your nose for a count of 4. Hold your breath for a count of 7. Exhale completely through your mouth, making a whoosh sound, for a count of 8. Repeat this cycle four times.</p>
        
        <h3>4. Box Breathing</h3>
        
        <p>Used by Navy SEALs to remain calm under extreme pressure, this technique creates balance and equanimity.</p>
        
        <p><strong>Practice:</strong> Inhale for 4 counts, hold for 4 counts, exhale for 4 counts, and hold for 4 counts. Visualize tracing a square with your breath. Continue for 5-10 cycles.</p>
        
        <h3>5. Humming Bee Breath (Bhramari)</h3>
        
        <p>This practice creates a soothing vibration that calms the mind and releases tension in the forehead—an area where we often hold stress.</p>
        
        <p><strong>Practice:</strong> Close your eyes. Place your thumbs gently on the cartilage between your cheek and ear, with your fingers resting lightly on your closed eyes. Inhale deeply through your nose, then exhale while making a humming sound like a bee. Feel the vibration throughout your head. Repeat 5-7 times.</p>
        
        <p>For any of these practices, find a comfortable seated position with your spine relatively straight. Begin with just 2-3 minutes and gradually extend your practice as it feels beneficial.</p>
        
        <p>Remember that breathing practices are powerful—if you feel lightheaded or uncomfortable at any point, return to your normal breathing pattern and try again with less intensity.</p>
        
        <p>The true magic of these practices comes through consistency. Even 5 minutes daily will create more lasting change than an hour practiced occasionally.</p>
      `,
      category: "Practices",
      author: "Sara Lin",
      date: "May 15, 2025",
      readTime: "5 min read",
      image: "/path-illustration.jpg"
    },
    {
      id: "journal-prompts",
      title: "Transformative Journal Prompts for Anxiety",
      excerpt: "Harness the power of writing to understand and transform your relationship with anxiety.",
      content: `
        <p>The blank page can become a powerful ally in your journey with anxiety. Through journaling, we externalize our internal experiences, creating just enough distance to gain perspective while still honoring our emotions.</p>
        
        <p>Below are journal prompts designed to help you explore different facets of your anxiety experience. Try approaching these with curiosity rather than judgment—there are no right or wrong answers, only insights that can guide your path forward.</p>
        
        <h3>Understanding Your Anxiety</h3>
        
        <ul>
          <li>If my anxiety could speak, what would it say it needs from me?</li>
          <li>What does anxiety feel like in my body? Where do I feel it most intensely?</li>
          <li>What situations reliably trigger my anxiety? What patterns do I notice?</li>
          <li>If I imagine my anxiety as a character or creature, what does it look like? What qualities does it have?</li>
          <li>What message might my anxiety be trying to communicate?</li>
        </ul>
        
        <h3>Reframing and Perspective</h3>
        
        <ul>
          <li>What strengths has navigating anxiety helped me develop?</li>
          <li>What would I say to a friend experiencing exactly what I'm experiencing right now?</li>
          <li>In what ways has anxiety been trying to protect me?</li>
          <li>How might this challenging experience be serving my growth?</li>
          <li>What assumptions am I making about this situation that might not be entirely accurate?</li>
        </ul>
        
        <h3>Cultivating Resources</h3>
        
        <ul>
          <li>What has helped me move through anxiety in the past?</li>
          <li>Who or what makes me feel safe and grounded?</li>
          <li>What are three small actions I can take today to support my nervous system?</li>
          <li>What would a day designed around my wellbeing look like?</li>
          <li>What boundaries might I need to set or reinforce in my life?</li>
        </ul>
        
        <h3>Tips for Transformative Journaling:</h3>
        
        <p><strong>Create safety:</strong> Choose a private time and space where you won't be interrupted.</p>
        
        <p><strong>Begin with grounding:</strong> Take a few deep breaths or place a hand on your heart before writing.</p>
        
        <p><strong>Write unfiltered:</strong> Let your thoughts flow without editing or judging them.</p>
        
        <p><strong>Use your senses:</strong> Include details about what you see, hear, feel, taste, and smell.</p>
        
        <p><strong>Follow the energy:</strong> If you feel drawn to explore something that seems unrelated, follow that thread—your unconscious mind may be making important connections.</p>
        
        <p><strong>Close with compassion:</strong> End your journaling session by writing a few kind words to yourself.</p>
        
        <p>Remember that transformation rarely happens in a single moment of insight. It's the consistent practice of turning toward our experience with curiosity and compassion that gradually changes our relationship with anxiety.</p>
        
        <p>As author Natalie Goldberg suggests: "Write what disturbs you, what you fear, what you have not been willing to speak about. Be willing to be split open."</p>
      `,
      category: "Practices",
      author: "Dr. Marcus Wei",
      date: "May 2, 2025",
      readTime: "6 min read",
      image: "/freedom-illustration.jpg"
    },
    {
      id: "neuroscience-anxiety",
      title: "The Neuroscience of Anxiety and Practical Implications",
      excerpt: "Understanding what happens in your brain during anxiety can empower your response.",
      content: `
        <p>Our understanding of the anxious brain has evolved dramatically in recent decades. Modern neuroscience gives us a window into the complex mechanisms that drive anxiety—and more importantly, how we might intervene to create greater ease and regulation.</p>
        
        <h3>The Anxious Brain: Key Players</h3>
        
        <p><strong>Amygdala:</strong> Often called the brain's alarm system, this almond-shaped structure activates our threat response. In anxiety, the amygdala becomes hypervigilant, detecting potential danger even in neutral situations.</p>
        
        <p><strong>Prefrontal Cortex:</strong> This area handles executive function and can help regulate emotional responses. During anxiety, activity in the prefrontal cortex often decreases, making it harder to think clearly or perspective-take.</p>
        
        <p><strong>Hippocampus:</strong> Responsible for contextualizing experiences and forming memories, the hippocampus helps distinguish between truly dangerous situations and those that just remind us of past threats.</p>
        
        <p><strong>HPA Axis:</strong> This communication network between brain and body coordinates our stress response, releasing cortisol and other hormones that prepare us for perceived danger.</p>
        
        <h3>Neural Pathways and Plasticity</h3>
        
        <p>One of the most empowering discoveries in neuroscience is neuroplasticity—the brain's ability to reorganize itself by forming new neural connections. This means that anxiety pathways that have been reinforced over time can be rewired through consistent practice.</p>
        
        <p>When we repeatedly respond to a trigger with anxiety, we strengthen that neural pathway, making it more automatic. However, when we introduce new responses to the same trigger, we begin forming alternative pathways. Over time, these new pathways can become the default.</p>
        
        <h3>Practical Applications</h3>
        
        <p><strong>1. Mindful Exposure</strong> - Gradually exposing yourself to anxiety triggers while maintaining presence and regulation helps retrain the amygdala to recognize these situations as safe.</p>
        
        <p><strong>2. Cognitive Reframing</strong> - Actively challenging catastrophic thinking engages the prefrontal cortex, strengthening its regulatory capacity over the emotional brain.</p>
        
        <p><strong>3. Interoception Training</strong> - Practices that enhance your ability to notice and interpret body sensations can improve regulation of the autonomic nervous system.</p>
        
        <p><strong>4. Memory Reconsolidation</strong> - Bring awareness to memories associated with anxiety while creating a contradictory emotional experience (like safety or competence) to update the emotional meaning of the memory.</p>
        
        <p><strong>5. Vagus Nerve Stimulation</strong> - Activities that tone the vagus nerve (like deep breathing, cold exposure, or humming) strengthen your parasympathetic nervous system, enhancing your resilience to stress.</p>
        
        <h3>The Social Brain and Co-Regulation</h3>
        
        <p>Humans are wired for connection, and our nervous systems are designed to regulate in relationship with others. Research shows that the presence of a safe, calm person can literally help regulate our physiology.</p>
        
        <p>This explains why isolation often worsens anxiety while meaningful connection can alleviate it. Finding communities, therapists, or trusted friends who understand anxiety creates opportunities for co-regulation that support your brain's healing process.</p>
        
        <p>Remember that your brain is constantly adapting based on your experiences. Each time you practice a regulation skill or challenge an anxious thought pattern, you're literally reshaping your brain toward greater resilience and ease.</p>
      `,
      category: "Education",
      author: "Dr. Nora Kazemi",
      date: "April 28, 2025",
      readTime: "8 min read",
      image: "/profile-silhouette.jpg"
    },
    {
      id: "ancestral-wisdom-anxiety",
      title: "Ancestral Wisdom for Modern Anxiety",
      excerpt: "Ancient practices that remain powerfully relevant for today's anxiety challenges.",
      content: `
        <p>Long before modern psychology named and categorized anxiety disorders, cultures throughout history developed sophisticated systems for understanding and working with states of fear, worry, and nervous system dysregulation.</p>
        
        <p>These ancestral wisdom traditions offer perspectives and practices that complement contemporary approaches to anxiety—often addressing dimensions of human experience that modern frameworks might overlook.</p>
        
        <h3>Indigenous Perspectives: Connection and Reciprocity</h3>
        
        <p>Many indigenous traditions view anxiety and other forms of suffering through the lens of disconnection—from nature, community, and purpose. These traditions emphasize:</p>
        
        <ul>
          <li><strong>Earth Connection</strong> - Regular, direct contact with the natural world as fundamental to wellbeing</li>
          <li><strong>Ceremony</strong> - Rituals that mark transitions and create meaningful containers for difficult emotions</li>
          <li><strong>Community Healing</strong> - The understanding that healing happens in relationship, not in isolation</li>
        </ul>
        
        <p><strong>Practice:</strong> Spend time barefoot on the earth, ideally in a natural setting. Notice the sensations of support beneath you and the exchange of energy between your body and the ground. Indigenous teachers often recommend at least 20 minutes of this "earthing" practice daily.</p>
        
        <h3>Eastern Philosophies: Mind Training and Observation</h3>
        
        <p>Buddhist and Taoist traditions offer sophisticated frameworks for working with difficult mind states, including:</p>
        
        <ul>
          <li><strong>Non-identification</strong> - Learning to observe thoughts and emotions without becoming them</li>
          <li><strong>Impermanence</strong> - Recognizing the ever-changing nature of all experiences, including anxiety</li>
          <li><strong>Middle Path</strong> - Finding balance between opposing forces rather than eliminating discomfort</li>
        </ul>
        
        <p><strong>Practice:</strong> When anxiety arises, mentally note "thinking, thinking" or "feeling, feeling" to create some space between yourself and the experience. Then bring attention to something concrete and present—the sensation of your feet on the floor or the movement of your breath.</p>
        
        <h3>Traditional Chinese Medicine: Energy Systems</h3>
        
        <p>TCM views anxiety as an imbalance in the body's energy system, often involving:</p>
        
        <ul>
          <li><strong>Heart-Kidney Balance</strong> - The relationship between fire (heart) and water (kidneys) elements</li>
          <li><strong>Spleen Qi</strong> - The energy system related to processing both food and thoughts</li>
          <li><strong>Liver Qi Stagnation</strong> - Blocked energy resulting from unexpressed emotions</li>
        </ul>
        
        <p><strong>Practice:</strong> To move stagnant liver qi, try this qigong exercise: Stand with feet shoulder-width apart, knees slightly bent. Raise your arms out to the sides and up, then twist gently from the waist to one side while bringing arms down in a gathering motion. Repeat on the other side. Continue for 2-3 minutes, breathing deeply.</p>
        
        <h3>Mystical Traditions: The Spiritual Dimension</h3>
        
        <p>Various mystical paths—from Sufism to Kabbalah to contemplative Christianity—frame anxiety through spiritual lenses:</p>
        
        <ul>
          <li><strong>Dark Night Experiences</strong> - Recognizing anxiety as potentially part of spiritual transformation</li>
          <li><strong>Surrender</strong> - Releasing the illusion of control to a higher power or deeper wisdom</li>
          <li><strong>Faith</strong> - Cultivating trust in the unfolding of life, even amid uncertainty</li>
        </ul>
        
        <p><strong>Practice:</strong> Create a simple altar or sacred space in your home with objects that represent wisdom, support, and meaning to you. Spend a few minutes each day sitting before this space, perhaps lighting a candle and setting an intention to open to guidance beyond your conscious understanding.</p>
        
        <p>In integrating these ancestral approaches with modern understanding, we create a more complete picture of anxiety and its resolution—honoring both the science of the brain and the wisdom of the heart, both individual psychology and collective ways of knowing.</p>
        
        <p>As the Sufi poet Rumi reminds us: "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it."</p>
      `,
      category: "Spiritual",
      author: "Elena Westbrook",
      date: "April 15, 2025",
      readTime: "9 min read",
      image: "/freedom-illustration.jpg"
    }
  ];
  
  // Helper function to parse dates for comparison
  const parseDate = (dateString: string) => {
    const [month, day, year] = dateString.split(' ');
    const monthMap: Record<string, number> = {
      'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
      'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11
    };
    return new Date(parseInt(year), monthMap[month], parseInt(day));
  };
  
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return parseDate(b.date).getTime() - parseDate(a.date).getTime();
  });
  
  // Get the latest post
  const latestPost = sortedPosts[0];
  
  // Filter and search functionality
  const filteredPosts = sortedPosts
    .filter(post => filter === 'all' || post.category.toLowerCase() === filter.toLowerCase())
    .filter(post => {
      if (searchQuery.trim() === '') return true;
      const query = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      );
    });
  
  // Create stars effect for the magical background
  const [stars, setStars] = useState<Array<{id: number, size: number, top: string, left: string, delay: number}>>([]);
  
  useEffect(() => {
    const generatedStars = [];
    const starCount = 20;
    
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
  
  const categories = ['All', 'Mindfulness', 'Practices', 'Spiritual'];
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Latest blog post component (larger size)
  const LatestBlogPost = ({ post }: { post: BlogPost }) => (
    <div 
      className="block group cursor-pointer w-full h-full"
      onClick={() => onSelectBlogPost(post.id)}
    >
      <div className="col-span-1 md:col-span-2 bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 transition-all duration-500 flex flex-col md:flex-row group-hover:shadow-xl relative animate-glow">
        <div className="md:w-1/2 h-60 md:h-auto bg-[#0C363B]/5 relative overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-[#0A7373] text-white px-3 py-1 rounded-md text-sm">
            Latest
          </div>
        </div>
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col">
          <div className="flex items-center mb-2">
            <span className="text-sm text-[#0A7373] font-medium">{post.category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h3 className="text-2xl text-[#314E52] mb-3 font-medium">{post.title}</h3>
          <p className="text-gray-700 mb-4">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#0A7373]/10 flex items-center justify-center text-[#0A7373] mr-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <span className="text-sm text-[#314E52]">{post.author}</span>
                <span className="mx-1 text-gray-300">•</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            </div>
            <div className="text-[#86725B] text-sm flex items-center">
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transform transition-transform group-hover:translate-x-1">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient effect on hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373] via-[#B19777] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </div>
    </div>
  );
  
  // Regular blog post component with fixed height
  const RegularBlogPost = ({ post }: { post: BlogPost }) => (
    <div 
      className="block group cursor-pointer w-full h-full"
      onClick={() => onSelectBlogPost(post.id)}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-gray-300 transition-all duration-500 h-[460px] flex flex-col group-hover:shadow-xl relative animate-glow">
        {/* Fixed height image container */}
        <div className="h-48 bg-[#0C363B]/5 relative overflow-hidden">
          <ImageWithFallback
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Content container with fixed padding and flex column layout */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category and read time */}
          <div className="flex items-center mb-2">
            <span className="text-sm text-[#0A7373] font-medium">{post.category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          
          {/* Fixed height title area with overflow handling */}
          <div className="h-[60px] mb-2">
            <h3 className="text-xl text-[#314E52] font-medium line-clamp-2">{post.title}</h3>
          </div>
          
          {/* Fixed height excerpt area with truncation */}
          <div className="h-[80px] mb-4">
            <p className="text-gray-700 text-sm line-clamp-4">{post.excerpt}</p>
          </div>
          
          {/* Author info at the bottom */}
          <div className="mt-auto pt-3 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-7 h-7 rounded-full bg-[#0A7373]/10 flex items-center justify-center text-[#0A7373] mr-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xs text-[#314E52]">{post.author}</span>
            </div>
            <div className="text-[#86725B] text-sm flex items-center">
              Read More
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transform transition-transform group-hover:translate-x-1">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient effect on hover */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373] via-[#B19777] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
      </div>
    </div>
  );
  
  return (
    <div className="relative pt-32 pb-16 min-h-screen bg-[#F5EFD9]/40 bg-[rgba(245,239,217,1)] bg-[rgba(255,252,241,1)]" ref={pageRef}>
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
      
      {/* Blog Header */}
      <div className="container mx-auto px-4">
        <AnimatedContainer animation="appear" className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl text-[#314E52] mb-6 relative inline-block">
            Insights
            
            {/* Magical Elements for Title */}
            <div className="absolute -top-6 -left-8 w-12 h-12 opacity-60">
              <MagicSymbol type="star" size={48} position="absolute" className="text-[#B19777] animate-twinkle" />
            </div>
            <div className="absolute -bottom-2 -right-6 w-8 h-8 opacity-40">
              <MagicSymbol type="sparkle" size={32} position="absolute" className="text-[#0A7373] animate-twinkle" style={{ animationDelay: '1.5s' }} />
            </div>
          </h1>
          
          <p className="text-gray-700 text-lg mt-6">
            Explore our collection of articles and insights designed to support your journey with anxiety.
            Find practical tips, deeper understanding, and transformative perspectives.
          </p>
        </AnimatedContainer>
        
        {/* Search and Filter Controls */}
        <AnimatedContainer animation="appear" delay={200} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Search Field - Left Aligned */}
            <div className="w-full max-w-md">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0A7373] bg-white/80"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#314E52]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Filter Buttons - Right Aligned */}
            <div className="flex justify-end">
              <div className="inline-flex flex-col md:flex-row border-2 border-gray-300 rounded-lg overflow-hidden bg-white/80 shadow-lg">
              {categories.map((category, index) => (
                <button 
                  key={category}
                  onClick={() => setFilter(category.toLowerCase())}
                  className={`px-4 sm:px-5 py-3 transition-all duration-300 relative overflow-hidden text-sm sm:text-base ${
                    index < categories.length - 1 ? 'border-r border-gray-300 md:border-r-2 md:border-r-gray-300 border-b md:border-b-0 border-b-gray-300' : ''
                  } ${
                    filter === category.toLowerCase() || (filter === 'all' && category === 'All')
                      ? 'bg-[#0A7373] text-white' 
                      : 'text-[#314E52] hover:bg-white/100'
                  }`}
                >
                  {/* Magical element for active filter - matching ServicesPage pattern */}
                  {(filter === category.toLowerCase() || (filter === 'all' && category === 'All')) && (
                    <span className="absolute inset-0 bg-[url('/path-illustration.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay"></span>
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
              </div>
            </div>
          </div>
        </AnimatedContainer>
        
        {/* Blog Posts Layout */}
        {filteredPosts.length > 0 ? (
          <>
            {/* Display latest post first (if it's in the filtered posts) */}
            {filteredPosts.some(post => post.id === latestPost.id) && (
              <AnimatedContainer animation="rise" delay={300} className="mb-8">
                <LatestBlogPost post={latestPost} />
              </AnimatedContainer>
            )}
            
            {/* Display all other posts in a grid */}
            <AnimatedGrid 
              animation="rise"
              baseDelay={400}
              staggerDelay="diagonal"
              cols={3}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              itemClassName="w-full h-full"
            >
              {filteredPosts
                .filter(post => post.id !== latestPost.id)
                .map((post) => (
                  <RegularBlogPost key={post.id} post={post} />
                ))
              }
            </AnimatedGrid>
          </>
        ) : (
          <AnimatedContainer animation="expand" className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 opacity-70 relative">
              <MagicSymbol type="square" size={60} position="relative" className="animate-float text-[#314E52]" />
              {/* Additional magical elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10">
                <MagicSymbol type="circle" size={40} position="absolute" className="animate-float text-[#B19777]" style={{ animationDelay: '1s' }} />
              </div>
            </div>
            <h3 className="text-2xl mb-2 text-[#314E52]">
              No articles found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button 
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-6 px-6 py-2 bg-[#0A7373] text-white rounded-lg hover:bg-[#0A7373]/80 transition-colors"
            >
              View all articles
            </button>
          </AnimatedContainer>
        )}
      </div>
    </div>
  );
}