import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, MapPin, Instagram, Facebook, Phone, Mail, Clock, Dumbbell } from "lucide-react";
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
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-black border-t border-slate-700/50">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-slate-600/10 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                  <Dumbbell className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Royal Fitness</h3>
                  <p className="text-sm text-slate-400 font-medium">Excellence & Performance</p>
                </div>
              </div>
              
              <p className="text-slate-300 leading-relaxed text-sm">
                Votre destination premium pour l'excellence fitness. Équipements de pointe, 
                coaching expert et environnement d'exception.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">MOTIV'CLUB</p>
                    <p>1841 Av. des FAR, Plaisance - MEKNES</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">0535 521 528</span>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">contact@royalfitness.ma</span>
                </div>
                
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Lun-Dim: 6h00 - 23h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1 space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {navigationLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm py-1 group"
                >
                  <span className="border-b border-transparent group-hover:border-blue-400 transition-colors">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider border-b border-slate-700 pb-2">
              Contactez-nous
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  name="firstName"
                  placeholder="Prénom"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  required
                />
                <Input
                  name="lastName"
                  placeholder="Nom"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                  required
                />
              </div>
              
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                required
              />
              
              <Input
                name="phone"
                type="tel"
                placeholder="Téléphone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
              />
              
              <Textarea
                name="message"
                placeholder="Votre message..."
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500/20 resize-none transition-all"
                required
              />
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Social Media & Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-slate-400 text-sm font-medium">Suivez-nous:</span>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Instagram className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                >
                  <Facebook className="h-5 w-5 text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-400 text-sm">
                © 2024 Royal Fitness MOTIV'CLUB. Tous droits réservés.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Conçu pour l'excellence fitness
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;