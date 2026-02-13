import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Gourmet food spread"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-up">
        <span className="inline-block mb-4 text-lg font-body font-medium text-primary-foreground/80 tracking-widest uppercase">
          🍜 Est. 2024
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
          Welcome to{" "}
          <span className="block">Foody Zone</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-xl mx-auto">
          Delicious Meals, Delivered Fresh — crafted with passion and the finest ingredients
        </p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 bg-card text-foreground font-body font-semibold px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300 card-shadow"
        >
          Explore Menu ↓
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
