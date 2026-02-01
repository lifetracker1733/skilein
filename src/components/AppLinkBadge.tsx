import { ExternalLink, Link as LinkIcon, Briefcase, Bot, Check, LineChart, TrendingUp, FileText, Coins, BarChart3, Search, Calculator, Landmark, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface AppLinkBadgeProps {
  name: string;
  url: string;
  iconName: string;
}

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Bot,
  Check,
  LineChart,
  TrendingUp,
  FileText,
  Coins,
  BarChart3,
  Search,
  Calculator,
  Landmark,
  Star,
  Link: LinkIcon,
};

const AppLinkBadge = ({ name, url, iconName }: AppLinkBadgeProps) => {
  const IconComponent = iconMap[iconName] || LinkIcon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg group"
    >
      <IconComponent className="h-4 w-4" />
      <span>{name}</span>
      <ExternalLink className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
    </a>
  );
};

export default AppLinkBadge;
