import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface TradeEntry {
  id?: string;
  entry_date: string;
  trade_amount: number;
  num_trades: number;
  win_trades: number;
  loss_trades: number;
  daily_risk: number;
  profit_loss: number;
  target_profit: number;
  daily_pct_change: number;
  emotional_state: "Confident" | "Neutral" | "Fearful" | "Aggressive";
  adrenaline_level: number;
  notes: string;
}

const defaultEntry = (date: string): TradeEntry => ({
  entry_date: date,
  trade_amount: 0,
  num_trades: 0,
  win_trades: 0,
  loss_trades: 0,
  daily_risk: 0,
  profit_loss: 0,
  target_profit: 0,
  daily_pct_change: 0,
  emotional_state: "Neutral",
  adrenaline_level: 5,
  notes: "",
});

export function useTradeJournal() {
  const [entries, setEntries] = useState<TradeEntry[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("trade_journal_entries")
      .select("*")
      .order("entry_date", { ascending: true });

    if (!error && data) {
      setEntries(data as TradeEntry[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const upsertEntry = async (entry: TradeEntry) => {
    const { id, ...rest } = entry;
    if (id) {
      const { error } = await supabase
        .from("trade_journal_entries")
        .update(rest)
        .eq("id", id);
      if (error) throw error;
    } else {
      const { error } = await supabase
        .from("trade_journal_entries")
        .insert(rest);
      if (error) throw error;
    }
    await fetchEntries();
  };

  const deleteEntry = async (id: string) => {
    const { error } = await supabase
      .from("trade_journal_entries")
      .delete()
      .eq("id", id);
    if (error) throw error;
    await fetchEntries();
  };

  const getEntryForDate = (date: string) =>
    entries.find((e) => e.entry_date === date);

  return { entries, loading, upsertEntry, deleteEntry, getEntryForDate, defaultEntry, fetchEntries };
}
