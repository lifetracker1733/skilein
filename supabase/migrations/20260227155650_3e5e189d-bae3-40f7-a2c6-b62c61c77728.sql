
-- Create trading journal entries table
CREATE TABLE public.trade_journal_entries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  entry_date DATE NOT NULL UNIQUE,
  trade_amount NUMERIC(12,2) DEFAULT 0,
  num_trades INTEGER DEFAULT 0,
  win_trades INTEGER DEFAULT 0,
  loss_trades INTEGER DEFAULT 0,
  daily_risk NUMERIC(12,2) DEFAULT 0,
  profit_loss NUMERIC(12,2) DEFAULT 0,
  target_profit NUMERIC(12,2) DEFAULT 0,
  daily_pct_change NUMERIC(6,2) DEFAULT 0,
  emotional_state TEXT DEFAULT 'Neutral' CHECK (emotional_state IN ('Confident', 'Neutral', 'Fearful', 'Aggressive')),
  adrenaline_level INTEGER DEFAULT 5 CHECK (adrenaline_level >= 1 AND adrenaline_level <= 10),
  notes TEXT DEFAULT '',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.trade_journal_entries ENABLE ROW LEVEL SECURITY;

-- Public read/write for now (no auth required per user request - single user journal)
CREATE POLICY "Allow public read" ON public.trade_journal_entries FOR SELECT USING (true);
CREATE POLICY "Allow public insert" ON public.trade_journal_entries FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update" ON public.trade_journal_entries FOR UPDATE USING (true);
CREATE POLICY "Allow public delete" ON public.trade_journal_entries FOR DELETE USING (true);

-- Timestamp trigger
CREATE OR REPLACE FUNCTION public.update_trade_journal_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_trade_journal_entries_updated_at
BEFORE UPDATE ON public.trade_journal_entries
FOR EACH ROW
EXECUTE FUNCTION public.update_trade_journal_updated_at();
