import { cn } from "@/lib/utils";
import type { Category } from "@/data/mockCourses";

type FilterOption = Category | "All";

interface CategoryFilterProps {
  selectedCategory: FilterOption;
  onCategoryChange: (category: FilterOption) => void;
}

const categories: FilterOption[] = ["All", "Freelancing", "Stock Trading", "Crypto", "Bonds"];

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selectedCategory === category
              ? "bg-foreground text-background"
              : "bg-transparent text-muted-foreground border border-border hover:border-foreground/30 hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
