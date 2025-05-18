
import { useState, useEffect, ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface ResponsiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  maxWidth?: string;
  showCloseButton?: boolean;
  headerImage?: string;
}

const ResponsiveModal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  maxWidth = "max-w-2xl",
  showCloseButton = true,
  headerImage
}: ResponsiveModalProps) => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
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
    
    // Check after rendering to ensure content is calculated
    const timeoutId = setTimeout(checkScrollable, 100);
    
    // Also check on window resize
    window.addEventListener('resize', checkScrollable);
    return () => {
      window.removeEventListener('resize', checkScrollable);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  // Handle scroll event to hide indicator
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrolledToBottom = Math.abs(
      (target.scrollHeight - target.scrollTop) - target.clientHeight
    ) < 10;
    
    // Hide indicator if user has scrolled down or reached bottom
    if (target.scrollTop > 30 || scrolledToBottom) {
      setShowScrollIndicator(false);
    } else {
      setShowScrollIndicator(hasScrollContent);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent 
        className={cn(
          "p-0 rounded-xl border-0 shadow-lg overflow-hidden",
          "max-w-[90%] md:max-w-[70%] lg:max-w-[60%]",
          maxWidth
        )}
      >
        {/* Hidden but accessible title and description for screen readers */}
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <DialogDescription className="sr-only">{description || "Contenu modal"}</DialogDescription>
        
        <div className="relative flex flex-col max-h-[90vh]">
          {/* Close button */}
          {showCloseButton && (
            <Button 
              onClick={onClose} 
              size="icon" 
              className="absolute right-4 top-4 z-50 h-8 w-8 rounded-full bg-white/80 hover:bg-white shadow-sm"
              aria-label="Fermer"
            >
              <X className="h-4 w-4" />
            </Button>
          )}

          {/* Optional header image */}
          {headerImage && (
            <div className="w-full h-48 md:h-56 overflow-hidden flex-shrink-0">
              <img 
                src={headerImage} 
                alt="" 
                className="w-full h-full object-cover"
                aria-hidden="true"
              />
            </div>
          )}

          {/* Scrollable content */}
          <ScrollArea 
            className="flex-grow modal-scroll-content"
            onScrollCapture={handleScroll}
            style={{ maxHeight: `calc(90vh - ${headerImage ? '14rem' : '0'})` }}
          >
            <div className="p-5 md:p-6">
              {/* Visible title for sighted users */}
              <h3 className="text-2xl font-bold mb-4 pr-8">{title}</h3>
              
              {/* Optional description */}
              {description && (
                <p className="text-gray-600 mb-4">{description}</p>
              )}
              
              {/* Actual content */}
              <div className="space-y-4">
                {children}
              </div>
            </div>
          </ScrollArea>
          
          {/* Scroll indicator with gradient background */}
          {showScrollIndicator && (
            <div 
              className="absolute bottom-0 left-0 right-0 pb-3 pt-16 pointer-events-none 
              flex flex-col items-center justify-end transition-opacity duration-300
              bg-gradient-to-t from-white via-white/90 to-transparent"
              aria-hidden="true"
            >
              <ChevronDown className="h-5 w-5 text-gray-500 animate-bounce mb-1" />
              <p className="text-sm text-gray-600 font-medium">Faites défiler pour voir plus</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResponsiveModal;
