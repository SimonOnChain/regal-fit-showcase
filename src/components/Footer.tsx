import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, MapPin, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message envoyé !",
      description: "Nous vous recontacterons très prochainement.",
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const navigationLinks = [
    { name: "Le Concept", href: "/" },
    { name: "Galeries Photos", href: "/gallery" },
    { name: "Fitness", href: "/fitness" },
    { name: "Foot", href: "/foot" },
    { name: "Aqua", href: "/aqua" },
    { name: "Spa", href: "/spa" },
    { name: "Kids", href: "/kids" },
    { name: "Mo'Snack", href: "/mosnack" },
    { name: "Plannings", href: "/plannings" },
    { name: "Nos tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-royal-blue-lightest to-royal-blue-lighter border-t border-royal-blue-hover/20 animate-fade-in">
      {/* Light blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-royal-blue-hover to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Left Column - Logo & Contact Info */}
          <div className="flex flex-col justify-between h-full animate-slide-up text-center" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center justify-center space-x-3">
                <Crown className="h-10 w-10 text-royal-blue animate-pulse" />
                <div>
                  <h3 className="text-2xl font-serif font-bold text-royal-blue-dark">Royal Fitness</h3>
                  <p className="text-sm text-royal-blue font-light">Excellence & Prestige</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-3">
                <div className="flex items-start justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-royal-blue mt-1 flex-shrink-0" />
                  <div className="text-center">
                    <p className="text-royal-blue-dark font-medium">MOTIV'CLUB</p>
                    <p className="text-royal-blue text-sm">1841 Av. des FAR</p>
                    <p className="text-royal-blue text-sm">Plaisance - MEKNES</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media - Bottom aligned */}
            <div className="space-y-3 mt-8">
              <h4 className="text-royal-blue-dark font-semibold">Suivez-nous</h4>
              <div className="flex justify-center space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue/30 hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-royal-blue group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-royal-blue/20 rounded-full flex items-center justify-center hover:bg-royal-blue/30 hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-royal-blue group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Column - Contact Form */}
          <div className="flex flex-col justify-between h-full animate-slide-up text-center" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <h4 className="text-xl font-serif font-bold text-royal-blue-dark">Contactez-nous</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="Prénom"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="bg-white border-royal-blue/30 text-royal-blue-dark placeholder:text-royal-blue focus:border-royal-blue focus:ring-royal-blue/50"
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Nom"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="bg-white border-royal-blue/30 text-royal-blue-dark placeholder:text-royal-blue focus:border-royal-blue focus:ring-royal-blue/50"
                    required
                  />
                </div>
                
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white border-royal-blue/30 text-royal-blue-dark placeholder:text-royal-blue focus:border-royal-blue focus:ring-royal-blue/50"
                  required
                />
                
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-white border-royal-blue/30 text-royal-blue-dark placeholder:text-royal-blue focus:border-royal-blue focus:ring-royal-blue/50"
                />
                
                <Textarea
                  name="message"
                  placeholder="Votre message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="bg-white border-royal-blue/30 text-royal-blue-dark placeholder:text-royal-blue focus:border-royal-blue focus:ring-royal-blue/50 resize-none"
                  required
                />
              </form>
            </div>
            
            {/* Submit Button - Bottom aligned */}
            <Button 
              onClick={handleSubmit}
              className="bg-royal-blue hover:bg-royal-blue-hover text-white w-full hover:shadow-lg hover:shadow-royal-blue/25 transition-all duration-300 mt-6"
            >
              Envoyer
            </Button>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="flex flex-col justify-between h-full animate-slide-up text-center" style={{ animationDelay: "0.3s" }}>
            <div className="space-y-6">
              <h4 className="text-xl font-serif font-bold text-royal-blue-dark">Navigation</h4>
              
              <div className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-royal-blue hover:text-royal-blue-dark transition-colors duration-300 block hover:translate-x-1 hover:font-medium"
                    style={{ 
                      animationDelay: `${0.1 * index}s`,
                      animation: "fadeIn 0.6s ease-out forwards"
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Join Button - Bottom aligned */}
            <div className="pt-6 border-t border-royal-blue/20 mt-8">
              <Button className="bg-royal-blue hover:bg-royal-blue-hover text-white w-full hover:shadow-lg hover:shadow-royal-blue/25 transition-all duration-300">
                <a href="/contact">Rejoignez-nous</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-royal-blue/20 text-center">
          <p className="text-royal-blue text-sm">
            © 2024 Royal Fitness MOTIV'CLUB. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;