import React, { useState } from 'react'
import { motion } from 'framer-motion'
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

const menuItems = [
  {
    id: 'concept',
    title: 'Le Concept',
    description:
      'Royal Fitness redéfinit l\'expérience du bien-être en alliant excellence, sophistication et innovation dans un environnement d\'exception.',
    icon: <Crown className="w-4 h-4" />,
    cta: 'Découvrir notre philosophie',
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
    gradient: `
      radial-gradient(circle at 10% 40%, rgba(255, 215, 0, 0.3) 0%, transparent 45%),
      radial-gradient(circle at 80% 70%, rgba(184, 134, 11, 0.4) 0%, transparent 50%),
      linear-gradient(180deg, rgba(139, 69, 19, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Machines dernière génération, coaching personnalisé et espace cardio premium. Sculptez votre corps dans un environnement d\'exception.',
  },
  {
    id: 'aqua',
    title: 'Aqua',
    description:
      'Piscine royale avec aqua-fitness, natation et relaxation dans une eau cristalline chauffée toute l\'année.',
    icon: <Waves className="w-4 h-4" />,
    cta: 'Plonger dans l\'expérience',
    gradient: `
      radial-gradient(ellipse at 30% 20%, rgba(65, 105, 225, 0.5) 0%, transparent 60%),
      radial-gradient(circle at 80% 80%, rgba(30, 144, 255, 0.4) 0%, transparent 40%),
      linear-gradient(225deg, rgba(25, 25, 112, 1), rgba(0, 0, 0, 1))
    `,
    textUpdated:
      'Piscine chauffée, cours d\'aqua-fitness et espace détente aquatique. L\'eau devient votre terrain de jeu et de bien-être.',
  },
  {
    id: 'spa',
    title: 'Spa',
    description:
      'Sanctuaire de bien-être royal avec soins premium, massages thérapeutiques et rituels de beauté dans un cadre luxueux.',
    icon: <Sparkles className="w-4 h-4" />,
    cta: 'Réserver votre moment',
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

  return (
    <div className="flex w-full max-w-7xl overflow-hidden">
      <div className="flex w-full h-[400px] gap-3">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.id}
            item={item}
            index={index}
            isActive={activeId === item.id}
            onHover={() => setActiveId(item.id)}
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
}

const MenuItem = ({ item, index, isActive, onHover }: MenuItemProps) => {
  const noiseIntensity = 0.2 + index * 0.03

  return (
    <motion.div
      className="relative h-full rounded-xl overflow-hidden cursor-pointer flex flex-col"
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
    >
      <NoiseOverlay intensity={noiseIntensity} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
      
      <div className="absolute top-0 left-0 h-full p-6 z-10">
        <div className="vertical-text rotate-180 text-white font-serif font-medium tracking-wide whitespace-nowrap text-sm">
          {item.title}
        </div>
      </div>
      
      <div className="absolute left-[41px] bottom-[41px] text-accent z-10">
        {item.icon}
      </div>
      
      {isActive && (
        <p
          className="absolute w-[311px] left-[41px] bottom-[81px] text-sm leading-[24.3px] text-[rgba(240,240,240,0.9)] font-medium"
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
        <div
          className="absolute left-[65px] bottom-[41px] text-accent text-sm font-medium hover:text-accent/80 transition-colors"
          style={{
            opacity: isActive ? 1 : 0,
            transition: isActive
              ? 'opacity 0.3s ease-in 0.15s'
              : 'opacity 0.15s ease-out',
          }}
        >
          <span>{item.cta}</span>
        </div>
      )}
    </motion.div>
  )
}