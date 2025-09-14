import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import spaHammam from "@/assets/spa-hammam.jpg";
import spaMassage from "@/assets/spa-massage.jpg";
import spaSoins from "@/assets/spa-soins.jpg";
import spaCoiffure from "@/assets/spa-coiffure.jpg";
import spaWedding from "@/assets/spa-wedding.jpg";
import spaEsthetique from "@/assets/spa-esthetique.jpg";
import spaHeroBg from "@/assets/spa-hero-bg.jpg";

const Spa = () => {
  const spaServices = [
    {
      title: "Hammam",
      image: spaHammam,
      description: "Plongez dans la tradition du hammam oriental avec nos espaces vapeur authentiques. Purifiez votre corps et votre esprit dans une atmosphère de détente absolue."
    },
    {
      title: "Massage",
      image: spaMassage,
      description: "Nos thérapeutes experts vous offrent une gamme complète de massages relaxants et thérapeutiques pour libérer les tensions et restaurer votre bien-être."
    },
    {
      title: "Soins",
      image: spaSoins,
      description: "Découvrez nos soins du visage personnalisés utilisant des produits haut de gamme pour révéler la beauté naturelle de votre peau."
    },
    {
      title: "Coiffure",
      image: spaCoiffure,
      description: "Notre salon de coiffure premium propose des coupes, colorations et soins capillaires réalisés par des professionnels passionnés."
    },
    {
      title: "Cérémonie de mariage",
      image: spaWedding,
      description: "Vivez un moment magique avec nos forfaits mariage complets : coiffure, maquillage, soins pour être resplendissante le jour J."
    },
    {
      title: "Esthétique",
      image: spaEsthetique,
      description: "Nos soins esthétiques avancés combinent expertise et technologies modernes pour sublimer votre beauté naturelle."
    }
  ];

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-16 w-40 h-40 bg-blue-200/22 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-16 right-20 w-32 h-32 bg-blue-300/18 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-24 h-24 bg-blue-400/14 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4.5s', animationDuration: '7s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-bl from-blue-300/28 via-transparent to-blue-400/28 animate-pulse" style={{ animationDuration: '9s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={spaHeroBg}
            alt="Luxury Spa Interior"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            SPA
          </h1>
        </div>
      </section>

      {/* SPA Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Services Premium
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez notre gamme complète de soins et services wellness dans un cadre d'exception
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {spaServices.map((service, index) => (
              <Card 
                key={service.title} 
                className="group bg-white/70 border-blue-300/30 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4 border-b border-blue-300/30 pb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Spa;