
import { Link } from "react-router-dom";
import SectionTitle from "../shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quels sont les critères d'éligibilité pour immigrer au Canada ?",
    answer: "Les critères d'éligibilité varient selon le programme d'immigration choisi. Généralement, ils incluent l'âge, le niveau d'éducation, l'expérience professionnelle, les compétences linguistiques et l'adaptabilité. Nous vous recommandons de faire notre test d'éligibilité gratuit pour une évaluation personnalisée."
  },
  {
    question: "Combien de temps dure le processus d'immigration ?",
    answer: "La durée du processus d'immigration varie généralement entre 6 et 18 mois, selon le programme choisi, votre pays d'origine et votre situation personnelle. Notre équipe vous fournira un calendrier estimatif adapté à votre cas."
  },
  {
    question: "Comment choisir la formation qui me convient ?",
    answer: "Nous proposons une séance d'orientation gratuite pour vous aider à identifier la formation qui correspond le mieux à votre profil, vos objectifs et vos besoins. Nos conseillers pédagogiques vous guideront dans ce choix important."
  },
  {
    question: "Quels sont les avantages des packs de formation par rapport aux formations individuelles ?",
    answer: "Nos packs de formation offrent une approche complète et cohérente à un tarif avantageux par rapport à l'achat séparé des modules. Ils sont conçus pour couvrir tous les aspects d'une problématique spécifique et incluent souvent des bonus exclusifs."
  }
];

const FaqPreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Questions fréquentes" 
          subtitle="Trouvez rapidement des réponses à vos interrogations"
          centered
        />
        
        <div className="max-w-3xl mx-auto mt-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/faq">Voir toutes les questions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqPreview;
