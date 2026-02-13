import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import FoodCard from "@/components/FoodCard";
import Footer from "@/components/Footer";
import { menuItems, type Category } from "@/data/menuData";

const Index = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <section id="menu" className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-3">
            Our <span className="text-gradient">Menu</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Handpicked dishes made with love — find your next favorite meal
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <SearchBar value={search} onChange={setSearch} />
          <CategoryFilter active={category} onChange={setCategory} />
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <div key={item.id} className="animate-scale-in" style={{ animationDelay: `${i * 60}ms` }}>
                <FoodCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="font-display text-2xl text-muted-foreground">No dishes found 🍽️</p>
            <p className="font-body text-sm text-muted-foreground mt-2">Try a different search or category</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Index;
