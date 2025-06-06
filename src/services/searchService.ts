
import type { SearchResult } from "@/contexts/SearchContext";

// Données des services et formations pour la recherche
const searchDatabase: SearchResult[] = [
  // Services
  {
    id: "orientation",
    title: "Orientation Professionnelle",
    category: "service",
    description: "Trouvez votre voie professionnelle avec notre accompagnement personnalisé",
    url: "/services/orientation"
  },
  {
    id: "formation",
    title: "Formation",
    category: "service",
    description: "Développez vos compétences professionnelles avec nos formations spécialisées",
    url: "/services/formation"
  },
  {
    id: "coaching",
    title: "Coaching",
    category: "service",
    description: "Atteignez vos objectifs avec l'accompagnement de nos coachs certifiés",
    url: "/services/coaching"
  },
  {
    id: "etudes",
    title: "Études au Canada",
    category: "service",
    description: "Réalisez votre projet d'études dans les meilleures institutions canadiennes",
    url: "/services/etudes"
  },
  {
    id: "immigration",
    title: "Immigration & Accompagnement",
    category: "service",
    description: "Concrétisez votre rêve canadien avec notre expertise en immigration",
    url: "/services/immigration"
  },
  {
    id: "test",
    title: "Test d'éligibilité",
    category: "service",
    description: "Évaluez gratuitement vos chances d'immigrer au Canada",
    url: "/services/test"
  },
  {
    id: "recrutement",
    title: "Recrutement",
    category: "service",
    description: "Trouvez les talents idéaux avec notre processus de recrutement éprouvé",
    url: "/services/recrutement"
  },
  
  // Formations - Updated to remove "Préparation aux entretiens"
  {
    id: "1",
    title: "CV impactant",
    category: "formation",
    description: "Apprenez à créer un CV qui attire l'attention des recruteurs",
    url: "/services/formation",
    formationId: 1
  },
  {
    id: "2",
    title: "Lettres de motivation",
    category: "formation",
    description: "Maîtrisez l'art d'écrire des lettres de motivation convaincantes",
    url: "/services/formation",
    formationId: 2
  },
  {
    id: "4",
    title: "Recherche d'emploi",
    category: "formation",
    description: "Stratégies pour trouver votre premier emploi ou changer de poste",
    url: "/services/formation",
    formationId: 4
  },
  {
    id: "5",
    title: "Transition professionnelle",
    category: "formation",
    description: "Facilitez votre passage des études au monde professionnel",
    url: "/services/formation",
    formationId: 5
  },
  {
    id: "6",
    title: "LinkedIn Pro",
    category: "formation",
    description: "Optimisez votre profil LinkedIn pour maximiser votre visibilité professionnelle",
    url: "/services/formation",
    formationId: 6
  },
  {
    id: "7",
    title: "Gestion des Ressources Humaines",
    category: "formation",
    description: "Acquérez les fondamentaux de la GRH pour votre entreprise",
    url: "/services/formation",
    formationId: 7
  },

  // Packs - Added the new pack
  {
    id: "pack-insertion-pro",
    title: "Pack Insertion Pro",
    category: "pack",
    description: "Tout ce qu'il vous faut pour réussir votre insertion professionnelle",
    url: "/services/formation?tab=packs"
  },
  {
    id: "pack-rh-starter",
    title: "Pack RH Starter",
    category: "pack",
    description: "Maîtrisez les fondamentaux de la gestion des ressources humaines",
    url: "/services/formation?tab=packs"
  },
  {
    id: "pack-entretien-reussite",
    title: "Pack Entretien Réussite",
    category: "pack",
    description: "Préparez-vous efficacement à vos entretiens d'embauche avec les outils essentiels",
    url: "/services/formation?tab=packs"
  },

  // Coaching - Add "Préparation aux entretiens" here
  {
    id: "entretiens-coaching",
    title: "Préparation aux entretiens d'embauche",
    category: "service",
    description: "Coaching spécialisé pour réussir vos entretiens d'embauche avec confiance",
    url: "/services/coaching"
  },
  
  // Pages
  {
    id: "accueil",
    title: "Accueil",
    category: "page",
    description: "Page d'accueil du site UMEGREAT Pro",
    url: "/"
  },
  {
    id: "a-propos",
    title: "À propos de nous",
    category: "page",
    description: "Découvrez notre histoire et notre mission",
    url: "/about"
  },
  {
    id: "contact",
    title: "Contact",
    category: "page",
    description: "Prenez contact avec notre équipe",
    url: "/contact"
  },
  {
    id: "temoignages",
    title: "Témoignages",
    category: "page",
    description: "Découvrez les retours de nos clients satisfaits",
    url: "/testimonials"
  },

  // FAQ - Updated with category and question index
  {
    id: "faq-orientation",
    title: "Comment choisir ma voie professionnelle ?",
    category: "faq",
    description: "Conseils pour trouver votre orientation idéale",
    url: "/faq",
    faqCategory: "orientation",
    questionIndex: 0
  },
  {
    id: "faq-canada",
    title: "Quelles sont les conditions d'immigration au Canada ?",
    category: "faq",
    description: "Informations sur le processus d'immigration canadien",
    url: "/faq",
    faqCategory: "immigration",
    questionIndex: 0
  },
  {
    id: "faq-formation",
    title: "Comment choisir la formation qui me convient ?",
    category: "faq",
    description: "Guide pour sélectionner la formation adaptée à vos besoins",
    url: "/faq",
    faqCategory: "formation",
    questionIndex: 0
  },
  {
    id: "faq-coaching",
    title: "En quoi consiste un coaching professionnel ?",
    category: "faq",
    description: "Explications sur notre approche du coaching professionnel",
    url: "/faq",
    faqCategory: "coaching",
    questionIndex: 0
  },
  {
    id: "faq-tarifs",
    title: "Quels sont les avantages des packs de formation ?",
    category: "faq",
    description: "Informations sur nos packs de formation",
    url: "/faq",
    faqCategory: "formation",
    questionIndex: 1
  }
];

// Pré-indexer le contenu pour des recherches plus rapides
const searchIndex = searchDatabase.map(item => ({
  ...item,
  searchContent: `${item.title.toLowerCase()} ${item.description.toLowerCase()} ${item.category.toLowerCase()}`
}));

/**
 * Recherche dans les données en fonction de la requête
 * Optimisée pour des résultats instantanés et pertinents
 */
export function searchData(query: string): SearchResult[] {
  const normalizedQuery = query.toLowerCase().trim();
  
  // Si la requête est vide, ne pas renvoyer de résultats
  if (!normalizedQuery) return [];
  
  // Recherche optimisée avec pré-indexation
  return searchIndex
    .filter(item => item.searchContent.includes(normalizedQuery))
    .sort((a, b) => {
      // Priorité 1: Correspondance exacte dans le titre
      const aExactMatch = a.title.toLowerCase() === normalizedQuery;
      const bExactMatch = b.title.toLowerCase() === normalizedQuery;
      
      if (aExactMatch && !bExactMatch) return -1;
      if (!aExactMatch && bExactMatch) return 1;
      
      // Priorité 2: Titre commence par la recherche
      const aStartsWith = a.title.toLowerCase().startsWith(normalizedQuery);
      const bStartsWith = b.title.toLowerCase().startsWith(normalizedQuery);
      
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      
      // Priorité 3: Pages et FAQ avant services et formations
      const categoryOrder = { "page": 1, "faq": 2, "service": 3, "formation": 4 };
      const aOrder = categoryOrder[a.category as keyof typeof categoryOrder] || 99;
      const bOrder = categoryOrder[b.category as keyof typeof categoryOrder] || 99;
      
      if (aOrder < bOrder) return -1;
      if (aOrder > bOrder) return 1;
      
      // Priorité 4: Ordre alphabétique
      return a.title.localeCompare(b.title);
    });
}
