
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Target, Award } from "lucide-react";

const FormationApproachSection = () => {
  const approaches = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Formations Pratiques",
      description: "Des formations axées sur la pratique avec des exercices concrets et des mises en situation réelles."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Accompagnement Personnalisé",
      description: "Un suivi individuel pour adapter la formation à vos besoins spécifiques et vos objectifs."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Objectifs Ciblés",
      description: "Des programmes structurés pour atteindre vos objectifs professionnels de manière efficace."
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certification Reconnue",
      description: "Des formations certifiantes qui valorisent votre profil sur le marché de l'emploi."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Notre Approche de Formation" 
          subtitle="Une méthodologie éprouvée pour maximiser votre apprentissage et votre réussite professionnelle"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {approaches.map((approach, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{approach.title}</h3>
                <p className="text-gray-600 leading-relaxed">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Développez vos compétences avec nos formations spécialisées
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              Nos programmes de formation sont conçus pour répondre aux exigences du marché de l'emploi 
              et vous donner les outils nécessaires pour réussir votre carrière professionnelle.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/services/formation">Découvrir nos formations</Link>
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

export default FormationApproachSection;
