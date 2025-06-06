
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "@/components/ui/button";

const EtudesSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/6f1e9da5-a49a-4f40-a0c0-d78ce0d34d50.png" 
          alt="Groupe d'étudiants" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/85"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-1 md:order-1">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full"></div>
              <img 
                src="/lovable-uploads/0c3736b2-dd5d-4bea-b946-7ccc22f22891.png" 
                alt="Études au Canada" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
          
          <div className="order-2 md:order-2">
            <SectionTitle 
              title="Études au Canada" 
              subtitle="Concrétisez votre projet d'études dans les institutions canadiennes renommées"
            />
            
            <div className="space-y-4 mb-8">
              <p>
                Étudier au Canada est une opportunité exceptionnelle d'accéder à une éducation de qualité reconnue 
                mondialement, dans un environnement multiculturel et accueillant.
              </p>
              <p>
                Notre équipe vous accompagne dans toutes les étapes de votre projet d'études, de la sélection 
                des établissements à l'obtention de votre permis d'études, en passant par la préparation de votre dossier 
                d'admission et la recherche de financement.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/services/etudes">Nos services d'études</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtudesSection;
