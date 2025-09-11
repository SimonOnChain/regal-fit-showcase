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
    <footer className="relative bg-gradient-to-b from-navy to-royal-blue-dark border-t border-accent/20 animate-fade-in">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column - Logo & Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Crown className="h-10 w-10 text-accent animate-pulse" />
              <div>
                <h3 className="text-2xl font-serif font-bold text-foreground">Royal Fitness</h3>
                <p className="text-sm text-accent font-light">Excellence & Prestige</p>
              </div>
            </div>
            
            {/* Address */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">MOTIV'CLUB</p>
                  <p className="text-accent text-sm">1841 Av. des FAR</p>
                  <p className="text-accent text-sm">Plaisance - MEKNES</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="text-foreground font-semibold">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 hover:scale-110 transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 hover:scale-110 transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-accent group-hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Center Column - Contact Form */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-serif font-bold text-foreground mb-6">Contactez-nous</h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-primary/20 border-accent/30 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/50"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Nom"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-primary/20 border-accent/30 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/50"
                  required
                />
              </div>
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-primary/20 border-accent/30 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/50"
                required
              />
              
              <Input
                name="phone"
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-primary/20 border-accent/30 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/50"
              />
              
              <Textarea
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-primary/20 border-accent/30 text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/50 resize-none"
                required
              />
              
              <Button 
                type="submit" 
                className="btn-gold w-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300"
              >
                Envoyer
              </Button>
            </form>
          </div>

          {/* Right Column - Navigation Links */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-xl font-serif font-bold text-foreground mb-6">Navigation</h4>
            
            <div className="grid grid-cols-1 gap-3">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-accent transition-colors duration-300 py-1 block hover:translate-x-1 hover:font-medium"
                  style={{ 
                    animationDelay: `${0.1 * index}s`,
                    animation: "fadeIn 0.6s ease-out forwards"
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-accent/20">
              <Button className="btn-gold w-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300">
                <a href="/contact">Rejoignez-nous</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-accent/20 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Royal Fitness MOTIV'CLUB. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;