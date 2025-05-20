
import { useState, useEffect } from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import ServiceCard from "@/components/shared/ServiceCard";
import PackCard from "@/components/shared/PackCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formations = {
  insertion: [
    {
      id: 1,
      title: "CV percutant",
      description: "Apprenez à créer un CV qui attire l'attention des recruteurs et met en valeur votre profil professionnel.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Maîtriser les techniques de rédaction d'un CV efficace et adapté à votre secteur d'activité",
        publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
        duree: "4 heures",
        format: "Atelier interactif en groupe restreint ou coaching individuel"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 2,
      title: "Lettre de motivation efficace",
      description: "Rédigez des lettres de motivation personnalisées et convaincantes qui complètent parfaitement votre CV.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Apprendre à structurer et rédiger des lettres de motivation percutantes et personnalisées",
        publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
        duree: "4 heures",
        format: "Atelier interactif en groupe restreint ou coaching individuel"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 3,
      title: "Préparation aux entretiens d'embauche",
      description: "Préparez-vous efficacement aux entretiens d'embauche pour mettre toutes les chances de votre côté.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Maîtriser les techniques d'entretien et développer votre confiance pour réussir vos entretiens d'embauche",
        publicCible: "Demandeurs d'emploi, personnes en reconversion professionnelle, jeunes diplômés",
        duree: "8 heures",
        format: "Atelier pratique avec simulations d'entretiens et feedback personnalisé"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 4,
      title: "Recherche du premier ou nouveau emploi",
      description: "Développez une stratégie efficace pour trouver votre premier emploi ou changer de poste.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Acquérir les techniques et outils nécessaires pour mener une recherche d'emploi structurée et efficace",
        publicCible: "Jeunes diplômés, demandeurs d'emploi, personnes en reconversion",
        duree: "6 heures",
        format: "Ateliers pratiques et coaching individuel"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 5,
      title: "Transition vers la vie active professionnelle",
      description: "Facilitez votre passage des études au monde professionnel avec notre programme de transition.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Acquérir les compétences et les réflexes professionnels nécessaires pour s'intégrer rapidement en entreprise",
        publicCible: "Jeunes diplômés, étudiants en fin de cursus",
        duree: "12 heures",
        format: "Formation en groupe avec exercices pratiques et mises en situation"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 6,
      title: "Création et optimisation de compte LinkedIn",
      description: "Apprenez à créer un profil LinkedIn attractif pour maximiser votre visibilité professionnelle.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Maîtriser les techniques pour créer un profil LinkedIn efficace et étendre son réseau professionnel",
        publicCible: "Professionnels de tous niveaux, demandeurs d'emploi, entrepreneurs",
        duree: "4 heures",
        format: "Atelier pratique avec mise en application directe"
      },
      packReferences: [
        {
          id: 1,
          title: "Pack Insertion Pro",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    }
  ],
  rh: [
    {
      id: 7,
      title: "Gestion des Ressources Humaines",
      description: "Acquérez les fondamentaux de la GRH pour gérer efficacement le capital humain de votre entreprise.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Maîtriser les bases de la gestion des ressources humaines et les outils essentiels du métier",
        publicCible: "Responsables RH débutants, managers, entrepreneurs",
        duree: "20 heures",
        format: "Formation théorique et pratique avec études de cas réels"
      },
      packReferences: [
        {
          id: 2,
          title: "Pack RH Starter",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    }
  ]
};

const packs = [
  {
    id: 1,
    title: "Pack Insertion Pro",
    description: "Tout ce qu'il vous faut pour réussir votre insertion professionnelle et décrocher l'emploi de vos rêves.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "CV percutant",
      "Lettre de motivation efficace",
      "Préparation aux entretiens d'embauche",
      "Recherche du premier ou nouveau emploi",
      "Transition vers la vie active professionnelle",
      "Création et optimisation de compte LinkedIn"
    ],
    linkTo: "/contact"
  },
  {
    id: 2,
    title: "Pack RH Starter",
    description: "Maîtrisez les fondamentaux de la gestion des ressources humaines et développez vos compétences RH.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "Fondamentaux de la GRH",
      "Stratégies RH",
      "Mise en œuvre des politiques RH",
      "Assimilation pratique",
      "Outils RH modernes"
    ],
    linkTo: "/contact"
  }
];

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
            formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
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
          formationElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
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
    setSearchParams(value === "packs" ? { tab: "packs" } : {});
  };

  return (
    <MainLayout>
      <ServiceBanner 
        title="Formation" 
        description="Développez vos compétences avec nos formations adaptées aux besoins du marché de l'emploi"
        color="primary"
      />
      
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
              <div>
                <SectionTitle 
                  title="Insertion professionnelle" 
                  subtitle="Des formations pour vous aider à intégrer le marché du travail avec succès"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formations.insertion.map((formation) => (
                    <div id={`formation-${formation.id}`} key={formation.id} className="transition-colors duration-300">
                      <ServiceCard 
                        title={formation.title}
                        description={formation.description}
                        image={formation.image}
                        details={formation.details}
                        packReferences={formation.packReferences}
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <SectionTitle 
                  title="Compétences RH" 
                  subtitle="Développez vos compétences en gestion des ressources humaines"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {formations.rh.map((formation) => (
                    <div id={`formation-${formation.id}`} key={formation.id} className="transition-colors duration-300">
                      <ServiceCard 
                        key={formation.id}
                        title={formation.title}
                        description={formation.description}
                        image={formation.image}
                        details={formation.details}
                        packReferences={formation.packReferences}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="packs">
              <SectionTitle 
                title="Packs de formation" 
                subtitle="Des programmes complets pour atteindre vos objectifs professionnels"
                centered
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-5xl mx-auto">
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
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </MainLayout>
  );
};

export default Formation;
