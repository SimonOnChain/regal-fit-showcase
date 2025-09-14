import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Star, Users, Award, Target } from "lucide-react";
import tarifsHero from "@/assets/tarifs-hero.jpg";
import tarifJournee from "@/assets/tarif-journee.jpg";
import tarifSemaine from "@/assets/tarif-semaine.jpg";
import tarifMois from "@/assets/tarif-mois.jpg";
import tarifAnnuel from "@/assets/tarif-annuel.jpg";
import spaTarifs1 from "@/assets/spa-tarifs-1.jpg";
import spaTarifs2 from "@/assets/spa-tarifs-2.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const Tarifs = () => {
  const [spaModalOpen, setSpaModalOpen] = useState(false);

  const pricingPlans = [
    {
      id: 1,
      title: "1 journée",
      price: "50 DH",
      imgSrc: tarifJournee,
      description: "Accès complet pour une journée",
      popular: false
    },
    {
      id: 2,
      title: "1 semaine",
      price: "200 DH",
      imgSrc: tarifSemaine,
      description: "Accès illimité pendant 7 jours",
      popular: false
    },
    {
      id: 3,
      title: "1 mois",
      price: "400 DH",
      imgSrc: tarifMois,
      description: "Abonnement mensuel complet",
      popular: true
    },
    {
      id: 4,
      title: "1 année",
      price: "3600 DH",
      imgSrc: tarifAnnuel,
      description: "Meilleure offre - Économisez 1200 DH",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Benali",
      image: testimonial1,
      text: "Royal Fitness a transformé ma routine. L'ambiance est exceptionnelle et l'équipe très professionnelle. Je recommande vivement!"
    },
    {
      name: "Ahmed Tazi",
      image: testimonial2,
      text: "Depuis que je suis membre, j'ai atteint tous mes objectifs fitness. Les coachs sont fantastiques et les équipements de qualité."
    },
    {
      name: "Fatima Alami",
      image: testimonial3,
      text: "Un club d'exception! L'espace spa est un vrai plus. Je me sens privilégiée d'être membre de cette communauté royale."
    }
  ];

  const openSpaModal = () => setSpaModalOpen(true);
  const closeSpaModal = () => setSpaModalOpen(false);

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
      
      {/* Hero Pricing Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${tarifsHero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-royal"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal/80 via-navy/70 to-royal/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-blue-600 via-blue-500/70 via-blue-400/40 via-blue-300/20 to-transparent"></div>
        
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            NOS TARIFS
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
                L'adhésion a ses privilèges : accès illimité, réduction SPA, et bien plus. 
                Contactez-nous pour organiser une visite ou échanger avec nous aujourd'hui.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Découvrez nos formules premium !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Formules
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez nos services spa premium avec des tarifs préférentiels pour nos abonnés
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* First Spa Menu Image */}
            <Card className="group overflow-hidden hover-scale cursor-pointer transition-all duration-500 bg-white/90 border border-blue-300/30 rounded-2xl shadow-xl hover:shadow-2xl animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl"></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-2">
                      Services Spa Premium
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src="/src/assets/image.png" 
                      alt="Menu Spa Services"
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      -15% pour les abonnés fitness
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Hammams, massages, soins du visage et packs wellness dans un environnement luxueux
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Second Spa Menu Image */}
            <Card className="group overflow-hidden hover-scale cursor-pointer transition-all duration-500 bg-white/90 border border-blue-300/30 rounded-2xl shadow-xl hover:shadow-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl"></div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-serif font-bold text-slate-800 mb-2">
                      Coiffure & Esthétique
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto"></div>
                  </div>
                  
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src="/src/assets/image.png" 
                      alt="Menu Coiffure et Esthétique"
                      className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="inline-block bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                      Services premium disponibles
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Coiffure professionnelle, épilation, onglerie et soins esthétiques de qualité
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Mo'Spa Tariffs Button */}
          <div className="text-center mt-16">
            <Button 
              onClick={openSpaModal}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
            >
              Voir Tous les Tarifs SPA
              <span className="ml-2 bg-blue-500/20 px-3 py-1 rounded-full text-sm">Détails complets</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              PARTENAIRES
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600">
              Ils nous font confiance:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 1"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.1s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 2"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 3"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.3s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 4"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.4s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 5"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.5s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 6"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.6s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 7"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.7s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 8"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.8s" }}>
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
                alt="Partner 9"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Témoignages
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez ce que nos membres pensent de leur expérience Royal Fitness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-scale bg-white/70 border-blue-300/30 animate-fade-in rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-600"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-blue-600 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <h4 className="text-xl font-serif font-bold text-slate-800">
                  {testimonial.name}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Tariffs Modal */}
      {spaModalOpen && (
        <Dialog open={spaModalOpen} onOpenChange={closeSpaModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-2 overflow-hidden bg-royal/95 border-gold/30">
            <div className="relative">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif font-bold text-gold text-center border-b border-gold/30 pb-4 mb-4">
                  Tarifs Mo'Spa
                </DialogTitle>
                <DialogDescription className="text-center">
                  <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
                    -15% pour les abonnés fitness
                  </div>
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-auto">
                <img 
                  src={spaTarifs1} 
                  alt="Tarifs Spa - Page 1"
                  className="w-full h-auto rounded-lg border border-gold/30"
                />
                <img 
                  src={spaTarifs2} 
                  alt="Tarifs Spa - Page 2"
                  className="w-full h-auto rounded-lg border border-gold/30"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default Tarifs;