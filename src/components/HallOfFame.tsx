import { Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TopEarner {
  id: string;
  name: string;
  avatar: string;
  monthlyIncome: string;
  rank: number;
}

const topEarners: TopEarner[] = [
  {
    id: "1",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    monthlyIncome: "$18,400",
    rank: 1,
  },
  {
    id: "2",
    name: "Sophia Williams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    monthlyIncome: "$15,200",
    rank: 2,
  },
  {
    id: "3",
    name: "James Rodriguez",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    monthlyIncome: "$12,800",
    rank: 3,
  },
  {
    id: "4",
    name: "Emily Zhang",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    monthlyIncome: "$11,500",
    rank: 4,
  },
  {
    id: "5",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    monthlyIncome: "$9,700",
    rank: 5,
  },
];

const rankColors: Record<number, string> = {
  1: "text-yellow-400",
  2: "text-gray-300",
  3: "text-orange-400",
};

const HallOfFame = () => {
  return (
    <div className="py-12 border-t border-border">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="h-6 w-6 text-yellow-400" />
        <h2 className="text-2xl font-bold text-foreground tracking-tight">Top Earners in this Sector</h2>
      </div>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="divide-y divide-border">
          {topEarners.map((earner) => (
            <div
              key={earner.id}
              className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors"
            >
              {/* Rank */}
              <div className={`w-8 text-center font-bold text-lg ${earner.rank <= 3 ? rankColors[earner.rank] : 'text-foreground/40'}`}>
                #{earner.rank}
              </div>

              {/* Avatar */}
              <Avatar className="h-12 w-12 border-2 border-border">
                <AvatarImage src={earner.avatar} alt={earner.name} className="img-gritty" />
                <AvatarFallback className="bg-secondary text-secondary-foreground">
                  {earner.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              {/* Name */}
              <div className="flex-1">
                <p className="font-semibold text-foreground">{earner.name}</p>
                <p className="text-xs text-foreground/40">Top Performer</p>
              </div>

              {/* Income */}
              <div className="text-right">
                <p className="font-bold text-lg text-tag-skill">{earner.monthlyIncome}</p>
                <p className="text-xs text-foreground/40">/month</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HallOfFame;
