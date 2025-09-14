import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, Menu, X, ChevronDown } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const mainNavItems = [
    { name: "LE CONCEPT", href: "/" },
    { 
      name: "ACTIVITÉS", 
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
    { name: "MO'SNACK", href: "/mosnack" },
    { 
      name: "DÉCOUVRIR", 
      href: "#",
      dropdown: [
        { name: "Galerie Photos", href: "/gallery" },
        { name: "Plannings", href: "/plannings" },
      ]
    },
    { name: "NOS TARIFS", href: "/tarifs" },
  ];

  const allServices = [
    { name: "Le Concept", href: "/" },
    { name: "Fitness", href: "/fitness" },
    { name: "CrossFit", href: "/crossfit" },
    { name: "Foot à 5", href: "/foot" },
    { name: "Aqua", href: "/aqua" },
    { name: "Spa", href: "/spa" },
    { name: "Kids", href: "/kids" },
    { name: "Mo'Snack", href: "/mosnack" },
    { name: "Galerie Photos", href: "/gallery" },
    { name: "Plannings", href: "/plannings" },
    { name: "Nos Tarifs", href: "/tarifs" },
  ];

  const handleDropdownClick = (itemName: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`nav-royal fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-between h-10 sm:h-12 md:h-14 lg:h-16">
          
          {/* Left - Logo & Branding */}
          <div className="flex items-center flex-shrink-0">
            <div className="flex items-center space-x-2 sm:space-x-3 fade-slide-in">
              <Crown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 text-white flex-shrink-0" />
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase tracking-wide text-white leading-none" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>
                Royal Fitness
              </span>
            </div>
          </div>

          {/* Center - Main Navigation (Desktop) */}
          <div className="hidden lg:flex items-center justify-center flex-1 overflow-hidden" ref={dropdownRef}>
            <div className="flex items-center gap-2 xl:gap-4 overflow-x-auto scrollbar-hide max-w-full">
              {mainNavItems.map((item, index) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={(e) => handleDropdownClick(item.name, e)}
                        className="nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-medium text-xs lg:text-sm xl:text-base uppercase tracking-tight px-2 lg:px-3 xl:px-4 py-2 fade-slide-in flex items-center gap-1 leading-none whitespace-nowrap"
                        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}
                      >
                        {item.name}
                        <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4 transition-transform duration-200 ml-1" 
                          style={{ transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div 
                          className="absolute top-full left-0 mt-2 w-48 rounded-lg shadow-2xl py-2 animate-fade-in"
                          style={{
                            backgroundColor: 'rgba(30, 41, 59, 0.95)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            zIndex: 9999
                          }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-3 text-white/90 hover:text-white transition-all duration-200 rounded-md mx-2 font-medium text-sm"
                              style={{
                                backgroundColor: 'transparent'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }}
                              onClick={handleDropdownItemClick}
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
                      className="nav-link-premium text-white hover:text-blue-200 transition-all duration-300 font-medium text-xs lg:text-sm xl:text-base uppercase tracking-tight px-2 lg:px-3 xl:px-4 py-2 fade-slide-in leading-none whitespace-nowrap"
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
              <Button className="bg-gradient-to-r from-blue-300 to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white px-3 lg:px-4 xl:px-6 py-2 lg:py-3 text-xs lg:text-sm font-bold uppercase tracking-wide rounded-full shadow-lg hover:shadow-xl transition-all duration-300 btn-contact-shimmer leading-none"
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
          <div 
            className="fixed bg-slate-900/95 backdrop-blur-2xl z-[60]" 
            style={{ 
              top: '80px', 
              left: '0', 
              right: '0', 
              bottom: '0',
              overflowY: 'auto'
            }}
          >
            <div className="h-full overflow-y-auto p-4 pb-20">
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