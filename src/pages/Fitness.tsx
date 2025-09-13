import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import { Dumbbell, Users, Target } from "lucide-react";
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
      title="FITNESS"
      subtitle=""
      description=""
      primaryCTA={{
        text: "VOIR LES PLANNINGS",
        action: handlePrimaryAction
      }}
      galleryTitle="Notre Espace Fitness"
      galleryDescription="Un environnement premium pour votre transformation physique"
      images={images}
      detailCards={detailCards}
    />
  );
};

export default Fitness;