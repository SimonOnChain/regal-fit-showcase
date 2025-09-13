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
      <section className="h-32 bg-gradient-to-b from-slate-900/20 via-slate-800/30 to-slate-900"></section>

      {/* Le Concept Section */}
      <AnimatedSection className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Modern geometric background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-white/20 animate-pulse"
                style={{ 
                  animationDelay: `${(i % 12) * 0.1}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <h2 className="relative text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    LE CONCEPT
                  </span>
                </h2>
                <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-8 text-white/90">
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <p className="text-lg md:text-xl leading-relaxed pl-6 transform transition-all duration-700 hover:translate-x-2">
                  Le concept du ROYAL FITNESS redéfinit l'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d'exception.
                  </p>
                </div>
                
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
                  <p className="text-lg md:text-xl leading-relaxed pl-6 transform transition-all duration-700 hover:translate-x-2">
                  Découvrez une gamme complète de services premium incluant fitness, aqua-training, spa de luxe, football professionnel, et des programmes spécialisés pour enfants. Notre équipe de coachs certifiés et expérimentés vous accompagne dans votre quête d'excellence.
                  </p>
                </div>
                
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-red-500 rounded-full"></div>
                  <p className="text-lg md:text-xl leading-relaxed pl-6 transform transition-all duration-700 hover:translate-x-2">
                  Que vous visiez l'amélioration de votre mobilité, la croissance musculaire, ou simplement le bien-être intégral, nous avons l'expertise et les équipements de pointe pour vous mener vers vos objectifs.
                  </p>
                </div>
                
                <div className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
                  <p className="text-lg md:text-xl leading-relaxed pl-6 transform transition-all duration-700 hover:translate-x-2">
                  Prêt à élever votre parcours fitness ? Rejoignez-nous et découvrez le frisson d'atteindre de nouveaux sommets !
                  </p>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <button className="relative bg-white text-slate-900 px-10 py-5 text-lg font-black uppercase tracking-wide rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <a href="/contact" className="flex items-center space-x-2">
                    <span>RÉSERVEZ VOTRE ESSAI GRATUIT</span>
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                  </a>
                </button>
              </div>
            </div>
            
            {/* Right Visual Space */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative w-full max-w-lg h-[500px] group">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Main container */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  {/* Floating elements */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                  <div className="absolute top-20 right-12 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                  <div className="absolute bottom-16 left-12 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
                  
                  {/* Center content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                            <span className="text-3xl font-black text-slate-900">RF</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-2xl font-black text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          EXCELLENCE
                        </h3>
                        <div className="flex space-x-1 justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated lines */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Excellence Training Section */}
      <AnimatedSection className="relative py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="relative">
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                    EXCELLENCE TRAINING
                  </span>
                </h2>
                <div className="mt-4 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              </div>
              
              <div className="space-y-8 text-white/90">
                <p className="text-lg md:text-xl leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                  Notre approche personnalisée garantit des résultats exceptionnels grâce à nos équipements de dernière génération et nos coachs certifiés.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                  Bénéficiez d'un accompagnement sur mesure dans un environnement premium conçu pour maximiser vos performances et votre bien-être.
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed transform transition-all duration-500 hover:translate-x-2">
                  Découvrez une expérience fitness unique où chaque détail est pensé pour votre réussite et votre épanouissement personnel.
                </p>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <button className="relative bg-transparent border-2 border-white text-white px-10 py-5 text-lg font-black uppercase tracking-wide rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <a href="/contact">Nous contacter</a>
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative w-full h-96 lg:h-[500px] bg-cover bg-center rounded-2xl overflow-hidden border border-white/20 transform transition-all duration-500 group-hover:scale-105"
                     style={{ backgroundImage: `url(${fitnessHero})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <AnimatedCard className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl hover:bg-white/15 transition-all duration-300" delay={100}>
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +97%
                </div>
                <p className="text-xl text-white/90 font-medium">
                  Clients satisfaits
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl hover:bg-white/15 transition-all duration-300" delay={200}>
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +124
                </div>
                <p className="text-xl text-white/90 font-medium">
                  Cours collectifs
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl hover:bg-white/15 transition-all duration-300" delay={300}>
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +15
                </div>
                <p className="text-xl text-white/90 font-medium">
                  Années d'expérience
                </p>
              </div>
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
