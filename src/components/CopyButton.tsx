import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface CopyButtonProps {
  text: string;
  label?: string;
}

const CopyButton = ({ text, label = "Copy Prompt" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "The prompt has been copied. Paste it into your AI tool.",
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
    <div className="relative">
      {/* Prompt Display */}
      <div className="bg-background/50 border border-border rounded-lg p-4 font-mono text-sm text-muted-foreground overflow-x-auto">
        <pre className="whitespace-pre-wrap break-words">{text}</pre>
      </div>
      
      {/* Copy Button */}
      <Button
        onClick={handleCopy}
        variant="secondary"
        size="sm"
        className="absolute top-3 right-3 gap-2"
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-category-freelancing" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" />
            {label}
          </>
        )}
      </Button>
    </div>
  );
};

export default CopyButton;
