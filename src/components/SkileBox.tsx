import { useState } from "react";
import { Copy, Check, Terminal, ExternalLink, CheckCircle2, Circle, ShoppingBag, Zap, Video, Code, Layout, TerminalSquare, BarChart, Search, Coins, TrendingUp, Bot, Brain, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { AppLink, Tool } from "@/data/mockCourses";

interface SkileBoxProps {
  prompt: string;
  appLinks: AppLink[];
  checklist: string[];
  tools: Tool[];
}

const iconMap: Record<string, React.ReactNode> = {
  LineChart: "📈",
  TrendingUp: "📊",
  FileText: "📄",
  Coins: "🪙",
  BarChart3: "📉",
  Search: "🔍",
  Briefcase: "💼",
  Bot: "🤖",
  Check: "✓",
  Store: "🏪",
  Package: "📦",
  Palette: "🎨",
  CreditCard: "💳",
};

// Map tool icon strings to Lucide components
const getToolIcon = (iconName?: string) => {
  const iconClasses = "h-4 w-4";
  switch (iconName) {
    case "shopping-bag":
      return <ShoppingBag className={iconClasses} />;
    case "zap":
      return <Zap className={iconClasses} />;
    case "video":
      return <Video className={iconClasses} />;
    case "code":
      return <Code className={iconClasses} />;
    case "layout":
      return <Layout className={iconClasses} />;
    case "terminal":
      return <TerminalSquare className={iconClasses} />;
    case "bar-chart":
      return <BarChart className={iconClasses} />;
    case "search":
      return <Search className={iconClasses} />;
    case "coins":
      return <Coins className={iconClasses} />;
    case "trending-up":
      return <TrendingUp className={iconClasses} />;
    case "bot":
      return <Bot className={iconClasses} />;
    case "brain":
      return <Brain className={iconClasses} />;
    default:
      return <Wrench className={iconClasses} />;
  }
};

const SkileBox = ({ prompt, appLinks, checklist, tools }: SkileBoxProps) => {
  const [copied, setCopied] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<number>>(new Set());
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast({
        title: "Prompt copied!",
        description: "Paste it into ChatGPT, Claude, or your favorite AI tool.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleChecklistItem = (index: number) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const completedCount = completedItems.size;
  const totalCount = checklist.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <div className="terminal-box rounded-2xl overflow-hidden">
      {/* Header - Terminal style */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-tag-skill" />
          <span className="text-sm font-semibold text-white">The Skile Box</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-destructive/50" />
          <div className="w-3 h-3 rounded-full bg-tag-crypto/50" />
          <div className="w-3 h-3 rounded-full bg-tag-skill/50" />
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Digital Toolbox - Always Visible */}
        {tools.length > 0 && (
          <div className="glass rounded-xl p-4 border border-white/10">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">🧰</span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                Digital Toolbox
              </span>
            </div>
            
            {/* Horizontal Tool Cards */}
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all duration-200"
                >
                  <span className="text-tag-skill group-hover:text-black transition-colors">
                    {getToolIcon(tool.icon)}
                  </span>
                  <span className="text-sm font-medium text-white group-hover:text-black transition-colors">
                    {tool.name}
                  </span>
                  <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Phase Checklist Section */}
        {checklist.length > 0 && (
          <div className="bg-black/40 rounded-xl p-4 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                Phase Checklist
              </span>
              <span className="text-xs font-medium text-tag-skill">
                {completedCount}/{totalCount} Complete
              </span>
            </div>
            
            {/* Progress Bar */}
            <div className="h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-tag-skill to-tag-skill/70 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Checklist Items */}
            <div className="space-y-2">
              {checklist.map((item, index) => (
                <button
                  key={index}
                  onClick={() => toggleChecklistItem(index)}
                  className={`w-full flex items-center gap-3 p-2.5 rounded-lg transition-all duration-200 text-left ${
                    completedItems.has(index) 
                      ? 'bg-tag-skill/10 border border-tag-skill/20' 
                      : 'hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {completedItems.has(index) ? (
                    <CheckCircle2 className="h-5 w-5 text-tag-skill shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-white/30 shrink-0" />
                  )}
                  <span className={`text-sm font-medium ${
                    completedItems.has(index) 
                      ? 'text-white line-through opacity-70' 
                      : 'text-white/80'
                  }`}>
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* AI Prompt Section */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">AI Prompt</span>
            <Button
              onClick={handleCopy}
              size="sm"
              className={`rounded-full gap-2 text-xs font-semibold ${
                copied 
                  ? 'bg-tag-skill text-black hover:bg-tag-skill' 
                  : 'bg-white text-black hover:bg-white/90'
              }`}
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy Prompt
                </>
              )}
            </Button>
          </div>

          {/* Prompt Text */}
          <div className="bg-black/40 rounded-xl p-4 border border-white/5">
            <pre className="text-sm text-white/70 font-mono whitespace-pre-wrap break-words leading-relaxed">
              {prompt}
            </pre>
          </div>
        </div>

        {/* Quick App Links */}
        {appLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-3">
            {appLinks.map((link) => (
              <a
                key={link.id}
                href={link.app_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-200 group"
              >
                <span>{iconMap[link.icon_name] || "🔗"}</span>
                <span>{link.app_name}</span>
                <ExternalLink className="h-3 w-3 opacity-40 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkileBox;
