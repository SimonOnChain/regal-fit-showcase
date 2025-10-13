import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Dumbbell,
  Waves,
  Sparkles,
  Baby,
  Coffee,
  Camera,
  Calendar,
  Euro,
  Crown,
} from 'lucide-react'

// Import service images
import fitnessImage from '@/assets/fitness-service.jpg'
import aquaImage from '@/assets/aqua-service.jpg'
import spaImage from '@/assets/spa-service.jpg'
import kidsImage from '@/assets/kids-service.jpg'
import snackImage from '@/assets/snack-service.jpg'
import galleryImage from '@/assets/gallery-service.jpg'

const menuItems = [
  {
    id: 'concept',
    title: 'Le Concept',
    description:
      'Royal Fitness redéfinit l\'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d\'exception.',
    icon: <Crown className="w-4 h-4" />,
    cta: 'Découvrir notre philosophie',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    route: '/',
    gradient: `
      radial-gradient(circle at 70% 30%, rgba(72, 61, 139, 0.6) 0%, transparent 50%),
      radial-gradient(circle at 20% 80%, rgba(25, 25, 112, 0.5) 0%, transparent 40%),
      linear-gradient(135deg, rgba(16, 16, 64, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Excellence, sophistication et innovation. Notre concept unique vous offre un environnement d\'exception où chaque détail est pensé pour votre épanouissement personnel.',
  },
  {
    id: 'fitness',
    title: 'Fitness',
    description:
      'Équipements de pointe dans un environnement royal pour sculpter votre corps et dépasser vos limites avec un coaching personnalisé.',
    icon: <Dumbbell className="w-4 h-4" />,
    cta: 'Explorer nos équipements',
    image: fitnessImage,
    route: '/fitness',
    gradient: `
      radial-gradient(circle at 10% 40%, rgba(255, 215, 0, 0.3) 0%, transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(184, 134, 11, 0.4) 0%, transparent 50%),
      linear-gradient(180deg, rgba(139, 69, 19, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Machines dernière génération, coaching personnalisé, espace cardio premium et CrossFit 500m². Sculptez votre corps dans un environnement d\'exception.',
  },
  {
    id: 'aqua',
    title: 'Aqua',
    description:
      'Piscine royale avec aqua-fitness, natation et relaxation dans une eau cristalline chauffée toute l\'année.',
    icon: <Waves className="w-4 h-4" />,
    cta: 'Plonger dans l\'expérience',
    image: aquaImage,
    route: '/aqua',
    gradient: `
      radial-gradient(ellipse at 30% 20%, rgba(65, 105, 225, 0.5) 0%, transparent 60%),
      radial-gradient(circle at 80% 80%, rgba(30, 144, 255, 0.4) 0%, transparent 40%),
      linear-gradient(225deg, rgba(25, 25, 112, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Piscine chauffée, cours d\'aqua-fitness et espace détente aquatique. L\'eau devient votre terrain de jeu et de bien-être.',
  },
 {
   id: 'foot',
   title: 'Foot à 5',
   description:
     'Terrains certifiés FIFA avec gazon synthétique pour vos matchs et tournois dans des installations professionnelles.',
   icon: <Crown className="w-4 h-4" />,
   cta: 'Découvrir nos terrains',
   image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80',
   route: '/foot',
   gradient: `
     radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.5) 0%, transparent 50%),
     radial-gradient(ellipse at 70% 70%, rgba(22, 163, 74, 0.4) 0%, transparent 45%),
     linear-gradient(225deg, rgba(21, 128, 61, 1), rgba(0, 0, 0, 1))
   `,
   textUpdated:
     'Trois terrains FIFA avec gazon synthétique, tournois régionaux et installations de qualité professionnelle.',
 },
  {
    id: 'crossfit',
    title: 'CrossFit',
    description:
      'Espace de 500m² dédié au CrossFit avec entraînement intense alliant musculation et cardio pour développer force, endurance et souplesse.',
    icon: <Crown className="w-4 h-4" />,
    cta: 'Découvrir le CrossFit',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    route: '/crossfit',
    gradient: `
      radial-gradient(circle at 30% 30%, rgba(220, 38, 127, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 70%, rgba(190, 24, 93, 0.4) 0%, transparent 45%),
      linear-gradient(225deg, rgba(157, 23, 77, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Espace dédié 500m², entraînement haute intensité et équipements spécialisés. Repoussez vos limites avec le CrossFit.',
  },
  {
    id: 'spa',
    title: 'Spa',
    description:
      'Sanctuaire de bien-être royal avec soins premium, massages thérapeutiques et rituels de beauté dans un cadre luxueux.',
    icon: <Sparkles className="w-4 h-4" />,
    cta: 'Réserver votre moment',
    image: spaImage,
    route: '/spa',
    gradient: `
      radial-gradient(circle at 60% 30%, rgba(147, 112, 219, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 20% 70%, rgba(138, 43, 226, 0.4) 0%, transparent 45%),
      linear-gradient(135deg, rgba(75, 0, 130, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Massages thérapeutiques, soins du visage, sauna et hammam. Un véritable sanctuaire de bien-être pour une détente absolue.',
  },
  {
    id: 'kids',
    title: 'Kids',
    description:
      'Espace dédié aux petits princes et princesses avec activités ludiques et sécurisées, encadrement professionnel.',
    icon: <Baby className="w-4 h-4" />,
    cta: 'Découvrir l\'espace enfants',
    image: kidsImage,
    route: '/kids',
    gradient: `
      radial-gradient(ellipse at 40% 20%, rgba(255, 182, 193, 0.4) 0%, transparent 55%),
      radial-gradient(circle at 70% 80%, rgba(255, 160, 122, 0.5) 0%, transparent 40%),
      linear-gradient(180deg, rgba(139, 69, 19, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Activités adaptées, encadrement professionnel et environnement sécurisé. Nos petits membres découvrent le sport dans la joie.',
  },
  {
    id: 'snack',
    title: 'Mo\'Snack',
    description:
      'Bar nutritionnel royal avec smoothies premium, collations saines et boissons énergisantes pour accompagner vos séances.',
    icon: <Coffee className="w-4 h-4" />,
    cta: 'Voir notre carte',
    image: snackImage,
    route: '/mosnack',
    gradient: `
      radial-gradient(circle at 30% 30%, rgba(210, 180, 140, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 70%, rgba(160, 82, 45, 0.4) 0%, transparent 45%),
      linear-gradient(225deg, rgba(101, 67, 33, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Smoothies premium, collations saines et boissons énergisantes. Rechargez-vous avec des produits de qualité supérieure.',
  },
  {
    id: 'gallery',
    title: 'Galerie Photos',
    description:
      'Découvrez nos installations royales à travers notre galerie photo exclusive et laissez-vous séduire par notre univers.',
    icon: <Camera className="w-4 h-4" />,
    cta: 'Visiter la galerie',
    image: galleryImage,
    route: '/gallery',
    gradient: `
      radial-gradient(ellipse at 70% 20%, rgba(169, 169, 169, 0.5) 0%, transparent 60%),
      radial-gradient(circle at 20% 60%, rgba(128, 128, 128, 0.4) 0%, transparent 45%),
      linear-gradient(135deg, rgba(47, 79, 79, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Explorez nos espaces d\'exception à travers des images haute qualité. Chaque coin de Royal Fitness respire l\'élégance.',
  },
  {
    id: 'planning',
    title: 'Plannings',
    description:
      'Cours collectifs premium et sessions personnalisées avec nos coachs experts. Planifiez votre parcours vers l\'excellence.',
    icon: <Calendar className="w-4 h-4" />,
    cta: 'Consulter les horaires',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    route: '/plannings',
    gradient: `
      radial-gradient(circle at 50% 30%, rgba(72, 61, 139, 0.5) 0%, transparent 50%),
      radial-gradient(ellipse at 30% 70%, rgba(106, 90, 205, 0.4) 0%, transparent 45%),
      linear-gradient(180deg, rgba(25, 25, 112, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Cours collectifs, sessions personnalisées et programmes sur-mesure. Organisez votre emploi du temps fitness royal.',
  },
  {
    id: 'pricing',
    title: 'Nos Tarifs',
    description:
      'Formules flexibles et abonnements premium adaptés à vos besoins. L\'excellence a un prix, mais elle n\'a pas de compromis.',
    icon: <Euro className="w-4 h-4" />,
    cta: 'Voir nos offres',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80',
    route: '/tarifs',
    gradient: `
      radial-gradient(ellipse at 60% 20%, rgba(255, 215, 0, 0.5) 0%, transparent 60%),
      radial-gradient(circle at 20% 80%, rgba(218, 165, 32, 0.4) 0%, transparent 45%),
      linear-gradient(135deg, rgba(184, 134, 11, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Abonnements premium, accès illimité et services exclusifs. Investissez dans votre bien-être avec nos formules royales.',
  },
]

export const ExpandingMenu = () => {
  const [activeId, setActiveId] = useState('fitness')
  const navigate = useNavigate()

  // Split items into two rows of 5 each for better responsive layout
  const firstRow = menuItems.slice(0, 5)
  const secondRow = menuItems.slice(5, 10)

  return (
    <div className="flex flex-col w-full max-w-7xl space-y-2 md:space-y-4">
      {/* First Row */}
      <div className="flex w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] gap-1 sm:gap-2 md:gap-3">
        {firstRow.map((item, index) => (
            <MenuItem
              key={item.id}
              item={item}
              index={index}
              isActive={activeId === item.id}
              onHover={() => setActiveId(item.id)}
              onNavigate={(id) => {
                const menuItem = menuItems.find(item => item.id === id);
                if (menuItem?.route) {
                  navigate(menuItem.route);
                }
              }}
            />
        ))}
      </div>
      
      {/* Second Row */}
      <div className="flex w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] gap-1 sm:gap-2 md:gap-3">
        {secondRow.map((item, index) => (
            <MenuItem
              key={item.id}
              item={item}
              index={index + 5}
              isActive={activeId === item.id}
              onHover={() => setActiveId(item.id)}
              onNavigate={(id) => {
                const menuItem = menuItems.find(item => item.id === id);
                if (menuItem?.route) {
                  navigate(menuItem.route);
                }
              }}
            />
        ))}
      </div>
    </div>
  )
}

const NoiseOverlay = ({ intensity = 0.4 }) => (
  <div
    className="absolute inset-0 mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      backgroundSize: '150px 150px',
      opacity: intensity,
    }}
  />
)

interface MenuItemProps {
  item: typeof menuItems[0];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onNavigate: (id: string) => void;
}

const MenuItem = ({ item, index, isActive, onHover, onNavigate }: MenuItemProps) => {
  const noiseIntensity = 0.2 + (index % 5) * 0.03

  return (
    <motion.div
      className="relative h-full rounded-md sm:rounded-lg md:rounded-xl overflow-hidden cursor-pointer flex flex-col group"
      style={{
        background: item.gradient,
      }}
      initial={false}
      animate={{
        flex: isActive ? 3 : 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseEnter={onHover}
      onClick={() => onNavigate(item.id)}
    >
      <NoiseOverlay intensity={noiseIntensity} />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      
      <div className="absolute top-0 left-0 h-full p-2 sm:p-3 md:p-6 z-10">
        <div className="vertical-text text-white font-serif font-medium tracking-wide whitespace-nowrap text-xs sm:text-sm" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          {item.title}
        </div>
      </div>
      
      <div className="absolute left-[15px] sm:left-[20px] md:left-[25px] lg:left-[41px] bottom-[15px] sm:bottom-[20px] md:bottom-[25px] lg:bottom-[41px] text-accent z-10">
        {item.icon}
      </div>
      
      {isActive && (
        <p
          className="hidden sm:block absolute w-[180px] sm:w-[220px] md:w-[250px] lg:w-[311px] left-[15px] sm:left-[20px] md:left-[25px] lg:left-[41px] bottom-[45px] sm:bottom-[50px] md:bottom-[60px] lg:bottom-[81px] text-xs sm:text-sm leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[24.3px] text-[rgba(240,240,240,0.9)] font-medium"
          style={{
            opacity: isActive ? 1 : 0,
            transition: isActive
              ? 'opacity 0.3s ease-in 0.1s'
              : 'opacity 0.15s ease-out',
          }}
        >
          {item.textUpdated || item.description}
        </p>
      )}

      
      {isActive && (
        <button
          onClick={() => onNavigate(item.id)}
          className="absolute left-[35px] sm:left-[40px] md:left-[45px] lg:left-[65px] bottom-[15px] sm:bottom-[20px] md:bottom-[25px] lg:bottom-[41px] text-white text-xs sm:text-sm font-medium hover:text-white/80 transition-colors cursor-pointer min-h-[32px] flex items-center"
          style={{
            opacity: isActive ? 1 : 0,
            transition: isActive
              ? 'opacity 0.3s ease-in 0.15s'
              : 'opacity 0.15s ease-out',
          }}
        >
          <span>{item.cta}</span>
        </button>
      )}
    </motion.div>
  )
}