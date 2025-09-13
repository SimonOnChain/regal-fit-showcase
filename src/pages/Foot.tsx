import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Calendar, Clock, MapPin, Phone } from "lucide-react";
import footballField1 from "@/assets/football-field-1.jpg";
import footballField2 from "@/assets/football-field-2.jpg";
import footballMatch from "@/assets/football-match.jpg";
import footballTournament from "@/assets/football-tournament.jpg";

const Foot = () => {
  const images = [
    { src: footballField1, caption: "Terrain FIFA 1", category: "field" },
    { src: footballField2, caption: "Terrain FIFA 2", category: "field" },
    { src: footballMatch, caption: "Match en cours", category: "match" },
    { src: footballTournament, caption: "Tournoi Royal", category: "tournament" },
  ];

  const detailCards = [
    {
      icon: <Users className="h-12 w-12" />,
      title: "Équipes & Ligues",
      description: "Rejoignez nos ligues hebdomadaires et formez votre équipe de champions"
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      title: "Tournois FIFA",
      description: "Participez à nos tournois régionaux sur terrains certifiés FIFA"
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Réservations",
      description: "Réservez votre créneau facilement en ligne ou par téléphone"
    }
  ];

  const handlePrimaryAction = () => {
    window.location.href = "/plannings";
  };

  return (
    <RoyalPageTemplate
      heroImage={footballField1}
      title="Foot à 5"
      subtitle="Nos terrains certifiés FIFA vous attendent"
      description="Trois terrains de Foot à 5 avec gazon synthétique certifiés FIFA. Le centre de vos exploits sportifs avec de nombreux tournois régionaux."
      primaryCTA={{
        text: "Réserver un terrain",
        action: handlePrimaryAction
      }}
    </RoyalPageTemplate>
  )
  );
};

export default Foot;