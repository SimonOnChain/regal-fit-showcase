import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Waves, Heart, Users, Clock, MapPin, Phone } from "lucide-react";
import aquaService from "@/assets/aqua-service.jpg";
import planningAqua from "@/assets/planning-aqua.jpg";
import planningPiscineFemmes from "@/assets/planning-piscine-femmes.jpg";
import planningPiscineHommes from "@/assets/planning-piscine-hommes.jpg";

const Aqua = () => {
  const images = [
    { src: aquaService, caption: "Piscines Semi-Olympiques", category: "facility" },
    { src: planningAqua, caption: "Cours d'Aquagym", category: "classes" },
    { src: planningPiscineFemmes, caption: "Sessions Femmes", category: "classes" },
    { src: planningPiscineHommes, caption: "Sessions Hommes", category: "classes" },
  ];

  const detailCards = [
    {
      icon: <Waves className="h-12 w-12" />,
      title: "Natation",
      description: "Deux piscines semi-olympiques chauffées pour tous niveaux"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Aquagym",
      description: "Cours collectifs aquatiques dans une atmosphère conviviale"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Bien-être",
      description: "Détente et remise en forme dans un environnement aquatique optimal"
    }
  ];

  const handlePrimaryAction = () => {
    window.location.href = "/plannings";
  };

  return (
    <RoyalPageTemplate
      heroImage={aquaService}
      title="Aqua"
      subtitle="2 piscines semi-olympiques chauffées"
      description="Le MOTIV'CLUB met à votre disposition deux piscines semi-olympiques chauffées pour la natation et l'aquagym. Eau maintenue à température optimale pour votre confort maximal."
      primaryCTA={{
        text: "Voir les Plannings",
        action: handlePrimaryAction
      }}
      galleryTitle="Nos Activités Aquatiques"
      galleryDescription="Des installations aquatiques premium pour votre bien-être"
      images={images}
      detailCards={detailCards}
    >
      {/* Additional Info Section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Centered Title Only */}
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                }}>
              AQUA
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section - Blue Background */}
      <section className="relative py-20 bg-gradient-to-b from-blue-600 to-blue-700 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-16 left-16 w-24 h-24 bg-blue-300/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                Le MOTIV'CLUB met à votre disposition deux piscines semi-olympiques chauffées pour la natation et l'aquagym. Eau maintenue à température optimale pour votre confort maximal.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Plongez dans l'excellence aquatique !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-100">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 border border-accent/20">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">
              Informations Aqua
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-slate-700">
                  1841 Av. des FAR - Plaisance - MEKNES
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-slate-700">
                  0535 521 528
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-slate-700">
                  Lun-Dim: 9h00 - 20h00
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="btn-gold">
                Réserver une session
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </RoyalPageTemplate>
  );
};

export default Aqua;