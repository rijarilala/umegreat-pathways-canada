
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Home, Users, BookOpen, MessageCircle, Phone, GraduationCap, MapPin, HelpCircle, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";

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
    description: "Page principale",
    color: "text-blue-600"
  },
  {
    title: "Accompagnement",
    icon: Users,
    description: "Conseil & orientation",
    color: "text-purple-600",
    subItems: [
      { title: "Conseil & orientation", path: "/services/orientation", icon: MapPin, color: "text-purple-500" },
      { title: "Coaching", path: "/services/coaching", icon: Users, color: "text-purple-500" },
      { title: "Test d'éligibilité", path: "/services/test", icon: HelpCircle, color: "text-purple-500" },
    ]
  },
  {
    title: "Mobilité",
    icon: MapPin,
    description: "Mobilité internationale",
    color: "text-green-600",
    subItems: [
      { title: "S'installer au Canada", path: "/services/immigration", icon: MapPin, color: "text-green-500" },
      { title: "Études au Canada", path: "/services/etudes", icon: GraduationCap, color: "text-green-500" },
    ]
  },
  {
    title: "Formations",
    path: "/services/formation",
    icon: BookOpen,
    description: "Nos formations",
    color: "text-orange-600"
  },
  {
    title: "À propos",
    path: "/about",
    icon: Users,
    description: "Notre équipe",
    color: "text-indigo-600"
  },
  {
    title: "Témoignages",
    path: "/testimonials",
    icon: MessageCircle,
    description: "Avis clients",
    color: "text-pink-600"
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: HelpCircle,
    description: "Questions fréquentes",
    color: "text-cyan-600"
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Phone,
    description: "Nous contacter",
    color: "text-red-600"
  }
];

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      onClose();
      window.scrollTo(0, 0);
    }, 150);
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
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
        className="w-[320px] p-0 bg-gradient-to-br from-white via-gray-50 to-blue-50/30 border-r border-gray-200/50 flex flex-col max-h-screen backdrop-blur-sm"
        hideCloseButton={true}
        onPointerDownOutside={(e) => {
          e.preventDefault();
          onClose();
        }}
        onEscapeKeyDown={(e) => {
          e.preventDefault();
          onClose();
        }}
      >
        {/* Bouton de fermeture en haut à droite */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleCloseClick}
            className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 transition-all duration-300 group"
            aria-label="Fermer le menu"
          >
            <X className="h-5 w-5 text-gray-600 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Navigation principale */}
        <div className="flex-1 overflow-y-auto min-h-0 px-4 pb-4">
          <nav>
            <div className="space-y-1">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isExpanded = expandedItems.includes(item.title);
                const isActive = item.path ? isActiveLink(item.path) : hasActiveSubItem(item.subItems);

                return (
                  <div key={item.title} className="space-y-1">
                    {item.path ? (
                      // Lien direct avec design moderne
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className={cn(
                          "flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                          isActive
                            ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg transform scale-[1.02] shadow-primary/25"
                            : "text-gray-700 hover:bg-white hover:shadow-md active:scale-95"
                        )}
                        style={{
                          animationDelay: `${index * 50}ms`,
                          animationFillMode: 'both'
                        }}
                      >
                        {/* Effet de brillance pour l'état actif */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        )}
                        
                        <div className={cn(
                          "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                          isActive 
                            ? "bg-white/20 backdrop-blur-sm" 
                            : "bg-gray-100 group-hover:bg-primary/10"
                        )}>
                          <Icon 
                            className={cn(
                              "h-5 w-5 transition-all duration-300",
                              isActive ? "text-white" : `${item.color} group-hover:text-primary`
                            )} 
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className={cn(
                            "font-semibold text-sm truncate transition-colors duration-300",
                            isActive ? "text-white" : "text-gray-900 group-hover:text-primary"
                          )}>
                            {item.title}
                          </div>
                          <div className={cn(
                            "text-xs opacity-75 truncate transition-colors duration-300",
                            isActive ? "text-white/90" : "text-gray-500 group-hover:text-primary/70"
                          )}>
                            {item.description}
                          </div>
                        </div>
                        
                        {isActive && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-sm" />
                        )}
                      </Link>
                    ) : (
                      // Menu avec sous-éléments
                      <>
                        <button
                          onClick={() => toggleExpanded(item.title)}
                          className={cn(
                            "w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden",
                            isActive || isExpanded
                              ? "bg-gradient-to-r from-primary/10 to-primary/5 text-primary shadow-sm"
                              : "text-gray-700 hover:bg-white hover:shadow-md active:scale-95"
                          )}
                          style={{
                            animationDelay: `${index * 50}ms`,
                            animationFillMode: 'both'
                          }}
                        >
                          <div className={cn(
                            "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                            isActive || isExpanded
                              ? "bg-primary/10 backdrop-blur-sm" 
                              : "bg-gray-100 group-hover:bg-primary/10"
                          )}>
                            <Icon 
                              className={cn(
                                "h-5 w-5 transition-all duration-300",
                                isActive || isExpanded ? "text-primary" : `${item.color} group-hover:text-primary`
                              )} 
                            />
                          </div>
                          
                          <div className="flex-1 min-w-0 text-left">
                            <div className={cn(
                              "font-semibold text-sm truncate transition-colors duration-300",
                              isActive || isExpanded ? "text-primary" : "text-gray-900 group-hover:text-primary"
                            )}>
                              {item.title}
                            </div>
                            <div className="text-xs text-gray-500 opacity-75 truncate group-hover:text-primary/70 transition-colors duration-300">
                              {item.description}
                            </div>
                          </div>
                          
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                            isExpanded ? "bg-primary/10 rotate-90" : "group-hover:bg-primary/5"
                          )}>
                            <ChevronRight 
                              className={cn(
                                "w-4 h-4 transition-all duration-300",
                                isExpanded ? "text-primary" : "text-gray-400 group-hover:text-primary"
                              )}
                            />
                          </div>
                        </button>

                        {/* Sous-éléments avec animation améliorée */}
                        <div 
                          className={cn(
                            "overflow-hidden transition-all duration-500 ease-out",
                            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                          )}
                        >
                          <div className="ml-6 space-y-1 py-2">
                            {item.subItems?.map((subItem, subIndex) => {
                              const SubIcon = subItem.icon;
                              const isSubActive = isActiveLink(subItem.path);

                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  onClick={handleLinkClick}
                                  className={cn(
                                    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative",
                                    isSubActive
                                      ? "bg-gradient-to-r from-primary to-primary/90 text-white shadow-md transform scale-[1.02]"
                                      : "text-gray-600 hover:bg-white hover:shadow-sm active:scale-95"
                                  )}
                                  style={{
                                    animationDelay: `${subIndex * 100}ms`,
                                    animationFillMode: 'both'
                                  }}
                                >
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                    isSubActive 
                                      ? "bg-white/20 backdrop-blur-sm" 
                                      : "bg-gray-100 group-hover:bg-primary/10"
                                  )}>
                                    <SubIcon 
                                      className={cn(
                                        "h-4 w-4 transition-all duration-300",
                                        isSubActive ? "text-white" : `${subItem.color} group-hover:text-primary`
                                      )} 
                                    />
                                  </div>
                                  
                                  <span className={cn(
                                    "text-sm font-medium truncate transition-colors duration-300",
                                    isSubActive ? "text-white" : "text-gray-700 group-hover:text-primary"
                                  )}>
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
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
