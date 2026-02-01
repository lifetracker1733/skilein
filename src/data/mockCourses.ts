export type Category = "Finance" | "Web3" | "Skill" | "Crypto";

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
  curriculum: CurriculumPhase[];
  stats: CourseStats;
  hall_of_fame: HallOfFameEntry[];
  created_at: string;
}

export const mockCourses: Course[] = [
  {
    id: "dropshipping",
    title: "Dropshipping: The Winning Store",
    category: "Skill",
    description: "Complete A-Z guide: Finding products, Shopify setup, and ads.",
    thumbnail_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    instructor: "Skile Elite",
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
      market: "$514B",
      growth: "23%",
      success_rate: "84%"
    },
    hall_of_fame: [
      { 
        name: "Andreas & Alexander", 
        income: "$10M+/yr", 
        rank: 1,
        bio: "Founders of The Ecom King. Masters of high-ticket dropshipping and building million-dollar brands from scratch.",
        sources: ["Shopify", "Branding", "Mentorship"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "Harry Coleman", 
        income: "$1M+/mo", 
        rank: 2,
        bio: "The 'Beast of Ecom'. Famous for general store scaling strategies and Facebook Ads mastery.",
        sources: ["General Stores", "Facebook Ads", "Scaling"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      },
      { 
        name: "Sebastian Esqueda", 
        income: "$500k/mo", 
        rank: 3,
        bio: "TikTok organic mastermind. Built multiple 7-figure stores using viral TikTok content.",
        sources: ["TikTok", "Organic Traffic", "Branding"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Phase 1: E-Commerce Decoded",
        topics: ["The Arbitrage Opportunity", "9 Pillars of Dropshipping", "Building a $2M Store"],
        videoID: "KC4cdxyiTIQ",
        ai_prompt: "Act as an e-commerce strategist. Explain the dropshipping business model, the difference between arbitrage and brand building, and the 9 essential pillars every successful store needs.",
        app_links: [
          { id: "1", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" }
        ]
      },
      {
        phaseTitle: "Phase 2: Product Research Playbook",
        topics: ["The Winning Manifesto", "Finding Viral Products", "Spy Tools Masterclass"],
        videoID: "h7FqDq5HjMs",
        ai_prompt: "Act as a product research expert. Help me find a winning dropshipping product in this niche: [YOUR NICHE]. Analyze trends, competition, and profit margins.",
        app_links: [
          { id: "1", app_name: "AliExpress", app_url: "https://www.aliexpress.com", icon_name: "Package" },
          { id: "2", app_name: "Sell The Trend", app_url: "https://sellthetrend.com", icon_name: "TrendingUp" }
        ]
      },
      {
        phaseTitle: "Phase 3: Store Creation Blueprint",
        topics: ["Store Design Secrets", "AI Branding", "Backend Setup"],
        videoID: "y7vO3-S2D6A",
        ai_prompt: "Act as a Shopify store designer. Help me create a high-converting store design for this product: [YOUR PRODUCT]. Include color schemes, layout recommendations, and trust-building elements.",
        app_links: [
          { id: "1", app_name: "Canva", app_url: "https://www.canva.com", icon_name: "Palette" },
          { id: "2", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" }
        ]
      },
      {
        phaseTitle: "Phase 4: Facebook Ad Mastery",
        topics: ["Unleashing FB Power", "Testing Strategy", "Scaling & Avoiding Bans"],
        videoID: "mZWJCjhZanQ",
        ai_prompt: "Act as a Facebook Ads specialist. Create a testing strategy for this dropshipping product: [YOUR PRODUCT]. Include audience targeting, ad creative suggestions, and budget allocation.",
        app_links: [
          { id: "1", app_name: "Meta Ads", app_url: "https://facebook.com/business", icon_name: "TrendingUp" }
        ]
      },
      {
        phaseTitle: "Phase 5: TikTok Triumph",
        topics: ["Organic Viral Method", "TikTok Ads Manager", "Creator Partnerships"],
        videoID: "Eqz--5VvJKA",
        ai_prompt: "Act as a TikTok marketing expert. Create a viral content strategy for this product: [YOUR PRODUCT]. Include hook ideas, trending sounds to use, and posting schedules.",
        app_links: [
          { id: "1", app_name: "TikTok Ads", app_url: "https://ads.tiktok.com", icon_name: "TrendingUp" },
          { id: "2", app_name: "CapCut", app_url: "https://capcut.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-01-15"
  },
  {
    id: "vibecoding",
    title: "Vibe Coding: AI Software Development",
    category: "Skill",
    description: "How to build software without knowing how to code using AI tools.",
    thumbnail_url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    instructor: "Cursor Team",
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
      market: "$34B",
      growth: "900%",
      success_rate: "95%"
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
        phaseTitle: "Module 1: The New Way to Code",
        topics: ["Installing Cursor", "Natural Language Programming", "Zero-Code Setup"],
        videoID: "yk9nX8i3i8Q",
        ai_prompt: "Act as a Vibe Coding mentor. Explain how to set up Cursor AI and start building apps using natural language. Include best practices for prompt engineering in code.",
        app_links: [
          { id: "1", app_name: "Cursor", app_url: "https://www.cursor.com", icon_name: "Bot" }
        ]
      },
      {
        phaseTitle: "Module 2: Building Your First App",
        topics: ["Frontend with V0", "Backend Logic", "Database Connection"],
        videoID: "5tvsM6l7TiU",
        ai_prompt: "Act as a full-stack developer. Help me plan and build this app idea: [YOUR IDEA]. Include tech stack recommendations, database schema, and step-by-step implementation.",
        app_links: [
          { id: "1", app_name: "Lovable", app_url: "https://lovable.dev", icon_name: "Briefcase" },
          { id: "2", app_name: "V0", app_url: "https://v0.dev", icon_name: "Bot" }
        ]
      },
      {
        phaseTitle: "Module 3: Deploying & Monetizing",
        topics: ["Vercel Deployment", "Stripe Integration", "Launching on Product Hunt"],
        videoID: "cE84Q5IRR6U",
        ai_prompt: "Act as a launch strategist. Help me plan a Product Hunt launch for my app: [YOUR APP]. Include pre-launch checklist, launch day strategy, and post-launch growth tactics.",
        app_links: [
          { id: "1", app_name: "Vercel", app_url: "https://vercel.com", icon_name: "Package" },
          { id: "2", app_name: "Stripe", app_url: "https://stripe.com", icon_name: "CreditCard" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "stock",
    title: "Stock Market Mastery",
    category: "Finance",
    description: "The ultimate beginner guide to investing, ETFs, and market psychology.",
    thumbnail_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
    instructor: "Market Wizards",
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
      market: "$110T",
      growth: "Steady",
      success_rate: "12%"
    },
    hall_of_fame: [
      { 
        name: "Warren Buffett", 
        income: "$4B/yr", 
        rank: 1,
        bio: "The Oracle of Omaha. Chairman of Berkshire Hathaway and the greatest value investor of all time.",
        sources: ["Value Investing", "Long-term Holdings"],
        avatar_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
      },
      { 
        name: "R. Jhunjhunwala", 
        income: "Legacy", 
        rank: 2,
        bio: "India's Warren Buffett. Legendary investor known for transforming small investments into billions.",
        sources: ["Indian Markets", "Value Investing"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      },
      { 
        name: "Peter Lynch", 
        income: "$500M+", 
        rank: 3,
        bio: "Managed Magellan Fund with 29.2% annual returns. Author of 'One Up On Wall Street'.",
        sources: ["Mutual Funds", "Growth Investing"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Level 1: Market Fundamentals",
        topics: ["How the Market Works", "ETFs vs Stocks", "Understanding Market Cycles"],
        videoID: "p7HKvqRI_Bo",
        ai_prompt: "Act as a stock market educator. Explain the fundamentals of how the stock market works, including ETFs, index funds, and the difference between growth and value investing.",
        app_links: [
          { id: "1", app_name: "Yahoo Finance", app_url: "https://finance.yahoo.com", icon_name: "TrendingUp" }
        ]
      },
      {
        phaseTitle: "Level 2: Technical Analysis",
        topics: ["Reading Charts", "Candlestick Patterns", "Key Indicators"],
        videoID: "Ey_Qe1yJ0Qk",
        ai_prompt: "Act as a technical analyst. Analyze this stock chart pattern: [DESCRIBE PATTERN]. Identify support/resistance levels, trend direction, and potential entry/exit points.",
        app_links: [
          { id: "1", app_name: "TradingView", app_url: "https://www.tradingview.com", icon_name: "LineChart" }
        ]
      },
      {
        phaseTitle: "Level 3: Options & Risk",
        topics: ["Calls & Puts", "Risk Management", "Trading Psychology"],
        videoID: "SD7syTE2xDA",
        ai_prompt: "Act as an options strategist. Explain options trading strategies for this market scenario: [YOUR SCENARIO]. Include risk management techniques and position sizing.",
        app_links: [
          { id: "1", app_name: "Seeking Alpha", app_url: "https://seekingalpha.com", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-01-20"
  },
  {
    id: "crypto",
    title: "Crypto & Web3 Blueprint",
    category: "Crypto",
    description: "Technical analysis and risk management for the 2025 bull run.",
    thumbnail_url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    instructor: "DeFi Pro",
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
      market: "$3T",
      growth: "Volatile",
      success_rate: "High Risk"
    },
    hall_of_fame: [
      { 
        name: "Brian Armstrong", 
        income: "$1B+", 
        rank: 1,
        bio: "CEO of Coinbase. Built the largest US crypto exchange and pioneered mainstream crypto adoption.",
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
      },
      { 
        name: "Pro Traders", 
        income: "$100k/mo", 
        rank: 3,
        bio: "Elite crypto traders using technical analysis and market psychology to generate consistent returns.",
        sources: ["Trading", "DeFi", "Altcoins"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Module 1: Blockchain Basics",
        topics: ["Bitcoin & Ethereum", "Wallets & Security", "Understanding Gas Fees"],
        videoID: "Yb6825iv0Vk",
        ai_prompt: "Act as a crypto educator. Explain blockchain fundamentals including how Bitcoin and Ethereum work, wallet security best practices, and how to avoid common scams.",
        app_links: [
          { id: "1", app_name: "Coinbase", app_url: "https://www.coinbase.com", icon_name: "Coins" }
        ]
      },
      {
        phaseTitle: "Module 2: Trading Strategies",
        topics: ["Swing Trading", "Cycle Analysis", "Altcoin Selection"],
        videoID: "aaMFEk5Zuq4",
        ai_prompt: "Act as a crypto trading analyst. Analyze this cryptocurrency: [TOKEN NAME]. Provide technical analysis, on-chain metrics, and a trading strategy with entry/exit points.",
        app_links: [
          { id: "1", app_name: "Binance", app_url: "https://www.binance.com", icon_name: "BarChart3" },
          { id: "2", app_name: "CoinGecko", app_url: "https://www.coingecko.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "prompt",
    title: "Prompt Engineering Pro",
    category: "Skill",
    description: "Master LLMs, RAG, and Context Engineering. The highest paying skill of 2026.",
    thumbnail_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    instructor: "AI Architect",
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
      success_rate: "Top 1%"
    },
    hall_of_fame: [
      { 
        name: "Riley Goodside", 
        income: "$300k/yr", 
        rank: 1,
        bio: "Staff Prompt Engineer at Scale AI. Pioneer of prompt injection research and LLM optimization.",
        sources: ["LLM Optimization", "Research"],
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      },
      { 
        name: "AI Architects", 
        income: "$20k/mo", 
        rank: 2,
        bio: "Elite prompt engineers building enterprise AI solutions and custom agent systems.",
        sources: ["Enterprise AI", "Consulting"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      },
      { 
        name: "Enterprise Prompters", 
        income: "$15k/mo", 
        rank: 3,
        bio: "Corporate AI specialists optimizing workflows and building internal AI tools.",
        sources: ["Automation", "Workflows"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Basics: Talking to Machines",
        topics: ["Zero-shot vs Few-shot", "Context Windows", "Token Optimization"],
        videoID: "_ZvnD73m40o",
        ai_prompt: "Act as a prompt engineering instructor. Explain the fundamentals of prompt engineering including zero-shot, few-shot, and chain-of-thought prompting techniques.",
        app_links: [
          { id: "1", app_name: "ChatGPT", app_url: "https://chat.openai.com", icon_name: "Bot" }
        ]
      },
      {
        phaseTitle: "Advanced: RAG & Agents",
        topics: ["Building AI Agents", "Chain of Thought", "RAG Pipelines"],
        videoID: "BUdwDOLQVWc",
        ai_prompt: "Act as an AI systems architect. Help me design a RAG pipeline for this use case: [YOUR USE CASE]. Include vector database selection, chunking strategy, and retrieval optimization.",
        app_links: [
          { id: "1", app_name: "Claude", app_url: "https://claude.ai", icon_name: "Bot" },
          { id: "2", app_name: "Perplexity", app_url: "https://perplexity.ai", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-10"
  },
  {
    id: "aicontent",
    title: "AI Content & Virality",
    category: "Skill",
    description: "9 AI Skills that will make you rich in 2025 (Content Focus).",
    thumbnail_url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    instructor: "Viral Lab",
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
      market: "Creator Econ",
      growth: "Exp",
      success_rate: "Viral"
    },
    hall_of_fame: [
      { 
        name: "MrBeast Team", 
        income: "$5M/mo", 
        rank: 1,
        bio: "Kings of Content. The most subscribed individual YouTuber with revolutionary content systems.",
        sources: ["YouTube", "Merch", "Feastables"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "Faceless Channels", 
        income: "$50k/mo", 
        rank: 2,
        bio: "Anonymous content empires built entirely with AI tools and strategic automation.",
        sources: ["AI Voiceovers", "Automation"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      },
      { 
        name: "AI Creators", 
        income: "$10k/mo", 
        rank: 3,
        bio: "New wave of content creators leveraging AI for scriptwriting, editing, and distribution.",
        sources: ["AI Tools", "Short-form"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Phase 1: Faceless Channels",
        topics: ["Niche Selection", "AI Voiceovers", "Script Templates"],
        videoID: "VwedJBqdUIs",
        ai_prompt: "Act as a YouTube strategist. Help me create a faceless channel strategy for this niche: [YOUR NICHE]. Include content ideas, AI tools to use, and monetization timeline.",
        app_links: [
          { id: "1", app_name: "Opus Clip", app_url: "https://opus.pro", icon_name: "Palette" }
        ]
      },
      {
        phaseTitle: "Phase 2: Viral Scripting",
        topics: ["Hook Strategy", "Retention Editing", "Thumbnail Psychology"],
        videoID: "P1LwA7l7F-I",
        ai_prompt: "Act as a viral content expert. Write a script for this video topic: [YOUR TOPIC]. Include a hook that stops scrolling, retention peaks, and a strong CTA.",
        app_links: [
          { id: "1", app_name: "CapCut", app_url: "https://capcut.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-03-01"
  },
  {
    id: "dropservicing",
    title: "Drop Servicing: International Guide",
    category: "Skill",
    description: "How to start International Drop Servicing in 2025.",
    thumbnail_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    instructor: "Alok Badatia",
    price: null,
    outcomes: [
      "Identify profitable service niches",
      "Find and manage reliable freelancers",
      "Set up automated service delivery",
      "Build a 6-figure service agency"
    ],
    duration: "6 hours",
    level: "Intermediate",
    stats: {
      market: "$300B Gig Econ",
      growth: "20%",
      success_rate: "High Margin"
    },
    hall_of_fame: [
      { 
        name: "Iman Gadzhi", 
        income: "$30M/yr", 
        rank: 1,
        bio: "Agency king. Built a $30M/year education empire teaching agency models and digital marketing.",
        sources: ["SMMA", "Education", "Mentorship"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      },
      { 
        name: "Agency Owners", 
        income: "$100k/yr", 
        rank: 2,
        bio: "Digital agency operators running lean, profitable service businesses with remote teams.",
        sources: ["Agency", "Consulting"],
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      },
      { 
        name: "Service Pros", 
        income: "$50k/mo", 
        rank: 3,
        bio: "Freelancers who scaled to agencies using drop servicing and automation systems.",
        sources: ["Freelancing", "Scaling"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Module 1: Service Selection",
        topics: ["High-Margin Services", "Market Research", "Pricing Strategy"],
        videoID: "5o1CC0e8nQ8",
        ai_prompt: "Act as a service business strategist. Analyze this service niche: [YOUR NICHE]. Evaluate demand, competition, pricing potential, and suggest 5 service offerings.",
        app_links: [
          { id: "1", app_name: "Fiverr", app_url: "https://fiverr.com", icon_name: "Briefcase" }
        ]
      },
      {
        phaseTitle: "Module 2: Building Your Team",
        topics: ["Finding Freelancers", "Quality Control", "SOPs & Automation"],
        videoID: "KC4cdxyiTIQ",
        ai_prompt: "Act as an operations manager. Help me create SOPs for this service: [YOUR SERVICE]. Include quality control checklists, client communication templates, and delivery processes.",
        app_links: [
          { id: "1", app_name: "Upwork", app_url: "https://upwork.com", icon_name: "Users" },
          { id: "2", app_name: "Notion", app_url: "https://notion.so", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-02-20"
  },
  {
    id: "admanagement",
    title: "Facebook & Meta Ads Mastery",
    category: "Skill",
    description: "The only Facebook Ads tutorial you need for 2025 ROI.",
    thumbnail_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    instructor: "Neil Patel",
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
      { 
        name: "Gary Vaynerchuk", 
        income: "$200M+", 
        rank: 1,
        bio: "CEO of VaynerMedia. Pioneer of social media marketing and personal branding.",
        sources: ["Agency", "Speaking", "Investments"],
        avatar_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
      },
      { 
        name: "Top Media Buyers", 
        income: "$50k/mo", 
        rank: 2,
        bio: "Elite performance marketers managing millions in ad spend for e-commerce brands.",
        sources: ["Media Buying", "E-commerce"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "Agency Owners", 
        income: "$15k/mo", 
        rank: 3,
        bio: "Digital marketing agency founders specializing in paid acquisition.",
        sources: ["Agency", "Consulting"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Module 1: Ad Fundamentals",
        topics: ["Platform Overview", "Pixel Setup", "Audience Building"],
        videoID: "mZWJCjhZanQ",
        ai_prompt: "Act as a Facebook Ads specialist. Help me set up a campaign for this product/service: [YOUR OFFER]. Include audience targeting, ad creative concepts, and budget recommendations.",
        app_links: [
          { id: "1", app_name: "Meta Ads", app_url: "https://facebook.com/business", icon_name: "TrendingUp" }
        ]
      },
      {
        phaseTitle: "Module 2: Scaling & Optimization",
        topics: ["Testing Frameworks", "Scaling Strategies", "Creative Iteration"],
        videoID: "KC4cdxyiTIQ",
        ai_prompt: "Act as a growth marketer. Analyze my ad campaign metrics: [PASTE METRICS]. Identify optimization opportunities and provide a scaling strategy.",
        app_links: [
          { id: "1", app_name: "TikTok Ads", app_url: "https://ads.tiktok.com", icon_name: "TrendingUp" },
          { id: "2", app_name: "Google Ads", app_url: "https://ads.google.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-03-01"
  }
];

export function getCourseById(id: string): Course | undefined {
  return mockCourses.find((course) => course.id === id);
}

export function getRelatedCourses(currentCourseId: string, limit: number = 3): Course[] {
  return mockCourses
    .filter((course) => course.id !== currentCourseId)
    .slice(0, limit);
}

export function getCoursesByCategory(category: Category): Course[] {
  return mockCourses.filter((course) => course.category === category);
}
