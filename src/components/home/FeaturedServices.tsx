
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Regroupement des services en 3 catégories
const serviceCategories = [{
  title: "Orientation & Insertion Pro",
  services: [{
    title: "Orientation Professionnelle",
    description: "Découvrez votre voie professionnelle idéale avec nos services d'orientation personnalisés.",
    icon: "👨‍💼",
    link: "/services/orientation"
  }, {
    title: "Coaching",
    description: "Atteignez vos objectifs personnels et professionnels grâce à l'accompagnement de nos coachs certifiés.",
    icon: "🎯",
    link: "/services/coaching"
  }, {
    title: "Test d'éligibilité",
    description: "Évaluez vos opportunités professionnelles avec notre test personnalisé.",
    icon: "📋",
    link: "/services/test"
  }]
}, {
  title: "Immigration & Études",
  services: [{
    title: "Études au Canada",
    description: "Obtenez votre admission dans les meilleures institutions canadiennes avec notre aide.",
    icon: "🎓",
    link: "/services/etudes"
  }, {
    title: "Immigration",
    description: "Réalisez votre rêve d'immigrer au Canada avec nos services d'accompagnement complet.",
    icon: "✈️",
    link: "/services/immigration"
  }]
}, {
  title: "Développement & Formation",
  services: [{
    title: "Formation",
    description: "Développez vos compétences avec nos formations adaptées aux besoins du marché de l'emploi.",
    icon: "📚",
    link: "/services/formation"
  }]
}];

// Fonction pour aplatir les services pour l'affichage
const flattenedServices = serviceCategories.flatMap(category => category.services);

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos services" 
          subtitle="Découvrez notre gamme complète de services pour votre réussite professionnelle"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {flattenedServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="justify-center">
                <Button asChild>
                  <Link to={service.link} className="flex items-center gap-2">
                    En savoir plus
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
