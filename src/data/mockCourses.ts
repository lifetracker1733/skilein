export type Category = "Finance" | "Web3" | "Skill" | "Crypto";

export interface AppLink {
  id: string;
  app_name: string;
  app_url: string;
  icon_name: string;
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
    price: 199,
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
    title: "Crypto Trading",
    category: "Web3",
    description: "Navigate the volatile world of cryptocurrency. From wallet security to advanced trading strategies, become a confident crypto trader.",
    thumbnail_url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    instructor: "Alex Rodriguez",
    price: 149,
    outcomes: [
      "Set up secure hot and cold wallets",
      "Execute trades on major exchanges",
      "Identify profitable market trends",
      "Implement DeFi strategies"
    ],
    duration: "6 hours",
    level: "Beginner",
    lessons: [
      {
        id: "2-1",
        course_id: "2",
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
    created_at: "2024-02-01"
  },
  {
    id: "3",
    title: "Freelance Copywriting",
    category: "Skill",
    description: "Turn words into wealth. Master the art of persuasive writing and build a six-figure freelance copywriting business.",
    thumbnail_url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    instructor: "Sarah Mitchell",
    price: null,
    outcomes: [
      "Write copy that converts at 5x industry average",
      "Land $5,000+ clients consistently",
      "Build a personal brand that attracts leads",
      "Create passive income through templates"
    ],
    duration: "5 hours",
    level: "Beginner",
    lessons: [
      {
        id: "3-1",
        course_id: "3",
        title: "The Psychology of Persuasion",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Discover the psychological triggers that make people buy and how to ethically use them in your copy.",
        ai_prompt: "Act as a world-class copywriter. I need you to rewrite this sales page using proven persuasion frameworks (AIDA, PAS, 4Ps). Original copy: [PASTE YOUR COPY]. Focus on emotional triggers, social proof integration, and urgency without being sleazy.",
        duration: "40 min",
        order: 1,
        app_links: [
          { id: "7", app_name: "Upwork", app_url: "https://www.upwork.com", icon_name: "Briefcase" },
          { id: "8", app_name: "Copy.ai", app_url: "https://www.copy.ai", icon_name: "Bot" },
          { id: "9", app_name: "Grammarly", app_url: "https://www.grammarly.com", icon_name: "Check" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "4",
    title: "Dropshipping Empire",
    category: "Skill",
    description: "Build an e-commerce business from scratch. Learn product research, supplier management, and scaling strategies.",
    thumbnail_url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    instructor: "James Wilson",
    price: 299,
    outcomes: [
      "Find winning products before they trend",
      "Set up automated fulfillment systems",
      "Run profitable Facebook & TikTok ads",
      "Scale to $100k/month revenue"
    ],
    duration: "10 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "4-1",
        course_id: "4",
        title: "Product Research Mastery",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Learn the exact framework to find products with 5x profit margins before your competitors.",
        ai_prompt: "Act as a dropshipping product research expert. Analyze this product niche: [YOUR NICHE]. Provide competitor analysis, profit margin calculations, supplier recommendations, and a 30-day launch roadmap.",
        duration: "50 min",
        order: 1,
        app_links: [
          { id: "10", app_name: "Shopify", app_url: "https://www.shopify.com", icon_name: "Store" },
          { id: "11", app_name: "AliExpress", app_url: "https://www.aliexpress.com", icon_name: "Package" },
          { id: "12", app_name: "Canva", app_url: "https://www.canva.com", icon_name: "Palette" }
        ]
      }
    ],
    created_at: "2024-03-01"
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
