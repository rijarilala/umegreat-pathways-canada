import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Briefcase, Users, Shield, MessageSquare, Facebook, Linkedin } from "lucide-react";

const Immigration = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Osez le changement, réalisez votre rêve canadien !" 
        description="Votre nouvelle vie au Canada commence ici, avec notre accompagnement personnalisé et notre expertise reconnue"
        backgroundImage="https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&q=80&w=1920"
      />
      
      {/* Introduction chaleureuse */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Le Canada vous attend" 
                subtitle="Une terre d'opportunités illimitées pour votre famille et votre carrière"
              />
              
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Le Canada n'est pas seulement un pays, c'est un nouveau chapitre de votre vie. 
                  Avec ses paysages à couper le souffle, sa diversité culturelle enrichissante et ses opportunités professionnelles exceptionnelles, 
                  le Canada offre à votre famille un cadre de vie incomparable.
                </p>
                <p>
                  Notre équipe d'experts en immigration vous accompagne personnellement à chaque étape de votre parcours. 
                  De l'évaluation de votre projet jusqu'à votre installation réussie, nous sommes là pour transformer votre rêve en réalité.
                </p>
                <p>
                  <strong>Ensemble, construisons votre nouvelle vie au Canada.</strong>
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="#accompagnement">Découvrez notre accompagnement</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services/test">Testez votre éligibilité gratuitement</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?auto=format&fit=crop&q=80&w=1200" 
                  alt="Famille multiculturelle découvrant le Canada" 
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Accompagnement personnalisé */}
      <section id="accompagnement" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Accompagnement personnalisé" 
            subtitle="Un processus en 4 étapes pour maximiser vos chances de succès"
            centered
          />
          
          <div className="mt-10 max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-3">Évaluation de votre projet</h3>
                      <p className="text-gray-600">
                        Analyse complète de votre profil, vos objectifs et vos motivations. 
                        Nous déterminons ensemble les meilleures options d'immigration qui correspondent à votre situation.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold z-10 shadow-lg">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold z-10 shadow-lg">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-3">Conseils et stratégie</h3>
                      <p className="text-gray-600">
                        Élaboration d'un plan d'action personnalisé avec des conseils d'experts. 
                        Nous vous guidons dans chaque décision pour optimiser votre dossier.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-3">Suivi et soutien</h3>
                      <p className="text-gray-600">
                        Accompagnement continu tout au long du processus. 
                        Nous restons à vos côtés pour répondre à vos questions et ajuster la stratégie si nécessaire.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold z-10 shadow-lg">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                  </div>
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold z-10 shadow-lg">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 mt-4 md:mt-0">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold text-primary mb-3">Installation et intégration</h3>
                      <p className="text-gray-600">
                        Soutien pratique pour votre arrivée au Canada : logement, démarches administratives, 
                        intégration sociale et professionnelle. Votre réussite est notre priorité.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact">Contactez un expert</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Notre équipe */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Équipe de consultants en immigration"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <SectionTitle 
                title="Notre équipe d'experts" 
                subtitle="Des professionnels passionnés à votre service"
              />
              <div className="space-y-4 text-gray-600">
                <p>
                  Notre équipe multidisciplinaire réunit des consultants certifiés en immigration, 
                  des conseillers en intégration et des spécialistes du marché du travail canadien.
                </p>
                <p>
                  Avec plus de 10 ans d'expérience, nous avons accompagné des centaines de familles 
                  dans leur projet d'immigration. Notre approche humaine et personnalisée fait toute la différence.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold">500+ familles accompagnées</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    <span className="font-semibold">95% de taux de réussite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Ils ont réalisé leur rêve canadien" 
            subtitle="Découvrez les témoignages de nos clients"
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-10">
            <TestimonialCard
              name="Sarah Dubois"
              title="Ingénieure, installée à Toronto"
              content="Grâce à l'accompagnement exceptionnel de l'équipe, notre installation au Canada s'est déroulée sans encombre. Ils ont été présents à chaque étape et nous ont donné confiance dans notre projet. Aujourd'hui, nous vivons notre rêve canadien en famille !"
              image="https://images.unsplash.com/photo-1494790108755-2616b612b602?auto=format&fit=crop&q=80&w=400"
            />
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Questions fréquentes" 
            subtitle="Trouvez rapidement les réponses à vos interrogations"
            centered
          />
          
          <div className="max-w-3xl mx-auto mt-10">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Combien de temps dure le processus d'immigration ?</AccordionTrigger>
                <AccordionContent>
                  La durée varie selon le programme choisi, généralement entre 12 et 24 mois. 
                  Nous vous accompagnons pour optimiser les délais et préparer un dossier complet dès le départ.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Quels documents sont nécessaires ?</AccordionTrigger>
                <AccordionContent>
                  Les documents varient selon votre situation : diplômes, certificats de travail, tests de langue, 
                  certificats médicaux, extraits de casier judiciaire. Nous vous fournissons une liste personnalisée 
                  et vous accompagnons dans la préparation de chaque document.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Comment savoir si je suis éligible ?</AccordionTrigger>
                <AccordionContent>
                  Nous proposons une évaluation gratuite de votre éligibilité. Cette analyse prend en compte 
                  votre âge, formation, expérience professionnelle, niveau de langue et situation familiale. 
                  Contactez-nous pour un bilan personnalisé.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Quels sont vos tarifs ?</AccordionTrigger>
                <AccordionContent>
                  Nos tarifs dépendent du type d'accompagnement choisi. Nous proposons des forfaits transparents 
                  adaptés à chaque situation. Contactez-nous pour un devis personnalisé gratuit et sans engagement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter et réseaux sociaux */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Restez informé</h3>
              <p className="text-gray-600 mb-6">
                Recevez nos conseils d'experts et les dernières actualités sur l'immigration canadienne.
              </p>
              <div className="flex gap-3">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="flex-1"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  S'inscrire
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Nous respectons votre confidentialité. Pas de spam, désinscription facile.
              </p>
            </div>
            
            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Suivez-nous</h3>
              <p className="text-gray-600 mb-6">
                Rejoignez notre communauté et partagez votre expérience avec d'autres futurs immigrants.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="#" className="flex items-center gap-2">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
              <div className="mt-4">
                <Button variant="outline" asChild>
                  <Link to="#">Consultez nos avis Google</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services d'immigration existants */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nos services d'immigration" 
            subtitle="Des solutions complètes pour tous vos besoins"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Résidence permanente</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accompagnement complet pour obtenir votre résidence permanente au Canada, à travers les programmes d'immigration économique, familiale ou humanitaire.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Entrée express et programmes provinciaux</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Programme des travailleurs qualifiés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Parrainage familial</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Programme des entrepreneurs et investisseurs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Visa de travail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un soutien pour obtenir votre permis de travail temporaire au Canada, que ce soit dans le cadre d'une mutation, d'une offre d'emploi ou d'un programme spécifique.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Permis de travail avec EIMT</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Mobilité internationale</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Permis de travail post-diplôme</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Visa pour conjoints et personnes à charge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Immigration d'affaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accompagnement spécialisé pour les entrepreneurs, investisseurs et travailleurs autonomes souhaitant s'établir au Canada.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Programme des entrepreneurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Programme des investisseurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Démarrage d'entreprise au Canada</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Visa de travailleur autonome</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Accompagnement à l'installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un soutien pratique pour faciliter votre intégration et votre installation au Canada.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Recherche de logement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Intégration sociale et culturelle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Scolarisation des enfants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Démarches administratives locales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Réunification familiale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un accompagnement pour réunir votre famille au Canada, que vous soyez citoyen canadien, résident permanent ou titulaire d'un permis de travail.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Parrainage de conjoint, partenaire et enfants</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Parrainage de parents et grands-parents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Visa de visiteur pour la famille</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Super visa pour parents et grands-parents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Citoyenneté canadienne</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Un soutien pour votre demande de citoyenneté canadienne, l'étape ultime de votre parcours d'immigration.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Évaluation de l'éligibilité</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Préparation du dossier</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Préparation au test de citoyenneté</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Suivi de la demande</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Engagement de confidentialité et CTA final */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Engagement de confidentialité</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Vos données personnelles sont protégées selon les plus hauts standards de sécurité. 
              Nous nous engageons à respecter votre vie privée et à utiliser vos informations uniquement 
              dans le cadre de votre projet d'immigration.
            </p>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre parcours vers le Canada ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Nos experts sont là pour vous accompagner personnellement. 
            Faites le premier pas vers votre nouvelle vie canadienne.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/services/test">Testez votre éligibilité gratuitement</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Discutez en direct avec un expert</Link>
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Immigration;
