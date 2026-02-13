const Footer = () => {
  return (
    <footer className="bg-warm-brown text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-display text-2xl font-bold mb-3">Foody Zone 🍔🍜🍰</h3>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Crafting unforgettable dining experiences with fresh, locally-sourced ingredients since 2024.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 font-body text-sm text-primary-foreground/70">
              <li>📧 hello@foodyzone.com</li>
              <li>📞 +1 (555) 123-4567</li>
              <li>📍 123 Flavor St, Foodville</li>
            </ul>
            <div className="flex gap-4 mt-4">
              {["Instagram", "Twitter", "Facebook"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center text-xs font-body font-bold hover:bg-primary transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 text-center font-body text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Foody Zone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
