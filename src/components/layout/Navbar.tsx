
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-primary">UMEGREAT Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2">
                Accueil
              </Link>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-gray-700 hover:text-primary px-3 py-2 inline-flex items-center">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 bg-white">
                  <DropdownMenuItem asChild>
                    <Link to="/services/orientation" className="w-full cursor-pointer">
                      Orientation Professionnelle
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/formation" className="w-full cursor-pointer">
                      Formation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/coaching" className="w-full cursor-pointer">
                      Coaching
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/etudes" className="w-full cursor-pointer">
                      Études au Canada
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/immigration" className="w-full cursor-pointer">
                      Immigration & Accompagnement
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/test" className="w-full cursor-pointer">
                      Test d'éligibilité
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/services/recrutement" className="w-full cursor-pointer">
                      Recrutement
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Link to="/services" className="text-gray-700 hover:text-primary px-3 py-2">
                Tous les services
              </Link>
              
              <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2">
                À propos
              </Link>
              
              <Link to="/testimonials" className="text-gray-700 hover:text-primary px-3 py-2">
                Témoignages
              </Link>
              
              <Link to="/faq" className="text-gray-700 hover:text-primary px-3 py-2">
                FAQ
              </Link>
              
              <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact button */}
          <div className="hidden md:block">
            <Button asChild className="bg-secondary hover:bg-secondary/90">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Accueil
            </Link>
            
            <div className="relative">
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </summary>

                <nav className="mt-1.5 ml-6 flex flex-col space-y-2">
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
            
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Tous les services
            </Link>
            
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              À propos
            </Link>
            
            <Link
              to="/testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Témoignages
            </Link>
            
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-secondary text-white hover:bg-secondary/90 text-center mt-4"
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
