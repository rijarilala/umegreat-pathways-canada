
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionTitle from "../shared/SectionTitle";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Regroupement des services en 3 catégories
const serviceCategories = [
  {
    title: "Orientation & Insertion Pro",
    services: [
      {
        title: "Orientation Professionnelle",
        description: "Découvrez votre voie professionnelle idéale avec nos services d'orientation personnalisés.",
        icon: "👨‍💼",
        link: "/services/orientation"
      },
      {
        title: "Coaching",
        description: "Atteignez vos objectifs personnels et professionnels grâce à l'accompagnement de nos coachs certifiés.",
        icon: "🎯",
        link: "/services/coaching"
      },
      {
        title: "Test d'éligibilité",
        description: "Évaluez vos opportunités professionnelles avec notre test personnalisé.",
        icon: "📋",
        link: "/services/test"
      }
    ]
  },
  {
    title: "Immigration & Études",
    services: [
      {
        title: "Études au Canada",
        description: "Obtenez votre admission dans les meilleures institutions canadiennes avec notre aide.",
        icon: "🎓",
        link: "/services/etudes"
      },
      {
        title: "Immigration",
        description: "Réalisez votre rêve d'immigrer au Canada avec nos services d'accompagnement complet.",
        icon: "✈️",
        link: "/services/immigration"
      }
    ]
  },
  {
    title: "Développement & Formation",
    services: [
      {
        title: "Formation",
        description: "Développez vos compétences avec nos formations adaptées aux besoins du marché de l'emploi.",
        icon: "📚",
        link: "/services/formation"
      }
    ]
  }
];

// Fonction pour aplatir les services pour l'affichage
const flattenedServices = serviceCategories.flatMap(category => category.services);

const FeaturedServices = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos services" 
          subtitle="Découvrez notre gamme complète de services pour vous accompagner dans votre parcours professionnel"
          centered
        />
        
        {serviceCategories.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, index) => (
                <Card key={index} className="hover-card border-t-4 border-t-primary h-full flex flex-col">
                  <CardHeader>
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full flex items-center justify-between group" asChild>
                      <Link to={service.link}>
                        En savoir plus
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/services">Voir tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
