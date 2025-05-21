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
import { Separator } from "../ui/separator";

// Service categories configuration
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
  // State for mobile menu and scroll status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useIsMobile();

  // Handle scroll event for navbar appearance changes
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20); // Reduced threshold for earlier effect
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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

  // Common dropdown menu items renderer with improved hover effects
  const renderDropdownItems = (items, closeMenu = () => {}) => {
    return items.map((item) => (
      <DropdownMenuItem key={item.path} asChild className="focus:bg-gray-50">
        <Link 
          to={item.path} 
          className="w-full cursor-pointer text-gray-700 hover:text-primary transition-all duration-200 py-2 px-3"
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

  // Custom link component with improved active indicators
  const NavbarLink = ({ to, children }) => (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        cn(
          "relative text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium transition-all duration-200 group",
          isActive && "text-primary"
        )
      }
      onClick={handleLinkClick}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </NavLink>
  );

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-navbar-scrolled shadow-navbar-scrolled backdrop-blur-md border-b border-navbar-border" 
          : "bg-navbar-bg backdrop-blur-sm"
      )}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-3 md:px-4">
        <div 
          className={cn(
            "flex items-center justify-between transition-all duration-300",
            scrolled ? "h-14" : "h-16"
          )}
        >
          {/* Logo with improved styling */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center group"
              onClick={handleLinkClick}
            >
              <span className="font-bold text-base md:text-lg text-primary group-hover:text-primary/90 transition-colors duration-200">
                UMEGREAT Pro
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with improved styling */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              <NavbarLink to="/">Accueil</NavbarLink>
              
              {/* Dropdown 1: Accompagnement with improved styling */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="relative text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium inline-flex items-center transition-all duration-200 group"
                    aria-expanded={isMenuOpen}
                  >
                    Accompagnement
                    <ChevronDown className="ml-0.5 h-3.5 w-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 mt-1 bg-white/95 backdrop-blur-sm animate-fade-in rounded-lg border border-gray-200 p-1 shadow-lg">
                  {renderDropdownItems(serviceCategories.orientation)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Dropdown 2: Mobilité internationale with improved styling */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="relative text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium inline-flex items-center transition-all duration-200 group"
                    aria-expanded={isMenuOpen}
                  >
                    Mobilité
                    <ChevronDown className="ml-0.5 h-3.5 w-3.5 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-52 mt-1 bg-white/95 backdrop-blur-sm animate-fade-in rounded-lg border border-gray-200 p-1 shadow-lg">
                  {renderDropdownItems(serviceCategories.immigration)}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Standard navigation links with the custom component */}
              <NavbarLink to="/services/formation">Formations</NavbarLink>
              <NavbarLink to="/about">À propos</NavbarLink>
              <NavbarLink to="/testimonials">Témoignages</NavbarLink>
              <NavbarLink to="/faq">FAQ</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
            </div>
          </div>

          {/* Search Bar moved to the right */}
          <div className="flex items-center ml-auto">
            <GlobalSearchBar />
          </div>

          {/* Mobile menu button with improved interactions */}
          <div className="md:hidden flex items-center ml-3">
            <button
              type="button"
              className="inline-flex items-center justify-center p-1.5 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100/70 transition-all duration-200 focus:outline-none"
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

      {/* Mobile menu with improved animation and styling */}
      <div 
        className={cn(
          "md:hidden bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out border-t",
          isMenuOpen 
            ? "max-h-[500px] opacity-100 shadow-lg border-gray-200" 
            : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="px-3 pt-2 pb-3 space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            Accueil
          </NavLink>
          
          {/* Mobile: Accompagnement with improved styling */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200">
                <span>Accompagnement</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <nav className="mt-1 ml-6 flex flex-col space-y-1 animate-slide-in">
                {serviceCategories.orientation.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
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
          
          {/* Mobile: Mobilité internationale with improved styling */}
          <div className="relative">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200">
                <span>Mobilité</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-300 group-open:rotate-180" />
              </summary>

              <nav className="mt-1 ml-6 flex flex-col space-y-1 animate-slide-in">
                {serviceCategories.immigration.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className="block px-3 py-1.5 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
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
          
          {/* Standard mobile links with improved styling */}
          <NavLink
            to="/services/formation"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            Formations
          </NavLink>
          
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            À propos
          </NavLink>
          
          <NavLink
            to="/testimonials"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            Témoignages
          </NavLink>
          
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            FAQ
          </NavLink>
          
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "block px-3 py-2 rounded-md text-sm transition-all duration-200",
                isActive 
                  ? "text-primary font-medium border-l-2 border-primary pl-2.5 bg-blue-50/50" 
                  : "text-gray-700 hover:text-primary hover:bg-gray-50"
              )
            }
            onClick={() => {
              toggleMenu();
              handleLinkClick();
            }}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
