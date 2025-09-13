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
    </RoyalPageTemplate>
  );
};

export default Aqua;