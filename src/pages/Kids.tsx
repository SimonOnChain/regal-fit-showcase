import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import kidsHeroBg from "@/assets/kids-hero-bg.jpg";
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={kidsHeroBg}
            alt="Kids Academy Activities"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal/70 via-navy/60 to-royal/70"></div>
        <div className="absolute inset-0 bg-gradient-royal opacity-20"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-gold mb-6 tracking-wide">
              Kid's Academy
            </h1>
            <p className="text-2xl md:text-3xl text-white mb-8 font-light">
              Un lieu pour s'amuser, progresser, et s'épanouir – découvrez nos activités enfants !
            </p>
            
            <Card className="bg-royal/80 backdrop-blur-sm border-gold/30 mx-auto max-w-4xl">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-white leading-relaxed">
                  Notre club de fitness propose une large gamme d'activités pour les enfants, 
                  notamment la natation, la gym et le foot. La natation est un sport complet qui 
                  permet de développer la coordination, la force et l'endurance tout en s'amusant. 
                  La gym quant à elle est un excellent moyen pour les enfants de se défouler et de 
                  développer leur condition physique. Enfin, le foot est un sport collectif qui 
                  permet aux enfants de s'épanouir et de se dépasser.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kids Activities Section */}
      <section className="py-20 bg-gradient-to-b from-royal to-navy">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {kidsActivities.map((activity, index) => (
              <Card 
                key={activity.title} 
                className="group bg-royal/90 border-gold/30 overflow-hidden hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-gold mb-4 border-b border-gold/30 pb-2">
                    {activity.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button className="btn-gold text-lg px-8 py-4 shadow-glow hover:shadow-glow-intense transition-all duration-300">
              En savoir plus - Contactez-nous pour les cours enfants
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Section */}
      <section className="h-20 bg-gradient-to-r from-gold/20 via-gold/10 to-gold/20"></section>
    </div>
  );
};

export default Kids;