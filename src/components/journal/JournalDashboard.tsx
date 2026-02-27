import { useMemo } from "react";
import { TradeEntry } from "@/hooks/useTradeJournal";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";
import { TrendingUp, TrendingDown, Target, BarChart3, Trophy, Skull } from "lucide-react";

interface Props {
  entries: TradeEntry[];
  year: number;
  month: number;
}

const COLORS = {
  profit: "#10b981",
  loss: "#ef4444",
  confident: "#3b82f6",
  neutral: "#6b7280",
  fearful: "#f59e0b",
  aggressive: "#ef4444",
};

export default function JournalDashboard({ entries, year, month }: Props) {
  const monthEntries = useMemo(
    () => entries.filter((e) => {
      const d = new Date(e.entry_date);
      return d.getFullYear() === year && d.getMonth() === month;
    }),
    [entries, year, month]
  );

  const stats = useMemo(() => {
    if (!monthEntries.length) return null;
    const totalTrades = monthEntries.reduce((s, e) => s + e.num_trades, 0);
    const totalWins = monthEntries.reduce((s, e) => s + e.win_trades, 0);
    const totalPnl = monthEntries.reduce((s, e) => s + e.profit_loss, 0);
    const avgRisk = monthEntries.reduce((s, e) => s + e.daily_risk, 0) / monthEntries.length;
    const best = monthEntries.reduce((b, e) => (e.profit_loss > b.profit_loss ? e : b), monthEntries[0]);
    const worst = monthEntries.reduce((w, e) => (e.profit_loss < w.profit_loss ? e : w), monthEntries[0]);
    return {
      winRate: totalTrades > 0 ? ((totalWins / totalTrades) * 100).toFixed(1) : "0",
      totalTrades,
      monthlyPnl: totalPnl,
      avgRisk: avgRisk.toFixed(0),
      bestDay: best,
      worstDay: worst,
    };
  }, [monthEntries]);

  // Equity curve
  const equityData = useMemo(() => {
    let cum = 0;
    return entries.map((e) => {
      cum += e.profit_loss;
      return { date: e.entry_date.slice(5), equity: cum };
    });
  }, [entries]);

  // Daily P&L
  const dailyPnl = useMemo(
    () => monthEntries.map((e) => ({ day: new Date(e.entry_date).getDate(), pnl: e.profit_loss })),
    [monthEntries]
  );

  // Win/Loss pie
  const winLossData = useMemo(() => {
    const w = monthEntries.reduce((s, e) => s + e.win_trades, 0);
    const l = monthEntries.reduce((s, e) => s + e.loss_trades, 0);
    return [
      { name: "Wins", value: w, color: COLORS.profit },
      { name: "Losses", value: l, color: COLORS.loss },
    ];
  }, [monthEntries]);

  // Emotional distribution
  const emotionData = useMemo(() => {
    const counts: Record<string, number> = { Confident: 0, Neutral: 0, Fearful: 0, Aggressive: 0 };
    monthEntries.forEach((e) => { counts[e.emotional_state] = (counts[e.emotional_state] || 0) + 1; });
    return Object.entries(counts)
      .filter(([, v]) => v > 0)
      .map(([name, value]) => ({
        name, value,
        color: COLORS[name.toLowerCase() as keyof typeof COLORS] || COLORS.neutral,
      }));
  }, [monthEntries]);

  // Risk distribution
  const riskData = useMemo(
    () => monthEntries.map((e) => ({ day: new Date(e.entry_date).getDate(), risk: e.daily_risk })),
    [monthEntries]
  );

  const statCard = (icon: React.ReactNode, label: string, value: string, color?: string) => (
    <Card className="glass border-border/30">
      <CardContent className="p-4 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-muted/20">{icon}</div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
          <p className={`text-lg font-bold font-mono ${color || ""}`}>{value}</p>
        </div>
      </CardContent>
    </Card>
  );

  if (!stats) {
    return (
      <div className="glass rounded-xl p-8 text-center text-muted-foreground">
        <p className="text-lg font-semibold">No entries this month</p>
        <p className="text-sm mt-1">Click a day on the calendar to add your first trade record.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stat cards */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {statCard(<Target className="w-4 h-4 text-primary" />, "Win Rate", `${stats.winRate}%`)}
        {statCard(<BarChart3 className="w-4 h-4 text-primary" />, "Total Trades", String(stats.totalTrades))}
        {statCard(
          stats.monthlyPnl >= 0 ? <TrendingUp className="w-4 h-4 text-emerald-400" /> : <TrendingDown className="w-4 h-4 text-red-400" />,
          "Monthly P&L",
          `$${stats.monthlyPnl.toFixed(0)}`,
          stats.monthlyPnl >= 0 ? "text-emerald-400" : "text-red-400"
        )}
        {statCard(<Target className="w-4 h-4 text-amber-400" />, "Avg Risk", `$${stats.avgRisk}`)}
        {statCard(<Trophy className="w-4 h-4 text-emerald-400" />, "Best Day", `$${stats.bestDay.profit_loss.toFixed(0)}`, "text-emerald-400")}
        {statCard(<Skull className="w-4 h-4 text-red-400" />, "Worst Day", `$${stats.worstDay.profit_loss.toFixed(0)}`, "text-red-400")}
      </div>

      {/* Equity Curve */}
      <Card className="glass border-border/30">
        <CardContent className="p-4">
          <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Equity Curve</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={equityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="equity" stroke={COLORS.profit} strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Daily P&L + Win/Loss */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="glass border-border/30">
          <CardContent className="p-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Daily P&L</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyPnl}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="pnl" radius={[4, 4, 0, 0]}>
                    {dailyPnl.map((d, i) => (
                      <Cell key={i} fill={d.pnl >= 0 ? COLORS.profit : COLORS.loss} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-border/30">
          <CardContent className="p-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Win / Loss Ratio</h3>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={winLossData} dataKey="value" innerRadius={40} outerRadius={60} paddingAngle={4}>
                    {winLossData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 text-xs">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Wins</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> Losses</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Emotion + Risk */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card className="glass border-border/30">
          <CardContent className="p-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Emotional State</h3>
            <div className="h-40 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={emotionData} dataKey="value" innerRadius={35} outerRadius={55} paddingAngle={3}>
                    {emotionData.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-3 text-xs flex-wrap">
              {emotionData.map((d) => (
                <span key={d.name} className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full" style={{ background: d.color }} /> {d.name}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-border/30">
          <CardContent className="p-4">
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Risk Distribution</h3>
            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={riskData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, fontSize: 12 }} />
                  <Bar dataKey="risk" fill="#f59e0b" radius={[4, 4, 0, 0]} opacity={0.8} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
