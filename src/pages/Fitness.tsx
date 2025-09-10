import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Dumbbell, Users, Heart, Target, Timer, Trophy } from "lucide-react";

const Fitness = () => {
  const activities = [
    {
      title: "Cardio Zone",
      description: "State-of-the-art treadmills, ellipticals, and bikes for optimal cardiovascular training",
      icon: Heart,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Musculation",
      description: "Professional-grade weight training equipment for strength and muscle development",
      icon: Dumbbell,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Group Classes",
      description: "Dynamic group fitness sessions led by certified instructors",
      icon: Users,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific fitness goals",
      icon: Target,
      image: "/api/placeholder/400/300"
    },
    {
      title: "HIIT Sessions",
      description: "High-intensity interval training for maximum results in minimum time",
      icon: Timer,
      image: "/api/placeholder/400/300"
    },
    {
      title: "Elite Programs",
      description: "Advanced training protocols for serious athletes and fitness enthusiasts",
      icon: Trophy,
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-royal-primary to-royal-secondary">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-royal-primary/80 to-royal-secondary/90" />
        <div className="relative container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-gold-primary mr-4" />
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white">
              Fitness
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gold-primary font-light max-w-3xl mx-auto">
            Elevate your body. Exceed your expectations.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <Card 
                  key={activity.title}
                  className="bg-royal-primary/20 border-gold-primary/30 backdrop-blur-sm hover:bg-royal-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold-primary/20 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 rounded-full bg-gold-primary/20 w-fit group-hover:bg-gold-primary/30 transition-colors">
                      <IconComponent className="h-8 w-8 text-gold-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif text-white group-hover:text-gold-primary transition-colors">
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-white/80 text-center leading-relaxed">
                      {activity.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join our elite community and experience the Royal Fitness difference
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gold-primary text-royal-primary font-semibold rounded-lg hover:bg-gold-secondary transition-colors duration-300"
          >
            Start Your Journey
            <Crown className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Fitness;