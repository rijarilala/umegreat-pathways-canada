
import SectionTitle from "../shared/SectionTitle";
import PackCard from "../shared/PackCard";

const packs = [
  {
    id: 1,
    title: "Pack Insertion Pro",
    description: "Tout ce qu'il vous faut pour réussir votre insertion professionnelle et décrocher l'emploi de vos rêves.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "CV impactant",
      "Lettre de motivation convaincante",
      "Recherche du premier/nouveau emploi",
      "Transition vers la vie active",
      "Création et optimisation LinkedIn"
    ],
    linkTo: "/services/formation?tab=packs"
  },
  {
    id: 2,
    title: "Pack RH Starter",
    description: "Maîtrisez les fondamentaux de la gestion des ressources humaines et développez vos compétences RH.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "Gestion des ressources humaines",
      "Fondamentaux RH",
      "Stratégies RH",
      "Mise en œuvre RH",
      "Assimilation pratique RH"
    ],
    linkTo: "/services/formation?tab=packs"
  }
];

const PacksSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos packs de formation" 
          subtitle="Des programmes complets pour atteindre vos objectifs professionnels"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {packs.map((pack) => (
            <PackCard 
              key={pack.id}
              title={pack.title}
              description={pack.description}
              image={pack.image}
              modules={pack.modules}
              linkTo={pack.linkTo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
