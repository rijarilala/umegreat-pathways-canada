
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
    age: "",
    education: "",
    experience: "",
    language: "",
    languageLevel: "",
    goals: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [eligibilityResult, setEligibilityResult] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const determineEligibility = () => {
    // Très simple logique d'évaluation basée sur l'âge, l'éducation et l'expérience
    const { age, education, experience, languageLevel } = formData;
    const ageNum = parseInt(age);
    
    if ((ageNum >= 21 && ageNum <= 45) && 
        (education === "bachelor" || education === "master" || education === "phd") && 
        (experience === "three_to_five" || experience === "more_than_five") &&
        (languageLevel === "intermediate" || languageLevel === "advanced" || languageLevel === "fluent")) {
      return "positive";
    } else if ((ageNum >= 18 && ageNum <= 50) && 
              (education !== "none") && 
              (experience !== "none")) {
      return "neutral";
    } else {
      return "negative";
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler un traitement
    setTimeout(() => {
      const result = determineEligibility();
      
      let resultMessage = "";
      if (result === "positive") {
        resultMessage = "Selon les informations fournies, votre profil semble prometteur pour une potentielle immigration au Canada. Nous vous recommandons de prendre rendez-vous avec l'un de nos conseillers pour une évaluation complète et personnalisée.";
      } else if (result === "neutral") {
        resultMessage = "Votre profil présente des aspects intéressants, mais une évaluation plus approfondie est nécessaire pour déterminer les meilleures options pour votre situation. Nous vous invitons à contacter un de nos conseillers pour discuter de votre cas en détail.";
      } else {
        resultMessage = "Votre profil actuel pourrait présenter certains défis pour l'immigration immédiate. Nous vous recommandons de consulter un de nos experts pour explorer d'autres options ou des stratégies pour renforcer votre candidature.";
      }
      
      setEligibilityResult(resultMessage);
      setShowResults(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      age: "",
      education: "",
      experience: "",
      language: "",
      languageLevel: "",
      goals: ""
    });
    setShowResults(false);
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
                      <span>Une évaluation préliminaire de votre éligibilité</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Une première indication de vos chances d'immigration</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Des conseils personnalisés pour améliorer votre profil</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                      <span>Une idée des prochaines étapes à suivre</span>
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
              <Card className="overflow-hidden">
                {!showResults ? (
                  <>
                    <CardHeader>
                      <CardTitle>Test d'éligibilité gratuit</CardTitle>
                      <CardDescription>
                        Répondez à ces quelques questions pour évaluer votre potentiel d'immigration
                      </CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit}>
                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="age">Quel est votre âge ?</Label>
                          <Input 
                            id="age" 
                            name="age" 
                            type="number"
                            placeholder="Entrez votre âge"
                            value={formData.age}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="education">Quel est votre niveau d'éducation le plus élevé ?</Label>
                          <Select 
                            value={formData.education} 
                            onValueChange={(value) => handleSelectChange("education", value)}
                            required
                          >
                            <SelectTrigger id="education" name="education">
                              <SelectValue placeholder="Sélectionnez votre niveau" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Aucun diplôme formel</SelectItem>
                              <SelectItem value="secondary">Diplôme secondaire</SelectItem>
                              <SelectItem value="diploma">Diplôme post-secondaire</SelectItem>
                              <SelectItem value="bachelor">Baccalauréat</SelectItem>
                              <SelectItem value="master">Maîtrise</SelectItem>
                              <SelectItem value="phd">Doctorat</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="experience">Combien d'années d'expérience professionnelle possédez-vous ?</Label>
                          <Select 
                            value={formData.experience} 
                            onValueChange={(value) => handleSelectChange("experience", value)}
                            required
                          >
                            <SelectTrigger id="experience" name="experience">
                              <SelectValue placeholder="Sélectionnez votre expérience" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">Aucune expérience</SelectItem>
                              <SelectItem value="less_than_one">Moins d'un an</SelectItem>
                              <SelectItem value="one_to_three">1 à 3 ans</SelectItem>
                              <SelectItem value="three_to_five">3 à 5 ans</SelectItem>
                              <SelectItem value="more_than_five">Plus de 5 ans</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="language">Quelle langue maîtrisez-vous le mieux ?</Label>
                            <Select 
                              value={formData.language} 
                              onValueChange={(value) => handleSelectChange("language", value)}
                              required
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
                            <Label htmlFor="languageLevel">Quel est votre niveau ?</Label>
                            <Select 
                              value={formData.languageLevel} 
                              onValueChange={(value) => handleSelectChange("languageLevel", value)}
                              required
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
                          <Label htmlFor="goals">Quels sont vos objectifs en venant au Canada ?</Label>
                          <Textarea 
                            id="goals" 
                            name="goals" 
                            placeholder="Décrivez brièvement pourquoi vous souhaitez venir au Canada (travail, études, famille, etc.)"
                            rows={3}
                            value={formData.goals}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          type="submit" 
                          disabled={isSubmitting} 
                          className="w-full bg-secondary hover:bg-secondary/90"
                        >
                          {isSubmitting ? "Analyse en cours..." : "Évaluer mon éligibilité"}
                        </Button>
                      </CardFooter>
                    </form>
                  </>
                ) : (
                  <>
                    <CardHeader>
                      <CardTitle className="text-center">Résultat de votre évaluation</CardTitle>
                      <div className="flex justify-center my-6">
                        <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-secondary/10 p-4 rounded-lg">
                        <p className="text-gray-800">{eligibilityResult}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-3">Prochaines étapes suggérées :</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                            <span>Prenez rendez-vous avec l'un de nos conseillers en immigration pour une évaluation complète</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                            <span>Rassemblez vos documents essentiels (diplômes, certificats de langue, expérience de travail)</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-3 mt-1 h-1.5 w-1.5 rounded-full bg-secondary"></div>
                            <span>Explorez nos ressources gratuites pour vous préparer à votre projet d'immigration</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-4">
                        <Button 
                          onClick={resetForm}
                          variant="outline" 
                          className="w-full"
                        >
                          Recommencer le test
                        </Button>
                        <Button 
                          className="w-full bg-secondary hover:bg-secondary/90" 
                          asChild
                        >
                          <a href="/contact">Contacter un conseiller</a>
                        </Button>
                      </div>
                    </CardFooter>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default TestEligibility;
