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

export interface HallOfFameEntry {
  name: string;
  income: string;
  rank: number;
}

export interface CourseStats {
  market: string;
  growth: string;
  success_rate: string;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  video_url: string;
  video_id: string;
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
  stats: CourseStats;
  hall_of_fame: HallOfFameEntry[];
  created_at: string;
}

export const mockCourses: Course[] = [
  {
    id: "dropshipping",
    title: "Dropshipping: The Winning Store",
    category: "Skill",
    description: "The only updated 2025 guide you need. 8 Hours of zero-fluff strategy.",
    thumbnail_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    instructor: "The Ecom King",
    price: null,
    outcomes: [
      "Find winning products before they trend",
      "Set up automated fulfillment systems",
      "Run profitable Facebook & TikTok ads",
      "Scale to $100k/month revenue"
    ],
    duration: "8 hours",
    level: "Beginner",
    stats: {
      market: "$514B (2026 Proj.)",
      growth: "23% CAGR",
      success_rate: "84% (with AI)"
    },
    hall_of_fame: [
      { name: "Andreas & Alexander", income: "$10M+/yr", rank: 1 },
      { name: "Harry Coleman", income: "$1M+/mo", rank: 2 },
      { name: "Sebastian Esqueda", income: "$500k/mo", rank: 3 }
    ],
    curriculum: [
      { phase: "Phase 1", title: "Ecommerce Decoded", topics: ["The Arbitrage Opportunity", "The 9 Pillars of Dropshipping", "How I Built & Sold a $2M Store"] },
      { phase: "Phase 2", title: "Product Research Playbook", topics: ["The Winning Manifesto", "Finding Winning Products", "Winning Product Showcase"] },
      { phase: "Phase 3", title: "Store Creation Blueprint", topics: ["Strategic Store Selection", "Store Design Secrets", "Crafting a Store Name with AI", "Branding Brilliance with AI", "Backend Setup Essentials", "Importing Products with Ease", "Crafting a Captivating Store Experience", "Crafting Extra Pages for UX", "Live Product Page", "Craft Irresistible Deals", "Harnessing Apps for Peak Performance", "Store Success Unveiled"] },
      { phase: "Phase 4", title: "Facebook Ad Mastery", topics: ["Unleashing Facebook Ads Power", "Product Testing Mastery", "Crafting FB Ads: 3 Winning Approaches", "Crafting Winning Ads", "FB Account Setup Essentials", "Launching Your FB Ad", "Decoding FB Ad Data", "Scaling Success: Advanced Strategies", "Protecting Your Account (Avoiding Bans)"] },
      { phase: "Phase 5", title: "TikTok Triumph", topics: ["The Power of TikTok Ads", "Ad Mastery: 4 Winning Approaches", "Strategic Setup for Success", "TikTok Ads Launch Setup", "Data Dive: Analyzing Performance", "TikTok Ad Scaling Mastery", "TikTok Organic Potential"] },
      { phase: "Phase 6", title: "Running Your Business", topics: ["Business Mastery Kickoff", "Unlocking Customer Connections (SMS/Email)", "Maximizing Sales", "Data-Driven Success (App Insights)", "Effortless Order Fulfillment", "Customer Experience: The Polaris Star"] },
      { phase: "Phase 7", title: "The Endgame", topics: ["Crafting Your 7-Figure Brand Blueprint"] }
    ],
    lessons: [
      {
        id: "dropshipping-1",
        course_id: "dropshipping",
        title: "The Complete Dropshipping Masterclass 2025",
        video_url: "https://www.youtube.com/embed/vbgJ5lGU3wU",
        video_id: "vbgJ5lGU3wU",
        description: "The only updated 2025 guide you need. 8 Hours of zero-fluff strategy from finding winning products to scaling with ads.",
        ai_prompt: "Act as an e-commerce strategist specializing in dropshipping. Analyze this product niche: [YOUR NICHE]. Provide market size, competition analysis, profit margin potential, and suggest 5 winning product ideas with supplier recommendations.",
        duration: "8 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" },
          { id: "2", app_name: "AliExpress", app_url: "https://www.aliexpress.com", icon_name: "Package" },
          { id: "3", app_name: "Canva", app_url: "https://www.canva.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-01-15"
  },
  {
    id: "stock",
    title: "Stock Market Mastery 2025",
    category: "Finance",
    description: "From beginner to portfolio manager. Understanding ETFs, Index Funds, and Risk.",
    thumbnail_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    instructor: "Humphrey Yang",
    price: null,
    outcomes: [
      "Read and interpret stock charts like a pro",
      "Analyze company fundamentals for long-term gains",
      "Build a diversified portfolio",
      "Master risk management strategies"
    ],
    duration: "6 hours",
    level: "Intermediate",
    stats: {
      market: "$110 Trillion",
      growth: "Steady",
      success_rate: "12% (Avg)"
    },
    hall_of_fame: [
      { name: "Warren Buffett", income: "$4B/yr", rank: 1 },
      { name: "Peter Lynch", income: "$500M+", rank: 2 },
      { name: "Retail Legends", income: "$50k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "stock-1",
        course_id: "stock",
        title: "Stock Market Complete Guide",
        video_url: "https://www.youtube.com/embed/bb6_M_srMBk",
        video_id: "bb6_M_srMBk",
        description: "Learn everything about the stock market from beginner to advanced strategies.",
        ai_prompt: "Act as a senior stock market analyst. I want you to analyze these stocks: [PASTE YOUR TICKERS]. Provide actionable insights on valuation, risk levels, and specific buy/sell recommendations with entry/exit points.",
        duration: "6 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "TradingView", app_url: "https://www.tradingview.com", icon_name: "LineChart" },
          { id: "2", app_name: "Yahoo Finance", app_url: "https://finance.yahoo.com", icon_name: "TrendingUp" },
          { id: "3", app_name: "Seeking Alpha", app_url: "https://seekingalpha.com", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-01-20"
  },
  {
    id: "vibecoding",
    title: "Vibe Coding: Cursor AI Masterclass",
    category: "Skill",
    description: "Build Enterprise-grade apps without writing code line-by-line. The future of dev.",
    thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    instructor: "Codebasics",
    price: null,
    outcomes: [
      "Build full-stack web applications with AI",
      "Create mobile apps without traditional coding",
      "Automate workflows with no-code tools",
      "Launch SaaS products in weeks, not months"
    ],
    duration: "4 hours",
    level: "Beginner",
    stats: {
      market: "$34B (AI Tools)",
      growth: "900% YoY",
      success_rate: "95% (Speed)"
    },
    hall_of_fame: [
      { name: "Pieter Levels", income: "$300k/mo", rank: 1 },
      { name: "Danny Postma", income: "$150k/mo", rank: 2 },
      { name: "Marc Lou", income: "$100k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "vibecoding-1",
        course_id: "vibecoding",
        title: "Cursor AI Complete Tutorial",
        video_url: "https://www.youtube.com/embed/5tvsM6l7TiU",
        video_id: "5tvsM6l7TiU",
        description: "Master Cursor AI to build enterprise-grade applications faster than ever before.",
        ai_prompt: "Act as a senior software architect. Help me design the architecture for this app idea: [YOUR IDEA]. Include tech stack recommendations, database schema, API endpoints, and deployment strategy.",
        duration: "4 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "Cursor", app_url: "https://www.cursor.com", icon_name: "Bot" },
          { id: "2", app_name: "Lovable", app_url: "https://lovable.dev", icon_name: "Briefcase" },
          { id: "3", app_name: "Vercel", app_url: "https://vercel.com", icon_name: "Package" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "prompt",
    title: "Prompt Engineering Professional",
    category: "Skill",
    description: "Master LLMs, RAG, and Context Engineering. The highest paying skill of 2026.",
    thumbnail_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    instructor: "Simplilearn",
    price: null,
    outcomes: [
      "Write prompts that get consistent, high-quality outputs",
      "Chain prompts for complex multi-step tasks",
      "Build AI-powered workflows and automations",
      "Create custom GPTs and AI agents"
    ],
    duration: "5 hours",
    level: "Beginner",
    stats: {
      market: "High Demand",
      growth: "400%",
      success_rate: "Top 1% Talent"
    },
    hall_of_fame: [
      { name: "Riley Goodside", income: "$300k/yr", rank: 1 },
      { name: "AI Architects", income: "$20k/mo", rank: 2 },
      { name: "Enterprise Prompters", income: "$15k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "prompt-1",
        course_id: "prompt",
        title: "Complete Prompt Engineering Guide",
        video_url: "https://www.youtube.com/embed/BUdwDOLQVWc",
        video_id: "BUdwDOLQVWc",
        description: "Learn advanced prompt engineering techniques to unlock the full potential of LLMs.",
        ai_prompt: "Act as an AI prompt engineering expert. Analyze this prompt: [YOUR PROMPT]. Identify weaknesses and rewrite it using best practices for clarity, specificity, and output quality.",
        duration: "5 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "ChatGPT", app_url: "https://chat.openai.com", icon_name: "Bot" },
          { id: "2", app_name: "Claude", app_url: "https://claude.ai", icon_name: "Bot" },
          { id: "3", app_name: "Perplexity", app_url: "https://perplexity.ai", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-10"
  },
  {
    id: "crypto",
    title: "Crypto Trading Blueprint",
    category: "Crypto",
    description: "Technical Analysis, Risk Management, and Web3 trends for 2026.",
    thumbnail_url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    instructor: "The Trading Geek",
    price: null,
    outcomes: [
      "Set up secure hot and cold wallets",
      "Execute trades on major exchanges",
      "Identify profitable market trends",
      "Implement DeFi strategies"
    ],
    duration: "7 hours",
    level: "Intermediate",
    stats: {
      market: "$18 Billion (2026)",
      growth: "14.5%",
      success_rate: "High Risk"
    },
    hall_of_fame: [
      { name: "CZ (Binance)", income: "Legacy", rank: 1 },
      { name: "Brian Armstrong", income: "$1B+", rank: 2 },
      { name: "Pro Traders", income: "$100k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "crypto-1",
        course_id: "crypto",
        title: "Crypto Trading Masterclass",
        video_url: "https://www.youtube.com/embed/UYnCQEHx7ZU",
        video_id: "UYnCQEHx7ZU",
        description: "Complete guide to cryptocurrency trading with technical analysis and risk management.",
        ai_prompt: "Act as a cryptocurrency trading expert. Analyze this coin/token: [PASTE TICKER]. Provide technical analysis, support/resistance levels, and a trading strategy with entry/exit points.",
        duration: "7 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "Coinbase", app_url: "https://www.coinbase.com", icon_name: "Coins" },
          { id: "2", app_name: "Binance", app_url: "https://www.binance.com", icon_name: "BarChart3" },
          { id: "3", app_name: "CoinGecko", app_url: "https://www.coingecko.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "dropcoursing",
    title: "Drop Coursing: Sell Digital Products",
    category: "Skill",
    description: "How to package knowledge and sell it without inventory.",
    thumbnail_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    instructor: "Digital Era",
    price: null,
    outcomes: [
      "Identify profitable course topics in any niche",
      "Structure engaging curriculum that delivers results",
      "Set up automated course delivery systems",
      "Build a launch strategy for 6-figure course sales"
    ],
    duration: "6 hours",
    level: "Intermediate",
    stats: {
      market: "$300B E-Learning",
      growth: "20%",
      success_rate: "High Margin"
    },
    hall_of_fame: [
      { name: "Iman Gadzhi", income: "$30M/yr", rank: 1 },
      { name: "Skillshare Top", income: "$100k/yr", rank: 2 },
      { name: "Course Creators", income: "$50k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "dropcoursing-1",
        course_id: "dropcoursing",
        title: "Digital Product Empire",
        video_url: "https://www.youtube.com/embed/vbgJ5lGU3wU",
        video_id: "vbgJ5lGU3wU",
        description: "Learn how to create and sell digital products without any inventory.",
        ai_prompt: "Act as a course creation strategist. Analyze this niche: [YOUR NICHE]. Evaluate market demand, competition, pricing potential, and suggest 5 course topic ideas with monetization strategies.",
        duration: "6 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "Teachable", app_url: "https://teachable.com", icon_name: "FileText" },
          { id: "2", app_name: "Notion", app_url: "https://notion.so", icon_name: "FileText" },
          { id: "3", app_name: "Loom", app_url: "https://loom.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-02-20"
  },
  {
    id: "admanagement",
    title: "Meta & TikTok Ads Manager",
    category: "Skill",
    description: "Run profitable campaigns on FB, IG, and TikTok. The engine of e-commerce.",
    thumbnail_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    instructor: "Santrel Media",
    price: null,
    outcomes: [
      "Set up and optimize Facebook Ads campaigns",
      "Master Google Ads for search and display",
      "Create viral TikTok ad creatives",
      "Scale campaigns to $10k+/day profitably"
    ],
    duration: "10 hours",
    level: "Intermediate",
    stats: {
      market: "$700B Ad Spend",
      growth: "15%",
      success_rate: "High"
    },
    hall_of_fame: [
      { name: "Gary Vaynerchuk", income: "$200M+", rank: 1 },
      { name: "Top Media Buyers", income: "$50k/mo", rank: 2 },
      { name: "Agency Owners", income: "$15k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "admanagement-1",
        course_id: "admanagement",
        title: "Meta & TikTok Ads Complete Guide",
        video_url: "https://www.youtube.com/embed/jGyo2BJYg3A",
        video_id: "jGyo2BJYg3A",
        description: "Master Facebook, Instagram, and TikTok advertising from zero to scaling.",
        ai_prompt: "Act as a performance marketing expert. Analyze my ad campaign data: [PASTE METRICS]. Identify optimization opportunities, suggest audience refinements, and provide creative testing strategies.",
        duration: "10 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "Meta Ads", app_url: "https://facebook.com/business", icon_name: "TrendingUp" },
          { id: "2", app_name: "TikTok Ads", app_url: "https://ads.tiktok.com", icon_name: "TrendingUp" },
          { id: "3", app_name: "Google Ads", app_url: "https://ads.google.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-03-01"
  },
  {
    id: "aicontent",
    title: "AI Content Creation & Virality",
    category: "Skill",
    description: "Automate faceless channels, viral scripts, and AI voiceovers.",
    thumbnail_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    instructor: "Mr Hassnain",
    price: null,
    outcomes: [
      "Generate video scripts that hook viewers in 3 seconds",
      "Create month's worth of content in a day",
      "Repurpose content across all platforms",
      "Build a content system that runs on autopilot"
    ],
    duration: "5 hours",
    level: "Beginner",
    stats: {
      market: "Creator Economy",
      growth: "Exponential",
      success_rate: "Viral Potential"
    },
    hall_of_fame: [
      { name: "MrBeast Team", income: "$5M/mo", rank: 1 },
      { name: "Faceless Channels", income: "$50k/mo", rank: 2 },
      { name: "AI Creators", income: "$10k/mo", rank: 3 }
    ],
    lessons: [
      {
        id: "aicontent-1",
        course_id: "aicontent",
        title: "AI Content Creation Masterclass",
        video_url: "https://www.youtube.com/embed/VwedJBqdUIs",
        video_id: "VwedJBqdUIs",
        description: "Learn to create viral content at scale using AI tools and automation.",
        ai_prompt: "Act as a viral content strategist. Create a 30-day content calendar for this niche: [YOUR NICHE]. Include hook ideas, content angles, and optimal posting times for each platform.",
        duration: "5 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "CapCut", app_url: "https://capcut.com", icon_name: "Palette" },
          { id: "2", app_name: "Opus Clip", app_url: "https://opus.pro", icon_name: "Palette" },
          { id: "3", app_name: "Midjourney", app_url: "https://midjourney.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-03-10"
  },
  {
    id: "prompt_ai",
    title: "Advanced AI Systems Engineering",
    category: "Skill",
    description: "Building Agents, RAG pipelines, and complex AI systems.",
    thumbnail_url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
    instructor: "IBM Technology",
    price: null,
    outcomes: [
      "Build production-ready AI agents",
      "Implement RAG pipelines for enterprise",
      "Design complex multi-agent systems",
      "Deploy AI solutions at scale"
    ],
    duration: "8 hours",
    level: "Advanced",
    stats: {
      market: "Enterprise AI",
      growth: "Stable",
      success_rate: "Very High"
    },
    hall_of_fame: [
      { name: "Sam Altman", income: "n/a", rank: 1 },
      { name: "OpenAI Engineers", income: "$800k/yr", rank: 2 },
      { name: "AI Consultants", income: "$300k/yr", rank: 3 }
    ],
    lessons: [
      {
        id: "prompt_ai-1",
        course_id: "prompt_ai",
        title: "AI Systems Engineering Deep Dive",
        video_url: "https://www.youtube.com/embed/YiuyO5p5W-g",
        video_id: "YiuyO5p5W-g",
        description: "Learn to build production-grade AI systems with agents and RAG pipelines.",
        ai_prompt: "Act as an AI systems architect. Design an AI agent system for this use case: [YOUR USE CASE]. Include architecture diagram, component breakdown, and implementation roadmap.",
        duration: "8 hours",
        order: 1,
        app_links: [
          { id: "1", app_name: "LangChain", app_url: "https://langchain.com", icon_name: "Bot" },
          { id: "2", app_name: "OpenAI", app_url: "https://platform.openai.com", icon_name: "Bot" },
          { id: "3", app_name: "Pinecone", app_url: "https://pinecone.io", icon_name: "Search" }
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
