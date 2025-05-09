
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SearchIcon } from "lucide-react";

const Recrutement = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Recrutement" 
        description="Trouvez les talents idéaux pour votre entreprise avec notre processus de recrutement éprouvé"
        color="primary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Votre partenaire en recrutement" 
                subtitle="Une approche personnalisée pour trouver les meilleurs talents"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Le recrutement des bonnes personnes est essentiel pour le succès de votre entreprise. Notre équipe 
                  de recrutement expérimentée vous aide à identifier, attirer et retenir les meilleurs talents adaptés 
                  à vos besoins spécifiques.
                </p>
                <p>
                  Nous prenons le temps de comprendre votre entreprise, sa culture et ses objectifs pour vous proposer 
                  des candidats qui non seulement possèdent les compétences requises, mais qui s'intégreront également 
                  parfaitement à votre équipe.
                </p>
                <p>
                  Que vous recherchiez des professionnels pour des postes permanents, temporaires ou des projets spécifiques, 
                  notre processus de recrutement éprouvé vous permettra de trouver les candidats idéaux de manière efficace.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Discuter de vos besoins</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200" 
                  alt="Recrutement professionnel" 
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
            title="Nos services de recrutement" 
            subtitle="Des solutions complètes pour tous vos besoins en ressources humaines"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Recrutement permanent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un service complet pour vous aider à trouver les meilleurs talents pour des postes permanents au sein de votre entreprise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Analyse approfondie des besoins</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Recherche ciblée de candidats</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Sélection et évaluation rigoureuses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Accompagnement jusqu'à l'intégration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Recrutement temporaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Une solution flexible pour répondre à vos besoins de personnel temporaire lors de pics d'activité, de projets spécifiques ou de remplacements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Réponse rapide aux besoins urgents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Base de données de candidats qualifiés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Gestion administrative simplifiée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Possibilité de conversion en poste permanent</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Chasse de têtes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un service spécialisé pour identifier et attirer des talents de haut niveau, des experts et des cadres dirigeants.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Approche discrète et ciblée</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Réseau étendu de professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Évaluation approfondie des compétences</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Négociation et accompagnement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Recrutement international</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accompagnement complet pour recruter des talents à l'international et faciliter leur mobilité vers le Canada.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Recherche de candidats à l'échelle mondiale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Gestion des procédures d'immigration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Aide à l'installation et à l'intégration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Support interculturel</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Assessment Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un processus d'évaluation approfondi pour identifier les meilleurs candidats et prédire leur performance future.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Tests psychométriques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Mises en situation professionnelles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Évaluation des compétences techniques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Analyse comportementale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <SearchIcon className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Conseil RH</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accompagnement personnalisé pour optimiser votre stratégie de recrutement et vos processus RH.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Audit des processus de recrutement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Définition de la stratégie d'acquisition de talents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Développement de la marque employeur</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Formation des équipes RH</span>
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
            title="Notre processus de recrutement" 
            subtitle="Une méthodologie éprouvée pour trouver les meilleurs talents"
            centered
          />
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Analyse des besoins</h3>
                <p className="text-gray-600">
                  Nous commençons par comprendre votre entreprise, sa culture, ses valeurs et les spécificités du poste à pourvoir.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Recherche de candidats</h3>
                <p className="text-gray-600">
                  Nous mettons en œuvre diverses stratégies de sourcing pour identifier les candidats correspondant à vos critères.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Présélection</h3>
                <p className="text-gray-600">
                  Nous évaluons rigoureusement les candidats pour ne vous présenter que ceux qui correspondent parfaitement au profil recherché.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Entretiens et tests</h3>
                <p className="text-gray-600">
                  Nous organisons des entretiens approfondis et des évaluations pour confirmer les compétences et l'adéquation des candidats.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Sélection finale</h3>
                <p className="text-gray-600">
                  Nous vous accompagnons dans le choix final et dans la négociation des conditions d'embauche avec le candidat sélectionné.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-xl">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Intégration</h3>
                <p className="text-gray-600">
                  Nous assurons un suivi post-recrutement pour garantir une intégration réussie et la satisfaction de toutes les parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à renforcer votre équipe ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de vos besoins en recrutement et découvrir comment nous pouvons vous aider à trouver les meilleurs talents.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">Discuter de vos besoins</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Recrutement;
