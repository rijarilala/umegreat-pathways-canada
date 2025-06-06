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
  return;
};
export default FeaturedServices;