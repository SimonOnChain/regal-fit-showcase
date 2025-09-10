import { useState } from "react";
import Navigation from "@/components/Navigation";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import snackHero from "@/assets/snack-hero.jpg";
import snackMenu from "@/assets/snack-menu.jpg";
import snackAmbience1 from "@/assets/snack-ambience-1.jpg";
import snackFood1 from "@/assets/snack-food-1.jpg";
import snackFood2 from "@/assets/snack-food-2.jpg";
import snackFood3 from "@/assets/snack-food-3.jpg";

const MoSnack = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const snackImages = [
    { src: snackFood1, caption: "Sandwich Gourmet", category: "food" },
    { src: snackFood2, caption: "Smoothie Bowl", category: "food" },
    { src: snackFood3, caption: "Salade Fraîche", category: "food" },
    { src: snackAmbience1, caption: "Ambiance Conviviale", category: "ambience" },
  ];

  const displayedImages = showAllPhotos ? snackImages : snackImages.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-royal to-navy">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-royal/80 to-navy/60 z-10"></div>
        <div 
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: `url(${snackHero})` }}
        >
          <div className="relative z-20 container mx-auto px-6 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-gold mb-6">
                Mo'Snack
              </h1>
              <p className="text-3xl md:text-4xl text-gold/80 mb-12 font-medium">
                Faites vous plaisir
              </p>
              <Card className="bg-royal/90 border-gold/30 backdrop-blur-sm mx-auto max-w-3xl mb-12">
                <CardContent className="p-10">
                  <p className="text-2xl text-foreground leading-relaxed">
                    Découvrez notre snack healthy, savoureux & convivial, au cœur du club.
                  </p>
                </CardContent>
              </Card>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-gold text-royal hover:bg-gold/90 font-bold text-xl px-12 py-6">
                    Voir la carte
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto bg-background border-gold/30">
                  <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-gold mb-6">Notre Carte</h2>
                    <img 
                      src={snackMenu} 
                      alt="Menu Mo'Snack" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold mb-8">
              Découvrir Mo'Snack
            </h2>
            <div className="w-32 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden bg-card border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-gold font-bold text-xl">{image.caption}</span>
                      <div className="w-20 h-0.5 bg-gold mt-3"></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {!showAllPhotos && snackImages.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAllPhotos(true)}
                className="border-gold text-gold hover:bg-gold hover:text-royal font-medium px-10 py-3"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Card */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <Card className="max-w-3xl mx-auto bg-royal/90 border-gold/30 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-serif font-bold text-gold mb-8">Où nous trouver</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center space-x-4">
                  <MapPin className="h-6 w-6 text-gold" />
                  <span className="text-foreground text-lg">1841 Av. des FAR - Plaisance - MEKNES</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Phone className="h-6 w-6 text-gold" />
                  <span className="text-foreground text-lg">0535 521 528</span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Clock className="h-6 w-6 text-gold" />
                  <span className="text-foreground text-lg">Ouvert tous les jours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MoSnack;