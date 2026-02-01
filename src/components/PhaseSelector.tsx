import { PlayCircle, ChevronRight, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CurriculumPhase } from "@/data/mockCourses";

interface PhaseSelectorProps {
  phases: CurriculumPhase[];
  activePhaseIndex: number;
  onPhaseSelect: (index: number) => void;
  completedPhases?: number[];
}

const PhaseSelector = ({ 
  phases, 
  activePhaseIndex, 
  onPhaseSelect,
  completedPhases = []
}: PhaseSelectorProps) => {
  return (
    <div className="glass rounded-2xl border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <h3 className="font-bold text-foreground tracking-tight">Curriculum</h3>
        <p className="text-xs text-foreground/40 mt-1">
          {phases.length} phases • Click to switch
        </p>
      </div>
      
      <div className="divide-y divide-border">
        {phases.map((phase, index) => {
          const isActive = index === activePhaseIndex;
          const isCompleted = completedPhases.includes(index);
          
          return (
            <button
              key={index}
              onClick={() => onPhaseSelect(index)}
              className={cn(
                "w-full text-left p-4 transition-all duration-200 group",
                isActive 
                  ? "bg-primary/10 border-l-2 border-l-primary" 
                  : "hover:bg-white/5 border-l-2 border-l-transparent"
              )}
            >
              <div className="flex items-start gap-3">
                {/* Phase Icon */}
                <div className={cn(
                  "mt-0.5 shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all",
                  isActive 
                    ? "bg-primary text-primary-foreground" 
                    : isCompleted 
                      ? "bg-tag-skill/20 text-tag-skill"
                      : "bg-white/5 text-foreground/40 group-hover:bg-white/10"
                )}>
                  {isCompleted ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <PlayCircle className="w-4 h-4" />
                  )}
                </div>
                
                {/* Phase Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className={cn(
                      "font-semibold text-sm truncate transition-colors",
                      isActive ? "text-primary" : "text-foreground"
                    )}>
                      {phase.phaseTitle}
                    </h4>
                  </div>
                  
                  <div className="mt-1 flex flex-wrap gap-1">
                    {phase.topics.slice(0, 2).map((topic, topicIndex) => (
                      <span 
                        key={topicIndex}
                        className="text-xs text-foreground/40 truncate"
                      >
                        {topic}{topicIndex < Math.min(phase.topics.length - 1, 1) ? " •" : ""}
                      </span>
                    ))}
                    {phase.topics.length > 2 && (
                      <span className="text-xs text-foreground/30">
                        +{phase.topics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Arrow */}
                <ChevronRight className={cn(
                  "w-4 h-4 shrink-0 transition-all",
                  isActive 
                    ? "text-primary translate-x-1" 
                    : "text-foreground/20 group-hover:text-foreground/40"
                )} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PhaseSelector;
