import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CopyButtonProps {
  text: string;
  label?: string;
}

const CopyButton = ({ text, label = "Copy" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Paste it into your AI tool to get started.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="relative glass-card p-5">
      {/* Prompt Display */}
      <div className="font-mono text-sm text-muted-foreground leading-relaxed pr-20">
        <pre className="whitespace-pre-wrap break-words">{text}</pre>
      </div>
      
      {/* Copy Button */}
      <Button
        onClick={handleCopy}
        size="sm"
        className={`absolute top-4 right-4 rounded-full gap-2 text-xs font-semibold ${
          copied 
            ? 'bg-category-freelancing text-background hover:bg-category-freelancing' 
            : 'bg-foreground text-background hover:bg-foreground/90'
        }`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            {label}
          </>
        )}
      </Button>
    </div>
  );
};

export default CopyButton;
