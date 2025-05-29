
import SectionTitle from "../shared/SectionTitle";
import PackCard from "../shared/PackCard";
import { Sparkles, Star } from "lucide-react";

const packs = [
  {
    id: 1,
    title: "Pack Insertion Pro",
    description: "Tout ce qu'il vous faut pour réussir votre insertion professionnelle et décrocher l'emploi de vos rêves.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "Créer un CV impactant",
      "Lettre de motivation convaincante",
      "Préparation aux entretiens d'embauche",
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
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            Formations Premium
            <Sparkles className="h-4 w-4" />
          </div>
          
          <SectionTitle 
            title={
              <span className="bg-gradient-to-r from-gray-900 via-primary to-secondary bg-clip-text text-transparent">
                Nos packs de formation
              </span>
            }
            subtitle="Des programmes complets conçus par des experts pour accélérer votre réussite professionnelle"
            centered
            variant="modern"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 max-w-6xl mx-auto">
          {packs.map((pack, index) => (
            <div 
              key={pack.id} 
              className="transform transition-all duration-500 hover:scale-[1.02]"
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              <PackCard 
                title={pack.title}
                description={pack.description}
                image={pack.image}
                modules={pack.modules}
                linkTo={pack.linkTo}
              />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            Plus de 95% de satisfaction client
            <Star className="h-4 w-4 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PacksSection;
