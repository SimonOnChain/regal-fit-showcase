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


      {/* Le Concept Section */}
      <AnimatedSection className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        {/* Modern Blue Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-blue-200/20 to-blue-300/10"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          {/* Top geometric shapes */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-300/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl transform translate-x-48 -translate-y-48"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/5 rounded-full blur-2xl"></div>
          
          {/* Modern grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div 
                  key={i} 
                  className="border border-blue-400/20 animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-400/20 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-lg rotate-12 animate-float"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-wide text-white relative"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="relative z-10 text-slate-800">
                LE CONCEPT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent opacity-80"></div>
              </h2>
              
              {/* Modern accent line */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse"></div>
              
              <div className="space-y-6 text-slate-700">
                <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-6">
                  Le concept du ROYAL FITNESS redéfinit l'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d'exception.
                  </span>
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-6">
                  Découvrez une gamme complète de services premium incluant fitness, aqua-training, spa de luxe, football professionnel, et des programmes spécialisés pour enfants. Notre équipe de coachs certifiés et expérimentés vous accompagne dans votre quête d'excellence.
                  </span>
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-6">
                  Que vous visiez l'amélioration de votre mobilité, la croissance musculaire, ou simplement le bien-être intégral, nous avons l'expertise et les équipements de pointe pour vous mener vers vos objectifs.
                  </span>
                </p>
                
                <p className="text-lg md:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-6">
                  Prêt à élever votre parcours fitness ? Rejoignez-nous et découvrez le frisson d'atteindre de nouveaux sommets !
                  </span>
                </p>
              </div>
              
              <button className="relative group bg-blue-600 text-white px-10 py-5 text-lg font-bold uppercase tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 transform shadow-2xl hover:shadow-blue-500/25"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 border-2 border-blue-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10">
                <a href="/contact">RÉSERVEZ VOTRE ESSAI GRATUIT</a>
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
        </div>
      </AnimatedSection>

      {/* Excellence Training Section */}
      <AnimatedSection className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide text-slate-800"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXCELLENCE TRAINING
              </h2>
              
              <div className="space-y-6 text-slate-700">
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
              
              <button className="bg-blue-600 border-2 border-blue-600 text-white px-8 py-4 text-lg font-bold uppercase tracking-wide hover:bg-blue-700 hover:border-blue-700 transition-all duration-300"
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
      <AnimatedSection className="py-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4 animate-fade-in">
              Nos Services Premium
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in stagger-2">
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
