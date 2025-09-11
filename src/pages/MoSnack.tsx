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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${snackHero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent">
            Mo'Snack
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 italic">
            Faites vous plaisir
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed">
              Découvrez notre snack healthy, savoureux & convivial, au cœur du club.
            </p>
          </Card>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="btn-gold text-lg px-8 py-4 text-primary font-semibold">
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
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Découvrez Mo'Snack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une expérience culinaire unique alliant saveur, santé et convivialité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover-scale cursor-pointer">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-accent font-semibold text-lg">
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
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 border border-accent/20">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Où nous trouver
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">
                  1841 Av. des FAR - Plaisance - MEKNES
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">
                  0535 521 528
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">
                  Ouvert tous les jours de 8h à 22h
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="btn-gold">
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