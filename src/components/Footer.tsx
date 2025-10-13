import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, MapPin, Instagram, Facebook, Phone, Mail, Clock, Dumbbell, Music } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import motivLogo from "@/assets/motiv-logo.png";
const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const {
    toast
  } = useToast();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
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
      description: "Nous vous recontacterons très prochainement."
    });
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });
  };
  const navigationLinks = [{
    name: "Le Concept",
    href: "/"
  }, {
    name: "Galeries Photos",
    href: "/gallery"
  }, {
    name: "Fitness",
    href: "/fitness"
  }, {
    name: "Foot",
    href: "/foot"
  }, {
    name: "Aqua",
    href: "/aqua"
  }, {
    name: "Spa",
    href: "/spa"
  }, {
    name: "Kids",
    href: "/kids"
  }, {
    name: "Mo'Snack",
    href: "/mosnack"
  }, {
    name: "Plannings",
    href: "/plannings"
  }, {
    name: "Nos tarifs",
    href: "/tarifs"
  }, {
    name: "Contact",
    href: "/contact"
  }];
  return <footer className="relative bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 border-t border-blue-300/50">
      {/* Modern geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-300/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-400/15 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-6 md:space-y-8">
            
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <img 
                src={motivLogo} 
                alt="MOTIV' CLUB - Fitness, Foot, Aqua & Spa" 
                className="h-20 w-auto object-contain"
              />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-slate-800 font-semibold text-sm uppercase tracking-wider border-b border-blue-300 pb-2">
                Contact
              </h4>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center space-x-3 text-slate-700 hover:text-slate-900 transition-colors">
                  <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">MOTIV'CLUB</p>
                    <p>1841، Avenue des F.A.R, Meknès 50000, Maroc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4 md:space-y-6">
            <h4 className="text-slate-800 font-semibold text-sm uppercase tracking-wider border-b border-blue-300 pb-2">
              Navigation
            </h4>
            <div className="grid grid-cols-1 gap-1 md:gap-2">
              {navigationLinks.map((link, index) => <a key={link.name} href={link.href} className="text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all duration-200 text-sm py-2 md:py-1 group min-h-[32px] flex items-center">
                  <span className="border-b border-transparent group-hover:border-blue-600 transition-colors">
                    {link.name}
                  </span>
                </a>)}
            </div>
          </div>

          {/* Contact Form */}
          <div className="sm:col-span-2 space-y-4 md:space-y-6">
            <h4 className="text-slate-800 font-semibold text-sm uppercase tracking-wider border-b border-blue-300 pb-2">
              Contactez-nous
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <Input name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleInputChange} className="bg-white/70 border-blue-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all min-h-[44px] text-base" required />
                <Input name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleInputChange} className="bg-white/70 border-blue-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all min-h-[44px] text-base" required />
              </div>
              
              <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="bg-white/70 border-blue-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all min-h-[44px] text-base" required />
              
              <Input name="phone" type="tel" placeholder="Téléphone" value={formData.phone} onChange={handleInputChange} className="bg-white/70 border-blue-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 transition-all min-h-[44px] text-base" />
              
              <Textarea name="message" placeholder="Votre message..." value={formData.message} onChange={handleInputChange} rows={4} className="bg-white/70 border-blue-300 text-slate-800 placeholder:text-slate-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none transition-all min-h-[88px] text-base" required />
              
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 text-base transition-all duration-300 shadow-lg hover:shadow-blue-500/25 min-h-[44px]">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Social Media & Bottom Section */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <span className="text-slate-600 text-sm font-medium">Suivez-nous:</span>
              <div className="flex space-x-4">
                <a href="#" className="w-11 h-11 bg-white/70 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group border border-blue-300">
                  <Instagram className="h-5 w-5 text-slate-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-11 h-11 bg-white/70 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group border border-blue-300">
                  <Facebook className="h-5 w-5 text-slate-600 group-hover:text-white" />
                </a>
                <a href="#" className="w-11 h-11 bg-white/70 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 group border border-blue-300">
                  <Music className="h-5 w-5 text-slate-600 group-hover:text-white" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-600 text-sm">
                © 2025 MOTIV' CLUB
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Conçu pour l'excellence fitness
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;