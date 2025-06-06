import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
const Immigration = () => {
  return <MainLayout>
      <ServiceBanner title="Immigration & Accompagnement" description="Réalisez votre rêve d'immigrer au Canada avec notre expertise et notre accompagnement personnalisé" backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920" />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle title="Votre nouvelle vie au Canada" subtitle="Un accompagnement sur mesure pour concrétiser votre projet d'immigration" />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Le Canada offre de nombreuses opportunités et une qualité de vie exceptionnelle à ceux qui 
                  choisissent d'y immigrer, mais le processus peut s'avérer complexe et exigeant.
                </p>
                <p>
                  Notre équipe d'experts en immigration canadienne vous accompagne à chaque étape, de l'évaluation 
                  de votre éligibilité jusqu'à votre installation, en passant par la préparation de votre dossier 
                  et le suivi auprès des autorités.
                </p>
                <p>
                  Nous vous proposons des solutions adaptées à votre profil et à vos objectifs, pour maximiser 
                  vos chances de succès et faciliter votre transition vers votre nouvelle vie au Canada.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Nous contacter</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services/test">Test d'éligibilité gratuit</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <img src="/lovable-uploads/d8516e82-7c9c-4aee-80af-bc48fa783a4a.png" alt="Immigration au Canada" className="rounded-lg shadow-xl relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle title="Notre approche" subtitle="Un processus éprouvé pour maximiser vos chances de succès" centered />
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-primary mb-2">Évaluation initiale</h3>
                    <p className="text-gray-600">
                      Analyse complète de votre profil et de votre éligibilité pour déterminer les meilleures options d'immigration.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-primary mb-2">Stratégie personnalisée</h3>
                    <p className="text-gray-600">
                      Élaboration d'un plan d'action sur mesure, adapté à votre profil et à vos objectifs d'immigration.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-primary mb-2">Préparation du dossier</h3>
                    <p className="text-gray-600">
                      Assistance complète pour la préparation et la vérification de tous les documents requis pour votre demande.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-primary mb-2">Soumission et suivi</h3>
                    <p className="text-gray-600">
                      Dépôt de votre demande et suivi régulier auprès des autorités d'immigration pour s'assurer de son bon déroulement.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-primary mb-2">Soutien continu</h3>
                    <p className="text-gray-600">
                      Assistance tout au long du processus, y compris pour les demandes d'informations complémentaires et la préparation aux entretiens.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white z-10">
                    6
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <h3 className="text-xl font-semibold text-primary mb-2">Installation et intégration</h3>
                    <p className="text-gray-600">
                      Accompagnement pour faciliter votre installation et votre intégration au Canada une fois votre demande approuvée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre parcours vers le Canada ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Faites notre test d'éligibilité gratuit ou contactez-nous pour une évaluation personnalisée de votre situation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/services/test">Test d'éligibilité</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>;
};
export default Immigration;