
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
              <img 
                src="/lovable-uploads/858a1319-5693-4c03-aa6a-a5fec66c7066.png" 
                alt="Immigration au Canada" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationSection;
