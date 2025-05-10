
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

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
  packReferences?: {
    id: number;
    title: string;
    linkTo: string;
  }[];
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
  const [showContent, setShowContent] = useState(false);

  // Handle keyboard events (Escape key)
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Add a small delay for the animation to work
      const timer = setTimeout(() => setShowContent(true), 50);
      return () => {
        document.removeEventListener("keydown", handleEscKey);
        clearTimeout(timer);
      };
    } else {
      setShowContent(false);
      return undefined;
    }
  }, [isOpen, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "sm:max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-0 overflow-hidden rounded-2xl shadow-xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
          "data-[state=open]:slide-in-from-bottom-10 data-[state=closed]:slide-out-to-bottom-10",
        )}
      >
        <div className={cn(
          "relative transition-opacity duration-300",
          showContent ? "opacity-100" : "opacity-0"
        )}>
          {/* Close button */}
          <Button 
            onClick={onClose} 
            size="icon" 
            variant="ghost" 
            className="absolute right-4 top-4 z-10 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white/90"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header with image */}
          {image && (
            <div className="w-full h-56 md:h-64 overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
              {description && (
                <DialogDescription className="text-base mt-2">
                  {description}
                </DialogDescription>
              )}
            </DialogHeader>

            {/* Details section with max height and scrolling */}
            <div className="max-h-[50vh] overflow-y-auto pr-2 space-y-6">
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

              {/* Pack references section */}
              {packReferences && packReferences.length > 0 && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Cette formation est incluse dans ces packs</h4>
                  <div className="space-y-2">
                    {packReferences.map((pack) => (
                      <div key={pack.id} className="bg-blue-50 p-3 rounded-lg">
                        <Link 
                          to={pack.linkTo}
                          className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium"
                          onClick={onClose}
                        >
                          <span>{pack.title}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with action button */}
            {linkTo && (
              <div className="mt-8 pt-4 border-t border-gray-100">
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to={linkTo} onClick={onClose}>{linkText}</Link>
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
