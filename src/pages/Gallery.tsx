import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Camera, Eye, Image } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import all gallery images
import fitnessService from "@/assets/fitness-service.jpg";
import musculation from "@/assets/musculation.jpg";
import cardioZone from "@/assets/cardio-zone.jpg";
import groupClasses from "@/assets/group-classes.jpg";
import personalTraining from "@/assets/personal-training.jpg";
import footballField1 from "@/assets/football-field-1.jpg";
import footballField2 from "@/assets/football-field-2.jpg";
import footballMatch from "@/assets/football-match.jpg";
import aquaService from "@/assets/aqua-service.jpg";
import spaService from "@/assets/spa-service.jpg";
import spaHammam from "@/assets/spa-hammam.jpg";
import spaMassage from "@/assets/spa-massage.jpg";
import snackHero from "@/assets/snack-hero.jpg";
import snackFood1 from "@/assets/snack-food-1.jpg";
import kidsService from "@/assets/kids-service.jpg";
import kidsGym from "@/assets/kids-gym.jpg";
import kidsFootball from "@/assets/kids-football.jpg";

const Gallery = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const galleryImages = [
    { src: fitnessService, caption: "Espace Fitness", category: "fitness" },
    { src: musculation, caption: "Salle de Musculation", category: "fitness" },
    { src: cardioZone, caption: "Zone Cardio", category: "fitness" },
    { src: groupClasses, caption: "Cours Collectifs", category: "fitness" },
    { src: personalTraining, caption: "Coaching Personnel", category: "fitness" },
    { src: footballField1, caption: "Terrain FIFA 1", category: "foot" },
    { src: footballField2, caption: "Terrain FIFA 2", category: "foot" },
    { src: footballMatch, caption: "Match en Action", category: "foot" },
    { src: aquaService, caption: "Espace Aquatique", category: "aqua" },
    { src: spaService, caption: "Royal Spa", category: "spa" },
    { src: spaHammam, caption: "Hammam Traditionnel", category: "spa" },
    { src: spaMassage, caption: "Salon de Massage", category: "spa" },
    { src: snackHero, caption: "Mo'Snack", category: "snack" },
    { src: snackFood1, caption: "Cuisine Healthy", category: "snack" },
    { src: kidsService, caption: "Espace Kids", category: "kids" },
    { src: kidsGym, caption: "Gym Enfants", category: "kids" },
    { src: kidsFootball, caption: "Football Kids", category: "kids" },
  ];

  const categories = [
    { id: "all", name: "Toutes", icon: <Image className="h-5 w-5" /> },
    { id: "fitness", name: "Fitness", icon: <Camera className="h-5 w-5" /> },
    { id: "foot", name: "Foot à 5", icon: <Camera className="h-5 w-5" /> },
    { id: "aqua", name: "Aqua", icon: <Camera className="h-5 w-5" /> },
    { id: "spa", name: "Spa", icon: <Camera className="h-5 w-5" /> },
    { id: "snack", name: "Mo'Snack", icon: <Camera className="h-5 w-5" /> },
    { id: "kids", name: "Kids", icon: <Camera className="h-5 w-5" /> },
  ];

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const displayedImages = showAllPhotos ? filteredImages : filteredImages.slice(0, 9);

  return (
    <div className="min-h-screen bg-blue-100 relative overflow-hidden">
      {/* Modern Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-300/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-300/20 via-transparent to-blue-400/20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
      </div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fitnessService})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-royal"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-royal/80 via-navy/70 to-royal/80"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-600/80 via-blue-500/60 to-transparent"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <h1 className="text-8xl md:text-9xl font-extrabold uppercase tracking-wider text-white animate-fade-in"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}>
            GALERIE PHOTOS
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
                Explorez nos espaces premium à travers notre galerie photo complète. 
                Découvrez chaque coin de Royal Fitness et laissez-vous séduire par notre univers d'exception.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-white animate-fade-in stagger-2"
                 style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Une visite virtuelle de nos installations !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-none shadow-none">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`transition-all duration-300 ${
                  selectedCategory === category.id 
                    ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600 shadow-lg" 
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white bg-white/70 hover:shadow-md"
                }`}
              >
                {category.icon}
                <span className="ml-2">{category.name}</span>
                {selectedCategory !== "all" && selectedCategory === category.id && (
                  <span className="ml-2 bg-white/20 px-2 py-1 rounded-full text-xs">
                    {filteredImages.length}
                  </span>
                )}
              </Button>
            ))}
          </div>
          
          {/* Show active filter info */}
          {selectedCategory !== "all" && (
            <div className="text-center mt-4">
              <p className="text-slate-600">
                Affichage de {filteredImages.length} photo{filteredImages.length > 1 ? 's' : ''} 
                {selectedCategory === "fitness" && " de Fitness"}
                {selectedCategory === "foot" && " de Foot à 5"}
                {selectedCategory === "aqua" && " d'Aqua"}
                {selectedCategory === "spa" && " de Spa"}
                {selectedCategory === "snack" && " de Mo'Snack"}
                {selectedCategory === "kids" && " de Kids"}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-4">
              Nos Espaces & Activités
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Une visite virtuelle de nos installations premium
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden hover-scale cursor-pointer bg-white/70 border-blue-300/30 animate-fade-in rounded-lg shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
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
                        <div className="flex items-center mt-2">
                          <Eye className="h-4 w-4 text-white mr-2" />
                          <span className="text-white text-sm">Voir en grand</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                  <div className="relative">
                    <DialogHeader className="sr-only">
                      <DialogTitle>{image.caption}</DialogTitle>
                      <DialogDescription>Image en plein écran de {image.caption}</DialogDescription>
                    </DialogHeader>
                    <img 
                      src={image.src} 
                      alt={image.caption} 
                      className="w-full h-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <h3 className="text-white text-2xl font-serif font-bold">{image.caption}</h3>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
          
          {!showAllPhotos && filteredImages.length > 9 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(true)}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Voir Plus ({filteredImages.length - 9} photos)
              </Button>
            </div>
          )}
          
          {showAllPhotos && filteredImages.length > 9 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(false)}
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                Voir Moins
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <Card className="max-w-2xl mx-auto p-8 bg-white/70 border-blue-300/30 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">
              Visitez Royal Fitness
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Visitez nos installations premium et découvrez l'excellence Royal Fitness.
            </p>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300"
            >
              Nous contacter
            </Button>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Gallery;