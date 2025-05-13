
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import GlobalSearchBar from "@/components/shared/GlobalSearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const serviceCategories = {
  orientation: [
    { title: "Orientation professionnelle", path: "/services/orientation" },
    { title: "Coaching", path: "/services/coaching" },
    { title: "Test d'éligibilité", path: "/services/test" },
  ],
  immigration: [
    { title: "Immigration & Accompagnement", path: "/services/immigration" },
    { title: "Études au Canada", path: "/services/etudes" },
  ],
  formation: [
    { title: "Formation", path: "/services/formation" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Gestion du scroll pour la navbar sticky avec réduction de hauteur
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de route
  useEffect(() => {
    setIsMenuOpen(false);
    setSearchExpanded(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setSearchExpanded(!searchExpanded);
  };

  // Handle link click to scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  // Common dropdown menu items renderer
  const renderDropdownItems = (items, closeMenu = () => {}) => {
    return items.map((item) => (
      <DropdownMenuItem key={item.path} asChild>
        <Link 
          to={item.path} 
          className="w-full cursor-pointer hover:text-primary"
          onClick={() => {
            closeMenu();
            handleLinkClick();
          }}
        >
          {item.title}
        </Link>
      </DropdownMenuItem>
    ));
  };

  return (
    <nav 
      className={cn(
        "bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 transition-all duration-300",
        scrolled ? "shadow-sm" : ""
      )}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={handleLinkClick}
            >
              <span className="font-bold text-primary hover:text-primary/90 transition-colors">
                UMEGREAT Pro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1 mx-4">
            <div className="flex items-center space-x-1">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Accueil
              </NavLink>
              
              {/* Dropdown 1: Orientation & Insertion Pro */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-secondary px-2 py-1.5 text-sm inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Orientation & Insertion Pro
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 animate-fade-in">
                  {renderDropdownItems(serviceCategories.orientation)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Dropdown 2: Immigration & Études */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-secondary px-2 py-1.5 text-sm inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Immigration & Études
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 animate-fade-in">
                  {renderDropdownItems(serviceCategories.immigration)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Dropdown 3: Formations & Développement */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-secondary px-2 py-1.5 text-sm inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Formations & Développement
                    <ChevronDown className="ml-1 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white/95 animate-fade-in">
                  {renderDropdownItems(serviceCategories.formation)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/services" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Explorer
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/about" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                À propos
              </NavLink>
              
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/testimonials" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Témoignages
              </NavLink>
              
              <NavLink 
                to="/faq" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/faq" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                FAQ
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-secondary px-2 py-1.5 text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/contact" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Right side elements */}
          <div className="flex items-center gap-2">
            {/* Desktop expanded search */}
            <div className="hidden md:block">
              {searchExpanded ? (
                <div className="relative animate-fade-in">
                  <GlobalSearchBar />
                  <button 
                    onClick={toggleSearch}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={toggleSearch} 
                  className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
                  aria-label="Ouvrir la recherche"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Contact button */}
            <div className="hidden md:block">
              <Button 
                asChild 
                variant="secondary"
                size="sm"
                className="transform transition-all hover:scale-105 duration-200"
              >
                <Link 
                  to="/contact"
                  onClick={handleLinkClick}
                >
                  Nous contacter
                </Link>
              </Button>
            </div>

            {/* Mobile search and menu */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleSearch}
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
                aria-label={searchExpanded ? "Fermer la recherche" : "Ouvrir la recherche"}
              >
                <Search className="h-5 w-5" />
              </button>
              
              <button
                type="button"
                className="p-1.5 rounded-full hover:bg-gray-100 text-gray-700 hover:text-primary transition-colors"
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-label="Menu principal"
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5 animate-fade-in" />
                ) : (
                  <Menu className="h-5 w-5 animate-fade-in" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile search when expanded */}
        {searchExpanded && isMobile && (
          <div className="md:hidden py-2 px-1 animate-fade-in">
            <GlobalSearchBar />
          </div>
        )}
      </div>

      {/* Mobile menu with animation */}
      <div 
        className={cn(
          "md:hidden bg-white/95 shadow-lg overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Accueil
          </NavLink>
          
          {/* Mobile: Orientation & Insertion Pro */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-secondary">
                <span>Orientation & Insertion Pro</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                {serviceCategories.orientation.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-secondary"
                    onClick={() => {
                      toggleMenu();
                      handleLinkClick();
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
          
          {/* Mobile: Immigration & Études */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-secondary">
                <span>Immigration & Études</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                {serviceCategories.immigration.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-secondary"
                    onClick={() => {
                      toggleMenu();
                      handleLinkClick();
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
          
          {/* Mobile: Formations & Développement */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-secondary">
                <span>Formations & Développement</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                {serviceCategories.formation.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-secondary"
                    onClick={() => {
                      toggleMenu();
                      handleLinkClick();
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
            </details>
          </div>
          
          <NavLink
            to="/services"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/services" ? "page" : undefined}
          >
            Explorer
          </NavLink>
          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/about" ? "page" : undefined}
          >
            À propos
          </NavLink>
          
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/testimonials" ? "page" : undefined}
          >
            Témoignages
          </NavLink>
          
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/faq" ? "page" : undefined}
          >
            FAQ
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-secondary"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </NavLink>
          
          <Link
            to="/contact"
            className="block px-3 py-2 rounded-md text-sm font-medium bg-secondary text-white hover:bg-secondary/90 text-center mt-4 transform transition-all hover:scale-105 duration-200"
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
