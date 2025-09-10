import { useState } from "react";
import Navigation from "@/components/Navigation";
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
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Pricing Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(80, 120, 255, 0.7) 0%, transparent 60%),
            radial-gradient(circle at 80% 80%, rgba(50, 160, 255, 0.6) 0%, transparent 40%),
            linear-gradient(225deg, rgba(40, 60, 180, 1), rgba(10, 10, 30, 1))
          `
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${tarifsHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent animate-fade-in">
            <span className="relative">
              Nos tarifs fitness
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent animate-pulse"></div>
            </span>
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8 max-w-3xl mx-auto animate-fade-in">
            <p className="text-xl leading-relaxed">
              L'adhésion a ses privilèges : accès illimité, réduction SPA, et bien plus. 
              Contactez-nous pour organiser une visite ou échanger avec nous aujourd'hui.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`group overflow-hidden hover-scale cursor-pointer transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'border-2 border-accent shadow-lg shadow-accent/20' : 'border border-accent/20'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="bg-accent text-primary text-center py-2 font-semibold">
                    ⭐ Plus Populaire
                  </div>
                )}
                
                <div className="relative">
                  <img 
                    src={plan.imgSrc} 
                    alt={plan.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-serif font-bold text-accent mb-2">
                      {plan.title}
                    </h3>
                    <p className="text-3xl font-bold mb-2">{plan.price}</p>
                    <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <Button className="btn-gold w-full text-lg py-3">
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
              className="btn-gold text-lg px-8 py-4"
            >
              Voir Tarifs SPA
              <span className="ml-2 bg-accent/20 px-2 py-1 rounded text-sm">-15% pour les abonnés</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Ils nous font confiance
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((partner) => (
              <Card 
                key={partner} 
                className="p-6 flex items-center justify-center hover-scale cursor-pointer border border-accent/20"
              >
                <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">Logo</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Découvrez ce que nos membres pensent de leur expérience Royal Fitness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover-scale border border-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-accent"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <h4 className="text-xl font-serif font-bold text-accent">
                  {testimonial.name}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center border border-accent/20 hover-scale">
              <Users className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Communauté Exclusive
              </h3>
              <p className="text-muted-foreground text-sm">
                Rejoignez une communauté de passionnés de fitness et de bien-être
              </p>
            </Card>

            <Card className="p-6 text-center border border-accent/20 hover-scale">
              <Award className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Coaching Premium
              </h3>
              <p className="text-muted-foreground text-sm">
                Bénéficiez d'un accompagnement personnalisé par nos experts
              </p>
            </Card>

            <Card className="p-6 text-center border border-accent/20 hover-scale">
              <Target className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Résultats Garantis
              </h3>
              <p className="text-muted-foreground text-sm">
                Atteignez vos objectifs avec nos programmes personnalisés
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Spa Tariffs Modal */}
      {spaModalOpen && (
        <Dialog open={spaModalOpen} onOpenChange={closeSpaModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-2 overflow-hidden">
            <div className="relative">
              <div className="mb-4 text-center border-b border-accent/20 pb-4">
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Tarifs Mo'Spa
                </h2>
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  -15% pour les abonnés fitness
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[70vh] overflow-auto">
                <img 
                  src={spaTarifs1} 
                  alt="Tarifs Spa - Page 1"
                  className="w-full h-auto rounded-lg border border-accent/20"
                />
                <img 
                  src={spaTarifs2} 
                  alt="Tarifs Spa - Page 2"
                  className="w-full h-auto rounded-lg border border-accent/20"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Tarifs;