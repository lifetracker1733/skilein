import { AspectRatio } from "@/components/ui/aspect-ratio";

interface YouTubePlayerProps {
  videoId: string;
  title?: string;
}

/**
 * YouTubePlayer Component with "YouTube Lock"
 * 
 * Features:
 * - Prevents users from clicking through to YouTube via transparent overlay
 * - Strict mode params: modestbranding, rel=0, no autoplay
 * - Clean, distraction-free viewing experience
 */
const YouTubePlayer = ({ videoId, title = "Video Player" }: YouTubePlayerProps) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&autoplay=0`;

  return (
    <div className="overflow-hidden rounded-2xl glass border border-border relative">
      <AspectRatio ratio={16 / 9}>
        {/* The YouTube Lock Shield - Blocks clicks on title bar */}
        <div 
          className="absolute inset-x-0 top-0 h-16 z-20 cursor-default" 
          aria-hidden="true"
          title="Video controls below"
        />
        
        {/* Video iframe */}
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </AspectRatio>
    </div>
  );
};

export default YouTubePlayer;
