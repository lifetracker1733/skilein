import { useState, useEffect } from "react";
import { TradeEntry } from "@/hooks/useTradeJournal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Trash2 } from "lucide-react";

interface TradeEntryFormProps {
  entry: TradeEntry;
  onSave: (entry: TradeEntry) => Promise<void>;
  onDelete?: () => Promise<void>;
  onClose: () => void;
}

export default function TradeEntryForm({ entry, onSave, onDelete, onClose }: TradeEntryFormProps) {
  const [form, setForm] = useState<TradeEntry>(entry);
  const [saving, setSaving] = useState(false);

  useEffect(() => setForm(entry), [entry]);

  const set = <K extends keyof TradeEntry>(key: K, val: TradeEntry[K]) =>
    setForm((p) => ({ ...p, [key]: val }));

  const handleSave = async () => {
    setSaving(true);
    try {
      await onSave(form);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  const field = (label: string, key: keyof TradeEntry, type = "number") => (
    <div className="space-y-1">
      <label className="text-xs text-muted-foreground uppercase tracking-wider">{label}</label>
      <Input
        type={type}
        value={form[key] as string | number}
        onChange={(e) => set(key, type === "number" ? Number(e.target.value) : e.target.value)}
        className="bg-background/50 border-border/50"
      />
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground">{form.entry_date}</h3>
        <p className="text-xs text-muted-foreground">Daily Trade Record</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {field("Trade Amount ($)", "trade_amount")}
        {field("# Trades", "num_trades")}
        {field("Win Trades", "win_trades")}
        {field("Loss Trades", "loss_trades")}
        {field("Daily Risk ($)", "daily_risk")}
        {field("P&L ($)", "profit_loss")}
        {field("Target Profit ($)", "target_profit")}
        {field("Daily % Change", "daily_pct_change")}
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground uppercase tracking-wider">Emotional State</label>
        <Select value={form.emotional_state} onValueChange={(v) => set("emotional_state", v as TradeEntry["emotional_state"])}>
          <SelectTrigger className="bg-background/50 border-border/50">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {["Confident", "Neutral", "Fearful", "Aggressive"].map((s) => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs text-muted-foreground uppercase tracking-wider">
          Adrenaline Level: {form.adrenaline_level}/10
        </label>
        <Slider
          value={[form.adrenaline_level]}
          onValueChange={([v]) => set("adrenaline_level", v)}
          min={1} max={10} step={1}
        />
      </div>

      <div className="space-y-1">
        <label className="text-xs text-muted-foreground uppercase tracking-wider">Notes / Reflection</label>
        <Textarea
          value={form.notes}
          onChange={(e) => set("notes", e.target.value)}
          className="bg-background/50 border-border/50 min-h-[60px]"
          placeholder="What did you learn today?"
        />
      </div>

      <div className="flex gap-2 pt-2">
        <Button onClick={handleSave} disabled={saving} className="flex-1 gap-2">
          <Save className="w-4 h-4" /> {saving ? "Saving..." : "Save Entry"}
        </Button>
        {onDelete && (
          <Button variant="destructive" size="icon" onClick={onDelete}>
            <Trash2 className="w-4 h-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
