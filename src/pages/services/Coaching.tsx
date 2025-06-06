
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Coaching = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Coaching" 
        description="Atteignez vos objectifs professionnels et personnels grâce à l'accompagnement de nos coachs certifiés"
        color="secondary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Révélez votre potentiel" 
                subtitle="Un accompagnement personnalisé pour vous aider à atteindre vos objectifs"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Le coaching est un processus d'accompagnement qui vise à vous aider à développer votre potentiel, 
                  à surmonter les obstacles et à atteindre vos objectifs professionnels et personnels.
                </p>
                <p>
                  Nos coachs certifiés utilisent des méthodes éprouvées pour vous aider à prendre conscience de vos ressources, 
                  à clarifier vos objectifs et à mettre en œuvre des actions concrètes pour les atteindre.
                </p>
                <p>
                  Que vous souhaitiez améliorer votre leadership, votre communication, votre gestion du stress ou 
                  votre équilibre vie professionnelle-vie personnelle, notre coaching vous offre un espace de réflexion 
                  et d'action pour progresser.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-secondary hover:bg-secondary/90" asChild>
                  <Link to="/contact">Rencontrer un coach</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Coaching professionnel" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos programmes de coaching" 
            subtitle="Des solutions adaptées à vos objectifs et à vos besoins"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="hover-card h-full">
              <CardHeader>
                <User className="h-10 w-10 text-secondary mb-4" />
                <CardTitle>Coaching de carrière</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un programme pour vous aider à définir et atteindre vos objectifs de carrière, à développer vos compétences et à progresser professionnellement.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Clarification des objectifs professionnels
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Développement de compétences clés
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Gestion de la transition professionnelle
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Stratégies d'évolution de carrière
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <User className="h-10 w-10 text-secondary mb-4" />
                <CardTitle>Préparation aux entretiens d'embauche</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un coaching spécialisé pour vous préparer efficacement aux entretiens d'embauche et mettre toutes les chances de votre côté.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Techniques d'entretien et gestion du stress
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Simulations d'entretiens personnalisées
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Développement de la confiance en soi
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Feedback personnalisé et conseils d'amélioration
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <User className="h-10 w-10 text-secondary mb-4" />
                <CardTitle>Coaching de leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un programme conçu pour développer vos compétences de leader, améliorer votre communication et inspirer vos équipes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Développement de votre style de leadership
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Communication inspirante et efficace
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Gestion d'équipe et motivation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Prise de décision et résolution de problèmes
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <User className="h-10 w-10 text-secondary mb-4" />
                <CardTitle>Coaching de développement personnel</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un programme pour vous aider à mieux vous connaître, à développer votre confiance en vous et à atteindre vos objectifs personnels.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Connaissance de soi et de ses valeurs
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Développement de la confiance en soi
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Gestion des émotions et du stress
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                    Équilibre vie professionnelle-vie personnelle
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Comment se déroule le coaching ?" 
            subtitle="Un processus structuré en 5 étapes pour maximiser votre progression"
            centered
          />
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Première rencontre</h3>
                    <p className="text-gray-600">
                      Entretien de découverte pour comprendre vos objectifs, votre situation actuelle et définir le cadre du coaching.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white z-10">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white z-10">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Définition des objectifs</h3>
                    <p className="text-gray-600">
                      Établissement d'objectifs clairs, mesurables et atteignables qui guideront le processus de coaching.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Séances de coaching</h3>
                    <p className="text-gray-600">
                      Séances régulières pour explorer vos défis, développer vos compétences et mettre en œuvre des actions concrètes.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white z-10">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white z-10">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Actions et pratique</h3>
                    <p className="text-gray-600">
                      Entre les séances, mise en œuvre des apprentissages et des actions définies pour progresser vers vos objectifs.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-secondary mb-2">Bilan et consolidation</h3>
                    <p className="text-gray-600">
                      Évaluation des progrès réalisés et définition des stratégies pour maintenir et développer les acquis.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white z-10">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre parcours de coaching ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Prenez rendez-vous pour un entretien de découverte avec l'un de nos coachs certifiés.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90" asChild>
            <Link to="/contact">Rencontrer un coach</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Coaching;
