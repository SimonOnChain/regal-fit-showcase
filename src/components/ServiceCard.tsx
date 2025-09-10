import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, image, features }: ServiceCardProps) => {
  return (
    <Card className="card-royal bg-card border-border/50 overflow-hidden group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-60"></div>
        <div className="absolute top-4 left-4">
          <div className="p-3 rounded-full bg-accent/20 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-accent" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>

        <Button className="btn-royal w-full">
          En Savoir Plus
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;