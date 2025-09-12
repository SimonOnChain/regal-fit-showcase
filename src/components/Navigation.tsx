import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, ChevronDown } from "lucide-react";

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

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const mainNavItems = [
    { name: "Le Concept", href: "/" },
    { 
      name: "Activités", 
      href: "#",
      dropdown: [
        { name: "Fitness", href: "/fitness" },
        { name: "Foot à 5", href: "/foot" },
        { name: "Aqua", href: "/aqua" },
        { name: "Spa", href: "/spa" },
        { name: "Kids", href: "/kids" },
      ]
    },
    { name: "Mo'Snack", href: "/mosnack" },
    { 
      name: "Découvrir", 
      href: "#",
      dropdown: [
        { name: "Galerie Photos", href: "/gallery" },
        { name: "Plannings", href: "/plannings" },
      ]
    },
    { name: "Nos Tarifs", href: "/tarifs" },
  ];

  const allServices = [
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

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className={`nav-royal fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between h-12">
          
          {/* Left - Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`nav-link-active text-foreground hover:text-accent transition-all duration-300 font-medium fade-slide-in stagger-${index + 1} flex items-center gap-1`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                        style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="dropdown-menu absolute top-full left-0 mt-2 w-48 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="dropdown-item block"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`nav-link-active text-foreground hover:text-accent transition-all duration-300 font-medium fade-slide-in stagger-${index + 1}`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Center - Contact Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <Button className="btn-gold gold-glow-hover animate-pulse hover:animate-gold-pulse px-8 py-3 text-base font-medium">
              <a href="/contact">Contact</a>
            </Button>
          </div>

          {/* Right - Logo */}
          <div className="flex items-center justify-end lg:flex-none">
            <div className="flex items-center space-x-3 fade-slide-in">
              <Crown className="h-9 w-9 text-accent gold-glow-hover" />
              <span className="text-2xl font-sans font-bold text-foreground">
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
          <div className="lg:hidden mt-6 pb-4 border-t border-border/50 animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4 mt-6">
              {allServices.map((service, index) => (
                <a
                  key={service.name}
                  href={service.href}
                  className={`text-foreground hover:text-accent transition-all duration-300 py-3 text-center font-medium scale-hover animate-stagger-fade-in stagger-${index % 6 + 1}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {service.name}
                </a>
              ))}
            </div>
            <div className="mt-6 text-center animate-fade-in stagger-6">
              <Button className="btn-gold w-full gold-glow-hover py-3 text-base font-medium">
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