
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Etudes = () => {
  return (
    <MainLayout>
      <ServiceBanner 
        title="Études au Canada" 
        description="Concrétisez votre projet d'études dans les institutions canadiennes renommées"
        backgroundImage="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1920"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Votre avenir académique au Canada" 
                subtitle="Un accompagnement complet pour réaliser votre projet d'études"
              />
              
              <div className="space-y-4 text-gray-600">
                <p>
                  Étudier au Canada est une opportunité exceptionnelle d'accéder à une éducation de qualité reconnue 
                  mondialement, dans un environnement multiculturel et accueillant.
                </p>
                <p>
                  Notre équipe vous accompagne dans toutes les étapes de votre projet d'études, de la sélection 
                  des établissements à l'obtention de votre permis d'études, en passant par la préparation de votre dossier 
                  d'admission et la recherche de financement.
                </p>
                <p>
                  Nous vous aidons à faire les choix qui correspondent à vos aspirations académiques et 
                  professionnelles, tout en maximisant vos chances de succès dans votre parcours au Canada.
                </p>
              </div>
              
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Discuter de mon projet</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative max-w-md">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/10 rounded-full"></div>
                <img 
                  src="/lovable-uploads/0c3736b2-dd5d-4bea-b946-7ccc22f22891.png" 
                  alt="Étudiants au Canada" 
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
            title="Nos services d'accompagnement" 
            subtitle="Un soutien à chaque étape de votre projet d'études au Canada"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Orientation académique</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Analyse de votre profil académique et professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Conseils sur les programmes d'études adaptés à vos objectifs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Sélection des établissements d'enseignement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur les conditions d'admission</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Préparation du dossier</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Aide à la rédaction de la lettre de motivation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Préparation du CV académique</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Organisation des documents requis</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Traduction et légalisation des documents</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Démarches d'admission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Assistance pour les procédures de candidature</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Suivi des demandes auprès des établissements</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Communication avec les services d'admission</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Conseils pour les entretiens d'admission</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Permis d'études</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur les exigences du permis d'études</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Assistance pour la préparation de votre demande</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Conseils pour la preuve de fonds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Suivi de la demande auprès des autorités</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Bourses et financement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur les opportunités de bourses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Assistance pour les demandes de bourses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Conseils sur les options de financement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur le travail pendant les études</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover-card h-full">
              <CardHeader>
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Préparation au départ</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur le logement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Conseils pour l'adaptation culturelle</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Information sur le coût de la vie</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span className="text-gray-600">Ressources et contacts utiles au Canada</span>
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
            title="Pourquoi étudier au Canada ?" 
            subtitle="Découvrez les avantages qui font du Canada une destination d'études de premier choix"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Éducation de qualité</h3>
              <p className="text-gray-600">
                Des établissements reconnus mondialement pour leur excellence académique et leurs infrastructures modernes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Environnement multiculturel</h3>
              <p className="text-gray-600">
                Une société diverse et accueillante, idéale pour vivre une expérience internationale enrichissante.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Opportunités professionnelles</h3>
              <p className="text-gray-600">
                Possibilité de travailler pendant et après vos études, avec des voies vers l'immigration permanente.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Qualité de vie</h3>
              <p className="text-gray-600">
                Un des pays les plus sûrs au monde, avec un excellent système de santé et une nature exceptionnelle.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coût accessible</h3>
              <p className="text-gray-600">
                Des frais de scolarité plus abordables que dans d'autres pays anglophones comme les États-Unis ou le Royaume-Uni.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bilinguisme</h3>
              <p className="text-gray-600">
                Opportunité d'étudier en anglais ou en français, et d'améliorer vos compétences dans les deux langues.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Prêt à commencer votre aventure académique au Canada ?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Contactez-nous pour discuter de votre projet et bénéficier de notre expertise dans les démarches d'admission.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
            <Link to="/contact">Discuter de mon projet</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Etudes;
