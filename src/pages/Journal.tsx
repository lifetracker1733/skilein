import { useState, useCallback } from "react";
import { useTradeJournal } from "@/hooks/useTradeJournal";
import JournalCalendar from "@/components/journal/JournalCalendar";
import JournalDashboard from "@/components/journal/JournalDashboard";
import TradeEntryForm from "@/components/journal/TradeEntryForm";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, LayoutDashboard, CalendarDays } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

export default function Journal() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [view, setView] = useState<"calendar" | "dashboard">("calendar");

  const { entries, loading, upsertEntry, deleteEntry, getEntryForDate, defaultEntry } = useTradeJournal();

  const prevMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 0) { setYear((y) => y - 1); return 11; }
      return m - 1;
    });
  }, []);

  const nextMonth = useCallback(() => {
    setMonth((m) => {
      if (m === 11) { setYear((y) => y + 1); return 0; }
      return m + 1;
    });
  }, []);

  const handleSave = async (entry: typeof entries[0]) => {
    try {
      await upsertEntry(entry);
      toast({ title: "Entry saved", description: `Trade record for ${entry.entry_date} saved.` });
    } catch {
      toast({ title: "Error", description: "Failed to save entry.", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEntry(id);
      setSelectedDate(null);
      toast({ title: "Deleted", description: "Entry removed." });
    } catch {
      toast({ title: "Error", description: "Failed to delete.", variant: "destructive" });
    }
  };

  const currentEntry = selectedDate
    ? getEntryForDate(selectedDate) || defaultEntry(selectedDate)
    : null;

  const todayStr = now.toISOString().slice(0, 10);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Trading Journal</h1>
            <p className="text-sm text-muted-foreground mt-1">Discipline. Risk Control. Performance.</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={view === "calendar" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("calendar")}
              className="gap-2"
            >
              <CalendarDays className="w-4 h-4" /> Calendar
            </Button>
            <Button
              variant={view === "dashboard" ? "default" : "outline"}
              size="sm"
              onClick={() => setView("dashboard")}
              className="gap-2"
            >
              <LayoutDashboard className="w-4 h-4" /> Analytics
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-20 text-muted-foreground">Loading journal...</div>
        ) : view === "calendar" ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <JournalCalendar
                year={year}
                month={month}
                entries={entries}
                onSelectDate={setSelectedDate}
                onPrevMonth={prevMonth}
                onNextMonth={nextMonth}
              />
            </div>
            <div>
              <JournalDashboard entries={entries} year={year} month={month} />
            </div>
          </div>
        ) : (
          <JournalDashboard entries={entries} year={year} month={month} />
        )}
      </div>

      {/* FAB */}
      <button
        onClick={() => setSelectedDate(todayStr)}
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform z-50"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Entry Dialog */}
      <Dialog open={!!selectedDate} onOpenChange={(open) => !open && setSelectedDate(null)}>
        <DialogContent className="max-w-md glass border-border/30">
          <DialogTitle className="sr-only">Trade Entry</DialogTitle>
          <DialogDescription className="sr-only">Add or edit a trade entry for the selected day.</DialogDescription>
          {currentEntry && (
            <TradeEntryForm
              entry={currentEntry}
              onSave={handleSave}
              onDelete={currentEntry.id ? () => handleDelete(currentEntry.id!) : undefined}
              onClose={() => setSelectedDate(null)}
            />
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
