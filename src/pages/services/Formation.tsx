import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import ServiceCard from "@/components/shared/ServiceCard";
import PackCard from "@/components/shared/PackCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, PenTool, Users, Building, GraduationCap, Briefcase } from "lucide-react";
const formations = {
  insertion: [{
    id: 1,
    title: "CV impactant",
    description: "Apprenez à créer un CV qui attire l'attention des recruteurs et met en valeur votre profil professionnel.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=1200",
    icon: "file-text",
    details: {
      objectif: "Maîtriser les techniques de rédaction d'un CV efficace et adapté à votre secteur d'activité",
      publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
      duree: "4 heures",
      format: "Atelier interactif en groupe restreint ou coaching individuel"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }, {
    id: 2,
    title: "Lettre de motivation convaincante",
    description: "Rédigez des lettres de motivation personnalisées et convaincantes qui complètent parfaitement votre CV.",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?auto=format&fit=crop&q=80&w=1200",
    icon: "pen-tool",
    details: {
      objectif: "Apprendre à structurer et rédiger des lettres de motivation percutantes et personnalisées",
      publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
      duree: "4 heures",
      format: "Atelier interactif en groupe restreint ou coaching individuel"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }, {
    id: 3,
    title: "Préparation aux entretiens d'embauche",
    description: "Préparez-vous efficacement aux entretiens d'embauche pour mettre toutes les chances de votre côté.",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=1200",
    icon: "users",
    details: {
      objectif: "Maîtriser les techniques d'entretien et développer votre confiance pour réussir vos entretiens d'embauche",
      publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
      duree: "8 heures",
      format: "Atelier pratique avec simulations d'entretiens et feedback personnalisé"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }, {
    id: 4,
    title: "Recherche du premier ou nouveau emploi",
    description: "Développez une stratégie efficace pour trouver votre premier emploi ou changer de poste.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    icon: "briefcase",
    details: {
      objectif: "Acquérir les techniques et outils nécessaires pour mener une recherche d'emploi structurée et efficace",
      publicCible: "Jeunes diplômés, demandeurs d'emploi, personnes en reconversion",
      duree: "6 heures",
      format: "Ateliers pratiques et coaching individuel"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }, {
    id: 5,
    title: "Transition vers la vie active professionnelle",
    description: "Facilitez votre passage des études au monde professionnel avec notre programme de transition.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    icon: "graduation-cap",
    details: {
      objectif: "Acquérir les compétences et les réflexes professionnels nécessaires pour s'intégrer rapidement en entreprise",
      publicCible: "Jeunes diplômés, étudiants en fin de cursus",
      duree: "12 heures",
      format: "Formation en groupe avec exercices pratiques et mises en situation"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }, {
    id: 6,
    title: "Création et optimisation de compte LinkedIn",
    description: "Apprenez à créer un profil LinkedIn attractif pour maximiser votre visibilité professionnelle.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=1200",
    icon: "linkedin",
    details: {
      objectif: "Maîtriser les techniques pour créer un profil LinkedIn efficace et étendre son réseau professionnel",
      publicCible: "Professionnels de tous niveaux, demandeurs d'emploi, entrepreneurs",
      duree: "4 heures",
      format: "Atelier pratique avec mise en application directe"
    },
    packReferences: [{
      id: 1,
      title: "Pack Insertion Pro",
      linkTo: "/services/formation?tab=packs"
    }]
  }],
  rh: [{
    id: 7,
    title: "Gestion des Ressources Humaines",
    description: "Acquérez les fondamentaux de la GRH pour gérer efficacement le capital humain de votre entreprise.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    icon: "building",
    details: {
      objectif: "Maîtriser les bases de la gestion des ressources humaines et les outils essentiels du métier",
      publicCible: "Responsables RH débutants, managers, entrepreneurs",
      duree: "20 heures",
      format: "Formation théorique et pratique avec études de cas réels"
    },
    packReferences: [{
      id: 2,
      title: "Pack RH Starter",
      linkTo: "/services/formation?tab=packs"
    }]
  }]
};
const packs = [{
  id: 1,
  title: "Pack Insertion Pro",
  description: "Tout ce qu'il vous faut pour réussir votre insertion professionnelle et décrocher l'emploi de vos rêves.",
  image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
  modules: ["CV impactant", "Lettre de motivation convaincante", "Préparation aux entretiens d'embauche", "Recherche du premier ou nouveau emploi", "Transition vers la vie active professionnelle", "Création et optimisation de compte LinkedIn"],
  linkTo: "/contact"
}, {
  id: 2,
  title: "Pack RH Starter",
  description: "Maîtrisez les fondamentaux de la gestion des ressources humaines et développez vos compétences RH.",
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
  modules: ["Fondamentaux de la GRH", "Stratégies RH", "Mise en œuvre des politiques RH", "Assimilation pratique", "Outils RH modernes"],
  linkTo: "/contact"
}];

// Map of icon names to components for formations
const FormationIcon = ({
  iconName,
  className = "h-6 w-6"
}: {
  iconName: string;
  className?: string;
}) => {
  switch (iconName) {
    case 'file-text':
      return <FileText className={className} />;
    case 'pen-tool':
      return <PenTool className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'briefcase':
      return <Briefcase className={className} />;
    case 'graduation-cap':
      return <GraduationCap className={className} />;
    case 'building':
      return <Building className={className} />;
    case 'linkedin':
      return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>;
    default:
      return null;
  }
};
const Formation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("categories");
  const location = useLocation();
  const [modalFormationId, setModalFormationId] = useState<number | null>(null);
  useEffect(() => {
    // Handle tab parameter
    const tabParam = searchParams.get("tab");
    if (tabParam === "packs") {
      setActiveTab("packs");
    }

    // Handle modal parameter (from search results)
    const modalParam = searchParams.get("modal");
    if (modalParam) {
      const formationId = parseInt(modalParam);
      if (!isNaN(formationId)) {
        setModalFormationId(formationId);

        // Ensure we're on the categories tab
        if (activeTab !== "categories") {
          setActiveTab("categories");
        }

        // Find the formation element and trigger its modal
        setTimeout(() => {
          const formationElement = document.getElementById(`formation-${formationId}`);
          if (formationElement) {
            // Scroll to the formation
            formationElement.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });

            // Highlight temporarily
            formationElement.classList.add('bg-primary-50', 'transition-colors', 'duration-500');
            setTimeout(() => {
              formationElement.classList.remove('bg-primary-50');
            }, 2000);

            // Find and click the details button to open the modal
            const detailsButton = formationElement.querySelector('.service-details-button') as HTMLButtonElement;
            if (detailsButton) {
              detailsButton.click();
            }

            // Clean up the URL by removing the modal parameter
            const newParams = new URLSearchParams(searchParams);
            newParams.delete('modal');
            setSearchParams(newParams);
          }
        }, 300);
      }
    }
  }, [searchParams, activeTab, setSearchParams]);

  // Effet pour gérer le hash dans l'URL
  useEffect(() => {
    const hash = location.hash;

    // Si un hash correspondant à une formation est présent
    if (hash && hash.startsWith('#formation-')) {
      const formationId = hash.replace('#formation-', '');

      // S'assurer qu'on est sur l'onglet catégories
      if (activeTab !== "categories") {
        setActiveTab("categories");
        setSearchParams({});
      }

      // Trouver et scroller vers la formation correspondante après un court délai
      setTimeout(() => {
        const formationElement = document.getElementById(`formation-${formationId}`);
        if (formationElement) {
          formationElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Ajouter temporairement un effet de surbrillance
          formationElement.classList.add('bg-primary-50', 'transition-all', 'duration-500');

          // Retirer l'effet après un moment
          setTimeout(() => {
            formationElement.classList.remove('bg-primary-50');
          }, 2000);
        }
      }, 300);
    }
  }, [location.hash, activeTab, setSearchParams]);
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchParams(value === "packs" ? {
      tab: "packs"
    } : {});
  };
  return <MainLayout>
      <ServiceBanner title="Formation" description="Développez vos compétences avec nos formations adaptées aux besoins du marché de l'emploi" color="primary" />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <div className="flex justify-center mb-10">
              <TabsList className="grid grid-cols-2 w-full max-w-md">
                <TabsTrigger value="categories" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Formations par catégorie
                </TabsTrigger>
                <TabsTrigger value="packs" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Packs de formations
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="categories" className="space-y-16">
              {/* Catégorie Insertion professionnelle avec bordure et fond améliorés */}
              <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-100">
                <SectionTitle title={<h2 className="text-2xl font-bold text-orange-500 flex items-center gap-2 text-center px-[235px]">
                      <GraduationCap className="h-7 w-7" />
                      Insertion professionnelle
                    </h2>} subtitle="Des formations pour vous aider à intégrer le marché du travail avec succès" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {formations.insertion.map(formation => <div id={`formation-${formation.id}`} key={formation.id} className="transition-colors duration-300">
                      <div className="relative">
                        {/* Icon overlay */}
                        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                          <FormationIcon iconName={formation.icon} className="h-6 w-6 text-blue-600" />
                        </div>
                        
                        <ServiceCard title={formation.title} description={formation.description} image={formation.image} details={formation.details} packReferences={formation.packReferences} />
                      </div>
                    </div>)}
                </div>
              </div>
              
              {/* Catégorie RH avec bordure et fond améliorés */}
              <div className="bg-green-50/50 p-8 rounded-xl border border-green-100">
                <SectionTitle title={<h2 className="text-2xl font-bold text-orange-500 flex items-center gap-2">
                      <Briefcase className="h-7 w-7" />
                      Compétences RH
                    </h2>} subtitle="Développez vos compétences en gestion des ressources humaines" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                  {formations.rh.map(formation => <div id={`formation-${formation.id}`} key={formation.id} className="transition-colors duration-300">
                      <div className="relative">
                        {/* Icon overlay */}
                        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                          <FormationIcon iconName={formation.icon} className="h-6 w-6 text-green-600" />
                        </div>
                        
                        <ServiceCard key={formation.id} title={formation.title} description={formation.description} image={formation.image} details={formation.details} packReferences={formation.packReferences} />
                      </div>
                    </div>)}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="packs">
              <SectionTitle title="Packs de formation" subtitle="Des programmes complets pour atteindre vos objectifs professionnels" centered />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
                {packs.map(pack => <PackCard key={pack.id} title={pack.title} description={pack.description} image={pack.image} modules={pack.modules} linkTo={pack.linkTo} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>;
};
export default Formation;