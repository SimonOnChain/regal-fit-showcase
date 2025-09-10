import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import aquaServiceImage from "@/assets/aqua-service.jpg";

const Aqua = () => {
  const aquaServices = [
    {
      title: "Natation",
      description: "Le MOTIV' CLUB met à votre disposition deux piscines semi-olympiques chauffées pour la pratique de la natation. Que vous soyez débutant ou nageur confirmé, nos bassins offrent un environnement idéal pour votre entraînement. L'eau maintenue à température optimale garantit un confort maximal pour vos séances, que ce soit pour l'amélioration de votre technique, l'endurance cardiovasculaire ou simplement pour un moment de détente et de bien-être réparateur.",
      image: aquaServiceImage,
      reverse: false
    },
    {
      title: "Aqua gym",
      description: "Le MOTIV' CLUB propose des cours collectifs d'aqua gym dans nos piscines semi-olympiques chauffées. Cette activité aquatique combine fitness et plaisir dans un environnement aquatique sécurisé. Nos séances d'aqua gym permettent de travailler l'ensemble du corps en douceur grâce à la résistance naturelle de l'eau, tout en préservant vos articulations. Une activité parfaite pour maintenir sa forme physique dans une atmosphère conviviale et confortable.",
      image: aquaServiceImage,
      reverse: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal via-royal-dark to-navy opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-overlay opacity-40"></div>
        
        {/* Particle Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gold rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-gold rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-gold mb-6 leading-tight">
            2 piscines semi-Olympique
            <span className="block text-5xl md:text-6xl text-white mt-2">
              chauffées
            </span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-gold to-gold-light mx-auto rounded-full shadow-gold"></div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-royal">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {aquaServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  service.reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div className="relative overflow-hidden rounded-lg border-2 border-gold/30 hover:border-gold transition-all duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover:opacity-10 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-gold-light/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <Card className="bg-navy/40 border-gold/30 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <h2 className="text-4xl font-serif font-bold text-gold mb-6 relative">
                        {service.title}
                        <div className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-gold to-gold-light rounded-full"></div>
                      </h2>
                      <p className="text-lg text-white leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aqua;