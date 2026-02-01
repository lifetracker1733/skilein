import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  jobTitle: string;
}

const ApplicationModal = ({ open, onOpenChange, jobTitle }: ApplicationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whyKiller: "",
    portfolio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Sent!",
      description: "We'll review your application and get back to you within 48 hours.",
    });

    setFormData({ name: "", email: "", whyKiller: "", portfolio: "" });
    setIsSubmitting(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-[hsl(222,47%,4%)] border-white/10 text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold tracking-tight">
            Apply for {jobTitle}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/70">
              Full Name
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/30 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/70">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/30 focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whyKiller" className="text-foreground/70">
              Why are you a killer?
            </Label>
            <Textarea
              id="whyKiller"
              placeholder="Tell us what makes you unstoppable..."
              value={formData.whyKiller}
              onChange={(e) => setFormData({ ...formData, whyKiller: e.target.value })}
              required
              rows={4}
              className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/30 focus:border-accent resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="portfolio" className="text-foreground/70">
              Link to Portfolio (Optional)
            </Label>
            <Input
              id="portfolio"
              type="url"
              placeholder="https://yourportfolio.com"
              value={formData.portfolio}
              onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              className="bg-white/5 border-white/10 text-foreground placeholder:text-foreground/30 focus:border-accent"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full py-6 font-semibold text-base mt-6"
          >
            {isSubmitting ? "Sending..." : "Send Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
