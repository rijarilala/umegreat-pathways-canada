
import type { SearchResult } from "@/components/shared/SearchBar";

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
  
  // Formations
  {
    id: "cv",
    title: "Rédiger un CV efficace",
    category: "formation",
    description: "Apprenez à créer un CV qui attire l'attention des recruteurs",
    url: "/services/formation#cv"
  },
  {
    id: "lettre",
    title: "Lettres de motivation",
    category: "formation",
    description: "Maîtrisez l'art d'écrire des lettres de motivation convaincantes",
    url: "/services/formation#lettre"
  },
  {
    id: "entretien",
    title: "Préparation aux entretiens",
    category: "formation",
    description: "Préparez-vous efficacement pour réussir vos entretiens d'embauche",
    url: "/services/formation#entretien"
  },
  {
    id: "transition",
    title: "Transition vers la vie active",
    category: "formation",
    description: "Facilitez votre passage des études au monde professionnel",
    url: "/services/formation#transition"
  },
  {
    id: "rh",
    title: "Gestion des ressources humaines",
    category: "formation",
    description: "Développez vos compétences en management et gestion RH",
    url: "/services/formation#rh"
  },
  {
    id: "pack-insertion",
    title: "Pack Insertion Pro",
    category: "formation",
    description: "Pack complet pour réussir votre insertion professionnelle",
    url: "/services/formation?tab=packs#insertion"
  },
  {
    id: "pack-rh",
    title: "Pack RH Starter",
    category: "formation",
    description: "Ensemble de formations pour démarrer dans les ressources humaines",
    url: "/services/formation?tab=packs#rh-starter"
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
      
      // Priorité 3: Services avant formations
      if (a.category === "service" && b.category !== "service") return -1;
      if (a.category !== "service" && b.category === "service") return 1;
      
      // Priorité 4: Ordre alphabétique
      return a.title.localeCompare(b.title);
    });
}
