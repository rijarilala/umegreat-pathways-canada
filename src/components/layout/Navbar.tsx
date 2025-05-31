
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import GlobalSearchBar from "@/components/shared/GlobalSearchBar";
import MobileNavigation from "./MobileNavigation";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isMobile } = useIsMobile();

  // Handle scroll event for navbar appearance changes
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change but not immediately
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMobileMenuOpen(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const toggleMobileMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
    <>
      <nav 
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled 
            ? "bg-white/95 shadow-lg backdrop-blur-md border-b border-gray-200" 
            : "bg-white/90 backdrop-blur-sm"
        )}
        aria-label="Navigation principale"
      >
        <div className="container mx-auto px-3 md:px-4">
          <div 
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-18" : "h-20"
            )}
          >
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="flex items-center group"
                onClick={handleLinkClick}
              >
                <img 
                  src="/lovable-uploads/0bca4632-3fca-423c-9b5f-e130fad23d05.png" 
                  alt="UMEGREAT Pro Logo" 
                  className={cn(
                    "transition-all duration-300 group-hover:scale-105",
                    scrolled ? "h-12" : "h-16"
                  )}
                />
              </Link>
            </div>

            {/* Vertical separator between logo and nav */}
            <Separator orientation="vertical" className="h-8 mx-3 bg-gray-200 hidden sm:block" />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center ml-4 space-x-4">
              <NavbarLink to="/">Accueil</NavbarLink>
              
              {/* Search bar */}
              <div className="hidden lg:flex items-center">
                <GlobalSearchBar />
              </div>

              {/* Dropdown menus and other links */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="relative text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium inline-flex items-center transition-all duration-200 group"
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
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="relative text-gray-700 hover:text-primary px-2 py-1 text-sm font-medium inline-flex items-center transition-all duration-200 group"
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
              
              <NavbarLink to="/services/formation">Formations</NavbarLink>
              <NavbarLink to="/about">À propos</NavbarLink>
              <NavbarLink to="/testimonials">Témoignages</NavbarLink>
              <NavbarLink to="/faq">FAQ</NavbarLink>
              <NavbarLink to="/contact">Contact</NavbarLink>
            </div>

            {/* Mobile search bar */}
            <div className="md:hidden lg:hidden flex items-center">
              <GlobalSearchBar />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center ml-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-label="Menu principal"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Component */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </>
  );
};

export default Navbar;
