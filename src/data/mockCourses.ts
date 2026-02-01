export type Category = "Finance" | "Web3" | "Skill" | "Crypto";

export interface AppLink {
  id: string;
  app_name: string;
  app_url: string;
  icon_name: string;
}

export interface CurriculumTopic {
  phase: string;
  title: string;
  topics: string[];
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  video_url: string;
  description: string;
  ai_prompt: string;
  duration: string;
  order: number;
  app_links: AppLink[];
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
  lessons: Lesson[];
  curriculum?: CurriculumTopic[];
  created_at: string;
}

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Stock Market Mastery",
    category: "Finance",
    description: "Master the art of stock trading. Learn technical analysis, fundamental research, and build a portfolio that generates consistent returns.",
    thumbnail_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    instructor: "Michael Chen",
    price: null,
    outcomes: [
      "Read and interpret stock charts like a pro",
      "Analyze company fundamentals for long-term gains",
      "Build a diversified portfolio",
      "Master risk management strategies"
    ],
    duration: "8 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "1-1",
        course_id: "1",
        title: "Understanding Market Cycles",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Learn to identify bull and bear markets, understand economic indicators, and position your portfolio for different market conditions.",
        ai_prompt: "Act as a senior stock market analyst. I want you to analyze the current market conditions based on these indicators: [PASTE YOUR DATA]. Provide actionable insights on sector allocation, risk levels, and specific stock recommendations with entry/exit points.",
        duration: "45 min",
        order: 1,
        app_links: [
          { id: "1", app_name: "TradingView", app_url: "https://www.tradingview.com", icon_name: "LineChart" },
          { id: "2", app_name: "Yahoo Finance", app_url: "https://finance.yahoo.com", icon_name: "TrendingUp" },
          { id: "3", app_name: "Seeking Alpha", app_url: "https://seekingalpha.com", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-01-15"
  },
  {
    id: "2",
    title: "Dropshipping: The Winning Store",
    category: "Skill",
    description: "Build an e-commerce empire from scratch. Learn product research, store creation, and scaling strategies to build a profitable dropshipping business.",
    thumbnail_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    instructor: "James Wilson",
    price: null,
    outcomes: [
      "Find winning products before they trend",
      "Set up automated fulfillment systems",
      "Run profitable Facebook & TikTok ads",
      "Scale to $100k/month revenue"
    ],
    duration: "12 hours",
    level: "Beginner",
    curriculum: [
      { phase: "Phase 1", title: "Ecommerce Decoded", topics: ["The Arbitrage Opportunity", "The 9 Pillars of Dropshipping", "How I Built & Sold a $2M Store"] },
      { phase: "Phase 2", title: "Product Research Playbook", topics: ["The Winning Manifesto", "Finding Winning Products", "Winning Product Showcase"] },
      { phase: "Phase 3", title: "Store Creation Blueprint", topics: ["Strategic Store Selection", "Store Design Secrets", "Crafting a Store Name with AI", "Branding Brilliance with AI", "Backend Setup Essentials", "Importing Products with Ease"] },
      { phase: "Phase 4", title: "Facebook Ad Mastery", topics: ["Unleashing Facebook Ads Power", "Product Testing Mastery", "Crafting Winning Ads", "Scaling Success: Advanced Strat", "Protecting Your Account (Avoiding Bans)"] },
      { phase: "Phase 5", title: "TikTok Triumph", topics: ["Power of TikTok Ads", "Ad Mastery: 4 Winning Approaches", "Data Dive: Analyzing Performance", "TikTok Organic Potential"] },
      { phase: "Phase 6", title: "Running Your Business", topics: ["Unlocking Customer Connections (SMS/Email)", "Maximizing Sales", "Optimizing Profit with App Insights", "Customer Experience: The Polaris Star"] },
      { phase: "Phase 7", title: "The Endgame", topics: ["Crafting Your 7-Figure Brand Blueprint"] }
    ],
    lessons: [
      {
        id: "2-1",
        course_id: "2",
        title: "The Arbitrage Opportunity",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Discover the dropshipping business model and why it's the perfect entry point into e-commerce.",
        ai_prompt: "Act as an e-commerce strategist. Analyze this product niche: [YOUR NICHE]. Provide market size, competition analysis, and profit potential assessment.",
        duration: "35 min",
        order: 1,
        app_links: [
          { id: "10", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" },
          { id: "11", app_name: "AliExpress", app_url: "https://www.aliexpress.com", icon_name: "Package" },
          { id: "12", app_name: "Canva", app_url: "https://www.canva.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "3",
    title: "Vibe Coding",
    category: "Skill",
    description: "Build apps without writing code. Master AI-powered development tools to create websites, apps, and automations in record time.",
    thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    instructor: "Sarah Mitchell",
    price: null,
    outcomes: [
      "Build full-stack web applications with AI",
      "Create mobile apps without traditional coding",
      "Automate workflows with no-code tools",
      "Launch SaaS products in weeks, not months"
    ],
    duration: "6 hours",
    level: "Beginner",
    lessons: [
      {
        id: "3-1",
        course_id: "3",
        title: "Introduction to AI-Powered Development",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Learn how AI is revolutionizing software development and how you can leverage it.",
        ai_prompt: "Act as a senior software architect. Help me design the architecture for this app idea: [YOUR IDEA]. Include tech stack recommendations, database schema, and API endpoints.",
        duration: "40 min",
        order: 1,
        app_links: [
          { id: "13", app_name: "Cursor", app_url: "https://www.cursor.com", icon_name: "Code" },
          { id: "14", app_name: "Lovable", app_url: "https://lovable.dev", icon_name: "Heart" },
          { id: "15", app_name: "Vercel", app_url: "https://vercel.com", icon_name: "Rocket" }
        ]
      }
    ],
    created_at: "2024-02-10"
  },
  {
    id: "4",
    title: "Prompt Engineering",
    category: "Skill",
    description: "Master the art of communicating with AI. Learn advanced prompting techniques to unlock the full potential of ChatGPT, Claude, and other LLMs.",
    thumbnail_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    instructor: "David Park",
    price: null,
    outcomes: [
      "Write prompts that get consistent, high-quality outputs",
      "Chain prompts for complex multi-step tasks",
      "Build AI-powered workflows and automations",
      "Create custom GPTs and AI agents"
    ],
    duration: "5 hours",
    level: "Beginner",
    lessons: [
      {
        id: "4-1",
        course_id: "4",
        title: "The Science of Effective Prompts",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Understand how LLMs process information and how to structure prompts for optimal results.",
        ai_prompt: "Act as an AI prompt engineering expert. Analyze this prompt: [YOUR PROMPT]. Identify weaknesses and rewrite it using best practices for clarity, specificity, and output quality.",
        duration: "30 min",
        order: 1,
        app_links: [
          { id: "16", app_name: "ChatGPT", app_url: "https://chat.openai.com", icon_name: "MessageCircle" },
          { id: "17", app_name: "Claude", app_url: "https://claude.ai", icon_name: "Bot" },
          { id: "18", app_name: "Perplexity", app_url: "https://perplexity.ai", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "5",
    title: "Crypto Trading",
    category: "Crypto",
    description: "Navigate the volatile world of cryptocurrency. From wallet security to advanced trading strategies, become a confident crypto trader.",
    thumbnail_url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    instructor: "Alex Rodriguez",
    price: null,
    outcomes: [
      "Set up secure hot and cold wallets",
      "Execute trades on major exchanges",
      "Identify profitable market trends",
      "Implement DeFi strategies"
    ],
    duration: "7 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "5-1",
        course_id: "5",
        title: "Getting Started with Exchanges",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "A comprehensive guide to setting up accounts on major crypto exchanges with maximum security protocols.",
        ai_prompt: "Act as a cryptocurrency security expert. Review my exchange security setup: [DESCRIBE YOUR SETUP]. Identify vulnerabilities and provide a step-by-step hardening guide including 2FA, withdrawal whitelists, and cold storage integration.",
        duration: "35 min",
        order: 1,
        app_links: [
          { id: "4", app_name: "Coinbase", app_url: "https://www.coinbase.com", icon_name: "Coins" },
          { id: "5", app_name: "Binance", app_url: "https://www.binance.com", icon_name: "BarChart3" },
          { id: "6", app_name: "CoinGecko", app_url: "https://www.coingecko.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-20"
  },
  {
    id: "6",
    title: "Drop Coursing",
    category: "Skill",
    description: "Learn to create and sell online courses. Package your knowledge into premium digital products that generate passive income.",
    thumbnail_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    instructor: "Emma Thompson",
    price: null,
    outcomes: [
      "Identify profitable course topics in any niche",
      "Structure engaging curriculum that delivers results",
      "Set up automated course delivery systems",
      "Build a launch strategy for 6-figure course sales"
    ],
    duration: "8 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "6-1",
        course_id: "6",
        title: "Finding Your Profitable Niche",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Discover how to identify high-demand topics and position yourself as an authority.",
        ai_prompt: "Act as a course creation strategist. Analyze this niche: [YOUR NICHE]. Evaluate market demand, competition, pricing potential, and suggest 5 course topic ideas with monetization strategies.",
        duration: "45 min",
        order: 1,
        app_links: [
          { id: "19", app_name: "Teachable", app_url: "https://teachable.com", icon_name: "GraduationCap" },
          { id: "20", app_name: "Notion", app_url: "https://notion.so", icon_name: "FileText" },
          { id: "21", app_name: "Loom", app_url: "https://loom.com", icon_name: "Video" }
        ]
      }
    ],
    created_at: "2024-03-01"
  },
  {
    id: "7",
    title: "Ad Management",
    category: "Skill",
    description: "Master paid advertising across Facebook, Google, and TikTok. Learn to create high-converting campaigns that scale profitably.",
    thumbnail_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    instructor: "Ryan Foster",
    price: null,
    outcomes: [
      "Set up and optimize Facebook Ads campaigns",
      "Master Google Ads for search and display",
      "Create viral TikTok ad creatives",
      "Scale campaigns to $10k+/day profitably"
    ],
    duration: "10 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "7-1",
        course_id: "7",
        title: "The Ad Funnel Framework",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Learn the proven framework for building profitable ad funnels across any platform.",
        ai_prompt: "Act as a performance marketing expert. Analyze my ad campaign data: [PASTE METRICS]. Identify optimization opportunities, suggest audience refinements, and provide creative testing strategies.",
        duration: "50 min",
        order: 1,
        app_links: [
          { id: "22", app_name: "Meta Ads", app_url: "https://facebook.com/business", icon_name: "Target" },
          { id: "23", app_name: "Google Ads", app_url: "https://ads.google.com", icon_name: "Search" },
          { id: "24", app_name: "TikTok Ads", app_url: "https://ads.tiktok.com", icon_name: "Music" }
        ]
      }
    ],
    created_at: "2024-03-10"
  },
  {
    id: "8",
    title: "Content Creation with AI",
    category: "Skill",
    description: "Create viral content at scale using AI tools. From video scripts to social posts, learn to produce engaging content 10x faster.",
    thumbnail_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    instructor: "Mia Anderson",
    price: null,
    outcomes: [
      "Generate video scripts that hook viewers in 3 seconds",
      "Create month's worth of content in a day",
      "Repurpose content across all platforms",
      "Build a content system that runs on autopilot"
    ],
    duration: "6 hours",
    level: "Beginner",
    lessons: [
      {
        id: "8-1",
        course_id: "8",
        title: "The AI Content Workflow",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Set up your AI-powered content creation system for maximum efficiency.",
        ai_prompt: "Act as a viral content strategist. Create a 30-day content calendar for this niche: [YOUR NICHE]. Include hook ideas, content angles, and optimal posting times for each platform.",
        duration: "40 min",
        order: 1,
        app_links: [
          { id: "25", app_name: "CapCut", app_url: "https://capcut.com", icon_name: "Video" },
          { id: "26", app_name: "Opus Clip", app_url: "https://opus.pro", icon_name: "Scissors" },
          { id: "27", app_name: "Midjourney", app_url: "https://midjourney.com", icon_name: "Image" }
        ]
      }
    ],
    created_at: "2024-03-15"
  }
];

export const getCourseById = (id: string): Course | undefined => {
  return mockCourses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: Category | "All"): Course[] => {
  if (category === "All") return mockCourses;
  return mockCourses.filter(course => course.category === category);
};

export const searchCourses = (query: string): Course[] => {
  const lowercaseQuery = query.toLowerCase();
  return mockCourses.filter(
    course =>
      course.title.toLowerCase().includes(lowercaseQuery) ||
      course.description.toLowerCase().includes(lowercaseQuery) ||
      course.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getRelatedCourses = (courseId: string, limit: number = 3): Course[] => {
  const currentCourse = getCourseById(courseId);
  if (!currentCourse) return mockCourses.slice(0, limit);
  
  return mockCourses
    .filter(course => course.id !== courseId)
    .sort((a, b) => {
      if (a.category === currentCourse.category && b.category !== currentCourse.category) return -1;
      if (b.category === currentCourse.category && a.category !== currentCourse.category) return 1;
      return 0;
    })
    .slice(0, limit);
};
