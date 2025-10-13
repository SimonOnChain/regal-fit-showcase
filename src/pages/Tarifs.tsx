import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Users, Award, Target } from "lucide-react";
import tarifsHero from "@/assets/tarifs-hero.jpg";
import motivBg from "@/assets/motiv-reception.jpg";
import tarifJournee from "@/assets/tarif-journee.jpg";
import tarifSemaine from "@/assets/tarif-semaine.jpg";
import tarifMois from "@/assets/tarif-mois.jpg";
import tarifAnnuel from "@/assets/tarif-annuel.jpg";
import spaTarifs1 from "@/assets/spa-menu-1.png";
import spaTarifs2 from "@/assets/spa-menu-2.png";
import testimonialRida from "@/assets/testimonial-rida.avif";
import testimonialSanae from "@/assets/testimonial-sanae.avif";
import testimonialIlyas from "@/assets/testimonial-ilyas.avif";
import partner1 from "@/assets/partner-1.avif";
import partner2 from "@/assets/partner-2.avif";
import partner3 from "@/assets/partner-3.avif";
import partner4 from "@/assets/partner-4.avif";
import partner5 from "@/assets/partner-5.avif";
import partner6 from "@/assets/partner-6.avif";
import partner7 from "@/assets/partner-7.avif";
import partner8 from "@/assets/partner-8.avif";
import partner9 from "@/assets/partner-9.avif";
import partner10 from "@/assets/partner-10.avif";

const Tarifs = () => {
  const [spaModalOpen, setSpaModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      name: "Rida",
      image: testimonialRida,
      text: "Je suis fan de musculation. A ce niveau je n'ai jamais vu un matériel aussi performant nulle part ailleurs. Un Bravo aussi aux Coachs qui sont vraiment au top. Bravo le MOTIV'CLUB."
    },
    {
      name: "Sanae",
      image: testimonialSanae,
      text: "Les cours collectifs sont formidables. Des entrainements dynamiques avec des coachs très motivés et tellement plein d'énergie !!.Les cours au MOTIV'CLUB sont aussi bon pour le mental que pour le \"BODY\". On se défoule tellement ! Le MOTIV'CLUB c'est comme une grande famille et je suis fière d'en faire partie !"
    },
    {
      name: "Ilyas",
      image: testimonialIlyas,
      text: "Franchement au MOTIV'CLUB je me sens chez moi. C'est vraiment très familiale et le personnel est vraiment cool. Côté équipements je n'ai jamais vu un tel matos !!!"
    }
  ];

  const openSpaModal = () => setSpaModalOpen(true);
  const closeSpaModal = () => setSpaModalOpen(false);
  const openImageModal = (image: string) => setSelectedImage(image);
  const closeImageModal = () => setSelectedImage(null);

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
            backgroundImage: `url(${motivBg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-blue-100 via-blue-100/60 via-blue-100/30 to-transparent" />
        
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


      {/* Pricing Cards Grid */}
      <section className="relative py-20 bg-blue-100 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300/20 rounded-full blur-lg animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Formules
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              L'adhésion a ses privilèges : les membres bénéficient d'un accès illimité à nos installations et à nos cours collectifs ainsi qu'une réduction sur toutes nos prestations SPA.
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
              Contactez-nous pour organiser une visite de notre établissement ou échangez avec nous dès aujourd'hui.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* First Spa Menu Image - Left */}
            <Card 
              className="group overflow-hidden hover-scale cursor-pointer transition-all duration-500 bg-white/90 border border-blue-300/30 rounded-2xl shadow-xl hover:shadow-2xl animate-fade-in"
              onClick={() => openImageModal(spaTarifs2)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl"></div>
                <div className="p-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src={spaTarifs2} 
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

            {/* Second Spa Menu Image - Right */}
            <Card 
              className="group overflow-hidden hover-scale cursor-pointer transition-all duration-500 bg-white/90 border border-blue-300/30 rounded-2xl shadow-xl hover:shadow-2xl animate-fade-in" 
              style={{ animationDelay: "0.2s" }}
              onClick={() => openImageModal(spaTarifs1)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-blue-100/30 rounded-2xl"></div>
                <div className="p-8">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                    <img 
                      src={spaTarifs1} 
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
                src={partner1}
                alt="Partner 1"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.1s" }}>
              <img 
                src={partner2}
                alt="Partner 2"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
              <img 
                src={partner3}
                alt="Partner 3"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.3s" }}>
              <img 
                src={partner4}
                alt="Partner 4"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.4s" }}>
              <img 
                src={partner5}
                alt="Partner 5"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.5s" }}>
              <img 
                src={partner6}
                alt="Partner 6"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.6s" }}>
              <img 
                src={partner7}
                alt="Partner 7"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.7s" }}>
              <img 
                src={partner8}
                alt="Partner 8"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.8s" }}>
              <img 
                src={partner9}
                alt="Partner 9"
                className="max-h-16 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            
            <div className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in group" style={{ animationDelay: "0.9s" }}>
              <img 
                src={partner10}
                alt="Partner 10"
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

      {/* Image Popup Modal */}
      {selectedImage && (
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-5xl max-h-[95vh] overflow-hidden bg-white p-2">
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedImage} 
                alt="Tarifs Spa"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
      
      <Footer />
    </div>
  );
};

export default Tarifs;