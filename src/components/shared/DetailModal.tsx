
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
      <DialogContent className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-2xl p-0 rounded-xl border-0 shadow-lg overflow-hidden">
        <div className="relative">
          {/* Close button - repositioned to be clearly visible */}
          <Button 
            onClick={onClose} 
            size="icon" 
            className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-sm"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header image */}
          {image && (
            <div className="w-full h-40 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content container with proper scrolling */}
          <div className="p-5 md:p-6">
            {/* Title and description */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              {description && (
                <p className="text-gray-600">{description}</p>
              )}
            </div>

            {/* Scrollable content area with fixed max height */}
            <ScrollArea className="max-h-[50vh] pr-4">
              <div className="space-y-4">
                {details?.objectif && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Objectif</h4>
                    <p className="text-gray-600">{details.objectif}</p>
                  </div>
                )}
                
                {details?.publicCible && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Public cible</h4>
                    <p className="text-gray-600">{details.publicCible}</p>
                  </div>
                )}
                
                {details?.duree && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Durée</h4>
                    <p className="text-gray-600">{details.duree}</p>
                  </div>
                )}
                
                {details?.format && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Format</h4>
                    <p className="text-gray-600">{details.format}</p>
                  </div>
                )}
                
                {details?.modules && details.modules.length > 0 && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Modules inclus</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 pl-1">
                      {details.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pack references */}
                {packReferences && packReferences.length > 0 && (
                  <div className="pt-1">
                    <h4 className="font-medium text-gray-900 mb-2">Cette formation est incluse dans ces packs</h4>
                    <div className="space-y-2">
                      {packReferences.map((pack) => (
                        <div 
                          key={pack.id} 
                          className="bg-blue-50 p-3 rounded-lg transition-all hover:bg-blue-100"
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
              <div className="mt-6 pt-4 border-t border-gray-100">
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
