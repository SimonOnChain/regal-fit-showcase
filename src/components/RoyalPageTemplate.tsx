import { useState, ReactNode } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageItem {
  src: string;
  caption: string;
  category?: string;
}

interface DetailCard {
  icon: ReactNode;
  title: string;
  description: string;
}

interface RoyalPageTemplateProps {
  // Hero Section
  heroImage: string;
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: {
    text: string;
    action: () => void;
  };
  
  // Gallery Section
  galleryTitle: string;
  galleryDescription: string;
  images: ImageItem[];
  
  // Details Section (optional)
  detailCards?: DetailCard[];
  
  // Additional Content (optional)
  children?: ReactNode;
  
  // Modal Content (optional)
  modalContent?: ReactNode;
}

const RoyalPageTemplate = ({
  heroImage,
  title,
  subtitle,
  description,
  primaryCTA,
  galleryTitle,
  galleryDescription,
  images,
  detailCards,
  children,
  modalContent
}: RoyalPageTemplateProps) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  
  const displayedImages = showAllPhotos ? images : images.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent">
            {title}
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 italic">
            {subtitle}
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed">
              {description}
            </p>
          </Card>
          
          {modalContent ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button className="btn-gold text-lg px-8 py-4 text-primary font-semibold">
                  {primaryCTA.text}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
                {modalContent}
              </DialogContent>
            </Dialog>
          ) : (
            <Button 
              className="btn-gold text-lg px-8 py-4 text-primary font-semibold"
              onClick={primaryCTA.action}
            >
              {primaryCTA.text}
            </Button>
          )}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              {galleryTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {galleryDescription}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedImages.map((image, index) => (
              <Card key={index} className="group overflow-hidden hover-scale cursor-pointer">
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.caption}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-accent font-semibold text-lg">
                      {image.caption}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {!showAllPhotos && images.length > 6 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllPhotos(true)}
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                Voir Plus
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Detail Cards Section */}
      {detailCards && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {detailCards.map((card, index) => (
                <Card key={index} className="p-8 border border-accent/20 hover-scale">
                  <div className="text-center">
                    <div className="mb-6 text-accent">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Additional Content */}
      {children}
    </div>
  );
};

export default RoyalPageTemplate;