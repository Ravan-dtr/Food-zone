import { categories, type Category } from "@/data/menuData";

interface CategoryFilterProps {
  active: Category;
  onChange: (category: Category) => void;
}

const CategoryFilter = ({ active, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-2.5 rounded-full font-body font-semibold text-sm transition-all duration-300 ${
            active === cat
              ? "bg-primary text-primary-foreground shadow-lg scale-105"
              : "bg-secondary text-secondary-foreground hover:bg-primary/10"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
