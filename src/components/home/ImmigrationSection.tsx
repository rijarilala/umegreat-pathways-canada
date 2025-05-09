
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "@/components/ui/button";

const ImmigrationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle 
              title="Immigration au Canada" 
              subtitle="Réalisez votre rêve de vivre au Canada avec notre expertise en immigration"
            />
            
            <div className="space-y-4 mb-8">
              <p>
                Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet d'immigration au Canada,
                de l'évaluation de votre éligibilité jusqu'à votre installation.
              </p>
              <p>
                Nous vous offrons un accompagnement personnalisé pour maximiser vos chances de succès dans votre 
                démarche d'immigration, que ce soit pour un visa de travail, d'études ou une résidence permanente.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/services/immigration">Nos services d'immigration</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/services/test">Test d'éligibilité gratuit</Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full"></div>
              <div className="rounded-lg shadow-xl relative z-10 w-full bg-white p-8">
                <svg 
                  viewBox="0 0 300 300" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  {/* Border */}
                  <circle cx="150" cy="150" r="145" stroke="#FFA500" strokeWidth="2" fill="white" />
                  
                  {/* Passport */}
                  <rect x="75" y="120" width="150" height="110" rx="8" fill="#87CEEB" />
                  <rect x="85" y="130" width="130" height="90" rx="4" fill="white" />
                  
                  {/* Passport Lines */}
                  <line x1="100" y1="150" x2="200" y2="150" stroke="#87CEEB" strokeWidth="1" />
                  <line x1="100" y1="165" x2="200" y2="165" stroke="#87CEEB" strokeWidth="1" />
                  <line x1="100" y1="180" x2="200" y2="180" stroke="#87CEEB" strokeWidth="1" />
                  <line x1="100" y1="195" x2="170" y2="195" stroke="#87CEEB" strokeWidth="1" />
                  
                  {/* Graduation Cap */}
                  <path d="M75 100 L150 70 L225 100 L150 130 Z" fill="#87CEEB" />
                  <rect x="140" y="100" width="20" height="50" fill="#87CEEB" />
                  <path d="M120 130 L180 130 L180 140 L120 140 Z" fill="#87CEEB" />
                  <circle cx="150" cy="85" r="10" fill="white" />
                  <path d="M150 95 L160 120" stroke="#FFA500" strokeWidth="3" />
                  <circle cx="160" cy="120" r="6" fill="#FFA500" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSection;
