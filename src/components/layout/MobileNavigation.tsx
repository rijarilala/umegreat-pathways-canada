
import { Link } from "react-router-dom";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdowns(prev => 
      prev.includes(dropdown) 
        ? prev.filter(d => d !== dropdown)
        : [...prev, dropdown]
    );
  };

  const handleLinkClick = () => {
    onClose();
    window.scrollTo(0, 0);
  };

  return (
    <div className={cn(
      "fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out",
      isOpen ? "visible" : "invisible"
    )}>
      {/* Backdrop */}
      <div 
        className={cn(
          "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />
      
      {/* Navigation panel */}
      <div className={cn(
        "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-2 px-4">
              <Link
                to="/"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                Accueil
              </Link>

              {/* Accompagnement dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('accompagnement')}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Accompagnement
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    openDropdowns.includes('accompagnement') && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  openDropdowns.includes('accompagnement') ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="ml-4 space-y-1 py-2">
                    <Link
                      to="/services/orientation"
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      Conseil & orientation
                    </Link>
                    <Link
                      to="/services/coaching"
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      Coaching
                    </Link>
                    <Link
                      to="/services/test"
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      Test d'éligibilité
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobilité dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobilite')}
                  className="flex items-center justify-between w-full py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
                >
                  Mobilité
                  <ChevronDown className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    openDropdowns.includes('mobilite') && "rotate-180"
                  )} />
                </button>
                <div className={cn(
                  "overflow-hidden transition-all duration-200 ease-in-out",
                  openDropdowns.includes('mobilite') ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="ml-4 space-y-1 py-2">
                    <Link
                      to="/services/immigration"
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      S'installer durablement au Canada
                    </Link>
                    <Link
                      to="/services/etudes"
                      onClick={handleLinkClick}
                      className="block py-2 px-3 text-sm text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                      Études au Canada
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/services/formation"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                Formations
              </Link>

              <Link
                to="/services/recrutement"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                Recrutement
              </Link>

              <Link
                to="/about"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                À propos
              </Link>

              <Link
                to="/testimonials"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                Témoignages
              </Link>

              <Link
                to="/faq"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                onClick={handleLinkClick}
                className="block py-3 px-3 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
