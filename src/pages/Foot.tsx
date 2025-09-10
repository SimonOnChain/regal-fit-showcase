import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Trophy } from "lucide-react";
import footballField1 from "@/assets/football-field-1.jpg";
import footballField2 from "@/assets/football-field-2.jpg";
import footballMatch from "@/assets/football-match.jpg";
import footballTournament from "@/assets/football-tournament.jpg";

const Foot = () => {
  const galleryImages = [
    {
      src: footballField1,
      alt: "Terrain FIFA 1",
      overlay: "Terrain FIFA 1"
    },
    {
      src: footballField2,
      alt: "Terrain FIFA 2", 
      overlay: "Terrain FIFA 2"
    },
    {
      src: footballMatch,
      alt: "Match en cours",
      overlay: "Match en cours"
    },
    {
      src: footballTournament,
      alt: "Tournoi",
      overlay: "Tournoi"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-royal-primary to-royal-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-b from-royal-primary/90 via-royal-primary/80 to-gold-primary/20" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="h-12 w-12 text-gold-primary mr-4" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              Foot à 5
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gold-primary font-light max-w-4xl mx-auto mb-8">
            Nos terrains certifiés FIFA vous attendent pour vos exploits sportifs
          </p>
          <Button className="bg-gold-primary text-royal-primary font-semibold px-8 py-4 text-lg hover:bg-gold-secondary transition-colors duration-300 shadow-lg shadow-gold-primary/30">
            Réserver un terrain
          </Button>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-lg border-2 border-gold-primary/30 hover:border-gold-primary transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-primary/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <span className="text-gold-primary font-semibold text-lg mb-4">
                      {image.overlay}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Card */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-royal-primary/30 border-gold-primary/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 rounded-full bg-gold-primary/20 w-fit">
                <Trophy className="h-10 w-10 text-gold-primary" />
              </div>
              <CardTitle className="text-3xl font-serif text-gold-primary mb-4">
                Foot à 5
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/90 text-lg leading-relaxed text-center">
                Le Football à 5 est un sport qui se joue avec deux équipes de 5 joueurs sur des terrains complètement fermés avec une particularité: un gazon synthétique imitant parfaitement le gazon naturel. Les aires de jeux au MOTIV'CLUB sont certifiés FIFA.
              </p>
              <p className="text-white/90 text-lg leading-relaxed text-center">
                Trois terrains de Foot à 5 avec gazon synthétique deviendront le centre de vos exploits. Il est à noté que de nombreux tournois régionaux se déroulent dans notre établissement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Prêt à jouer sur nos terrains certifiés FIFA ?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Réservez votre créneau et vivez l'expérience du football à 5 au plus haut niveau
          </p>
          <Button className="bg-gold-primary text-royal-primary font-semibold px-8 py-4 text-lg hover:bg-gold-secondary transition-colors duration-300 shadow-lg shadow-gold-primary/30">
            <Trophy className="mr-2 h-5 w-5" />
            Réserver maintenant
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Foot;