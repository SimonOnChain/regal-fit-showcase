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
      galleryTitle="Nos Terrains & Tournois"
      galleryDescription="Des installations FIFA pour une expérience football authentique"
      images={images}
      detailCards={detailCards}
    >
      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto p-8 border border-accent/20">
            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-6 text-center">
              À Propos du Foot à 5
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Le Football à 5 est un sport qui se joue avec deux équipes de 5 joueurs sur des terrains complètement fermés avec une particularité: un gazon synthétique imitant parfaitement le gazon naturel.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed text-center">
                Les aires de jeux au MOTIV'CLUB sont certifiés FIFA. Trois terrains de Foot à 5 avec gazon synthétique deviendront le centre de vos exploits.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 border border-accent/20">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">
              Informations Foot à 5
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
                  Lun-Dim: 8h00 - 23h00
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="btn-gold">
                Réserver maintenant
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </RoyalPageTemplate>
  );
};

export default Foot;