import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
const ImmigrationSection = () => {
  return <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="/lovable-uploads/e78144cd-09f5-4ddd-9707-d4d92b074db8.png" alt="Famille avec bagages" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Plane className="h-8 w-8 text-primary" />
              </div>
              <SectionTitle title="Immigration au Canada" subtitle="" className="mb-0" />
            </div>
            
            <p className="text-gray-600 text-lg mb-8">
              Réalisez votre rêve de vivre au Canada avec notre expertise en immigration
            </p>
            
            <div className="space-y-4 mb-8">
              <p>
                Notre équipe d'experts vous accompagne dans toutes les étapes de votre projet d'immigration au Canada,
                de l'évaluation de votre éligibilité jusqu'à votre installation.
              </p>
              <p>Nous vous offrons un accompagnement personnalisé pour maximiser vos chances de succès dans votre démarche d'immigration.</p>
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
              <img src="/lovable-uploads/d8516e82-7c9c-4aee-80af-bc48fa783a4a.png" alt="Immigration au Canada" className="rounded-lg shadow-xl relative z-10 w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ImmigrationSection;