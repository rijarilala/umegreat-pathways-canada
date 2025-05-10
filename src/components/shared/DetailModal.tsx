
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PackReference {
  id: number;
  title: string;
  linkTo: string;
}

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
  packReferences?: PackReference[];
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
  packReferences
}: DetailModalProps) => {
  const [animate, setAnimate] = useState(false);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      // Small delay for the animation to work properly
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  // Handle keyboard events (Escape key)
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      return () => {
        document.removeEventListener("keydown", handleEscKey);
      };
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className={cn(
          "p-0 rounded-2xl shadow-xl border-0",
          "max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-2xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:slide-in-from-bottom-5 data-[state=closed]:slide-out-to-bottom-5",
          "data-[state=open]:duration-300 data-[state=closed]:duration-200",
        )}
      >
        <div className={cn(
          "relative transition-opacity duration-300",
          animate ? "opacity-100" : "opacity-0"
        )}>
          {/* Close button */}
          <Button 
            onClick={onClose} 
            size="icon" 
            variant="ghost" 
            className="absolute right-4 top-4 z-10 rounded-full bg-white/70 hover:bg-white/90 backdrop-blur-sm"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header image */}
          {image && (
            <div className="w-full h-48 md:h-56 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content container */}
          <div className="p-6 md:p-8">
            {/* Title and description */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              {description && (
                <p className="text-gray-600">{description}</p>
              )}
            </div>

            {/* Scrollable content area */}
            <ScrollArea className="max-h-[60vh] pr-4">
              <div className="space-y-6">
                {details?.objectif && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Objectif</h4>
                    <p className="text-gray-600">{details.objectif}</p>
                  </div>
                )}
                
                {details?.publicCible && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Public cible</h4>
                    <p className="text-gray-600">{details.publicCible}</p>
                  </div>
                )}
                
                {details?.duree && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Durée</h4>
                    <p className="text-gray-600">{details.duree}</p>
                  </div>
                )}
                
                {details?.format && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Format</h4>
                    <p className="text-gray-600">{details.format}</p>
                  </div>
                )}
                
                {details?.modules && details.modules.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Modules inclus</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {details.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pack references */}
                {packReferences && packReferences.length > 0 && (
                  <div className="pt-2">
                    <h4 className="font-medium text-gray-900 mb-3">Cette formation est incluse dans ces packs</h4>
                    <div className="space-y-3">
                      {packReferences.map((pack) => (
                        <div 
                          key={pack.id} 
                          className="bg-blue-50 p-4 rounded-lg transition-all hover:bg-blue-100"
                        >
                          <Link 
                            to={pack.linkTo}
                            className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium"
                            onClick={onClose}
                          >
                            <span>{pack.title}</span>
                            <span className="text-lg">→</span>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Call to action button */}
            {linkTo && (
              <div className="mt-8 pt-4 border-t border-gray-100">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={linkTo} onClick={onClose}>
                    {linkText}
                  </Link>
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
