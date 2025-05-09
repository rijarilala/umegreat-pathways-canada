
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import ServiceBanner from "@/components/shared/ServiceBanner";
import SectionTitle from "@/components/shared/SectionTitle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const TestEligibility = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    education: "",
    workExperience: "",
    language: "",
    languageLevel: "",
    immigrationGoals: "",
    additionalInfo: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Formulaire envoyé avec succès",
        description: "Notre équipe analysera votre éligibilité et vous contactera dans les plus brefs délais.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        education: "",
        workExperience: "",
        language: "",
        languageLevel: "",
        immigrationGoals: "",
        additionalInfo: ""
      });
    }, 1500);
  };

  return (
    <MainLayout>
      <ServiceBanner 
        title="Test d'éligibilité" 
        description="Évaluez gratuitement vos chances d'immigrer au Canada"
        color="secondary"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <SectionTitle 
                title="Pourquoi faire le test ?" 
                subtitle="Une première étape essentielle dans votre parcours d'immigration"
              />
              
              <div className="space-y-6 text-gray-600">
                <p>
                  Notre test d'éligibilité gratuit vous permet d'obtenir une première évaluation 
                  de vos chances d'immigrer au Canada selon votre profil.
                </p>
                <div className="bg-secondary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Ce que vous obtiendrez :</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Une évaluation personnalisée de votre éligibilité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Des recommandations sur les programmes d'immigration adaptés à votre profil</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Des conseils personnalisés pour améliorer vos chances</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Un aperçu des prochaines étapes de votre parcours d'immigration</span>
                    </li>
                  </ul>
                </div>
                <p>
                  Notre équipe d'experts analysera votre profil et vous contactera pour vous présenter les résultats 
                  et discuter des options qui s'offrent à vous.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Protection de vos données :</h3>
                  <p className="text-sm">
                    Les informations que vous partagez sont confidentielles et ne seront utilisées que pour évaluer 
                    votre éligibilité et vous contacter avec les résultats de notre analyse.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Test d'éligibilité gratuit</CardTitle>
                  <CardDescription>
                    Remplissez le formulaire ci-dessous pour évaluer vos chances d'immigrer au Canada
                  </CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          placeholder="Votre prénom"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          placeholder="Votre nom"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="votre@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="Votre téléphone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Âge</Label>
                        <Input 
                          id="age" 
                          name="age" 
                          placeholder="Votre âge"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">Niveau d'études</Label>
                        <Select 
                          value={formData.education} 
                          onValueChange={(value) => handleSelectChange("education", value)}
                        >
                          <SelectTrigger id="education" name="education">
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="secondary">Secondaire</SelectItem>
                            <SelectItem value="diploma">Diplôme post-secondaire</SelectItem>
                            <SelectItem value="bachelor">Baccalauréat</SelectItem>
                            <SelectItem value="master">Maîtrise</SelectItem>
                            <SelectItem value="phd">Doctorat</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="workExperience">Expérience professionnelle</Label>
                      <Textarea 
                        id="workExperience" 
                        name="workExperience" 
                        placeholder="Décrivez brièvement votre expérience professionnelle (postes, années d'expérience, secteurs)"
                        rows={3}
                        value={formData.workExperience}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Compétences linguistiques</Label>
                        <Select 
                          value={formData.language} 
                          onValueChange={(value) => handleSelectChange("language", value)}
                        >
                          <SelectTrigger id="language" name="language">
                            <SelectValue placeholder="Sélectionnez une langue" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="english">Anglais</SelectItem>
                            <SelectItem value="french">Français</SelectItem>
                            <SelectItem value="both">Les deux</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="languageLevel">Niveau</Label>
                        <Select 
                          value={formData.languageLevel} 
                          onValueChange={(value) => handleSelectChange("languageLevel", value)}
                        >
                          <SelectTrigger id="languageLevel" name="languageLevel">
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Débutant</SelectItem>
                            <SelectItem value="intermediate">Intermédiaire</SelectItem>
                            <SelectItem value="advanced">Avancé</SelectItem>
                            <SelectItem value="fluent">Courant</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="immigrationGoals">Objectifs d'immigration</Label>
                      <Textarea 
                        id="immigrationGoals" 
                        name="immigrationGoals" 
                        placeholder="Quels sont vos objectifs en termes d'immigration au Canada ? (travail, études, regroupement familial, etc.)"
                        rows={3}
                        value={formData.immigrationGoals}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="additionalInfo">Informations supplémentaires</Label>
                      <Textarea 
                        id="additionalInfo" 
                        name="additionalInfo" 
                        placeholder="Y a-t-il d'autres informations que vous souhaitez partager ? (situation familiale, contraintes particulières, etc.)"
                        rows={3}
                        value={formData.additionalInfo}
                        onChange={handleChange}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-secondary hover:bg-secondary/90"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Évaluer mon éligibilité"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestEligibility;
