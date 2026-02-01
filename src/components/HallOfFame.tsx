import { Trophy } from "lucide-react";
import type { HallOfFameEntry } from "@/data/mockCourses";

interface HallOfFameProps {
  entries?: HallOfFameEntry[];
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

const HallOfFame = ({ entries = defaultEntries }: HallOfFameProps) => {
  return (
    <div className="py-12">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="h-5 w-5 text-yellow-400" />
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Hall of Fame</h2>
      </div>
      <p className="text-foreground/40 text-sm mb-8">Top earners in this sector</p>
      
      <div className="space-y-3">
        {entries.map((entry) => {
          const style = rankStyles[entry.rank as 1 | 2 | 3] || rankStyles[3];
          
          return (
            <div 
              key={entry.rank}
              className={`flex items-center justify-between p-4 rounded-xl border ${style.bg} ${style.border} transition-all hover:scale-[1.01]`}
            >
              <div className="flex items-center gap-4">
                {/* Rank Badge */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${style.label} glass`}>
                  #{entry.rank}
                </div>
                
                {/* Name */}
                <div>
                  <h3 className="font-semibold text-foreground">{entry.name}</h3>
                  <p className="text-xs text-foreground/40">Verified Earner</p>
                </div>
              </div>
              
              {/* Income */}
              <div className="text-right">
                <span className={`font-bold text-lg ${style.label}`}>{entry.income}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HallOfFame;
