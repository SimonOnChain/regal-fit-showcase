import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "Le Concept", href: "#concept" },
    { name: "Fitness", href: "/fitness" },
    { name: "Aqua", href: "#aqua" },
    { name: "Spa", href: "#spa" },
    { name: "Kids", href: "#kids" },
    { name: "Mo'Snack", href: "#snack" },
    { name: "Galerie Photos", href: "/gallery" },
    { name: "Plannings", href: "#planning" },
    { name: "Nos Tarifs", href: "#pricing" },
  ];

  return (
    <nav className="nav-royal fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Left - Services Menu (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.slice(0, 4).map((service) => (
              <a
                key={service.name}
                href={service.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {service.name}
              </a>
            ))}
          </div>

          {/* Center - Logo */}
          <div className="flex items-center justify-center flex-1 lg:flex-none">
            <div className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-accent" />
              <span className="text-2xl font-serif font-bold text-foreground">
                Royal Fitness
              </span>
            </div>
          </div>

          {/* Right - More Services & Contact (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {services.slice(4).map((service) => (
              <a
                key={service.name}
                href={service.href}
                className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {service.name}
              </a>
            ))}
            <Button className="btn-gold ml-4">
              <a href="#contact">Contact</a>
            </Button>
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
          <div className="lg:hidden mt-4 pb-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-4 mt-4">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="text-foreground hover:text-accent transition-colors duration-300 py-2 text-center font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </a>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button className="btn-gold w-full">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;