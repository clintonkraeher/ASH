import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagicSymbol } from './MagicSymbol';

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

interface BlogPostPageProps {
  blogId: string;
  onNavigateToHome: () => void;
  onNavigateToBlog: () => void;
  onSelectBlogPost: (blogId: string) => void;
}

export function BlogPostPage({ blogId, onNavigateToHome, onNavigateToBlog, onSelectBlogPost }: BlogPostPageProps) {
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [stars, setStars] = useState<Array<{id: number, size: number, top: string, left: string, delay: number}>>([]);
  const pageRef = useRef<HTMLDivElement>(null);
  
  // Blog posts data
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
  
  // Find the current blog post and related posts
  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === blogId);
    if (currentPost) {
      setBlogPost(currentPost);
      
      // Find related posts (same category or other posts if not enough in same category)
      const sameCategory = blogPosts.filter(post => 
        post.id !== blogId && post.category === currentPost.category
      );
      
      // If we don't have enough related posts from the same category, add others
      let related = [...sameCategory];
      if (related.length < 3) {
        const others = blogPosts.filter(post => 
          post.id !== blogId && post.category !== currentPost.category
        );
        related = [...related, ...others].slice(0, 3);
      } else {
        related = related.slice(0, 3);
      }
      
      setRelatedPosts(related);
    }
  }, [blogId]);
  
  // Create stars effect for the magical background
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
  
  // Scroll to top on initial render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);
  
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-10 h-10 border-4 border-[#0A7373] border-t-transparent rounded-full"></div>
      </div>
    );
  }
  
  return (
    <div className="relative pt-24 pb-16 min-h-screen bg-[#F5EFD9]/40" ref={pageRef}>
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
        
        {/* Glowing Orbs */}
        <div className="absolute top-[20%] left-[70%] w-32 h-32 rounded-full bg-gradient-to-r from-[#0A7373]/20 to-transparent blur-xl animate-float"></div>
        <div className="absolute top-[60%] left-[20%] w-40 h-40 rounded-full bg-gradient-to-r from-[#B19777]/20 to-transparent blur-xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
          <div className="flex items-center text-sm">
            <button 
              onClick={onNavigateToHome}
              className="text-[#314E52] hover:text-[#0A7373] transition-colors"
            >
              Home
            </button>
            <span className="mx-2 text-[#314E52]">/</span>
            <button 
              onClick={onNavigateToBlog}
              className="text-[#314E52] hover:text-[#0A7373] transition-colors"
            >
              Blog
            </button>
            <span className="mx-2 text-[#314E52]">/</span>
            <span className="text-[#0A7373]">{blogPost.title}</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          {/* Hero Image & Title */}
          <div className="relative rounded-xl overflow-hidden shadow-xl mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
            <div className="relative h-[40vh] md:h-[50vh]">
              <ImageWithFallback
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Magical overlay */}
              <div className="absolute inset-0 bg-[#0A7373]/10 mix-blend-overlay"></div>
              
              {/* Category badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-[#0A7373] text-white px-3 py-1 rounded-full text-sm font-medium">
                  {blogPost.category}
                </span>
              </div>
              
              {/* Title & Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <h1 className="font-['Cormorant_Garamond'] text-3xl md:text-4xl lg:text-5xl text-white mb-2 leading-tight">
                  {blogPost.title}
                </h1>
                
                <div className="flex flex-wrap items-center mt-3 text-white/90 text-sm gap-4">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="currentColor"/>
                    </svg>
                    <span>{blogPost.author}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{blogPost.readTime}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{blogPost.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="bg-white/90 rounded-xl shadow-lg overflow-hidden backdrop-blur-sm border border-[#B19777]/10 p-6 md:p-8 lg:p-10 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards] relative">
            {/* Magical elements for the content */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373]/50 to-[#B19777]/50"></div>
            
            <div 
              className="prose prose-slate max-w-none prose-p:mb-6 prose-li:mb-2 prose-headings:mt-8 prose-headings:mb-4 text-[#314E52]/90 text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
            
            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-[#314E52]">Tags:</span>
                <span className="bg-[#F5EFD9] text-[#314E52] px-3 py-1 rounded-full text-sm">{blogPost.category}</span>
                <span className="bg-[#F5EFD9] text-[#314E52] px-3 py-1 rounded-full text-sm">Anxiety</span>
                <span className="bg-[#F5EFD9] text-[#314E52] px-3 py-1 rounded-full text-sm">Wellbeing</span>
              </div>
            </div>
            
            {/* Share */}
            <div className="mt-6 flex items-center">
              <span className="text-[#314E52] mr-4">Share:</span>
              <div className="flex space-x-2">
                <button className="w-8 h-8 rounded-full bg-[#0A7373] text-white flex items-center justify-center hover:bg-[#0A7373]/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="currentColor"/>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#0A7373] text-white flex items-center justify-center hover:bg-[#0A7373]/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00029C22.0424 3.67577 20.9821 4.1924 19.86 4.53029C19.2577 3.8378 18.4573 3.34698 17.567 3.12422C16.6767 2.90145 15.7395 2.95749 14.8821 3.28474C14.0247 3.612 13.2884 4.19469 12.773 4.95401C12.2575 5.71332 11.9877 6.61263 12 7.53029V8.53029C10.2426 8.57586 8.50127 8.1861 6.93101 7.39574C5.36074 6.60537 4.01032 5.43893 3 4.00029C3 4.00029 -1 13.0003 8 17.0003C5.94053 18.3983 3.48716 19.0992 1 19.0003C10 24.0003 21 19.0003 21 7.50029C20.9991 7.22174 20.9723 6.94388 20.92 6.67029C21.9406 5.66378 22.6608 4.39322 23 3.00029Z" fill="currentColor"/>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#0A7373] text-white flex items-center justify-center hover:bg-[#0A7373]/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="currentColor"/>
                    <path d="M6 9H2V21H6V9Z" fill="currentColor"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="currentColor"/>
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#0A7373] text-white flex items-center justify-center hover:bg-[#0A7373]/80 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Author Bio */}
          <div className="bg-[#F5EFD9]/70 rounded-xl shadow-md p-6 md:p-8 mt-8 backdrop-blur-sm opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-[#0A7373]/20 flex items-center justify-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#0A7373"/>
                </svg>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-['Cormorant_Garamond'] text-xl mb-2 text-[#314E52]">
                  About {blogPost.author}
                </h3>
                <p className="text-gray-700">
                  {blogPost.author} is a specialist in anxiety management and holistic wellbeing with over 15 years of experience. 
                  Combining evidence-based approaches with ancient wisdom traditions, they help clients transform their relationship with anxiety.
                </p>
              </div>
            </div>
          </div>
          
          {/* Related Posts */}
          <div className="mt-12 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl mb-6 text-[#314E52] relative inline-block">
              <span className="relative z-10">Related Articles</span>
              <div className="absolute w-full h-1 bg-gradient-to-r from-[#0A7373] to-[#B19777] bottom-0 left-0 rounded-full"></div>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div 
                  key={post.id} 
                  className="bg-white/90 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#0A7373] text-white text-xs px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Magical element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0A7373] via-[#B19777] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-['Cormorant_Garamond'] text-lg mb-2 text-[#314E52] transition-colors group-hover:text-[#0A7373] line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <button 
                      onClick={() => onSelectBlogPost(post.id)}
                      className="text-[#0A7373] hover:text-[#0A7373]/70 text-sm flex items-center transition-colors group"
                    >
                      Read more
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 transform transition-transform group-hover:translate-x-1">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Back to Blog */}
          <div className="mt-12 text-center opacity-0 animate-[fadeIn_1s_ease-out_0.8s_forwards]">
            <button 
              onClick={onNavigateToBlog}
              className="inline-flex items-center gap-2 bg-[#0A7373] text-white px-6 py-3 rounded-lg hover:bg-[#0A7373]/90 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to All Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}