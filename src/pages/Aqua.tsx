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
      <section className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8 border border-accent/20">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                Natation
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Le MOTIV' CLUB met à votre disposition deux piscines semi-olympiques chauffées pour la pratique de la natation. Que vous soyez débutant ou nageur confirmé, nos bassins offrent un environnement idéal pour votre entraînement. L'eau maintenue à température optimale garantit un confort maximal pour vos séances.
              </p>
            </Card>
            
            <Card className="p-8 border border-accent/20">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                Aquagym
              </h3>
              <p className="text-slate-700 leading-relaxed">
                Le MOTIV' CLUB propose des cours collectifs d'aqua gym dans nos piscines semi-olympiques chauffées. Cette activité aquatique combine fitness et plaisir dans un environnement aquatique sécurisé. Nos séances d'aqua gym permettent de travailler l'ensemble du corps en douceur grâce à la résistance naturelle de l'eau.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
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