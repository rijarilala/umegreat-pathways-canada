
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

  // Improved: Check if content is scrollable when modal opens
  useEffect(() => {
    if (!isOpen) return;
    
    const checkScrollable = () => {
      const contentDiv = document.querySelector('.modal-scroll-content');
      if (!contentDiv) {
        console.log("Modal scroll content element not found");
        return;
      }
      
      const hasOverflow = contentDiv.scrollHeight > contentDiv.clientHeight;
      console.log("Modal content scrollable:", hasOverflow, "scrollHeight:", contentDiv.scrollHeight, "clientHeight:", contentDiv.clientHeight);
      setHasScrollContent(hasOverflow);
      setShowScrollIndicator(hasOverflow);
    };
    
    // Check multiple times to ensure content has fully rendered
    const timeoutId = setTimeout(checkScrollable, 100);
    const secondCheckId = setTimeout(checkScrollable, 300);
    const finalCheckId = setTimeout(checkScrollable, 500);
    
    // Also check on window resize
    window.addEventListener('resize', checkScrollable);
    return () => {
      window.removeEventListener('resize', checkScrollable);
      clearTimeout(timeoutId);
      clearTimeout(secondCheckId);
      clearTimeout(finalCheckId);
    };
  }, [isOpen]);

  // Handle scroll event to hide indicator
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrolledAmount = target.scrollTop;
    const scrolledToBottom = Math.abs(
      (target.scrollHeight - target.scrollTop) - target.clientHeight
    ) < 10;
    
    console.log("Modal scroll detected:", scrolledAmount);
    
    // Hide indicator as soon as user scrolls or reaches bottom
    if (scrolledAmount > 10 || scrolledToBottom) {
      setShowScrollIndicator(false);
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
        {/* Accessible but visually hidden title and description */}
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description || "Contenu modal"}</DialogDescription>
        </VisuallyHidden>
        
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
            data-testid="modal-scroll-area"
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
          
          {/* Enhanced scroll indicator with gradient background */}
          {showScrollIndicator && (
            <div 
              className="absolute bottom-0 left-0 right-0 pb-6 pt-16 pointer-events-none 
              flex flex-col items-center justify-end transition-opacity duration-300
              bg-gradient-to-t from-white via-white/90 to-transparent z-10"
              aria-hidden="true"
              style={{ opacity: showScrollIndicator ? 1 : 0 }}
            >
              <ChevronDown className="h-6 w-6 text-gray-500 animate-bounce mb-2" />
              <p className="text-sm text-gray-700 font-medium">Faites défiler pour voir plus</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ResponsiveModal;
