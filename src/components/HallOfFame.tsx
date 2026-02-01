import { Trophy, ChevronRight } from "lucide-react";
import type { HallOfFameEntry } from "@/data/mockCourses";

interface HallOfFameProps {
  entries?: HallOfFameEntry[];
  onEarnerClick?: (earner: HallOfFameEntry) => void;
}

const rankStyles = {
  1: {
    bg: "bg-gradient-to-r from-yellow-500/20 to-yellow-600/10",
    border: "border-yellow-500/30",
    icon: "text-yellow-400",
    label: "text-yellow-400"
  },
  2: {
    bg: "bg-gradient-to-r from-gray-400/20 to-gray-500/10",
    border: "border-gray-400/30",
    icon: "text-gray-300",
    label: "text-gray-300"
  },
  3: {
    bg: "bg-gradient-to-r from-amber-700/20 to-amber-800/10",
    border: "border-amber-700/30",
    icon: "text-amber-600",
    label: "text-amber-500"
  }
};

const defaultEntries: HallOfFameEntry[] = [
  { name: "Andreas & Alexander", income: "$10M+/yr", rank: 1 },
  { name: "Harry Coleman", income: "$1M+/mo", rank: 2 },
  { name: "Sebastian Esqueda", income: "$500k/mo", rank: 3 }
];

const HallOfFame = ({ entries = defaultEntries, onEarnerClick }: HallOfFameProps) => {
  const isClickable = !!onEarnerClick;
  
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="h-5 w-5 text-yellow-400" />
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Hall of Fame</h2>
      </div>
      <p className="text-foreground/40 text-sm mb-8">
        Top earners in this sector {isClickable && "• Click to view profile"}
      </p>
      
      <div className="space-y-3">
        {entries.map((entry) => {
          const style = rankStyles[entry.rank as 1 | 2 | 3] || rankStyles[3];
          const hasProfile = entry.bio || entry.sources;
          
          const content = (
            <>
              <div className="flex items-center gap-4">
                {/* Avatar */}
                {entry.avatar_url ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/10">
                    <img 
                      src={entry.avatar_url} 
                      alt={entry.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${style.label} glass`}>
                    #{entry.rank}
                  </div>
                )}
                
                {/* Name */}
                <div>
                  <h3 className="font-semibold text-foreground">{entry.name}</h3>
                  <p className="text-xs text-foreground/40">
                    {hasProfile ? "Verified Earner • View Profile" : "Verified Earner"}
                  </p>
                </div>
              </div>
              
              {/* Income & Arrow */}
              <div className="flex items-center gap-3">
                <span className={`font-bold text-lg ${style.label}`}>{entry.income}</span>
                {isClickable && hasProfile && (
                  <ChevronRight className="w-5 h-5 text-foreground/30 group-hover:text-foreground/60 transition-colors" />
                )}
              </div>
            </>
          );
          
          if (isClickable && hasProfile) {
            return (
              <button 
                key={entry.rank}
                onClick={() => onEarnerClick(entry)}
                className={`w-full flex items-center justify-between p-4 rounded-xl border ${style.bg} ${style.border} transition-all hover:scale-[1.01] group cursor-pointer`}
              >
                {content}
              </button>
            );
          }
          
          return (
            <div 
              key={entry.rank}
              className={`flex items-center justify-between p-4 rounded-xl border ${style.bg} ${style.border} transition-all hover:scale-[1.01]`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HallOfFame;
