import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ExpandingMenu } from "@/components/ExpandingMenu";
import ContactForm from "@/components/ContactForm";
import { AnimatedSection, AnimatedCard } from "@/hooks/useInView";
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-400/80 via-blue-300/60 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center animate-fade-in">
            <div className="text-6xl md:text-8xl font-extrabold uppercase tracking-wider"
                 style={{ 
                   color: 'hsl(210 60% 70%)',
                   textShadow: '0 8px 16px rgba(255, 255, 255, 0.2)',
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 900,
                   lineHeight: '0.9'
                 }}>
              ROYAL
            </div>
            <div className="text-6xl md:text-8xl font-extrabold uppercase tracking-wider"
                 style={{ 
                   color: 'hsl(210 60% 70%)',
                   textShadow: '0 8px 16px rgba(255, 255, 255, 0.2)',
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 900,
                   lineHeight: '0.9'
                 }}>
              FITNESS
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Transition Section */}
      <section className="h-20 bg-gradient-to-b from-blue-200/40 via-blue-300/30 to-royal-blue"></section>

      {/* Le Concept Section */}
      <AnimatedSection className="py-20 bg-blue-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LE CONCEPT
              </h2>
              
              <div className="space-y-6 text-white">
                <p className="text-lg md:text-xl leading-relaxed">
                  Le concept du ROYAL FITNESS redéfinit l'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d'exception.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Découvrez une gamme complète de services premium incluant fitness, aqua-training, spa de luxe, football professionnel, et des programmes spécialisés pour enfants. Notre équipe de coachs certifiés et expérimentés vous accompagne dans votre quête d'excellence.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Que vous visiez l'amélioration de votre mobilité, la croissance musculaire, ou simplement le bien-être intégral, nous avons l'expertise et les équipements de pointe pour vous mener vers vos objectifs.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Prêt à élever votre parcours fitness ? Rejoignez-nous et découvrez le frisson d'atteindre de nouveaux sommets !
                </p>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-4 text-lg font-bold uppercase tracking-wide hover:bg-blue-50 transition-colors duration-300 hover:scale-105 transform"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <a href="/contact">RÉSERVEZ VOTRE ESSAI GRATUIT</a>
              </button>
            </div>
            
            {/* Right Visual Space */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md h-96 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white/60 text-lg">Espace pour visuel</span>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Excellence Training Section */}
      <AnimatedSection className="py-20 bg-blue-500">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXCELLENCE TRAINING
              </h2>
              
              <div className="space-y-6 text-white">
                <p className="text-lg md:text-xl leading-relaxed">
                  Notre approche personnalisée garantit des résultats exceptionnels grâce à nos équipements de dernière génération et nos coachs certifiés.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Bénéficiez d'un accompagnement sur mesure dans un environnement premium conçu pour maximiser vos performances et votre bien-être.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed">
                  Découvrez une expérience fitness unique où chaque détail est pensé pour votre réussite et votre épanouissement personnel.
                </p>
              </div>
              
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 text-lg font-bold uppercase tracking-wide hover:bg-white hover:text-blue-600 transition-all duration-300"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <a href="/contact">Nous contacter</a>
              </button>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
                   style={{ backgroundImage: `url(${fitnessHero})` }}>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fitnessHero})`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <AnimatedCard className="space-y-4" delay={100}>
              <div className="text-5xl md:text-6xl font-bold text-white"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                +97%
              </div>
              <p className="text-xl text-white/90 font-medium">
                Clients satisfaits
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="space-y-4" delay={200}>
              <div className="text-5xl md:text-6xl font-bold text-white"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                +124
              </div>
              <p className="text-xl text-white/90 font-medium">
                Cours collectifs
              </p>
            </AnimatedCard>
            
            <AnimatedCard className="space-y-4" delay={300}>
              <div className="text-5xl md:text-6xl font-bold text-white"
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                +15
              </div>
              <p className="text-xl text-white/90 font-medium">
                Années d'expérience
              </p>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Modern Glass Design Section */}
      <AnimatedSection className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fitnessHero})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/80 via-blue-600/70 to-royal-blue/80" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-white"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ROYAL FITNESS
                    </h2>
                    <div className="bg-yellow-400 text-black px-6 py-2 text-xl font-bold uppercase tracking-wide inline-block"
                         style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      1800 DH/AN
                    </div>
                  </div>
                  
                  <div className="border-2 border-white p-6">
                    <h3 className="text-2xl md:text-3xl font-bold uppercase text-white mb-4"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      RESTEZ EN FORME
                    </h3>
                  </div>
                  
                  <div className="text-white text-lg">
                    <p className="font-bold">0535 521 528</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="space-y-6 text-white">
                  <h3 className="text-2xl font-bold uppercase"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ROYAL FITNESS
                  </h3>
                  
                  <p className="text-lg leading-relaxed">
                    Le Royal Fitness est un programme d'entraînement physique complet et efficace qui élève l'amélioration de la condition physique globale. Adapté à tous vos niveaux, les entraînements expérimentés et personnels supervisent chaque session pour maximiser vos résultats.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Rejoignez notre club de fitness et découvrez les bénéfices incroyables de ce programme d'entraînement unique et stimulant.
                  </p>
                  
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg font-bold uppercase tracking-wide transition-colors duration-300"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    <a href="/contact">DÉCOUVRIR</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 animate-fade-in">
              Nos Services Premium
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in stagger-2">
              Une gamme complète de services dans un environnement d'exception
            </p>
          </div>
          
          <div className="flex justify-center animate-slide-up stagger-3">
            <ExpandingMenu />
          </div>
        </div>
      </AnimatedSection>
      
      <Footer />
    </div>
  );
};

export default Index;
