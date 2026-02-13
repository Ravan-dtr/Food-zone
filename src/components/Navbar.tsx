import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md card-shadow"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-2xl font-bold text-gradient">
          Foody Zone 🍔
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#menu" className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Menu
          </a>
          <a href="#" className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="font-body text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
            Contact
          </a>
        </div>
        <button className="relative p-2 rounded-full hover:bg-secondary transition-colors">
          <ShoppingCart className="h-5 w-5 text-foreground" />
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
            0
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
