
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
      setScrolled(offset > 20);
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
  
  // The active link style for desktop nav
  const activeLinkStyle = "text-primary font-medium after:scale-x-100";
  
  // Base link style for desktop nav
  const linkBaseStyle = "text-gray-700 hover:text-primary px-2 py-2 text-sm relative inline-flex items-center after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:-bottom-[2px] after:left-0 after:bg-primary/90 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left";

  return (
    <nav 
      className={`bg-white backdrop-blur-md bg-opacity-90 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md border-b-0" : "border-b border-gray-100"
      }`}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-3">
        <div 
          className={`flex items-center justify-between ${
            scrolled ? "h-14" : "h-16"
          } transition-all duration-300`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="flex items-center gap-1 group"
              onClick={handleLinkClick}
            >
              <span className="font-bold text-base md:text-lg text-primary group-hover:text-primary/90 transition-colors">
                UMEGREAT Pro
              </span>
            </Link>
          </div>

          {/* Search Bar - Positioned in center for balance */}
          <div className="hidden sm:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <GlobalSearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center gap-1">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  cn(
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
                    className={`${linkBaseStyle} group`}
                    aria-expanded={isMenuOpen}
                  >
                    Accompagnement
                    <ChevronDown className="ml-0.5 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 bg-white rounded-md shadow-md animate-fade-in mt-2 border border-gray-100">
                  {renderDropdownItems(serviceCategories.orientation)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Dropdown 2: Mobilité internationale */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className={`${linkBaseStyle} group`}
                    aria-expanded={isMenuOpen}
                  >
                    Mobilité
                    <ChevronDown className="ml-0.5 h-3 w-3 transition-transform group-data-[state=open]:rotate-180" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 bg-white rounded-md shadow-md animate-fade-in mt-2 border border-gray-100">
                  {renderDropdownItems(serviceCategories.immigration)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Simple link: Formations */}
              <NavLink 
                to="/services/formation" 
                className={({ isActive }) => 
                  cn(
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
                    linkBaseStyle,
                    isActive && activeLinkStyle
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
          <div className="flex items-center gap-2 md:hidden">
            <div className="sm:hidden">
              <GlobalSearchBar />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none transition-all"
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
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out border-t ${
          isMenuOpen ? "max-h-[500px] opacity-100 shadow-lg" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="px-3 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md text-sm ${
                isActive 
                  ? "text-primary font-medium bg-blue-50/60 border-l-2 border-primary pl-2" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
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
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                <span>Accompagnement</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-1 animate-slide-in">
                {serviceCategories.orientation.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
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
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50">
                <span>Mobilité</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>

              <nav className="mt-1.5 ml-6 flex flex-col space-y-1 animate-slide-in">
                {serviceCategories.immigration.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
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
          
          {/* Mobile: Regular links */}
          {[
            { title: "Formations", path: "/services/formation" },
            { title: "À propos", path: "/about" },
            { title: "Témoignages", path: "/testimonials" },
            { title: "FAQ", path: "/faq" },
            { title: "Contact", path: "/contact" }
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-sm ${
                  isActive 
                    ? "text-primary font-medium bg-blue-50/60 border-l-2 border-primary pl-2" 
                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                }`
              }
              onClick={() => {
                toggleMenu();
                handleLinkClick();
              }}
              aria-current={location.pathname === item.path ? "page" : undefined}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
