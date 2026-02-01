import { useState } from "react";
import { Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import type { AppLink } from "@/data/mockCourses";

interface SkileBoxProps {
  prompt: string;
  appLinks: AppLink[];
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
};

const SkileBox = ({ prompt, appLinks }: SkileBoxProps) => {
  const [copied, setCopied] = useState(false);
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

      {/* Prompt Section */}
      <div className="p-5">
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
        <div className="bg-black/40 rounded-xl p-4 border border-white/5 mb-6">
          <pre className="text-sm text-white/70 font-mono whitespace-pre-wrap break-words leading-relaxed">
            {prompt}
          </pre>
        </div>

        {/* Tool Links Section */}
        <div>
          <span className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3 block">
            Tools Used
          </span>
          <div className="flex flex-wrap gap-2">
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
        </div>
      </div>
    </div>
  );
};

export default SkileBox;
