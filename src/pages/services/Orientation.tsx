import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Orientation = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Orientation Professionnelle" 
        description="Découvrez votre voie professionnelle idéale avec nos services d'orientation personnalisés"
        backgroundImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1920"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Trouvez votre voie" 
                subtitle="Une approche personnalisée pour vous guider vers la carrière qui vous correspond"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Que vous soyez en début de carrière, en reconversion professionnelle ou à la recherche d'une 
                  évolution, notre service d'orientation professionnelle vous aide à faire les choix qui correspondent 
                  à vos aspirations, vos valeurs et vos compétences.
                </p>
                <p>
                  Notre approche combine des outils d'évaluation reconnus, l'expertise de nos conseillers et une 
                  méthode éprouvée pour vous accompagner dans la définition de votre projet professionnel.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                  alt="Orientation professionnelle" 
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
            title="Nos prestations" 
            subtitle="Des solutions adaptées à chaque étape de votre parcours professionnel"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="hover-card">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Bilan de compétences</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un bilan complet pour identifier vos compétences, vos motivations et définir un projet professionnel réaliste et réalisable.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Analyse de votre parcours
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Tests d'aptitudes et de personnalité
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Identification des compétences transférables
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Élaboration d'un plan d'action
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Conseil en évolution professionnelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un accompagnement pour vous aider à évoluer dans votre carrière et à saisir de nouvelles opportunités.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Analyse de votre situation actuelle
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Identification des opportunités d'évolution
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Stratégies de développement de carrière
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Plan d'action personnalisé
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Accompagnement à la reconversion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Un programme complet pour vous aider à vous reconvertir avec succès dans un nouveau domaine professionnel.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Exploration des métiers et secteurs
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Analyse des compétences transférables
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Identification des besoins en formation
                  </li>
                  <li className="flex items-center text-sm">
                    <div className="mr-2 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    Stratégie de transition professionnelle
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
            title="Notre approche" 
            subtitle="Une démarche en 4 étapes pour vous guider vers le succès professionnel"
            centered
          />
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Entretien d'exploration</h3>
                <p className="text-gray-600">
                  Premier rendez-vous pour comprendre votre situation, vos attentes et définir ensemble les objectifs de l'accompagnement.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Analyse approfondie</h3>
                <p className="text-gray-600">
                  Évaluation de vos compétences, votre personnalité, vos valeurs et vos aspirations à l'aide d'outils spécialisés.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Élaboration du projet</h3>
                <p className="text-gray-600">
                  Définition des pistes professionnelles, recherche d'informations et validation de la faisabilité du projet.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Plan d'action</h3>
                <p className="text-gray-600">
                  Établissement d'un plan d'action concret et d'un calendrier pour la mise en œuvre de votre projet professionnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à découvrir votre voie professionnelle ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Prenez rendez-vous pour un entretien d'exploration gratuit avec l'un de nos conseillers.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Orientation;
