import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Target, Clock, MapPin, Phone } from "lucide-react";
import fitnessService from "@/assets/fitness-service.jpg";
import musculation from "@/assets/musculation.jpg";
import cardioZone from "@/assets/cardio-zone.jpg";
import groupClasses from "@/assets/group-classes.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import hiitSessions from "@/assets/hiit-sessions.jpg";
import elitePrograms from "@/assets/elite-programs.jpg";

const Fitness = () => {
  const images = [
    { src: musculation, caption: "Espace Musculation", category: "equipment" },
    { src: cardioZone, caption: "Zone Cardio", category: "cardio" },
    { src: groupClasses, caption: "Cours Collectifs", category: "classes" },
    { src: personalTraining, caption: "Coaching Personnel", category: "training" },
    { src: hiitSessions, caption: "Sessions HIIT", category: "training" },
    { src: elitePrograms, caption: "Programmes Elite", category: "elite" },
  ];

  const detailCards = [
    {
      icon: <Dumbbell className="h-12 w-12" />,
      title: "Équipements Premium",
      description: "Machines dernière génération et poids libres pour tous niveaux"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Cours Collectifs",
      description: "Plus de 20 cours par semaine animés par nos coachs experts"
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: "Coaching Personnel",
      description: "Programmes sur-mesure avec suivi personnalisé de vos objectifs"
    }
  ];

  const handlePrimaryAction = () => {
    window.location.href = "/plannings";
  };

  return (
    <RoyalPageTemplate
      heroImage={fitnessService}
      title="Fitness"
      subtitle="Dépassez vos limites"
      description="Découvrez notre espace fitness premium avec équipements de pointe, cours collectifs variés et coaching personnalisé pour atteindre vos objectifs."
      primaryCTA={{
        text: "Voir les Plannings",
        action: handlePrimaryAction
      }}
      galleryTitle="Notre Espace Fitness"
      galleryDescription="Un environnement premium pour votre transformation physique"
      images={images}
      detailCards={detailCards}
    >
      {/* Additional Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 border border-accent/20">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
              Informations Fitness
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
                  Lun-Dim: 6h00 - 23h00
                </span>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Button className="btn-gold">
                Réserver une séance
              </Button>
            </div>
          </Card>
        </div>
      </section>
      
      <Footer />
    </RoyalPageTemplate>
  );
};

export default Fitness;