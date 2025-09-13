import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Clock } from "lucide-react";
import snackHero from "@/assets/snack-hero.jpg";
import snackMenu from "@/assets/snack-menu.jpg";
import snackFood1 from "@/assets/snack-food-1.jpg";
import snackFood2 from "@/assets/snack-food-2.jpg";
import snackFood3 from "@/assets/snack-food-3.jpg";
import snackAmbience1 from "@/assets/snack-ambience-1.jpg";

const MoSnack = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const foodImages = [
    { src: snackFood1, caption: "Sandwich Gourmet", category: "food" },
    { src: snackFood2, caption: "Salade Fraîche", category: "food" },
    { src: snackFood3, caption: "Bowl Healthy", category: "food" },
    { src: snackAmbience1, caption: "Ambiance Conviviale", category: "ambience" },
  ];

  const displayedImages = showAllPhotos ? foodImages : foodImages.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-royal">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${snackHero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-royal"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal/80 via-navy/70 to-royal/80"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-0.5 bg-gold"></div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-gold">
                Mo'Snack
              </h1>
              <div className="w-12 h-0.5 bg-gold"></div>
            </div>
            <p className="text-2xl md:text-3xl font-light italic text-white/90">
              Faites vous plaisir
            </p>
            
            <Card className="card-royal bg-royal/80 backdrop-blur-sm border-gold/30 p-8 max-w-2xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                Découvrez notre snack healthy, savoureux & convivial, au cœur du club.
              </p>
            </Card>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-gold text-lg px-8 py-4 shadow-glow hover:shadow-glow-intense transition-all duration-300">
                  Voir la carte
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                <div className="relative">
                  <img 
                    src={snackMenu} 
                    alt="Menu Mo'Snack" 
                    className="w-full h-auto"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-royal to-navy">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-4">
              Découvrez Mo'Snack
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Une expérience culinaire unique alliant saveur, santé et convivialité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card 
                key={index} 
                className="card-royal group overflow-hidden hover-scale cursor-pointer bg-royal/90 border-gold/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold font-semibold text-lg">
                      {image.caption}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {!showAllPhotos && foodImages.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(true)}
                className="border-gold text-gold hover:bg-gold hover:text-royal"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-6">
          <Card className="card-royal max-w-2xl mx-auto p-8 bg-royal/90 border-gold/30">
            <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">
              Où nous trouver
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="text-white/90">
                  1841 Av. des FAR - Plaisance - MEKNES
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-white/90">
                  0535 521 528
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-white/90">
                  Ouvert tous les jours de 8h à 22h
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="btn-gold shadow-glow hover:shadow-glow-intense transition-all duration-300">
                Voir sur la carte
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MoSnack;