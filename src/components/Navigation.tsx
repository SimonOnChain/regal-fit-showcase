import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
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

  // Lock body scroll and keep overlay aligned under the navbar
  useEffect(() => {
    const updateTop = () => setOverlayTop(navRef.current?.getBoundingClientRect().height ?? 100);

    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      updateTop();
      window.addEventListener('resize', updateTop);
      window.addEventListener('scroll', updateTop, { passive: true } as any);
      return () => {
        document.body.style.overflow = prev;
        window.removeEventListener('resize', updateTop);
        window.removeEventListener('scroll', updateTop);
      };
    }

    // menu closed - ensure value is correct as user scrolls
    updateTop();
  }, [isMobileMenuOpen]);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLElement | null>(null);
  const [overlayTop, setOverlayTop] = useState<number>(100);

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

  // Fixed dropdown state management
  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`nav-royal fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Left - Logo & Branding */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-3 fade-slide-in">
              <Crown className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white flex-shrink-0" />
              <span className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold uppercase tracking-wide text-white leading-none" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Royal Fitness
              </span>
            </div>
          </div>

          {/* Center - Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 overflow-hidden">
            <div className="flex items-center gap-1 xl:gap-2 overflow-x-auto scrollbar-hide max-w-full">
              {mainNavItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div 
                      className="relative"
                    >
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                        className="nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-medium text-[11px] lg:text-xs xl:text-sm uppercase tracking-tight lg:tracking-normal px-1.5 lg:px-2 xl:px-3 py-2 fade-slide-in flex items-center gap-1 leading-none whitespace-nowrap"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                          style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </button>
                      {activeDropdown === item.name && (
                        <div 
                          className="dropdown-menu absolute top-full left-0 mt-1 w-48 py-2 z-[100] animate-slide-down"
                          onMouseEnter={() => handleDropdownStay(item.name)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="dropdown-item block px-4 py-3 hover:bg-blue-500/20 transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-medium text-[11px] lg:text-xs xl:text-sm uppercase tracking-tight lg:tracking-normal px-1.5 lg:px-2 xl:px-3 py-2 fade-slide-in leading-none whitespace-nowrap"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Button (Desktop) */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-contact-shimmer leading-none"
                      style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                CONTACT
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-blue-200 min-h-[44px] min-w-[44px]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && createPortal(
          <div className="fixed inset-0 bg-slate-900/95 backdrop-blur-2xl z-[60] animate-slide-down" style={{ top: overlayTop }}>
            <div className="overflow-y-auto h-full p-4 pb-20">
              <div className="grid grid-cols-1 gap-3 max-w-md mx-auto mt-6 sm:mt-8">
                {allServices.map((service, index) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="text-white hover:text-blue-200 transition-all duration-300 py-4 px-4 text-center font-medium bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 min-h-[44px] flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <div className="mt-4">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white w-full py-4 text-base font-bold uppercase tracking-wide rounded-lg min-h-[44px] flex items-center justify-center transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

      </div>
    </nav>
  );
};

export default Navigation;