import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import kidsHero from "@/assets/kids-hero.jpg";
import kidsNatation from "@/assets/kids-natation.jpg";
import kidsGym from "@/assets/kids-gym.jpg";
import kidsFootball from "@/assets/kids-football.jpg";

const Kids = () => {
  const kidsActivities = [
    {
      title: "Natation",
      image: kidsNatation,
      description: "La natation est un sport complet et accessible à tous les âges. C'est un excellent moyen de se détendre et de se défouler tout en développant sa condition physique. Nos cours sont dispensés par des professionnels et s'adressent aux enfants dès 5 ans."
    },
    {
      title: "Gym",
      image: kidsGym,
      description: "La gym est un excellent moyen pour les enfants de se défouler et de développer leur condition physique. Nos cours sont ludiques et adaptés à leur niveau, incluant des exercices de renforcement, agilité, coordination."
    },
    {
      title: "Foot",
      image: kidsFootball,
      description: "Le foot est un sport collectif passionnant qui permet aux enfants de s'épanouir et de se dépasser. Nous proposons des entraînements adaptés à tous niveaux, encadrés par des professionnels qualifiés."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-8 right-12 w-38 h-38 bg-blue-200/24 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-12 left-24 w-30 h-30 bg-blue-300/19 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-2/5 right-1/3 w-22 h-22 bg-blue-400/16 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3.2s', animationDuration: '4.5s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-300/26 via-transparent to-blue-400/26 animate-pulse" style={{ animationDuration: '11s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={kidsHero}
            alt="Kids Academy Activities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-blue-600 via-blue-500/70 via-blue-400/40 via-blue-300/20 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in hero-title-mobile"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            KID'S ACADEMY
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
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed font-light">
                Notre club de fitness propose une large gamme d'activités pour les enfants, 
                notamment la natation, la gym et le foot. La natation est un sport complet qui 
                permet de développer la coordination, la force et l'endurance tout en s'amusant. 
                La gym quant à elle est un excellent moyen pour les enfants de se défouler et de 
                développer leur condition physique.
              </p>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Un lieu pour s'amuser, progresser, et s'épanouir !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kids Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Activités Enfants
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Des programmes adaptés pour le développement physique et personnel de votre enfant
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {kidsActivities.map((activity, index) => (
              <Card 
                key={activity.title} 
                className="group bg-white/70 border-blue-300/30 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-slate-800 mb-3 md:mb-4 border-b border-blue-300/30 pb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    {/* Kids Club Section */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-800 mb-4">
            Kids Club
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
            Découvrez nos espaces dédiés aux enfants avec des équipements sécurisés et des activités adaptées
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Kids Club Images - Modern Grid */}
          <div className="group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in">
            <img
              src="/src/assets/kids-club-1.jpg"
              alt="Kids Club Play Area"
              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <img
              src="/src/assets/kids-club-2.jpg"
              alt="Kids Club Activities"
              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <img
              src="/src/assets/kids-club-3.jpg"
              alt="Kids Club Information"
              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          <div className="group overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <img
              src="/src/assets/kids-club-4.jpg"
              alt="Kids Club Space"
              className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
      
      <Footer />
    </div>
  );
};

export default Kids;