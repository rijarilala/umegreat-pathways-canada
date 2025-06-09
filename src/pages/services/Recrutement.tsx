
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Briefcase, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Recrutement = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    profession: "",
    experience: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inscription au service recrutement:", formData);
    
    toast({
      title: "Inscription enregistrée",
      description: "Merci ! Nous vous contacterons dès le lancement de notre service de recrutement.",
    });

    setFormData({
      nom: "",
      prenom: "",
      email: "",
      telephone: "",
      profession: "",
      experience: "",
      message: ""
    });
  };

  return (
    <MainLayout>
      <ServiceBanner
        title="Service de Recrutement"
        subtitle="Bientôt disponible : notre service de mise en relation entre talents et entreprises canadiennes à la recherche de compétences."
        badge="Prochainement"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Section d'introduction */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              <Users className="w-4 h-4 mr-2" />
              Bientôt disponible
            </Badge>
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Inscrivez-vous pour être informé(e)
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre service de recrutement sera bientôt disponible. Laissez-nous vos coordonnées pour être parmi les premiers à en bénéficier.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Avantages pour les candidats */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <CardTitle>Pour les candidats</CardTitle>
                </div>
                <CardDescription>
                  Accès à des offres d'emploi exclusives au Canada avec des entreprises partenaires.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Offres d'emploi exclusives auprès d'entreprises canadiennes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Accompagnement personnalisé dans votre recherche</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Mise en relation directe avec les recruteurs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-sm">Support dans les démarches d'immigration professionnelle</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg">Confidentialité garantie</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Votre vie privée est importante pour nous. Nous ne partagerons jamais vos informations avec des tiers.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire d'inscription */}
          <Card>
            <CardHeader>
              <CardTitle>Formulaire d'inscription</CardTitle>
              <CardDescription>
                Restez informé(e) du lancement de notre service.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nom">Nom *</Label>
                    <Input
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prenom">Prénom *</Label>
                    <Input
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telephone">Téléphone</Label>
                  <Input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    value={formData.telephone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession">Profession actuelle</Label>
                  <Input
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Années d'expérience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Ex: 5 ans"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Parlez-nous de vos objectifs professionnels au Canada..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full">
                  S'inscrire pour être informé(e)
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  En vous inscrivant, vous acceptez de recevoir nos communications concernant le lancement de ce service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Recrutement;
