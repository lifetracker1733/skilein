import { BadgeCheck, X, DollarSign, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { HallOfFameEntry } from "@/data/mockCourses";

interface TopEarnerModalProps {
  earner: HallOfFameEntry | null;
  isOpen: boolean;
  onClose: () => void;
}

const rankColors = {
  1: {
    badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    glow: "shadow-yellow-500/20"
  },
  2: {
    badge: "bg-gray-400/20 text-gray-300 border-gray-400/30",
    glow: "shadow-gray-400/20"
  },
  3: {
    badge: "bg-amber-700/20 text-amber-500 border-amber-700/30",
    glow: "shadow-amber-500/20"
  }
};

const TopEarnerModal = ({ earner, isOpen, onClose }: TopEarnerModalProps) => {
  if (!earner) return null;
  
  const colors = rankColors[earner.rank as 1 | 2 | 3] || rankColors[3];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="glass border-border max-w-md p-0 overflow-hidden">
        {/* Header with gradient */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
          
          <DialogHeader className="relative p-6 pb-0">
            {/* Avatar & Badge */}
            <div className="flex items-start gap-4">
              {/* Avatar */}
              <div className={`relative shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 ${colors.badge} shadow-lg ${colors.glow}`}>
                {earner.avatar_url ? (
                  <img 
                    src={earner.avatar_url} 
                    alt={earner.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {earner.name.charAt(0)}
                    </span>
                  </div>
                )}
                
                {/* Rank badge */}
                <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold border ${colors.badge}`}>
                  #{earner.rank}
                </div>
              </div>
              
              {/* Name & Verified */}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-foreground tracking-tight truncate">
                    {earner.name}
                  </h2>
                  <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                </div>
                <p className="text-sm text-foreground/40 font-medium">Verified Top Earner</p>
              </div>
            </div>
          </DialogHeader>
        </div>
        
        {/* Content */}
        <div className="p-6 pt-4 space-y-6">
          {/* Income Display */}
          <div className="glass rounded-xl p-4 border border-border">
            <div className="flex items-center gap-2 text-foreground/40 text-sm font-medium mb-1">
              <DollarSign className="w-4 h-4" />
              Est. Monthly Income
            </div>
            <div className="text-3xl font-bold text-tag-skill tracking-tight">
              {earner.income}
            </div>
          </div>
          
          {/* Bio */}
          {earner.bio && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-2">About</h4>
              <p className="text-foreground/80 leading-relaxed">
                {earner.bio}
              </p>
            </div>
          )}
          
          {/* Income Sources */}
          {earner.sources && earner.sources.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-foreground/60 mb-3">Income Sources</h4>
              <div className="flex flex-wrap gap-2">
                {earner.sources.map((source, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="bg-white/5 border-white/10 text-foreground/70 px-3 py-1"
                  >
                    {source}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TopEarnerModal;
