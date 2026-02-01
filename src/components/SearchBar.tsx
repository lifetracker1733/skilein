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
      className={`relative flex items-center transition-all duration-200 ${
        isFocused ? 'ring-2 ring-primary/50' : ''
      } rounded-full bg-card border border-border overflow-hidden`}
    >
      <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        className="pl-12 pr-10 py-6 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => onChange("")}
          className="absolute right-2 h-8 w-8 rounded-full hover:bg-muted"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default SearchBar;
