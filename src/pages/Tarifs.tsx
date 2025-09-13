import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200">
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
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-0.5 bg-gold"></div>
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-gold">
                Nos tarifs fitness
              </h1>
              <div className="w-12 h-0.5 bg-gold"></div>
            </div>
            
            <Card className="card-royal bg-royal/80 backdrop-blur-sm border-gold/30 p-8 max-w-3xl mx-auto">
              <p className="text-xl leading-relaxed text-white">
                L'adhésion a ses privilèges : accès illimité, réduction SPA, et bien plus. 
                Contactez-nous pour organiser une visite ou échanger avec nous aujourd'hui.
              </p>
            </Card>
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
              Choisissez la formule qui vous convient le mieux
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`card-royal group overflow-hidden hover-scale cursor-pointer transition-all duration-300 animate-fade-in bg-royal/90 border-gold/30 ${
                  plan.popular ? 'border-2 border-blue-600 shadow-lg' : 'bg-white/70 border-blue-300/30'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 font-semibold">
                    ⭐ Plus Populaire
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={plan.imgSrc} 
                    alt={plan.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-3xl font-bold mb-2">{plan.price}</p>
                    <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg py-3 transition-all duration-300">
                    Sélectionner
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Mo'Spa Tariffs Button */}
          <div className="text-center mt-16">
            <Button 
              onClick={openSpaModal}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 transition-all duration-300"
            >
              Voir Tarifs SPA
              <span className="ml-2 bg-blue-500/20 px-2 py-1 rounded text-sm">-15% pour les abonnés</span>
            </Button>
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-white/70 border-blue-300/30 hover-scale animate-fade-in rounded-lg shadow-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Communauté Exclusive
              </h3>
              <p className="text-slate-700 text-sm">
                Rejoignez une communauté de passionnés de fitness et de bien-être
              </p>
            </Card>

            <Card className="p-6 text-center bg-white/70 border-blue-300/30 hover-scale animate-fade-in rounded-lg shadow-lg" style={{ animationDelay: "0.2s" }}>
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Coaching Premium
              </h3>
              <p className="text-slate-700 text-sm">
                Bénéficiez d'un accompagnement personnalisé par nos experts
              </p>
            </Card>

            <Card className="p-6 text-center bg-white/70 border-blue-300/30 hover-scale animate-fade-in rounded-lg shadow-lg" style={{ animationDelay: "0.4s" }}>
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Résultats Garantis
              </h3>
              <p className="text-slate-700 text-sm">
                Atteignez vos objectifs avec nos programmes personnalisés
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Spa Tariffs Modal */}
      {spaModalOpen && (
        <Dialog open={spaModalOpen} onOpenChange={closeSpaModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-2 overflow-hidden bg-royal/95 border-gold/30">
            <div className="relative">
              <div className="mb-4 text-center border-b border-gold/30 pb-4">
                <h2 className="text-2xl font-serif font-bold text-gold">
                  Tarifs Mo'Spa
                </h2>
                <div className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  -15% pour les abonnés fitness
                </div>
              </div>
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