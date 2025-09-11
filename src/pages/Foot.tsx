import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Trophy, Calendar, Clock, MapPin, Phone } from "lucide-react";
import footballField1 from "@/assets/football-field-1.jpg";
import footballField2 from "@/assets/football-field-2.jpg";
import footballMatch from "@/assets/football-match.jpg";
import footballTournament from "@/assets/football-tournament.jpg";
import { useState } from "react";

const Foot = () => {
  const [showAllImages, setShowAllImages] = useState(false);

  const images = [
    { src: footballField1, caption: "Terrain FIFA 1", category: "field" },
    { src: footballField2, caption: "Terrain FIFA 2", category: "field" },
    { src: footballMatch, caption: "Match en cours", category: "match" },
    { src: footballTournament, caption: "Tournoi Royal", category: "tournament" },
  ];

  const displayedImages = showAllImages ? images : images.slice(0, 4);

  const handleReservation = () => {
    window.location.href = "/plannings";
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center animate-fade-in"
          style={{
            backgroundImage: `url(${footballField1})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-serif font-bold mb-6 text-accent animate-scale-in">
            Foot à 5
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Nos terrains certifiés FIFA vous attendent
          </p>
          <Button 
            onClick={handleReservation}
            className="btn-gold text-lg px-8 py-4 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30 animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            Réserver un terrain
          </Button>
        </div>
      </section>

      {/* Intro Card */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <Card className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm border border-accent/20 animate-fade-in hover-scale">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Excellence FIFA au Cœur de Meknès
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trois terrains de Foot à 5 avec gazon synthétique certifiés FIFA. Le centre de vos exploits sportifs avec de nombreux tournois régionaux.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visual Grid */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-serif font-bold text-accent mb-4">
              Nos Terrains & Tournois
            </h2>
            <p className="text-xl text-white/80">
              Des installations FIFA pour une expérience football authentique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-card/80 backdrop-blur-sm border border-accent/20 hover-scale animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.caption}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="group bg-card/80 backdrop-blur-sm border border-accent/20 hover-scale animate-fade-in" style={{animationDelay: '0s'}}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Équipes & Ligues
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Rejoignez nos ligues hebdomadaires et formez votre équipe de champions
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card/80 backdrop-blur-sm border border-accent/20 hover-scale animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Trophy className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Tournois FIFA
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Participez à nos tournois régionaux sur terrains certifiés FIFA
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-card/80 backdrop-blur-sm border border-accent/20 hover-scale animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                    <Calendar className="h-12 w-12 text-accent" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Réservations
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Réservez votre créneau facilement en ligne ou par téléphone
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border border-accent/20 animate-fade-in hover-scale">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Informations Foot à 5
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 group">
                  <MapPin className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-muted-foreground">
                    1841 Av. des FAR - Plaisance - MEKNES
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <Phone className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-muted-foreground">
                    0535 521 528
                  </span>
                </div>
                
                <div className="flex items-center space-x-3 group">
                  <Clock className="h-5 w-5 text-accent group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-muted-foreground">
                    Lun-Dim: 8h00 - 23h00
                  </span>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={handleReservation}
                  className="btn-gold px-8 py-3 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  Réserver maintenant
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Foot;