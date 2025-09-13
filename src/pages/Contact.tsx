import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Crown, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
    <div className="min-h-screen bg-gradient-royal">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-royal to-navy">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-0.5 bg-gold"></div>
              <Crown className="h-10 w-10 text-gold" />
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-gold">
                Discutons
              </h1>
              <Crown className="h-10 w-10 text-gold" />
              <div className="w-12 h-0.5 bg-gold"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gradient-to-b from-royal to-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* Contact Details */}
            <Card className="card-royal bg-royal/90 border-gold/30 shadow-glow animate-fade-in">
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gold mb-6">
                  Nos coordonnées
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Adresse</h3>
                      <p className="text-white/90">
                        1841, Avenue des FAR<br />
                        Meknès, Maroc
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                      <p className="text-white/90">
                        Fitness: 0535 521 528<br />
                        Spa: 0535 521 530
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-gold mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">E-mail</h3>
                      <p className="text-white/90">
                        motivclubfitness@hotmail.com
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-3">Réseaux sociaux</h3>
                    <div className="flex space-x-4">
                      <button className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold transition-colors">
                        <Instagram className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-full bg-gold/10 hover:bg-gold/20 text-gold transition-colors">
                        <Facebook className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="card-royal bg-royal/90 border-gold/30 shadow-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-8">
                <h2 className="text-2xl font-serif font-bold text-gold mb-6">
                  Envoyez-nous un message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Prénom <span className="text-gold">*</span>
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="bg-navy/50 border-gold/30 text-white focus:border-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">
                        Nom <span className="text-gold">*</span>
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="bg-navy/50 border-gold/30 text-white focus:border-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      E-mail <span className="text-gold">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-navy/50 border-gold/30 text-white focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Téléphone <span className="text-gold">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-navy/50 border-gold/30 text-white focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Message <span className="text-gold">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-navy/50 border-gold/30 text-white focus:border-gold"
                      placeholder="Dites-nous comment nous pouvons vous aider..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold w-full text-lg py-6 shadow-glow hover:shadow-glow-intense transition-all duration-300"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Visual */}
            <Card className="card-royal bg-royal/90 border-gold/30 shadow-glow overflow-hidden animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="h-full">
                <img
                  src="/src/assets/fitness-service.jpg"
                  alt="Royal Fitness Club"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <Card className="card-royal bg-royal/90 border-gold/30 shadow-glow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">
                Où nous trouver
              </h2>
              <div className="relative h-96 rounded-lg overflow-hidden border border-gold/30">
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