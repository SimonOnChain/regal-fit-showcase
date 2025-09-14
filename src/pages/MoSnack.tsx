import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";
import snackHero from "@/assets/snack-hero.jpg";
import snackFood1 from "@/assets/snack-food-1.jpg";
import snackFood2 from "@/assets/snack-food-2.jpg";
import snackFood3 from "@/assets/snack-food-3.jpg";
import snackAmbience1 from "@/assets/snack-ambience-1.jpg";

const MoSnack = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const foodImages = [
    { src: snackFood1, caption: "Sandwich Gourmet", category: "food" },
    { src: snackFood2, caption: "Salade Fraîche", category: "food" },
    { src: snackFood3, caption: "Bowl Healthy", category: "food" },
    { src: snackAmbience1, caption: "Ambiance Conviviale", category: "ambience" },
    { src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", caption: "Smoothies Premium", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg", caption: "Salades Fraîches", category: "food" },
    { src: "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg", caption: "Boissons Énergisantes", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg", caption: "Espace Restauration", category: "ambience" },
    { src: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg", caption: "Jus de Fruits Frais", category: "drinks" },
    { src: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg", caption: "Plats Healthy", category: "food" },
    { src: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg", caption: "Café Premium", category: "drinks" },
    { src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg", caption: "Wraps Nutritifs", category: "food" },
    { src: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg", caption: "Burger Végétarien", category: "food" },
    { src: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg", caption: "Smoothie Bowl", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg", caption: "Salade de Quinoa", category: "food" },
    { src: "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg", caption: "Jus Détox", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640768/pexels-photo-1640768.jpeg", caption: "Wrap Avocat", category: "food" },
    { src: "https://images.pexels.com/photos/1640767/pexels-photo-1640767.jpeg", caption: "Café Latte", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640766/pexels-photo-1640766.jpeg", caption: "Salade César", category: "food" },
    { src: "https://images.pexels.com/photos/1640765/pexels-photo-1640765.jpeg", caption: "Smoothie Protéiné", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640764/pexels-photo-1640764.jpeg", caption: "Sandwich Club", category: "food" },
    { src: "https://images.pexels.com/photos/1640763/pexels-photo-1640763.jpeg", caption: "Thé Glacé", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640762/pexels-photo-1640762.jpeg", caption: "Bowl Açaï", category: "food" },
    { src: "https://images.pexels.com/photos/1640761/pexels-photo-1640761.jpeg", caption: "Eau Infusée", category: "drinks" },
    { src: "https://images.pexels.com/photos/1640760/pexels-photo-1640760.jpeg", caption: "Panini Grillé", category: "food" },
    { src: "https://images.pexels.com/photos/1640759/pexels-photo-1640759.jpeg", caption: "Milkshake Fruits", category: "drinks" },
  ];

  const displayedImages = showAllPhotos ? foodImages : foodImages.slice(0, 3);

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-36 h-36 bg-blue-200/25 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 bg-blue-300/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-20 h-20 bg-blue-400/15 rounded-full blur-lg animate-bounce" style={{ animationDelay: '4s', animationDuration: '5s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-tl from-blue-300/25 via-transparent to-blue-400/25 animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section - Just the title centered */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={snackHero}
            alt="Mo'Snack Restaurant"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-600/80 via-blue-500/60 to-transparent"></div>
        
        {/* Centered Title Only */}
        <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            MO'SNACK
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
                Venez découvrir notre snack au sein de notre club de fitness ! Nous proposons une cuisine saine et savoureuse pour vous aider à maintenir une alimentation équilibrée tout en profitant de moments de détente et de convivialité. Le Mo'Snack est le choix idéal pour ceux qui cherchent à prendre soin de leur santé tout en se régalant. Nous avons une sélection de plats frais et savoureux, préparés avec des ingrédients de qualité et sans additifs ni conservateurs.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Venez vite déguster nos délicieux plats !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Découvrez Mo'Snack Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Découvrez Mo'Snack
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une expérience culinaire unique alliant saveur, santé et convivialité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover-scale cursor-pointer bg-white/70 border-blue-300/30 animate-fade-in rounded-lg shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-semibold text-lg">
                      {image.caption}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {!showAllPhotos && foodImages.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(true)}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold cursor-pointer shadow-lg hover:shadow-xl"
                style={{ pointerEvents: 'auto' }}
              >
                Voir Plus
              </Button>
            </div>
          )}
          
          {showAllPhotos && foodImages.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(false)}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 px-8 py-4 text-lg font-semibold cursor-pointer shadow-lg hover:shadow-xl"
                style={{ pointerEvents: 'auto' }}
              >
                Voir Moins
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MoSnack;