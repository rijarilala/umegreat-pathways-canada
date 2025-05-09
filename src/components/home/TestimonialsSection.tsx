
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import TestimonialCard from "../shared/TestimonialCard";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    title: "Ingénieure récemment immigrée",
    content: "Grâce à UMEGREAT Pro, j'ai pu obtenir ma résidence permanente au Canada en seulement 8 mois. Leur accompagnement a été précieux à chaque étape du processus."
  },
  {
    id: 2,
    name: "Thomas Dubois",
    title: "Étudiant en commerce",
    content: "Le pack Insertion Pro m'a permis de décrocher mon premier emploi en moins de 2 mois après la fin de mes études. Les conseils pour mon CV et les simulations d'entretien ont fait toute la différence."
  },
  {
    id: 3,
    name: "Marie Lefebvre",
    title: "Responsable RH",
    content: "La formation RH Starter a transformé ma façon de gérer les ressources humaines. J'applique quotidiennement les connaissances acquises et les résultats sont impressionnants."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Ce que nos clients disent" 
          subtitle="Découvrez les témoignages de ceux qui nous ont fait confiance"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              name={testimonial.name}
              title={testimonial.title}
              content={testimonial.content}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to="/testimonials">Voir tous les témoignages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
