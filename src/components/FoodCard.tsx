import { ShoppingCart } from "lucide-react";
import type { MenuItem } from "@/data/menuData";

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  return (
    <div className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden h-52">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1 rounded-full">
          {item.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-semibold text-card-foreground mb-1">
          {item.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-display font-bold text-gradient">
            ${item.price.toFixed(2)}
          </span>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm px-4 py-2.5 rounded-full hover:scale-105 active:scale-95 transition-transform duration-200">
            <ShoppingCart className="h-4 w-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
