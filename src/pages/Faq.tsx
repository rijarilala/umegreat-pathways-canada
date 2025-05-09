
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqCategories = [
  {
    id: "general",
    label: "Général",
    questions: [
      {
        question: "Quels services propose UMEGREAT Pro ?",
        answer: "UMEGREAT Pro propose une gamme complète de services incluant l'orientation professionnelle, la formation, le coaching, l'accompagnement pour les études au Canada, l'immigration et l'accompagnement au Canada, ainsi que des services de recrutement."
      },
      {
        question: "Comment prendre rendez-vous avec un conseiller ?",
        answer: "Vous pouvez prendre rendez-vous avec un conseiller en remplissant notre formulaire de contact, en nous appelant directement ou en nous envoyant un email. Un membre de notre équipe vous recontactera dans les 24-48 heures ouvrables pour organiser un rendez-vous à votre convenance."
      },
      {
        question: "Proposez-vous des services à distance ?",
        answer: "Oui, tous nos services sont disponibles à distance, via visioconférence ou par téléphone, pour s'adapter à votre emploi du temps et à votre localisation géographique."
      }
    ]
  },
  {
    id: "orientation",
    label: "Orientation",
    questions: [
      {
        question: "En quoi consiste un bilan de compétences ?",
        answer: "Un bilan de compétences est une démarche structurée qui permet d'identifier vos compétences professionnelles et personnelles, vos aptitudes et motivations afin de définir un projet professionnel réaliste et réalisable. Il comprend généralement des entretiens individuels, des tests d'aptitude et de personnalité, et une phase de conclusion avec élaboration d'un plan d'action."
      },
      {
        question: "Combien de temps dure un processus d'orientation professionnelle ?",
        answer: "La durée d'un processus d'orientation professionnelle varie généralement entre 4 et 8 semaines, selon vos besoins et votre disponibilité. Il comprend habituellement 3 à 5 séances de travail approfondi avec un conseiller."
      }
    ]
  },
  {
    id: "formation",
    label: "Formation",
    questions: [
      {
        question: "Comment choisir la formation qui me convient ?",
        answer: "Nous proposons une séance d'orientation gratuite pour vous aider à identifier la formation qui correspond le mieux à votre profil, vos objectifs et vos besoins. Nos conseillers pédagogiques vous guideront dans ce choix important."
      },
      {
        question: "Quels sont les avantages des packs de formation par rapport aux formations individuelles ?",
        answer: "Nos packs de formation offrent une approche complète et cohérente à un tarif avantageux par rapport à l'achat séparé des modules. Ils sont conçus pour couvrir tous les aspects d'une problématique spécifique et incluent souvent des bonus exclusifs."
      },
      {
        question: "Les formations sont-elles certifiantes ?",
        answer: "Certaines de nos formations sont certifiantes, tandis que d'autres sont conçues pour développer des compétences pratiques sans certification formelle. Chaque description de formation précise si elle est certifiante et les modalités d'obtention du certificat."
      }
    ]
  },
  {
    id: "immigration",
    label: "Immigration",
    questions: [
      {
        question: "Quels sont les critères d'éligibilité pour immigrer au Canada ?",
        answer: "Les critères d'éligibilité varient selon le programme d'immigration choisi. Généralement, ils incluent l'âge, le niveau d'éducation, l'expérience professionnelle, les compétences linguistiques et l'adaptabilité. Nous vous recommandons de faire notre test d'éligibilité gratuit pour une évaluation personnalisée."
      },
      {
        question: "Combien de temps dure le processus d'immigration ?",
        answer: "La durée du processus d'immigration varie généralement entre 6 et 18 mois, selon le programme choisi, votre pays d'origine et votre situation personnelle. Notre équipe vous fournira un calendrier estimatif adapté à votre cas."
      },
      {
        question: "Quel est le coût de vos services d'immigration ?",
        answer: "Le coût de nos services d'immigration varie en fonction de la complexité de votre dossier et du niveau d'accompagnement souhaité. Nous proposons différentes formules, de la simple consultation à l'accompagnement complet. Contactez-nous pour obtenir un devis personnalisé."
      },
      {
        question: "Garantissez-vous l'obtention du visa ou de la résidence permanente ?",
        answer: "Bien que nous mettions tout en œuvre pour maximiser vos chances de succès et que notre taux de réussite soit élevé, nous ne pouvons garantir l'obtention du visa ou de la résidence permanente, car la décision finale appartient aux autorités canadiennes d'immigration."
      }
    ]
  },
  {
    id: "etudes",
    label: "Études",
    questions: [
      {
        question: "Quelles sont les conditions pour étudier au Canada ?",
        answer: "Pour étudier au Canada, vous devez généralement être accepté par un établissement d'enseignement désigné, prouver que vous disposez des fonds nécessaires pour payer vos frais de scolarité et subvenir à vos besoins, être en bonne santé et avoir un casier judiciaire vierge. Des compétences linguistiques en anglais ou en français sont également requises."
      },
      {
        question: "Comment choisir la bonne université ou le bon collège au Canada ?",
        answer: "Le choix d'un établissement dépend de plusieurs facteurs: le programme d'études visé, la localisation géographique, les frais de scolarité, les opportunités de bourses, etc. Nos conseillers vous aideront à analyser ces facteurs et à sélectionner les établissements les plus adaptés à votre profil et à vos objectifs."
      }
    ]
  },
  {
    id: "coaching",
    label: "Coaching",
    questions: [
      {
        question: "En quoi consiste le coaching professionnel ?",
        answer: "Le coaching professionnel est un processus d'accompagnement qui vise à vous aider à atteindre vos objectifs de carrière et à développer votre potentiel. Il se déroule sous forme de séances individuelles où le coach utilise diverses méthodes pour vous aider à identifier vos forces, surmonter vos obstacles et élaborer des stratégies efficaces."
      },
      {
        question: "Combien de séances de coaching sont généralement nécessaires ?",
        answer: "Le nombre de séances varie selon vos objectifs et besoins. Un programme typique comprend 6 à 12 séances réparties sur 3 à 6 mois. Certains clients optent pour un suivi à plus long terme avec des séances moins fréquentes après le programme initial."
      }
    ]
  }
];

const Faq = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Foire aux questions" 
        description="Trouvez des réponses à vos questions les plus fréquentes"
        color="primary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="general" className="max-w-4xl mx-auto">
            <TabsList className="mb-8 flex flex-wrap gap-2 justify-center">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {faqCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default Faq;
