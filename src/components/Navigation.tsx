import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "Le Concept", href: "/" },
    { name: "Fitness", href: "/fitness" },
    { name: "Foot à 5", href: "/foot" },
    { name: "Aqua", href: "/aqua" },
    { name: "Spa", href: "/spa" },
    { name: "Kids", href: "/kids" },
    { name: "Mo'Snack", href: "/mosnack" },
    { name: "Galerie Photos", href: "/gallery" },
    { name: "Plannings", href: "/plannings" },
    { name: "Nos Tarifs", href: "/tarifs" },
  ];

  return (
    <nav className={`nav-royal fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left - Services Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.slice(0, 4).map((service, index) => (
              <a
                key={service.name}
                href={service.href}
                className={`nav-link-active text-foreground hover:text-accent transition-all duration-300 font-medium fade-slide-in stagger-${index + 1}`}
              >
                {service.name}
              </a>
            ))}
          </div>

          {/* Center - More Services & Contact (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {services.slice(4).map((service, index) => (
              <a
                key={service.name}
                href={service.href}
                className={`nav-link-active text-foreground hover:text-accent transition-all duration-300 font-medium fade-slide-in stagger-${index + 5}`}
              >
                {service.name}
              </a>
            ))}
            <Button className="btn-gold ml-4 gold-glow-hover animate-pulse hover:animate-gold-pulse">
              <a href="/contact">Contact</a>
            </Button>
          </div>

          {/* Right - Logo */}
          <div className="flex items-center justify-end lg:flex-none">
            <div className="flex items-center space-x-2 fade-slide-in">
              <Crown className="h-8 w-8 text-accent gold-glow-hover" />
              <span className="text-2xl font-serif font-bold text-foreground">
                Royal Fitness
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {services.map((service, index) => (
                <a
                  key={service.name}
                  href={service.href}
                  className={`text-foreground hover:text-accent transition-all duration-300 py-2 text-center font-medium scale-hover animate-stagger-fade-in stagger-${index % 6 + 1}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </a>
              ))}
            </div>
            <div className="mt-4 text-center animate-fade-in stagger-6">
              <Button className="btn-gold w-full gold-glow-hover">
                <a href="/contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;