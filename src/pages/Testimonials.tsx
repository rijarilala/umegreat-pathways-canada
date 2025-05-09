
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import TestimonialCard from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    title: "Ingénieure récemment immigrée",
    content: "Grâce à UMEGREAT Pro, j'ai pu obtenir ma résidence permanente au Canada en seulement 8 mois. Leur accompagnement a été précieux à chaque étape du processus, de l'évaluation initiale jusqu'à la préparation des documents. L'équipe a toujours été disponible pour répondre à mes questions et m'a guidée avec professionnalisme. Je recommande vivement leurs services à quiconque souhaite immigrer au Canada."
  },
  {
    id: 2,
    name: "Thomas Dubois",
    title: "Étudiant en commerce",
    content: "Le pack Insertion Pro m'a permis de décrocher mon premier emploi en moins de 2 mois après la fin de mes études. Les conseils pour mon CV et les simulations d'entretien ont fait toute la différence. J'ai apprécié l'approche personnalisée et les retours détaillés sur mes points forts et mes axes d'amélioration. Un investissement qui en valait vraiment la peine !"
  },
  {
    id: 3,
    name: "Marie Lefebvre",
    title: "Responsable RH",
    content: "La formation RH Starter a transformé ma façon de gérer les ressources humaines. J'applique quotidiennement les connaissances acquises et les résultats sont impressionnants. Les formateurs sont des experts dans leur domaine et partagent des exemples concrets et des outils pratiques. Cette formation m'a permis d'évoluer professionnellement et d'obtenir une promotion."
  },
  {
    id: 4,
    name: "Alexandre Moreau",
    title: "Développeur web",
    content: "J'ai bénéficié du service de coaching professionnel et cela m'a permis de clarifier mes objectifs de carrière et d'établir un plan d'action concret. Mon coach m'a aidé à identifier mes forces et à travailler sur mes points faibles. Grâce à cet accompagnement, j'ai pu négocier une augmentation significative et prendre plus de responsabilités dans mon entreprise."
  },
  {
    id: 5,
    name: "Camille Petit",
    title: "Étudiante internationale",
    content: "L'équipe d'UMEGREAT Pro m'a accompagnée dans mon projet d'études au Canada. Grâce à leurs conseils avisés, j'ai pu intégrer l'université de mon choix et obtenir mon permis d'études sans difficulté. Leur expertise sur les procédures administratives et leur réseau de contacts dans les établissements canadiens ont été déterminants dans la réussite de mon projet."
  },
  {
    id: 6,
    name: "Laurent Durand",
    title: "Entrepreneur",
    content: "En tant qu'entrepreneur souhaitant étendre mes activités au Canada, j'ai fait appel à UMEGREAT Pro pour m'aider dans les démarches d'immigration d'affaires. Leur connaissance approfondie des programmes et leur approche stratégique m'ont permis de présenter un dossier solide et d'obtenir l'approbation des autorités canadiennes. Un partenaire de confiance pour tous les entrepreneurs ayant des projets au Canada."
  },
  {
    id: 7,
    name: "Nathalie Bernard",
    title: "Reconversion professionnelle",
    content: "Après 15 ans dans le même secteur, j'ai décidé de me reconvertir. Le service d'orientation professionnelle d'UMEGREAT Pro m'a aidée à identifier un nouveau domaine correspondant à mes compétences et aspirations. Le bilan de compétences était particulièrement révélateur et m'a donné confiance pour entreprendre cette nouvelle aventure professionnelle."
  },
  {
    id: 8,
    name: "Pierre Lemoine",
    title: "Directeur commercial",
    content: "J'ai fait appel à UMEGREAT Pro pour le recrutement d'une équipe commerciale. Leur processus de sélection rigoureux et leur compréhension de nos besoins spécifiques nous ont permis de constituer une équipe performante. Leur suivi post-recrutement et leurs conseils pour l'intégration des nouveaux talents ont également été très appréciés."
  },
  {
    id: 9,
    name: "Isabelle Roux",
    title: "Professeure immigrée au Canada",
    content: "Le test d'éligibilité d'UMEGREAT Pro m'a immédiatement montré que j'avais un bon profil pour le Programme des travailleurs qualifiés. Leurs conseils pour valoriser mon expérience d'enseignement et mes publications académiques ont été cruciaux pour la réussite de ma candidature. Aujourd'hui, j'enseigne dans une université canadienne et je suis très reconnaissante du support reçu."
  }
];

const Testimonials = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Témoignages" 
        description="Découvrez ce que nos clients disent à propos de nos services"
        color="secondary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id}
                name={testimonial.name}
                title={testimonial.title}
                content={testimonial.content}
              />
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Testimonials;
