import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import fitnessService from "@/assets/fitness-service.jpg";

const CrossFit = () => {
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
            alt="CrossFit Center"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-blue-600 via-blue-500/70 via-blue-400/40 via-blue-300/20 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            CROSSFIT
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
                Le MOTIV'CLUB, dispose d'un espace de 500 m2 dédié spécialement au CROSSFIT.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Dépassez vos limites avec l'entraînement le plus intense !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CrossFit Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
                CrossFit
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-8"></div>
            </div>
            
            <div className="space-y-8 animate-fade-in">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
                Le crossfit est une méthode d'entraînement intense qui allie des exercices de musculation et de cardio-training de manière à développer la force, l'endurance et la souplesse de manière globale. Au sein de notre club de fitness, nous proposons des séances de crossfit encadrées par des professionnels qualifiés et adaptées aux niveaux de chacun. Les séances de crossfit sont variées et incluent des exercices à haute intensité utilisant différents équipements et accessoires, comme des kettlebells, des barres de traction, des ballons de stabilité, etc.
              </p>
            </div>
            
            {/* Video placeholder - you can add your video here */}
            <div className="mt-12 animate-fade-in stagger-2">
              <div className="bg-white/70 border border-blue-300/30 rounded-2xl p-8 text-center shadow-lg">
                <div className="w-full h-64 bg-blue-100 rounded-xl flex items-center justify-center border-2 border-dashed border-blue-300">
                  <p className="text-blue-600 text-lg font-medium">
                    Vidéo CrossFit - À ajouter
                  </p>
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

export default CrossFit;