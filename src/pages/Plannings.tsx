import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Clock, Users, MapPin, Phone, Eye } from "lucide-react";
import planningHero from "@/assets/planning-hero.jpg";
import planningHommesMixtes from "@/assets/planning-hommes-mixtes.jpg";
import planningFemmes from "@/assets/planning-femmes.jpg";
import planningPiscineHommes from "@/assets/planning-piscine-hommes.jpg";
import planningPiscineFemmes from "@/assets/planning-piscine-femmes.jpg";
import planningKids from "@/assets/planning-kids.jpg";

const Plannings = () => {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  const planningCards = [
    {
      id: 1,
      label: "Hommes - Mixtes",
      imgSrc: planningHommesMixtes,
      description: "Planning fitness et musculation pour hommes et mixtes",
      category: "fitness"
    },
    {
      id: 2,
      label: "100% Femmes",
      imgSrc: planningFemmes,
      description: "Planning exclusivement dédié aux femmes",
      category: "fitness"
    },
    {
      id: 3,
      label: "Piscine Hommes",
      imgSrc: planningPiscineHommes,
      description: "Planning des activités aquatiques pour hommes",
      category: "aqua"
    },
    {
      id: 4,
      label: "Piscine Femmes",
      imgSrc: planningPiscineFemmes,
      description: "Planning des activités aquatiques pour femmes",
      category: "aqua"
    },
    {
      id: 5,
      label: "Kids",
      imgSrc: planningKids,
      description: "Planning des activités pour enfants",
      category: "kids"
    }
  ];

  const openModal = (plan: any) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-14 left-18 w-42 h-42 bg-blue-200/21 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-18 right-14 w-34 h-34 bg-blue-300/17 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-26 h-26 bg-blue-400/13 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4.8s', animationDuration: '5.5s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-tl from-blue-300/24 via-transparent to-blue-400/24 animate-pulse" style={{ animationDuration: '13s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section */}
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
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${planningHero})`,
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent animate-fade-in">
            <span className="relative">
              Plannings
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent animate-pulse"></div>
            </span>
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 mb-8 max-w-3xl mx-auto animate-fade-in">
            <p className="text-xl leading-relaxed">
              Découvrez les plannings de cours et d'activités du Royal Fitness Club. 
              Nos offres sont adaptées à tous niveaux et besoins, encadrées par des 
              professionnels passionnés.
            </p>
          </div>
        </div>
      </section>

      {/* Planning Cards Grid Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Plannings
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choisissez votre planning selon vos préférences et votre emploi du temps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {planningCards.map((plan, index) => (
              <Card 
                key={plan.id} 
                className="group overflow-hidden hover-scale cursor-pointer border-2 border-transparent hover:border-blue-500/50 transition-all duration-300 animate-fade-in bg-white/70 rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative">
                  <img 
                    src={plan.imgSrc} 
                    alt={plan.label}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {plan.category.charAt(0).toUpperCase() + plan.category.slice(1)}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
                      onClick={() => openModal(plan)}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      Voir Planning
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {plan.label}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => openModal(plan)}
                  >
                    Consulter
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center border border-blue-300/20 hover-scale bg-white/70 rounded-lg shadow-lg">
              <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Plannings Mis à Jour
              </h3>
              <p className="text-slate-700 text-sm">
                Consultez nos plannings régulièrement mis à jour pour ne rien manquer
              </p>
            </Card>

            <Card className="p-6 text-center border border-blue-300/20 hover-scale bg-white/70 rounded-lg shadow-lg">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Cours Encadrés
              </h3>
              <p className="text-slate-700 text-sm">
                Tous nos cours sont encadrés par des professionnels certifiés
              </p>
            </Card>

            <Card className="p-6 text-center border border-blue-300/20 hover-scale bg-white/70 rounded-lg shadow-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-slate-800 mb-2">
                Horaires Flexibles
              </h3>
              <p className="text-slate-700 text-sm">
                Large amplitude horaire pour s'adapter à votre emploi du temps
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal for Planning Details */}
      {selectedPlan && (
        <Dialog open={!!selectedPlan} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-2 overflow-hidden">
            <div className="relative">
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif font-bold text-slate-800 text-center border-b border-accent/20 pb-4 mb-4">
                  Planning {selectedPlan.label}
                </DialogTitle>
                <DialogDescription className="text-slate-600 text-center">
                  {selectedPlan.description}
                </DialogDescription>
              </DialogHeader>
              <div className="max-h-[70vh] overflow-auto">
                <img 
                  src={selectedPlan.imgSrc} 
                  alt={`Planning ${selectedPlan.label}`}
                  className="w-full h-auto rounded-lg border border-accent/20"
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
export default Plannings;