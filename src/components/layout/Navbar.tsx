
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import GlobalSearchBar from "@/components/shared/GlobalSearchBar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  return (
    <nav 
      className={`bg-white border-b sticky top-0 z-50 ${
        scrolled ? "shadow-md" : "shadow-sm"
      } transition-all duration-300`}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`flex items-center justify-between ${
            scrolled ? "h-14" : "h-16"
          } transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-2xl text-primary hover:text-primary/90 transition-colors">
                UMEGREAT Pro
              </span>
            </Link>
          </div>

          {/* Search Bar (visible on desktop) */}
          <div className="hidden md:flex md:mx-4 lg:mx-8">
            <GlobalSearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Accueil
              </NavLink>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="text-gray-700 hover:text-primary px-3 py-2 inline-flex items-center group"
                    aria-expanded={isMenuOpen}
                  >
                    Services 
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white animate-fade-in">
                  <DropdownMenuItem asChild>
                    <Link to="/services/orientation" className="w-full cursor-pointer hover:text-primary">
                      Orientation Professionnelle
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/formation" className="w-full cursor-pointer hover:text-primary">
                      Formation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/coaching" className="w-full cursor-pointer hover:text-primary">
                      Coaching
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/etudes" className="w-full cursor-pointer hover:text-primary">
                      Études au Canada
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/immigration" className="w-full cursor-pointer hover:text-primary">
                      Immigration & Accompagnement
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/test" className="w-full cursor-pointer hover:text-primary">
                      Test d'éligibilité
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/recrutement" className="w-full cursor-pointer hover:text-primary">
                      Recrutement
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/services" ? "page" : undefined}
              >
                Explorer
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/about" ? "page" : undefined}
              >
                À propos
              </NavLink>
              
              <NavLink 
                to="/testimonials" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/testimonials" ? "page" : undefined}
              >
                Témoignages
              </NavLink>
              
              <NavLink 
                to="/faq" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/faq" ? "page" : undefined}
              >
                FAQ
              </NavLink>
              
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `text-gray-700 hover:text-primary px-3 py-2 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                    isActive ? "text-primary font-medium after:scale-x-100" : ""
                  }`
                }
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact button */}
          <div className="hidden md:block">
            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary/90 transform transition-all hover:scale-105 duration-200"
            >
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>

          {/* Mobile menu button and search */}
          <div className="md:hidden flex items-center gap-2">
            <GlobalSearchBar />
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Menu principal"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu with animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/" ? "page" : undefined}
            >
              Accueil
            </NavLink>
            
            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>

                <nav className="mt-1.5 ml-6 flex flex-col space-y-2 animate-slide-in">
                  <Link 
                    to="/services/orientation" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Orientation Professionnelle
                  </Link>
                  <Link 
                    to="/services/formation" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Formation
                  </Link>
                  <Link 
                    to="/services/coaching" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Coaching
                  </Link>
                  <Link 
                    to="/services/etudes" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Études au Canada
                  </Link>
                  <Link 
                    to="/services/immigration" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Immigration & Accompagnement
                  </Link>
                  <Link 
                    to="/services/test" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Test d'éligibilité
                  </Link>
                  <Link 
                    to="/services/recrutement" 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary"
                    onClick={toggleMenu}
                  >
                    Recrutement
                  </Link>
                </nav>
              </details>
            </div>
            
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/services" ? "page" : undefined}
            >
              Explorer
            </NavLink>
            
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/about" ? "page" : undefined}
            >
              À propos
            </NavLink>
            
            <NavLink
              to="/testimonials"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/testimonials" ? "page" : undefined}
            >
              Témoignages
            </NavLink>
            
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/faq" ? "page" : undefined}
            >
              FAQ
            </NavLink>
            
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base ${
                  isActive 
                    ? "text-primary font-medium border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary"
                }`
              }
              onClick={toggleMenu}
              aria-current={location.pathname === "/contact" ? "page" : undefined}
            >
              Contact
            </NavLink>
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-secondary/90 text-center mt-4 transform transition-all hover:scale-105 duration-200"
              onClick={toggleMenu}
            >
              Nous contacter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
