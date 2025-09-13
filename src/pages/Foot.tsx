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
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      images={images}
        {/* Centered Title Only */}
    >
          <div className="text-center animate-fade-in">
            <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: 900,
                  textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
                }}>
              FOOT À 5
            </h1>
          </Card>
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
                Trois terrains de Foot à 5 avec gazon synthétique certifiés FIFA. Le centre de vos exploits sportifs avec de nombreux tournois régionaux. Nos terrains offrent un environnement professionnel pour tous les niveaux.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Nos terrains certifiés FIFA vous attendent !
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