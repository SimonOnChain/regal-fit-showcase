import { Button } from "@/components/ui/button";
import { Crown, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-90 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80"
          alt="Luxury fitness center"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="fade-in">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-16 w-16 text-accent mr-4" />
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground">
              Royal Fitness
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Découvrez l'excellence du fitness dans un cadre royal. 
            Une expérience premium qui redéfinit votre approche du bien-être.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-royal text-lg px-8 py-6">
              <Crown className="mr-2 h-5 w-5" />
              Découvrir nos Services
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Play className="mr-2 h-5 w-5" />
              Voir la Galerie
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">Membres Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">15</div>
              <div className="text-muted-foreground">Années d'Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">24/7</div>
              <div className="text-muted-foreground">Accès Premium</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;