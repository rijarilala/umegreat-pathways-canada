
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DetailModal from "./DetailModal";
import { Link } from "react-router-dom";

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

  return (
    <>
      <Card className="hover-card overflow-hidden h-full flex flex-col">
        <div className="h-40 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex-grow">
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 flex gap-3">
          {showDetailButton && (
            <Button 
              variant="outline" 
              className="flex-1 service-details-button" 
              onClick={() => setIsModalOpen(true)}
            >
              Détails
            </Button>
          )}
          {linkTo && (
            <Button className="flex-1 bg-primary hover:bg-primary/90" asChild>
              <Link to={linkTo}>
                En savoir plus
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
