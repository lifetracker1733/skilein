export type Category = "Freelancing" | "Stock Trading" | "Crypto" | "Bonds";

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
    title: "Freelance Writing Mastery",
    category: "Freelancing",
    description: "Learn to write compelling content that clients pay premium rates for. Master the art of freelance writing and build a sustainable income stream.",
    thumbnail_url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=450&fit=crop",
    instructor: "Sarah Mitchell",
    price: null,
    outcomes: [
      "Write articles worth $500+",
      "Find high-paying clients on Upwork",
      "Build a professional portfolio website",
      "Master SEO writing techniques"
    ],
    duration: "4 hours",
    level: "Beginner",
    lessons: [
      {
        id: "1-1",
        course_id: "1",
        title: "Finding Your Profitable Niche",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Discover how to identify writing niches that pay well and match your interests. We'll analyze market demand and competition to find your perfect fit.",
        ai_prompt: "Act as a freelance writing niche research expert. Help me identify profitable writing niches based on my background in [YOUR FIELD]. Analyze the demand, competition, and earning potential for each niche you suggest. Provide specific examples of clients who pay well in each niche.",
        duration: "25 min",
        order: 1,
        app_links: [
          { id: "1", app_name: "Upwork", app_url: "https://www.upwork.com", icon_name: "Briefcase" },
          { id: "2", app_name: "ChatGPT", app_url: "https://chat.openai.com", icon_name: "Bot" },
          { id: "3", app_name: "Grammarly", app_url: "https://www.grammarly.com", icon_name: "Check" }
        ]
      }
    ],
    created_at: "2024-01-15"
  },
  {
    id: "2",
    title: "Stock Market Fundamentals",
    category: "Stock Trading",
    description: "Master the basics of stock market investing. Learn to analyze companies, read charts, and build a diversified portfolio that grows over time.",
    thumbnail_url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=450&fit=crop",
    instructor: "Michael Chen",
    price: 49,
    outcomes: [
      "Read and interpret stock charts",
      "Analyze company fundamentals",
      "Build a diversified portfolio",
      "Understand market cycles and timing"
    ],
    duration: "6 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "2-1",
        course_id: "2",
        title: "Understanding Market Cycles",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Learn to identify bull and bear markets, understand economic indicators, and position your portfolio for different market conditions.",
        ai_prompt: "Act as a stock market analyst. Explain the current market cycle we're in based on these indicators: [PASTE INDICATORS]. Provide actionable insights on how to position a portfolio during this phase. Include specific sector recommendations and risk management strategies.",
        duration: "35 min",
        order: 1,
        app_links: [
          { id: "4", app_name: "TradingView", app_url: "https://www.tradingview.com", icon_name: "LineChart" },
          { id: "5", app_name: "Yahoo Finance", app_url: "https://finance.yahoo.com", icon_name: "TrendingUp" },
          { id: "6", app_name: "Seeking Alpha", app_url: "https://seekingalpha.com", icon_name: "FileText" }
        ]
      }
    ],
    created_at: "2024-02-01"
  },
  {
    id: "3",
    title: "Crypto Trading Essentials",
    category: "Crypto",
    description: "Navigate the world of cryptocurrency with confidence. From wallet setup to trading strategies, learn everything you need to trade crypto safely.",
    thumbnail_url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop",
    instructor: "Alex Rodriguez",
    price: 79,
    outcomes: [
      "Set up secure crypto wallets",
      "Trade safely on major exchanges",
      "Identify market trends and patterns",
      "Implement risk management strategies"
    ],
    duration: "5 hours",
    level: "Beginner",
    lessons: [
      {
        id: "3-1",
        course_id: "3",
        title: "Getting Started with Exchanges",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "A comprehensive guide to setting up accounts on major crypto exchanges. Learn about security features, verification processes, and best practices.",
        ai_prompt: "Act as a cryptocurrency security expert. Review my exchange security setup and suggest improvements. I'm using [EXCHANGE NAME] and have enabled [CURRENT SECURITY FEATURES]. What additional steps should I take to protect my assets? Include recommendations for cold storage solutions.",
        duration: "40 min",
        order: 1,
        app_links: [
          { id: "7", app_name: "Coinbase", app_url: "https://www.coinbase.com", icon_name: "Coins" },
          { id: "8", app_name: "Binance", app_url: "https://www.binance.com", icon_name: "BarChart3" },
          { id: "9", app_name: "CoinGecko", app_url: "https://www.coingecko.com", icon_name: "Search" }
        ]
      }
    ],
    created_at: "2024-02-15"
  },
  {
    id: "4",
    title: "Bond Investment Strategies",
    category: "Bonds",
    description: "Learn how to generate stable income through bond investments. Understand yield curves, credit ratings, and build a fixed-income portfolio.",
    thumbnail_url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop",
    instructor: "David Park",
    price: 59,
    outcomes: [
      "Understand bond pricing mechanics",
      "Analyze credit ratings effectively",
      "Build a diversified bond portfolio",
      "Navigate interest rate environments"
    ],
    duration: "4 hours",
    level: "Intermediate",
    lessons: [
      {
        id: "4-1",
        course_id: "4",
        title: "Bond Basics and Yield Analysis",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Master the fundamentals of bond investing. Learn about coupon rates, yield to maturity, and how interest rates affect bond prices.",
        ai_prompt: "Act as a fixed-income investment advisor. Analyze this bond: [BOND DETAILS - coupon rate, maturity, credit rating]. Calculate the yield to maturity and compare it to current market rates. Should I buy, hold, or sell? Explain the risks and potential returns.",
        duration: "30 min",
        order: 1,
        app_links: [
          { id: "10", app_name: "FINRA", app_url: "https://www.finra.org/investors/tools-calculators", icon_name: "Calculator" },
          { id: "11", app_name: "Treasury Direct", app_url: "https://www.treasurydirect.gov", icon_name: "Landmark" },
          { id: "12", app_name: "Morningstar", app_url: "https://www.morningstar.com", icon_name: "Star" }
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
      // Prioritize same category
      if (a.category === currentCourse.category && b.category !== currentCourse.category) return -1;
      if (b.category === currentCourse.category && a.category !== currentCourse.category) return 1;
      return 0;
    })
    .slice(0, limit);
};
