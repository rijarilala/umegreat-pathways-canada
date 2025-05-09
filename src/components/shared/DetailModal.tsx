
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  details?: {
    objectif?: string;
    publicCible?: string;
    duree?: string;
    format?: string;
    modules?: string[];
  };
  linkTo?: string;
  linkText?: string;
  image?: string;
}

const DetailModal = ({
  isOpen,
  onClose,
  title,
  description,
  details,
  linkTo,
  linkText = "En savoir plus",
  image,
}: DetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] md:max-w-[600px] p-0 overflow-hidden">
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-base mt-2">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>
          <div className="mt-6 space-y-4">
            {details?.objectif && (
              <div>
                <h4 className="font-medium text-gray-900">Objectif</h4>
                <p className="text-gray-600 mt-1">{details.objectif}</p>
              </div>
            )}
            {details?.publicCible && (
              <div>
                <h4 className="font-medium text-gray-900">Public cible</h4>
                <p className="text-gray-600 mt-1">{details.publicCible}</p>
              </div>
            )}
            {details?.duree && (
              <div>
                <h4 className="font-medium text-gray-900">Durée</h4>
                <p className="text-gray-600 mt-1">{details.duree}</p>
              </div>
            )}
            {details?.format && (
              <div>
                <h4 className="font-medium text-gray-900">Format</h4>
                <p className="text-gray-600 mt-1">{details.format}</p>
              </div>
            )}
            {details?.modules && details.modules.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900">Modules inclus</h4>
                <ul className="list-disc list-inside text-gray-600 mt-1 space-y-1">
                  {details.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>
            )}
            {linkTo && (
              <div className="pt-4">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={linkTo}>{linkText}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
