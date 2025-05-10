import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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
      title: "Préparation aux entretiens",
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
      title: "Transition vers la vie active",
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
    }
  ],
  rh: [
    {
      id: 5,
      title: "Gestion des ressources humaines",
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
    },
    {
      id: 6,
      title: "Recrutement et sélection",
      description: "Optimisez votre processus de recrutement pour attirer et sélectionner les meilleurs talents.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Développer une stratégie de recrutement efficace et maîtriser les techniques d'entretien et d'évaluation",
        publicCible: "Recruteurs, responsables RH, managers impliqués dans le recrutement",
        duree: "16 heures",
        format: "Formation pratique avec simulations d'entretiens et études de cas"
      },
      packReferences: [
        {
          id: 2,
          title: "Pack RH Starter",
          linkTo: "/services/formation?tab=packs"
        }
      ]
    },
    {
      id: 7,
      title: "Évaluation des performances",
      description: "Mettez en place un système d'évaluation des performances juste et motivant pour vos équipes.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
      details: {
        objectif: "Concevoir et mettre en œuvre un processus d'évaluation des performances efficace et motivant",
        publicCible: "Responsables RH, managers d'équipe",
        duree: "12 heures",
        format: "Formation pratique avec outils et modèles adaptables à votre organisation"
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
      "Préparation aux entretiens",
      "Transition vers la vie active"
    ]
  },
  {
    id: 2,
    title: "Pack RH Starter",
    description: "Maîtrisez les fondamentaux de la gestion des ressources humaines et développez vos compétences RH.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
    modules: [
      "Gestion des ressources humaines",
      "Recrutement et sélection",
      "Évaluation des performances",
      "Bonus: Outils RH pratiques"
    ]
  }
];

const Formation = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("categories");
  
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "packs") {
      setActiveTab("packs");
    }
  }, [searchParams]);
  
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
                    <ServiceCard 
                      key={formation.id}
                      title={formation.title}
                      description={formation.description}
                      image={formation.image}
                      details={formation.details}
                      packReferences={formation.packReferences}
                    />
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
                    <ServiceCard 
                      key={formation.id}
                      title={formation.title}
                      description={formation.description}
                      image={formation.image}
                      details={formation.details}
                      packReferences={formation.packReferences}
                    />
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
