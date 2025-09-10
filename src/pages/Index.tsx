import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { ExpandingMenu } from "@/components/ExpandingMenu";
import ContactForm from "@/components/ContactForm";
import { Sparkles, Dumbbell, Waves, MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import snackHero from "@/assets/snack-hero.jpg";
import snackMenu from "@/assets/snack-menu.jpg";
import snackAmbience1 from "@/assets/snack-ambience-1.jpg";
import snackFood1 from "@/assets/snack-food-1.jpg";
import snackFood2 from "@/assets/snack-food-2.jpg";
import snackFood3 from "@/assets/snack-food-3.jpg";

const Index = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const snackImages = [
    { src: snackFood1, caption: "Sandwich Gourmet", category: "food" },
    { src: snackFood2, caption: "Smoothie Bowl", category: "food" },
    { src: snackFood3, caption: "Salade Fraîche", category: "food" },
    { src: snackAmbience1, caption: "Ambiance Conviviale", category: "ambience" },
  ];

  const displayedImages = showAllPhotos ? snackImages : snackImages.slice(0, 3);

  return (
    <div 
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(80, 120, 255, 0.7) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(50, 160, 255, 0.6) 0%, transparent 40%),
          linear-gradient(225deg, rgba(40, 60, 180, 1), rgba(10, 10, 30, 1))
        `
      }}
    >
      <Navigation />
      <HeroSection />
      
      {/* Le Concept Section */}
      <section id="concept" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Le Concept Royal
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Royal Fitness redéfinit l'expérience du bien-être en alliant excellence, 
              sophistication et innovation. Notre concept unique vous offre un environnement 
              d'exception où chaque détail est pensé pour votre épanouissement personnel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Excellence</h3>
                <p className="text-muted-foreground">Des standards de qualité exceptionnels</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Dumbbell className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">Technologies de pointe au service de votre forme</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Bien-être</h3>
                <p className="text-muted-foreground">Un écosystème complet pour votre santé</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Expanding Menu */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Nos Services Royaux
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme complète de services premium, 
              conçus pour répondre à tous vos besoins de bien-être et de forme physique.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ExpandingMenu />
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
              L'Excellence à Votre Service
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Royal Fitness vous accompagne dans votre quête d'excellence avec des services premium
              et un environnement d'exception.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">Coaching Expert</h4>
              <p className="text-muted-foreground">Accompagnement personnalisé par nos coachs certifiés</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Dumbbell className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">Équipements Premium</h4>
              <p className="text-muted-foreground">Technologies de pointe pour des résultats optimaux</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-2">Bien-être Intégral</h4>
              <p className="text-muted-foreground">Approche holistique de votre santé et forme physique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mo'Snack Section */}
      <section id="snack" className="py-20 bg-gradient-to-b from-royal to-navy">
        {/* Hero Section */}
        <div className="relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-royal/80 to-navy/60 z-10"></div>
          <div 
            className="h-[70vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${snackHero})` }}
          >
            <div className="relative z-20 container mx-auto px-6 h-full flex items-center justify-center">
              <div className="text-center max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-gold mb-4">
                  Mo'Snack
                </h1>
                <p className="text-2xl md:text-3xl text-gold/80 mb-8 font-medium">
                  Faites vous plaisir
                </p>
                <Card className="bg-royal/90 border-gold/30 backdrop-blur-sm mx-auto max-w-2xl mb-8">
                  <CardContent className="p-8">
                    <p className="text-xl text-foreground leading-relaxed">
                      Découvrez notre snack healthy, savoureux & convivial, au cœur du club.
                    </p>
                  </CardContent>
                </Card>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-gold text-royal hover:bg-gold/90 font-bold text-lg px-8 py-4">
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
        <div className="container mx-auto px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold mb-6">
              Découvrir Mo'Snack
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden bg-card border-gold/20 hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/20">
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-gold font-bold text-lg">{image.caption}</span>
                      <div className="w-16 h-0.5 bg-gold mt-2"></div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {!showAllPhotos && snackImages.length > 3 && (
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAllPhotos(true)}
                className="border-gold text-gold hover:bg-gold hover:text-royal font-medium px-8"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>

        {/* Contact Card */}
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto bg-royal/90 border-gold/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">Où nous trouver</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-foreground">1841 Av. des FAR - Plaisance - MEKNES</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-foreground">0535 521 528</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="h-5 w-5 text-gold" />
                  <span className="text-foreground">Ouvert tous les jours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;
