
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
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
    { title: "Conseil & orientation", path: "/services/orientation" },
    { title: "Coaching", path: "/services/coaching" },
    { title: "Test d'éligibilité", path: "/services/test" },
  ],
  immigration: [
    { title: "S'installer durablement au Canada", path: "/services/immigration" },
    { title: "Études au Canada", path: "/services/etudes" },
  ],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
      className={`bg-white backdrop-blur-sm bg-opacity-95 border-b sticky top-0 z-50 ${
        scrolled ? "shadow-md" : "shadow-sm"
      } transition-all duration-300`}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-2 md:px-3">
        <div 
          className={`flex items-center justify-between ${
            scrolled ? "h-8 md:h-10" : "h-10 md:h-12"
          } transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center"
              onClick={handleLinkClick}
            >
              <span className="font-bold text-sm md:text-base text-primary hover:text-primary/90 transition-colors">
                UMEGREAT Pro
              </span>
            </Link>
          </div>

          {/* Search Bar (visible on desktop) */}
          <div className="flex items-center mx-1 lg:mx-2">
            <GlobalSearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-1 lg:ml-3 flex items-center space-x-0 lg:space-x-0.5">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Accueil
              </NavLink>
              
              {/* Dropdown 1: Accompagnement */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Accompagnement
                    <ChevronDown className="ml-0.5 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-44 md:w-52 bg-white animate-fade-in">
                  {renderDropdownItems(serviceCategories.orientation)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Dropdown 2: Mobilité internationale */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Mobilité
                    <ChevronDown className="ml-0.5 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-44 md:w-52 bg-white animate-fade-in">
                  {renderDropdownItems(serviceCategories.immigration)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Simple link: Formations */}
              <NavLink 
                to="/services/formation" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                    isActive && "text-primary font-medium after:scale-x-100"
                  )
                }
                aria-current={location.pathname === "/services/formation" ? "page" : undefined}
                onClick={handleLinkClick}
              >
                Formations
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  cn(
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
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
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
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
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
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
                    "text-gray-700 hover:text-primary px-1 md:px-1.5 py-1 text-xs md:text-sm relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
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

          {/* Mobile menu button and search */}
          <div className="md:hidden flex items-center gap-1">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1 rounded-md text-gray-700 hover:text-primary focus:outline-none"
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

      {/* Mobile menu with animation */}
      <div 
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/" ? "page" : undefined}
          >
            Accueil
          </NavLink>
          
          {/* Mobile: Accompagnement */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary">
                <span>Accompagnement</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                {serviceCategories.orientation.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
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
          
          {/* Mobile: Mobilité internationale */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary">
                <span>Mobilité</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                {serviceCategories.immigration.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
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
          
          {/* Mobile: Formations (simple link) */}
          <NavLink
            to="/services/formation"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/services/formation" ? "page" : undefined}
          >
            Formations
          </NavLink>
          
          {/* Mobile links */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
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
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
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
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
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
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary"
              }`
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
            aria-current={location.pathname === "/contact" ? "page" : undefined}
          >
            Contact
          </NavLink>
          
          {/* Add search bar to mobile menu */}
          <div className="px-3 py-2">
            <GlobalSearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
