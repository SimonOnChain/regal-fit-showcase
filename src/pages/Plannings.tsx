import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Users, MapPin, Phone } from "lucide-react";
import planningHero from "@/assets/planning-hero.jpg";
import planningSchedule from "@/assets/planning-schedule.jpg";
import planningFitness from "@/assets/planning-fitness.jpg";
import planningAqua from "@/assets/planning-aqua.jpg";
import planningFootball from "@/assets/planning-football.jpg";
import planningSpa from "@/assets/planning-spa.jpg";

const Plannings = () => {
  const [showAllSchedules, setShowAllSchedules] = useState(false);

  const scheduleCategories = [
    { 
      src: planningFitness, 
      title: "Fitness & Musculation", 
      description: "Séances de coaching personnalisé",
      category: "fitness",
      time: "6h00 - 23h00"
    },
    { 
      src: planningAqua, 
      title: "Aqua Fitness", 
      description: "Cours d'aqua-gym et natation",
      category: "aqua",
      time: "8h00 - 21h00"
    },
    { 
      src: planningFootball, 
      title: "Foot à 5", 
      description: "Terrains disponibles et tournois",
      category: "football",
      time: "15h00 - 00h00"
    },
    { 
      src: planningSpa, 
      title: "Spa & Bien-être", 
      description: "Soins et massages sur rendez-vous",
      category: "spa",
      time: "9h00 - 20h00"
    },
  ];

  const weeklySchedule = {
    fitness: [
      { time: "06:00", activity: "Cardio Training", instructor: "Coach Ahmed" },
      { time: "08:00", activity: "HIIT Session", instructor: "Coach Sarah" },
      { time: "10:00", activity: "Musculation Libre", instructor: "Coach Mohamed" },
      { time: "18:00", activity: "Cross Training", instructor: "Coach Fatima" },
      { time: "20:00", activity: "Stretching", instructor: "Coach Aicha" },
    ],
    aqua: [
      { time: "08:00", activity: "Aqua-Gym", instructor: "Coach Laila" },
      { time: "10:00", activity: "Natation Libre", instructor: "" },
      { time: "14:00", activity: "Aqua-Fitness", instructor: "Coach Youssef" },
      { time: "16:00", activity: "Cours de Natation", instructor: "Coach Reda" },
      { time: "19:00", activity: "Aqua-Détente", instructor: "Coach Nadia" },
    ],
    football: [
      { time: "15:00", activity: "Terrain 1 Libre", instructor: "" },
      { time: "17:00", activity: "Entraînement Jeunes", instructor: "Coach Khalid" },
      { time: "19:00", activity: "Match Amical", instructor: "" },
      { time: "21:00", activity: "Terrain 2 Libre", instructor: "" },
      { time: "23:00", activity: "Tournoi Nocturne", instructor: "Organisation" },
    ],
    spa: [
      { time: "09:00", activity: "Massage Relaxant", instructor: "Sur RDV" },
      { time: "11:00", activity: "Soins Visage", instructor: "Sur RDV" },
      { time: "14:00", activity: "Hammam", instructor: "Libre" },
      { time: "16:00", activity: "Massage Sportif", instructor: "Sur RDV" },
      { time: "18:00", activity: "Soins Corps", instructor: "Sur RDV" },
    ]
  };

  const displayedSchedules = showAllSchedules ? scheduleCategories : scheduleCategories.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${planningHero})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/60 to-accent/70" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-4 text-accent">
            Plannings
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 italic">
            Votre emploi du temps royal
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 mb-8 max-w-2xl mx-auto">
            <p className="text-xl leading-relaxed">
              Découvrez tous nos horaires et réservez vos créneaux préférés dans un environnement d'exception.
            </p>
          </Card>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button className="btn-gold text-lg px-8 py-4 text-primary font-semibold">
                Voir les horaires
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] p-6 overflow-hidden">
              <div className="relative">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">
                  Planning Hebdomadaire
                </h2>
                
                <Tabs defaultValue="fitness" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="fitness">Fitness</TabsTrigger>
                    <TabsTrigger value="aqua">Aqua</TabsTrigger>
                    <TabsTrigger value="football">Football</TabsTrigger>
                    <TabsTrigger value="spa">Spa</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(weeklySchedule).map(([category, schedule]) => (
                    <TabsContent key={category} value={category} className="mt-0">
                      <div className="grid gap-3 max-h-96 overflow-y-auto">
                        {schedule.map((item, index) => (
                          <Card key={index} className="p-4 border border-accent/20">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                  <Clock className="h-4 w-4 text-accent" />
                                  <span className="font-semibold text-accent">{item.time}</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-foreground">{item.activity}</h4>
                                  {item.instructor && (
                                    <p className="text-sm text-muted-foreground">{item.instructor}</p>
                                  )}
                                </div>
                              </div>
                              <Button size="sm" className="btn-gold">
                                Réserver
                              </Button>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Schedule Categories Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Nos Activités
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explorez nos différents espaces et découvrez les horaires de chaque activité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayedSchedules.map((schedule, index) => (
              <Card key={index} className="group overflow-hidden hover-scale cursor-pointer">
                <div className="relative">
                  <img 
                    src={schedule.src} 
                    alt={schedule.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-accent mr-2" />
                      <span className="text-accent font-semibold">{schedule.time}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-2">{schedule.title}</h3>
                    <p className="text-white/90 text-sm">{schedule.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {!showAllSchedules && scheduleCategories.length > 3 && (
            <div className="text-center mt-12">
              <Button 
                variant="outline" 
                onClick={() => setShowAllSchedules(true)}
                className="border-accent text-accent hover:bg-accent hover:text-white"
              >
                Voir Plus d'Activités
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center border border-accent/20">
              <Users className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Réservation
              </h3>
              <p className="text-muted-foreground text-sm">
                Réservez vos créneaux à l'avance pour garantir votre place
              </p>
              <Button className="btn-gold mt-4 w-full">
                Réserver
              </Button>
            </Card>

            <Card className="p-6 text-center border border-accent/20">
              <Clock className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Horaires Flexibles
              </h3>
              <p className="text-muted-foreground text-sm">
                Ouvert 7j/7 avec des créneaux adaptés à votre emploi du temps
              </p>
              <Button className="btn-gold mt-4 w-full">
                Voir Horaires
              </Button>
            </Card>

            <Card className="p-6 text-center border border-accent/20">
              <MapPin className="h-8 w-8 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                Contact
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                1841 Av. des FAR - Plaisance - MEKNES
              </p>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>0535 521 528</span>
              </div>
              <Button className="btn-gold mt-4 w-full">
                Nous Contacter
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plannings;