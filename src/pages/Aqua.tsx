import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Waves, Heart, Users, Clock, MapPin, Phone } from "lucide-react";
import aquaService from "@/assets/aqua-service.jpg";
import planningAqua from "@/assets/planning-aqua.jpg";
import planningPiscineFemmes from "@/assets/planning-piscine-femmes.jpg";
import planningPiscineHommes from "@/assets/planning-piscine-hommes.jpg";

const Aqua = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const aquaImages = [
    { src: aquaService, caption: "Piscines Semi-Olympiques", category: "facility" },
    { src: planningAqua, caption: "Cours d'Aquagym", category: "classes" },
    { src: planningPiscineFemmes, caption: "Sessions Femmes", category: "classes" },
    { src: planningPiscineHommes, caption: "Sessions Hommes", category: "classes" },
  ];

  const displayedImages = showAllPhotos ? aquaImages : aquaImages.slice(0, 4);

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
            src={aquaService}
            alt="Aqua Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-600/80 via-blue-500/60 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 text-left max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            AQUA
          </h1>
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
                Le MOTIV'CLUB met à votre disposition deux piscines semi-olympiques chauffées pour la natation et l'aquagym. 
                Eau maintenue à température optimale pour votre confort maximal. Profitez de nos cours d'aqua-fitness dans un 
                environnement aquatique premium.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Plongez dans l'excellence aquatique !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aqua Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Activités Aquatiques
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Des installations aquatiques premium pour votre bien-être
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
          
          {!showAllPhotos && aquaImages.length > 4 && (
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

      {/* Detail Cards Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 bg-white/70 border border-blue-300/30 rounded-lg shadow-lg animate-fade-in">
              <div className="text-center">
                <div className="mb-6 text-blue-600">
                  <Waves className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                  Natation
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Deux piscines semi-olympiques chauffées pour tous niveaux
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white/70 border border-blue-300/30 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="text-center">
                <div className="mb-6 text-blue-600">
                  <Heart className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                  Aquagym
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Cours collectifs aquatiques dans une atmosphère conviviale
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-white/70 border border-blue-300/30 rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <div className="mb-6 text-blue-600">
                  <Users className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                  Bien-être
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Détente et remise en forme dans un environnement aquatique optimal
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Aqua;