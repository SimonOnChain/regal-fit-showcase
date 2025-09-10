import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Sample gallery images - you can replace these with your actual images
const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    category: 'Equipment',
    alt: 'Modern fitness equipment'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    category: 'Studios',
    alt: 'Fitness studio'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
    category: 'Pool',
    alt: 'Swimming pool area'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
    category: 'Classes',
    alt: 'Group fitness classes'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
    category: 'Equipment',
    alt: 'Weight training area'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    category: 'Spa',
    alt: 'Spa relaxation area'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&w=800&q=80',
    category: 'Kids',
    alt: 'Kids activity area'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    category: 'Facilities',
    alt: 'Reception and lounge area'
  }
];

const categories = ['All', 'Equipment', 'Studios', 'Pool', 'Classes', 'Kids', 'Spa', 'Facilities'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image: typeof galleryImages[0]) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div 
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(ellipse at 30% 20%, rgba(100, 140, 255, 0.8) 0%, transparent 60%),
          radial-gradient(circle at 80% 80%, rgba(70, 180, 255, 0.7) 0%, transparent 40%),
          linear-gradient(225deg, rgba(50, 80, 200, 1), rgba(20, 20, 40, 1))
        `
      }}
    >
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Galerie Photos & Vidéos
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Découvrez nos installations royales, notre atmosphère unique et chaque détail de Royal Fitness
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/25'
                    : 'bg-secondary/20 text-secondary-foreground hover:bg-secondary/30 border border-accent/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border-2 border-transparent group-hover:border-accent/50 transition-all duration-300">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-medium bg-accent/20 px-2 py-1 rounded backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-5xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {/* Navigation Arrows */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium mb-1">{selectedImage.alt}</p>
                <p className="text-sm text-white/70">{selectedImage.category}</p>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="absolute bottom-4 right-4">
                <div className="flex gap-2 max-w-xs overflow-x-auto">
                  {filteredImages.map((img, index) => (
                    <button
                      key={img.id}
                      onClick={() => {
                        setSelectedImage(img);
                        setCurrentImageIndex(index);
                      }}
                      className={`w-12 h-12 rounded border-2 overflow-hidden ${
                        img.id === selectedImage.id ? 'border-accent' : 'border-white/30'
                      }`}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;