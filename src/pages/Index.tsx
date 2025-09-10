import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ParticleBackground from "@/components/ParticleBackground";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Dumbbell, Waves, Sparkles, Baby, Coffee, Calendar, Euro, Camera } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Fitness",
      description: "Équipements de pointe dans un environnement royal pour sculpter votre corps et dépasser vos limites.",
      icon: Dumbbell,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      features: ["Machines dernière génération", "Coaching personnalisé", "Espace cardio premium"]
    },
    {
      title: "Aqua",
      description: "Piscine royale avec aqua-fitness, natation et relaxation dans une eau cristalline.",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      features: ["Piscine chauffée", "Cours d'aqua-fitness", "Espace détente aquatique"]
    },
    {
      title: "Spa",
      description: "Sanctuaire de bien-être royal avec soins premium, massages et rituels de beauté.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1596178060810-7d4d0e1db7ee?auto=format&fit=crop&w=800&q=80",
      features: ["Massages thérapeutiques", "Soins du visage", "Sauna et hammam"]
    },
    {
      title: "Kids",
      description: "Espace dédié aux petits princes et princesses avec activités ludiques et sécurisées.",
      icon: Baby,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
      features: ["Activités adaptées", "Encadrement professionnel", "Environnement sécurisé"]
    }
  ];

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

      {/* Services Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Preview */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <Coffee className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Mo'Snack</h3>
              <p className="text-muted-foreground">Bar nutritionnel avec smoothies et collations saines</p>
            </div>
            <div className="text-center p-6">
              <Camera className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Galerie Photos</h3>
              <p className="text-muted-foreground">Découvrez nos installations à travers notre galerie</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Plannings</h3>
              <p className="text-muted-foreground">Cours collectifs et sessions personnalisées</p>
            </div>
            <div className="text-center p-6">
              <Euro className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">Nos Tarifs</h3>
              <p className="text-muted-foreground">Formules flexibles adaptées à vos besoins</p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </div>
  );
};

export default Index;
