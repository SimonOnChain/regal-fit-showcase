import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fitnessService from "@/assets/fitness-service.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message envoyé avec succès!",
      description: "Nous vous recontacterons très prochainement.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-16 w-40 h-40 bg-blue-200/22 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-blue-300/18 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-blue-400/14 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4.5s', animationDuration: '7s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-bl from-blue-300/28 via-transparent to-blue-400/28 animate-pulse" style={{ animationDuration: '9s' }}></div>
        </div>
      </div>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={fitnessService}
            alt="Royal Fitness Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        
        {/* Centered Title Over Image */}
        <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            CONTACT
          </h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Parlons de Votre Projet
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une question, un projet, une envie de nous rejoindre ? Nous sommes là pour vous accompagner.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Contact Details */}
            <Card className="group bg-white/70 border-blue-300/30 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-lg shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b border-blue-300/30 pb-4">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start group/item">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover/item:bg-blue-200 transition-colors">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Adresse</h3>
                      <p className="text-slate-700">
                        1841, Avenue des FAR<br />
                        Plaisance - Meknès, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover/item:bg-blue-200 transition-colors">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Téléphone</h3>
                      <p className="text-slate-700">
                        Fitness: 0535 521 528<br />
                        Spa: 0535 521 530
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover/item:bg-blue-200 transition-colors">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">E-mail</h3>
                      <p className="text-slate-700">
                        motivclubfitness@hotmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group/item">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4 group-hover/item:bg-blue-200 transition-colors">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-800 mb-1">Horaires</h3>
                      <p className="text-slate-700">
                        Lun-Dim: 6h00 - 23h00<br />
                        Spa: 9h00 - 20h00
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-blue-300/30">
                    <h3 className="font-semibold text-slate-800 mb-3">Suivez-nous</h3>
                    <div className="flex space-x-4">
                      <button className="p-3 rounded-lg bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 group">
                        <Instagram className="h-5 w-5" />
                      </button>
                      <button className="p-3 rounded-lg bg-blue-100 hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 group">
                        <Facebook className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="group bg-white/70 border-blue-300/30 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-lg shadow-lg" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b border-blue-300/30 pb-4">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-800 mb-2">
                        Prénom <span className="text-blue-600">*</span>
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-white/80 border-blue-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-800 mb-2">
                        Nom <span className="text-blue-600">*</span>
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-white/80 border-blue-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      E-mail <span className="text-blue-600">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/80 border-blue-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      Téléphone <span className="text-blue-600">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/80 border-blue-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500/20 transition-all"
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-800 mb-2">
                      Message <span className="text-blue-600">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-white/80 border-blue-300 text-slate-800 focus:border-blue-500 focus:ring-blue-500/20 resize-none transition-all"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Visual Card */}
            <Card className="group bg-white/70 border-blue-300/30 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-lg shadow-lg" style={{ animationDelay: "0.4s" }}>
              <div className="relative h-full">
                <img
                  src={fitnessService}
                  alt="Royal Fitness Club"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-serif font-bold mb-2">Royal Fitness</h3>
                  <p className="text-white/90 text-sm">
                    Votre destination premium pour l'excellence fitness
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-white/70 border-blue-300/30 overflow-hidden rounded-lg shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center border-b border-blue-300/30 pb-4">
                Où nous trouver
              </h2>
              <div className="relative h-96 rounded-lg overflow-hidden border border-blue-300/30">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8442!2d-5.5447!3d33.8931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda05ba!2s1841%20Avenue%20des%20FAR%2C%20Mekn%C3%A8s%2C%20Morocco!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Fitness Club Location"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;