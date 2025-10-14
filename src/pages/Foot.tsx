import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, Clock, MapPin, Phone } from "lucide-react";
import footHero from "@/assets/foot-hero.jpg";
import footballField1 from "@/assets/football-field-1.jpg";
import footballField2 from "@/assets/football-field-2.jpg";
import footballMatch from "@/assets/football-match.jpg";
import footballTournament from "@/assets/football-tournament.jpg";

const Foot = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const footballImages = [
    { src: footballField1, caption: "Terrain FIFA 1", category: "field" },
    { src: footballField2, caption: "Terrain FIFA 2", category: "field" },
    { src: footballMatch, caption: "Match en Action", category: "match" },
    { src: footballTournament, caption: "Tournoi Régional", category: "tournament" },
  ];

  const displayedImages = showAllPhotos ? footballImages : footballImages.slice(0, 4);

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-44 h-44 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-24 left-12 w-36 h-36 bg-blue-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-2/3 w-28 h-28 bg-blue-400/12 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '6s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-tr from-blue-300/30 via-transparent to-blue-400/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section - Just the title centered */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={footHero}
            alt="Football Field"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white via-white/70 via-white/40 via-white/20 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            FOOT À 5
          </h1>
        </div>
      </section>

      {/* Description Section - Light Blue Background */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                Trois terrains de Foot à 5 avec gazon synthétique certifiés FIFA vous attendent pour vos exploits sportifs. 
                Participez à nos nombreux tournois régionaux et vivez l'esprit d'équipe dans des installations de qualité professionnelle.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-slate-800 animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Le centre de vos exploits sportifs !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Football Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Terrains FIFA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Le Football à 5 est un sport qui se joue avec deux équipes de 5 joueurs sur des terrains complètement fermés avec une particularité: un gazon synthétique imitant parfaitement le gazon naturel. Les aires de jeux au MOTIV'CLUB sont certifiés FIFA. Trois terrains de Foot à 5 avec gazon synthétique deviendront le centre de vos exploits. Il est à noté que de nombreux tournois régionaux se déroulent dans notre établissement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover-scale cursor-pointer bg-white/70 border-blue-300/30 animate-fade-in rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      {image.caption}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {!showAllPhotos && footballImages.length > 4 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(true)}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Foot;