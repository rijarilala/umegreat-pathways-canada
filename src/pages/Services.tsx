
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { GraduationCap, Briefcase, SearchIcon, ArrowRight, BookOpen, User } from "lucide-react";

// Services regroupés par catégorie
const serviceCategories = [
  {
    category: "Orientation & Insertion Pro",
    description: "Trouvez votre voie et préparez votre avenir professionnel",
    services: [
      {
        title: "Orientation Professionnelle",
        description: "Trouvez votre voie avec notre approche personnalisée à l'orientation de carrière.",
        icon: <BookOpen className="h-8 w-8 text-primary" />,
        features: ["Évaluation des compétences", "Bilan professionnel", "Conseil en réorientation", "Exploration des métiers"],
        link: "/services/orientation"
      },
      {
        title: "Coaching",
        description: "Atteignez vos objectifs avec l'accompagnement personnalisé de nos coachs certifiés.",
        icon: <User className="h-8 w-8 text-primary" />,
        features: ["Coaching de carrière", "Développement personnel", "Leadership", "Gestion du stress"],
        link: "/services/coaching"
      },
      {
        title: "Test d'éligibilité",
        description: "Évaluez gratuitement vos opportunités professionnelles avec notre test complet.",
        icon: <SearchIcon className="h-8 w-8 text-primary" />,
        features: ["Analyse personnalisée", "Recommandations de parcours", "Évaluation gratuite", "Conseils d'experts"],
        link: "/services/test"
      },
    ]
  },
  {
    category: "Immigration & Études",
    description: "Réalisez votre projet d'immigration et d'études au Canada",
    services: [
      {
        title: "Études au Canada",
        description: "Concrétisez votre projet d'études dans les institutions canadiennes renommées.",
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        features: ["Sélection d'établissements", "Admission", "Permis d'études", "Bourses"],
        link: "/services/etudes"
      },
      {
        title: "Immigration & Accompagnement",
        description: "Réalisez votre rêve canadien grâce à notre expertise en immigration.",
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        features: ["Résidence permanente", "Visa de travail", "Réunification familiale", "Installation"],
        link: "/services/immigration"
      },
    ]
  },
  {
    category: "Développement & Formation",
    description: "Développez vos compétences pour réussir sur le marché du travail",
    services: [
      {
        title: "Formation",
        description: "Développez vos compétences avec nos formations adaptées aux besoins du marché de l'emploi.",
        icon: <GraduationCap className="h-8 w-8 text-primary" />,
        features: ["CV et Lettres de motivation", "Compétences RH", "Préparation entretiens", "Packs complets"],
        link: "/services/formation"
      },
    ]
  }
];

const Services = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Nos Services" 
        description="Découvrez notre gamme complète de services pour vous accompagner dans votre parcours professionnel et votre projet d'immigration"
        color="primary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Une approche complète" 
            subtitle="Des solutions adaptées à chacune de vos étapes professionnelles"
            centered
          />
          
          {serviceCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-16">
              <h3 className="text-2xl font-bold mb-3">{category.category}</h3>
              <p className="text-gray-600 mb-8">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <Card key={index} className="hover-card h-full flex flex-col">
                    <CardHeader>
                      <div className="mb-4">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-600 mb-4">{service.description}</CardDescription>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full group">
                        <Link to={service.link} className="flex items-center justify-between">
                          Découvrir
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre parcours avec nous?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Notre équipe d'experts est là pour vous accompagner et répondre à toutes vos questions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/test">Faire le test d'éligibilité</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
