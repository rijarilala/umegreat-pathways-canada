
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronDown, ArrowLeft, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

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
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [hasScrollContent, setHasScrollContent] = useState(false);

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

  // Check if content is scrollable when modal opens
  useEffect(() => {
    if (!isOpen) return;
    
    const checkScrollable = () => {
      const contentDiv = document.querySelector('.modal-scroll-content');
      if (!contentDiv) return;
      
      const hasOverflow = contentDiv.scrollHeight > contentDiv.clientHeight;
      setHasScrollContent(hasOverflow);
      setShowScrollIndicator(hasOverflow);
    };
    
    // Check after a short delay to ensure content is rendered
    setTimeout(checkScrollable, 100);
    
    // Also check on window resize
    window.addEventListener('resize', checkScrollable);
    return () => {
      window.removeEventListener('resize', checkScrollable);
    };
  }, [isOpen]);

  // Handle scroll event to hide indicator once user has scrolled
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 30) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(hasScrollContent);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-2xl p-0 rounded-xl border-0 shadow-lg overflow-hidden">
        {/* Adding DialogTitle and DialogDescription for accessibility */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description || "Détails du service"}</DialogDescription>
        
        <div className="relative flex flex-col max-h-[90vh]">
          {/* Close button - always visible and accessible */}
          <Button 
            onClick={onClose} 
            size="icon" 
            className="absolute right-4 top-4 z-50 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-sm"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header image */}
          {image && (
            <div className="w-full h-48 md:h-56 overflow-hidden flex-shrink-0">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content container with ScrollArea for proper scrolling */}
          <ScrollArea 
            className="flex-grow modal-scroll-content"
            onScrollCapture={handleScroll}
            style={{ maxHeight: `calc(90vh - ${image ? '14rem' : '0'})` }}
          >
            <div className="p-5 md:p-6">
              {/* Title and description */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 pr-8">{title}</h3>
                {description && (
                  <p className="text-gray-600 text-lg">{description}</p>
                )}
              </div>

              {/* Details content */}
              <div className="space-y-6">
                {details?.objectif && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Objectif</h4>
                    <p className="text-gray-600">{details.objectif}</p>
                  </div>
                )}
                
                {details?.publicCible && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Public cible</h4>
                    <p className="text-gray-600">{details.publicCible}</p>
                  </div>
                )}
                
                {details?.duree && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Durée</h4>
                    <p className="text-gray-600">{details.duree}</p>
                  </div>
                )}
                
                {details?.format && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Format</h4>
                    <p className="text-gray-600">{details.format}</p>
                  </div>
                )}
                
                {details?.modules && details.modules.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Modules inclus</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-2 pl-2">
                      {details.modules.map((module, index) => (
                        <li key={index} className="pl-1">{module}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Pack references */}
                {packReferences && packReferences.length > 0 && (
                  <div className="pt-2 pb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cette formation est incluse dans ces packs</h4>
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

                {/* Call to action buttons */}
                <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
                  {/* Original CTA */}
                  {linkTo && (
                    <Button asChild className="w-full bg-primary hover:bg-primary/90">
                      <Link to={linkTo} onClick={onClose}>
                        {linkText}
                      </Link>
                    </Button>
                  )}
                  
                  {/* New CTAs */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      asChild
                    >
                      <Link to="/services/formation" onClick={onClose}>
                        <ArrowLeft className="h-4 w-4" />
                        <span>Retour aux formations</span>
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      className="w-full flex items-center justify-center gap-2"
                      asChild
                    >
                      <Link to="/contact" onClick={onClose}>
                        <Info className="h-4 w-4" />
                        <span>Demandez plus d'infos</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          
          {/* Scroll indicator with gradient background */}
          {showScrollIndicator && (
            <div className="absolute bottom-0 left-0 right-0 pb-2 pt-10 pointer-events-none bg-gradient-to-t from-white via-white to-transparent flex flex-col items-center justify-end transition-opacity duration-300">
              <ChevronDown className="h-5 w-5 text-gray-500 animate-bounce" />
              <p className="text-sm text-gray-500 font-medium">Faites défiler pour voir plus</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DetailModal;
