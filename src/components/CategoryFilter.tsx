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
    <div className="flex flex-wrap gap-2 md:gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            "border hover:border-primary/50",
            selectedCategory === category
              ? "gradient-primary text-white border-transparent shadow-lg"
              : "bg-card text-muted-foreground border-border hover:text-foreground hover:bg-muted"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
