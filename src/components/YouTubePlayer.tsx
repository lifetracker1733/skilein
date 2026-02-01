import { useState, useRef, useEffect } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

/**
 * YouTubePlayer Component with "YouTube Lock" + Embed Fallback
 * 
 * Features:
 * - Prevents users from clicking through to YouTube via transparent overlay
 * - Strict mode params: modestbranding, rel=0, no autoplay
 * - Fallback UI if video fails to embed
 * - Clean, distraction-free viewing experience
 */
const YouTubePlayer = ({ videoId, title = "Video Player" }: YouTubePlayerProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  useEffect(() => {
    // Reset states when videoId changes
    setHasError(false);
    setIsLoading(true);
  }, [videoId]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  return (
    <div className="overflow-hidden rounded-2xl glass border border-border relative">
      <AspectRatio ratio={16 / 9}>
        {/* Loading State */}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-foreground/50 font-medium">Loading video...</span>
            </div>
          </div>
        )}

        {/* Error Fallback State */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-30">
            <div className="flex flex-col items-center gap-4 p-8 text-center max-w-md">
              <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Video Unavailable</h3>
                <p className="text-sm text-foreground/50 mb-4">
                  This video cannot be embedded. Watch it directly on YouTube instead.
                </p>
              </div>
              <Button 
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold"
              >
                <a href={watchUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch on YouTube (External)
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* The YouTube Lock Shield - Blocks clicks on title bar */}
        {!hasError && (
          <div 
            className="absolute inset-x-0 top-0 h-16 z-20 cursor-default" 
            aria-hidden="true"
            title="Video controls below"
          />
        )}
        
        {/* Video iframe */}
        <iframe
          ref={iframeRef}
          src={embedUrl}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={`h-full w-full ${hasError ? 'invisible' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubePlayer;
