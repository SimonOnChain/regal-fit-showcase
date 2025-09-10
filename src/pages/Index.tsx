import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ParticleBackground from "@/components/ParticleBackground";
import { ExpandingMenu } from "@/components/ExpandingMenu";
import ContactForm from "@/components/ContactForm";
import { Sparkles, Dumbbell, Waves } from "lucide-react";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      
      {/* Le Concept Section */}
      <section id="concept" className="py-20 bg-secondary/20">
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
      <section className="py-20 bg-background">
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

      <ContactForm />
    </div>
  );
};

export default Index;
