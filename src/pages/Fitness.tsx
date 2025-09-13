import RoyalPageTemplate from "@/components/RoyalPageTemplate";
import Footer from "@/components/Footer";
import { AnimatedSection, AnimatedCard } from "@/hooks/useInView";
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
      <AnimatedSection className="py-16 bg-blue-100">
        {/* Modern Blue Background with Gradient */}
        <div className="absolute inset-0 bg-blue-100"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          {/* Modern floating elements */}
          <div className="absolute top-8 right-8 w-32 h-32 bg-blue-200/25 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-12 left-12 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-blue-400/18 rounded-full blur-md animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
          
          {/* Subtle background waves */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-400/25 to-transparent animate-pulse" style={{ animationDuration: '6s' }}></div>
            <div className="absolute w-full h-full bg-gradient-to-l from-transparent via-blue-300/20 to-transparent animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
          </div>
          
          {/* Geometric accents */}
          <div className="absolute top-1/4 right-1/4 w-20 h-20 border border-blue-400/25 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-blue-300/15 rounded-lg rotate-12 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-6">
          <AnimatedCard className="max-w-2xl mx-auto">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wide text-white relative"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="relative z-10 text-slate-800">
                    FITNESS
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent opacity-80"></div>
                </h2>
                
                {/* Modern accent line */}
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse"></div>
                
                <div className="space-y-6 text-slate-700">
                  <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="pl-6">
                      Découvrez notre espace fitness premium avec équipements de pointe, cours collectifs variés et coaching personnalisé pour atteindre vos objectifs.
                    </span>
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="pl-6">
                      Machines dernière génération et poids libres pour tous niveaux. Plus de 20 cours par semaine animés par nos coachs experts.
                    </span>
                  </p>
                  
                  <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                    <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                    <span className="pl-6">
                      Programmes sur-mesure avec suivi personnalisé de vos objectifs. Dépassez vos limites dans un environnement d'exception.
                    </span>
                  </p>
                </div>
                
                <button className="relative group bg-blue-600 text-white px-10 py-5 text-lg font-bold uppercase tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 transform shadow-2xl hover:shadow-blue-500/25"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={handlePrimaryAction}>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border-2 border-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10">
                    VOIR LES PLANNINGS
                  </span>
                </button>
              </div>
              
              {/* Right Modern Visual */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg h-96">
                  {/* Modern geometric design */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-blue-100/10 rounded-2xl backdrop-blur-sm border border-blue-300/20"></div>
                  
                  {/* Floating geometric elements */}
                  <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-500/20 rounded-xl rotate-12 animate-float"></div>
                  <div className="absolute bottom-12 left-8 w-12 h-12 border-2 border-blue-400/40 rounded-lg rotate-45 animate-pulse"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-blue-300/20 to-blue-400/20 rounded-full animate-spin-slow"></div>
                  
                  {/* Central content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-300/30 to-blue-200/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg animate-pulse"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-32 bg-blue-400/40 rounded-full mx-auto animate-pulse"></div>
                        <div className="h-2 w-24 bg-blue-300/30 rounded-full mx-auto animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/40 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/40 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </AnimatedSection>
      
      <Footer />
    </RoyalPageTemplate>
  );
};

export default Fitness;