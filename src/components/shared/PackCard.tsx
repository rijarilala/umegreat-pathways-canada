
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DetailModal from "./DetailModal";
import { Link } from "react-router-dom";

interface PackCardProps {
  title: string;
  description: string;
  image: string;
  modules: string[];
  linkTo?: string;
}

const PackCard = ({ title, description, image, modules, linkTo }: PackCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="hover-card overflow-hidden h-full flex flex-col">
        <div className="h-48 overflow-hidden">
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
          <CardDescription className="text-gray-600 mb-3">
            {description}
          </CardDescription>
          <div className="mt-2">
            <h4 className="font-medium text-sm text-gray-700 mb-2">Modules inclus:</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {modules.slice(0, 3).map((module, index) => (
                <li key={index}>{module}</li>
              ))}
              {modules.length > 3 && (
                <li className="text-primary cursor-pointer hover:underline" onClick={() => setIsModalOpen(true)}>
                  + {modules.length - 3} autre{modules.length - 3 > 1 ? "s" : ""}
                </li>
              )}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => setIsModalOpen(true)}
          >
            Voir le détail
          </Button>
          {linkTo && (
            <Button className="flex-1 bg-secondary hover:bg-secondary/90" asChild>
              <Link to={linkTo}>
                S'inscrire
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
        details={{ modules }}
        linkTo={linkTo}
        linkText="S'inscrire au pack"
        image={image}
      />
    </>
  );
};

export default PackCard;
