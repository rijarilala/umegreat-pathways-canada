
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Home, Users, BookOpen, MessageCircle, Phone, GraduationCap, MapPin, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

// Configuration des éléments de navigation avec icônes Material Design
const navigationItems = [
  {
    title: "Accueil",
    path: "/",
    icon: Home,
    description: "Page principale"
  },
  {
    title: "Accompagnement",
    icon: Users,
    description: "Conseil & orientation",
    subItems: [
      { title: "Conseil & orientation", path: "/services/orientation", icon: MapPin },
      { title: "Coaching", path: "/services/coaching", icon: Users },
      { title: "Test d'éligibilité", path: "/services/test", icon: HelpCircle },
    ]
  },
  {
    title: "Mobilité",
    icon: MapPin,
    description: "Mobilité internationale",
    subItems: [
      { title: "S'installer au Canada", path: "/services/immigration", icon: MapPin },
      { title: "Études au Canada", path: "/services/etudes", icon: GraduationCap },
    ]
  },
  {
    title: "Formations",
    path: "/services/formation",
    icon: BookOpen,
    description: "Nos formations"
  },
  {
    title: "À propos",
    path: "/about",
    icon: Users,
    description: "Notre équipe"
  },
  {
    title: "Témoignages",
    path: "/testimonials",
    icon: MessageCircle,
    description: "Avis clients"
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: HelpCircle,
    description: "Questions fréquentes"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Phone,
    description: "Nous contacter"
  }
];

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  // Fermer le menu lors du changement de route
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = () => {
    onClose();
    window.scrollTo(0, 0);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const hasActiveSubItem = (subItems?: Array<{path: string}>) => {
    return subItems?.some(item => location.pathname === item.path) || false;
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent 
        side="left" 
        className="w-[300px] p-0 bg-white border-r border-gray-200"
      >
        <SheetHeader className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-lg font-bold text-primary">
              UMEGREAT Pro
            </SheetTitle>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </SheetHeader>

        <nav className="flex-1 py-4">
          <div className="space-y-2 px-3">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isExpanded = expandedItems.includes(item.title);
              const isActive = item.path ? isActiveLink(item.path) : hasActiveSubItem(item.subItems);

              return (
                <div key={item.title} className="space-y-1">
                  {item.path ? (
                    // Lien direct
                    <Link
                      to={item.path}
                      onClick={handleLinkClick}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group",
                        isActive
                          ? "bg-primary text-white shadow-md transform scale-[1.02]"
                          : "text-gray-700 hover:bg-primary/5 hover:text-primary active:scale-95"
                      )}
                    >
                      <Icon 
                        className={cn(
                          "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                          isActive ? "text-white" : "text-primary"
                        )} 
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">{item.title}</div>
                        <div className={cn(
                          "text-xs opacity-75 truncate",
                          isActive ? "text-white/90" : "text-gray-500"
                        )}>
                          {item.description}
                        </div>
                      </div>
                      {isActive && (
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  ) : (
                    // Menu avec sous-éléments
                    <>
                      <button
                        onClick={() => toggleExpanded(item.title)}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group",
                          isActive || isExpanded
                            ? "bg-primary/10 text-primary"
                            : "text-gray-700 hover:bg-primary/5 hover:text-primary active:scale-95"
                        )}
                      >
                        <Icon 
                          className={cn(
                            "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                            isActive || isExpanded ? "text-primary" : "text-primary"
                          )} 
                        />
                        <div className="flex-1 min-w-0 text-left">
                          <div className="font-medium text-sm truncate">{item.title}</div>
                          <div className="text-xs text-gray-500 opacity-75 truncate">
                            {item.description}
                          </div>
                        </div>
                        <div 
                          className={cn(
                            "w-6 h-6 rounded-full border-2 border-primary/30 flex items-center justify-center transition-all duration-300",
                            isExpanded && "rotate-180 bg-primary/10"
                          )}
                        >
                          <div 
                            className={cn(
                              "w-2 h-2 border-r-2 border-b-2 border-primary transform rotate-45 transition-transform duration-300",
                              isExpanded && "-rotate-135"
                            )}
                          />
                        </div>
                      </button>

                      {/* Sous-éléments avec animation */}
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="ml-6 space-y-1 py-2">
                          {item.subItems?.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = isActiveLink(subItem.path);

                            return (
                              <Link
                                key={subItem.path}
                                to={subItem.path}
                                onClick={handleLinkClick}
                                className={cn(
                                  "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 group",
                                  isSubActive
                                    ? "bg-primary text-white shadow-sm"
                                    : "text-gray-600 hover:bg-primary/5 hover:text-primary active:scale-95"
                                )}
                              >
                                <SubIcon 
                                  className={cn(
                                    "h-4 w-4 transition-transform duration-200 group-hover:scale-110",
                                    isSubActive ? "text-white" : "text-primary"
                                  )} 
                                />
                                <span className="text-sm font-medium truncate">
                                  {subItem.title}
                                </span>
                                {isSubActive && (
                                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse ml-auto" />
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        {/* Footer du menu mobile */}
        <div className="border-t border-gray-100 p-4">
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-1">© 2024 UMEGREAT Pro</p>
            <p className="text-xs text-gray-400">Votre partenaire mobilité</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
