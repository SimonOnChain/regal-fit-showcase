import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { ExpandingMenu } from "@/components/ExpandingMenu";
import ContactForm from "@/components/ContactForm";
import { AnimatedSection, AnimatedCard } from "@/hooks/useInView";
import { Sparkles, Dumbbell, Waves } from "lucide-react";
import fitnessHero from "@/assets/motiv.jpg";
import fitnessHero1 from "@/assets/motiv.jpg";
import fitnessHero2 from "@/assets/motiv.jpg";

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
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-blue-100 via-blue-100/60 via-blue-100/30 to-transparent" />
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center animate-fade-in">
            <div className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-wider hero-title-mobile"
                 style={{ 
                   color: 'white',
                   textShadow: '0 8px 16px rgba(255, 255, 255, 0.2)',
                   fontFamily: 'Montserrat, sans-serif',
                   fontWeight: 900,
                   lineHeight: '0.9'
                 }}>
              ROYAL
            </div>
            <div className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-wider hero-title-mobile"
                 style={{ 
                   color: 'white',
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
      <AnimatedSection className="relative py-20 overflow-hidden bg-blue-100">
        {/* Modern Blue Background with Gradient */}
        <div className="absolute inset-0 bg-blue-100"></div>
        
        {/* Geometric Background Elements */}
        <div className="absolute inset-0">
          {/* Modern floating orbs */}
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-400/25 rounded-full blur-md animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
          
          {/* Subtle wave animation */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-blue-300/15 to-transparent animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
          </div>
          
          {/* Modern geometric shapes */}
          <div className="absolute top-1/4 right-1/3 w-20 h-20 border border-blue-400/30 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-blue-300/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wide text-white relative"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <span className="relative z-10 text-slate-800">
                LE CONCEPT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent opacity-80"></div>
              </h2>
              
              {/* Modern accent line */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full animate-pulse"></div>
              
              <div className="space-y-6 text-slate-700">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-4 md:pl-6">
                  Le concept du ROYAL FITNESS redéfinit l'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d'exception.
                  </span>
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-4 md:pl-6">
                  Découvrez une gamme complète de services premium incluant fitness, aqua-training, spa de luxe, football professionnel, et des programmes spécialisés pour enfants. Notre équipe de coachs certifiés et expérimentés vous accompagne dans votre quête d'excellence.
                  </span>
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-4 md:pl-6">
                  Que vous visiez l'amélioration de votre mobilité, la croissance musculaire, ou simplement le bien-être intégral, nous avons l'expertise et les équipements de pointe pour vous mener vers vos objectifs.
                  </span>
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed hover:text-slate-900 transition-colors duration-300 relative group">
                  <span className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-full transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
                  <span className="pl-4 md:pl-6">
                  Prêt à élever votre parcours fitness ? Rejoignez-nous et découvrez le frisson d'atteindre de nouveaux sommets !
                  </span>
                </p>
              </div>
              
              <button className="relative group bg-blue-600 text-white px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold uppercase tracking-wide rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 transform shadow-2xl hover:shadow-blue-500/25 min-h-[44px] w-full sm:w-auto"
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
                {/* Gym interior image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Intérieur du Royal Fitness"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/60 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/60 rounded-br-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Excellence Training Section */}
      <AnimatedSection className="py-20 bg-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full h-96 lg:h-[500px] bg-cover bg-center rounded-lg overflow-hidden"
                   style={{ backgroundImage: `url(${fitnessHero})` }}>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-slate-800"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}>
                EXCELLENCE TRAINING
              </h2>
              
              <div className="space-y-6 text-slate-700">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  Notre approche personnalisée garantit des résultats exceptionnels grâce à nos équipements de dernière génération et nos coachs certifiés.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  Bénéficiez d'un accompagnement sur mesure dans un environnement premium conçu pour maximiser vos performances et votre bien-être.
                </p>
                
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  Découvrez une expérience fitness unique où chaque détail est pensé pour votre réussite et votre épanouissement personnel.
                </p>
              </div>
              
              <button className="bg-blue-600 border-2 border-blue-600 text-white px-6 md:px-8 py-4 text-base md:text-lg font-bold uppercase tracking-wide hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 min-h-[44px] w-full sm:w-auto"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <a href="/contact">Nous contacter</a>
              </button>
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
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +97%
                </div>
                <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium">
                  Clients satisfaits
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl hover:bg-white/15 transition-all duration-300" delay={200}>
              <div className="space-y-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +124
                </div>
                <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium">
                  Cours collectifs
                </p>
              </div>
            </AnimatedCard>
            
            <AnimatedCard className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-8 shadow-xl hover:bg-white/15 transition-all duration-300" delay={300}>
              <div className="space-y-4">
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                     style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  +15
                </div>
                <p className="text-base md:text-lg lg:text-xl text-white/90 font-medium">
                  Années d'expérience
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Modern Glass Design Section */}
      <AnimatedSection className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fitnessHero})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-blue-200/40 to-blue-300/60" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="backdrop-blur-lg bg-white/30 border border-blue-300/30 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-slate-800"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      ROYAL FITNESS
                    </h2>
                    <div className="bg-blue-500 text-white px-4 md:px-6 py-2 text-lg md:text-xl font-bold uppercase tracking-wide inline-block"
                         style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      1800 DH/AN
                    </div>
                  </div>
                  
                  <div className="border-2 border-slate-700 p-6">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase text-slate-800 mb-4"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      RESTEZ EN FORME
                    </h3>
                  </div>
                  
                  <div className="text-slate-800 text-lg">
                    <p className="font-bold">0535 521 528</p>
                  </div>
                </div>
                
                {/* Right Content */}
                <div className="space-y-6 text-slate-700">
                  <h3 className="text-xl md:text-2xl font-bold uppercase text-slate-800"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    ROYAL FITNESS
                  </h3>
                  
                  <p className="text-base md:text-lg leading-relaxed">
                    Le Royal Fitness est un programme d'entraînement physique complet et efficace qui élève l'amélioration de la condition physique globale. Adapté à tous vos niveaux, les entraînements expérimentés et personnels supervisent chaque session pour maximiser vos résultats.
                  </p>
                  
                  <p className="text-base md:text-lg leading-relaxed">
                    Rejoignez notre club de fitness et découvrez les bénéfices incroyables de ce programme d'entraînement unique et stimulant.
                  </p>
                  
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-4 text-base md:text-lg font-bold uppercase tracking-wide transition-colors duration-300 min-h-[44px] w-full sm:w-auto"
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
      <AnimatedSection className="py-20 bg-blue-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-4 animate-fade-in">
              Nos Services Premium
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in stagger-2">
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
