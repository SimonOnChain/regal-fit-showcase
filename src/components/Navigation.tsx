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
        { name: "CrossFit", href: "/crossfit" },
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

  // Improved dropdown state management
  const handleDropdownEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    // Small delay to allow moving between dropdown and trigger
    setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleDropdownStay = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  return (
    <nav className={`nav-royal fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between h-12">
          
          {/* Left - Logo & Branding */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-4 fade-slide-in">
              <Crown className="h-10 w-10 text-white" />
              <span className="text-2xl font-extrabold uppercase tracking-wider text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
                Royal Fitness
              </span>
            </div>
          </div>

          {/* Center - Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center">
              {mainNavItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => handleDropdownEnter(item.name)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        className={`nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-bold text-sm uppercase tracking-widest px-3 py-2 fade-slide-in stagger-${index + 1} flex items-center gap-1`}
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                          style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className="dropdown-menu absolute top-full left-0 mt-1 w-48 py-2 z-50 animate-slide-down"
                          onMouseEnter={() => handleDropdownStay(item.name)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="dropdown-item block px-4 py-3 hover:bg-blue-500/20 transition-all duration-200"
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
                      className={`nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-bold text-sm uppercase tracking-widest px-3 py-2 fade-slide-in stagger-${index + 1}`}
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Button (Desktop) */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Button className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white px-10 py-4 text-base font-extrabold uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-contact-shimmer"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 900 }}>
              <a href="/contact">CONTACT</a>
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