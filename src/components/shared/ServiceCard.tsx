
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DetailModal from "./DetailModal";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

interface PackReference {
  id: number;
  title: string;
  linkTo: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  linkTo?: string;
  showDetailButton?: boolean;
  details?: {
    objectif?: string;
    publicCible?: string;
    duree?: string;
    format?: string;
    modules?: string[];
  };
  packReferences?: PackReference[];
}

const ServiceCard = ({
  title,
  description,
  image,
  linkTo,
  showDetailButton = true,
  details,
  packReferences
}: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card 
        className="group relative overflow-hidden h-full flex flex-col bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
        
        {/* Image container with modern overlay */}
        <div className="relative h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          
          {/* Floating badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transform transition-all duration-300 group-hover:scale-110">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
        </div>

        <CardHeader className="p-6 relative z-20">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 pt-0 flex-grow relative z-20">
          <CardDescription className="text-gray-600 leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>

        <CardFooter className="p-6 flex gap-3 relative z-20">
          {showDetailButton && (
            <Button 
              variant="outline" 
              className="flex-1 service-details-button border-2 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 group"
              onClick={() => setIsModalOpen(true)}
            >
              <span>Détails</span>
              <ArrowRight className={`h-4 w-4 ml-2 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </Button>
          )}
          {linkTo && (
            <Button 
              className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link to={linkTo} className="flex items-center justify-center gap-2">
                En savoir plus
                <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>

      <DetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={title} 
        description={description} 
        details={details} 
        linkTo={linkTo} 
        image={image} 
        packReferences={packReferences} 
      />
    </>
  );
};

export default ServiceCard;
