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
  `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;

export const mockCourses: Course[] = [
  {
    id: "dropshipping",
    title: "The Winning Store",
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
      { name: "Shopify (120 Day Trial)", url: "https://www.shopify.com/free-trial", icon: "shopping-bag" },
      { name: "AutoDS (Automation)", url: "https://www.autods.com/", icon: "zap" },
      { name: "TikTok Creative Center", url: "https://ads.tiktok.com/business/creativecenter", icon: "video" }
    ],
    stats: {
      market: "$514B",
      growth: "23%",
      success_rate: "84%",
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
      },
      {
        phaseTitle: "Phase 2: Building the Store",
        topics: ["Store Design Secrets", "AI Branding", "Backend Setup"],
        videoID: "uJ0FiWhhHv8",
        checklist: [
          "Connect Domain",
          "Install 'Sense' Theme",
          "Write Product Description with AI",
          "Setup Payment Gateway"
        ],
        ai_prompt: "Act as a Shopify store designer. Help me create a high-converting store design for this product: [YOUR PRODUCT]. Include color schemes, layout recommendations, and trust-building elements.",
        app_links: [
          { id: "1", app_name: "Canva", app_url: "https://www.canva.com", icon_name: "Palette" },
          { id: "2", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" }
        ]
      },
      {
        phaseTitle: "Phase 3: Viral Marketing",
        topics: ["TikTok Organic Method", "UGC Content Creation", "Paid Ads Testing"],
        videoID: "vbgJ5lGU3wU",
        checklist: [
          "Order Sample Product",
          "Film 3 UGC Hooks",
          "Launch $20/day Test Campaign",
          "Analyze Initial Metrics"
        ],
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
    title: "No-Code Blueprint",
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
      { name: "Cursor Editor", url: "https://www.cursor.com/", icon: "code" },
      { name: "V0.dev (Frontend)", url: "https://v0.dev/", icon: "layout" },
      { name: "Replit", url: "https://replit.com/", icon: "terminal" }
    ],
    stats: {
      market: "$34B",
      growth: "900%",
      success_rate: "95%",
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
        ai_prompt: "Act as a Vibe Coding mentor. Explain how to set up Cursor AI and start building apps using natural language. Include best practices for prompt engineering in code.",
        app_links: [
          { id: "1", app_name: "Cursor", app_url: "https://www.cursor.com", icon_name: "Bot" }
        ]
      },
      {
        phaseTitle: "Module 2: Building Apps",
        topics: ["Frontend with V0", "Backend Logic", "Database Connection"],
        videoID: "SyxEIKvWJnY",
        checklist: [
          "Generate Frontend with V0",
          "Paste into Cursor",
          "Fix Errors with 'Composer'",
          "Add Database Integration"
        ],
        ai_prompt: "Act as a full-stack developer. Help me plan and build this app idea: [YOUR IDEA]. Include tech stack recommendations, database schema, and step-by-step implementation.",
        app_links: [
          { id: "1", app_name: "Lovable", app_url: "https://lovable.dev", icon_name: "Briefcase" },
          { id: "2", app_name: "V0", app_url: "https://v0.dev", icon_name: "Bot" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "stock",
    title: "Art of the Deal",
    category: "Finance",
    description: "The ultimate beginner guide to investing, ETFs, and market psychology.",
    thumbnail_url: getYouTubeThumbnail("8IjJ7DkwJ6U"),
    instructor: "Trading 212",
    price: null,
    outcomes: [
      "Read and interpret stock charts like a pro",
      "Analyze company fundamentals for long-term gains",
      "Build a diversified portfolio",
      "Master risk management strategies"
    ],
    duration: "6 hours",
    level: "Intermediate",
    tools: [
      { name: "TradingView", url: "https://www.tradingview.com/", icon: "bar-chart" },
      { name: "Screener.in", url: "https://www.screener.in/", icon: "search" }
    ],
    stats: {
      market: "$110T",
      growth: "Steady",
      success_rate: "12%",
      avg_income: "$15k/mo"
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
        phaseTitle: "Basics of Investing",
        topics: ["How the Market Works", "ETFs vs Stocks", "Understanding Market Cycles"],
        videoID: "8IjJ7DkwJ6U",
        checklist: [
          "Open Demat Account",
          "Understand PE Ratio",
          "Analyze Top 50 Companies",
          "Set Investment Budget"
        ],
        ai_prompt: "Act as a stock market educator. Explain the fundamentals of how the stock market works, including ETFs, index funds, and the difference between growth and value investing.",
        app_links: [
          { id: "1", app_name: "Yahoo Finance", app_url: "https://finance.yahoo.com", icon_name: "TrendingUp" }
        ]
      },
      {
        phaseTitle: "Technical Analysis",
        topics: ["Reading Charts", "Candlestick Patterns", "Key Indicators"],
        videoID: "jhyWANd1704",
        checklist: [
          "Setup Candlestick Charts",
          "Draw Support/Resistance",
          "Identify Breakouts",
          "Practice Paper Trading"
        ],
        ai_prompt: "Act as a technical analyst. Analyze this stock chart pattern: [DESCRIBE PATTERN]. Identify support/resistance levels, trend direction, and potential entry/exit points.",
        app_links: [
          { id: "1", app_name: "TradingView", app_url: "https://www.tradingview.com", icon_name: "LineChart" }
        ]
      }
    ],
    created_at: "2024-01-20"
  },
  {
    id: "crypto",
    title: "Digital Launchpad",
    category: "Crypto",
    description: "Technical analysis and risk management for the 2025 bull run.",
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
      { name: "Binance", url: "https://www.binance.com/", icon: "coins" },
      { name: "CoinMarketCap", url: "https://coinmarketcap.com/", icon: "trending-up" }
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
        phaseTitle: "Trading Strategy",
        topics: ["Swing Trading", "Cycle Analysis", "Altcoin Selection"],
        videoID: "1YyAzVmP9xQ",
        checklist: [
          "Setup Wallet",
          "Understand Market Cap",
          "Risk Management 101",
          "Create Trading Plan"
        ],
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
    id: "webdesign",
    title: "Web Design Fast Track",
    category: "Skill",
    description: "Learn Figma and modern web design principles to build stunning websites.",
    thumbnail_url: getYouTubeThumbnail("B-ytMSuwbf8"),
    instructor: "Envato Tuts",
    price: null,
    outcomes: [
      "Master Figma from zero to hero",
      "Create professional UI/UX designs",
      "Build responsive layouts",
      "Launch your design freelance career"
    ],
    duration: "5 hours",
    level: "Beginner",
    tools: [
      { name: "Figma", url: "https://figma.com/", icon: "layout" },
      { name: "Webflow", url: "https://webflow.com/", icon: "globe" }
    ],
    stats: {
      market: "High Demand",
      growth: "25%",
      success_rate: "Top 1%",
      avg_income: "$12k/mo"
    },
    hall_of_fame: [
      { 
        name: "Ran Segall", 
        income: "$500k/yr", 
        rank: 1,
        bio: "Founder of Flux Academy. Taught thousands to become professional web designers.",
        sources: ["Education", "Design Agency"],
        avatar_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop"
      },
      { 
        name: "Design Freelancers", 
        income: "$15k/mo", 
        rank: 2,
        bio: "Top Figma designers charging premium rates for UI/UX work.",
        sources: ["Freelancing", "Figma"],
        avatar_url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop"
      },
      { 
        name: "Agency Designers", 
        income: "$8k/mo", 
        rank: 3,
        bio: "Design professionals working at top agencies and startups.",
        sources: ["Agency", "Startups"],
        avatar_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Figma Fundamentals",
        topics: ["Interface Overview", "Components & Variants", "Auto Layout"],
        videoID: "B-ytMSuwbf8",
        checklist: [
          "Create Figma Account",
          "Learn Auto Layout",
          "Build Component Library",
          "Design First Landing Page"
        ],
        ai_prompt: "Act as a UI/UX designer. Help me design a landing page for this product: [YOUR PRODUCT]. Include layout suggestions, color schemes, and typography recommendations.",
        app_links: [
          { id: "1", app_name: "Figma", app_url: "https://figma.com", icon_name: "Layout" }
        ]
      }
    ],
    created_at: "2024-02-10"
  },
  {
    id: "copywriting",
    title: "Pen to Profit",
    category: "Skill",
    description: "Master copywriting and persuasion to print money with words.",
    thumbnail_url: getYouTubeThumbnail("6pYuoZ4qMlk"),
    instructor: "Luis Berger",
    price: null,
    outcomes: [
      "Write headlines that stop the scroll",
      "Master persuasion psychology",
      "Create high-converting sales pages",
      "Land $5k+ copywriting clients"
    ],
    duration: "6 hours",
    level: "Beginner",
    tools: [
      { name: "Google Docs", url: "https://docs.google.com/", icon: "file-text" },
      { name: "Copy.ai", url: "https://copy.ai/", icon: "bot" }
    ],
    stats: {
      market: "$700B",
      growth: "15%",
      success_rate: "High",
      avg_income: "$10k/mo"
    },
    hall_of_fame: [
      { 
        name: "Dan Kennedy", 
        income: "$10M+", 
        rank: 1,
        bio: "The Godfather of Direct Response. Legendary copywriter and marketing consultant.",
        sources: ["Direct Response", "Consulting"],
        avatar_url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop"
      },
      { 
        name: "Top Copywriters", 
        income: "$30k/mo", 
        rank: 2,
        bio: "Elite freelance copywriters commanding premium rates for sales copy.",
        sources: ["Freelancing", "Sales Copy"],
        avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
      },
      { 
        name: "Content Writers", 
        income: "$8k/mo", 
        rank: 3,
        bio: "Professional writers specializing in conversion-focused content.",
        sources: ["Content", "SEO"],
        avatar_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop"
      }
    ],
    curriculum: [
      {
        phaseTitle: "Copywriting Fundamentals",
        topics: ["AIDA Framework", "Headline Formulas", "Persuasion Psychology"],
        videoID: "6pYuoZ4qMlk",
        checklist: [
          "Study AIDA Framework",
          "Write 50 Headlines",
          "Analyze Top Sales Pages",
          "Create First Sales Letter"
        ],
        ai_prompt: "Act as a direct response copywriter. Write a sales page for this product: [YOUR PRODUCT]. Include headline, body copy, social proof, and CTA sections.",
        app_links: [
          { id: "1", app_name: "Google Docs", app_url: "https://docs.google.com", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-02-25"
  },
  {
    id: "ads",
    title: "Ad Architect",
    category: "Skill",
    description: "The only Facebook Ads tutorial you need for 2025 ROI.",
    thumbnail_url: getYouTubeThumbnail("1v3a9j3g-yI"),
    instructor: "HubSpot Marketing",
    price: null,
    outcomes: [
      "Set up and optimize Facebook Ads campaigns",
      "Master Google Ads for search and display",
      "Create viral TikTok ad creatives",
      "Scale campaigns to $10k+/day profitably"
    ],
    duration: "10 hours",
    level: "Intermediate",
    tools: [
      { name: "Meta Ads Manager", url: "https://adsmanager.facebook.com/" },
      { name: "Canva", url: "https://www.canva.com/" }
    ],
    stats: {
      market: "$700B",
      growth: "15%",
      success_rate: "High",
      avg_income: "$8k/mo"
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
        phaseTitle: "Facebook Ads Setup",
        topics: ["Platform Overview", "Pixel Setup", "Audience Building"],
        videoID: "1v3a9j3g-yI",
        checklist: [
          "Install Pixel",
          "Verify Domain",
          "Create CBO Campaign",
          "Setup Custom Audiences"
        ],
        ai_prompt: "Act as a Facebook Ads specialist. Help me set up a campaign for this product/service: [YOUR OFFER]. Include audience targeting, ad creative concepts, and budget recommendations.",
        app_links: [
          { id: "1", app_name: "Meta Ads", app_url: "https://facebook.com/business", icon_name: "TrendingUp" }
        ]
      }
    ],
    created_at: "2024-03-01"
  },
  {
    id: "content",
    title: "Six Figure Sales Rep",
    category: "Skill",
    description: "9 AI Skills that will make you rich in 2025 (Content Focus).",
    thumbnail_url: getYouTubeThumbnail("4vT35gT8jGQ"),
    instructor: "Think Media",
    price: null,
    outcomes: [
      "Generate video scripts that hook viewers in 3 seconds",
      "Create month's worth of content in a day",
      "Repurpose content across all platforms",
      "Build a content system that runs on autopilot"
    ],
    duration: "5 hours",
    level: "Beginner",
    tools: [
      { name: "Opus Clip", url: "https://opus.pro/" },
      { name: "CapCut", url: "https://capcut.com/" }
    ],
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
        videoID: "4vT35gT8jGQ",
        checklist: [
          "Choose Profitable Niche",
          "Setup AI Voiceover Tool",
          "Create Script Template",
          "Plan Content Calendar"
        ],
        ai_prompt: "Act as a YouTube strategist. Help me create a faceless channel strategy for this niche: [YOUR NICHE]. Include content ideas, AI tools to use, and monetization timeline.",
        app_links: [
          { id: "1", app_name: "Opus Clip", app_url: "https://opus.pro", icon_name: "Palette" }
        ]
      },
      {
        phaseTitle: "Phase 2: Viral Scripting",
        topics: ["Hook Strategy", "Retention Editing", "Thumbnail Psychology"],
        videoID: "P1LwA7l7F-I",
        checklist: [
          "Write 10 Hook Variations",
          "Create Retention Graph",
          "Design Click-Worthy Thumbnails",
          "A/B Test Titles"
        ],
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
    thumbnail_url: getYouTubeThumbnail("qqzB4d1VLPQ"),
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
    tools: [
      { name: "Fiverr", url: "https://fiverr.com/" },
      { name: "Upwork", url: "https://upwork.com/" }
    ],
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
        checklist: [
          "Research High-Demand Services",
          "Calculate Profit Margins",
          "Setup Pricing Tiers",
          "Create Service Packages"
        ],
        ai_prompt: "Act as a service business strategist. Analyze this service niche: [YOUR NICHE]. Evaluate demand, competition, pricing potential, and suggest 5 service offerings.",
        app_links: [
          { id: "1", app_name: "Fiverr", app_url: "https://fiverr.com", icon_name: "Briefcase" }
        ]
      },
      {
        phaseTitle: "Module 2: Building Your Team",
        topics: ["Finding Freelancers", "Quality Control", "SOPs & Automation"],
        videoID: "KC4cdxyiTIQ",
        checklist: [
          "Post Job on Upwork",
          "Interview 5 Freelancers",
          "Create Quality Checklist",
          "Document Delivery Process"
        ],
        ai_prompt: "Act as an operations manager. Help me create SOPs for this service: [YOUR SERVICE]. Include quality control checklists, client communication templates, and delivery processes.",
        app_links: [
          { id: "1", app_name: "Upwork", app_url: "https://upwork.com", icon_name: "Briefcase" },
          { id: "2", app_name: "Notion", app_url: "https://notion.so", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-02-20"
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
