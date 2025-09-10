import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import { ExpandingMenu } from "@/components/ExpandingMenu";
import ContactForm from "@/components/ContactForm";
import { Sparkles, Dumbbell, Waves } from "lucide-react";
import fitnessHero from "@/assets/fitness-service.jpg";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fitnessHero})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent">
            Royal Fitness
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 italic">
            Le Concept Royal
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 mb-8 max-w-2xl mx-auto rounded-lg">
            <p className="text-xl leading-relaxed">
              Découvrez l'excellence fitness dans un environnement royal premium où tradition et modernité se rencontrent.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-gold text-lg px-8 py-4 text-primary font-semibold">
              <a href="/fitness">Découvrir nos Services</a>
            </button>
          </div>
        </div>
      </section>

      {/* Le Concept Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Le Concept Royal
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Royal Fitness redéfinit l'expérience du bien-être en alliant excellence, sophistication et innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">Des standards de qualité exceptionnels dans chaque service et équipement</p>
            </div>
            
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">Technologies de pointe et méthodes avant-gardistes au service de votre forme</p>
            </div>
            
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Bien-être</h3>
              <p className="text-muted-foreground leading-relaxed">Un écosystème complet dédié à votre santé physique et mentale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Nos Services Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une gamme complète de services dans un environnement d'exception
            </p>
          </div>
          
          <div className="flex justify-center">
            <ExpandingMenu />
          </div>
        </div>
      </section>

      {/* Excellence Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              L'Excellence à Votre Service
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Royal Fitness vous accompagne dans votre quête d'excellence avec des services premium et un environnement d'exception.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-4">Coaching Expert</h4>
              <p className="text-muted-foreground leading-relaxed">Accompagnement personnalisé par nos coachs certifiés et expérimentés</p>
            </div>
            
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Dumbbell className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-4">Équipements Premium</h4>
              <p className="text-muted-foreground leading-relaxed">Technologies de pointe et équipements haut de gamme pour des résultats optimaux</p>
            </div>
            
            <div className="text-center p-8 border border-accent/20 rounded-lg bg-background hover-scale">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Waves className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-xl font-serif font-bold text-foreground mb-4">Bien-être Intégral</h4>
              <p className="text-muted-foreground leading-relaxed">Approche holistique de votre santé et forme physique dans un cadre royal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto p-8 border border-accent/20 rounded-lg bg-secondary/5">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Rejoignez Royal Fitness
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Découvrez l'excellence fitness dans un environnement premium et royal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold">
                <a href="/contact">Nous contacter</a>
              </button>
              <button className="border border-accent text-accent hover:bg-accent hover:text-white px-6 py-3 rounded-lg transition-colors">
                <a href="/tarifs">Voir les tarifs</a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
