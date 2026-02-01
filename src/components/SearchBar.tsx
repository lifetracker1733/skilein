import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ value, onChange, placeholder = "Search courses..." }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div 
      className={`relative flex items-center transition-all duration-300 rounded-full border ${
        isFocused ? 'border-foreground/30 bg-card' : 'border-border bg-card/50'
      }`}
    >
      <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="pl-11 pr-10 py-5 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground font-medium text-sm"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="absolute right-2 h-7 w-7 rounded-full hover:bg-secondary text-muted-foreground"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
