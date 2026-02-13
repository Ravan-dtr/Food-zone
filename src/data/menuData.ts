export type Category = "All" | "Breakfast" | "Lunch" | "Dinner";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Pancakes",
    description: "Fluffy buttermilk pancakes with maple syrup and fresh berries",
    price: 8.99,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Eggs Benedict",
    description: "Poached eggs on English muffin with hollandaise sauce",
    price: 12.49,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-9b8d0446a312?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Avocado Toast",
    description: "Sourdough toast topped with smashed avocado, cherry tomatoes & feta",
    price: 10.99,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Gourmet Burger",
    description: "Angus beef patty with caramelized onions, cheddar & truffle aioli",
    price: 15.99,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Caesar Salad",
    description: "Crisp romaine, parmesan shavings, croutons & classic dressing",
    price: 11.49,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Spicy Ramen",
    description: "Rich tonkotsu broth with chashu pork, soft egg & scallions",
    price: 14.99,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Grilled Salmon",
    description: "Atlantic salmon fillet with lemon herb butter and asparagus",
    price: 22.99,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Pasta Carbonara",
    description: "Al dente spaghetti with pancetta, egg yolk & pecorino romano",
    price: 16.99,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Ribeye Steak",
    description: "12oz prime ribeye with roasted garlic butter and truffle fries",
    price: 32.99,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Chicken Tikka Bowl",
    description: "Tandoori chicken with basmati rice, raita & naan bread",
    price: 14.49,
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Berry Smoothie Bowl",
    description: "Açaí blend with granola, coconut flakes & fresh fruit",
    price: 9.99,
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Lobster Risotto",
    description: "Creamy arborio rice with butter-poached lobster & parmesan",
    price: 28.99,
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop",
  },
];

export const categories: Category[] = ["All", "Breakfast", "Lunch", "Dinner"];
