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
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-white via-white/70 via-white/40 via-white/20 to-transparent"></div>
        
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

      {/* Description Section - White Background */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="space-y-8 animate-fade-in">
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                Découvrez notre espace fitness premium avec équipements de pointe, cours collectifs variés et coaching personnalisé pour atteindre vos objectifs. Nos machines dernière génération et nos coachs experts vous accompagnent dans votre transformation physique.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-slate-800 animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Dépassez vos limites dans un environnement d'exception !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fitness Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Activités Fitness
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète d'activités pour tous les niveaux
            </p>
          </div>
          
          <div className="space-y-20 max-w-7xl mx-auto">
            {/* Row 1: Cardio - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={cardioZone}
                  alt="Zone Cardio"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  CARDIO
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  CARDIO
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Le cardio-training regroupe toutes les activités d'endurance qui ont pour but d'améliorer vos capacités physiques. À la clef, une plus grande endurance dans la vie de tous les jours, moins de fatigue lors des efforts physiques et une meilleure forme physique générale. Le cardio-training améliorera votre capacité pulmonaire, votre souffle, vos performances cardiaques et de manière générale votre endurance. Au MOTIV'CLUB deux plateaux de plus de 2000 m² sont à votre disposition avec une palette de machines de la dernière génération.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
            </div>

            {/* Row 2: Musculation - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  MUSCULATION
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  La musculation est une activité physique qui peut être réalisée par tous et dans n'importe quel lieu. Les avantages sont extrêmement nombreux à condition de suivre les conseils de nos spécialistes et porter une attention particulière à votre alimentation. Le MOTIV'CLUB est l'espace de musculation par excellence et certainement le mieux équipé au Maroc. Notre équipe de coachs professionnels se fera un plaisir de vous guider pour atteindre le corps de vos rêves.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
              <div className="relative lg:order-2">
                <img
                  src={musculation}
                  alt="Salle de Musculation"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  MUSCULATION
                </div>
              </div>
            </div>

            {/* Row 3: Cours collectifs cardio - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={groupClasses}
                  alt="Cours Collectifs Cardio"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  COURS COLLECTIFS CARDIO
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  COURS COLLECTIFS CARDIO
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Le MOTIV'CLUB vous propose des cours collectifs pour améliorer vos capacités cardiaques et vasculaires. Cela vous permettra de perfectionner votre condition physique générale. Quel que soit le cours choisi, vous brûlerez beaucoup de calories et bénéficierez d'une perte de poids et d'une plus grande tonicité. Nos coachs vous plongeront dans une ambiance dynamique et rigoureuse sans vous faire oublier l'aspect ludique et convivial ! Tous nos cours sont animés par des coachs certifiés. Au MOTIV'CLUB vous êtes entre les mains de vrais professionnels !
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
            </div>

            {/* Row 4: Cours collectifs renforcement - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  COURS COLLECTIFS RENFORCEMENT
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Nos cours collectifs de renforcement sont des entraînements pré-chorégraphiés inspirés des arts martiaux tels que le karaté, la capoeira, la boxe, le Kung fu, le kickboxing, le Taekwondo, le Tai-chi. Sur des musiques motivantes, ces cours vous feront entrer en guerre contre la sédentarité et les calories, en déchargeant le guerrier qui est en vous ! Ils sont accessibles et adaptables à tous. La séance varie selon le format choisi : le cours de renforcement peut durer entre 30 et 60 minutes selon le format choisi. Avec un taux de calories brûlées très important (entre 500 et 800).
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
              <div className="relative lg:order-2">
                <img
                  src={hiitSessions}
                  alt="Cours Collectifs Renforcement"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  RENFORCEMENT
                </div>
              </div>
            </div>

            {/* Row 5: Cours collectifs danse - Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3775593/pexels-photo-3775593.jpeg"
                  alt="Cours Collectifs Danse"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  COURS COLLECTIFS DANSE
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  COURS COLLECTIFS DANSE
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Le MOTIV'CLUB propose des cours collectifs de danse pour apprendre à danser tout en s'éclatant. Les séances se déroulent sur les sons les plus tendances du moment, avec un coach certifié. La danse est un véritable exutoire, vous relâchez la pression du quotidien et ressentez de vrais moments de détente et de plaisir. Ici, tout le monde est là pour s'amuser et se lâcher, sans complexe et sans prise de tête ! Vous vous dépensez en musique tout en vous amusant. En même temps, vous améliorez votre coordination, votre endurance et la souplesse de votre corps. Vous brûlerez les calories et perdrez du poids sans même vous en rendre compte. Mesdames, vous n'avez pas le sens du rythme ? Pas de panique, les cours collectifs de danse orientale sont accessibles à toutes.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
            </div>

            {/* Row 6: MOTIV TRAINING - Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 lg:order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-800 uppercase tracking-wide"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  MOTIV TRAINING
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Le MOTIV'TRAINING est un ensemble d'exercices spécifiques dédiés exclusivement aux membres de la communauté MOTIV'CLUB. Cette méthode permet, sous le contrôle de nos coachs, de vous faire évoluer vers un objectif prédéfini (perte de poids, tonicité, gainage etc...) Grâce à différentes méthodes élaborées au MOTIV'CLUB, nos personal-trainers vous faciliteront l'application de vos besoins en utilisant des techniques propres à notre établissement.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-all duration-300">
                  <a href="/contact">DÉCOUVRIR</a>
                </Button>
              </div>
              <div className="relative lg:order-2">
                <img
                  src={elitePrograms}
                  alt="MOTIV Training"
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                  MOTIV TRAINING
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default Fitness;