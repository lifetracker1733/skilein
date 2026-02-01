export type Category = "Finance" | "Web3" | "Skill" | "Crypto";

export interface Tool {
  name: string;
  url: string;
  icon?: string;
}

export interface AppLink {
  id: string;
  app_name: string;
  app_url: string;
  icon_name: string;
}

export interface CurriculumPhase {
  phaseTitle: string;
  topics: string[];
  videoID: string;
  checklist: string[];
  ai_prompt?: string;
  app_links?: AppLink[];
}

export interface HallOfFameEntry {
  name: string;
  income: string;
  rank: number;
  bio?: string;
  sources?: string[];
  avatar_url?: string;
}

export interface CourseStats {
  market: string;
  growth: string;
  success_rate: string;
  avg_income?: string;
}

export interface Course {
  id: string;
  title: string;
  category: Category;
  description: string;
  thumbnail_url: string;
  instructor: string;
  price: number | null;
  outcomes: string[];
  duration: string;
  level: string;
  tools: Tool[];
  curriculum: CurriculumPhase[];
  stats: CourseStats;
  hall_of_fame: HallOfFameEntry[];
  created_at: string;
}

// Helper function to generate YouTube thumbnail URL
export const getYouTubeThumbnail = (videoID: string) => 
  `https://i.ytimg.com/vi/${videoID}/maxresdefault.jpg`;

export const mockCourses: Course[] = [
  {
    id: "dropshipping",
    title: "Dropshipping: The Winning Store",
    category: "Skill",
    description: "Complete A-Z guide: Finding products, Shopify setup, and viral marketing.",
    thumbnail_url: getYouTubeThumbnail("KC4cdxyiTIQ"),
    instructor: "Santrel Media",
    price: null,
    outcomes: [
      "Find winning products before they trend",
      "Set up automated fulfillment systems",
      "Run profitable Facebook & TikTok ads",
      "Scale to $100k/month revenue"
    ],
    duration: "8 hours",
    level: "Beginner",
    tools: [
      { name: "Shopify", url: "https://shopify.com", icon: "shopping-bag" }
    ],
    stats: {
      market: "$514B",
      growth: "23%",
      success_rate: "High",
      avg_income: "$12k/mo"
    },
    hall_of_fame: [
      { 
        name: "Harry Coleman", 
        income: "$1M/mo", 
        rank: 1,
        bio: "The 'Beast of Ecom'. Famous for general store scaling strategies and Facebook Ads mastery.",
        sources: ["General Stores", "Facebook Ads", "Scaling"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      },
      { 
        name: "Biaheza", 
        income: "$340k/mo", 
        rank: 2,
        bio: "YouTube dropshipping educator who built multiple 7-figure stores using viral products.",
        sources: ["YouTube", "Dropshipping", "Content"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      },
      { 
        name: "Sebastian Esqueda", 
        income: "$500k/mo", 
        rank: 3,
        bio: "TikTok organic mastermind. Built multiple 7-figure stores using viral TikTok content.",
        sources: ["TikTok", "Organic Traffic", "Branding"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Phase 1: Finding Winners",
        topics: ["The Arbitrage Opportunity", "Product Research Methods", "Viral Factor Analysis"],
        videoID: "KC4cdxyiTIQ",
        checklist: [
          "Create TikTok Ad Account",
          "Scroll TikTok 'Burner' Account",
          "Identify Viral Factor",
          "Research competition on AliExpress"
        ],
        ai_prompt: "Act as an e-commerce strategist. Explain the dropshipping business model and help me find winning products using trend analysis and social proof indicators.",
        app_links: [
          { id: "1", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" }
        ]
      }
    ],
    created_at: "2024-01-15"
  },
  {
    id: "vibecoding",
    title: "Vibe Coding: No-Code Blueprint",
    category: "Skill",
    description: "How to build software without knowing how to code using AI tools.",
    thumbnail_url: getYouTubeThumbnail("bTpQ93E-dKE"),
    instructor: "FreeCodeCamp",
    price: null,
    outcomes: [
      "Build full-stack web applications with AI",
      "Create mobile apps without traditional coding",
      "Automate workflows with no-code tools",
      "Launch SaaS products in weeks, not months"
    ],
    duration: "4 hours",
    level: "Beginner",
    tools: [
      { name: "Cursor", url: "https://cursor.com", icon: "code" }
    ],
    stats: {
      market: "$34B",
      growth: "900%",
      success_rate: "Fast",
      avg_income: "$18k/mo"
    },
    hall_of_fame: [
      { 
        name: "Pieter Levels", 
        income: "$300k/mo", 
        rank: 1,
        bio: "Solo-dev legend. Built PhotoAI, InteriorAI, and NomadList. Pioneer of the 'ship fast' movement.",
        sources: ["SaaS", "AI Tools", "Indie Hacking"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      },
      { 
        name: "Danny Postma", 
        income: "$150k/mo", 
        rank: 2,
        bio: "AI product builder. Created HeadshotPro and multiple viral AI tools with Vibe Coding approach.",
        sources: ["AI Products", "Marketing", "Design"],
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      },
      { 
        name: "Marc Lou", 
        income: "$100k/mo", 
        rank: 3,
        bio: "Built ShipFast and taught thousands to launch products in days instead of months.",
        sources: ["Boilerplates", "Teaching", "SaaS"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Module 1: Setup & Context",
        topics: ["Installing Cursor", "Natural Language Programming", "Setting AI Rules"],
        videoID: "bTpQ93E-dKE",
        checklist: [
          "Install Cursor",
          "Index Codebase (Ctrl+L)",
          "Set Rules for AI",
          "Connect to GitHub"
        ],
        ai_prompt: "Act as a Vibe Coding mentor. Explain how to set up Cursor AI and start building apps using natural language.",
        app_links: [
          { id: "1", app_name: "Cursor", app_url: "https://www.cursor.com", icon_name: "Bot" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "prompt",
    title: "Prompt Engineering",
    category: "Skill",
    description: "Master the art of crafting effective prompts for AI models.",
    thumbnail_url: getYouTubeThumbnail("ME-hG955Ovo"),
    instructor: "Simplilearn",
    price: null,
    outcomes: [
      "Write effective prompts for any AI model",
      "Understand prompt patterns and techniques",
      "Optimize AI outputs for your needs",
      "Build AI-powered workflows"
    ],
    duration: "3 hours",
    level: "Beginner",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com", icon: "message-square" }
    ],
    stats: {
      market: "High",
      growth: "500%",
      success_rate: "Top 1%",
      avg_income: "$15k/mo"
    },
    hall_of_fame: [
      { 
        name: "AI Experts", 
        income: "$50k/mo", 
        rank: 1,
        bio: "Prompt engineers working with Fortune 500 companies to optimize AI workflows.",
        sources: ["Consulting", "Enterprise AI"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Fundamentals of Prompting",
        topics: ["Prompt Structure", "Context Setting", "Output Formatting"],
        videoID: "ME-hG955Ovo",
        checklist: [
          "Create ChatGPT Account",
          "Learn Prompt Patterns",
          "Practice Chain-of-Thought",
          "Build Custom Prompts"
        ],
        ai_prompt: "Act as a prompt engineering expert. Teach me how to craft effective prompts for AI models.",
        app_links: [
          { id: "1", app_name: "ChatGPT", app_url: "https://chat.openai.com", icon_name: "Bot" }
        ]
      }
    ],
    created_at: "2024-02-10"
  },
  {
    id: "crypto",
    title: "Crypto Trading Blueprint",
    category: "Crypto",
    description: "Technical analysis and risk management for the crypto markets.",
    thumbnail_url: getYouTubeThumbnail("1YyAzVmP9xQ"),
    instructor: "Binance Academy",
    price: null,
    outcomes: [
      "Set up secure hot and cold wallets",
      "Execute trades on major exchanges",
      "Identify profitable market trends",
      "Implement DeFi strategies"
    ],
    duration: "7 hours",
    level: "Intermediate",
    tools: [
      { name: "Binance", url: "https://binance.com", icon: "coins" }
    ],
    stats: {
      market: "$3T",
      growth: "Volatile",
      success_rate: "High Risk",
      avg_income: "$20k/mo"
    },
    hall_of_fame: [
      { 
        name: "Brian Armstrong", 
        income: "$1B+", 
        rank: 1,
        bio: "CEO of Coinbase. Built the largest US crypto exchange.",
        sources: ["Exchange", "Crypto Infrastructure"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "CZ (Binance)", 
        income: "Legacy", 
        rank: 2,
        bio: "Founder of Binance. Created the world's largest crypto exchange by volume.",
        sources: ["Exchange", "BNB Ecosystem"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Trading Strategy",
        topics: ["Swing Trading", "Cycle Analysis", "Altcoin Selection"],
        videoID: "1YyAzVmP9xQ",
        checklist: [
          "Setup Wallet",
          "Understand Market Cap",
          "Risk Management 101",
          "Create Trading Plan"
        ],
        ai_prompt: "Act as a crypto trading analyst. Provide technical analysis and trading strategies.",
        app_links: [
          { id: "1", app_name: "Binance", app_url: "https://www.binance.com", icon_name: "BarChart3" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "dropcoursing",
    title: "Drop Coursing: Digital Products",
    category: "Skill",
    description: "Build and sell digital products and online courses for passive income.",
    thumbnail_url: getYouTubeThumbnail("6bFElYOaBY4"),
    instructor: "Iman Gadzhi",
    price: null,
    outcomes: [
      "Create high-value digital products",
      "Build automated sales funnels",
      "Scale to 6-figure course business",
      "Master course marketing"
    ],
    duration: "6 hours",
    level: "Intermediate",
    tools: [
      { name: "Teachable", url: "https://teachable.com", icon: "book" }
    ],
    stats: {
      market: "$300B",
      growth: "35%",
      success_rate: "High Margin",
      avg_income: "$25k/mo"
    },
    hall_of_fame: [
      { 
        name: "Iman Gadzhi", 
        income: "$10M/yr", 
        rank: 1,
        bio: "Built multiple education businesses and agencies by age 22.",
        sources: ["Education", "SMMA", "Courses"],
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      },
      { 
        name: "Course Creators", 
        income: "$50k/mo", 
        rank: 2,
        bio: "Top course creators building passive income through digital education.",
        sources: ["Courses", "Coaching"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Course Creation Framework",
        topics: ["Finding Your Niche", "Content Structure", "Sales Funnels"],
        videoID: "6bFElYOaBY4",
        checklist: [
          "Identify Your Expertise",
          "Plan Course Outline",
          "Setup Teachable Account",
          "Create Launch Strategy"
        ],
        ai_prompt: "Act as a course creation expert. Help me plan and structure my online course.",
        app_links: [
          { id: "1", app_name: "Teachable", app_url: "https://teachable.com", icon_name: "Book" }
        ]
      }
    ],
    created_at: "2024-02-20"
  },
  {
    id: "ads",
    title: "Ad Management (Meta/TikTok)",
    category: "Skill",
    description: "Master paid advertising on Meta and TikTok platforms.",
    thumbnail_url: getYouTubeThumbnail("1v3a9j3g-yI"),
    instructor: "HubSpot Marketing",
    price: null,
    outcomes: [
      "Create high-converting ad campaigns",
      "Master Meta Ads Manager",
      "Run profitable TikTok ads",
      "Scale campaigns profitably"
    ],
    duration: "5 hours",
    level: "Intermediate",
    tools: [
      { name: "Meta Ads", url: "https://business.facebook.com", icon: "target" }
    ],
    stats: {
      market: "$700B",
      growth: "15%",
      success_rate: "High",
      avg_income: "$18k/mo"
    },
    hall_of_fame: [
      { 
        name: "Media Buyers", 
        income: "$100k/mo", 
        rank: 1,
        bio: "Top media buyers managing millions in ad spend for major brands.",
        sources: ["Media Buying", "Performance Marketing"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Meta Ads Mastery",
        topics: ["Campaign Structure", "Audience Targeting", "Creative Strategy"],
        videoID: "1v3a9j3g-yI",
        checklist: [
          "Setup Meta Business Manager",
          "Create Pixel",
          "Build First Campaign",
          "Analyze Metrics"
        ],
        ai_prompt: "Act as a paid advertising expert. Help me create effective Meta and TikTok ad campaigns.",
        app_links: [
          { id: "1", app_name: "Meta Ads", app_url: "https://business.facebook.com", icon_name: "Target" }
        ]
      }
    ],
    created_at: "2024-02-25"
  },
  {
    id: "aicontent",
    title: "Content Creation Using AI",
    category: "Skill",
    description: "Create viral content using AI tools and automation.",
    thumbnail_url: getYouTubeThumbnail("4vT35gT8jGQ"),
    instructor: "Think Media",
    price: null,
    outcomes: [
      "Create content 10x faster with AI",
      "Build a content strategy that scales",
      "Master AI video and image tools",
      "Grow your audience organically"
    ],
    duration: "4 hours",
    level: "Beginner",
    tools: [
      { name: "CapCut", url: "https://capcut.com", icon: "video" }
    ],
    stats: {
      market: "Viral",
      growth: "200%",
      success_rate: "Creator Econ",
      avg_income: "$15k/mo"
    },
    hall_of_fame: [
      { 
        name: "Think Media", 
        income: "$500k/yr", 
        rank: 1,
        bio: "YouTube education channel helping creators grow with proven strategies.",
        sources: ["YouTube", "Content Strategy"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "AI Creators", 
        income: "$30k/mo", 
        rank: 2,
        bio: "Content creators leveraging AI to produce viral content at scale.",
        sources: ["AI Content", "Automation"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "AI Content Framework",
        topics: ["AI Writing Tools", "AI Video Creation", "Content Automation"],
        videoID: "4vT35gT8jGQ",
        checklist: [
          "Setup AI Writing Tools",
          "Learn Video AI Tools",
          "Create Content Calendar",
          "Build Automation Workflows"
        ],
        ai_prompt: "Act as a content strategy expert. Help me create a viral content plan using AI tools.",
        app_links: [
          { id: "1", app_name: "CapCut", app_url: "https://capcut.com", icon_name: "Video" }
        ]
      }
    ],
    created_at: "2024-03-01"
  },
  {
    id: "prompt_ai",
    title: "Prompt Engineering Using AI",
    category: "Skill",
    description: "Advanced prompt engineering techniques for enterprise applications.",
    thumbnail_url: getYouTubeThumbnail("YiuyO5p5W-g"),
    instructor: "IBM Technology",
    price: null,
    outcomes: [
      "Master advanced prompting techniques",
      "Build enterprise AI applications",
      "Optimize LLM performance",
      "Create AI agents and workflows"
    ],
    duration: "5 hours",
    level: "Advanced",
    tools: [
      { name: "Claude 3", url: "https://claude.ai", icon: "brain" }
    ],
    stats: {
      market: "Enterprise",
      growth: "1000%",
      success_rate: "Advanced",
      avg_income: "$25k/mo"
    },
    hall_of_fame: [
      { 
        name: "AI Engineers", 
        income: "$200k/yr", 
        rank: 1,
        bio: "Enterprise AI engineers building production-grade AI systems.",
        sources: ["Enterprise AI", "LLM Engineering"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Advanced Prompting",
        topics: ["Chain-of-Thought", "Few-Shot Learning", "RAG Systems"],
        videoID: "YiuyO5p5W-g",
        checklist: [
          "Master Advanced Techniques",
          "Build AI Agents",
          "Implement RAG",
          "Deploy Production Systems"
        ],
        ai_prompt: "Act as an AI engineering expert. Help me build advanced AI applications using modern prompting techniques.",
        app_links: [
          { id: "1", app_name: "Claude", app_url: "https://claude.ai", icon_name: "Brain" }
        ]
      }
    ],
    created_at: "2024-03-05"
  }
];

// Helper function to get course by ID
export const getCourseById = (id: string): Course | undefined => {
  return mockCourses.find(course => course.id === id);
};

// Helper function to get related courses (same category, excluding current)
export const getRelatedCourses = (currentId: string, limit: number = 3): Course[] => {
  const currentCourse = getCourseById(currentId);
  if (!currentCourse) return mockCourses.slice(0, limit);
  
  return mockCourses
    .filter(course => course.id !== currentId)
    .slice(0, limit);
};
