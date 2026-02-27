import { useMemo } from "react";
import { TradeEntry } from "@/hooks/useTradeJournal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  year: number;
  month: number;
  entries: TradeEntry[];
  onSelectDate: (date: string) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default function JournalCalendar({ year, month, entries, onSelectDate, onPrevMonth, onNextMonth }: Props) {
  const entryMap = useMemo(() => {
    const m: Record<string, TradeEntry> = {};
    entries.forEach((e) => { m[e.entry_date] = e; });
    return m;
  }, [entries]);

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDow = (firstDay.getDay() + 6) % 7; // Mon=0
    const cells: (number | null)[] = [];
    for (let i = 0; i < startDow; i++) cells.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return cells;
  }, [year, month]);

  const dateStr = (d: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  return (
    <div className="glass rounded-xl p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Button variant="ghost" size="icon" onClick={onPrevMonth}><ChevronLeft className="w-5 h-5" /></Button>
        <h2 className="text-xl font-bold tracking-tight">{MONTHS[month]} {year}</h2>
        <Button variant="ghost" size="icon" onClick={onNextMonth}><ChevronRight className="w-5 h-5" /></Button>
      </div>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-center text-[10px] font-semibold text-muted-foreground uppercase tracking-widest py-1">{w}</div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((d, i) => {
          if (d === null) return <div key={`e-${i}`} />;
          const ds = dateStr(d);
          const entry = entryMap[ds];
          const isToday = ds === new Date().toISOString().slice(0, 10);
          const pnl = entry?.profit_loss ?? 0;

          return (
            <button
              key={ds}
              onClick={() => onSelectDate(ds)}
              className={cn(
                "relative aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 text-sm transition-all duration-200 hover:scale-105 border",
                isToday ? "border-primary/60 bg-primary/10" : "border-transparent hover:border-border/50",
                entry ? (pnl > 0 ? "bg-emerald-500/10" : pnl < 0 ? "bg-red-500/10" : "bg-muted/20") : "hover:bg-muted/10"
              )}
            >
              <span className={cn("font-semibold text-xs", isToday && "text-primary")}>{d}</span>
              {entry && (
                <span className={cn("text-[9px] font-mono font-bold", pnl > 0 ? "text-emerald-400" : pnl < 0 ? "text-red-400" : "text-muted-foreground")}>
                  {pnl > 0 ? "+" : ""}{pnl.toFixed(0)}
                </span>
              )}
              {entry && (
                <div className={cn("absolute bottom-0.5 w-1.5 h-1.5 rounded-full", pnl > 0 ? "bg-emerald-400" : pnl < 0 ? "bg-red-400" : "bg-muted-foreground")} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
