import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 40,
  pauseOnHover = true,
  className,
}: MarqueeProps) => {
  const animationDirection = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div
      className={cn(
        "group flex overflow-hidden",
        pauseOnHover && "[&:hover_.marquee-content]:animation-play-state-paused",
        className
      )}
    >
      <div
        className={cn("marquee-content flex shrink-0 gap-5", animationDirection)}
        style={{ animationDuration: `${speed}s` }}
      >
        {children}
      </div>
      <div
        className={cn("marquee-content flex shrink-0 gap-5", animationDirection)}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};

export default Marquee;
