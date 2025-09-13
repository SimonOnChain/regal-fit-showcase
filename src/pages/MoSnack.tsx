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
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-36 h-36 bg-blue-200/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-blue-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-tl from-blue-300/25 via-transparent to-blue-400/25 animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>
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
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Découvrez Mo'Snack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une expérience culinaire unique alliant saveur, santé et convivialité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
          
          {!showAllPhotos && foodImages.length > 3 && (
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

      {/* Contact Card */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 bg-white/70 border-blue-300/30 rounded-lg shadow-lg">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">
              Où nous trouver
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">
                  1841 Av. des FAR - Plaisance - MEKNES
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">
                  0535 521 528
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="text-slate-700">
                  Ouvert tous les jours de 8h à 22h
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300">
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