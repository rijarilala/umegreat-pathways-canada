
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Home, Users, GraduationCap, Globe, Phone, HelpCircle, MessageCircle, BookOpen } from "lucide-react";
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

// Mobile menu items with Material Design icons
const mobileMenuItems = [
  {
    title: "Accueil",
    path: "/",
    icon: Home,
    color: "text-blue-600",
  },
  {
    title: "Accompagnement",
    path: null,
    icon: Users,
    color: "text-green-600",
    submenu: serviceCategories.orientation,
  },
  {
    title: "Mobilité",
    path: null,
    icon: Globe,
    color: "text-purple-600",
    submenu: serviceCategories.immigration,
  },
  {
    title: "Formations",
    path: "/services/formation",
    icon: GraduationCap,
    color: "text-orange-600",
  },
  {
    title: "À propos",
    path: "/about",
    icon: BookOpen,
    color: "text-teal-600",
  },
  {
    title: "Témoignages",
    path: "/testimonials",
    icon: MessageCircle,
    color: "text-pink-600",
  },
  {
    title: "FAQ",
    path: "/faq",
    icon: HelpCircle,
    color: "text-indigo-600",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: Phone,
    color: "text-red-600",
  },
];

const Navbar = () => {
  // State for mobile menu and scroll status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setExpandedSubmenu(null);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setExpandedSubmenu(null);
  };

  const toggleSubmenu = (title: string) => {
    setExpandedSubmenu(expandedSubmenu === title ? null : title);
  };

  // Handle link click to scroll to top
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setExpandedSubmenu(null);
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

  // Check if current path matches item
  const isActiveItem = (item) => {
    if (item.path) return location.pathname === item.path;
    if (item.submenu) return item.submenu.some(subItem => location.pathname === subItem.path);
    return false;
  };

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

          {/* Vertical separator between logo and nav */}
          <Separator orientation="vertical" className="h-6 mx-2 bg-gray-200 hidden sm:block" />

          {/* Desktop Navigation with improved styling */}
          <div className="hidden md:flex items-center ml-4 space-x-4">
            <NavbarLink to="/">Accueil</NavbarLink>
            
            {/* Search bar intégré directement ici avec moins d'espacement */}
            <div className="hidden lg:flex items-center">
              <GlobalSearchBar />
            </div>

            {/* Dropdowns and other links */}
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

          {/* Mobile menu search button */}
          <div className="md:hidden lg:hidden flex items-center">
            <GlobalSearchBar />
          </div>

          {/* Mobile menu button with improved interactions */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-primary hover:bg-gray-100/70 transition-all duration-200 focus:outline-none shadow-sm border border-gray-200/50"
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

      {/* Modern Mobile Sidebar */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out",
          isMenuOpen 
            ? "visible opacity-100" 
            : "invisible opacity-0"
        )}
      >
        {/* Backdrop */}
        <div 
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={toggleMenu}
        />
        
        {/* Sidebar */}
        <div 
          className={cn(
            "absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <span className="font-bold text-lg text-primary">UMEGREAT Pro</span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200"
              aria-label="Fermer le menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex flex-col h-full overflow-y-auto pb-20">
            <nav className="flex-1 px-4 py-6 space-y-2">
              {mobileMenuItems.map((item) => (
                <div key={item.title}>
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 group",
                          isActive && "bg-blue-50 text-primary border-l-4 border-primary"
                        )
                      }
                    >
                      <item.icon className={cn("h-5 w-5 transition-colors duration-200", item.color, isActiveItem(item) && "text-primary")} />
                      <span className="font-medium text-sm">{item.title}</span>
                    </NavLink>
                  ) : (
                    <div>
                      <button
                        onClick={() => toggleSubmenu(item.title)}
                        className={cn(
                          "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200",
                          isActiveItem(item) && "bg-blue-50 text-primary border-l-4 border-primary"
                        )}
                      >
                        <item.icon className={cn("h-5 w-5 transition-colors duration-200", item.color, isActiveItem(item) && "text-primary")} />
                        <span className="font-medium text-sm flex-1 text-left">{item.title}</span>
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expandedSubmenu === item.title && "rotate-180"
                          )} 
                        />
                      </button>
                      
                      {/* Submenu */}
                      <div 
                        className={cn(
                          "overflow-hidden transition-all duration-300 ease-in-out",
                          expandedSubmenu === item.title 
                            ? "max-h-96 opacity-100 mt-2" 
                            : "max-h-0 opacity-0"
                        )}
                      >
                        <div className="ml-6 space-y-1">
                          {item.submenu?.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={handleLinkClick}
                              className={cn(
                                "block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-all duration-200",
                                location.pathname === subItem.path && "text-primary bg-blue-50 font-medium"
                              )}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Sidebar Footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-500 text-center">
                © 2024 UMEGREAT Pro
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
