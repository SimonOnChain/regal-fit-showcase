import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dumbbell, Users, Target, Clock, MapPin, Phone } from "lucide-react";
import fitnessService from "@/assets/fitness-service.jpg";
import musculation from "@/assets/musculation.jpg";
import cardioZone from "@/assets/cardio-zone.jpg";
import groupClasses from "@/assets/group-classes.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import hiitSessions from "@/assets/hiit-sessions.jpg";
import elitePrograms from "@/assets/elite-programs.jpg";

const Fitness = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const fitnessImages = [
    { src: musculation, caption: "Espace Musculation", category: "equipment" },
    { src: cardioZone, caption: "Zone Cardio", category: "cardio" },
    { src: groupClasses, caption: "Cours Collectifs", category: "classes" },
    { src: personalTraining, caption: "Coaching Personnel", category: "training" },
    { src: hiitSessions, caption: "Sessions HIIT", category: "training" },
    { src: elitePrograms, caption: "Programmes Elite", category: "elite" },
  ];

  const displayedImages = showAllPhotos ? fitnessImages : fitnessImages.slice(0, 6);

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-20 w-44 h-44 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-24 left-12 w-36 h-36 bg-blue-300/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/3 left-2/3 w-28 h-28 bg-blue-400/12 rounded-full blur-xl animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '6s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-tr from-blue-300/30 via-transparent to-blue-400/30 animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section - Just the title centered */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={fitnessService}
            alt="Fitness Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-600/80 via-blue-500/60 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            FITNESS
          </h1>
        </div>
      </section>

      {/* Description Section - Blue Background */}
      <section className="relative py-20 bg-gradient-to-b from-blue-600 to-blue-700 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-16 left-16 w-24 h-24 bg-blue-300/15 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                Découvrez notre espace fitness premium avec équipements de pointe, cours collectifs variés et coaching personnalisé pour atteindre vos objectifs. Nos machines dernière génération et nos coachs experts vous accompagnent dans votre transformation physique.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Dépassez vos limites dans un environnement d'exception !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Gallery Section */}


      <Footer />
    </div>
  );
};

export default Fitness;